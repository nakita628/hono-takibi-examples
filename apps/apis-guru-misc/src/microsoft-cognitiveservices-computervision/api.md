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

## AnalyzeImage

<a id="opIdAnalyzeImage"></a>

> Code samples

```bash
curl https://example.com/analyze \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}" \
  -d '{
    "url": "string"
  }'
```

`POST /analyze`

This operation extracts a rich set of visual features based on the image content.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL. Within your request, there is an optional parameter to allow you to choose which features to return. By default, image categories are returned in the response.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="analyzeimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|visualFeatures|query|[string]|false|A string indicating what visual feature types to return. Multiple values should be comma-separated. Valid visual feature types include: Categories - categorizes image content according to a taxonomy defined in documentation. Tags - tags the image with a detailed list of words related to the image content. Description - describes the image content with a complete English sentence. Faces - detects if faces are present. If present, generate coordinates, gender and age. ImageType - detects if image is clipart or a line drawing. Color - determines the accent color, dominant color, and whether an image is black&white. Adult - detects if the image is pornographic in nature (depicts nudity or a sex act), or is gory (depicts extreme violence or blood). Sexually suggestive content (aka racy content) is also detected. Objects - detects various objects within an image, including the approximate location. The Objects argument is only available in English. Brands - detects various brands within an image, including the approximate location. The Brands argument is only available in English.|
|details|query|[string]|false|A string indicating which domain-specific details to return. Multiple values should be comma-separated. Valid visual feature types include: Celebrities - identifies celebrities if detected in the image, Landmarks - identifies notable landmarks in the image.|
|language|query|string|false|The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese.|
|descriptionExclude|query|[string]|false|Turn off specified domain models when generating the description.|
|body|body|[ImageUrl](#schemaimageurl)|true|A JSON document with a URL pointing to the image that is to be analyzed.|
|» url|body|string|true|Publicly reachable URL of an image.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|visualFeatures|ImageType|
|visualFeatures|Faces|
|visualFeatures|Adult|
|visualFeatures|Categories|
|visualFeatures|Color|
|visualFeatures|Tags|
|visualFeatures|Description|
|visualFeatures|Objects|
|visualFeatures|Brands|
|details|Celebrities|
|details|Landmarks|
|language|en|
|language|es|
|language|ja|
|language|pt|
|language|zh|
|descriptionExclude|Celebrities|
|descriptionExclude|Landmarks|

> Example responses

> 200 Response

```json
{
  "adult": {
    "adultScore": 0.0934349000453949,
    "goreScore": 0.012872257380997575,
    "isAdultContent": false,
    "isGoryContent": false,
    "isRacyContent": false,
    "racyScore": 0.06861349195241928
  },
  "brands": [
    {
      "confidence": 0.857,
      "name": "Pepsi",
      "rectangle": {
        "h": 177,
        "w": 161,
        "x": 489,
        "y": 79
      }
    },
    {
      "confidence": 0.893,
      "name": "Coca-Cola",
      "rectangle": {
        "h": 372,
        "w": 171,
        "x": 216,
        "y": 55
      }
    }
  ],
  "categories": [
    {
      "name": "abstract_",
      "score": 0.00390625
    },
    {
      "detail": {
        "celebrities": [
          {
            "confidence": 0.999028444,
            "faceRectangle": {
              "height": 248,
              "left": 597,
              "top": 162,
              "width": 248
            },
            "name": "Satya Nadella"
          }
        ],
        "landmarks": [
          {
            "confidence": 0.9978346,
            "name": "Forbidden City"
          }
        ]
      },
      "name": "people_",
      "score": 0.83984375
    }
  ],
  "color": {
    "accentColor": "873B59",
    "dominantColorBackground": "Brown",
    "dominantColorForeground": "Brown",
    "dominantColors": [
      "Brown",
      "Black"
    ],
    "isBWImg": false
  },
  "description": {
    "captions": [
      {
        "confidence": 0.48293603002174407,
        "text": "Satya Nadella sitting on a bench"
      }
    ],
    "tags": [
      "person",
      "man",
      "outdoor",
      "window",
      "glasses"
    ]
  },
  "faces": [
    {
      "age": 44,
      "faceRectangle": {
        "height": 250,
        "left": 593,
        "top": 160,
        "width": 250
      },
      "gender": "Male"
    }
  ],
  "imageType": {
    "clipArtType": 0,
    "lineDrawingType": 0
  },
  "metadata": {
    "format": "Jpeg",
    "height": 1000,
    "width": 1500
  },
  "objects": [
    {
      "confidence": 0.9,
      "object": "tree",
      "parent": {
        "confidence": 0.95,
        "object": "plant"
      },
      "rectangle": {
        "h": 50,
        "w": 50,
        "x": 0,
        "y": 0
      }
    }
  ],
  "requestId": "0dbec5ad-a3d3-4f7e-96b4-dfd57efe967d",
  "tags": [
    {
      "confidence": 0.9897908568382263,
      "name": "person"
    },
    {
      "confidence": 0.9449388980865479,
      "name": "man"
    },
    {
      "confidence": 0.938492476940155,
      "name": "outdoor"
    },
    {
      "confidence": 0.8951393961906433,
      "name": "window"
    },
    {
      "confidence": 0.7250059783791661,
      "hint": "mammal",
      "name": "pangolin"
    }
  ]
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

<h3 id="analyzeimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response include the extracted features in JSON format. Here is the definitions for enumeration types:<br> ClipartType<br> Non - clipart = 0, ambiguous = 1, normal - clipart = 2, good - clipart = 3. LineDrawingTypeNon - LineDrawing = 0, LineDrawing = 1.|[ImageAnalysis](#schemaimageanalysis)|
|default|Default|Error response.|[ComputerVisionError](#schemacomputervisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## GetAreaOfInterest

<a id="opIdGetAreaOfInterest"></a>

> Code samples

```bash
curl https://example.com/areaOfInterest \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}" \
  -d '{
    "url": "string"
  }'
```

`POST /areaOfInterest`

This operation returns a bounding box around the most important area of the image.
A successful response will be returned in JSON. If the request failed, the response contains an error code and a message to help determine what went wrong.
Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.

> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="getareaofinterest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImageUrl](#schemaimageurl)|true|A JSON document with a URL pointing to the image that is to be analyzed.|
|» url|body|string|true|Publicly reachable URL of an image.|

> Example responses

> 200 Response

```json
{
  "areaOfInterest": {
    "h": 951,
    "w": 950,
    "x": 160,
    "y": 0
  },
  "metadata": {
    "format": "Jpeg",
    "height": 951,
    "width": 1378
  },
  "requestId": "ed2de1c6-fb55-4686-b0da-4da6e05d283f"
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

<h3 id="getareaofinterest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response includes the extracted area of interest in JSON format.|[AreaOfInterestResult](#schemaareaofinterestresult)|
|default|Default|Error response.|[ComputerVisionError](#schemacomputervisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## DescribeImage

<a id="opIdDescribeImage"></a>

> Code samples

```bash
curl https://example.com/describe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}" \
  -d '{
    "url": "string"
  }'
```

`POST /describe`

This operation generates a description of an image in human readable language with complete sentences. The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image. Descriptions are ordered by their confidence score. Descriptions may include results from celebrity and landmark domain models, if applicable.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="describeimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxCandidates|query|integer(int32)|false|Maximum number of candidate descriptions to be returned.  The default is 1.|
|language|query|string|false|The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese.|
|descriptionExclude|query|[string]|false|Turn off specified domain models when generating the description.|
|body|body|[ImageUrl](#schemaimageurl)|true|A JSON document with a URL pointing to the image that is to be analyzed.|
|» url|body|string|true|Publicly reachable URL of an image.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|en|
|language|es|
|language|ja|
|language|pt|
|language|zh|
|descriptionExclude|Celebrities|
|descriptionExclude|Landmarks|

> Example responses

> 200 Response

```json
{
  "description": {
    "captions": [
      {
        "confidence": 0.48293603002174407,
        "text": "Satya Nadella sitting on a bench"
      },
      {
        "confidence": 0.4003700681542283,
        "text": "Satya Nadella is sitting on a bench"
      },
      {
        "confidence": 0.38035155997373377,
        "text": "Satya Nadella sitting in front of a building"
      }
    ],
    "tags": [
      "person",
      "man",
      "outdoor",
      "window",
      "glasses"
    ]
  },
  "metadata": {
    "format": "Jpeg",
    "height": 1000,
    "width": 1500
  },
  "requestId": "ed2de1c6-fb55-4686-b0da-4da6e05d283f"
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

<h3 id="describeimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image description object.|[ImageDescription](#schemaimagedescription)|
|default|Default|Error response.|[ComputerVisionError](#schemacomputervisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## DetectObjects

<a id="opIdDetectObjects"></a>

> Code samples

```bash
curl https://example.com/detect \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}" \
  -d '{
    "url": "string"
  }'
```

`POST /detect`

Performs object detection on the specified image.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="detectobjects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImageUrl](#schemaimageurl)|true|A JSON document with a URL pointing to the image that is to be analyzed.|
|» url|body|string|true|Publicly reachable URL of an image.|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "format": "Jpeg",
    "height": 100,
    "width": 100
  },
  "objects": [
    {
      "confidence": 0.9,
      "object": "tree",
      "parent": {
        "confidence": 0.95,
        "object": "plant"
      },
      "rectangle": {
        "h": 50,
        "w": 50,
        "x": 0,
        "y": 0
      }
    }
  ],
  "requestId": "1ad0e45e-b7b4-4be3-8042-53be96103337"
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

<h3 id="detectobjects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response include the detected objects in JSON format.|[DetectResult](#schemadetectresult)|
|default|Default|Error response.|[ComputerVisionError](#schemacomputervisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## GenerateThumbnail

<a id="opIdGenerateThumbnail"></a>

> Code samples

```bash
curl 'https://example.com/generateThumbnail?width=500&height=500' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}" \
  -d '{
    "url": "string"
  }'
```

`POST /generateThumbnail`

This operation generates a thumbnail image with the user-specified width and height. By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio that differs from that of the input image.
A successful response contains the thumbnail image binary. If the request failed, the response contains an error code and a message to help determine what went wrong.
Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.

> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="generatethumbnail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|width|query|integer(int32)|true|Width of the thumbnail, in pixels. It must be between 1 and 1024. Recommended minimum of 50.|
|height|query|integer(int32)|true|Height of the thumbnail, in pixels. It must be between 1 and 1024. Recommended minimum of 50.|
|smartCropping|query|boolean|false|Boolean flag for enabling smart cropping.|
|body|body|[ImageUrl](#schemaimageurl)|true|A JSON document with a URL pointing to the image that is to be analyzed.|
|» url|body|string|true|Publicly reachable URL of an image.|

> Example responses

> 200 Response

```text
{binary}
```

<h3 id="generatethumbnail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The generated thumbnail in binary format.|Inline|
|default|Default|Error response.|[ComputerVisionError](#schemacomputervisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## ListModels

<a id="opIdListModels"></a>

> Code samples

```bash
curl https://example.com/models \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /models`

This operation returns the list of domain-specific models that are supported by the Computer Vision API. Currently, the API supports following domain-specific models: celebrity recognizer, landmark recognizer.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

> Example responses

> 200 Response

```json
{
  "models": [
    {
      "categories": [
        "people_"
      ],
      "name": "celebrities"
    },
    {
      "categories": [
        "building_"
      ],
      "name": "landmarks"
    }
  ]
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

<h3 id="listmodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of available domain models.|[ListModelsResult](#schemalistmodelsresult)|
|default|Default|Error response.|[ComputerVisionError](#schemacomputervisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## AnalyzeImageByDomain

<a id="opIdAnalyzeImageByDomain"></a>

> Code samples

```bash
curl https://example.com/models/Celebrities/analyze \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}" \
  -d '{
    "url": "string"
  }'
```

`POST /models/{model}/analyze`

This operation recognizes content within an image by applying a domain-specific model. The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request. Currently, the API provides following domain-specific models: celebrities, landmarks.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON.
If the request failed, the response will contain an error code and a message to help understand what went wrong.

> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="analyzeimagebydomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model|path|string|true|The domain-specific content to recognize.|
|language|query|string|false|The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese.|
|body|body|[ImageUrl](#schemaimageurl)|true|A JSON document with a URL pointing to the image that is to be analyzed.|
|» url|body|string|true|Publicly reachable URL of an image.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|en|
|language|es|
|language|ja|
|language|pt|
|language|zh|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "format": "Jpeg",
    "height": 1000,
    "width": 1500
  },
  "requestId": "f0027b4b-dc0d-4082-9228-1545ed246b03",
  "result": {
    "celebrities": [
      {
        "confidence": 0.999028444,
        "faceRectangle": {
          "height": 248,
          "left": 597,
          "top": 162,
          "width": 248
        },
        "name": "Satya Nadella"
      }
    ]
  }
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

<h3 id="analyzeimagebydomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Analysis result based on the domain model.|[DomainModelResults](#schemadomainmodelresults)|
|default|Default|Error response.|[ComputerVisionError](#schemacomputervisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## RecognizePrintedText

<a id="opIdRecognizePrintedText"></a>

> Code samples

```bash
curl 'https://example.com/ocr?detectOrientation=true' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}" \
  -d '{
    "url": "string"
  }'
```

`POST /ocr`

Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.
Upon success, the OCR results will be returned.
Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, NotSupportedLanguage, or InternalServerError.

> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="recognizeprintedtext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detectOrientation|query|boolean|true|Whether detect the text orientation in the image. With detectOrientation=true the OCR service tries to detect the image orientation and correct it before further processing (e.g. if it's upside-down).|
|language|query|string|false|The BCP-47 language code of the text to be detected in the image. The default value is 'unk'.|
|body|body|[ImageUrl](#schemaimageurl)|true|A JSON document with a URL pointing to the image that is to be analyzed.|
|» url|body|string|true|Publicly reachable URL of an image.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|unk|
|language|zh-Hans|
|language|zh-Hant|
|language|cs|
|language|da|
|language|nl|
|language|en|
|language|fi|
|language|fr|
|language|de|
|language|el|
|language|hu|
|language|it|
|language|ja|
|language|ko|
|language|nb|
|language|pl|
|language|pt|
|language|ru|
|language|es|
|language|sv|
|language|tr|
|language|ar|
|language|ro|
|language|sr-Cyrl|
|language|sr-Latn|
|language|sk|

> Example responses

> 200 Response

```json
{
  "language": "en",
  "orientation": "Up",
  "regions": [
    {
      "boundingBox": "462,379,497,258",
      "lines": [
        {
          "boundingBox": "462,379,497,74",
          "words": [
            {
              "boundingBox": "462,379,41,73",
              "text": "A"
            },
            {
              "boundingBox": "523,379,153,73",
              "text": "GOAL"
            },
            {
              "boundingBox": "694,379,265,74",
              "text": "WITHOUT"
            }
          ]
        },
        {
          "boundingBox": "565,471,289,74",
          "words": [
            {
              "boundingBox": "565,471,41,73",
              "text": "A"
            },
            {
              "boundingBox": "626,471,150,73",
              "text": "PLAN"
            },
            {
              "boundingBox": "801,472,53,73",
              "text": "IS"
            }
          ]
        },
        {
          "boundingBox": "519,563,375,74",
          "words": [
            {
              "boundingBox": "519,563,149,74",
              "text": "JUST"
            },
            {
              "boundingBox": "683,564,41,72",
              "text": "A"
            },
            {
              "boundingBox": "741,564,153,73",
              "text": "WISH"
            }
          ]
        }
      ]
    }
  ],
  "textAngle": -2.0000000000000338
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

<h3 id="recognizeprintedtext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The OCR results in the hierarchy of region/line/word. The results include text, bounding box for regions, lines and words. The angle, in radians, of the detected text with respect to the closest horizontal or vertical direction. After rotating the input image clockwise by this angle, the recognized text lines become horizontal or vertical. In combination with the orientation property it can be used to overlay recognition results correctly on the original image, by rotating either the original image or recognition results by a suitable angle around the center of the original image. If the angle cannot be confidently detected, this property is not present. If the image contains text at different angles, only part of the text will be recognized correctly.|[OcrResult](#schemaocrresult)|
|default|Default|Error response.|[ComputerVisionError](#schemacomputervisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## TagImage

<a id="opIdTagImage"></a>

> Code samples

```bash
curl https://example.com/tag \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}" \
  -d '{
    "url": "string"
  }'
```

`POST /tag`

This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag "ascomycete" may be accompanied by the hint "fungus".
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="tagimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string|false|The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese.|
|body|body|[ImageUrl](#schemaimageurl)|true|A JSON document with a URL pointing to the image that is to be analyzed.|
|» url|body|string|true|Publicly reachable URL of an image.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|en|
|language|es|
|language|ja|
|language|pt|
|language|zh|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "format": "Jpeg",
    "height": 400,
    "width": 400
  },
  "requestId": "1ad0e45e-b7b4-4be3-8042-53be96103337",
  "tags": [
    {
      "confidence": 0.9999997615814209,
      "name": "grass"
    },
    {
      "confidence": 0.9999706745147705,
      "name": "outdoor"
    },
    {
      "confidence": 0.9992897510528564,
      "name": "sky"
    },
    {
      "confidence": 0.9964632391929626,
      "name": "building"
    },
    {
      "confidence": 0.9927980303764343,
      "name": "house"
    },
    {
      "confidence": 0.8226802945137024,
      "name": "lawn"
    },
    {
      "confidence": 0.6412225365638733,
      "name": "green"
    },
    {
      "confidence": 0.31403225660324097,
      "name": "residential"
    }
  ]
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

<h3 id="tagimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image tags object.|[TagResult](#schematagresult)|
|default|Default|Error response.|[ComputerVisionError](#schemacomputervisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

# Schemas

<h2 id="tocS_AdultInfo">AdultInfo</h2>
<!-- backwards compatibility -->
<a id="schemaadultinfo"></a>
<a id="schema_AdultInfo"></a>
<a id="tocSadultinfo"></a>
<a id="tocsadultinfo"></a>

```json
{
  "adultScore": 0,
  "goreScore": 0,
  "isAdultContent": true,
  "isGoryContent": true,
  "isRacyContent": true,
  "racyScore": 0
}
```

An object describing whether the image contains adult-oriented content and/or is racy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adultScore|number(double)|false|none|Score from 0 to 1 that indicates how much the content is considered adult-oriented within the image.|
|goreScore|number(double)|false|none|Score from 0 to 1 that indicates how gory is the image.|
|isAdultContent|boolean|false|none|A value indicating if the image contains adult-oriented content.|
|isGoryContent|boolean|false|none|A value indicating if the image is gory.|
|isRacyContent|boolean|false|none|A value indicating if the image is racy.|
|racyScore|number(double)|false|none|Score from 0 to 1 that indicates how suggestive is the image.|

<h2 id="tocS_AreaOfInterestResult">AreaOfInterestResult</h2>
<!-- backwards compatibility -->
<a id="schemaareaofinterestresult"></a>
<a id="schema_AreaOfInterestResult"></a>
<a id="tocSareaofinterestresult"></a>
<a id="tocsareaofinterestresult"></a>

```json
{
  "areaOfInterest": {
    "h": 0,
    "w": 0,
    "x": 0,
    "y": 0
  },
  "metadata": {
    "format": "string",
    "height": 0,
    "width": 0
  },
  "requestId": "string"
}
```

Result of AreaOfInterest operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areaOfInterest|[BoundingRect](#schemaboundingrect)|false|none|A bounding box for an area inside an image.|
|metadata|[ImageMetadata](#schemaimagemetadata)|false|none|Image metadata.|
|requestId|string \| null|false|none|Id of the REST API request.|

<h2 id="tocS_BoundingRect">BoundingRect</h2>
<!-- backwards compatibility -->
<a id="schemaboundingrect"></a>
<a id="schema_BoundingRect"></a>
<a id="tocSboundingrect"></a>
<a id="tocsboundingrect"></a>

```json
{
  "h": 0,
  "w": 0,
  "x": 0,
  "y": 0
}
```

A bounding box for an area inside an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|h|integer(int32)|false|none|Height measured from the top-left point of the area, in pixels.|
|w|integer(int32)|false|none|Width measured from the top-left point of the area, in pixels.|
|x|integer(int32)|false|none|X-coordinate of the top left point of the area, in pixels.|
|y|integer(int32)|false|none|Y-coordinate of the top left point of the area, in pixels.|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "detail": {
    "celebrities": [
      {
        "confidence": 0,
        "faceRectangle": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0
        },
        "name": "string"
      }
    ],
    "landmarks": [
      {
        "confidence": 0,
        "name": "string"
      }
    ]
  },
  "name": "string",
  "score": 0
}
```

An object describing identified category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|[CategoryDetail](#schemacategorydetail)|false|none|An object describing additional category details.|
|name|string \| null|false|none|Name of the category.|
|score|number(double)|false|none|Scoring of the category.|

<h2 id="tocS_CategoryDetail">CategoryDetail</h2>
<!-- backwards compatibility -->
<a id="schemacategorydetail"></a>
<a id="schema_CategoryDetail"></a>
<a id="tocScategorydetail"></a>
<a id="tocscategorydetail"></a>

```json
{
  "celebrities": [
    {
      "confidence": 0,
      "faceRectangle": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0
      },
      "name": "string"
    }
  ],
  "landmarks": [
    {
      "confidence": 0,
      "name": "string"
    }
  ]
}
```

An object describing additional category details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|celebrities|[[CelebritiesModel](#schemacelebritiesmodel)]|false|none|An array of celebrities if any identified.|
|landmarks|[[LandmarksModel](#schemalandmarksmodel)]|false|none|An array of landmarks if any identified.|

<h2 id="tocS_CelebritiesModel">CelebritiesModel</h2>
<!-- backwards compatibility -->
<a id="schemacelebritiesmodel"></a>
<a id="schema_CelebritiesModel"></a>
<a id="tocScelebritiesmodel"></a>
<a id="tocscelebritiesmodel"></a>

```json
{
  "confidence": 0,
  "faceRectangle": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0
  },
  "name": "string"
}
```

An object describing possible celebrity identification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(double)|false|none|Confidence level for the celebrity recognition as a value ranging from 0 to 1.|
|faceRectangle|[FaceRectangle](#schemafacerectangle)|false|none|An object describing face rectangle.|
|name|string \| null|false|none|Name of the celebrity.|

<h2 id="tocS_CelebrityResults">CelebrityResults</h2>
<!-- backwards compatibility -->
<a id="schemacelebrityresults"></a>
<a id="schema_CelebrityResults"></a>
<a id="tocScelebrityresults"></a>
<a id="tocscelebrityresults"></a>

```json
{
  "celebrities": [
    {
      "confidence": 0,
      "faceRectangle": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0
      },
      "name": "string"
    }
  ],
  "metadata": {
    "format": "string",
    "height": 0,
    "width": 0
  },
  "requestId": "string"
}
```

Result of domain-specific classifications for the domain of celebrities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|celebrities|[[CelebritiesModel](#schemacelebritiesmodel)]|false|none|List of celebrities recognized in the image.|
|metadata|[ImageMetadata](#schemaimagemetadata)|false|none|Image metadata.|
|requestId|string \| null|false|none|Id of the REST API request.|

<h2 id="tocS_ColorInfo">ColorInfo</h2>
<!-- backwards compatibility -->
<a id="schemacolorinfo"></a>
<a id="schema_ColorInfo"></a>
<a id="tocScolorinfo"></a>
<a id="tocscolorinfo"></a>

```json
{
  "accentColor": "string",
  "dominantColorBackground": "string",
  "dominantColorForeground": "string",
  "dominantColors": [
    "string"
  ],
  "isBWImg": true
}
```

An object providing additional metadata describing color attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accentColor|string \| null|false|none|Possible accent color.|
|dominantColorBackground|string \| null|false|none|Possible dominant background color.|
|dominantColorForeground|string \| null|false|none|Possible dominant foreground color.|
|dominantColors|[string \| null]|false|none|An array of possible dominant colors.|
|isBWImg|boolean|false|none|A value indicating if the image is black and white.|

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

<h2 id="tocS_DetectResult">DetectResult</h2>
<!-- backwards compatibility -->
<a id="schemadetectresult"></a>
<a id="schema_DetectResult"></a>
<a id="tocSdetectresult"></a>
<a id="tocsdetectresult"></a>

```json
{
  "metadata": {
    "format": "string",
    "height": 0,
    "width": 0
  },
  "objects": [
    {
      "confidence": 0,
      "object": "string",
      "parent": {
        "confidence": 0,
        "object": "string",
        "parent": {}
      },
      "rectangle": {
        "h": 0,
        "w": 0,
        "x": 0,
        "y": 0
      }
    }
  ],
  "requestId": "string"
}
```

Result of a DetectImage call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[ImageMetadata](#schemaimagemetadata)|false|none|Image metadata.|
|objects|[[DetectedObject](#schemadetectedobject)]|false|read-only|An array of detected objects.|
|requestId|string \| null|false|none|Id of the REST API request.|

<h2 id="tocS_DetectedBrand">DetectedBrand</h2>
<!-- backwards compatibility -->
<a id="schemadetectedbrand"></a>
<a id="schema_DetectedBrand"></a>
<a id="tocSdetectedbrand"></a>
<a id="tocsdetectedbrand"></a>

```json
{
  "confidence": 0,
  "name": "string",
  "rectangle": {
    "h": 0,
    "w": 0,
    "x": 0,
    "y": 0
  }
}
```

A brand detected in an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(double)|false|read-only|Confidence score of having observed the brand in the image, as a value ranging from 0 to 1.|
|name|string \| null|false|read-only|Label for the brand.|
|rectangle|[BoundingRect](#schemaboundingrect)|false|none|A bounding box for an area inside an image.|

<h2 id="tocS_DetectedObject">DetectedObject</h2>
<!-- backwards compatibility -->
<a id="schemadetectedobject"></a>
<a id="schema_DetectedObject"></a>
<a id="tocSdetectedobject"></a>
<a id="tocsdetectedobject"></a>

```json
{
  "confidence": 0,
  "object": "string",
  "parent": {
    "confidence": 0,
    "object": "string",
    "parent": {}
  },
  "rectangle": {
    "h": 0,
    "w": 0,
    "x": 0,
    "y": 0
  }
}
```

An object detected in an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(double)|false|none|Confidence score of having observed the object in the image, as a value ranging from 0 to 1.|
|object|string \| null|false|none|Label for the object.|
|parent|[ObjectHierarchy](#schemaobjecthierarchy)|false|none|An object detected inside an image.|
|rectangle|[BoundingRect](#schemaboundingrect)|false|none|A bounding box for an area inside an image.|

<h2 id="tocS_DomainModelResults">DomainModelResults</h2>
<!-- backwards compatibility -->
<a id="schemadomainmodelresults"></a>
<a id="schema_DomainModelResults"></a>
<a id="tocSdomainmodelresults"></a>
<a id="tocsdomainmodelresults"></a>

```json
{
  "metadata": {
    "format": "string",
    "height": 0,
    "width": 0
  },
  "requestId": "string",
  "result": {}
}
```

Result of image analysis using a specific domain model including additional metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[ImageMetadata](#schemaimagemetadata)|false|none|Image metadata.|
|requestId|string \| null|false|none|Id of the REST API request.|
|result|object|false|none|Model-specific response.|

<h2 id="tocS_FaceDescription">FaceDescription</h2>
<!-- backwards compatibility -->
<a id="schemafacedescription"></a>
<a id="schema_FaceDescription"></a>
<a id="tocSfacedescription"></a>
<a id="tocsfacedescription"></a>

```json
{
  "age": 0,
  "faceRectangle": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0
  },
  "gender": "Male"
}
```

An object describing a face identified in the image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|age|integer(int32)|false|none|Possible age of the face.|
|faceRectangle|[FaceRectangle](#schemafacerectangle)|false|none|An object describing face rectangle.|
|gender|string \| null|false|none|Possible gender of the face.|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|Male|
|gender|Female|

<h2 id="tocS_FaceRectangle">FaceRectangle</h2>
<!-- backwards compatibility -->
<a id="schemafacerectangle"></a>
<a id="schema_FaceRectangle"></a>
<a id="tocSfacerectangle"></a>
<a id="tocsfacerectangle"></a>

```json
{
  "height": 0,
  "left": 0,
  "top": 0,
  "width": 0
}
```

An object describing face rectangle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|false|none|Height measured from the top-left point of the face, in pixels.|
|left|integer(int32)|false|none|X-coordinate of the top left point of the face, in pixels.|
|top|integer(int32)|false|none|Y-coordinate of the top left point of the face, in pixels.|
|width|integer(int32)|false|none|Width measured from the top-left point of the face, in pixels.|

<h2 id="tocS_ImageAnalysis">ImageAnalysis</h2>
<!-- backwards compatibility -->
<a id="schemaimageanalysis"></a>
<a id="schema_ImageAnalysis"></a>
<a id="tocSimageanalysis"></a>
<a id="tocsimageanalysis"></a>

```json
{
  "adult": {
    "adultScore": 0,
    "goreScore": 0,
    "isAdultContent": true,
    "isGoryContent": true,
    "isRacyContent": true,
    "racyScore": 0
  },
  "brands": [
    {
      "confidence": 0,
      "name": "string",
      "rectangle": {
        "h": 0,
        "w": 0,
        "x": 0,
        "y": 0
      }
    }
  ],
  "categories": [
    {
      "detail": {
        "celebrities": [
          {
            "confidence": 0,
            "faceRectangle": {
              "height": 0,
              "left": 0,
              "top": 0,
              "width": 0
            },
            "name": "string"
          }
        ],
        "landmarks": [
          {
            "confidence": 0,
            "name": "string"
          }
        ]
      },
      "name": "string",
      "score": 0
    }
  ],
  "color": {
    "accentColor": "string",
    "dominantColorBackground": "string",
    "dominantColorForeground": "string",
    "dominantColors": [
      "string"
    ],
    "isBWImg": true
  },
  "description": {
    "captions": [
      {
        "confidence": 0,
        "text": "string"
      }
    ],
    "tags": [
      "string"
    ]
  },
  "faces": [
    {
      "age": 0,
      "faceRectangle": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0
      },
      "gender": "Male"
    }
  ],
  "imageType": {
    "clipArtType": 0,
    "lineDrawingType": 0
  },
  "metadata": {
    "format": "string",
    "height": 0,
    "width": 0
  },
  "objects": [
    {
      "confidence": 0,
      "object": "string",
      "parent": {
        "confidence": 0,
        "object": "string",
        "parent": {}
      },
      "rectangle": {
        "h": 0,
        "w": 0,
        "x": 0,
        "y": 0
      }
    }
  ],
  "requestId": "string",
  "tags": [
    {
      "confidence": 0,
      "hint": "string",
      "name": "string"
    }
  ]
}
```

Result of AnalyzeImage operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adult|[AdultInfo](#schemaadultinfo)|false|none|An object describing whether the image contains adult-oriented content and/or is racy.|
|brands|[[DetectedBrand](#schemadetectedbrand)]|false|none|Array of brands detected in the image.|
|categories|[[Category](#schemacategory)]|false|none|An array indicating identified categories.|
|color|[ColorInfo](#schemacolorinfo)|false|none|An object providing additional metadata describing color attributes.|
|description|[ImageDescriptionDetails](#schemaimagedescriptiondetails)|false|none|A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.|
|faces|[[FaceDescription](#schemafacedescription)]|false|none|An array of possible faces within the image.|
|imageType|[ImageType](#schemaimagetype)|false|none|An object providing possible image types and matching confidence levels.|
|metadata|[ImageMetadata](#schemaimagemetadata)|false|none|Image metadata.|
|objects|[[DetectedObject](#schemadetectedobject)]|false|none|Array of objects describing what was detected in the image.|
|requestId|string \| null|false|none|Id of the REST API request.|
|tags|[[ImageTag](#schemaimagetag)]|false|none|A list of tags with confidence level.|

<h2 id="tocS_ImageCaption">ImageCaption</h2>
<!-- backwards compatibility -->
<a id="schemaimagecaption"></a>
<a id="schema_ImageCaption"></a>
<a id="tocSimagecaption"></a>
<a id="tocsimagecaption"></a>

```json
{
  "confidence": 0,
  "text": "string"
}
```

An image caption, i.e. a brief description of what the image depicts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(double)|false|none|The level of confidence the service has in the caption.|
|text|string \| null|false|none|The text of the caption.|

<h2 id="tocS_ImageDescription">ImageDescription</h2>
<!-- backwards compatibility -->
<a id="schemaimagedescription"></a>
<a id="schema_ImageDescription"></a>
<a id="tocSimagedescription"></a>
<a id="tocsimagedescription"></a>

```json
{
  "description": {
    "captions": [
      {
        "confidence": 0,
        "text": "string"
      }
    ],
    "tags": [
      "string"
    ]
  },
  "metadata": {
    "format": "string",
    "height": 0,
    "width": 0
  },
  "requestId": "string"
}
```

A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|[ImageDescriptionDetails](#schemaimagedescriptiondetails)|false|none|A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.|
|metadata|[ImageMetadata](#schemaimagemetadata)|false|none|Image metadata.|
|requestId|string \| null|false|none|Id of the REST API request.|

<h2 id="tocS_ImageDescriptionDetails">ImageDescriptionDetails</h2>
<!-- backwards compatibility -->
<a id="schemaimagedescriptiondetails"></a>
<a id="schema_ImageDescriptionDetails"></a>
<a id="tocSimagedescriptiondetails"></a>
<a id="tocsimagedescriptiondetails"></a>

```json
{
  "captions": [
    {
      "confidence": 0,
      "text": "string"
    }
  ],
  "tags": [
    "string"
  ]
}
```

A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|captions|[[ImageCaption](#schemaimagecaption)]|false|none|A list of captions, sorted by confidence level.|
|tags|[string \| null]|false|none|A collection of image tags.|

<h2 id="tocS_ImageMetadata">ImageMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaimagemetadata"></a>
<a id="schema_ImageMetadata"></a>
<a id="tocSimagemetadata"></a>
<a id="tocsimagemetadata"></a>

```json
{
  "format": "string",
  "height": 0,
  "width": 0
}
```

Image metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string \| null|false|none|Image format.|
|height|integer(int32)|false|none|Image height, in pixels.|
|width|integer(int32)|false|none|Image width, in pixels.|

<h2 id="tocS_ImageTag">ImageTag</h2>
<!-- backwards compatibility -->
<a id="schemaimagetag"></a>
<a id="schema_ImageTag"></a>
<a id="tocSimagetag"></a>
<a id="tocsimagetag"></a>

```json
{
  "confidence": 0,
  "hint": "string",
  "name": "string"
}
```

An entity observation in the image, along with the confidence score.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(double)|false|none|The level of confidence that the entity was observed.|
|hint|string \| null|false|none|Optional hint/details for this tag.|
|name|string \| null|false|none|Name of the entity.|

<h2 id="tocS_ImageType">ImageType</h2>
<!-- backwards compatibility -->
<a id="schemaimagetype"></a>
<a id="schema_ImageType"></a>
<a id="tocSimagetype"></a>
<a id="tocsimagetype"></a>

```json
{
  "clipArtType": 0,
  "lineDrawingType": 0
}
```

An object providing possible image types and matching confidence levels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clipArtType|integer(int32)|false|none|Confidence level that the image is a clip art.|
|lineDrawingType|integer(int32)|false|none|Confidence level that the image is a line drawing.|

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

<h2 id="tocS_LandmarkResults">LandmarkResults</h2>
<!-- backwards compatibility -->
<a id="schemalandmarkresults"></a>
<a id="schema_LandmarkResults"></a>
<a id="tocSlandmarkresults"></a>
<a id="tocslandmarkresults"></a>

```json
{
  "landmarks": [
    {
      "confidence": 0,
      "name": "string"
    }
  ],
  "metadata": {
    "format": "string",
    "height": 0,
    "width": 0
  },
  "requestId": "string"
}
```

Result of domain-specific classifications for the domain of landmarks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|landmarks|[[LandmarksModel](#schemalandmarksmodel)]|false|none|List of landmarks recognized in the image.|
|metadata|[ImageMetadata](#schemaimagemetadata)|false|none|Image metadata.|
|requestId|string \| null|false|none|Id of the REST API request.|

<h2 id="tocS_LandmarksModel">LandmarksModel</h2>
<!-- backwards compatibility -->
<a id="schemalandmarksmodel"></a>
<a id="schema_LandmarksModel"></a>
<a id="tocSlandmarksmodel"></a>
<a id="tocslandmarksmodel"></a>

```json
{
  "confidence": 0,
  "name": "string"
}
```

A landmark recognized in the image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(double)|false|none|Confidence level for the landmark recognition as a value ranging from 0 to 1.|
|name|string \| null|false|none|Name of the landmark.|

<h2 id="tocS_ListModelsResult">ListModelsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelsresult"></a>
<a id="schema_ListModelsResult"></a>
<a id="tocSlistmodelsresult"></a>
<a id="tocslistmodelsresult"></a>

```json
{
  "models": [
    {
      "categories": [
        "string"
      ],
      "name": "string"
    }
  ]
}
```

Result of the List Domain Models operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|models|[[ModelDescription](#schemamodeldescription)]|false|read-only|An array of supported models.|

<h2 id="tocS_ModelDescription">ModelDescription</h2>
<!-- backwards compatibility -->
<a id="schemamodeldescription"></a>
<a id="schema_ModelDescription"></a>
<a id="tocSmodeldescription"></a>
<a id="tocsmodeldescription"></a>

```json
{
  "categories": [
    "string"
  ],
  "name": "string"
}
```

An object describing supported model by name and categories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string \| null]|false|none|Categories of the model.|
|name|string \| null|false|none|The name of the model.|

<h2 id="tocS_ObjectHierarchy">ObjectHierarchy</h2>
<!-- backwards compatibility -->
<a id="schemaobjecthierarchy"></a>
<a id="schema_ObjectHierarchy"></a>
<a id="tocSobjecthierarchy"></a>
<a id="tocsobjecthierarchy"></a>

```json
{
  "confidence": 0,
  "object": "string",
  "parent": {
    "confidence": 0,
    "object": "string",
    "parent": {}
  }
}
```

An object detected inside an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(double)|false|none|Confidence score of having observed the object in the image, as a value ranging from 0 to 1.|
|object|string \| null|false|none|Label for the object.|
|parent|[ObjectHierarchy](#schemaobjecthierarchy)|false|none|An object detected inside an image.|

<h2 id="tocS_OcrLine">OcrLine</h2>
<!-- backwards compatibility -->
<a id="schemaocrline"></a>
<a id="schema_OcrLine"></a>
<a id="tocSocrline"></a>
<a id="tocsocrline"></a>

```json
{
  "boundingBox": "string",
  "words": [
    {
      "boundingBox": "string",
      "text": "string"
    }
  ]
}
```

An object describing a single recognized line of text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|string \| null|false|none|Bounding box of a recognized line. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down.|
|words|[[OcrWord](#schemaocrword)]|false|none|An array of objects, where each object represents a recognized word.|

<h2 id="tocS_OcrRegion">OcrRegion</h2>
<!-- backwards compatibility -->
<a id="schemaocrregion"></a>
<a id="schema_OcrRegion"></a>
<a id="tocSocrregion"></a>
<a id="tocsocrregion"></a>

```json
{
  "boundingBox": "string",
  "lines": [
    {
      "boundingBox": "string",
      "words": [
        {
          "boundingBox": "string",
          "text": "string"
        }
      ]
    }
  ]
}
```

A region consists of multiple lines (e.g. a column of text in a multi-column document).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|string \| null|false|none|Bounding box of a recognized region. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down.|
|lines|[[OcrLine](#schemaocrline)]|false|none|An array of recognized lines of text.|

<h2 id="tocS_OcrResult">OcrResult</h2>
<!-- backwards compatibility -->
<a id="schemaocrresult"></a>
<a id="schema_OcrResult"></a>
<a id="tocSocrresult"></a>
<a id="tocsocrresult"></a>

```json
{
  "language": "string",
  "orientation": "string",
  "regions": [
    {
      "boundingBox": "string",
      "lines": [
        {
          "boundingBox": "string",
          "words": [
            {
              "boundingBox": "string",
              "text": "string"
            }
          ]
        }
      ]
    }
  ],
  "textAngle": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|string \| null|false|none|The BCP-47 language code of the text in the image.|
|orientation|string \| null|false|none|Orientation of the text recognized in the image, if requested. The value (up, down, left, or right) refers to the direction that the top of the recognized text is facing, after the image has been rotated around its center according to the detected text angle (see textAngle property).<br>If detection of the orientation was not requested, or no text is detected, the value is 'NotDetected'.|
|regions|[[OcrRegion](#schemaocrregion)]|false|none|An array of objects, where each object represents a region of recognized text.|
|textAngle|number(double)|false|none|The angle, in radians, of the detected text with respect to the closest horizontal or vertical direction. After rotating the input image clockwise by this angle, the recognized text lines become horizontal or vertical. In combination with the orientation property it can be used to overlay recognition results correctly on the original image, by rotating either the original image or recognition results by a suitable angle around the center of the original image. If the angle cannot be confidently detected, this property is not present. If the image contains text at different angles, only part of the text will be recognized correctly.|

<h2 id="tocS_OcrWord">OcrWord</h2>
<!-- backwards compatibility -->
<a id="schemaocrword"></a>
<a id="schema_OcrWord"></a>
<a id="tocSocrword"></a>
<a id="tocsocrword"></a>

```json
{
  "boundingBox": "string",
  "text": "string"
}
```

Information on a recognized word.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|string \| null|false|none|Bounding box of a recognized word. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down.|
|text|string \| null|false|none|String value of a recognized word.|

<h2 id="tocS_TagResult">TagResult</h2>
<!-- backwards compatibility -->
<a id="schematagresult"></a>
<a id="schema_TagResult"></a>
<a id="tocStagresult"></a>
<a id="tocstagresult"></a>

```json
{
  "metadata": {
    "format": "string",
    "height": 0,
    "width": 0
  },
  "requestId": "string",
  "tags": [
    {
      "confidence": 0,
      "hint": "string",
      "name": "string"
    }
  ]
}
```

The results of a image tag operation, including any tags and image metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[ImageMetadata](#schemaimagemetadata)|false|none|Image metadata.|
|requestId|string \| null|false|none|Id of the REST API request.|
|tags|[[ImageTag](#schemaimagetag)]|false|none|A list of tags with confidence level.|
