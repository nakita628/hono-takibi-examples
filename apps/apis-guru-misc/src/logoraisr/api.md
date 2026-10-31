<h1 id="api-docs-logoraisrcom">API docs | logoraisr.com v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p style="font-size:110%;">Dig into our logoraisr API reference documentation. We also offer an OpenAPI specification to allow easy integration into your systems. You can download the json file by clicking on the download button.<p><br><p style="font-size:110%; font-weight:bold">OpenAPI 2.0 Validation Status</p><img src="https://online.swagger.io/validator?url=https://docs.logoraisr.com/">

Base URLs:

* <a href="https://api.logoraisr.com/rest-v1">https://api.logoraisr.com/rest-v1</a>

<a href="https://logoraisr.com/terms-conditions">Terms of service</a>
Email: <a href="mailto:support@logoraisr.com">support@logoraisr.com</a> 
Web: <a href="https://logoraisr.com">https://logoraisr.com</a> 

# Authentication

* API Key (Token)
    - Parameter Name: **Authorization**, in: header.

<h1 id="api-docs-logoraisrcom-previews">previews</h1>

## Get preview image of uploaded file

<a id="opIdpreviews_read"></a>

> Code samples

```bash
curl https://example.com/previews/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /previews/{file_id}/`

This GET-Method returns the URL where the preview image of uploaded file can downloaded from.

<h3 id="get-preview-image-of-uploaded-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_id|path|string|true|Id of the file for which the preview_img_url is generated.|

> Example responses

> 200 Response

```json
{
  "preview_img_url": "string"
}
```

<h3 id="get-preview-image-of-uploaded-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PreviewResponse](#schemapreviewresponse)|
|400|Bad Request|BAD REQUEST|None|
|403|Forbidden|FORBIDDEN|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Token
</aside>

<h1 id="api-docs-logoraisrcom-processes">processes</h1>

## Get process list.

<a id="opIdprocesses_list"></a>

> Code samples

```bash
curl https://example.com/processes/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /processes/`

This GET-Method lists all on logoraisr available processes.

> Example responses

> 200 Response

```json
{
  "crop": "string",
  "flip": true,
  "mirror": true,
  "processing_algorithm": "string",
  "resize": "string",
  "rotate": 0
}
```

<h3 id="get-process-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Process](#schemaprocess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Token
</aside>

<h1 id="api-docs-logoraisrcom-projects">projects</h1>

## Get user project list.

<a id="opIdprojects_list"></a>

> Code samples

```bash
curl https://example.com/projects/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /projects/`

This GET-Method lists the user's projects.

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": 0,
  "paypal_payment_id": "string",
  "process": {
    "crop": "string",
    "flip": true,
    "mirror": true,
    "processing_algorithm": "string",
    "resize": "string",
    "rotate": 0
  },
  "process_id": "string",
  "project_number": 0,
  "project_title": "string",
  "result_file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-user-project-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Project](#schemaproject)|
|403|Forbidden|FORBIDDEN|None|
|404|Not Found|NOT FOUND|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Token
</aside>

## Create a new project.

<a id="opIdprojects_create"></a>

> Code samples

```bash
curl https://example.com/projects/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process": {
      "crop": "string",
      "flip": true,
      "mirror": true,
      "processing_algorithm": "string",
      "resize": "string",
      "rotate": 0
    },
    "project_title": "string"
  }'
```

`POST /projects/`

This POST-Method creates a new project.

> Body parameter

```json
{
  "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process": {
    "crop": "string",
    "flip": true,
    "mirror": true,
    "processing_algorithm": "string",
    "resize": "string",
    "rotate": 0
  },
  "project_title": "string"
}
```

<h3 id="create-a-new-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProjectRequest](#schemaprojectrequest)|true|none|
|» file_id|body|string(uuid)|true|Id of the file on which the process is to be applied.|
|» process|body|[Process](#schemaprocess)|false|none|
|» project_title|body|string|true|Name of the project with which it is saved.|

> Example responses

> 201 Response

```json
{
  "project_id": 0,
  "project_number": 0,
  "result_file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="create-a-new-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ProjectResponse](#schemaprojectresponse)|
|400|Bad Request|BAD REQUEST|None|
|403|Forbidden|FORBIDDEN|None|
|404|Not Found|NOT FOUND|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Token
</aside>

## Get project details.

<a id="opIdprojects_read"></a>

> Code samples

```bash
curl https://example.com/projects/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /projects/{project_number}/`

This GET-Method returns a specific project.

<h3 id="get-project-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_number|path|string|true|Number of the project.|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": 0,
  "paypal_payment_id": "string",
  "process": {
    "crop": "string",
    "flip": true,
    "mirror": true,
    "processing_algorithm": "string",
    "resize": "string",
    "rotate": 0
  },
  "process_id": "string",
  "project_number": 0,
  "project_title": "string",
  "result_file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-project-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Project](#schemaproject)|
|403|Forbidden|FORBIDDEN|None|
|404|Not Found|NOT FOUND|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Token
</aside>

<h1 id="api-docs-logoraisrcom-reports">reports</h1>

## Get user report list.

<a id="opIdreports_list"></a>

> Code samples

```bash
curl https://example.com/reports/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /reports/`

This GET method lists the user's reports.

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_id": 0,
  "report_number": 0,
  "result": {
    "colors": [
      {
        "blue": 0,
        "green": 0,
        "hex": "string",
        "number_of_pixel": 0,
        "percentage": "string",
        "red": 0
      }
    ],
    "height": 0,
    "number_of_pixel_in_image": 0,
    "width": 0
  },
  "result_id": 0
}
```

<h3 id="get-user-report-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Report](#schemareport)|
|403|Forbidden|FORBIDDEN|None|
|404|Not Found|NOT FOUND|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Token
</aside>

## Create a new report.

<a id="opIdreports_create"></a>

> Code samples

```bash
curl https://example.com/reports/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process": "string"
  }'
```

`POST /reports/`

This POST-Method creates a new report.

> Body parameter

```json
{
  "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process": "string"
}
```

<h3 id="create-a-new-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReportRequest](#schemareportrequest)|true|none|
|» file_id|body|string(uuid)|true|Id of the file on which the process is to be applied.|
|» process|body|string|true|Process which should applied. Processes are "color-classification".|

> Example responses

> 201 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "file_id": "string",
  "processing_algorithm": "string",
  "report_number": 0,
  "result": {
    "colors": [
      {
        "blue": 0,
        "green": 0,
        "hex": "string",
        "number_of_pixel": 0,
        "percentage": "string",
        "red": 0
      }
    ],
    "height": 0,
    "number_of_pixel_in_image": 0,
    "width": 0
  }
}
```

<h3 id="create-a-new-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ReportResponse](#schemareportresponse)|
|400|Bad Request|BAD REQUEST|None|
|401|Unauthorized|UNAUTHORIZED|None|
|403|Forbidden|FORBIDDEN|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Token
</aside>

## Get report details.

<a id="opIdreports_read"></a>

> Code samples

```bash
curl https://example.com/reports/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /reports/{report_number}/`

This GET-Method returns the details of a specific report.

<h3 id="get-report-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|report_number|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_id": 0,
  "report_number": 0,
  "result": {
    "colors": [
      {
        "blue": 0,
        "green": 0,
        "hex": "string",
        "number_of_pixel": 0,
        "percentage": "string",
        "red": 0
      }
    ],
    "height": 0,
    "number_of_pixel_in_image": 0,
    "width": 0
  },
  "result_id": 0
}
```

<h3 id="get-report-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Report](#schemareport)|
|403|Forbidden|FORBIDDEN|None|
|404|Not Found|NOT FOUND|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Token
</aside>

<h1 id="api-docs-logoraisrcom-results">results</h1>

## Get the result from image processing

<a id="opIdresults_read"></a>

> Code samples

```bash
curl https://example.com/results/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /results/{result_file_id}/`

This GET-Method returns the URL where the result can downloaded from.

<h3 id="get-the-result-from-image-processing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|result_file_id|path|string|true|Id of the result_file for which the result_file_url is generated.|

> Example responses

> 200 Response

```json
{
  "result_file_url": "string"
}
```

<h3 id="get-the-result-from-image-processing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ResultResponse](#schemaresultresponse)|
|400|Bad Request|BAD REQUEST|None|
|403|Forbidden|FORBIDDEN|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Token
</aside>

<h1 id="api-docs-logoraisrcom-uploads">uploads</h1>

## Upload a new image

<a id="opIduploads_create"></a>

> Code samples

```bash
curl https://example.com/uploads/ \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -F 'file=@/path/to/file'
```

`POST /uploads/`

This POST-Method uploads a new file on the server.

> Body parameter

```yaml
file: string
```

<h3 id="upload-a-new-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|File which should be uploaded. Supported file types are: JPEG and PNG|

> Example responses

> 201 Response

```json
{
  "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="upload-a-new-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[FileResponse](#schemafileresponse)|
|400|Bad Request|BAD REQUEST|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Token
</aside>

# Schemas

<h2 id="tocS_Color">Color</h2>
<!-- backwards compatibility -->
<a id="schemacolor"></a>
<a id="schema_Color"></a>
<a id="tocScolor"></a>
<a id="tocscolor"></a>

```json
{
  "blue": 0,
  "green": 0,
  "hex": "string",
  "number_of_pixel": 0,
  "percentage": "string",
  "red": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blue|integer|false|none|RGB-Blue color value|
|green|integer|false|none|RGB-Green color value.|
|hex|string|false|none|Hex-label of this color.|
|number_of_pixel|integer|false|none|Number of pixels that holds this color.|
|percentage|string(decimal)|false|none|Percentage of pixels that holds this color.|
|red|integer|false|none|RGB-Red color value.|

<h2 id="tocS_FileResponse">FileResponse</h2>
<!-- backwards compatibility -->
<a id="schemafileresponse"></a>
<a id="schema_FileResponse"></a>
<a id="tocSfileresponse"></a>
<a id="tocsfileresponse"></a>

```json
{
  "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_id|string(uuid)|false|none|Returns the file_id. To apply processes to the uploaded file, this file_id must be referenced in the API-calls.|

<h2 id="tocS_PreviewResponse">PreviewResponse</h2>
<!-- backwards compatibility -->
<a id="schemapreviewresponse"></a>
<a id="schema_PreviewResponse"></a>
<a id="tocSpreviewresponse"></a>
<a id="tocspreviewresponse"></a>

```json
{
  "preview_img_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preview_img_url|string|false|none|Url from which the preview file can be downloaded.|

<h2 id="tocS_Process">Process</h2>
<!-- backwards compatibility -->
<a id="schemaprocess"></a>
<a id="schema_Process"></a>
<a id="tocSprocess"></a>
<a id="tocsprocess"></a>

```json
{
  "crop": "string",
  "flip": true,
  "mirror": true,
  "processing_algorithm": "string",
  "resize": "string",
  "rotate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crop|string|false|none|Crops the image according to the specified mechanism. If you specify the size "WidthexHeight", the image will be cropped centered. If coordinates "x1,y1,x2,y2" are given, the image is cropped according to the coordinates. The image will be cropped to the size of the stories if "faces" are specified as. Example Centered: "crop": "200x300". Example Region: "crop": "200,300,150,300". Example Faces: "crop": "faces".|
|flip|boolean|false|none|Flips the image around the horizontal axis, from top to bottom. Example: "flip": true|
|mirror|boolean|false|none|Mirrors the image around the vertical axis, i.e. from right to left. Example: "mirror": true|
|processing_algorithm|string|true|none|Schlüssel welcher Verarbeitungs-Algorithmus angewendet wird. Zur Auswahl stehen "logo-to-vector", "logo-super-resolution", "logo-segmentation" und "image-processing".|
|resize|string|false|none|Changes the size of the image according to the specified size. Example: "resize": "200x300".|
|rotate|integer|false|none|Rotates the image around the center according to the specified degree. Example: "rotate": 90|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": 0,
  "paypal_payment_id": "string",
  "process": {
    "crop": "string",
    "flip": true,
    "mirror": true,
    "processing_algorithm": "string",
    "resize": "string",
    "rotate": 0
  },
  "process_id": "string",
  "project_number": 0,
  "project_title": "string",
  "result_file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|The Date when the project was created.|
|file_id|string(uuid)|false|none|Id of the file on which the process was applied.|
|id|integer|false|none|Id of the created project.|
|paypal_payment_id|string|false|none|Id of the paypal payment.|
|process|[Process](#schemaprocess)|false|none|none|
|process_id|string|true|none|Process which should applied. Processes are "color-classification".|
|project_number|integer|false|none|Number of the created project.|
|project_title|string|false|none|Name of the project with which it was saved.|
|result_file_id|string(uuid)|false|none|Id of the result file which the process created.|

<h2 id="tocS_ProjectRequest">ProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprojectrequest"></a>
<a id="schema_ProjectRequest"></a>
<a id="tocSprojectrequest"></a>
<a id="tocsprojectrequest"></a>

```json
{
  "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process": {
    "crop": "string",
    "flip": true,
    "mirror": true,
    "processing_algorithm": "string",
    "resize": "string",
    "rotate": 0
  },
  "project_title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_id|string(uuid)|true|none|Id of the file on which the process is to be applied.|
|process|[Process](#schemaprocess)|false|none|none|
|project_title|string|true|none|Name of the project with which it is saved.|

<h2 id="tocS_ProjectResponse">ProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprojectresponse"></a>
<a id="schema_ProjectResponse"></a>
<a id="tocSprojectresponse"></a>
<a id="tocsprojectresponse"></a>

```json
{
  "project_id": 0,
  "project_number": 0,
  "result_file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_id|integer|false|none|Id of the created project.|
|project_number|integer|false|none|Number of the created project.|
|result_file_id|string(uuid)|false|none|Id of the result_file. This id must be specified to create the result_file_url.|

<h2 id="tocS_Report">Report</h2>
<!-- backwards compatibility -->
<a id="schemareport"></a>
<a id="schema_Report"></a>
<a id="tocSreport"></a>
<a id="tocsreport"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_id": 0,
  "report_number": 0,
  "result": {
    "colors": [
      {
        "blue": 0,
        "green": 0,
        "hex": "string",
        "number_of_pixel": 0,
        "percentage": "string",
        "red": 0
      }
    ],
    "height": 0,
    "number_of_pixel_in_image": 0,
    "width": 0
  },
  "result_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|The Date when the report was created.|
|file_id|string(uuid)|true|none|Id of the file on which the report was applied.|
|process_id|integer|true|none|Process_id of the process which was applied. Processes are "color-classification".|
|report_number|integer|true|none|Number of the created report.|
|result|[Result](#schemaresult)|false|none|none|
|result_id|integer|true|none|Result_id of the result which was created.|

<h2 id="tocS_ReportRequest">ReportRequest</h2>
<!-- backwards compatibility -->
<a id="schemareportrequest"></a>
<a id="schema_ReportRequest"></a>
<a id="tocSreportrequest"></a>
<a id="tocsreportrequest"></a>

```json
{
  "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_id|string(uuid)|true|none|Id of the file on which the process is to be applied.|
|process|string|true|none|Process which should applied. Processes are "color-classification".|

<h2 id="tocS_ReportResponse">ReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportresponse"></a>
<a id="schema_ReportResponse"></a>
<a id="tocSreportresponse"></a>
<a id="tocsreportresponse"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "file_id": "string",
  "processing_algorithm": "string",
  "report_number": 0,
  "result": {
    "colors": [
      {
        "blue": 0,
        "green": 0,
        "hex": "string",
        "number_of_pixel": 0,
        "percentage": "string",
        "red": 0
      }
    ],
    "height": 0,
    "number_of_pixel_in_image": 0,
    "width": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|The Date when the project was created.|
|file_id|string|false|none|Id of the file on which the process was applied.|
|processing_algorithm|string|false|none|Process which was applied. Processes are "color-classification".|
|report_number|integer|false|none|Number of the report which was created.|
|result|[Result](#schemaresult)|false|none|none|

<h2 id="tocS_Result">Result</h2>
<!-- backwards compatibility -->
<a id="schemaresult"></a>
<a id="schema_Result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
{
  "colors": [
    {
      "blue": 0,
      "green": 0,
      "hex": "string",
      "number_of_pixel": 0,
      "percentage": "string",
      "red": 0
    }
  ],
  "height": 0,
  "number_of_pixel_in_image": 0,
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|[[Color](#schemacolor)]|false|none|none|
|height|integer|false|none|Height of image.|
|number_of_pixel_in_image|integer|false|none|Number of pixel in image.|
|width|integer|false|none|Width of image.|

<h2 id="tocS_ResultResponse">ResultResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresultresponse"></a>
<a id="schema_ResultResponse"></a>
<a id="tocSresultresponse"></a>
<a id="tocsresultresponse"></a>

```json
{
  "result_file_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result_file_url|string|false|none|Url from which the result file can be downloaded.|
