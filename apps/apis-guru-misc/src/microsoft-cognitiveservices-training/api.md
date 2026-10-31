<h1 id="custom-vision-training-client">Custom Vision Training Client v3.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://southcentralus.api.cognitive.microsoft.com/customvision/v3.2/training">https://southcentralus.api.cognitive.microsoft.com/customvision/v3.2/training</a>

* <a href="none/customvision/v3.2/training">none/customvision/v3.2/training</a>

# Authentication

* API Key (apim_key)
    - Parameter Name: **Training-Key**, in: header.

<h1 id="custom-vision-training-client-domainsapi">DomainsApi</h1>

## Get a list of the available domains.

<a id="opIdGetDomains"></a>

> Code samples

```bash
curl https://example.com/domains \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /domains`

> Example responses

> 200 Response

```json
[
  {
    "enabled": true,
    "exportable": false,
    "id": "ee85a74c-405e-4adc-bb47-ffa8ca0c9f31",
    "name": "General",
    "type": "Classification"
  },
  {
    "enabled": true,
    "exportable": false,
    "id": "c151d5b5-dd07-472a-acc8-15d29dea8518",
    "name": "Food",
    "type": "Classification"
  },
  {
    "enabled": true,
    "exportable": false,
    "id": "ca455789-012d-4b50-9fec-5bb63841c793",
    "name": "Landmarks",
    "type": "Classification"
  },
  {
    "enabled": true,
    "exportable": false,
    "id": "b30a91ae-e3c1-4f73-a81e-c270bff27c39",
    "name": "Retail",
    "type": "Classification"
  },
  {
    "enabled": true,
    "exportable": false,
    "id": "45badf75-3591-4f26-a705-45678d3e9f5f",
    "name": "Adult",
    "type": "Classification"
  },
  {
    "enabled": true,
    "exportable": false,
    "id": "0732100f-1a38-4e49-a514-c9b44c697ab5",
    "name": "General (compact)",
    "type": "Classification"
  },
  {
    "enabled": true,
    "exportable": false,
    "id": "b5cfd229-2ac7-4b2b-8d0a-2b0661344894",
    "name": "Landmarks (compact)",
    "type": "Classification"
  },
  {
    "enabled": true,
    "exportable": false,
    "id": "6b4faeda-8396-481b-9f8b-177b9fa3097f",
    "name": "Retail (compact)",
    "type": "Classification"
  }
]
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-a-list-of-the-available-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<h3 id="get-a-list-of-the-available-domains-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Domain](#schemadomain)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Get information about a specific domain.

<a id="opIdGetDomain"></a>

> Code samples

```bash
curl https://example.com/domains/b30a91ae-e3c1-4f73-a81e-c270bff27c39 \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /domains/{domainId}`

<h3 id="get-information-about-a-specific-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domainId|path|string(uuid)|true|The id of the domain to get information about.|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "exportable": false,
  "id": "b30a91ae-e3c1-4f73-a81e-c270bff27c39",
  "name": "Retail",
  "type": "Classification"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-information-about-a-specific-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Domain](#schemadomain)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

<h1 id="custom-vision-training-client-projectapi">ProjectApi</h1>

## Get your projects.

<a id="opIdGetProjects"></a>

> Code samples

```bash
curl https://example.com/projects \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /projects`

> Example responses

> 200 Response

```json
[
  {
    "created": "2017-12-18T05:43:18Z",
    "description": "",
    "id": "bc3f7dad-5544-468c-8573-3ef04d55463e",
    "lastModified": "2017-12-18T05:43:18Z",
    "name": "My New Project",
    "settings": {
      "domainId": "ee85a74c-405e-4adc-bb47-ffa8ca0c9f31"
    },
    "thumbnailUri": ""
  }
]
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-your-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<h3 id="get-your-projects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Project](#schemaproject)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Create a project.

<a id="opIdCreateProject"></a>

> Code samples

```bash
curl 'https://example.com/projects?name=My%20New%20Project' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`POST /projects`

<h3 id="create-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Name of the project.|
|description|query|string|false|The description of the project.|
|domainId|query|string(uuid)|false|The id of the domain to use for this project. Defaults to General.|
|classificationType|query|string|false|The type of classifier to create for this project.|
|targetExportPlatforms|query|[string]|false|List of platforms the trained model is intending exporting to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|classificationType|Multiclass|
|classificationType|Multilabel|
|targetExportPlatforms|CoreML|
|targetExportPlatforms|TensorFlow|
|targetExportPlatforms|DockerFile|
|targetExportPlatforms|ONNX|
|targetExportPlatforms|VAIDK|

> Example responses

> 200 Response

```json
{
  "created": "2017-12-18T05:43:18Z",
  "description": "A test project",
  "id": "bc3f7dad-5544-468c-8573-3ef04d55463e",
  "lastModified": "2017-12-18T05:43:18Z",
  "name": "My New Project",
  "settings": {
    "domainId": "ee85a74c-405e-4adc-bb47-ffa8ca0c9f31"
  },
  "thumbnailUri": ""
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="create-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Project](#schemaproject)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Imports a project.

<a id="opIdImportProject"></a>

> Code samples

```bash
curl 'https://example.com/projects/import?token=token' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`POST /projects/import`

<h3 id="imports-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Token generated from the export project call.|

> Example responses

> 200 Response

```json
{
  "created": "2019-10-06T05:43:18Z",
  "description": "",
  "id": "bc3f7dad-5544-468c-8573-3ef04d55463e",
  "lastModified": "2019-10-06T05:43:18Z",
  "name": "Import Project",
  "settings": {
    "domainId": "ee85a74c-405e-4adc-bb47-ffa8ca0c9f31"
  },
  "status": "Importing",
  "thumbnailUri": ""
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="imports-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Project](#schemaproject)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Get a specific project.

<a id="opIdGetProject"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /projects/{projectId}`

<h3 id="get-a-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The id of the project to get.|

> Example responses

> 200 Response

```json
{
  "created": "2017-12-18T05:43:18Z",
  "description": "A test project",
  "id": "bc3f7dad-5544-468c-8573-3ef04d55463e",
  "lastModified": "2017-12-18T05:43:18Z",
  "name": "My New Project",
  "settings": {
    "domainId": "ee85a74c-405e-4adc-bb47-ffa8ca0c9f31"
  },
  "thumbnailUri": ""
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-a-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Project](#schemaproject)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Delete a specific project.

<a id="opIdDeleteProject"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e \
  -X DELETE \
  -H "Training-Key: ${API_KEY}"
```

`DELETE /projects/{projectId}`

<h3 id="delete-a-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|

<h3 id="delete-a-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Update a specific project.

<a id="opIdUpdateProject"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "settings": {
      "classificationType": "Multiclass",
      "domainId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "imageProcessingSettings": {
        "augmentationMethods": {
          "property1": true,
          "property2": true
        }
      },
      "targetExportPlatforms": [
        "CoreML"
      ]
    },
    "status": "Succeeded"
  }'
```

`PATCH /projects/{projectId}`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "settings": {
    "classificationType": "Multiclass",
    "domainId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "imageProcessingSettings": {
      "augmentationMethods": {
        "property1": true,
        "property2": true
      }
    },
    "targetExportPlatforms": [
      "CoreML"
    ]
  },
  "status": "Succeeded"
}
```

<h3 id="update-a-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The id of the project to update.|
|body|body|[Project](#schemaproject)|true|The updated project model.|
|» description|body|string \| null|true|Gets or sets the description of the project.|
|» name|body|string|true|Gets or sets the name of the project.|
|» settings|body|[ProjectSettings](#schemaprojectsettings)|true|Represents settings associated with a project.|
|» status|body|string|false|Gets the status of the project.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|Succeeded|
|» status|Importing|
|» status|Failed|

> Example responses

> 200 Response

```json
{
  "created": "2017-12-18T05:43:18Z",
  "description": "A new Description",
  "id": "bc3f7dad-5544-468c-8573-3ef04d55463e",
  "lastModified": "2017-12-18T05:43:19Z",
  "name": "New Project Name",
  "settings": {
    "domainId": "ee85a74c-405e-4adc-bb47-ffa8ca0c9f31"
  },
  "thumbnailUri": ""
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="update-a-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Project](#schemaproject)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Exports a project.

<a id="opIdExportProject"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/export \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /projects/{projectId}/export`

<h3 id="exports-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id of the project to export.|

> Example responses

> 200 Response

```json
{
  "token": "<token>"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="exports-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ProjectExport](#schemaprojectexport)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Get iterations for the project.

<a id="opIdGetIterations"></a>

> Code samples

```bash
curl https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/iterations \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /projects/{projectId}/iterations`

<h3 id="get-iterations-for-the-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|

> Example responses

> 200 Response

```json
[
  {
    "created": "2017-12-18T22:40:29Z",
    "domainId": "ee85a74c-405e-4adc-bb47-ffa8ca0c9f31",
    "exportable": false,
    "exportableTo": [
      "ONNX",
      "DockerFile",
      "TensorFlow",
      "CoreML"
    ],
    "id": "fe1e83c4-6f50-4899-9544-6bb08cf0e15a",
    "lastModified": "2017-12-18T22:40:41Z",
    "name": "Iteration 1",
    "projectId": "64b822c5-8082-4b36-a426-27225f4aa18c",
    "publishName": "",
    "reservedBudgetInHours": 0,
    "status": "Completed",
    "trainedAt": "2017-12-18T22:40:41Z",
    "trainingType": "Regular"
  },
  {
    "created": "2017-12-18T22:40:36Z",
    "domainId": "ee85a74c-405e-4adc-bb47-ffa8ca0c9f31",
    "exportable": false,
    "exportableTo": [
      "ONNX",
      "DockerFile",
      "TensorFlow",
      "CoreML"
    ],
    "id": "e31a14ab-5d78-4f7b-a267-3a1e4fd8a758",
    "lastModified": "2017-12-19T15:47:02Z",
    "name": "Iteration 2",
    "projectId": "64b822c5-8082-4b36-a426-27225f4aa18c",
    "publishName": "model1",
    "reservedBudgetInHours": 5,
    "status": "Completed",
    "trainedAt": "2017-12-19T15:47:02Z",
    "trainingType": "Regular"
  },
  {
    "created": "2017-12-19T15:46:59Z",
    "exportable": false,
    "exportableTo": [
      "ONNX",
      "DockerFile",
      "TensorFlow",
      "CoreML"
    ],
    "id": "3adaf7b2-18fc-4376-9da4-b5ea160a7cf5",
    "lastModified": "2017-12-19T15:46:59Z",
    "name": "Iteration 3",
    "projectId": "64b822c5-8082-4b36-a426-27225f4aa18c",
    "publishName": "",
    "reservedBudgetInHours": 0,
    "status": "New",
    "trainingType": "Regular"
  }
]
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-iterations-for-the-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<h3 id="get-iterations-for-the-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Iteration](#schemaiteration)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Get a specific iteration.

<a id="opIdGetIteration"></a>

> Code samples

```bash
curl https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/iterations/e31a14ab-5d78-4f7b-a267-3a1e4fd8a758 \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /projects/{projectId}/iterations/{iterationId}`

<h3 id="get-a-specific-iteration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The id of the project the iteration belongs to.|
|iterationId|path|string(uuid)|true|The id of the iteration to get.|

> Example responses

> 200 Response

```json
{
  "created": "2017-12-18T22:40:36Z",
  "domainId": "ee85a74c-405e-4adc-bb47-ffa8ca0c9f31",
  "exportable": false,
  "exportableTo": [
    "ONNX",
    "DockerFile",
    "TensorFlow",
    "CoreML"
  ],
  "id": "e31a14ab-5d78-4f7b-a267-3a1e4fd8a758",
  "lastModified": "2017-12-19T15:47:02Z",
  "name": "Iteration 2",
  "projectId": "64b822c5-8082-4b36-a426-27225f4aa18c",
  "publishName": "",
  "reservedBudgetInHours": 0,
  "status": "Completed",
  "trainedAt": "2017-12-19T15:47:02Z",
  "trainingType": "Regular"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-a-specific-iteration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Iteration](#schemaiteration)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Delete a specific iteration of a project.

<a id="opIdDeleteIteration"></a>

> Code samples

```bash
curl https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/iterations/e31a14ab-5d78-4f7b-a267-3a1e4fd8a758 \
  -X DELETE \
  -H "Training-Key: ${API_KEY}"
```

`DELETE /projects/{projectId}/iterations/{iterationId}`

<h3 id="delete-a-specific-iteration-of-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|iterationId|path|string(uuid)|true|The iteration id.|

<h3 id="delete-a-specific-iteration-of-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Update a specific iteration.

<a id="opIdUpdateIteration"></a>

> Code samples

```bash
curl https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/iterations/e31a14ab-5d78-4f7b-a267-3a1e4fd8a758 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`PATCH /projects/{projectId}/iterations/{iterationId}`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="update-a-specific-iteration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|Project id.|
|iterationId|path|string(uuid)|true|Iteration id.|
|body|body|[Iteration](#schemaiteration)|true|The updated iteration model.|
|» name|body|string|true|Gets or sets the name of the iteration.|

> Example responses

> 200 Response

```json
{
  "created": "2017-12-18T22:40:36Z",
  "domainId": "ee85a74c-405e-4adc-bb47-ffa8ca0c9f31",
  "exportable": false,
  "exportableTo": [
    "ONNX",
    "DockerFile",
    "TensorFlow",
    "CoreML"
  ],
  "id": "e31a14ab-5d78-4f7b-a267-3a1e4fd8a758",
  "lastModified": "2017-12-19T15:53:07Z",
  "name": "Best Iteration",
  "projectId": "64b822c5-8082-4b36-a426-27225f4aa18c",
  "publishName": "",
  "reservedBudgetInHours": 0,
  "status": "Completed",
  "trainedAt": "2017-12-19T15:47:02Z",
  "trainingType": "Regular"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="update-a-specific-iteration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Iteration](#schemaiteration)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Get the list of exports for a specific iteration.

<a id="opIdGetExports"></a>

> Code samples

```bash
curl https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/iterations/e31a14ab-5d78-4f7b-a267-3a1e4fd8a758/export \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /projects/{projectId}/iterations/{iterationId}/export`

<h3 id="get-the-list-of-exports-for-a-specific-iteration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|iterationId|path|string(uuid)|true|The iteration id.|

> Example responses

> 200 Response

```json
[
  {
    "downloadUri": "{Download URI}",
    "newerVersionAvailable": false,
    "platform": "TensorFlow",
    "status": "Done"
  }
]
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-the-list-of-exports-for-a-specific-iteration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<h3 id="get-the-list-of-exports-for-a-specific-iteration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Export](#schemaexport)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Export a trained iteration.

<a id="opIdExportIteration"></a>

> Code samples

```bash
curl 'https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/iterations/e31a14ab-5d78-4f7b-a267-3a1e4fd8a758/export?platform=TensorFlow' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`POST /projects/{projectId}/iterations/{iterationId}/export`

<h3 id="export-a-trained-iteration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|iterationId|path|string(uuid)|true|The iteration id.|
|platform|query|string|true|The target platform.|
|flavor|query|string|false|The flavor of the target platform.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|platform|CoreML|
|platform|TensorFlow|
|platform|DockerFile|
|platform|ONNX|
|platform|VAIDK|
|flavor|Linux|
|flavor|Windows|
|flavor|ONNX10|
|flavor|ONNX12|
|flavor|ARM|
|flavor|TensorFlowNormal|
|flavor|TensorFlowLite|

> Example responses

> 200 Response

```json
{
  "downloadUri": "",
  "newerVersionAvailable": false,
  "platform": "TensorFlow",
  "status": "Exporting"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="export-a-trained-iteration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Export](#schemaexport)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Get detailed performance information about an iteration.

<a id="opIdGetIterationPerformance"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/iterations/fe1e83c4-6f50-4899-9544-6bb08cf0e15a/performance \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /projects/{projectId}/iterations/{iterationId}/performance`

<h3 id="get-detailed-performance-information-about-an-iteration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The id of the project the iteration belongs to.|
|iterationId|path|string(uuid)|true|The id of the iteration to get.|
|threshold|query|number(float)|false|The threshold used to determine true predictions.|
|overlapThreshold|query|number(float)|false|If applicable, the bounding box overlap threshold used to determine true predictions.|

> Example responses

> 200 Response

```json
{
  "perTagPerformance": [
    {
      "id": "e31ff107-5505-4753-be42-b369b21b026c",
      "name": "Hemlock",
      "precision": 1,
      "precisionStdDeviation": 0,
      "recall": 1,
      "recallStdDeviation": 0
    },
    {
      "id": "349d72ac-0948-4d51-b1e4-c14a1f9b848a",
      "name": "Japanese Cherry",
      "precision": 1,
      "precisionStdDeviation": 0,
      "recall": 1,
      "recallStdDeviation": 0
    }
  ],
  "precision": 1,
  "precisionStdDeviation": 0,
  "recall": 1,
  "recallStdDeviation": 0
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-detailed-performance-information-about-an-iteration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IterationPerformance](#schemaiterationperformance)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Get image with its prediction for a given project iteration.

<a id="opIdGetImagePerformances"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/iterations/b7b9d99c-a2c6-4658-9900-a98d2ff5bc66/performance/images \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /projects/{projectId}/iterations/{iterationId}/performance/images`

This API supports batching and range selection. By default it will only return first 50 images matching images.
Use the {take} and {skip} parameters to control how many images to return in a given batch.
The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned

<h3 id="get-image-with-its-prediction-for-a-given-project-iteration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|iterationId|path|string(uuid)|true|The iteration id. Defaults to workspace.|
|tagIds|query|[string(uuid)]|false|A list of tags ids to filter the images. Defaults to all tagged images when null. Limited to 20.|
|orderBy|query|string|false|The ordering. Defaults to newest.|
|take|query|integer(int32)|false|Maximum number of images to return. Defaults to 50, limited to 256.|
|skip|query|integer(int32)|false|Number of images to skip before beginning the image batch. Defaults to 0.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|orderBy|Newest|
|orderBy|Oldest|

> Example responses

> 200 Response

```json
[
  {
    "created": "2018-01-31T20:18:26Z",
    "height": 1600,
    "id": "dfd2d346-3ed5-4e1e-857d-af4e32cec042",
    "imageUri": "<image uri>",
    "predictions": [
      {
        "boundingBox": {
          "height": 0.25,
          "left": 0.25,
          "top": 0.25,
          "width": 0.25
        },
        "probability": 1,
        "tagId": "b5f7e6a2-a481-49a6-afec-a7cef1af3544",
        "tagName": "Tag 1"
      }
    ],
    "regions": [],
    "tags": [],
    "thumbnailUri": "<thumbnail uri>",
    "width": 600
  }
]
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-image-with-its-prediction-for-a-given-project-iteration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<h3 id="get-image-with-its-prediction-for-a-given-project-iteration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ImagePerformance](#schemaimageperformance)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Gets the number of images tagged with the provided {tagIds} that have prediction results from training for the provided iteration {iterationId}.

<a id="opIdGetImagePerformanceCount"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/iterations/cf0f83fb-ebaa-4b25-8e34-613a6a0b8a12/performance/images/count \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /projects/{projectId}/iterations/{iterationId}/performance/images/count`

The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned

<h3 id="gets-the-number-of-images-tagged-with-the-provided-tagids-that-have-prediction-results-from-training-for-the-provided-iteration-iterationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|iterationId|path|string(uuid)|true|The iteration id. Defaults to workspace.|
|tagIds|query|[string(uuid)]|false|A list of tags ids to filter the images to count. Defaults to all tags when null.|

> Example responses

> 200 Response

```json
"1"
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="gets-the-number-of-images-tagged-with-the-provided-tagids-that-have-prediction-results-from-training-for-the-provided-iteration-iterationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Publish a specific iteration.

<a id="opIdPublishIteration"></a>

> Code samples

```bash
curl 'https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/iterations/e31a14ab-5d78-4f7b-a267-3a1e4fd8a758/publish?publishName=Model1&predictionId=%2Fsubscriptions%2F%7Bsubscription%7D%2FresourceGroups%2F%7Bresource%20group%20name%7D%2Fproviders%2FMicrosoft.CognitiveServices%2Faccounts%2F%7Bresource%20name%7D' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`POST /projects/{projectId}/iterations/{iterationId}/publish`

<h3 id="publish-a-specific-iteration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|iterationId|path|string(uuid)|true|The iteration id.|
|publishName|query|string|true|The name to give the published iteration.|
|predictionId|query|string|true|The id of the prediction resource to publish to.|

> Example responses

> 200 Response

```json
true
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="publish-a-specific-iteration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Unpublish a specific iteration.

<a id="opIdUnpublishIteration"></a>

> Code samples

```bash
curl https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/iterations/e31a14ab-5d78-4f7b-a267-3a1e4fd8a758/publish \
  -X DELETE \
  -H "Training-Key: ${API_KEY}"
```

`DELETE /projects/{projectId}/iterations/{iterationId}/publish`

<h3 id="unpublish-a-specific-iteration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|iterationId|path|string(uuid)|true|The iteration id.|

<h3 id="unpublish-a-specific-iteration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Queues project for training.

<a id="opIdTrainProject"></a>

> Code samples

```bash
curl https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/train \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}" \
  -d '{
    "selectedTags": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  }'
```

`POST /projects/{projectId}/train`

> Body parameter

```json
{
  "selectedTags": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

<h3 id="queues-project-for-training-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|trainingType|query|string|false|The type of training to use to train the project (default: Regular).|
|reservedBudgetInHours|query|integer(int32)|false|The number of hours reserved as budget for training (if applicable).|
|forceTrain|query|boolean|false|Whether to force train even if dataset and configuration does not change (default: false).|
|notificationEmailAddress|query|string|false|The email address to send notification to when training finishes (default: null).|
|body|body|[TrainingParameters](#schematrainingparameters)|false|Additional training parameters passed in to control how the project is trained.|
|» selectedTags|body|[string(uuid)]|false|List of tags selected for this training session, other tags in the project will be ignored.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|trainingType|Regular|
|trainingType|Advanced|

> Example responses

> 200 Response

```json
{
  "created": "2017-12-18T22:40:36Z",
  "exportable": false,
  "exportableTo": [
    "ONNX",
    "DockerFile",
    "TensorFlow",
    "CoreML"
  ],
  "id": "e31a14ab-5d78-4f7b-a267-3a1e4fd8a758",
  "lastModified": "2017-12-19T15:46:58Z",
  "name": "Iteration 2",
  "projectId": "64b822c5-8082-4b36-a426-27225f4aa18c",
  "publishName": "",
  "reservedBudgetInHours": 0,
  "status": "Training",
  "trainingType": "Regular"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="queues-project-for-training-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Iteration](#schemaiteration)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

<h1 id="custom-vision-training-client-imageapi">ImageApi</h1>

## Add the provided images to the set of training images.

<a id="opIdCreateImagesFromData"></a>

> Code samples

```bash
curl https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/images \
  -X POST \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}" \
  -F 'imageData=@/path/to/file'
```

`POST /projects/{projectId}/images`

This API accepts body content as multipart/form-data and application/octet-stream. When using multipart
multiple image files can be sent at once, with a maximum of 64 files

> Body parameter

```yaml
imageData: string
```

<h3 id="add-the-provided-images-to-the-set-of-training-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|tagIds|query|[string(uuid)]|false|The tags ids with which to tag each image. Limited to 20.|
|body|body|object|true|none|
|» imageData|body|string(binary)|true|Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 6MB.|

> Example responses

> 200 Response

```json
{
  "images": [
    {
      "image": {
        "created": "2017-12-19T15:56:10Z",
        "height": 900,
        "id": "4d6eb844-42ee-42bc-bd6f-c32455ef07c9",
        "originalImageUri": "{Image Uri}",
        "resizedImageUri": "{Resized Image Uri}",
        "tags": [
          {
            "created": "2017-12-19T15:56:09Z",
            "tagId": "b607964f-7bd6-4a3b-a869-6791fb6aab87",
            "tagName": "tag 1"
          }
        ],
        "thumbnailUri": "{Thumbnail Uri}",
        "width": 1095
      },
      "sourceUrl": "\"hemlock_10.jpg\"",
      "status": "OK"
    },
    {
      "image": {
        "created": "2017-12-19T15:56:10Z",
        "height": 1531,
        "id": "f1855a92-b873-47e7-b513-f07a667ceda1",
        "originalImageUri": "{Image Uri}",
        "resizedImageUri": "{Resized Image Uri}",
        "tags": [
          {
            "created": "2017-12-19T15:56:09Z",
            "tagId": "b607964f-7bd6-4a3b-a869-6791fb6aab87",
            "tagName": "tag 1"
          }
        ],
        "thumbnailUri": "{Thumbnail Uri}",
        "width": 900
      },
      "sourceUrl": "\"hemlock_6.jpg\"",
      "status": "OK"
    }
  ],
  "isBatchSuccessful": true
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="add-the-provided-images-to-the-set-of-training-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageCreateSummary](#schemaimagecreatesummary)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Delete images from the set of training images.

<a id="opIdDeleteImages"></a>

> Code samples

```bash
curl https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/images \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`DELETE /projects/{projectId}/images`

<h3 id="delete-images-from-the-set-of-training-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|imageIds|query|[string(uuid)]|false|Ids of the images to be deleted. Limited to 256 images per batch.|
|allImages|query|boolean|false|Flag to specify delete all images, specify this flag or a list of images. Using this flag will return a 202 response to indicate the images are being deleted.|
|allIterations|query|boolean|false|Removes these images from all iterations, not just the current workspace. Using this flag will return a 202 response to indicate the images are being deleted.|

> Example responses

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="delete-images-from-the-set-of-training-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|204|No Content|No Content|None|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Add the provided batch of images to the set of training images.

<a id="opIdCreateImagesFromFiles"></a>

> Code samples

```bash
curl https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/images/files \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}" \
  -d '{
    "images": [
      {
        "contents": "string",
        "name": "string",
        "regions": [
          {
            "height": 0,
            "left": 0,
            "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "top": 0,
            "width": 0
          }
        ],
        "tagIds": [
          "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        ]
      }
    ],
    "tagIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  }'
```

`POST /projects/{projectId}/images/files`

This API accepts a batch of files, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

> Body parameter

```json
{
  "images": [
    {
      "contents": "string",
      "name": "string",
      "regions": [
        {
          "height": 0,
          "left": 0,
          "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "top": 0,
          "width": 0
        }
      ],
      "tagIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ]
    }
  ],
  "tagIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

<h3 id="add-the-provided-batch-of-images-to-the-set-of-training-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|body|body|[ImageFileCreateBatch](#schemaimagefilecreatebatch)|true|The batch of image files to add. Limited to 64 images and 20 tags per batch.|
|» images|body|[[ImageFileCreateEntry](#schemaimagefilecreateentry)]|false|none|
|» tagIds|body|[string(uuid)]|false|none|

> Example responses

> 200 Response

```json
{
  "images": [
    {
      "image": {
        "created": "2017-12-19T15:56:10Z",
        "height": 900,
        "id": "4d6eb844-42ee-42bc-bd6f-c32455ef07c9",
        "originalImageUri": "{Image Uri}",
        "resizedImageUri": "{Resized Image Uri}",
        "tags": [
          {
            "created": "2017-12-19T15:56:09Z",
            "tagId": "b607964f-7bd6-4a3b-a869-6791fb6aab87",
            "tagName": "tag 1"
          }
        ],
        "thumbnailUri": "{Thumbnail Uri}",
        "width": 1095
      },
      "sourceUrl": "\"hemlock_10.jpg\"",
      "status": "OK"
    }
  ],
  "isBatchSuccessful": true
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="add-the-provided-batch-of-images-to-the-set-of-training-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageCreateSummary](#schemaimagecreatesummary)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Get images by id for a given project iteration.

<a id="opIdGetImagesByIds"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/images/id \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /projects/{projectId}/images/id`

This API will return a set of Images for the specified tags and optionally iteration. If no iteration is specified the
current workspace is used.

<h3 id="get-images-by-id-for-a-given-project-iteration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|imageIds|query|[string(uuid)]|false|The list of image ids to retrieve. Limited to 256.|
|iterationId|query|string(uuid)|false|The iteration id. Defaults to workspace.|

> Example responses

> 200 Response

```json
[]
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-images-by-id-for-a-given-project-iteration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<h3 id="get-images-by-id-for-a-given-project-iteration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Image](#schemaimage)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Add the specified predicted images to the set of training images.

<a id="opIdCreateImagesFromPredictions"></a>

> Code samples

```bash
curl https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/images/predictions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}" \
  -d '{
    "images": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "regions": [
          {
            "height": 0,
            "left": 0,
            "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "top": 0,
            "width": 0
          }
        ],
        "tagIds": [
          "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        ]
      }
    ],
    "tagIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  }'
```

`POST /projects/{projectId}/images/predictions`

This API creates a batch of images from predicted images specified. There is a limit of 64 images and 20 tags.

> Body parameter

```json
{
  "images": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "regions": [
        {
          "height": 0,
          "left": 0,
          "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "top": 0,
          "width": 0
        }
      ],
      "tagIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ]
    }
  ],
  "tagIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

<h3 id="add-the-specified-predicted-images-to-the-set-of-training-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|body|body|[ImageIdCreateBatch](#schemaimageidcreatebatch)|true|Image and tag ids. Limited to 64 images and 20 tags per batch.|
|» images|body|[[ImageIdCreateEntry](#schemaimageidcreateentry)]|false|none|
|» tagIds|body|[string(uuid)]|false|none|

> Example responses

> 200 Response

```json
{
  "images": [
    {
      "image": {
        "created": "2017-12-19T15:56:10Z",
        "height": 900,
        "id": "4d6eb844-42ee-42bc-bd6f-c32455ef07c9",
        "originalImageUri": "{Image Uri}",
        "resizedImageUri": "{Resized Image Uri}",
        "tags": [
          {
            "created": "2017-12-19T15:56:09Z",
            "tagId": "b607964f-7bd6-4a3b-a869-6791fb6aab87",
            "tagName": "tag 1"
          }
        ],
        "thumbnailUri": "{Thumbnail Uri}",
        "width": 1095
      },
      "sourceUrl": "\"hemlock_10.jpg\"",
      "status": "OK"
    }
  ],
  "isBatchSuccessful": true
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="add-the-specified-predicted-images-to-the-set-of-training-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageCreateSummary](#schemaimagecreatesummary)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Create a set of image regions.

<a id="opIdCreateImageRegions"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/images/regions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}" \
  -d '{
    "regions": [
      {
        "height": 0,
        "imageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "left": 0,
        "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "top": 0,
        "width": 0
      }
    ]
  }'
```

`POST /projects/{projectId}/images/regions`

This API accepts a batch of image regions, and optionally tags, to update existing images with region information.
There is a limit of 64 entries in the batch.

> Body parameter

```json
{
  "regions": [
    {
      "height": 0,
      "imageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "left": 0,
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "top": 0,
      "width": 0
    }
  ]
}
```

<h3 id="create-a-set-of-image-regions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|body|body|[ImageRegionCreateBatch](#schemaimageregioncreatebatch)|true|Batch of image regions which include a tag and bounding box. Limited to 64.|
|» regions|body|[[ImageRegionCreateEntry](#schemaimageregioncreateentry)]|false|none|

> Example responses

> 200 Response

```json
{
  "created": [],
  "duplicated": [],
  "exceeded": []
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="create-a-set-of-image-regions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageRegionCreateSummary](#schemaimageregioncreatesummary)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Delete a set of image regions.

<a id="opIdDeleteImageRegions"></a>

> Code samples

```bash
curl 'https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/images/regions?regionIds=' \
  -X DELETE \
  -H "Training-Key: ${API_KEY}"
```

`DELETE /projects/{projectId}/images/regions`

<h3 id="delete-a-set-of-image-regions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|regionIds|query|[string(uuid)]|true|Regions to delete. Limited to 64.|

<h3 id="delete-a-set-of-image-regions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.

<a id="opIdQuerySuggestedImages"></a>

> Code samples

```bash
curl 'https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/images/suggested?iterationId=b7b9d99c-a2c6-4658-9900-a98d2ff5bc66' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}" \
  -d '{
    "continuation": "string",
    "maxCount": 0,
    "session": "string",
    "sortBy": "UncertaintyAscending",
    "tagIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "threshold": 0
  }'
```

`POST /projects/{projectId}/images/suggested`

This API will fetch untagged images filtered by suggested tags Ids. It returns an empty array if no images are found.

> Body parameter

```json
{
  "continuation": "string",
  "maxCount": 0,
  "session": "string",
  "sortBy": "UncertaintyAscending",
  "tagIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "threshold": 0
}
```

<h3 id="get-untagged-images-whose-suggested-tags-match-given-tags-returns-empty-array-if-no-images-are-found-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|iterationId|query|string(uuid)|true|IterationId to use for the suggested tags and regions.|
|body|body|[SuggestedTagAndRegionQueryToken](#schemasuggestedtagandregionquerytoken)|true|Contains properties we need to query suggested images.|
|» continuation|body|string|false|Continuation Id for database pagination. Initially null but later used to paginate.|
|» maxCount|body|integer(int32)|false|Maximum number of results you want to be returned in the response.|
|» session|body|string|false|SessionId for database query. Initially set to null but later used to paginate.|
|» sortBy|body|string|false|OrderBy. Ordering mechanism for your results.|
|» tagIds|body|[string(uuid)]|false|Existing TagIds in project to filter suggested tags on.|
|» threshold|body|number(double)|false|Confidence threshold to filter suggested tags on.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» sortBy|UncertaintyAscending|
|» sortBy|UncertaintyDescending|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "created": "2018-01-31T20:18:26Z",
      "domain": "b30a91ae-e3c1-4f73-a81e-c270bff27c39",
      "id": "dfd2d346-3ed5-4e1e-857d-af4e32cec042",
      "iteration": "b7b9d99c-a2c6-4658-9900-a98d2ff5bc66",
      "originalImageUri": "<image uri>",
      "predictions": [
        {
          "probability": 1,
          "tagId": "b5f7e6a2-a481-49a6-afec-a7cef1af3544",
          "tagName": "Tag 1"
        },
        {
          "probability": 3.60627153e-12,
          "tagId": "45619cda-d1c9-4bc8-a3e1-87c5d81adbc3",
          "tagName": "Tag 2"
        }
      ],
      "project": "8988643a-ae70-447d-9a22-15c4255e5ecb",
      "resizedImageUri": "<resized image uri>",
      "thumbnailUri": "<thumbnail uri>"
    }
  ],
  "token": {
    "continuation": "",
    "maxCount": 0,
    "session": "1:286613",
    "sortBy": "Newest",
    "tagIds": [
      "b5f7e6a2-a481-49a6-afec-a7cef1af3544"
    ]
  }
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-untagged-images-whose-suggested-tags-match-given-tags-returns-empty-array-if-no-images-are-found-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SuggestedTagAndRegionQuery](#schemasuggestedtagandregionquery)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.

<a id="opIdQuerySuggestedImageCount"></a>

> Code samples

```bash
curl 'https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/images/suggested/count?iterationId=b7b9d99c-a2c6-4658-9900-a98d2ff5bc66' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}" \
  -d '{
    "tagIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "threshold": 0
  }'
```

`POST /projects/{projectId}/images/suggested/count`

This API takes in tagIds to get count of untagged images per suggested tags for a given threshold.

> Body parameter

```json
{
  "tagIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "threshold": 0
}
```

<h3 id="get-count-of-images-whose-suggested-tags-match-given-tags-and-their-probabilities-are-greater-than-or-equal-to-the-given-threshold-returns-count-as-0-if-none-found-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|iterationId|query|string(uuid)|true|IterationId to use for the suggested tags and regions.|
|body|body|[TagFilter](#schematagfilter)|true|Model that contains tagIds, threshold and projectType to query by.|
|» tagIds|body|[string(uuid)]|false|Existing TagIds in project to get suggested tags count for.|
|» threshold|body|number(double)|false|Confidence threshold to filter suggested tags on.|

> Example responses

> 200 Response

```json
{
  "b5f7e6a2-a481-49a6-afec-a7cef1af3544": 1
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-count-of-images-whose-suggested-tags-match-given-tags-and-their-probabilities-are-greater-than-or-equal-to-the-given-threshold-returns-count-as-0-if-none-found-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<h3 id="get-count-of-images-whose-suggested-tags-match-given-tags-and-their-probabilities-are-greater-than-or-equal-to-the-given-threshold-returns-count-as-0-if-none-found-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Get tagged images for a given project iteration.

<a id="opIdGetTaggedImages"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/images/tagged \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /projects/{projectId}/images/tagged`

This API supports batching and range selection. By default it will only return first 50 images matching images.
Use the {take} and {skip} parameters to control how many images to return in a given batch.
The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned

<h3 id="get-tagged-images-for-a-given-project-iteration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|iterationId|query|string(uuid)|false|The iteration id. Defaults to workspace.|
|tagIds|query|[string(uuid)]|false|A list of tags ids to filter the images. Defaults to all tagged images when null. Limited to 20.|
|orderBy|query|string|false|The ordering. Defaults to newest.|
|take|query|integer(int32)|false|Maximum number of images to return. Defaults to 50, limited to 256.|
|skip|query|integer(int32)|false|Number of images to skip before beginning the image batch. Defaults to 0.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|orderBy|Newest|
|orderBy|Oldest|

> Example responses

> 200 Response

```json
[]
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-tagged-images-for-a-given-project-iteration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<h3 id="get-tagged-images-for-a-given-project-iteration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Image](#schemaimage)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Gets the number of images tagged with the provided {tagIds}.

<a id="opIdGetTaggedImageCount"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/images/tagged/count \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /projects/{projectId}/images/tagged/count`

The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned

<h3 id="gets-the-number-of-images-tagged-with-the-provided-tagids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|iterationId|query|string(uuid)|false|The iteration id. Defaults to workspace.|
|tagIds|query|[string(uuid)]|false|A list of tags ids to filter the images to count. Defaults to all tags when null.|

> Example responses

> 200 Response

```json
"10"
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="gets-the-number-of-images-tagged-with-the-provided-tagids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Associate a set of images with a set of tags.

<a id="opIdCreateImageTags"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/images/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}" \
  -d '{
    "tags": [
      {
        "imageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  }'
```

`POST /projects/{projectId}/images/tags`

> Body parameter

```json
{
  "tags": [
    {
      "imageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

<h3 id="associate-a-set-of-images-with-a-set-of-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|body|body|[ImageTagCreateBatch](#schemaimagetagcreatebatch)|true|Batch of image tags. Limited to 128 tags per batch.|
|» tags|body|[[ImageTagCreateEntry](#schemaimagetagcreateentry)]|false|Image Tag entries to include in this batch.|

> Example responses

> 200 Response

```json
{
  "created": [
    {
      "imageId": "e31a14ab-5d78-4f7b-a267-3a1e4fd8a758",
      "tagId": "349d72ac-0948-4d51-b1e4-c14a1f9b848a"
    }
  ]
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="associate-a-set-of-images-with-a-set-of-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageTagCreateSummary](#schemaimagetagcreatesummary)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Remove a set of tags from a set of images.

<a id="opIdDeleteImageTags"></a>

> Code samples

```bash
curl 'https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/images/tags?imageIds=e31a14ab-5d78-4f7b-a267-3a1e4fd8a758%2Ccf0f83fb-ebaa-4b25-8e34-613a6a0b8a12&tagIds=e31a14ab-5d78-4f7b-a267-3a1e4fd8a758%2Ccf0f83fb-ebaa-4b25-8e34-613a6a0b8a12' \
  -X DELETE \
  -H "Training-Key: ${API_KEY}"
```

`DELETE /projects/{projectId}/images/tags`

<h3 id="remove-a-set-of-tags-from-a-set-of-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|imageIds|query|[string(uuid)]|true|Image ids. Limited to 64 images.|
|tagIds|query|[string(uuid)]|true|Tags to be deleted from the specified images. Limited to 20 tags.|

<h3 id="remove-a-set-of-tags-from-a-set-of-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Get untagged images for a given project iteration.

<a id="opIdGetUntaggedImages"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/images/untagged \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /projects/{projectId}/images/untagged`

This API supports batching and range selection. By default it will only return first 50 images matching images.
Use the {take} and {skip} parameters to control how many images to return in a given batch.

<h3 id="get-untagged-images-for-a-given-project-iteration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|iterationId|query|string(uuid)|false|The iteration id. Defaults to workspace.|
|orderBy|query|string|false|The ordering. Defaults to newest.|
|take|query|integer(int32)|false|Maximum number of images to return. Defaults to 50, limited to 256.|
|skip|query|integer(int32)|false|Number of images to skip before beginning the image batch. Defaults to 0.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|orderBy|Newest|
|orderBy|Oldest|

> Example responses

> 200 Response

```json
[]
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-untagged-images-for-a-given-project-iteration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<h3 id="get-untagged-images-for-a-given-project-iteration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Image](#schemaimage)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Gets the number of untagged images.

<a id="opIdGetUntaggedImageCount"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/images/untagged/count \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /projects/{projectId}/images/untagged/count`

This API returns the images which have no tags for a given project and optionally an iteration. If no iteration is specified the
current workspace is used.

<h3 id="gets-the-number-of-untagged-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|iterationId|query|string(uuid)|false|The iteration id. Defaults to workspace.|

> Example responses

> 200 Response

```json
"10"
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="gets-the-number-of-untagged-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Add the provided images urls to the set of training images.

<a id="opIdCreateImagesFromUrls"></a>

> Code samples

```bash
curl https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/images/urls \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}" \
  -d '{
    "images": [
      {
        "regions": [
          {
            "height": 0,
            "left": 0,
            "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "top": 0,
            "width": 0
          }
        ],
        "tagIds": [
          "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        ],
        "url": "string"
      }
    ],
    "tagIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  }'
```

`POST /projects/{projectId}/images/urls`

This API accepts a batch of urls, and optionally tags, to create images. There is a limit of 64 images and 20 tags.

> Body parameter

```json
{
  "images": [
    {
      "regions": [
        {
          "height": 0,
          "left": 0,
          "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "top": 0,
          "width": 0
        }
      ],
      "tagIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "url": "string"
    }
  ],
  "tagIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

<h3 id="add-the-provided-images-urls-to-the-set-of-training-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|body|body|[ImageUrlCreateBatch](#schemaimageurlcreatebatch)|true|Image urls and tag ids. Limited to 64 images and 20 tags per batch.|
|» images|body|[[ImageUrlCreateEntry](#schemaimageurlcreateentry)]|false|none|
|» tagIds|body|[string(uuid)]|false|none|

> Example responses

> 200 Response

```json
{
  "images": [
    {
      "image": {
        "created": "2017-12-19T15:56:10Z",
        "height": 900,
        "id": "4d6eb844-42ee-42bc-bd6f-c32455ef07c9",
        "originalImageUri": "{Image Uri}",
        "resizedImageUri": "{Resized Image Uri}",
        "tags": [
          {
            "created": "2017-12-19T15:56:09Z",
            "tagId": "b607964f-7bd6-4a3b-a869-6791fb6aab87",
            "tagName": "tag name"
          }
        ],
        "thumbnailUri": "{Thumbnail Uri}",
        "width": 1095
      },
      "sourceUrl": "{url to image}",
      "status": "OK"
    }
  ],
  "isBatchSuccessful": true
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="add-the-provided-images-urls-to-the-set-of-training-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageCreateSummary](#schemaimagecreatesummary)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

<h1 id="custom-vision-training-client-imageregionproposalapi">ImageRegionProposalApi</h1>

## Get region proposals for an image. Returns empty array if no proposals are found.

<a id="opIdGetImageRegionProposals"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/images/4d6eb844-42ee-42bc-bd6f-c32455ef07c9/regionproposals \
  -X POST \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`POST /projects/{projectId}/images/{imageId}/regionproposals`

This API will get region proposals for an image along with confidences for the region. It returns an empty array if no proposals are found.

<h3 id="get-region-proposals-for-an-image-returns-empty-array-if-no-proposals-are-found-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|imageId|path|string(uuid)|true|The image id.|

> Example responses

> 200 Response

```json
{
  "imageId": "4d6eb844-42ee-42bc-bd6f-c32455ef07c9",
  "projectId": "bc3f7dad-5544-468c-8573-3ef04d55463e",
  "proposals": [
    {
      "boundingBox": {
        "height": 0.25,
        "left": 0.25,
        "top": 0.25,
        "width": 0.25
      },
      "confidence": 0.25
    }
  ]
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-region-proposals-for-an-image-returns-empty-array-if-no-proposals-are-found-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageRegionProposal](#schemaimageregionproposal)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

<h1 id="custom-vision-training-client-predictionsapi">PredictionsApi</h1>

## Delete a set of predicted images and their associated prediction results.

<a id="opIdDeletePrediction"></a>

> Code samples

```bash
curl 'https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/predictions?ids=e31a14ab-5d78-4f7b-a267-3a1e4fd8a758%2Ccf0f83fb-ebaa-4b25-8e34-613a6a0b8a12' \
  -X DELETE \
  -H "Training-Key: ${API_KEY}"
```

`DELETE /projects/{projectId}/predictions`

<h3 id="delete-a-set-of-predicted-images-and-their-associated-prediction-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|ids|query|[string(uuid)]|true|The prediction ids. Limited to 64.|

<h3 id="delete-a-set-of-predicted-images-and-their-associated-prediction-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Get images that were sent to your prediction endpoint.

<a id="opIdQueryPredictions"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/predictions/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}" \
  -d '{
    "application": "string",
    "continuation": "string",
    "endTime": "1970-01-01T00:00:00Z",
    "iterationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "maxCount": 0,
    "orderBy": "Newest",
    "session": "string",
    "startTime": "1970-01-01T00:00:00Z",
    "tags": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "maxThreshold": 0,
        "minThreshold": 0
      }
    ]
  }'
```

`POST /projects/{projectId}/predictions/query`

> Body parameter

```json
{
  "application": "string",
  "continuation": "string",
  "endTime": "1970-01-01T00:00:00Z",
  "iterationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "maxCount": 0,
  "orderBy": "Newest",
  "session": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "tags": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "maxThreshold": 0,
      "minThreshold": 0
    }
  ]
}
```

<h3 id="get-images-that-were-sent-to-your-prediction-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|body|body|[PredictionQueryToken](#schemapredictionquerytoken)|true|Parameters used to query the predictions. Limited to combining 2 tags.|
|» application|body|string|false|none|
|» continuation|body|string|false|none|
|» endTime|body|string(date-time) \| null|false|none|
|» iterationId|body|string(uuid) \| null|false|none|
|» maxCount|body|integer(int32)|false|none|
|» orderBy|body|string|false|none|
|» session|body|string|false|none|
|» startTime|body|string(date-time) \| null|false|none|
|» tags|body|[[PredictionQueryTag](#schemapredictionquerytag)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» orderBy|Newest|
|» orderBy|Oldest|
|» orderBy|Suggested|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "created": "2018-01-31T20:18:26Z",
      "domain": "b30a91ae-e3c1-4f73-a81e-c270bff27c39",
      "id": "dfd2d346-3ed5-4e1e-857d-af4e32cec042",
      "iteration": "b7b9d99c-a2c6-4658-9900-a98d2ff5bc66",
      "originalImageUri": "<image uri>",
      "predictions": [
        {
          "probability": 1,
          "tagId": "b5f7e6a2-a481-49a6-afec-a7cef1af3544",
          "tagName": "Tag 1"
        },
        {
          "probability": 3.60627153e-12,
          "tagId": "45619cda-d1c9-4bc8-a3e1-87c5d81adbc3",
          "tagName": "Tag 2"
        }
      ],
      "project": "8988643a-ae70-447d-9a22-15c4255e5ecb",
      "resizedImageUri": "<resized image uri>",
      "thumbnailUri": "<thumbnail uri>"
    }
  ],
  "token": {
    "application": "",
    "continuation": "",
    "maxCount": 0,
    "orderBy": "Newest",
    "session": "1:286613",
    "tags": [
      {
        "id": "b5f7e6a2-a481-49a6-afec-a7cef1af3544",
        "maxThreshold": 1,
        "minThreshold": 0.9
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-images-that-were-sent-to-your-prediction-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PredictionQueryResult](#schemapredictionqueryresult)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Quick test an image.

<a id="opIdQuickTestImage"></a>

> Code samples

```bash
curl https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/quicktest/image \
  -X POST \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}" \
  -F 'imageData=@/path/to/file'
```

`POST /projects/{projectId}/quicktest/image`

> Body parameter

```yaml
imageData: string
```

<h3 id="quick-test-an-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|iterationId|query|string(uuid)|false|Optional. Specifies the id of a particular iteration to evaluate against.<br>            The default iteration for the project will be used when not specified.|
|store|query|boolean|false|Optional. Specifies whether or not to store the result of this prediction. The default is true, to store.|
|body|body|object|true|none|
|» imageData|body|string(binary)|true|Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 6MB.|

> Example responses

> 200 Response

```json
{
  "created": "2017-12-19T14:21:41Z",
  "id": "951098b2-9b69-427b-bddb-d5cb618874e3",
  "iteration": "fe1e83c4-6f50-4899-9544-6bb08cf0e15a",
  "predictions": [
    {
      "probability": 0.05149666,
      "tagId": "e31ff107-5505-4753-be42-b369b21b026c",
      "tagName": "Hemlock"
    },
    {
      "probability": 0,
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

<h3 id="quick-test-an-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImagePrediction](#schemaimageprediction)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Quick test an image url.

<a id="opIdQuickTestImageUrl"></a>

> Code samples

```bash
curl https://example.com/projects/64b822c5-8082-4b36-a426-27225f4aa18c/quicktest/url \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}" \
  -d '{
    "url": "string"
  }'
```

`POST /projects/{projectId}/quicktest/url`

> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="quick-test-an-image-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project to evaluate against.|
|iterationId|query|string(uuid)|false|Optional. Specifies the id of a particular iteration to evaluate against.<br>            The default iteration for the project will be used when not specified.|
|store|query|boolean|false|Optional. Specifies whether or not to store the result of this prediction. The default is true, to store.|
|body|body|[ImageUrl](#schemaimageurl)|true|An ImageUrl that contains the url of the image to be evaluated.|
|» url|body|string|true|Url of the image.|

> Example responses

> 200 Response

```json
{
  "created": "2017-12-19T14:21:41Z",
  "id": "951098b2-9b69-427b-bddb-d5cb618874e3",
  "iteration": "fe1e83c4-6f50-4899-9544-6bb08cf0e15a",
  "predictions": [
    {
      "probability": 0.05149666,
      "tagId": "e31ff107-5505-4753-be42-b369b21b026c",
      "tagName": "Hemlock"
    },
    {
      "probability": 0,
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

<h3 id="quick-test-an-image-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImagePrediction](#schemaimageprediction)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

<h1 id="custom-vision-training-client-tagsapi">TagsApi</h1>

## Get the tags for a given project and iteration.

<a id="opIdGetTags"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/tags \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /projects/{projectId}/tags`

<h3 id="get-the-tags-for-a-given-project-and-iteration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|iterationId|query|string(uuid)|false|The iteration id. Defaults to workspace.|

> Example responses

> 200 Response

```json
[
  {
    "description": "Description of Tag1",
    "id": "9e27bc1b-7ae7-4e3b-a4e5-36153479dc01",
    "imageCount": 0,
    "name": "Tag1",
    "type": "Regular"
  }
]
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-the-tags-for-a-given-project-and-iteration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<h3 id="get-the-tags-for-a-given-project-and-iteration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tag](#schematag)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Create a tag for the project.

<a id="opIdCreateTag"></a>

> Code samples

```bash
curl 'https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/tags?name=Tag1' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`POST /projects/{projectId}/tags`

<h3 id="create-a-tag-for-the-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|name|query|string|true|The tag name.|
|description|query|string|false|Optional description for the tag.|
|type|query|string|false|Optional type for the tag.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|Regular|
|type|Negative|

> Example responses

> 200 Response

```json
{
  "description": "Description of Tag1",
  "id": "9e27bc1b-7ae7-4e3b-a4e5-36153479dc01",
  "imageCount": 0,
  "name": "Tag1",
  "type": "Regular"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="create-a-tag-for-the-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tag](#schematag)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Get information about a specific tag.

<a id="opIdGetTag"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/tags/9e27bc1b-7ae7-4e3b-a4e5-36153479dc01 \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`GET /projects/{projectId}/tags/{tagId}`

<h3 id="get-information-about-a-specific-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project this tag belongs to.|
|tagId|path|string(uuid)|true|The tag id.|
|iterationId|query|string(uuid)|false|The iteration to retrieve this tag from. Optional, defaults to current training set.|

> Example responses

> 200 Response

```json
{
  "description": "Description of Tag1",
  "id": "9e27bc1b-7ae7-4e3b-a4e5-36153479dc01",
  "imageCount": 0,
  "name": "Tag1",
  "type": "Regular"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="get-information-about-a-specific-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tag](#schematag)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Delete a tag from the project.

<a id="opIdDeleteTag"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/tags/9e27bc1b-7ae7-4e3b-a4e5-36153479dc01 \
  -X DELETE \
  -H "Training-Key: ${API_KEY}"
```

`DELETE /projects/{projectId}/tags/{tagId}`

<h3 id="delete-a-tag-from-the-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|tagId|path|string(uuid)|true|Id of the tag to be deleted.|

<h3 id="delete-a-tag-from-the-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

## Update a tag.

<a id="opIdUpdateTag"></a>

> Code samples

```bash
curl https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/tags/9e27bc1b-7ae7-4e3b-a4e5-36153479dc01 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string",
    "type": "Regular"
  }'
```

`PATCH /projects/{projectId}/tags/{tagId}`

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "type": "Regular"
}
```

<h3 id="update-a-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|tagId|path|string(uuid)|true|The id of the target tag.|
|body|body|[Tag](#schematag)|true|The updated tag model.|
|» description|body|string \| null|true|Gets or sets the description of the tag.|
|» name|body|string|true|Gets or sets the name of the tag.|
|» type|body|string|true|Gets or sets the type of the tag.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|Regular|
|» type|Negative|

> Example responses

> 200 Response

```json
{
  "description": "Better description",
  "id": "9e27bc1b-7ae7-4e3b-a4e5-36153479dc01",
  "imageCount": 0,
  "name": "Better Tag Name",
  "type": "Regular"
}
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="update-a-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tag](#schematag)|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apim_key
</aside>

<h1 id="custom-vision-training-client-suggesttagsandregionsapi">SuggestTagsAndRegionsApi</h1>

## Suggest tags and regions for an array/batch of untagged images. Returns empty array if no tags are found.

<a id="opIdSuggestTagsAndRegions"></a>

> Code samples

```bash
curl 'https://example.com/projects/bc3f7dad-5544-468c-8573-3ef04d55463e/tagsandregions/suggestions?iterationId=4d6eb844-42ee-42bc-bd6f-c32455ef07c9&imageIds=e7f08c23-9e54-49f7-b609-69a0240ba306%2Cce632666-4b66-4adb-aa0a-ad8b7c32df06' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Training-Key: ${API_KEY}"
```

`POST /projects/{projectId}/tagsandregions/suggestions`

This API will get suggested tags and regions for an array/batch of untagged images along with confidences for the tags. It returns an empty array if no tags are found.
There is a limit of 64 images in the batch.

<h3 id="suggest-tags-and-regions-for-an-arraybatch-of-untagged-images-returns-empty-array-if-no-tags-are-found-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|The project id.|
|iterationId|query|string(uuid)|true|IterationId to use for tag and region suggestion.|
|imageIds|query|[string(uuid)]|true|Array of image ids tag suggestion are needed for. Use GetUntaggedImages API to get imageIds.|

> Example responses

> 200 Response

```json
[
  {
    "created": "2019-07-08T13:43:18Z",
    "id": "8497e814-23cc-47d7-b24b-691cef0bcec9",
    "iteration": "ce271ee4-cc13-460f-b66f-993f8005522d",
    "predictionUncertainty": 0.32,
    "predictions": [
      {
        "probability": 1,
        "tagId": "b5f7e6a2-a481-49a6-afec-a7cef1af3544",
        "tagName": "Tag 1"
      },
      {
        "probability": 3.60627153e-12,
        "tagId": "45619cda-d1c9-4bc8-a3e1-87c5d81adbc3",
        "tagName": "Tag 2"
      }
    ],
    "project": "bc3f7dad-5544-468c-8573-3ef04d55463e"
  }
]
```

> default Response

```json
{
  "code": "NoError",
  "message": "string"
}
```

<h3 id="suggest-tags-and-regions-for-an-arraybatch-of-untagged-images-returns-empty-array-if-no-tags-are-found-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|Error response|[CustomVisionError](#schemacustomvisionerror)|

<h3 id="suggest-tags-and-regions-for-an-arraybatch-of-untagged-images-returns-empty-array-if-no-tags-are-found-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SuggestedTagAndRegion](#schemasuggestedtagandregion)]|false|none|none|

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
|code|BadRequestProjectImagePreprocessingSettings|
|code|BadRequestProjectDuplicated|
|code|BadRequestIterationName|
|code|BadRequestIterationNameNotUnique|
|code|BadRequestIterationDescription|
|code|BadRequestIterationIsNotTrained|
|code|BadRequestIterationValidationFailed|
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
|code|BadRequestIterationNotPublished|
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
|code|BadRequestInvalidImportToken|
|code|BadRequestExportWhileTraining|
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
|code|ErrorIterationCopyFailed|
|code|ErrorPreparePerformanceMigrationFailed|
|code|ErrorProjectInvalidWorkspace|
|code|ErrorProjectInvalidPipelineConfiguration|
|code|ErrorProjectInvalidDomain|
|code|ErrorProjectTrainingRequestFailed|
|code|ErrorProjectImportRequestFailed|
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

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
{
  "enabled": true,
  "exportable": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": "Classification"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|read-only|none|
|exportable|boolean|false|read-only|none|
|id|string(uuid)|false|read-only|none|
|name|string|false|read-only|none|
|type|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Classification|
|type|ObjectDetection|

<h2 id="tocS_Export">Export</h2>
<!-- backwards compatibility -->
<a id="schemaexport"></a>
<a id="schema_Export"></a>
<a id="tocSexport"></a>
<a id="tocsexport"></a>

```json
{
  "downloadUri": "string",
  "flavor": "Linux",
  "newerVersionAvailable": true,
  "platform": "CoreML",
  "status": "Exporting"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadUri|string|false|read-only|URI used to download the model.|
|flavor|string \| null|false|read-only|Flavor of the export. These are specializations of the export platform.<br>Docker platform has valid flavors: Linux, Windows, ARM.<br>Tensorflow platform has valid flavors: TensorFlowNormal, TensorFlowLite.<br>ONNX platform has valid flavors: ONNX10, ONNX12.|
|newerVersionAvailable|boolean|false|read-only|Indicates an updated version of the export package is available and should be re-exported for the latest changes.|
|platform|string|false|read-only|Platform of the export.|
|status|string|false|read-only|Status of the export.|

#### Enumerated Values

|Property|Value|
|---|---|
|flavor|Linux|
|flavor|Windows|
|flavor|ONNX10|
|flavor|ONNX12|
|flavor|ARM|
|flavor|TensorFlowNormal|
|flavor|TensorFlowLite|
|platform|CoreML|
|platform|TensorFlow|
|platform|DockerFile|
|platform|ONNX|
|platform|VAIDK|
|status|Exporting|
|status|Failed|
|status|Done|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "height": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "originalImageUri": "string",
  "regions": [
    {
      "created": "1970-01-01T00:00:00Z",
      "height": 0,
      "left": 0,
      "regionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tagName": "string",
      "top": 0,
      "width": 0
    }
  ],
  "resizedImageUri": "string",
  "tags": [
    {
      "created": "1970-01-01T00:00:00Z",
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tagName": "string"
    }
  ],
  "thumbnailUri": "string",
  "width": 0
}
```

Image model to be sent as JSON.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|read-only|Date the image was created.|
|height|integer(int32)|false|read-only|Height of the image.|
|id|string(uuid)|false|read-only|Id of the image.|
|originalImageUri|string|false|read-only|The URI to the original uploaded image.|
|regions|[[ImageRegion](#schemaimageregion)]|false|read-only|Regions associated with this image.|
|resizedImageUri|string|false|read-only|The URI to the (resized) image used for training.|
|tags|[[ImageTag](#schemaimagetag)]|false|read-only|Tags associated with this image.|
|thumbnailUri|string|false|read-only|The URI to the thumbnail of the original image.|
|width|integer(int32)|false|read-only|Width of the image.|

<h2 id="tocS_ImageCreateResult">ImageCreateResult</h2>
<!-- backwards compatibility -->
<a id="schemaimagecreateresult"></a>
<a id="schema_ImageCreateResult"></a>
<a id="tocSimagecreateresult"></a>
<a id="tocsimagecreateresult"></a>

```json
{
  "image": {
    "created": "1970-01-01T00:00:00Z",
    "height": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "originalImageUri": "string",
    "regions": [
      {
        "created": "1970-01-01T00:00:00Z",
        "height": 0,
        "left": 0,
        "regionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "tagName": "string",
        "top": 0,
        "width": 0
      }
    ],
    "resizedImageUri": "string",
    "tags": [
      {
        "created": "1970-01-01T00:00:00Z",
        "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "tagName": "string"
      }
    ],
    "thumbnailUri": "string",
    "width": 0
  },
  "sourceUrl": "string",
  "status": "OK"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|[Image](#schemaimage)|false|none|Image model to be sent as JSON.|
|sourceUrl|string|false|read-only|Source URL of the image.|
|status|string|false|read-only|Status of the image creation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|OKDuplicate|
|status|ErrorSource|
|status|ErrorImageFormat|
|status|ErrorImageSize|
|status|ErrorStorage|
|status|ErrorLimitExceed|
|status|ErrorTagLimitExceed|
|status|ErrorRegionLimitExceed|
|status|ErrorUnknown|
|status|ErrorNegativeAndRegularTagOnSameImage|

<h2 id="tocS_ImageCreateSummary">ImageCreateSummary</h2>
<!-- backwards compatibility -->
<a id="schemaimagecreatesummary"></a>
<a id="schema_ImageCreateSummary"></a>
<a id="tocSimagecreatesummary"></a>
<a id="tocsimagecreatesummary"></a>

```json
{
  "images": [
    {
      "image": {
        "created": "1970-01-01T00:00:00Z",
        "height": 0,
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "originalImageUri": "string",
        "regions": [
          {
            "created": "1970-01-01T00:00:00Z",
            "height": 0,
            "left": 0,
            "regionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "tagName": "string",
            "top": 0,
            "width": 0
          }
        ],
        "resizedImageUri": "string",
        "tags": [
          {
            "created": "1970-01-01T00:00:00Z",
            "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "tagName": "string"
          }
        ],
        "thumbnailUri": "string",
        "width": 0
      },
      "sourceUrl": "string",
      "status": "OK"
    }
  ],
  "isBatchSuccessful": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|images|[[ImageCreateResult](#schemaimagecreateresult)]|false|read-only|List of the image creation results.|
|isBatchSuccessful|boolean|false|read-only|True if all of the images in the batch were created successfully, otherwise false.|

<h2 id="tocS_ImageFileCreateBatch">ImageFileCreateBatch</h2>
<!-- backwards compatibility -->
<a id="schemaimagefilecreatebatch"></a>
<a id="schema_ImageFileCreateBatch"></a>
<a id="tocSimagefilecreatebatch"></a>
<a id="tocsimagefilecreatebatch"></a>

```json
{
  "images": [
    {
      "contents": "string",
      "name": "string",
      "regions": [
        {
          "height": 0,
          "left": 0,
          "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "top": 0,
          "width": 0
        }
      ],
      "tagIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ]
    }
  ],
  "tagIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|images|[[ImageFileCreateEntry](#schemaimagefilecreateentry)]|false|none|none|
|tagIds|[string(uuid)]|false|none|none|

<h2 id="tocS_ImageFileCreateEntry">ImageFileCreateEntry</h2>
<!-- backwards compatibility -->
<a id="schemaimagefilecreateentry"></a>
<a id="schema_ImageFileCreateEntry"></a>
<a id="tocSimagefilecreateentry"></a>
<a id="tocsimagefilecreateentry"></a>

```json
{
  "contents": "string",
  "name": "string",
  "regions": [
    {
      "height": 0,
      "left": 0,
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "top": 0,
      "width": 0
    }
  ],
  "tagIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|string(byte)|false|none|none|
|name|string|false|none|none|
|regions|[[Region](#schemaregion)]|false|none|none|
|tagIds|[string(uuid)]|false|none|none|

<h2 id="tocS_ImageIdCreateBatch">ImageIdCreateBatch</h2>
<!-- backwards compatibility -->
<a id="schemaimageidcreatebatch"></a>
<a id="schema_ImageIdCreateBatch"></a>
<a id="tocSimageidcreatebatch"></a>
<a id="tocsimageidcreatebatch"></a>

```json
{
  "images": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "regions": [
        {
          "height": 0,
          "left": 0,
          "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "top": 0,
          "width": 0
        }
      ],
      "tagIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ]
    }
  ],
  "tagIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|images|[[ImageIdCreateEntry](#schemaimageidcreateentry)]|false|none|none|
|tagIds|[string(uuid)]|false|none|none|

<h2 id="tocS_ImageIdCreateEntry">ImageIdCreateEntry</h2>
<!-- backwards compatibility -->
<a id="schemaimageidcreateentry"></a>
<a id="schema_ImageIdCreateEntry"></a>
<a id="tocSimageidcreateentry"></a>
<a id="tocsimageidcreateentry"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "regions": [
    {
      "height": 0,
      "left": 0,
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "top": 0,
      "width": 0
    }
  ],
  "tagIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|Id of the image.|
|regions|[[Region](#schemaregion)]|false|none|none|
|tagIds|[string(uuid)]|false|none|none|

<h2 id="tocS_ImagePerformance">ImagePerformance</h2>
<!-- backwards compatibility -->
<a id="schemaimageperformance"></a>
<a id="schema_ImagePerformance"></a>
<a id="tocSimageperformance"></a>
<a id="tocsimageperformance"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "height": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "imageUri": "string",
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
  "regions": [
    {
      "created": "1970-01-01T00:00:00Z",
      "height": 0,
      "left": 0,
      "regionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tagName": "string",
      "top": 0,
      "width": 0
    }
  ],
  "tags": [
    {
      "created": "1970-01-01T00:00:00Z",
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tagName": "string"
    }
  ],
  "thumbnailUri": "string",
  "width": 0
}
```

Image performance model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|read-only|none|
|height|integer(int32)|false|read-only|none|
|id|string(uuid)|false|read-only|none|
|imageUri|string|false|read-only|none|
|predictions|[[Prediction](#schemaprediction)]|false|read-only|none|
|regions|[[ImageRegion](#schemaimageregion)]|false|read-only|none|
|tags|[[ImageTag](#schemaimagetag)]|false|read-only|none|
|thumbnailUri|string|false|read-only|none|
|width|integer(int32)|false|read-only|none|

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

<h2 id="tocS_ImageProcessingSettings">ImageProcessingSettings</h2>
<!-- backwards compatibility -->
<a id="schemaimageprocessingsettings"></a>
<a id="schema_ImageProcessingSettings"></a>
<a id="tocSimageprocessingsettings"></a>
<a id="tocsimageprocessingsettings"></a>

```json
{
  "augmentationMethods": {
    "property1": true,
    "property2": true
  }
}
```

Represents image preprocessing settings used by image augmentation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|augmentationMethods|object \| null|false|none|Gets or sets enabled image transforms. The key corresponds to the transform name. If value is set to true, then correspondent transform is enabled. Otherwise this transform will not be used.<br>Augmentation will be uniformly distributed among enabled transforms.|

<h2 id="tocS_ImageRegion">ImageRegion</h2>
<!-- backwards compatibility -->
<a id="schemaimageregion"></a>
<a id="schema_ImageRegion"></a>
<a id="tocSimageregion"></a>
<a id="tocsimageregion"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "height": 0,
  "left": 0,
  "regionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tagName": "string",
  "top": 0,
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|read-only|none|
|height|number(float)|true|none|Height.|
|left|number(float)|true|none|Coordinate of the left boundary.|
|regionId|string(uuid)|false|read-only|none|
|tagId|string(uuid)|true|none|Id of the tag associated with this region.|
|tagName|string|false|read-only|none|
|top|number(float)|true|none|Coordinate of the top boundary.|
|width|number(float)|true|none|Width.|

<h2 id="tocS_ImageRegionCreateBatch">ImageRegionCreateBatch</h2>
<!-- backwards compatibility -->
<a id="schemaimageregioncreatebatch"></a>
<a id="schema_ImageRegionCreateBatch"></a>
<a id="tocSimageregioncreatebatch"></a>
<a id="tocsimageregioncreatebatch"></a>

```json
{
  "regions": [
    {
      "height": 0,
      "imageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "left": 0,
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "top": 0,
      "width": 0
    }
  ]
}
```

Batch of image region information to create.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regions|[[ImageRegionCreateEntry](#schemaimageregioncreateentry)]|false|none|none|

<h2 id="tocS_ImageRegionCreateEntry">ImageRegionCreateEntry</h2>
<!-- backwards compatibility -->
<a id="schemaimageregioncreateentry"></a>
<a id="schema_ImageRegionCreateEntry"></a>
<a id="tocSimageregioncreateentry"></a>
<a id="tocsimageregioncreateentry"></a>

```json
{
  "height": 0,
  "imageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "left": 0,
  "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "top": 0,
  "width": 0
}
```

Entry associating a region to an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|number(float)|true|none|Height.|
|imageId|string(uuid)|true|none|Id of the image.|
|left|number(float)|true|none|Coordinate of the left boundary.|
|tagId|string(uuid)|true|none|Id of the tag associated with this region.|
|top|number(float)|true|none|Coordinate of the top boundary.|
|width|number(float)|true|none|Width.|

<h2 id="tocS_ImageRegionCreateResult">ImageRegionCreateResult</h2>
<!-- backwards compatibility -->
<a id="schemaimageregioncreateresult"></a>
<a id="schema_ImageRegionCreateResult"></a>
<a id="tocSimageregioncreateresult"></a>
<a id="tocsimageregioncreateresult"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "height": 0,
  "imageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "left": 0,
  "regionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tagName": "string",
  "top": 0,
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|read-only|none|
|height|number(float)|true|none|Height.|
|imageId|string(uuid)|false|read-only|none|
|left|number(float)|true|none|Coordinate of the left boundary.|
|regionId|string(uuid)|false|read-only|none|
|tagId|string(uuid)|true|none|Id of the tag associated with this region.|
|tagName|string|false|read-only|none|
|top|number(float)|true|none|Coordinate of the top boundary.|
|width|number(float)|true|none|Width.|

<h2 id="tocS_ImageRegionCreateSummary">ImageRegionCreateSummary</h2>
<!-- backwards compatibility -->
<a id="schemaimageregioncreatesummary"></a>
<a id="schema_ImageRegionCreateSummary"></a>
<a id="tocSimageregioncreatesummary"></a>
<a id="tocsimageregioncreatesummary"></a>

```json
{
  "created": [
    {
      "created": "1970-01-01T00:00:00Z",
      "height": 0,
      "imageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "left": 0,
      "regionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tagName": "string",
      "top": 0,
      "width": 0
    }
  ],
  "duplicated": [
    {
      "height": 0,
      "imageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "left": 0,
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "top": 0,
      "width": 0
    }
  ],
  "exceeded": [
    {
      "height": 0,
      "imageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "left": 0,
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "top": 0,
      "width": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|[[ImageRegionCreateResult](#schemaimageregioncreateresult)]|false|none|none|
|duplicated|[[ImageRegionCreateEntry](#schemaimageregioncreateentry)]|false|none|none|
|exceeded|[[ImageRegionCreateEntry](#schemaimageregioncreateentry)]|false|none|none|

<h2 id="tocS_ImageRegionProposal">ImageRegionProposal</h2>
<!-- backwards compatibility -->
<a id="schemaimageregionproposal"></a>
<a id="schema_ImageRegionProposal"></a>
<a id="tocSimageregionproposal"></a>
<a id="tocsimageregionproposal"></a>

```json
{
  "imageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "projectId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "proposals": [
    {
      "boundingBox": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0
      },
      "confidence": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageId|string(uuid)|false|read-only|none|
|projectId|string(uuid)|false|read-only|none|
|proposals|[[RegionProposal](#schemaregionproposal)]|false|read-only|none|

<h2 id="tocS_ImageTag">ImageTag</h2>
<!-- backwards compatibility -->
<a id="schemaimagetag"></a>
<a id="schema_ImageTag"></a>
<a id="tocSimagetag"></a>
<a id="tocsimagetag"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tagName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|read-only|none|
|tagId|string(uuid)|false|read-only|none|
|tagName|string|false|read-only|none|

<h2 id="tocS_ImageTagCreateBatch">ImageTagCreateBatch</h2>
<!-- backwards compatibility -->
<a id="schemaimagetagcreatebatch"></a>
<a id="schema_ImageTagCreateBatch"></a>
<a id="tocSimagetagcreatebatch"></a>
<a id="tocsimagetagcreatebatch"></a>

```json
{
  "tags": [
    {
      "imageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

Batch of image tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[[ImageTagCreateEntry](#schemaimagetagcreateentry)]|false|none|Image Tag entries to include in this batch.|

<h2 id="tocS_ImageTagCreateEntry">ImageTagCreateEntry</h2>
<!-- backwards compatibility -->
<a id="schemaimagetagcreateentry"></a>
<a id="schema_ImageTagCreateEntry"></a>
<a id="tocSimagetagcreateentry"></a>
<a id="tocsimagetagcreateentry"></a>

```json
{
  "imageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Entry associating a tag to an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageId|string(uuid)|false|none|Id of the image.|
|tagId|string(uuid)|false|none|Id of the tag.|

<h2 id="tocS_ImageTagCreateSummary">ImageTagCreateSummary</h2>
<!-- backwards compatibility -->
<a id="schemaimagetagcreatesummary"></a>
<a id="schema_ImageTagCreateSummary"></a>
<a id="tocSimagetagcreatesummary"></a>
<a id="tocsimagetagcreatesummary"></a>

```json
{
  "created": [
    {
      "imageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "duplicated": [
    {
      "imageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "exceeded": [
    {
      "imageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|[[ImageTagCreateEntry](#schemaimagetagcreateentry)]|false|none|none|
|duplicated|[[ImageTagCreateEntry](#schemaimagetagcreateentry)]|false|none|none|
|exceeded|[[ImageTagCreateEntry](#schemaimagetagcreateentry)]|false|none|none|

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

<h2 id="tocS_ImageUrlCreateBatch">ImageUrlCreateBatch</h2>
<!-- backwards compatibility -->
<a id="schemaimageurlcreatebatch"></a>
<a id="schema_ImageUrlCreateBatch"></a>
<a id="tocSimageurlcreatebatch"></a>
<a id="tocsimageurlcreatebatch"></a>

```json
{
  "images": [
    {
      "regions": [
        {
          "height": 0,
          "left": 0,
          "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "top": 0,
          "width": 0
        }
      ],
      "tagIds": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "url": "string"
    }
  ],
  "tagIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|images|[[ImageUrlCreateEntry](#schemaimageurlcreateentry)]|false|none|none|
|tagIds|[string(uuid)]|false|none|none|

<h2 id="tocS_ImageUrlCreateEntry">ImageUrlCreateEntry</h2>
<!-- backwards compatibility -->
<a id="schemaimageurlcreateentry"></a>
<a id="schema_ImageUrlCreateEntry"></a>
<a id="tocSimageurlcreateentry"></a>
<a id="tocsimageurlcreateentry"></a>

```json
{
  "regions": [
    {
      "height": 0,
      "left": 0,
      "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "top": 0,
      "width": 0
    }
  ],
  "tagIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regions|[[Region](#schemaregion)]|false|none|none|
|tagIds|[string(uuid)]|false|none|none|
|url|string|true|none|Url of the image.|

<h2 id="tocS_Iteration">Iteration</h2>
<!-- backwards compatibility -->
<a id="schemaiteration"></a>
<a id="schema_Iteration"></a>
<a id="tocSiteration"></a>
<a id="tocsiteration"></a>

```json
{
  "classificationType": "Multiclass",
  "created": "1970-01-01T00:00:00Z",
  "domainId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "exportable": true,
  "exportableTo": [
    "CoreML"
  ],
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "lastModified": "1970-01-01T00:00:00Z",
  "name": "string",
  "originalPublishResourceId": "string",
  "projectId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "publishName": "string",
  "reservedBudgetInHours": 0,
  "status": "string",
  "trainedAt": "1970-01-01T00:00:00Z",
  "trainingTimeInMinutes": 0,
  "trainingType": "Regular"
}
```

Iteration model to be sent over JSON.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classificationType|string \| null|false|read-only|Gets the classification type of the project.|
|created|string(date-time)|false|read-only|Gets the time this iteration was completed.|
|domainId|string(uuid) \| null|false|read-only|Get or sets a guid of the domain the iteration has been trained on.|
|exportable|boolean|false|read-only|Whether the iteration can be exported to another format for download.|
|exportableTo|[string]|false|read-only|A set of platforms this iteration can export to.|
|id|string(uuid)|false|read-only|Gets the id of the iteration.|
|lastModified|string(date-time)|false|read-only|Gets the time this iteration was last modified.|
|name|string|true|none|Gets or sets the name of the iteration.|
|originalPublishResourceId|string|false|read-only|Resource Provider Id this iteration was originally published to.|
|projectId|string(uuid)|false|read-only|Gets the project id of the iteration.|
|publishName|string|false|read-only|Name of the published model.|
|reservedBudgetInHours|integer(int32)|false|read-only|Gets the reserved advanced training budget for the iteration.|
|status|string|false|read-only|Gets the current iteration status.|
|trainedAt|string(date-time) \| null|false|read-only|Gets the time this iteration was last modified.|
|trainingTimeInMinutes|integer(int32)|false|read-only|Gets the training time for the iteration.|
|trainingType|string|false|read-only|Gets the training type of the iteration.|

#### Enumerated Values

|Property|Value|
|---|---|
|classificationType|Multiclass|
|classificationType|Multilabel|
|exportableTo|CoreML|
|exportableTo|TensorFlow|
|exportableTo|DockerFile|
|exportableTo|ONNX|
|exportableTo|VAIDK|
|trainingType|Regular|
|trainingType|Advanced|

<h2 id="tocS_IterationPerformance">IterationPerformance</h2>
<!-- backwards compatibility -->
<a id="schemaiterationperformance"></a>
<a id="schema_IterationPerformance"></a>
<a id="tocSiterationperformance"></a>
<a id="tocsiterationperformance"></a>

```json
{
  "averagePrecision": 0,
  "perTagPerformance": [
    {
      "averagePrecision": 0,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "precision": 0,
      "precisionStdDeviation": 0,
      "recall": 0,
      "recallStdDeviation": 0
    }
  ],
  "precision": 0,
  "precisionStdDeviation": 0,
  "recall": 0,
  "recallStdDeviation": 0
}
```

Represents the detailed performance data for a trained iteration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averagePrecision|number(float) \| null|false|read-only|Gets the average precision when applicable.|
|perTagPerformance|[[TagPerformance](#schematagperformance)]|false|read-only|Gets the per-tag performance details for this iteration.|
|precision|number(float)|false|read-only|Gets the precision.|
|precisionStdDeviation|number(float)|false|read-only|Gets the standard deviation for the precision.|
|recall|number(float)|false|read-only|Gets the recall.|
|recallStdDeviation|number(float)|false|read-only|Gets the standard deviation for the recall.|

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

<h2 id="tocS_PredictionQueryResult">PredictionQueryResult</h2>
<!-- backwards compatibility -->
<a id="schemapredictionqueryresult"></a>
<a id="schema_PredictionQueryResult"></a>
<a id="tocSpredictionqueryresult"></a>
<a id="tocspredictionqueryresult"></a>

```json
{
  "results": [
    {
      "created": "1970-01-01T00:00:00Z",
      "domain": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "iteration": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "originalImageUri": "string",
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
      "project": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "resizedImageUri": "string",
      "thumbnailUri": "string"
    }
  ],
  "token": {
    "application": "string",
    "continuation": "string",
    "endTime": "1970-01-01T00:00:00Z",
    "iterationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "maxCount": 0,
    "orderBy": "Newest",
    "session": "string",
    "startTime": "1970-01-01T00:00:00Z",
    "tags": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "maxThreshold": 0,
        "minThreshold": 0
      }
    ]
  }
}
```

Query result of the prediction images that were sent to your prediction endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[StoredImagePrediction](#schemastoredimageprediction)]|false|read-only|Result of an prediction request.|
|token|[PredictionQueryToken](#schemapredictionquerytoken)|false|none|none|

<h2 id="tocS_PredictionQueryTag">PredictionQueryTag</h2>
<!-- backwards compatibility -->
<a id="schemapredictionquerytag"></a>
<a id="schema_PredictionQueryTag"></a>
<a id="tocSpredictionquerytag"></a>
<a id="tocspredictionquerytag"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "maxThreshold": 0,
  "minThreshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|maxThreshold|number(float)|false|none|none|
|minThreshold|number(float)|false|none|none|

<h2 id="tocS_PredictionQueryToken">PredictionQueryToken</h2>
<!-- backwards compatibility -->
<a id="schemapredictionquerytoken"></a>
<a id="schema_PredictionQueryToken"></a>
<a id="tocSpredictionquerytoken"></a>
<a id="tocspredictionquerytoken"></a>

```json
{
  "application": "string",
  "continuation": "string",
  "endTime": "1970-01-01T00:00:00Z",
  "iterationId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "maxCount": 0,
  "orderBy": "Newest",
  "session": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "tags": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "maxThreshold": 0,
      "minThreshold": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|string|false|none|none|
|continuation|string|false|none|none|
|endTime|string(date-time) \| null|false|none|none|
|iterationId|string(uuid) \| null|false|none|none|
|maxCount|integer(int32)|false|none|none|
|orderBy|string|false|none|none|
|session|string|false|none|none|
|startTime|string(date-time) \| null|false|none|none|
|tags|[[PredictionQueryTag](#schemapredictionquerytag)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|orderBy|Newest|
|orderBy|Oldest|
|orderBy|Suggested|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "drModeEnabled": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "lastModified": "1970-01-01T00:00:00Z",
  "name": "string",
  "settings": {
    "classificationType": "Multiclass",
    "detectionParameters": "string",
    "domainId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "imageProcessingSettings": {
      "augmentationMethods": {
        "property1": true,
        "property2": true
      }
    },
    "targetExportPlatforms": [
      "CoreML"
    ],
    "useNegativeSet": true
  },
  "status": "Succeeded",
  "thumbnailUri": "string"
}
```

Represents a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|read-only|Gets the date this project was created.|
|description|string \| null|true|none|Gets or sets the description of the project.|
|drModeEnabled|boolean \| null|false|read-only|Gets if the Disaster Recovery (DR) mode is on, indicating the project is temporarily read-only.|
|id|string(uuid)|false|read-only|Gets the project id.|
|lastModified|string(date-time)|false|read-only|Gets the date this project was last modified.|
|name|string|true|none|Gets or sets the name of the project.|
|settings|[ProjectSettings](#schemaprojectsettings)|true|none|Represents settings associated with a project.|
|status|string|false|none|Gets the status of the project.|
|thumbnailUri|string|false|read-only|Gets the thumbnail url representing the image.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Succeeded|
|status|Importing|
|status|Failed|

<h2 id="tocS_ProjectExport">ProjectExport</h2>
<!-- backwards compatibility -->
<a id="schemaprojectexport"></a>
<a id="schema_ProjectExport"></a>
<a id="tocSprojectexport"></a>
<a id="tocsprojectexport"></a>

```json
{
  "estimatedImportTimeInMS": 0,
  "imageCount": 0,
  "iterationCount": 0,
  "regionCount": 0,
  "tagCount": 0,
  "token": "string"
}
```

Represents information about a project export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimatedImportTimeInMS|integer(int32)|false|read-only|Estimated time this project will take to import, can change based on network connectivity and load between<br>source and destination regions.|
|imageCount|integer(int32)|false|read-only|Count of images that will be exported.|
|iterationCount|integer(int32)|false|read-only|Count of iterations that will be exported.|
|regionCount|integer(int32)|false|read-only|Count of regions that will be exported.|
|tagCount|integer(int32)|false|read-only|Count of tags that will be exported.|
|token|string|false|read-only|Opaque token that should be passed to ImportProject to perform the import. This token grants access to import this<br>project to all that have the token.|

<h2 id="tocS_ProjectSettings">ProjectSettings</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsettings"></a>
<a id="schema_ProjectSettings"></a>
<a id="tocSprojectsettings"></a>
<a id="tocsprojectsettings"></a>

```json
{
  "classificationType": "Multiclass",
  "detectionParameters": "string",
  "domainId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "imageProcessingSettings": {
    "augmentationMethods": {
      "property1": true,
      "property2": true
    }
  },
  "targetExportPlatforms": [
    "CoreML"
  ],
  "useNegativeSet": true
}
```

Represents settings associated with a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classificationType|string \| null|false|none|Gets or sets the classification type of the project.|
|detectionParameters|string|false|read-only|Detection parameters in use, if any.|
|domainId|string(uuid)|false|none|Gets or sets the id of the Domain to use with this project.|
|imageProcessingSettings|[ImageProcessingSettings](#schemaimageprocessingsettings)|false|none|Represents image preprocessing settings used by image augmentation.|
|targetExportPlatforms|[string]|false|none|A list of ExportPlatform that the trained model should be able to support.|
|useNegativeSet|boolean \| null|false|read-only|Indicates if negative set is being used.|

#### Enumerated Values

|Property|Value|
|---|---|
|classificationType|Multiclass|
|classificationType|Multilabel|
|targetExportPlatforms|CoreML|
|targetExportPlatforms|TensorFlow|
|targetExportPlatforms|DockerFile|
|targetExportPlatforms|ONNX|
|targetExportPlatforms|VAIDK|

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
{
  "height": 0,
  "left": 0,
  "tagId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "top": 0,
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|number(float)|true|none|Height.|
|left|number(float)|true|none|Coordinate of the left boundary.|
|tagId|string(uuid)|true|none|Id of the tag associated with this region.|
|top|number(float)|true|none|Coordinate of the top boundary.|
|width|number(float)|true|none|Width.|

<h2 id="tocS_RegionProposal">RegionProposal</h2>
<!-- backwards compatibility -->
<a id="schemaregionproposal"></a>
<a id="schema_RegionProposal"></a>
<a id="tocSregionproposal"></a>
<a id="tocsregionproposal"></a>

```json
{
  "boundingBox": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0
  },
  "confidence": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[BoundingBox](#schemaboundingbox)|false|none|Bounding box that defines a region of an image.|
|confidence|number(float)|false|read-only|none|

<h2 id="tocS_StoredImagePrediction">StoredImagePrediction</h2>
<!-- backwards compatibility -->
<a id="schemastoredimageprediction"></a>
<a id="schema_StoredImagePrediction"></a>
<a id="tocSstoredimageprediction"></a>
<a id="tocsstoredimageprediction"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "domain": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "iteration": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "originalImageUri": "string",
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
  "project": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "resizedImageUri": "string",
  "thumbnailUri": "string"
}
```

Result of an image prediction request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|read-only|Date this prediction was created.|
|domain|string(uuid)|false|read-only|Domain used for the prediction.|
|id|string(uuid)|false|read-only|Prediction Id.|
|iteration|string(uuid)|false|read-only|Iteration Id.|
|originalImageUri|string|false|read-only|The URI to the original prediction image.|
|predictions|[[Prediction](#schemaprediction)]|false|read-only|List of predictions.|
|project|string(uuid)|false|read-only|Project Id.|
|resizedImageUri|string|false|read-only|The URI to the (resized) prediction image.|
|thumbnailUri|string|false|read-only|The URI to the thumbnail of the original prediction image.|

<h2 id="tocS_StoredSuggestedTagAndRegion">StoredSuggestedTagAndRegion</h2>
<!-- backwards compatibility -->
<a id="schemastoredsuggestedtagandregion"></a>
<a id="schema_StoredSuggestedTagAndRegion"></a>
<a id="tocSstoredsuggestedtagandregion"></a>
<a id="tocsstoredsuggestedtagandregion"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "domain": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "height": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "iteration": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "originalImageUri": "string",
  "predictionUncertainty": 0,
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
  "project": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "resizedImageUri": "string",
  "thumbnailUri": "string",
  "width": 0
}
```

Result of a suggested tags and regions request of the untagged image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|read-only|Date this prediction was created.|
|domain|string(uuid)|false|read-only|Domain used for the prediction.|
|height|integer(int32)|false|read-only|Height of the resized image.|
|id|string(uuid)|false|read-only|Prediction Id.|
|iteration|string(uuid)|false|read-only|Iteration Id.|
|originalImageUri|string|false|read-only|The URI to the original prediction image.|
|predictionUncertainty|number(double)|false|read-only|Uncertainty (entropy) of suggested tags or regions per image.|
|predictions|[[Prediction](#schemaprediction)]|false|read-only|List of predictions.|
|project|string(uuid)|false|read-only|Project Id.|
|resizedImageUri|string|false|read-only|The URI to the (resized) prediction image.|
|thumbnailUri|string|false|read-only|The URI to the thumbnail of the original prediction image.|
|width|integer(int32)|false|read-only|Width of the resized image.|

<h2 id="tocS_SuggestedTagAndRegion">SuggestedTagAndRegion</h2>
<!-- backwards compatibility -->
<a id="schemasuggestedtagandregion"></a>
<a id="schema_SuggestedTagAndRegion"></a>
<a id="tocSsuggestedtagandregion"></a>
<a id="tocssuggestedtagandregion"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "iteration": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "predictionUncertainty": 0,
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

Result of a suggested tags and regions request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|read-only|Date this prediction was created.|
|id|string(uuid)|false|read-only|Prediction Id.|
|iteration|string(uuid)|false|read-only|Iteration Id.|
|predictionUncertainty|number(double)|false|read-only|Uncertainty (entropy) of suggested tags or regions per image.|
|predictions|[[Prediction](#schemaprediction)]|false|read-only|List of predictions.|
|project|string(uuid)|false|read-only|Project Id.|

<h2 id="tocS_SuggestedTagAndRegionQuery">SuggestedTagAndRegionQuery</h2>
<!-- backwards compatibility -->
<a id="schemasuggestedtagandregionquery"></a>
<a id="schema_SuggestedTagAndRegionQuery"></a>
<a id="tocSsuggestedtagandregionquery"></a>
<a id="tocssuggestedtagandregionquery"></a>

```json
{
  "results": [
    {
      "created": "1970-01-01T00:00:00Z",
      "domain": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "height": 0,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "iteration": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "originalImageUri": "string",
      "predictionUncertainty": 0,
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
      "project": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "resizedImageUri": "string",
      "thumbnailUri": "string",
      "width": 0
    }
  ],
  "token": {
    "continuation": "string",
    "maxCount": 0,
    "session": "string",
    "sortBy": "UncertaintyAscending",
    "tagIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "threshold": 0
  }
}
```

The array of result images and token containing session and continuation Ids for the next query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[StoredSuggestedTagAndRegion](#schemastoredsuggestedtagandregion)]|false|read-only|Result of a suggested tags and regions request of the untagged image.|
|token|[SuggestedTagAndRegionQueryToken](#schemasuggestedtagandregionquerytoken)|false|none|Contains properties we need to fetch suggested tags for. For the first call, Session and continuation set to null.<br>Then on subsequent calls, uses the session/continuation from the previous SuggestedTagAndRegionQuery result to fetch additional results.|

<h2 id="tocS_SuggestedTagAndRegionQueryToken">SuggestedTagAndRegionQueryToken</h2>
<!-- backwards compatibility -->
<a id="schemasuggestedtagandregionquerytoken"></a>
<a id="schema_SuggestedTagAndRegionQueryToken"></a>
<a id="tocSsuggestedtagandregionquerytoken"></a>
<a id="tocssuggestedtagandregionquerytoken"></a>

```json
{
  "continuation": "string",
  "maxCount": 0,
  "session": "string",
  "sortBy": "UncertaintyAscending",
  "tagIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "threshold": 0
}
```

Contains properties we need to fetch suggested tags for. For the first call, Session and continuation set to null.
Then on subsequent calls, uses the session/continuation from the previous SuggestedTagAndRegionQuery result to fetch additional results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|continuation|string|false|none|Continuation Id for database pagination. Initially null but later used to paginate.|
|maxCount|integer(int32)|false|none|Maximum number of results you want to be returned in the response.|
|session|string|false|none|SessionId for database query. Initially set to null but later used to paginate.|
|sortBy|string|false|none|OrderBy. Ordering mechanism for your results.|
|tagIds|[string(uuid)]|false|none|Existing TagIds in project to filter suggested tags on.|
|threshold|number(double)|false|none|Confidence threshold to filter suggested tags on.|

#### Enumerated Values

|Property|Value|
|---|---|
|sortBy|UncertaintyAscending|
|sortBy|UncertaintyDescending|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "description": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "imageCount": 0,
  "name": "string",
  "type": "Regular"
}
```

Represents a Tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|true|none|Gets or sets the description of the tag.|
|id|string(uuid)|false|read-only|Gets the Tag ID.|
|imageCount|integer(int32)|false|read-only|Gets the number of images with this tag.|
|name|string|true|none|Gets or sets the name of the tag.|
|type|string|true|none|Gets or sets the type of the tag.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Regular|
|type|Negative|

<h2 id="tocS_TagFilter">TagFilter</h2>
<!-- backwards compatibility -->
<a id="schematagfilter"></a>
<a id="schema_TagFilter"></a>
<a id="tocStagfilter"></a>
<a id="tocstagfilter"></a>

```json
{
  "tagIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "threshold": 0
}
```

Model that query for counting of images whose suggested tags match given tags and their probability are greater than or equal to the given threshold.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tagIds|[string(uuid)]|false|none|Existing TagIds in project to get suggested tags count for.|
|threshold|number(double)|false|none|Confidence threshold to filter suggested tags on.|

<h2 id="tocS_TagPerformance">TagPerformance</h2>
<!-- backwards compatibility -->
<a id="schematagperformance"></a>
<a id="schema_TagPerformance"></a>
<a id="tocStagperformance"></a>
<a id="tocstagperformance"></a>

```json
{
  "averagePrecision": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "precision": 0,
  "precisionStdDeviation": 0,
  "recall": 0,
  "recallStdDeviation": 0
}
```

Represents performance data for a particular tag in a trained iteration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averagePrecision|number(float) \| null|false|read-only|Gets the average precision when applicable.|
|id|string(uuid)|false|read-only|none|
|name|string|false|read-only|none|
|precision|number(float)|false|read-only|Gets the precision.|
|precisionStdDeviation|number(float)|false|read-only|Gets the standard deviation for the precision.|
|recall|number(float)|false|read-only|Gets the recall.|
|recallStdDeviation|number(float)|false|read-only|Gets the standard deviation for the recall.|

<h2 id="tocS_TrainingParameters">TrainingParameters</h2>
<!-- backwards compatibility -->
<a id="schematrainingparameters"></a>
<a id="schema_TrainingParameters"></a>
<a id="tocStrainingparameters"></a>
<a id="tocstrainingparameters"></a>

```json
{
  "selectedTags": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

Parameters used for training.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selectedTags|[string(uuid)]|false|none|List of tags selected for this training session, other tags in the project will be ignored.|
