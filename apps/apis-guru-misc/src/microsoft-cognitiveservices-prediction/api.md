<h1 id="custom-vision-prediction-client">Custom Vision Prediction Client v3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/prediction">https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/prediction</a>

* <a href="none/customvision/v3.0/prediction">none/customvision/v3.0/prediction</a>

# Authentication

* API Key (apim_key)
    - Parameter Name: **Prediction-Key**, in: header.

<h1 id="custom-vision-prediction-client-imagepredictionapi">ImagePredictionApi</h1>

## Classify an image and saves the result.

<a id="opIdClassifyImage"></a>

> Code samples

```bash
curl https://example.com/64b822c5-8082-4b36-a426-27225f4aa18c/classify/iterations/MyModel1/image \
  -X POST \
  -H 'Accept: application/json' \
  -H "Prediction-Key: ${API_KEY}" \
  -F 'imageData=@/path/to/file'
```

`POST /{projectId}/classify/iterations/{publishedName}/image`

> Body parameter

```yaml
imageData: string
```

<h3 id="classify-an-image-and-saves-the-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|publishedName|path|string|true|Specifies the name of the model to evaluate against.|
|application|query|string|false|Optional. Specifies the name of application using the endpoint.|
|body|body|object|true|none|
|» imageData|body|string(binary)|true|Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 4MB.|

> Example responses

> 200 Response

```json
{
  "created": "2019-03-06T02:15:00Z",
  "id": "951098b2-9b69-427b-bddb-d5cb618874e3",
  "iteration": "fe1e83c4-6f50-4899-9544-6bb08cf0e15a",
  "predictions": [
    {
      "probability": 0.05149666,
      "tagId": "e31ff107-5505-4753-be42-b369b21b026c",
      "tagName": "Hemlock"
    },
    {
      "probability": 0.000193528482,
      "tagId": "349d72ac-0948-4d51-b1e4-c14a1f9b848a",
      "tagName": "Japanese Cherry"
    }
  ],
  "project": "64b822c5-8082-4b36-a426-27225f4aa18c"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="classify-an-image-and-saves-the-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImagePrediction](#schemaimageprediction)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Classify an image without saving the result.

<a id="opIdClassifyImageWithNoStore"></a>

> Code samples

```bash
curl https://example.com/64b822c5-8082-4b36-a426-27225f4aa18c/classify/iterations/MyModel1/image/nostore \
  -X POST \
  -H 'Accept: application/json' \
  -H "Prediction-Key: ${API_KEY}" \
  -F 'imageData=@/path/to/file'
```

`POST /{projectId}/classify/iterations/{publishedName}/image/nostore`

> Body parameter

```yaml
imageData: string
```

<h3 id="classify-an-image-without-saving-the-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|publishedName|path|string|true|Specifies the name of the model to evaluate against.|
|application|query|string|false|Optional. Specifies the name of application using the endpoint.|
|body|body|object|true|none|
|» imageData|body|string(binary)|true|Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 0MB.|

> Example responses

> 200 Response

```json
{
  "created": "2019-03-06T02:15:00Z",
  "id": "951098b2-9b69-427b-bddb-d5cb618874e3",
  "iteration": "fe1e83c4-6f50-4899-9544-6bb08cf0e15a",
  "predictions": [
    {
      "probability": 0.05149666,
      "tagId": "e31ff107-5505-4753-be42-b369b21b026c",
      "tagName": "Hemlock"
    },
    {
      "probability": 0.000193528482,
      "tagId": "349d72ac-0948-4d51-b1e4-c14a1f9b848a",
      "tagName": "Japanese Cherry"
    }
  ],
  "project": "64b822c5-8082-4b36-a426-27225f4aa18c"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="classify-an-image-without-saving-the-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImagePrediction](#schemaimageprediction)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Classify an image url and saves the result.

<a id="opIdClassifyImageUrl"></a>

> Code samples

```bash
curl https://example.com/64b822c5-8082-4b36-a426-27225f4aa18c/classify/iterations/MyModel1/url \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Prediction-Key: ${API_KEY}" \
  -d '{
    "url": "string"
  }'
```

`POST /{projectId}/classify/iterations/{publishedName}/url`

> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="classify-an-image-url-and-saves-the-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|publishedName|path|string|true|Specifies the name of the model to evaluate against.|
|application|query|string|false|Optional. Specifies the name of application using the endpoint.|
|body|body|[ImageUrl](#schemaimageurl)|true|An ImageUrl that contains the url of the image to be evaluated.|
|» url|body|string|true|Url of the image.|

> Example responses

> 200 Response

```json
{
  "created": "2019-03-06T02:15:00Z",
  "id": "951098b2-9b69-427b-bddb-d5cb618874e3",
  "iteration": "fe1e83c4-6f50-4899-9544-6bb08cf0e15a",
  "predictions": [
    {
      "probability": 0.05149666,
      "tagId": "e31ff107-5505-4753-be42-b369b21b026c",
      "tagName": "Hemlock"
    },
    {
      "probability": 0.000193528482,
      "tagId": "349d72ac-0948-4d51-b1e4-c14a1f9b848a",
      "tagName": "Japanese Cherry"
    }
  ],
  "project": "64b822c5-8082-4b36-a426-27225f4aa18c"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="classify-an-image-url-and-saves-the-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImagePrediction](#schemaimageprediction)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Classify an image url without saving the result.

<a id="opIdClassifyImageUrlWithNoStore"></a>

> Code samples

```bash
curl https://example.com/64b822c5-8082-4b36-a426-27225f4aa18c/classify/iterations/MyModel1/url/nostore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Prediction-Key: ${API_KEY}" \
  -d '{
    "url": "string"
  }'
```

`POST /{projectId}/classify/iterations/{publishedName}/url/nostore`

> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="classify-an-image-url-without-saving-the-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|publishedName|path|string|true|Specifies the name of the model to evaluate against.|
|application|query|string|false|Optional. Specifies the name of application using the endpoint.|
|body|body|[ImageUrl](#schemaimageurl)|true|An {Iris.Web.Api.Models.ImageUrl} that contains the url of the image to be evaluated.|
|» url|body|string|true|Url of the image.|

> Example responses

> 200 Response

```json
{
  "created": "2019-03-06T02:15:00Z",
  "id": "951098b2-9b69-427b-bddb-d5cb618874e3",
  "iteration": "fe1e83c4-6f50-4899-9544-6bb08cf0e15a",
  "predictions": [
    {
      "probability": 0.05149666,
      "tagId": "e31ff107-5505-4753-be42-b369b21b026c",
      "tagName": "Hemlock"
    },
    {
      "probability": 0.000193528482,
      "tagId": "349d72ac-0948-4d51-b1e4-c14a1f9b848a",
      "tagName": "Japanese Cherry"
    }
  ],
  "project": "64b822c5-8082-4b36-a426-27225f4aa18c"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="classify-an-image-url-without-saving-the-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImagePrediction](#schemaimageprediction)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Detect objects in an image and saves the result.

<a id="opIdDetectImage"></a>

> Code samples

```bash
curl https://example.com/64b822c5-8082-4b36-a426-27225f4aa18c/detect/iterations/MyModel1/image \
  -X POST \
  -H 'Accept: application/json' \
  -H "Prediction-Key: ${API_KEY}" \
  -F 'imageData=@/path/to/file'
```

`POST /{projectId}/detect/iterations/{publishedName}/image`

> Body parameter

```yaml
imageData: string
```

<h3 id="detect-objects-in-an-image-and-saves-the-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|publishedName|path|string|true|Specifies the name of the model to evaluate against.|
|application|query|string|false|Optional. Specifies the name of application using the endpoint.|
|body|body|object|true|none|
|» imageData|body|string(binary)|true|Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 4MB.|

> Example responses

> 200 Response

```json
{
  "created": "2019-03-10T06:10:28Z",
  "id": "64615ba1-b53f-e911-b05b-f8633f7a2ef1",
  "iteration": "45c79472-7198-46e1-8ed7-bad2ca111957",
  "predictions": [
    {
      "boundingBox": {
        "height": 0.156851858,
        "left": 0.955476165,
        "top": 0,
        "width": 0.0412225723
      },
      "probability": 0.05149666,
      "tagId": "7e703b80-3c7a-4c3c-bf48-9673c6891a75",
      "tagName": "Tag 1"
    },
    {
      "boundingBox": {
        "height": 0.6830492,
        "left": 0.062178582,
        "top": 0,
        "width": 0.9378114
      },
      "probability": 0.000193528482,
      "tagId": "a0d06a54-18e4-4787-a9f9-27a9c13a91e8",
      "tagName": "Tag 2"
    }
  ],
  "project": "fb5bc587-b53f-e911-b05b-f8633f7a2ef1"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="detect-objects-in-an-image-and-saves-the-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImagePrediction](#schemaimageprediction)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Detect objects in an image without saving the result.

<a id="opIdDetectImageWithNoStore"></a>

> Code samples

```bash
curl https://example.com/64b822c5-8082-4b36-a426-27225f4aa18c/detect/iterations/MyModel1/image/nostore \
  -X POST \
  -H 'Accept: application/json' \
  -H "Prediction-Key: ${API_KEY}" \
  -F 'imageData=@/path/to/file'
```

`POST /{projectId}/detect/iterations/{publishedName}/image/nostore`

> Body parameter

```yaml
imageData: string
```

<h3 id="detect-objects-in-an-image-without-saving-the-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|publishedName|path|string|true|Specifies the name of the model to evaluate against.|
|application|query|string|false|Optional. Specifies the name of application using the endpoint.|
|body|body|object|true|none|
|» imageData|body|string(binary)|true|Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 0MB.|

> Example responses

> 200 Response

```json
{
  "created": "2019-03-10T06:10:28Z",
  "id": "64615ba1-b53f-e911-b05b-f8633f7a2ef1",
  "iteration": "45c79472-7198-46e1-8ed7-bad2ca111957",
  "predictions": [
    {
      "boundingBox": {
        "height": 0.156851858,
        "left": 0.955476165,
        "top": 0,
        "width": 0.0412225723
      },
      "probability": 0.05149666,
      "tagId": "7e703b80-3c7a-4c3c-bf48-9673c6891a75",
      "tagName": "Tag 1"
    },
    {
      "boundingBox": {
        "height": 0.6830492,
        "left": 0.062178582,
        "top": 0,
        "width": 0.9378114
      },
      "probability": 0.000193528482,
      "tagId": "a0d06a54-18e4-4787-a9f9-27a9c13a91e8",
      "tagName": "Tag 2"
    }
  ],
  "project": "fb5bc587-b53f-e911-b05b-f8633f7a2ef1"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="detect-objects-in-an-image-without-saving-the-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImagePrediction](#schemaimageprediction)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Detect objects in an image url and saves the result.

<a id="opIdDetectImageUrl"></a>

> Code samples

```bash
curl https://example.com/64b822c5-8082-4b36-a426-27225f4aa18c/detect/iterations/MyModel1/url \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Prediction-Key: ${API_KEY}" \
  -d '{
    "url": "string"
  }'
```

`POST /{projectId}/detect/iterations/{publishedName}/url`

> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="detect-objects-in-an-image-url-and-saves-the-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|publishedName|path|string|true|Specifies the name of the model to evaluate against.|
|application|query|string|false|Optional. Specifies the name of application using the endpoint.|
|body|body|[ImageUrl](#schemaimageurl)|true|An ImageUrl that contains the url of the image to be evaluated.|
|» url|body|string|true|Url of the image.|

> Example responses

> 200 Response

```json
{
  "created": "2019-03-10T06:10:28Z",
  "id": "64615ba1-b53f-e911-b05b-f8633f7a2ef1",
  "iteration": "45c79472-7198-46e1-8ed7-bad2ca111957",
  "predictions": [
    {
      "boundingBox": {
        "height": 0.156851858,
        "left": 0.955476165,
        "top": 0,
        "width": 0.0412225723
      },
      "probability": 0.05149666,
      "tagId": "7e703b80-3c7a-4c3c-bf48-9673c6891a75",
      "tagName": "Tag 1"
    },
    {
      "boundingBox": {
        "height": 0.6830492,
        "left": 0.062178582,
        "top": 0,
        "width": 0.9378114
      },
      "probability": 0.000193528482,
      "tagId": "a0d06a54-18e4-4787-a9f9-27a9c13a91e8",
      "tagName": "Tag 2"
    }
  ],
  "project": "fb5bc587-b53f-e911-b05b-f8633f7a2ef1"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="detect-objects-in-an-image-url-and-saves-the-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImagePrediction](#schemaimageprediction)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Detect objects in an image url without saving the result.

<a id="opIdDetectImageUrlWithNoStore"></a>

> Code samples

```bash
curl https://example.com/64b822c5-8082-4b36-a426-27225f4aa18c/detect/iterations/MyModel1/url/nostore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Prediction-Key: ${API_KEY}" \
  -d '{
    "url": "string"
  }'
```

`POST /{projectId}/detect/iterations/{publishedName}/url/nostore`

> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="detect-objects-in-an-image-url-without-saving-the-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|publishedName|path|string|true|Specifies the name of the model to evaluate against.|
|application|query|string|false|Optional. Specifies the name of application using the endpoint.|
|body|body|[ImageUrl](#schemaimageurl)|true|An {Iris.Web.Api.Models.ImageUrl} that contains the url of the image to be evaluated.|
|» url|body|string|true|Url of the image.|

> Example responses

> 200 Response

```json
{
  "created": "2019-03-10T06:10:28Z",
  "id": "64615ba1-b53f-e911-b05b-f8633f7a2ef1",
  "iteration": "45c79472-7198-46e1-8ed7-bad2ca111957",
  "predictions": [
    {
      "boundingBox": {
        "height": 0.156851858,
        "left": 0.955476165,
        "top": 0,
        "width": 0.0412225723
      },
      "probability": 0.05149666,
      "tagId": "7e703b80-3c7a-4c3c-bf48-9673c6891a75",
      "tagName": "Tag 1"
    },
    {
      "boundingBox": {
        "height": 0.6830492,
        "left": 0.062178582,
        "top": 0,
        "width": 0.9378114
      },
      "probability": 0.000193528482,
      "tagId": "a0d06a54-18e4-4787-a9f9-27a9c13a91e8",
      "tagName": "Tag 2"
    }
  ],
  "project": "fb5bc587-b53f-e911-b05b-f8633f7a2ef1"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="detect-objects-in-an-image-url-without-saving-the-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImagePrediction](#schemaimageprediction)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

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
{
  "height": 0,
  "left": 0,
  "top": 0,
  "width": 0
}
```

Bounding box that defines a region of an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|number(float)|true|none|Height.|
|left|number(float)|true|none|Coordinate of the left boundary.|
|top|number(float)|true|none|Coordinate of the top boundary.|
|width|number(float)|true|none|Width.|

<h2 id="tocS_CustomVisionError">CustomVisionError</h2>
<!-- backwards compatibility -->
<a id="schemacustomvisionerror"></a>
<a id="schema_CustomVisionError"></a>
<a id="tocScustomvisionerror"></a>
<a id="tocscustomvisionerror"></a>

```json
{
  "code": "NoError",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The error code.|
|message|string|true|none|A message explaining the error reported by the service.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|NoError|
|code|BadRequest|
|code|BadRequestExceededBatchSize|
|code|BadRequestNotSupported|
|code|BadRequestInvalidIds|
|code|BadRequestProjectName|
|code|BadRequestProjectNameNotUnique|
|code|BadRequestProjectDescription|
|code|BadRequestProjectUnknownDomain|
|code|BadRequestProjectUnknownClassification|
|code|BadRequestProjectUnsupportedDomainTypeChange|
|code|BadRequestProjectUnsupportedExportPlatform|
|code|BadRequestIterationName|
|code|BadRequestIterationNameNotUnique|
|code|BadRequestIterationDescription|
|code|BadRequestIterationIsNotTrained|
|code|BadRequestWorkspaceCannotBeModified|
|code|BadRequestWorkspaceNotDeletable|
|code|BadRequestTagName|
|code|BadRequestTagNameNotUnique|
|code|BadRequestTagDescription|
|code|BadRequestTagType|
|code|BadRequestMultipleNegativeTag|
|code|BadRequestImageTags|
|code|BadRequestImageRegions|
|code|BadRequestNegativeAndRegularTagOnSameImage|
|code|BadRequestRequiredParamIsNull|
|code|BadRequestIterationIsPublished|
|code|BadRequestInvalidPublishName|
|code|BadRequestInvalidPublishTarget|
|code|BadRequestUnpublishFailed|
|code|BadRequestSubscriptionApi|
|code|BadRequestExceedProjectLimit|
|code|BadRequestExceedIterationPerProjectLimit|
|code|BadRequestExceedTagPerProjectLimit|
|code|BadRequestExceedTagPerImageLimit|
|code|BadRequestExceededQuota|
|code|BadRequestCannotMigrateProjectWithName|
|code|BadRequestNotLimitedTrial|
|code|BadRequestImageBatch|
|code|BadRequestImageStream|
|code|BadRequestImageUrl|
|code|BadRequestImageFormat|
|code|BadRequestImageSizeBytes|
|code|BadRequestImageExceededCount|
|code|BadRequestTrainingNotNeeded|
|code|BadRequestTrainingNotNeededButTrainingPipelineUpdated|
|code|BadRequestTrainingValidationFailed|
|code|BadRequestClassificationTrainingValidationFailed|
|code|BadRequestMultiClassClassificationTrainingValidationFailed|
|code|BadRequestMultiLabelClassificationTrainingValidationFailed|
|code|BadRequestDetectionTrainingValidationFailed|
|code|BadRequestTrainingAlreadyInProgress|
|code|BadRequestDetectionTrainingNotAllowNegativeTag|
|code|BadRequestInvalidEmailAddress|
|code|BadRequestDomainNotSupportedForAdvancedTraining|
|code|BadRequestExportPlatformNotSupportedForAdvancedTraining|
|code|BadRequestReservedBudgetInHoursNotEnoughForAdvancedTraining|
|code|BadRequestExportValidationFailed|
|code|BadRequestExportAlreadyInProgress|
|code|BadRequestPredictionIdsMissing|
|code|BadRequestPredictionIdsExceededCount|
|code|BadRequestPredictionTagsExceededCount|
|code|BadRequestPredictionResultsExceededCount|
|code|BadRequestPredictionInvalidApplicationName|
|code|BadRequestPredictionInvalidQueryParameters|
|code|BadRequestInvalid|
|code|UnsupportedMediaType|
|code|Forbidden|
|code|ForbiddenUser|
|code|ForbiddenUserResource|
|code|ForbiddenUserSignupDisabled|
|code|ForbiddenUserSignupAllowanceExceeded|
|code|ForbiddenUserDoesNotExist|
|code|ForbiddenUserDisabled|
|code|ForbiddenUserInsufficientCapability|
|code|ForbiddenDRModeEnabled|
|code|ForbiddenInvalid|
|code|NotFound|
|code|NotFoundProject|
|code|NotFoundProjectDefaultIteration|
|code|NotFoundIteration|
|code|NotFoundIterationPerformance|
|code|NotFoundTag|
|code|NotFoundImage|
|code|NotFoundDomain|
|code|NotFoundApimSubscription|
|code|NotFoundInvalid|
|code|Conflict|
|code|ConflictInvalid|
|code|ErrorUnknown|
|code|ErrorProjectInvalidWorkspace|
|code|ErrorProjectInvalidPipelineConfiguration|
|code|ErrorProjectInvalidDomain|
|code|ErrorProjectTrainingRequestFailed|
|code|ErrorProjectExportRequestFailed|
|code|ErrorFeaturizationServiceUnavailable|
|code|ErrorFeaturizationQueueTimeout|
|code|ErrorFeaturizationInvalidFeaturizer|
|code|ErrorFeaturizationAugmentationUnavailable|
|code|ErrorFeaturizationUnrecognizedJob|
|code|ErrorFeaturizationAugmentationError|
|code|ErrorExporterInvalidPlatform|
|code|ErrorExporterInvalidFeaturizer|
|code|ErrorExporterInvalidClassifier|
|code|ErrorPredictionServiceUnavailable|
|code|ErrorPredictionModelNotFound|
|code|ErrorPredictionModelNotCached|
|code|ErrorPrediction|
|code|ErrorPredictionStorage|
|code|ErrorRegionProposal|
|code|ErrorInvalid|

<h2 id="tocS_ImagePrediction">ImagePrediction</h2>
<!-- backwards compatibility -->
<a id="schemaimageprediction"></a>
<a id="schema_ImagePrediction"></a>
<a id="tocSimageprediction"></a>
<a id="tocsimageprediction"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "iteration": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "predictions": [
    {
      "boundingBox": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0
      },
      "probability": 0,
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tagName": "string"
    }
  ],
  "project": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Result of an image prediction request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|read-only|Date this prediction was created.|
|id|string(uuid)|false|read-only|Prediction Id.|
|iteration|string(uuid)|false|read-only|Iteration Id.|
|predictions|[[Prediction](#schemaprediction)]|false|read-only|List of predictions.|
|project|string(uuid)|false|read-only|Project Id.|

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

Image url.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|Url of the image.|

<h2 id="tocS_Prediction">Prediction</h2>
<!-- backwards compatibility -->
<a id="schemaprediction"></a>
<a id="schema_Prediction"></a>
<a id="tocSprediction"></a>
<a id="tocsprediction"></a>

```json
{
  "boundingBox": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0
  },
  "probability": 0,
  "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tagName": "string"
}
```

Prediction result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[BoundingBox](#schemaboundingbox)|false|none|Bounding box that defines a region of an image.|
|probability|number(float)|false|read-only|Probability of the tag.|
|tagId|string(uuid)|false|read-only|Id of the predicted tag.|
|tagName|string \| null|false|read-only|Name of the predicted tag.|
