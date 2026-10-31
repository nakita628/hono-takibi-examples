<h1 id="awskendrafrontendservice">AWSKendraFrontendService v2019-02-03</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon Kendra is a service for indexing large document sets.

Base URLs:

* <a href="http://kendra.us-east-1.amazonaws.com">http://kendra.us-east-1.amazonaws.com</a> - The kendra multi-region endpoint

* <a href="https://kendra.us-east-1.amazonaws.com">https://kendra.us-east-1.amazonaws.com</a> - The kendra multi-region endpoint

* <a href="http://kendra.cn-north-1.amazonaws.com.cn">http://kendra.cn-north-1.amazonaws.com.cn</a> - The kendra endpoint for China (Beijing) and China (Ningxia)

* <a href="https://kendra.cn-north-1.amazonaws.com.cn">https://kendra.cn-north-1.amazonaws.com.cn</a> - The kendra endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/kendra/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="awskendrafrontendservice-default">Default</h1>

## AssociateEntitiesToExperience

<a id="opIdAssociateEntitiesToExperience"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.AssociateEntitiesToExperience' \
  -d '{
    "Id": {},
    "IndexId": {},
    "EntityList": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience`

Grants users or groups in your IAM Identity Center identity source access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

> Body parameter

```json
{
  "Id": {},
  "IndexId": {},
  "EntityList": {}
}
```

<h3 id="associateentitiestoexperience-parameters">Parameters</h3>

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
|body|body|[AssociateEntitiesToExperienceRequest](#schemaassociateentitiestoexperiencerequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|
|» EntityList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.AssociateEntitiesToExperience|

> Example responses

> 200 Response

```json
{
  "FailedEntityList": {}
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

> 485 Response

```json
null
```

<h3 id="associateentitiestoexperience-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateEntitiesToExperienceResponse](#schemaassociateentitiestoexperienceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceAlreadyExistException|[ResourceAlreadyExistException](#schemaresourcealreadyexistexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociatePersonasToEntities

<a id="opIdAssociatePersonasToEntities"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.AssociatePersonasToEntities' \
  -d '{
    "Id": {},
    "IndexId": {},
    "Personas": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities`

Defines the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

> Body parameter

```json
{
  "Id": {},
  "IndexId": {},
  "Personas": {}
}
```

<h3 id="associatepersonastoentities-parameters">Parameters</h3>

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
|body|body|[AssociatePersonasToEntitiesRequest](#schemaassociatepersonastoentitiesrequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|
|» Personas|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.AssociatePersonasToEntities|

> Example responses

> 200 Response

```json
{
  "FailedEntityList": {}
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

> 485 Response

```json
null
```

<h3 id="associatepersonastoentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociatePersonasToEntitiesResponse](#schemaassociatepersonastoentitiesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceAlreadyExistException|[ResourceAlreadyExistException](#schemaresourcealreadyexistexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDeleteDocument

<a id="opIdBatchDeleteDocument"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.BatchDeleteDocument' \
  -d '{
    "IndexId": {},
    "DocumentIdList": {},
    "DataSourceSyncJobMetricTarget": {
      "DataSourceId": {},
      "DataSourceSyncJobId": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument`

<p>Removes one or more documents from an index. The documents must have been added with the <code>BatchPutDocument</code> API.</p> <p>The documents are deleted asynchronously. You can see the progress of the deletion by using Amazon Web Services CloudWatch. Any error messages related to the processing of the batch are sent to you CloudWatch log.</p>

> Body parameter

```json
{
  "IndexId": {},
  "DocumentIdList": {},
  "DataSourceSyncJobMetricTarget": {
    "DataSourceId": {},
    "DataSourceSyncJobId": {}
  }
}
```

<h3 id="batchdeletedocument-parameters">Parameters</h3>

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
|body|body|[BatchDeleteDocumentRequest](#schemabatchdeletedocumentrequest)|true|none|
|» IndexId|body|object|true|none|
|» DocumentIdList|body|object|true|none|
|» DataSourceSyncJobMetricTarget|body|[DataSourceSyncJobMetricTarget](#schemadatasourcesyncjobmetrictarget)|false|Maps a particular data source sync job to a particular data source.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.BatchDeleteDocument|

> Example responses

> 200 Response

```json
{
  "FailedDocuments": {}
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

> 485 Response

```json
null
```

<h3 id="batchdeletedocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeleteDocumentResponse](#schemabatchdeletedocumentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDeleteFeaturedResultsSet

<a id="opIdBatchDeleteFeaturedResultsSet"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.BatchDeleteFeaturedResultsSet' \
  -d '{
    "IndexId": {},
    "FeaturedResultsSetIds": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet`

Removes one or more sets of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

> Body parameter

```json
{
  "IndexId": {},
  "FeaturedResultsSetIds": {}
}
```

<h3 id="batchdeletefeaturedresultsset-parameters">Parameters</h3>

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
|body|body|[BatchDeleteFeaturedResultsSetRequest](#schemabatchdeletefeaturedresultssetrequest)|true|none|
|» IndexId|body|object|true|none|
|» FeaturedResultsSetIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.BatchDeleteFeaturedResultsSet|

> Example responses

> 200 Response

```json
{
  "Errors": {}
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

<h3 id="batchdeletefeaturedresultsset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeleteFeaturedResultsSetResponse](#schemabatchdeletefeaturedresultssetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetDocumentStatus

<a id="opIdBatchGetDocumentStatus"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.BatchGetDocumentStatus' \
  -d '{
    "IndexId": {},
    "DocumentInfoList": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus`

<p>Returns the indexing status for one or more documents submitted with the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html"> BatchPutDocument</a> API.</p> <p>When you use the <code>BatchPutDocument</code> API, documents are indexed asynchronously. You can use the <code>BatchGetDocumentStatus</code> API to get the current status of a list of documents so that you can determine if they have been successfully indexed.</p> <p>You can also use the <code>BatchGetDocumentStatus</code> API to check the status of the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html"> BatchDeleteDocument</a> API. When a document is deleted from the index, Amazon Kendra returns <code>NOT_FOUND</code> as the status.</p>

> Body parameter

```json
{
  "IndexId": {},
  "DocumentInfoList": {}
}
```

<h3 id="batchgetdocumentstatus-parameters">Parameters</h3>

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
|body|body|[BatchGetDocumentStatusRequest](#schemabatchgetdocumentstatusrequest)|true|none|
|» IndexId|body|object|true|none|
|» DocumentInfoList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.BatchGetDocumentStatus|

> Example responses

> 200 Response

```json
{
  "Errors": {},
  "DocumentStatusList": {}
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

> 485 Response

```json
null
```

<h3 id="batchgetdocumentstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetDocumentStatusResponse](#schemabatchgetdocumentstatusresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchPutDocument

<a id="opIdBatchPutDocument"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.BatchPutDocument' \
  -d '{
    "IndexId": {},
    "RoleArn": {},
    "Documents": {},
    "CustomDocumentEnrichmentConfiguration": {
      "InlineConfigurations": {},
      "PreExtractionHookConfiguration": {
        "InvocationCondition": {
          "ConditionDocumentAttributeKey": {},
          "Operator": {},
          "ConditionOnValue": {
            "StringValue": {},
            "StringListValue": {},
            "LongValue": {},
            "DateValue": {}
          }
        },
        "LambdaArn": {},
        "S3Bucket": {}
      },
      "PostExtractionHookConfiguration": {
        "InvocationCondition": {
          "ConditionDocumentAttributeKey": {},
          "Operator": {},
          "ConditionOnValue": {
            "StringValue": {},
            "StringListValue": {},
            "LongValue": {},
            "DateValue": {}
          }
        },
        "LambdaArn": {},
        "S3Bucket": {}
      },
      "RoleArn": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument`

<p>Adds one or more documents to an index.</p> <p>The <code>BatchPutDocument</code> API enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this API to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index.</p> <p>The documents are indexed asynchronously. You can see the progress of the batch using Amazon Web Services CloudWatch. Any error messages related to processing the batch are sent to your Amazon Web Services CloudWatch log.</p> <p>For an example of ingesting inline documents using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-binary-doc.html">Adding files directly to an index</a>.</p>

> Body parameter

```json
{
  "IndexId": {},
  "RoleArn": {},
  "Documents": {},
  "CustomDocumentEnrichmentConfiguration": {
    "InlineConfigurations": {},
    "PreExtractionHookConfiguration": {
      "InvocationCondition": {
        "ConditionDocumentAttributeKey": {},
        "Operator": {},
        "ConditionOnValue": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LambdaArn": {},
      "S3Bucket": {}
    },
    "PostExtractionHookConfiguration": {
      "InvocationCondition": {
        "ConditionDocumentAttributeKey": {},
        "Operator": {},
        "ConditionOnValue": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LambdaArn": {},
      "S3Bucket": {}
    },
    "RoleArn": {}
  }
}
```

<h3 id="batchputdocument-parameters">Parameters</h3>

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
|body|body|[BatchPutDocumentRequest](#schemabatchputdocumentrequest)|true|none|
|» IndexId|body|object|true|none|
|» RoleArn|body|object|false|none|
|» Documents|body|object|true|none|
|» CustomDocumentEnrichmentConfiguration|body|object|false|none|
|» » InlineConfigurations|body|object|false|none|
|» » PreExtractionHookConfiguration|body|object|false|none|
|» » » InvocationCondition|body|object|false|none|
|» » » » ConditionDocumentAttributeKey|body|object|true|none|
|» » » » Operator|body|object|true|none|
|» » » » ConditionOnValue|body|object|false|none|
|» » » » » StringValue|body|object|false|none|
|» » » » » StringListValue|body|object|false|none|
|» » » » » LongValue|body|object|false|none|
|» » » » » DateValue|body|object|false|none|
|» » » LambdaArn|body|object|true|none|
|» » » S3Bucket|body|object|true|none|
|» » PostExtractionHookConfiguration|body|object|false|none|
|» » » InvocationCondition|body|object|false|none|
|» » » » ConditionDocumentAttributeKey|body|object|true|none|
|» » » » Operator|body|object|true|none|
|» » » » ConditionOnValue|body|object|false|none|
|» » » » » StringValue|body|object|false|none|
|» » » » » StringListValue|body|object|false|none|
|» » » » » LongValue|body|object|false|none|
|» » » » » DateValue|body|object|false|none|
|» » » LambdaArn|body|object|true|none|
|» » » S3Bucket|body|object|true|none|
|» » RoleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.BatchPutDocument|

> Example responses

> 200 Response

```json
{
  "FailedDocuments": {}
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="batchputdocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchPutDocumentResponse](#schemabatchputdocumentresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ClearQuerySuggestions

<a id="opIdClearQuerySuggestions"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.ClearQuerySuggestions' \
  -d '{
    "IndexId": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions`

<p>Clears existing query suggestions from an index.</p> <p>This deletes existing suggestions only, not the queries in the query log. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. If you do not see any new suggestions, then please allow Amazon Kendra to collect enough queries to learn new suggestions.</p> <p> <code>ClearQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

> Body parameter

```json
{
  "IndexId": {}
}
```

<h3 id="clearquerysuggestions-parameters">Parameters</h3>

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
|body|body|[ClearQuerySuggestionsRequest](#schemaclearquerysuggestionsrequest)|true|none|
|» IndexId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.ClearQuerySuggestions|

> Example responses

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

> 485 Response

```json
null
```

<h3 id="clearquerysuggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAccessControlConfiguration

<a id="opIdCreateAccessControlConfiguration"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.CreateAccessControlConfiguration' \
  -d '{
    "IndexId": {},
    "Name": {},
    "Description": {},
    "AccessControlList": {},
    "HierarchicalAccessControlList": {},
    "ClientToken": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration`

<p>Creates an access configuration for your documents. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can use this to re-configure your existing document level access control without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. One of these users leaves the company or switches to a team that should be blocked from accessing top-secret documents. The user still has access to top-secret documents because the user had access when your documents were previously indexed. You can create a specific access control configuration for the user with deny access. You can later update the access control configuration to allow access if the user returns to the company and re-joins the 'top-secret' team. You can re-configure access control for your documents as circumstances change.</p> <p>To apply your access control configuration to certain documents, you call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you update the <code>.metadata.json</code> with the <code>AccessControlConfigurationId</code> and synchronize your data source. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>

> Body parameter

```json
{
  "IndexId": {},
  "Name": {},
  "Description": {},
  "AccessControlList": {},
  "HierarchicalAccessControlList": {},
  "ClientToken": {}
}
```

<h3 id="createaccesscontrolconfiguration-parameters">Parameters</h3>

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
|body|body|[CreateAccessControlConfigurationRequest](#schemacreateaccesscontrolconfigurationrequest)|true|none|
|» IndexId|body|object|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» AccessControlList|body|object|false|none|
|» HierarchicalAccessControlList|body|object|false|none|
|» ClientToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.CreateAccessControlConfiguration|

> Example responses

> 200 Response

```json
{
  "Id": {}
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createaccesscontrolconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAccessControlConfigurationResponse](#schemacreateaccesscontrolconfigurationresponse)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataSource

<a id="opIdCreateDataSource"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.CreateDataSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.CreateDataSource' \
  -d '{
    "Name": {},
    "IndexId": {},
    "Type": {},
    "Configuration": {
      "S3Configuration": {
        "BucketName": {},
        "InclusionPrefixes": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "DocumentsMetadataConfiguration": {
          "S3Prefix": {}
        },
        "AccessControlListConfiguration": {
          "KeyPath": {}
        }
      },
      "SharePointConfiguration": {
        "SharePointVersion": {},
        "Urls": {},
        "SecretArn": {},
        "CrawlAttachments": {},
        "UseChangeLog": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        },
        "FieldMappings": {},
        "DocumentTitleFieldName": {},
        "DisableLocalGroups": {},
        "SslCertificateS3Path": {
          "Bucket": {},
          "Key": {}
        },
        "AuthenticationType": {},
        "ProxyConfiguration": {
          "Host": {},
          "Port": {},
          "Credentials": {}
        }
      },
      "DatabaseConfiguration": {
        "DatabaseEngineType": {},
        "ConnectionConfiguration": {
          "DatabaseHost": {},
          "DatabasePort": {},
          "DatabaseName": {},
          "TableName": {},
          "SecretArn": {}
        },
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        },
        "ColumnConfiguration": {
          "DocumentIdColumnName": {},
          "DocumentDataColumnName": {},
          "DocumentTitleColumnName": {},
          "FieldMappings": {},
          "ChangeDetectingColumns": {}
        },
        "AclConfiguration": {
          "AllowedGroupsColumnName": {}
        },
        "SqlConfiguration": {
          "QueryIdentifiersEnclosingOption": {}
        }
      },
      "SalesforceConfiguration": {
        "ServerUrl": {},
        "SecretArn": {},
        "StandardObjectConfigurations": {},
        "KnowledgeArticleConfiguration": {
          "IncludedStates": {},
          "StandardKnowledgeArticleTypeConfiguration": {
            "DocumentDataFieldName": {},
            "DocumentTitleFieldName": {},
            "FieldMappings": {}
          },
          "CustomKnowledgeArticleTypeConfigurations": {}
        },
        "ChatterFeedConfiguration": {
          "DocumentDataFieldName": {},
          "DocumentTitleFieldName": {},
          "FieldMappings": {},
          "IncludeFilterTypes": {}
        },
        "CrawlAttachments": {},
        "StandardObjectAttachmentConfiguration": {
          "DocumentTitleFieldName": {},
          "FieldMappings": {}
        },
        "IncludeAttachmentFilePatterns": {},
        "ExcludeAttachmentFilePatterns": {}
      },
      "OneDriveConfiguration": {
        "TenantDomain": {},
        "SecretArn": {},
        "OneDriveUsers": {
          "OneDriveUserList": {},
          "OneDriveUserS3Path": {
            "Bucket": {},
            "Key": {}
          }
        },
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "FieldMappings": {},
        "DisableLocalGroups": {}
      },
      "ServiceNowConfiguration": {
        "HostUrl": {},
        "SecretArn": {},
        "ServiceNowBuildVersion": {},
        "KnowledgeArticleConfiguration": {
          "CrawlAttachments": {},
          "IncludeAttachmentFilePatterns": {},
          "ExcludeAttachmentFilePatterns": {},
          "DocumentDataFieldName": {},
          "DocumentTitleFieldName": {},
          "FieldMappings": {},
          "FilterQuery": {}
        },
        "ServiceCatalogConfiguration": {
          "CrawlAttachments": {},
          "IncludeAttachmentFilePatterns": {},
          "ExcludeAttachmentFilePatterns": {},
          "DocumentDataFieldName": {},
          "DocumentTitleFieldName": {},
          "FieldMappings": {}
        },
        "AuthenticationType": {}
      },
      "ConfluenceConfiguration": {
        "ServerUrl": {},
        "SecretArn": {},
        "Version": {},
        "SpaceConfiguration": {
          "CrawlPersonalSpaces": {},
          "CrawlArchivedSpaces": {},
          "IncludeSpaces": {},
          "ExcludeSpaces": {},
          "SpaceFieldMappings": {}
        },
        "PageConfiguration": {
          "PageFieldMappings": {}
        },
        "BlogConfiguration": {
          "BlogFieldMappings": {}
        },
        "AttachmentConfiguration": {
          "CrawlAttachments": {},
          "AttachmentFieldMappings": {}
        },
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        },
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "ProxyConfiguration": {
          "Host": {},
          "Port": {},
          "Credentials": {}
        },
        "AuthenticationType": {}
      },
      "GoogleDriveConfiguration": {
        "SecretArn": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "FieldMappings": {},
        "ExcludeMimeTypes": {},
        "ExcludeUserAccounts": {},
        "ExcludeSharedDrives": {}
      },
      "WebCrawlerConfiguration": {
        "Urls": {
          "SeedUrlConfiguration": {
            "SeedUrls": {},
            "WebCrawlerMode": {}
          },
          "SiteMapsConfiguration": {
            "SiteMaps": {}
          }
        },
        "CrawlDepth": {},
        "MaxLinksPerPage": {},
        "MaxContentSizePerPageInMegaBytes": {},
        "MaxUrlsPerMinuteCrawlRate": {},
        "UrlInclusionPatterns": {},
        "UrlExclusionPatterns": {},
        "ProxyConfiguration": {
          "Host": {},
          "Port": {},
          "Credentials": {}
        },
        "AuthenticationConfiguration": {
          "BasicAuthentication": {}
        }
      },
      "WorkDocsConfiguration": {
        "OrganizationId": {},
        "CrawlComments": {},
        "UseChangeLog": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "FieldMappings": {}
      },
      "FsxConfiguration": {
        "FileSystemId": {},
        "FileSystemType": {},
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        },
        "SecretArn": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "FieldMappings": {}
      },
      "SlackConfiguration": {
        "TeamId": {},
        "SecretArn": {},
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        },
        "SlackEntityList": {},
        "UseChangeLog": {},
        "CrawlBotMessage": {},
        "ExcludeArchived": {},
        "SinceCrawlDate": {},
        "LookBackPeriod": {},
        "PrivateChannelFilter": {},
        "PublicChannelFilter": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "FieldMappings": {}
      },
      "BoxConfiguration": {
        "EnterpriseId": {},
        "SecretArn": {},
        "UseChangeLog": {},
        "CrawlComments": {},
        "CrawlTasks": {},
        "CrawlWebLinks": {},
        "FileFieldMappings": {},
        "TaskFieldMappings": {},
        "CommentFieldMappings": {},
        "WebLinkFieldMappings": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        }
      },
      "QuipConfiguration": {
        "Domain": {},
        "SecretArn": {},
        "CrawlFileComments": {},
        "CrawlChatRooms": {},
        "CrawlAttachments": {},
        "FolderIds": {},
        "ThreadFieldMappings": {},
        "MessageFieldMappings": {},
        "AttachmentFieldMappings": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        }
      },
      "JiraConfiguration": {
        "JiraAccountUrl": {},
        "SecretArn": {},
        "UseChangeLog": {},
        "Project": {},
        "IssueType": {},
        "Status": {},
        "IssueSubEntityFilter": {},
        "AttachmentFieldMappings": {},
        "CommentFieldMappings": {},
        "IssueFieldMappings": {},
        "ProjectFieldMappings": {},
        "WorkLogFieldMappings": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        }
      },
      "GitHubConfiguration": {
        "SaaSConfiguration": {
          "OrganizationName": {},
          "HostUrl": {}
        },
        "OnPremiseConfiguration": {
          "HostUrl": {},
          "OrganizationName": {},
          "SslCertificateS3Path": {
            "Bucket": {},
            "Key": {}
          }
        },
        "Type": {},
        "SecretArn": {},
        "UseChangeLog": {},
        "GitHubDocumentCrawlProperties": {
          "CrawlRepositoryDocuments": {},
          "CrawlIssue": {},
          "CrawlIssueComment": {},
          "CrawlIssueCommentAttachment": {},
          "CrawlPullRequest": {},
          "CrawlPullRequestComment": {},
          "CrawlPullRequestCommentAttachment": {}
        },
        "RepositoryFilter": {},
        "InclusionFolderNamePatterns": {},
        "InclusionFileTypePatterns": {},
        "InclusionFileNamePatterns": {},
        "ExclusionFolderNamePatterns": {},
        "ExclusionFileTypePatterns": {},
        "ExclusionFileNamePatterns": {},
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        },
        "GitHubRepositoryConfigurationFieldMappings": {},
        "GitHubCommitConfigurationFieldMappings": {},
        "GitHubIssueDocumentConfigurationFieldMappings": {},
        "GitHubIssueCommentConfigurationFieldMappings": {},
        "GitHubIssueAttachmentConfigurationFieldMappings": {},
        "GitHubPullRequestCommentConfigurationFieldMappings": {},
        "GitHubPullRequestDocumentConfigurationFieldMappings": {},
        "GitHubPullRequestDocumentAttachmentConfigurationFieldMappings": {}
      },
      "AlfrescoConfiguration": {
        "SiteUrl": {},
        "SiteId": {},
        "SecretArn": {},
        "SslCertificateS3Path": {
          "Bucket": {},
          "Key": {}
        },
        "CrawlSystemFolders": {},
        "CrawlComments": {},
        "EntityFilter": {},
        "DocumentLibraryFieldMappings": {},
        "BlogFieldMappings": {},
        "WikiFieldMappings": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        }
      },
      "TemplateConfiguration": {
        "Template": {}
      }
    },
    "VpcConfiguration": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "Description": {},
    "Schedule": {},
    "RoleArn": {},
    "Tags": {},
    "ClientToken": {},
    "LanguageCode": {},
    "CustomDocumentEnrichmentConfiguration": {
      "InlineConfigurations": {},
      "PreExtractionHookConfiguration": {
        "InvocationCondition": {
          "ConditionDocumentAttributeKey": {},
          "Operator": {},
          "ConditionOnValue": {
            "StringValue": {},
            "StringListValue": {},
            "LongValue": {},
            "DateValue": {}
          }
        },
        "LambdaArn": {},
        "S3Bucket": {}
      },
      "PostExtractionHookConfiguration": {
        "InvocationCondition": {
          "ConditionDocumentAttributeKey": {},
          "Operator": {},
          "ConditionOnValue": {
            "StringValue": {},
            "StringListValue": {},
            "LongValue": {},
            "DateValue": {}
          }
        },
        "LambdaArn": {},
        "S3Bucket": {}
      },
      "RoleArn": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.CreateDataSource`

<p>Creates a data source connector that you want to use with an Amazon Kendra index.</p> <p>You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector.</p> <p> <code>CreateDataSource</code> is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "IndexId": {},
  "Type": {},
  "Configuration": {
    "S3Configuration": {
      "BucketName": {},
      "InclusionPrefixes": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "DocumentsMetadataConfiguration": {
        "S3Prefix": {}
      },
      "AccessControlListConfiguration": {
        "KeyPath": {}
      }
    },
    "SharePointConfiguration": {
      "SharePointVersion": {},
      "Urls": {},
      "SecretArn": {},
      "CrawlAttachments": {},
      "UseChangeLog": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "FieldMappings": {},
      "DocumentTitleFieldName": {},
      "DisableLocalGroups": {},
      "SslCertificateS3Path": {
        "Bucket": {},
        "Key": {}
      },
      "AuthenticationType": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      }
    },
    "DatabaseConfiguration": {
      "DatabaseEngineType": {},
      "ConnectionConfiguration": {
        "DatabaseHost": {},
        "DatabasePort": {},
        "DatabaseName": {},
        "TableName": {},
        "SecretArn": {}
      },
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "ColumnConfiguration": {
        "DocumentIdColumnName": {},
        "DocumentDataColumnName": {},
        "DocumentTitleColumnName": {},
        "FieldMappings": {},
        "ChangeDetectingColumns": {}
      },
      "AclConfiguration": {
        "AllowedGroupsColumnName": {}
      },
      "SqlConfiguration": {
        "QueryIdentifiersEnclosingOption": {}
      }
    },
    "SalesforceConfiguration": {
      "ServerUrl": {},
      "SecretArn": {},
      "StandardObjectConfigurations": {},
      "KnowledgeArticleConfiguration": {
        "IncludedStates": {},
        "StandardKnowledgeArticleTypeConfiguration": {
          "DocumentDataFieldName": {},
          "DocumentTitleFieldName": {},
          "FieldMappings": {}
        },
        "CustomKnowledgeArticleTypeConfigurations": {}
      },
      "ChatterFeedConfiguration": {
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {},
        "IncludeFilterTypes": {}
      },
      "CrawlAttachments": {},
      "StandardObjectAttachmentConfiguration": {
        "DocumentTitleFieldName": {},
        "FieldMappings": {}
      },
      "IncludeAttachmentFilePatterns": {},
      "ExcludeAttachmentFilePatterns": {}
    },
    "OneDriveConfiguration": {
      "TenantDomain": {},
      "SecretArn": {},
      "OneDriveUsers": {
        "OneDriveUserList": {},
        "OneDriveUserS3Path": {
          "Bucket": {},
          "Key": {}
        }
      },
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {},
      "DisableLocalGroups": {}
    },
    "ServiceNowConfiguration": {
      "HostUrl": {},
      "SecretArn": {},
      "ServiceNowBuildVersion": {},
      "KnowledgeArticleConfiguration": {
        "CrawlAttachments": {},
        "IncludeAttachmentFilePatterns": {},
        "ExcludeAttachmentFilePatterns": {},
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {},
        "FilterQuery": {}
      },
      "ServiceCatalogConfiguration": {
        "CrawlAttachments": {},
        "IncludeAttachmentFilePatterns": {},
        "ExcludeAttachmentFilePatterns": {},
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {}
      },
      "AuthenticationType": {}
    },
    "ConfluenceConfiguration": {
      "ServerUrl": {},
      "SecretArn": {},
      "Version": {},
      "SpaceConfiguration": {
        "CrawlPersonalSpaces": {},
        "CrawlArchivedSpaces": {},
        "IncludeSpaces": {},
        "ExcludeSpaces": {},
        "SpaceFieldMappings": {}
      },
      "PageConfiguration": {
        "PageFieldMappings": {}
      },
      "BlogConfiguration": {
        "BlogFieldMappings": {}
      },
      "AttachmentConfiguration": {
        "CrawlAttachments": {},
        "AttachmentFieldMappings": {}
      },
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      },
      "AuthenticationType": {}
    },
    "GoogleDriveConfiguration": {
      "SecretArn": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {},
      "ExcludeMimeTypes": {},
      "ExcludeUserAccounts": {},
      "ExcludeSharedDrives": {}
    },
    "WebCrawlerConfiguration": {
      "Urls": {
        "SeedUrlConfiguration": {
          "SeedUrls": {},
          "WebCrawlerMode": {}
        },
        "SiteMapsConfiguration": {
          "SiteMaps": {}
        }
      },
      "CrawlDepth": {},
      "MaxLinksPerPage": {},
      "MaxContentSizePerPageInMegaBytes": {},
      "MaxUrlsPerMinuteCrawlRate": {},
      "UrlInclusionPatterns": {},
      "UrlExclusionPatterns": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      },
      "AuthenticationConfiguration": {
        "BasicAuthentication": {}
      }
    },
    "WorkDocsConfiguration": {
      "OrganizationId": {},
      "CrawlComments": {},
      "UseChangeLog": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "FsxConfiguration": {
      "FileSystemId": {},
      "FileSystemType": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "SecretArn": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "SlackConfiguration": {
      "TeamId": {},
      "SecretArn": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "SlackEntityList": {},
      "UseChangeLog": {},
      "CrawlBotMessage": {},
      "ExcludeArchived": {},
      "SinceCrawlDate": {},
      "LookBackPeriod": {},
      "PrivateChannelFilter": {},
      "PublicChannelFilter": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "BoxConfiguration": {
      "EnterpriseId": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "CrawlComments": {},
      "CrawlTasks": {},
      "CrawlWebLinks": {},
      "FileFieldMappings": {},
      "TaskFieldMappings": {},
      "CommentFieldMappings": {},
      "WebLinkFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "QuipConfiguration": {
      "Domain": {},
      "SecretArn": {},
      "CrawlFileComments": {},
      "CrawlChatRooms": {},
      "CrawlAttachments": {},
      "FolderIds": {},
      "ThreadFieldMappings": {},
      "MessageFieldMappings": {},
      "AttachmentFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "JiraConfiguration": {
      "JiraAccountUrl": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "Project": {},
      "IssueType": {},
      "Status": {},
      "IssueSubEntityFilter": {},
      "AttachmentFieldMappings": {},
      "CommentFieldMappings": {},
      "IssueFieldMappings": {},
      "ProjectFieldMappings": {},
      "WorkLogFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "GitHubConfiguration": {
      "SaaSConfiguration": {
        "OrganizationName": {},
        "HostUrl": {}
      },
      "OnPremiseConfiguration": {
        "HostUrl": {},
        "OrganizationName": {},
        "SslCertificateS3Path": {
          "Bucket": {},
          "Key": {}
        }
      },
      "Type": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "GitHubDocumentCrawlProperties": {
        "CrawlRepositoryDocuments": {},
        "CrawlIssue": {},
        "CrawlIssueComment": {},
        "CrawlIssueCommentAttachment": {},
        "CrawlPullRequest": {},
        "CrawlPullRequestComment": {},
        "CrawlPullRequestCommentAttachment": {}
      },
      "RepositoryFilter": {},
      "InclusionFolderNamePatterns": {},
      "InclusionFileTypePatterns": {},
      "InclusionFileNamePatterns": {},
      "ExclusionFolderNamePatterns": {},
      "ExclusionFileTypePatterns": {},
      "ExclusionFileNamePatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "GitHubRepositoryConfigurationFieldMappings": {},
      "GitHubCommitConfigurationFieldMappings": {},
      "GitHubIssueDocumentConfigurationFieldMappings": {},
      "GitHubIssueCommentConfigurationFieldMappings": {},
      "GitHubIssueAttachmentConfigurationFieldMappings": {},
      "GitHubPullRequestCommentConfigurationFieldMappings": {},
      "GitHubPullRequestDocumentConfigurationFieldMappings": {},
      "GitHubPullRequestDocumentAttachmentConfigurationFieldMappings": {}
    },
    "AlfrescoConfiguration": {
      "SiteUrl": {},
      "SiteId": {},
      "SecretArn": {},
      "SslCertificateS3Path": {
        "Bucket": {},
        "Key": {}
      },
      "CrawlSystemFolders": {},
      "CrawlComments": {},
      "EntityFilter": {},
      "DocumentLibraryFieldMappings": {},
      "BlogFieldMappings": {},
      "WikiFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "TemplateConfiguration": {
      "Template": {}
    }
  },
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "Description": {},
  "Schedule": {},
  "RoleArn": {},
  "Tags": {},
  "ClientToken": {},
  "LanguageCode": {},
  "CustomDocumentEnrichmentConfiguration": {
    "InlineConfigurations": {},
    "PreExtractionHookConfiguration": {
      "InvocationCondition": {
        "ConditionDocumentAttributeKey": {},
        "Operator": {},
        "ConditionOnValue": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LambdaArn": {},
      "S3Bucket": {}
    },
    "PostExtractionHookConfiguration": {
      "InvocationCondition": {
        "ConditionDocumentAttributeKey": {},
        "Operator": {},
        "ConditionOnValue": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LambdaArn": {},
      "S3Bucket": {}
    },
    "RoleArn": {}
  }
}
```

<h3 id="createdatasource-parameters">Parameters</h3>

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
|body|body|[CreateDataSourceRequest](#schemacreatedatasourcerequest)|true|none|
|» Name|body|object|true|none|
|» IndexId|body|object|true|none|
|» Type|body|object|true|none|
|» Configuration|body|object|false|none|
|» » S3Configuration|body|object|false|none|
|» » » BucketName|body|object|true|none|
|» » » InclusionPrefixes|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » DocumentsMetadataConfiguration|body|[DocumentsMetadataConfiguration](#schemadocumentsmetadataconfiguration)|false|Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document.|
|» » » AccessControlListConfiguration|body|object|false|none|
|» » » » KeyPath|body|object|false|none|
|» » SharePointConfiguration|body|object|false|none|
|» » » SharePointVersion|body|object|true|none|
|» » » Urls|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » CrawlAttachments|body|object|false|none|
|» » » UseChangeLog|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » » FieldMappings|body|object|false|none|
|» » » DocumentTitleFieldName|body|object|false|none|
|» » » DisableLocalGroups|body|object|false|none|
|» » » SslCertificateS3Path|body|object|false|none|
|» » » » Bucket|body|object|true|none|
|» » » » Key|body|object|true|none|
|» » » AuthenticationType|body|object|false|none|
|» » » ProxyConfiguration|body|object|false|none|
|» » » » Host|body|object|true|none|
|» » » » Port|body|object|true|none|
|» » » » Credentials|body|object|false|none|
|» » DatabaseConfiguration|body|object|false|none|
|» » » DatabaseEngineType|body|object|true|none|
|» » » ConnectionConfiguration|body|object|true|none|
|» » » » DatabaseHost|body|object|true|none|
|» » » » DatabasePort|body|object|true|none|
|» » » » DatabaseName|body|object|true|none|
|» » » » TableName|body|object|true|none|
|» » » » SecretArn|body|object|true|none|
|» » » VpcConfiguration|body|[DataSourceVpcConfiguration](#schemadatasourcevpcconfiguration)|false|Provides the configuration information to connect to an Amazon VPC.|
|» » » ColumnConfiguration|body|object|true|none|
|» » » » DocumentIdColumnName|body|object|true|none|
|» » » » DocumentDataColumnName|body|object|true|none|
|» » » » DocumentTitleColumnName|body|object|false|none|
|» » » » FieldMappings|body|object|false|none|
|» » » » ChangeDetectingColumns|body|object|true|none|
|» » » AclConfiguration|body|object|false|none|
|» » » » AllowedGroupsColumnName|body|object|true|none|
|» » » SqlConfiguration|body|object|false|none|
|» » » » QueryIdentifiersEnclosingOption|body|object|false|none|
|» » SalesforceConfiguration|body|object|false|none|
|» » » ServerUrl|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » StandardObjectConfigurations|body|object|false|none|
|» » » KnowledgeArticleConfiguration|body|object|false|none|
|» » » » IncludedStates|body|object|true|none|
|» » » » StandardKnowledgeArticleTypeConfiguration|body|object|false|none|
|» » » » » DocumentDataFieldName|body|object|true|none|
|» » » » » DocumentTitleFieldName|body|object|false|none|
|» » » » » FieldMappings|body|object|false|none|
|» » » » CustomKnowledgeArticleTypeConfigurations|body|object|false|none|
|» » » ChatterFeedConfiguration|body|object|false|none|
|» » » » DocumentDataFieldName|body|object|true|none|
|» » » » DocumentTitleFieldName|body|object|false|none|
|» » » » FieldMappings|body|object|false|none|
|» » » » IncludeFilterTypes|body|object|false|none|
|» » » CrawlAttachments|body|object|false|none|
|» » » StandardObjectAttachmentConfiguration|body|object|false|none|
|» » » » DocumentTitleFieldName|body|object|false|none|
|» » » » FieldMappings|body|object|false|none|
|» » » IncludeAttachmentFilePatterns|body|object|false|none|
|» » » ExcludeAttachmentFilePatterns|body|object|false|none|
|» » OneDriveConfiguration|body|object|false|none|
|» » » TenantDomain|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » OneDriveUsers|body|object|true|none|
|» » » » OneDriveUserList|body|object|false|none|
|» » » » OneDriveUserS3Path|body|object|false|none|
|» » » » » Bucket|body|object|true|none|
|» » » » » Key|body|object|true|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » FieldMappings|body|object|false|none|
|» » » DisableLocalGroups|body|object|false|none|
|» » ServiceNowConfiguration|body|object|false|none|
|» » » HostUrl|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » ServiceNowBuildVersion|body|object|true|none|
|» » » KnowledgeArticleConfiguration|body|object|false|none|
|» » » » CrawlAttachments|body|object|false|none|
|» » » » IncludeAttachmentFilePatterns|body|object|false|none|
|» » » » ExcludeAttachmentFilePatterns|body|object|false|none|
|» » » » DocumentDataFieldName|body|object|true|none|
|» » » » DocumentTitleFieldName|body|object|false|none|
|» » » » FieldMappings|body|object|false|none|
|» » » » FilterQuery|body|object|false|none|
|» » » ServiceCatalogConfiguration|body|object|false|none|
|» » » » CrawlAttachments|body|object|false|none|
|» » » » IncludeAttachmentFilePatterns|body|object|false|none|
|» » » » ExcludeAttachmentFilePatterns|body|object|false|none|
|» » » » DocumentDataFieldName|body|object|true|none|
|» » » » DocumentTitleFieldName|body|object|false|none|
|» » » » FieldMappings|body|object|false|none|
|» » » AuthenticationType|body|object|false|none|
|» » ConfluenceConfiguration|body|object|false|none|
|» » » ServerUrl|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » Version|body|object|true|none|
|» » » SpaceConfiguration|body|object|false|none|
|» » » » CrawlPersonalSpaces|body|object|false|none|
|» » » » CrawlArchivedSpaces|body|object|false|none|
|» » » » IncludeSpaces|body|object|false|none|
|» » » » ExcludeSpaces|body|object|false|none|
|» » » » SpaceFieldMappings|body|object|false|none|
|» » » PageConfiguration|body|object|false|none|
|» » » » PageFieldMappings|body|object|false|none|
|» » » BlogConfiguration|body|object|false|none|
|» » » » BlogFieldMappings|body|object|false|none|
|» » » AttachmentConfiguration|body|object|false|none|
|» » » » CrawlAttachments|body|object|false|none|
|» » » » AttachmentFieldMappings|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » ProxyConfiguration|body|object|false|none|
|» » » » Host|body|object|true|none|
|» » » » Port|body|object|true|none|
|» » » » Credentials|body|object|false|none|
|» » » AuthenticationType|body|object|false|none|
|» » GoogleDriveConfiguration|body|object|false|none|
|» » » SecretArn|body|object|true|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » FieldMappings|body|object|false|none|
|» » » ExcludeMimeTypes|body|object|false|none|
|» » » ExcludeUserAccounts|body|object|false|none|
|» » » ExcludeSharedDrives|body|object|false|none|
|» » WebCrawlerConfiguration|body|[WebCrawlerConfiguration](#schemawebcrawlerconfiguration)|false|Provides the configuration information required for Amazon Kendra Web Crawler.|
|» » WorkDocsConfiguration|body|object|false|none|
|» » » OrganizationId|body|object|true|none|
|» » » CrawlComments|body|object|false|none|
|» » » UseChangeLog|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » FieldMappings|body|object|false|none|
|» » FsxConfiguration|body|object|false|none|
|» » » FileSystemId|body|object|true|none|
|» » » FileSystemType|body|object|true|none|
|» » » VpcConfiguration|body|object|true|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » » SecretArn|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » FieldMappings|body|object|false|none|
|» » SlackConfiguration|body|object|false|none|
|» » » TeamId|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » » SlackEntityList|body|object|true|none|
|» » » UseChangeLog|body|object|false|none|
|» » » CrawlBotMessage|body|object|false|none|
|» » » ExcludeArchived|body|object|false|none|
|» » » SinceCrawlDate|body|object|true|none|
|» » » LookBackPeriod|body|object|false|none|
|» » » PrivateChannelFilter|body|object|false|none|
|» » » PublicChannelFilter|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » FieldMappings|body|object|false|none|
|» » BoxConfiguration|body|object|false|none|
|» » » EnterpriseId|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » UseChangeLog|body|object|false|none|
|» » » CrawlComments|body|object|false|none|
|» » » CrawlTasks|body|object|false|none|
|» » » CrawlWebLinks|body|object|false|none|
|» » » FileFieldMappings|body|object|false|none|
|» » » TaskFieldMappings|body|object|false|none|
|» » » CommentFieldMappings|body|object|false|none|
|» » » WebLinkFieldMappings|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » QuipConfiguration|body|object|false|none|
|» » » Domain|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » CrawlFileComments|body|object|false|none|
|» » » CrawlChatRooms|body|object|false|none|
|» » » CrawlAttachments|body|object|false|none|
|» » » FolderIds|body|object|false|none|
|» » » ThreadFieldMappings|body|object|false|none|
|» » » MessageFieldMappings|body|object|false|none|
|» » » AttachmentFieldMappings|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » JiraConfiguration|body|object|false|none|
|» » » JiraAccountUrl|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » UseChangeLog|body|object|false|none|
|» » » Project|body|object|false|none|
|» » » IssueType|body|object|false|none|
|» » » Status|body|object|false|none|
|» » » IssueSubEntityFilter|body|object|false|none|
|» » » AttachmentFieldMappings|body|object|false|none|
|» » » CommentFieldMappings|body|object|false|none|
|» » » IssueFieldMappings|body|object|false|none|
|» » » ProjectFieldMappings|body|object|false|none|
|» » » WorkLogFieldMappings|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » GitHubConfiguration|body|object|false|none|
|» » » SaaSConfiguration|body|object|false|none|
|» » » » OrganizationName|body|object|true|none|
|» » » » HostUrl|body|object|true|none|
|» » » OnPremiseConfiguration|body|object|false|none|
|» » » » HostUrl|body|object|true|none|
|» » » » OrganizationName|body|object|true|none|
|» » » » SslCertificateS3Path|body|object|true|none|
|» » » » » Bucket|body|object|true|none|
|» » » » » Key|body|object|true|none|
|» » » Type|body|object|false|none|
|» » » SecretArn|body|object|true|none|
|» » » UseChangeLog|body|object|false|none|
|» » » GitHubDocumentCrawlProperties|body|object|false|none|
|» » » » CrawlRepositoryDocuments|body|object|false|none|
|» » » » CrawlIssue|body|object|false|none|
|» » » » CrawlIssueComment|body|object|false|none|
|» » » » CrawlIssueCommentAttachment|body|object|false|none|
|» » » » CrawlPullRequest|body|object|false|none|
|» » » » CrawlPullRequestComment|body|object|false|none|
|» » » » CrawlPullRequestCommentAttachment|body|object|false|none|
|» » » RepositoryFilter|body|object|false|none|
|» » » InclusionFolderNamePatterns|body|object|false|none|
|» » » InclusionFileTypePatterns|body|object|false|none|
|» » » InclusionFileNamePatterns|body|object|false|none|
|» » » ExclusionFolderNamePatterns|body|object|false|none|
|» » » ExclusionFileTypePatterns|body|object|false|none|
|» » » ExclusionFileNamePatterns|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » » GitHubRepositoryConfigurationFieldMappings|body|object|false|none|
|» » » GitHubCommitConfigurationFieldMappings|body|object|false|none|
|» » » GitHubIssueDocumentConfigurationFieldMappings|body|object|false|none|
|» » » GitHubIssueCommentConfigurationFieldMappings|body|object|false|none|
|» » » GitHubIssueAttachmentConfigurationFieldMappings|body|object|false|none|
|» » » GitHubPullRequestCommentConfigurationFieldMappings|body|object|false|none|
|» » » GitHubPullRequestDocumentConfigurationFieldMappings|body|object|false|none|
|» » » GitHubPullRequestDocumentAttachmentConfigurationFieldMappings|body|object|false|none|
|» » AlfrescoConfiguration|body|object|false|none|
|» » » SiteUrl|body|object|true|none|
|» » » SiteId|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » SslCertificateS3Path|body|object|true|none|
|» » » » Bucket|body|object|true|none|
|» » » » Key|body|object|true|none|
|» » » CrawlSystemFolders|body|object|false|none|
|» » » CrawlComments|body|object|false|none|
|» » » EntityFilter|body|object|false|none|
|» » » DocumentLibraryFieldMappings|body|object|false|none|
|» » » BlogFieldMappings|body|object|false|none|
|» » » WikiFieldMappings|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » TemplateConfiguration|body|object|false|none|
|» » » Template|body|object|false|none|
|» VpcConfiguration|body|object|false|none|
|» » SubnetIds|body|object|true|none|
|» » SecurityGroupIds|body|object|true|none|
|» Description|body|object|false|none|
|» Schedule|body|object|false|none|
|» RoleArn|body|object|false|none|
|» Tags|body|object|false|none|
|» ClientToken|body|object|false|none|
|» LanguageCode|body|object|false|none|
|» CustomDocumentEnrichmentConfiguration|body|object|false|none|
|» » InlineConfigurations|body|object|false|none|
|» » PreExtractionHookConfiguration|body|object|false|none|
|» » » InvocationCondition|body|object|false|none|
|» » » » ConditionDocumentAttributeKey|body|object|true|none|
|» » » » Operator|body|object|true|none|
|» » » » ConditionOnValue|body|object|false|none|
|» » » » » StringValue|body|object|false|none|
|» » » » » StringListValue|body|object|false|none|
|» » » » » LongValue|body|object|false|none|
|» » » » » DateValue|body|object|false|none|
|» » » LambdaArn|body|object|true|none|
|» » » S3Bucket|body|object|true|none|
|» » PostExtractionHookConfiguration|body|object|false|none|
|» » » InvocationCondition|body|object|false|none|
|» » » » ConditionDocumentAttributeKey|body|object|true|none|
|» » » » Operator|body|object|true|none|
|» » » » ConditionOnValue|body|object|false|none|
|» » » » » StringValue|body|object|false|none|
|» » » » » StringListValue|body|object|false|none|
|» » » » » LongValue|body|object|false|none|
|» » » » » DateValue|body|object|false|none|
|» » » LambdaArn|body|object|true|none|
|» » » S3Bucket|body|object|true|none|
|» » RoleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.CreateDataSource|

> Example responses

> 200 Response

```json
{
  "Id": {}
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="createdatasource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDataSourceResponse](#schemacreatedatasourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceAlreadyExistException|[ResourceAlreadyExistException](#schemaresourcealreadyexistexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|487|487|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateExperience

<a id="opIdCreateExperience"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.CreateExperience' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.CreateExperience' \
  -d '{
    "Name": {},
    "IndexId": {},
    "RoleArn": {},
    "Configuration": {
      "ContentSourceConfiguration": {
        "DataSourceIds": {},
        "FaqIds": {},
        "DirectPutContent": {}
      },
      "UserIdentityConfiguration": {
        "IdentityAttributeName": {}
      }
    },
    "Description": {},
    "ClientToken": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.CreateExperience`

Creates an Amazon Kendra experience such as a search application. For more information on creating a search application experience, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

> Body parameter

```json
{
  "Name": {},
  "IndexId": {},
  "RoleArn": {},
  "Configuration": {
    "ContentSourceConfiguration": {
      "DataSourceIds": {},
      "FaqIds": {},
      "DirectPutContent": {}
    },
    "UserIdentityConfiguration": {
      "IdentityAttributeName": {}
    }
  },
  "Description": {},
  "ClientToken": {}
}
```

<h3 id="createexperience-parameters">Parameters</h3>

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
|body|body|[CreateExperienceRequest](#schemacreateexperiencerequest)|true|none|
|» Name|body|object|true|none|
|» IndexId|body|object|true|none|
|» RoleArn|body|object|false|none|
|» Configuration|body|object|false|none|
|» » ContentSourceConfiguration|body|object|false|none|
|» » » DataSourceIds|body|object|false|none|
|» » » FaqIds|body|object|false|none|
|» » » DirectPutContent|body|object|false|none|
|» » UserIdentityConfiguration|body|object|false|none|
|» » » IdentityAttributeName|body|object|false|none|
|» Description|body|object|false|none|
|» ClientToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.CreateExperience|

> Example responses

> 200 Response

```json
{
  "Id": {}
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createexperience-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateExperienceResponse](#schemacreateexperienceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFaq

<a id="opIdCreateFaq"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.CreateFaq' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.CreateFaq' \
  -d '{
    "IndexId": {},
    "Name": {},
    "Description": {},
    "S3Path": {
      "Bucket": {},
      "Key": {}
    },
    "RoleArn": {},
    "Tags": {},
    "FileFormat": {},
    "ClientToken": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.CreateFaq`

<p>Creates a set of frequently ask questions (FAQs) using a specified FAQ file stored in an Amazon S3 bucket.</p> <p>Adding FAQs to an index is an asynchronous operation.</p> <p>For an example of adding an FAQ to an index using Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-creating-faq.html#using-faq-file">Using your FAQ file</a>.</p>

> Body parameter

```json
{
  "IndexId": {},
  "Name": {},
  "Description": {},
  "S3Path": {
    "Bucket": {},
    "Key": {}
  },
  "RoleArn": {},
  "Tags": {},
  "FileFormat": {},
  "ClientToken": {},
  "LanguageCode": {}
}
```

<h3 id="createfaq-parameters">Parameters</h3>

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
|body|body|[CreateFaqRequest](#schemacreatefaqrequest)|true|none|
|» IndexId|body|object|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» S3Path|body|object|true|none|
|» » Bucket|body|object|true|none|
|» » Key|body|object|true|none|
|» RoleArn|body|object|true|none|
|» Tags|body|object|false|none|
|» FileFormat|body|object|false|none|
|» ClientToken|body|object|false|none|
|» LanguageCode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.CreateFaq|

> Example responses

> 200 Response

```json
{
  "Id": {}
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createfaq-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFaqResponse](#schemacreatefaqresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFeaturedResultsSet

<a id="opIdCreateFeaturedResultsSet"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.CreateFeaturedResultsSet' \
  -d '{
    "IndexId": {},
    "FeaturedResultsSetName": {},
    "Description": {},
    "ClientToken": {},
    "Status": {},
    "QueryTexts": {},
    "FeaturedDocuments": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet`

<p>Creates a set of featured results to display at the top of the search results page. Featured results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match, then one or more specific documents are featured in the search results.</p> <p>You can create up to 50 sets of featured results per index. You can request to increase this limit by contacting <a href="http://aws.amazon.com/contact-us/">Support</a>.</p>

> Body parameter

```json
{
  "IndexId": {},
  "FeaturedResultsSetName": {},
  "Description": {},
  "ClientToken": {},
  "Status": {},
  "QueryTexts": {},
  "FeaturedDocuments": {},
  "Tags": {}
}
```

<h3 id="createfeaturedresultsset-parameters">Parameters</h3>

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
|body|body|[CreateFeaturedResultsSetRequest](#schemacreatefeaturedresultssetrequest)|true|none|
|» IndexId|body|object|true|none|
|» FeaturedResultsSetName|body|object|true|none|
|» Description|body|object|false|none|
|» ClientToken|body|object|false|none|
|» Status|body|object|false|none|
|» QueryTexts|body|object|false|none|
|» FeaturedDocuments|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.CreateFeaturedResultsSet|

> Example responses

> 200 Response

```json
{
  "FeaturedResultsSet": {
    "FeaturedResultsSetId": {},
    "FeaturedResultsSetName": {},
    "Description": {},
    "Status": {},
    "QueryTexts": {},
    "FeaturedDocuments": {},
    "LastUpdatedTimestamp": {},
    "CreationTimestamp": {}
  }
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createfeaturedresultsset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFeaturedResultsSetResponse](#schemacreatefeaturedresultssetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|FeaturedResultsConflictException|[FeaturedResultsConflictException](#schemafeaturedresultsconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateIndex

<a id="opIdCreateIndex"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.CreateIndex' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.CreateIndex' \
  -d '{
    "Name": {},
    "Edition": {},
    "RoleArn": {},
    "ServerSideEncryptionConfiguration": {
      "KmsKeyId": {}
    },
    "Description": {},
    "ClientToken": {},
    "Tags": {},
    "UserTokenConfigurations": {},
    "UserContextPolicy": {},
    "UserGroupResolutionConfiguration": {
      "UserGroupResolutionMode": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.CreateIndex`

<p>Creates an Amazon Kendra index. Index creation is an asynchronous API. To determine if index creation has completed, check the <code>Status</code> field returned from a call to <code>DescribeIndex</code>. The <code>Status</code> field is set to <code>ACTIVE</code> when the index is ready to use.</p> <p>Once the index is active you can index your documents using the <code>BatchPutDocument</code> API or using one of the supported data sources.</p> <p>For an example of creating an index and data source using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-python.html">Getting started with Python SDK</a>. For an example of creating an index and data source using the Java SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/gs-java.html">Getting started with Java SDK</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "Edition": {},
  "RoleArn": {},
  "ServerSideEncryptionConfiguration": {
    "KmsKeyId": {}
  },
  "Description": {},
  "ClientToken": {},
  "Tags": {},
  "UserTokenConfigurations": {},
  "UserContextPolicy": {},
  "UserGroupResolutionConfiguration": {
    "UserGroupResolutionMode": {}
  }
}
```

<h3 id="createindex-parameters">Parameters</h3>

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
|body|body|[CreateIndexRequest](#schemacreateindexrequest)|true|none|
|» Name|body|object|true|none|
|» Edition|body|object|false|none|
|» RoleArn|body|object|true|none|
|» ServerSideEncryptionConfiguration|body|object|false|none|
|» » KmsKeyId|body|object|false|none|
|» Description|body|object|false|none|
|» ClientToken|body|object|false|none|
|» Tags|body|object|false|none|
|» UserTokenConfigurations|body|object|false|none|
|» UserContextPolicy|body|object|false|none|
|» UserGroupResolutionConfiguration|body|object|false|none|
|» » UserGroupResolutionMode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.CreateIndex|

> Example responses

> 200 Response

```json
{
  "Id": {}
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateIndexResponse](#schemacreateindexresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceAlreadyExistException|[ResourceAlreadyExistException](#schemaresourcealreadyexistexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateQuerySuggestionsBlockList

<a id="opIdCreateQuerySuggestionsBlockList"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.CreateQuerySuggestionsBlockList' \
  -d '{
    "IndexId": {},
    "Name": {},
    "Description": {},
    "SourceS3Path": {
      "Bucket": {},
      "Key": {}
    },
    "ClientToken": {},
    "RoleArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList`

<p>Creates a block list to exlcude certain queries from suggestions.</p> <p>Any query that contains words or phrases specified in the block list is blocked or filtered out from being shown as a suggestion.</p> <p>You need to provide the file location of your block list text file in your S3 bucket. In your text file, enter each block word or phrase on a separate line.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>CreateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p> <p>For an example of creating a block list for query suggestions using the Python SDK, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/query-suggestions.html#suggestions-block-list">Query suggestions block list</a>.</p>

> Body parameter

```json
{
  "IndexId": {},
  "Name": {},
  "Description": {},
  "SourceS3Path": {
    "Bucket": {},
    "Key": {}
  },
  "ClientToken": {},
  "RoleArn": {},
  "Tags": {}
}
```

<h3 id="createquerysuggestionsblocklist-parameters">Parameters</h3>

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
|body|body|[CreateQuerySuggestionsBlockListRequest](#schemacreatequerysuggestionsblocklistrequest)|true|none|
|» IndexId|body|object|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» SourceS3Path|body|object|true|none|
|» » Bucket|body|object|true|none|
|» » Key|body|object|true|none|
|» ClientToken|body|object|false|none|
|» RoleArn|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.CreateQuerySuggestionsBlockList|

> Example responses

> 200 Response

```json
{
  "Id": {}
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createquerysuggestionsblocklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateQuerySuggestionsBlockListResponse](#schemacreatequerysuggestionsblocklistresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateThesaurus

<a id="opIdCreateThesaurus"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.CreateThesaurus' \
  -d '{
    "IndexId": {},
    "Name": {},
    "Description": {},
    "RoleArn": {},
    "Tags": {},
    "SourceS3Path": {
      "Bucket": {},
      "Key": {}
    },
    "ClientToken": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus`

<p>Creates a thesaurus for an index. The thesaurus contains a list of synonyms in Solr format.</p> <p>For an example of adding a thesaurus file to an index, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/index-synonyms-adding-thesaurus-file.html">Adding custom synonyms to an index</a>.</p>

> Body parameter

```json
{
  "IndexId": {},
  "Name": {},
  "Description": {},
  "RoleArn": {},
  "Tags": {},
  "SourceS3Path": {
    "Bucket": {},
    "Key": {}
  },
  "ClientToken": {}
}
```

<h3 id="createthesaurus-parameters">Parameters</h3>

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
|body|body|[CreateThesaurusRequest](#schemacreatethesaurusrequest)|true|none|
|» IndexId|body|object|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» RoleArn|body|object|true|none|
|» Tags|body|object|false|none|
|» SourceS3Path|body|object|true|none|
|» » Bucket|body|object|true|none|
|» » Key|body|object|true|none|
|» ClientToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.CreateThesaurus|

> Example responses

> 200 Response

```json
{
  "Id": {}
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createthesaurus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateThesaurusResponse](#schemacreatethesaurusresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAccessControlConfiguration

<a id="opIdDeleteAccessControlConfiguration"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DeleteAccessControlConfiguration' \
  -d '{
    "IndexId": {},
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration`

Deletes an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.

> Body parameter

```json
{
  "IndexId": {},
  "Id": {}
}
```

<h3 id="deleteaccesscontrolconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteAccessControlConfigurationRequest](#schemadeleteaccesscontrolconfigurationrequest)|true|none|
|» IndexId|body|object|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DeleteAccessControlConfiguration|

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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deleteaccesscontrolconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAccessControlConfigurationResponse](#schemadeleteaccesscontrolconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataSource

<a id="opIdDeleteDataSource"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DeleteDataSource' \
  -d '{
    "Id": {},
    "IndexId": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource`

Deletes an Amazon Kendra data source connector. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeDataSource</code> API is set to <code>DELETING</code>. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/delete-data-source.html">Deleting Data Sources</a>.

> Body parameter

```json
{
  "Id": {},
  "IndexId": {}
}
```

<h3 id="deletedatasource-parameters">Parameters</h3>

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
|body|body|[DeleteDataSourceRequest](#schemadeletedatasourcerequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DeleteDataSource|

> Example responses

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

> 485 Response

```json
null
```

<h3 id="deletedatasource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteExperience

<a id="opIdDeleteExperience"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DeleteExperience' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DeleteExperience' \
  -d '{
    "Id": {},
    "IndexId": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DeleteExperience`

Deletes your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

> Body parameter

```json
{
  "Id": {},
  "IndexId": {}
}
```

<h3 id="deleteexperience-parameters">Parameters</h3>

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
|body|body|[DeleteExperienceRequest](#schemadeleteexperiencerequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DeleteExperience|

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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deleteexperience-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteExperienceResponse](#schemadeleteexperienceresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFaq

<a id="opIdDeleteFaq"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DeleteFaq' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DeleteFaq' \
  -d '{
    "Id": {},
    "IndexId": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DeleteFaq`

Removes an FAQ from an index.

> Body parameter

```json
{
  "Id": {},
  "IndexId": {}
}
```

<h3 id="deletefaq-parameters">Parameters</h3>

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
|body|body|[DeleteFaqRequest](#schemadeletefaqrequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DeleteFaq|

> Example responses

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

> 485 Response

```json
null
```

<h3 id="deletefaq-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIndex

<a id="opIdDeleteIndex"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DeleteIndex' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DeleteIndex' \
  -d '{
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DeleteIndex`

Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the <code>Status</code> field returned by a call to the <code>DescribeIndex</code> API is set to <code>DELETING</code>.

> Body parameter

```json
{
  "Id": {}
}
```

<h3 id="deleteindex-parameters">Parameters</h3>

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
|body|body|[DeleteIndexRequest](#schemadeleteindexrequest)|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DeleteIndex|

> Example responses

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

> 485 Response

```json
null
```

<h3 id="deleteindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePrincipalMapping

<a id="opIdDeletePrincipalMapping"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DeletePrincipalMapping' \
  -d '{
    "IndexId": {},
    "DataSourceId": {},
    "GroupId": {},
    "OrderingId": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping`

<p>Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group.</p> <p>For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their search results.</p> <p>If you want to delete or replace users or sub groups of a group, you need to use the <code>PutPrincipalMapping</code> operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling <code>PutPrincipalMapping</code>. You can update your internal list of users or sub groups and input this list when calling <code>PutPrincipalMapping</code>.</p> <p> <code>DeletePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

> Body parameter

```json
{
  "IndexId": {},
  "DataSourceId": {},
  "GroupId": {},
  "OrderingId": {}
}
```

<h3 id="deleteprincipalmapping-parameters">Parameters</h3>

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
|body|body|[DeletePrincipalMappingRequest](#schemadeleteprincipalmappingrequest)|true|none|
|» IndexId|body|object|true|none|
|» DataSourceId|body|object|false|none|
|» GroupId|body|object|true|none|
|» OrderingId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DeletePrincipalMapping|

> Example responses

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

> 485 Response

```json
null
```

<h3 id="deleteprincipalmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteQuerySuggestionsBlockList

<a id="opIdDeleteQuerySuggestionsBlockList"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DeleteQuerySuggestionsBlockList' \
  -d '{
    "IndexId": {},
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList`

<p>Deletes a block list used for query suggestions for an index.</p> <p>A deleted block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to add back the queries that were previously blocked.</p> <p> <code>DeleteQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

> Body parameter

```json
{
  "IndexId": {},
  "Id": {}
}
```

<h3 id="deletequerysuggestionsblocklist-parameters">Parameters</h3>

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
|body|body|[DeleteQuerySuggestionsBlockListRequest](#schemadeletequerysuggestionsblocklistrequest)|true|none|
|» IndexId|body|object|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DeleteQuerySuggestionsBlockList|

> Example responses

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

> 485 Response

```json
null
```

<h3 id="deletequerysuggestionsblocklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteThesaurus

<a id="opIdDeleteThesaurus"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DeleteThesaurus' \
  -d '{
    "Id": {},
    "IndexId": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus`

Deletes an existing Amazon Kendra thesaurus. 

> Body parameter

```json
{
  "Id": {},
  "IndexId": {}
}
```

<h3 id="deletethesaurus-parameters">Parameters</h3>

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
|body|body|[DeleteThesaurusRequest](#schemadeletethesaurusrequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DeleteThesaurus|

> Example responses

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

> 485 Response

```json
null
```

<h3 id="deletethesaurus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAccessControlConfiguration

<a id="opIdDescribeAccessControlConfiguration"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DescribeAccessControlConfiguration' \
  -d '{
    "IndexId": {},
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration`

Gets information about an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.

> Body parameter

```json
{
  "IndexId": {},
  "Id": {}
}
```

<h3 id="describeaccesscontrolconfiguration-parameters">Parameters</h3>

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
|body|body|[DescribeAccessControlConfigurationRequest](#schemadescribeaccesscontrolconfigurationrequest)|true|none|
|» IndexId|body|object|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DescribeAccessControlConfiguration|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "Description": {},
  "ErrorMessage": {},
  "AccessControlList": {},
  "HierarchicalAccessControlList": {}
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

<h3 id="describeaccesscontrolconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccessControlConfigurationResponse](#schemadescribeaccesscontrolconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDataSource

<a id="opIdDescribeDataSource"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DescribeDataSource' \
  -d '{
    "Id": {},
    "IndexId": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource`

Gets information about an Amazon Kendra data source connector.

> Body parameter

```json
{
  "Id": {},
  "IndexId": {}
}
```

<h3 id="describedatasource-parameters">Parameters</h3>

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
|body|body|[DescribeDataSourceRequest](#schemadescribedatasourcerequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DescribeDataSource|

> Example responses

> 200 Response

```json
{
  "Id": {},
  "IndexId": {},
  "Name": {},
  "Type": {},
  "Configuration": {
    "S3Configuration": {
      "BucketName": {},
      "InclusionPrefixes": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "DocumentsMetadataConfiguration": {
        "S3Prefix": {}
      },
      "AccessControlListConfiguration": {
        "KeyPath": {}
      }
    },
    "SharePointConfiguration": {
      "SharePointVersion": {},
      "Urls": {},
      "SecretArn": {},
      "CrawlAttachments": {},
      "UseChangeLog": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "FieldMappings": {},
      "DocumentTitleFieldName": {},
      "DisableLocalGroups": {},
      "SslCertificateS3Path": {
        "Bucket": {},
        "Key": {}
      },
      "AuthenticationType": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      }
    },
    "DatabaseConfiguration": {
      "DatabaseEngineType": {},
      "ConnectionConfiguration": {
        "DatabaseHost": {},
        "DatabasePort": {},
        "DatabaseName": {},
        "TableName": {},
        "SecretArn": {}
      },
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "ColumnConfiguration": {
        "DocumentIdColumnName": {},
        "DocumentDataColumnName": {},
        "DocumentTitleColumnName": {},
        "FieldMappings": {},
        "ChangeDetectingColumns": {}
      },
      "AclConfiguration": {
        "AllowedGroupsColumnName": {}
      },
      "SqlConfiguration": {
        "QueryIdentifiersEnclosingOption": {}
      }
    },
    "SalesforceConfiguration": {
      "ServerUrl": {},
      "SecretArn": {},
      "StandardObjectConfigurations": {},
      "KnowledgeArticleConfiguration": {
        "IncludedStates": {},
        "StandardKnowledgeArticleTypeConfiguration": {
          "DocumentDataFieldName": {},
          "DocumentTitleFieldName": {},
          "FieldMappings": {}
        },
        "CustomKnowledgeArticleTypeConfigurations": {}
      },
      "ChatterFeedConfiguration": {
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {},
        "IncludeFilterTypes": {}
      },
      "CrawlAttachments": {},
      "StandardObjectAttachmentConfiguration": {
        "DocumentTitleFieldName": {},
        "FieldMappings": {}
      },
      "IncludeAttachmentFilePatterns": {},
      "ExcludeAttachmentFilePatterns": {}
    },
    "OneDriveConfiguration": {
      "TenantDomain": {},
      "SecretArn": {},
      "OneDriveUsers": {
        "OneDriveUserList": {},
        "OneDriveUserS3Path": {
          "Bucket": {},
          "Key": {}
        }
      },
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {},
      "DisableLocalGroups": {}
    },
    "ServiceNowConfiguration": {
      "HostUrl": {},
      "SecretArn": {},
      "ServiceNowBuildVersion": {},
      "KnowledgeArticleConfiguration": {
        "CrawlAttachments": {},
        "IncludeAttachmentFilePatterns": {},
        "ExcludeAttachmentFilePatterns": {},
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {},
        "FilterQuery": {}
      },
      "ServiceCatalogConfiguration": {
        "CrawlAttachments": {},
        "IncludeAttachmentFilePatterns": {},
        "ExcludeAttachmentFilePatterns": {},
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {}
      },
      "AuthenticationType": {}
    },
    "ConfluenceConfiguration": {
      "ServerUrl": {},
      "SecretArn": {},
      "Version": {},
      "SpaceConfiguration": {
        "CrawlPersonalSpaces": {},
        "CrawlArchivedSpaces": {},
        "IncludeSpaces": {},
        "ExcludeSpaces": {},
        "SpaceFieldMappings": {}
      },
      "PageConfiguration": {
        "PageFieldMappings": {}
      },
      "BlogConfiguration": {
        "BlogFieldMappings": {}
      },
      "AttachmentConfiguration": {
        "CrawlAttachments": {},
        "AttachmentFieldMappings": {}
      },
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      },
      "AuthenticationType": {}
    },
    "GoogleDriveConfiguration": {
      "SecretArn": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {},
      "ExcludeMimeTypes": {},
      "ExcludeUserAccounts": {},
      "ExcludeSharedDrives": {}
    },
    "WebCrawlerConfiguration": {
      "Urls": {
        "SeedUrlConfiguration": {
          "SeedUrls": {},
          "WebCrawlerMode": {}
        },
        "SiteMapsConfiguration": {
          "SiteMaps": {}
        }
      },
      "CrawlDepth": {},
      "MaxLinksPerPage": {},
      "MaxContentSizePerPageInMegaBytes": {},
      "MaxUrlsPerMinuteCrawlRate": {},
      "UrlInclusionPatterns": {},
      "UrlExclusionPatterns": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      },
      "AuthenticationConfiguration": {
        "BasicAuthentication": {}
      }
    },
    "WorkDocsConfiguration": {
      "OrganizationId": {},
      "CrawlComments": {},
      "UseChangeLog": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "FsxConfiguration": {
      "FileSystemId": {},
      "FileSystemType": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "SecretArn": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "SlackConfiguration": {
      "TeamId": {},
      "SecretArn": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "SlackEntityList": {},
      "UseChangeLog": {},
      "CrawlBotMessage": {},
      "ExcludeArchived": {},
      "SinceCrawlDate": {},
      "LookBackPeriod": {},
      "PrivateChannelFilter": {},
      "PublicChannelFilter": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "BoxConfiguration": {
      "EnterpriseId": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "CrawlComments": {},
      "CrawlTasks": {},
      "CrawlWebLinks": {},
      "FileFieldMappings": {},
      "TaskFieldMappings": {},
      "CommentFieldMappings": {},
      "WebLinkFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "QuipConfiguration": {
      "Domain": {},
      "SecretArn": {},
      "CrawlFileComments": {},
      "CrawlChatRooms": {},
      "CrawlAttachments": {},
      "FolderIds": {},
      "ThreadFieldMappings": {},
      "MessageFieldMappings": {},
      "AttachmentFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "JiraConfiguration": {
      "JiraAccountUrl": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "Project": {},
      "IssueType": {},
      "Status": {},
      "IssueSubEntityFilter": {},
      "AttachmentFieldMappings": {},
      "CommentFieldMappings": {},
      "IssueFieldMappings": {},
      "ProjectFieldMappings": {},
      "WorkLogFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "GitHubConfiguration": {
      "SaaSConfiguration": {
        "OrganizationName": {},
        "HostUrl": {}
      },
      "OnPremiseConfiguration": {
        "HostUrl": {},
        "OrganizationName": {},
        "SslCertificateS3Path": {
          "Bucket": {},
          "Key": {}
        }
      },
      "Type": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "GitHubDocumentCrawlProperties": {
        "CrawlRepositoryDocuments": {},
        "CrawlIssue": {},
        "CrawlIssueComment": {},
        "CrawlIssueCommentAttachment": {},
        "CrawlPullRequest": {},
        "CrawlPullRequestComment": {},
        "CrawlPullRequestCommentAttachment": {}
      },
      "RepositoryFilter": {},
      "InclusionFolderNamePatterns": {},
      "InclusionFileTypePatterns": {},
      "InclusionFileNamePatterns": {},
      "ExclusionFolderNamePatterns": {},
      "ExclusionFileTypePatterns": {},
      "ExclusionFileNamePatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "GitHubRepositoryConfigurationFieldMappings": {},
      "GitHubCommitConfigurationFieldMappings": {},
      "GitHubIssueDocumentConfigurationFieldMappings": {},
      "GitHubIssueCommentConfigurationFieldMappings": {},
      "GitHubIssueAttachmentConfigurationFieldMappings": {},
      "GitHubPullRequestCommentConfigurationFieldMappings": {},
      "GitHubPullRequestDocumentConfigurationFieldMappings": {},
      "GitHubPullRequestDocumentAttachmentConfigurationFieldMappings": {}
    },
    "AlfrescoConfiguration": {
      "SiteUrl": {},
      "SiteId": {},
      "SecretArn": {},
      "SslCertificateS3Path": {
        "Bucket": {},
        "Key": {}
      },
      "CrawlSystemFolders": {},
      "CrawlComments": {},
      "EntityFilter": {},
      "DocumentLibraryFieldMappings": {},
      "BlogFieldMappings": {},
      "WikiFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "TemplateConfiguration": {
      "Template": {}
    }
  },
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "CreatedAt": {},
  "UpdatedAt": {},
  "Description": {},
  "Status": {},
  "Schedule": {},
  "RoleArn": {},
  "ErrorMessage": {},
  "LanguageCode": {},
  "CustomDocumentEnrichmentConfiguration": {
    "InlineConfigurations": {},
    "PreExtractionHookConfiguration": {
      "InvocationCondition": {
        "ConditionDocumentAttributeKey": {},
        "Operator": {},
        "ConditionOnValue": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LambdaArn": {},
      "S3Bucket": {}
    },
    "PostExtractionHookConfiguration": {
      "InvocationCondition": {
        "ConditionDocumentAttributeKey": {},
        "Operator": {},
        "ConditionOnValue": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LambdaArn": {},
      "S3Bucket": {}
    },
    "RoleArn": {}
  }
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

<h3 id="describedatasource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDataSourceResponse](#schemadescribedatasourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeExperience

<a id="opIdDescribeExperience"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DescribeExperience' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DescribeExperience' \
  -d '{
    "Id": {},
    "IndexId": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DescribeExperience`

Gets information about your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

> Body parameter

```json
{
  "Id": {},
  "IndexId": {}
}
```

<h3 id="describeexperience-parameters">Parameters</h3>

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
|body|body|[DescribeExperienceRequest](#schemadescribeexperiencerequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DescribeExperience|

> Example responses

> 200 Response

```json
{
  "Id": {},
  "IndexId": {},
  "Name": {},
  "Endpoints": {},
  "Configuration": {
    "ContentSourceConfiguration": {
      "DataSourceIds": {},
      "FaqIds": {},
      "DirectPutContent": {}
    },
    "UserIdentityConfiguration": {
      "IdentityAttributeName": {}
    }
  },
  "CreatedAt": {},
  "UpdatedAt": {},
  "Description": {},
  "Status": {},
  "RoleArn": {},
  "ErrorMessage": {}
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

<h3 id="describeexperience-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeExperienceResponse](#schemadescribeexperienceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFaq

<a id="opIdDescribeFaq"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DescribeFaq' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DescribeFaq' \
  -d '{
    "Id": {},
    "IndexId": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DescribeFaq`

Gets information about an FAQ list.

> Body parameter

```json
{
  "Id": {},
  "IndexId": {}
}
```

<h3 id="describefaq-parameters">Parameters</h3>

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
|body|body|[DescribeFaqRequest](#schemadescribefaqrequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DescribeFaq|

> Example responses

> 200 Response

```json
{
  "Id": {},
  "IndexId": {},
  "Name": {},
  "Description": {},
  "CreatedAt": {},
  "UpdatedAt": {},
  "S3Path": {
    "Bucket": {},
    "Key": {}
  },
  "Status": {},
  "RoleArn": {},
  "ErrorMessage": {},
  "FileFormat": {},
  "LanguageCode": {}
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

<h3 id="describefaq-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFaqResponse](#schemadescribefaqresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFeaturedResultsSet

<a id="opIdDescribeFeaturedResultsSet"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DescribeFeaturedResultsSet' \
  -d '{
    "IndexId": {},
    "FeaturedResultsSetId": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet`

Gets information about a set of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

> Body parameter

```json
{
  "IndexId": {},
  "FeaturedResultsSetId": {}
}
```

<h3 id="describefeaturedresultsset-parameters">Parameters</h3>

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
|body|body|[DescribeFeaturedResultsSetRequest](#schemadescribefeaturedresultssetrequest)|true|none|
|» IndexId|body|object|true|none|
|» FeaturedResultsSetId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DescribeFeaturedResultsSet|

> Example responses

> 200 Response

```json
{
  "FeaturedResultsSetId": {},
  "FeaturedResultsSetName": {},
  "Description": {},
  "Status": {},
  "QueryTexts": {},
  "FeaturedDocumentsWithMetadata": {},
  "FeaturedDocumentsMissing": {},
  "LastUpdatedTimestamp": {},
  "CreationTimestamp": {}
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

<h3 id="describefeaturedresultsset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFeaturedResultsSetResponse](#schemadescribefeaturedresultssetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeIndex

<a id="opIdDescribeIndex"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DescribeIndex' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DescribeIndex' \
  -d '{
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DescribeIndex`

Gets information about an existing Amazon Kendra index.

> Body parameter

```json
{
  "Id": {}
}
```

<h3 id="describeindex-parameters">Parameters</h3>

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
|body|body|[DescribeIndexRequest](#schemadescribeindexrequest)|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DescribeIndex|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "Id": {},
  "Edition": {},
  "RoleArn": {},
  "ServerSideEncryptionConfiguration": {
    "KmsKeyId": {}
  },
  "Status": {},
  "Description": {},
  "CreatedAt": {},
  "UpdatedAt": {},
  "DocumentMetadataConfigurations": {},
  "IndexStatistics": {
    "FaqStatistics": {
      "IndexedQuestionAnswersCount": {}
    },
    "TextDocumentStatistics": {
      "IndexedTextDocumentsCount": {},
      "IndexedTextBytes": {}
    }
  },
  "ErrorMessage": {},
  "CapacityUnits": {
    "StorageCapacityUnits": {},
    "QueryCapacityUnits": {}
  },
  "UserTokenConfigurations": {},
  "UserContextPolicy": {},
  "UserGroupResolutionConfiguration": {
    "UserGroupResolutionMode": {}
  }
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

<h3 id="describeindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeIndexResponse](#schemadescribeindexresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePrincipalMapping

<a id="opIdDescribePrincipalMapping"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DescribePrincipalMapping' \
  -d '{
    "IndexId": {},
    "DataSourceId": {},
    "GroupId": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping`

<p>Describes the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups. This includes information on the status of actions currently processing or yet to be processed, when actions were last updated, when actions were received by Amazon Kendra, the latest action that should process and apply after other actions, and useful error messages if an action could not be processed.</p> <p> <code>DescribePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

> Body parameter

```json
{
  "IndexId": {},
  "DataSourceId": {},
  "GroupId": {}
}
```

<h3 id="describeprincipalmapping-parameters">Parameters</h3>

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
|body|body|[DescribePrincipalMappingRequest](#schemadescribeprincipalmappingrequest)|true|none|
|» IndexId|body|object|true|none|
|» DataSourceId|body|object|false|none|
|» GroupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DescribePrincipalMapping|

> Example responses

> 200 Response

```json
{
  "IndexId": {},
  "DataSourceId": {},
  "GroupId": {},
  "GroupOrderingIdSummaries": {}
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

<h3 id="describeprincipalmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePrincipalMappingResponse](#schemadescribeprincipalmappingresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeQuerySuggestionsBlockList

<a id="opIdDescribeQuerySuggestionsBlockList"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DescribeQuerySuggestionsBlockList' \
  -d '{
    "IndexId": {},
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList`

<p>Gets information about a block list used for query suggestions for an index.</p> <p>This is used to check the current settings that are applied to a block list.</p> <p> <code>DescribeQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

> Body parameter

```json
{
  "IndexId": {},
  "Id": {}
}
```

<h3 id="describequerysuggestionsblocklist-parameters">Parameters</h3>

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
|body|body|[DescribeQuerySuggestionsBlockListRequest](#schemadescribequerysuggestionsblocklistrequest)|true|none|
|» IndexId|body|object|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DescribeQuerySuggestionsBlockList|

> Example responses

> 200 Response

```json
{
  "IndexId": {},
  "Id": {},
  "Name": {},
  "Description": {},
  "Status": {},
  "ErrorMessage": {},
  "CreatedAt": {},
  "UpdatedAt": {},
  "SourceS3Path": {
    "Bucket": {},
    "Key": {}
  },
  "ItemCount": {},
  "FileSizeBytes": {},
  "RoleArn": {}
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

<h3 id="describequerysuggestionsblocklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeQuerySuggestionsBlockListResponse](#schemadescribequerysuggestionsblocklistresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeQuerySuggestionsConfig

<a id="opIdDescribeQuerySuggestionsConfig"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DescribeQuerySuggestionsConfig' \
  -d '{
    "IndexId": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig`

<p>Gets information on the settings of query suggestions for an index.</p> <p>This is used to check the current settings applied to query suggestions.</p> <p> <code>DescribeQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

> Body parameter

```json
{
  "IndexId": {}
}
```

<h3 id="describequerysuggestionsconfig-parameters">Parameters</h3>

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
|body|body|[DescribeQuerySuggestionsConfigRequest](#schemadescribequerysuggestionsconfigrequest)|true|none|
|» IndexId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DescribeQuerySuggestionsConfig|

> Example responses

> 200 Response

```json
{
  "Mode": {},
  "Status": {},
  "QueryLogLookBackWindowInDays": {},
  "IncludeQueriesWithoutUserInformation": {},
  "MinimumNumberOfQueryingUsers": {},
  "MinimumQueryCount": {},
  "LastSuggestionsBuildTime": {},
  "LastClearTime": {},
  "TotalSuggestionsCount": {}
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

<h3 id="describequerysuggestionsconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeQuerySuggestionsConfigResponse](#schemadescribequerysuggestionsconfigresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeThesaurus

<a id="opIdDescribeThesaurus"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DescribeThesaurus' \
  -d '{
    "Id": {},
    "IndexId": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus`

Gets information about an existing Amazon Kendra thesaurus.

> Body parameter

```json
{
  "Id": {},
  "IndexId": {}
}
```

<h3 id="describethesaurus-parameters">Parameters</h3>

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
|body|body|[DescribeThesaurusRequest](#schemadescribethesaurusrequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DescribeThesaurus|

> Example responses

> 200 Response

```json
{
  "Id": {},
  "IndexId": {},
  "Name": {},
  "Description": {},
  "Status": {},
  "ErrorMessage": {},
  "CreatedAt": {},
  "UpdatedAt": {},
  "RoleArn": {},
  "SourceS3Path": {
    "Bucket": {},
    "Key": {}
  },
  "FileSizeBytes": {},
  "TermCount": {},
  "SynonymRuleCount": {}
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

<h3 id="describethesaurus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeThesaurusResponse](#schemadescribethesaurusresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateEntitiesFromExperience

<a id="opIdDisassociateEntitiesFromExperience"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DisassociateEntitiesFromExperience' \
  -d '{
    "Id": {},
    "IndexId": {},
    "EntityList": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience`

Prevents users or groups in your IAM Identity Center identity source from accessing your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

> Body parameter

```json
{
  "Id": {},
  "IndexId": {},
  "EntityList": {}
}
```

<h3 id="disassociateentitiesfromexperience-parameters">Parameters</h3>

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
|body|body|[DisassociateEntitiesFromExperienceRequest](#schemadisassociateentitiesfromexperiencerequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|
|» EntityList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DisassociateEntitiesFromExperience|

> Example responses

> 200 Response

```json
{
  "FailedEntityList": {}
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

<h3 id="disassociateentitiesfromexperience-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateEntitiesFromExperienceResponse](#schemadisassociateentitiesfromexperienceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociatePersonasFromEntities

<a id="opIdDisassociatePersonasFromEntities"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.DisassociatePersonasFromEntities' \
  -d '{
    "Id": {},
    "IndexId": {},
    "EntityIds": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities`

Removes the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

> Body parameter

```json
{
  "Id": {},
  "IndexId": {},
  "EntityIds": {}
}
```

<h3 id="disassociatepersonasfromentities-parameters">Parameters</h3>

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
|body|body|[DisassociatePersonasFromEntitiesRequest](#schemadisassociatepersonasfromentitiesrequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|
|» EntityIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.DisassociatePersonasFromEntities|

> Example responses

> 200 Response

```json
{
  "FailedEntityList": {}
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

<h3 id="disassociatepersonasfromentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociatePersonasFromEntitiesResponse](#schemadisassociatepersonasfromentitiesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetQuerySuggestions

<a id="opIdGetQuerySuggestions"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.GetQuerySuggestions' \
  -d '{
    "IndexId": {},
    "QueryText": {},
    "MaxSuggestionsCount": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions`

<p>Fetches the queries that are suggested to your users.</p> <p> <code>GetQuerySuggestions</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

> Body parameter

```json
{
  "IndexId": {},
  "QueryText": {},
  "MaxSuggestionsCount": {}
}
```

<h3 id="getquerysuggestions-parameters">Parameters</h3>

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
|body|body|[GetQuerySuggestionsRequest](#schemagetquerysuggestionsrequest)|true|none|
|» IndexId|body|object|true|none|
|» QueryText|body|object|true|none|
|» MaxSuggestionsCount|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.GetQuerySuggestions|

> Example responses

> 200 Response

```json
{
  "QuerySuggestionsId": {},
  "Suggestions": {}
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getquerysuggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetQuerySuggestionsResponse](#schemagetquerysuggestionsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSnapshots

<a id="opIdGetSnapshots"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.GetSnapshots' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.GetSnapshots' \
  -d '{
    "IndexId": {},
    "Interval": {},
    "MetricType": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.GetSnapshots`

Retrieves search metrics data. The data provides a snapshot of how your users interact with your search application and how effective the application is.

> Body parameter

```json
{
  "IndexId": {},
  "Interval": {},
  "MetricType": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="getsnapshots-parameters">Parameters</h3>

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
|body|body|[GetSnapshotsRequest](#schemagetsnapshotsrequest)|true|none|
|» IndexId|body|object|true|none|
|» Interval|body|object|true|none|
|» MetricType|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.GetSnapshots|

> Example responses

> 200 Response

```json
{
  "SnapShotTimeFilter": {
    "StartTime": {},
    "EndTime": {}
  },
  "SnapshotsDataHeader": {},
  "SnapshotsData": {},
  "NextToken": {}
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

<h3 id="getsnapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSnapshotsResponse](#schemagetsnapshotsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccessControlConfigurations

<a id="opIdListAccessControlConfigurations"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.ListAccessControlConfigurations' \
  -d '{
    "IndexId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations`

Lists one or more access control configurations for an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.

> Body parameter

```json
{
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listaccesscontrolconfigurations-parameters">Parameters</h3>

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
|body|body|[ListAccessControlConfigurationsRequest](#schemalistaccesscontrolconfigurationsrequest)|true|none|
|» IndexId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.ListAccessControlConfigurations|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "AccessControlConfigurations": {}
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

<h3 id="listaccesscontrolconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccessControlConfigurationsResponse](#schemalistaccesscontrolconfigurationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDataSourceSyncJobs

<a id="opIdListDataSourceSyncJobs"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.ListDataSourceSyncJobs' \
  -d '{
    "Id": {},
    "IndexId": {},
    "NextToken": {},
    "MaxResults": {},
    "StartTimeFilter": {
      "StartTime": {},
      "EndTime": {}
    },
    "StatusFilter": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs`

Gets statistics about synchronizing a data source connector.

> Body parameter

```json
{
  "Id": {},
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {},
  "StartTimeFilter": {
    "StartTime": {},
    "EndTime": {}
  },
  "StatusFilter": {}
}
```

<h3 id="listdatasourcesyncjobs-parameters">Parameters</h3>

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
|body|body|[ListDataSourceSyncJobsRequest](#schemalistdatasourcesyncjobsrequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» StartTimeFilter|body|object|false|none|
|» » StartTime|body|object|false|none|
|» » EndTime|body|object|false|none|
|» StatusFilter|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.ListDataSourceSyncJobs|

> Example responses

> 200 Response

```json
{
  "History": {},
  "NextToken": {}
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

> 485 Response

```json
null
```

<h3 id="listdatasourcesyncjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDataSourceSyncJobsResponse](#schemalistdatasourcesyncjobsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDataSources

<a id="opIdListDataSources"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.ListDataSources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.ListDataSources' \
  -d '{
    "IndexId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.ListDataSources`

Lists the data source connectors that you have created.

> Body parameter

```json
{
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listdatasources-parameters">Parameters</h3>

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
|body|body|[ListDataSourcesRequest](#schemalistdatasourcesrequest)|true|none|
|» IndexId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.ListDataSources|

> Example responses

> 200 Response

```json
{
  "SummaryItems": {},
  "NextToken": {}
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

<h3 id="listdatasources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDataSourcesResponse](#schemalistdatasourcesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEntityPersonas

<a id="opIdListEntityPersonas"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.ListEntityPersonas' \
  -d '{
    "Id": {},
    "IndexId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas`

Lists specific permissions of users and groups with access to your Amazon Kendra experience.

> Body parameter

```json
{
  "Id": {},
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listentitypersonas-parameters">Parameters</h3>

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
|body|body|[ListEntityPersonasRequest](#schemalistentitypersonasrequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.ListEntityPersonas|

> Example responses

> 200 Response

```json
{
  "SummaryItems": {},
  "NextToken": {}
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

<h3 id="listentitypersonas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEntityPersonasResponse](#schemalistentitypersonasresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListExperienceEntities

<a id="opIdListExperienceEntities"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.ListExperienceEntities' \
  -d '{
    "Id": {},
    "IndexId": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities`

Lists users or groups in your IAM Identity Center identity source that are granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

> Body parameter

```json
{
  "Id": {},
  "IndexId": {},
  "NextToken": {}
}
```

<h3 id="listexperienceentities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListExperienceEntitiesRequest](#schemalistexperienceentitiesrequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.ListExperienceEntities|

> Example responses

> 200 Response

```json
{
  "SummaryItems": {},
  "NextToken": {}
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

<h3 id="listexperienceentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListExperienceEntitiesResponse](#schemalistexperienceentitiesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListExperiences

<a id="opIdListExperiences"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.ListExperiences' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.ListExperiences' \
  -d '{
    "IndexId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.ListExperiences`

Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

> Body parameter

```json
{
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listexperiences-parameters">Parameters</h3>

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
|body|body|[ListExperiencesRequest](#schemalistexperiencesrequest)|true|none|
|» IndexId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.ListExperiences|

> Example responses

> 200 Response

```json
{
  "SummaryItems": {},
  "NextToken": {}
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

<h3 id="listexperiences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListExperiencesResponse](#schemalistexperiencesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFaqs

<a id="opIdListFaqs"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.ListFaqs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.ListFaqs' \
  -d '{
    "IndexId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.ListFaqs`

Gets a list of FAQ lists associated with an index.

> Body parameter

```json
{
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listfaqs-parameters">Parameters</h3>

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
|body|body|[ListFaqsRequest](#schemalistfaqsrequest)|true|none|
|» IndexId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.ListFaqs|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "FaqSummaryItems": {}
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

<h3 id="listfaqs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFaqsResponse](#schemalistfaqsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFeaturedResultsSets

<a id="opIdListFeaturedResultsSets"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.ListFeaturedResultsSets' \
  -d '{
    "IndexId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets`

Lists all your sets of featured results for a given index. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

> Body parameter

```json
{
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listfeaturedresultssets-parameters">Parameters</h3>

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
|body|body|[ListFeaturedResultsSetsRequest](#schemalistfeaturedresultssetsrequest)|true|none|
|» IndexId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.ListFeaturedResultsSets|

> Example responses

> 200 Response

```json
{
  "FeaturedResultsSetSummaryItems": {},
  "NextToken": {}
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

<h3 id="listfeaturedresultssets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFeaturedResultsSetsResponse](#schemalistfeaturedresultssetsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGroupsOlderThanOrderingId

<a id="opIdListGroupsOlderThanOrderingId"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.ListGroupsOlderThanOrderingId' \
  -d '{
    "IndexId": {},
    "DataSourceId": {},
    "OrderingId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId`

<p>Provides a list of groups that are mapped to users before a given ordering or timestamp identifier.</p> <p> <code>ListGroupsOlderThanOrderingId</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

> Body parameter

```json
{
  "IndexId": {},
  "DataSourceId": {},
  "OrderingId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listgroupsolderthanorderingid-parameters">Parameters</h3>

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
|body|body|[ListGroupsOlderThanOrderingIdRequest](#schemalistgroupsolderthanorderingidrequest)|true|none|
|» IndexId|body|object|true|none|
|» DataSourceId|body|object|false|none|
|» OrderingId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.ListGroupsOlderThanOrderingId|

> Example responses

> 200 Response

```json
{
  "GroupsSummaries": {},
  "NextToken": {}
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

> 485 Response

```json
null
```

<h3 id="listgroupsolderthanorderingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGroupsOlderThanOrderingIdResponse](#schemalistgroupsolderthanorderingidresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListIndices

<a id="opIdListIndices"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.ListIndices' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.ListIndices' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.ListIndices`

Lists the Amazon Kendra indexes that you created.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listindices-parameters">Parameters</h3>

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
|body|body|[ListIndicesRequest](#schemalistindicesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.ListIndices|

> Example responses

> 200 Response

```json
{
  "IndexConfigurationSummaryItems": {},
  "NextToken": {}
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

<h3 id="listindices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIndicesResponse](#schemalistindicesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListQuerySuggestionsBlockLists

<a id="opIdListQuerySuggestionsBlockLists"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.ListQuerySuggestionsBlockLists' \
  -d '{
    "IndexId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists`

<p>Lists the block lists used for query suggestions for an index.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p> <p> <code>ListQuerySuggestionsBlockLists</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

> Body parameter

```json
{
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listquerysuggestionsblocklists-parameters">Parameters</h3>

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
|body|body|[ListQuerySuggestionsBlockListsRequest](#schemalistquerysuggestionsblocklistsrequest)|true|none|
|» IndexId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.ListQuerySuggestionsBlockLists|

> Example responses

> 200 Response

```json
{
  "BlockListSummaryItems": {},
  "NextToken": {}
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

<h3 id="listquerysuggestionsblocklists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListQuerySuggestionsBlockListsResponse](#schemalistquerysuggestionsblocklistsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.ListTagsForResource' \
  -d '{
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource`

Gets a list of tags associated with a specified resource. Indexes, FAQs, and data sources can have tags associated with them.

> Body parameter

```json
{
  "ResourceARN": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Tags": {}
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListThesauri

<a id="opIdListThesauri"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.ListThesauri' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.ListThesauri' \
  -d '{
    "IndexId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.ListThesauri`

Lists the thesauri for an index.

> Body parameter

```json
{
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listthesauri-parameters">Parameters</h3>

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
|body|body|[ListThesauriRequest](#schemalistthesaurirequest)|true|none|
|» IndexId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.ListThesauri|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "ThesaurusSummaryItems": {}
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

<h3 id="listthesauri-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListThesauriResponse](#schemalistthesauriresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutPrincipalMapping

<a id="opIdPutPrincipalMapping"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.PutPrincipalMapping' \
  -d '{
    "IndexId": {},
    "DataSourceId": {},
    "GroupId": {},
    "GroupMembers": {
      "MemberGroups": {},
      "MemberUsers": {},
      "S3PathforGroupMembers": {
        "Bucket": {},
        "Key": {}
      }
    },
    "OrderingId": {},
    "RoleArn": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping`

<p>Maps users to their groups so that you only need to provide the user ID when you issue the query.</p> <p>You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their search results.</p> <p>This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">Filtering on user context</a>.</p> <p>If more than five <code>PUT</code> actions for a group are currently processing, a validation exception is thrown.</p>

> Body parameter

```json
{
  "IndexId": {},
  "DataSourceId": {},
  "GroupId": {},
  "GroupMembers": {
    "MemberGroups": {},
    "MemberUsers": {},
    "S3PathforGroupMembers": {
      "Bucket": {},
      "Key": {}
    }
  },
  "OrderingId": {},
  "RoleArn": {}
}
```

<h3 id="putprincipalmapping-parameters">Parameters</h3>

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
|body|body|[PutPrincipalMappingRequest](#schemaputprincipalmappingrequest)|true|none|
|» IndexId|body|object|true|none|
|» DataSourceId|body|object|false|none|
|» GroupId|body|object|true|none|
|» GroupMembers|body|object|true|none|
|» » MemberGroups|body|object|false|none|
|» » MemberUsers|body|object|false|none|
|» » S3PathforGroupMembers|body|object|false|none|
|» » » Bucket|body|object|true|none|
|» » » Key|body|object|true|none|
|» OrderingId|body|object|false|none|
|» RoleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.PutPrincipalMapping|

> Example responses

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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="putprincipalmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Query

<a id="opIdQuery"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.Query' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.Query' \
  -d '{
    "IndexId": {},
    "QueryText": {},
    "AttributeFilter": {
      "AndAllFilters": {},
      "OrAllFilters": {},
      "NotFilter": {},
      "EqualsTo": {
        "Key": {},
        "Value": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "ContainsAll": {
        "Key": {},
        "Value": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "ContainsAny": {
        "Key": {},
        "Value": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "GreaterThan": {
        "Key": {},
        "Value": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "GreaterThanOrEquals": {
        "Key": {},
        "Value": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LessThan": {
        "Key": {},
        "Value": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LessThanOrEquals": {
        "Key": {},
        "Value": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      }
    },
    "Facets": {},
    "RequestedDocumentAttributes": {},
    "QueryResultTypeFilter": {},
    "DocumentRelevanceOverrideConfigurations": {},
    "PageNumber": {},
    "PageSize": {},
    "SortingConfiguration": {
      "DocumentAttributeKey": {},
      "SortOrder": {}
    },
    "UserContext": {
      "Token": {},
      "UserId": {},
      "Groups": {},
      "DataSourceGroups": {}
    },
    "VisitorId": {},
    "SpellCorrectionConfiguration": {
      "IncludeQuerySpellCheckSuggestions": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.Query`

<p>Searches an active index. Use this API to search your documents using query. The <code>Query</code> API enables to do faceted search and to filter results based on document attributes.</p> <p>It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results.</p> <p>Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.</p> <ul> <li> <p>Relevant passages</p> </li> <li> <p>Matching FAQs</p> </li> <li> <p>Relevant documents</p> </li> </ul> <p>You can specify that the query return only one type of result using the <code>QueryResultTypeFilter</code> parameter.</p> <p>Each query returns the 100 most relevant results. </p>

> Body parameter

```json
{
  "IndexId": {},
  "QueryText": {},
  "AttributeFilter": {
    "AndAllFilters": {},
    "OrAllFilters": {},
    "NotFilter": {},
    "EqualsTo": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "ContainsAll": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "ContainsAny": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "GreaterThan": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "GreaterThanOrEquals": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "LessThan": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "LessThanOrEquals": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    }
  },
  "Facets": {},
  "RequestedDocumentAttributes": {},
  "QueryResultTypeFilter": {},
  "DocumentRelevanceOverrideConfigurations": {},
  "PageNumber": {},
  "PageSize": {},
  "SortingConfiguration": {
    "DocumentAttributeKey": {},
    "SortOrder": {}
  },
  "UserContext": {
    "Token": {},
    "UserId": {},
    "Groups": {},
    "DataSourceGroups": {}
  },
  "VisitorId": {},
  "SpellCorrectionConfiguration": {
    "IncludeQuerySpellCheckSuggestions": {}
  }
}
```

<h3 id="query-parameters">Parameters</h3>

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
|body|body|[QueryRequest](#schemaqueryrequest)|true|none|
|» IndexId|body|object|true|none|
|» QueryText|body|object|false|none|
|» AttributeFilter|body|object|false|none|
|» » AndAllFilters|body|object|false|none|
|» » OrAllFilters|body|object|false|none|
|» » NotFilter|body|object|false|none|
|» » EqualsTo|body|object|false|none|
|» » » Key|body|object|true|none|
|» » » Value|body|object|true|none|
|» » » » StringValue|body|object|false|none|
|» » » » StringListValue|body|object|false|none|
|» » » » LongValue|body|object|false|none|
|» » » » DateValue|body|object|false|none|
|» » ContainsAll|body|object|false|none|
|» » » Key|body|object|true|none|
|» » » Value|body|object|true|none|
|» » » » StringValue|body|object|false|none|
|» » » » StringListValue|body|object|false|none|
|» » » » LongValue|body|object|false|none|
|» » » » DateValue|body|object|false|none|
|» » ContainsAny|body|object|false|none|
|» » » Key|body|object|true|none|
|» » » Value|body|object|true|none|
|» » » » StringValue|body|object|false|none|
|» » » » StringListValue|body|object|false|none|
|» » » » LongValue|body|object|false|none|
|» » » » DateValue|body|object|false|none|
|» » GreaterThan|body|object|false|none|
|» » » Key|body|object|true|none|
|» » » Value|body|object|true|none|
|» » » » StringValue|body|object|false|none|
|» » » » StringListValue|body|object|false|none|
|» » » » LongValue|body|object|false|none|
|» » » » DateValue|body|object|false|none|
|» » GreaterThanOrEquals|body|object|false|none|
|» » » Key|body|object|true|none|
|» » » Value|body|object|true|none|
|» » » » StringValue|body|object|false|none|
|» » » » StringListValue|body|object|false|none|
|» » » » LongValue|body|object|false|none|
|» » » » DateValue|body|object|false|none|
|» » LessThan|body|object|false|none|
|» » » Key|body|object|true|none|
|» » » Value|body|object|true|none|
|» » » » StringValue|body|object|false|none|
|» » » » StringListValue|body|object|false|none|
|» » » » LongValue|body|object|false|none|
|» » » » DateValue|body|object|false|none|
|» » LessThanOrEquals|body|object|false|none|
|» » » Key|body|object|true|none|
|» » » Value|body|object|true|none|
|» » » » StringValue|body|object|false|none|
|» » » » StringListValue|body|object|false|none|
|» » » » LongValue|body|object|false|none|
|» » » » DateValue|body|object|false|none|
|» Facets|body|object|false|none|
|» RequestedDocumentAttributes|body|object|false|none|
|» QueryResultTypeFilter|body|object|false|none|
|» DocumentRelevanceOverrideConfigurations|body|object|false|none|
|» PageNumber|body|object|false|none|
|» PageSize|body|object|false|none|
|» SortingConfiguration|body|object|false|none|
|» » DocumentAttributeKey|body|object|true|none|
|» » SortOrder|body|object|true|none|
|» UserContext|body|object|false|none|
|» » Token|body|object|false|none|
|» » UserId|body|object|false|none|
|» » Groups|body|object|false|none|
|» » DataSourceGroups|body|object|false|none|
|» VisitorId|body|object|false|none|
|» SpellCorrectionConfiguration|body|object|false|none|
|» » IncludeQuerySpellCheckSuggestions|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.Query|

> Example responses

> 200 Response

```json
{
  "QueryId": {},
  "ResultItems": {},
  "FacetResults": {},
  "TotalNumberOfResults": {},
  "Warnings": {},
  "SpellCorrectedQueries": {},
  "FeaturedResultsItems": {}
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[QueryResult](#schemaqueryresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartDataSourceSyncJob

<a id="opIdStartDataSourceSyncJob"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.StartDataSourceSyncJob' \
  -d '{
    "Id": {},
    "IndexId": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob`

Starts a synchronization job for a data source connector. If a synchronization job is already in progress, Amazon Kendra returns a <code>ResourceInUseException</code> exception.

> Body parameter

```json
{
  "Id": {},
  "IndexId": {}
}
```

<h3 id="startdatasourcesyncjob-parameters">Parameters</h3>

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
|body|body|[StartDataSourceSyncJobRequest](#schemastartdatasourcesyncjobrequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.StartDataSourceSyncJob|

> Example responses

> 200 Response

```json
{
  "ExecutionId": {}
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="startdatasourcesyncjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartDataSourceSyncJobResponse](#schemastartdatasourcesyncjobresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopDataSourceSyncJob

<a id="opIdStopDataSourceSyncJob"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.StopDataSourceSyncJob' \
  -d '{
    "Id": {},
    "IndexId": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob`

Stops a synchronization job that is currently running. You can't stop a scheduled synchronization job.

> Body parameter

```json
{
  "Id": {},
  "IndexId": {}
}
```

<h3 id="stopdatasourcesyncjob-parameters">Parameters</h3>

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
|body|body|[StopDataSourceSyncJobRequest](#schemastopdatasourcesyncjobrequest)|true|none|
|» Id|body|object|true|none|
|» IndexId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.StopDataSourceSyncJob|

> Example responses

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

<h3 id="stopdatasourcesyncjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SubmitFeedback

<a id="opIdSubmitFeedback"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.SubmitFeedback' \
  -d '{
    "IndexId": {},
    "QueryId": {},
    "ClickFeedbackItems": {},
    "RelevanceFeedbackItems": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback`

<p>Enables you to provide feedback to Amazon Kendra to improve the performance of your index.</p> <p> <code>SubmitFeedback</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

> Body parameter

```json
{
  "IndexId": {},
  "QueryId": {},
  "ClickFeedbackItems": {},
  "RelevanceFeedbackItems": {}
}
```

<h3 id="submitfeedback-parameters">Parameters</h3>

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
|body|body|[SubmitFeedbackRequest](#schemasubmitfeedbackrequest)|true|none|
|» IndexId|body|object|true|none|
|» QueryId|body|object|true|none|
|» ClickFeedbackItems|body|object|false|none|
|» RelevanceFeedbackItems|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.SubmitFeedback|

> Example responses

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

> 485 Response

```json
null
```

<h3 id="submitfeedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.TagResource`

Adds the specified tag to the specified index, FAQ, or data source resource. If the tag already exists, the existing value is replaced with the new value.

> Body parameter

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

<h3 id="tagresource-parameters">Parameters</h3>

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
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.TagResource|

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

> 484 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.UntagResource`

Removes a tag from an index, FAQ, or a data source.

> Body parameter

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

<h3 id="untagresource-parameters">Parameters</h3>

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
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.UntagResource|

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

> 484 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAccessControlConfiguration

<a id="opIdUpdateAccessControlConfiguration"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.UpdateAccessControlConfiguration' \
  -d '{
    "IndexId": {},
    "Id": {},
    "Name": {},
    "Description": {},
    "AccessControlList": {},
    "HierarchicalAccessControlList": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration`

<p>Updates an access control configuration for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</p> <p>You can update an access control configuration you created without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. You created an 'allow' access control configuration for one user who recently joined the 'top-secret' team, switching from a team with 'deny' access to top-secret documents. However, the user suddenly returns to their previous team and should no longer have access to top secret documents. You can update the access control configuration to re-configure access control for your documents as circumstances change.</p> <p>You call the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a> API to apply the updated access control configuration, with the <code>AccessControlConfigurationId</code> included in the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html">Document</a> object. If you use an S3 bucket as a data source, you synchronize your data source to apply the <code>AccessControlConfigurationId</code> in the <code>.metadata.json</code> file. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the <code>BatchPutDocument</code> API.</p>

> Body parameter

```json
{
  "IndexId": {},
  "Id": {},
  "Name": {},
  "Description": {},
  "AccessControlList": {},
  "HierarchicalAccessControlList": {}
}
```

<h3 id="updateaccesscontrolconfiguration-parameters">Parameters</h3>

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
|body|body|[UpdateAccessControlConfigurationRequest](#schemaupdateaccesscontrolconfigurationrequest)|true|none|
|» IndexId|body|object|true|none|
|» Id|body|object|true|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|
|» AccessControlList|body|object|false|none|
|» HierarchicalAccessControlList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.UpdateAccessControlConfiguration|

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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updateaccesscontrolconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAccessControlConfigurationResponse](#schemaupdateaccesscontrolconfigurationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDataSource

<a id="opIdUpdateDataSource"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.UpdateDataSource' \
  -d '{
    "Id": {},
    "Name": {},
    "IndexId": {},
    "Configuration": {
      "S3Configuration": {
        "BucketName": {},
        "InclusionPrefixes": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "DocumentsMetadataConfiguration": {
          "S3Prefix": {}
        },
        "AccessControlListConfiguration": {
          "KeyPath": {}
        }
      },
      "SharePointConfiguration": {
        "SharePointVersion": {},
        "Urls": {},
        "SecretArn": {},
        "CrawlAttachments": {},
        "UseChangeLog": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        },
        "FieldMappings": {},
        "DocumentTitleFieldName": {},
        "DisableLocalGroups": {},
        "SslCertificateS3Path": {
          "Bucket": {},
          "Key": {}
        },
        "AuthenticationType": {},
        "ProxyConfiguration": {
          "Host": {},
          "Port": {},
          "Credentials": {}
        }
      },
      "DatabaseConfiguration": {
        "DatabaseEngineType": {},
        "ConnectionConfiguration": {
          "DatabaseHost": {},
          "DatabasePort": {},
          "DatabaseName": {},
          "TableName": {},
          "SecretArn": {}
        },
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        },
        "ColumnConfiguration": {
          "DocumentIdColumnName": {},
          "DocumentDataColumnName": {},
          "DocumentTitleColumnName": {},
          "FieldMappings": {},
          "ChangeDetectingColumns": {}
        },
        "AclConfiguration": {
          "AllowedGroupsColumnName": {}
        },
        "SqlConfiguration": {
          "QueryIdentifiersEnclosingOption": {}
        }
      },
      "SalesforceConfiguration": {
        "ServerUrl": {},
        "SecretArn": {},
        "StandardObjectConfigurations": {},
        "KnowledgeArticleConfiguration": {
          "IncludedStates": {},
          "StandardKnowledgeArticleTypeConfiguration": {
            "DocumentDataFieldName": {},
            "DocumentTitleFieldName": {},
            "FieldMappings": {}
          },
          "CustomKnowledgeArticleTypeConfigurations": {}
        },
        "ChatterFeedConfiguration": {
          "DocumentDataFieldName": {},
          "DocumentTitleFieldName": {},
          "FieldMappings": {},
          "IncludeFilterTypes": {}
        },
        "CrawlAttachments": {},
        "StandardObjectAttachmentConfiguration": {
          "DocumentTitleFieldName": {},
          "FieldMappings": {}
        },
        "IncludeAttachmentFilePatterns": {},
        "ExcludeAttachmentFilePatterns": {}
      },
      "OneDriveConfiguration": {
        "TenantDomain": {},
        "SecretArn": {},
        "OneDriveUsers": {
          "OneDriveUserList": {},
          "OneDriveUserS3Path": {
            "Bucket": {},
            "Key": {}
          }
        },
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "FieldMappings": {},
        "DisableLocalGroups": {}
      },
      "ServiceNowConfiguration": {
        "HostUrl": {},
        "SecretArn": {},
        "ServiceNowBuildVersion": {},
        "KnowledgeArticleConfiguration": {
          "CrawlAttachments": {},
          "IncludeAttachmentFilePatterns": {},
          "ExcludeAttachmentFilePatterns": {},
          "DocumentDataFieldName": {},
          "DocumentTitleFieldName": {},
          "FieldMappings": {},
          "FilterQuery": {}
        },
        "ServiceCatalogConfiguration": {
          "CrawlAttachments": {},
          "IncludeAttachmentFilePatterns": {},
          "ExcludeAttachmentFilePatterns": {},
          "DocumentDataFieldName": {},
          "DocumentTitleFieldName": {},
          "FieldMappings": {}
        },
        "AuthenticationType": {}
      },
      "ConfluenceConfiguration": {
        "ServerUrl": {},
        "SecretArn": {},
        "Version": {},
        "SpaceConfiguration": {
          "CrawlPersonalSpaces": {},
          "CrawlArchivedSpaces": {},
          "IncludeSpaces": {},
          "ExcludeSpaces": {},
          "SpaceFieldMappings": {}
        },
        "PageConfiguration": {
          "PageFieldMappings": {}
        },
        "BlogConfiguration": {
          "BlogFieldMappings": {}
        },
        "AttachmentConfiguration": {
          "CrawlAttachments": {},
          "AttachmentFieldMappings": {}
        },
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        },
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "ProxyConfiguration": {
          "Host": {},
          "Port": {},
          "Credentials": {}
        },
        "AuthenticationType": {}
      },
      "GoogleDriveConfiguration": {
        "SecretArn": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "FieldMappings": {},
        "ExcludeMimeTypes": {},
        "ExcludeUserAccounts": {},
        "ExcludeSharedDrives": {}
      },
      "WebCrawlerConfiguration": {
        "Urls": {
          "SeedUrlConfiguration": {
            "SeedUrls": {},
            "WebCrawlerMode": {}
          },
          "SiteMapsConfiguration": {
            "SiteMaps": {}
          }
        },
        "CrawlDepth": {},
        "MaxLinksPerPage": {},
        "MaxContentSizePerPageInMegaBytes": {},
        "MaxUrlsPerMinuteCrawlRate": {},
        "UrlInclusionPatterns": {},
        "UrlExclusionPatterns": {},
        "ProxyConfiguration": {
          "Host": {},
          "Port": {},
          "Credentials": {}
        },
        "AuthenticationConfiguration": {
          "BasicAuthentication": {}
        }
      },
      "WorkDocsConfiguration": {
        "OrganizationId": {},
        "CrawlComments": {},
        "UseChangeLog": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "FieldMappings": {}
      },
      "FsxConfiguration": {
        "FileSystemId": {},
        "FileSystemType": {},
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        },
        "SecretArn": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "FieldMappings": {}
      },
      "SlackConfiguration": {
        "TeamId": {},
        "SecretArn": {},
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        },
        "SlackEntityList": {},
        "UseChangeLog": {},
        "CrawlBotMessage": {},
        "ExcludeArchived": {},
        "SinceCrawlDate": {},
        "LookBackPeriod": {},
        "PrivateChannelFilter": {},
        "PublicChannelFilter": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "FieldMappings": {}
      },
      "BoxConfiguration": {
        "EnterpriseId": {},
        "SecretArn": {},
        "UseChangeLog": {},
        "CrawlComments": {},
        "CrawlTasks": {},
        "CrawlWebLinks": {},
        "FileFieldMappings": {},
        "TaskFieldMappings": {},
        "CommentFieldMappings": {},
        "WebLinkFieldMappings": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        }
      },
      "QuipConfiguration": {
        "Domain": {},
        "SecretArn": {},
        "CrawlFileComments": {},
        "CrawlChatRooms": {},
        "CrawlAttachments": {},
        "FolderIds": {},
        "ThreadFieldMappings": {},
        "MessageFieldMappings": {},
        "AttachmentFieldMappings": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        }
      },
      "JiraConfiguration": {
        "JiraAccountUrl": {},
        "SecretArn": {},
        "UseChangeLog": {},
        "Project": {},
        "IssueType": {},
        "Status": {},
        "IssueSubEntityFilter": {},
        "AttachmentFieldMappings": {},
        "CommentFieldMappings": {},
        "IssueFieldMappings": {},
        "ProjectFieldMappings": {},
        "WorkLogFieldMappings": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        }
      },
      "GitHubConfiguration": {
        "SaaSConfiguration": {
          "OrganizationName": {},
          "HostUrl": {}
        },
        "OnPremiseConfiguration": {
          "HostUrl": {},
          "OrganizationName": {},
          "SslCertificateS3Path": {
            "Bucket": {},
            "Key": {}
          }
        },
        "Type": {},
        "SecretArn": {},
        "UseChangeLog": {},
        "GitHubDocumentCrawlProperties": {
          "CrawlRepositoryDocuments": {},
          "CrawlIssue": {},
          "CrawlIssueComment": {},
          "CrawlIssueCommentAttachment": {},
          "CrawlPullRequest": {},
          "CrawlPullRequestComment": {},
          "CrawlPullRequestCommentAttachment": {}
        },
        "RepositoryFilter": {},
        "InclusionFolderNamePatterns": {},
        "InclusionFileTypePatterns": {},
        "InclusionFileNamePatterns": {},
        "ExclusionFolderNamePatterns": {},
        "ExclusionFileTypePatterns": {},
        "ExclusionFileNamePatterns": {},
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        },
        "GitHubRepositoryConfigurationFieldMappings": {},
        "GitHubCommitConfigurationFieldMappings": {},
        "GitHubIssueDocumentConfigurationFieldMappings": {},
        "GitHubIssueCommentConfigurationFieldMappings": {},
        "GitHubIssueAttachmentConfigurationFieldMappings": {},
        "GitHubPullRequestCommentConfigurationFieldMappings": {},
        "GitHubPullRequestDocumentConfigurationFieldMappings": {},
        "GitHubPullRequestDocumentAttachmentConfigurationFieldMappings": {}
      },
      "AlfrescoConfiguration": {
        "SiteUrl": {},
        "SiteId": {},
        "SecretArn": {},
        "SslCertificateS3Path": {
          "Bucket": {},
          "Key": {}
        },
        "CrawlSystemFolders": {},
        "CrawlComments": {},
        "EntityFilter": {},
        "DocumentLibraryFieldMappings": {},
        "BlogFieldMappings": {},
        "WikiFieldMappings": {},
        "InclusionPatterns": {},
        "ExclusionPatterns": {},
        "VpcConfiguration": {
          "SubnetIds": {},
          "SecurityGroupIds": {}
        }
      },
      "TemplateConfiguration": {
        "Template": {}
      }
    },
    "VpcConfiguration": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "Description": {},
    "Schedule": {},
    "RoleArn": {},
    "LanguageCode": {},
    "CustomDocumentEnrichmentConfiguration": {
      "InlineConfigurations": {},
      "PreExtractionHookConfiguration": {
        "InvocationCondition": {
          "ConditionDocumentAttributeKey": {},
          "Operator": {},
          "ConditionOnValue": {
            "StringValue": {},
            "StringListValue": {},
            "LongValue": {},
            "DateValue": {}
          }
        },
        "LambdaArn": {},
        "S3Bucket": {}
      },
      "PostExtractionHookConfiguration": {
        "InvocationCondition": {
          "ConditionDocumentAttributeKey": {},
          "Operator": {},
          "ConditionOnValue": {
            "StringValue": {},
            "StringListValue": {},
            "LongValue": {},
            "DateValue": {}
          }
        },
        "LambdaArn": {},
        "S3Bucket": {}
      },
      "RoleArn": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource`

Updates an existing Amazon Kendra data source connector.

> Body parameter

```json
{
  "Id": {},
  "Name": {},
  "IndexId": {},
  "Configuration": {
    "S3Configuration": {
      "BucketName": {},
      "InclusionPrefixes": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "DocumentsMetadataConfiguration": {
        "S3Prefix": {}
      },
      "AccessControlListConfiguration": {
        "KeyPath": {}
      }
    },
    "SharePointConfiguration": {
      "SharePointVersion": {},
      "Urls": {},
      "SecretArn": {},
      "CrawlAttachments": {},
      "UseChangeLog": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "FieldMappings": {},
      "DocumentTitleFieldName": {},
      "DisableLocalGroups": {},
      "SslCertificateS3Path": {
        "Bucket": {},
        "Key": {}
      },
      "AuthenticationType": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      }
    },
    "DatabaseConfiguration": {
      "DatabaseEngineType": {},
      "ConnectionConfiguration": {
        "DatabaseHost": {},
        "DatabasePort": {},
        "DatabaseName": {},
        "TableName": {},
        "SecretArn": {}
      },
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "ColumnConfiguration": {
        "DocumentIdColumnName": {},
        "DocumentDataColumnName": {},
        "DocumentTitleColumnName": {},
        "FieldMappings": {},
        "ChangeDetectingColumns": {}
      },
      "AclConfiguration": {
        "AllowedGroupsColumnName": {}
      },
      "SqlConfiguration": {
        "QueryIdentifiersEnclosingOption": {}
      }
    },
    "SalesforceConfiguration": {
      "ServerUrl": {},
      "SecretArn": {},
      "StandardObjectConfigurations": {},
      "KnowledgeArticleConfiguration": {
        "IncludedStates": {},
        "StandardKnowledgeArticleTypeConfiguration": {
          "DocumentDataFieldName": {},
          "DocumentTitleFieldName": {},
          "FieldMappings": {}
        },
        "CustomKnowledgeArticleTypeConfigurations": {}
      },
      "ChatterFeedConfiguration": {
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {},
        "IncludeFilterTypes": {}
      },
      "CrawlAttachments": {},
      "StandardObjectAttachmentConfiguration": {
        "DocumentTitleFieldName": {},
        "FieldMappings": {}
      },
      "IncludeAttachmentFilePatterns": {},
      "ExcludeAttachmentFilePatterns": {}
    },
    "OneDriveConfiguration": {
      "TenantDomain": {},
      "SecretArn": {},
      "OneDriveUsers": {
        "OneDriveUserList": {},
        "OneDriveUserS3Path": {
          "Bucket": {},
          "Key": {}
        }
      },
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {},
      "DisableLocalGroups": {}
    },
    "ServiceNowConfiguration": {
      "HostUrl": {},
      "SecretArn": {},
      "ServiceNowBuildVersion": {},
      "KnowledgeArticleConfiguration": {
        "CrawlAttachments": {},
        "IncludeAttachmentFilePatterns": {},
        "ExcludeAttachmentFilePatterns": {},
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {},
        "FilterQuery": {}
      },
      "ServiceCatalogConfiguration": {
        "CrawlAttachments": {},
        "IncludeAttachmentFilePatterns": {},
        "ExcludeAttachmentFilePatterns": {},
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {}
      },
      "AuthenticationType": {}
    },
    "ConfluenceConfiguration": {
      "ServerUrl": {},
      "SecretArn": {},
      "Version": {},
      "SpaceConfiguration": {
        "CrawlPersonalSpaces": {},
        "CrawlArchivedSpaces": {},
        "IncludeSpaces": {},
        "ExcludeSpaces": {},
        "SpaceFieldMappings": {}
      },
      "PageConfiguration": {
        "PageFieldMappings": {}
      },
      "BlogConfiguration": {
        "BlogFieldMappings": {}
      },
      "AttachmentConfiguration": {
        "CrawlAttachments": {},
        "AttachmentFieldMappings": {}
      },
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      },
      "AuthenticationType": {}
    },
    "GoogleDriveConfiguration": {
      "SecretArn": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {},
      "ExcludeMimeTypes": {},
      "ExcludeUserAccounts": {},
      "ExcludeSharedDrives": {}
    },
    "WebCrawlerConfiguration": {
      "Urls": {
        "SeedUrlConfiguration": {
          "SeedUrls": {},
          "WebCrawlerMode": {}
        },
        "SiteMapsConfiguration": {
          "SiteMaps": {}
        }
      },
      "CrawlDepth": {},
      "MaxLinksPerPage": {},
      "MaxContentSizePerPageInMegaBytes": {},
      "MaxUrlsPerMinuteCrawlRate": {},
      "UrlInclusionPatterns": {},
      "UrlExclusionPatterns": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      },
      "AuthenticationConfiguration": {
        "BasicAuthentication": {}
      }
    },
    "WorkDocsConfiguration": {
      "OrganizationId": {},
      "CrawlComments": {},
      "UseChangeLog": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "FsxConfiguration": {
      "FileSystemId": {},
      "FileSystemType": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "SecretArn": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "SlackConfiguration": {
      "TeamId": {},
      "SecretArn": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "SlackEntityList": {},
      "UseChangeLog": {},
      "CrawlBotMessage": {},
      "ExcludeArchived": {},
      "SinceCrawlDate": {},
      "LookBackPeriod": {},
      "PrivateChannelFilter": {},
      "PublicChannelFilter": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "BoxConfiguration": {
      "EnterpriseId": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "CrawlComments": {},
      "CrawlTasks": {},
      "CrawlWebLinks": {},
      "FileFieldMappings": {},
      "TaskFieldMappings": {},
      "CommentFieldMappings": {},
      "WebLinkFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "QuipConfiguration": {
      "Domain": {},
      "SecretArn": {},
      "CrawlFileComments": {},
      "CrawlChatRooms": {},
      "CrawlAttachments": {},
      "FolderIds": {},
      "ThreadFieldMappings": {},
      "MessageFieldMappings": {},
      "AttachmentFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "JiraConfiguration": {
      "JiraAccountUrl": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "Project": {},
      "IssueType": {},
      "Status": {},
      "IssueSubEntityFilter": {},
      "AttachmentFieldMappings": {},
      "CommentFieldMappings": {},
      "IssueFieldMappings": {},
      "ProjectFieldMappings": {},
      "WorkLogFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "GitHubConfiguration": {
      "SaaSConfiguration": {
        "OrganizationName": {},
        "HostUrl": {}
      },
      "OnPremiseConfiguration": {
        "HostUrl": {},
        "OrganizationName": {},
        "SslCertificateS3Path": {
          "Bucket": {},
          "Key": {}
        }
      },
      "Type": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "GitHubDocumentCrawlProperties": {
        "CrawlRepositoryDocuments": {},
        "CrawlIssue": {},
        "CrawlIssueComment": {},
        "CrawlIssueCommentAttachment": {},
        "CrawlPullRequest": {},
        "CrawlPullRequestComment": {},
        "CrawlPullRequestCommentAttachment": {}
      },
      "RepositoryFilter": {},
      "InclusionFolderNamePatterns": {},
      "InclusionFileTypePatterns": {},
      "InclusionFileNamePatterns": {},
      "ExclusionFolderNamePatterns": {},
      "ExclusionFileTypePatterns": {},
      "ExclusionFileNamePatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "GitHubRepositoryConfigurationFieldMappings": {},
      "GitHubCommitConfigurationFieldMappings": {},
      "GitHubIssueDocumentConfigurationFieldMappings": {},
      "GitHubIssueCommentConfigurationFieldMappings": {},
      "GitHubIssueAttachmentConfigurationFieldMappings": {},
      "GitHubPullRequestCommentConfigurationFieldMappings": {},
      "GitHubPullRequestDocumentConfigurationFieldMappings": {},
      "GitHubPullRequestDocumentAttachmentConfigurationFieldMappings": {}
    },
    "AlfrescoConfiguration": {
      "SiteUrl": {},
      "SiteId": {},
      "SecretArn": {},
      "SslCertificateS3Path": {
        "Bucket": {},
        "Key": {}
      },
      "CrawlSystemFolders": {},
      "CrawlComments": {},
      "EntityFilter": {},
      "DocumentLibraryFieldMappings": {},
      "BlogFieldMappings": {},
      "WikiFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "TemplateConfiguration": {
      "Template": {}
    }
  },
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "Description": {},
  "Schedule": {},
  "RoleArn": {},
  "LanguageCode": {},
  "CustomDocumentEnrichmentConfiguration": {
    "InlineConfigurations": {},
    "PreExtractionHookConfiguration": {
      "InvocationCondition": {
        "ConditionDocumentAttributeKey": {},
        "Operator": {},
        "ConditionOnValue": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LambdaArn": {},
      "S3Bucket": {}
    },
    "PostExtractionHookConfiguration": {
      "InvocationCondition": {
        "ConditionDocumentAttributeKey": {},
        "Operator": {},
        "ConditionOnValue": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LambdaArn": {},
      "S3Bucket": {}
    },
    "RoleArn": {}
  }
}
```

<h3 id="updatedatasource-parameters">Parameters</h3>

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
|body|body|[UpdateDataSourceRequest](#schemaupdatedatasourcerequest)|true|none|
|» Id|body|object|true|none|
|» Name|body|object|false|none|
|» IndexId|body|object|true|none|
|» Configuration|body|object|false|none|
|» » S3Configuration|body|object|false|none|
|» » » BucketName|body|object|true|none|
|» » » InclusionPrefixes|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » DocumentsMetadataConfiguration|body|[DocumentsMetadataConfiguration](#schemadocumentsmetadataconfiguration)|false|Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document.|
|» » » AccessControlListConfiguration|body|object|false|none|
|» » » » KeyPath|body|object|false|none|
|» » SharePointConfiguration|body|object|false|none|
|» » » SharePointVersion|body|object|true|none|
|» » » Urls|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » CrawlAttachments|body|object|false|none|
|» » » UseChangeLog|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » » FieldMappings|body|object|false|none|
|» » » DocumentTitleFieldName|body|object|false|none|
|» » » DisableLocalGroups|body|object|false|none|
|» » » SslCertificateS3Path|body|object|false|none|
|» » » » Bucket|body|object|true|none|
|» » » » Key|body|object|true|none|
|» » » AuthenticationType|body|object|false|none|
|» » » ProxyConfiguration|body|object|false|none|
|» » » » Host|body|object|true|none|
|» » » » Port|body|object|true|none|
|» » » » Credentials|body|object|false|none|
|» » DatabaseConfiguration|body|object|false|none|
|» » » DatabaseEngineType|body|object|true|none|
|» » » ConnectionConfiguration|body|object|true|none|
|» » » » DatabaseHost|body|object|true|none|
|» » » » DatabasePort|body|object|true|none|
|» » » » DatabaseName|body|object|true|none|
|» » » » TableName|body|object|true|none|
|» » » » SecretArn|body|object|true|none|
|» » » VpcConfiguration|body|[DataSourceVpcConfiguration](#schemadatasourcevpcconfiguration)|false|Provides the configuration information to connect to an Amazon VPC.|
|» » » ColumnConfiguration|body|object|true|none|
|» » » » DocumentIdColumnName|body|object|true|none|
|» » » » DocumentDataColumnName|body|object|true|none|
|» » » » DocumentTitleColumnName|body|object|false|none|
|» » » » FieldMappings|body|object|false|none|
|» » » » ChangeDetectingColumns|body|object|true|none|
|» » » AclConfiguration|body|object|false|none|
|» » » » AllowedGroupsColumnName|body|object|true|none|
|» » » SqlConfiguration|body|object|false|none|
|» » » » QueryIdentifiersEnclosingOption|body|object|false|none|
|» » SalesforceConfiguration|body|object|false|none|
|» » » ServerUrl|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » StandardObjectConfigurations|body|object|false|none|
|» » » KnowledgeArticleConfiguration|body|object|false|none|
|» » » » IncludedStates|body|object|true|none|
|» » » » StandardKnowledgeArticleTypeConfiguration|body|object|false|none|
|» » » » » DocumentDataFieldName|body|object|true|none|
|» » » » » DocumentTitleFieldName|body|object|false|none|
|» » » » » FieldMappings|body|object|false|none|
|» » » » CustomKnowledgeArticleTypeConfigurations|body|object|false|none|
|» » » ChatterFeedConfiguration|body|object|false|none|
|» » » » DocumentDataFieldName|body|object|true|none|
|» » » » DocumentTitleFieldName|body|object|false|none|
|» » » » FieldMappings|body|object|false|none|
|» » » » IncludeFilterTypes|body|object|false|none|
|» » » CrawlAttachments|body|object|false|none|
|» » » StandardObjectAttachmentConfiguration|body|object|false|none|
|» » » » DocumentTitleFieldName|body|object|false|none|
|» » » » FieldMappings|body|object|false|none|
|» » » IncludeAttachmentFilePatterns|body|object|false|none|
|» » » ExcludeAttachmentFilePatterns|body|object|false|none|
|» » OneDriveConfiguration|body|object|false|none|
|» » » TenantDomain|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » OneDriveUsers|body|object|true|none|
|» » » » OneDriveUserList|body|object|false|none|
|» » » » OneDriveUserS3Path|body|object|false|none|
|» » » » » Bucket|body|object|true|none|
|» » » » » Key|body|object|true|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » FieldMappings|body|object|false|none|
|» » » DisableLocalGroups|body|object|false|none|
|» » ServiceNowConfiguration|body|object|false|none|
|» » » HostUrl|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » ServiceNowBuildVersion|body|object|true|none|
|» » » KnowledgeArticleConfiguration|body|object|false|none|
|» » » » CrawlAttachments|body|object|false|none|
|» » » » IncludeAttachmentFilePatterns|body|object|false|none|
|» » » » ExcludeAttachmentFilePatterns|body|object|false|none|
|» » » » DocumentDataFieldName|body|object|true|none|
|» » » » DocumentTitleFieldName|body|object|false|none|
|» » » » FieldMappings|body|object|false|none|
|» » » » FilterQuery|body|object|false|none|
|» » » ServiceCatalogConfiguration|body|object|false|none|
|» » » » CrawlAttachments|body|object|false|none|
|» » » » IncludeAttachmentFilePatterns|body|object|false|none|
|» » » » ExcludeAttachmentFilePatterns|body|object|false|none|
|» » » » DocumentDataFieldName|body|object|true|none|
|» » » » DocumentTitleFieldName|body|object|false|none|
|» » » » FieldMappings|body|object|false|none|
|» » » AuthenticationType|body|object|false|none|
|» » ConfluenceConfiguration|body|object|false|none|
|» » » ServerUrl|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » Version|body|object|true|none|
|» » » SpaceConfiguration|body|object|false|none|
|» » » » CrawlPersonalSpaces|body|object|false|none|
|» » » » CrawlArchivedSpaces|body|object|false|none|
|» » » » IncludeSpaces|body|object|false|none|
|» » » » ExcludeSpaces|body|object|false|none|
|» » » » SpaceFieldMappings|body|object|false|none|
|» » » PageConfiguration|body|object|false|none|
|» » » » PageFieldMappings|body|object|false|none|
|» » » BlogConfiguration|body|object|false|none|
|» » » » BlogFieldMappings|body|object|false|none|
|» » » AttachmentConfiguration|body|object|false|none|
|» » » » CrawlAttachments|body|object|false|none|
|» » » » AttachmentFieldMappings|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » ProxyConfiguration|body|object|false|none|
|» » » » Host|body|object|true|none|
|» » » » Port|body|object|true|none|
|» » » » Credentials|body|object|false|none|
|» » » AuthenticationType|body|object|false|none|
|» » GoogleDriveConfiguration|body|object|false|none|
|» » » SecretArn|body|object|true|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » FieldMappings|body|object|false|none|
|» » » ExcludeMimeTypes|body|object|false|none|
|» » » ExcludeUserAccounts|body|object|false|none|
|» » » ExcludeSharedDrives|body|object|false|none|
|» » WebCrawlerConfiguration|body|[WebCrawlerConfiguration](#schemawebcrawlerconfiguration)|false|Provides the configuration information required for Amazon Kendra Web Crawler.|
|» » WorkDocsConfiguration|body|object|false|none|
|» » » OrganizationId|body|object|true|none|
|» » » CrawlComments|body|object|false|none|
|» » » UseChangeLog|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » FieldMappings|body|object|false|none|
|» » FsxConfiguration|body|object|false|none|
|» » » FileSystemId|body|object|true|none|
|» » » FileSystemType|body|object|true|none|
|» » » VpcConfiguration|body|object|true|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » » SecretArn|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » FieldMappings|body|object|false|none|
|» » SlackConfiguration|body|object|false|none|
|» » » TeamId|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » » SlackEntityList|body|object|true|none|
|» » » UseChangeLog|body|object|false|none|
|» » » CrawlBotMessage|body|object|false|none|
|» » » ExcludeArchived|body|object|false|none|
|» » » SinceCrawlDate|body|object|true|none|
|» » » LookBackPeriod|body|object|false|none|
|» » » PrivateChannelFilter|body|object|false|none|
|» » » PublicChannelFilter|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » FieldMappings|body|object|false|none|
|» » BoxConfiguration|body|object|false|none|
|» » » EnterpriseId|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » UseChangeLog|body|object|false|none|
|» » » CrawlComments|body|object|false|none|
|» » » CrawlTasks|body|object|false|none|
|» » » CrawlWebLinks|body|object|false|none|
|» » » FileFieldMappings|body|object|false|none|
|» » » TaskFieldMappings|body|object|false|none|
|» » » CommentFieldMappings|body|object|false|none|
|» » » WebLinkFieldMappings|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » QuipConfiguration|body|object|false|none|
|» » » Domain|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » CrawlFileComments|body|object|false|none|
|» » » CrawlChatRooms|body|object|false|none|
|» » » CrawlAttachments|body|object|false|none|
|» » » FolderIds|body|object|false|none|
|» » » ThreadFieldMappings|body|object|false|none|
|» » » MessageFieldMappings|body|object|false|none|
|» » » AttachmentFieldMappings|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » JiraConfiguration|body|object|false|none|
|» » » JiraAccountUrl|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » UseChangeLog|body|object|false|none|
|» » » Project|body|object|false|none|
|» » » IssueType|body|object|false|none|
|» » » Status|body|object|false|none|
|» » » IssueSubEntityFilter|body|object|false|none|
|» » » AttachmentFieldMappings|body|object|false|none|
|» » » CommentFieldMappings|body|object|false|none|
|» » » IssueFieldMappings|body|object|false|none|
|» » » ProjectFieldMappings|body|object|false|none|
|» » » WorkLogFieldMappings|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » GitHubConfiguration|body|object|false|none|
|» » » SaaSConfiguration|body|object|false|none|
|» » » » OrganizationName|body|object|true|none|
|» » » » HostUrl|body|object|true|none|
|» » » OnPremiseConfiguration|body|object|false|none|
|» » » » HostUrl|body|object|true|none|
|» » » » OrganizationName|body|object|true|none|
|» » » » SslCertificateS3Path|body|object|true|none|
|» » » » » Bucket|body|object|true|none|
|» » » » » Key|body|object|true|none|
|» » » Type|body|object|false|none|
|» » » SecretArn|body|object|true|none|
|» » » UseChangeLog|body|object|false|none|
|» » » GitHubDocumentCrawlProperties|body|object|false|none|
|» » » » CrawlRepositoryDocuments|body|object|false|none|
|» » » » CrawlIssue|body|object|false|none|
|» » » » CrawlIssueComment|body|object|false|none|
|» » » » CrawlIssueCommentAttachment|body|object|false|none|
|» » » » CrawlPullRequest|body|object|false|none|
|» » » » CrawlPullRequestComment|body|object|false|none|
|» » » » CrawlPullRequestCommentAttachment|body|object|false|none|
|» » » RepositoryFilter|body|object|false|none|
|» » » InclusionFolderNamePatterns|body|object|false|none|
|» » » InclusionFileTypePatterns|body|object|false|none|
|» » » InclusionFileNamePatterns|body|object|false|none|
|» » » ExclusionFolderNamePatterns|body|object|false|none|
|» » » ExclusionFileTypePatterns|body|object|false|none|
|» » » ExclusionFileNamePatterns|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » » GitHubRepositoryConfigurationFieldMappings|body|object|false|none|
|» » » GitHubCommitConfigurationFieldMappings|body|object|false|none|
|» » » GitHubIssueDocumentConfigurationFieldMappings|body|object|false|none|
|» » » GitHubIssueCommentConfigurationFieldMappings|body|object|false|none|
|» » » GitHubIssueAttachmentConfigurationFieldMappings|body|object|false|none|
|» » » GitHubPullRequestCommentConfigurationFieldMappings|body|object|false|none|
|» » » GitHubPullRequestDocumentConfigurationFieldMappings|body|object|false|none|
|» » » GitHubPullRequestDocumentAttachmentConfigurationFieldMappings|body|object|false|none|
|» » AlfrescoConfiguration|body|object|false|none|
|» » » SiteUrl|body|object|true|none|
|» » » SiteId|body|object|true|none|
|» » » SecretArn|body|object|true|none|
|» » » SslCertificateS3Path|body|object|true|none|
|» » » » Bucket|body|object|true|none|
|» » » » Key|body|object|true|none|
|» » » CrawlSystemFolders|body|object|false|none|
|» » » CrawlComments|body|object|false|none|
|» » » EntityFilter|body|object|false|none|
|» » » DocumentLibraryFieldMappings|body|object|false|none|
|» » » BlogFieldMappings|body|object|false|none|
|» » » WikiFieldMappings|body|object|false|none|
|» » » InclusionPatterns|body|object|false|none|
|» » » ExclusionPatterns|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIds|body|object|true|none|
|» » » » SecurityGroupIds|body|object|true|none|
|» » TemplateConfiguration|body|object|false|none|
|» » » Template|body|object|false|none|
|» VpcConfiguration|body|object|false|none|
|» » SubnetIds|body|object|true|none|
|» » SecurityGroupIds|body|object|true|none|
|» Description|body|object|false|none|
|» Schedule|body|object|false|none|
|» RoleArn|body|object|false|none|
|» LanguageCode|body|object|false|none|
|» CustomDocumentEnrichmentConfiguration|body|object|false|none|
|» » InlineConfigurations|body|object|false|none|
|» » PreExtractionHookConfiguration|body|object|false|none|
|» » » InvocationCondition|body|object|false|none|
|» » » » ConditionDocumentAttributeKey|body|object|true|none|
|» » » » Operator|body|object|true|none|
|» » » » ConditionOnValue|body|object|false|none|
|» » » » » StringValue|body|object|false|none|
|» » » » » StringListValue|body|object|false|none|
|» » » » » LongValue|body|object|false|none|
|» » » » » DateValue|body|object|false|none|
|» » » LambdaArn|body|object|true|none|
|» » » S3Bucket|body|object|true|none|
|» » PostExtractionHookConfiguration|body|object|false|none|
|» » » InvocationCondition|body|object|false|none|
|» » » » ConditionDocumentAttributeKey|body|object|true|none|
|» » » » Operator|body|object|true|none|
|» » » » ConditionOnValue|body|object|false|none|
|» » » » » StringValue|body|object|false|none|
|» » » » » StringListValue|body|object|false|none|
|» » » » » LongValue|body|object|false|none|
|» » » » » DateValue|body|object|false|none|
|» » » LambdaArn|body|object|true|none|
|» » » S3Bucket|body|object|true|none|
|» » RoleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.UpdateDataSource|

> Example responses

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

> 485 Response

```json
null
```

<h3 id="updatedatasource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateExperience

<a id="opIdUpdateExperience"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.UpdateExperience' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.UpdateExperience' \
  -d '{
    "Id": {},
    "Name": {},
    "IndexId": {},
    "RoleArn": {},
    "Configuration": {
      "ContentSourceConfiguration": {
        "DataSourceIds": {},
        "FaqIds": {},
        "DirectPutContent": {}
      },
      "UserIdentityConfiguration": {
        "IdentityAttributeName": {}
      }
    },
    "Description": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.UpdateExperience`

Updates your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

> Body parameter

```json
{
  "Id": {},
  "Name": {},
  "IndexId": {},
  "RoleArn": {},
  "Configuration": {
    "ContentSourceConfiguration": {
      "DataSourceIds": {},
      "FaqIds": {},
      "DirectPutContent": {}
    },
    "UserIdentityConfiguration": {
      "IdentityAttributeName": {}
    }
  },
  "Description": {}
}
```

<h3 id="updateexperience-parameters">Parameters</h3>

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
|body|body|[UpdateExperienceRequest](#schemaupdateexperiencerequest)|true|none|
|» Id|body|object|true|none|
|» Name|body|object|false|none|
|» IndexId|body|object|true|none|
|» RoleArn|body|object|false|none|
|» Configuration|body|object|false|none|
|» » ContentSourceConfiguration|body|object|false|none|
|» » » DataSourceIds|body|object|false|none|
|» » » FaqIds|body|object|false|none|
|» » » DirectPutContent|body|object|false|none|
|» » UserIdentityConfiguration|body|object|false|none|
|» » » IdentityAttributeName|body|object|false|none|
|» Description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.UpdateExperience|

> Example responses

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

> 485 Response

```json
null
```

<h3 id="updateexperience-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFeaturedResultsSet

<a id="opIdUpdateFeaturedResultsSet"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.UpdateFeaturedResultsSet' \
  -d '{
    "IndexId": {},
    "FeaturedResultsSetId": {},
    "FeaturedResultsSetName": {},
    "Description": {},
    "Status": {},
    "QueryTexts": {},
    "FeaturedDocuments": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet`

Updates a set of featured results. Features results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match of a query, then one or more specific documents are featured in the search results.

> Body parameter

```json
{
  "IndexId": {},
  "FeaturedResultsSetId": {},
  "FeaturedResultsSetName": {},
  "Description": {},
  "Status": {},
  "QueryTexts": {},
  "FeaturedDocuments": {}
}
```

<h3 id="updatefeaturedresultsset-parameters">Parameters</h3>

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
|body|body|[UpdateFeaturedResultsSetRequest](#schemaupdatefeaturedresultssetrequest)|true|none|
|» IndexId|body|object|true|none|
|» FeaturedResultsSetId|body|object|true|none|
|» FeaturedResultsSetName|body|object|false|none|
|» Description|body|object|false|none|
|» Status|body|object|false|none|
|» QueryTexts|body|object|false|none|
|» FeaturedDocuments|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.UpdateFeaturedResultsSet|

> Example responses

> 200 Response

```json
{
  "FeaturedResultsSet": {
    "FeaturedResultsSetId": {},
    "FeaturedResultsSetName": {},
    "Description": {},
    "Status": {},
    "QueryTexts": {},
    "FeaturedDocuments": {},
    "LastUpdatedTimestamp": {},
    "CreationTimestamp": {}
  }
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

> 485 Response

```json
null
```

<h3 id="updatefeaturedresultsset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFeaturedResultsSetResponse](#schemaupdatefeaturedresultssetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|FeaturedResultsConflictException|[FeaturedResultsConflictException](#schemafeaturedresultsconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateIndex

<a id="opIdUpdateIndex"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.UpdateIndex' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.UpdateIndex' \
  -d '{
    "Id": {},
    "Name": {},
    "RoleArn": {},
    "Description": {},
    "DocumentMetadataConfigurationUpdates": {},
    "CapacityUnits": {
      "StorageCapacityUnits": {},
      "QueryCapacityUnits": {}
    },
    "UserTokenConfigurations": {},
    "UserContextPolicy": {},
    "UserGroupResolutionConfiguration": {
      "UserGroupResolutionMode": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.UpdateIndex`

Updates an existing Amazon Kendra index.

> Body parameter

```json
{
  "Id": {},
  "Name": {},
  "RoleArn": {},
  "Description": {},
  "DocumentMetadataConfigurationUpdates": {},
  "CapacityUnits": {
    "StorageCapacityUnits": {},
    "QueryCapacityUnits": {}
  },
  "UserTokenConfigurations": {},
  "UserContextPolicy": {},
  "UserGroupResolutionConfiguration": {
    "UserGroupResolutionMode": {}
  }
}
```

<h3 id="updateindex-parameters">Parameters</h3>

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
|body|body|[UpdateIndexRequest](#schemaupdateindexrequest)|true|none|
|» Id|body|object|true|none|
|» Name|body|object|false|none|
|» RoleArn|body|object|false|none|
|» Description|body|object|false|none|
|» DocumentMetadataConfigurationUpdates|body|object|false|none|
|» CapacityUnits|body|object|false|none|
|» » StorageCapacityUnits|body|object|true|none|
|» » QueryCapacityUnits|body|object|true|none|
|» UserTokenConfigurations|body|object|false|none|
|» UserContextPolicy|body|object|false|none|
|» UserGroupResolutionConfiguration|body|object|false|none|
|» » UserGroupResolutionMode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.UpdateIndex|

> Example responses

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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updateindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateQuerySuggestionsBlockList

<a id="opIdUpdateQuerySuggestionsBlockList"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.UpdateQuerySuggestionsBlockList' \
  -d '{
    "IndexId": {},
    "Id": {},
    "Name": {},
    "Description": {},
    "SourceS3Path": {
      "Bucket": {},
      "Key": {}
    },
    "RoleArn": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList`

<p>Updates a block list used for query suggestions for an index.</p> <p>Updates to a block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to apply any updates to the block list. Other changes not related to the block list apply immediately.</p> <p>If a block list is updating, then you need to wait for the first update to finish before submitting another update.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p> <code>UpdateQuerySuggestionsBlockList</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

> Body parameter

```json
{
  "IndexId": {},
  "Id": {},
  "Name": {},
  "Description": {},
  "SourceS3Path": {
    "Bucket": {},
    "Key": {}
  },
  "RoleArn": {}
}
```

<h3 id="updatequerysuggestionsblocklist-parameters">Parameters</h3>

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
|body|body|[UpdateQuerySuggestionsBlockListRequest](#schemaupdatequerysuggestionsblocklistrequest)|true|none|
|» IndexId|body|object|true|none|
|» Id|body|object|true|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|
|» SourceS3Path|body|object|false|none|
|» » Bucket|body|object|true|none|
|» » Key|body|object|true|none|
|» RoleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.UpdateQuerySuggestionsBlockList|

> Example responses

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

> 485 Response

```json
null
```

<h3 id="updatequerysuggestionsblocklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateQuerySuggestionsConfig

<a id="opIdUpdateQuerySuggestionsConfig"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.UpdateQuerySuggestionsConfig' \
  -d '{
    "IndexId": {},
    "Mode": {},
    "QueryLogLookBackWindowInDays": {},
    "IncludeQueriesWithoutUserInformation": {},
    "MinimumNumberOfQueryingUsers": {},
    "MinimumQueryCount": {}
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig`

<p>Updates the settings of query suggestions for an index.</p> <p>Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.</p> <p>If an update is currently processing (i.e. 'happening'), you need to wait for the update to finish before making another update.</p> <p>Updates to query suggestions settings might not take effect right away. The time for your updated settings to take effect depends on the updates made and the number of search queries in your index.</p> <p>You can still enable/disable query suggestions at any time.</p> <p> <code>UpdateQuerySuggestionsConfig</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>

> Body parameter

```json
{
  "IndexId": {},
  "Mode": {},
  "QueryLogLookBackWindowInDays": {},
  "IncludeQueriesWithoutUserInformation": {},
  "MinimumNumberOfQueryingUsers": {},
  "MinimumQueryCount": {}
}
```

<h3 id="updatequerysuggestionsconfig-parameters">Parameters</h3>

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
|body|body|[UpdateQuerySuggestionsConfigRequest](#schemaupdatequerysuggestionsconfigrequest)|true|none|
|» IndexId|body|object|true|none|
|» Mode|body|object|false|none|
|» QueryLogLookBackWindowInDays|body|object|false|none|
|» IncludeQueriesWithoutUserInformation|body|object|false|none|
|» MinimumNumberOfQueryingUsers|body|object|false|none|
|» MinimumQueryCount|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.UpdateQuerySuggestionsConfig|

> Example responses

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

> 485 Response

```json
null
```

<h3 id="updatequerysuggestionsconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateThesaurus

<a id="opIdUpdateThesaurus"></a>

> Code samples

```bash
curl 'https://kendra.us-east-1.amazonaws.com/#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSKendraFrontendService.UpdateThesaurus' \
  -d '{
    "Id": {},
    "Name": {},
    "IndexId": {},
    "Description": {},
    "RoleArn": {},
    "SourceS3Path": {
      "Bucket": {},
      "Key": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus`

Updates a thesaurus for an index.

> Body parameter

```json
{
  "Id": {},
  "Name": {},
  "IndexId": {},
  "Description": {},
  "RoleArn": {},
  "SourceS3Path": {
    "Bucket": {},
    "Key": {}
  }
}
```

<h3 id="updatethesaurus-parameters">Parameters</h3>

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
|body|body|[UpdateThesaurusRequest](#schemaupdatethesaurusrequest)|true|none|
|» Id|body|object|true|none|
|» Name|body|object|false|none|
|» IndexId|body|object|true|none|
|» Description|body|object|false|none|
|» RoleArn|body|object|false|none|
|» SourceS3Path|body|[S3Path](#schemas3path)|false|Information required to find a specific file in an Amazon S3 bucket.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSKendraFrontendService.UpdateThesaurus|

> Example responses

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

> 485 Response

```json
null
```

<h3 id="updatethesaurus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateEntitiesToExperienceResponse">AssociateEntitiesToExperienceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateentitiestoexperienceresponse"></a>
<a id="schema_AssociateEntitiesToExperienceResponse"></a>
<a id="tocSassociateentitiestoexperienceresponse"></a>
<a id="tocsassociateentitiestoexperienceresponse"></a>

```json
{
  "FailedEntityList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedEntityList|object|false|none|none|

<h2 id="tocS_AssociateEntitiesToExperienceRequest">AssociateEntitiesToExperienceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateentitiestoexperiencerequest"></a>
<a id="schema_AssociateEntitiesToExperienceRequest"></a>
<a id="tocSassociateentitiestoexperiencerequest"></a>
<a id="tocsassociateentitiestoexperiencerequest"></a>

```json
{
  "Id": {},
  "IndexId": {},
  "EntityList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|
|EntityList|object|true|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ResourceAlreadyExistException">ResourceAlreadyExistException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistexception"></a>
<a id="schema_ResourceAlreadyExistException"></a>
<a id="tocSresourcealreadyexistexception"></a>
<a id="tocsresourcealreadyexistexception"></a>

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

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_AssociatePersonasToEntitiesResponse">AssociatePersonasToEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatepersonastoentitiesresponse"></a>
<a id="schema_AssociatePersonasToEntitiesResponse"></a>
<a id="tocSassociatepersonastoentitiesresponse"></a>
<a id="tocsassociatepersonastoentitiesresponse"></a>

```json
{
  "FailedEntityList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedEntityList|object|false|none|none|

<h2 id="tocS_AssociatePersonasToEntitiesRequest">AssociatePersonasToEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatepersonastoentitiesrequest"></a>
<a id="schema_AssociatePersonasToEntitiesRequest"></a>
<a id="tocSassociatepersonastoentitiesrequest"></a>
<a id="tocsassociatepersonastoentitiesrequest"></a>

```json
{
  "Id": {},
  "IndexId": {},
  "Personas": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|
|Personas|object|true|none|none|

<h2 id="tocS_BatchDeleteDocumentResponse">BatchDeleteDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedocumentresponse"></a>
<a id="schema_BatchDeleteDocumentResponse"></a>
<a id="tocSbatchdeletedocumentresponse"></a>
<a id="tocsbatchdeletedocumentresponse"></a>

```json
{
  "FailedDocuments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedDocuments|object|false|none|none|

<h2 id="tocS_BatchDeleteDocumentRequest">BatchDeleteDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedocumentrequest"></a>
<a id="schema_BatchDeleteDocumentRequest"></a>
<a id="tocSbatchdeletedocumentrequest"></a>
<a id="tocsbatchdeletedocumentrequest"></a>

```json
{
  "IndexId": {},
  "DocumentIdList": {},
  "DataSourceSyncJobMetricTarget": {
    "DataSourceId": {},
    "DataSourceSyncJobId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|DocumentIdList|object|true|none|none|
|DataSourceSyncJobMetricTarget|[DataSourceSyncJobMetricTarget](#schemadatasourcesyncjobmetrictarget)|false|none|Maps a particular data source sync job to a particular data source.|

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_BatchDeleteFeaturedResultsSetResponse">BatchDeleteFeaturedResultsSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletefeaturedresultssetresponse"></a>
<a id="schema_BatchDeleteFeaturedResultsSetResponse"></a>
<a id="tocSbatchdeletefeaturedresultssetresponse"></a>
<a id="tocsbatchdeletefeaturedresultssetresponse"></a>

```json
{
  "Errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|object|true|none|none|

<h2 id="tocS_BatchDeleteFeaturedResultsSetRequest">BatchDeleteFeaturedResultsSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletefeaturedresultssetrequest"></a>
<a id="schema_BatchDeleteFeaturedResultsSetRequest"></a>
<a id="tocSbatchdeletefeaturedresultssetrequest"></a>
<a id="tocsbatchdeletefeaturedresultssetrequest"></a>

```json
{
  "IndexId": {},
  "FeaturedResultsSetIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|FeaturedResultsSetIds|object|true|none|none|

<h2 id="tocS_BatchGetDocumentStatusResponse">BatchGetDocumentStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdocumentstatusresponse"></a>
<a id="schema_BatchGetDocumentStatusResponse"></a>
<a id="tocSbatchgetdocumentstatusresponse"></a>
<a id="tocsbatchgetdocumentstatusresponse"></a>

```json
{
  "Errors": {},
  "DocumentStatusList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|object|false|none|none|
|DocumentStatusList|object|false|none|none|

<h2 id="tocS_BatchGetDocumentStatusRequest">BatchGetDocumentStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdocumentstatusrequest"></a>
<a id="schema_BatchGetDocumentStatusRequest"></a>
<a id="tocSbatchgetdocumentstatusrequest"></a>
<a id="tocsbatchgetdocumentstatusrequest"></a>

```json
{
  "IndexId": {},
  "DocumentInfoList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|DocumentInfoList|object|true|none|none|

<h2 id="tocS_BatchPutDocumentResponse">BatchPutDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchputdocumentresponse"></a>
<a id="schema_BatchPutDocumentResponse"></a>
<a id="tocSbatchputdocumentresponse"></a>
<a id="tocsbatchputdocumentresponse"></a>

```json
{
  "FailedDocuments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedDocuments|object|false|none|none|

<h2 id="tocS_BatchPutDocumentRequest">BatchPutDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchputdocumentrequest"></a>
<a id="schema_BatchPutDocumentRequest"></a>
<a id="tocSbatchputdocumentrequest"></a>
<a id="tocsbatchputdocumentrequest"></a>

```json
{
  "IndexId": {},
  "RoleArn": {},
  "Documents": {},
  "CustomDocumentEnrichmentConfiguration": {
    "InlineConfigurations": {},
    "PreExtractionHookConfiguration": {
      "InvocationCondition": {
        "ConditionDocumentAttributeKey": {},
        "Operator": {},
        "ConditionOnValue": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LambdaArn": {},
      "S3Bucket": {}
    },
    "PostExtractionHookConfiguration": {
      "InvocationCondition": {
        "ConditionDocumentAttributeKey": {},
        "Operator": {},
        "ConditionOnValue": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LambdaArn": {},
      "S3Bucket": {}
    },
    "RoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|RoleArn|object|false|none|none|
|Documents|object|true|none|none|
|CustomDocumentEnrichmentConfiguration|object|false|none|none|

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_ClearQuerySuggestionsRequest">ClearQuerySuggestionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclearquerysuggestionsrequest"></a>
<a id="schema_ClearQuerySuggestionsRequest"></a>
<a id="tocSclearquerysuggestionsrequest"></a>
<a id="tocsclearquerysuggestionsrequest"></a>

```json
{
  "IndexId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|

<h2 id="tocS_CreateAccessControlConfigurationResponse">CreateAccessControlConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccesscontrolconfigurationresponse"></a>
<a id="schema_CreateAccessControlConfigurationResponse"></a>
<a id="tocScreateaccesscontrolconfigurationresponse"></a>
<a id="tocscreateaccesscontrolconfigurationresponse"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_CreateAccessControlConfigurationRequest">CreateAccessControlConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccesscontrolconfigurationrequest"></a>
<a id="schema_CreateAccessControlConfigurationRequest"></a>
<a id="tocScreateaccesscontrolconfigurationrequest"></a>
<a id="tocscreateaccesscontrolconfigurationrequest"></a>

```json
{
  "IndexId": {},
  "Name": {},
  "Description": {},
  "AccessControlList": {},
  "HierarchicalAccessControlList": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|Name|object|true|none|none|
|Description|object|false|none|none|
|AccessControlList|object|false|none|none|
|HierarchicalAccessControlList|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_CreateDataSourceResponse">CreateDataSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasourceresponse"></a>
<a id="schema_CreateDataSourceResponse"></a>
<a id="tocScreatedatasourceresponse"></a>
<a id="tocscreatedatasourceresponse"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_CreateDataSourceRequest">CreateDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasourcerequest"></a>
<a id="schema_CreateDataSourceRequest"></a>
<a id="tocScreatedatasourcerequest"></a>
<a id="tocscreatedatasourcerequest"></a>

```json
{
  "Name": {},
  "IndexId": {},
  "Type": {},
  "Configuration": {
    "S3Configuration": {
      "BucketName": {},
      "InclusionPrefixes": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "DocumentsMetadataConfiguration": {
        "S3Prefix": {}
      },
      "AccessControlListConfiguration": {
        "KeyPath": {}
      }
    },
    "SharePointConfiguration": {
      "SharePointVersion": {},
      "Urls": {},
      "SecretArn": {},
      "CrawlAttachments": {},
      "UseChangeLog": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "FieldMappings": {},
      "DocumentTitleFieldName": {},
      "DisableLocalGroups": {},
      "SslCertificateS3Path": {
        "Bucket": {},
        "Key": {}
      },
      "AuthenticationType": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      }
    },
    "DatabaseConfiguration": {
      "DatabaseEngineType": {},
      "ConnectionConfiguration": {
        "DatabaseHost": {},
        "DatabasePort": {},
        "DatabaseName": {},
        "TableName": {},
        "SecretArn": {}
      },
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "ColumnConfiguration": {
        "DocumentIdColumnName": {},
        "DocumentDataColumnName": {},
        "DocumentTitleColumnName": {},
        "FieldMappings": {},
        "ChangeDetectingColumns": {}
      },
      "AclConfiguration": {
        "AllowedGroupsColumnName": {}
      },
      "SqlConfiguration": {
        "QueryIdentifiersEnclosingOption": {}
      }
    },
    "SalesforceConfiguration": {
      "ServerUrl": {},
      "SecretArn": {},
      "StandardObjectConfigurations": {},
      "KnowledgeArticleConfiguration": {
        "IncludedStates": {},
        "StandardKnowledgeArticleTypeConfiguration": {
          "DocumentDataFieldName": {},
          "DocumentTitleFieldName": {},
          "FieldMappings": {}
        },
        "CustomKnowledgeArticleTypeConfigurations": {}
      },
      "ChatterFeedConfiguration": {
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {},
        "IncludeFilterTypes": {}
      },
      "CrawlAttachments": {},
      "StandardObjectAttachmentConfiguration": {
        "DocumentTitleFieldName": {},
        "FieldMappings": {}
      },
      "IncludeAttachmentFilePatterns": {},
      "ExcludeAttachmentFilePatterns": {}
    },
    "OneDriveConfiguration": {
      "TenantDomain": {},
      "SecretArn": {},
      "OneDriveUsers": {
        "OneDriveUserList": {},
        "OneDriveUserS3Path": {
          "Bucket": {},
          "Key": {}
        }
      },
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {},
      "DisableLocalGroups": {}
    },
    "ServiceNowConfiguration": {
      "HostUrl": {},
      "SecretArn": {},
      "ServiceNowBuildVersion": {},
      "KnowledgeArticleConfiguration": {
        "CrawlAttachments": {},
        "IncludeAttachmentFilePatterns": {},
        "ExcludeAttachmentFilePatterns": {},
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {},
        "FilterQuery": {}
      },
      "ServiceCatalogConfiguration": {
        "CrawlAttachments": {},
        "IncludeAttachmentFilePatterns": {},
        "ExcludeAttachmentFilePatterns": {},
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {}
      },
      "AuthenticationType": {}
    },
    "ConfluenceConfiguration": {
      "ServerUrl": {},
      "SecretArn": {},
      "Version": {},
      "SpaceConfiguration": {
        "CrawlPersonalSpaces": {},
        "CrawlArchivedSpaces": {},
        "IncludeSpaces": {},
        "ExcludeSpaces": {},
        "SpaceFieldMappings": {}
      },
      "PageConfiguration": {
        "PageFieldMappings": {}
      },
      "BlogConfiguration": {
        "BlogFieldMappings": {}
      },
      "AttachmentConfiguration": {
        "CrawlAttachments": {},
        "AttachmentFieldMappings": {}
      },
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      },
      "AuthenticationType": {}
    },
    "GoogleDriveConfiguration": {
      "SecretArn": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {},
      "ExcludeMimeTypes": {},
      "ExcludeUserAccounts": {},
      "ExcludeSharedDrives": {}
    },
    "WebCrawlerConfiguration": {
      "Urls": {
        "SeedUrlConfiguration": {
          "SeedUrls": {},
          "WebCrawlerMode": {}
        },
        "SiteMapsConfiguration": {
          "SiteMaps": {}
        }
      },
      "CrawlDepth": {},
      "MaxLinksPerPage": {},
      "MaxContentSizePerPageInMegaBytes": {},
      "MaxUrlsPerMinuteCrawlRate": {},
      "UrlInclusionPatterns": {},
      "UrlExclusionPatterns": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      },
      "AuthenticationConfiguration": {
        "BasicAuthentication": {}
      }
    },
    "WorkDocsConfiguration": {
      "OrganizationId": {},
      "CrawlComments": {},
      "UseChangeLog": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "FsxConfiguration": {
      "FileSystemId": {},
      "FileSystemType": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "SecretArn": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "SlackConfiguration": {
      "TeamId": {},
      "SecretArn": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "SlackEntityList": {},
      "UseChangeLog": {},
      "CrawlBotMessage": {},
      "ExcludeArchived": {},
      "SinceCrawlDate": {},
      "LookBackPeriod": {},
      "PrivateChannelFilter": {},
      "PublicChannelFilter": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "BoxConfiguration": {
      "EnterpriseId": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "CrawlComments": {},
      "CrawlTasks": {},
      "CrawlWebLinks": {},
      "FileFieldMappings": {},
      "TaskFieldMappings": {},
      "CommentFieldMappings": {},
      "WebLinkFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "QuipConfiguration": {
      "Domain": {},
      "SecretArn": {},
      "CrawlFileComments": {},
      "CrawlChatRooms": {},
      "CrawlAttachments": {},
      "FolderIds": {},
      "ThreadFieldMappings": {},
      "MessageFieldMappings": {},
      "AttachmentFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "JiraConfiguration": {
      "JiraAccountUrl": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "Project": {},
      "IssueType": {},
      "Status": {},
      "IssueSubEntityFilter": {},
      "AttachmentFieldMappings": {},
      "CommentFieldMappings": {},
      "IssueFieldMappings": {},
      "ProjectFieldMappings": {},
      "WorkLogFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "GitHubConfiguration": {
      "SaaSConfiguration": {
        "OrganizationName": {},
        "HostUrl": {}
      },
      "OnPremiseConfiguration": {
        "HostUrl": {},
        "OrganizationName": {},
        "SslCertificateS3Path": {
          "Bucket": {},
          "Key": {}
        }
      },
      "Type": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "GitHubDocumentCrawlProperties": {
        "CrawlRepositoryDocuments": {},
        "CrawlIssue": {},
        "CrawlIssueComment": {},
        "CrawlIssueCommentAttachment": {},
        "CrawlPullRequest": {},
        "CrawlPullRequestComment": {},
        "CrawlPullRequestCommentAttachment": {}
      },
      "RepositoryFilter": {},
      "InclusionFolderNamePatterns": {},
      "InclusionFileTypePatterns": {},
      "InclusionFileNamePatterns": {},
      "ExclusionFolderNamePatterns": {},
      "ExclusionFileTypePatterns": {},
      "ExclusionFileNamePatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "GitHubRepositoryConfigurationFieldMappings": {},
      "GitHubCommitConfigurationFieldMappings": {},
      "GitHubIssueDocumentConfigurationFieldMappings": {},
      "GitHubIssueCommentConfigurationFieldMappings": {},
      "GitHubIssueAttachmentConfigurationFieldMappings": {},
      "GitHubPullRequestCommentConfigurationFieldMappings": {},
      "GitHubPullRequestDocumentConfigurationFieldMappings": {},
      "GitHubPullRequestDocumentAttachmentConfigurationFieldMappings": {}
    },
    "AlfrescoConfiguration": {
      "SiteUrl": {},
      "SiteId": {},
      "SecretArn": {},
      "SslCertificateS3Path": {
        "Bucket": {},
        "Key": {}
      },
      "CrawlSystemFolders": {},
      "CrawlComments": {},
      "EntityFilter": {},
      "DocumentLibraryFieldMappings": {},
      "BlogFieldMappings": {},
      "WikiFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "TemplateConfiguration": {
      "Template": {}
    }
  },
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "Description": {},
  "Schedule": {},
  "RoleArn": {},
  "Tags": {},
  "ClientToken": {},
  "LanguageCode": {},
  "CustomDocumentEnrichmentConfiguration": {
    "InlineConfigurations": {},
    "PreExtractionHookConfiguration": {
      "InvocationCondition": {
        "ConditionDocumentAttributeKey": {},
        "Operator": {},
        "ConditionOnValue": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LambdaArn": {},
      "S3Bucket": {}
    },
    "PostExtractionHookConfiguration": {
      "InvocationCondition": {
        "ConditionDocumentAttributeKey": {},
        "Operator": {},
        "ConditionOnValue": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LambdaArn": {},
      "S3Bucket": {}
    },
    "RoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|IndexId|object|true|none|none|
|Type|object|true|none|none|
|Configuration|object|false|none|none|
|VpcConfiguration|object|false|none|none|
|Description|object|false|none|none|
|Schedule|object|false|none|none|
|RoleArn|object|false|none|none|
|Tags|object|false|none|none|
|ClientToken|object|false|none|none|
|LanguageCode|object|false|none|none|
|CustomDocumentEnrichmentConfiguration|object|false|none|none|

<h2 id="tocS_CreateExperienceResponse">CreateExperienceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateexperienceresponse"></a>
<a id="schema_CreateExperienceResponse"></a>
<a id="tocScreateexperienceresponse"></a>
<a id="tocscreateexperienceresponse"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_CreateExperienceRequest">CreateExperienceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateexperiencerequest"></a>
<a id="schema_CreateExperienceRequest"></a>
<a id="tocScreateexperiencerequest"></a>
<a id="tocscreateexperiencerequest"></a>

```json
{
  "Name": {},
  "IndexId": {},
  "RoleArn": {},
  "Configuration": {
    "ContentSourceConfiguration": {
      "DataSourceIds": {},
      "FaqIds": {},
      "DirectPutContent": {}
    },
    "UserIdentityConfiguration": {
      "IdentityAttributeName": {}
    }
  },
  "Description": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|IndexId|object|true|none|none|
|RoleArn|object|false|none|none|
|Configuration|object|false|none|none|
|Description|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_CreateFaqResponse">CreateFaqResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefaqresponse"></a>
<a id="schema_CreateFaqResponse"></a>
<a id="tocScreatefaqresponse"></a>
<a id="tocscreatefaqresponse"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_CreateFaqRequest">CreateFaqRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefaqrequest"></a>
<a id="schema_CreateFaqRequest"></a>
<a id="tocScreatefaqrequest"></a>
<a id="tocscreatefaqrequest"></a>

```json
{
  "IndexId": {},
  "Name": {},
  "Description": {},
  "S3Path": {
    "Bucket": {},
    "Key": {}
  },
  "RoleArn": {},
  "Tags": {},
  "FileFormat": {},
  "ClientToken": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|Name|object|true|none|none|
|Description|object|false|none|none|
|S3Path|object|true|none|none|
|RoleArn|object|true|none|none|
|Tags|object|false|none|none|
|FileFormat|object|false|none|none|
|ClientToken|object|false|none|none|
|LanguageCode|object|false|none|none|

<h2 id="tocS_CreateFeaturedResultsSetResponse">CreateFeaturedResultsSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefeaturedresultssetresponse"></a>
<a id="schema_CreateFeaturedResultsSetResponse"></a>
<a id="tocScreatefeaturedresultssetresponse"></a>
<a id="tocscreatefeaturedresultssetresponse"></a>

```json
{
  "FeaturedResultsSet": {
    "FeaturedResultsSetId": {},
    "FeaturedResultsSetName": {},
    "Description": {},
    "Status": {},
    "QueryTexts": {},
    "FeaturedDocuments": {},
    "LastUpdatedTimestamp": {},
    "CreationTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FeaturedResultsSet|object|false|none|none|

<h2 id="tocS_CreateFeaturedResultsSetRequest">CreateFeaturedResultsSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefeaturedresultssetrequest"></a>
<a id="schema_CreateFeaturedResultsSetRequest"></a>
<a id="tocScreatefeaturedresultssetrequest"></a>
<a id="tocscreatefeaturedresultssetrequest"></a>

```json
{
  "IndexId": {},
  "FeaturedResultsSetName": {},
  "Description": {},
  "ClientToken": {},
  "Status": {},
  "QueryTexts": {},
  "FeaturedDocuments": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|FeaturedResultsSetName|object|true|none|none|
|Description|object|false|none|none|
|ClientToken|object|false|none|none|
|Status|object|false|none|none|
|QueryTexts|object|false|none|none|
|FeaturedDocuments|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_FeaturedResultsConflictException">FeaturedResultsConflictException</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedresultsconflictexception"></a>
<a id="schema_FeaturedResultsConflictException"></a>
<a id="tocSfeaturedresultsconflictexception"></a>
<a id="tocsfeaturedresultsconflictexception"></a>

```json
null
```

<h2 id="tocS_CreateIndexResponse">CreateIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateindexresponse"></a>
<a id="schema_CreateIndexResponse"></a>
<a id="tocScreateindexresponse"></a>
<a id="tocscreateindexresponse"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_CreateIndexRequest">CreateIndexRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateindexrequest"></a>
<a id="schema_CreateIndexRequest"></a>
<a id="tocScreateindexrequest"></a>
<a id="tocscreateindexrequest"></a>

```json
{
  "Name": {},
  "Edition": {},
  "RoleArn": {},
  "ServerSideEncryptionConfiguration": {
    "KmsKeyId": {}
  },
  "Description": {},
  "ClientToken": {},
  "Tags": {},
  "UserTokenConfigurations": {},
  "UserContextPolicy": {},
  "UserGroupResolutionConfiguration": {
    "UserGroupResolutionMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Edition|object|false|none|none|
|RoleArn|object|true|none|none|
|ServerSideEncryptionConfiguration|object|false|none|none|
|Description|object|false|none|none|
|ClientToken|object|false|none|none|
|Tags|object|false|none|none|
|UserTokenConfigurations|object|false|none|none|
|UserContextPolicy|object|false|none|none|
|UserGroupResolutionConfiguration|object|false|none|none|

<h2 id="tocS_CreateQuerySuggestionsBlockListResponse">CreateQuerySuggestionsBlockListResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatequerysuggestionsblocklistresponse"></a>
<a id="schema_CreateQuerySuggestionsBlockListResponse"></a>
<a id="tocScreatequerysuggestionsblocklistresponse"></a>
<a id="tocscreatequerysuggestionsblocklistresponse"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_CreateQuerySuggestionsBlockListRequest">CreateQuerySuggestionsBlockListRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatequerysuggestionsblocklistrequest"></a>
<a id="schema_CreateQuerySuggestionsBlockListRequest"></a>
<a id="tocScreatequerysuggestionsblocklistrequest"></a>
<a id="tocscreatequerysuggestionsblocklistrequest"></a>

```json
{
  "IndexId": {},
  "Name": {},
  "Description": {},
  "SourceS3Path": {
    "Bucket": {},
    "Key": {}
  },
  "ClientToken": {},
  "RoleArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|Name|object|true|none|none|
|Description|object|false|none|none|
|SourceS3Path|object|true|none|none|
|ClientToken|object|false|none|none|
|RoleArn|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateThesaurusResponse">CreateThesaurusResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatethesaurusresponse"></a>
<a id="schema_CreateThesaurusResponse"></a>
<a id="tocScreatethesaurusresponse"></a>
<a id="tocscreatethesaurusresponse"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_CreateThesaurusRequest">CreateThesaurusRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatethesaurusrequest"></a>
<a id="schema_CreateThesaurusRequest"></a>
<a id="tocScreatethesaurusrequest"></a>
<a id="tocscreatethesaurusrequest"></a>

```json
{
  "IndexId": {},
  "Name": {},
  "Description": {},
  "RoleArn": {},
  "Tags": {},
  "SourceS3Path": {
    "Bucket": {},
    "Key": {}
  },
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|Name|object|true|none|none|
|Description|object|false|none|none|
|RoleArn|object|true|none|none|
|Tags|object|false|none|none|
|SourceS3Path|object|true|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_DeleteAccessControlConfigurationResponse">DeleteAccessControlConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccesscontrolconfigurationresponse"></a>
<a id="schema_DeleteAccessControlConfigurationResponse"></a>
<a id="tocSdeleteaccesscontrolconfigurationresponse"></a>
<a id="tocsdeleteaccesscontrolconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAccessControlConfigurationRequest">DeleteAccessControlConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccesscontrolconfigurationrequest"></a>
<a id="schema_DeleteAccessControlConfigurationRequest"></a>
<a id="tocSdeleteaccesscontrolconfigurationrequest"></a>
<a id="tocsdeleteaccesscontrolconfigurationrequest"></a>

```json
{
  "IndexId": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|Id|object|true|none|none|

<h2 id="tocS_DeleteDataSourceRequest">DeleteDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasourcerequest"></a>
<a id="schema_DeleteDataSourceRequest"></a>
<a id="tocSdeletedatasourcerequest"></a>
<a id="tocsdeletedatasourcerequest"></a>

```json
{
  "Id": {},
  "IndexId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|

<h2 id="tocS_DeleteExperienceResponse">DeleteExperienceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteexperienceresponse"></a>
<a id="schema_DeleteExperienceResponse"></a>
<a id="tocSdeleteexperienceresponse"></a>
<a id="tocsdeleteexperienceresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteExperienceRequest">DeleteExperienceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteexperiencerequest"></a>
<a id="schema_DeleteExperienceRequest"></a>
<a id="tocSdeleteexperiencerequest"></a>
<a id="tocsdeleteexperiencerequest"></a>

```json
{
  "Id": {},
  "IndexId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|

<h2 id="tocS_DeleteFaqRequest">DeleteFaqRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefaqrequest"></a>
<a id="schema_DeleteFaqRequest"></a>
<a id="tocSdeletefaqrequest"></a>
<a id="tocsdeletefaqrequest"></a>

```json
{
  "Id": {},
  "IndexId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|

<h2 id="tocS_DeleteIndexRequest">DeleteIndexRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteindexrequest"></a>
<a id="schema_DeleteIndexRequest"></a>
<a id="tocSdeleteindexrequest"></a>
<a id="tocsdeleteindexrequest"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_DeletePrincipalMappingRequest">DeletePrincipalMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprincipalmappingrequest"></a>
<a id="schema_DeletePrincipalMappingRequest"></a>
<a id="tocSdeleteprincipalmappingrequest"></a>
<a id="tocsdeleteprincipalmappingrequest"></a>

```json
{
  "IndexId": {},
  "DataSourceId": {},
  "GroupId": {},
  "OrderingId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|DataSourceId|object|false|none|none|
|GroupId|object|true|none|none|
|OrderingId|object|false|none|none|

<h2 id="tocS_DeleteQuerySuggestionsBlockListRequest">DeleteQuerySuggestionsBlockListRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletequerysuggestionsblocklistrequest"></a>
<a id="schema_DeleteQuerySuggestionsBlockListRequest"></a>
<a id="tocSdeletequerysuggestionsblocklistrequest"></a>
<a id="tocsdeletequerysuggestionsblocklistrequest"></a>

```json
{
  "IndexId": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|Id|object|true|none|none|

<h2 id="tocS_DeleteThesaurusRequest">DeleteThesaurusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletethesaurusrequest"></a>
<a id="schema_DeleteThesaurusRequest"></a>
<a id="tocSdeletethesaurusrequest"></a>
<a id="tocsdeletethesaurusrequest"></a>

```json
{
  "Id": {},
  "IndexId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|

<h2 id="tocS_DescribeAccessControlConfigurationResponse">DescribeAccessControlConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccesscontrolconfigurationresponse"></a>
<a id="schema_DescribeAccessControlConfigurationResponse"></a>
<a id="tocSdescribeaccesscontrolconfigurationresponse"></a>
<a id="tocsdescribeaccesscontrolconfigurationresponse"></a>

```json
{
  "Name": {},
  "Description": {},
  "ErrorMessage": {},
  "AccessControlList": {},
  "HierarchicalAccessControlList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|ErrorMessage|object|false|none|none|
|AccessControlList|object|false|none|none|
|HierarchicalAccessControlList|object|false|none|none|

<h2 id="tocS_DescribeAccessControlConfigurationRequest">DescribeAccessControlConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccesscontrolconfigurationrequest"></a>
<a id="schema_DescribeAccessControlConfigurationRequest"></a>
<a id="tocSdescribeaccesscontrolconfigurationrequest"></a>
<a id="tocsdescribeaccesscontrolconfigurationrequest"></a>

```json
{
  "IndexId": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|Id|object|true|none|none|

<h2 id="tocS_DescribeDataSourceResponse">DescribeDataSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasourceresponse"></a>
<a id="schema_DescribeDataSourceResponse"></a>
<a id="tocSdescribedatasourceresponse"></a>
<a id="tocsdescribedatasourceresponse"></a>

```json
{
  "Id": {},
  "IndexId": {},
  "Name": {},
  "Type": {},
  "Configuration": {
    "S3Configuration": {
      "BucketName": {},
      "InclusionPrefixes": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "DocumentsMetadataConfiguration": {
        "S3Prefix": {}
      },
      "AccessControlListConfiguration": {
        "KeyPath": {}
      }
    },
    "SharePointConfiguration": {
      "SharePointVersion": {},
      "Urls": {},
      "SecretArn": {},
      "CrawlAttachments": {},
      "UseChangeLog": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "FieldMappings": {},
      "DocumentTitleFieldName": {},
      "DisableLocalGroups": {},
      "SslCertificateS3Path": {
        "Bucket": {},
        "Key": {}
      },
      "AuthenticationType": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      }
    },
    "DatabaseConfiguration": {
      "DatabaseEngineType": {},
      "ConnectionConfiguration": {
        "DatabaseHost": {},
        "DatabasePort": {},
        "DatabaseName": {},
        "TableName": {},
        "SecretArn": {}
      },
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "ColumnConfiguration": {
        "DocumentIdColumnName": {},
        "DocumentDataColumnName": {},
        "DocumentTitleColumnName": {},
        "FieldMappings": {},
        "ChangeDetectingColumns": {}
      },
      "AclConfiguration": {
        "AllowedGroupsColumnName": {}
      },
      "SqlConfiguration": {
        "QueryIdentifiersEnclosingOption": {}
      }
    },
    "SalesforceConfiguration": {
      "ServerUrl": {},
      "SecretArn": {},
      "StandardObjectConfigurations": {},
      "KnowledgeArticleConfiguration": {
        "IncludedStates": {},
        "StandardKnowledgeArticleTypeConfiguration": {
          "DocumentDataFieldName": {},
          "DocumentTitleFieldName": {},
          "FieldMappings": {}
        },
        "CustomKnowledgeArticleTypeConfigurations": {}
      },
      "ChatterFeedConfiguration": {
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {},
        "IncludeFilterTypes": {}
      },
      "CrawlAttachments": {},
      "StandardObjectAttachmentConfiguration": {
        "DocumentTitleFieldName": {},
        "FieldMappings": {}
      },
      "IncludeAttachmentFilePatterns": {},
      "ExcludeAttachmentFilePatterns": {}
    },
    "OneDriveConfiguration": {
      "TenantDomain": {},
      "SecretArn": {},
      "OneDriveUsers": {
        "OneDriveUserList": {},
        "OneDriveUserS3Path": {
          "Bucket": {},
          "Key": {}
        }
      },
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {},
      "DisableLocalGroups": {}
    },
    "ServiceNowConfiguration": {
      "HostUrl": {},
      "SecretArn": {},
      "ServiceNowBuildVersion": {},
      "KnowledgeArticleConfiguration": {
        "CrawlAttachments": {},
        "IncludeAttachmentFilePatterns": {},
        "ExcludeAttachmentFilePatterns": {},
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {},
        "FilterQuery": {}
      },
      "ServiceCatalogConfiguration": {
        "CrawlAttachments": {},
        "IncludeAttachmentFilePatterns": {},
        "ExcludeAttachmentFilePatterns": {},
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {}
      },
      "AuthenticationType": {}
    },
    "ConfluenceConfiguration": {
      "ServerUrl": {},
      "SecretArn": {},
      "Version": {},
      "SpaceConfiguration": {
        "CrawlPersonalSpaces": {},
        "CrawlArchivedSpaces": {},
        "IncludeSpaces": {},
        "ExcludeSpaces": {},
        "SpaceFieldMappings": {}
      },
      "PageConfiguration": {
        "PageFieldMappings": {}
      },
      "BlogConfiguration": {
        "BlogFieldMappings": {}
      },
      "AttachmentConfiguration": {
        "CrawlAttachments": {},
        "AttachmentFieldMappings": {}
      },
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      },
      "AuthenticationType": {}
    },
    "GoogleDriveConfiguration": {
      "SecretArn": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {},
      "ExcludeMimeTypes": {},
      "ExcludeUserAccounts": {},
      "ExcludeSharedDrives": {}
    },
    "WebCrawlerConfiguration": {
      "Urls": {
        "SeedUrlConfiguration": {
          "SeedUrls": {},
          "WebCrawlerMode": {}
        },
        "SiteMapsConfiguration": {
          "SiteMaps": {}
        }
      },
      "CrawlDepth": {},
      "MaxLinksPerPage": {},
      "MaxContentSizePerPageInMegaBytes": {},
      "MaxUrlsPerMinuteCrawlRate": {},
      "UrlInclusionPatterns": {},
      "UrlExclusionPatterns": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      },
      "AuthenticationConfiguration": {
        "BasicAuthentication": {}
      }
    },
    "WorkDocsConfiguration": {
      "OrganizationId": {},
      "CrawlComments": {},
      "UseChangeLog": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "FsxConfiguration": {
      "FileSystemId": {},
      "FileSystemType": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "SecretArn": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "SlackConfiguration": {
      "TeamId": {},
      "SecretArn": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "SlackEntityList": {},
      "UseChangeLog": {},
      "CrawlBotMessage": {},
      "ExcludeArchived": {},
      "SinceCrawlDate": {},
      "LookBackPeriod": {},
      "PrivateChannelFilter": {},
      "PublicChannelFilter": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "BoxConfiguration": {
      "EnterpriseId": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "CrawlComments": {},
      "CrawlTasks": {},
      "CrawlWebLinks": {},
      "FileFieldMappings": {},
      "TaskFieldMappings": {},
      "CommentFieldMappings": {},
      "WebLinkFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "QuipConfiguration": {
      "Domain": {},
      "SecretArn": {},
      "CrawlFileComments": {},
      "CrawlChatRooms": {},
      "CrawlAttachments": {},
      "FolderIds": {},
      "ThreadFieldMappings": {},
      "MessageFieldMappings": {},
      "AttachmentFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "JiraConfiguration": {
      "JiraAccountUrl": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "Project": {},
      "IssueType": {},
      "Status": {},
      "IssueSubEntityFilter": {},
      "AttachmentFieldMappings": {},
      "CommentFieldMappings": {},
      "IssueFieldMappings": {},
      "ProjectFieldMappings": {},
      "WorkLogFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "GitHubConfiguration": {
      "SaaSConfiguration": {
        "OrganizationName": {},
        "HostUrl": {}
      },
      "OnPremiseConfiguration": {
        "HostUrl": {},
        "OrganizationName": {},
        "SslCertificateS3Path": {
          "Bucket": {},
          "Key": {}
        }
      },
      "Type": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "GitHubDocumentCrawlProperties": {
        "CrawlRepositoryDocuments": {},
        "CrawlIssue": {},
        "CrawlIssueComment": {},
        "CrawlIssueCommentAttachment": {},
        "CrawlPullRequest": {},
        "CrawlPullRequestComment": {},
        "CrawlPullRequestCommentAttachment": {}
      },
      "RepositoryFilter": {},
      "InclusionFolderNamePatterns": {},
      "InclusionFileTypePatterns": {},
      "InclusionFileNamePatterns": {},
      "ExclusionFolderNamePatterns": {},
      "ExclusionFileTypePatterns": {},
      "ExclusionFileNamePatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "GitHubRepositoryConfigurationFieldMappings": {},
      "GitHubCommitConfigurationFieldMappings": {},
      "GitHubIssueDocumentConfigurationFieldMappings": {},
      "GitHubIssueCommentConfigurationFieldMappings": {},
      "GitHubIssueAttachmentConfigurationFieldMappings": {},
      "GitHubPullRequestCommentConfigurationFieldMappings": {},
      "GitHubPullRequestDocumentConfigurationFieldMappings": {},
      "GitHubPullRequestDocumentAttachmentConfigurationFieldMappings": {}
    },
    "AlfrescoConfiguration": {
      "SiteUrl": {},
      "SiteId": {},
      "SecretArn": {},
      "SslCertificateS3Path": {
        "Bucket": {},
        "Key": {}
      },
      "CrawlSystemFolders": {},
      "CrawlComments": {},
      "EntityFilter": {},
      "DocumentLibraryFieldMappings": {},
      "BlogFieldMappings": {},
      "WikiFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "TemplateConfiguration": {
      "Template": {}
    }
  },
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "CreatedAt": {},
  "UpdatedAt": {},
  "Description": {},
  "Status": {},
  "Schedule": {},
  "RoleArn": {},
  "ErrorMessage": {},
  "LanguageCode": {},
  "CustomDocumentEnrichmentConfiguration": {
    "InlineConfigurations": {},
    "PreExtractionHookConfiguration": {
      "InvocationCondition": {
        "ConditionDocumentAttributeKey": {},
        "Operator": {},
        "ConditionOnValue": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LambdaArn": {},
      "S3Bucket": {}
    },
    "PostExtractionHookConfiguration": {
      "InvocationCondition": {
        "ConditionDocumentAttributeKey": {},
        "Operator": {},
        "ConditionOnValue": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LambdaArn": {},
      "S3Bucket": {}
    },
    "RoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|IndexId|object|false|none|none|
|Name|object|false|none|none|
|Type|object|false|none|none|
|Configuration|object|false|none|none|
|VpcConfiguration|object|false|none|none|
|CreatedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|Schedule|object|false|none|none|
|RoleArn|object|false|none|none|
|ErrorMessage|object|false|none|none|
|LanguageCode|object|false|none|none|
|CustomDocumentEnrichmentConfiguration|object|false|none|none|

<h2 id="tocS_DescribeDataSourceRequest">DescribeDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasourcerequest"></a>
<a id="schema_DescribeDataSourceRequest"></a>
<a id="tocSdescribedatasourcerequest"></a>
<a id="tocsdescribedatasourcerequest"></a>

```json
{
  "Id": {},
  "IndexId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|

<h2 id="tocS_DescribeExperienceResponse">DescribeExperienceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexperienceresponse"></a>
<a id="schema_DescribeExperienceResponse"></a>
<a id="tocSdescribeexperienceresponse"></a>
<a id="tocsdescribeexperienceresponse"></a>

```json
{
  "Id": {},
  "IndexId": {},
  "Name": {},
  "Endpoints": {},
  "Configuration": {
    "ContentSourceConfiguration": {
      "DataSourceIds": {},
      "FaqIds": {},
      "DirectPutContent": {}
    },
    "UserIdentityConfiguration": {
      "IdentityAttributeName": {}
    }
  },
  "CreatedAt": {},
  "UpdatedAt": {},
  "Description": {},
  "Status": {},
  "RoleArn": {},
  "ErrorMessage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|IndexId|object|false|none|none|
|Name|object|false|none|none|
|Endpoints|object|false|none|none|
|Configuration|object|false|none|none|
|CreatedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|RoleArn|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_DescribeExperienceRequest">DescribeExperienceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexperiencerequest"></a>
<a id="schema_DescribeExperienceRequest"></a>
<a id="tocSdescribeexperiencerequest"></a>
<a id="tocsdescribeexperiencerequest"></a>

```json
{
  "Id": {},
  "IndexId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|

<h2 id="tocS_DescribeFaqResponse">DescribeFaqResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefaqresponse"></a>
<a id="schema_DescribeFaqResponse"></a>
<a id="tocSdescribefaqresponse"></a>
<a id="tocsdescribefaqresponse"></a>

```json
{
  "Id": {},
  "IndexId": {},
  "Name": {},
  "Description": {},
  "CreatedAt": {},
  "UpdatedAt": {},
  "S3Path": {
    "Bucket": {},
    "Key": {}
  },
  "Status": {},
  "RoleArn": {},
  "ErrorMessage": {},
  "FileFormat": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|IndexId|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|CreatedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|
|S3Path|[S3Path](#schemas3path)|false|none|Information required to find a specific file in an Amazon S3 bucket.|
|Status|object|false|none|none|
|RoleArn|object|false|none|none|
|ErrorMessage|object|false|none|none|
|FileFormat|object|false|none|none|
|LanguageCode|object|false|none|none|

<h2 id="tocS_DescribeFaqRequest">DescribeFaqRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefaqrequest"></a>
<a id="schema_DescribeFaqRequest"></a>
<a id="tocSdescribefaqrequest"></a>
<a id="tocsdescribefaqrequest"></a>

```json
{
  "Id": {},
  "IndexId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|

<h2 id="tocS_DescribeFeaturedResultsSetResponse">DescribeFeaturedResultsSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefeaturedresultssetresponse"></a>
<a id="schema_DescribeFeaturedResultsSetResponse"></a>
<a id="tocSdescribefeaturedresultssetresponse"></a>
<a id="tocsdescribefeaturedresultssetresponse"></a>

```json
{
  "FeaturedResultsSetId": {},
  "FeaturedResultsSetName": {},
  "Description": {},
  "Status": {},
  "QueryTexts": {},
  "FeaturedDocumentsWithMetadata": {},
  "FeaturedDocumentsMissing": {},
  "LastUpdatedTimestamp": {},
  "CreationTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FeaturedResultsSetId|object|false|none|none|
|FeaturedResultsSetName|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|QueryTexts|object|false|none|none|
|FeaturedDocumentsWithMetadata|object|false|none|none|
|FeaturedDocumentsMissing|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|CreationTimestamp|object|false|none|none|

<h2 id="tocS_DescribeFeaturedResultsSetRequest">DescribeFeaturedResultsSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefeaturedresultssetrequest"></a>
<a id="schema_DescribeFeaturedResultsSetRequest"></a>
<a id="tocSdescribefeaturedresultssetrequest"></a>
<a id="tocsdescribefeaturedresultssetrequest"></a>

```json
{
  "IndexId": {},
  "FeaturedResultsSetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|FeaturedResultsSetId|object|true|none|none|

<h2 id="tocS_DescribeIndexResponse">DescribeIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeindexresponse"></a>
<a id="schema_DescribeIndexResponse"></a>
<a id="tocSdescribeindexresponse"></a>
<a id="tocsdescribeindexresponse"></a>

```json
{
  "Name": {},
  "Id": {},
  "Edition": {},
  "RoleArn": {},
  "ServerSideEncryptionConfiguration": {
    "KmsKeyId": {}
  },
  "Status": {},
  "Description": {},
  "CreatedAt": {},
  "UpdatedAt": {},
  "DocumentMetadataConfigurations": {},
  "IndexStatistics": {
    "FaqStatistics": {
      "IndexedQuestionAnswersCount": {}
    },
    "TextDocumentStatistics": {
      "IndexedTextDocumentsCount": {},
      "IndexedTextBytes": {}
    }
  },
  "ErrorMessage": {},
  "CapacityUnits": {
    "StorageCapacityUnits": {},
    "QueryCapacityUnits": {}
  },
  "UserTokenConfigurations": {},
  "UserContextPolicy": {},
  "UserGroupResolutionConfiguration": {
    "UserGroupResolutionMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Id|object|false|none|none|
|Edition|object|false|none|none|
|RoleArn|object|false|none|none|
|ServerSideEncryptionConfiguration|object|false|none|none|
|Status|object|false|none|none|
|Description|object|false|none|none|
|CreatedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|
|DocumentMetadataConfigurations|object|false|none|none|
|IndexStatistics|object|false|none|none|
|ErrorMessage|object|false|none|none|
|CapacityUnits|object|false|none|none|
|UserTokenConfigurations|object|false|none|none|
|UserContextPolicy|object|false|none|none|
|UserGroupResolutionConfiguration|object|false|none|none|

<h2 id="tocS_DescribeIndexRequest">DescribeIndexRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeindexrequest"></a>
<a id="schema_DescribeIndexRequest"></a>
<a id="tocSdescribeindexrequest"></a>
<a id="tocsdescribeindexrequest"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_DescribePrincipalMappingResponse">DescribePrincipalMappingResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprincipalmappingresponse"></a>
<a id="schema_DescribePrincipalMappingResponse"></a>
<a id="tocSdescribeprincipalmappingresponse"></a>
<a id="tocsdescribeprincipalmappingresponse"></a>

```json
{
  "IndexId": {},
  "DataSourceId": {},
  "GroupId": {},
  "GroupOrderingIdSummaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|false|none|none|
|DataSourceId|object|false|none|none|
|GroupId|object|false|none|none|
|GroupOrderingIdSummaries|object|false|none|none|

<h2 id="tocS_DescribePrincipalMappingRequest">DescribePrincipalMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprincipalmappingrequest"></a>
<a id="schema_DescribePrincipalMappingRequest"></a>
<a id="tocSdescribeprincipalmappingrequest"></a>
<a id="tocsdescribeprincipalmappingrequest"></a>

```json
{
  "IndexId": {},
  "DataSourceId": {},
  "GroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|DataSourceId|object|false|none|none|
|GroupId|object|true|none|none|

<h2 id="tocS_DescribeQuerySuggestionsBlockListResponse">DescribeQuerySuggestionsBlockListResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribequerysuggestionsblocklistresponse"></a>
<a id="schema_DescribeQuerySuggestionsBlockListResponse"></a>
<a id="tocSdescribequerysuggestionsblocklistresponse"></a>
<a id="tocsdescribequerysuggestionsblocklistresponse"></a>

```json
{
  "IndexId": {},
  "Id": {},
  "Name": {},
  "Description": {},
  "Status": {},
  "ErrorMessage": {},
  "CreatedAt": {},
  "UpdatedAt": {},
  "SourceS3Path": {
    "Bucket": {},
    "Key": {}
  },
  "ItemCount": {},
  "FileSizeBytes": {},
  "RoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|ErrorMessage|object|false|none|none|
|CreatedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|
|SourceS3Path|object|false|none|none|
|ItemCount|object|false|none|none|
|FileSizeBytes|object|false|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_DescribeQuerySuggestionsBlockListRequest">DescribeQuerySuggestionsBlockListRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribequerysuggestionsblocklistrequest"></a>
<a id="schema_DescribeQuerySuggestionsBlockListRequest"></a>
<a id="tocSdescribequerysuggestionsblocklistrequest"></a>
<a id="tocsdescribequerysuggestionsblocklistrequest"></a>

```json
{
  "IndexId": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|Id|object|true|none|none|

<h2 id="tocS_DescribeQuerySuggestionsConfigResponse">DescribeQuerySuggestionsConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribequerysuggestionsconfigresponse"></a>
<a id="schema_DescribeQuerySuggestionsConfigResponse"></a>
<a id="tocSdescribequerysuggestionsconfigresponse"></a>
<a id="tocsdescribequerysuggestionsconfigresponse"></a>

```json
{
  "Mode": {},
  "Status": {},
  "QueryLogLookBackWindowInDays": {},
  "IncludeQueriesWithoutUserInformation": {},
  "MinimumNumberOfQueryingUsers": {},
  "MinimumQueryCount": {},
  "LastSuggestionsBuildTime": {},
  "LastClearTime": {},
  "TotalSuggestionsCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mode|object|false|none|none|
|Status|object|false|none|none|
|QueryLogLookBackWindowInDays|object|false|none|none|
|IncludeQueriesWithoutUserInformation|object|false|none|none|
|MinimumNumberOfQueryingUsers|object|false|none|none|
|MinimumQueryCount|object|false|none|none|
|LastSuggestionsBuildTime|object|false|none|none|
|LastClearTime|object|false|none|none|
|TotalSuggestionsCount|object|false|none|none|

<h2 id="tocS_DescribeQuerySuggestionsConfigRequest">DescribeQuerySuggestionsConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribequerysuggestionsconfigrequest"></a>
<a id="schema_DescribeQuerySuggestionsConfigRequest"></a>
<a id="tocSdescribequerysuggestionsconfigrequest"></a>
<a id="tocsdescribequerysuggestionsconfigrequest"></a>

```json
{
  "IndexId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|

<h2 id="tocS_DescribeThesaurusResponse">DescribeThesaurusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribethesaurusresponse"></a>
<a id="schema_DescribeThesaurusResponse"></a>
<a id="tocSdescribethesaurusresponse"></a>
<a id="tocsdescribethesaurusresponse"></a>

```json
{
  "Id": {},
  "IndexId": {},
  "Name": {},
  "Description": {},
  "Status": {},
  "ErrorMessage": {},
  "CreatedAt": {},
  "UpdatedAt": {},
  "RoleArn": {},
  "SourceS3Path": {
    "Bucket": {},
    "Key": {}
  },
  "FileSizeBytes": {},
  "TermCount": {},
  "SynonymRuleCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|IndexId|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|ErrorMessage|object|false|none|none|
|CreatedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|
|RoleArn|object|false|none|none|
|SourceS3Path|[S3Path](#schemas3path)|false|none|Information required to find a specific file in an Amazon S3 bucket.|
|FileSizeBytes|object|false|none|none|
|TermCount|object|false|none|none|
|SynonymRuleCount|object|false|none|none|

<h2 id="tocS_DescribeThesaurusRequest">DescribeThesaurusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribethesaurusrequest"></a>
<a id="schema_DescribeThesaurusRequest"></a>
<a id="tocSdescribethesaurusrequest"></a>
<a id="tocsdescribethesaurusrequest"></a>

```json
{
  "Id": {},
  "IndexId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|

<h2 id="tocS_DisassociateEntitiesFromExperienceResponse">DisassociateEntitiesFromExperienceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateentitiesfromexperienceresponse"></a>
<a id="schema_DisassociateEntitiesFromExperienceResponse"></a>
<a id="tocSdisassociateentitiesfromexperienceresponse"></a>
<a id="tocsdisassociateentitiesfromexperienceresponse"></a>

```json
{
  "FailedEntityList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedEntityList|object|false|none|none|

<h2 id="tocS_DisassociateEntitiesFromExperienceRequest">DisassociateEntitiesFromExperienceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateentitiesfromexperiencerequest"></a>
<a id="schema_DisassociateEntitiesFromExperienceRequest"></a>
<a id="tocSdisassociateentitiesfromexperiencerequest"></a>
<a id="tocsdisassociateentitiesfromexperiencerequest"></a>

```json
{
  "Id": {},
  "IndexId": {},
  "EntityList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|
|EntityList|object|true|none|none|

<h2 id="tocS_DisassociatePersonasFromEntitiesResponse">DisassociatePersonasFromEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatepersonasfromentitiesresponse"></a>
<a id="schema_DisassociatePersonasFromEntitiesResponse"></a>
<a id="tocSdisassociatepersonasfromentitiesresponse"></a>
<a id="tocsdisassociatepersonasfromentitiesresponse"></a>

```json
{
  "FailedEntityList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedEntityList|object|false|none|none|

<h2 id="tocS_DisassociatePersonasFromEntitiesRequest">DisassociatePersonasFromEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatepersonasfromentitiesrequest"></a>
<a id="schema_DisassociatePersonasFromEntitiesRequest"></a>
<a id="tocSdisassociatepersonasfromentitiesrequest"></a>
<a id="tocsdisassociatepersonasfromentitiesrequest"></a>

```json
{
  "Id": {},
  "IndexId": {},
  "EntityIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|
|EntityIds|object|true|none|none|

<h2 id="tocS_GetQuerySuggestionsResponse">GetQuerySuggestionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetquerysuggestionsresponse"></a>
<a id="schema_GetQuerySuggestionsResponse"></a>
<a id="tocSgetquerysuggestionsresponse"></a>
<a id="tocsgetquerysuggestionsresponse"></a>

```json
{
  "QuerySuggestionsId": {},
  "Suggestions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuerySuggestionsId|object|false|none|none|
|Suggestions|object|false|none|none|

<h2 id="tocS_GetQuerySuggestionsRequest">GetQuerySuggestionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetquerysuggestionsrequest"></a>
<a id="schema_GetQuerySuggestionsRequest"></a>
<a id="tocSgetquerysuggestionsrequest"></a>
<a id="tocsgetquerysuggestionsrequest"></a>

```json
{
  "IndexId": {},
  "QueryText": {},
  "MaxSuggestionsCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|QueryText|object|true|none|none|
|MaxSuggestionsCount|object|false|none|none|

<h2 id="tocS_GetSnapshotsResponse">GetSnapshotsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsnapshotsresponse"></a>
<a id="schema_GetSnapshotsResponse"></a>
<a id="tocSgetsnapshotsresponse"></a>
<a id="tocsgetsnapshotsresponse"></a>

```json
{
  "SnapShotTimeFilter": {
    "StartTime": {},
    "EndTime": {}
  },
  "SnapshotsDataHeader": {},
  "SnapshotsData": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapShotTimeFilter|object|false|none|none|
|SnapshotsDataHeader|object|false|none|none|
|SnapshotsData|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetSnapshotsRequest">GetSnapshotsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsnapshotsrequest"></a>
<a id="schema_GetSnapshotsRequest"></a>
<a id="tocSgetsnapshotsrequest"></a>
<a id="tocsgetsnapshotsrequest"></a>

```json
{
  "IndexId": {},
  "Interval": {},
  "MetricType": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|Interval|object|true|none|none|
|MetricType|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_ListAccessControlConfigurationsResponse">ListAccessControlConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccesscontrolconfigurationsresponse"></a>
<a id="schema_ListAccessControlConfigurationsResponse"></a>
<a id="tocSlistaccesscontrolconfigurationsresponse"></a>
<a id="tocslistaccesscontrolconfigurationsresponse"></a>

```json
{
  "NextToken": {},
  "AccessControlConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|AccessControlConfigurations|object|true|none|none|

<h2 id="tocS_ListAccessControlConfigurationsRequest">ListAccessControlConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccesscontrolconfigurationsrequest"></a>
<a id="schema_ListAccessControlConfigurationsRequest"></a>
<a id="tocSlistaccesscontrolconfigurationsrequest"></a>
<a id="tocslistaccesscontrolconfigurationsrequest"></a>

```json
{
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListDataSourceSyncJobsResponse">ListDataSourceSyncJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasourcesyncjobsresponse"></a>
<a id="schema_ListDataSourceSyncJobsResponse"></a>
<a id="tocSlistdatasourcesyncjobsresponse"></a>
<a id="tocslistdatasourcesyncjobsresponse"></a>

```json
{
  "History": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|History|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDataSourceSyncJobsRequest">ListDataSourceSyncJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasourcesyncjobsrequest"></a>
<a id="schema_ListDataSourceSyncJobsRequest"></a>
<a id="tocSlistdatasourcesyncjobsrequest"></a>
<a id="tocslistdatasourcesyncjobsrequest"></a>

```json
{
  "Id": {},
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {},
  "StartTimeFilter": {
    "StartTime": {},
    "EndTime": {}
  },
  "StatusFilter": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|StartTimeFilter|object|false|none|none|
|StatusFilter|object|false|none|none|

<h2 id="tocS_ListDataSourcesResponse">ListDataSourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasourcesresponse"></a>
<a id="schema_ListDataSourcesResponse"></a>
<a id="tocSlistdatasourcesresponse"></a>
<a id="tocslistdatasourcesresponse"></a>

```json
{
  "SummaryItems": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SummaryItems|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDataSourcesRequest">ListDataSourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasourcesrequest"></a>
<a id="schema_ListDataSourcesRequest"></a>
<a id="tocSlistdatasourcesrequest"></a>
<a id="tocslistdatasourcesrequest"></a>

```json
{
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListEntityPersonasResponse">ListEntityPersonasResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistentitypersonasresponse"></a>
<a id="schema_ListEntityPersonasResponse"></a>
<a id="tocSlistentitypersonasresponse"></a>
<a id="tocslistentitypersonasresponse"></a>

```json
{
  "SummaryItems": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SummaryItems|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEntityPersonasRequest">ListEntityPersonasRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistentitypersonasrequest"></a>
<a id="schema_ListEntityPersonasRequest"></a>
<a id="tocSlistentitypersonasrequest"></a>
<a id="tocslistentitypersonasrequest"></a>

```json
{
  "Id": {},
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListExperienceEntitiesResponse">ListExperienceEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistexperienceentitiesresponse"></a>
<a id="schema_ListExperienceEntitiesResponse"></a>
<a id="tocSlistexperienceentitiesresponse"></a>
<a id="tocslistexperienceentitiesresponse"></a>

```json
{
  "SummaryItems": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SummaryItems|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListExperienceEntitiesRequest">ListExperienceEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistexperienceentitiesrequest"></a>
<a id="schema_ListExperienceEntitiesRequest"></a>
<a id="tocSlistexperienceentitiesrequest"></a>
<a id="tocslistexperienceentitiesrequest"></a>

```json
{
  "Id": {},
  "IndexId": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListExperiencesResponse">ListExperiencesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistexperiencesresponse"></a>
<a id="schema_ListExperiencesResponse"></a>
<a id="tocSlistexperiencesresponse"></a>
<a id="tocslistexperiencesresponse"></a>

```json
{
  "SummaryItems": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SummaryItems|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListExperiencesRequest">ListExperiencesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistexperiencesrequest"></a>
<a id="schema_ListExperiencesRequest"></a>
<a id="tocSlistexperiencesrequest"></a>
<a id="tocslistexperiencesrequest"></a>

```json
{
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListFaqsResponse">ListFaqsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfaqsresponse"></a>
<a id="schema_ListFaqsResponse"></a>
<a id="tocSlistfaqsresponse"></a>
<a id="tocslistfaqsresponse"></a>

```json
{
  "NextToken": {},
  "FaqSummaryItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|FaqSummaryItems|object|false|none|none|

<h2 id="tocS_ListFaqsRequest">ListFaqsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfaqsrequest"></a>
<a id="schema_ListFaqsRequest"></a>
<a id="tocSlistfaqsrequest"></a>
<a id="tocslistfaqsrequest"></a>

```json
{
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListFeaturedResultsSetsResponse">ListFeaturedResultsSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfeaturedresultssetsresponse"></a>
<a id="schema_ListFeaturedResultsSetsResponse"></a>
<a id="tocSlistfeaturedresultssetsresponse"></a>
<a id="tocslistfeaturedresultssetsresponse"></a>

```json
{
  "FeaturedResultsSetSummaryItems": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FeaturedResultsSetSummaryItems|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFeaturedResultsSetsRequest">ListFeaturedResultsSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfeaturedresultssetsrequest"></a>
<a id="schema_ListFeaturedResultsSetsRequest"></a>
<a id="tocSlistfeaturedresultssetsrequest"></a>
<a id="tocslistfeaturedresultssetsrequest"></a>

```json
{
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListGroupsOlderThanOrderingIdResponse">ListGroupsOlderThanOrderingIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupsolderthanorderingidresponse"></a>
<a id="schema_ListGroupsOlderThanOrderingIdResponse"></a>
<a id="tocSlistgroupsolderthanorderingidresponse"></a>
<a id="tocslistgroupsolderthanorderingidresponse"></a>

```json
{
  "GroupsSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupsSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGroupsOlderThanOrderingIdRequest">ListGroupsOlderThanOrderingIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupsolderthanorderingidrequest"></a>
<a id="schema_ListGroupsOlderThanOrderingIdRequest"></a>
<a id="tocSlistgroupsolderthanorderingidrequest"></a>
<a id="tocslistgroupsolderthanorderingidrequest"></a>

```json
{
  "IndexId": {},
  "DataSourceId": {},
  "OrderingId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|DataSourceId|object|false|none|none|
|OrderingId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListIndicesResponse">ListIndicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistindicesresponse"></a>
<a id="schema_ListIndicesResponse"></a>
<a id="tocSlistindicesresponse"></a>
<a id="tocslistindicesresponse"></a>

```json
{
  "IndexConfigurationSummaryItems": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexConfigurationSummaryItems|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListIndicesRequest">ListIndicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistindicesrequest"></a>
<a id="schema_ListIndicesRequest"></a>
<a id="tocSlistindicesrequest"></a>
<a id="tocslistindicesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListQuerySuggestionsBlockListsResponse">ListQuerySuggestionsBlockListsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistquerysuggestionsblocklistsresponse"></a>
<a id="schema_ListQuerySuggestionsBlockListsResponse"></a>
<a id="tocSlistquerysuggestionsblocklistsresponse"></a>
<a id="tocslistquerysuggestionsblocklistsresponse"></a>

```json
{
  "BlockListSummaryItems": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockListSummaryItems|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListQuerySuggestionsBlockListsRequest">ListQuerySuggestionsBlockListsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistquerysuggestionsblocklistsrequest"></a>
<a id="schema_ListQuerySuggestionsBlockListsRequest"></a>
<a id="tocSlistquerysuggestionsblocklistsrequest"></a>
<a id="tocslistquerysuggestionsblocklistsrequest"></a>

```json
{
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

<h2 id="tocS_ResourceUnavailableException">ResourceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceunavailableexception"></a>
<a id="schema_ResourceUnavailableException"></a>
<a id="tocSresourceunavailableexception"></a>
<a id="tocsresourceunavailableexception"></a>

```json
null
```

<h2 id="tocS_ListThesauriResponse">ListThesauriResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistthesauriresponse"></a>
<a id="schema_ListThesauriResponse"></a>
<a id="tocSlistthesauriresponse"></a>
<a id="tocslistthesauriresponse"></a>

```json
{
  "NextToken": {},
  "ThesaurusSummaryItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|ThesaurusSummaryItems|object|false|none|none|

<h2 id="tocS_ListThesauriRequest">ListThesauriRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistthesaurirequest"></a>
<a id="schema_ListThesauriRequest"></a>
<a id="tocSlistthesaurirequest"></a>
<a id="tocslistthesaurirequest"></a>

```json
{
  "IndexId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_PutPrincipalMappingRequest">PutPrincipalMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputprincipalmappingrequest"></a>
<a id="schema_PutPrincipalMappingRequest"></a>
<a id="tocSputprincipalmappingrequest"></a>
<a id="tocsputprincipalmappingrequest"></a>

```json
{
  "IndexId": {},
  "DataSourceId": {},
  "GroupId": {},
  "GroupMembers": {
    "MemberGroups": {},
    "MemberUsers": {},
    "S3PathforGroupMembers": {
      "Bucket": {},
      "Key": {}
    }
  },
  "OrderingId": {},
  "RoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|DataSourceId|object|false|none|none|
|GroupId|object|true|none|none|
|GroupMembers|object|true|none|none|
|OrderingId|object|false|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_QueryResult">QueryResult</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresult"></a>
<a id="schema_QueryResult"></a>
<a id="tocSqueryresult"></a>
<a id="tocsqueryresult"></a>

```json
{
  "QueryId": {},
  "ResultItems": {},
  "FacetResults": {},
  "TotalNumberOfResults": {},
  "Warnings": {},
  "SpellCorrectedQueries": {},
  "FeaturedResultsItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryId|object|false|none|none|
|ResultItems|object|false|none|none|
|FacetResults|object|false|none|none|
|TotalNumberOfResults|object|false|none|none|
|Warnings|object|false|none|none|
|SpellCorrectedQueries|object|false|none|none|
|FeaturedResultsItems|object|false|none|none|

<h2 id="tocS_QueryRequest">QueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrequest"></a>
<a id="schema_QueryRequest"></a>
<a id="tocSqueryrequest"></a>
<a id="tocsqueryrequest"></a>

```json
{
  "IndexId": {},
  "QueryText": {},
  "AttributeFilter": {
    "AndAllFilters": {},
    "OrAllFilters": {},
    "NotFilter": {},
    "EqualsTo": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "ContainsAll": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "ContainsAny": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "GreaterThan": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "GreaterThanOrEquals": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "LessThan": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "LessThanOrEquals": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    }
  },
  "Facets": {},
  "RequestedDocumentAttributes": {},
  "QueryResultTypeFilter": {},
  "DocumentRelevanceOverrideConfigurations": {},
  "PageNumber": {},
  "PageSize": {},
  "SortingConfiguration": {
    "DocumentAttributeKey": {},
    "SortOrder": {}
  },
  "UserContext": {
    "Token": {},
    "UserId": {},
    "Groups": {},
    "DataSourceGroups": {}
  },
  "VisitorId": {},
  "SpellCorrectionConfiguration": {
    "IncludeQuerySpellCheckSuggestions": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|QueryText|object|false|none|none|
|AttributeFilter|object|false|none|none|
|Facets|object|false|none|none|
|RequestedDocumentAttributes|object|false|none|none|
|QueryResultTypeFilter|object|false|none|none|
|DocumentRelevanceOverrideConfigurations|object|false|none|none|
|PageNumber|object|false|none|none|
|PageSize|object|false|none|none|
|SortingConfiguration|object|false|none|none|
|UserContext|object|false|none|none|
|VisitorId|object|false|none|none|
|SpellCorrectionConfiguration|object|false|none|none|

<h2 id="tocS_StartDataSourceSyncJobResponse">StartDataSourceSyncJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartdatasourcesyncjobresponse"></a>
<a id="schema_StartDataSourceSyncJobResponse"></a>
<a id="tocSstartdatasourcesyncjobresponse"></a>
<a id="tocsstartdatasourcesyncjobresponse"></a>

```json
{
  "ExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExecutionId|object|false|none|none|

<h2 id="tocS_StartDataSourceSyncJobRequest">StartDataSourceSyncJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartdatasourcesyncjobrequest"></a>
<a id="schema_StartDataSourceSyncJobRequest"></a>
<a id="tocSstartdatasourcesyncjobrequest"></a>
<a id="tocsstartdatasourcesyncjobrequest"></a>

```json
{
  "Id": {},
  "IndexId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_StopDataSourceSyncJobRequest">StopDataSourceSyncJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopdatasourcesyncjobrequest"></a>
<a id="schema_StopDataSourceSyncJobRequest"></a>
<a id="tocSstopdatasourcesyncjobrequest"></a>
<a id="tocsstopdatasourcesyncjobrequest"></a>

```json
{
  "Id": {},
  "IndexId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|IndexId|object|true|none|none|

<h2 id="tocS_SubmitFeedbackRequest">SubmitFeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubmitfeedbackrequest"></a>
<a id="schema_SubmitFeedbackRequest"></a>
<a id="tocSsubmitfeedbackrequest"></a>
<a id="tocssubmitfeedbackrequest"></a>

```json
{
  "IndexId": {},
  "QueryId": {},
  "ClickFeedbackItems": {},
  "RelevanceFeedbackItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|QueryId|object|true|none|none|
|ClickFeedbackItems|object|false|none|none|
|RelevanceFeedbackItems|object|false|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateAccessControlConfigurationResponse">UpdateAccessControlConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccesscontrolconfigurationresponse"></a>
<a id="schema_UpdateAccessControlConfigurationResponse"></a>
<a id="tocSupdateaccesscontrolconfigurationresponse"></a>
<a id="tocsupdateaccesscontrolconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateAccessControlConfigurationRequest">UpdateAccessControlConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccesscontrolconfigurationrequest"></a>
<a id="schema_UpdateAccessControlConfigurationRequest"></a>
<a id="tocSupdateaccesscontrolconfigurationrequest"></a>
<a id="tocsupdateaccesscontrolconfigurationrequest"></a>

```json
{
  "IndexId": {},
  "Id": {},
  "Name": {},
  "Description": {},
  "AccessControlList": {},
  "HierarchicalAccessControlList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|Id|object|true|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|AccessControlList|object|false|none|none|
|HierarchicalAccessControlList|object|false|none|none|

<h2 id="tocS_UpdateDataSourceRequest">UpdateDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasourcerequest"></a>
<a id="schema_UpdateDataSourceRequest"></a>
<a id="tocSupdatedatasourcerequest"></a>
<a id="tocsupdatedatasourcerequest"></a>

```json
{
  "Id": {},
  "Name": {},
  "IndexId": {},
  "Configuration": {
    "S3Configuration": {
      "BucketName": {},
      "InclusionPrefixes": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "DocumentsMetadataConfiguration": {
        "S3Prefix": {}
      },
      "AccessControlListConfiguration": {
        "KeyPath": {}
      }
    },
    "SharePointConfiguration": {
      "SharePointVersion": {},
      "Urls": {},
      "SecretArn": {},
      "CrawlAttachments": {},
      "UseChangeLog": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "FieldMappings": {},
      "DocumentTitleFieldName": {},
      "DisableLocalGroups": {},
      "SslCertificateS3Path": {
        "Bucket": {},
        "Key": {}
      },
      "AuthenticationType": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      }
    },
    "DatabaseConfiguration": {
      "DatabaseEngineType": {},
      "ConnectionConfiguration": {
        "DatabaseHost": {},
        "DatabasePort": {},
        "DatabaseName": {},
        "TableName": {},
        "SecretArn": {}
      },
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "ColumnConfiguration": {
        "DocumentIdColumnName": {},
        "DocumentDataColumnName": {},
        "DocumentTitleColumnName": {},
        "FieldMappings": {},
        "ChangeDetectingColumns": {}
      },
      "AclConfiguration": {
        "AllowedGroupsColumnName": {}
      },
      "SqlConfiguration": {
        "QueryIdentifiersEnclosingOption": {}
      }
    },
    "SalesforceConfiguration": {
      "ServerUrl": {},
      "SecretArn": {},
      "StandardObjectConfigurations": {},
      "KnowledgeArticleConfiguration": {
        "IncludedStates": {},
        "StandardKnowledgeArticleTypeConfiguration": {
          "DocumentDataFieldName": {},
          "DocumentTitleFieldName": {},
          "FieldMappings": {}
        },
        "CustomKnowledgeArticleTypeConfigurations": {}
      },
      "ChatterFeedConfiguration": {
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {},
        "IncludeFilterTypes": {}
      },
      "CrawlAttachments": {},
      "StandardObjectAttachmentConfiguration": {
        "DocumentTitleFieldName": {},
        "FieldMappings": {}
      },
      "IncludeAttachmentFilePatterns": {},
      "ExcludeAttachmentFilePatterns": {}
    },
    "OneDriveConfiguration": {
      "TenantDomain": {},
      "SecretArn": {},
      "OneDriveUsers": {
        "OneDriveUserList": {},
        "OneDriveUserS3Path": {
          "Bucket": {},
          "Key": {}
        }
      },
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {},
      "DisableLocalGroups": {}
    },
    "ServiceNowConfiguration": {
      "HostUrl": {},
      "SecretArn": {},
      "ServiceNowBuildVersion": {},
      "KnowledgeArticleConfiguration": {
        "CrawlAttachments": {},
        "IncludeAttachmentFilePatterns": {},
        "ExcludeAttachmentFilePatterns": {},
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {},
        "FilterQuery": {}
      },
      "ServiceCatalogConfiguration": {
        "CrawlAttachments": {},
        "IncludeAttachmentFilePatterns": {},
        "ExcludeAttachmentFilePatterns": {},
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {}
      },
      "AuthenticationType": {}
    },
    "ConfluenceConfiguration": {
      "ServerUrl": {},
      "SecretArn": {},
      "Version": {},
      "SpaceConfiguration": {
        "CrawlPersonalSpaces": {},
        "CrawlArchivedSpaces": {},
        "IncludeSpaces": {},
        "ExcludeSpaces": {},
        "SpaceFieldMappings": {}
      },
      "PageConfiguration": {
        "PageFieldMappings": {}
      },
      "BlogConfiguration": {
        "BlogFieldMappings": {}
      },
      "AttachmentConfiguration": {
        "CrawlAttachments": {},
        "AttachmentFieldMappings": {}
      },
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      },
      "AuthenticationType": {}
    },
    "GoogleDriveConfiguration": {
      "SecretArn": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {},
      "ExcludeMimeTypes": {},
      "ExcludeUserAccounts": {},
      "ExcludeSharedDrives": {}
    },
    "WebCrawlerConfiguration": {
      "Urls": {
        "SeedUrlConfiguration": {
          "SeedUrls": {},
          "WebCrawlerMode": {}
        },
        "SiteMapsConfiguration": {
          "SiteMaps": {}
        }
      },
      "CrawlDepth": {},
      "MaxLinksPerPage": {},
      "MaxContentSizePerPageInMegaBytes": {},
      "MaxUrlsPerMinuteCrawlRate": {},
      "UrlInclusionPatterns": {},
      "UrlExclusionPatterns": {},
      "ProxyConfiguration": {
        "Host": {},
        "Port": {},
        "Credentials": {}
      },
      "AuthenticationConfiguration": {
        "BasicAuthentication": {}
      }
    },
    "WorkDocsConfiguration": {
      "OrganizationId": {},
      "CrawlComments": {},
      "UseChangeLog": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "FsxConfiguration": {
      "FileSystemId": {},
      "FileSystemType": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "SecretArn": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "SlackConfiguration": {
      "TeamId": {},
      "SecretArn": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "SlackEntityList": {},
      "UseChangeLog": {},
      "CrawlBotMessage": {},
      "ExcludeArchived": {},
      "SinceCrawlDate": {},
      "LookBackPeriod": {},
      "PrivateChannelFilter": {},
      "PublicChannelFilter": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "FieldMappings": {}
    },
    "BoxConfiguration": {
      "EnterpriseId": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "CrawlComments": {},
      "CrawlTasks": {},
      "CrawlWebLinks": {},
      "FileFieldMappings": {},
      "TaskFieldMappings": {},
      "CommentFieldMappings": {},
      "WebLinkFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "QuipConfiguration": {
      "Domain": {},
      "SecretArn": {},
      "CrawlFileComments": {},
      "CrawlChatRooms": {},
      "CrawlAttachments": {},
      "FolderIds": {},
      "ThreadFieldMappings": {},
      "MessageFieldMappings": {},
      "AttachmentFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "JiraConfiguration": {
      "JiraAccountUrl": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "Project": {},
      "IssueType": {},
      "Status": {},
      "IssueSubEntityFilter": {},
      "AttachmentFieldMappings": {},
      "CommentFieldMappings": {},
      "IssueFieldMappings": {},
      "ProjectFieldMappings": {},
      "WorkLogFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "GitHubConfiguration": {
      "SaaSConfiguration": {
        "OrganizationName": {},
        "HostUrl": {}
      },
      "OnPremiseConfiguration": {
        "HostUrl": {},
        "OrganizationName": {},
        "SslCertificateS3Path": {
          "Bucket": {},
          "Key": {}
        }
      },
      "Type": {},
      "SecretArn": {},
      "UseChangeLog": {},
      "GitHubDocumentCrawlProperties": {
        "CrawlRepositoryDocuments": {},
        "CrawlIssue": {},
        "CrawlIssueComment": {},
        "CrawlIssueCommentAttachment": {},
        "CrawlPullRequest": {},
        "CrawlPullRequestComment": {},
        "CrawlPullRequestCommentAttachment": {}
      },
      "RepositoryFilter": {},
      "InclusionFolderNamePatterns": {},
      "InclusionFileTypePatterns": {},
      "InclusionFileNamePatterns": {},
      "ExclusionFolderNamePatterns": {},
      "ExclusionFileTypePatterns": {},
      "ExclusionFileNamePatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      },
      "GitHubRepositoryConfigurationFieldMappings": {},
      "GitHubCommitConfigurationFieldMappings": {},
      "GitHubIssueDocumentConfigurationFieldMappings": {},
      "GitHubIssueCommentConfigurationFieldMappings": {},
      "GitHubIssueAttachmentConfigurationFieldMappings": {},
      "GitHubPullRequestCommentConfigurationFieldMappings": {},
      "GitHubPullRequestDocumentConfigurationFieldMappings": {},
      "GitHubPullRequestDocumentAttachmentConfigurationFieldMappings": {}
    },
    "AlfrescoConfiguration": {
      "SiteUrl": {},
      "SiteId": {},
      "SecretArn": {},
      "SslCertificateS3Path": {
        "Bucket": {},
        "Key": {}
      },
      "CrawlSystemFolders": {},
      "CrawlComments": {},
      "EntityFilter": {},
      "DocumentLibraryFieldMappings": {},
      "BlogFieldMappings": {},
      "WikiFieldMappings": {},
      "InclusionPatterns": {},
      "ExclusionPatterns": {},
      "VpcConfiguration": {
        "SubnetIds": {},
        "SecurityGroupIds": {}
      }
    },
    "TemplateConfiguration": {
      "Template": {}
    }
  },
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "Description": {},
  "Schedule": {},
  "RoleArn": {},
  "LanguageCode": {},
  "CustomDocumentEnrichmentConfiguration": {
    "InlineConfigurations": {},
    "PreExtractionHookConfiguration": {
      "InvocationCondition": {
        "ConditionDocumentAttributeKey": {},
        "Operator": {},
        "ConditionOnValue": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LambdaArn": {},
      "S3Bucket": {}
    },
    "PostExtractionHookConfiguration": {
      "InvocationCondition": {
        "ConditionDocumentAttributeKey": {},
        "Operator": {},
        "ConditionOnValue": {
          "StringValue": {},
          "StringListValue": {},
          "LongValue": {},
          "DateValue": {}
        }
      },
      "LambdaArn": {},
      "S3Bucket": {}
    },
    "RoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Name|object|false|none|none|
|IndexId|object|true|none|none|
|Configuration|object|false|none|none|
|VpcConfiguration|object|false|none|none|
|Description|object|false|none|none|
|Schedule|object|false|none|none|
|RoleArn|object|false|none|none|
|LanguageCode|object|false|none|none|
|CustomDocumentEnrichmentConfiguration|object|false|none|none|

<h2 id="tocS_UpdateExperienceRequest">UpdateExperienceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateexperiencerequest"></a>
<a id="schema_UpdateExperienceRequest"></a>
<a id="tocSupdateexperiencerequest"></a>
<a id="tocsupdateexperiencerequest"></a>

```json
{
  "Id": {},
  "Name": {},
  "IndexId": {},
  "RoleArn": {},
  "Configuration": {
    "ContentSourceConfiguration": {
      "DataSourceIds": {},
      "FaqIds": {},
      "DirectPutContent": {}
    },
    "UserIdentityConfiguration": {
      "IdentityAttributeName": {}
    }
  },
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Name|object|false|none|none|
|IndexId|object|true|none|none|
|RoleArn|object|false|none|none|
|Configuration|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateFeaturedResultsSetResponse">UpdateFeaturedResultsSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefeaturedresultssetresponse"></a>
<a id="schema_UpdateFeaturedResultsSetResponse"></a>
<a id="tocSupdatefeaturedresultssetresponse"></a>
<a id="tocsupdatefeaturedresultssetresponse"></a>

```json
{
  "FeaturedResultsSet": {
    "FeaturedResultsSetId": {},
    "FeaturedResultsSetName": {},
    "Description": {},
    "Status": {},
    "QueryTexts": {},
    "FeaturedDocuments": {},
    "LastUpdatedTimestamp": {},
    "CreationTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FeaturedResultsSet|object|false|none|none|

<h2 id="tocS_UpdateFeaturedResultsSetRequest">UpdateFeaturedResultsSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefeaturedresultssetrequest"></a>
<a id="schema_UpdateFeaturedResultsSetRequest"></a>
<a id="tocSupdatefeaturedresultssetrequest"></a>
<a id="tocsupdatefeaturedresultssetrequest"></a>

```json
{
  "IndexId": {},
  "FeaturedResultsSetId": {},
  "FeaturedResultsSetName": {},
  "Description": {},
  "Status": {},
  "QueryTexts": {},
  "FeaturedDocuments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|FeaturedResultsSetId|object|true|none|none|
|FeaturedResultsSetName|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|QueryTexts|object|false|none|none|
|FeaturedDocuments|object|false|none|none|

<h2 id="tocS_UpdateIndexRequest">UpdateIndexRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateindexrequest"></a>
<a id="schema_UpdateIndexRequest"></a>
<a id="tocSupdateindexrequest"></a>
<a id="tocsupdateindexrequest"></a>

```json
{
  "Id": {},
  "Name": {},
  "RoleArn": {},
  "Description": {},
  "DocumentMetadataConfigurationUpdates": {},
  "CapacityUnits": {
    "StorageCapacityUnits": {},
    "QueryCapacityUnits": {}
  },
  "UserTokenConfigurations": {},
  "UserContextPolicy": {},
  "UserGroupResolutionConfiguration": {
    "UserGroupResolutionMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Name|object|false|none|none|
|RoleArn|object|false|none|none|
|Description|object|false|none|none|
|DocumentMetadataConfigurationUpdates|object|false|none|none|
|CapacityUnits|object|false|none|none|
|UserTokenConfigurations|object|false|none|none|
|UserContextPolicy|object|false|none|none|
|UserGroupResolutionConfiguration|object|false|none|none|

<h2 id="tocS_UpdateQuerySuggestionsBlockListRequest">UpdateQuerySuggestionsBlockListRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatequerysuggestionsblocklistrequest"></a>
<a id="schema_UpdateQuerySuggestionsBlockListRequest"></a>
<a id="tocSupdatequerysuggestionsblocklistrequest"></a>
<a id="tocsupdatequerysuggestionsblocklistrequest"></a>

```json
{
  "IndexId": {},
  "Id": {},
  "Name": {},
  "Description": {},
  "SourceS3Path": {
    "Bucket": {},
    "Key": {}
  },
  "RoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|Id|object|true|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|SourceS3Path|object|false|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_UpdateQuerySuggestionsConfigRequest">UpdateQuerySuggestionsConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatequerysuggestionsconfigrequest"></a>
<a id="schema_UpdateQuerySuggestionsConfigRequest"></a>
<a id="tocSupdatequerysuggestionsconfigrequest"></a>
<a id="tocsupdatequerysuggestionsconfigrequest"></a>

```json
{
  "IndexId": {},
  "Mode": {},
  "QueryLogLookBackWindowInDays": {},
  "IncludeQueriesWithoutUserInformation": {},
  "MinimumNumberOfQueryingUsers": {},
  "MinimumQueryCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexId|object|true|none|none|
|Mode|object|false|none|none|
|QueryLogLookBackWindowInDays|object|false|none|none|
|IncludeQueriesWithoutUserInformation|object|false|none|none|
|MinimumNumberOfQueryingUsers|object|false|none|none|
|MinimumQueryCount|object|false|none|none|

<h2 id="tocS_UpdateThesaurusRequest">UpdateThesaurusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatethesaurusrequest"></a>
<a id="schema_UpdateThesaurusRequest"></a>
<a id="tocSupdatethesaurusrequest"></a>
<a id="tocsupdatethesaurusrequest"></a>

```json
{
  "Id": {},
  "Name": {},
  "IndexId": {},
  "Description": {},
  "RoleArn": {},
  "SourceS3Path": {
    "Bucket": {},
    "Key": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Name|object|false|none|none|
|IndexId|object|true|none|none|
|Description|object|false|none|none|
|RoleArn|object|false|none|none|
|SourceS3Path|[S3Path](#schemas3path)|false|none|Information required to find a specific file in an Amazon S3 bucket.|

<h2 id="tocS_AccessControlConfigurationId">AccessControlConfigurationId</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolconfigurationid"></a>
<a id="schema_AccessControlConfigurationId"></a>
<a id="tocSaccesscontrolconfigurationid"></a>
<a id="tocsaccesscontrolconfigurationid"></a>

```json
"string"
```

<h2 id="tocS_AccessControlConfigurationName">AccessControlConfigurationName</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolconfigurationname"></a>
<a id="schema_AccessControlConfigurationName"></a>
<a id="tocSaccesscontrolconfigurationname"></a>
<a id="tocsaccesscontrolconfigurationname"></a>

```json
"string"
```

<h2 id="tocS_AccessControlConfigurationSummary">AccessControlConfigurationSummary</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolconfigurationsummary"></a>
<a id="schema_AccessControlConfigurationSummary"></a>
<a id="tocSaccesscontrolconfigurationsummary"></a>
<a id="tocsaccesscontrolconfigurationsummary"></a>

```json
{
  "Id": {}
}
```

Summary information on an access control configuration that you created for your documents in an index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_AccessControlConfigurationSummaryList">AccessControlConfigurationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolconfigurationsummarylist"></a>
<a id="schema_AccessControlConfigurationSummaryList"></a>
<a id="tocSaccesscontrolconfigurationsummarylist"></a>
<a id="tocsaccesscontrolconfigurationsummarylist"></a>

```json
[
  {
    "Id": {}
  }
]
```

<h2 id="tocS_S3ObjectKey">S3ObjectKey</h2>
<!-- backwards compatibility -->
<a id="schemas3objectkey"></a>
<a id="schema_S3ObjectKey"></a>
<a id="tocSs3objectkey"></a>
<a id="tocss3objectkey"></a>

```json
"string"
```

<h2 id="tocS_AccessControlListConfiguration">AccessControlListConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrollistconfiguration"></a>
<a id="schema_AccessControlListConfiguration"></a>
<a id="tocSaccesscontrollistconfiguration"></a>
<a id="tocsaccesscontrollistconfiguration"></a>

```json
{
  "KeyPath": {}
}
```

Access Control List files for the documents in a data source. For the format of the file, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html">Access control for S3 data sources</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyPath|object|false|none|none|

<h2 id="tocS_ColumnName">ColumnName</h2>
<!-- backwards compatibility -->
<a id="schemacolumnname"></a>
<a id="schema_ColumnName"></a>
<a id="tocScolumnname"></a>
<a id="tocscolumnname"></a>

```json
"string"
```

<h2 id="tocS_AclConfiguration">AclConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaaclconfiguration"></a>
<a id="schema_AclConfiguration"></a>
<a id="tocSaclconfiguration"></a>
<a id="tocsaclconfiguration"></a>

```json
{
  "AllowedGroupsColumnName": {}
}
```

Provides information about the column that should be used for filtering the query response by groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowedGroupsColumnName|object|true|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_AdditionalResultAttributeValueType">AdditionalResultAttributeValueType</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalresultattributevaluetype"></a>
<a id="schema_AdditionalResultAttributeValueType"></a>
<a id="tocSadditionalresultattributevaluetype"></a>
<a id="tocsadditionalresultattributevaluetype"></a>

```json
"TEXT_WITH_HIGHLIGHTS_VALUE"
```

<h2 id="tocS_AdditionalResultAttributeValue">AdditionalResultAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalresultattributevalue"></a>
<a id="schema_AdditionalResultAttributeValue"></a>
<a id="tocSadditionalresultattributevalue"></a>
<a id="tocsadditionalresultattributevalue"></a>

```json
{
  "TextWithHighlightsValue": {
    "Text": {},
    "Highlights": {}
  }
}
```

An attribute returned with a document from a search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TextWithHighlightsValue|object|false|none|none|

<h2 id="tocS_AdditionalResultAttribute">AdditionalResultAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalresultattribute"></a>
<a id="schema_AdditionalResultAttribute"></a>
<a id="tocSadditionalresultattribute"></a>
<a id="tocsadditionalresultattribute"></a>

```json
{
  "Key": {},
  "ValueType": {},
  "Value": {
    "TextWithHighlightsValue": {
      "Text": {},
      "Highlights": {}
    }
  }
}
```

An attribute returned from an index query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|ValueType|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_AdditionalResultAttributeList">AdditionalResultAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalresultattributelist"></a>
<a id="schema_AdditionalResultAttributeList"></a>
<a id="tocSadditionalresultattributelist"></a>
<a id="tocsadditionalresultattributelist"></a>

```json
[
  {
    "Key": {},
    "ValueType": {},
    "Value": {
      "TextWithHighlightsValue": {
        "Text": {},
        "Highlights": {}
      }
    }
  }
]
```

<h2 id="tocS_TextWithHighlights">TextWithHighlights</h2>
<!-- backwards compatibility -->
<a id="schematextwithhighlights"></a>
<a id="schema_TextWithHighlights"></a>
<a id="tocStextwithhighlights"></a>
<a id="tocstextwithhighlights"></a>

```json
{
  "Text": {},
  "Highlights": {}
}
```

Provides text and information about where to highlight the text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|false|none|none|
|Highlights|object|false|none|none|

<h2 id="tocS_SiteUrl">SiteUrl</h2>
<!-- backwards compatibility -->
<a id="schemasiteurl"></a>
<a id="schema_SiteUrl"></a>
<a id="tocSsiteurl"></a>
<a id="tocssiteurl"></a>

```json
"string"
```

<h2 id="tocS_SiteId">SiteId</h2>
<!-- backwards compatibility -->
<a id="schemasiteid"></a>
<a id="schema_SiteId"></a>
<a id="tocSsiteid"></a>
<a id="tocssiteid"></a>

```json
"string"
```

<h2 id="tocS_SecretArn">SecretArn</h2>
<!-- backwards compatibility -->
<a id="schemasecretarn"></a>
<a id="schema_SecretArn"></a>
<a id="tocSsecretarn"></a>
<a id="tocssecretarn"></a>

```json
"string"
```

<h2 id="tocS_S3Path">S3Path</h2>
<!-- backwards compatibility -->
<a id="schemas3path"></a>
<a id="schema_S3Path"></a>
<a id="tocSs3path"></a>
<a id="tocss3path"></a>

```json
{
  "Bucket": {},
  "Key": {}
}
```

Information required to find a specific file in an Amazon S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|Key|object|true|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_EntityFilter">EntityFilter</h2>
<!-- backwards compatibility -->
<a id="schemaentityfilter"></a>
<a id="schema_EntityFilter"></a>
<a id="tocSentityfilter"></a>
<a id="tocsentityfilter"></a>

```json
[
  "wiki"
]
```

<h2 id="tocS_DataSourceToIndexFieldMappingList">DataSourceToIndexFieldMappingList</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcetoindexfieldmappinglist"></a>
<a id="schema_DataSourceToIndexFieldMappingList"></a>
<a id="tocSdatasourcetoindexfieldmappinglist"></a>
<a id="tocsdatasourcetoindexfieldmappinglist"></a>

```json
[
  {
    "DataSourceFieldName": {},
    "DateFieldFormat": {},
    "IndexFieldName": {}
  }
]
```

<h2 id="tocS_DataSourceInclusionsExclusionsStrings">DataSourceInclusionsExclusionsStrings</h2>
<!-- backwards compatibility -->
<a id="schemadatasourceinclusionsexclusionsstrings"></a>
<a id="schema_DataSourceInclusionsExclusionsStrings"></a>
<a id="tocSdatasourceinclusionsexclusionsstrings"></a>
<a id="tocsdatasourceinclusionsexclusionsstrings"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DataSourceVpcConfiguration">DataSourceVpcConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcevpcconfiguration"></a>
<a id="schema_DataSourceVpcConfiguration"></a>
<a id="tocSdatasourcevpcconfiguration"></a>
<a id="tocsdatasourcevpcconfiguration"></a>

```json
{
  "SubnetIds": {},
  "SecurityGroupIds": {}
}
```

Provides the configuration information to connect to an Amazon VPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIds|object|true|none|none|
|SecurityGroupIds|object|true|none|none|

<h2 id="tocS_AlfrescoConfiguration">AlfrescoConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaalfrescoconfiguration"></a>
<a id="schema_AlfrescoConfiguration"></a>
<a id="tocSalfrescoconfiguration"></a>
<a id="tocsalfrescoconfiguration"></a>

```json
{
  "SiteUrl": {},
  "SiteId": {},
  "SecretArn": {},
  "SslCertificateS3Path": {
    "Bucket": {},
    "Key": {}
  },
  "CrawlSystemFolders": {},
  "CrawlComments": {},
  "EntityFilter": {},
  "DocumentLibraryFieldMappings": {},
  "BlogFieldMappings": {},
  "WikiFieldMappings": {},
  "InclusionPatterns": {},
  "ExclusionPatterns": {},
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  }
}
```

<p>Provides the configuration information to connect to Alfresco as your data source.</p> <note> <p>Alfresco data source connector is currently in preview mode. Basic authentication is currently supported. If you would like to use Alfresco connector in production, contact <a href="http://aws.amazon.com/contact-us/">Support</a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SiteUrl|object|true|none|none|
|SiteId|object|true|none|none|
|SecretArn|object|true|none|none|
|SslCertificateS3Path|object|true|none|none|
|CrawlSystemFolders|object|false|none|none|
|CrawlComments|object|false|none|none|
|EntityFilter|object|false|none|none|
|DocumentLibraryFieldMappings|object|false|none|none|
|BlogFieldMappings|object|false|none|none|
|WikiFieldMappings|object|false|none|none|
|InclusionPatterns|object|false|none|none|
|ExclusionPatterns|object|false|none|none|
|VpcConfiguration|object|false|none|none|

<h2 id="tocS_AlfrescoEntity">AlfrescoEntity</h2>
<!-- backwards compatibility -->
<a id="schemaalfrescoentity"></a>
<a id="schema_AlfrescoEntity"></a>
<a id="tocSalfrescoentity"></a>
<a id="tocsalfrescoentity"></a>

```json
"wiki"
```

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_FailedEntity">FailedEntity</h2>
<!-- backwards compatibility -->
<a id="schemafailedentity"></a>
<a id="schema_FailedEntity"></a>
<a id="tocSfailedentity"></a>
<a id="tocsfailedentity"></a>

```json
{
  "EntityId": {},
  "ErrorMessage": {}
}
```

Information on the users or groups in your IAM Identity Center identity source that failed to properly configure with your Amazon Kendra experience.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityId|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_AssociateEntitiesToExperienceFailedEntityList">AssociateEntitiesToExperienceFailedEntityList</h2>
<!-- backwards compatibility -->
<a id="schemaassociateentitiestoexperiencefailedentitylist"></a>
<a id="schema_AssociateEntitiesToExperienceFailedEntityList"></a>
<a id="tocSassociateentitiestoexperiencefailedentitylist"></a>
<a id="tocsassociateentitiestoexperiencefailedentitylist"></a>

```json
[
  {
    "EntityId": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_ExperienceId">ExperienceId</h2>
<!-- backwards compatibility -->
<a id="schemaexperienceid"></a>
<a id="schema_ExperienceId"></a>
<a id="tocSexperienceid"></a>
<a id="tocsexperienceid"></a>

```json
"string"
```

<h2 id="tocS_IndexId">IndexId</h2>
<!-- backwards compatibility -->
<a id="schemaindexid"></a>
<a id="schema_IndexId"></a>
<a id="tocSindexid"></a>
<a id="tocsindexid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_AssociateEntityList">AssociateEntityList</h2>
<!-- backwards compatibility -->
<a id="schemaassociateentitylist"></a>
<a id="schema_AssociateEntityList"></a>
<a id="tocSassociateentitylist"></a>
<a id="tocsassociateentitylist"></a>

```json
[
  {
    "EntityId": {},
    "EntityType": {}
  }
]
```

<h2 id="tocS_EntityConfiguration">EntityConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaentityconfiguration"></a>
<a id="schema_EntityConfiguration"></a>
<a id="tocSentityconfiguration"></a>
<a id="tocsentityconfiguration"></a>

```json
{
  "EntityId": {},
  "EntityType": {}
}
```

Provides the configuration information for users or groups in your IAM Identity Center identity source to grant access your Amazon Kendra experience.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityId|object|true|none|none|
|EntityType|object|true|none|none|

<h2 id="tocS_EntityPersonaConfigurationList">EntityPersonaConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaentitypersonaconfigurationlist"></a>
<a id="schema_EntityPersonaConfigurationList"></a>
<a id="tocSentitypersonaconfigurationlist"></a>
<a id="tocsentitypersonaconfigurationlist"></a>

```json
[
  {
    "EntityId": {},
    "Persona": {}
  }
]
```

<h2 id="tocS_FailedEntityList">FailedEntityList</h2>
<!-- backwards compatibility -->
<a id="schemafailedentitylist"></a>
<a id="schema_FailedEntityList"></a>
<a id="tocSfailedentitylist"></a>
<a id="tocsfailedentitylist"></a>

```json
[
  {
    "EntityId": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_AttributeFilterList">AttributeFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaattributefilterlist"></a>
<a id="schema_AttributeFilterList"></a>
<a id="tocSattributefilterlist"></a>
<a id="tocsattributefilterlist"></a>

```json
[
  {
    "AndAllFilters": {},
    "OrAllFilters": {},
    "NotFilter": {},
    "EqualsTo": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "ContainsAll": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "ContainsAny": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "GreaterThan": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "GreaterThanOrEquals": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "LessThan": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "LessThanOrEquals": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    }
  }
]
```

<h2 id="tocS_AttributeFilter">AttributeFilter</h2>
<!-- backwards compatibility -->
<a id="schemaattributefilter"></a>
<a id="schema_AttributeFilter"></a>
<a id="tocSattributefilter"></a>
<a id="tocsattributefilter"></a>

```json
{
  "AndAllFilters": {},
  "OrAllFilters": {},
  "NotFilter": {
    "AndAllFilters": {},
    "OrAllFilters": {},
    "NotFilter": {},
    "EqualsTo": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "ContainsAll": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "ContainsAny": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "GreaterThan": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "GreaterThanOrEquals": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "LessThan": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "LessThanOrEquals": {
      "Key": {},
      "Value": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    }
  },
  "EqualsTo": {
    "Key": {},
    "Value": {
      "StringValue": {},
      "StringListValue": {},
      "LongValue": {},
      "DateValue": {}
    }
  },
  "ContainsAll": {
    "Key": {},
    "Value": {
      "StringValue": {},
      "StringListValue": {},
      "LongValue": {},
      "DateValue": {}
    }
  },
  "ContainsAny": {
    "Key": {},
    "Value": {
      "StringValue": {},
      "StringListValue": {},
      "LongValue": {},
      "DateValue": {}
    }
  },
  "GreaterThan": {
    "Key": {},
    "Value": {
      "StringValue": {},
      "StringListValue": {},
      "LongValue": {},
      "DateValue": {}
    }
  },
  "GreaterThanOrEquals": {
    "Key": {},
    "Value": {
      "StringValue": {},
      "StringListValue": {},
      "LongValue": {},
      "DateValue": {}
    }
  },
  "LessThan": {
    "Key": {},
    "Value": {
      "StringValue": {},
      "StringListValue": {},
      "LongValue": {},
      "DateValue": {}
    }
  },
  "LessThanOrEquals": {
    "Key": {},
    "Value": {
      "StringValue": {},
      "StringListValue": {},
      "LongValue": {},
      "DateValue": {}
    }
  }
}
```

<p>Provides filtering the query results based on document attributes or metadata fields.</p> <p>When you use the <code>AndAllFilters</code> or <code>OrAllFilters</code>, filters you can use 2 layers under the first attribute filter. For example, you can use:</p> <p> <code>&lt;AndAllFilters&gt;</code> </p> <ol> <li> <p> <code> &lt;OrAllFilters&gt;</code> </p> </li> <li> <p> <code> &lt;EqualsTo&gt;</code> </p> </li> </ol> <p>If you use more than 2 layers, you receive a <code>ValidationException</code> exception with the message "<code>AttributeFilter</code> cannot have a depth of more than 2."</p> <p>If you use more than 10 attribute filters in a given list for <code>AndAllFilters</code> or <code>OrAllFilters</code>, you receive a <code>ValidationException</code> with the message "<code>AttributeFilter</code> cannot have a length of more than 10".</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AndAllFilters|object|false|none|none|
|OrAllFilters|object|false|none|none|
|NotFilter|object|false|none|none|
|EqualsTo|object|false|none|none|
|ContainsAll|object|false|none|none|
|ContainsAny|object|false|none|none|
|GreaterThan|object|false|none|none|
|GreaterThanOrEquals|object|false|none|none|
|LessThan|object|false|none|none|
|LessThanOrEquals|object|false|none|none|

<h2 id="tocS_DocumentAttribute">DocumentAttribute</h2>
<!-- backwards compatibility -->
<a id="schemadocumentattribute"></a>
<a id="schema_DocumentAttribute"></a>
<a id="tocSdocumentattribute"></a>
<a id="tocsdocumentattribute"></a>

```json
{
  "Key": {},
  "Value": {
    "StringValue": {},
    "StringListValue": {},
    "LongValue": {},
    "DateValue": {}
  }
}
```

A document attribute or metadata field. To create custom document attributes, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-attributes.html">Custom attributes</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_BasicAuthenticationConfigurationList">BasicAuthenticationConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemabasicauthenticationconfigurationlist"></a>
<a id="schema_BasicAuthenticationConfigurationList"></a>
<a id="tocSbasicauthenticationconfigurationlist"></a>
<a id="tocsbasicauthenticationconfigurationlist"></a>

```json
[
  {
    "Host": {},
    "Port": {},
    "Credentials": {}
  }
]
```

<h2 id="tocS_AuthenticationConfiguration">AuthenticationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationconfiguration"></a>
<a id="schema_AuthenticationConfiguration"></a>
<a id="tocSauthenticationconfiguration"></a>
<a id="tocsauthenticationconfiguration"></a>

```json
{
  "BasicAuthentication": {}
}
```

Provides the configuration information to connect to websites that require user authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BasicAuthentication|object|false|none|none|

<h2 id="tocS_Host">Host</h2>
<!-- backwards compatibility -->
<a id="schemahost"></a>
<a id="schema_Host"></a>
<a id="tocShost"></a>
<a id="tocshost"></a>

```json
"string"
```

<h2 id="tocS_Port">Port</h2>
<!-- backwards compatibility -->
<a id="schemaport"></a>
<a id="schema_Port"></a>
<a id="tocSport"></a>
<a id="tocsport"></a>

```json
1
```

<h2 id="tocS_BasicAuthenticationConfiguration">BasicAuthenticationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemabasicauthenticationconfiguration"></a>
<a id="schema_BasicAuthenticationConfiguration"></a>
<a id="tocSbasicauthenticationconfiguration"></a>
<a id="tocsbasicauthenticationconfiguration"></a>

```json
{
  "Host": {},
  "Port": {},
  "Credentials": {}
}
```

Provides the configuration information to connect to websites that require basic user authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Host|object|true|none|none|
|Port|object|true|none|none|
|Credentials|object|true|none|none|

<h2 id="tocS_DocumentIdList">DocumentIdList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentidlist"></a>
<a id="schema_DocumentIdList"></a>
<a id="tocSdocumentidlist"></a>
<a id="tocsdocumentidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DataSourceSyncJobMetricTarget">DataSourceSyncJobMetricTarget</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcesyncjobmetrictarget"></a>
<a id="schema_DataSourceSyncJobMetricTarget"></a>
<a id="tocSdatasourcesyncjobmetrictarget"></a>
<a id="tocsdatasourcesyncjobmetrictarget"></a>

```json
{
  "DataSourceId": {},
  "DataSourceSyncJobId": {}
}
```

Maps a particular data source sync job to a particular data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceId|object|true|none|none|
|DataSourceSyncJobId|object|false|none|none|

<h2 id="tocS_BatchDeleteDocumentResponseFailedDocuments">BatchDeleteDocumentResponseFailedDocuments</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedocumentresponsefaileddocuments"></a>
<a id="schema_BatchDeleteDocumentResponseFailedDocuments"></a>
<a id="tocSbatchdeletedocumentresponsefaileddocuments"></a>
<a id="tocsbatchdeletedocumentresponsefaileddocuments"></a>

```json
[
  {
    "Id": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_DocumentId">DocumentId</h2>
<!-- backwards compatibility -->
<a id="schemadocumentid"></a>
<a id="schema_DocumentId"></a>
<a id="tocSdocumentid"></a>
<a id="tocsdocumentid"></a>

```json
"string"
```

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"InternalError"
```

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_BatchDeleteDocumentResponseFailedDocument">BatchDeleteDocumentResponseFailedDocument</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedocumentresponsefaileddocument"></a>
<a id="schema_BatchDeleteDocumentResponseFailedDocument"></a>
<a id="tocSbatchdeletedocumentresponsefaileddocument"></a>
<a id="tocsbatchdeletedocumentresponsefaileddocument"></a>

```json
{
  "Id": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Provides information about documents that could not be removed from an index by the <code>BatchDeleteDocument</code> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_FeaturedResultsSetId">FeaturedResultsSetId</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedresultssetid"></a>
<a id="schema_FeaturedResultsSetId"></a>
<a id="tocSfeaturedresultssetid"></a>
<a id="tocsfeaturedresultssetid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_BatchDeleteFeaturedResultsSetError">BatchDeleteFeaturedResultsSetError</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletefeaturedresultsseterror"></a>
<a id="schema_BatchDeleteFeaturedResultsSetError"></a>
<a id="tocSbatchdeletefeaturedresultsseterror"></a>
<a id="tocsbatchdeletefeaturedresultsseterror"></a>

```json
{
  "Id": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Provides information about a set of featured results that couldn't be removed from an index by the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteFeaturedResultsSet.html">BatchDeleteFeaturedResultsSet</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|ErrorCode|object|true|none|none|
|ErrorMessage|object|true|none|none|

<h2 id="tocS_BatchDeleteFeaturedResultsSetErrors">BatchDeleteFeaturedResultsSetErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletefeaturedresultsseterrors"></a>
<a id="schema_BatchDeleteFeaturedResultsSetErrors"></a>
<a id="tocSbatchdeletefeaturedresultsseterrors"></a>
<a id="tocsbatchdeletefeaturedresultsseterrors"></a>

```json
[
  {
    "Id": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_FeaturedResultsSetIdList">FeaturedResultsSetIdList</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedresultssetidlist"></a>
<a id="schema_FeaturedResultsSetIdList"></a>
<a id="tocSfeaturedresultssetidlist"></a>
<a id="tocsfeaturedresultssetidlist"></a>

```json
[
  "stringstringstringstringstringstring"
]
```

<h2 id="tocS_DocumentInfoList">DocumentInfoList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentinfolist"></a>
<a id="schema_DocumentInfoList"></a>
<a id="tocSdocumentinfolist"></a>
<a id="tocsdocumentinfolist"></a>

```json
[
  {
    "DocumentId": {},
    "Attributes": {}
  }
]
```

<h2 id="tocS_BatchGetDocumentStatusResponseErrors">BatchGetDocumentStatusResponseErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdocumentstatusresponseerrors"></a>
<a id="schema_BatchGetDocumentStatusResponseErrors"></a>
<a id="tocSbatchgetdocumentstatusresponseerrors"></a>
<a id="tocsbatchgetdocumentstatusresponseerrors"></a>

```json
[
  {
    "DocumentId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_DocumentStatusList">DocumentStatusList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentstatuslist"></a>
<a id="schema_DocumentStatusList"></a>
<a id="tocSdocumentstatuslist"></a>
<a id="tocsdocumentstatuslist"></a>

```json
[
  {
    "DocumentId": {},
    "DocumentStatus": {},
    "FailureCode": {},
    "FailureReason": {}
  }
]
```

<h2 id="tocS_BatchGetDocumentStatusResponseError">BatchGetDocumentStatusResponseError</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdocumentstatusresponseerror"></a>
<a id="schema_BatchGetDocumentStatusResponseError"></a>
<a id="tocSbatchgetdocumentstatusresponseerror"></a>
<a id="tocsbatchgetdocumentstatusresponseerror"></a>

```json
{
  "DocumentId": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Provides a response when the status of a document could not be retrieved.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentId|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_DocumentList">DocumentList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentlist"></a>
<a id="schema_DocumentList"></a>
<a id="tocSdocumentlist"></a>
<a id="tocsdocumentlist"></a>

```json
[
  {
    "Id": {},
    "Title": {},
    "Blob": {},
    "S3Path": {
      "Bucket": {},
      "Key": {}
    },
    "Attributes": {},
    "AccessControlList": {},
    "HierarchicalAccessControlList": {},
    "ContentType": {},
    "AccessControlConfigurationId": {}
  }
]
```

<h2 id="tocS_CustomDocumentEnrichmentConfiguration">CustomDocumentEnrichmentConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacustomdocumentenrichmentconfiguration"></a>
<a id="schema_CustomDocumentEnrichmentConfiguration"></a>
<a id="tocScustomdocumentenrichmentconfiguration"></a>
<a id="tocscustomdocumentenrichmentconfiguration"></a>

```json
{
  "InlineConfigurations": {},
  "PreExtractionHookConfiguration": {
    "InvocationCondition": {
      "ConditionDocumentAttributeKey": {},
      "Operator": {},
      "ConditionOnValue": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "LambdaArn": {},
    "S3Bucket": {}
  },
  "PostExtractionHookConfiguration": {
    "InvocationCondition": {
      "ConditionDocumentAttributeKey": {},
      "Operator": {},
      "ConditionOnValue": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "LambdaArn": {},
    "S3Bucket": {}
  },
  "RoleArn": {}
}
```

<p>Provides the configuration information for altering document metadata and content during the document ingestion process.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InlineConfigurations|object|false|none|none|
|PreExtractionHookConfiguration|object|false|none|none|
|PostExtractionHookConfiguration|object|false|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_BatchPutDocumentResponseFailedDocuments">BatchPutDocumentResponseFailedDocuments</h2>
<!-- backwards compatibility -->
<a id="schemabatchputdocumentresponsefaileddocuments"></a>
<a id="schema_BatchPutDocumentResponseFailedDocuments"></a>
<a id="tocSbatchputdocumentresponsefaileddocuments"></a>
<a id="tocsbatchputdocumentresponsefaileddocuments"></a>

```json
[
  {
    "Id": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_BatchPutDocumentResponseFailedDocument">BatchPutDocumentResponseFailedDocument</h2>
<!-- backwards compatibility -->
<a id="schemabatchputdocumentresponsefaileddocument"></a>
<a id="schema_BatchPutDocumentResponseFailedDocument"></a>
<a id="tocSbatchputdocumentresponsefaileddocument"></a>
<a id="tocsbatchputdocumentresponsefaileddocument"></a>

```json
{
  "Id": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Provides information about a document that could not be indexed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_Blob">Blob</h2>
<!-- backwards compatibility -->
<a id="schemablob"></a>
<a id="schema_Blob"></a>
<a id="tocSblob"></a>
<a id="tocsblob"></a>

```json
"string"
```

<h2 id="tocS_EnterpriseId">EnterpriseId</h2>
<!-- backwards compatibility -->
<a id="schemaenterpriseid"></a>
<a id="schema_EnterpriseId"></a>
<a id="tocSenterpriseid"></a>
<a id="tocsenterpriseid"></a>

```json
"string"
```

<h2 id="tocS_BoxConfiguration">BoxConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaboxconfiguration"></a>
<a id="schema_BoxConfiguration"></a>
<a id="tocSboxconfiguration"></a>
<a id="tocsboxconfiguration"></a>

```json
{
  "EnterpriseId": {},
  "SecretArn": {},
  "UseChangeLog": {},
  "CrawlComments": {},
  "CrawlTasks": {},
  "CrawlWebLinks": {},
  "FileFieldMappings": {},
  "TaskFieldMappings": {},
  "CommentFieldMappings": {},
  "WebLinkFieldMappings": {},
  "InclusionPatterns": {},
  "ExclusionPatterns": {},
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  }
}
```

Provides the configuration information to connect to Box as your data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnterpriseId|object|true|none|none|
|SecretArn|object|true|none|none|
|UseChangeLog|object|false|none|none|
|CrawlComments|object|false|none|none|
|CrawlTasks|object|false|none|none|
|CrawlWebLinks|object|false|none|none|
|FileFieldMappings|object|false|none|none|
|TaskFieldMappings|object|false|none|none|
|CommentFieldMappings|object|false|none|none|
|WebLinkFieldMappings|object|false|none|none|
|InclusionPatterns|object|false|none|none|
|ExclusionPatterns|object|false|none|none|
|VpcConfiguration|object|false|none|none|

<h2 id="tocS_StorageCapacityUnit">StorageCapacityUnit</h2>
<!-- backwards compatibility -->
<a id="schemastoragecapacityunit"></a>
<a id="schema_StorageCapacityUnit"></a>
<a id="tocSstoragecapacityunit"></a>
<a id="tocsstoragecapacityunit"></a>

```json
0
```

<h2 id="tocS_QueryCapacityUnit">QueryCapacityUnit</h2>
<!-- backwards compatibility -->
<a id="schemaquerycapacityunit"></a>
<a id="schema_QueryCapacityUnit"></a>
<a id="tocSquerycapacityunit"></a>
<a id="tocsquerycapacityunit"></a>

```json
0
```

<h2 id="tocS_CapacityUnitsConfiguration">CapacityUnitsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacapacityunitsconfiguration"></a>
<a id="schema_CapacityUnitsConfiguration"></a>
<a id="tocScapacityunitsconfiguration"></a>
<a id="tocscapacityunitsconfiguration"></a>

```json
{
  "StorageCapacityUnits": {},
  "QueryCapacityUnits": {}
}
```

Specifies additional capacity units configured for your Enterprise Edition index. You can add and remove capacity units to fit your usage requirements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageCapacityUnits|object|true|none|none|
|QueryCapacityUnits|object|true|none|none|

<h2 id="tocS_ChangeDetectingColumns">ChangeDetectingColumns</h2>
<!-- backwards compatibility -->
<a id="schemachangedetectingcolumns"></a>
<a id="schema_ChangeDetectingColumns"></a>
<a id="tocSchangedetectingcolumns"></a>
<a id="tocschangedetectingcolumns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ClaimRegex">ClaimRegex</h2>
<!-- backwards compatibility -->
<a id="schemaclaimregex"></a>
<a id="schema_ClaimRegex"></a>
<a id="tocSclaimregex"></a>
<a id="tocsclaimregex"></a>

```json
"string"
```

<h2 id="tocS_ResultId">ResultId</h2>
<!-- backwards compatibility -->
<a id="schemaresultid"></a>
<a id="schema_ResultId"></a>
<a id="tocSresultid"></a>
<a id="tocsresultid"></a>

```json
"string"
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ClickFeedback">ClickFeedback</h2>
<!-- backwards compatibility -->
<a id="schemaclickfeedback"></a>
<a id="schema_ClickFeedback"></a>
<a id="tocSclickfeedback"></a>
<a id="tocsclickfeedback"></a>

```json
{
  "ResultId": {},
  "ClickTime": {}
}
```

Gathers information about when a particular result was clicked by a user. Your application uses the <code>SubmitFeedback</code> API to provide click information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResultId|object|true|none|none|
|ClickTime|object|true|none|none|

<h2 id="tocS_ClickFeedbackList">ClickFeedbackList</h2>
<!-- backwards compatibility -->
<a id="schemaclickfeedbacklist"></a>
<a id="schema_ClickFeedbackList"></a>
<a id="tocSclickfeedbacklist"></a>
<a id="tocsclickfeedbacklist"></a>

```json
[
  {
    "ResultId": {},
    "ClickTime": {}
  }
]
```

<h2 id="tocS_ClientTokenName">ClientTokenName</h2>
<!-- backwards compatibility -->
<a id="schemaclienttokenname"></a>
<a id="schema_ClientTokenName"></a>
<a id="tocSclienttokenname"></a>
<a id="tocsclienttokenname"></a>

```json
"string"
```

<h2 id="tocS_ColumnConfiguration">ColumnConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacolumnconfiguration"></a>
<a id="schema_ColumnConfiguration"></a>
<a id="tocScolumnconfiguration"></a>
<a id="tocscolumnconfiguration"></a>

```json
{
  "DocumentIdColumnName": {},
  "DocumentDataColumnName": {},
  "DocumentTitleColumnName": {},
  "FieldMappings": {},
  "ChangeDetectingColumns": {}
}
```

Provides information about how Amazon Kendra should use the columns of a database in an index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentIdColumnName|object|true|none|none|
|DocumentDataColumnName|object|true|none|none|
|DocumentTitleColumnName|object|false|none|none|
|FieldMappings|object|false|none|none|
|ChangeDetectingColumns|object|true|none|none|

<h2 id="tocS_ConditionOperator">ConditionOperator</h2>
<!-- backwards compatibility -->
<a id="schemaconditionoperator"></a>
<a id="schema_ConditionOperator"></a>
<a id="tocSconditionoperator"></a>
<a id="tocsconditionoperator"></a>

```json
"GreaterThan"
```

<h2 id="tocS_ConfluenceAttachmentFieldMappingsList">ConfluenceAttachmentFieldMappingsList</h2>
<!-- backwards compatibility -->
<a id="schemaconfluenceattachmentfieldmappingslist"></a>
<a id="schema_ConfluenceAttachmentFieldMappingsList"></a>
<a id="tocSconfluenceattachmentfieldmappingslist"></a>
<a id="tocsconfluenceattachmentfieldmappingslist"></a>

```json
[
  {
    "DataSourceFieldName": {},
    "DateFieldFormat": {},
    "IndexFieldName": {}
  }
]
```

<h2 id="tocS_ConfluenceAttachmentConfiguration">ConfluenceAttachmentConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaconfluenceattachmentconfiguration"></a>
<a id="schema_ConfluenceAttachmentConfiguration"></a>
<a id="tocSconfluenceattachmentconfiguration"></a>
<a id="tocsconfluenceattachmentconfiguration"></a>

```json
{
  "CrawlAttachments": {},
  "AttachmentFieldMappings": {}
}
```

Configuration of attachment settings for the Confluence data source. Attachment settings are optional, if you don't specify settings attachments, Amazon Kendra won't index them.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CrawlAttachments|object|false|none|none|
|AttachmentFieldMappings|object|false|none|none|

<h2 id="tocS_ConfluenceAttachmentToIndexFieldMapping">ConfluenceAttachmentToIndexFieldMapping</h2>
<!-- backwards compatibility -->
<a id="schemaconfluenceattachmenttoindexfieldmapping"></a>
<a id="schema_ConfluenceAttachmentToIndexFieldMapping"></a>
<a id="tocSconfluenceattachmenttoindexfieldmapping"></a>
<a id="tocsconfluenceattachmenttoindexfieldmapping"></a>

```json
{
  "DataSourceFieldName": {},
  "DateFieldFormat": {},
  "IndexFieldName": {}
}
```

Maps attributes or field names of Confluence attachments to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confuence data source field names must exist in your Confluence custom metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceFieldName|object|false|none|none|
|DateFieldFormat|object|false|none|none|
|IndexFieldName|object|false|none|none|

<h2 id="tocS_ConfluenceAttachmentFieldName">ConfluenceAttachmentFieldName</h2>
<!-- backwards compatibility -->
<a id="schemaconfluenceattachmentfieldname"></a>
<a id="schema_ConfluenceAttachmentFieldName"></a>
<a id="tocSconfluenceattachmentfieldname"></a>
<a id="tocsconfluenceattachmentfieldname"></a>

```json
"AUTHOR"
```

<h2 id="tocS_DataSourceDateFieldFormat">DataSourceDateFieldFormat</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcedatefieldformat"></a>
<a id="schema_DataSourceDateFieldFormat"></a>
<a id="tocSdatasourcedatefieldformat"></a>
<a id="tocsdatasourcedatefieldformat"></a>

```json
"string"
```

<h2 id="tocS_IndexFieldName">IndexFieldName</h2>
<!-- backwards compatibility -->
<a id="schemaindexfieldname"></a>
<a id="schema_IndexFieldName"></a>
<a id="tocSindexfieldname"></a>
<a id="tocsindexfieldname"></a>

```json
"string"
```

<h2 id="tocS_ConfluenceAuthenticationType">ConfluenceAuthenticationType</h2>
<!-- backwards compatibility -->
<a id="schemaconfluenceauthenticationtype"></a>
<a id="schema_ConfluenceAuthenticationType"></a>
<a id="tocSconfluenceauthenticationtype"></a>
<a id="tocsconfluenceauthenticationtype"></a>

```json
"HTTP_BASIC"
```

<h2 id="tocS_ConfluenceBlogFieldMappingsList">ConfluenceBlogFieldMappingsList</h2>
<!-- backwards compatibility -->
<a id="schemaconfluenceblogfieldmappingslist"></a>
<a id="schema_ConfluenceBlogFieldMappingsList"></a>
<a id="tocSconfluenceblogfieldmappingslist"></a>
<a id="tocsconfluenceblogfieldmappingslist"></a>

```json
[
  {
    "DataSourceFieldName": {},
    "DateFieldFormat": {},
    "IndexFieldName": {}
  }
]
```

<h2 id="tocS_ConfluenceBlogConfiguration">ConfluenceBlogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaconfluenceblogconfiguration"></a>
<a id="schema_ConfluenceBlogConfiguration"></a>
<a id="tocSconfluenceblogconfiguration"></a>
<a id="tocsconfluenceblogconfiguration"></a>

```json
{
  "BlogFieldMappings": {}
}
```

Configuration of blog settings for the Confluence data source. Blogs are always indexed unless filtered from the index by the <code>ExclusionPatterns</code> or <code>InclusionPatterns</code> fields in the <code>ConfluenceConfiguration</code> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlogFieldMappings|object|false|none|none|

<h2 id="tocS_ConfluenceBlogToIndexFieldMapping">ConfluenceBlogToIndexFieldMapping</h2>
<!-- backwards compatibility -->
<a id="schemaconfluenceblogtoindexfieldmapping"></a>
<a id="schema_ConfluenceBlogToIndexFieldMapping"></a>
<a id="tocSconfluenceblogtoindexfieldmapping"></a>
<a id="tocsconfluenceblogtoindexfieldmapping"></a>

```json
{
  "DataSourceFieldName": {},
  "DateFieldFormat": {},
  "IndexFieldName": {}
}
```

Maps attributes or field names of Confluence blog to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceFieldName|object|false|none|none|
|DateFieldFormat|object|false|none|none|
|IndexFieldName|object|false|none|none|

<h2 id="tocS_ConfluenceBlogFieldName">ConfluenceBlogFieldName</h2>
<!-- backwards compatibility -->
<a id="schemaconfluenceblogfieldname"></a>
<a id="schema_ConfluenceBlogFieldName"></a>
<a id="tocSconfluenceblogfieldname"></a>
<a id="tocsconfluenceblogfieldname"></a>

```json
"AUTHOR"
```

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"string"
```

<h2 id="tocS_ConfluenceVersion">ConfluenceVersion</h2>
<!-- backwards compatibility -->
<a id="schemaconfluenceversion"></a>
<a id="schema_ConfluenceVersion"></a>
<a id="tocSconfluenceversion"></a>
<a id="tocsconfluenceversion"></a>

```json
"CLOUD"
```

<h2 id="tocS_ConfluenceSpaceConfiguration">ConfluenceSpaceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaconfluencespaceconfiguration"></a>
<a id="schema_ConfluenceSpaceConfiguration"></a>
<a id="tocSconfluencespaceconfiguration"></a>
<a id="tocsconfluencespaceconfiguration"></a>

```json
{
  "CrawlPersonalSpaces": {},
  "CrawlArchivedSpaces": {},
  "IncludeSpaces": {},
  "ExcludeSpaces": {},
  "SpaceFieldMappings": {}
}
```

Configuration information for indexing Confluence spaces.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CrawlPersonalSpaces|object|false|none|none|
|CrawlArchivedSpaces|object|false|none|none|
|IncludeSpaces|object|false|none|none|
|ExcludeSpaces|object|false|none|none|
|SpaceFieldMappings|object|false|none|none|

<h2 id="tocS_ConfluencePageConfiguration">ConfluencePageConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaconfluencepageconfiguration"></a>
<a id="schema_ConfluencePageConfiguration"></a>
<a id="tocSconfluencepageconfiguration"></a>
<a id="tocsconfluencepageconfiguration"></a>

```json
{
  "PageFieldMappings": {}
}
```

Configuration of the page settings for the Confluence data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PageFieldMappings|object|false|none|none|

<h2 id="tocS_ProxyConfiguration">ProxyConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaproxyconfiguration"></a>
<a id="schema_ProxyConfiguration"></a>
<a id="tocSproxyconfiguration"></a>
<a id="tocsproxyconfiguration"></a>

```json
{
  "Host": {},
  "Port": {},
  "Credentials": {}
}
```

Provides the configuration information for a web proxy to connect to website hosts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Host|object|true|none|none|
|Port|object|true|none|none|
|Credentials|object|false|none|none|

<h2 id="tocS_ConfluenceConfiguration">ConfluenceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaconfluenceconfiguration"></a>
<a id="schema_ConfluenceConfiguration"></a>
<a id="tocSconfluenceconfiguration"></a>
<a id="tocsconfluenceconfiguration"></a>

```json
{
  "ServerUrl": {},
  "SecretArn": {},
  "Version": {},
  "SpaceConfiguration": {
    "CrawlPersonalSpaces": {},
    "CrawlArchivedSpaces": {},
    "IncludeSpaces": {},
    "ExcludeSpaces": {},
    "SpaceFieldMappings": {}
  },
  "PageConfiguration": {
    "PageFieldMappings": {}
  },
  "BlogConfiguration": {
    "BlogFieldMappings": {}
  },
  "AttachmentConfiguration": {
    "CrawlAttachments": {},
    "AttachmentFieldMappings": {}
  },
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "InclusionPatterns": {},
  "ExclusionPatterns": {},
  "ProxyConfiguration": {
    "Host": {},
    "Port": {},
    "Credentials": {}
  },
  "AuthenticationType": {}
}
```

Provides the configuration information to connect to Confluence as your data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerUrl|object|true|none|none|
|SecretArn|object|true|none|none|
|Version|object|true|none|none|
|SpaceConfiguration|object|false|none|none|
|PageConfiguration|object|false|none|none|
|BlogConfiguration|object|false|none|none|
|AttachmentConfiguration|object|false|none|none|
|VpcConfiguration|object|false|none|none|
|InclusionPatterns|object|false|none|none|
|ExclusionPatterns|object|false|none|none|
|ProxyConfiguration|object|false|none|none|
|AuthenticationType|object|false|none|none|

<h2 id="tocS_ConfluencePageFieldMappingsList">ConfluencePageFieldMappingsList</h2>
<!-- backwards compatibility -->
<a id="schemaconfluencepagefieldmappingslist"></a>
<a id="schema_ConfluencePageFieldMappingsList"></a>
<a id="tocSconfluencepagefieldmappingslist"></a>
<a id="tocsconfluencepagefieldmappingslist"></a>

```json
[
  {
    "DataSourceFieldName": {},
    "DateFieldFormat": {},
    "IndexFieldName": {}
  }
]
```

<h2 id="tocS_ConfluencePageToIndexFieldMapping">ConfluencePageToIndexFieldMapping</h2>
<!-- backwards compatibility -->
<a id="schemaconfluencepagetoindexfieldmapping"></a>
<a id="schema_ConfluencePageToIndexFieldMapping"></a>
<a id="tocSconfluencepagetoindexfieldmapping"></a>
<a id="tocsconfluencepagetoindexfieldmapping"></a>

```json
{
  "DataSourceFieldName": {},
  "DateFieldFormat": {},
  "IndexFieldName": {}
}
```

Maps attributes or field names of Confluence pages to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceFieldName|object|false|none|none|
|DateFieldFormat|object|false|none|none|
|IndexFieldName|object|false|none|none|

<h2 id="tocS_ConfluencePageFieldName">ConfluencePageFieldName</h2>
<!-- backwards compatibility -->
<a id="schemaconfluencepagefieldname"></a>
<a id="schema_ConfluencePageFieldName"></a>
<a id="tocSconfluencepagefieldname"></a>
<a id="tocsconfluencepagefieldname"></a>

```json
"AUTHOR"
```

<h2 id="tocS_ConfluenceSpaceList">ConfluenceSpaceList</h2>
<!-- backwards compatibility -->
<a id="schemaconfluencespacelist"></a>
<a id="schema_ConfluenceSpaceList"></a>
<a id="tocSconfluencespacelist"></a>
<a id="tocsconfluencespacelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ConfluenceSpaceFieldMappingsList">ConfluenceSpaceFieldMappingsList</h2>
<!-- backwards compatibility -->
<a id="schemaconfluencespacefieldmappingslist"></a>
<a id="schema_ConfluenceSpaceFieldMappingsList"></a>
<a id="tocSconfluencespacefieldmappingslist"></a>
<a id="tocsconfluencespacefieldmappingslist"></a>

```json
[
  {
    "DataSourceFieldName": {},
    "DateFieldFormat": {},
    "IndexFieldName": {}
  }
]
```

<h2 id="tocS_ConfluenceSpaceToIndexFieldMapping">ConfluenceSpaceToIndexFieldMapping</h2>
<!-- backwards compatibility -->
<a id="schemaconfluencespacetoindexfieldmapping"></a>
<a id="schema_ConfluenceSpaceToIndexFieldMapping"></a>
<a id="tocSconfluencespacetoindexfieldmapping"></a>
<a id="tocsconfluencespacetoindexfieldmapping"></a>

```json
{
  "DataSourceFieldName": {},
  "DateFieldFormat": {},
  "IndexFieldName": {}
}
```

Maps attributes or field names of Confluence spaces to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceFieldName|object|false|none|none|
|DateFieldFormat|object|false|none|none|
|IndexFieldName|object|false|none|none|

<h2 id="tocS_ConfluenceSpaceFieldName">ConfluenceSpaceFieldName</h2>
<!-- backwards compatibility -->
<a id="schemaconfluencespacefieldname"></a>
<a id="schema_ConfluenceSpaceFieldName"></a>
<a id="tocSconfluencespacefieldname"></a>
<a id="tocsconfluencespacefieldname"></a>

```json
"DISPLAY_URL"
```

<h2 id="tocS_ConfluenceSpaceIdentifier">ConfluenceSpaceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaconfluencespaceidentifier"></a>
<a id="schema_ConfluenceSpaceIdentifier"></a>
<a id="tocSconfluencespaceidentifier"></a>
<a id="tocsconfluencespaceidentifier"></a>

```json
"string"
```

<h2 id="tocS_DatabaseHost">DatabaseHost</h2>
<!-- backwards compatibility -->
<a id="schemadatabasehost"></a>
<a id="schema_DatabaseHost"></a>
<a id="tocSdatabasehost"></a>
<a id="tocsdatabasehost"></a>

```json
"string"
```

<h2 id="tocS_DatabasePort">DatabasePort</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseport"></a>
<a id="schema_DatabasePort"></a>
<a id="tocSdatabaseport"></a>
<a id="tocsdatabaseport"></a>

```json
1
```

<h2 id="tocS_DatabaseName">DatabaseName</h2>
<!-- backwards compatibility -->
<a id="schemadatabasename"></a>
<a id="schema_DatabaseName"></a>
<a id="tocSdatabasename"></a>
<a id="tocsdatabasename"></a>

```json
"string"
```

<h2 id="tocS_TableName">TableName</h2>
<!-- backwards compatibility -->
<a id="schematablename"></a>
<a id="schema_TableName"></a>
<a id="tocStablename"></a>
<a id="tocstablename"></a>

```json
"string"
```

<h2 id="tocS_ConnectionConfiguration">ConnectionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionconfiguration"></a>
<a id="schema_ConnectionConfiguration"></a>
<a id="tocSconnectionconfiguration"></a>
<a id="tocsconnectionconfiguration"></a>

```json
{
  "DatabaseHost": {},
  "DatabasePort": {},
  "DatabaseName": {},
  "TableName": {},
  "SecretArn": {}
}
```

Provides the configuration information that's required to connect to a database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseHost|object|true|none|none|
|DatabasePort|object|true|none|none|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|
|SecretArn|object|true|none|none|

<h2 id="tocS_DataSourceIdList">DataSourceIdList</h2>
<!-- backwards compatibility -->
<a id="schemadatasourceidlist"></a>
<a id="schema_DataSourceIdList"></a>
<a id="tocSdatasourceidlist"></a>
<a id="tocsdatasourceidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FaqIdsList">FaqIdsList</h2>
<!-- backwards compatibility -->
<a id="schemafaqidslist"></a>
<a id="schema_FaqIdsList"></a>
<a id="tocSfaqidslist"></a>
<a id="tocsfaqidslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ContentSourceConfiguration">ContentSourceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacontentsourceconfiguration"></a>
<a id="schema_ContentSourceConfiguration"></a>
<a id="tocScontentsourceconfiguration"></a>
<a id="tocscontentsourceconfiguration"></a>

```json
{
  "DataSourceIds": {},
  "FaqIds": {},
  "DirectPutContent": {}
}
```

Provides the configuration information for your content sources, such as data sources, FAQs, and content indexed directly via <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceIds|object|false|none|none|
|FaqIds|object|false|none|none|
|DirectPutContent|object|false|none|none|

<h2 id="tocS_ContentType">ContentType</h2>
<!-- backwards compatibility -->
<a id="schemacontenttype"></a>
<a id="schema_ContentType"></a>
<a id="tocScontenttype"></a>
<a id="tocscontenttype"></a>

```json
"PDF"
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_Correction">Correction</h2>
<!-- backwards compatibility -->
<a id="schemacorrection"></a>
<a id="schema_Correction"></a>
<a id="tocScorrection"></a>
<a id="tocscorrection"></a>

```json
{
  "BeginOffset": {},
  "EndOffset": {},
  "Term": {},
  "CorrectedTerm": {}
}
```

A corrected misspelled word in a query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|
|Term|object|false|none|none|
|CorrectedTerm|object|false|none|none|

<h2 id="tocS_CorrectionList">CorrectionList</h2>
<!-- backwards compatibility -->
<a id="schemacorrectionlist"></a>
<a id="schema_CorrectionList"></a>
<a id="tocScorrectionlist"></a>
<a id="tocscorrectionlist"></a>

```json
[
  {
    "BeginOffset": {},
    "EndOffset": {},
    "Term": {},
    "CorrectedTerm": {}
  }
]
```

<h2 id="tocS_CrawlDepth">CrawlDepth</h2>
<!-- backwards compatibility -->
<a id="schemacrawldepth"></a>
<a id="schema_CrawlDepth"></a>
<a id="tocScrawldepth"></a>
<a id="tocscrawldepth"></a>

```json
0
```

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_PrincipalList">PrincipalList</h2>
<!-- backwards compatibility -->
<a id="schemaprincipallist"></a>
<a id="schema_PrincipalList"></a>
<a id="tocSprincipallist"></a>
<a id="tocsprincipallist"></a>

```json
[
  {
    "Name": {},
    "Type": {},
    "Access": {},
    "DataSourceId": {}
  }
]
```

<h2 id="tocS_HierarchicalPrincipalList">HierarchicalPrincipalList</h2>
<!-- backwards compatibility -->
<a id="schemahierarchicalprincipallist"></a>
<a id="schema_HierarchicalPrincipalList"></a>
<a id="tocShierarchicalprincipallist"></a>
<a id="tocshierarchicalprincipallist"></a>

```json
[
  {
    "PrincipalList": {}
  }
]
```

A list of <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Principal.html">principal</a> lists that define the hierarchy for which documents users should have access to. Each hierarchical list specifies which user or group has allow or deny access for each document.

<h2 id="tocS_DataSourceName">DataSourceName</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcename"></a>
<a id="schema_DataSourceName"></a>
<a id="tocSdatasourcename"></a>
<a id="tocsdatasourcename"></a>

```json
"string"
```

<h2 id="tocS_DataSourceType">DataSourceType</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcetype"></a>
<a id="schema_DataSourceType"></a>
<a id="tocSdatasourcetype"></a>
<a id="tocsdatasourcetype"></a>

```json
"S3"
```

<h2 id="tocS_DataSourceConfiguration">DataSourceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadatasourceconfiguration"></a>
<a id="schema_DataSourceConfiguration"></a>
<a id="tocSdatasourceconfiguration"></a>
<a id="tocsdatasourceconfiguration"></a>

```json
{
  "S3Configuration": {
    "BucketName": {},
    "InclusionPrefixes": {},
    "InclusionPatterns": {},
    "ExclusionPatterns": {},
    "DocumentsMetadataConfiguration": {
      "S3Prefix": {}
    },
    "AccessControlListConfiguration": {
      "KeyPath": {}
    }
  },
  "SharePointConfiguration": {
    "SharePointVersion": {},
    "Urls": {},
    "SecretArn": {},
    "CrawlAttachments": {},
    "UseChangeLog": {},
    "InclusionPatterns": {},
    "ExclusionPatterns": {},
    "VpcConfiguration": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "FieldMappings": {},
    "DocumentTitleFieldName": {},
    "DisableLocalGroups": {},
    "SslCertificateS3Path": {
      "Bucket": {},
      "Key": {}
    },
    "AuthenticationType": {},
    "ProxyConfiguration": {
      "Host": {},
      "Port": {},
      "Credentials": {}
    }
  },
  "DatabaseConfiguration": {
    "DatabaseEngineType": {},
    "ConnectionConfiguration": {
      "DatabaseHost": {},
      "DatabasePort": {},
      "DatabaseName": {},
      "TableName": {},
      "SecretArn": {}
    },
    "VpcConfiguration": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "ColumnConfiguration": {
      "DocumentIdColumnName": {},
      "DocumentDataColumnName": {},
      "DocumentTitleColumnName": {},
      "FieldMappings": {},
      "ChangeDetectingColumns": {}
    },
    "AclConfiguration": {
      "AllowedGroupsColumnName": {}
    },
    "SqlConfiguration": {
      "QueryIdentifiersEnclosingOption": {}
    }
  },
  "SalesforceConfiguration": {
    "ServerUrl": {},
    "SecretArn": {},
    "StandardObjectConfigurations": {},
    "KnowledgeArticleConfiguration": {
      "IncludedStates": {},
      "StandardKnowledgeArticleTypeConfiguration": {
        "DocumentDataFieldName": {},
        "DocumentTitleFieldName": {},
        "FieldMappings": {}
      },
      "CustomKnowledgeArticleTypeConfigurations": {}
    },
    "ChatterFeedConfiguration": {
      "DocumentDataFieldName": {},
      "DocumentTitleFieldName": {},
      "FieldMappings": {},
      "IncludeFilterTypes": {}
    },
    "CrawlAttachments": {},
    "StandardObjectAttachmentConfiguration": {
      "DocumentTitleFieldName": {},
      "FieldMappings": {}
    },
    "IncludeAttachmentFilePatterns": {},
    "ExcludeAttachmentFilePatterns": {}
  },
  "OneDriveConfiguration": {
    "TenantDomain": {},
    "SecretArn": {},
    "OneDriveUsers": {
      "OneDriveUserList": {},
      "OneDriveUserS3Path": {
        "Bucket": {},
        "Key": {}
      }
    },
    "InclusionPatterns": {},
    "ExclusionPatterns": {},
    "FieldMappings": {},
    "DisableLocalGroups": {}
  },
  "ServiceNowConfiguration": {
    "HostUrl": {},
    "SecretArn": {},
    "ServiceNowBuildVersion": {},
    "KnowledgeArticleConfiguration": {
      "CrawlAttachments": {},
      "IncludeAttachmentFilePatterns": {},
      "ExcludeAttachmentFilePatterns": {},
      "DocumentDataFieldName": {},
      "DocumentTitleFieldName": {},
      "FieldMappings": {},
      "FilterQuery": {}
    },
    "ServiceCatalogConfiguration": {
      "CrawlAttachments": {},
      "IncludeAttachmentFilePatterns": {},
      "ExcludeAttachmentFilePatterns": {},
      "DocumentDataFieldName": {},
      "DocumentTitleFieldName": {},
      "FieldMappings": {}
    },
    "AuthenticationType": {}
  },
  "ConfluenceConfiguration": {
    "ServerUrl": {},
    "SecretArn": {},
    "Version": {},
    "SpaceConfiguration": {
      "CrawlPersonalSpaces": {},
      "CrawlArchivedSpaces": {},
      "IncludeSpaces": {},
      "ExcludeSpaces": {},
      "SpaceFieldMappings": {}
    },
    "PageConfiguration": {
      "PageFieldMappings": {}
    },
    "BlogConfiguration": {
      "BlogFieldMappings": {}
    },
    "AttachmentConfiguration": {
      "CrawlAttachments": {},
      "AttachmentFieldMappings": {}
    },
    "VpcConfiguration": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "InclusionPatterns": {},
    "ExclusionPatterns": {},
    "ProxyConfiguration": {
      "Host": {},
      "Port": {},
      "Credentials": {}
    },
    "AuthenticationType": {}
  },
  "GoogleDriveConfiguration": {
    "SecretArn": {},
    "InclusionPatterns": {},
    "ExclusionPatterns": {},
    "FieldMappings": {},
    "ExcludeMimeTypes": {},
    "ExcludeUserAccounts": {},
    "ExcludeSharedDrives": {}
  },
  "WebCrawlerConfiguration": {
    "Urls": {
      "SeedUrlConfiguration": {
        "SeedUrls": {},
        "WebCrawlerMode": {}
      },
      "SiteMapsConfiguration": {
        "SiteMaps": {}
      }
    },
    "CrawlDepth": {},
    "MaxLinksPerPage": {},
    "MaxContentSizePerPageInMegaBytes": {},
    "MaxUrlsPerMinuteCrawlRate": {},
    "UrlInclusionPatterns": {},
    "UrlExclusionPatterns": {},
    "ProxyConfiguration": {
      "Host": {},
      "Port": {},
      "Credentials": {}
    },
    "AuthenticationConfiguration": {
      "BasicAuthentication": {}
    }
  },
  "WorkDocsConfiguration": {
    "OrganizationId": {},
    "CrawlComments": {},
    "UseChangeLog": {},
    "InclusionPatterns": {},
    "ExclusionPatterns": {},
    "FieldMappings": {}
  },
  "FsxConfiguration": {
    "FileSystemId": {},
    "FileSystemType": {},
    "VpcConfiguration": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "SecretArn": {},
    "InclusionPatterns": {},
    "ExclusionPatterns": {},
    "FieldMappings": {}
  },
  "SlackConfiguration": {
    "TeamId": {},
    "SecretArn": {},
    "VpcConfiguration": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "SlackEntityList": {},
    "UseChangeLog": {},
    "CrawlBotMessage": {},
    "ExcludeArchived": {},
    "SinceCrawlDate": {},
    "LookBackPeriod": {},
    "PrivateChannelFilter": {},
    "PublicChannelFilter": {},
    "InclusionPatterns": {},
    "ExclusionPatterns": {},
    "FieldMappings": {}
  },
  "BoxConfiguration": {
    "EnterpriseId": {},
    "SecretArn": {},
    "UseChangeLog": {},
    "CrawlComments": {},
    "CrawlTasks": {},
    "CrawlWebLinks": {},
    "FileFieldMappings": {},
    "TaskFieldMappings": {},
    "CommentFieldMappings": {},
    "WebLinkFieldMappings": {},
    "InclusionPatterns": {},
    "ExclusionPatterns": {},
    "VpcConfiguration": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    }
  },
  "QuipConfiguration": {
    "Domain": {},
    "SecretArn": {},
    "CrawlFileComments": {},
    "CrawlChatRooms": {},
    "CrawlAttachments": {},
    "FolderIds": {},
    "ThreadFieldMappings": {},
    "MessageFieldMappings": {},
    "AttachmentFieldMappings": {},
    "InclusionPatterns": {},
    "ExclusionPatterns": {},
    "VpcConfiguration": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    }
  },
  "JiraConfiguration": {
    "JiraAccountUrl": {},
    "SecretArn": {},
    "UseChangeLog": {},
    "Project": {},
    "IssueType": {},
    "Status": {},
    "IssueSubEntityFilter": {},
    "AttachmentFieldMappings": {},
    "CommentFieldMappings": {},
    "IssueFieldMappings": {},
    "ProjectFieldMappings": {},
    "WorkLogFieldMappings": {},
    "InclusionPatterns": {},
    "ExclusionPatterns": {},
    "VpcConfiguration": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    }
  },
  "GitHubConfiguration": {
    "SaaSConfiguration": {
      "OrganizationName": {},
      "HostUrl": {}
    },
    "OnPremiseConfiguration": {
      "HostUrl": {},
      "OrganizationName": {},
      "SslCertificateS3Path": {
        "Bucket": {},
        "Key": {}
      }
    },
    "Type": {},
    "SecretArn": {},
    "UseChangeLog": {},
    "GitHubDocumentCrawlProperties": {
      "CrawlRepositoryDocuments": {},
      "CrawlIssue": {},
      "CrawlIssueComment": {},
      "CrawlIssueCommentAttachment": {},
      "CrawlPullRequest": {},
      "CrawlPullRequestComment": {},
      "CrawlPullRequestCommentAttachment": {}
    },
    "RepositoryFilter": {},
    "InclusionFolderNamePatterns": {},
    "InclusionFileTypePatterns": {},
    "InclusionFileNamePatterns": {},
    "ExclusionFolderNamePatterns": {},
    "ExclusionFileTypePatterns": {},
    "ExclusionFileNamePatterns": {},
    "VpcConfiguration": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "GitHubRepositoryConfigurationFieldMappings": {},
    "GitHubCommitConfigurationFieldMappings": {},
    "GitHubIssueDocumentConfigurationFieldMappings": {},
    "GitHubIssueCommentConfigurationFieldMappings": {},
    "GitHubIssueAttachmentConfigurationFieldMappings": {},
    "GitHubPullRequestCommentConfigurationFieldMappings": {},
    "GitHubPullRequestDocumentConfigurationFieldMappings": {},
    "GitHubPullRequestDocumentAttachmentConfigurationFieldMappings": {}
  },
  "AlfrescoConfiguration": {
    "SiteUrl": {},
    "SiteId": {},
    "SecretArn": {},
    "SslCertificateS3Path": {
      "Bucket": {},
      "Key": {}
    },
    "CrawlSystemFolders": {},
    "CrawlComments": {},
    "EntityFilter": {},
    "DocumentLibraryFieldMappings": {},
    "BlogFieldMappings": {},
    "WikiFieldMappings": {},
    "InclusionPatterns": {},
    "ExclusionPatterns": {},
    "VpcConfiguration": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    }
  },
  "TemplateConfiguration": {
    "Template": {}
  }
}
```

Provides the configuration information for an Amazon Kendra data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Configuration|object|false|none|none|
|SharePointConfiguration|object|false|none|none|
|DatabaseConfiguration|object|false|none|none|
|SalesforceConfiguration|object|false|none|none|
|OneDriveConfiguration|object|false|none|none|
|ServiceNowConfiguration|object|false|none|none|
|ConfluenceConfiguration|object|false|none|none|
|GoogleDriveConfiguration|object|false|none|none|
|WebCrawlerConfiguration|[WebCrawlerConfiguration](#schemawebcrawlerconfiguration)|false|none|Provides the configuration information required for Amazon Kendra Web Crawler.|
|WorkDocsConfiguration|object|false|none|none|
|FsxConfiguration|object|false|none|none|
|SlackConfiguration|object|false|none|none|
|BoxConfiguration|object|false|none|none|
|QuipConfiguration|object|false|none|none|
|JiraConfiguration|object|false|none|none|
|GitHubConfiguration|object|false|none|none|
|AlfrescoConfiguration|object|false|none|none|
|TemplateConfiguration|object|false|none|none|

<h2 id="tocS_ScanSchedule">ScanSchedule</h2>
<!-- backwards compatibility -->
<a id="schemascanschedule"></a>
<a id="schema_ScanSchedule"></a>
<a id="tocSscanschedule"></a>
<a id="tocsscanschedule"></a>

```json
"string"
```

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_LanguageCode">LanguageCode</h2>
<!-- backwards compatibility -->
<a id="schemalanguagecode"></a>
<a id="schema_LanguageCode"></a>
<a id="tocSlanguagecode"></a>
<a id="tocslanguagecode"></a>

```json
"string"
```

The code for a language. The default language is English. For more information on supported languages, including their codes, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding documents in languages other than English</a>.

<h2 id="tocS_DataSourceId">DataSourceId</h2>
<!-- backwards compatibility -->
<a id="schemadatasourceid"></a>
<a id="schema_DataSourceId"></a>
<a id="tocSdatasourceid"></a>
<a id="tocsdatasourceid"></a>

```json
"string"
```

<h2 id="tocS_ExperienceName">ExperienceName</h2>
<!-- backwards compatibility -->
<a id="schemaexperiencename"></a>
<a id="schema_ExperienceName"></a>
<a id="tocSexperiencename"></a>
<a id="tocsexperiencename"></a>

```json
"string"
```

<h2 id="tocS_ExperienceConfiguration">ExperienceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaexperienceconfiguration"></a>
<a id="schema_ExperienceConfiguration"></a>
<a id="tocSexperienceconfiguration"></a>
<a id="tocsexperienceconfiguration"></a>

```json
{
  "ContentSourceConfiguration": {
    "DataSourceIds": {},
    "FaqIds": {},
    "DirectPutContent": {}
  },
  "UserIdentityConfiguration": {
    "IdentityAttributeName": {}
  }
}
```

Provides the configuration information for your Amazon Kendra experience. This includes the data source IDs and/or FAQ IDs, and user or group information to grant access to your Amazon Kendra experience.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentSourceConfiguration|object|false|none|none|
|UserIdentityConfiguration|object|false|none|none|

<h2 id="tocS_FaqName">FaqName</h2>
<!-- backwards compatibility -->
<a id="schemafaqname"></a>
<a id="schema_FaqName"></a>
<a id="tocSfaqname"></a>
<a id="tocsfaqname"></a>

```json
"string"
```

<h2 id="tocS_FaqFileFormat">FaqFileFormat</h2>
<!-- backwards compatibility -->
<a id="schemafaqfileformat"></a>
<a id="schema_FaqFileFormat"></a>
<a id="tocSfaqfileformat"></a>
<a id="tocsfaqfileformat"></a>

```json
"CSV"
```

<h2 id="tocS_FaqId">FaqId</h2>
<!-- backwards compatibility -->
<a id="schemafaqid"></a>
<a id="schema_FaqId"></a>
<a id="tocSfaqid"></a>
<a id="tocsfaqid"></a>

```json
"string"
```

<h2 id="tocS_FeaturedResultsSetName">FeaturedResultsSetName</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedresultssetname"></a>
<a id="schema_FeaturedResultsSetName"></a>
<a id="tocSfeaturedresultssetname"></a>
<a id="tocsfeaturedresultssetname"></a>

```json
"string"
```

<h2 id="tocS_FeaturedResultsSetDescription">FeaturedResultsSetDescription</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedresultssetdescription"></a>
<a id="schema_FeaturedResultsSetDescription"></a>
<a id="tocSfeaturedresultssetdescription"></a>
<a id="tocsfeaturedresultssetdescription"></a>

```json
"string"
```

<h2 id="tocS_FeaturedResultsSetStatus">FeaturedResultsSetStatus</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedresultssetstatus"></a>
<a id="schema_FeaturedResultsSetStatus"></a>
<a id="tocSfeaturedresultssetstatus"></a>
<a id="tocsfeaturedresultssetstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_QueryTextList">QueryTextList</h2>
<!-- backwards compatibility -->
<a id="schemaquerytextlist"></a>
<a id="schema_QueryTextList"></a>
<a id="tocSquerytextlist"></a>
<a id="tocsquerytextlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FeaturedDocumentList">FeaturedDocumentList</h2>
<!-- backwards compatibility -->
<a id="schemafeatureddocumentlist"></a>
<a id="schema_FeaturedDocumentList"></a>
<a id="tocSfeatureddocumentlist"></a>
<a id="tocsfeatureddocumentlist"></a>

```json
[
  {
    "Id": {}
  }
]
```

<h2 id="tocS_FeaturedResultsSet">FeaturedResultsSet</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedresultsset"></a>
<a id="schema_FeaturedResultsSet"></a>
<a id="tocSfeaturedresultsset"></a>
<a id="tocsfeaturedresultsset"></a>

```json
{
  "FeaturedResultsSetId": {},
  "FeaturedResultsSetName": {},
  "Description": {},
  "Status": {},
  "QueryTexts": {},
  "FeaturedDocuments": {},
  "LastUpdatedTimestamp": {},
  "CreationTimestamp": {}
}
```

A set of featured results that are displayed at the top of your search results. Featured results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FeaturedResultsSetId|object|false|none|none|
|FeaturedResultsSetName|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|QueryTexts|object|false|none|none|
|FeaturedDocuments|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|CreationTimestamp|object|false|none|none|

<h2 id="tocS_IndexName">IndexName</h2>
<!-- backwards compatibility -->
<a id="schemaindexname"></a>
<a id="schema_IndexName"></a>
<a id="tocSindexname"></a>
<a id="tocsindexname"></a>

```json
"string"
```

<h2 id="tocS_IndexEdition">IndexEdition</h2>
<!-- backwards compatibility -->
<a id="schemaindexedition"></a>
<a id="schema_IndexEdition"></a>
<a id="tocSindexedition"></a>
<a id="tocsindexedition"></a>

```json
"DEVELOPER_EDITION"
```

<h2 id="tocS_ServerSideEncryptionConfiguration">ServerSideEncryptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaserversideencryptionconfiguration"></a>
<a id="schema_ServerSideEncryptionConfiguration"></a>
<a id="tocSserversideencryptionconfiguration"></a>
<a id="tocsserversideencryptionconfiguration"></a>

```json
{
  "KmsKeyId": {}
}
```

Provides the identifier of the KMS key used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric keys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KmsKeyId|object|false|none|none|

<h2 id="tocS_UserTokenConfigurationList">UserTokenConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemausertokenconfigurationlist"></a>
<a id="schema_UserTokenConfigurationList"></a>
<a id="tocSusertokenconfigurationlist"></a>
<a id="tocsusertokenconfigurationlist"></a>

```json
[
  {
    "JwtTokenTypeConfiguration": {
      "KeyLocation": {},
      "URL": {},
      "SecretManagerArn": {},
      "UserNameAttributeField": {},
      "GroupAttributeField": {},
      "Issuer": {},
      "ClaimRegex": {}
    },
    "JsonTokenTypeConfiguration": {
      "UserNameAttributeField": {},
      "GroupAttributeField": {}
    }
  }
]
```

<h2 id="tocS_UserContextPolicy">UserContextPolicy</h2>
<!-- backwards compatibility -->
<a id="schemausercontextpolicy"></a>
<a id="schema_UserContextPolicy"></a>
<a id="tocSusercontextpolicy"></a>
<a id="tocsusercontextpolicy"></a>

```json
"ATTRIBUTE_FILTER"
```

<h2 id="tocS_UserGroupResolutionConfiguration">UserGroupResolutionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemausergroupresolutionconfiguration"></a>
<a id="schema_UserGroupResolutionConfiguration"></a>
<a id="tocSusergroupresolutionconfiguration"></a>
<a id="tocsusergroupresolutionconfiguration"></a>

```json
{
  "UserGroupResolutionMode": {}
}
```

<p>Provides the configuration information to get users and groups from an IAM Identity Center (successor to Single Sign-On) identity source. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. You can also use the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_PutPrincipalMapping.html">PutPrincipalMapping</a> API to map users to their groups so that you only need to provide the user ID when you issue the query.</p> <p>To set up an IAM Identity Center identity source in the console to use with Amazon Kendra, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/getting-started-aws-sso.html">Getting started with an IAM Identity Center identity source</a>. You must also grant the required permissions to use IAM Identity Center with Amazon Kendra. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html#iam-roles-aws-sso">IAM roles for IAM Identity Center</a>.</p> <p>Amazon Kendra currently does not support using <code>UserGroupResolutionConfiguration</code> with an Amazon Web Services organization member account for your IAM Identity Center identify source. You must create your index in the management account for the organization in order to use <code>UserGroupResolutionConfiguration</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserGroupResolutionMode|object|true|none|none|

<h2 id="tocS_QuerySuggestionsBlockListName">QuerySuggestionsBlockListName</h2>
<!-- backwards compatibility -->
<a id="schemaquerysuggestionsblocklistname"></a>
<a id="schema_QuerySuggestionsBlockListName"></a>
<a id="tocSquerysuggestionsblocklistname"></a>
<a id="tocsquerysuggestionsblocklistname"></a>

```json
"string"
```

<h2 id="tocS_QuerySuggestionsBlockListId">QuerySuggestionsBlockListId</h2>
<!-- backwards compatibility -->
<a id="schemaquerysuggestionsblocklistid"></a>
<a id="schema_QuerySuggestionsBlockListId"></a>
<a id="tocSquerysuggestionsblocklistid"></a>
<a id="tocsquerysuggestionsblocklistid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_ThesaurusName">ThesaurusName</h2>
<!-- backwards compatibility -->
<a id="schemathesaurusname"></a>
<a id="schema_ThesaurusName"></a>
<a id="tocSthesaurusname"></a>
<a id="tocsthesaurusname"></a>

```json
"string"
```

<h2 id="tocS_ThesaurusId">ThesaurusId</h2>
<!-- backwards compatibility -->
<a id="schemathesaurusid"></a>
<a id="schema_ThesaurusId"></a>
<a id="tocSthesaurusid"></a>
<a id="tocsthesaurusid"></a>

```json
"string"
```

<h2 id="tocS_InlineCustomDocumentEnrichmentConfigurationList">InlineCustomDocumentEnrichmentConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemainlinecustomdocumentenrichmentconfigurationlist"></a>
<a id="schema_InlineCustomDocumentEnrichmentConfigurationList"></a>
<a id="tocSinlinecustomdocumentenrichmentconfigurationlist"></a>
<a id="tocsinlinecustomdocumentenrichmentconfigurationlist"></a>

```json
[
  {
    "Condition": {
      "ConditionDocumentAttributeKey": {},
      "Operator": {},
      "ConditionOnValue": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "Target": {
      "TargetDocumentAttributeKey": {},
      "TargetDocumentAttributeValueDeletion": {},
      "TargetDocumentAttributeValue": {
        "StringValue": {},
        "StringListValue": {},
        "LongValue": {},
        "DateValue": {}
      }
    },
    "DocumentContentDeletion": {}
  }
]
```

<h2 id="tocS_HookConfiguration">HookConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemahookconfiguration"></a>
<a id="schema_HookConfiguration"></a>
<a id="tocShookconfiguration"></a>
<a id="tocshookconfiguration"></a>

```json
{
  "InvocationCondition": {
    "ConditionDocumentAttributeKey": {},
    "Operator": {},
    "ConditionOnValue": {
      "StringValue": {},
      "StringListValue": {},
      "LongValue": {},
      "DateValue": {}
    }
  },
  "LambdaArn": {},
  "S3Bucket": {}
}
```

<p>Provides the configuration information for invoking a Lambda function in Lambda to alter document metadata and content when ingesting documents into Amazon Kendra. You can configure your Lambda function using <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html">PreExtractionHookConfiguration</a> if you want to apply advanced alterations on the original or raw documents. If you want to apply advanced alterations on the Amazon Kendra structured documents, you must configure your Lambda function using <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html">PostExtractionHookConfiguration</a>. You can only invoke one Lambda function. However, this function can invoke other functions it requires.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InvocationCondition|object|false|none|none|
|LambdaArn|object|true|none|none|
|S3Bucket|object|true|none|none|

<h2 id="tocS_S3DataSourceConfiguration">S3DataSourceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemas3datasourceconfiguration"></a>
<a id="schema_S3DataSourceConfiguration"></a>
<a id="tocSs3datasourceconfiguration"></a>
<a id="tocss3datasourceconfiguration"></a>

```json
{
  "BucketName": {},
  "InclusionPrefixes": {},
  "InclusionPatterns": {},
  "ExclusionPatterns": {},
  "DocumentsMetadataConfiguration": {
    "S3Prefix": {}
  },
  "AccessControlListConfiguration": {
    "KeyPath": {}
  }
}
```

Provides the configuration information to connect to an Amazon S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|true|none|none|
|InclusionPrefixes|object|false|none|none|
|InclusionPatterns|object|false|none|none|
|ExclusionPatterns|object|false|none|none|
|DocumentsMetadataConfiguration|[DocumentsMetadataConfiguration](#schemadocumentsmetadataconfiguration)|false|none|Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document.|
|AccessControlListConfiguration|object|false|none|none|

<h2 id="tocS_SharePointConfiguration">SharePointConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasharepointconfiguration"></a>
<a id="schema_SharePointConfiguration"></a>
<a id="tocSsharepointconfiguration"></a>
<a id="tocssharepointconfiguration"></a>

```json
{
  "SharePointVersion": {},
  "Urls": {},
  "SecretArn": {},
  "CrawlAttachments": {},
  "UseChangeLog": {},
  "InclusionPatterns": {},
  "ExclusionPatterns": {},
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "FieldMappings": {},
  "DocumentTitleFieldName": {},
  "DisableLocalGroups": {},
  "SslCertificateS3Path": {
    "Bucket": {},
    "Key": {}
  },
  "AuthenticationType": {},
  "ProxyConfiguration": {
    "Host": {},
    "Port": {},
    "Credentials": {}
  }
}
```

Provides the configuration information to connect to Microsoft SharePoint as your data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SharePointVersion|object|true|none|none|
|Urls|object|true|none|none|
|SecretArn|object|true|none|none|
|CrawlAttachments|object|false|none|none|
|UseChangeLog|object|false|none|none|
|InclusionPatterns|object|false|none|none|
|ExclusionPatterns|object|false|none|none|
|VpcConfiguration|object|false|none|none|
|FieldMappings|object|false|none|none|
|DocumentTitleFieldName|object|false|none|none|
|DisableLocalGroups|object|false|none|none|
|SslCertificateS3Path|object|false|none|none|
|AuthenticationType|object|false|none|none|
|ProxyConfiguration|object|false|none|none|

<h2 id="tocS_DatabaseConfiguration">DatabaseConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseconfiguration"></a>
<a id="schema_DatabaseConfiguration"></a>
<a id="tocSdatabaseconfiguration"></a>
<a id="tocsdatabaseconfiguration"></a>

```json
{
  "DatabaseEngineType": {},
  "ConnectionConfiguration": {
    "DatabaseHost": {},
    "DatabasePort": {},
    "DatabaseName": {},
    "TableName": {},
    "SecretArn": {}
  },
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "ColumnConfiguration": {
    "DocumentIdColumnName": {},
    "DocumentDataColumnName": {},
    "DocumentTitleColumnName": {},
    "FieldMappings": {},
    "ChangeDetectingColumns": {}
  },
  "AclConfiguration": {
    "AllowedGroupsColumnName": {}
  },
  "SqlConfiguration": {
    "QueryIdentifiersEnclosingOption": {}
  }
}
```

Provides the configuration information to connect to a index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseEngineType|object|true|none|none|
|ConnectionConfiguration|object|true|none|none|
|VpcConfiguration|[DataSourceVpcConfiguration](#schemadatasourcevpcconfiguration)|false|none|Provides the configuration information to connect to an Amazon VPC.|
|ColumnConfiguration|object|true|none|none|
|AclConfiguration|object|false|none|none|
|SqlConfiguration|object|false|none|none|

<h2 id="tocS_SalesforceConfiguration">SalesforceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasalesforceconfiguration"></a>
<a id="schema_SalesforceConfiguration"></a>
<a id="tocSsalesforceconfiguration"></a>
<a id="tocssalesforceconfiguration"></a>

```json
{
  "ServerUrl": {},
  "SecretArn": {},
  "StandardObjectConfigurations": {},
  "KnowledgeArticleConfiguration": {
    "IncludedStates": {},
    "StandardKnowledgeArticleTypeConfiguration": {
      "DocumentDataFieldName": {},
      "DocumentTitleFieldName": {},
      "FieldMappings": {}
    },
    "CustomKnowledgeArticleTypeConfigurations": {}
  },
  "ChatterFeedConfiguration": {
    "DocumentDataFieldName": {},
    "DocumentTitleFieldName": {},
    "FieldMappings": {},
    "IncludeFilterTypes": {}
  },
  "CrawlAttachments": {},
  "StandardObjectAttachmentConfiguration": {
    "DocumentTitleFieldName": {},
    "FieldMappings": {}
  },
  "IncludeAttachmentFilePatterns": {},
  "ExcludeAttachmentFilePatterns": {}
}
```

Provides the configuration information to connect to Salesforce as your data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerUrl|object|true|none|none|
|SecretArn|object|true|none|none|
|StandardObjectConfigurations|object|false|none|none|
|KnowledgeArticleConfiguration|object|false|none|none|
|ChatterFeedConfiguration|object|false|none|none|
|CrawlAttachments|object|false|none|none|
|StandardObjectAttachmentConfiguration|object|false|none|none|
|IncludeAttachmentFilePatterns|object|false|none|none|
|ExcludeAttachmentFilePatterns|object|false|none|none|

<h2 id="tocS_OneDriveConfiguration">OneDriveConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaonedriveconfiguration"></a>
<a id="schema_OneDriveConfiguration"></a>
<a id="tocSonedriveconfiguration"></a>
<a id="tocsonedriveconfiguration"></a>

```json
{
  "TenantDomain": {},
  "SecretArn": {},
  "OneDriveUsers": {
    "OneDriveUserList": {},
    "OneDriveUserS3Path": {
      "Bucket": {},
      "Key": {}
    }
  },
  "InclusionPatterns": {},
  "ExclusionPatterns": {},
  "FieldMappings": {},
  "DisableLocalGroups": {}
}
```

Provides the configuration information to connect to OneDrive as your data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TenantDomain|object|true|none|none|
|SecretArn|object|true|none|none|
|OneDriveUsers|object|true|none|none|
|InclusionPatterns|object|false|none|none|
|ExclusionPatterns|object|false|none|none|
|FieldMappings|object|false|none|none|
|DisableLocalGroups|object|false|none|none|

<h2 id="tocS_ServiceNowConfiguration">ServiceNowConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaservicenowconfiguration"></a>
<a id="schema_ServiceNowConfiguration"></a>
<a id="tocSservicenowconfiguration"></a>
<a id="tocsservicenowconfiguration"></a>

```json
{
  "HostUrl": {},
  "SecretArn": {},
  "ServiceNowBuildVersion": {},
  "KnowledgeArticleConfiguration": {
    "CrawlAttachments": {},
    "IncludeAttachmentFilePatterns": {},
    "ExcludeAttachmentFilePatterns": {},
    "DocumentDataFieldName": {},
    "DocumentTitleFieldName": {},
    "FieldMappings": {},
    "FilterQuery": {}
  },
  "ServiceCatalogConfiguration": {
    "CrawlAttachments": {},
    "IncludeAttachmentFilePatterns": {},
    "ExcludeAttachmentFilePatterns": {},
    "DocumentDataFieldName": {},
    "DocumentTitleFieldName": {},
    "FieldMappings": {}
  },
  "AuthenticationType": {}
}
```

Provides the configuration information to connect to ServiceNow as your data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostUrl|object|true|none|none|
|SecretArn|object|true|none|none|
|ServiceNowBuildVersion|object|true|none|none|
|KnowledgeArticleConfiguration|object|false|none|none|
|ServiceCatalogConfiguration|object|false|none|none|
|AuthenticationType|object|false|none|none|

<h2 id="tocS_GoogleDriveConfiguration">GoogleDriveConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemagoogledriveconfiguration"></a>
<a id="schema_GoogleDriveConfiguration"></a>
<a id="tocSgoogledriveconfiguration"></a>
<a id="tocsgoogledriveconfiguration"></a>

```json
{
  "SecretArn": {},
  "InclusionPatterns": {},
  "ExclusionPatterns": {},
  "FieldMappings": {},
  "ExcludeMimeTypes": {},
  "ExcludeUserAccounts": {},
  "ExcludeSharedDrives": {}
}
```

Provides the configuration information to connect to Google Drive as your data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretArn|object|true|none|none|
|InclusionPatterns|object|false|none|none|
|ExclusionPatterns|object|false|none|none|
|FieldMappings|object|false|none|none|
|ExcludeMimeTypes|object|false|none|none|
|ExcludeUserAccounts|object|false|none|none|
|ExcludeSharedDrives|object|false|none|none|

<h2 id="tocS_WebCrawlerConfiguration">WebCrawlerConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemawebcrawlerconfiguration"></a>
<a id="schema_WebCrawlerConfiguration"></a>
<a id="tocSwebcrawlerconfiguration"></a>
<a id="tocswebcrawlerconfiguration"></a>

```json
{
  "Urls": {
    "SeedUrlConfiguration": {
      "SeedUrls": {},
      "WebCrawlerMode": {}
    },
    "SiteMapsConfiguration": {
      "SiteMaps": {}
    }
  },
  "CrawlDepth": {},
  "MaxLinksPerPage": {},
  "MaxContentSizePerPageInMegaBytes": {},
  "MaxUrlsPerMinuteCrawlRate": {},
  "UrlInclusionPatterns": {},
  "UrlExclusionPatterns": {},
  "ProxyConfiguration": {
    "Host": {},
    "Port": {},
    "Credentials": {}
  },
  "AuthenticationConfiguration": {
    "BasicAuthentication": {}
  }
}
```

Provides the configuration information required for Amazon Kendra Web Crawler.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Urls|object|true|none|none|
|CrawlDepth|object|false|none|none|
|MaxLinksPerPage|object|false|none|none|
|MaxContentSizePerPageInMegaBytes|object|false|none|none|
|MaxUrlsPerMinuteCrawlRate|object|false|none|none|
|UrlInclusionPatterns|object|false|none|none|
|UrlExclusionPatterns|object|false|none|none|
|ProxyConfiguration|object|false|none|none|
|AuthenticationConfiguration|object|false|none|none|

<h2 id="tocS_WorkDocsConfiguration">WorkDocsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaworkdocsconfiguration"></a>
<a id="schema_WorkDocsConfiguration"></a>
<a id="tocSworkdocsconfiguration"></a>
<a id="tocsworkdocsconfiguration"></a>

```json
{
  "OrganizationId": {},
  "CrawlComments": {},
  "UseChangeLog": {},
  "InclusionPatterns": {},
  "ExclusionPatterns": {},
  "FieldMappings": {}
}
```

<p>Provides the configuration information to connect to Amazon WorkDocs as your data source.</p> <p>Amazon WorkDocs connector is available in Oregon, North Virginia, Sydney, Singapore and Ireland regions.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationId|object|true|none|none|
|CrawlComments|object|false|none|none|
|UseChangeLog|object|false|none|none|
|InclusionPatterns|object|false|none|none|
|ExclusionPatterns|object|false|none|none|
|FieldMappings|object|false|none|none|

<h2 id="tocS_FsxConfiguration">FsxConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafsxconfiguration"></a>
<a id="schema_FsxConfiguration"></a>
<a id="tocSfsxconfiguration"></a>
<a id="tocsfsxconfiguration"></a>

```json
{
  "FileSystemId": {},
  "FileSystemType": {},
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "SecretArn": {},
  "InclusionPatterns": {},
  "ExclusionPatterns": {},
  "FieldMappings": {}
}
```

Provides the configuration information to connect to Amazon FSx as your data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileSystemId|object|true|none|none|
|FileSystemType|object|true|none|none|
|VpcConfiguration|object|true|none|none|
|SecretArn|object|false|none|none|
|InclusionPatterns|object|false|none|none|
|ExclusionPatterns|object|false|none|none|
|FieldMappings|object|false|none|none|

<h2 id="tocS_SlackConfiguration">SlackConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaslackconfiguration"></a>
<a id="schema_SlackConfiguration"></a>
<a id="tocSslackconfiguration"></a>
<a id="tocsslackconfiguration"></a>

```json
{
  "TeamId": {},
  "SecretArn": {},
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "SlackEntityList": {},
  "UseChangeLog": {},
  "CrawlBotMessage": {},
  "ExcludeArchived": {},
  "SinceCrawlDate": {},
  "LookBackPeriod": {},
  "PrivateChannelFilter": {},
  "PublicChannelFilter": {},
  "InclusionPatterns": {},
  "ExclusionPatterns": {},
  "FieldMappings": {}
}
```

Provides the configuration information to connect to Slack as your data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TeamId|object|true|none|none|
|SecretArn|object|true|none|none|
|VpcConfiguration|object|false|none|none|
|SlackEntityList|object|true|none|none|
|UseChangeLog|object|false|none|none|
|CrawlBotMessage|object|false|none|none|
|ExcludeArchived|object|false|none|none|
|SinceCrawlDate|object|true|none|none|
|LookBackPeriod|object|false|none|none|
|PrivateChannelFilter|object|false|none|none|
|PublicChannelFilter|object|false|none|none|
|InclusionPatterns|object|false|none|none|
|ExclusionPatterns|object|false|none|none|
|FieldMappings|object|false|none|none|

<h2 id="tocS_QuipConfiguration">QuipConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaquipconfiguration"></a>
<a id="schema_QuipConfiguration"></a>
<a id="tocSquipconfiguration"></a>
<a id="tocsquipconfiguration"></a>

```json
{
  "Domain": {},
  "SecretArn": {},
  "CrawlFileComments": {},
  "CrawlChatRooms": {},
  "CrawlAttachments": {},
  "FolderIds": {},
  "ThreadFieldMappings": {},
  "MessageFieldMappings": {},
  "AttachmentFieldMappings": {},
  "InclusionPatterns": {},
  "ExclusionPatterns": {},
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  }
}
```

Provides the configuration information to connect to Quip as your data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Domain|object|true|none|none|
|SecretArn|object|true|none|none|
|CrawlFileComments|object|false|none|none|
|CrawlChatRooms|object|false|none|none|
|CrawlAttachments|object|false|none|none|
|FolderIds|object|false|none|none|
|ThreadFieldMappings|object|false|none|none|
|MessageFieldMappings|object|false|none|none|
|AttachmentFieldMappings|object|false|none|none|
|InclusionPatterns|object|false|none|none|
|ExclusionPatterns|object|false|none|none|
|VpcConfiguration|object|false|none|none|

<h2 id="tocS_JiraConfiguration">JiraConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemajiraconfiguration"></a>
<a id="schema_JiraConfiguration"></a>
<a id="tocSjiraconfiguration"></a>
<a id="tocsjiraconfiguration"></a>

```json
{
  "JiraAccountUrl": {},
  "SecretArn": {},
  "UseChangeLog": {},
  "Project": {},
  "IssueType": {},
  "Status": {},
  "IssueSubEntityFilter": {},
  "AttachmentFieldMappings": {},
  "CommentFieldMappings": {},
  "IssueFieldMappings": {},
  "ProjectFieldMappings": {},
  "WorkLogFieldMappings": {},
  "InclusionPatterns": {},
  "ExclusionPatterns": {},
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  }
}
```

Provides the configuration information to connect to Jira as your data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JiraAccountUrl|object|true|none|none|
|SecretArn|object|true|none|none|
|UseChangeLog|object|false|none|none|
|Project|object|false|none|none|
|IssueType|object|false|none|none|
|Status|object|false|none|none|
|IssueSubEntityFilter|object|false|none|none|
|AttachmentFieldMappings|object|false|none|none|
|CommentFieldMappings|object|false|none|none|
|IssueFieldMappings|object|false|none|none|
|ProjectFieldMappings|object|false|none|none|
|WorkLogFieldMappings|object|false|none|none|
|InclusionPatterns|object|false|none|none|
|ExclusionPatterns|object|false|none|none|
|VpcConfiguration|object|false|none|none|

<h2 id="tocS_GitHubConfiguration">GitHubConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemagithubconfiguration"></a>
<a id="schema_GitHubConfiguration"></a>
<a id="tocSgithubconfiguration"></a>
<a id="tocsgithubconfiguration"></a>

```json
{
  "SaaSConfiguration": {
    "OrganizationName": {},
    "HostUrl": {}
  },
  "OnPremiseConfiguration": {
    "HostUrl": {},
    "OrganizationName": {},
    "SslCertificateS3Path": {
      "Bucket": {},
      "Key": {}
    }
  },
  "Type": {},
  "SecretArn": {},
  "UseChangeLog": {},
  "GitHubDocumentCrawlProperties": {
    "CrawlRepositoryDocuments": {},
    "CrawlIssue": {},
    "CrawlIssueComment": {},
    "CrawlIssueCommentAttachment": {},
    "CrawlPullRequest": {},
    "CrawlPullRequestComment": {},
    "CrawlPullRequestCommentAttachment": {}
  },
  "RepositoryFilter": {},
  "InclusionFolderNamePatterns": {},
  "InclusionFileTypePatterns": {},
  "InclusionFileNamePatterns": {},
  "ExclusionFolderNamePatterns": {},
  "ExclusionFileTypePatterns": {},
  "ExclusionFileNamePatterns": {},
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "GitHubRepositoryConfigurationFieldMappings": {},
  "GitHubCommitConfigurationFieldMappings": {},
  "GitHubIssueDocumentConfigurationFieldMappings": {},
  "GitHubIssueCommentConfigurationFieldMappings": {},
  "GitHubIssueAttachmentConfigurationFieldMappings": {},
  "GitHubPullRequestCommentConfigurationFieldMappings": {},
  "GitHubPullRequestDocumentConfigurationFieldMappings": {},
  "GitHubPullRequestDocumentAttachmentConfigurationFieldMappings": {}
}
```

Provides the configuration information to connect to GitHub as your data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SaaSConfiguration|object|false|none|none|
|OnPremiseConfiguration|object|false|none|none|
|Type|object|false|none|none|
|SecretArn|object|true|none|none|
|UseChangeLog|object|false|none|none|
|GitHubDocumentCrawlProperties|object|false|none|none|
|RepositoryFilter|object|false|none|none|
|InclusionFolderNamePatterns|object|false|none|none|
|InclusionFileTypePatterns|object|false|none|none|
|InclusionFileNamePatterns|object|false|none|none|
|ExclusionFolderNamePatterns|object|false|none|none|
|ExclusionFileTypePatterns|object|false|none|none|
|ExclusionFileNamePatterns|object|false|none|none|
|VpcConfiguration|object|false|none|none|
|GitHubRepositoryConfigurationFieldMappings|object|false|none|none|
|GitHubCommitConfigurationFieldMappings|object|false|none|none|
|GitHubIssueDocumentConfigurationFieldMappings|object|false|none|none|
|GitHubIssueCommentConfigurationFieldMappings|object|false|none|none|
|GitHubIssueAttachmentConfigurationFieldMappings|object|false|none|none|
|GitHubPullRequestCommentConfigurationFieldMappings|object|false|none|none|
|GitHubPullRequestDocumentConfigurationFieldMappings|object|false|none|none|
|GitHubPullRequestDocumentAttachmentConfigurationFieldMappings|object|false|none|none|

<h2 id="tocS_TemplateConfiguration">TemplateConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematemplateconfiguration"></a>
<a id="schema_TemplateConfiguration"></a>
<a id="tocStemplateconfiguration"></a>
<a id="tocstemplateconfiguration"></a>

```json
{
  "Template": {}
}
```

Provides a template for the configuration information to connect to your data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Template|object|false|none|none|

<h2 id="tocS_DataSourceFieldName">DataSourceFieldName</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcefieldname"></a>
<a id="schema_DataSourceFieldName"></a>
<a id="tocSdatasourcefieldname"></a>
<a id="tocsdatasourcefieldname"></a>

```json
"string"
```

<h2 id="tocS_PrincipalName">PrincipalName</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalname"></a>
<a id="schema_PrincipalName"></a>
<a id="tocSprincipalname"></a>
<a id="tocsprincipalname"></a>

```json
"string"
```

<h2 id="tocS_DataSourceGroup">DataSourceGroup</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcegroup"></a>
<a id="schema_DataSourceGroup"></a>
<a id="tocSdatasourcegroup"></a>
<a id="tocsdatasourcegroup"></a>

```json
{
  "GroupId": {},
  "DataSourceId": {}
}
```

Data source information for user context filtering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|true|none|none|
|DataSourceId|object|true|none|none|

<h2 id="tocS_DataSourceGroups">DataSourceGroups</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcegroups"></a>
<a id="schema_DataSourceGroups"></a>
<a id="tocSdatasourcegroups"></a>
<a id="tocsdatasourcegroups"></a>

```json
[
  {
    "GroupId": {},
    "DataSourceId": {}
  }
]
```

<h2 id="tocS_DataSourceInclusionsExclusionsStringsMember">DataSourceInclusionsExclusionsStringsMember</h2>
<!-- backwards compatibility -->
<a id="schemadatasourceinclusionsexclusionsstringsmember"></a>
<a id="schema_DataSourceInclusionsExclusionsStringsMember"></a>
<a id="tocSdatasourceinclusionsexclusionsstringsmember"></a>
<a id="tocsdatasourceinclusionsexclusionsstringsmember"></a>

```json
"string"
```

<h2 id="tocS_DataSourceStatus">DataSourceStatus</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcestatus"></a>
<a id="schema_DataSourceStatus"></a>
<a id="tocSdatasourcestatus"></a>
<a id="tocsdatasourcestatus"></a>

```json
"CREATING"
```

<h2 id="tocS_DataSourceSummary">DataSourceSummary</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcesummary"></a>
<a id="schema_DataSourceSummary"></a>
<a id="tocSdatasourcesummary"></a>
<a id="tocsdatasourcesummary"></a>

```json
{
  "Name": {},
  "Id": {},
  "Type": {},
  "CreatedAt": {},
  "UpdatedAt": {},
  "Status": {},
  "LanguageCode": {}
}
```

Summary information for a Amazon Kendra data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Id|object|false|none|none|
|Type|object|false|none|none|
|CreatedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|
|Status|object|false|none|none|
|LanguageCode|object|false|none|none|

<h2 id="tocS_DataSourceSummaryList">DataSourceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcesummarylist"></a>
<a id="schema_DataSourceSummaryList"></a>
<a id="tocSdatasourcesummarylist"></a>
<a id="tocsdatasourcesummarylist"></a>

```json
[
  {
    "Name": {},
    "Id": {},
    "Type": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "Status": {},
    "LanguageCode": {}
  }
]
```

<h2 id="tocS_DataSourceSyncJobStatus">DataSourceSyncJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcesyncjobstatus"></a>
<a id="schema_DataSourceSyncJobStatus"></a>
<a id="tocSdatasourcesyncjobstatus"></a>
<a id="tocsdatasourcesyncjobstatus"></a>

```json
"FAILED"
```

<h2 id="tocS_DataSourceSyncJobMetrics">DataSourceSyncJobMetrics</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcesyncjobmetrics"></a>
<a id="schema_DataSourceSyncJobMetrics"></a>
<a id="tocSdatasourcesyncjobmetrics"></a>
<a id="tocsdatasourcesyncjobmetrics"></a>

```json
{
  "DocumentsAdded": {},
  "DocumentsModified": {},
  "DocumentsDeleted": {},
  "DocumentsFailed": {},
  "DocumentsScanned": {}
}
```

Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a data source connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentsAdded|object|false|none|none|
|DocumentsModified|object|false|none|none|
|DocumentsDeleted|object|false|none|none|
|DocumentsFailed|object|false|none|none|
|DocumentsScanned|object|false|none|none|

<h2 id="tocS_DataSourceSyncJob">DataSourceSyncJob</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcesyncjob"></a>
<a id="schema_DataSourceSyncJob"></a>
<a id="tocSdatasourcesyncjob"></a>
<a id="tocsdatasourcesyncjob"></a>

```json
{
  "ExecutionId": {},
  "StartTime": {},
  "EndTime": {},
  "Status": {},
  "ErrorMessage": {},
  "ErrorCode": {},
  "DataSourceErrorCode": {},
  "Metrics": {
    "DocumentsAdded": {},
    "DocumentsModified": {},
    "DocumentsDeleted": {},
    "DocumentsFailed": {},
    "DocumentsScanned": {}
  }
}
```

Provides information about a data source synchronization job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExecutionId|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Status|object|false|none|none|
|ErrorMessage|object|false|none|none|
|ErrorCode|object|false|none|none|
|DataSourceErrorCode|object|false|none|none|
|Metrics|object|false|none|none|

<h2 id="tocS_DataSourceSyncJobHistoryList">DataSourceSyncJobHistoryList</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcesyncjobhistorylist"></a>
<a id="schema_DataSourceSyncJobHistoryList"></a>
<a id="tocSdatasourcesyncjobhistorylist"></a>
<a id="tocsdatasourcesyncjobhistorylist"></a>

```json
[
  {
    "ExecutionId": {},
    "StartTime": {},
    "EndTime": {},
    "Status": {},
    "ErrorMessage": {},
    "ErrorCode": {},
    "DataSourceErrorCode": {},
    "Metrics": {
      "DocumentsAdded": {},
      "DocumentsModified": {},
      "DocumentsDeleted": {},
      "DocumentsFailed": {},
      "DocumentsScanned": {}
    }
  }
]
```

<h2 id="tocS_DataSourceSyncJobId">DataSourceSyncJobId</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcesyncjobid"></a>
<a id="schema_DataSourceSyncJobId"></a>
<a id="tocSdatasourcesyncjobid"></a>
<a id="tocsdatasourcesyncjobid"></a>

```json
"string"
```

<h2 id="tocS_MetricValue">MetricValue</h2>
<!-- backwards compatibility -->
<a id="schemametricvalue"></a>
<a id="schema_MetricValue"></a>
<a id="tocSmetricvalue"></a>
<a id="tocsmetricvalue"></a>

```json
"string"
```

<h2 id="tocS_DataSourceToIndexFieldMapping">DataSourceToIndexFieldMapping</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcetoindexfieldmapping"></a>
<a id="schema_DataSourceToIndexFieldMapping"></a>
<a id="tocSdatasourcetoindexfieldmapping"></a>
<a id="tocsdatasourcetoindexfieldmapping"></a>

```json
{
  "DataSourceFieldName": {},
  "DateFieldFormat": {},
  "IndexFieldName": {}
}
```

Maps a column or attribute in the data source to an index field. You must first create the fields in the index using the <code>UpdateIndex</code> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceFieldName|object|true|none|none|
|DateFieldFormat|object|false|none|none|
|IndexFieldName|object|true|none|none|

<h2 id="tocS_SubnetIdList">SubnetIdList</h2>
<!-- backwards compatibility -->
<a id="schemasubnetidlist"></a>
<a id="schema_SubnetIdList"></a>
<a id="tocSsubnetidlist"></a>
<a id="tocssubnetidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SecurityGroupIdList">SecurityGroupIdList</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupidlist"></a>
<a id="schema_SecurityGroupIdList"></a>
<a id="tocSsecuritygroupidlist"></a>
<a id="tocssecuritygroupidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DatabaseEngineType">DatabaseEngineType</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseenginetype"></a>
<a id="schema_DatabaseEngineType"></a>
<a id="tocSdatabaseenginetype"></a>
<a id="tocsdatabaseenginetype"></a>

```json
"RDS_AURORA_MYSQL"
```

<h2 id="tocS_SqlConfiguration">SqlConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasqlconfiguration"></a>
<a id="schema_SqlConfiguration"></a>
<a id="tocSsqlconfiguration"></a>
<a id="tocssqlconfiguration"></a>

```json
{
  "QueryIdentifiersEnclosingOption": {}
}
```

Provides the configuration information to use a SQL database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryIdentifiersEnclosingOption|object|false|none|none|

<h2 id="tocS_GroupId">GroupId</h2>
<!-- backwards compatibility -->
<a id="schemagroupid"></a>
<a id="schema_GroupId"></a>
<a id="tocSgroupid"></a>
<a id="tocsgroupid"></a>

```json
"string"
```

<h2 id="tocS_PrincipalOrderingId">PrincipalOrderingId</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalorderingid"></a>
<a id="schema_PrincipalOrderingId"></a>
<a id="tocSprincipalorderingid"></a>
<a id="tocsprincipalorderingid"></a>

```json
0
```

<h2 id="tocS_ExperienceEndpoints">ExperienceEndpoints</h2>
<!-- backwards compatibility -->
<a id="schemaexperienceendpoints"></a>
<a id="schema_ExperienceEndpoints"></a>
<a id="tocSexperienceendpoints"></a>
<a id="tocsexperienceendpoints"></a>

```json
[
  {
    "EndpointType": {},
    "Endpoint": {}
  }
]
```

<h2 id="tocS_ExperienceStatus">ExperienceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexperiencestatus"></a>
<a id="schema_ExperienceStatus"></a>
<a id="tocSexperiencestatus"></a>
<a id="tocsexperiencestatus"></a>

```json
"CREATING"
```

<h2 id="tocS_FaqStatus">FaqStatus</h2>
<!-- backwards compatibility -->
<a id="schemafaqstatus"></a>
<a id="schema_FaqStatus"></a>
<a id="tocSfaqstatus"></a>
<a id="tocsfaqstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_FeaturedDocumentWithMetadataList">FeaturedDocumentWithMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemafeatureddocumentwithmetadatalist"></a>
<a id="schema_FeaturedDocumentWithMetadataList"></a>
<a id="tocSfeatureddocumentwithmetadatalist"></a>
<a id="tocsfeatureddocumentwithmetadatalist"></a>

```json
[
  {
    "Id": {},
    "Title": {},
    "URI": {}
  }
]
```

<h2 id="tocS_FeaturedDocumentMissingList">FeaturedDocumentMissingList</h2>
<!-- backwards compatibility -->
<a id="schemafeatureddocumentmissinglist"></a>
<a id="schema_FeaturedDocumentMissingList"></a>
<a id="tocSfeatureddocumentmissinglist"></a>
<a id="tocsfeatureddocumentmissinglist"></a>

```json
[
  {
    "Id": {}
  }
]
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_IndexStatus">IndexStatus</h2>
<!-- backwards compatibility -->
<a id="schemaindexstatus"></a>
<a id="schema_IndexStatus"></a>
<a id="tocSindexstatus"></a>
<a id="tocsindexstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_DocumentMetadataConfigurationList">DocumentMetadataConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentmetadataconfigurationlist"></a>
<a id="schema_DocumentMetadataConfigurationList"></a>
<a id="tocSdocumentmetadataconfigurationlist"></a>
<a id="tocsdocumentmetadataconfigurationlist"></a>

```json
[
  {
    "Name": {},
    "Type": {},
    "Relevance": {
      "Freshness": {},
      "Importance": {},
      "Duration": {},
      "RankOrder": {},
      "ValueImportanceMap": {
        "property1": 1,
        "property2": 1
      }
    },
    "Search": {
      "Facetable": {},
      "Searchable": {},
      "Displayable": {},
      "Sortable": {}
    }
  }
]
```

<h2 id="tocS_IndexStatistics">IndexStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaindexstatistics"></a>
<a id="schema_IndexStatistics"></a>
<a id="tocSindexstatistics"></a>
<a id="tocsindexstatistics"></a>

```json
{
  "FaqStatistics": {
    "IndexedQuestionAnswersCount": {}
  },
  "TextDocumentStatistics": {
    "IndexedTextDocumentsCount": {},
    "IndexedTextBytes": {}
  }
}
```

Provides information about the number of documents and the number of questions and answers in an index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FaqStatistics|object|true|none|none|
|TextDocumentStatistics|object|true|none|none|

<h2 id="tocS_GroupOrderingIdSummaries">GroupOrderingIdSummaries</h2>
<!-- backwards compatibility -->
<a id="schemagrouporderingidsummaries"></a>
<a id="schema_GroupOrderingIdSummaries"></a>
<a id="tocSgrouporderingidsummaries"></a>
<a id="tocsgrouporderingidsummaries"></a>

```json
[
  {
    "Status": {},
    "LastUpdatedAt": {},
    "ReceivedAt": {},
    "OrderingId": {},
    "FailureReason": {}
  }
]
```

<h2 id="tocS_QuerySuggestionsBlockListStatus">QuerySuggestionsBlockListStatus</h2>
<!-- backwards compatibility -->
<a id="schemaquerysuggestionsblockliststatus"></a>
<a id="schema_QuerySuggestionsBlockListStatus"></a>
<a id="tocSquerysuggestionsblockliststatus"></a>
<a id="tocsquerysuggestionsblockliststatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_Mode">Mode</h2>
<!-- backwards compatibility -->
<a id="schemamode"></a>
<a id="schema_Mode"></a>
<a id="tocSmode"></a>
<a id="tocsmode"></a>

```json
"ENABLED"
```

<h2 id="tocS_QuerySuggestionsStatus">QuerySuggestionsStatus</h2>
<!-- backwards compatibility -->
<a id="schemaquerysuggestionsstatus"></a>
<a id="schema_QuerySuggestionsStatus"></a>
<a id="tocSquerysuggestionsstatus"></a>
<a id="tocsquerysuggestionsstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ObjectBoolean">ObjectBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaobjectboolean"></a>
<a id="schema_ObjectBoolean"></a>
<a id="tocSobjectboolean"></a>
<a id="tocsobjectboolean"></a>

```json
true
```

<h2 id="tocS_MinimumNumberOfQueryingUsers">MinimumNumberOfQueryingUsers</h2>
<!-- backwards compatibility -->
<a id="schemaminimumnumberofqueryingusers"></a>
<a id="schema_MinimumNumberOfQueryingUsers"></a>
<a id="tocSminimumnumberofqueryingusers"></a>
<a id="tocsminimumnumberofqueryingusers"></a>

```json
1
```

<h2 id="tocS_MinimumQueryCount">MinimumQueryCount</h2>
<!-- backwards compatibility -->
<a id="schemaminimumquerycount"></a>
<a id="schema_MinimumQueryCount"></a>
<a id="tocSminimumquerycount"></a>
<a id="tocsminimumquerycount"></a>

```json
1
```

<h2 id="tocS_ThesaurusStatus">ThesaurusStatus</h2>
<!-- backwards compatibility -->
<a id="schemathesaurusstatus"></a>
<a id="schema_ThesaurusStatus"></a>
<a id="tocSthesaurusstatus"></a>
<a id="tocsthesaurusstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_DisassociateEntityList">DisassociateEntityList</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateentitylist"></a>
<a id="schema_DisassociateEntityList"></a>
<a id="tocSdisassociateentitylist"></a>
<a id="tocsdisassociateentitylist"></a>

```json
[
  {
    "EntityId": {},
    "EntityType": {}
  }
]
```

<h2 id="tocS_EntityIdsList">EntityIdsList</h2>
<!-- backwards compatibility -->
<a id="schemaentityidslist"></a>
<a id="schema_EntityIdsList"></a>
<a id="tocSentityidslist"></a>
<a id="tocsentityidslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Title">Title</h2>
<!-- backwards compatibility -->
<a id="schematitle"></a>
<a id="schema_Title"></a>
<a id="tocStitle"></a>
<a id="tocstitle"></a>

```json
"string"
```

<h2 id="tocS_DocumentAttributeList">DocumentAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentattributelist"></a>
<a id="schema_DocumentAttributeList"></a>
<a id="tocSdocumentattributelist"></a>
<a id="tocsdocumentattributelist"></a>

```json
[
  {
    "Key": {},
    "Value": {
      "StringValue": {},
      "StringListValue": {},
      "LongValue": {},
      "DateValue": {}
    }
  }
]
```

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "Id": {},
  "Title": {},
  "Blob": {},
  "S3Path": {
    "Bucket": {},
    "Key": {}
  },
  "Attributes": {},
  "AccessControlList": {},
  "HierarchicalAccessControlList": {},
  "ContentType": {},
  "AccessControlConfigurationId": {}
}
```

A document in an index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Title|object|false|none|none|
|Blob|object|false|none|none|
|S3Path|[S3Path](#schemas3path)|false|none|Information required to find a specific file in an Amazon S3 bucket.|
|Attributes|object|false|none|none|
|AccessControlList|object|false|none|none|
|HierarchicalAccessControlList|object|false|none|none|
|ContentType|object|false|none|none|
|AccessControlConfigurationId|object|false|none|none|

<h2 id="tocS_DocumentAttributeKey">DocumentAttributeKey</h2>
<!-- backwards compatibility -->
<a id="schemadocumentattributekey"></a>
<a id="schema_DocumentAttributeKey"></a>
<a id="tocSdocumentattributekey"></a>
<a id="tocsdocumentattributekey"></a>

```json
"string"
```

<h2 id="tocS_DocumentAttributeValue">DocumentAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemadocumentattributevalue"></a>
<a id="schema_DocumentAttributeValue"></a>
<a id="tocSdocumentattributevalue"></a>
<a id="tocsdocumentattributevalue"></a>

```json
{
  "StringValue": {},
  "StringListValue": {},
  "LongValue": {},
  "DateValue": {}
}
```

The value of a document attribute. You can only provide one value for a document attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StringValue|object|false|none|none|
|StringListValue|object|false|none|none|
|LongValue|object|false|none|none|
|DateValue|object|false|none|none|

<h2 id="tocS_DocumentAttributeCondition">DocumentAttributeCondition</h2>
<!-- backwards compatibility -->
<a id="schemadocumentattributecondition"></a>
<a id="schema_DocumentAttributeCondition"></a>
<a id="tocSdocumentattributecondition"></a>
<a id="tocsdocumentattributecondition"></a>

```json
{
  "ConditionDocumentAttributeKey": {},
  "Operator": {},
  "ConditionOnValue": {
    "StringValue": {},
    "StringListValue": {},
    "LongValue": {},
    "DateValue": {}
  }
}
```

<p>The condition used for the target document attribute or metadata field when ingesting documents into Amazon Kendra. You use this with <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeTarget.html">DocumentAttributeTarget to apply the condition</a>.</p> <p>For example, you can create the 'Department' target field and have it prefill department names associated with the documents based on information in the 'Source_URI' field. Set the condition that if the 'Source_URI' field contains 'financial' in its URI value, then prefill the target field 'Department' with the target value 'Finance' for the document.</p> <p>Amazon Kendra cannot create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using <code>DocumentAttributeTarget</code>. Amazon Kendra then will map your newly created metadata field to your index field.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConditionDocumentAttributeKey|object|true|none|none|
|Operator|object|true|none|none|
|ConditionOnValue|object|false|none|none|

<h2 id="tocS_DocumentAttributeKeyList">DocumentAttributeKeyList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentattributekeylist"></a>
<a id="schema_DocumentAttributeKeyList"></a>
<a id="tocSdocumentattributekeylist"></a>
<a id="tocsdocumentattributekeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DocumentAttributeStringListValue">DocumentAttributeStringListValue</h2>
<!-- backwards compatibility -->
<a id="schemadocumentattributestringlistvalue"></a>
<a id="schema_DocumentAttributeStringListValue"></a>
<a id="tocSdocumentattributestringlistvalue"></a>
<a id="tocsdocumentattributestringlistvalue"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DocumentAttributeStringValue">DocumentAttributeStringValue</h2>
<!-- backwards compatibility -->
<a id="schemadocumentattributestringvalue"></a>
<a id="schema_DocumentAttributeStringValue"></a>
<a id="tocSdocumentattributestringvalue"></a>
<a id="tocsdocumentattributestringvalue"></a>

```json
"string"
```

<h2 id="tocS_DocumentAttributeTarget">DocumentAttributeTarget</h2>
<!-- backwards compatibility -->
<a id="schemadocumentattributetarget"></a>
<a id="schema_DocumentAttributeTarget"></a>
<a id="tocSdocumentattributetarget"></a>
<a id="tocsdocumentattributetarget"></a>

```json
{
  "TargetDocumentAttributeKey": {},
  "TargetDocumentAttributeValueDeletion": {},
  "TargetDocumentAttributeValue": {
    "StringValue": {},
    "StringListValue": {},
    "LongValue": {},
    "DateValue": {}
  }
}
```

<p>The target document attribute or metadata field you want to alter when ingesting documents into Amazon Kendra.</p> <p>For example, you can delete customer identification numbers associated with the documents, stored in the document metadata field called 'Customer_ID'. You set the target key as 'Customer_ID' and the deletion flag to <code>TRUE</code>. This removes all customer ID values in the field 'Customer_ID'. This would scrub personally identifiable information from each document's metadata.</p> <p>Amazon Kendra cannot create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using <code>DocumentAttributeTarget</code>. Amazon Kendra then will map your newly created metadata field to your index field.</p> <p>You can also use this with <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeCondition.html">DocumentAttributeCondition</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetDocumentAttributeKey|object|false|none|none|
|TargetDocumentAttributeValueDeletion|object|false|none|none|
|TargetDocumentAttributeValue|object|false|none|none|

<h2 id="tocS_FacetResultList">FacetResultList</h2>
<!-- backwards compatibility -->
<a id="schemafacetresultlist"></a>
<a id="schema_FacetResultList"></a>
<a id="tocSfacetresultlist"></a>
<a id="tocsfacetresultlist"></a>

```json
[
  {
    "DocumentAttributeKey": {},
    "DocumentAttributeValueType": {},
    "DocumentAttributeValueCountPairs": {}
  }
]
```

<h2 id="tocS_DocumentAttributeValueCountPair">DocumentAttributeValueCountPair</h2>
<!-- backwards compatibility -->
<a id="schemadocumentattributevaluecountpair"></a>
<a id="schema_DocumentAttributeValueCountPair"></a>
<a id="tocSdocumentattributevaluecountpair"></a>
<a id="tocsdocumentattributevaluecountpair"></a>

```json
{
  "DocumentAttributeValue": {
    "StringValue": {},
    "StringListValue": {},
    "LongValue": {},
    "DateValue": {}
  },
  "Count": {},
  "FacetResults": {}
}
```

Provides the count of documents that match a particular attribute when doing a faceted search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentAttributeValue|object|false|none|none|
|Count|object|false|none|none|
|FacetResults|object|false|none|none|

<h2 id="tocS_DocumentAttributeValueCountPairList">DocumentAttributeValueCountPairList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentattributevaluecountpairlist"></a>
<a id="schema_DocumentAttributeValueCountPairList"></a>
<a id="tocSdocumentattributevaluecountpairlist"></a>
<a id="tocsdocumentattributevaluecountpairlist"></a>

```json
[
  {
    "DocumentAttributeValue": {
      "StringValue": {},
      "StringListValue": {},
      "LongValue": {},
      "DateValue": {}
    },
    "Count": {},
    "FacetResults": {}
  }
]
```

<h2 id="tocS_DocumentAttributeValueType">DocumentAttributeValueType</h2>
<!-- backwards compatibility -->
<a id="schemadocumentattributevaluetype"></a>
<a id="schema_DocumentAttributeValueType"></a>
<a id="tocSdocumentattributevaluetype"></a>
<a id="tocsdocumentattributevaluetype"></a>

```json
"STRING_VALUE"
```

<h2 id="tocS_DocumentInfo">DocumentInfo</h2>
<!-- backwards compatibility -->
<a id="schemadocumentinfo"></a>
<a id="schema_DocumentInfo"></a>
<a id="tocSdocumentinfo"></a>
<a id="tocsdocumentinfo"></a>

```json
{
  "DocumentId": {},
  "Attributes": {}
}
```

Identifies a document for which to retrieve status information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentId|object|true|none|none|
|Attributes|object|false|none|none|

<h2 id="tocS_DocumentMetadataBoolean">DocumentMetadataBoolean</h2>
<!-- backwards compatibility -->
<a id="schemadocumentmetadataboolean"></a>
<a id="schema_DocumentMetadataBoolean"></a>
<a id="tocSdocumentmetadataboolean"></a>
<a id="tocsdocumentmetadataboolean"></a>

```json
true
```

<h2 id="tocS_DocumentMetadataConfigurationName">DocumentMetadataConfigurationName</h2>
<!-- backwards compatibility -->
<a id="schemadocumentmetadataconfigurationname"></a>
<a id="schema_DocumentMetadataConfigurationName"></a>
<a id="tocSdocumentmetadataconfigurationname"></a>
<a id="tocsdocumentmetadataconfigurationname"></a>

```json
"string"
```

<h2 id="tocS_Relevance">Relevance</h2>
<!-- backwards compatibility -->
<a id="schemarelevance"></a>
<a id="schema_Relevance"></a>
<a id="tocSrelevance"></a>
<a id="tocsrelevance"></a>

```json
{
  "Freshness": {},
  "Importance": {},
  "Duration": {},
  "RankOrder": {},
  "ValueImportanceMap": {
    "property1": 1,
    "property2": 1
  }
}
```

Provides information for tuning the relevance of a field in a search. When a query includes terms that match the field, the results are given a boost in the response based on these tuning parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Freshness|object|false|none|none|
|Importance|object|false|none|none|
|Duration|object|false|none|none|
|RankOrder|object|false|none|none|
|ValueImportanceMap|object|false|none|none|

<h2 id="tocS_Search">Search</h2>
<!-- backwards compatibility -->
<a id="schemasearch"></a>
<a id="schema_Search"></a>
<a id="tocSsearch"></a>
<a id="tocssearch"></a>

```json
{
  "Facetable": {},
  "Searchable": {},
  "Displayable": {},
  "Sortable": {}
}
```

Provides information about how a custom index field is used during a search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Facetable|object|false|none|none|
|Searchable|object|false|none|none|
|Displayable|object|false|none|none|
|Sortable|object|false|none|none|

<h2 id="tocS_DocumentMetadataConfiguration">DocumentMetadataConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadocumentmetadataconfiguration"></a>
<a id="schema_DocumentMetadataConfiguration"></a>
<a id="tocSdocumentmetadataconfiguration"></a>
<a id="tocsdocumentmetadataconfiguration"></a>

```json
{
  "Name": {},
  "Type": {},
  "Relevance": {
    "Freshness": {},
    "Importance": {},
    "Duration": {},
    "RankOrder": {},
    "ValueImportanceMap": {
      "property1": 1,
      "property2": 1
    }
  },
  "Search": {
    "Facetable": {},
    "Searchable": {},
    "Displayable": {},
    "Sortable": {}
  }
}
```

Specifies the properties, such as relevance tuning and searchability, of an index field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Type|object|true|none|none|
|Relevance|object|false|none|none|
|Search|object|false|none|none|

<h2 id="tocS_DocumentRelevanceConfiguration">DocumentRelevanceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadocumentrelevanceconfiguration"></a>
<a id="schema_DocumentRelevanceConfiguration"></a>
<a id="tocSdocumentrelevanceconfiguration"></a>
<a id="tocsdocumentrelevanceconfiguration"></a>

```json
{
  "Name": {},
  "Relevance": {
    "Freshness": {},
    "Importance": {},
    "Duration": {},
    "RankOrder": {},
    "ValueImportanceMap": {
      "property1": 1,
      "property2": 1
    }
  }
}
```

Overrides the document relevance properties of a custom index field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Relevance|object|true|none|none|

<h2 id="tocS_DocumentRelevanceOverrideConfigurationList">DocumentRelevanceOverrideConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentrelevanceoverrideconfigurationlist"></a>
<a id="schema_DocumentRelevanceOverrideConfigurationList"></a>
<a id="tocSdocumentrelevanceoverrideconfigurationlist"></a>
<a id="tocsdocumentrelevanceoverrideconfigurationlist"></a>

```json
[
  {
    "Name": {},
    "Relevance": {
      "Freshness": {},
      "Importance": {},
      "Duration": {},
      "RankOrder": {},
      "ValueImportanceMap": {
        "property1": 1,
        "property2": 1
      }
    }
  }
]
```

<h2 id="tocS_DocumentStatus">DocumentStatus</h2>
<!-- backwards compatibility -->
<a id="schemadocumentstatus"></a>
<a id="schema_DocumentStatus"></a>
<a id="tocSdocumentstatus"></a>
<a id="tocsdocumentstatus"></a>

```json
"NOT_FOUND"
```

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "DocumentId": {},
  "DocumentStatus": {},
  "FailureCode": {},
  "FailureReason": {}
}
```

Provides information about the status of documents submitted for indexing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentId|object|false|none|none|
|DocumentStatus|object|false|none|none|
|FailureCode|object|false|none|none|
|FailureReason|object|false|none|none|

<h2 id="tocS_DocumentsMetadataConfiguration">DocumentsMetadataConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsmetadataconfiguration"></a>
<a id="schema_DocumentsMetadataConfiguration"></a>
<a id="tocSdocumentsmetadataconfiguration"></a>
<a id="tocsdocumentsmetadataconfiguration"></a>

```json
{
  "S3Prefix": {}
}
```

Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Prefix|object|false|none|none|

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
"string"
```

<h2 id="tocS_Duration">Duration</h2>
<!-- backwards compatibility -->
<a id="schemaduration"></a>
<a id="schema_Duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
"string"
```

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
"string"
```

<h2 id="tocS_EndpointType">EndpointType</h2>
<!-- backwards compatibility -->
<a id="schemaendpointtype"></a>
<a id="schema_EndpointType"></a>
<a id="tocSendpointtype"></a>
<a id="tocsendpointtype"></a>

```json
"HOME"
```

<h2 id="tocS_EntityId">EntityId</h2>
<!-- backwards compatibility -->
<a id="schemaentityid"></a>
<a id="schema_EntityId"></a>
<a id="tocSentityid"></a>
<a id="tocsentityid"></a>

```json
"string"
```

<h2 id="tocS_EntityType">EntityType</h2>
<!-- backwards compatibility -->
<a id="schemaentitytype"></a>
<a id="schema_EntityType"></a>
<a id="tocSentitytype"></a>
<a id="tocsentitytype"></a>

```json
"USER"
```

<h2 id="tocS_NameType">NameType</h2>
<!-- backwards compatibility -->
<a id="schemanametype"></a>
<a id="schema_NameType"></a>
<a id="tocSnametype"></a>
<a id="tocsnametype"></a>

```json
"password"
```

<h2 id="tocS_EntityDisplayData">EntityDisplayData</h2>
<!-- backwards compatibility -->
<a id="schemaentitydisplaydata"></a>
<a id="schema_EntityDisplayData"></a>
<a id="tocSentitydisplaydata"></a>
<a id="tocsentitydisplaydata"></a>

```json
{
  "UserName": {},
  "GroupName": {},
  "IdentifiedUserName": {},
  "FirstName": {},
  "LastName": {}
}
```

Information about the user entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserName|object|false|none|none|
|GroupName|object|false|none|none|
|IdentifiedUserName|object|false|none|none|
|FirstName|object|false|none|none|
|LastName|object|false|none|none|

<h2 id="tocS_Persona">Persona</h2>
<!-- backwards compatibility -->
<a id="schemapersona"></a>
<a id="schema_Persona"></a>
<a id="tocSpersona"></a>
<a id="tocspersona"></a>

```json
"OWNER"
```

<h2 id="tocS_EntityPersonaConfiguration">EntityPersonaConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaentitypersonaconfiguration"></a>
<a id="schema_EntityPersonaConfiguration"></a>
<a id="tocSentitypersonaconfiguration"></a>
<a id="tocsentitypersonaconfiguration"></a>

```json
{
  "EntityId": {},
  "Persona": {}
}
```

Provides the configuration information for users or groups in your IAM Identity Center identity source for access to your Amazon Kendra experience. Specific permissions are defined for each user or group once they are granted access to your Amazon Kendra experience.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityId|object|true|none|none|
|Persona|object|true|none|none|

<h2 id="tocS_MimeType">MimeType</h2>
<!-- backwards compatibility -->
<a id="schemamimetype"></a>
<a id="schema_MimeType"></a>
<a id="tocSmimetype"></a>
<a id="tocsmimetype"></a>

```json
"string"
```

<h2 id="tocS_ExcludeMimeTypesList">ExcludeMimeTypesList</h2>
<!-- backwards compatibility -->
<a id="schemaexcludemimetypeslist"></a>
<a id="schema_ExcludeMimeTypesList"></a>
<a id="tocSexcludemimetypeslist"></a>
<a id="tocsexcludemimetypeslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SharedDriveId">SharedDriveId</h2>
<!-- backwards compatibility -->
<a id="schemashareddriveid"></a>
<a id="schema_SharedDriveId"></a>
<a id="tocSshareddriveid"></a>
<a id="tocsshareddriveid"></a>

```json
"string"
```

<h2 id="tocS_ExcludeSharedDrivesList">ExcludeSharedDrivesList</h2>
<!-- backwards compatibility -->
<a id="schemaexcludeshareddriveslist"></a>
<a id="schema_ExcludeSharedDrivesList"></a>
<a id="tocSexcludeshareddriveslist"></a>
<a id="tocsexcludeshareddriveslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UserAccount">UserAccount</h2>
<!-- backwards compatibility -->
<a id="schemauseraccount"></a>
<a id="schema_UserAccount"></a>
<a id="tocSuseraccount"></a>
<a id="tocsuseraccount"></a>

```json
"string"
```

<h2 id="tocS_ExcludeUserAccountsList">ExcludeUserAccountsList</h2>
<!-- backwards compatibility -->
<a id="schemaexcludeuseraccountslist"></a>
<a id="schema_ExcludeUserAccountsList"></a>
<a id="tocSexcludeuseraccountslist"></a>
<a id="tocsexcludeuseraccountslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UserIdentityConfiguration">UserIdentityConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemauseridentityconfiguration"></a>
<a id="schema_UserIdentityConfiguration"></a>
<a id="tocSuseridentityconfiguration"></a>
<a id="tocsuseridentityconfiguration"></a>

```json
{
  "IdentityAttributeName": {}
}
```

Provides the configuration information for the identifiers of your users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityAttributeName|object|false|none|none|

<h2 id="tocS_ExperienceEndpoint">ExperienceEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaexperienceendpoint"></a>
<a id="schema_ExperienceEndpoint"></a>
<a id="tocSexperienceendpoint"></a>
<a id="tocsexperienceendpoint"></a>

```json
{
  "EndpointType": {},
  "Endpoint": {}
}
```

Provides the configuration information for the endpoint for your Amazon Kendra experience.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointType|object|false|none|none|
|Endpoint|object|false|none|none|

<h2 id="tocS_ExperienceEntitiesSummary">ExperienceEntitiesSummary</h2>
<!-- backwards compatibility -->
<a id="schemaexperienceentitiessummary"></a>
<a id="schema_ExperienceEntitiesSummary"></a>
<a id="tocSexperienceentitiessummary"></a>
<a id="tocsexperienceentitiessummary"></a>

```json
{
  "EntityId": {},
  "EntityType": {},
  "DisplayData": {
    "UserName": {},
    "GroupName": {},
    "IdentifiedUserName": {},
    "FirstName": {},
    "LastName": {}
  }
}
```

Summary information for users or groups in your IAM Identity Center identity source with granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityId|object|false|none|none|
|EntityType|object|false|none|none|
|DisplayData|object|false|none|none|

<h2 id="tocS_ExperienceEntitiesSummaryList">ExperienceEntitiesSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaexperienceentitiessummarylist"></a>
<a id="schema_ExperienceEntitiesSummaryList"></a>
<a id="tocSexperienceentitiessummarylist"></a>
<a id="tocsexperienceentitiessummarylist"></a>

```json
[
  {
    "EntityId": {},
    "EntityType": {},
    "DisplayData": {
      "UserName": {},
      "GroupName": {},
      "IdentifiedUserName": {},
      "FirstName": {},
      "LastName": {}
    }
  }
]
```

<h2 id="tocS_ExperiencesSummary">ExperiencesSummary</h2>
<!-- backwards compatibility -->
<a id="schemaexperiencessummary"></a>
<a id="schema_ExperiencesSummary"></a>
<a id="tocSexperiencessummary"></a>
<a id="tocsexperiencessummary"></a>

```json
{
  "Name": {},
  "Id": {},
  "CreatedAt": {},
  "Status": {},
  "Endpoints": {}
}
```

Summary information for your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Id|object|false|none|none|
|CreatedAt|object|false|none|none|
|Status|object|false|none|none|
|Endpoints|object|false|none|none|

<h2 id="tocS_ExperiencesSummaryList">ExperiencesSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaexperiencessummarylist"></a>
<a id="schema_ExperiencesSummaryList"></a>
<a id="tocSexperiencessummarylist"></a>
<a id="tocsexperiencessummarylist"></a>

```json
[
  {
    "Name": {},
    "Id": {},
    "CreatedAt": {},
    "Status": {},
    "Endpoints": {}
  }
]
```

<h2 id="tocS_FacetList">FacetList</h2>
<!-- backwards compatibility -->
<a id="schemafacetlist"></a>
<a id="schema_FacetList"></a>
<a id="tocSfacetlist"></a>
<a id="tocsfacetlist"></a>

```json
[
  {
    "DocumentAttributeKey": {},
    "Facets": {},
    "MaxResults": {}
  }
]
```

<h2 id="tocS_TopDocumentAttributeValueCountPairsSize">TopDocumentAttributeValueCountPairsSize</h2>
<!-- backwards compatibility -->
<a id="schematopdocumentattributevaluecountpairssize"></a>
<a id="schema_TopDocumentAttributeValueCountPairsSize"></a>
<a id="tocStopdocumentattributevaluecountpairssize"></a>
<a id="tocstopdocumentattributevaluecountpairssize"></a>

```json
0
```

<h2 id="tocS_Facet">Facet</h2>
<!-- backwards compatibility -->
<a id="schemafacet"></a>
<a id="schema_Facet"></a>
<a id="tocSfacet"></a>
<a id="tocsfacet"></a>

```json
{
  "DocumentAttributeKey": {},
  "Facets": {},
  "MaxResults": {}
}
```

<p>Information about a document attribute. You can use document attributes as facets.</p> <p>For example, the document attribute or facet "Department" includes the values "HR", "Engineering", and "Accounting". You can display these values in the search results so that documents can be searched by department.</p> <p>You can display up to 10 facet values per facet for a query. If you want to increase this limit, contact <a href="http://aws.amazon.com/contact-us/">Support</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentAttributeKey|object|false|none|none|
|Facets|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_FacetResult">FacetResult</h2>
<!-- backwards compatibility -->
<a id="schemafacetresult"></a>
<a id="schema_FacetResult"></a>
<a id="tocSfacetresult"></a>
<a id="tocsfacetresult"></a>

```json
{
  "DocumentAttributeKey": {},
  "DocumentAttributeValueType": {},
  "DocumentAttributeValueCountPairs": {}
}
```

The facet values for the documents in the response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentAttributeKey|object|false|none|none|
|DocumentAttributeValueType|object|false|none|none|
|DocumentAttributeValueCountPairs|object|false|none|none|

<h2 id="tocS_FailureReason">FailureReason</h2>
<!-- backwards compatibility -->
<a id="schemafailurereason"></a>
<a id="schema_FailureReason"></a>
<a id="tocSfailurereason"></a>
<a id="tocsfailurereason"></a>

```json
"string"
```

<h2 id="tocS_IndexedQuestionAnswersCount">IndexedQuestionAnswersCount</h2>
<!-- backwards compatibility -->
<a id="schemaindexedquestionanswerscount"></a>
<a id="schema_IndexedQuestionAnswersCount"></a>
<a id="tocSindexedquestionanswerscount"></a>
<a id="tocsindexedquestionanswerscount"></a>

```json
0
```

<h2 id="tocS_FaqStatistics">FaqStatistics</h2>
<!-- backwards compatibility -->
<a id="schemafaqstatistics"></a>
<a id="schema_FaqStatistics"></a>
<a id="tocSfaqstatistics"></a>
<a id="tocsfaqstatistics"></a>

```json
{
  "IndexedQuestionAnswersCount": {}
}
```

Provides statistical information about the FAQ questions and answers contained in an index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexedQuestionAnswersCount|object|true|none|none|

<h2 id="tocS_FaqSummary">FaqSummary</h2>
<!-- backwards compatibility -->
<a id="schemafaqsummary"></a>
<a id="schema_FaqSummary"></a>
<a id="tocSfaqsummary"></a>
<a id="tocsfaqsummary"></a>

```json
{
  "Id": {},
  "Name": {},
  "Status": {},
  "CreatedAt": {},
  "UpdatedAt": {},
  "FileFormat": {},
  "LanguageCode": {}
}
```

Summary information for frequently asked questions and answers included in an index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|CreatedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|
|FileFormat|object|false|none|none|
|LanguageCode|object|false|none|none|

<h2 id="tocS_FaqSummaryItems">FaqSummaryItems</h2>
<!-- backwards compatibility -->
<a id="schemafaqsummaryitems"></a>
<a id="schema_FaqSummaryItems"></a>
<a id="tocSfaqsummaryitems"></a>
<a id="tocsfaqsummaryitems"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Status": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "FileFormat": {},
    "LanguageCode": {}
  }
]
```

<h2 id="tocS_FeaturedDocument">FeaturedDocument</h2>
<!-- backwards compatibility -->
<a id="schemafeatureddocument"></a>
<a id="schema_FeaturedDocument"></a>
<a id="tocSfeatureddocument"></a>
<a id="tocsfeatureddocument"></a>

```json
{
  "Id": {}
}
```

A featured document. This document is displayed at the top of the search results page, placed above all other results for certain queries. If there's an exact match of a query, then the document is featured in the search results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_FeaturedDocumentMissing">FeaturedDocumentMissing</h2>
<!-- backwards compatibility -->
<a id="schemafeatureddocumentmissing"></a>
<a id="schema_FeaturedDocumentMissing"></a>
<a id="tocSfeatureddocumentmissing"></a>
<a id="tocsfeatureddocumentmissing"></a>

```json
{
  "Id": {}
}
```

A document ID doesn't exist but you have specified as a featured document. Amazon Kendra cannot feature the document if it doesn't exist in the index. You can check the status of a document and its ID or check for documents with status errors using the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchGetDocumentStatus.html">BatchGetDocumentStatus</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_FeaturedDocumentWithMetadata">FeaturedDocumentWithMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafeatureddocumentwithmetadata"></a>
<a id="schema_FeaturedDocumentWithMetadata"></a>
<a id="tocSfeatureddocumentwithmetadata"></a>
<a id="tocsfeatureddocumentwithmetadata"></a>

```json
{
  "Id": {},
  "Title": {},
  "URI": {}
}
```

A featured document with its metadata information. This document is displayed at the top of the search results page, placed above all other results for certain queries. If there's an exact match of a query, then the document is featured in the search results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Title|object|false|none|none|
|URI|object|false|none|none|

<h2 id="tocS_QueryResultType">QueryResultType</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresulttype"></a>
<a id="schema_QueryResultType"></a>
<a id="tocSqueryresulttype"></a>
<a id="tocsqueryresulttype"></a>

```json
"DOCUMENT"
```

<h2 id="tocS_FeedbackToken">FeedbackToken</h2>
<!-- backwards compatibility -->
<a id="schemafeedbacktoken"></a>
<a id="schema_FeedbackToken"></a>
<a id="tocSfeedbacktoken"></a>
<a id="tocsfeedbacktoken"></a>

```json
"string"
```

<h2 id="tocS_FeaturedResultsItem">FeaturedResultsItem</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedresultsitem"></a>
<a id="schema_FeaturedResultsItem"></a>
<a id="tocSfeaturedresultsitem"></a>
<a id="tocsfeaturedresultsitem"></a>

```json
{
  "Id": {},
  "Type": {},
  "AdditionalAttributes": {},
  "DocumentId": {},
  "DocumentTitle": {
    "Text": {},
    "Highlights": {}
  },
  "DocumentExcerpt": {
    "Text": {},
    "Highlights": {}
  },
  "DocumentURI": {},
  "DocumentAttributes": {},
  "FeedbackToken": {}
}
```

A single featured result item. A featured result is displayed at the top of the search results page, placed above all other results for certain queries. If there's an exact match of a query, then certain documents are featured in the search results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Type|object|false|none|none|
|AdditionalAttributes|object|false|none|none|
|DocumentId|object|false|none|none|
|DocumentTitle|[TextWithHighlights](#schematextwithhighlights)|false|none|Provides text and information about where to highlight the text.|
|DocumentExcerpt|[TextWithHighlights](#schematextwithhighlights)|false|none|Provides text and information about where to highlight the text.|
|DocumentURI|object|false|none|none|
|DocumentAttributes|object|false|none|none|
|FeedbackToken|object|false|none|none|

<h2 id="tocS_FeaturedResultsItemList">FeaturedResultsItemList</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedresultsitemlist"></a>
<a id="schema_FeaturedResultsItemList"></a>
<a id="tocSfeaturedresultsitemlist"></a>
<a id="tocsfeaturedresultsitemlist"></a>

```json
[
  {
    "Id": {},
    "Type": {},
    "AdditionalAttributes": {},
    "DocumentId": {},
    "DocumentTitle": {
      "Text": {},
      "Highlights": {}
    },
    "DocumentExcerpt": {
      "Text": {},
      "Highlights": {}
    },
    "DocumentURI": {},
    "DocumentAttributes": {},
    "FeedbackToken": {}
  }
]
```

<h2 id="tocS_FeaturedResultsSetSummary">FeaturedResultsSetSummary</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedresultssetsummary"></a>
<a id="schema_FeaturedResultsSetSummary"></a>
<a id="tocSfeaturedresultssetsummary"></a>
<a id="tocsfeaturedresultssetsummary"></a>

```json
{
  "FeaturedResultsSetId": {},
  "FeaturedResultsSetName": {},
  "Status": {},
  "LastUpdatedTimestamp": {},
  "CreationTimestamp": {}
}
```

Summary information for a set of featured results. Featured results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FeaturedResultsSetId|object|false|none|none|
|FeaturedResultsSetName|object|false|none|none|
|Status|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|CreationTimestamp|object|false|none|none|

<h2 id="tocS_FeaturedResultsSetSummaryItems">FeaturedResultsSetSummaryItems</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedresultssetsummaryitems"></a>
<a id="schema_FeaturedResultsSetSummaryItems"></a>
<a id="tocSfeaturedresultssetsummaryitems"></a>
<a id="tocsfeaturedresultssetsummaryitems"></a>

```json
[
  {
    "FeaturedResultsSetId": {},
    "FeaturedResultsSetName": {},
    "Status": {},
    "LastUpdatedTimestamp": {},
    "CreationTimestamp": {}
  }
]
```

<h2 id="tocS_FileSystemId">FileSystemId</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemid"></a>
<a id="schema_FileSystemId"></a>
<a id="tocSfilesystemid"></a>
<a id="tocsfilesystemid"></a>

```json
"stringstrin"
```

<h2 id="tocS_FolderId">FolderId</h2>
<!-- backwards compatibility -->
<a id="schemafolderid"></a>
<a id="schema_FolderId"></a>
<a id="tocSfolderid"></a>
<a id="tocsfolderid"></a>

```json
"string"
```

<h2 id="tocS_FolderIdList">FolderIdList</h2>
<!-- backwards compatibility -->
<a id="schemafolderidlist"></a>
<a id="schema_FolderIdList"></a>
<a id="tocSfolderidlist"></a>
<a id="tocsfolderidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FsxFileSystemType">FsxFileSystemType</h2>
<!-- backwards compatibility -->
<a id="schemafsxfilesystemtype"></a>
<a id="schema_FsxFileSystemType"></a>
<a id="tocSfsxfilesystemtype"></a>
<a id="tocsfsxfilesystemtype"></a>

```json
"WINDOWS"
```

<h2 id="tocS_SuggestionQueryText">SuggestionQueryText</h2>
<!-- backwards compatibility -->
<a id="schemasuggestionquerytext"></a>
<a id="schema_SuggestionQueryText"></a>
<a id="tocSsuggestionquerytext"></a>
<a id="tocssuggestionquerytext"></a>

```json
"string"
```

<h2 id="tocS_QuerySuggestionsId">QuerySuggestionsId</h2>
<!-- backwards compatibility -->
<a id="schemaquerysuggestionsid"></a>
<a id="schema_QuerySuggestionsId"></a>
<a id="tocSquerysuggestionsid"></a>
<a id="tocsquerysuggestionsid"></a>

```json
"string"
```

<h2 id="tocS_SuggestionList">SuggestionList</h2>
<!-- backwards compatibility -->
<a id="schemasuggestionlist"></a>
<a id="schema_SuggestionList"></a>
<a id="tocSsuggestionlist"></a>
<a id="tocssuggestionlist"></a>

```json
[
  {
    "Id": {},
    "Value": {
      "Text": {
        "Text": {},
        "Highlights": {}
      }
    }
  }
]
```

<h2 id="tocS_Interval">Interval</h2>
<!-- backwards compatibility -->
<a id="schemainterval"></a>
<a id="schema_Interval"></a>
<a id="tocSinterval"></a>
<a id="tocsinterval"></a>

```json
"THIS_MONTH"
```

<h2 id="tocS_MetricType">MetricType</h2>
<!-- backwards compatibility -->
<a id="schemametrictype"></a>
<a id="schema_MetricType"></a>
<a id="tocSmetrictype"></a>
<a id="tocsmetrictype"></a>

```json
"QUERIES_BY_COUNT"
```

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_TimeRange">TimeRange</h2>
<!-- backwards compatibility -->
<a id="schematimerange"></a>
<a id="schema_TimeRange"></a>
<a id="tocStimerange"></a>
<a id="tocstimerange"></a>

```json
{
  "StartTime": {},
  "EndTime": {}
}
```

Provides a range of time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_SnapshotsDataHeaderFields">SnapshotsDataHeaderFields</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotsdataheaderfields"></a>
<a id="schema_SnapshotsDataHeaderFields"></a>
<a id="tocSsnapshotsdataheaderfields"></a>
<a id="tocssnapshotsdataheaderfields"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SnapshotsDataRecords">SnapshotsDataRecords</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotsdatarecords"></a>
<a id="schema_SnapshotsDataRecords"></a>
<a id="tocSsnapshotsdatarecords"></a>
<a id="tocssnapshotsdatarecords"></a>

```json
[
  [
    "string"
  ]
]
```

<h2 id="tocS_SaaSConfiguration">SaaSConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasaasconfiguration"></a>
<a id="schema_SaaSConfiguration"></a>
<a id="tocSsaasconfiguration"></a>
<a id="tocssaasconfiguration"></a>

```json
{
  "OrganizationName": {},
  "HostUrl": {}
}
```

Provides the configuration information to connect to GitHub Enterprise Cloud (SaaS).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationName|object|true|none|none|
|HostUrl|object|true|none|none|

<h2 id="tocS_OnPremiseConfiguration">OnPremiseConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaonpremiseconfiguration"></a>
<a id="schema_OnPremiseConfiguration"></a>
<a id="tocSonpremiseconfiguration"></a>
<a id="tocsonpremiseconfiguration"></a>

```json
{
  "HostUrl": {},
  "OrganizationName": {},
  "SslCertificateS3Path": {
    "Bucket": {},
    "Key": {}
  }
}
```

Provides the configuration information to connect to GitHub Enterprise Server (on premises).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostUrl|object|true|none|none|
|OrganizationName|object|true|none|none|
|SslCertificateS3Path|object|true|none|none|

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
"SAAS"
```

<h2 id="tocS_GitHubDocumentCrawlProperties">GitHubDocumentCrawlProperties</h2>
<!-- backwards compatibility -->
<a id="schemagithubdocumentcrawlproperties"></a>
<a id="schema_GitHubDocumentCrawlProperties"></a>
<a id="tocSgithubdocumentcrawlproperties"></a>
<a id="tocsgithubdocumentcrawlproperties"></a>

```json
{
  "CrawlRepositoryDocuments": {},
  "CrawlIssue": {},
  "CrawlIssueComment": {},
  "CrawlIssueCommentAttachment": {},
  "CrawlPullRequest": {},
  "CrawlPullRequestComment": {},
  "CrawlPullRequestCommentAttachment": {}
}
```

Provides the configuration information to include certain types of GitHub content. You can configure to index repository files only, or also include issues and pull requests, comments, and comment attachments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CrawlRepositoryDocuments|object|false|none|none|
|CrawlIssue|object|false|none|none|
|CrawlIssueComment|object|false|none|none|
|CrawlIssueCommentAttachment|object|false|none|none|
|CrawlPullRequest|object|false|none|none|
|CrawlPullRequestComment|object|false|none|none|
|CrawlPullRequestCommentAttachment|object|false|none|none|

<h2 id="tocS_RepositoryNames">RepositoryNames</h2>
<!-- backwards compatibility -->
<a id="schemarepositorynames"></a>
<a id="schema_RepositoryNames"></a>
<a id="tocSrepositorynames"></a>
<a id="tocsrepositorynames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GroupAttributeField">GroupAttributeField</h2>
<!-- backwards compatibility -->
<a id="schemagroupattributefield"></a>
<a id="schema_GroupAttributeField"></a>
<a id="tocSgroupattributefield"></a>
<a id="tocsgroupattributefield"></a>

```json
"string"
```

<h2 id="tocS_MemberGroups">MemberGroups</h2>
<!-- backwards compatibility -->
<a id="schemamembergroups"></a>
<a id="schema_MemberGroups"></a>
<a id="tocSmembergroups"></a>
<a id="tocsmembergroups"></a>

```json
[
  {
    "GroupId": {},
    "DataSourceId": {}
  }
]
```

<h2 id="tocS_MemberUsers">MemberUsers</h2>
<!-- backwards compatibility -->
<a id="schemamemberusers"></a>
<a id="schema_MemberUsers"></a>
<a id="tocSmemberusers"></a>
<a id="tocsmemberusers"></a>

```json
[
  {
    "UserId": {}
  }
]
```

<h2 id="tocS_GroupMembers">GroupMembers</h2>
<!-- backwards compatibility -->
<a id="schemagroupmembers"></a>
<a id="schema_GroupMembers"></a>
<a id="tocSgroupmembers"></a>
<a id="tocsgroupmembers"></a>

```json
{
  "MemberGroups": {},
  "MemberUsers": {},
  "S3PathforGroupMembers": {
    "Bucket": {},
    "Key": {}
  }
}
```

A list of users or sub groups that belong to a group. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberGroups|object|false|none|none|
|MemberUsers|object|false|none|none|
|S3PathforGroupMembers|object|false|none|none|

<h2 id="tocS_GroupOrderingIdSummary">GroupOrderingIdSummary</h2>
<!-- backwards compatibility -->
<a id="schemagrouporderingidsummary"></a>
<a id="schema_GroupOrderingIdSummary"></a>
<a id="tocSgrouporderingidsummary"></a>
<a id="tocsgrouporderingidsummary"></a>

```json
{
  "Status": {},
  "LastUpdatedAt": {},
  "ReceivedAt": {},
  "OrderingId": {},
  "FailureReason": {}
}
```

Summary information on the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|ReceivedAt|object|false|none|none|
|OrderingId|object|false|none|none|
|FailureReason|object|false|none|none|

<h2 id="tocS_PrincipalMappingStatus">PrincipalMappingStatus</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalmappingstatus"></a>
<a id="schema_PrincipalMappingStatus"></a>
<a id="tocSprincipalmappingstatus"></a>
<a id="tocsprincipalmappingstatus"></a>

```json
"FAILED"
```

<h2 id="tocS_GroupSummary">GroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemagroupsummary"></a>
<a id="schema_GroupSummary"></a>
<a id="tocSgroupsummary"></a>
<a id="tocsgroupsummary"></a>

```json
{
  "GroupId": {},
  "OrderingId": {}
}
```

Summary information for groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|false|none|none|
|OrderingId|object|false|none|none|

<h2 id="tocS_Groups">Groups</h2>
<!-- backwards compatibility -->
<a id="schemagroups"></a>
<a id="schema_Groups"></a>
<a id="tocSgroups"></a>
<a id="tocsgroups"></a>

```json
[
  "string"
]
```

<h2 id="tocS_HierarchicalPrincipal">HierarchicalPrincipal</h2>
<!-- backwards compatibility -->
<a id="schemahierarchicalprincipal"></a>
<a id="schema_HierarchicalPrincipal"></a>
<a id="tocShierarchicalprincipal"></a>
<a id="tocshierarchicalprincipal"></a>

```json
{
  "PrincipalList": {}
}
```

 Information to define the hierarchy for which documents users should have access to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrincipalList|object|true|none|none|

<h2 id="tocS_HighlightType">HighlightType</h2>
<!-- backwards compatibility -->
<a id="schemahighlighttype"></a>
<a id="schema_HighlightType"></a>
<a id="tocShighlighttype"></a>
<a id="tocshighlighttype"></a>

```json
"STANDARD"
```

<h2 id="tocS_Highlight">Highlight</h2>
<!-- backwards compatibility -->
<a id="schemahighlight"></a>
<a id="schema_Highlight"></a>
<a id="tocShighlight"></a>
<a id="tocshighlight"></a>

```json
{
  "BeginOffset": {},
  "EndOffset": {},
  "TopAnswer": {},
  "Type": {}
}
```

Provides information that you can use to highlight a search result so that your users can quickly identify terms in the response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BeginOffset|object|true|none|none|
|EndOffset|object|true|none|none|
|TopAnswer|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_HighlightList">HighlightList</h2>
<!-- backwards compatibility -->
<a id="schemahighlightlist"></a>
<a id="schema_HighlightList"></a>
<a id="tocShighlightlist"></a>
<a id="tocshighlightlist"></a>

```json
[
  {
    "BeginOffset": {},
    "EndOffset": {},
    "TopAnswer": {},
    "Type": {}
  }
]
```

<h2 id="tocS_LambdaArn">LambdaArn</h2>
<!-- backwards compatibility -->
<a id="schemalambdaarn"></a>
<a id="schema_LambdaArn"></a>
<a id="tocSlambdaarn"></a>
<a id="tocslambdaarn"></a>

```json
"string"
```

<h2 id="tocS_S3BucketName">S3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname"></a>
<a id="schema_S3BucketName"></a>
<a id="tocSs3bucketname"></a>
<a id="tocss3bucketname"></a>

```json
"string"
```

<h2 id="tocS_IdentityAttributeName">IdentityAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaidentityattributename"></a>
<a id="schema_IdentityAttributeName"></a>
<a id="tocSidentityattributename"></a>
<a id="tocsidentityattributename"></a>

```json
"string"
```

<h2 id="tocS_Importance">Importance</h2>
<!-- backwards compatibility -->
<a id="schemaimportance"></a>
<a id="schema_Importance"></a>
<a id="tocSimportance"></a>
<a id="tocsimportance"></a>

```json
1
```

<h2 id="tocS_IndexConfigurationSummary">IndexConfigurationSummary</h2>
<!-- backwards compatibility -->
<a id="schemaindexconfigurationsummary"></a>
<a id="schema_IndexConfigurationSummary"></a>
<a id="tocSindexconfigurationsummary"></a>
<a id="tocsindexconfigurationsummary"></a>

```json
{
  "Name": {},
  "Id": {},
  "Edition": {},
  "CreatedAt": {},
  "UpdatedAt": {},
  "Status": {}
}
```

Summary information on the configuration of an index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Id|object|false|none|none|
|Edition|object|false|none|none|
|CreatedAt|object|true|none|none|
|UpdatedAt|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_IndexConfigurationSummaryList">IndexConfigurationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaindexconfigurationsummarylist"></a>
<a id="schema_IndexConfigurationSummaryList"></a>
<a id="tocSindexconfigurationsummarylist"></a>
<a id="tocsindexconfigurationsummarylist"></a>

```json
[
  {
    "Name": {},
    "Id": {},
    "Edition": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "Status": {}
  }
]
```

<h2 id="tocS_TextDocumentStatistics">TextDocumentStatistics</h2>
<!-- backwards compatibility -->
<a id="schematextdocumentstatistics"></a>
<a id="schema_TextDocumentStatistics"></a>
<a id="tocStextdocumentstatistics"></a>
<a id="tocstextdocumentstatistics"></a>

```json
{
  "IndexedTextDocumentsCount": {},
  "IndexedTextBytes": {}
}
```

Provides information about text documents indexed in an index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexedTextDocumentsCount|object|true|none|none|
|IndexedTextBytes|object|true|none|none|

<h2 id="tocS_IndexedTextBytes">IndexedTextBytes</h2>
<!-- backwards compatibility -->
<a id="schemaindexedtextbytes"></a>
<a id="schema_IndexedTextBytes"></a>
<a id="tocSindexedtextbytes"></a>
<a id="tocsindexedtextbytes"></a>

```json
0
```

<h2 id="tocS_IndexedTextDocumentsCount">IndexedTextDocumentsCount</h2>
<!-- backwards compatibility -->
<a id="schemaindexedtextdocumentscount"></a>
<a id="schema_IndexedTextDocumentsCount"></a>
<a id="tocSindexedtextdocumentscount"></a>
<a id="tocsindexedtextdocumentscount"></a>

```json
0
```

<h2 id="tocS_InlineCustomDocumentEnrichmentConfiguration">InlineCustomDocumentEnrichmentConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainlinecustomdocumentenrichmentconfiguration"></a>
<a id="schema_InlineCustomDocumentEnrichmentConfiguration"></a>
<a id="tocSinlinecustomdocumentenrichmentconfiguration"></a>
<a id="tocsinlinecustomdocumentenrichmentconfiguration"></a>

```json
{
  "Condition": {
    "ConditionDocumentAttributeKey": {},
    "Operator": {},
    "ConditionOnValue": {
      "StringValue": {},
      "StringListValue": {},
      "LongValue": {},
      "DateValue": {}
    }
  },
  "Target": {
    "TargetDocumentAttributeKey": {},
    "TargetDocumentAttributeValueDeletion": {},
    "TargetDocumentAttributeValue": {
      "StringValue": {},
      "StringListValue": {},
      "LongValue": {},
      "DateValue": {}
    }
  },
  "DocumentContentDeletion": {}
}
```

<p>Provides the configuration information for applying basic logic to alter document metadata and content when ingesting documents into Amazon Kendra. To apply advanced logic, to go beyond what you can do with basic logic, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_HookConfiguration.html">HookConfiguration</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Condition|object|false|none|none|
|Target|object|false|none|none|
|DocumentContentDeletion|object|false|none|none|

<h2 id="tocS_IssueSubEntity">IssueSubEntity</h2>
<!-- backwards compatibility -->
<a id="schemaissuesubentity"></a>
<a id="schema_IssueSubEntity"></a>
<a id="tocSissuesubentity"></a>
<a id="tocsissuesubentity"></a>

```json
"COMMENTS"
```

<h2 id="tocS_IssueSubEntityFilter">IssueSubEntityFilter</h2>
<!-- backwards compatibility -->
<a id="schemaissuesubentityfilter"></a>
<a id="schema_IssueSubEntityFilter"></a>
<a id="tocSissuesubentityfilter"></a>
<a id="tocsissuesubentityfilter"></a>

```json
[
  "COMMENTS"
]
```

<h2 id="tocS_IssueType">IssueType</h2>
<!-- backwards compatibility -->
<a id="schemaissuetype"></a>
<a id="schema_IssueType"></a>
<a id="tocSissuetype"></a>
<a id="tocsissuetype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Issuer">Issuer</h2>
<!-- backwards compatibility -->
<a id="schemaissuer"></a>
<a id="schema_Issuer"></a>
<a id="tocSissuer"></a>
<a id="tocsissuer"></a>

```json
"string"
```

<h2 id="tocS_JiraAccountUrl">JiraAccountUrl</h2>
<!-- backwards compatibility -->
<a id="schemajiraaccounturl"></a>
<a id="schema_JiraAccountUrl"></a>
<a id="tocSjiraaccounturl"></a>
<a id="tocsjiraaccounturl"></a>

```json
"string"
```

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
[
  "string"
]
```

<h2 id="tocS_JiraStatus">JiraStatus</h2>
<!-- backwards compatibility -->
<a id="schemajirastatus"></a>
<a id="schema_JiraStatus"></a>
<a id="tocSjirastatus"></a>
<a id="tocsjirastatus"></a>

```json
[
  "string"
]
```

<h2 id="tocS_JsonTokenTypeConfiguration">JsonTokenTypeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemajsontokentypeconfiguration"></a>
<a id="schema_JsonTokenTypeConfiguration"></a>
<a id="tocSjsontokentypeconfiguration"></a>
<a id="tocsjsontokentypeconfiguration"></a>

```json
{
  "UserNameAttributeField": {},
  "GroupAttributeField": {}
}
```

Provides the configuration information for the JSON token type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserNameAttributeField|object|true|none|none|
|GroupAttributeField|object|true|none|none|

<h2 id="tocS_KeyLocation">KeyLocation</h2>
<!-- backwards compatibility -->
<a id="schemakeylocation"></a>
<a id="schema_KeyLocation"></a>
<a id="tocSkeylocation"></a>
<a id="tocskeylocation"></a>

```json
"URL"
```

<h2 id="tocS_UserNameAttributeField">UserNameAttributeField</h2>
<!-- backwards compatibility -->
<a id="schemausernameattributefield"></a>
<a id="schema_UserNameAttributeField"></a>
<a id="tocSusernameattributefield"></a>
<a id="tocsusernameattributefield"></a>

```json
"string"
```

<h2 id="tocS_JwtTokenTypeConfiguration">JwtTokenTypeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemajwttokentypeconfiguration"></a>
<a id="schema_JwtTokenTypeConfiguration"></a>
<a id="tocSjwttokentypeconfiguration"></a>
<a id="tocsjwttokentypeconfiguration"></a>

```json
{
  "KeyLocation": {},
  "URL": {},
  "SecretManagerArn": {},
  "UserNameAttributeField": {},
  "GroupAttributeField": {},
  "Issuer": {},
  "ClaimRegex": {}
}
```

Provides the configuration information for the JWT token type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyLocation|object|true|none|none|
|URL|object|false|none|none|
|SecretManagerArn|object|false|none|none|
|UserNameAttributeField|object|false|none|none|
|GroupAttributeField|object|false|none|none|
|Issuer|object|false|none|none|
|ClaimRegex|object|false|none|none|

<h2 id="tocS_KmsKeyId">KmsKeyId</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyid"></a>
<a id="schema_KmsKeyId"></a>
<a id="tocSkmskeyid"></a>
<a id="tocskmskeyid"></a>

```json
"password"
```

<h2 id="tocS_MaxResultsIntegerForListAccessControlConfigurationsRequest">MaxResultsIntegerForListAccessControlConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsintegerforlistaccesscontrolconfigurationsrequest"></a>
<a id="schema_MaxResultsIntegerForListAccessControlConfigurationsRequest"></a>
<a id="tocSmaxresultsintegerforlistaccesscontrolconfigurationsrequest"></a>
<a id="tocsmaxresultsintegerforlistaccesscontrolconfigurationsrequest"></a>

```json
1
```

<h2 id="tocS_MaxResultsIntegerForListDataSourceSyncJobsRequest">MaxResultsIntegerForListDataSourceSyncJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsintegerforlistdatasourcesyncjobsrequest"></a>
<a id="schema_MaxResultsIntegerForListDataSourceSyncJobsRequest"></a>
<a id="tocSmaxresultsintegerforlistdatasourcesyncjobsrequest"></a>
<a id="tocsmaxresultsintegerforlistdatasourcesyncjobsrequest"></a>

```json
1
```

<h2 id="tocS_MaxResultsIntegerForListDataSourcesRequest">MaxResultsIntegerForListDataSourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsintegerforlistdatasourcesrequest"></a>
<a id="schema_MaxResultsIntegerForListDataSourcesRequest"></a>
<a id="tocSmaxresultsintegerforlistdatasourcesrequest"></a>
<a id="tocsmaxresultsintegerforlistdatasourcesrequest"></a>

```json
1
```

<h2 id="tocS_MaxResultsIntegerForListEntityPersonasRequest">MaxResultsIntegerForListEntityPersonasRequest</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsintegerforlistentitypersonasrequest"></a>
<a id="schema_MaxResultsIntegerForListEntityPersonasRequest"></a>
<a id="tocSmaxresultsintegerforlistentitypersonasrequest"></a>
<a id="tocsmaxresultsintegerforlistentitypersonasrequest"></a>

```json
1
```

<h2 id="tocS_PersonasSummaryList">PersonasSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapersonassummarylist"></a>
<a id="schema_PersonasSummaryList"></a>
<a id="tocSpersonassummarylist"></a>
<a id="tocspersonassummarylist"></a>

```json
[
  {
    "EntityId": {},
    "Persona": {},
    "CreatedAt": {},
    "UpdatedAt": {}
  }
]
```

<h2 id="tocS_MaxResultsIntegerForListExperiencesRequest">MaxResultsIntegerForListExperiencesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsintegerforlistexperiencesrequest"></a>
<a id="schema_MaxResultsIntegerForListExperiencesRequest"></a>
<a id="tocSmaxresultsintegerforlistexperiencesrequest"></a>
<a id="tocsmaxresultsintegerforlistexperiencesrequest"></a>

```json
1
```

<h2 id="tocS_MaxResultsIntegerForListFaqsRequest">MaxResultsIntegerForListFaqsRequest</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsintegerforlistfaqsrequest"></a>
<a id="schema_MaxResultsIntegerForListFaqsRequest"></a>
<a id="tocSmaxresultsintegerforlistfaqsrequest"></a>
<a id="tocsmaxresultsintegerforlistfaqsrequest"></a>

```json
1
```

<h2 id="tocS_MaxResultsIntegerForListFeaturedResultsSetsRequest">MaxResultsIntegerForListFeaturedResultsSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsintegerforlistfeaturedresultssetsrequest"></a>
<a id="schema_MaxResultsIntegerForListFeaturedResultsSetsRequest"></a>
<a id="tocSmaxresultsintegerforlistfeaturedresultssetsrequest"></a>
<a id="tocsmaxresultsintegerforlistfeaturedresultssetsrequest"></a>

```json
1
```

<h2 id="tocS_MaxResultsIntegerForListPrincipalsRequest">MaxResultsIntegerForListPrincipalsRequest</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsintegerforlistprincipalsrequest"></a>
<a id="schema_MaxResultsIntegerForListPrincipalsRequest"></a>
<a id="tocSmaxresultsintegerforlistprincipalsrequest"></a>
<a id="tocsmaxresultsintegerforlistprincipalsrequest"></a>

```json
1
```

<h2 id="tocS_ListOfGroupSummaries">ListOfGroupSummaries</h2>
<!-- backwards compatibility -->
<a id="schemalistofgroupsummaries"></a>
<a id="schema_ListOfGroupSummaries"></a>
<a id="tocSlistofgroupsummaries"></a>
<a id="tocslistofgroupsummaries"></a>

```json
[
  {
    "GroupId": {},
    "OrderingId": {}
  }
]
```

<h2 id="tocS_MaxResultsIntegerForListIndicesRequest">MaxResultsIntegerForListIndicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsintegerforlistindicesrequest"></a>
<a id="schema_MaxResultsIntegerForListIndicesRequest"></a>
<a id="tocSmaxresultsintegerforlistindicesrequest"></a>
<a id="tocsmaxresultsintegerforlistindicesrequest"></a>

```json
1
```

<h2 id="tocS_MaxResultsIntegerForListQuerySuggestionsBlockLists">MaxResultsIntegerForListQuerySuggestionsBlockLists</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsintegerforlistquerysuggestionsblocklists"></a>
<a id="schema_MaxResultsIntegerForListQuerySuggestionsBlockLists"></a>
<a id="tocSmaxresultsintegerforlistquerysuggestionsblocklists"></a>
<a id="tocsmaxresultsintegerforlistquerysuggestionsblocklists"></a>

```json
1
```

<h2 id="tocS_QuerySuggestionsBlockListSummaryItems">QuerySuggestionsBlockListSummaryItems</h2>
<!-- backwards compatibility -->
<a id="schemaquerysuggestionsblocklistsummaryitems"></a>
<a id="schema_QuerySuggestionsBlockListSummaryItems"></a>
<a id="tocSquerysuggestionsblocklistsummaryitems"></a>
<a id="tocsquerysuggestionsblocklistsummaryitems"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Status": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "ItemCount": {}
  }
]
```

<h2 id="tocS_MaxResultsIntegerForListThesauriRequest">MaxResultsIntegerForListThesauriRequest</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsintegerforlistthesaurirequest"></a>
<a id="schema_MaxResultsIntegerForListThesauriRequest"></a>
<a id="tocSmaxresultsintegerforlistthesaurirequest"></a>
<a id="tocsmaxresultsintegerforlistthesaurirequest"></a>

```json
1
```

<h2 id="tocS_ThesaurusSummaryItems">ThesaurusSummaryItems</h2>
<!-- backwards compatibility -->
<a id="schemathesaurussummaryitems"></a>
<a id="schema_ThesaurusSummaryItems"></a>
<a id="tocSthesaurussummaryitems"></a>
<a id="tocsthesaurussummaryitems"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Status": {},
    "CreatedAt": {},
    "UpdatedAt": {}
  }
]
```

<h2 id="tocS_LookBackPeriod">LookBackPeriod</h2>
<!-- backwards compatibility -->
<a id="schemalookbackperiod"></a>
<a id="schema_LookBackPeriod"></a>
<a id="tocSlookbackperiod"></a>
<a id="tocslookbackperiod"></a>

```json
0
```

<h2 id="tocS_MaxContentSizePerPageInMegaBytes">MaxContentSizePerPageInMegaBytes</h2>
<!-- backwards compatibility -->
<a id="schemamaxcontentsizeperpageinmegabytes"></a>
<a id="schema_MaxContentSizePerPageInMegaBytes"></a>
<a id="tocSmaxcontentsizeperpageinmegabytes"></a>
<a id="tocsmaxcontentsizeperpageinmegabytes"></a>

```json
0.000001
```

<h2 id="tocS_MaxLinksPerPage">MaxLinksPerPage</h2>
<!-- backwards compatibility -->
<a id="schemamaxlinksperpage"></a>
<a id="schema_MaxLinksPerPage"></a>
<a id="tocSmaxlinksperpage"></a>
<a id="tocsmaxlinksperpage"></a>

```json
1
```

<h2 id="tocS_MaxUrlsPerMinuteCrawlRate">MaxUrlsPerMinuteCrawlRate</h2>
<!-- backwards compatibility -->
<a id="schemamaxurlsperminutecrawlrate"></a>
<a id="schema_MaxUrlsPerMinuteCrawlRate"></a>
<a id="tocSmaxurlsperminutecrawlrate"></a>
<a id="tocsmaxurlsperminutecrawlrate"></a>

```json
1
```

<h2 id="tocS_MemberGroup">MemberGroup</h2>
<!-- backwards compatibility -->
<a id="schemamembergroup"></a>
<a id="schema_MemberGroup"></a>
<a id="tocSmembergroup"></a>
<a id="tocsmembergroup"></a>

```json
{
  "GroupId": {},
  "DataSourceId": {}
}
```

The sub groups that belong to a group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|true|none|none|
|DataSourceId|object|false|none|none|

<h2 id="tocS_UserId">UserId</h2>
<!-- backwards compatibility -->
<a id="schemauserid"></a>
<a id="schema_UserId"></a>
<a id="tocSuserid"></a>
<a id="tocsuserid"></a>

```json
"string"
```

<h2 id="tocS_MemberUser">MemberUser</h2>
<!-- backwards compatibility -->
<a id="schemamemberuser"></a>
<a id="schema_MemberUser"></a>
<a id="tocSmemberuser"></a>
<a id="tocsmemberuser"></a>

```json
{
  "UserId": {}
}
```

The users that belong to a group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|true|none|none|

<h2 id="tocS_OrganizationName">OrganizationName</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationname"></a>
<a id="schema_OrganizationName"></a>
<a id="tocSorganizationname"></a>
<a id="tocsorganizationname"></a>

```json
"string"
```

<h2 id="tocS_TenantDomain">TenantDomain</h2>
<!-- backwards compatibility -->
<a id="schematenantdomain"></a>
<a id="schema_TenantDomain"></a>
<a id="tocStenantdomain"></a>
<a id="tocstenantdomain"></a>

```json
"string"
```

<h2 id="tocS_OneDriveUsers">OneDriveUsers</h2>
<!-- backwards compatibility -->
<a id="schemaonedriveusers"></a>
<a id="schema_OneDriveUsers"></a>
<a id="tocSonedriveusers"></a>
<a id="tocsonedriveusers"></a>

```json
{
  "OneDriveUserList": {},
  "OneDriveUserS3Path": {
    "Bucket": {},
    "Key": {}
  }
}
```

User accounts whose documents should be indexed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OneDriveUserList|object|false|none|none|
|OneDriveUserS3Path|object|false|none|none|

<h2 id="tocS_OneDriveUser">OneDriveUser</h2>
<!-- backwards compatibility -->
<a id="schemaonedriveuser"></a>
<a id="schema_OneDriveUser"></a>
<a id="tocSonedriveuser"></a>
<a id="tocsonedriveuser"></a>

```json
"string"
```

<h2 id="tocS_OneDriveUserList">OneDriveUserList</h2>
<!-- backwards compatibility -->
<a id="schemaonedriveuserlist"></a>
<a id="schema_OneDriveUserList"></a>
<a id="tocSonedriveuserlist"></a>
<a id="tocsonedriveuserlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
"ASCENDING"
```

<h2 id="tocS_OrganizationId">OrganizationId</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationid"></a>
<a id="schema_OrganizationId"></a>
<a id="tocSorganizationid"></a>
<a id="tocsorganizationid"></a>

```json
"stringstring"
```

<h2 id="tocS_PersonasSummary">PersonasSummary</h2>
<!-- backwards compatibility -->
<a id="schemapersonassummary"></a>
<a id="schema_PersonasSummary"></a>
<a id="tocSpersonassummary"></a>
<a id="tocspersonassummary"></a>

```json
{
  "EntityId": {},
  "Persona": {},
  "CreatedAt": {},
  "UpdatedAt": {}
}
```

Summary information for users or groups in your IAM Identity Center identity source. This applies to users and groups with specific permissions that define their level of access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a search experience with no code</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityId|object|false|none|none|
|Persona|object|false|none|none|
|CreatedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_PrincipalType">PrincipalType</h2>
<!-- backwards compatibility -->
<a id="schemaprincipaltype"></a>
<a id="schema_PrincipalType"></a>
<a id="tocSprincipaltype"></a>
<a id="tocsprincipaltype"></a>

```json
"USER"
```

<h2 id="tocS_ReadAccessType">ReadAccessType</h2>
<!-- backwards compatibility -->
<a id="schemareadaccesstype"></a>
<a id="schema_ReadAccessType"></a>
<a id="tocSreadaccesstype"></a>
<a id="tocsreadaccesstype"></a>

```json
"ALLOW"
```

<h2 id="tocS_Principal">Principal</h2>
<!-- backwards compatibility -->
<a id="schemaprincipal"></a>
<a id="schema_Principal"></a>
<a id="tocSprincipal"></a>
<a id="tocsprincipal"></a>

```json
{
  "Name": {},
  "Type": {},
  "Access": {},
  "DataSourceId": {}
}
```

Provides user and group information for <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">user context filtering</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Type|object|true|none|none|
|Access|object|true|none|none|
|DataSourceId|object|false|none|none|

<h2 id="tocS_PrivateChannelFilter">PrivateChannelFilter</h2>
<!-- backwards compatibility -->
<a id="schemaprivatechannelfilter"></a>
<a id="schema_PrivateChannelFilter"></a>
<a id="tocSprivatechannelfilter"></a>
<a id="tocsprivatechannelfilter"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PublicChannelFilter">PublicChannelFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicchannelfilter"></a>
<a id="schema_PublicChannelFilter"></a>
<a id="tocSpublicchannelfilter"></a>
<a id="tocspublicchannelfilter"></a>

```json
[
  "string"
]
```

<h2 id="tocS_QueryId">QueryId</h2>
<!-- backwards compatibility -->
<a id="schemaqueryid"></a>
<a id="schema_QueryId"></a>
<a id="tocSqueryid"></a>
<a id="tocsqueryid"></a>

```json
"string"
```

<h2 id="tocS_QueryIdentifiersEnclosingOption">QueryIdentifiersEnclosingOption</h2>
<!-- backwards compatibility -->
<a id="schemaqueryidentifiersenclosingoption"></a>
<a id="schema_QueryIdentifiersEnclosingOption"></a>
<a id="tocSqueryidentifiersenclosingoption"></a>
<a id="tocsqueryidentifiersenclosingoption"></a>

```json
"DOUBLE_QUOTES"
```

<h2 id="tocS_QueryText">QueryText</h2>
<!-- backwards compatibility -->
<a id="schemaquerytext"></a>
<a id="schema_QueryText"></a>
<a id="tocSquerytext"></a>
<a id="tocsquerytext"></a>

```json
"string"
```

<h2 id="tocS_SortingConfiguration">SortingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasortingconfiguration"></a>
<a id="schema_SortingConfiguration"></a>
<a id="tocSsortingconfiguration"></a>
<a id="tocssortingconfiguration"></a>

```json
{
  "DocumentAttributeKey": {},
  "SortOrder": {}
}
```

<p>Specifies the document attribute to use to sort the response to a Amazon Kendra query. You can specify a single attribute for sorting. The attribute must have the <code>Sortable</code> flag set to <code>true</code>, otherwise Amazon Kendra returns an exception.</p> <p>You can sort attributes of the following types.</p> <ul> <li> <p>Date value</p> </li> <li> <p>Long value</p> </li> <li> <p>String value</p> </li> </ul> <p>You can't sort attributes of the following type.</p> <ul> <li> <p>String list value</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentAttributeKey|object|true|none|none|
|SortOrder|object|true|none|none|

<h2 id="tocS_UserContext">UserContext</h2>
<!-- backwards compatibility -->
<a id="schemausercontext"></a>
<a id="schema_UserContext"></a>
<a id="tocSusercontext"></a>
<a id="tocsusercontext"></a>

```json
{
  "Token": {},
  "UserId": {},
  "Groups": {},
  "DataSourceGroups": {}
}
```

<p>Provides information about the user context for an Amazon Kendra index.</p> <p>User context filtering is a kind of personalized search with the benefit of controlling access to documents. For example, not all teams that search the company portal for information should access top-secret company documents, nor are these documents relevant to all users. Only specific users or groups of teams given access to top-secret documents should see these documents in their search results.</p> <p>You provide one of the following:</p> <ul> <li> <p>User token</p> </li> <li> <p>User ID, the groups the user belongs to, and any data sources the groups can access.</p> </li> </ul> <p>If you provide both, an exception is thrown.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Token|object|false|none|none|
|UserId|object|false|none|none|
|Groups|object|false|none|none|
|DataSourceGroups|object|false|none|none|

<h2 id="tocS_VisitorId">VisitorId</h2>
<!-- backwards compatibility -->
<a id="schemavisitorid"></a>
<a id="schema_VisitorId"></a>
<a id="tocSvisitorid"></a>
<a id="tocsvisitorid"></a>

```json
"string"
```

<h2 id="tocS_SpellCorrectionConfiguration">SpellCorrectionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaspellcorrectionconfiguration"></a>
<a id="schema_SpellCorrectionConfiguration"></a>
<a id="tocSspellcorrectionconfiguration"></a>
<a id="tocsspellcorrectionconfiguration"></a>

```json
{
  "IncludeQuerySpellCheckSuggestions": {}
}
```

<p>Provides the configuration information for suggested query spell corrections.</p> <p>Suggested spell corrections are based on words that appear in your indexed documents and how closely a corrected word matches a misspelled word.</p> <p>This feature is designed with certain defaults or limits. For information on the current limits and how to request more support for some limits, see the <a href="https://docs.aws.amazon.com/kendra/latest/dg/query-spell-check.html">Spell Checker documentation</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IncludeQuerySpellCheckSuggestions|object|true|none|none|

<h2 id="tocS_QueryResultItemList">QueryResultItemList</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresultitemlist"></a>
<a id="schema_QueryResultItemList"></a>
<a id="tocSqueryresultitemlist"></a>
<a id="tocsqueryresultitemlist"></a>

```json
[
  {
    "Id": {},
    "Type": {},
    "Format": {},
    "AdditionalAttributes": {},
    "DocumentId": {},
    "DocumentTitle": {
      "Text": {},
      "Highlights": {}
    },
    "DocumentExcerpt": {
      "Text": {},
      "Highlights": {}
    },
    "DocumentURI": {},
    "DocumentAttributes": {},
    "ScoreAttributes": {
      "ScoreConfidence": {}
    },
    "FeedbackToken": {},
    "TableExcerpt": {
      "Rows": {},
      "TotalNumberOfRows": {}
    }
  }
]
```

<h2 id="tocS_WarningList">WarningList</h2>
<!-- backwards compatibility -->
<a id="schemawarninglist"></a>
<a id="schema_WarningList"></a>
<a id="tocSwarninglist"></a>
<a id="tocswarninglist"></a>

```json
[
  {
    "Message": {},
    "Code": {}
  }
]
```

<h2 id="tocS_SpellCorrectedQueryList">SpellCorrectedQueryList</h2>
<!-- backwards compatibility -->
<a id="schemaspellcorrectedquerylist"></a>
<a id="schema_SpellCorrectedQueryList"></a>
<a id="tocSspellcorrectedquerylist"></a>
<a id="tocsspellcorrectedquerylist"></a>

```json
[
  {
    "SuggestedQueryText": {},
    "Corrections": {}
  }
]
```

<h2 id="tocS_QueryResultFormat">QueryResultFormat</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresultformat"></a>
<a id="schema_QueryResultFormat"></a>
<a id="tocSqueryresultformat"></a>
<a id="tocsqueryresultformat"></a>

```json
"TABLE"
```

<h2 id="tocS_ScoreAttributes">ScoreAttributes</h2>
<!-- backwards compatibility -->
<a id="schemascoreattributes"></a>
<a id="schema_ScoreAttributes"></a>
<a id="tocSscoreattributes"></a>
<a id="tocsscoreattributes"></a>

```json
{
  "ScoreConfidence": {}
}
```

Provides a relative ranking that indicates how confident Amazon Kendra is that the response matches the query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScoreConfidence|object|false|none|none|

<h2 id="tocS_TableExcerpt">TableExcerpt</h2>
<!-- backwards compatibility -->
<a id="schematableexcerpt"></a>
<a id="schema_TableExcerpt"></a>
<a id="tocStableexcerpt"></a>
<a id="tocstableexcerpt"></a>

```json
{
  "Rows": {},
  "TotalNumberOfRows": {}
}
```

An excerpt from a table within a document. The table excerpt displays up to five columns and three rows, depending on how many table cells are relevant to the query and how many columns are available in the original table. The top most relevant cell is displayed in the table excerpt, along with the next most relevant cells.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rows|object|false|none|none|
|TotalNumberOfRows|object|false|none|none|

<h2 id="tocS_QueryResultItem">QueryResultItem</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresultitem"></a>
<a id="schema_QueryResultItem"></a>
<a id="tocSqueryresultitem"></a>
<a id="tocsqueryresultitem"></a>

```json
{
  "Id": {},
  "Type": {},
  "Format": {},
  "AdditionalAttributes": {},
  "DocumentId": {},
  "DocumentTitle": {
    "Text": {},
    "Highlights": {}
  },
  "DocumentExcerpt": {
    "Text": {},
    "Highlights": {}
  },
  "DocumentURI": {},
  "DocumentAttributes": {},
  "ScoreAttributes": {
    "ScoreConfidence": {}
  },
  "FeedbackToken": {},
  "TableExcerpt": {
    "Rows": {},
    "TotalNumberOfRows": {}
  }
}
```

<p>A single query result.</p> <p>A query result contains information about a document returned by the query. This includes the original location of the document, a list of attributes assigned to the document, and relevant text from the document that satisfies the query.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Type|object|false|none|none|
|Format|object|false|none|none|
|AdditionalAttributes|object|false|none|none|
|DocumentId|object|false|none|none|
|DocumentTitle|object|false|none|none|
|DocumentExcerpt|object|false|none|none|
|DocumentURI|object|false|none|none|
|DocumentAttributes|object|false|none|none|
|ScoreAttributes|object|false|none|none|
|FeedbackToken|object|false|none|none|
|TableExcerpt|object|false|none|none|

<h2 id="tocS_QuerySuggestionsBlockListSummary">QuerySuggestionsBlockListSummary</h2>
<!-- backwards compatibility -->
<a id="schemaquerysuggestionsblocklistsummary"></a>
<a id="schema_QuerySuggestionsBlockListSummary"></a>
<a id="tocSquerysuggestionsblocklistsummary"></a>
<a id="tocsquerysuggestionsblocklistsummary"></a>

```json
{
  "Id": {},
  "Name": {},
  "Status": {},
  "CreatedAt": {},
  "UpdatedAt": {},
  "ItemCount": {}
}
```

<p>Summary information on a query suggestions block list.</p> <p>This includes information on the block list ID, block list name, when the block list was created, when the block list was last updated, and the count of block words/phrases in the block list.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|CreatedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|
|ItemCount|object|false|none|none|

<h2 id="tocS_ValueImportanceMap">ValueImportanceMap</h2>
<!-- backwards compatibility -->
<a id="schemavalueimportancemap"></a>
<a id="schema_ValueImportanceMap"></a>
<a id="tocSvalueimportancemap"></a>
<a id="tocsvalueimportancemap"></a>

```json
{
  "property1": 1,
  "property2": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Importance](#schemaimportance)|false|none|none|

<h2 id="tocS_RelevanceType">RelevanceType</h2>
<!-- backwards compatibility -->
<a id="schemarelevancetype"></a>
<a id="schema_RelevanceType"></a>
<a id="tocSrelevancetype"></a>
<a id="tocsrelevancetype"></a>

```json
"RELEVANT"
```

<h2 id="tocS_RelevanceFeedback">RelevanceFeedback</h2>
<!-- backwards compatibility -->
<a id="schemarelevancefeedback"></a>
<a id="schema_RelevanceFeedback"></a>
<a id="tocSrelevancefeedback"></a>
<a id="tocsrelevancefeedback"></a>

```json
{
  "ResultId": {},
  "RelevanceValue": {}
}
```

Provides feedback on how relevant a document is to a search. Your application uses the <code>SubmitFeedback</code> API to provide relevance information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResultId|object|true|none|none|
|RelevanceValue|object|true|none|none|

<h2 id="tocS_RelevanceFeedbackList">RelevanceFeedbackList</h2>
<!-- backwards compatibility -->
<a id="schemarelevancefeedbacklist"></a>
<a id="schema_RelevanceFeedbackList"></a>
<a id="tocSrelevancefeedbacklist"></a>
<a id="tocsrelevancefeedbacklist"></a>

```json
[
  {
    "ResultId": {},
    "RelevanceValue": {}
  }
]
```

<h2 id="tocS_RepositoryName">RepositoryName</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryname"></a>
<a id="schema_RepositoryName"></a>
<a id="tocSrepositoryname"></a>
<a id="tocsrepositoryname"></a>

```json
"string"
```

<h2 id="tocS_SalesforceChatterFeedIncludeFilterTypes">SalesforceChatterFeedIncludeFilterTypes</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcechatterfeedincludefiltertypes"></a>
<a id="schema_SalesforceChatterFeedIncludeFilterTypes"></a>
<a id="tocSsalesforcechatterfeedincludefiltertypes"></a>
<a id="tocssalesforcechatterfeedincludefiltertypes"></a>

```json
[
  "ACTIVE_USER"
]
```

<h2 id="tocS_SalesforceChatterFeedConfiguration">SalesforceChatterFeedConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcechatterfeedconfiguration"></a>
<a id="schema_SalesforceChatterFeedConfiguration"></a>
<a id="tocSsalesforcechatterfeedconfiguration"></a>
<a id="tocssalesforcechatterfeedconfiguration"></a>

```json
{
  "DocumentDataFieldName": {},
  "DocumentTitleFieldName": {},
  "FieldMappings": {},
  "IncludeFilterTypes": {}
}
```

The configuration information for syncing a Salesforce chatter feed. The contents of the object comes from the Salesforce FeedItem table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentDataFieldName|object|true|none|none|
|DocumentTitleFieldName|object|false|none|none|
|FieldMappings|object|false|none|none|
|IncludeFilterTypes|object|false|none|none|

<h2 id="tocS_SalesforceChatterFeedIncludeFilterType">SalesforceChatterFeedIncludeFilterType</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcechatterfeedincludefiltertype"></a>
<a id="schema_SalesforceChatterFeedIncludeFilterType"></a>
<a id="tocSsalesforcechatterfeedincludefiltertype"></a>
<a id="tocssalesforcechatterfeedincludefiltertype"></a>

```json
"ACTIVE_USER"
```

<h2 id="tocS_SalesforceStandardObjectConfigurationList">SalesforceStandardObjectConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcestandardobjectconfigurationlist"></a>
<a id="schema_SalesforceStandardObjectConfigurationList"></a>
<a id="tocSsalesforcestandardobjectconfigurationlist"></a>
<a id="tocssalesforcestandardobjectconfigurationlist"></a>

```json
[
  {
    "Name": {},
    "DocumentDataFieldName": {},
    "DocumentTitleFieldName": {},
    "FieldMappings": {}
  }
]
```

<h2 id="tocS_SalesforceKnowledgeArticleConfiguration">SalesforceKnowledgeArticleConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasalesforceknowledgearticleconfiguration"></a>
<a id="schema_SalesforceKnowledgeArticleConfiguration"></a>
<a id="tocSsalesforceknowledgearticleconfiguration"></a>
<a id="tocssalesforceknowledgearticleconfiguration"></a>

```json
{
  "IncludedStates": {},
  "StandardKnowledgeArticleTypeConfiguration": {
    "DocumentDataFieldName": {},
    "DocumentTitleFieldName": {},
    "FieldMappings": {}
  },
  "CustomKnowledgeArticleTypeConfigurations": {}
}
```

Provides the configuration information for the knowledge article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IncludedStates|object|true|none|none|
|StandardKnowledgeArticleTypeConfiguration|object|false|none|none|
|CustomKnowledgeArticleTypeConfigurations|object|false|none|none|

<h2 id="tocS_SalesforceStandardObjectAttachmentConfiguration">SalesforceStandardObjectAttachmentConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcestandardobjectattachmentconfiguration"></a>
<a id="schema_SalesforceStandardObjectAttachmentConfiguration"></a>
<a id="tocSsalesforcestandardobjectattachmentconfiguration"></a>
<a id="tocssalesforcestandardobjectattachmentconfiguration"></a>

```json
{
  "DocumentTitleFieldName": {},
  "FieldMappings": {}
}
```

Provides the configuration information for processing attachments to Salesforce standard objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentTitleFieldName|object|false|none|none|
|FieldMappings|object|false|none|none|

<h2 id="tocS_SalesforceCustomKnowledgeArticleTypeName">SalesforceCustomKnowledgeArticleTypeName</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcecustomknowledgearticletypename"></a>
<a id="schema_SalesforceCustomKnowledgeArticleTypeName"></a>
<a id="tocSsalesforcecustomknowledgearticletypename"></a>
<a id="tocssalesforcecustomknowledgearticletypename"></a>

```json
"string"
```

<h2 id="tocS_SalesforceCustomKnowledgeArticleTypeConfiguration">SalesforceCustomKnowledgeArticleTypeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcecustomknowledgearticletypeconfiguration"></a>
<a id="schema_SalesforceCustomKnowledgeArticleTypeConfiguration"></a>
<a id="tocSsalesforcecustomknowledgearticletypeconfiguration"></a>
<a id="tocssalesforcecustomknowledgearticletypeconfiguration"></a>

```json
{
  "Name": {},
  "DocumentDataFieldName": {},
  "DocumentTitleFieldName": {},
  "FieldMappings": {}
}
```

Provides the configuration information for indexing Salesforce custom articles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|DocumentDataFieldName|object|true|none|none|
|DocumentTitleFieldName|object|false|none|none|
|FieldMappings|object|false|none|none|

<h2 id="tocS_SalesforceCustomKnowledgeArticleTypeConfigurationList">SalesforceCustomKnowledgeArticleTypeConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcecustomknowledgearticletypeconfigurationlist"></a>
<a id="schema_SalesforceCustomKnowledgeArticleTypeConfigurationList"></a>
<a id="tocSsalesforcecustomknowledgearticletypeconfigurationlist"></a>
<a id="tocssalesforcecustomknowledgearticletypeconfigurationlist"></a>

```json
[
  {
    "Name": {},
    "DocumentDataFieldName": {},
    "DocumentTitleFieldName": {},
    "FieldMappings": {}
  }
]
```

<h2 id="tocS_SalesforceKnowledgeArticleStateList">SalesforceKnowledgeArticleStateList</h2>
<!-- backwards compatibility -->
<a id="schemasalesforceknowledgearticlestatelist"></a>
<a id="schema_SalesforceKnowledgeArticleStateList"></a>
<a id="tocSsalesforceknowledgearticlestatelist"></a>
<a id="tocssalesforceknowledgearticlestatelist"></a>

```json
[
  "DRAFT"
]
```

<h2 id="tocS_SalesforceStandardKnowledgeArticleTypeConfiguration">SalesforceStandardKnowledgeArticleTypeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcestandardknowledgearticletypeconfiguration"></a>
<a id="schema_SalesforceStandardKnowledgeArticleTypeConfiguration"></a>
<a id="tocSsalesforcestandardknowledgearticletypeconfiguration"></a>
<a id="tocssalesforcestandardknowledgearticletypeconfiguration"></a>

```json
{
  "DocumentDataFieldName": {},
  "DocumentTitleFieldName": {},
  "FieldMappings": {}
}
```

Provides the configuration information for standard Salesforce knowledge articles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentDataFieldName|object|true|none|none|
|DocumentTitleFieldName|object|false|none|none|
|FieldMappings|object|false|none|none|

<h2 id="tocS_SalesforceKnowledgeArticleState">SalesforceKnowledgeArticleState</h2>
<!-- backwards compatibility -->
<a id="schemasalesforceknowledgearticlestate"></a>
<a id="schema_SalesforceKnowledgeArticleState"></a>
<a id="tocSsalesforceknowledgearticlestate"></a>
<a id="tocssalesforceknowledgearticlestate"></a>

```json
"DRAFT"
```

<h2 id="tocS_SalesforceStandardObjectName">SalesforceStandardObjectName</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcestandardobjectname"></a>
<a id="schema_SalesforceStandardObjectName"></a>
<a id="tocSsalesforcestandardobjectname"></a>
<a id="tocssalesforcestandardobjectname"></a>

```json
"ACCOUNT"
```

<h2 id="tocS_SalesforceStandardObjectConfiguration">SalesforceStandardObjectConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcestandardobjectconfiguration"></a>
<a id="schema_SalesforceStandardObjectConfiguration"></a>
<a id="tocSsalesforcestandardobjectconfiguration"></a>
<a id="tocssalesforcestandardobjectconfiguration"></a>

```json
{
  "Name": {},
  "DocumentDataFieldName": {},
  "DocumentTitleFieldName": {},
  "FieldMappings": {}
}
```

Provides the configuration information for indexing a single standard object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|DocumentDataFieldName|object|true|none|none|
|DocumentTitleFieldName|object|false|none|none|
|FieldMappings|object|false|none|none|

<h2 id="tocS_ScoreConfidence">ScoreConfidence</h2>
<!-- backwards compatibility -->
<a id="schemascoreconfidence"></a>
<a id="schema_ScoreConfidence"></a>
<a id="tocSscoreconfidence"></a>
<a id="tocsscoreconfidence"></a>

```json
"VERY_HIGH"
```

Enumeration for query score confidence.

<h2 id="tocS_VpcSecurityGroupId">VpcSecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemavpcsecuritygroupid"></a>
<a id="schema_VpcSecurityGroupId"></a>
<a id="tocSvpcsecuritygroupid"></a>
<a id="tocsvpcsecuritygroupid"></a>

```json
"string"
```

<h2 id="tocS_SeedUrl">SeedUrl</h2>
<!-- backwards compatibility -->
<a id="schemaseedurl"></a>
<a id="schema_SeedUrl"></a>
<a id="tocSseedurl"></a>
<a id="tocsseedurl"></a>

```json
"string"
```

<h2 id="tocS_SeedUrlList">SeedUrlList</h2>
<!-- backwards compatibility -->
<a id="schemaseedurllist"></a>
<a id="schema_SeedUrlList"></a>
<a id="tocSseedurllist"></a>
<a id="tocsseedurllist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_WebCrawlerMode">WebCrawlerMode</h2>
<!-- backwards compatibility -->
<a id="schemawebcrawlermode"></a>
<a id="schema_WebCrawlerMode"></a>
<a id="tocSwebcrawlermode"></a>
<a id="tocswebcrawlermode"></a>

```json
"HOST_ONLY"
```

<h2 id="tocS_SeedUrlConfiguration">SeedUrlConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaseedurlconfiguration"></a>
<a id="schema_SeedUrlConfiguration"></a>
<a id="tocSseedurlconfiguration"></a>
<a id="tocsseedurlconfiguration"></a>

```json
{
  "SeedUrls": {},
  "WebCrawlerMode": {}
}
```

<p>Provides the configuration information for the seed or starting point URLs to crawl.</p> <p> <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own web pages, or web pages that you have authorization to index.</i> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SeedUrls|object|true|none|none|
|WebCrawlerMode|object|false|none|none|

<h2 id="tocS_ServiceNowAuthenticationType">ServiceNowAuthenticationType</h2>
<!-- backwards compatibility -->
<a id="schemaservicenowauthenticationtype"></a>
<a id="schema_ServiceNowAuthenticationType"></a>
<a id="tocSservicenowauthenticationtype"></a>
<a id="tocsservicenowauthenticationtype"></a>

```json
"HTTP_BASIC"
```

<h2 id="tocS_ServiceNowBuildVersionType">ServiceNowBuildVersionType</h2>
<!-- backwards compatibility -->
<a id="schemaservicenowbuildversiontype"></a>
<a id="schema_ServiceNowBuildVersionType"></a>
<a id="tocSservicenowbuildversiontype"></a>
<a id="tocsservicenowbuildversiontype"></a>

```json
"LONDON"
```

<h2 id="tocS_ServiceNowHostUrl">ServiceNowHostUrl</h2>
<!-- backwards compatibility -->
<a id="schemaservicenowhosturl"></a>
<a id="schema_ServiceNowHostUrl"></a>
<a id="tocSservicenowhosturl"></a>
<a id="tocsservicenowhosturl"></a>

```json
"string"
```

<h2 id="tocS_ServiceNowKnowledgeArticleConfiguration">ServiceNowKnowledgeArticleConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaservicenowknowledgearticleconfiguration"></a>
<a id="schema_ServiceNowKnowledgeArticleConfiguration"></a>
<a id="tocSservicenowknowledgearticleconfiguration"></a>
<a id="tocsservicenowknowledgearticleconfiguration"></a>

```json
{
  "CrawlAttachments": {},
  "IncludeAttachmentFilePatterns": {},
  "ExcludeAttachmentFilePatterns": {},
  "DocumentDataFieldName": {},
  "DocumentTitleFieldName": {},
  "FieldMappings": {},
  "FilterQuery": {}
}
```

Provides the configuration information for crawling knowledge articles in the ServiceNow site.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CrawlAttachments|object|false|none|none|
|IncludeAttachmentFilePatterns|object|false|none|none|
|ExcludeAttachmentFilePatterns|object|false|none|none|
|DocumentDataFieldName|object|true|none|none|
|DocumentTitleFieldName|object|false|none|none|
|FieldMappings|object|false|none|none|
|FilterQuery|object|false|none|none|

<h2 id="tocS_ServiceNowServiceCatalogConfiguration">ServiceNowServiceCatalogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaservicenowservicecatalogconfiguration"></a>
<a id="schema_ServiceNowServiceCatalogConfiguration"></a>
<a id="tocSservicenowservicecatalogconfiguration"></a>
<a id="tocsservicenowservicecatalogconfiguration"></a>

```json
{
  "CrawlAttachments": {},
  "IncludeAttachmentFilePatterns": {},
  "ExcludeAttachmentFilePatterns": {},
  "DocumentDataFieldName": {},
  "DocumentTitleFieldName": {},
  "FieldMappings": {}
}
```

Provides the configuration information for crawling service catalog items in the ServiceNow site

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CrawlAttachments|object|false|none|none|
|IncludeAttachmentFilePatterns|object|false|none|none|
|ExcludeAttachmentFilePatterns|object|false|none|none|
|DocumentDataFieldName|object|true|none|none|
|DocumentTitleFieldName|object|false|none|none|
|FieldMappings|object|false|none|none|

<h2 id="tocS_ServiceNowKnowledgeArticleFilterQuery">ServiceNowKnowledgeArticleFilterQuery</h2>
<!-- backwards compatibility -->
<a id="schemaservicenowknowledgearticlefilterquery"></a>
<a id="schema_ServiceNowKnowledgeArticleFilterQuery"></a>
<a id="tocSservicenowknowledgearticlefilterquery"></a>
<a id="tocsservicenowknowledgearticlefilterquery"></a>

```json
"string"
```

<h2 id="tocS_SharePointVersion">SharePointVersion</h2>
<!-- backwards compatibility -->
<a id="schemasharepointversion"></a>
<a id="schema_SharePointVersion"></a>
<a id="tocSsharepointversion"></a>
<a id="tocssharepointversion"></a>

```json
"SHAREPOINT_2013"
```

<h2 id="tocS_SharePointUrlList">SharePointUrlList</h2>
<!-- backwards compatibility -->
<a id="schemasharepointurllist"></a>
<a id="schema_SharePointUrlList"></a>
<a id="tocSsharepointurllist"></a>
<a id="tocssharepointurllist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SharePointOnlineAuthenticationType">SharePointOnlineAuthenticationType</h2>
<!-- backwards compatibility -->
<a id="schemasharepointonlineauthenticationtype"></a>
<a id="schema_SharePointOnlineAuthenticationType"></a>
<a id="tocSsharepointonlineauthenticationtype"></a>
<a id="tocssharepointonlineauthenticationtype"></a>

```json
"HTTP_BASIC"
```

<h2 id="tocS_SinceCrawlDate">SinceCrawlDate</h2>
<!-- backwards compatibility -->
<a id="schemasincecrawldate"></a>
<a id="schema_SinceCrawlDate"></a>
<a id="tocSsincecrawldate"></a>
<a id="tocssincecrawldate"></a>

```json
"stringstri"
```

<h2 id="tocS_SiteMap">SiteMap</h2>
<!-- backwards compatibility -->
<a id="schemasitemap"></a>
<a id="schema_SiteMap"></a>
<a id="tocSsitemap"></a>
<a id="tocssitemap"></a>

```json
"string"
```

<h2 id="tocS_SiteMapsList">SiteMapsList</h2>
<!-- backwards compatibility -->
<a id="schemasitemapslist"></a>
<a id="schema_SiteMapsList"></a>
<a id="tocSsitemapslist"></a>
<a id="tocssitemapslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SiteMapsConfiguration">SiteMapsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasitemapsconfiguration"></a>
<a id="schema_SiteMapsConfiguration"></a>
<a id="tocSsitemapsconfiguration"></a>
<a id="tocssitemapsconfiguration"></a>

```json
{
  "SiteMaps": {}
}
```

<p>Provides the configuration information for the sitemap URLs to crawl.</p> <p> <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own web pages, or web pages that you have authorization to index.</i> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SiteMaps|object|true|none|none|

<h2 id="tocS_TeamId">TeamId</h2>
<!-- backwards compatibility -->
<a id="schemateamid"></a>
<a id="schema_TeamId"></a>
<a id="tocSteamid"></a>
<a id="tocsteamid"></a>

```json
"string"
```

<h2 id="tocS_SlackEntityList">SlackEntityList</h2>
<!-- backwards compatibility -->
<a id="schemaslackentitylist"></a>
<a id="schema_SlackEntityList"></a>
<a id="tocSslackentitylist"></a>
<a id="tocsslackentitylist"></a>

```json
[
  "PUBLIC_CHANNEL"
]
```

<h2 id="tocS_SlackEntity">SlackEntity</h2>
<!-- backwards compatibility -->
<a id="schemaslackentity"></a>
<a id="schema_SlackEntity"></a>
<a id="tocSslackentity"></a>
<a id="tocsslackentity"></a>

```json
"PUBLIC_CHANNEL"
```

<h2 id="tocS_SnapshotsDataRecord">SnapshotsDataRecord</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotsdatarecord"></a>
<a id="schema_SnapshotsDataRecord"></a>
<a id="tocSsnapshotsdatarecord"></a>
<a id="tocssnapshotsdatarecord"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"DESC"
```

<h2 id="tocS_SuggestedQueryText">SuggestedQueryText</h2>
<!-- backwards compatibility -->
<a id="schemasuggestedquerytext"></a>
<a id="schema_SuggestedQueryText"></a>
<a id="tocSsuggestedquerytext"></a>
<a id="tocssuggestedquerytext"></a>

```json
"string"
```

<h2 id="tocS_SpellCorrectedQuery">SpellCorrectedQuery</h2>
<!-- backwards compatibility -->
<a id="schemaspellcorrectedquery"></a>
<a id="schema_SpellCorrectedQuery"></a>
<a id="tocSspellcorrectedquery"></a>
<a id="tocsspellcorrectedquery"></a>

```json
{
  "SuggestedQueryText": {},
  "Corrections": {}
}
```

A query with suggested spell corrections.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuggestedQueryText|object|false|none|none|
|Corrections|object|false|none|none|

<h2 id="tocS_SubnetId">SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetId"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

```json
"string"
```

<h2 id="tocS_SuggestionValue">SuggestionValue</h2>
<!-- backwards compatibility -->
<a id="schemasuggestionvalue"></a>
<a id="schema_SuggestionValue"></a>
<a id="tocSsuggestionvalue"></a>
<a id="tocssuggestionvalue"></a>

```json
{
  "Text": {
    "Text": {},
    "Highlights": {}
  }
}
```

The <code>SuggestionTextWithHighlights</code> structure information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|false|none|none|

<h2 id="tocS_Suggestion">Suggestion</h2>
<!-- backwards compatibility -->
<a id="schemasuggestion"></a>
<a id="schema_Suggestion"></a>
<a id="tocSsuggestion"></a>
<a id="tocssuggestion"></a>

```json
{
  "Id": {},
  "Value": {
    "Text": {
      "Text": {},
      "Highlights": {}
    }
  }
}
```

A single query suggestion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_SuggestionHighlight">SuggestionHighlight</h2>
<!-- backwards compatibility -->
<a id="schemasuggestionhighlight"></a>
<a id="schema_SuggestionHighlight"></a>
<a id="tocSsuggestionhighlight"></a>
<a id="tocssuggestionhighlight"></a>

```json
{
  "BeginOffset": {},
  "EndOffset": {}
}
```

The text highlights for a single query suggestion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|

<h2 id="tocS_SuggestionHighlightList">SuggestionHighlightList</h2>
<!-- backwards compatibility -->
<a id="schemasuggestionhighlightlist"></a>
<a id="schema_SuggestionHighlightList"></a>
<a id="tocSsuggestionhighlightlist"></a>
<a id="tocssuggestionhighlightlist"></a>

```json
[
  {
    "BeginOffset": {},
    "EndOffset": {}
  }
]
```

<h2 id="tocS_SuggestionTextWithHighlights">SuggestionTextWithHighlights</h2>
<!-- backwards compatibility -->
<a id="schemasuggestiontextwithhighlights"></a>
<a id="schema_SuggestionTextWithHighlights"></a>
<a id="tocSsuggestiontextwithhighlights"></a>
<a id="tocssuggestiontextwithhighlights"></a>

```json
{
  "Text": {},
  "Highlights": {}
}
```

Provides text and information about where to highlight the query suggestion text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|false|none|none|
|Highlights|object|false|none|none|

<h2 id="tocS_TableCell">TableCell</h2>
<!-- backwards compatibility -->
<a id="schematablecell"></a>
<a id="schema_TableCell"></a>
<a id="tocStablecell"></a>
<a id="tocstablecell"></a>

```json
{
  "Value": {},
  "TopAnswer": {},
  "Highlighted": {},
  "Header": {}
}
```

Provides information about a table cell in a table excerpt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|TopAnswer|object|false|none|none|
|Highlighted|object|false|none|none|
|Header|object|false|none|none|

<h2 id="tocS_TableCellList">TableCellList</h2>
<!-- backwards compatibility -->
<a id="schematablecelllist"></a>
<a id="schema_TableCellList"></a>
<a id="tocStablecelllist"></a>
<a id="tocstablecelllist"></a>

```json
[
  {
    "Value": {},
    "TopAnswer": {},
    "Highlighted": {},
    "Header": {}
  }
]
```

<h2 id="tocS_TableRowList">TableRowList</h2>
<!-- backwards compatibility -->
<a id="schematablerowlist"></a>
<a id="schema_TableRowList"></a>
<a id="tocStablerowlist"></a>
<a id="tocstablerowlist"></a>

```json
[
  {
    "Cells": {}
  }
]
```

<h2 id="tocS_TableRow">TableRow</h2>
<!-- backwards compatibility -->
<a id="schematablerow"></a>
<a id="schema_TableRow"></a>
<a id="tocStablerow"></a>
<a id="tocstablerow"></a>

```json
{
  "Cells": {}
}
```

Information about a row in a table excerpt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cells|object|false|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{}
```

<p>The template schema used for the data source, where templates schemas are supported.</p> <p>See <a href="https://docs.aws.amazon.com/kendra/latest/dg/ds-schemas.html">Data source template schemas</a>.</p>

<h2 id="tocS_ThesaurusSummary">ThesaurusSummary</h2>
<!-- backwards compatibility -->
<a id="schemathesaurussummary"></a>
<a id="schema_ThesaurusSummary"></a>
<a id="tocSthesaurussummary"></a>
<a id="tocsthesaurussummary"></a>

```json
{
  "Id": {},
  "Name": {},
  "Status": {},
  "CreatedAt": {},
  "UpdatedAt": {}
}
```

An array of summary information for a thesaurus or multiple thesauri.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|CreatedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```

<h2 id="tocS_Urls">Urls</h2>
<!-- backwards compatibility -->
<a id="schemaurls"></a>
<a id="schema_Urls"></a>
<a id="tocSurls"></a>
<a id="tocsurls"></a>

```json
{
  "SeedUrlConfiguration": {
    "SeedUrls": {},
    "WebCrawlerMode": {}
  },
  "SiteMapsConfiguration": {
    "SiteMaps": {}
  }
}
```

<p>Provides the configuration information of the URLs to crawl.</p> <p>You can only crawl websites that use the secure communication protocol, Hypertext Transfer Protocol Secure (HTTPS). If you receive an error when crawling a website, it could be that the website is blocked from crawling.</p> <p> <i>When selecting websites to index, you must adhere to the <a href="https://aws.amazon.com/aup/">Amazon Acceptable Use Policy</a> and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own web pages, or web pages that you have authorization to index.</i> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SeedUrlConfiguration|object|false|none|none|
|SiteMapsConfiguration|object|false|none|none|

<h2 id="tocS_UserGroupResolutionMode">UserGroupResolutionMode</h2>
<!-- backwards compatibility -->
<a id="schemausergroupresolutionmode"></a>
<a id="schema_UserGroupResolutionMode"></a>
<a id="tocSusergroupresolutionmode"></a>
<a id="tocsusergroupresolutionmode"></a>

```json
"AWS_SSO"
```

<h2 id="tocS_UserTokenConfiguration">UserTokenConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemausertokenconfiguration"></a>
<a id="schema_UserTokenConfiguration"></a>
<a id="tocSusertokenconfiguration"></a>
<a id="tocsusertokenconfiguration"></a>

```json
{
  "JwtTokenTypeConfiguration": {
    "KeyLocation": {},
    "URL": {},
    "SecretManagerArn": {},
    "UserNameAttributeField": {},
    "GroupAttributeField": {},
    "Issuer": {},
    "ClaimRegex": {}
  },
  "JsonTokenTypeConfiguration": {
    "UserNameAttributeField": {},
    "GroupAttributeField": {}
  }
}
```

Provides the configuration information for a token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JwtTokenTypeConfiguration|object|false|none|none|
|JsonTokenTypeConfiguration|object|false|none|none|

<h2 id="tocS_ValueImportanceMapKey">ValueImportanceMapKey</h2>
<!-- backwards compatibility -->
<a id="schemavalueimportancemapkey"></a>
<a id="schema_ValueImportanceMapKey"></a>
<a id="tocSvalueimportancemapkey"></a>
<a id="tocsvalueimportancemapkey"></a>

```json
"string"
```

<h2 id="tocS_WarningMessage">WarningMessage</h2>
<!-- backwards compatibility -->
<a id="schemawarningmessage"></a>
<a id="schema_WarningMessage"></a>
<a id="tocSwarningmessage"></a>
<a id="tocswarningmessage"></a>

```json
"string"
```

<h2 id="tocS_WarningCode">WarningCode</h2>
<!-- backwards compatibility -->
<a id="schemawarningcode"></a>
<a id="schema_WarningCode"></a>
<a id="tocSwarningcode"></a>
<a id="tocswarningcode"></a>

```json
"QUERY_LANGUAGE_INVALID_SYNTAX"
```

<h2 id="tocS_Warning">Warning</h2>
<!-- backwards compatibility -->
<a id="schemawarning"></a>
<a id="schema_Warning"></a>
<a id="tocSwarning"></a>
<a id="tocswarning"></a>

```json
{
  "Message": {},
  "Code": {}
}
```

The warning code and message that explains a problem with a query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|false|none|none|
|Code|object|false|none|none|
