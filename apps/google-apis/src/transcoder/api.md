<h1 id="transcoder-api">Transcoder API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API converts video files into formats suitable for consumer distribution. For more information, see the Transcoder API overview.

Base URLs:

* <a href="https://transcoder.googleapis.com/">https://transcoder.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/transcoder/docs/">External documentation</a>

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

<h1 id="transcoder-api-projects">projects</h1>

## transcoder.projects.locations.jobTemplates.get

<a id="opIdtranscoder.projects.locations.jobTemplates.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Returns the job template data.

<h3 id="transcoderprojectslocationsjobtemplatesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the job template to retrieve. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}`|
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
    "adBreaks": [
      {
        "startTimeOffset": "string"
      }
    ],
    "editList": [
      {
        "endTimeOffset": "string",
        "inputs": [
          "string"
        ],
        "key": "string",
        "startTimeOffset": "string"
      }
    ],
    "elementaryStreams": [
      {
        "audioStream": {
          "bitrateBps": 0,
          "channelCount": 0,
          "channelLayout": [
            "string"
          ],
          "codec": "string",
          "displayName": "string",
          "languageCode": "string",
          "mapping": [
            {
              "atomKey": "string",
              "gainDb": 0,
              "inputChannel": 0,
              "inputKey": "string",
              "inputTrack": 0,
              "outputChannel": 0
            }
          ],
          "sampleRateHertz": 0
        },
        "key": "string",
        "textStream": {
          "codec": "string",
          "displayName": "string",
          "languageCode": "string",
          "mapping": [
            {
              "atomKey": "string",
              "inputKey": "string",
              "inputTrack": 0
            }
          ]
        },
        "videoStream": {
          "h264": {
            "allowOpenGop": true,
            "aqStrength": 0,
            "bFrameCount": 0,
            "bPyramid": true,
            "bitrateBps": 0,
            "crfLevel": 0,
            "enableTwoPass": true,
            "entropyCoder": "string",
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "preset": "string",
            "profile": "string",
            "rateControlMode": "string",
            "tune": "string",
            "vbvFullnessBits": 0,
            "vbvSizeBits": 0,
            "widthPixels": 0
          },
          "h265": {
            "allowOpenGop": true,
            "aqStrength": 0,
            "bFrameCount": 0,
            "bPyramid": true,
            "bitrateBps": 0,
            "crfLevel": 0,
            "enableTwoPass": true,
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "preset": "string",
            "profile": "string",
            "rateControlMode": "string",
            "tune": "string",
            "vbvFullnessBits": 0,
            "vbvSizeBits": 0,
            "widthPixels": 0
          },
          "vp9": {
            "bitrateBps": 0,
            "crfLevel": 0,
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "profile": "string",
            "rateControlMode": "string",
            "widthPixels": 0
          }
        }
      }
    ],
    "inputs": [
      {
        "key": "string",
        "preprocessingConfig": {
          "audio": {
            "highBoost": true,
            "lowBoost": true,
            "lufs": 0
          },
          "color": {
            "brightness": 0,
            "contrast": 0,
            "saturation": 0
          },
          "crop": {
            "bottomPixels": 0,
            "leftPixels": 0,
            "rightPixels": 0,
            "topPixels": 0
          },
          "deblock": {
            "enabled": true,
            "strength": 0
          },
          "deinterlace": {
            "bwdif": {
              "deinterlaceAllFrames": true,
              "mode": "string",
              "parity": "string"
            },
            "yadif": {
              "deinterlaceAllFrames": true,
              "disableSpatialInterlacing": true,
              "mode": "string",
              "parity": "string"
            }
          },
          "denoise": {
            "strength": 0,
            "tune": "string"
          },
          "pad": {
            "bottomPixels": 0,
            "leftPixels": 0,
            "rightPixels": 0,
            "topPixels": 0
          }
        },
        "uri": "string"
      }
    ],
    "manifests": [
      {
        "fileName": "string",
        "muxStreams": [
          "string"
        ],
        "type": "MANIFEST_TYPE_UNSPECIFIED"
      }
    ],
    "muxStreams": [
      {
        "container": "string",
        "elementaryStreams": [
          "string"
        ],
        "fileName": "string",
        "key": "string",
        "segmentSettings": {
          "individualSegments": true,
          "segmentDuration": "string"
        }
      }
    ],
    "output": {
      "uri": "string"
    },
    "overlays": [
      {
        "animations": [
          {
            "animationEnd": {
              "startTimeOffset": "string"
            },
            "animationFade": {
              "endTimeOffset": "string",
              "fadeType": "FADE_TYPE_UNSPECIFIED",
              "startTimeOffset": "string",
              "xy": {
                "x": 0,
                "y": 0
              }
            },
            "animationStatic": {
              "startTimeOffset": "string",
              "xy": {
                "x": 0,
                "y": 0
              }
            }
          }
        ],
        "image": {
          "alpha": 0,
          "resolution": {
            "x": 0,
            "y": 0
          },
          "uri": "string"
        }
      }
    ],
    "pubsubDestination": {
      "topic": "string"
    },
    "spriteSheets": [
      {
        "columnCount": 0,
        "endTimeOffset": "string",
        "filePrefix": "string",
        "format": "string",
        "interval": "string",
        "quality": 0,
        "rowCount": 0,
        "spriteHeightPixels": 0,
        "spriteWidthPixels": 0,
        "startTimeOffset": "string",
        "totalCount": 0
      }
    ]
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

<h3 id="transcoderprojectslocationsjobtemplatesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[JobTemplate](#schemajobtemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## transcoder.projects.locations.jobTemplates.delete

<a id="opIdtranscoder.projects.locations.jobTemplates.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a job template.

<h3 id="transcoderprojectslocationsjobtemplatesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the job template to delete. `projects/{project}/locations/{location}/jobTemplates/{job_template}`|
|allowMissing|query|boolean|false|If set to true, and the job template is not found, the request will succeed but no action will be taken on the server.|
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

<h3 id="transcoderprojectslocationsjobtemplatesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## transcoder.projects.locations.jobTemplates.list

<a id="opIdtranscoder.projects.locations.jobTemplates.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/jobTemplates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/jobTemplates`

Lists job templates in the specified region.

<h3 id="transcoderprojectslocationsjobtemplateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent location from which to retrieve the collection of job templates. Format: `projects/{project}/locations/{location}`|
|filter|query|string|false|The filter expression, following the syntax outlined in https://google.aip.dev/160.|
|orderBy|query|string|false|One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering.|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The `next_page_token` value returned from a previous List request, if any.|
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
  "jobTemplates": [
    {
      "config": {
        "adBreaks": [
          {
            "startTimeOffset": "string"
          }
        ],
        "editList": [
          {
            "endTimeOffset": "string",
            "inputs": [
              "string"
            ],
            "key": "string",
            "startTimeOffset": "string"
          }
        ],
        "elementaryStreams": [
          {
            "audioStream": {
              "bitrateBps": 0,
              "channelCount": 0,
              "channelLayout": [
                "string"
              ],
              "codec": "string",
              "displayName": "string",
              "languageCode": "string",
              "mapping": [
                {
                  "atomKey": "string",
                  "gainDb": 0,
                  "inputChannel": 0,
                  "inputKey": "string",
                  "inputTrack": 0,
                  "outputChannel": 0
                }
              ],
              "sampleRateHertz": 0
            },
            "key": "string",
            "textStream": {
              "codec": "string",
              "displayName": "string",
              "languageCode": "string",
              "mapping": [
                {
                  "atomKey": "string",
                  "inputKey": "string",
                  "inputTrack": 0
                }
              ]
            },
            "videoStream": {
              "h264": {
                "allowOpenGop": true,
                "aqStrength": 0,
                "bFrameCount": 0,
                "bPyramid": true,
                "bitrateBps": 0,
                "crfLevel": 0,
                "enableTwoPass": true,
                "entropyCoder": "string",
                "frameRate": 0,
                "gopDuration": "string",
                "gopFrameCount": 0,
                "heightPixels": 0,
                "pixelFormat": "string",
                "preset": "string",
                "profile": "string",
                "rateControlMode": "string",
                "tune": "string",
                "vbvFullnessBits": 0,
                "vbvSizeBits": 0,
                "widthPixels": 0
              },
              "h265": {
                "allowOpenGop": true,
                "aqStrength": 0,
                "bFrameCount": 0,
                "bPyramid": true,
                "bitrateBps": 0,
                "crfLevel": 0,
                "enableTwoPass": true,
                "frameRate": 0,
                "gopDuration": "string",
                "gopFrameCount": 0,
                "heightPixels": 0,
                "pixelFormat": "string",
                "preset": "string",
                "profile": "string",
                "rateControlMode": "string",
                "tune": "string",
                "vbvFullnessBits": 0,
                "vbvSizeBits": 0,
                "widthPixels": 0
              },
              "vp9": {
                "bitrateBps": 0,
                "crfLevel": 0,
                "frameRate": 0,
                "gopDuration": "string",
                "gopFrameCount": 0,
                "heightPixels": 0,
                "pixelFormat": "string",
                "profile": "string",
                "rateControlMode": "string",
                "widthPixels": 0
              }
            }
          }
        ],
        "inputs": [
          {
            "key": "string",
            "preprocessingConfig": {
              "audio": {
                "highBoost": true,
                "lowBoost": true,
                "lufs": 0
              },
              "color": {
                "brightness": 0,
                "contrast": 0,
                "saturation": 0
              },
              "crop": {
                "bottomPixels": 0,
                "leftPixels": 0,
                "rightPixels": 0,
                "topPixels": 0
              },
              "deblock": {
                "enabled": true,
                "strength": 0
              },
              "deinterlace": {
                "bwdif": {
                  "deinterlaceAllFrames": true,
                  "mode": "string",
                  "parity": "string"
                },
                "yadif": {
                  "deinterlaceAllFrames": true,
                  "disableSpatialInterlacing": true,
                  "mode": "string",
                  "parity": "string"
                }
              },
              "denoise": {
                "strength": 0,
                "tune": "string"
              },
              "pad": {
                "bottomPixels": 0,
                "leftPixels": 0,
                "rightPixels": 0,
                "topPixels": 0
              }
            },
            "uri": "string"
          }
        ],
        "manifests": [
          {
            "fileName": "string",
            "muxStreams": [
              "string"
            ],
            "type": "MANIFEST_TYPE_UNSPECIFIED"
          }
        ],
        "muxStreams": [
          {
            "container": "string",
            "elementaryStreams": [
              "string"
            ],
            "fileName": "string",
            "key": "string",
            "segmentSettings": {
              "individualSegments": true,
              "segmentDuration": "string"
            }
          }
        ],
        "output": {
          "uri": "string"
        },
        "overlays": [
          {
            "animations": [
              {
                "animationEnd": {
                  "startTimeOffset": "string"
                },
                "animationFade": {
                  "endTimeOffset": "string",
                  "fadeType": "FADE_TYPE_UNSPECIFIED",
                  "startTimeOffset": "string",
                  "xy": {
                    "x": 0,
                    "y": 0
                  }
                },
                "animationStatic": {
                  "startTimeOffset": "string",
                  "xy": {
                    "x": 0,
                    "y": 0
                  }
                }
              }
            ],
            "image": {
              "alpha": 0,
              "resolution": {
                "x": 0,
                "y": 0
              },
              "uri": "string"
            }
          }
        ],
        "pubsubDestination": {
          "topic": "string"
        },
        "spriteSheets": [
          {
            "columnCount": 0,
            "endTimeOffset": "string",
            "filePrefix": "string",
            "format": "string",
            "interval": "string",
            "quality": 0,
            "rowCount": 0,
            "spriteHeightPixels": 0,
            "spriteWidthPixels": 0,
            "startTimeOffset": "string",
            "totalCount": 0
          }
        ]
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="transcoderprojectslocationsjobtemplateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListJobTemplatesResponse](#schemalistjobtemplatesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## transcoder.projects.locations.jobTemplates.create

<a id="opIdtranscoder.projects.locations.jobTemplates.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/jobTemplates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {
      "adBreaks": [
        {
          "startTimeOffset": "string"
        }
      ],
      "editList": [
        {
          "endTimeOffset": "string",
          "inputs": [
            "string"
          ],
          "key": "string",
          "startTimeOffset": "string"
        }
      ],
      "elementaryStreams": [
        {
          "audioStream": {
            "bitrateBps": 0,
            "channelCount": 0,
            "channelLayout": [
              "string"
            ],
            "codec": "string",
            "displayName": "string",
            "languageCode": "string",
            "mapping": [
              {
                "atomKey": "string",
                "gainDb": 0,
                "inputChannel": 0,
                "inputKey": "string",
                "inputTrack": 0,
                "outputChannel": 0
              }
            ],
            "sampleRateHertz": 0
          },
          "key": "string",
          "textStream": {
            "codec": "string",
            "displayName": "string",
            "languageCode": "string",
            "mapping": [
              {
                "atomKey": "string",
                "inputKey": "string",
                "inputTrack": 0
              }
            ]
          },
          "videoStream": {
            "h264": {
              "allowOpenGop": true,
              "aqStrength": 0,
              "bFrameCount": 0,
              "bPyramid": true,
              "bitrateBps": 0,
              "crfLevel": 0,
              "enableTwoPass": true,
              "entropyCoder": "string",
              "frameRate": 0,
              "gopDuration": "string",
              "gopFrameCount": 0,
              "heightPixels": 0,
              "pixelFormat": "string",
              "preset": "string",
              "profile": "string",
              "rateControlMode": "string",
              "tune": "string",
              "vbvFullnessBits": 0,
              "vbvSizeBits": 0,
              "widthPixels": 0
            },
            "h265": {
              "allowOpenGop": true,
              "aqStrength": 0,
              "bFrameCount": 0,
              "bPyramid": true,
              "bitrateBps": 0,
              "crfLevel": 0,
              "enableTwoPass": true,
              "frameRate": 0,
              "gopDuration": "string",
              "gopFrameCount": 0,
              "heightPixels": 0,
              "pixelFormat": "string",
              "preset": "string",
              "profile": "string",
              "rateControlMode": "string",
              "tune": "string",
              "vbvFullnessBits": 0,
              "vbvSizeBits": 0,
              "widthPixels": 0
            },
            "vp9": {
              "bitrateBps": 0,
              "crfLevel": 0,
              "frameRate": 0,
              "gopDuration": "string",
              "gopFrameCount": 0,
              "heightPixels": 0,
              "pixelFormat": "string",
              "profile": "string",
              "rateControlMode": "string",
              "widthPixels": 0
            }
          }
        }
      ],
      "inputs": [
        {
          "key": "string",
          "preprocessingConfig": {
            "audio": {
              "highBoost": true,
              "lowBoost": true,
              "lufs": 0
            },
            "color": {
              "brightness": 0,
              "contrast": 0,
              "saturation": 0
            },
            "crop": {
              "bottomPixels": 0,
              "leftPixels": 0,
              "rightPixels": 0,
              "topPixels": 0
            },
            "deblock": {
              "enabled": true,
              "strength": 0
            },
            "deinterlace": {
              "bwdif": {
                "deinterlaceAllFrames": true,
                "mode": "string",
                "parity": "string"
              },
              "yadif": {
                "deinterlaceAllFrames": true,
                "disableSpatialInterlacing": true,
                "mode": "string",
                "parity": "string"
              }
            },
            "denoise": {
              "strength": 0,
              "tune": "string"
            },
            "pad": {
              "bottomPixels": 0,
              "leftPixels": 0,
              "rightPixels": 0,
              "topPixels": 0
            }
          },
          "uri": "string"
        }
      ],
      "manifests": [
        {
          "fileName": "string",
          "muxStreams": [
            "string"
          ],
          "type": "MANIFEST_TYPE_UNSPECIFIED"
        }
      ],
      "muxStreams": [
        {
          "container": "string",
          "elementaryStreams": [
            "string"
          ],
          "fileName": "string",
          "key": "string",
          "segmentSettings": {
            "individualSegments": true,
            "segmentDuration": "string"
          }
        }
      ],
      "output": {
        "uri": "string"
      },
      "overlays": [
        {
          "animations": [
            {
              "animationEnd": {
                "startTimeOffset": "string"
              },
              "animationFade": {
                "endTimeOffset": "string",
                "fadeType": "FADE_TYPE_UNSPECIFIED",
                "startTimeOffset": "string",
                "xy": {
                  "x": 0,
                  "y": 0
                }
              },
              "animationStatic": {
                "startTimeOffset": "string",
                "xy": {
                  "x": 0,
                  "y": 0
                }
              }
            }
          ],
          "image": {
            "alpha": 0,
            "resolution": {
              "x": 0,
              "y": 0
            },
            "uri": "string"
          }
        }
      ],
      "pubsubDestination": {
        "topic": "string"
      },
      "spriteSheets": [
        {
          "columnCount": 0,
          "endTimeOffset": "string",
          "filePrefix": "string",
          "format": "string",
          "interval": "string",
          "quality": 0,
          "rowCount": 0,
          "spriteHeightPixels": 0,
          "spriteWidthPixels": 0,
          "startTimeOffset": "string",
          "totalCount": 0
        }
      ]
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string"
  }'
```

`POST /v1/{parent}/jobTemplates`

Creates a job template in the specified region.

> Body parameter

```json
{
  "config": {
    "adBreaks": [
      {
        "startTimeOffset": "string"
      }
    ],
    "editList": [
      {
        "endTimeOffset": "string",
        "inputs": [
          "string"
        ],
        "key": "string",
        "startTimeOffset": "string"
      }
    ],
    "elementaryStreams": [
      {
        "audioStream": {
          "bitrateBps": 0,
          "channelCount": 0,
          "channelLayout": [
            "string"
          ],
          "codec": "string",
          "displayName": "string",
          "languageCode": "string",
          "mapping": [
            {
              "atomKey": "string",
              "gainDb": 0,
              "inputChannel": 0,
              "inputKey": "string",
              "inputTrack": 0,
              "outputChannel": 0
            }
          ],
          "sampleRateHertz": 0
        },
        "key": "string",
        "textStream": {
          "codec": "string",
          "displayName": "string",
          "languageCode": "string",
          "mapping": [
            {
              "atomKey": "string",
              "inputKey": "string",
              "inputTrack": 0
            }
          ]
        },
        "videoStream": {
          "h264": {
            "allowOpenGop": true,
            "aqStrength": 0,
            "bFrameCount": 0,
            "bPyramid": true,
            "bitrateBps": 0,
            "crfLevel": 0,
            "enableTwoPass": true,
            "entropyCoder": "string",
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "preset": "string",
            "profile": "string",
            "rateControlMode": "string",
            "tune": "string",
            "vbvFullnessBits": 0,
            "vbvSizeBits": 0,
            "widthPixels": 0
          },
          "h265": {
            "allowOpenGop": true,
            "aqStrength": 0,
            "bFrameCount": 0,
            "bPyramid": true,
            "bitrateBps": 0,
            "crfLevel": 0,
            "enableTwoPass": true,
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "preset": "string",
            "profile": "string",
            "rateControlMode": "string",
            "tune": "string",
            "vbvFullnessBits": 0,
            "vbvSizeBits": 0,
            "widthPixels": 0
          },
          "vp9": {
            "bitrateBps": 0,
            "crfLevel": 0,
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "profile": "string",
            "rateControlMode": "string",
            "widthPixels": 0
          }
        }
      }
    ],
    "inputs": [
      {
        "key": "string",
        "preprocessingConfig": {
          "audio": {
            "highBoost": true,
            "lowBoost": true,
            "lufs": 0
          },
          "color": {
            "brightness": 0,
            "contrast": 0,
            "saturation": 0
          },
          "crop": {
            "bottomPixels": 0,
            "leftPixels": 0,
            "rightPixels": 0,
            "topPixels": 0
          },
          "deblock": {
            "enabled": true,
            "strength": 0
          },
          "deinterlace": {
            "bwdif": {
              "deinterlaceAllFrames": true,
              "mode": "string",
              "parity": "string"
            },
            "yadif": {
              "deinterlaceAllFrames": true,
              "disableSpatialInterlacing": true,
              "mode": "string",
              "parity": "string"
            }
          },
          "denoise": {
            "strength": 0,
            "tune": "string"
          },
          "pad": {
            "bottomPixels": 0,
            "leftPixels": 0,
            "rightPixels": 0,
            "topPixels": 0
          }
        },
        "uri": "string"
      }
    ],
    "manifests": [
      {
        "fileName": "string",
        "muxStreams": [
          "string"
        ],
        "type": "MANIFEST_TYPE_UNSPECIFIED"
      }
    ],
    "muxStreams": [
      {
        "container": "string",
        "elementaryStreams": [
          "string"
        ],
        "fileName": "string",
        "key": "string",
        "segmentSettings": {
          "individualSegments": true,
          "segmentDuration": "string"
        }
      }
    ],
    "output": {
      "uri": "string"
    },
    "overlays": [
      {
        "animations": [
          {
            "animationEnd": {
              "startTimeOffset": "string"
            },
            "animationFade": {
              "endTimeOffset": "string",
              "fadeType": "FADE_TYPE_UNSPECIFIED",
              "startTimeOffset": "string",
              "xy": {
                "x": 0,
                "y": 0
              }
            },
            "animationStatic": {
              "startTimeOffset": "string",
              "xy": {
                "x": 0,
                "y": 0
              }
            }
          }
        ],
        "image": {
          "alpha": 0,
          "resolution": {
            "x": 0,
            "y": 0
          },
          "uri": "string"
        }
      }
    ],
    "pubsubDestination": {
      "topic": "string"
    },
    "spriteSheets": [
      {
        "columnCount": 0,
        "endTimeOffset": "string",
        "filePrefix": "string",
        "format": "string",
        "interval": "string",
        "quality": 0,
        "rowCount": 0,
        "spriteHeightPixels": 0,
        "spriteWidthPixels": 0,
        "startTimeOffset": "string",
        "totalCount": 0
      }
    ]
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

<h3 id="transcoderprojectslocationsjobtemplatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent location to create this job template. Format: `projects/{project}/locations/{location}`|
|jobTemplateId|query|string|false|Required. The ID to use for the job template, which will become the final component of the job template's resource name. This value should be 4-63 characters, and valid characters must match the regular expression `a-zA-Z*`.|
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
|body|body|[JobTemplate](#schemajobtemplate)|false|none|
|» config|body|[JobConfig](#schemajobconfig)|false|The configuration for this template.|
|» labels|body|object|false|The labels associated with this job template. You can use these to organize and group your job templates.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|The resource name of the job template. Format: `projects/{project_number}/locations/{location}/jobTemplates/{job_template}`|

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
    "adBreaks": [
      {
        "startTimeOffset": "string"
      }
    ],
    "editList": [
      {
        "endTimeOffset": "string",
        "inputs": [
          "string"
        ],
        "key": "string",
        "startTimeOffset": "string"
      }
    ],
    "elementaryStreams": [
      {
        "audioStream": {
          "bitrateBps": 0,
          "channelCount": 0,
          "channelLayout": [
            "string"
          ],
          "codec": "string",
          "displayName": "string",
          "languageCode": "string",
          "mapping": [
            {
              "atomKey": "string",
              "gainDb": 0,
              "inputChannel": 0,
              "inputKey": "string",
              "inputTrack": 0,
              "outputChannel": 0
            }
          ],
          "sampleRateHertz": 0
        },
        "key": "string",
        "textStream": {
          "codec": "string",
          "displayName": "string",
          "languageCode": "string",
          "mapping": [
            {
              "atomKey": "string",
              "inputKey": "string",
              "inputTrack": 0
            }
          ]
        },
        "videoStream": {
          "h264": {
            "allowOpenGop": true,
            "aqStrength": 0,
            "bFrameCount": 0,
            "bPyramid": true,
            "bitrateBps": 0,
            "crfLevel": 0,
            "enableTwoPass": true,
            "entropyCoder": "string",
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "preset": "string",
            "profile": "string",
            "rateControlMode": "string",
            "tune": "string",
            "vbvFullnessBits": 0,
            "vbvSizeBits": 0,
            "widthPixels": 0
          },
          "h265": {
            "allowOpenGop": true,
            "aqStrength": 0,
            "bFrameCount": 0,
            "bPyramid": true,
            "bitrateBps": 0,
            "crfLevel": 0,
            "enableTwoPass": true,
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "preset": "string",
            "profile": "string",
            "rateControlMode": "string",
            "tune": "string",
            "vbvFullnessBits": 0,
            "vbvSizeBits": 0,
            "widthPixels": 0
          },
          "vp9": {
            "bitrateBps": 0,
            "crfLevel": 0,
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "profile": "string",
            "rateControlMode": "string",
            "widthPixels": 0
          }
        }
      }
    ],
    "inputs": [
      {
        "key": "string",
        "preprocessingConfig": {
          "audio": {
            "highBoost": true,
            "lowBoost": true,
            "lufs": 0
          },
          "color": {
            "brightness": 0,
            "contrast": 0,
            "saturation": 0
          },
          "crop": {
            "bottomPixels": 0,
            "leftPixels": 0,
            "rightPixels": 0,
            "topPixels": 0
          },
          "deblock": {
            "enabled": true,
            "strength": 0
          },
          "deinterlace": {
            "bwdif": {
              "deinterlaceAllFrames": true,
              "mode": "string",
              "parity": "string"
            },
            "yadif": {
              "deinterlaceAllFrames": true,
              "disableSpatialInterlacing": true,
              "mode": "string",
              "parity": "string"
            }
          },
          "denoise": {
            "strength": 0,
            "tune": "string"
          },
          "pad": {
            "bottomPixels": 0,
            "leftPixels": 0,
            "rightPixels": 0,
            "topPixels": 0
          }
        },
        "uri": "string"
      }
    ],
    "manifests": [
      {
        "fileName": "string",
        "muxStreams": [
          "string"
        ],
        "type": "MANIFEST_TYPE_UNSPECIFIED"
      }
    ],
    "muxStreams": [
      {
        "container": "string",
        "elementaryStreams": [
          "string"
        ],
        "fileName": "string",
        "key": "string",
        "segmentSettings": {
          "individualSegments": true,
          "segmentDuration": "string"
        }
      }
    ],
    "output": {
      "uri": "string"
    },
    "overlays": [
      {
        "animations": [
          {
            "animationEnd": {
              "startTimeOffset": "string"
            },
            "animationFade": {
              "endTimeOffset": "string",
              "fadeType": "FADE_TYPE_UNSPECIFIED",
              "startTimeOffset": "string",
              "xy": {
                "x": 0,
                "y": 0
              }
            },
            "animationStatic": {
              "startTimeOffset": "string",
              "xy": {
                "x": 0,
                "y": 0
              }
            }
          }
        ],
        "image": {
          "alpha": 0,
          "resolution": {
            "x": 0,
            "y": 0
          },
          "uri": "string"
        }
      }
    ],
    "pubsubDestination": {
      "topic": "string"
    },
    "spriteSheets": [
      {
        "columnCount": 0,
        "endTimeOffset": "string",
        "filePrefix": "string",
        "format": "string",
        "interval": "string",
        "quality": 0,
        "rowCount": 0,
        "spriteHeightPixels": 0,
        "spriteWidthPixels": 0,
        "startTimeOffset": "string",
        "totalCount": 0
      }
    ]
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

<h3 id="transcoderprojectslocationsjobtemplatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[JobTemplate](#schemajobtemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## transcoder.projects.locations.jobs.list

<a id="opIdtranscoder.projects.locations.jobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/jobs`

Lists jobs in the specified region.

<h3 id="transcoderprojectslocationsjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Format: `projects/{project}/locations/{location}`|
|filter|query|string|false|The filter expression, following the syntax outlined in https://google.aip.dev/160.|
|orderBy|query|string|false|One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering.|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The `next_page_token` value returned from a previous List request, if any.|
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
      "config": {
        "adBreaks": [
          {
            "startTimeOffset": "string"
          }
        ],
        "editList": [
          {
            "endTimeOffset": "string",
            "inputs": [
              "string"
            ],
            "key": "string",
            "startTimeOffset": "string"
          }
        ],
        "elementaryStreams": [
          {
            "audioStream": {
              "bitrateBps": 0,
              "channelCount": 0,
              "channelLayout": [
                "string"
              ],
              "codec": "string",
              "displayName": "string",
              "languageCode": "string",
              "mapping": [
                {
                  "atomKey": "string",
                  "gainDb": 0,
                  "inputChannel": 0,
                  "inputKey": "string",
                  "inputTrack": 0,
                  "outputChannel": 0
                }
              ],
              "sampleRateHertz": 0
            },
            "key": "string",
            "textStream": {
              "codec": "string",
              "displayName": "string",
              "languageCode": "string",
              "mapping": [
                {
                  "atomKey": "string",
                  "inputKey": "string",
                  "inputTrack": 0
                }
              ]
            },
            "videoStream": {
              "h264": {
                "allowOpenGop": true,
                "aqStrength": 0,
                "bFrameCount": 0,
                "bPyramid": true,
                "bitrateBps": 0,
                "crfLevel": 0,
                "enableTwoPass": true,
                "entropyCoder": "string",
                "frameRate": 0,
                "gopDuration": "string",
                "gopFrameCount": 0,
                "heightPixels": 0,
                "pixelFormat": "string",
                "preset": "string",
                "profile": "string",
                "rateControlMode": "string",
                "tune": "string",
                "vbvFullnessBits": 0,
                "vbvSizeBits": 0,
                "widthPixels": 0
              },
              "h265": {
                "allowOpenGop": true,
                "aqStrength": 0,
                "bFrameCount": 0,
                "bPyramid": true,
                "bitrateBps": 0,
                "crfLevel": 0,
                "enableTwoPass": true,
                "frameRate": 0,
                "gopDuration": "string",
                "gopFrameCount": 0,
                "heightPixels": 0,
                "pixelFormat": "string",
                "preset": "string",
                "profile": "string",
                "rateControlMode": "string",
                "tune": "string",
                "vbvFullnessBits": 0,
                "vbvSizeBits": 0,
                "widthPixels": 0
              },
              "vp9": {
                "bitrateBps": 0,
                "crfLevel": 0,
                "frameRate": 0,
                "gopDuration": "string",
                "gopFrameCount": 0,
                "heightPixels": 0,
                "pixelFormat": "string",
                "profile": "string",
                "rateControlMode": "string",
                "widthPixels": 0
              }
            }
          }
        ],
        "inputs": [
          {
            "key": "string",
            "preprocessingConfig": {
              "audio": {
                "highBoost": true,
                "lowBoost": true,
                "lufs": 0
              },
              "color": {
                "brightness": 0,
                "contrast": 0,
                "saturation": 0
              },
              "crop": {
                "bottomPixels": 0,
                "leftPixels": 0,
                "rightPixels": 0,
                "topPixels": 0
              },
              "deblock": {
                "enabled": true,
                "strength": 0
              },
              "deinterlace": {
                "bwdif": {
                  "deinterlaceAllFrames": true,
                  "mode": "string",
                  "parity": "string"
                },
                "yadif": {
                  "deinterlaceAllFrames": true,
                  "disableSpatialInterlacing": true,
                  "mode": "string",
                  "parity": "string"
                }
              },
              "denoise": {
                "strength": 0,
                "tune": "string"
              },
              "pad": {
                "bottomPixels": 0,
                "leftPixels": 0,
                "rightPixels": 0,
                "topPixels": 0
              }
            },
            "uri": "string"
          }
        ],
        "manifests": [
          {
            "fileName": "string",
            "muxStreams": [
              "string"
            ],
            "type": "MANIFEST_TYPE_UNSPECIFIED"
          }
        ],
        "muxStreams": [
          {
            "container": "string",
            "elementaryStreams": [
              "string"
            ],
            "fileName": "string",
            "key": "string",
            "segmentSettings": {
              "individualSegments": true,
              "segmentDuration": "string"
            }
          }
        ],
        "output": {
          "uri": "string"
        },
        "overlays": [
          {
            "animations": [
              {
                "animationEnd": {
                  "startTimeOffset": "string"
                },
                "animationFade": {
                  "endTimeOffset": "string",
                  "fadeType": "FADE_TYPE_UNSPECIFIED",
                  "startTimeOffset": "string",
                  "xy": {
                    "x": 0,
                    "y": 0
                  }
                },
                "animationStatic": {
                  "startTimeOffset": "string",
                  "xy": {
                    "x": 0,
                    "y": 0
                  }
                }
              }
            ],
            "image": {
              "alpha": 0,
              "resolution": {
                "x": 0,
                "y": 0
              },
              "uri": "string"
            }
          }
        ],
        "pubsubDestination": {
          "topic": "string"
        },
        "spriteSheets": [
          {
            "columnCount": 0,
            "endTimeOffset": "string",
            "filePrefix": "string",
            "format": "string",
            "interval": "string",
            "quality": 0,
            "rowCount": 0,
            "spriteHeightPixels": 0,
            "spriteWidthPixels": 0,
            "startTimeOffset": "string",
            "totalCount": 0
          }
        ]
      },
      "createTime": "string",
      "endTime": "string",
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
      "inputUri": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mode": "PROCESSING_MODE_UNSPECIFIED",
      "name": "string",
      "outputUri": "string",
      "startTime": "string",
      "state": "PROCESSING_STATE_UNSPECIFIED",
      "templateId": "string",
      "ttlAfterCompletionDays": 0
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="transcoderprojectslocationsjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListJobsResponse](#schemalistjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## transcoder.projects.locations.jobs.create

<a id="opIdtranscoder.projects.locations.jobs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {
      "adBreaks": [
        {
          "startTimeOffset": "string"
        }
      ],
      "editList": [
        {
          "endTimeOffset": "string",
          "inputs": [
            "string"
          ],
          "key": "string",
          "startTimeOffset": "string"
        }
      ],
      "elementaryStreams": [
        {
          "audioStream": {
            "bitrateBps": 0,
            "channelCount": 0,
            "channelLayout": [
              "string"
            ],
            "codec": "string",
            "displayName": "string",
            "languageCode": "string",
            "mapping": [
              {
                "atomKey": "string",
                "gainDb": 0,
                "inputChannel": 0,
                "inputKey": "string",
                "inputTrack": 0,
                "outputChannel": 0
              }
            ],
            "sampleRateHertz": 0
          },
          "key": "string",
          "textStream": {
            "codec": "string",
            "displayName": "string",
            "languageCode": "string",
            "mapping": [
              {
                "atomKey": "string",
                "inputKey": "string",
                "inputTrack": 0
              }
            ]
          },
          "videoStream": {
            "h264": {
              "allowOpenGop": true,
              "aqStrength": 0,
              "bFrameCount": 0,
              "bPyramid": true,
              "bitrateBps": 0,
              "crfLevel": 0,
              "enableTwoPass": true,
              "entropyCoder": "string",
              "frameRate": 0,
              "gopDuration": "string",
              "gopFrameCount": 0,
              "heightPixels": 0,
              "pixelFormat": "string",
              "preset": "string",
              "profile": "string",
              "rateControlMode": "string",
              "tune": "string",
              "vbvFullnessBits": 0,
              "vbvSizeBits": 0,
              "widthPixels": 0
            },
            "h265": {
              "allowOpenGop": true,
              "aqStrength": 0,
              "bFrameCount": 0,
              "bPyramid": true,
              "bitrateBps": 0,
              "crfLevel": 0,
              "enableTwoPass": true,
              "frameRate": 0,
              "gopDuration": "string",
              "gopFrameCount": 0,
              "heightPixels": 0,
              "pixelFormat": "string",
              "preset": "string",
              "profile": "string",
              "rateControlMode": "string",
              "tune": "string",
              "vbvFullnessBits": 0,
              "vbvSizeBits": 0,
              "widthPixels": 0
            },
            "vp9": {
              "bitrateBps": 0,
              "crfLevel": 0,
              "frameRate": 0,
              "gopDuration": "string",
              "gopFrameCount": 0,
              "heightPixels": 0,
              "pixelFormat": "string",
              "profile": "string",
              "rateControlMode": "string",
              "widthPixels": 0
            }
          }
        }
      ],
      "inputs": [
        {
          "key": "string",
          "preprocessingConfig": {
            "audio": {
              "highBoost": true,
              "lowBoost": true,
              "lufs": 0
            },
            "color": {
              "brightness": 0,
              "contrast": 0,
              "saturation": 0
            },
            "crop": {
              "bottomPixels": 0,
              "leftPixels": 0,
              "rightPixels": 0,
              "topPixels": 0
            },
            "deblock": {
              "enabled": true,
              "strength": 0
            },
            "deinterlace": {
              "bwdif": {
                "deinterlaceAllFrames": true,
                "mode": "string",
                "parity": "string"
              },
              "yadif": {
                "deinterlaceAllFrames": true,
                "disableSpatialInterlacing": true,
                "mode": "string",
                "parity": "string"
              }
            },
            "denoise": {
              "strength": 0,
              "tune": "string"
            },
            "pad": {
              "bottomPixels": 0,
              "leftPixels": 0,
              "rightPixels": 0,
              "topPixels": 0
            }
          },
          "uri": "string"
        }
      ],
      "manifests": [
        {
          "fileName": "string",
          "muxStreams": [
            "string"
          ],
          "type": "MANIFEST_TYPE_UNSPECIFIED"
        }
      ],
      "muxStreams": [
        {
          "container": "string",
          "elementaryStreams": [
            "string"
          ],
          "fileName": "string",
          "key": "string",
          "segmentSettings": {
            "individualSegments": true,
            "segmentDuration": "string"
          }
        }
      ],
      "output": {
        "uri": "string"
      },
      "overlays": [
        {
          "animations": [
            {
              "animationEnd": {
                "startTimeOffset": "string"
              },
              "animationFade": {
                "endTimeOffset": "string",
                "fadeType": "FADE_TYPE_UNSPECIFIED",
                "startTimeOffset": "string",
                "xy": {
                  "x": 0,
                  "y": 0
                }
              },
              "animationStatic": {
                "startTimeOffset": "string",
                "xy": {
                  "x": 0,
                  "y": 0
                }
              }
            }
          ],
          "image": {
            "alpha": 0,
            "resolution": {
              "x": 0,
              "y": 0
            },
            "uri": "string"
          }
        }
      ],
      "pubsubDestination": {
        "topic": "string"
      },
      "spriteSheets": [
        {
          "columnCount": 0,
          "endTimeOffset": "string",
          "filePrefix": "string",
          "format": "string",
          "interval": "string",
          "quality": 0,
          "rowCount": 0,
          "spriteHeightPixels": 0,
          "spriteWidthPixels": 0,
          "startTimeOffset": "string",
          "totalCount": 0
        }
      ]
    },
    "inputUri": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "mode": "PROCESSING_MODE_UNSPECIFIED",
    "name": "string",
    "outputUri": "string",
    "templateId": "string",
    "ttlAfterCompletionDays": 0
  }'
```

`POST /v1/{parent}/jobs`

Creates a job in the specified region.

> Body parameter

```json
{
  "config": {
    "adBreaks": [
      {
        "startTimeOffset": "string"
      }
    ],
    "editList": [
      {
        "endTimeOffset": "string",
        "inputs": [
          "string"
        ],
        "key": "string",
        "startTimeOffset": "string"
      }
    ],
    "elementaryStreams": [
      {
        "audioStream": {
          "bitrateBps": 0,
          "channelCount": 0,
          "channelLayout": [
            "string"
          ],
          "codec": "string",
          "displayName": "string",
          "languageCode": "string",
          "mapping": [
            {
              "atomKey": "string",
              "gainDb": 0,
              "inputChannel": 0,
              "inputKey": "string",
              "inputTrack": 0,
              "outputChannel": 0
            }
          ],
          "sampleRateHertz": 0
        },
        "key": "string",
        "textStream": {
          "codec": "string",
          "displayName": "string",
          "languageCode": "string",
          "mapping": [
            {
              "atomKey": "string",
              "inputKey": "string",
              "inputTrack": 0
            }
          ]
        },
        "videoStream": {
          "h264": {
            "allowOpenGop": true,
            "aqStrength": 0,
            "bFrameCount": 0,
            "bPyramid": true,
            "bitrateBps": 0,
            "crfLevel": 0,
            "enableTwoPass": true,
            "entropyCoder": "string",
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "preset": "string",
            "profile": "string",
            "rateControlMode": "string",
            "tune": "string",
            "vbvFullnessBits": 0,
            "vbvSizeBits": 0,
            "widthPixels": 0
          },
          "h265": {
            "allowOpenGop": true,
            "aqStrength": 0,
            "bFrameCount": 0,
            "bPyramid": true,
            "bitrateBps": 0,
            "crfLevel": 0,
            "enableTwoPass": true,
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "preset": "string",
            "profile": "string",
            "rateControlMode": "string",
            "tune": "string",
            "vbvFullnessBits": 0,
            "vbvSizeBits": 0,
            "widthPixels": 0
          },
          "vp9": {
            "bitrateBps": 0,
            "crfLevel": 0,
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "profile": "string",
            "rateControlMode": "string",
            "widthPixels": 0
          }
        }
      }
    ],
    "inputs": [
      {
        "key": "string",
        "preprocessingConfig": {
          "audio": {
            "highBoost": true,
            "lowBoost": true,
            "lufs": 0
          },
          "color": {
            "brightness": 0,
            "contrast": 0,
            "saturation": 0
          },
          "crop": {
            "bottomPixels": 0,
            "leftPixels": 0,
            "rightPixels": 0,
            "topPixels": 0
          },
          "deblock": {
            "enabled": true,
            "strength": 0
          },
          "deinterlace": {
            "bwdif": {
              "deinterlaceAllFrames": true,
              "mode": "string",
              "parity": "string"
            },
            "yadif": {
              "deinterlaceAllFrames": true,
              "disableSpatialInterlacing": true,
              "mode": "string",
              "parity": "string"
            }
          },
          "denoise": {
            "strength": 0,
            "tune": "string"
          },
          "pad": {
            "bottomPixels": 0,
            "leftPixels": 0,
            "rightPixels": 0,
            "topPixels": 0
          }
        },
        "uri": "string"
      }
    ],
    "manifests": [
      {
        "fileName": "string",
        "muxStreams": [
          "string"
        ],
        "type": "MANIFEST_TYPE_UNSPECIFIED"
      }
    ],
    "muxStreams": [
      {
        "container": "string",
        "elementaryStreams": [
          "string"
        ],
        "fileName": "string",
        "key": "string",
        "segmentSettings": {
          "individualSegments": true,
          "segmentDuration": "string"
        }
      }
    ],
    "output": {
      "uri": "string"
    },
    "overlays": [
      {
        "animations": [
          {
            "animationEnd": {
              "startTimeOffset": "string"
            },
            "animationFade": {
              "endTimeOffset": "string",
              "fadeType": "FADE_TYPE_UNSPECIFIED",
              "startTimeOffset": "string",
              "xy": {
                "x": 0,
                "y": 0
              }
            },
            "animationStatic": {
              "startTimeOffset": "string",
              "xy": {
                "x": 0,
                "y": 0
              }
            }
          }
        ],
        "image": {
          "alpha": 0,
          "resolution": {
            "x": 0,
            "y": 0
          },
          "uri": "string"
        }
      }
    ],
    "pubsubDestination": {
      "topic": "string"
    },
    "spriteSheets": [
      {
        "columnCount": 0,
        "endTimeOffset": "string",
        "filePrefix": "string",
        "format": "string",
        "interval": "string",
        "quality": 0,
        "rowCount": 0,
        "spriteHeightPixels": 0,
        "spriteWidthPixels": 0,
        "startTimeOffset": "string",
        "totalCount": 0
      }
    ]
  },
  "inputUri": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mode": "PROCESSING_MODE_UNSPECIFIED",
  "name": "string",
  "outputUri": "string",
  "templateId": "string",
  "ttlAfterCompletionDays": 0
}
```

<h3 id="transcoderprojectslocationsjobscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent location to create and process this job. Format: `projects/{project}/locations/{location}`|
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
|» config|body|[JobConfig](#schemajobconfig)|false|The configuration for this job.|
|» inputUri|body|string|false|Input only. Specify the `input_uri` to populate empty `uri` fields in each element of `Job.config.inputs` or `JobTemplate.config.inputs` when using template. URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).|
|» labels|body|object|false|The labels associated with this job. You can use these to organize and group your jobs.|
|» » **additionalProperties**|body|string|false|none|
|» mode|body|string|false|The processing mode of the job. The default is `PROCESSING_MODE_INTERACTIVE`.|
|» name|body|string|false|The resource name of the job. Format: `projects/{project_number}/locations/{location}/jobs/{job}`|
|» outputUri|body|string|false|Input only. Specify the `output_uri` to populate an empty `Job.config.output.uri` or `JobTemplate.config.output.uri` when using template. URI for the output file(s). For example, `gs://my-bucket/outputs/`. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).|
|» templateId|body|string|false|Input only. Specify the `template_id` to use for populating `Job.config`. The default is `preset/web-hd`, which is the only supported preset. User defined JobTemplate: `{job_template_id}`|
|» ttlAfterCompletionDays|body|integer(int32)|false|Job time to live value in days, which will be effective after job completion. Job should be deleted automatically after the given TTL. Enter a value between 1 and 90. The default is 30.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» mode|PROCESSING_MODE_UNSPECIFIED|
|» mode|PROCESSING_MODE_INTERACTIVE|
|» mode|PROCESSING_MODE_BATCH|

> Example responses

> 200 Response

```json
{
  "config": {
    "adBreaks": [
      {
        "startTimeOffset": "string"
      }
    ],
    "editList": [
      {
        "endTimeOffset": "string",
        "inputs": [
          "string"
        ],
        "key": "string",
        "startTimeOffset": "string"
      }
    ],
    "elementaryStreams": [
      {
        "audioStream": {
          "bitrateBps": 0,
          "channelCount": 0,
          "channelLayout": [
            "string"
          ],
          "codec": "string",
          "displayName": "string",
          "languageCode": "string",
          "mapping": [
            {
              "atomKey": "string",
              "gainDb": 0,
              "inputChannel": 0,
              "inputKey": "string",
              "inputTrack": 0,
              "outputChannel": 0
            }
          ],
          "sampleRateHertz": 0
        },
        "key": "string",
        "textStream": {
          "codec": "string",
          "displayName": "string",
          "languageCode": "string",
          "mapping": [
            {
              "atomKey": "string",
              "inputKey": "string",
              "inputTrack": 0
            }
          ]
        },
        "videoStream": {
          "h264": {
            "allowOpenGop": true,
            "aqStrength": 0,
            "bFrameCount": 0,
            "bPyramid": true,
            "bitrateBps": 0,
            "crfLevel": 0,
            "enableTwoPass": true,
            "entropyCoder": "string",
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "preset": "string",
            "profile": "string",
            "rateControlMode": "string",
            "tune": "string",
            "vbvFullnessBits": 0,
            "vbvSizeBits": 0,
            "widthPixels": 0
          },
          "h265": {
            "allowOpenGop": true,
            "aqStrength": 0,
            "bFrameCount": 0,
            "bPyramid": true,
            "bitrateBps": 0,
            "crfLevel": 0,
            "enableTwoPass": true,
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "preset": "string",
            "profile": "string",
            "rateControlMode": "string",
            "tune": "string",
            "vbvFullnessBits": 0,
            "vbvSizeBits": 0,
            "widthPixels": 0
          },
          "vp9": {
            "bitrateBps": 0,
            "crfLevel": 0,
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "profile": "string",
            "rateControlMode": "string",
            "widthPixels": 0
          }
        }
      }
    ],
    "inputs": [
      {
        "key": "string",
        "preprocessingConfig": {
          "audio": {
            "highBoost": true,
            "lowBoost": true,
            "lufs": 0
          },
          "color": {
            "brightness": 0,
            "contrast": 0,
            "saturation": 0
          },
          "crop": {
            "bottomPixels": 0,
            "leftPixels": 0,
            "rightPixels": 0,
            "topPixels": 0
          },
          "deblock": {
            "enabled": true,
            "strength": 0
          },
          "deinterlace": {
            "bwdif": {
              "deinterlaceAllFrames": true,
              "mode": "string",
              "parity": "string"
            },
            "yadif": {
              "deinterlaceAllFrames": true,
              "disableSpatialInterlacing": true,
              "mode": "string",
              "parity": "string"
            }
          },
          "denoise": {
            "strength": 0,
            "tune": "string"
          },
          "pad": {
            "bottomPixels": 0,
            "leftPixels": 0,
            "rightPixels": 0,
            "topPixels": 0
          }
        },
        "uri": "string"
      }
    ],
    "manifests": [
      {
        "fileName": "string",
        "muxStreams": [
          "string"
        ],
        "type": "MANIFEST_TYPE_UNSPECIFIED"
      }
    ],
    "muxStreams": [
      {
        "container": "string",
        "elementaryStreams": [
          "string"
        ],
        "fileName": "string",
        "key": "string",
        "segmentSettings": {
          "individualSegments": true,
          "segmentDuration": "string"
        }
      }
    ],
    "output": {
      "uri": "string"
    },
    "overlays": [
      {
        "animations": [
          {
            "animationEnd": {
              "startTimeOffset": "string"
            },
            "animationFade": {
              "endTimeOffset": "string",
              "fadeType": "FADE_TYPE_UNSPECIFIED",
              "startTimeOffset": "string",
              "xy": {
                "x": 0,
                "y": 0
              }
            },
            "animationStatic": {
              "startTimeOffset": "string",
              "xy": {
                "x": 0,
                "y": 0
              }
            }
          }
        ],
        "image": {
          "alpha": 0,
          "resolution": {
            "x": 0,
            "y": 0
          },
          "uri": "string"
        }
      }
    ],
    "pubsubDestination": {
      "topic": "string"
    },
    "spriteSheets": [
      {
        "columnCount": 0,
        "endTimeOffset": "string",
        "filePrefix": "string",
        "format": "string",
        "interval": "string",
        "quality": 0,
        "rowCount": 0,
        "spriteHeightPixels": 0,
        "spriteWidthPixels": 0,
        "startTimeOffset": "string",
        "totalCount": 0
      }
    ]
  },
  "createTime": "string",
  "endTime": "string",
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
  "inputUri": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mode": "PROCESSING_MODE_UNSPECIFIED",
  "name": "string",
  "outputUri": "string",
  "startTime": "string",
  "state": "PROCESSING_STATE_UNSPECIFIED",
  "templateId": "string",
  "ttlAfterCompletionDays": 0
}
```

<h3 id="transcoderprojectslocationsjobscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AdBreak">AdBreak</h2>
<!-- backwards compatibility -->
<a id="schemaadbreak"></a>
<a id="schema_AdBreak"></a>
<a id="tocSadbreak"></a>
<a id="tocsadbreak"></a>

```json
{
  "startTimeOffset": "string"
}
```

Ad break.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startTimeOffset|string(google-duration)|false|none|Start time in seconds for the ad break, relative to the output file timeline. The default is `0s`.|

<h2 id="tocS_Animation">Animation</h2>
<!-- backwards compatibility -->
<a id="schemaanimation"></a>
<a id="schema_Animation"></a>
<a id="tocSanimation"></a>
<a id="tocsanimation"></a>

```json
{
  "animationEnd": {
    "startTimeOffset": "string"
  },
  "animationFade": {
    "endTimeOffset": "string",
    "fadeType": "FADE_TYPE_UNSPECIFIED",
    "startTimeOffset": "string",
    "xy": {
      "x": 0,
      "y": 0
    }
  },
  "animationStatic": {
    "startTimeOffset": "string",
    "xy": {
      "x": 0,
      "y": 0
    }
  }
}
```

Animation types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|animationEnd|[AnimationEnd](#schemaanimationend)|false|none|End previous animation.|
|animationFade|[AnimationFade](#schemaanimationfade)|false|none|Display overlay object with fade animation.|
|animationStatic|[AnimationStatic](#schemaanimationstatic)|false|none|Display static overlay object.|

<h2 id="tocS_AnimationEnd">AnimationEnd</h2>
<!-- backwards compatibility -->
<a id="schemaanimationend"></a>
<a id="schema_AnimationEnd"></a>
<a id="tocSanimationend"></a>
<a id="tocsanimationend"></a>

```json
{
  "startTimeOffset": "string"
}
```

End previous overlay animation from the video. Without AnimationEnd, the overlay object will keep the state of previous animation until the end of the video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startTimeOffset|string(google-duration)|false|none|The time to end overlay object, in seconds. Default: 0|

<h2 id="tocS_AnimationFade">AnimationFade</h2>
<!-- backwards compatibility -->
<a id="schemaanimationfade"></a>
<a id="schema_AnimationFade"></a>
<a id="tocSanimationfade"></a>
<a id="tocsanimationfade"></a>

```json
{
  "endTimeOffset": "string",
  "fadeType": "FADE_TYPE_UNSPECIFIED",
  "startTimeOffset": "string",
  "xy": {
    "x": 0,
    "y": 0
  }
}
```

Display overlay object with fade animation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTimeOffset|string(google-duration)|false|none|The time to end the fade animation, in seconds. Default: `start_time_offset` + 1s|
|fadeType|string|false|none|Required. Type of fade animation: `FADE_IN` or `FADE_OUT`.|
|startTimeOffset|string(google-duration)|false|none|The time to start the fade animation, in seconds. Default: 0|
|xy|[NormalizedCoordinate](#schemanormalizedcoordinate)|false|none|Normalized coordinates based on output video resolution. Valid values: `0.0`–`1.0`. `xy` is the upper-left coordinate of the overlay object. For example, use the x and y coordinates {0,0} to position the top-left corner of the overlay animation in the top-left corner of the output video.|

#### Enumerated Values

|Property|Value|
|---|---|
|fadeType|FADE_TYPE_UNSPECIFIED|
|fadeType|FADE_IN|
|fadeType|FADE_OUT|

<h2 id="tocS_AnimationStatic">AnimationStatic</h2>
<!-- backwards compatibility -->
<a id="schemaanimationstatic"></a>
<a id="schema_AnimationStatic"></a>
<a id="tocSanimationstatic"></a>
<a id="tocsanimationstatic"></a>

```json
{
  "startTimeOffset": "string",
  "xy": {
    "x": 0,
    "y": 0
  }
}
```

Display static overlay object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startTimeOffset|string(google-duration)|false|none|The time to start displaying the overlay object, in seconds. Default: 0|
|xy|[NormalizedCoordinate](#schemanormalizedcoordinate)|false|none|Normalized coordinates based on output video resolution. Valid values: `0.0`–`1.0`. `xy` is the upper-left coordinate of the overlay object. For example, use the x and y coordinates {0,0} to position the top-left corner of the overlay animation in the top-left corner of the output video.|

<h2 id="tocS_Audio">Audio</h2>
<!-- backwards compatibility -->
<a id="schemaaudio"></a>
<a id="schema_Audio"></a>
<a id="tocSaudio"></a>
<a id="tocsaudio"></a>

```json
{
  "highBoost": true,
  "lowBoost": true,
  "lufs": 0
}
```

Audio preprocessing configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|highBoost|boolean|false|none|Enable boosting high frequency components. The default is `false`. **Note:** This field is not supported.|
|lowBoost|boolean|false|none|Enable boosting low frequency components. The default is `false`. **Note:** This field is not supported.|
|lufs|number(double)|false|none|Specify audio loudness normalization in loudness units relative to full scale (LUFS). Enter a value between -24 and 0 (the default), where: * -24 is the Advanced Television Systems Committee (ATSC A/85) standard * -23 is the EU R128 broadcast standard * -19 is the prior standard for online mono audio * -18 is the ReplayGain standard * -16 is the prior standard for stereo audio * -14 is the new online audio standard recommended by Spotify, as well as Amazon Echo * 0 disables normalization|

<h2 id="tocS_AudioMapping">AudioMapping</h2>
<!-- backwards compatibility -->
<a id="schemaaudiomapping"></a>
<a id="schema_AudioMapping"></a>
<a id="tocSaudiomapping"></a>
<a id="tocsaudiomapping"></a>

```json
{
  "atomKey": "string",
  "gainDb": 0,
  "inputChannel": 0,
  "inputKey": "string",
  "inputTrack": 0,
  "outputChannel": 0
}
```

The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|atomKey|string|false|none|Required. The `EditAtom.key` that references the atom with audio inputs in the `Job.edit_list`.|
|gainDb|number(double)|false|none|Audio volume control in dB. Negative values decrease volume, positive values increase. The default is 0.|
|inputChannel|integer(int32)|false|none|Required. The zero-based index of the channel in the input audio stream.|
|inputKey|string|false|none|Required. The `Input.key` that identifies the input file.|
|inputTrack|integer(int32)|false|none|Required. The zero-based index of the track in the input file.|
|outputChannel|integer(int32)|false|none|Required. The zero-based index of the channel in the output audio stream.|

<h2 id="tocS_AudioStream">AudioStream</h2>
<!-- backwards compatibility -->
<a id="schemaaudiostream"></a>
<a id="schema_AudioStream"></a>
<a id="tocSaudiostream"></a>
<a id="tocsaudiostream"></a>

```json
{
  "bitrateBps": 0,
  "channelCount": 0,
  "channelLayout": [
    "string"
  ],
  "codec": "string",
  "displayName": "string",
  "languageCode": "string",
  "mapping": [
    {
      "atomKey": "string",
      "gainDb": 0,
      "inputChannel": 0,
      "inputKey": "string",
      "inputTrack": 0,
      "outputChannel": 0
    }
  ],
  "sampleRateHertz": 0
}
```

Audio stream resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bitrateBps|integer(int32)|false|none|Required. Audio bitrate in bits per second. Must be between 1 and 10,000,000.|
|channelCount|integer(int32)|false|none|Number of audio channels. Must be between 1 and 6. The default is 2.|
|channelLayout|[string]|false|none|A list of channel names specifying layout of the audio channels. This only affects the metadata embedded in the container headers, if supported by the specified format. The default is `["fl", "fr"]`. Supported channel names: - `fl` - Front left channel - `fr` - Front right channel - `sl` - Side left channel - `sr` - Side right channel - `fc` - Front center channel - `lfe` - Low frequency|
|codec|string|false|none|The codec for this audio stream. The default is `aac`. Supported audio codecs: - `aac` - `aac-he` - `aac-he-v2` - `mp3` - `ac3` - `eac3`|
|displayName|string|false|none|The name for this particular audio stream that will be added to the HLS/DASH manifest. Not supported in MP4 files.|
|languageCode|string|false|none|The BCP-47 language code, such as `en-US` or `sr-Latn`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. Not supported in MP4 files.|
|mapping|[[AudioMapping](#schemaaudiomapping)]|false|none|The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.|
|sampleRateHertz|integer(int32)|false|none|The audio sample rate in Hertz. The default is 48000 Hertz.|

<h2 id="tocS_BwdifConfig">BwdifConfig</h2>
<!-- backwards compatibility -->
<a id="schemabwdifconfig"></a>
<a id="schema_BwdifConfig"></a>
<a id="tocSbwdifconfig"></a>
<a id="tocsbwdifconfig"></a>

```json
{
  "deinterlaceAllFrames": true,
  "mode": "string",
  "parity": "string"
}
```

Bob Weaver Deinterlacing Filter Configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deinterlaceAllFrames|boolean|false|none|Deinterlace all frames rather than just the frames identified as interlaced. The default is `false`.|
|mode|string|false|none|Specifies the deinterlacing mode to adopt. The default is `send_frame`. Supported values: - `send_frame`: Output one frame for each frame - `send_field`: Output one frame for each field|
|parity|string|false|none|The picture field parity assumed for the input interlaced video. The default is `auto`. Supported values: - `tff`: Assume the top field is first - `bff`: Assume the bottom field is first - `auto`: Enable automatic detection of field parity|

<h2 id="tocS_Color">Color</h2>
<!-- backwards compatibility -->
<a id="schemacolor"></a>
<a id="schema_Color"></a>
<a id="tocScolor"></a>
<a id="tocscolor"></a>

```json
{
  "brightness": 0,
  "contrast": 0,
  "saturation": 0
}
```

Color preprocessing configuration. **Note:** This configuration is not supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brightness|number(double)|false|none|Control brightness of the video. Enter a value between -1 and 1, where -1 is minimum brightness and 1 is maximum brightness. 0 is no change. The default is 0.|
|contrast|number(double)|false|none|Control black and white contrast of the video. Enter a value between -1 and 1, where -1 is minimum contrast and 1 is maximum contrast. 0 is no change. The default is 0.|
|saturation|number(double)|false|none|Control color saturation of the video. Enter a value between -1 and 1, where -1 is fully desaturated and 1 is maximum saturation. 0 is no change. The default is 0.|

<h2 id="tocS_Crop">Crop</h2>
<!-- backwards compatibility -->
<a id="schemacrop"></a>
<a id="schema_Crop"></a>
<a id="tocScrop"></a>
<a id="tocscrop"></a>

```json
{
  "bottomPixels": 0,
  "leftPixels": 0,
  "rightPixels": 0,
  "topPixels": 0
}
```

Video cropping configuration for the input video. The cropped input video is scaled to match the output resolution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bottomPixels|integer(int32)|false|none|The number of pixels to crop from the bottom. The default is 0.|
|leftPixels|integer(int32)|false|none|The number of pixels to crop from the left. The default is 0.|
|rightPixels|integer(int32)|false|none|The number of pixels to crop from the right. The default is 0.|
|topPixels|integer(int32)|false|none|The number of pixels to crop from the top. The default is 0.|

<h2 id="tocS_Deblock">Deblock</h2>
<!-- backwards compatibility -->
<a id="schemadeblock"></a>
<a id="schema_Deblock"></a>
<a id="tocSdeblock"></a>
<a id="tocsdeblock"></a>

```json
{
  "enabled": true,
  "strength": 0
}
```

Deblock preprocessing configuration. **Note:** This configuration is not supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Enable deblocker. The default is `false`.|
|strength|number(double)|false|none|Set strength of the deblocker. Enter a value between 0 and 1. The higher the value, the stronger the block removal. 0 is no deblocking. The default is 0.|

<h2 id="tocS_Deinterlace">Deinterlace</h2>
<!-- backwards compatibility -->
<a id="schemadeinterlace"></a>
<a id="schema_Deinterlace"></a>
<a id="tocSdeinterlace"></a>
<a id="tocsdeinterlace"></a>

```json
{
  "bwdif": {
    "deinterlaceAllFrames": true,
    "mode": "string",
    "parity": "string"
  },
  "yadif": {
    "deinterlaceAllFrames": true,
    "disableSpatialInterlacing": true,
    "mode": "string",
    "parity": "string"
  }
}
```

Deinterlace configuration for input video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bwdif|[BwdifConfig](#schemabwdifconfig)|false|none|Specifies the Bob Weaver Deinterlacing Filter Configuration.|
|yadif|[YadifConfig](#schemayadifconfig)|false|none|Specifies the Yet Another Deinterlacing Filter Configuration.|

<h2 id="tocS_Denoise">Denoise</h2>
<!-- backwards compatibility -->
<a id="schemadenoise"></a>
<a id="schema_Denoise"></a>
<a id="tocSdenoise"></a>
<a id="tocsdenoise"></a>

```json
{
  "strength": 0,
  "tune": "string"
}
```

Denoise preprocessing configuration. **Note:** This configuration is not supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|strength|number(double)|false|none|Set strength of the denoise. Enter a value between 0 and 1. The higher the value, the smoother the image. 0 is no denoising. The default is 0.|
|tune|string|false|none|Set the denoiser mode. The default is `standard`. Supported denoiser modes: - `standard` - `grain`|

<h2 id="tocS_EditAtom">EditAtom</h2>
<!-- backwards compatibility -->
<a id="schemaeditatom"></a>
<a id="schema_EditAtom"></a>
<a id="tocSeditatom"></a>
<a id="tocseditatom"></a>

```json
{
  "endTimeOffset": "string",
  "inputs": [
    "string"
  ],
  "key": "string",
  "startTimeOffset": "string"
}
```

Edit atom.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTimeOffset|string(google-duration)|false|none|End time in seconds for the atom, relative to the input file timeline. When `end_time_offset` is not specified, the `inputs` are used until the end of the atom.|
|inputs|[string]|false|none|List of `Input.key`s identifying files that should be used in this atom. The listed `inputs` must have the same timeline.|
|key|string|false|none|A unique key for this atom. Must be specified when using advanced mapping.|
|startTimeOffset|string(google-duration)|false|none|Start time in seconds for the atom, relative to the input file timeline. The default is `0s`.|

<h2 id="tocS_ElementaryStream">ElementaryStream</h2>
<!-- backwards compatibility -->
<a id="schemaelementarystream"></a>
<a id="schema_ElementaryStream"></a>
<a id="tocSelementarystream"></a>
<a id="tocselementarystream"></a>

```json
{
  "audioStream": {
    "bitrateBps": 0,
    "channelCount": 0,
    "channelLayout": [
      "string"
    ],
    "codec": "string",
    "displayName": "string",
    "languageCode": "string",
    "mapping": [
      {
        "atomKey": "string",
        "gainDb": 0,
        "inputChannel": 0,
        "inputKey": "string",
        "inputTrack": 0,
        "outputChannel": 0
      }
    ],
    "sampleRateHertz": 0
  },
  "key": "string",
  "textStream": {
    "codec": "string",
    "displayName": "string",
    "languageCode": "string",
    "mapping": [
      {
        "atomKey": "string",
        "inputKey": "string",
        "inputTrack": 0
      }
    ]
  },
  "videoStream": {
    "h264": {
      "allowOpenGop": true,
      "aqStrength": 0,
      "bFrameCount": 0,
      "bPyramid": true,
      "bitrateBps": 0,
      "crfLevel": 0,
      "enableTwoPass": true,
      "entropyCoder": "string",
      "frameRate": 0,
      "gopDuration": "string",
      "gopFrameCount": 0,
      "heightPixels": 0,
      "pixelFormat": "string",
      "preset": "string",
      "profile": "string",
      "rateControlMode": "string",
      "tune": "string",
      "vbvFullnessBits": 0,
      "vbvSizeBits": 0,
      "widthPixels": 0
    },
    "h265": {
      "allowOpenGop": true,
      "aqStrength": 0,
      "bFrameCount": 0,
      "bPyramid": true,
      "bitrateBps": 0,
      "crfLevel": 0,
      "enableTwoPass": true,
      "frameRate": 0,
      "gopDuration": "string",
      "gopFrameCount": 0,
      "heightPixels": 0,
      "pixelFormat": "string",
      "preset": "string",
      "profile": "string",
      "rateControlMode": "string",
      "tune": "string",
      "vbvFullnessBits": 0,
      "vbvSizeBits": 0,
      "widthPixels": 0
    },
    "vp9": {
      "bitrateBps": 0,
      "crfLevel": 0,
      "frameRate": 0,
      "gopDuration": "string",
      "gopFrameCount": 0,
      "heightPixels": 0,
      "pixelFormat": "string",
      "profile": "string",
      "rateControlMode": "string",
      "widthPixels": 0
    }
  }
}
```

Encoding of an input file such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioStream|[AudioStream](#schemaaudiostream)|false|none|Encoding of an audio stream.|
|key|string|false|none|A unique key for this elementary stream.|
|textStream|[TextStream](#schematextstream)|false|none|Encoding of a text stream. For example, closed captions or subtitles.|
|videoStream|[VideoStream](#schemavideostream)|false|none|Encoding of a video stream.|

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

<h2 id="tocS_H264CodecSettings">H264CodecSettings</h2>
<!-- backwards compatibility -->
<a id="schemah264codecsettings"></a>
<a id="schema_H264CodecSettings"></a>
<a id="tocSh264codecsettings"></a>
<a id="tocsh264codecsettings"></a>

```json
{
  "allowOpenGop": true,
  "aqStrength": 0,
  "bFrameCount": 0,
  "bPyramid": true,
  "bitrateBps": 0,
  "crfLevel": 0,
  "enableTwoPass": true,
  "entropyCoder": "string",
  "frameRate": 0,
  "gopDuration": "string",
  "gopFrameCount": 0,
  "heightPixels": 0,
  "pixelFormat": "string",
  "preset": "string",
  "profile": "string",
  "rateControlMode": "string",
  "tune": "string",
  "vbvFullnessBits": 0,
  "vbvSizeBits": 0,
  "widthPixels": 0
}
```

H264 codec settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowOpenGop|boolean|false|none|Specifies whether an open Group of Pictures (GOP) structure should be allowed or not. The default is `false`.|
|aqStrength|number(double)|false|none|Specify the intensity of the adaptive quantizer (AQ). Must be between 0 and 1, where 0 disables the quantizer and 1 maximizes the quantizer. A higher value equals a lower bitrate but smoother image. The default is 0.|
|bFrameCount|integer(int32)|false|none|The number of consecutive B-frames. Must be greater than or equal to zero. Must be less than `VideoStream.gop_frame_count` if set. The default is 0.|
|bPyramid|boolean|false|none|Allow B-pyramid for reference frame selection. This may not be supported on all decoders. The default is `false`.|
|bitrateBps|integer(int32)|false|none|Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value is 800,000,000.|
|crfLevel|integer(int32)|false|none|Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21.|
|enableTwoPass|boolean|false|none|Use two-pass encoding strategy to achieve better video quality. `VideoStream.rate_control_mode` must be `vbr`. The default is `false`.|
|entropyCoder|string|false|none|The entropy coder to use. The default is `cabac`. Supported entropy coders: - `cavlc` - `cabac`|
|frameRate|number(double)|false|none|Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120. Will default to the input frame rate if larger than the input frame rate. The API will generate an output FPS that is divisible by the input FPS, and smaller or equal to the target FPS. See [Calculating frame rate](https://cloud.google.com/transcoder/docs/concepts/frame-rate) for more information.|
|gopDuration|string(google-duration)|false|none|Select the GOP size based on the specified duration. The default is `3s`. Note that `gopDuration` must be less than or equal to [`segmentDuration`](#SegmentSettings), and [`segmentDuration`](#SegmentSettings) must be divisible by `gopDuration`.|
|gopFrameCount|integer(int32)|false|none|Select the GOP size based on the specified frame count. Must be greater than zero.|
|heightPixels|integer(int32)|false|none|The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.|
|pixelFormat|string|false|none|Pixel format to use. The default is `yuv420p`. Supported pixel formats: - `yuv420p` pixel format - `yuv422p` pixel format - `yuv444p` pixel format - `yuv420p10` 10-bit HDR pixel format - `yuv422p10` 10-bit HDR pixel format - `yuv444p10` 10-bit HDR pixel format - `yuv420p12` 12-bit HDR pixel format - `yuv422p12` 12-bit HDR pixel format - `yuv444p12` 12-bit HDR pixel format|
|preset|string|false|none|Enforces the specified codec preset. The default is `veryfast`. The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.264#Preset). Note that certain values for this field may cause the transcoder to override other fields you set in the `H264CodecSettings` message.|
|profile|string|false|none|Enforces the specified codec profile. The following profiles are supported: * `baseline` * `main` * `high` (default) The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.264#Tune). Note that certain values for this field may cause the transcoder to override other fields you set in the `H264CodecSettings` message.|
|rateControlMode|string|false|none|Specify the `rate_control_mode`. The default is `vbr`. Supported rate control modes: - `vbr` - variable bitrate - `crf` - constant rate factor|
|tune|string|false|none|Enforces the specified codec tune. The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.264#Tune). Note that certain values for this field may cause the transcoder to override other fields you set in the `H264CodecSettings` message.|
|vbvFullnessBits|integer(int32)|false|none|Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to 90% of `VideoStream.vbv_size_bits`.|
|vbvSizeBits|integer(int32)|false|none|Size of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to `VideoStream.bitrate_bps`.|
|widthPixels|integer(int32)|false|none|The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.|

<h2 id="tocS_H265CodecSettings">H265CodecSettings</h2>
<!-- backwards compatibility -->
<a id="schemah265codecsettings"></a>
<a id="schema_H265CodecSettings"></a>
<a id="tocSh265codecsettings"></a>
<a id="tocsh265codecsettings"></a>

```json
{
  "allowOpenGop": true,
  "aqStrength": 0,
  "bFrameCount": 0,
  "bPyramid": true,
  "bitrateBps": 0,
  "crfLevel": 0,
  "enableTwoPass": true,
  "frameRate": 0,
  "gopDuration": "string",
  "gopFrameCount": 0,
  "heightPixels": 0,
  "pixelFormat": "string",
  "preset": "string",
  "profile": "string",
  "rateControlMode": "string",
  "tune": "string",
  "vbvFullnessBits": 0,
  "vbvSizeBits": 0,
  "widthPixels": 0
}
```

H265 codec settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowOpenGop|boolean|false|none|Specifies whether an open Group of Pictures (GOP) structure should be allowed or not. The default is `false`.|
|aqStrength|number(double)|false|none|Specify the intensity of the adaptive quantizer (AQ). Must be between 0 and 1, where 0 disables the quantizer and 1 maximizes the quantizer. A higher value equals a lower bitrate but smoother image. The default is 0.|
|bFrameCount|integer(int32)|false|none|The number of consecutive B-frames. Must be greater than or equal to zero. Must be less than `VideoStream.gop_frame_count` if set. The default is 0.|
|bPyramid|boolean|false|none|Allow B-pyramid for reference frame selection. This may not be supported on all decoders. The default is `false`.|
|bitrateBps|integer(int32)|false|none|Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value is 800,000,000.|
|crfLevel|integer(int32)|false|none|Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21.|
|enableTwoPass|boolean|false|none|Use two-pass encoding strategy to achieve better video quality. `VideoStream.rate_control_mode` must be `vbr`. The default is `false`.|
|frameRate|number(double)|false|none|Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120. Will default to the input frame rate if larger than the input frame rate. The API will generate an output FPS that is divisible by the input FPS, and smaller or equal to the target FPS. See [Calculating frame rate](https://cloud.google.com/transcoder/docs/concepts/frame-rate) for more information.|
|gopDuration|string(google-duration)|false|none|Select the GOP size based on the specified duration. The default is `3s`. Note that `gopDuration` must be less than or equal to [`segmentDuration`](#SegmentSettings), and [`segmentDuration`](#SegmentSettings) must be divisible by `gopDuration`.|
|gopFrameCount|integer(int32)|false|none|Select the GOP size based on the specified frame count. Must be greater than zero.|
|heightPixels|integer(int32)|false|none|The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.|
|pixelFormat|string|false|none|Pixel format to use. The default is `yuv420p`. Supported pixel formats: - `yuv420p` pixel format - `yuv422p` pixel format - `yuv444p` pixel format - `yuv420p10` 10-bit HDR pixel format - `yuv422p10` 10-bit HDR pixel format - `yuv444p10` 10-bit HDR pixel format - `yuv420p12` 12-bit HDR pixel format - `yuv422p12` 12-bit HDR pixel format - `yuv444p12` 12-bit HDR pixel format|
|preset|string|false|none|Enforces the specified codec preset. The default is `veryfast`. The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.265). Note that certain values for this field may cause the transcoder to override other fields you set in the `H265CodecSettings` message.|
|profile|string|false|none|Enforces the specified codec profile. The following profiles are supported: * 8-bit profiles * `main` (default) * `main-intra` * `mainstillpicture` * 10-bit profiles * `main10` (default) * `main10-intra` * `main422-10` * `main422-10-intra` * `main444-10` * `main444-10-intra` * 12-bit profiles * `main12` (default) * `main12-intra` * `main422-12` * `main422-12-intra` * `main444-12` * `main444-12-intra` The available options are [FFmpeg-compatible](https://x265.readthedocs.io/). Note that certain values for this field may cause the transcoder to override other fields you set in the `H265CodecSettings` message.|
|rateControlMode|string|false|none|Specify the `rate_control_mode`. The default is `vbr`. Supported rate control modes: - `vbr` - variable bitrate - `crf` - constant rate factor|
|tune|string|false|none|Enforces the specified codec tune. The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.265). Note that certain values for this field may cause the transcoder to override other fields you set in the `H265CodecSettings` message.|
|vbvFullnessBits|integer(int32)|false|none|Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to 90% of `VideoStream.vbv_size_bits`.|
|vbvSizeBits|integer(int32)|false|none|Size of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to `VideoStream.bitrate_bps`.|
|widthPixels|integer(int32)|false|none|The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "alpha": 0,
  "resolution": {
    "x": 0,
    "y": 0
  },
  "uri": "string"
}
```

Overlaid image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alpha|number(double)|false|none|Target image opacity. Valid values are from `1.0` (solid, default) to `0.0` (transparent), exclusive. Set this to a value greater than `0.0`.|
|resolution|[NormalizedCoordinate](#schemanormalizedcoordinate)|false|none|Normalized image resolution, based on output video resolution. Valid values: `0.0`–`1.0`. To respect the original image aspect ratio, set either `x` or `y` to `0.0`. To use the original image resolution, set both `x` and `y` to `0.0`.|
|uri|string|false|none|Required. URI of the image in Cloud Storage. For example, `gs://bucket/inputs/image.png`. Only PNG and JPEG images are supported.|

<h2 id="tocS_Input">Input</h2>
<!-- backwards compatibility -->
<a id="schemainput"></a>
<a id="schema_Input"></a>
<a id="tocSinput"></a>
<a id="tocsinput"></a>

```json
{
  "key": "string",
  "preprocessingConfig": {
    "audio": {
      "highBoost": true,
      "lowBoost": true,
      "lufs": 0
    },
    "color": {
      "brightness": 0,
      "contrast": 0,
      "saturation": 0
    },
    "crop": {
      "bottomPixels": 0,
      "leftPixels": 0,
      "rightPixels": 0,
      "topPixels": 0
    },
    "deblock": {
      "enabled": true,
      "strength": 0
    },
    "deinterlace": {
      "bwdif": {
        "deinterlaceAllFrames": true,
        "mode": "string",
        "parity": "string"
      },
      "yadif": {
        "deinterlaceAllFrames": true,
        "disableSpatialInterlacing": true,
        "mode": "string",
        "parity": "string"
      }
    },
    "denoise": {
      "strength": 0,
      "tune": "string"
    },
    "pad": {
      "bottomPixels": 0,
      "leftPixels": 0,
      "rightPixels": 0,
      "topPixels": 0
    }
  },
  "uri": "string"
}
```

Input asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|A unique key for this input. Must be specified when using advanced mapping and edit lists.|
|preprocessingConfig|[PreprocessingConfig](#schemapreprocessingconfig)|false|none|Preprocessing configurations.|
|uri|string|false|none|URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). If empty, the value is populated from `Job.input_uri`. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).|

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "config": {
    "adBreaks": [
      {
        "startTimeOffset": "string"
      }
    ],
    "editList": [
      {
        "endTimeOffset": "string",
        "inputs": [
          "string"
        ],
        "key": "string",
        "startTimeOffset": "string"
      }
    ],
    "elementaryStreams": [
      {
        "audioStream": {
          "bitrateBps": 0,
          "channelCount": 0,
          "channelLayout": [
            "string"
          ],
          "codec": "string",
          "displayName": "string",
          "languageCode": "string",
          "mapping": [
            {
              "atomKey": "string",
              "gainDb": 0,
              "inputChannel": 0,
              "inputKey": "string",
              "inputTrack": 0,
              "outputChannel": 0
            }
          ],
          "sampleRateHertz": 0
        },
        "key": "string",
        "textStream": {
          "codec": "string",
          "displayName": "string",
          "languageCode": "string",
          "mapping": [
            {
              "atomKey": "string",
              "inputKey": "string",
              "inputTrack": 0
            }
          ]
        },
        "videoStream": {
          "h264": {
            "allowOpenGop": true,
            "aqStrength": 0,
            "bFrameCount": 0,
            "bPyramid": true,
            "bitrateBps": 0,
            "crfLevel": 0,
            "enableTwoPass": true,
            "entropyCoder": "string",
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "preset": "string",
            "profile": "string",
            "rateControlMode": "string",
            "tune": "string",
            "vbvFullnessBits": 0,
            "vbvSizeBits": 0,
            "widthPixels": 0
          },
          "h265": {
            "allowOpenGop": true,
            "aqStrength": 0,
            "bFrameCount": 0,
            "bPyramid": true,
            "bitrateBps": 0,
            "crfLevel": 0,
            "enableTwoPass": true,
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "preset": "string",
            "profile": "string",
            "rateControlMode": "string",
            "tune": "string",
            "vbvFullnessBits": 0,
            "vbvSizeBits": 0,
            "widthPixels": 0
          },
          "vp9": {
            "bitrateBps": 0,
            "crfLevel": 0,
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "profile": "string",
            "rateControlMode": "string",
            "widthPixels": 0
          }
        }
      }
    ],
    "inputs": [
      {
        "key": "string",
        "preprocessingConfig": {
          "audio": {
            "highBoost": true,
            "lowBoost": true,
            "lufs": 0
          },
          "color": {
            "brightness": 0,
            "contrast": 0,
            "saturation": 0
          },
          "crop": {
            "bottomPixels": 0,
            "leftPixels": 0,
            "rightPixels": 0,
            "topPixels": 0
          },
          "deblock": {
            "enabled": true,
            "strength": 0
          },
          "deinterlace": {
            "bwdif": {
              "deinterlaceAllFrames": true,
              "mode": "string",
              "parity": "string"
            },
            "yadif": {
              "deinterlaceAllFrames": true,
              "disableSpatialInterlacing": true,
              "mode": "string",
              "parity": "string"
            }
          },
          "denoise": {
            "strength": 0,
            "tune": "string"
          },
          "pad": {
            "bottomPixels": 0,
            "leftPixels": 0,
            "rightPixels": 0,
            "topPixels": 0
          }
        },
        "uri": "string"
      }
    ],
    "manifests": [
      {
        "fileName": "string",
        "muxStreams": [
          "string"
        ],
        "type": "MANIFEST_TYPE_UNSPECIFIED"
      }
    ],
    "muxStreams": [
      {
        "container": "string",
        "elementaryStreams": [
          "string"
        ],
        "fileName": "string",
        "key": "string",
        "segmentSettings": {
          "individualSegments": true,
          "segmentDuration": "string"
        }
      }
    ],
    "output": {
      "uri": "string"
    },
    "overlays": [
      {
        "animations": [
          {
            "animationEnd": {
              "startTimeOffset": "string"
            },
            "animationFade": {
              "endTimeOffset": "string",
              "fadeType": "FADE_TYPE_UNSPECIFIED",
              "startTimeOffset": "string",
              "xy": {
                "x": 0,
                "y": 0
              }
            },
            "animationStatic": {
              "startTimeOffset": "string",
              "xy": {
                "x": 0,
                "y": 0
              }
            }
          }
        ],
        "image": {
          "alpha": 0,
          "resolution": {
            "x": 0,
            "y": 0
          },
          "uri": "string"
        }
      }
    ],
    "pubsubDestination": {
      "topic": "string"
    },
    "spriteSheets": [
      {
        "columnCount": 0,
        "endTimeOffset": "string",
        "filePrefix": "string",
        "format": "string",
        "interval": "string",
        "quality": 0,
        "rowCount": 0,
        "spriteHeightPixels": 0,
        "spriteWidthPixels": 0,
        "startTimeOffset": "string",
        "totalCount": 0
      }
    ]
  },
  "createTime": "string",
  "endTime": "string",
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
  "inputUri": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mode": "PROCESSING_MODE_UNSPECIFIED",
  "name": "string",
  "outputUri": "string",
  "startTime": "string",
  "state": "PROCESSING_STATE_UNSPECIFIED",
  "templateId": "string",
  "ttlAfterCompletionDays": 0
}
```

Transcoding job resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[JobConfig](#schemajobconfig)|false|none|The configuration for this job.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the job was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the transcoding finished.|
|error|[Status](#schemastatus)|false|none|Output only. An error object that describes the reason for the failure. This property is always present when `state` is `FAILED`.|
|inputUri|string|false|none|Input only. Specify the `input_uri` to populate empty `uri` fields in each element of `Job.config.inputs` or `JobTemplate.config.inputs` when using template. URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).|
|labels|object|false|none|The labels associated with this job. You can use these to organize and group your jobs.|
|mode|string|false|none|The processing mode of the job. The default is `PROCESSING_MODE_INTERACTIVE`.|
|name|string|false|none|The resource name of the job. Format: `projects/{project_number}/locations/{location}/jobs/{job}`|
|outputUri|string|false|none|Input only. Specify the `output_uri` to populate an empty `Job.config.output.uri` or `JobTemplate.config.output.uri` when using template. URI for the output file(s). For example, `gs://my-bucket/outputs/`. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).|
|startTime|string(google-datetime)|false|read-only|Output only. The time the transcoding started.|
|state|string|false|read-only|Output only. The current state of the job.|
|templateId|string|false|none|Input only. Specify the `template_id` to use for populating `Job.config`. The default is `preset/web-hd`, which is the only supported preset. User defined JobTemplate: `{job_template_id}`|
|ttlAfterCompletionDays|integer(int32)|false|none|Job time to live value in days, which will be effective after job completion. Job should be deleted automatically after the given TTL. Enter a value between 1 and 90. The default is 30.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|PROCESSING_MODE_UNSPECIFIED|
|mode|PROCESSING_MODE_INTERACTIVE|
|mode|PROCESSING_MODE_BATCH|
|state|PROCESSING_STATE_UNSPECIFIED|
|state|PENDING|
|state|RUNNING|
|state|SUCCEEDED|
|state|FAILED|

<h2 id="tocS_JobConfig">JobConfig</h2>
<!-- backwards compatibility -->
<a id="schemajobconfig"></a>
<a id="schema_JobConfig"></a>
<a id="tocSjobconfig"></a>
<a id="tocsjobconfig"></a>

```json
{
  "adBreaks": [
    {
      "startTimeOffset": "string"
    }
  ],
  "editList": [
    {
      "endTimeOffset": "string",
      "inputs": [
        "string"
      ],
      "key": "string",
      "startTimeOffset": "string"
    }
  ],
  "elementaryStreams": [
    {
      "audioStream": {
        "bitrateBps": 0,
        "channelCount": 0,
        "channelLayout": [
          "string"
        ],
        "codec": "string",
        "displayName": "string",
        "languageCode": "string",
        "mapping": [
          {
            "atomKey": "string",
            "gainDb": 0,
            "inputChannel": 0,
            "inputKey": "string",
            "inputTrack": 0,
            "outputChannel": 0
          }
        ],
        "sampleRateHertz": 0
      },
      "key": "string",
      "textStream": {
        "codec": "string",
        "displayName": "string",
        "languageCode": "string",
        "mapping": [
          {
            "atomKey": "string",
            "inputKey": "string",
            "inputTrack": 0
          }
        ]
      },
      "videoStream": {
        "h264": {
          "allowOpenGop": true,
          "aqStrength": 0,
          "bFrameCount": 0,
          "bPyramid": true,
          "bitrateBps": 0,
          "crfLevel": 0,
          "enableTwoPass": true,
          "entropyCoder": "string",
          "frameRate": 0,
          "gopDuration": "string",
          "gopFrameCount": 0,
          "heightPixels": 0,
          "pixelFormat": "string",
          "preset": "string",
          "profile": "string",
          "rateControlMode": "string",
          "tune": "string",
          "vbvFullnessBits": 0,
          "vbvSizeBits": 0,
          "widthPixels": 0
        },
        "h265": {
          "allowOpenGop": true,
          "aqStrength": 0,
          "bFrameCount": 0,
          "bPyramid": true,
          "bitrateBps": 0,
          "crfLevel": 0,
          "enableTwoPass": true,
          "frameRate": 0,
          "gopDuration": "string",
          "gopFrameCount": 0,
          "heightPixels": 0,
          "pixelFormat": "string",
          "preset": "string",
          "profile": "string",
          "rateControlMode": "string",
          "tune": "string",
          "vbvFullnessBits": 0,
          "vbvSizeBits": 0,
          "widthPixels": 0
        },
        "vp9": {
          "bitrateBps": 0,
          "crfLevel": 0,
          "frameRate": 0,
          "gopDuration": "string",
          "gopFrameCount": 0,
          "heightPixels": 0,
          "pixelFormat": "string",
          "profile": "string",
          "rateControlMode": "string",
          "widthPixels": 0
        }
      }
    }
  ],
  "inputs": [
    {
      "key": "string",
      "preprocessingConfig": {
        "audio": {
          "highBoost": true,
          "lowBoost": true,
          "lufs": 0
        },
        "color": {
          "brightness": 0,
          "contrast": 0,
          "saturation": 0
        },
        "crop": {
          "bottomPixels": 0,
          "leftPixels": 0,
          "rightPixels": 0,
          "topPixels": 0
        },
        "deblock": {
          "enabled": true,
          "strength": 0
        },
        "deinterlace": {
          "bwdif": {
            "deinterlaceAllFrames": true,
            "mode": "string",
            "parity": "string"
          },
          "yadif": {
            "deinterlaceAllFrames": true,
            "disableSpatialInterlacing": true,
            "mode": "string",
            "parity": "string"
          }
        },
        "denoise": {
          "strength": 0,
          "tune": "string"
        },
        "pad": {
          "bottomPixels": 0,
          "leftPixels": 0,
          "rightPixels": 0,
          "topPixels": 0
        }
      },
      "uri": "string"
    }
  ],
  "manifests": [
    {
      "fileName": "string",
      "muxStreams": [
        "string"
      ],
      "type": "MANIFEST_TYPE_UNSPECIFIED"
    }
  ],
  "muxStreams": [
    {
      "container": "string",
      "elementaryStreams": [
        "string"
      ],
      "fileName": "string",
      "key": "string",
      "segmentSettings": {
        "individualSegments": true,
        "segmentDuration": "string"
      }
    }
  ],
  "output": {
    "uri": "string"
  },
  "overlays": [
    {
      "animations": [
        {
          "animationEnd": {
            "startTimeOffset": "string"
          },
          "animationFade": {
            "endTimeOffset": "string",
            "fadeType": "FADE_TYPE_UNSPECIFIED",
            "startTimeOffset": "string",
            "xy": {
              "x": 0,
              "y": 0
            }
          },
          "animationStatic": {
            "startTimeOffset": "string",
            "xy": {
              "x": 0,
              "y": 0
            }
          }
        }
      ],
      "image": {
        "alpha": 0,
        "resolution": {
          "x": 0,
          "y": 0
        },
        "uri": "string"
      }
    }
  ],
  "pubsubDestination": {
    "topic": "string"
  },
  "spriteSheets": [
    {
      "columnCount": 0,
      "endTimeOffset": "string",
      "filePrefix": "string",
      "format": "string",
      "interval": "string",
      "quality": 0,
      "rowCount": 0,
      "spriteHeightPixels": 0,
      "spriteWidthPixels": 0,
      "startTimeOffset": "string",
      "totalCount": 0
    }
  ]
}
```

Job configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adBreaks|[[AdBreak](#schemaadbreak)]|false|none|List of ad breaks. Specifies where to insert ad break tags in the output manifests.|
|editList|[[EditAtom](#schemaeditatom)]|false|none|List of `Edit atom`s. Defines the ultimate timeline of the resulting file or manifest.|
|elementaryStreams|[[ElementaryStream](#schemaelementarystream)]|false|none|List of elementary streams.|
|inputs|[[Input](#schemainput)]|false|none|List of input assets stored in Cloud Storage.|
|manifests|[[Manifest](#schemamanifest)]|false|none|List of output manifests.|
|muxStreams|[[MuxStream](#schemamuxstream)]|false|none|List of multiplexing settings for output streams.|
|output|[Output](#schemaoutput)|false|none|Output configuration.|
|overlays|[[Overlay](#schemaoverlay)]|false|none|List of overlays on the output video, in descending Z-order.|
|pubsubDestination|[PubsubDestination](#schemapubsubdestination)|false|none|Destination on Pub/Sub.|
|spriteSheets|[[SpriteSheet](#schemaspritesheet)]|false|none|List of output sprite sheets. Spritesheets require at least one VideoStream in the Jobconfig.|

<h2 id="tocS_JobTemplate">JobTemplate</h2>
<!-- backwards compatibility -->
<a id="schemajobtemplate"></a>
<a id="schema_JobTemplate"></a>
<a id="tocSjobtemplate"></a>
<a id="tocsjobtemplate"></a>

```json
{
  "config": {
    "adBreaks": [
      {
        "startTimeOffset": "string"
      }
    ],
    "editList": [
      {
        "endTimeOffset": "string",
        "inputs": [
          "string"
        ],
        "key": "string",
        "startTimeOffset": "string"
      }
    ],
    "elementaryStreams": [
      {
        "audioStream": {
          "bitrateBps": 0,
          "channelCount": 0,
          "channelLayout": [
            "string"
          ],
          "codec": "string",
          "displayName": "string",
          "languageCode": "string",
          "mapping": [
            {
              "atomKey": "string",
              "gainDb": 0,
              "inputChannel": 0,
              "inputKey": "string",
              "inputTrack": 0,
              "outputChannel": 0
            }
          ],
          "sampleRateHertz": 0
        },
        "key": "string",
        "textStream": {
          "codec": "string",
          "displayName": "string",
          "languageCode": "string",
          "mapping": [
            {
              "atomKey": "string",
              "inputKey": "string",
              "inputTrack": 0
            }
          ]
        },
        "videoStream": {
          "h264": {
            "allowOpenGop": true,
            "aqStrength": 0,
            "bFrameCount": 0,
            "bPyramid": true,
            "bitrateBps": 0,
            "crfLevel": 0,
            "enableTwoPass": true,
            "entropyCoder": "string",
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "preset": "string",
            "profile": "string",
            "rateControlMode": "string",
            "tune": "string",
            "vbvFullnessBits": 0,
            "vbvSizeBits": 0,
            "widthPixels": 0
          },
          "h265": {
            "allowOpenGop": true,
            "aqStrength": 0,
            "bFrameCount": 0,
            "bPyramid": true,
            "bitrateBps": 0,
            "crfLevel": 0,
            "enableTwoPass": true,
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "preset": "string",
            "profile": "string",
            "rateControlMode": "string",
            "tune": "string",
            "vbvFullnessBits": 0,
            "vbvSizeBits": 0,
            "widthPixels": 0
          },
          "vp9": {
            "bitrateBps": 0,
            "crfLevel": 0,
            "frameRate": 0,
            "gopDuration": "string",
            "gopFrameCount": 0,
            "heightPixels": 0,
            "pixelFormat": "string",
            "profile": "string",
            "rateControlMode": "string",
            "widthPixels": 0
          }
        }
      }
    ],
    "inputs": [
      {
        "key": "string",
        "preprocessingConfig": {
          "audio": {
            "highBoost": true,
            "lowBoost": true,
            "lufs": 0
          },
          "color": {
            "brightness": 0,
            "contrast": 0,
            "saturation": 0
          },
          "crop": {
            "bottomPixels": 0,
            "leftPixels": 0,
            "rightPixels": 0,
            "topPixels": 0
          },
          "deblock": {
            "enabled": true,
            "strength": 0
          },
          "deinterlace": {
            "bwdif": {
              "deinterlaceAllFrames": true,
              "mode": "string",
              "parity": "string"
            },
            "yadif": {
              "deinterlaceAllFrames": true,
              "disableSpatialInterlacing": true,
              "mode": "string",
              "parity": "string"
            }
          },
          "denoise": {
            "strength": 0,
            "tune": "string"
          },
          "pad": {
            "bottomPixels": 0,
            "leftPixels": 0,
            "rightPixels": 0,
            "topPixels": 0
          }
        },
        "uri": "string"
      }
    ],
    "manifests": [
      {
        "fileName": "string",
        "muxStreams": [
          "string"
        ],
        "type": "MANIFEST_TYPE_UNSPECIFIED"
      }
    ],
    "muxStreams": [
      {
        "container": "string",
        "elementaryStreams": [
          "string"
        ],
        "fileName": "string",
        "key": "string",
        "segmentSettings": {
          "individualSegments": true,
          "segmentDuration": "string"
        }
      }
    ],
    "output": {
      "uri": "string"
    },
    "overlays": [
      {
        "animations": [
          {
            "animationEnd": {
              "startTimeOffset": "string"
            },
            "animationFade": {
              "endTimeOffset": "string",
              "fadeType": "FADE_TYPE_UNSPECIFIED",
              "startTimeOffset": "string",
              "xy": {
                "x": 0,
                "y": 0
              }
            },
            "animationStatic": {
              "startTimeOffset": "string",
              "xy": {
                "x": 0,
                "y": 0
              }
            }
          }
        ],
        "image": {
          "alpha": 0,
          "resolution": {
            "x": 0,
            "y": 0
          },
          "uri": "string"
        }
      }
    ],
    "pubsubDestination": {
      "topic": "string"
    },
    "spriteSheets": [
      {
        "columnCount": 0,
        "endTimeOffset": "string",
        "filePrefix": "string",
        "format": "string",
        "interval": "string",
        "quality": 0,
        "rowCount": 0,
        "spriteHeightPixels": 0,
        "spriteWidthPixels": 0,
        "startTimeOffset": "string",
        "totalCount": 0
      }
    ]
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

Transcoding job template resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[JobConfig](#schemajobconfig)|false|none|The configuration for this template.|
|labels|object|false|none|The labels associated with this job template. You can use these to organize and group your job templates.|
|name|string|false|none|The resource name of the job template. Format: `projects/{project_number}/locations/{location}/jobTemplates/{job_template}`|

<h2 id="tocS_ListJobTemplatesResponse">ListJobTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobtemplatesresponse"></a>
<a id="schema_ListJobTemplatesResponse"></a>
<a id="tocSlistjobtemplatesresponse"></a>
<a id="tocslistjobtemplatesresponse"></a>

```json
{
  "jobTemplates": [
    {
      "config": {
        "adBreaks": [
          {
            "startTimeOffset": "string"
          }
        ],
        "editList": [
          {
            "endTimeOffset": "string",
            "inputs": [
              "string"
            ],
            "key": "string",
            "startTimeOffset": "string"
          }
        ],
        "elementaryStreams": [
          {
            "audioStream": {
              "bitrateBps": 0,
              "channelCount": 0,
              "channelLayout": [
                "string"
              ],
              "codec": "string",
              "displayName": "string",
              "languageCode": "string",
              "mapping": [
                {
                  "atomKey": "string",
                  "gainDb": 0,
                  "inputChannel": 0,
                  "inputKey": "string",
                  "inputTrack": 0,
                  "outputChannel": 0
                }
              ],
              "sampleRateHertz": 0
            },
            "key": "string",
            "textStream": {
              "codec": "string",
              "displayName": "string",
              "languageCode": "string",
              "mapping": [
                {
                  "atomKey": "string",
                  "inputKey": "string",
                  "inputTrack": 0
                }
              ]
            },
            "videoStream": {
              "h264": {
                "allowOpenGop": true,
                "aqStrength": 0,
                "bFrameCount": 0,
                "bPyramid": true,
                "bitrateBps": 0,
                "crfLevel": 0,
                "enableTwoPass": true,
                "entropyCoder": "string",
                "frameRate": 0,
                "gopDuration": "string",
                "gopFrameCount": 0,
                "heightPixels": 0,
                "pixelFormat": "string",
                "preset": "string",
                "profile": "string",
                "rateControlMode": "string",
                "tune": "string",
                "vbvFullnessBits": 0,
                "vbvSizeBits": 0,
                "widthPixels": 0
              },
              "h265": {
                "allowOpenGop": true,
                "aqStrength": 0,
                "bFrameCount": 0,
                "bPyramid": true,
                "bitrateBps": 0,
                "crfLevel": 0,
                "enableTwoPass": true,
                "frameRate": 0,
                "gopDuration": "string",
                "gopFrameCount": 0,
                "heightPixels": 0,
                "pixelFormat": "string",
                "preset": "string",
                "profile": "string",
                "rateControlMode": "string",
                "tune": "string",
                "vbvFullnessBits": 0,
                "vbvSizeBits": 0,
                "widthPixels": 0
              },
              "vp9": {
                "bitrateBps": 0,
                "crfLevel": 0,
                "frameRate": 0,
                "gopDuration": "string",
                "gopFrameCount": 0,
                "heightPixels": 0,
                "pixelFormat": "string",
                "profile": "string",
                "rateControlMode": "string",
                "widthPixels": 0
              }
            }
          }
        ],
        "inputs": [
          {
            "key": "string",
            "preprocessingConfig": {
              "audio": {
                "highBoost": true,
                "lowBoost": true,
                "lufs": 0
              },
              "color": {
                "brightness": 0,
                "contrast": 0,
                "saturation": 0
              },
              "crop": {
                "bottomPixels": 0,
                "leftPixels": 0,
                "rightPixels": 0,
                "topPixels": 0
              },
              "deblock": {
                "enabled": true,
                "strength": 0
              },
              "deinterlace": {
                "bwdif": {
                  "deinterlaceAllFrames": true,
                  "mode": "string",
                  "parity": "string"
                },
                "yadif": {
                  "deinterlaceAllFrames": true,
                  "disableSpatialInterlacing": true,
                  "mode": "string",
                  "parity": "string"
                }
              },
              "denoise": {
                "strength": 0,
                "tune": "string"
              },
              "pad": {
                "bottomPixels": 0,
                "leftPixels": 0,
                "rightPixels": 0,
                "topPixels": 0
              }
            },
            "uri": "string"
          }
        ],
        "manifests": [
          {
            "fileName": "string",
            "muxStreams": [
              "string"
            ],
            "type": "MANIFEST_TYPE_UNSPECIFIED"
          }
        ],
        "muxStreams": [
          {
            "container": "string",
            "elementaryStreams": [
              "string"
            ],
            "fileName": "string",
            "key": "string",
            "segmentSettings": {
              "individualSegments": true,
              "segmentDuration": "string"
            }
          }
        ],
        "output": {
          "uri": "string"
        },
        "overlays": [
          {
            "animations": [
              {
                "animationEnd": {
                  "startTimeOffset": "string"
                },
                "animationFade": {
                  "endTimeOffset": "string",
                  "fadeType": "FADE_TYPE_UNSPECIFIED",
                  "startTimeOffset": "string",
                  "xy": {
                    "x": 0,
                    "y": 0
                  }
                },
                "animationStatic": {
                  "startTimeOffset": "string",
                  "xy": {
                    "x": 0,
                    "y": 0
                  }
                }
              }
            ],
            "image": {
              "alpha": 0,
              "resolution": {
                "x": 0,
                "y": 0
              },
              "uri": "string"
            }
          }
        ],
        "pubsubDestination": {
          "topic": "string"
        },
        "spriteSheets": [
          {
            "columnCount": 0,
            "endTimeOffset": "string",
            "filePrefix": "string",
            "format": "string",
            "interval": "string",
            "quality": 0,
            "rowCount": 0,
            "spriteHeightPixels": 0,
            "spriteWidthPixels": 0,
            "startTimeOffset": "string",
            "totalCount": 0
          }
        ]
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for `TranscoderService.ListJobTemplates`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobTemplates|[[JobTemplate](#schemajobtemplate)]|false|none|List of job templates in the specified region.|
|nextPageToken|string|false|none|The pagination token.|
|unreachable|[string]|false|none|List of regions that could not be reached.|

<h2 id="tocS_ListJobsResponse">ListJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsresponse"></a>
<a id="schema_ListJobsResponse"></a>
<a id="tocSlistjobsresponse"></a>
<a id="tocslistjobsresponse"></a>

```json
{
  "jobs": [
    {
      "config": {
        "adBreaks": [
          {
            "startTimeOffset": "string"
          }
        ],
        "editList": [
          {
            "endTimeOffset": "string",
            "inputs": [
              "string"
            ],
            "key": "string",
            "startTimeOffset": "string"
          }
        ],
        "elementaryStreams": [
          {
            "audioStream": {
              "bitrateBps": 0,
              "channelCount": 0,
              "channelLayout": [
                "string"
              ],
              "codec": "string",
              "displayName": "string",
              "languageCode": "string",
              "mapping": [
                {
                  "atomKey": "string",
                  "gainDb": 0,
                  "inputChannel": 0,
                  "inputKey": "string",
                  "inputTrack": 0,
                  "outputChannel": 0
                }
              ],
              "sampleRateHertz": 0
            },
            "key": "string",
            "textStream": {
              "codec": "string",
              "displayName": "string",
              "languageCode": "string",
              "mapping": [
                {
                  "atomKey": "string",
                  "inputKey": "string",
                  "inputTrack": 0
                }
              ]
            },
            "videoStream": {
              "h264": {
                "allowOpenGop": true,
                "aqStrength": 0,
                "bFrameCount": 0,
                "bPyramid": true,
                "bitrateBps": 0,
                "crfLevel": 0,
                "enableTwoPass": true,
                "entropyCoder": "string",
                "frameRate": 0,
                "gopDuration": "string",
                "gopFrameCount": 0,
                "heightPixels": 0,
                "pixelFormat": "string",
                "preset": "string",
                "profile": "string",
                "rateControlMode": "string",
                "tune": "string",
                "vbvFullnessBits": 0,
                "vbvSizeBits": 0,
                "widthPixels": 0
              },
              "h265": {
                "allowOpenGop": true,
                "aqStrength": 0,
                "bFrameCount": 0,
                "bPyramid": true,
                "bitrateBps": 0,
                "crfLevel": 0,
                "enableTwoPass": true,
                "frameRate": 0,
                "gopDuration": "string",
                "gopFrameCount": 0,
                "heightPixels": 0,
                "pixelFormat": "string",
                "preset": "string",
                "profile": "string",
                "rateControlMode": "string",
                "tune": "string",
                "vbvFullnessBits": 0,
                "vbvSizeBits": 0,
                "widthPixels": 0
              },
              "vp9": {
                "bitrateBps": 0,
                "crfLevel": 0,
                "frameRate": 0,
                "gopDuration": "string",
                "gopFrameCount": 0,
                "heightPixels": 0,
                "pixelFormat": "string",
                "profile": "string",
                "rateControlMode": "string",
                "widthPixels": 0
              }
            }
          }
        ],
        "inputs": [
          {
            "key": "string",
            "preprocessingConfig": {
              "audio": {
                "highBoost": true,
                "lowBoost": true,
                "lufs": 0
              },
              "color": {
                "brightness": 0,
                "contrast": 0,
                "saturation": 0
              },
              "crop": {
                "bottomPixels": 0,
                "leftPixels": 0,
                "rightPixels": 0,
                "topPixels": 0
              },
              "deblock": {
                "enabled": true,
                "strength": 0
              },
              "deinterlace": {
                "bwdif": {
                  "deinterlaceAllFrames": true,
                  "mode": "string",
                  "parity": "string"
                },
                "yadif": {
                  "deinterlaceAllFrames": true,
                  "disableSpatialInterlacing": true,
                  "mode": "string",
                  "parity": "string"
                }
              },
              "denoise": {
                "strength": 0,
                "tune": "string"
              },
              "pad": {
                "bottomPixels": 0,
                "leftPixels": 0,
                "rightPixels": 0,
                "topPixels": 0
              }
            },
            "uri": "string"
          }
        ],
        "manifests": [
          {
            "fileName": "string",
            "muxStreams": [
              "string"
            ],
            "type": "MANIFEST_TYPE_UNSPECIFIED"
          }
        ],
        "muxStreams": [
          {
            "container": "string",
            "elementaryStreams": [
              "string"
            ],
            "fileName": "string",
            "key": "string",
            "segmentSettings": {
              "individualSegments": true,
              "segmentDuration": "string"
            }
          }
        ],
        "output": {
          "uri": "string"
        },
        "overlays": [
          {
            "animations": [
              {
                "animationEnd": {
                  "startTimeOffset": "string"
                },
                "animationFade": {
                  "endTimeOffset": "string",
                  "fadeType": "FADE_TYPE_UNSPECIFIED",
                  "startTimeOffset": "string",
                  "xy": {
                    "x": 0,
                    "y": 0
                  }
                },
                "animationStatic": {
                  "startTimeOffset": "string",
                  "xy": {
                    "x": 0,
                    "y": 0
                  }
                }
              }
            ],
            "image": {
              "alpha": 0,
              "resolution": {
                "x": 0,
                "y": 0
              },
              "uri": "string"
            }
          }
        ],
        "pubsubDestination": {
          "topic": "string"
        },
        "spriteSheets": [
          {
            "columnCount": 0,
            "endTimeOffset": "string",
            "filePrefix": "string",
            "format": "string",
            "interval": "string",
            "quality": 0,
            "rowCount": 0,
            "spriteHeightPixels": 0,
            "spriteWidthPixels": 0,
            "startTimeOffset": "string",
            "totalCount": 0
          }
        ]
      },
      "createTime": "string",
      "endTime": "string",
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
      "inputUri": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mode": "PROCESSING_MODE_UNSPECIFIED",
      "name": "string",
      "outputUri": "string",
      "startTime": "string",
      "state": "PROCESSING_STATE_UNSPECIFIED",
      "templateId": "string",
      "ttlAfterCompletionDays": 0
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response message for `TranscoderService.ListJobs`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|[[Job](#schemajob)]|false|none|List of jobs in the specified region.|
|nextPageToken|string|false|none|The pagination token.|
|unreachable|[string]|false|none|List of regions that could not be reached.|

<h2 id="tocS_Manifest">Manifest</h2>
<!-- backwards compatibility -->
<a id="schemamanifest"></a>
<a id="schema_Manifest"></a>
<a id="tocSmanifest"></a>
<a id="tocsmanifest"></a>

```json
{
  "fileName": "string",
  "muxStreams": [
    "string"
  ],
  "type": "MANIFEST_TYPE_UNSPECIFIED"
}
```

Manifest configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileName|string|false|none|The name of the generated file. The default is `manifest` with the extension suffix corresponding to the `Manifest.type`.|
|muxStreams|[string]|false|none|Required. List of user given `MuxStream.key`s that should appear in this manifest. When `Manifest.type` is `HLS`, a media manifest with name `MuxStream.key` and `.m3u8` extension is generated for each element of the `Manifest.mux_streams`.|
|type|string|false|none|Required. Type of the manifest, can be `HLS` or `DASH`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MANIFEST_TYPE_UNSPECIFIED|
|type|HLS|
|type|DASH|

<h2 id="tocS_MuxStream">MuxStream</h2>
<!-- backwards compatibility -->
<a id="schemamuxstream"></a>
<a id="schema_MuxStream"></a>
<a id="tocSmuxstream"></a>
<a id="tocsmuxstream"></a>

```json
{
  "container": "string",
  "elementaryStreams": [
    "string"
  ],
  "fileName": "string",
  "key": "string",
  "segmentSettings": {
    "individualSegments": true,
    "segmentDuration": "string"
  }
}
```

Multiplexing settings for output stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|container|string|false|none|The container format. The default is `mp4` Supported container formats: - `ts` - `fmp4`- the corresponding file extension is `.m4s` - `mp4` - `vtt` See also: [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats)|
|elementaryStreams|[string]|false|none|List of `ElementaryStream.key`s multiplexed in this stream.|
|fileName|string|false|none|The name of the generated file. The default is `MuxStream.key` with the extension suffix corresponding to the `MuxStream.container`. Individual segments also have an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as `mux_stream0000000123.ts`.|
|key|string|false|none|A unique key for this multiplexed stream. HLS media manifests will be named `MuxStream.key` with the `.m3u8` extension suffix.|
|segmentSettings|[SegmentSettings](#schemasegmentsettings)|false|none|Segment settings for `ts`, `fmp4` and `vtt`.|

<h2 id="tocS_NormalizedCoordinate">NormalizedCoordinate</h2>
<!-- backwards compatibility -->
<a id="schemanormalizedcoordinate"></a>
<a id="schema_NormalizedCoordinate"></a>
<a id="tocSnormalizedcoordinate"></a>
<a id="tocsnormalizedcoordinate"></a>

```json
{
  "x": 0,
  "y": 0
}
```

2D normalized coordinates. Default: `{0.0, 0.0}`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number(double)|false|none|Normalized x coordinate.|
|y|number(double)|false|none|Normalized y coordinate.|

<h2 id="tocS_Output">Output</h2>
<!-- backwards compatibility -->
<a id="schemaoutput"></a>
<a id="schema_Output"></a>
<a id="tocSoutput"></a>
<a id="tocsoutput"></a>

```json
{
  "uri": "string"
}
```

Location of output file(s) in a Cloud Storage bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|URI for the output file(s). For example, `gs://my-bucket/outputs/`. If empty, the value is populated from `Job.output_uri`. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).|

<h2 id="tocS_Overlay">Overlay</h2>
<!-- backwards compatibility -->
<a id="schemaoverlay"></a>
<a id="schema_Overlay"></a>
<a id="tocSoverlay"></a>
<a id="tocsoverlay"></a>

```json
{
  "animations": [
    {
      "animationEnd": {
        "startTimeOffset": "string"
      },
      "animationFade": {
        "endTimeOffset": "string",
        "fadeType": "FADE_TYPE_UNSPECIFIED",
        "startTimeOffset": "string",
        "xy": {
          "x": 0,
          "y": 0
        }
      },
      "animationStatic": {
        "startTimeOffset": "string",
        "xy": {
          "x": 0,
          "y": 0
        }
      }
    }
  ],
  "image": {
    "alpha": 0,
    "resolution": {
      "x": 0,
      "y": 0
    },
    "uri": "string"
  }
}
```

Overlay configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|animations|[[Animation](#schemaanimation)]|false|none|List of Animations. The list should be chronological, without any time overlap.|
|image|[Image](#schemaimage)|false|none|Image overlay.|

<h2 id="tocS_Pad">Pad</h2>
<!-- backwards compatibility -->
<a id="schemapad"></a>
<a id="schema_Pad"></a>
<a id="tocSpad"></a>
<a id="tocspad"></a>

```json
{
  "bottomPixels": 0,
  "leftPixels": 0,
  "rightPixels": 0,
  "topPixels": 0
}
```

Pad filter configuration for the input video. The padded input video is scaled after padding with black to match the output resolution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bottomPixels|integer(int32)|false|none|The number of pixels to add to the bottom. The default is 0.|
|leftPixels|integer(int32)|false|none|The number of pixels to add to the left. The default is 0.|
|rightPixels|integer(int32)|false|none|The number of pixels to add to the right. The default is 0.|
|topPixels|integer(int32)|false|none|The number of pixels to add to the top. The default is 0.|

<h2 id="tocS_PreprocessingConfig">PreprocessingConfig</h2>
<!-- backwards compatibility -->
<a id="schemapreprocessingconfig"></a>
<a id="schema_PreprocessingConfig"></a>
<a id="tocSpreprocessingconfig"></a>
<a id="tocspreprocessingconfig"></a>

```json
{
  "audio": {
    "highBoost": true,
    "lowBoost": true,
    "lufs": 0
  },
  "color": {
    "brightness": 0,
    "contrast": 0,
    "saturation": 0
  },
  "crop": {
    "bottomPixels": 0,
    "leftPixels": 0,
    "rightPixels": 0,
    "topPixels": 0
  },
  "deblock": {
    "enabled": true,
    "strength": 0
  },
  "deinterlace": {
    "bwdif": {
      "deinterlaceAllFrames": true,
      "mode": "string",
      "parity": "string"
    },
    "yadif": {
      "deinterlaceAllFrames": true,
      "disableSpatialInterlacing": true,
      "mode": "string",
      "parity": "string"
    }
  },
  "denoise": {
    "strength": 0,
    "tune": "string"
  },
  "pad": {
    "bottomPixels": 0,
    "leftPixels": 0,
    "rightPixels": 0,
    "topPixels": 0
  }
}
```

Preprocessing configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio|[Audio](#schemaaudio)|false|none|Audio preprocessing configuration.|
|color|[Color](#schemacolor)|false|none|Color preprocessing configuration.|
|crop|[Crop](#schemacrop)|false|none|Specify the video cropping configuration.|
|deblock|[Deblock](#schemadeblock)|false|none|Deblock preprocessing configuration.|
|deinterlace|[Deinterlace](#schemadeinterlace)|false|none|Specify the video deinterlace configuration.|
|denoise|[Denoise](#schemadenoise)|false|none|Denoise preprocessing configuration.|
|pad|[Pad](#schemapad)|false|none|Specify the video pad filter configuration.|

<h2 id="tocS_PubsubDestination">PubsubDestination</h2>
<!-- backwards compatibility -->
<a id="schemapubsubdestination"></a>
<a id="schema_PubsubDestination"></a>
<a id="tocSpubsubdestination"></a>
<a id="tocspubsubdestination"></a>

```json
{
  "topic": "string"
}
```

A Pub/Sub destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|string|false|none|The name of the Pub/Sub topic to publish job completion notification to. For example: `projects/{project}/topics/{topic}`.|

<h2 id="tocS_SegmentSettings">SegmentSettings</h2>
<!-- backwards compatibility -->
<a id="schemasegmentsettings"></a>
<a id="schema_SegmentSettings"></a>
<a id="tocSsegmentsettings"></a>
<a id="tocssegmentsettings"></a>

```json
{
  "individualSegments": true,
  "segmentDuration": "string"
}
```

Segment settings for `ts`, `fmp4` and `vtt`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|individualSegments|boolean|false|none|Required. Create an individual segment file. The default is `false`.|
|segmentDuration|string(google-duration)|false|none|Duration of the segments in seconds. The default is `6.0s`. Note that `segmentDuration` must be greater than or equal to [`gopDuration`](#videostream), and `segmentDuration` must be divisible by [`gopDuration`](#videostream).|

<h2 id="tocS_SpriteSheet">SpriteSheet</h2>
<!-- backwards compatibility -->
<a id="schemaspritesheet"></a>
<a id="schema_SpriteSheet"></a>
<a id="tocSspritesheet"></a>
<a id="tocsspritesheet"></a>

```json
{
  "columnCount": 0,
  "endTimeOffset": "string",
  "filePrefix": "string",
  "format": "string",
  "interval": "string",
  "quality": 0,
  "rowCount": 0,
  "spriteHeightPixels": 0,
  "spriteWidthPixels": 0,
  "startTimeOffset": "string",
  "totalCount": 0
}
```

Sprite sheet configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnCount|integer(int32)|false|none|The maximum number of sprites per row in a sprite sheet. The default is 0, which indicates no maximum limit.|
|endTimeOffset|string(google-duration)|false|none|End time in seconds, relative to the output file timeline. When `end_time_offset` is not specified, the sprites are generated until the end of the output file.|
|filePrefix|string|false|none|Required. File name prefix for the generated sprite sheets. Each sprite sheet has an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as `sprite_sheet0000000123.jpeg`.|
|format|string|false|none|Format type. The default is `jpeg`. Supported formats: - `jpeg`|
|interval|string(google-duration)|false|none|Starting from `0s`, create sprites at regular intervals. Specify the interval value in seconds.|
|quality|integer(int32)|false|none|The quality of the generated sprite sheet. Enter a value between 1 and 100, where 1 is the lowest quality and 100 is the highest quality. The default is 100. A high quality value corresponds to a low image data compression ratio.|
|rowCount|integer(int32)|false|none|The maximum number of rows per sprite sheet. When the sprite sheet is full, a new sprite sheet is created. The default is 0, which indicates no maximum limit.|
|spriteHeightPixels|integer(int32)|false|none|Required. The height of sprite in pixels. Must be an even integer. To preserve the source aspect ratio, set the SpriteSheet.sprite_height_pixels field or the SpriteSheet.sprite_width_pixels field, but not both (the API will automatically calculate the missing field). For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.|
|spriteWidthPixels|integer(int32)|false|none|Required. The width of sprite in pixels. Must be an even integer. To preserve the source aspect ratio, set the SpriteSheet.sprite_width_pixels field or the SpriteSheet.sprite_height_pixels field, but not both (the API will automatically calculate the missing field). For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.|
|startTimeOffset|string(google-duration)|false|none|Start time in seconds, relative to the output file timeline. Determines the first sprite to pick. The default is `0s`.|
|totalCount|integer(int32)|false|none|Total number of sprites. Create the specified number of sprites distributed evenly across the timeline of the output media. The default is 100.|

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

<h2 id="tocS_TextMapping">TextMapping</h2>
<!-- backwards compatibility -->
<a id="schematextmapping"></a>
<a id="schema_TextMapping"></a>
<a id="tocStextmapping"></a>
<a id="tocstextmapping"></a>

```json
{
  "atomKey": "string",
  "inputKey": "string",
  "inputTrack": 0
}
```

The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|atomKey|string|false|none|Required. The `EditAtom.key` that references atom with text inputs in the `Job.edit_list`.|
|inputKey|string|false|none|Required. The `Input.key` that identifies the input file.|
|inputTrack|integer(int32)|false|none|Required. The zero-based index of the track in the input file.|

<h2 id="tocS_TextStream">TextStream</h2>
<!-- backwards compatibility -->
<a id="schematextstream"></a>
<a id="schema_TextStream"></a>
<a id="tocStextstream"></a>
<a id="tocstextstream"></a>

```json
{
  "codec": "string",
  "displayName": "string",
  "languageCode": "string",
  "mapping": [
    {
      "atomKey": "string",
      "inputKey": "string",
      "inputTrack": 0
    }
  ]
}
```

Encoding of a text stream. For example, closed captions or subtitles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codec|string|false|none|The codec for this text stream. The default is `webvtt`. Supported text codecs: - `srt` - `ttml` - `cea608` - `cea708` - `webvtt`|
|displayName|string|false|none|The name for this particular text stream that will be added to the HLS/DASH manifest. Not supported in MP4 files.|
|languageCode|string|false|none|The BCP-47 language code, such as `en-US` or `sr-Latn`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. Not supported in MP4 files.|
|mapping|[[TextMapping](#schematextmapping)]|false|none|The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.|

<h2 id="tocS_VideoStream">VideoStream</h2>
<!-- backwards compatibility -->
<a id="schemavideostream"></a>
<a id="schema_VideoStream"></a>
<a id="tocSvideostream"></a>
<a id="tocsvideostream"></a>

```json
{
  "h264": {
    "allowOpenGop": true,
    "aqStrength": 0,
    "bFrameCount": 0,
    "bPyramid": true,
    "bitrateBps": 0,
    "crfLevel": 0,
    "enableTwoPass": true,
    "entropyCoder": "string",
    "frameRate": 0,
    "gopDuration": "string",
    "gopFrameCount": 0,
    "heightPixels": 0,
    "pixelFormat": "string",
    "preset": "string",
    "profile": "string",
    "rateControlMode": "string",
    "tune": "string",
    "vbvFullnessBits": 0,
    "vbvSizeBits": 0,
    "widthPixels": 0
  },
  "h265": {
    "allowOpenGop": true,
    "aqStrength": 0,
    "bFrameCount": 0,
    "bPyramid": true,
    "bitrateBps": 0,
    "crfLevel": 0,
    "enableTwoPass": true,
    "frameRate": 0,
    "gopDuration": "string",
    "gopFrameCount": 0,
    "heightPixels": 0,
    "pixelFormat": "string",
    "preset": "string",
    "profile": "string",
    "rateControlMode": "string",
    "tune": "string",
    "vbvFullnessBits": 0,
    "vbvSizeBits": 0,
    "widthPixels": 0
  },
  "vp9": {
    "bitrateBps": 0,
    "crfLevel": 0,
    "frameRate": 0,
    "gopDuration": "string",
    "gopFrameCount": 0,
    "heightPixels": 0,
    "pixelFormat": "string",
    "profile": "string",
    "rateControlMode": "string",
    "widthPixels": 0
  }
}
```

Video stream resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|h264|[H264CodecSettings](#schemah264codecsettings)|false|none|H264 codec settings.|
|h265|[H265CodecSettings](#schemah265codecsettings)|false|none|H265 codec settings.|
|vp9|[Vp9CodecSettings](#schemavp9codecsettings)|false|none|VP9 codec settings.|

<h2 id="tocS_Vp9CodecSettings">Vp9CodecSettings</h2>
<!-- backwards compatibility -->
<a id="schemavp9codecsettings"></a>
<a id="schema_Vp9CodecSettings"></a>
<a id="tocSvp9codecsettings"></a>
<a id="tocsvp9codecsettings"></a>

```json
{
  "bitrateBps": 0,
  "crfLevel": 0,
  "frameRate": 0,
  "gopDuration": "string",
  "gopFrameCount": 0,
  "heightPixels": 0,
  "pixelFormat": "string",
  "profile": "string",
  "rateControlMode": "string",
  "widthPixels": 0
}
```

VP9 codec settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bitrateBps|integer(int32)|false|none|Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value is 480,000,000.|
|crfLevel|integer(int32)|false|none|Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21. **Note:** This field is not supported.|
|frameRate|number(double)|false|none|Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120. Will default to the input frame rate if larger than the input frame rate. The API will generate an output FPS that is divisible by the input FPS, and smaller or equal to the target FPS. See [Calculating frame rate](https://cloud.google.com/transcoder/docs/concepts/frame-rate) for more information.|
|gopDuration|string(google-duration)|false|none|Select the GOP size based on the specified duration. The default is `3s`. Note that `gopDuration` must be less than or equal to [`segmentDuration`](#SegmentSettings), and [`segmentDuration`](#SegmentSettings) must be divisible by `gopDuration`.|
|gopFrameCount|integer(int32)|false|none|Select the GOP size based on the specified frame count. Must be greater than zero.|
|heightPixels|integer(int32)|false|none|The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.|
|pixelFormat|string|false|none|Pixel format to use. The default is `yuv420p`. Supported pixel formats: - `yuv420p` pixel format - `yuv422p` pixel format - `yuv444p` pixel format - `yuv420p10` 10-bit HDR pixel format - `yuv422p10` 10-bit HDR pixel format - `yuv444p10` 10-bit HDR pixel format - `yuv420p12` 12-bit HDR pixel format - `yuv422p12` 12-bit HDR pixel format - `yuv444p12` 12-bit HDR pixel format|
|profile|string|false|none|Enforces the specified codec profile. The following profiles are supported: * `profile0` (default) * `profile1` * `profile2` * `profile3` The available options are [WebM-compatible](https://www.webmproject.org/vp9/profiles/). Note that certain values for this field may cause the transcoder to override other fields you set in the `Vp9CodecSettings` message.|
|rateControlMode|string|false|none|Specify the `rate_control_mode`. The default is `vbr`. Supported rate control modes: - `vbr` - variable bitrate|
|widthPixels|integer(int32)|false|none|The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.|

<h2 id="tocS_YadifConfig">YadifConfig</h2>
<!-- backwards compatibility -->
<a id="schemayadifconfig"></a>
<a id="schema_YadifConfig"></a>
<a id="tocSyadifconfig"></a>
<a id="tocsyadifconfig"></a>

```json
{
  "deinterlaceAllFrames": true,
  "disableSpatialInterlacing": true,
  "mode": "string",
  "parity": "string"
}
```

Yet Another Deinterlacing Filter Configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deinterlaceAllFrames|boolean|false|none|Deinterlace all frames rather than just the frames identified as interlaced. The default is `false`.|
|disableSpatialInterlacing|boolean|false|none|Disable spacial interlacing. The default is `false`.|
|mode|string|false|none|Specifies the deinterlacing mode to adopt. The default is `send_frame`. Supported values: - `send_frame`: Output one frame for each frame - `send_field`: Output one frame for each field|
|parity|string|false|none|The picture field parity assumed for the input interlaced video. The default is `auto`. Supported values: - `tff`: Assume the top field is first - `bff`: Assume the bottom field is first - `auto`: Enable automatic detection of field parity|
