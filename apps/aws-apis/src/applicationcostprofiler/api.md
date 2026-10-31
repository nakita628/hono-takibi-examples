<h1 id="aws-application-cost-profiler">AWS Application Cost Profiler v2020-09-10</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>This reference provides descriptions of the AWS Application Cost Profiler API.</p> <p>The AWS Application Cost Profiler API provides programmatic access to view, create, update, and delete application cost report definitions, as well as to import your usage data into the Application Cost Profiler service.</p> <p>For more information about using this service, see the <a href="https://docs.aws.amazon.com/application-cost-profiler/latest/userguide/introduction.html">AWS Application Cost Profiler User Guide</a>.</p>

Base URLs:

* <a href="http://application-cost-profiler.us-east-1.amazonaws.com">http://application-cost-profiler.us-east-1.amazonaws.com</a> - The AWS Application Cost Profiler multi-region endpoint

* <a href="https://application-cost-profiler.us-east-1.amazonaws.com">https://application-cost-profiler.us-east-1.amazonaws.com</a> - The AWS Application Cost Profiler multi-region endpoint

* <a href="http://application-cost-profiler.cn-north-1.amazonaws.com.cn">http://application-cost-profiler.cn-north-1.amazonaws.com.cn</a> - The AWS Application Cost Profiler endpoint for China (Beijing) and China (Ningxia)

* <a href="https://application-cost-profiler.cn-north-1.amazonaws.com.cn">https://application-cost-profiler.cn-north-1.amazonaws.com.cn</a> - The AWS Application Cost Profiler endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/application-cost-profiler/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-application-cost-profiler-default">Default</h1>

## GetReportDefinition

<a id="opIdGetReportDefinition"></a>

> Code samples

```bash
curl https://applicationcostprofiler.us-east-1.amazonaws.com/reportDefinition/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /reportDefinition/{reportId}`

Retrieves the definition of a report already configured in AWS Application Cost Profiler.

<h3 id="getreportdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportId|path|string|true|ID of the report to retrieve.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "reportId": {},
  "reportDescription": {},
  "reportFrequency": {},
  "format": {},
  "destinationS3Location": {
    "bucket": {},
    "prefix": {}
  },
  "createdAt": {},
  "lastUpdated": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getreportdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetReportDefinitionResult](#schemagetreportdefinitionresult)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateReportDefinition

<a id="opIdUpdateReportDefinition"></a>

> Code samples

```bash
curl https://applicationcostprofiler.us-east-1.amazonaws.com/reportDefinition/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "reportDescription": "string",
    "reportFrequency": "MONTHLY",
    "format": "CSV",
    "destinationS3Location": {
      "bucket": {},
      "prefix": {}
    }
  }'
```

`PUT /reportDefinition/{reportId}`

Updates existing report in AWS Application Cost Profiler.

> Body parameter

```json
{
  "reportDescription": "string",
  "reportFrequency": "MONTHLY",
  "format": "CSV",
  "destinationS3Location": {
    "bucket": {},
    "prefix": {}
  }
}
```

<h3 id="updatereportdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportId|path|string|true|Required. ID of the report to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» reportDescription|body|string|true|Required. Description of the report.|
|» reportFrequency|body|string|true|Required. The cadence to generate the report.|
|» format|body|string|true|Required. The format to use for the generated report.|
|» destinationS3Location|body|object|true|Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.|
|» » bucket|body|object|false|none|
|» » prefix|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» reportFrequency|MONTHLY|
|» reportFrequency|DAILY|
|» reportFrequency|ALL|
|» format|CSV|
|» format|PARQUET|

> Example responses

> 200 Response

```json
{
  "reportId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="updatereportdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateReportDefinitionResult](#schemaupdatereportdefinitionresult)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteReportDefinition

<a id="opIdDeleteReportDefinition"></a>

> Code samples

```bash
curl https://applicationcostprofiler.us-east-1.amazonaws.com/reportDefinition/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /reportDefinition/{reportId}`

Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being generated.

<h3 id="deletereportdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportId|path|string|true|Required. ID of the report to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "reportId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="deletereportdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReportDefinitionResult](#schemadeletereportdefinitionresult)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportApplicationUsage

<a id="opIdImportApplicationUsage"></a>

> Code samples

```bash
curl https://applicationcostprofiler.us-east-1.amazonaws.com/importApplicationUsage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sourceS3Location": {
      "bucket": {},
      "key": {},
      "region": {}
    }
  }'
```

`POST /importApplicationUsage`

<p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p> <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing asynchronously.</p>

> Body parameter

```json
{
  "sourceS3Location": {
    "bucket": {},
    "key": {},
    "region": {}
  }
}
```

<h3 id="importapplicationusage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» sourceS3Location|body|object|true|Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read from.|
|» » bucket|body|object|false|none|
|» » key|body|object|false|none|
|» » region|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "importId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="importapplicationusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportApplicationUsageResult](#schemaimportapplicationusageresult)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReportDefinitions

<a id="opIdListReportDefinitions"></a>

> Code samples

```bash
curl https://applicationcostprofiler.us-east-1.amazonaws.com/reportDefinition \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /reportDefinition`

<p>Retrieves a list of all reports and their configurations for your AWS account.</p> <p>The maximum number of reports is one.</p>

<h3 id="listreportdefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token value from a previous call to access the next page of results.|
|maxResults|query|integer|false|The maximum number of results to return.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "reportDefinitions": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listreportdefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReportDefinitionsResult](#schemalistreportdefinitionsresult)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutReportDefinition

<a id="opIdPutReportDefinition"></a>

> Code samples

```bash
curl https://applicationcostprofiler.us-east-1.amazonaws.com/reportDefinition \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "reportId": "string",
    "reportDescription": "string",
    "reportFrequency": "MONTHLY",
    "format": "CSV",
    "destinationS3Location": {
      "bucket": {},
      "prefix": {}
    }
  }'
```

`POST /reportDefinition`

Creates the report definition for a report in Application Cost Profiler.

> Body parameter

```json
{
  "reportId": "string",
  "reportDescription": "string",
  "reportFrequency": "MONTHLY",
  "format": "CSV",
  "destinationS3Location": {
    "bucket": {},
    "prefix": {}
  }
}
```

<h3 id="putreportdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» reportId|body|string|true|Required. ID of the report. You can choose any valid string matching the pattern for the ID.|
|» reportDescription|body|string|true|Required. Description of the report.|
|» reportFrequency|body|string|true|Required. The cadence to generate the report.|
|» format|body|string|true|Required. The format to use for the generated report.|
|» destinationS3Location|body|object|true|Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.|
|» » bucket|body|object|false|none|
|» » prefix|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» reportFrequency|MONTHLY|
|» reportFrequency|DAILY|
|» reportFrequency|ALL|
|» format|CSV|
|» format|PARQUET|

> Example responses

> 200 Response

```json
{
  "reportId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="putreportdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutReportDefinitionResult](#schemaputreportdefinitionresult)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DeleteReportDefinitionResult">DeleteReportDefinitionResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletereportdefinitionresult"></a>
<a id="schema_DeleteReportDefinitionResult"></a>
<a id="tocSdeletereportdefinitionresult"></a>
<a id="tocsdeletereportdefinitionresult"></a>

```json
{
  "reportId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportId|object|false|none|none|

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_GetReportDefinitionResult">GetReportDefinitionResult</h2>
<!-- backwards compatibility -->
<a id="schemagetreportdefinitionresult"></a>
<a id="schema_GetReportDefinitionResult"></a>
<a id="tocSgetreportdefinitionresult"></a>
<a id="tocsgetreportdefinitionresult"></a>

```json
{
  "reportId": {},
  "reportDescription": {},
  "reportFrequency": {},
  "format": {},
  "destinationS3Location": {
    "bucket": {},
    "prefix": {}
  },
  "createdAt": {},
  "lastUpdated": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportId|object|true|none|none|
|reportDescription|object|true|none|none|
|reportFrequency|object|true|none|none|
|format|object|true|none|none|
|destinationS3Location|object|true|none|none|
|createdAt|object|true|none|none|
|lastUpdated|object|true|none|none|

<h2 id="tocS_ImportApplicationUsageResult">ImportApplicationUsageResult</h2>
<!-- backwards compatibility -->
<a id="schemaimportapplicationusageresult"></a>
<a id="schema_ImportApplicationUsageResult"></a>
<a id="tocSimportapplicationusageresult"></a>
<a id="tocsimportapplicationusageresult"></a>

```json
{
  "importId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|importId|object|true|none|none|

<h2 id="tocS_S3Bucket">S3Bucket</h2>
<!-- backwards compatibility -->
<a id="schemas3bucket"></a>
<a id="schema_S3Bucket"></a>
<a id="tocSs3bucket"></a>
<a id="tocss3bucket"></a>

```json
"string"
```

<h2 id="tocS_S3Key">S3Key</h2>
<!-- backwards compatibility -->
<a id="schemas3key"></a>
<a id="schema_S3Key"></a>
<a id="tocSs3key"></a>
<a id="tocss3key"></a>

```json
"string"
```

<h2 id="tocS_S3BucketRegion">S3BucketRegion</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketregion"></a>
<a id="schema_S3BucketRegion"></a>
<a id="tocSs3bucketregion"></a>
<a id="tocss3bucketregion"></a>

```json
"ap-east-1"
```

<h2 id="tocS_ListReportDefinitionsResult">ListReportDefinitionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistreportdefinitionsresult"></a>
<a id="schema_ListReportDefinitionsResult"></a>
<a id="tocSlistreportdefinitionsresult"></a>
<a id="tocslistreportdefinitionsresult"></a>

```json
{
  "reportDefinitions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportDefinitions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_PutReportDefinitionResult">PutReportDefinitionResult</h2>
<!-- backwards compatibility -->
<a id="schemaputreportdefinitionresult"></a>
<a id="schema_PutReportDefinitionResult"></a>
<a id="tocSputreportdefinitionresult"></a>
<a id="tocsputreportdefinitionresult"></a>

```json
{
  "reportId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportId|object|false|none|none|

<h2 id="tocS_S3Prefix">S3Prefix</h2>
<!-- backwards compatibility -->
<a id="schemas3prefix"></a>
<a id="schema_S3Prefix"></a>
<a id="tocSs3prefix"></a>
<a id="tocss3prefix"></a>

```json
"string"
```

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_UpdateReportDefinitionResult">UpdateReportDefinitionResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereportdefinitionresult"></a>
<a id="schema_UpdateReportDefinitionResult"></a>
<a id="tocSupdatereportdefinitionresult"></a>
<a id="tocsupdatereportdefinitionresult"></a>

```json
{
  "reportId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportId|object|false|none|none|

<h2 id="tocS_ReportId">ReportId</h2>
<!-- backwards compatibility -->
<a id="schemareportid"></a>
<a id="schema_ReportId"></a>
<a id="tocSreportid"></a>
<a id="tocsreportid"></a>

```json
"string"
```

<h2 id="tocS_DeleteReportDefinitionRequest">DeleteReportDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletereportdefinitionrequest"></a>
<a id="schema_DeleteReportDefinitionRequest"></a>
<a id="tocSdeletereportdefinitionrequest"></a>
<a id="tocsdeletereportdefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_Format">Format</h2>
<!-- backwards compatibility -->
<a id="schemaformat"></a>
<a id="schema_Format"></a>
<a id="tocSformat"></a>
<a id="tocsformat"></a>

```json
"CSV"
```

<h2 id="tocS_GetReportDefinitionRequest">GetReportDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetreportdefinitionrequest"></a>
<a id="schema_GetReportDefinitionRequest"></a>
<a id="tocSgetreportdefinitionrequest"></a>
<a id="tocsgetreportdefinitionrequest"></a>

```json
{}
```

<h2 id="tocS_ReportDescription">ReportDescription</h2>
<!-- backwards compatibility -->
<a id="schemareportdescription"></a>
<a id="schema_ReportDescription"></a>
<a id="tocSreportdescription"></a>
<a id="tocsreportdescription"></a>

```json
"string"
```

<h2 id="tocS_ReportFrequency">ReportFrequency</h2>
<!-- backwards compatibility -->
<a id="schemareportfrequency"></a>
<a id="schema_ReportFrequency"></a>
<a id="tocSreportfrequency"></a>
<a id="tocsreportfrequency"></a>

```json
"MONTHLY"
```

<h2 id="tocS_S3Location">S3Location</h2>
<!-- backwards compatibility -->
<a id="schemas3location"></a>
<a id="schema_S3Location"></a>
<a id="tocSs3location"></a>
<a id="tocss3location"></a>

```json
{
  "bucket": {},
  "prefix": {}
}
```

Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|true|none|none|
|prefix|object|true|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_SourceS3Location">SourceS3Location</h2>
<!-- backwards compatibility -->
<a id="schemasources3location"></a>
<a id="schema_SourceS3Location"></a>
<a id="tocSsources3location"></a>
<a id="tocssources3location"></a>

```json
{
  "bucket": {},
  "key": {},
  "region": {}
}
```

Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|true|none|none|
|key|object|true|none|none|
|region|object|false|none|none|

<h2 id="tocS_ImportApplicationUsageRequest">ImportApplicationUsageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportapplicationusagerequest"></a>
<a id="schema_ImportApplicationUsageRequest"></a>
<a id="tocSimportapplicationusagerequest"></a>
<a id="tocsimportapplicationusagerequest"></a>

```json
{
  "sourceS3Location": {
    "bucket": {},
    "key": {},
    "region": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceS3Location|object|true|none|none|

<h2 id="tocS_ImportId">ImportId</h2>
<!-- backwards compatibility -->
<a id="schemaimportid"></a>
<a id="schema_ImportId"></a>
<a id="tocSimportid"></a>
<a id="tocsimportid"></a>

```json
"string"
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
1
```

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```

<h2 id="tocS_ListReportDefinitionsRequest">ListReportDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistreportdefinitionsrequest"></a>
<a id="schema_ListReportDefinitionsRequest"></a>
<a id="tocSlistreportdefinitionsrequest"></a>
<a id="tocslistreportdefinitionsrequest"></a>

```json
{}
```

<h2 id="tocS_ReportDefinitionList">ReportDefinitionList</h2>
<!-- backwards compatibility -->
<a id="schemareportdefinitionlist"></a>
<a id="schema_ReportDefinitionList"></a>
<a id="tocSreportdefinitionlist"></a>
<a id="tocsreportdefinitionlist"></a>

```json
[
  {
    "reportId": {},
    "reportDescription": {},
    "reportFrequency": {},
    "format": {},
    "destinationS3Location": {
      "bucket": {},
      "prefix": {}
    },
    "createdAt": {},
    "lastUpdatedAt": {}
  }
]
```

<h2 id="tocS_PutReportDefinitionRequest">PutReportDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputreportdefinitionrequest"></a>
<a id="schema_PutReportDefinitionRequest"></a>
<a id="tocSputreportdefinitionrequest"></a>
<a id="tocsputreportdefinitionrequest"></a>

```json
{
  "reportId": {},
  "reportDescription": {},
  "reportFrequency": {},
  "format": {},
  "destinationS3Location": {
    "bucket": {},
    "prefix": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportId|object|true|none|none|
|reportDescription|object|true|none|none|
|reportFrequency|object|true|none|none|
|format|object|true|none|none|
|destinationS3Location|object|true|none|none|

<h2 id="tocS_ReportDefinition">ReportDefinition</h2>
<!-- backwards compatibility -->
<a id="schemareportdefinition"></a>
<a id="schema_ReportDefinition"></a>
<a id="tocSreportdefinition"></a>
<a id="tocsreportdefinition"></a>

```json
{
  "reportId": {},
  "reportDescription": {},
  "reportFrequency": {},
  "format": {},
  "destinationS3Location": {
    "bucket": {},
    "prefix": {}
  },
  "createdAt": {},
  "lastUpdatedAt": {}
}
```

The configuration of a report in AWS Application Cost Profiler.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportId|object|false|none|none|
|reportDescription|object|false|none|none|
|reportFrequency|object|false|none|none|
|format|object|false|none|none|
|destinationS3Location|object|false|none|none|
|createdAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|

<h2 id="tocS_UpdateReportDefinitionRequest">UpdateReportDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereportdefinitionrequest"></a>
<a id="schema_UpdateReportDefinitionRequest"></a>
<a id="tocSupdatereportdefinitionrequest"></a>
<a id="tocsupdatereportdefinitionrequest"></a>

```json
{
  "reportDescription": {},
  "reportFrequency": {},
  "format": {},
  "destinationS3Location": {
    "bucket": {},
    "prefix": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportDescription|object|true|none|none|
|reportFrequency|object|true|none|none|
|format|object|true|none|none|
|destinationS3Location|object|true|none|none|
