<h1 id="computer-vision-client">Computer Vision Client v2.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Computer Vision API provides state-of-the-art algorithms to process images and return information. For example, it can be used to determine if an image contains mature content, or it can be used to find all the faces in an image.  It also has other features like estimating dominant and accent colors, categorizing the content of images, and describing an image with complete English sentences.  Additionally, it can also intelligently generate images thumbnails for displaying large images effectively.

Base URLs:

* <a href="https://westcentralus.api.cognitive.microsoft.com/vision/v2.1">https://westcentralus.api.cognitive.microsoft.com/vision/v2.1</a>

* <a href="none/vision/v2.1">none/vision/v2.1</a>

# Authentication

* API Key (apim_key)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

<h1 id="computer-vision-client-default">Default</h1>

## BatchReadFile

<a id="opIdBatchReadFile"></a>

> Code samples

```bash
curl https://example.com/read/core/asyncBatchAnalyze \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}" \
  -d '{
    "url": "string"
  }'
```

`POST /read/core/asyncBatchAnalyze`

Use this interface to get the result of a Read operation, employing the state-of-the-art Optical Character Recognition (OCR) algorithms optimized for text-heavy documents. When you use the Read File interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your 'GetReadOperationResult' operation to access OCR results.​

> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="batchreadfile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImageUrl](#schemaimageurl)|true|A JSON document with a URL pointing to the image that is to be analyzed.|
|» url|body|string|true|Publicly reachable URL of an image.|

> Example responses

> default Response

```json
{
  "code": "InvalidImageFormat",
  "message": "string",
  "requestId": "string"
}
```

<h3 id="batchreadfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The service has accepted the request and will start processing later.|None|
|default|Default|Error response.|[ComputerVisionError](#schemacomputervisionerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|Operation-Location|string||URL to query for status of the operation. The operation ID will expire in 48 hours. |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## GetReadOperationResult

<a id="opIdGetReadOperationResult"></a>

> Code samples

```bash
curl https://example.com/read/operations/e56ffa6e-1ee4-4042-bc07-993db706c95f \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /read/operations/{operationId}`

This interface is used for getting OCR results of Read operation. The URL to this interface should be retrieved from 'Operation-Location' field returned from Batch Read File interface.

<h3 id="getreadoperationresult-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operationId|path|string|true|Id of read operation returned in the response of the 'Batch Read File' interface.|

> Example responses

> 200 Response

```json
{
  "recognitionResults": [
    {
      "clockwiseOrientation": 349.59,
      "height": 400,
      "lines": [
        {
          "boundingBox": [
            202,
            618,
            2047,
            643,
            2046,
            840,
            200,
            813
          ],
          "text": "Our greatest glory is not",
          "words": [
            {
              "boundingBox": [
                204,
                627,
                481,
                628,
                481,
                830,
                204,
                829
              ],
              "text": "Our"
            },
            {
              "boundingBox": [
                519,
                628,
                1057,
                630,
                1057,
                832,
                518,
                830
              ],
              "text": "greatest"
            },
            {
              "boundingBox": [
                1114,
                630,
                1549,
                631,
                1548,
                833,
                1114,
                832
              ],
              "text": "glory"
            },
            {
              "boundingBox": [
                1586,
                631,
                1785,
                632,
                1784,
                834,
                1586,
                833
              ],
              "text": "is"
            },
            {
              "boundingBox": [
                1822,
                632,
                2115,
                633,
                2115,
                835,
                1822,
                834
              ],
              "text": "not"
            }
          ]
        },
        {
          "boundingBox": [
            420,
            1273,
            2954,
            1250,
            2958,
            1488,
            422,
            1511
          ],
          "text": "but in rising every time we fall",
          "words": [
            {
              "boundingBox": [
                423,
                1269,
                634,
                1268,
                635,
                1507,
                424,
                1508
              ],
              "text": "but"
            },
            {
              "boundingBox": [
                667,
                1268,
                808,
                1268,
                809,
                1506,
                668,
                1507
              ],
              "text": "in"
            },
            {
              "boundingBox": [
                874,
                1267,
                1289,
                1265,
                1290,
                1504,
                875,
                1506
              ],
              "text": "rising"
            },
            {
              "boundingBox": [
                1331,
                1265,
                1771,
                1263,
                1772,
                1502,
                1332,
                1504
              ],
              "text": "every"
            },
            {
              "boundingBox": [
                1812,
                1263,
                2178,
                1261,
                2179,
                1500,
                1813,
                1502
              ],
              "text": "time"
            },
            {
              "boundingBox": [
                2219,
                1261,
                2510,
                1260,
                2511,
                1498,
                2220,
                1500
              ],
              "text": "we"
            },
            {
              "boundingBox": [
                2551,
                1260,
                3016,
                1258,
                3017,
                1496,
                2552,
                1498
              ],
              "text": "fall"
            }
          ]
        }
      ],
      "page": 1,
      "unit": "pixel",
      "width": 600
    },
    {
      "clockwiseOrientation": 1.32,
      "height": 400,
      "lines": [
        {
          "boundingBox": [
            1612,
            903,
            2744,
            935,
            2738,
            1139,
            1607,
            1107
          ],
          "text": "in never failing ,",
          "words": [
            {
              "boundingBox": [
                1611,
                934,
                1707,
                933,
                1708,
                1147,
                1613,
                1147
              ],
              "text": "in"
            },
            {
              "boundingBox": [
                1753,
                933,
                2132,
                930,
                2133,
                1144,
                1754,
                1146
              ],
              "text": "never"
            },
            {
              "boundingBox": [
                2162,
                930,
                2673,
                927,
                2674,
                1140,
                2164,
                1144
              ],
              "text": "failing"
            },
            {
              "boundingBox": [
                2703,
                926,
                2788,
                926,
                2790,
                1139,
                2705,
                1140
              ],
              "confidence": "Low",
              "text": ","
            }
          ]
        }
      ],
      "page": 2,
      "unit": "pixel",
      "width": 600
    }
  ],
  "status": "Succeeded"
}
```

> default Response

```json
{
  "code": "InvalidImageFormat",
  "message": "string",
  "requestId": "string"
}
```

<h3 id="getreadoperationresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the read operation status.|[ReadOperationResult](#schemareadoperationresult)|
|default|Default|Error response.|[ComputerVisionError](#schemacomputervisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## RecognizeText

<a id="opIdRecognizeText"></a>

> Code samples

```bash
curl 'https://example.com/recognizeText?mode=Handwritten' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}" \
  -d '{
    "url": "string"
  }'
```

`POST /recognizeText`

Recognize Text operation. When you use the Recognize Text interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your Get Recognize Text Operation Result operation.

> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="recognizetext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mode|query|string|true|Type of text to recognize.|
|body|body|[ImageUrl](#schemaimageurl)|true|A JSON document with a URL pointing to the image that is to be analyzed.|
|» url|body|string|true|Publicly reachable URL of an image.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|Handwritten|
|mode|Printed|

> Example responses

> default Response

```json
{
  "code": "InvalidImageFormat",
  "message": "string",
  "requestId": "string"
}
```

<h3 id="recognizetext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The service has accepted the request and will start processing later. It will return Accepted immediately and include an 'Operation-Location' header. Client side should further query the operation status using the URL specified in this header. The operation ID will expire in 48 hours.|None|
|default|Default|Error response.|[ComputerVisionError](#schemacomputervisionerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|Operation-Location|string||URL to query for status of the operation. The operation ID will expire in 48 hours. |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## GetTextOperationResult

<a id="opIdGetTextOperationResult"></a>

> Code samples

```bash
curl https://example.com/textOperations/49a36324-fc4b-4387-aa06-090cfbf0064f \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /textOperations/{operationId}`

This interface is used for getting text operation result. The URL to this interface should be retrieved from 'Operation-Location' field returned from Recognize Text interface.

<h3 id="gettextoperationresult-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operationId|path|string|true|Id of the text operation returned in the response of the 'Recognize Text'|

> Example responses

> 200 Response

```json
{
  "recognitionResult": {
    "lines": [
      {
        "boundingBox": [
          202,
          618,
          2047,
          643,
          2046,
          840,
          200,
          813
        ],
        "text": "Our greatest glory is not",
        "words": [
          {
            "boundingBox": [
              204,
              627,
              481,
              628,
              481,
              830,
              204,
              829
            ],
            "text": "Our"
          },
          {
            "boundingBox": [
              519,
              628,
              1057,
              630,
              1057,
              832,
              518,
              830
            ],
            "text": "greatest"
          },
          {
            "boundingBox": [
              1114,
              630,
              1549,
              631,
              1548,
              833,
              1114,
              832
            ],
            "text": "glory"
          },
          {
            "boundingBox": [
              1586,
              631,
              1785,
              632,
              1784,
              834,
              1586,
              833
            ],
            "text": "is"
          },
          {
            "boundingBox": [
              1822,
              632,
              2115,
              633,
              2115,
              835,
              1822,
              834
            ],
            "text": "not"
          }
        ]
      },
      {
        "boundingBox": [
          420,
          1273,
          2954,
          1250,
          2958,
          1488,
          422,
          1511
        ],
        "text": "but in rising every time we fall",
        "words": [
          {
            "boundingBox": [
              423,
              1269,
              634,
              1268,
              635,
              1507,
              424,
              1508
            ],
            "text": "but"
          },
          {
            "boundingBox": [
              667,
              1268,
              808,
              1268,
              809,
              1506,
              668,
              1507
            ],
            "text": "in"
          },
          {
            "boundingBox": [
              874,
              1267,
              1289,
              1265,
              1290,
              1504,
              875,
              1506
            ],
            "text": "rising"
          },
          {
            "boundingBox": [
              1331,
              1265,
              1771,
              1263,
              1772,
              1502,
              1332,
              1504
            ],
            "text": "every"
          },
          {
            "boundingBox": [
              1812,
              1263,
              2178,
              1261,
              2179,
              1500,
              1813,
              1502
            ],
            "text": "time"
          },
          {
            "boundingBox": [
              2219,
              1261,
              2510,
              1260,
              2511,
              1498,
              2220,
              1500
            ],
            "text": "we"
          },
          {
            "boundingBox": [
              2551,
              1260,
              3016,
              1258,
              3017,
              1496,
              2552,
              1498
            ],
            "text": "fall"
          }
        ]
      },
      {
        "boundingBox": [
          1612,
          903,
          2744,
          935,
          2738,
          1139,
          1607,
          1107
        ],
        "text": "in never failing ,",
        "words": [
          {
            "boundingBox": [
              1611,
              934,
              1707,
              933,
              1708,
              1147,
              1613,
              1147
            ],
            "text": "in"
          },
          {
            "boundingBox": [
              1753,
              933,
              2132,
              930,
              2133,
              1144,
              1754,
              1146
            ],
            "text": "never"
          },
          {
            "boundingBox": [
              2162,
              930,
              2673,
              927,
              2674,
              1140,
              2164,
              1144
            ],
            "text": "failing"
          },
          {
            "boundingBox": [
              2703,
              926,
              2788,
              926,
              2790,
              1139,
              2705,
              1140
            ],
            "text": ","
          }
        ]
      }
    ]
  },
  "status": "Succeeded"
}
```

> default Response

```json
{
  "code": "InvalidImageFormat",
  "message": "string",
  "requestId": "string"
}
```

<h3 id="gettextoperationresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the operation status.|[TextOperationResult](#schematextoperationresult)|
|default|Default|Error response.|[ComputerVisionError](#schemacomputervisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

# Schemas

<h2 id="tocS_BoundingBox">BoundingBox</h2>
<!-- backwards compatibility -->
<a id="schemaboundingbox"></a>
<a id="schema_BoundingBox"></a>
<a id="tocSboundingbox"></a>
<a id="tocsboundingbox"></a>

```json
[
  0
]
```

Quadrangle bounding box, with coordinates in original image. The eight numbers represent the four points (x-coordinate, y-coordinate from the left-top corner of the image) of the detected rectangle from the left-top corner in the clockwise direction. For images, coordinates are in pixels. For PDF, coordinates are in inches.

<h2 id="tocS_ComputerVisionError">ComputerVisionError</h2>
<!-- backwards compatibility -->
<a id="schemacomputervisionerror"></a>
<a id="schema_ComputerVisionError"></a>
<a id="tocScomputervisionerror"></a>
<a id="tocscomputervisionerror"></a>

```json
{
  "code": "InvalidImageFormat",
  "message": "string",
  "requestId": "string"
}
```

Details about the API request error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The error code.|
|message|string|true|none|A message explaining the error reported by the service.|
|requestId|string|false|none|A unique request identifier.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|InvalidImageFormat|
|code|UnsupportedMediaType|
|code|InvalidImageUrl|
|code|NotSupportedFeature|
|code|NotSupportedImage|
|code|Timeout|
|code|InternalServerError|
|code|InvalidImageSize|
|code|BadArgument|
|code|DetectFaceError|
|code|NotSupportedLanguage|
|code|InvalidThumbnailSize|
|code|InvalidDetails|
|code|InvalidModel|
|code|CancelledRequest|
|code|NotSupportedVisualFeature|
|code|FailedToProcess|
|code|Unspecified|
|code|StorageException|

<h2 id="tocS_ImageUrl">ImageUrl</h2>
<!-- backwards compatibility -->
<a id="schemaimageurl"></a>
<a id="schema_ImageUrl"></a>
<a id="tocSimageurl"></a>
<a id="tocsimageurl"></a>

```json
{
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|Publicly reachable URL of an image.|

<h2 id="tocS_Line">Line</h2>
<!-- backwards compatibility -->
<a id="schemaline"></a>
<a id="schema_Line"></a>
<a id="tocSline"></a>
<a id="tocsline"></a>

```json
{
  "boundingBox": [
    0
  ],
  "text": "string",
  "words": [
    {
      "boundingBox": [
        0
      ],
      "confidence": "High",
      "text": "string"
    }
  ]
}
```

An object representing a recognized text line.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[BoundingBox](#schemaboundingbox)|false|none|Quadrangle bounding box, with coordinates in original image. The eight numbers represent the four points (x-coordinate, y-coordinate from the left-top corner of the image) of the detected rectangle from the left-top corner in the clockwise direction. For images, coordinates are in pixels. For PDF, coordinates are in inches.|
|text|string|false|none|The text content of the line.|
|words|[[Word](#schemaword)]|false|none|List of words in the text line.|

<h2 id="tocS_OperationStatus">OperationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoperationstatus"></a>
<a id="schema_OperationStatus"></a>
<a id="tocSoperationstatus"></a>
<a id="tocsoperationstatus"></a>

```json
"NotStarted"
```

Status code of the text operation.

<h2 id="tocS_ReadOperationResult">ReadOperationResult</h2>
<!-- backwards compatibility -->
<a id="schemareadoperationresult"></a>
<a id="schema_ReadOperationResult"></a>
<a id="tocSreadoperationresult"></a>
<a id="tocsreadoperationresult"></a>

```json
{
  "recognitionResults": [
    {
      "clockwiseOrientation": 0,
      "height": 0,
      "lines": [
        {
          "boundingBox": [
            0
          ],
          "text": "string",
          "words": [
            {
              "boundingBox": [
                0
              ],
              "confidence": "High",
              "text": "string"
            }
          ]
        }
      ],
      "page": 0,
      "unit": "pixel",
      "width": 0
    }
  ],
  "status": "NotStarted"
}
```

OCR result of the read operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recognitionResults|[[TextRecognitionResult](#schematextrecognitionresult)]|false|none|An array of text recognition result of the read operation.|
|status|[OperationStatus](#schemaoperationstatus)|false|none|Status code of the text operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|NotStarted|
|status|Running|
|status|Failed|
|status|Succeeded|

<h2 id="tocS_TextOperationResult">TextOperationResult</h2>
<!-- backwards compatibility -->
<a id="schematextoperationresult"></a>
<a id="schema_TextOperationResult"></a>
<a id="tocStextoperationresult"></a>
<a id="tocstextoperationresult"></a>

```json
{
  "recognitionResult": {
    "clockwiseOrientation": 0,
    "height": 0,
    "lines": [
      {
        "boundingBox": [
          0
        ],
        "text": "string",
        "words": [
          {
            "boundingBox": [
              0
            ],
            "confidence": "High",
            "text": "string"
          }
        ]
      }
    ],
    "page": 0,
    "unit": "pixel",
    "width": 0
  },
  "status": "NotStarted"
}
```

Result of recognition text operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recognitionResult|[TextRecognitionResult](#schematextrecognitionresult)|false|none|An object representing a recognized text region|
|status|[OperationStatus](#schemaoperationstatus)|false|none|Status code of the text operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|NotStarted|
|status|Running|
|status|Failed|
|status|Succeeded|

<h2 id="tocS_TextRecognitionResult">TextRecognitionResult</h2>
<!-- backwards compatibility -->
<a id="schematextrecognitionresult"></a>
<a id="schema_TextRecognitionResult"></a>
<a id="tocStextrecognitionresult"></a>
<a id="tocstextrecognitionresult"></a>

```json
{
  "clockwiseOrientation": 0,
  "height": 0,
  "lines": [
    {
      "boundingBox": [
        0
      ],
      "text": "string",
      "words": [
        {
          "boundingBox": [
            0
          ],
          "confidence": "High",
          "text": "string"
        }
      ]
    }
  ],
  "page": 0,
  "unit": "pixel",
  "width": 0
}
```

An object representing a recognized text region

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clockwiseOrientation|number|false|none|The orientation of the image in degrees in the clockwise direction. Range between [0, 360).|
|height|number|false|none|The height of the image in pixels or the PDF in inches.|
|lines|[[Line](#schemaline)]|true|none|A list of recognized text lines.|
|page|integer|false|none|The 1-based page number of the recognition result.|
|unit|string \| null|false|none|The unit used in the Width, Height and BoundingBox. For images, the unit is 'pixel'. For PDF, the unit is 'inch'.|
|width|number|false|none|The width of the image in pixels or the PDF in inches.|

#### Enumerated Values

|Property|Value|
|---|---|
|unit|pixel|
|unit|inch|

<h2 id="tocS_Word">Word</h2>
<!-- backwards compatibility -->
<a id="schemaword"></a>
<a id="schema_Word"></a>
<a id="tocSword"></a>
<a id="tocsword"></a>

```json
{
  "boundingBox": [
    0
  ],
  "confidence": "High",
  "text": "string"
}
```

An object representing a recognized word.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[BoundingBox](#schemaboundingbox)|true|none|Quadrangle bounding box, with coordinates in original image. The eight numbers represent the four points (x-coordinate, y-coordinate from the left-top corner of the image) of the detected rectangle from the left-top corner in the clockwise direction. For images, coordinates are in pixels. For PDF, coordinates are in inches.|
|confidence|string \| null|false|none|Qualitative confidence measure.|
|text|string|true|none|The text content of the word.|

#### Enumerated Values

|Property|Value|
|---|---|
|confidence|High|
|confidence|Low|
