<h1 id="aws-comprehend-medical">AWS Comprehend Medical v2018-10-30</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

 Comprehend Medical; extracts structured information from unstructured clinical text. Use these actions to gain insight in your documents.

Base URLs:

* <a href="http://comprehendmedical.us-east-1.amazonaws.com">http://comprehendmedical.us-east-1.amazonaws.com</a> - The ComprehendMedical multi-region endpoint

* <a href="https://comprehendmedical.us-east-1.amazonaws.com">https://comprehendmedical.us-east-1.amazonaws.com</a> - The ComprehendMedical multi-region endpoint

* <a href="http://comprehendmedical.cn-north-1.amazonaws.com.cn">http://comprehendmedical.cn-north-1.amazonaws.com.cn</a> - The ComprehendMedical endpoint for China (Beijing) and China (Ningxia)

* <a href="https://comprehendmedical.cn-north-1.amazonaws.com.cn">https://comprehendmedical.cn-north-1.amazonaws.com.cn</a> - The ComprehendMedical endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/comprehendmedical/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-comprehend-medical-default">Default</h1>

## DescribeEntitiesDetectionV2Job

<a id="opIdDescribeEntitiesDetectionV2Job"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job`

Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describeentitiesdetectionv2job-parameters">Parameters</h3>

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
|body|body|[DescribeEntitiesDetectionV2JobRequest](#schemadescribeentitiesdetectionv2jobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job|

> Example responses

> 200 Response

```json
{
  "ComprehendMedicalAsyncJobProperties": {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "ExpirationTime": {},
    "InputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "OutputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "ManifestFilePath": {},
    "KMSKey": {},
    "ModelVersion": {}
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

<h3 id="describeentitiesdetectionv2job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEntitiesDetectionV2JobResponse](#schemadescribeentitiesdetectionv2jobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeICD10CMInferenceJob

<a id="opIdDescribeICD10CMInferenceJob"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.DescribeICD10CMInferenceJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob`

Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describeicd10cminferencejob-parameters">Parameters</h3>

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
|body|body|[DescribeICD10CMInferenceJobRequest](#schemadescribeicd10cminferencejobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.DescribeICD10CMInferenceJob|

> Example responses

> 200 Response

```json
{
  "ComprehendMedicalAsyncJobProperties": {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "ExpirationTime": {},
    "InputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "OutputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "ManifestFilePath": {},
    "KMSKey": {},
    "ModelVersion": {}
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

<h3 id="describeicd10cminferencejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeICD10CMInferenceJobResponse](#schemadescribeicd10cminferencejobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePHIDetectionJob

<a id="opIdDescribePHIDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.DescribePHIDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob`

Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describephidetectionjob-parameters">Parameters</h3>

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
|body|body|[DescribePHIDetectionJobRequest](#schemadescribephidetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.DescribePHIDetectionJob|

> Example responses

> 200 Response

```json
{
  "ComprehendMedicalAsyncJobProperties": {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "ExpirationTime": {},
    "InputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "OutputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "ManifestFilePath": {},
    "KMSKey": {},
    "ModelVersion": {}
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

<h3 id="describephidetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePHIDetectionJobResponse](#schemadescribephidetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRxNormInferenceJob

<a id="opIdDescribeRxNormInferenceJob"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.DescribeRxNormInferenceJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob`

Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describerxnorminferencejob-parameters">Parameters</h3>

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
|body|body|[DescribeRxNormInferenceJobRequest](#schemadescriberxnorminferencejobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.DescribeRxNormInferenceJob|

> Example responses

> 200 Response

```json
{
  "ComprehendMedicalAsyncJobProperties": {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "ExpirationTime": {},
    "InputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "OutputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "ManifestFilePath": {},
    "KMSKey": {},
    "ModelVersion": {}
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

<h3 id="describerxnorminferencejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRxNormInferenceJobResponse](#schemadescriberxnorminferencejobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSNOMEDCTInferenceJob

<a id="opIdDescribeSNOMEDCTInferenceJob"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob`

 Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job. 

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describesnomedctinferencejob-parameters">Parameters</h3>

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
|body|body|[DescribeSNOMEDCTInferenceJobRequest](#schemadescribesnomedctinferencejobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob|

> Example responses

> 200 Response

```json
{
  "ComprehendMedicalAsyncJobProperties": {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "ExpirationTime": {},
    "InputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "OutputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "ManifestFilePath": {},
    "KMSKey": {},
    "ModelVersion": {}
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

<h3 id="describesnomedctinferencejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSNOMEDCTInferenceJobResponse](#schemadescribesnomedctinferencejobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetectEntities

<a id="opIdDetectEntities"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.DetectEntities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.DetectEntities' \
  -d '{
    "Text": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.DetectEntities`

<aside class="warning">
This operation is deprecated
</aside>

<p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p>

> Body parameter

```json
{
  "Text": {}
}
```

<h3 id="detectentities-parameters">Parameters</h3>

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
|body|body|[DetectEntitiesRequest](#schemadetectentitiesrequest)|true|none|
|» Text|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.DetectEntities|

> Example responses

> 200 Response

```json
{
  "Entities": {},
  "UnmappedAttributes": {},
  "PaginationToken": {},
  "ModelVersion": {}
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

<h3 id="detectentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectEntitiesResponse](#schemadetectentitiesresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidEncodingException|[InvalidEncodingException](#schemainvalidencodingexception)|
|485|485|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetectEntitiesV2

<a id="opIdDetectEntitiesV2"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.DetectEntitiesV2' \
  -d '{
    "Text": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2`

<p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>

> Body parameter

```json
{
  "Text": {}
}
```

<h3 id="detectentitiesv2-parameters">Parameters</h3>

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
|body|body|[DetectEntitiesV2Request](#schemadetectentitiesv2request)|true|none|
|» Text|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.DetectEntitiesV2|

> Example responses

> 200 Response

```json
{
  "Entities": {},
  "UnmappedAttributes": {},
  "PaginationToken": {},
  "ModelVersion": {}
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

<h3 id="detectentitiesv2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectEntitiesV2Response](#schemadetectentitiesv2response)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidEncodingException|[InvalidEncodingException](#schemainvalidencodingexception)|
|485|485|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetectPHI

<a id="opIdDetectPHI"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.DetectPHI' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.DetectPHI' \
  -d '{
    "Text": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.DetectPHI`

 Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.

> Body parameter

```json
{
  "Text": {}
}
```

<h3 id="detectphi-parameters">Parameters</h3>

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
|body|body|[DetectPHIRequest](#schemadetectphirequest)|true|none|
|» Text|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.DetectPHI|

> Example responses

> 200 Response

```json
{
  "Entities": {},
  "PaginationToken": {},
  "ModelVersion": {}
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

<h3 id="detectphi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectPHIResponse](#schemadetectphiresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidEncodingException|[InvalidEncodingException](#schemainvalidencodingexception)|
|485|485|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InferICD10CM

<a id="opIdInferICD10CM"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.InferICD10CM' \
  -d '{
    "Text": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM`

InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts. 

> Body parameter

```json
{
  "Text": {}
}
```

<h3 id="infericd10cm-parameters">Parameters</h3>

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
|body|body|[InferICD10CMRequest](#schemainfericd10cmrequest)|true|none|
|» Text|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.InferICD10CM|

> Example responses

> 200 Response

```json
{
  "Entities": {},
  "PaginationToken": {},
  "ModelVersion": {}
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

<h3 id="infericd10cm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InferICD10CMResponse](#schemainfericd10cmresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidEncodingException|[InvalidEncodingException](#schemainvalidencodingexception)|
|485|485|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InferRxNorm

<a id="opIdInferRxNorm"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.InferRxNorm' \
  -d '{
    "Text": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm`

InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts. 

> Body parameter

```json
{
  "Text": {}
}
```

<h3 id="inferrxnorm-parameters">Parameters</h3>

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
|body|body|[InferRxNormRequest](#schemainferrxnormrequest)|true|none|
|» Text|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.InferRxNorm|

> Example responses

> 200 Response

```json
{
  "Entities": {},
  "PaginationToken": {},
  "ModelVersion": {}
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

<h3 id="inferrxnorm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InferRxNormResponse](#schemainferrxnormresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidEncodingException|[InvalidEncodingException](#schemainvalidencodingexception)|
|485|485|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InferSNOMEDCT

<a id="opIdInferSNOMEDCT"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.InferSNOMEDCT' \
  -d '{
    "Text": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT`

 InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology

> Body parameter

```json
{
  "Text": {}
}
```

<h3 id="infersnomedct-parameters">Parameters</h3>

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
|body|body|[InferSNOMEDCTRequest](#schemainfersnomedctrequest)|true|none|
|» Text|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.InferSNOMEDCT|

> Example responses

> 200 Response

```json
{
  "Entities": {},
  "PaginationToken": {},
  "ModelVersion": {},
  "SNOMEDCTDetails": {
    "Edition": {},
    "Language": {},
    "VersionDate": {}
  },
  "Characters": {
    "OriginalTextCharacters": {}
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

<h3 id="infersnomedct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InferSNOMEDCTResponse](#schemainfersnomedctresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidEncodingException|[InvalidEncodingException](#schemainvalidencodingexception)|
|485|485|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEntitiesDetectionV2Jobs

<a id="opIdListEntitiesDetectionV2Jobs"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs' \
  -d '{
    "Filter": {
      "JobName": {},
      "JobStatus": {},
      "SubmitTimeBefore": {},
      "SubmitTimeAfter": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs`

Gets a list of medical entity detection jobs that you have submitted.

> Body parameter

```json
{
  "Filter": {
    "JobName": {},
    "JobStatus": {},
    "SubmitTimeBefore": {},
    "SubmitTimeAfter": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listentitiesdetectionv2jobs-parameters">Parameters</h3>

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
|body|body|[ListEntitiesDetectionV2JobsRequest](#schemalistentitiesdetectionv2jobsrequest)|true|none|
|» Filter|body|object|false|none|
|» » JobName|body|object|false|none|
|» » JobStatus|body|object|false|none|
|» » SubmitTimeBefore|body|object|false|none|
|» » SubmitTimeAfter|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs|

> Example responses

> 200 Response

```json
{
  "ComprehendMedicalAsyncJobPropertiesList": {},
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

<h3 id="listentitiesdetectionv2jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEntitiesDetectionV2JobsResponse](#schemalistentitiesdetectionv2jobsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListICD10CMInferenceJobs

<a id="opIdListICD10CMInferenceJobs"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.ListICD10CMInferenceJobs' \
  -d '{
    "Filter": {
      "JobName": {},
      "JobStatus": {},
      "SubmitTimeBefore": {},
      "SubmitTimeAfter": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs`

Gets a list of InferICD10CM jobs that you have submitted.

> Body parameter

```json
{
  "Filter": {
    "JobName": {},
    "JobStatus": {},
    "SubmitTimeBefore": {},
    "SubmitTimeAfter": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listicd10cminferencejobs-parameters">Parameters</h3>

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
|body|body|[ListICD10CMInferenceJobsRequest](#schemalisticd10cminferencejobsrequest)|true|none|
|» Filter|body|object|false|none|
|» » JobName|body|object|false|none|
|» » JobStatus|body|object|false|none|
|» » SubmitTimeBefore|body|object|false|none|
|» » SubmitTimeAfter|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.ListICD10CMInferenceJobs|

> Example responses

> 200 Response

```json
{
  "ComprehendMedicalAsyncJobPropertiesList": {},
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

<h3 id="listicd10cminferencejobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListICD10CMInferenceJobsResponse](#schemalisticd10cminferencejobsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPHIDetectionJobs

<a id="opIdListPHIDetectionJobs"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.ListPHIDetectionJobs' \
  -d '{
    "Filter": {
      "JobName": {},
      "JobStatus": {},
      "SubmitTimeBefore": {},
      "SubmitTimeAfter": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs`

Gets a list of protected health information (PHI) detection jobs that you have submitted.

> Body parameter

```json
{
  "Filter": {
    "JobName": {},
    "JobStatus": {},
    "SubmitTimeBefore": {},
    "SubmitTimeAfter": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listphidetectionjobs-parameters">Parameters</h3>

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
|body|body|[ListPHIDetectionJobsRequest](#schemalistphidetectionjobsrequest)|true|none|
|» Filter|body|object|false|none|
|» » JobName|body|object|false|none|
|» » JobStatus|body|object|false|none|
|» » SubmitTimeBefore|body|object|false|none|
|» » SubmitTimeAfter|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.ListPHIDetectionJobs|

> Example responses

> 200 Response

```json
{
  "ComprehendMedicalAsyncJobPropertiesList": {},
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

<h3 id="listphidetectionjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPHIDetectionJobsResponse](#schemalistphidetectionjobsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRxNormInferenceJobs

<a id="opIdListRxNormInferenceJobs"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.ListRxNormInferenceJobs' \
  -d '{
    "Filter": {
      "JobName": {},
      "JobStatus": {},
      "SubmitTimeBefore": {},
      "SubmitTimeAfter": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs`

Gets a list of InferRxNorm jobs that you have submitted.

> Body parameter

```json
{
  "Filter": {
    "JobName": {},
    "JobStatus": {},
    "SubmitTimeBefore": {},
    "SubmitTimeAfter": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listrxnorminferencejobs-parameters">Parameters</h3>

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
|body|body|[ListRxNormInferenceJobsRequest](#schemalistrxnorminferencejobsrequest)|true|none|
|» Filter|body|object|false|none|
|» » JobName|body|object|false|none|
|» » JobStatus|body|object|false|none|
|» » SubmitTimeBefore|body|object|false|none|
|» » SubmitTimeAfter|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.ListRxNormInferenceJobs|

> Example responses

> 200 Response

```json
{
  "ComprehendMedicalAsyncJobPropertiesList": {},
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

<h3 id="listrxnorminferencejobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRxNormInferenceJobsResponse](#schemalistrxnorminferencejobsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSNOMEDCTInferenceJobs

<a id="opIdListSNOMEDCTInferenceJobs"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs' \
  -d '{
    "Filter": {
      "JobName": {},
      "JobStatus": {},
      "SubmitTimeBefore": {},
      "SubmitTimeAfter": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs`

 Gets a list of InferSNOMEDCT jobs a user has submitted. 

> Body parameter

```json
{
  "Filter": {
    "JobName": {},
    "JobStatus": {},
    "SubmitTimeBefore": {},
    "SubmitTimeAfter": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listsnomedctinferencejobs-parameters">Parameters</h3>

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
|body|body|[ListSNOMEDCTInferenceJobsRequest](#schemalistsnomedctinferencejobsrequest)|true|none|
|» Filter|body|[ComprehendMedicalAsyncJobFilter](#schemacomprehendmedicalasyncjobfilter)|false|Provides information for filtering a list of detection jobs.|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs|

> Example responses

> 200 Response

```json
{
  "ComprehendMedicalAsyncJobPropertiesList": {},
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

<h3 id="listsnomedctinferencejobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSNOMEDCTInferenceJobsResponse](#schemalistsnomedctinferencejobsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartEntitiesDetectionV2Job

<a id="opIdStartEntitiesDetectionV2Job"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.StartEntitiesDetectionV2Job' \
  -d '{
    "InputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "OutputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "DataAccessRoleArn": {},
    "JobName": {},
    "ClientRequestToken": {},
    "KMSKey": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job`

Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.

> Body parameter

```json
{
  "InputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "OutputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "ClientRequestToken": {},
  "KMSKey": {},
  "LanguageCode": {}
}
```

<h3 id="startentitiesdetectionv2job-parameters">Parameters</h3>

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
|body|body|[StartEntitiesDetectionV2JobRequest](#schemastartentitiesdetectionv2jobrequest)|true|none|
|» InputDataConfig|body|object|true|none|
|» » S3Bucket|body|object|true|none|
|» » S3Key|body|object|false|none|
|» OutputDataConfig|body|object|true|none|
|» » S3Bucket|body|object|true|none|
|» » S3Key|body|object|false|none|
|» DataAccessRoleArn|body|object|true|none|
|» JobName|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» KMSKey|body|object|false|none|
|» LanguageCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.StartEntitiesDetectionV2Job|

> Example responses

> 200 Response

```json
{
  "JobId": {}
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

<h3 id="startentitiesdetectionv2job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartEntitiesDetectionV2JobResponse](#schemastartentitiesdetectionv2jobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartICD10CMInferenceJob

<a id="opIdStartICD10CMInferenceJob"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.StartICD10CMInferenceJob' \
  -d '{
    "InputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "OutputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "DataAccessRoleArn": {},
    "JobName": {},
    "ClientRequestToken": {},
    "KMSKey": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob`

Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.

> Body parameter

```json
{
  "InputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "OutputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "ClientRequestToken": {},
  "KMSKey": {},
  "LanguageCode": {}
}
```

<h3 id="starticd10cminferencejob-parameters">Parameters</h3>

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
|body|body|[StartICD10CMInferenceJobRequest](#schemastarticd10cminferencejobrequest)|true|none|
|» InputDataConfig|body|object|true|none|
|» » S3Bucket|body|object|true|none|
|» » S3Key|body|object|false|none|
|» OutputDataConfig|body|object|true|none|
|» » S3Bucket|body|object|true|none|
|» » S3Key|body|object|false|none|
|» DataAccessRoleArn|body|object|true|none|
|» JobName|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» KMSKey|body|object|false|none|
|» LanguageCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.StartICD10CMInferenceJob|

> Example responses

> 200 Response

```json
{
  "JobId": {}
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

<h3 id="starticd10cminferencejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartICD10CMInferenceJobResponse](#schemastarticd10cminferencejobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartPHIDetectionJob

<a id="opIdStartPHIDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.StartPHIDetectionJob' \
  -d '{
    "InputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "OutputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "DataAccessRoleArn": {},
    "JobName": {},
    "ClientRequestToken": {},
    "KMSKey": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob`

Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.

> Body parameter

```json
{
  "InputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "OutputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "ClientRequestToken": {},
  "KMSKey": {},
  "LanguageCode": {}
}
```

<h3 id="startphidetectionjob-parameters">Parameters</h3>

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
|body|body|[StartPHIDetectionJobRequest](#schemastartphidetectionjobrequest)|true|none|
|» InputDataConfig|body|object|true|none|
|» » S3Bucket|body|object|true|none|
|» » S3Key|body|object|false|none|
|» OutputDataConfig|body|object|true|none|
|» » S3Bucket|body|object|true|none|
|» » S3Key|body|object|false|none|
|» DataAccessRoleArn|body|object|true|none|
|» JobName|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» KMSKey|body|object|false|none|
|» LanguageCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.StartPHIDetectionJob|

> Example responses

> 200 Response

```json
{
  "JobId": {}
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

<h3 id="startphidetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartPHIDetectionJobResponse](#schemastartphidetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartRxNormInferenceJob

<a id="opIdStartRxNormInferenceJob"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.StartRxNormInferenceJob' \
  -d '{
    "InputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "OutputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "DataAccessRoleArn": {},
    "JobName": {},
    "ClientRequestToken": {},
    "KMSKey": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob`

Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.

> Body parameter

```json
{
  "InputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "OutputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "ClientRequestToken": {},
  "KMSKey": {},
  "LanguageCode": {}
}
```

<h3 id="startrxnorminferencejob-parameters">Parameters</h3>

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
|body|body|[StartRxNormInferenceJobRequest](#schemastartrxnorminferencejobrequest)|true|none|
|» InputDataConfig|body|object|true|none|
|» » S3Bucket|body|object|true|none|
|» » S3Key|body|object|false|none|
|» OutputDataConfig|body|object|true|none|
|» » S3Bucket|body|object|true|none|
|» » S3Key|body|object|false|none|
|» DataAccessRoleArn|body|object|true|none|
|» JobName|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» KMSKey|body|object|false|none|
|» LanguageCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.StartRxNormInferenceJob|

> Example responses

> 200 Response

```json
{
  "JobId": {}
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

<h3 id="startrxnorminferencejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartRxNormInferenceJobResponse](#schemastartrxnorminferencejobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSNOMEDCTInferenceJob

<a id="opIdStartSNOMEDCTInferenceJob"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.StartSNOMEDCTInferenceJob' \
  -d '{
    "InputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "OutputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "DataAccessRoleArn": {},
    "JobName": {},
    "ClientRequestToken": {},
    "KMSKey": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob`

 Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job. 

> Body parameter

```json
{
  "InputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "OutputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "ClientRequestToken": {},
  "KMSKey": {},
  "LanguageCode": {}
}
```

<h3 id="startsnomedctinferencejob-parameters">Parameters</h3>

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
|body|body|[StartSNOMEDCTInferenceJobRequest](#schemastartsnomedctinferencejobrequest)|true|none|
|» InputDataConfig|body|[InputDataConfig](#schemainputdataconfig)|true|The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. |
|» OutputDataConfig|body|[OutputDataConfig](#schemaoutputdataconfig)|true|The output properties for a detection job.|
|» DataAccessRoleArn|body|object|true|none|
|» JobName|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» KMSKey|body|object|false|none|
|» LanguageCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.StartSNOMEDCTInferenceJob|

> Example responses

> 200 Response

```json
{
  "JobId": {}
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

<h3 id="startsnomedctinferencejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartSNOMEDCTInferenceJobResponse](#schemastartsnomedctinferencejobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopEntitiesDetectionV2Job

<a id="opIdStopEntitiesDetectionV2Job"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.StopEntitiesDetectionV2Job' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job`

Stops a medical entities detection job in progress.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="stopentitiesdetectionv2job-parameters">Parameters</h3>

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
|body|body|[StopEntitiesDetectionV2JobRequest](#schemastopentitiesdetectionv2jobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.StopEntitiesDetectionV2Job|

> Example responses

> 200 Response

```json
{
  "JobId": {}
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

<h3 id="stopentitiesdetectionv2job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopEntitiesDetectionV2JobResponse](#schemastopentitiesdetectionv2jobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopICD10CMInferenceJob

<a id="opIdStopICD10CMInferenceJob"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.StopICD10CMInferenceJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob`

Stops an InferICD10CM inference job in progress.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="stopicd10cminferencejob-parameters">Parameters</h3>

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
|body|body|[StopICD10CMInferenceJobRequest](#schemastopicd10cminferencejobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.StopICD10CMInferenceJob|

> Example responses

> 200 Response

```json
{
  "JobId": {}
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

<h3 id="stopicd10cminferencejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopICD10CMInferenceJobResponse](#schemastopicd10cminferencejobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopPHIDetectionJob

<a id="opIdStopPHIDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.StopPHIDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob`

Stops a protected health information (PHI) detection job in progress.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="stopphidetectionjob-parameters">Parameters</h3>

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
|body|body|[StopPHIDetectionJobRequest](#schemastopphidetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.StopPHIDetectionJob|

> Example responses

> 200 Response

```json
{
  "JobId": {}
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

<h3 id="stopphidetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopPHIDetectionJobResponse](#schemastopphidetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopRxNormInferenceJob

<a id="opIdStopRxNormInferenceJob"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.StopRxNormInferenceJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob`

Stops an InferRxNorm inference job in progress.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="stoprxnorminferencejob-parameters">Parameters</h3>

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
|body|body|[StopRxNormInferenceJobRequest](#schemastoprxnorminferencejobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.StopRxNormInferenceJob|

> Example responses

> 200 Response

```json
{
  "JobId": {}
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

<h3 id="stoprxnorminferencejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopRxNormInferenceJobResponse](#schemastoprxnorminferencejobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopSNOMEDCTInferenceJob

<a id="opIdStopSNOMEDCTInferenceJob"></a>

> Code samples

```bash
curl 'https://comprehendmedical.us-east-1.amazonaws.com/#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ComprehendMedical_20181030.StopSNOMEDCTInferenceJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob`

 Stops an InferSNOMEDCT inference job in progress. 

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="stopsnomedctinferencejob-parameters">Parameters</h3>

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
|body|body|[StopSNOMEDCTInferenceJobRequest](#schemastopsnomedctinferencejobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ComprehendMedical_20181030.StopSNOMEDCTInferenceJob|

> Example responses

> 200 Response

```json
{
  "JobId": {}
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

<h3 id="stopsnomedctinferencejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopSNOMEDCTInferenceJobResponse](#schemastopsnomedctinferencejobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DescribeEntitiesDetectionV2JobResponse">DescribeEntitiesDetectionV2JobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeentitiesdetectionv2jobresponse"></a>
<a id="schema_DescribeEntitiesDetectionV2JobResponse"></a>
<a id="tocSdescribeentitiesdetectionv2jobresponse"></a>
<a id="tocsdescribeentitiesdetectionv2jobresponse"></a>

```json
{
  "ComprehendMedicalAsyncJobProperties": {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "ExpirationTime": {},
    "InputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "OutputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "ManifestFilePath": {},
    "KMSKey": {},
    "ModelVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComprehendMedicalAsyncJobProperties|object|false|none|none|

<h2 id="tocS_DescribeEntitiesDetectionV2JobRequest">DescribeEntitiesDetectionV2JobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeentitiesdetectionv2jobrequest"></a>
<a id="schema_DescribeEntitiesDetectionV2JobRequest"></a>
<a id="tocSdescribeentitiesdetectionv2jobrequest"></a>
<a id="tocsdescribeentitiesdetectionv2jobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

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

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_DescribeICD10CMInferenceJobResponse">DescribeICD10CMInferenceJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeicd10cminferencejobresponse"></a>
<a id="schema_DescribeICD10CMInferenceJobResponse"></a>
<a id="tocSdescribeicd10cminferencejobresponse"></a>
<a id="tocsdescribeicd10cminferencejobresponse"></a>

```json
{
  "ComprehendMedicalAsyncJobProperties": {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "ExpirationTime": {},
    "InputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "OutputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "ManifestFilePath": {},
    "KMSKey": {},
    "ModelVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComprehendMedicalAsyncJobProperties|object|false|none|none|

<h2 id="tocS_DescribeICD10CMInferenceJobRequest">DescribeICD10CMInferenceJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeicd10cminferencejobrequest"></a>
<a id="schema_DescribeICD10CMInferenceJobRequest"></a>
<a id="tocSdescribeicd10cminferencejobrequest"></a>
<a id="tocsdescribeicd10cminferencejobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_DescribePHIDetectionJobResponse">DescribePHIDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribephidetectionjobresponse"></a>
<a id="schema_DescribePHIDetectionJobResponse"></a>
<a id="tocSdescribephidetectionjobresponse"></a>
<a id="tocsdescribephidetectionjobresponse"></a>

```json
{
  "ComprehendMedicalAsyncJobProperties": {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "ExpirationTime": {},
    "InputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "OutputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "ManifestFilePath": {},
    "KMSKey": {},
    "ModelVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComprehendMedicalAsyncJobProperties|object|false|none|none|

<h2 id="tocS_DescribePHIDetectionJobRequest">DescribePHIDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribephidetectionjobrequest"></a>
<a id="schema_DescribePHIDetectionJobRequest"></a>
<a id="tocSdescribephidetectionjobrequest"></a>
<a id="tocsdescribephidetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_DescribeRxNormInferenceJobResponse">DescribeRxNormInferenceJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberxnorminferencejobresponse"></a>
<a id="schema_DescribeRxNormInferenceJobResponse"></a>
<a id="tocSdescriberxnorminferencejobresponse"></a>
<a id="tocsdescriberxnorminferencejobresponse"></a>

```json
{
  "ComprehendMedicalAsyncJobProperties": {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "ExpirationTime": {},
    "InputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "OutputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "ManifestFilePath": {},
    "KMSKey": {},
    "ModelVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComprehendMedicalAsyncJobProperties|object|false|none|none|

<h2 id="tocS_DescribeRxNormInferenceJobRequest">DescribeRxNormInferenceJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberxnorminferencejobrequest"></a>
<a id="schema_DescribeRxNormInferenceJobRequest"></a>
<a id="tocSdescriberxnorminferencejobrequest"></a>
<a id="tocsdescriberxnorminferencejobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_DescribeSNOMEDCTInferenceJobResponse">DescribeSNOMEDCTInferenceJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesnomedctinferencejobresponse"></a>
<a id="schema_DescribeSNOMEDCTInferenceJobResponse"></a>
<a id="tocSdescribesnomedctinferencejobresponse"></a>
<a id="tocsdescribesnomedctinferencejobresponse"></a>

```json
{
  "ComprehendMedicalAsyncJobProperties": {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "ExpirationTime": {},
    "InputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "OutputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "ManifestFilePath": {},
    "KMSKey": {},
    "ModelVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComprehendMedicalAsyncJobProperties|[ComprehendMedicalAsyncJobProperties](#schemacomprehendmedicalasyncjobproperties)|false|none|Provides information about a detection job.|

<h2 id="tocS_DescribeSNOMEDCTInferenceJobRequest">DescribeSNOMEDCTInferenceJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesnomedctinferencejobrequest"></a>
<a id="schema_DescribeSNOMEDCTInferenceJobRequest"></a>
<a id="tocSdescribesnomedctinferencejobrequest"></a>
<a id="tocsdescribesnomedctinferencejobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_DetectEntitiesResponse">DetectEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetectentitiesresponse"></a>
<a id="schema_DetectEntitiesResponse"></a>
<a id="tocSdetectentitiesresponse"></a>
<a id="tocsdetectentitiesresponse"></a>

```json
{
  "Entities": {},
  "UnmappedAttributes": {},
  "PaginationToken": {},
  "ModelVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|object|true|none|none|
|UnmappedAttributes|object|false|none|none|
|PaginationToken|object|false|none|none|
|ModelVersion|object|true|none|none|

<h2 id="tocS_DetectEntitiesRequest">DetectEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetectentitiesrequest"></a>
<a id="schema_DetectEntitiesRequest"></a>
<a id="tocSdetectentitiesrequest"></a>
<a id="tocsdetectentitiesrequest"></a>

```json
{
  "Text": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|true|none|none|

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

```json
null
```

<h2 id="tocS_InvalidEncodingException">InvalidEncodingException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidencodingexception"></a>
<a id="schema_InvalidEncodingException"></a>
<a id="tocSinvalidencodingexception"></a>
<a id="tocsinvalidencodingexception"></a>

```json
null
```

<h2 id="tocS_TextSizeLimitExceededException">TextSizeLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schematextsizelimitexceededexception"></a>
<a id="schema_TextSizeLimitExceededException"></a>
<a id="tocStextsizelimitexceededexception"></a>
<a id="tocstextsizelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_DetectEntitiesV2Response">DetectEntitiesV2Response</h2>
<!-- backwards compatibility -->
<a id="schemadetectentitiesv2response"></a>
<a id="schema_DetectEntitiesV2Response"></a>
<a id="tocSdetectentitiesv2response"></a>
<a id="tocsdetectentitiesv2response"></a>

```json
{
  "Entities": {},
  "UnmappedAttributes": {},
  "PaginationToken": {},
  "ModelVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|object|true|none|none|
|UnmappedAttributes|object|false|none|none|
|PaginationToken|object|false|none|none|
|ModelVersion|object|true|none|none|

<h2 id="tocS_DetectEntitiesV2Request">DetectEntitiesV2Request</h2>
<!-- backwards compatibility -->
<a id="schemadetectentitiesv2request"></a>
<a id="schema_DetectEntitiesV2Request"></a>
<a id="tocSdetectentitiesv2request"></a>
<a id="tocsdetectentitiesv2request"></a>

```json
{
  "Text": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|true|none|none|

<h2 id="tocS_DetectPHIResponse">DetectPHIResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetectphiresponse"></a>
<a id="schema_DetectPHIResponse"></a>
<a id="tocSdetectphiresponse"></a>
<a id="tocsdetectphiresponse"></a>

```json
{
  "Entities": {},
  "PaginationToken": {},
  "ModelVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|object|true|none|none|
|PaginationToken|object|false|none|none|
|ModelVersion|object|true|none|none|

<h2 id="tocS_DetectPHIRequest">DetectPHIRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetectphirequest"></a>
<a id="schema_DetectPHIRequest"></a>
<a id="tocSdetectphirequest"></a>
<a id="tocsdetectphirequest"></a>

```json
{
  "Text": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|true|none|none|

<h2 id="tocS_InferICD10CMResponse">InferICD10CMResponse</h2>
<!-- backwards compatibility -->
<a id="schemainfericd10cmresponse"></a>
<a id="schema_InferICD10CMResponse"></a>
<a id="tocSinfericd10cmresponse"></a>
<a id="tocsinfericd10cmresponse"></a>

```json
{
  "Entities": {},
  "PaginationToken": {},
  "ModelVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|object|true|none|none|
|PaginationToken|object|false|none|none|
|ModelVersion|object|false|none|none|

<h2 id="tocS_InferICD10CMRequest">InferICD10CMRequest</h2>
<!-- backwards compatibility -->
<a id="schemainfericd10cmrequest"></a>
<a id="schema_InferICD10CMRequest"></a>
<a id="tocSinfericd10cmrequest"></a>
<a id="tocsinfericd10cmrequest"></a>

```json
{
  "Text": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|true|none|none|

<h2 id="tocS_InferRxNormResponse">InferRxNormResponse</h2>
<!-- backwards compatibility -->
<a id="schemainferrxnormresponse"></a>
<a id="schema_InferRxNormResponse"></a>
<a id="tocSinferrxnormresponse"></a>
<a id="tocsinferrxnormresponse"></a>

```json
{
  "Entities": {},
  "PaginationToken": {},
  "ModelVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|object|true|none|none|
|PaginationToken|object|false|none|none|
|ModelVersion|object|false|none|none|

<h2 id="tocS_InferRxNormRequest">InferRxNormRequest</h2>
<!-- backwards compatibility -->
<a id="schemainferrxnormrequest"></a>
<a id="schema_InferRxNormRequest"></a>
<a id="tocSinferrxnormrequest"></a>
<a id="tocsinferrxnormrequest"></a>

```json
{
  "Text": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|true|none|none|

<h2 id="tocS_InferSNOMEDCTResponse">InferSNOMEDCTResponse</h2>
<!-- backwards compatibility -->
<a id="schemainfersnomedctresponse"></a>
<a id="schema_InferSNOMEDCTResponse"></a>
<a id="tocSinfersnomedctresponse"></a>
<a id="tocsinfersnomedctresponse"></a>

```json
{
  "Entities": {},
  "PaginationToken": {},
  "ModelVersion": {},
  "SNOMEDCTDetails": {
    "Edition": {},
    "Language": {},
    "VersionDate": {}
  },
  "Characters": {
    "OriginalTextCharacters": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|object|true|none|none|
|PaginationToken|object|false|none|none|
|ModelVersion|object|false|none|none|
|SNOMEDCTDetails|object|false|none|none|
|Characters|object|false|none|none|

<h2 id="tocS_InferSNOMEDCTRequest">InferSNOMEDCTRequest</h2>
<!-- backwards compatibility -->
<a id="schemainfersnomedctrequest"></a>
<a id="schema_InferSNOMEDCTRequest"></a>
<a id="tocSinfersnomedctrequest"></a>
<a id="tocsinfersnomedctrequest"></a>

```json
{
  "Text": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|true|none|none|

<h2 id="tocS_ListEntitiesDetectionV2JobsResponse">ListEntitiesDetectionV2JobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistentitiesdetectionv2jobsresponse"></a>
<a id="schema_ListEntitiesDetectionV2JobsResponse"></a>
<a id="tocSlistentitiesdetectionv2jobsresponse"></a>
<a id="tocslistentitiesdetectionv2jobsresponse"></a>

```json
{
  "ComprehendMedicalAsyncJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComprehendMedicalAsyncJobPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEntitiesDetectionV2JobsRequest">ListEntitiesDetectionV2JobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistentitiesdetectionv2jobsrequest"></a>
<a id="schema_ListEntitiesDetectionV2JobsRequest"></a>
<a id="tocSlistentitiesdetectionv2jobsrequest"></a>
<a id="tocslistentitiesdetectionv2jobsrequest"></a>

```json
{
  "Filter": {
    "JobName": {},
    "JobStatus": {},
    "SubmitTimeBefore": {},
    "SubmitTimeAfter": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filter|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_ListICD10CMInferenceJobsResponse">ListICD10CMInferenceJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisticd10cminferencejobsresponse"></a>
<a id="schema_ListICD10CMInferenceJobsResponse"></a>
<a id="tocSlisticd10cminferencejobsresponse"></a>
<a id="tocslisticd10cminferencejobsresponse"></a>

```json
{
  "ComprehendMedicalAsyncJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComprehendMedicalAsyncJobPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListICD10CMInferenceJobsRequest">ListICD10CMInferenceJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisticd10cminferencejobsrequest"></a>
<a id="schema_ListICD10CMInferenceJobsRequest"></a>
<a id="tocSlisticd10cminferencejobsrequest"></a>
<a id="tocslisticd10cminferencejobsrequest"></a>

```json
{
  "Filter": {
    "JobName": {},
    "JobStatus": {},
    "SubmitTimeBefore": {},
    "SubmitTimeAfter": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filter|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListPHIDetectionJobsResponse">ListPHIDetectionJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistphidetectionjobsresponse"></a>
<a id="schema_ListPHIDetectionJobsResponse"></a>
<a id="tocSlistphidetectionjobsresponse"></a>
<a id="tocslistphidetectionjobsresponse"></a>

```json
{
  "ComprehendMedicalAsyncJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComprehendMedicalAsyncJobPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPHIDetectionJobsRequest">ListPHIDetectionJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistphidetectionjobsrequest"></a>
<a id="schema_ListPHIDetectionJobsRequest"></a>
<a id="tocSlistphidetectionjobsrequest"></a>
<a id="tocslistphidetectionjobsrequest"></a>

```json
{
  "Filter": {
    "JobName": {},
    "JobStatus": {},
    "SubmitTimeBefore": {},
    "SubmitTimeAfter": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filter|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListRxNormInferenceJobsResponse">ListRxNormInferenceJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrxnorminferencejobsresponse"></a>
<a id="schema_ListRxNormInferenceJobsResponse"></a>
<a id="tocSlistrxnorminferencejobsresponse"></a>
<a id="tocslistrxnorminferencejobsresponse"></a>

```json
{
  "ComprehendMedicalAsyncJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComprehendMedicalAsyncJobPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRxNormInferenceJobsRequest">ListRxNormInferenceJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrxnorminferencejobsrequest"></a>
<a id="schema_ListRxNormInferenceJobsRequest"></a>
<a id="tocSlistrxnorminferencejobsrequest"></a>
<a id="tocslistrxnorminferencejobsrequest"></a>

```json
{
  "Filter": {
    "JobName": {},
    "JobStatus": {},
    "SubmitTimeBefore": {},
    "SubmitTimeAfter": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filter|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListSNOMEDCTInferenceJobsResponse">ListSNOMEDCTInferenceJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsnomedctinferencejobsresponse"></a>
<a id="schema_ListSNOMEDCTInferenceJobsResponse"></a>
<a id="tocSlistsnomedctinferencejobsresponse"></a>
<a id="tocslistsnomedctinferencejobsresponse"></a>

```json
{
  "ComprehendMedicalAsyncJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComprehendMedicalAsyncJobPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSNOMEDCTInferenceJobsRequest">ListSNOMEDCTInferenceJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsnomedctinferencejobsrequest"></a>
<a id="schema_ListSNOMEDCTInferenceJobsRequest"></a>
<a id="tocSlistsnomedctinferencejobsrequest"></a>
<a id="tocslistsnomedctinferencejobsrequest"></a>

```json
{
  "Filter": {
    "JobName": {},
    "JobStatus": {},
    "SubmitTimeBefore": {},
    "SubmitTimeAfter": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filter|[ComprehendMedicalAsyncJobFilter](#schemacomprehendmedicalasyncjobfilter)|false|none|Provides information for filtering a list of detection jobs.|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_StartEntitiesDetectionV2JobResponse">StartEntitiesDetectionV2JobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartentitiesdetectionv2jobresponse"></a>
<a id="schema_StartEntitiesDetectionV2JobResponse"></a>
<a id="tocSstartentitiesdetectionv2jobresponse"></a>
<a id="tocsstartentitiesdetectionv2jobresponse"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_StartEntitiesDetectionV2JobRequest">StartEntitiesDetectionV2JobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartentitiesdetectionv2jobrequest"></a>
<a id="schema_StartEntitiesDetectionV2JobRequest"></a>
<a id="tocSstartentitiesdetectionv2jobrequest"></a>
<a id="tocsstartentitiesdetectionv2jobrequest"></a>

```json
{
  "InputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "OutputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "ClientRequestToken": {},
  "KMSKey": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputDataConfig|object|true|none|none|
|OutputDataConfig|object|true|none|none|
|DataAccessRoleArn|object|true|none|none|
|JobName|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|KMSKey|object|false|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_StartICD10CMInferenceJobResponse">StartICD10CMInferenceJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastarticd10cminferencejobresponse"></a>
<a id="schema_StartICD10CMInferenceJobResponse"></a>
<a id="tocSstarticd10cminferencejobresponse"></a>
<a id="tocsstarticd10cminferencejobresponse"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_StartICD10CMInferenceJobRequest">StartICD10CMInferenceJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastarticd10cminferencejobrequest"></a>
<a id="schema_StartICD10CMInferenceJobRequest"></a>
<a id="tocSstarticd10cminferencejobrequest"></a>
<a id="tocsstarticd10cminferencejobrequest"></a>

```json
{
  "InputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "OutputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "ClientRequestToken": {},
  "KMSKey": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputDataConfig|object|true|none|none|
|OutputDataConfig|object|true|none|none|
|DataAccessRoleArn|object|true|none|none|
|JobName|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|KMSKey|object|false|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_StartPHIDetectionJobResponse">StartPHIDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartphidetectionjobresponse"></a>
<a id="schema_StartPHIDetectionJobResponse"></a>
<a id="tocSstartphidetectionjobresponse"></a>
<a id="tocsstartphidetectionjobresponse"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_StartPHIDetectionJobRequest">StartPHIDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartphidetectionjobrequest"></a>
<a id="schema_StartPHIDetectionJobRequest"></a>
<a id="tocSstartphidetectionjobrequest"></a>
<a id="tocsstartphidetectionjobrequest"></a>

```json
{
  "InputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "OutputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "ClientRequestToken": {},
  "KMSKey": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputDataConfig|object|true|none|none|
|OutputDataConfig|object|true|none|none|
|DataAccessRoleArn|object|true|none|none|
|JobName|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|KMSKey|object|false|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_StartRxNormInferenceJobResponse">StartRxNormInferenceJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartrxnorminferencejobresponse"></a>
<a id="schema_StartRxNormInferenceJobResponse"></a>
<a id="tocSstartrxnorminferencejobresponse"></a>
<a id="tocsstartrxnorminferencejobresponse"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_StartRxNormInferenceJobRequest">StartRxNormInferenceJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartrxnorminferencejobrequest"></a>
<a id="schema_StartRxNormInferenceJobRequest"></a>
<a id="tocSstartrxnorminferencejobrequest"></a>
<a id="tocsstartrxnorminferencejobrequest"></a>

```json
{
  "InputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "OutputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "ClientRequestToken": {},
  "KMSKey": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputDataConfig|object|true|none|none|
|OutputDataConfig|object|true|none|none|
|DataAccessRoleArn|object|true|none|none|
|JobName|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|KMSKey|object|false|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_StartSNOMEDCTInferenceJobResponse">StartSNOMEDCTInferenceJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartsnomedctinferencejobresponse"></a>
<a id="schema_StartSNOMEDCTInferenceJobResponse"></a>
<a id="tocSstartsnomedctinferencejobresponse"></a>
<a id="tocsstartsnomedctinferencejobresponse"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_StartSNOMEDCTInferenceJobRequest">StartSNOMEDCTInferenceJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartsnomedctinferencejobrequest"></a>
<a id="schema_StartSNOMEDCTInferenceJobRequest"></a>
<a id="tocSstartsnomedctinferencejobrequest"></a>
<a id="tocsstartsnomedctinferencejobrequest"></a>

```json
{
  "InputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "OutputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "ClientRequestToken": {},
  "KMSKey": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputDataConfig|[InputDataConfig](#schemainputdataconfig)|true|none|The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. |
|OutputDataConfig|[OutputDataConfig](#schemaoutputdataconfig)|true|none|The output properties for a detection job.|
|DataAccessRoleArn|object|true|none|none|
|JobName|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|KMSKey|object|false|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_StopEntitiesDetectionV2JobResponse">StopEntitiesDetectionV2JobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopentitiesdetectionv2jobresponse"></a>
<a id="schema_StopEntitiesDetectionV2JobResponse"></a>
<a id="tocSstopentitiesdetectionv2jobresponse"></a>
<a id="tocsstopentitiesdetectionv2jobresponse"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_StopEntitiesDetectionV2JobRequest">StopEntitiesDetectionV2JobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopentitiesdetectionv2jobrequest"></a>
<a id="schema_StopEntitiesDetectionV2JobRequest"></a>
<a id="tocSstopentitiesdetectionv2jobrequest"></a>
<a id="tocsstopentitiesdetectionv2jobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_StopICD10CMInferenceJobResponse">StopICD10CMInferenceJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopicd10cminferencejobresponse"></a>
<a id="schema_StopICD10CMInferenceJobResponse"></a>
<a id="tocSstopicd10cminferencejobresponse"></a>
<a id="tocsstopicd10cminferencejobresponse"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_StopICD10CMInferenceJobRequest">StopICD10CMInferenceJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopicd10cminferencejobrequest"></a>
<a id="schema_StopICD10CMInferenceJobRequest"></a>
<a id="tocSstopicd10cminferencejobrequest"></a>
<a id="tocsstopicd10cminferencejobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_StopPHIDetectionJobResponse">StopPHIDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopphidetectionjobresponse"></a>
<a id="schema_StopPHIDetectionJobResponse"></a>
<a id="tocSstopphidetectionjobresponse"></a>
<a id="tocsstopphidetectionjobresponse"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_StopPHIDetectionJobRequest">StopPHIDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopphidetectionjobrequest"></a>
<a id="schema_StopPHIDetectionJobRequest"></a>
<a id="tocSstopphidetectionjobrequest"></a>
<a id="tocsstopphidetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_StopRxNormInferenceJobResponse">StopRxNormInferenceJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoprxnorminferencejobresponse"></a>
<a id="schema_StopRxNormInferenceJobResponse"></a>
<a id="tocSstoprxnorminferencejobresponse"></a>
<a id="tocsstoprxnorminferencejobresponse"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_StopRxNormInferenceJobRequest">StopRxNormInferenceJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoprxnorminferencejobrequest"></a>
<a id="schema_StopRxNormInferenceJobRequest"></a>
<a id="tocSstoprxnorminferencejobrequest"></a>
<a id="tocsstoprxnorminferencejobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_StopSNOMEDCTInferenceJobResponse">StopSNOMEDCTInferenceJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopsnomedctinferencejobresponse"></a>
<a id="schema_StopSNOMEDCTInferenceJobResponse"></a>
<a id="tocSstopsnomedctinferencejobresponse"></a>
<a id="tocsstopsnomedctinferencejobresponse"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_StopSNOMEDCTInferenceJobRequest">StopSNOMEDCTInferenceJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopsnomedctinferencejobrequest"></a>
<a id="schema_StopSNOMEDCTInferenceJobRequest"></a>
<a id="tocSstopsnomedctinferencejobrequest"></a>
<a id="tocsstopsnomedctinferencejobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_AnyLengthString">AnyLengthString</h2>
<!-- backwards compatibility -->
<a id="schemaanylengthstring"></a>
<a id="schema_AnyLengthString"></a>
<a id="tocSanylengthstring"></a>
<a id="tocsanylengthstring"></a>

```json
"string"
```

<h2 id="tocS_EntitySubType">EntitySubType</h2>
<!-- backwards compatibility -->
<a id="schemaentitysubtype"></a>
<a id="schema_EntitySubType"></a>
<a id="tocSentitysubtype"></a>
<a id="tocsentitysubtype"></a>

```json
"NAME"
```

<h2 id="tocS_Float">Float</h2>
<!-- backwards compatibility -->
<a id="schemafloat"></a>
<a id="schema_Float"></a>
<a id="tocSfloat"></a>
<a id="tocsfloat"></a>

```json
0
```

<h2 id="tocS_RelationshipType">RelationshipType</h2>
<!-- backwards compatibility -->
<a id="schemarelationshiptype"></a>
<a id="schema_RelationshipType"></a>
<a id="tocSrelationshiptype"></a>
<a id="tocsrelationshiptype"></a>

```json
"EVERY"
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

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

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
"MEDICATION"
```

<h2 id="tocS_TraitList">TraitList</h2>
<!-- backwards compatibility -->
<a id="schematraitlist"></a>
<a id="schema_TraitList"></a>
<a id="tocStraitlist"></a>
<a id="tocstraitlist"></a>

```json
[
  {
    "Name": {},
    "Score": {}
  }
]
```

<h2 id="tocS_Attribute">Attribute</h2>
<!-- backwards compatibility -->
<a id="schemaattribute"></a>
<a id="schema_Attribute"></a>
<a id="tocSattribute"></a>
<a id="tocsattribute"></a>

```json
{
  "Type": {},
  "Score": {},
  "RelationshipScore": {},
  "RelationshipType": {},
  "Id": {},
  "BeginOffset": {},
  "EndOffset": {},
  "Text": {},
  "Category": {},
  "Traits": {}
}
```

 An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Score|object|false|none|none|
|RelationshipScore|object|false|none|none|
|RelationshipType|object|false|none|none|
|Id|object|false|none|none|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|
|Text|object|false|none|none|
|Category|object|false|none|none|
|Traits|object|false|none|none|

<h2 id="tocS_AttributeList">AttributeList</h2>
<!-- backwards compatibility -->
<a id="schemaattributelist"></a>
<a id="schema_AttributeList"></a>
<a id="tocSattributelist"></a>
<a id="tocsattributelist"></a>

```json
[
  {
    "Type": {},
    "Score": {},
    "RelationshipScore": {},
    "RelationshipType": {},
    "Id": {},
    "BeginOffset": {},
    "EndOffset": {},
    "Text": {},
    "Category": {},
    "Traits": {}
  }
]
```

<h2 id="tocS_AttributeName">AttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaattributename"></a>
<a id="schema_AttributeName"></a>
<a id="tocSattributename"></a>
<a id="tocsattributename"></a>

```json
"SIGN"
```

<h2 id="tocS_BoundedLengthString">BoundedLengthString</h2>
<!-- backwards compatibility -->
<a id="schemaboundedlengthstring"></a>
<a id="schema_BoundedLengthString"></a>
<a id="tocSboundedlengthstring"></a>
<a id="tocsboundedlengthstring"></a>

```json
"string"
```

<h2 id="tocS_Characters">Characters</h2>
<!-- backwards compatibility -->
<a id="schemacharacters"></a>
<a id="schema_Characters"></a>
<a id="tocScharacters"></a>
<a id="tocscharacters"></a>

```json
{
  "OriginalTextCharacters": {}
}
```

 The number of characters in the input text to be analyzed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginalTextCharacters|object|false|none|none|

<h2 id="tocS_ClientRequestTokenString">ClientRequestTokenString</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttokenstring"></a>
<a id="schema_ClientRequestTokenString"></a>
<a id="tocSclientrequesttokenstring"></a>
<a id="tocsclientrequesttokenstring"></a>

```json
"string"
```

<h2 id="tocS_JobName">JobName</h2>
<!-- backwards compatibility -->
<a id="schemajobname"></a>
<a id="schema_JobName"></a>
<a id="tocSjobname"></a>
<a id="tocsjobname"></a>

```json
"string"
```

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"SUBMITTED"
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

<h2 id="tocS_ComprehendMedicalAsyncJobFilter">ComprehendMedicalAsyncJobFilter</h2>
<!-- backwards compatibility -->
<a id="schemacomprehendmedicalasyncjobfilter"></a>
<a id="schema_ComprehendMedicalAsyncJobFilter"></a>
<a id="tocScomprehendmedicalasyncjobfilter"></a>
<a id="tocscomprehendmedicalasyncjobfilter"></a>

```json
{
  "JobName": {},
  "JobStatus": {},
  "SubmitTimeBefore": {},
  "SubmitTimeAfter": {}
}
```

Provides information for filtering a list of detection jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|SubmitTimeBefore|object|false|none|none|
|SubmitTimeAfter|object|false|none|none|

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
"string"
```

<h2 id="tocS_InputDataConfig">InputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemainputdataconfig"></a>
<a id="schema_InputDataConfig"></a>
<a id="tocSinputdataconfig"></a>
<a id="tocsinputdataconfig"></a>

```json
{
  "S3Bucket": {},
  "S3Key": {}
}
```

The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Bucket|object|true|none|none|
|S3Key|object|false|none|none|

<h2 id="tocS_OutputDataConfig">OutputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoutputdataconfig"></a>
<a id="schema_OutputDataConfig"></a>
<a id="tocSoutputdataconfig"></a>
<a id="tocsoutputdataconfig"></a>

```json
{
  "S3Bucket": {},
  "S3Key": {}
}
```

The output properties for a detection job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Bucket|object|true|none|none|
|S3Key|object|false|none|none|

<h2 id="tocS_LanguageCode">LanguageCode</h2>
<!-- backwards compatibility -->
<a id="schemalanguagecode"></a>
<a id="schema_LanguageCode"></a>
<a id="tocSlanguagecode"></a>
<a id="tocslanguagecode"></a>

```json
"en"
```

<h2 id="tocS_IamRoleArn">IamRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamrolearn"></a>
<a id="schema_IamRoleArn"></a>
<a id="tocSiamrolearn"></a>
<a id="tocsiamrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_ManifestFilePath">ManifestFilePath</h2>
<!-- backwards compatibility -->
<a id="schemamanifestfilepath"></a>
<a id="schema_ManifestFilePath"></a>
<a id="tocSmanifestfilepath"></a>
<a id="tocsmanifestfilepath"></a>

```json
"string"
```

<h2 id="tocS_KMSKey">KMSKey</h2>
<!-- backwards compatibility -->
<a id="schemakmskey"></a>
<a id="schema_KMSKey"></a>
<a id="tocSkmskey"></a>
<a id="tocskmskey"></a>

```json
"string"
```

<h2 id="tocS_ModelVersion">ModelVersion</h2>
<!-- backwards compatibility -->
<a id="schemamodelversion"></a>
<a id="schema_ModelVersion"></a>
<a id="tocSmodelversion"></a>
<a id="tocsmodelversion"></a>

```json
"string"
```

<h2 id="tocS_ComprehendMedicalAsyncJobProperties">ComprehendMedicalAsyncJobProperties</h2>
<!-- backwards compatibility -->
<a id="schemacomprehendmedicalasyncjobproperties"></a>
<a id="schema_ComprehendMedicalAsyncJobProperties"></a>
<a id="tocScomprehendmedicalasyncjobproperties"></a>
<a id="tocscomprehendmedicalasyncjobproperties"></a>

```json
{
  "JobId": {},
  "JobName": {},
  "JobStatus": {},
  "Message": {},
  "SubmitTime": {},
  "EndTime": {},
  "ExpirationTime": {},
  "InputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "OutputDataConfig": {
    "S3Bucket": {},
    "S3Key": {}
  },
  "LanguageCode": {},
  "DataAccessRoleArn": {},
  "ManifestFilePath": {},
  "KMSKey": {},
  "ModelVersion": {}
}
```

Provides information about a detection job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|Message|object|false|none|none|
|SubmitTime|object|false|none|none|
|EndTime|object|false|none|none|
|ExpirationTime|object|false|none|none|
|InputDataConfig|object|false|none|none|
|OutputDataConfig|object|false|none|none|
|LanguageCode|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|ManifestFilePath|object|false|none|none|
|KMSKey|object|false|none|none|
|ModelVersion|object|false|none|none|

<h2 id="tocS_ComprehendMedicalAsyncJobPropertiesList">ComprehendMedicalAsyncJobPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemacomprehendmedicalasyncjobpropertieslist"></a>
<a id="schema_ComprehendMedicalAsyncJobPropertiesList"></a>
<a id="tocScomprehendmedicalasyncjobpropertieslist"></a>
<a id="tocscomprehendmedicalasyncjobpropertieslist"></a>

```json
[
  {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "ExpirationTime": {},
    "InputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "OutputDataConfig": {
      "S3Bucket": {},
      "S3Key": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "ManifestFilePath": {},
    "KMSKey": {},
    "ModelVersion": {}
  }
]
```

<h2 id="tocS_EntityList">EntityList</h2>
<!-- backwards compatibility -->
<a id="schemaentitylist"></a>
<a id="schema_EntityList"></a>
<a id="tocSentitylist"></a>
<a id="tocsentitylist"></a>

```json
[
  {
    "Id": {},
    "BeginOffset": {},
    "EndOffset": {},
    "Score": {},
    "Text": {},
    "Category": {},
    "Type": {},
    "Traits": {},
    "Attributes": {}
  }
]
```

<h2 id="tocS_UnmappedAttributeList">UnmappedAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemaunmappedattributelist"></a>
<a id="schema_UnmappedAttributeList"></a>
<a id="tocSunmappedattributelist"></a>
<a id="tocsunmappedattributelist"></a>

```json
[
  {
    "Type": {},
    "Attribute": {
      "Type": {},
      "Score": {},
      "RelationshipScore": {},
      "RelationshipType": {},
      "Id": {},
      "BeginOffset": {},
      "EndOffset": {},
      "Text": {},
      "Category": {},
      "Traits": {}
    }
  }
]
```

<h2 id="tocS_Entity">Entity</h2>
<!-- backwards compatibility -->
<a id="schemaentity"></a>
<a id="schema_Entity"></a>
<a id="tocSentity"></a>
<a id="tocsentity"></a>

```json
{
  "Id": {},
  "BeginOffset": {},
  "EndOffset": {},
  "Score": {},
  "Text": {},
  "Category": {},
  "Type": {},
  "Traits": {},
  "Attributes": {}
}
```

 Provides information about an extracted medical entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|
|Score|object|false|none|none|
|Text|object|false|none|none|
|Category|object|false|none|none|
|Type|object|false|none|none|
|Traits|object|false|none|none|
|Attributes|object|false|none|none|

<h2 id="tocS_ICD10CMAttributeType">ICD10CMAttributeType</h2>
<!-- backwards compatibility -->
<a id="schemaicd10cmattributetype"></a>
<a id="schema_ICD10CMAttributeType"></a>
<a id="tocSicd10cmattributetype"></a>
<a id="tocsicd10cmattributetype"></a>

```json
"ACUITY"
```

<h2 id="tocS_ICD10CMTraitList">ICD10CMTraitList</h2>
<!-- backwards compatibility -->
<a id="schemaicd10cmtraitlist"></a>
<a id="schema_ICD10CMTraitList"></a>
<a id="tocSicd10cmtraitlist"></a>
<a id="tocsicd10cmtraitlist"></a>

```json
[
  {
    "Name": {},
    "Score": {}
  }
]
```

<h2 id="tocS_ICD10CMEntityType">ICD10CMEntityType</h2>
<!-- backwards compatibility -->
<a id="schemaicd10cmentitytype"></a>
<a id="schema_ICD10CMEntityType"></a>
<a id="tocSicd10cmentitytype"></a>
<a id="tocsicd10cmentitytype"></a>

```json
"DX_NAME"
```

<h2 id="tocS_ICD10CMRelationshipType">ICD10CMRelationshipType</h2>
<!-- backwards compatibility -->
<a id="schemaicd10cmrelationshiptype"></a>
<a id="schema_ICD10CMRelationshipType"></a>
<a id="tocSicd10cmrelationshiptype"></a>
<a id="tocsicd10cmrelationshiptype"></a>

```json
"OVERLAP"
```

<h2 id="tocS_ICD10CMAttribute">ICD10CMAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaicd10cmattribute"></a>
<a id="schema_ICD10CMAttribute"></a>
<a id="tocSicd10cmattribute"></a>
<a id="tocsicd10cmattribute"></a>

```json
{
  "Type": {},
  "Score": {},
  "RelationshipScore": {},
  "Id": {},
  "BeginOffset": {},
  "EndOffset": {},
  "Text": {},
  "Traits": {},
  "Category": {},
  "RelationshipType": {}
}
```

The detected attributes that relate to an entity. This includes an extracted segment of the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM detects the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>, and <code>Acuity</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Score|object|false|none|none|
|RelationshipScore|object|false|none|none|
|Id|object|false|none|none|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|
|Text|object|false|none|none|
|Traits|object|false|none|none|
|Category|object|false|none|none|
|RelationshipType|object|false|none|none|

<h2 id="tocS_ICD10CMAttributeList">ICD10CMAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemaicd10cmattributelist"></a>
<a id="schema_ICD10CMAttributeList"></a>
<a id="tocSicd10cmattributelist"></a>
<a id="tocsicd10cmattributelist"></a>

```json
[
  {
    "Type": {},
    "Score": {},
    "RelationshipScore": {},
    "Id": {},
    "BeginOffset": {},
    "EndOffset": {},
    "Text": {},
    "Traits": {},
    "Category": {},
    "RelationshipType": {}
  }
]
```

<h2 id="tocS_ICD10CMConcept">ICD10CMConcept</h2>
<!-- backwards compatibility -->
<a id="schemaicd10cmconcept"></a>
<a id="schema_ICD10CMConcept"></a>
<a id="tocSicd10cmconcept"></a>
<a id="tocsicd10cmconcept"></a>

```json
{
  "Description": {},
  "Code": {},
  "Score": {}
}
```

 The ICD-10-CM concepts that the entity could refer to, along with a score indicating the likelihood of the match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Code|object|false|none|none|
|Score|object|false|none|none|

<h2 id="tocS_ICD10CMConceptList">ICD10CMConceptList</h2>
<!-- backwards compatibility -->
<a id="schemaicd10cmconceptlist"></a>
<a id="schema_ICD10CMConceptList"></a>
<a id="tocSicd10cmconceptlist"></a>
<a id="tocsicd10cmconceptlist"></a>

```json
[
  {
    "Description": {},
    "Code": {},
    "Score": {}
  }
]
```

<h2 id="tocS_OntologyLinkingBoundedLengthString">OntologyLinkingBoundedLengthString</h2>
<!-- backwards compatibility -->
<a id="schemaontologylinkingboundedlengthstring"></a>
<a id="schema_OntologyLinkingBoundedLengthString"></a>
<a id="tocSontologylinkingboundedlengthstring"></a>
<a id="tocsontologylinkingboundedlengthstring"></a>

```json
"string"
```

<h2 id="tocS_ICD10CMEntityCategory">ICD10CMEntityCategory</h2>
<!-- backwards compatibility -->
<a id="schemaicd10cmentitycategory"></a>
<a id="schema_ICD10CMEntityCategory"></a>
<a id="tocSicd10cmentitycategory"></a>
<a id="tocsicd10cmentitycategory"></a>

```json
"MEDICAL_CONDITION"
```

<h2 id="tocS_ICD10CMEntity">ICD10CMEntity</h2>
<!-- backwards compatibility -->
<a id="schemaicd10cmentity"></a>
<a id="schema_ICD10CMEntity"></a>
<a id="tocSicd10cmentity"></a>
<a id="tocsicd10cmentity"></a>

```json
{
  "Id": {},
  "Text": {},
  "Category": {},
  "Type": {},
  "Score": {},
  "BeginOffset": {},
  "EndOffset": {},
  "Attributes": {},
  "Traits": {},
  "ICD10CMConcepts": {}
}
```

The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Text|object|false|none|none|
|Category|object|false|none|none|
|Type|object|false|none|none|
|Score|object|false|none|none|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|
|Attributes|object|false|none|none|
|Traits|object|false|none|none|
|ICD10CMConcepts|object|false|none|none|

<h2 id="tocS_ICD10CMEntityList">ICD10CMEntityList</h2>
<!-- backwards compatibility -->
<a id="schemaicd10cmentitylist"></a>
<a id="schema_ICD10CMEntityList"></a>
<a id="tocSicd10cmentitylist"></a>
<a id="tocsicd10cmentitylist"></a>

```json
[
  {
    "Id": {},
    "Text": {},
    "Category": {},
    "Type": {},
    "Score": {},
    "BeginOffset": {},
    "EndOffset": {},
    "Attributes": {},
    "Traits": {},
    "ICD10CMConcepts": {}
  }
]
```

<h2 id="tocS_ICD10CMTraitName">ICD10CMTraitName</h2>
<!-- backwards compatibility -->
<a id="schemaicd10cmtraitname"></a>
<a id="schema_ICD10CMTraitName"></a>
<a id="tocSicd10cmtraitname"></a>
<a id="tocsicd10cmtraitname"></a>

```json
"NEGATION"
```

<h2 id="tocS_ICD10CMTrait">ICD10CMTrait</h2>
<!-- backwards compatibility -->
<a id="schemaicd10cmtrait"></a>
<a id="schema_ICD10CMTrait"></a>
<a id="tocSicd10cmtrait"></a>
<a id="tocsicd10cmtrait"></a>

```json
{
  "Name": {},
  "Score": {}
}
```

Contextual information for the entity. The traits recognized by InferICD10CM are <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Score|object|false|none|none|

<h2 id="tocS_RxNormEntityList">RxNormEntityList</h2>
<!-- backwards compatibility -->
<a id="schemarxnormentitylist"></a>
<a id="schema_RxNormEntityList"></a>
<a id="tocSrxnormentitylist"></a>
<a id="tocsrxnormentitylist"></a>

```json
[
  {
    "Id": {},
    "Text": {},
    "Category": {},
    "Type": {},
    "Score": {},
    "BeginOffset": {},
    "EndOffset": {},
    "Attributes": {},
    "Traits": {},
    "RxNormConcepts": {}
  }
]
```

<h2 id="tocS_SNOMEDCTEntityList">SNOMEDCTEntityList</h2>
<!-- backwards compatibility -->
<a id="schemasnomedctentitylist"></a>
<a id="schema_SNOMEDCTEntityList"></a>
<a id="tocSsnomedctentitylist"></a>
<a id="tocssnomedctentitylist"></a>

```json
[
  {
    "Id": {},
    "Text": {},
    "Category": {},
    "Type": {},
    "Score": {},
    "BeginOffset": {},
    "EndOffset": {},
    "Attributes": {},
    "Traits": {},
    "SNOMEDCTConcepts": {}
  }
]
```

<h2 id="tocS_SNOMEDCTDetails">SNOMEDCTDetails</h2>
<!-- backwards compatibility -->
<a id="schemasnomedctdetails"></a>
<a id="schema_SNOMEDCTDetails"></a>
<a id="tocSsnomedctdetails"></a>
<a id="tocssnomedctdetails"></a>

```json
{
  "Edition": {},
  "Language": {},
  "VersionDate": {}
}
```

 The information about the revision of the SNOMED-CT ontology in the response. Specifically, the details include the SNOMED-CT edition, language, and version date.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Edition|object|false|none|none|
|Language|object|false|none|none|
|VersionDate|object|false|none|none|

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

<h2 id="tocS_MaxResultsInteger">MaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsinteger"></a>
<a id="schema_MaxResultsInteger"></a>
<a id="tocSmaxresultsinteger"></a>
<a id="tocsmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_RxNormAttributeType">RxNormAttributeType</h2>
<!-- backwards compatibility -->
<a id="schemarxnormattributetype"></a>
<a id="schema_RxNormAttributeType"></a>
<a id="tocSrxnormattributetype"></a>
<a id="tocsrxnormattributetype"></a>

```json
"DOSAGE"
```

<h2 id="tocS_RxNormTraitList">RxNormTraitList</h2>
<!-- backwards compatibility -->
<a id="schemarxnormtraitlist"></a>
<a id="schema_RxNormTraitList"></a>
<a id="tocSrxnormtraitlist"></a>
<a id="tocsrxnormtraitlist"></a>

```json
[
  {
    "Name": {},
    "Score": {}
  }
]
```

<h2 id="tocS_RxNormAttribute">RxNormAttribute</h2>
<!-- backwards compatibility -->
<a id="schemarxnormattribute"></a>
<a id="schema_RxNormAttribute"></a>
<a id="tocSrxnormattribute"></a>
<a id="tocsrxnormattribute"></a>

```json
{
  "Type": {},
  "Score": {},
  "RelationshipScore": {},
  "Id": {},
  "BeginOffset": {},
  "EndOffset": {},
  "Text": {},
  "Traits": {}
}
```

The extracted attributes that relate to this entity. The attributes recognized by InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>, <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Score|object|false|none|none|
|RelationshipScore|object|false|none|none|
|Id|object|false|none|none|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|
|Text|object|false|none|none|
|Traits|object|false|none|none|

<h2 id="tocS_RxNormAttributeList">RxNormAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemarxnormattributelist"></a>
<a id="schema_RxNormAttributeList"></a>
<a id="tocSrxnormattributelist"></a>
<a id="tocsrxnormattributelist"></a>

```json
[
  {
    "Type": {},
    "Score": {},
    "RelationshipScore": {},
    "Id": {},
    "BeginOffset": {},
    "EndOffset": {},
    "Text": {},
    "Traits": {}
  }
]
```

<h2 id="tocS_RxNormConcept">RxNormConcept</h2>
<!-- backwards compatibility -->
<a id="schemarxnormconcept"></a>
<a id="schema_RxNormConcept"></a>
<a id="tocSrxnormconcept"></a>
<a id="tocsrxnormconcept"></a>

```json
{
  "Description": {},
  "Code": {},
  "Score": {}
}
```

The RxNorm concept that the entity could refer to, along with a score indicating the likelihood of the match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Code|object|false|none|none|
|Score|object|false|none|none|

<h2 id="tocS_RxNormConceptList">RxNormConceptList</h2>
<!-- backwards compatibility -->
<a id="schemarxnormconceptlist"></a>
<a id="schema_RxNormConceptList"></a>
<a id="tocSrxnormconceptlist"></a>
<a id="tocsrxnormconceptlist"></a>

```json
[
  {
    "Description": {},
    "Code": {},
    "Score": {}
  }
]
```

<h2 id="tocS_RxNormEntityCategory">RxNormEntityCategory</h2>
<!-- backwards compatibility -->
<a id="schemarxnormentitycategory"></a>
<a id="schema_RxNormEntityCategory"></a>
<a id="tocSrxnormentitycategory"></a>
<a id="tocsrxnormentitycategory"></a>

```json
"MEDICATION"
```

<h2 id="tocS_RxNormEntityType">RxNormEntityType</h2>
<!-- backwards compatibility -->
<a id="schemarxnormentitytype"></a>
<a id="schema_RxNormEntityType"></a>
<a id="tocSrxnormentitytype"></a>
<a id="tocsrxnormentitytype"></a>

```json
"BRAND_NAME"
```

<h2 id="tocS_RxNormEntity">RxNormEntity</h2>
<!-- backwards compatibility -->
<a id="schemarxnormentity"></a>
<a id="schema_RxNormEntity"></a>
<a id="tocSrxnormentity"></a>
<a id="tocsrxnormentity"></a>

```json
{
  "Id": {},
  "Text": {},
  "Category": {},
  "Type": {},
  "Score": {},
  "BeginOffset": {},
  "EndOffset": {},
  "Attributes": {},
  "Traits": {},
  "RxNormConcepts": {}
}
```

The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Text|object|false|none|none|
|Category|object|false|none|none|
|Type|object|false|none|none|
|Score|object|false|none|none|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|
|Attributes|object|false|none|none|
|Traits|object|false|none|none|
|RxNormConcepts|object|false|none|none|

<h2 id="tocS_RxNormTraitName">RxNormTraitName</h2>
<!-- backwards compatibility -->
<a id="schemarxnormtraitname"></a>
<a id="schema_RxNormTraitName"></a>
<a id="tocSrxnormtraitname"></a>
<a id="tocsrxnormtraitname"></a>

```json
"NEGATION"
```

<h2 id="tocS_RxNormTrait">RxNormTrait</h2>
<!-- backwards compatibility -->
<a id="schemarxnormtrait"></a>
<a id="schema_RxNormTrait"></a>
<a id="tocSrxnormtrait"></a>
<a id="tocsrxnormtrait"></a>

```json
{
  "Name": {},
  "Score": {}
}
```

The contextual information for the entity. InferRxNorm recognizes the trait <code>NEGATION</code>, which is any indication that the patient is not taking a medication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Score|object|false|none|none|

<h2 id="tocS_SNOMEDCTEntityCategory">SNOMEDCTEntityCategory</h2>
<!-- backwards compatibility -->
<a id="schemasnomedctentitycategory"></a>
<a id="schema_SNOMEDCTEntityCategory"></a>
<a id="tocSsnomedctentitycategory"></a>
<a id="tocssnomedctentitycategory"></a>

```json
"MEDICAL_CONDITION"
```

<h2 id="tocS_SNOMEDCTAttributeType">SNOMEDCTAttributeType</h2>
<!-- backwards compatibility -->
<a id="schemasnomedctattributetype"></a>
<a id="schema_SNOMEDCTAttributeType"></a>
<a id="tocSsnomedctattributetype"></a>
<a id="tocssnomedctattributetype"></a>

```json
"ACUITY"
```

<h2 id="tocS_SNOMEDCTRelationshipType">SNOMEDCTRelationshipType</h2>
<!-- backwards compatibility -->
<a id="schemasnomedctrelationshiptype"></a>
<a id="schema_SNOMEDCTRelationshipType"></a>
<a id="tocSsnomedctrelationshiptype"></a>
<a id="tocssnomedctrelationshiptype"></a>

```json
"ACUITY"
```

<h2 id="tocS_SNOMEDCTTraitList">SNOMEDCTTraitList</h2>
<!-- backwards compatibility -->
<a id="schemasnomedcttraitlist"></a>
<a id="schema_SNOMEDCTTraitList"></a>
<a id="tocSsnomedcttraitlist"></a>
<a id="tocssnomedcttraitlist"></a>

```json
[
  {
    "Name": {},
    "Score": {}
  }
]
```

<h2 id="tocS_SNOMEDCTConceptList">SNOMEDCTConceptList</h2>
<!-- backwards compatibility -->
<a id="schemasnomedctconceptlist"></a>
<a id="schema_SNOMEDCTConceptList"></a>
<a id="tocSsnomedctconceptlist"></a>
<a id="tocssnomedctconceptlist"></a>

```json
[
  {
    "Description": {},
    "Code": {},
    "Score": {}
  }
]
```

<h2 id="tocS_SNOMEDCTAttribute">SNOMEDCTAttribute</h2>
<!-- backwards compatibility -->
<a id="schemasnomedctattribute"></a>
<a id="schema_SNOMEDCTAttribute"></a>
<a id="tocSsnomedctattribute"></a>
<a id="tocssnomedctattribute"></a>

```json
{
  "Category": {},
  "Type": {},
  "Score": {},
  "RelationshipScore": {},
  "RelationshipType": {},
  "Id": {},
  "BeginOffset": {},
  "EndOffset": {},
  "Text": {},
  "Traits": {},
  "SNOMEDCTConcepts": {}
}
```

 The extracted attributes that relate to an entity. An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Category|object|false|none|none|
|Type|object|false|none|none|
|Score|object|false|none|none|
|RelationshipScore|object|false|none|none|
|RelationshipType|object|false|none|none|
|Id|object|false|none|none|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|
|Text|object|false|none|none|
|Traits|object|false|none|none|
|SNOMEDCTConcepts|object|false|none|none|

<h2 id="tocS_SNOMEDCTAttributeList">SNOMEDCTAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemasnomedctattributelist"></a>
<a id="schema_SNOMEDCTAttributeList"></a>
<a id="tocSsnomedctattributelist"></a>
<a id="tocssnomedctattributelist"></a>

```json
[
  {
    "Category": {},
    "Type": {},
    "Score": {},
    "RelationshipScore": {},
    "RelationshipType": {},
    "Id": {},
    "BeginOffset": {},
    "EndOffset": {},
    "Text": {},
    "Traits": {},
    "SNOMEDCTConcepts": {}
  }
]
```

<h2 id="tocS_SNOMEDCTConcept">SNOMEDCTConcept</h2>
<!-- backwards compatibility -->
<a id="schemasnomedctconcept"></a>
<a id="schema_SNOMEDCTConcept"></a>
<a id="tocSsnomedctconcept"></a>
<a id="tocssnomedctconcept"></a>

```json
{
  "Description": {},
  "Code": {},
  "Score": {}
}
```

 The SNOMED-CT concepts that the entity could refer to, along with a score indicating the likelihood of the match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Code|object|false|none|none|
|Score|object|false|none|none|

<h2 id="tocS_SNOMEDCTEntityType">SNOMEDCTEntityType</h2>
<!-- backwards compatibility -->
<a id="schemasnomedctentitytype"></a>
<a id="schema_SNOMEDCTEntityType"></a>
<a id="tocSsnomedctentitytype"></a>
<a id="tocssnomedctentitytype"></a>

```json
"DX_NAME"
```

<h2 id="tocS_SNOMEDCTEntity">SNOMEDCTEntity</h2>
<!-- backwards compatibility -->
<a id="schemasnomedctentity"></a>
<a id="schema_SNOMEDCTEntity"></a>
<a id="tocSsnomedctentity"></a>
<a id="tocssnomedctentity"></a>

```json
{
  "Id": {},
  "Text": {},
  "Category": {},
  "Type": {},
  "Score": {},
  "BeginOffset": {},
  "EndOffset": {},
  "Attributes": {},
  "Traits": {},
  "SNOMEDCTConcepts": {}
}
```

 The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Text|object|false|none|none|
|Category|object|false|none|none|
|Type|object|false|none|none|
|Score|object|false|none|none|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|
|Attributes|object|false|none|none|
|Traits|object|false|none|none|
|SNOMEDCTConcepts|object|false|none|none|

<h2 id="tocS_SNOMEDCTTraitName">SNOMEDCTTraitName</h2>
<!-- backwards compatibility -->
<a id="schemasnomedcttraitname"></a>
<a id="schema_SNOMEDCTTraitName"></a>
<a id="tocSsnomedcttraitname"></a>
<a id="tocssnomedcttraitname"></a>

```json
"NEGATION"
```

<h2 id="tocS_SNOMEDCTTrait">SNOMEDCTTrait</h2>
<!-- backwards compatibility -->
<a id="schemasnomedcttrait"></a>
<a id="schema_SNOMEDCTTrait"></a>
<a id="tocSsnomedcttrait"></a>
<a id="tocssnomedcttrait"></a>

```json
{
  "Name": {},
  "Score": {}
}
```

 Contextual information for an entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Score|object|false|none|none|

<h2 id="tocS_Trait">Trait</h2>
<!-- backwards compatibility -->
<a id="schematrait"></a>
<a id="schema_Trait"></a>
<a id="tocStrait"></a>
<a id="tocstrait"></a>

```json
{
  "Name": {},
  "Score": {}
}
```

 Provides contextual information about the extracted entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Score|object|false|none|none|

<h2 id="tocS_UnmappedAttribute">UnmappedAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaunmappedattribute"></a>
<a id="schema_UnmappedAttribute"></a>
<a id="tocSunmappedattribute"></a>
<a id="tocsunmappedattribute"></a>

```json
{
  "Type": {},
  "Attribute": {
    "Type": {},
    "Score": {},
    "RelationshipScore": {},
    "RelationshipType": {},
    "Id": {},
    "BeginOffset": {},
    "EndOffset": {},
    "Text": {},
    "Category": {},
    "Traits": {}
  }
}
```

 An attribute that was extracted, but Comprehend Medical; was unable to relate to an entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Attribute|object|false|none|none|
