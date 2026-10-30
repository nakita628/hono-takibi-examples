<h1 id="data-studio-datasource-ingestion">Data Studio Datasource Ingestion v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|data_integration.data_source.file.read|Read access to data_integration file data sources.|
|data_integration.data_source.file.write|Write access to data_integration file data sources.|

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

<h1 id="data-studio-datasource-ingestion-advanced">Advanced</h1>

## post-/data-studio/data-source/2026-09_/data-studio/data-source/2026-09

<a id="opIdpost-/data-studio/data-source/2026-09_/data-studio/data-source/2026-09"></a>

> Code samples

```bash
curl https://api.hubapi.com/data-studio/data-source/2026-09 \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /data-studio/data-source/2026-09`

> Body parameter

```yaml
null
```

<h3 id="post-data-studiodata-source2026-09data-studiodata-source2026-09-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FormDataMultiPart](#schemaformdatamultipart)|true|none|
|» bodyParts|body|[[BodyPart](#schemabodypart)]|true|An array of BodyPart objects, each representing a part of the multipart form data.|
|» contentDisposition|body|[ContentDisposition](#schemacontentdisposition)|true|none|
|» entity|body|object|true|An object representing the entity of the multipart form data, containing the actual data to be processed.|
|» fields|body|object|true|An object containing fields of the multipart form data, where each field can have multiple FormDataBodyPart items.|
|» » **additionalProperties**|body|[[FormDataBodyPart](#schemaformdatabodypart)]|false|none|
|» headers|body|object|true|An object containing headers associated with the multipart form data, where each header can have multiple string values.|
|» » **additionalProperties**|body|[string]|false|none|
|» mediaType|body|[MediaType](#schemamediatype)|true|none|
|» messageBodyWorkers|body|object|true|An object representing workers that process the message body of the multipart form data.|
|» parameterizedHeaders|body|object|true|An object containing parameterized headers, where each header can have multiple ParameterizedHeader items.|
|» » **additionalProperties**|body|[[ParameterizedHeader](#schemaparameterizedheader)]|false|none|
|» parent|body|[MultiPart](#schemamultipart)|true|none|
|» providers|body|object|true|An object representing providers associated with the multipart form data.|

> Example responses

> default Response

```json
null
```

<h3 id="post-data-studiodata-source2026-09data-studiodata-source2026-09-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: data_integration.data_source.file.write ), private_apps
</aside>

<h1 id="data-studio-datasource-ingestion-basic">Basic</h1>

## get-/data-studio/data-source/2026-09/{datasourceId}_/data-studio/data-source/2026-09/{datasourceId}

<a id="opIdget-/data-studio/data-source/2026-09/{datasourceId}_/data-studio/data-source/2026-09/{datasourceId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/data-studio/data-source/2026-09/{datasourceId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /data-studio/data-source/2026-09/{datasourceId}`

<h3 id="get-data-studiodata-source2026-09datasourceiddata-studiodata-source2026-09datasourceid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasourceId|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-data-studiodata-source2026-09datasourceiddata-studiodata-source2026-09datasourceid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[DataSourceGetResponse](#schemadatasourcegetresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: data_integration.data_source.file.read ), private_apps
</aside>

## put-/data-studio/data-source/2026-09/{datasourceId}_/data-studio/data-source/2026-09/{datasourceId}

<a id="opIdput-/data-studio/data-source/2026-09/{datasourceId}_/data-studio/data-source/2026-09/{datasourceId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/data-studio/data-source/2026-09/{datasourceId}' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /data-studio/data-source/2026-09/{datasourceId}`

> Body parameter

```yaml
null
```

<h3 id="put-data-studiodata-source2026-09datasourceiddata-studiodata-source2026-09datasourceid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasourceId|path|integer(int64)|true|none|
|body|body|[FormDataMultiPart](#schemaformdatamultipart)|true|none|
|» bodyParts|body|[[BodyPart](#schemabodypart)]|true|An array of BodyPart objects, each representing a part of the multipart form data.|
|» contentDisposition|body|[ContentDisposition](#schemacontentdisposition)|true|none|
|» entity|body|object|true|An object representing the entity of the multipart form data, containing the actual data to be processed.|
|» fields|body|object|true|An object containing fields of the multipart form data, where each field can have multiple FormDataBodyPart items.|
|» » **additionalProperties**|body|[[FormDataBodyPart](#schemaformdatabodypart)]|false|none|
|» headers|body|object|true|An object containing headers associated with the multipart form data, where each header can have multiple string values.|
|» » **additionalProperties**|body|[string]|false|none|
|» mediaType|body|[MediaType](#schemamediatype)|true|none|
|» messageBodyWorkers|body|object|true|An object representing workers that process the message body of the multipart form data.|
|» parameterizedHeaders|body|object|true|An object containing parameterized headers, where each header can have multiple ParameterizedHeader items.|
|» » **additionalProperties**|body|[[ParameterizedHeader](#schemaparameterizedheader)]|false|none|
|» parent|body|[MultiPart](#schemamultipart)|true|none|
|» providers|body|object|true|An object representing providers associated with the multipart form data.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="put-data-studiodata-source2026-09datasourceiddata-studiodata-source2026-09datasourceid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[DataSourceUpdateResponse](#schemadatasourceupdateresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: data_integration.data_source.file.write ), private_apps
</aside>

## delete-/data-studio/data-source/2026-09/{datasourceId}_/data-studio/data-source/2026-09/{datasourceId}

<a id="opIddelete-/data-studio/data-source/2026-09/{datasourceId}_/data-studio/data-source/2026-09/{datasourceId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/data-studio/data-source/2026-09/{datasourceId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /data-studio/data-source/2026-09/{datasourceId}`

<h3 id="delete-data-studiodata-source2026-09datasourceiddata-studiodata-source2026-09datasourceid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasourceId|path|integer(int64)|true|none|

> Example responses

> default Response

```json
null
```

<h3 id="delete-data-studiodata-source2026-09datasourceiddata-studiodata-source2026-09datasourceid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: data_integration.data_source.file.write ), private_apps
</aside>

# Schemas

<h2 id="tocS_BodyPart">BodyPart</h2>
<!-- backwards compatibility -->
<a id="schemabodypart"></a>
<a id="schema_BodyPart"></a>
<a id="tocSbodypart"></a>
<a id="tocsbodypart"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDisposition|[ContentDisposition](#schemacontentdisposition)|true|none|none|
|entity|object|true|none|An object representing the actual content or payload of the body part.|
|headers|object|true|none|An object containing the headers associated with this body part, where each header can have multiple string values.|
|mediaType|[MediaType](#schemamediatype)|true|none|none|
|messageBodyWorkers|object|true|none|An object representing workers that handle the processing of the message body.|
|parameterizedHeaders|object|true|none|An object containing headers with parameters, where each header can have multiple ParameterizedHeader objects.|
|parent|[MultiPart](#schemamultipart)|true|none|none|
|providers|object|true|none|An object representing providers that supply additional handling or processing for the body part.|

<h2 id="tocS_ParameterizedHeader">ParameterizedHeader</h2>
<!-- backwards compatibility -->
<a id="schemaparameterizedheader"></a>
<a id="schema_ParameterizedHeader"></a>
<a id="tocSparameterizedheader"></a>
<a id="tocsparameterizedheader"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|object|true|none|An object containing additional parameters for the header, where each key is a parameter name and each value is a string representing the parameter's value.|
|value|string|true|none|A string representing the main value of the header.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_FileColumn">FileColumn</h2>
<!-- backwards compatibility -->
<a id="schemafilecolumn"></a>
<a id="schema_FileColumn"></a>
<a id="tocSfilecolumn"></a>
<a id="tocsfilecolumn"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the column, represented as a string.|
|type|string|true|none|The data type of the column, represented as a string.|

<h2 id="tocS_DataSourceUpdateResponse">DataSourceUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatasourceupdateresponse"></a>
<a id="schema_DataSourceUpdateResponse"></a>
<a id="tocSdatasourceupdateresponse"></a>
<a id="tocsdatasourceupdateresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasourceId|integer(int64)|true|none|The unique identifier for the data source. It is an integer formatted as int64.|
|datasourceName|string|true|none|The name of the data source. It is a string.|
|previewLink|string|true|none|A URL string that provides a preview link for the data source.|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_MultiPart">MultiPart</h2>
<!-- backwards compatibility -->
<a id="schemamultipart"></a>
<a id="schema_MultiPart"></a>
<a id="tocSmultipart"></a>
<a id="tocsmultipart"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bodyParts|[[BodyPart](#schemabodypart)]|true|none|An array of BodyPart objects, each representing a distinct part of the multipart entity.|
|contentDisposition|[ContentDisposition](#schemacontentdisposition)|true|none|none|
|entity|object|true|none|An object that holds the main content or payload of the multipart entity.|
|headers|object|true|none|An object containing a map of header names to their respective values, where each value is an array of strings.|
|mediaType|[MediaType](#schemamediatype)|true|none|none|
|messageBodyWorkers|object|true|none|An object that may contain workers for processing the message body, though its specific properties are not detailed.|
|parameterizedHeaders|object|true|none|An object containing a map of header names to arrays of ParameterizedHeader objects, which include additional parameters for each header.|
|parent|[MultiPart](#schemamultipart)|true|none|none|
|providers|object|true|none|An object that may contain providers related to the multipart entity, though its specific properties are not detailed.|

<h2 id="tocS_ContentDisposition">ContentDisposition</h2>
<!-- backwards compatibility -->
<a id="schemacontentdisposition"></a>
<a id="schema_ContentDisposition"></a>
<a id="tocScontentdisposition"></a>
<a id="tocscontentdisposition"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDate|string(date-time)|true|none|The date and time when the file was created, formatted as a date-time string.|
|fileName|string|true|none|The name of the file as a string, indicating the file's name in the content disposition.|
|modificationDate|string(date-time)|true|none|The date and time when the file was last modified, formatted as a date-time string.|
|parameters|object|true|none|An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.|
|readDate|string(date-time)|true|none|The date and time when the file was last read, formatted as a date-time string.|
|size|integer(int32)|true|none|The size of the file as an integer, representing the file's size in bytes.|
|type|string|true|none|The type of content disposition, typically a string indicating how the content should be handled.|

<h2 id="tocS_FormDataBodyPart">FormDataBodyPart</h2>
<!-- backwards compatibility -->
<a id="schemaformdatabodypart"></a>
<a id="schema_FormDataBodyPart"></a>
<a id="tocSformdatabodypart"></a>
<a id="tocsformdatabodypart"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDisposition|[ContentDisposition](#schemacontentdisposition)|true|none|none|
|entity|object|true|none|An object representing the entity of the form data part, which contains the actual data being submitted.|
|formDataContentDisposition|[FormDataContentDisposition](#schemaformdatacontentdisposition)|true|none|none|
|headers|object|true|none|An object containing the headers associated with this form data part, where each header can have multiple string values.|
|mediaType|[MediaType](#schemamediatype)|true|none|none|
|messageBodyWorkers|object|true|none|An object representing the message body workers, which are responsible for processing the body of the message.|
|name|string|true|none|The name of the form data part, typically used to identify the part within the multipart request.|
|parameterizedHeaders|object|true|none|An object containing parameterized headers, where each header can have multiple values represented as ParameterizedHeader objects.|
|parent|[MultiPart](#schemamultipart)|true|none|none|
|providers|object|true|none|An object representing the providers associated with this form data part.|
|simple|boolean|true|none|A boolean indicating whether the form data part is simple, typically meaning it does not contain complex nested structures.|
|value|string|true|none|The string value of the form data part, representing the actual data being submitted as a string.|

<h2 id="tocS_FormDataMultiPart">FormDataMultiPart</h2>
<!-- backwards compatibility -->
<a id="schemaformdatamultipart"></a>
<a id="schema_FormDataMultiPart"></a>
<a id="tocSformdatamultipart"></a>
<a id="tocsformdatamultipart"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bodyParts|[[BodyPart](#schemabodypart)]|true|none|An array of BodyPart objects, each representing a part of the multipart form data.|
|contentDisposition|[ContentDisposition](#schemacontentdisposition)|true|none|none|
|entity|object|true|none|An object representing the entity of the multipart form data, containing the actual data to be processed.|
|fields|object|true|none|An object containing fields of the multipart form data, where each field can have multiple FormDataBodyPart items.|
|headers|object|true|none|An object containing headers associated with the multipart form data, where each header can have multiple string values.|
|mediaType|[MediaType](#schemamediatype)|true|none|none|
|messageBodyWorkers|object|true|none|An object representing workers that process the message body of the multipart form data.|
|parameterizedHeaders|object|true|none|An object containing parameterized headers, where each header can have multiple ParameterizedHeader items.|
|parent|[MultiPart](#schemamultipart)|true|none|none|
|providers|object|true|none|An object representing providers associated with the multipart form data.|

<h2 id="tocS_MediaType">MediaType</h2>
<!-- backwards compatibility -->
<a id="schemamediatype"></a>
<a id="schema_MediaType"></a>
<a id="tocSmediatype"></a>
<a id="tocsmediatype"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|object|true|none|An object containing additional parameters for the media type, where each key-value pair is a string.|
|subtype|string|true|none|The specific subtype of the media, represented as a string.|
|type|string|true|none|The primary type of the media, represented as a string.|
|wildcardSubtype|boolean|true|none|A boolean indicating whether the media subtype is a wildcard.|
|wildcardType|boolean|true|none|A boolean indicating whether the media type is a wildcard.|

<h2 id="tocS_DataSourceGetResponse">DataSourceGetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcegetresponse"></a>
<a id="schema_DataSourceGetResponse"></a>
<a id="tocSdatasourcegetresponse"></a>
<a id="tocsdatasourcegetresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[[FileColumn](#schemafilecolumn)]|true|none|An array of FileColumn objects representing the columns in the data source.|
|createdAt|string|true|none|The creation date and time of the data source, represented as a string.|
|datasourceId|integer(int64)|true|none|The unique identifier for the data source, represented as a 64-bit integer.|
|datasourceName|string|true|none|The name of the data source, represented as a string.|
|datasourceType|string|true|none|The type of the data source, which is a string with a valid value of 'FILE'.|
|lastIngestionStatus|string|true|none|The status of the last data ingestion process, represented as a string. Valid values include 'SUCCESSFUL', 'IN_PROGRESS', and 'FAILED'.|

#### Enumerated Values

|Property|Value|
|---|---|
|datasourceType|FILE|
|lastIngestionStatus|FAILED|
|lastIngestionStatus|IN_PROGRESS|
|lastIngestionStatus|SUCCESSFUL|

<h2 id="tocS_FormDataContentDisposition">FormDataContentDisposition</h2>
<!-- backwards compatibility -->
<a id="schemaformdatacontentdisposition"></a>
<a id="schema_FormDataContentDisposition"></a>
<a id="tocSformdatacontentdisposition"></a>
<a id="tocsformdatacontentdisposition"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDate|string(date-time)|true|none|The date and time when the file was created, in ISO 8601 format.|
|fileName|string|true|none|A string indicating the name of the file associated with this content disposition.|
|modificationDate|string(date-time)|true|none|The date and time when the file was last modified, in ISO 8601 format.|
|name|string|true|none|A string representing the name associated with this content disposition.|
|parameters|object|true|none|An object containing additional parameters for the content disposition, with each parameter represented as a string.|
|readDate|string(date-time)|true|none|The date and time when the file was last read, in ISO 8601 format.|
|size|integer(int32)|true|none|An integer representing the size of the file in bytes.|
|type|string|true|none|A string representing the type of content disposition.|
