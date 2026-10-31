<h1 id="aws-cost-and-usage-report-service">AWS Cost and Usage Report Service v2017-01-06</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>The AWS Cost and Usage Report API enables you to programmatically create, query, and delete AWS Cost and Usage report definitions.</p> <p>AWS Cost and Usage reports track the monthly AWS costs and usage associated with your AWS account. The report contains line items for each unique combination of AWS product, usage type, and operation that your AWS account uses. You can configure the AWS Cost and Usage report to show only the data that you want, using the AWS Cost and Usage API.</p> <p>Service Endpoint</p> <p>The AWS Cost and Usage Report API provides the following endpoint:</p> <ul> <li> <p>cur.us-east-1.amazonaws.com</p> </li> </ul>

Base URLs:

* <a href="http://cur.us-east-1.amazonaws.com">http://cur.us-east-1.amazonaws.com</a> - The AWS Cost and Usage Report Service multi-region endpoint

* <a href="https://cur.us-east-1.amazonaws.com">https://cur.us-east-1.amazonaws.com</a> - The AWS Cost and Usage Report Service multi-region endpoint

* <a href="http://cur.cn-north-1.amazonaws.com.cn">http://cur.cn-north-1.amazonaws.com.cn</a> - The AWS Cost and Usage Report Service endpoint for China (Beijing) and China (Ningxia)

* <a href="https://cur.cn-north-1.amazonaws.com.cn">https://cur.cn-north-1.amazonaws.com.cn</a> - The AWS Cost and Usage Report Service endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/cur/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-cost-and-usage-report-service-default">Default</h1>

## DeleteReportDefinition

<a id="opIdDeleteReportDefinition"></a>

> Code samples

```bash
curl 'https://cur.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrigamiServiceGatewayService.DeleteReportDefinition' \
  -d '{
    "ReportName": {}
  }'
```

`POST /#X-Amz-Target=AWSOrigamiServiceGatewayService.DeleteReportDefinition`

Deletes the specified report.

> Body parameter

```json
{
  "ReportName": {}
}
```

<h3 id="deletereportdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteReportDefinitionRequest](#schemadeletereportdefinitionrequest)|true|none|
|» ReportName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrigamiServiceGatewayService.DeleteReportDefinition|

> Example responses

> 200 Response

```json
{
  "ResponseMessage": "string"
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

<h3 id="deletereportdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReportDefinitionResponse](#schemadeletereportdefinitionresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReportDefinitions

<a id="opIdDescribeReportDefinitions"></a>

> Code samples

```bash
curl 'https://cur.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrigamiServiceGatewayService.DescribeReportDefinitions' \
  -d '{
    "MaxResults": 5,
    "NextToken": "string"
  }'
```

`POST /#X-Amz-Target=AWSOrigamiServiceGatewayService.DescribeReportDefinitions`

Lists the AWS Cost and Usage reports available to this account.

> Body parameter

```json
{
  "MaxResults": 5,
  "NextToken": "string"
}
```

<h3 id="describereportdefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeReportDefinitionsRequest](#schemadescribereportdefinitionsrequest)|true|none|
|» MaxResults|body|[MaxResults](#schemamaxresults)|false|The maximum number of results that AWS returns for the operation.|
|» NextToken|body|[GenericString](#schemagenericstring)|false|A generic string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrigamiServiceGatewayService.DescribeReportDefinitions|

> Example responses

> 200 Response

```json
{
  "ReportDefinitions": [
    {
      "AdditionalArtifacts": [
        "QUICKSIGHT"
      ],
      "AdditionalSchemaElements": [
        "RESOURCES"
      ],
      "Compression": "GZIP",
      "Format": "textORcsv",
      "ReportName": "ExampleReport",
      "S3Bucket": "example-s3-bucket",
      "S3Prefix": "exampleprefix",
      "S3Region": "us-east-1",
      "TimeUnit": "HOURLY"
    },
    {
      "AdditionalArtifacts": [
        "QUICKSIGHT"
      ],
      "AdditionalSchemaElements": [
        "RESOURCES"
      ],
      "Compression": "GZIP",
      "Format": "textORcsv",
      "ReportName": "ExampleReport2",
      "S3Bucket": "example-s3-bucket",
      "S3Prefix": "exampleprefix",
      "S3Region": "us-east-1",
      "TimeUnit": "HOURLY"
    }
  ]
}
```

> 480 Response

```json
null
```

<h3 id="describereportdefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReportDefinitionsResponse](#schemadescribereportdefinitionsresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyReportDefinition

<a id="opIdModifyReportDefinition"></a>

> Code samples

```bash
curl 'https://cur.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrigamiServiceGatewayService.ModifyReportDefinition' \
  -d '{
    "ReportName": "string",
    "ReportDefinition": {
      "ReportName": "string",
      "TimeUnit": "HOURLY",
      "Format": "textORcsv",
      "Compression": "ZIP",
      "AdditionalSchemaElements": {},
      "S3Bucket": "string",
      "S3Prefix": "string",
      "S3Region": "af-south-1",
      "AdditionalArtifacts": {},
      "RefreshClosedReports": {},
      "ReportVersioning": {},
      "BillingViewArn": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSOrigamiServiceGatewayService.ModifyReportDefinition`

Allows you to programatically update your report preferences.

> Body parameter

```json
{
  "ReportName": "string",
  "ReportDefinition": {
    "ReportName": "string",
    "TimeUnit": "HOURLY",
    "Format": "textORcsv",
    "Compression": "ZIP",
    "AdditionalSchemaElements": {},
    "S3Bucket": "string",
    "S3Prefix": "string",
    "S3Region": "af-south-1",
    "AdditionalArtifacts": {},
    "RefreshClosedReports": {},
    "ReportVersioning": {},
    "BillingViewArn": {}
  }
}
```

<h3 id="modifyreportdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ModifyReportDefinitionRequest](#schemamodifyreportdefinitionrequest)|true|none|
|» ReportName|body|[ReportName](#schemareportname)|true|The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces. |
|» ReportDefinition|body|[ReportDefinition](#schemareportdefinition)|true|The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrigamiServiceGatewayService.ModifyReportDefinition|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="modifyreportdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyReportDefinitionResponse](#schemamodifyreportdefinitionresponse)|
|480|480|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutReportDefinition

<a id="opIdPutReportDefinition"></a>

> Code samples

```bash
curl 'https://cur.us-east-1.amazonaws.com/#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSOrigamiServiceGatewayService.PutReportDefinition' \
  -d '{
    "ReportDefinition": {
      "ReportName": "string",
      "TimeUnit": "HOURLY",
      "Format": "textORcsv",
      "Compression": "ZIP",
      "AdditionalSchemaElements": {},
      "S3Bucket": "string",
      "S3Prefix": "string",
      "S3Region": "af-south-1",
      "AdditionalArtifacts": {},
      "RefreshClosedReports": {},
      "ReportVersioning": {},
      "BillingViewArn": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSOrigamiServiceGatewayService.PutReportDefinition`

Creates a new report using the description that you provide.

> Body parameter

```json
{
  "ReportDefinition": {
    "ReportName": "string",
    "TimeUnit": "HOURLY",
    "Format": "textORcsv",
    "Compression": "ZIP",
    "AdditionalSchemaElements": {},
    "S3Bucket": "string",
    "S3Prefix": "string",
    "S3Region": "af-south-1",
    "AdditionalArtifacts": {},
    "RefreshClosedReports": {},
    "ReportVersioning": {},
    "BillingViewArn": {}
  }
}
```

<h3 id="putreportdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutReportDefinitionRequest](#schemaputreportdefinitionrequest)|true|none|
|» ReportDefinition|body|object|true|none|
|» » ReportName|body|[ReportName](#schemareportname)|true|The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces. |
|» » TimeUnit|body|[TimeUnit](#schematimeunit)|true|The length of time covered by the report. |
|» » Format|body|[ReportFormat](#schemareportformat)|true|The format that AWS saves the report in.|
|» » Compression|body|[CompressionFormat](#schemacompressionformat)|true|The compression format that AWS uses for the report.|
|» » AdditionalSchemaElements|body|object|true|none|
|» » S3Bucket|body|[S3Bucket](#schemas3bucket)|true|The S3 bucket where AWS delivers the report.|
|» » S3Prefix|body|[S3Prefix](#schemas3prefix)|true|The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.|
|» » S3Region|body|[AWSRegion](#schemaawsregion)|true|The region of the S3 bucket that AWS delivers the report into.|
|» » AdditionalArtifacts|body|object|false|none|
|» » RefreshClosedReports|body|object|false|none|
|» » ReportVersioning|body|object|false|none|
|» » BillingViewArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSOrigamiServiceGatewayService.PutReportDefinition|
|» » TimeUnit|HOURLY|
|» » TimeUnit|DAILY|
|» » TimeUnit|MONTHLY|
|» » Format|textORcsv|
|» » Format|Parquet|
|» » Compression|ZIP|
|» » Compression|GZIP|
|» » Compression|Parquet|
|» » S3Region|af-south-1|
|» » S3Region|ap-east-1|
|» » S3Region|ap-south-1|
|» » S3Region|ap-southeast-1|
|» » S3Region|ap-southeast-2|
|» » S3Region|ap-southeast-3|
|» » S3Region|ap-northeast-1|
|» » S3Region|ap-northeast-2|
|» » S3Region|ap-northeast-3|
|» » S3Region|ca-central-1|
|» » S3Region|eu-central-1|
|» » S3Region|eu-west-1|
|» » S3Region|eu-west-2|
|» » S3Region|eu-west-3|
|» » S3Region|eu-north-1|
|» » S3Region|eu-south-1|
|» » S3Region|eu-south-2|
|» » S3Region|me-central-1|
|» » S3Region|me-south-1|
|» » S3Region|sa-east-1|
|» » S3Region|us-east-1|
|» » S3Region|us-east-2|
|» » S3Region|us-west-1|
|» » S3Region|us-west-2|
|» » S3Region|cn-north-1|
|» » S3Region|cn-northwest-1|

> Example responses

> 200 Response

```json
{}
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

<h3 id="putreportdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutReportDefinitionResponse](#schemaputreportdefinitionresponse)|
|480|480|DuplicateReportNameException|[DuplicateReportNameException](#schemaduplicatereportnameexception)|
|481|481|ReportLimitReachedException|[ReportLimitReachedException](#schemareportlimitreachedexception)|
|482|482|InternalErrorException|[InternalErrorException](#schemainternalerrorexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DeleteReportDefinitionResponse">DeleteReportDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletereportdefinitionresponse"></a>
<a id="schema_DeleteReportDefinitionResponse"></a>
<a id="tocSdeletereportdefinitionresponse"></a>
<a id="tocsdeletereportdefinitionresponse"></a>

```json
{
  "ResponseMessage": "string"
}
```

If the action is successful, the service sends back an HTTP 200 response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResponseMessage|[DeleteResponseMessage](#schemadeleteresponsemessage)|false|none|Whether the deletion was successful or not.|

<h2 id="tocS_DeleteReportDefinitionRequest">DeleteReportDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletereportdefinitionrequest"></a>
<a id="schema_DeleteReportDefinitionRequest"></a>
<a id="tocSdeletereportdefinitionrequest"></a>
<a id="tocsdeletereportdefinitionrequest"></a>

```json
{
  "ReportName": {}
}
```

Deletes the specified report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportName|object|false|none|none|

<h2 id="tocS_InternalErrorException">InternalErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalerrorexception"></a>
<a id="schema_InternalErrorException"></a>
<a id="tocSinternalerrorexception"></a>
<a id="tocsinternalerrorexception"></a>

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

<h2 id="tocS_DescribeReportDefinitionsResponse">DescribeReportDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereportdefinitionsresponse"></a>
<a id="schema_DescribeReportDefinitionsResponse"></a>
<a id="tocSdescribereportdefinitionsresponse"></a>
<a id="tocsdescribereportdefinitionsresponse"></a>

```json
{
  "ReportDefinitions": [
    {
      "AdditionalArtifacts": [
        "QUICKSIGHT"
      ],
      "AdditionalSchemaElements": [
        "RESOURCES"
      ],
      "Compression": "GZIP",
      "Format": "textORcsv",
      "ReportName": "ExampleReport",
      "S3Bucket": "example-s3-bucket",
      "S3Prefix": "exampleprefix",
      "S3Region": "us-east-1",
      "TimeUnit": "HOURLY"
    },
    {
      "AdditionalArtifacts": [
        "QUICKSIGHT"
      ],
      "AdditionalSchemaElements": [
        "RESOURCES"
      ],
      "Compression": "GZIP",
      "Format": "textORcsv",
      "ReportName": "ExampleReport2",
      "S3Bucket": "example-s3-bucket",
      "S3Prefix": "exampleprefix",
      "S3Region": "us-east-1",
      "TimeUnit": "HOURLY"
    }
  ]
}
```

If the action is successful, the service sends back an HTTP 200 response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportDefinitions|object|false|none|none|
|NextToken|[GenericString](#schemagenericstring)|false|none|A generic string.|

<h2 id="tocS_DescribeReportDefinitionsRequest">DescribeReportDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribereportdefinitionsrequest"></a>
<a id="schema_DescribeReportDefinitionsRequest"></a>
<a id="tocSdescribereportdefinitionsrequest"></a>
<a id="tocsdescribereportdefinitionsrequest"></a>

```json
{
  "MaxResults": 5,
  "NextToken": "string"
}
```

Requests a list of AWS Cost and Usage reports owned by the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|[MaxResults](#schemamaxresults)|false|none|The maximum number of results that AWS returns for the operation.|
|NextToken|[GenericString](#schemagenericstring)|false|none|A generic string.|

<h2 id="tocS_ModifyReportDefinitionResponse">ModifyReportDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemamodifyreportdefinitionresponse"></a>
<a id="schema_ModifyReportDefinitionResponse"></a>
<a id="tocSmodifyreportdefinitionresponse"></a>
<a id="tocsmodifyreportdefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_ModifyReportDefinitionRequest">ModifyReportDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifyreportdefinitionrequest"></a>
<a id="schema_ModifyReportDefinitionRequest"></a>
<a id="tocSmodifyreportdefinitionrequest"></a>
<a id="tocsmodifyreportdefinitionrequest"></a>

```json
{
  "ReportName": "string",
  "ReportDefinition": {
    "ReportName": "string",
    "TimeUnit": "HOURLY",
    "Format": "textORcsv",
    "Compression": "ZIP",
    "AdditionalSchemaElements": {},
    "S3Bucket": "string",
    "S3Prefix": "string",
    "S3Region": "af-south-1",
    "AdditionalArtifacts": {},
    "RefreshClosedReports": {},
    "ReportVersioning": {},
    "BillingViewArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportName|[ReportName](#schemareportname)|true|none|The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces. |
|ReportDefinition|[ReportDefinition](#schemareportdefinition)|true|none|The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition. |

<h2 id="tocS_PutReportDefinitionResponse">PutReportDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputreportdefinitionresponse"></a>
<a id="schema_PutReportDefinitionResponse"></a>
<a id="tocSputreportdefinitionresponse"></a>
<a id="tocsputreportdefinitionresponse"></a>

```json
{}
```

If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.

<h2 id="tocS_PutReportDefinitionRequest">PutReportDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputreportdefinitionrequest"></a>
<a id="schema_PutReportDefinitionRequest"></a>
<a id="tocSputreportdefinitionrequest"></a>
<a id="tocsputreportdefinitionrequest"></a>

```json
{
  "ReportDefinition": {
    "ReportName": "string",
    "TimeUnit": "HOURLY",
    "Format": "textORcsv",
    "Compression": "ZIP",
    "AdditionalSchemaElements": {},
    "S3Bucket": "string",
    "S3Prefix": "string",
    "S3Region": "af-south-1",
    "AdditionalArtifacts": {},
    "RefreshClosedReports": {},
    "ReportVersioning": {},
    "BillingViewArn": {}
  }
}
```

Creates a Cost and Usage Report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportDefinition|object|true|none|none|

<h2 id="tocS_DuplicateReportNameException">DuplicateReportNameException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatereportnameexception"></a>
<a id="schema_DuplicateReportNameException"></a>
<a id="tocSduplicatereportnameexception"></a>
<a id="tocsduplicatereportnameexception"></a>

```json
null
```

<h2 id="tocS_ReportLimitReachedException">ReportLimitReachedException</h2>
<!-- backwards compatibility -->
<a id="schemareportlimitreachedexception"></a>
<a id="schema_ReportLimitReachedException"></a>
<a id="tocSreportlimitreachedexception"></a>
<a id="tocsreportlimitreachedexception"></a>

```json
null
```

<h2 id="tocS_AWSRegion">AWSRegion</h2>
<!-- backwards compatibility -->
<a id="schemaawsregion"></a>
<a id="schema_AWSRegion"></a>
<a id="tocSawsregion"></a>
<a id="tocsawsregion"></a>

```json
"af-south-1"
```

The region of the S3 bucket that AWS delivers the report into.

<h2 id="tocS_AdditionalArtifact">AdditionalArtifact</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalartifact"></a>
<a id="schema_AdditionalArtifact"></a>
<a id="tocSadditionalartifact"></a>
<a id="tocsadditionalartifact"></a>

```json
"REDSHIFT"
```

The types of manifest that you want AWS to create for this report.

<h2 id="tocS_AdditionalArtifactList">AdditionalArtifactList</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalartifactlist"></a>
<a id="schema_AdditionalArtifactList"></a>
<a id="tocSadditionalartifactlist"></a>
<a id="tocsadditionalartifactlist"></a>

```json
[
  "REDSHIFT"
]
```

A list of additional artifacts.

<h2 id="tocS_BillingViewArn">BillingViewArn</h2>
<!-- backwards compatibility -->
<a id="schemabillingviewarn"></a>
<a id="schema_BillingViewArn"></a>
<a id="tocSbillingviewarn"></a>
<a id="tocsbillingviewarn"></a>

```json
"string"
```

<h2 id="tocS_CompressionFormat">CompressionFormat</h2>
<!-- backwards compatibility -->
<a id="schemacompressionformat"></a>
<a id="schema_CompressionFormat"></a>
<a id="tocScompressionformat"></a>
<a id="tocscompressionformat"></a>

```json
"ZIP"
```

The compression format that AWS uses for the report.

<h2 id="tocS_ReportName">ReportName</h2>
<!-- backwards compatibility -->
<a id="schemareportname"></a>
<a id="schema_ReportName"></a>
<a id="tocSreportname"></a>
<a id="tocsreportname"></a>

```json
"string"
```

The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.

<h2 id="tocS_DeleteResponseMessage">DeleteResponseMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresponsemessage"></a>
<a id="schema_DeleteResponseMessage"></a>
<a id="tocSdeleteresponsemessage"></a>
<a id="tocsdeleteresponsemessage"></a>

```json
"string"
```

Whether the deletion was successful or not.

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
5
```

The maximum number of results that AWS returns for the operation.

<h2 id="tocS_GenericString">GenericString</h2>
<!-- backwards compatibility -->
<a id="schemagenericstring"></a>
<a id="schema_GenericString"></a>
<a id="tocSgenericstring"></a>
<a id="tocsgenericstring"></a>

```json
"string"
```

A generic string.

<h2 id="tocS_ReportDefinitionList">ReportDefinitionList</h2>
<!-- backwards compatibility -->
<a id="schemareportdefinitionlist"></a>
<a id="schema_ReportDefinitionList"></a>
<a id="tocSreportdefinitionlist"></a>
<a id="tocsreportdefinitionlist"></a>

```json
[
  {
    "ReportName": "string",
    "TimeUnit": "HOURLY",
    "Format": "textORcsv",
    "Compression": "ZIP",
    "AdditionalSchemaElements": {},
    "S3Bucket": "string",
    "S3Prefix": "string",
    "S3Region": "af-south-1",
    "AdditionalArtifacts": {},
    "RefreshClosedReports": {},
    "ReportVersioning": {},
    "BillingViewArn": {}
  }
]
```

A list of report definitions.

<h2 id="tocS_ReportDefinition">ReportDefinition</h2>
<!-- backwards compatibility -->
<a id="schemareportdefinition"></a>
<a id="schema_ReportDefinition"></a>
<a id="tocSreportdefinition"></a>
<a id="tocsreportdefinition"></a>

```json
{
  "ReportName": "string",
  "TimeUnit": "HOURLY",
  "Format": "textORcsv",
  "Compression": "ZIP",
  "AdditionalSchemaElements": {},
  "S3Bucket": "string",
  "S3Prefix": "string",
  "S3Region": "af-south-1",
  "AdditionalArtifacts": {},
  "RefreshClosedReports": {},
  "ReportVersioning": {},
  "BillingViewArn": {}
}
```

The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportName|[ReportName](#schemareportname)|true|none|The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces. |
|TimeUnit|[TimeUnit](#schematimeunit)|true|none|The length of time covered by the report. |
|Format|[ReportFormat](#schemareportformat)|true|none|The format that AWS saves the report in.|
|Compression|[CompressionFormat](#schemacompressionformat)|true|none|The compression format that AWS uses for the report.|
|AdditionalSchemaElements|object|true|none|none|
|S3Bucket|[S3Bucket](#schemas3bucket)|true|none|The S3 bucket where AWS delivers the report.|
|S3Prefix|[S3Prefix](#schemas3prefix)|true|none|The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.|
|S3Region|[AWSRegion](#schemaawsregion)|true|none|The region of the S3 bucket that AWS delivers the report into.|
|AdditionalArtifacts|object|false|none|none|
|RefreshClosedReports|object|false|none|none|
|ReportVersioning|object|false|none|none|
|BillingViewArn|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|TimeUnit|HOURLY|
|TimeUnit|DAILY|
|TimeUnit|MONTHLY|
|Format|textORcsv|
|Format|Parquet|
|Compression|ZIP|
|Compression|GZIP|
|Compression|Parquet|
|S3Region|af-south-1|
|S3Region|ap-east-1|
|S3Region|ap-south-1|
|S3Region|ap-southeast-1|
|S3Region|ap-southeast-2|
|S3Region|ap-southeast-3|
|S3Region|ap-northeast-1|
|S3Region|ap-northeast-2|
|S3Region|ap-northeast-3|
|S3Region|ca-central-1|
|S3Region|eu-central-1|
|S3Region|eu-west-1|
|S3Region|eu-west-2|
|S3Region|eu-west-3|
|S3Region|eu-north-1|
|S3Region|eu-south-1|
|S3Region|eu-south-2|
|S3Region|me-central-1|
|S3Region|me-south-1|
|S3Region|sa-east-1|
|S3Region|us-east-1|
|S3Region|us-east-2|
|S3Region|us-west-1|
|S3Region|us-west-2|
|S3Region|cn-north-1|
|S3Region|cn-northwest-1|

<h2 id="tocS_RefreshClosedReports">RefreshClosedReports</h2>
<!-- backwards compatibility -->
<a id="schemarefreshclosedreports"></a>
<a id="schema_RefreshClosedReports"></a>
<a id="tocSrefreshclosedreports"></a>
<a id="tocsrefreshclosedreports"></a>

```json
true
```

<h2 id="tocS_TimeUnit">TimeUnit</h2>
<!-- backwards compatibility -->
<a id="schematimeunit"></a>
<a id="schema_TimeUnit"></a>
<a id="tocStimeunit"></a>
<a id="tocstimeunit"></a>

```json
"HOURLY"
```

The length of time covered by the report.

<h2 id="tocS_ReportFormat">ReportFormat</h2>
<!-- backwards compatibility -->
<a id="schemareportformat"></a>
<a id="schema_ReportFormat"></a>
<a id="tocSreportformat"></a>
<a id="tocsreportformat"></a>

```json
"textORcsv"
```

The format that AWS saves the report in.

<h2 id="tocS_SchemaElementList">SchemaElementList</h2>
<!-- backwards compatibility -->
<a id="schemaschemaelementlist"></a>
<a id="schema_SchemaElementList"></a>
<a id="tocSschemaelementlist"></a>
<a id="tocsschemaelementlist"></a>

```json
[
  "RESOURCES"
]
```

A list of strings that indicate the content that is included in the report, such as service or usage type.

<h2 id="tocS_S3Bucket">S3Bucket</h2>
<!-- backwards compatibility -->
<a id="schemas3bucket"></a>
<a id="schema_S3Bucket"></a>
<a id="tocSs3bucket"></a>
<a id="tocss3bucket"></a>

```json
"string"
```

The S3 bucket where AWS delivers the report.

<h2 id="tocS_S3Prefix">S3Prefix</h2>
<!-- backwards compatibility -->
<a id="schemas3prefix"></a>
<a id="schema_S3Prefix"></a>
<a id="tocSs3prefix"></a>
<a id="tocss3prefix"></a>

```json
"string"
```

The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.

<h2 id="tocS_ReportVersioning">ReportVersioning</h2>
<!-- backwards compatibility -->
<a id="schemareportversioning"></a>
<a id="schema_ReportVersioning"></a>
<a id="tocSreportversioning"></a>
<a id="tocsreportversioning"></a>

```json
"CREATE_NEW_REPORT"
```

<h2 id="tocS_SchemaElement">SchemaElement</h2>
<!-- backwards compatibility -->
<a id="schemaschemaelement"></a>
<a id="schema_SchemaElement"></a>
<a id="tocSschemaelement"></a>
<a id="tocsschemaelement"></a>

```json
"RESOURCES"
```

Whether or not AWS includes resource IDs in the report.
