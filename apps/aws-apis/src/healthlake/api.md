<h1 id="amazon-healthlake">Amazon HealthLake v2017-07-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon HealthLake is a HIPAA eligibile service that allows customers to store, transform, query, and analyze their FHIR-formatted data in a consistent fashion in the cloud.

Base URLs:

* <a href="http://healthlake.us-east-1.amazonaws.com">http://healthlake.us-east-1.amazonaws.com</a> - The HealthLake multi-region endpoint

* <a href="https://healthlake.us-east-1.amazonaws.com">https://healthlake.us-east-1.amazonaws.com</a> - The HealthLake multi-region endpoint

* <a href="http://healthlake.cn-north-1.amazonaws.com.cn">http://healthlake.cn-north-1.amazonaws.com.cn</a> - The HealthLake endpoint for China (Beijing) and China (Ningxia)

* <a href="https://healthlake.cn-north-1.amazonaws.com.cn">https://healthlake.cn-north-1.amazonaws.com.cn</a> - The HealthLake endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/healthlake/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-healthlake-default">Default</h1>

## CreateFHIRDatastore

<a id="opIdCreateFHIRDatastore"></a>

> Code samples

```bash
curl 'https://healthlake.us-east-1.amazonaws.com/#X-Amz-Target=HealthLake.CreateFHIRDatastore' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: HealthLake.CreateFHIRDatastore' \
  -d '{
    "DatastoreName": {},
    "DatastoreTypeVersion": {},
    "SseConfiguration": {
      "KmsEncryptionConfig": {
        "CmkType": {},
        "KmsKeyId": {}
      }
    },
    "PreloadDataConfig": {
      "PreloadDataType": {}
    },
    "ClientToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=HealthLake.CreateFHIRDatastore`

Creates a Data Store that can ingest and export FHIR formatted data.

> Body parameter

```json
{
  "DatastoreName": {},
  "DatastoreTypeVersion": {},
  "SseConfiguration": {
    "KmsEncryptionConfig": {
      "CmkType": {},
      "KmsKeyId": {}
    }
  },
  "PreloadDataConfig": {
    "PreloadDataType": {}
  },
  "ClientToken": {},
  "Tags": {}
}
```

<h3 id="createfhirdatastore-parameters">Parameters</h3>

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
|body|body|[CreateFHIRDatastoreRequest](#schemacreatefhirdatastorerequest)|true|none|
|» DatastoreName|body|object|false|none|
|» DatastoreTypeVersion|body|object|true|none|
|» SseConfiguration|body|object|false|none|
|» » KmsEncryptionConfig|body|object|true|none|
|» » » CmkType|body|object|true|none|
|» » » KmsKeyId|body|object|false|none|
|» PreloadDataConfig|body|object|false|none|
|» » PreloadDataType|body|object|true|none|
|» ClientToken|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|HealthLake.CreateFHIRDatastore|

> Example responses

> 200 Response

```json
{
  "DatastoreId": {},
  "DatastoreArn": {},
  "DatastoreStatus": {},
  "DatastoreEndpoint": {}
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

<h3 id="createfhirdatastore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFHIRDatastoreResponse](#schemacreatefhirdatastoreresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFHIRDatastore

<a id="opIdDeleteFHIRDatastore"></a>

> Code samples

```bash
curl 'https://healthlake.us-east-1.amazonaws.com/#X-Amz-Target=HealthLake.DeleteFHIRDatastore' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: HealthLake.DeleteFHIRDatastore' \
  -d '{
    "DatastoreId": {}
  }'
```

`POST /#X-Amz-Target=HealthLake.DeleteFHIRDatastore`

Deletes a Data Store. 

> Body parameter

```json
{
  "DatastoreId": {}
}
```

<h3 id="deletefhirdatastore-parameters">Parameters</h3>

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
|body|body|[DeleteFHIRDatastoreRequest](#schemadeletefhirdatastorerequest)|true|none|
|» DatastoreId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|HealthLake.DeleteFHIRDatastore|

> Example responses

> 200 Response

```json
{
  "DatastoreId": {},
  "DatastoreArn": {},
  "DatastoreStatus": {},
  "DatastoreEndpoint": {}
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

<h3 id="deletefhirdatastore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFHIRDatastoreResponse](#schemadeletefhirdatastoreresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFHIRDatastore

<a id="opIdDescribeFHIRDatastore"></a>

> Code samples

```bash
curl 'https://healthlake.us-east-1.amazonaws.com/#X-Amz-Target=HealthLake.DescribeFHIRDatastore' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: HealthLake.DescribeFHIRDatastore' \
  -d '{
    "DatastoreId": {}
  }'
```

`POST /#X-Amz-Target=HealthLake.DescribeFHIRDatastore`

Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.

> Body parameter

```json
{
  "DatastoreId": {}
}
```

<h3 id="describefhirdatastore-parameters">Parameters</h3>

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
|body|body|[DescribeFHIRDatastoreRequest](#schemadescribefhirdatastorerequest)|true|none|
|» DatastoreId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|HealthLake.DescribeFHIRDatastore|

> Example responses

> 200 Response

```json
{
  "DatastoreProperties": {
    "DatastoreId": {},
    "DatastoreArn": {},
    "DatastoreName": {},
    "DatastoreStatus": {},
    "CreatedAt": {},
    "DatastoreTypeVersion": {},
    "DatastoreEndpoint": {},
    "SseConfiguration": {
      "KmsEncryptionConfig": {
        "CmkType": {},
        "KmsKeyId": {}
      }
    },
    "PreloadDataConfig": {
      "PreloadDataType": {}
    }
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

<h3 id="describefhirdatastore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFHIRDatastoreResponse](#schemadescribefhirdatastoreresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFHIRExportJob

<a id="opIdDescribeFHIRExportJob"></a>

> Code samples

```bash
curl 'https://healthlake.us-east-1.amazonaws.com/#X-Amz-Target=HealthLake.DescribeFHIRExportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: HealthLake.DescribeFHIRExportJob' \
  -d '{
    "DatastoreId": {},
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=HealthLake.DescribeFHIRExportJob`

Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.

> Body parameter

```json
{
  "DatastoreId": {},
  "JobId": {}
}
```

<h3 id="describefhirexportjob-parameters">Parameters</h3>

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
|body|body|[DescribeFHIRExportJobRequest](#schemadescribefhirexportjobrequest)|true|none|
|» DatastoreId|body|object|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|HealthLake.DescribeFHIRExportJob|

> Example responses

> 200 Response

```json
{
  "ExportJobProperties": {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "SubmitTime": {},
    "EndTime": {},
    "DatastoreId": {},
    "OutputDataConfig": {
      "S3Configuration": {
        "S3Uri": {},
        "KmsKeyId": {}
      }
    },
    "DataAccessRoleArn": {},
    "Message": {}
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

<h3 id="describefhirexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFHIRExportJobResponse](#schemadescribefhirexportjobresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFHIRImportJob

<a id="opIdDescribeFHIRImportJob"></a>

> Code samples

```bash
curl 'https://healthlake.us-east-1.amazonaws.com/#X-Amz-Target=HealthLake.DescribeFHIRImportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: HealthLake.DescribeFHIRImportJob' \
  -d '{
    "DatastoreId": {},
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=HealthLake.DescribeFHIRImportJob`

Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job. 

> Body parameter

```json
{
  "DatastoreId": {},
  "JobId": {}
}
```

<h3 id="describefhirimportjob-parameters">Parameters</h3>

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
|body|body|[DescribeFHIRImportJobRequest](#schemadescribefhirimportjobrequest)|true|none|
|» DatastoreId|body|object|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|HealthLake.DescribeFHIRImportJob|

> Example responses

> 200 Response

```json
{
  "ImportJobProperties": {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "SubmitTime": {},
    "EndTime": {},
    "DatastoreId": {},
    "InputDataConfig": {
      "S3Uri": {}
    },
    "JobOutputDataConfig": {
      "S3Configuration": {
        "S3Uri": {},
        "KmsKeyId": {}
      }
    },
    "DataAccessRoleArn": {},
    "Message": {}
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

<h3 id="describefhirimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFHIRImportJobResponse](#schemadescribefhirimportjobresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFHIRDatastores

<a id="opIdListFHIRDatastores"></a>

> Code samples

```bash
curl 'https://healthlake.us-east-1.amazonaws.com/#X-Amz-Target=HealthLake.ListFHIRDatastores' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: HealthLake.ListFHIRDatastores' \
  -d '{
    "Filter": {
      "DatastoreName": {},
      "DatastoreStatus": {},
      "CreatedBefore": {},
      "CreatedAfter": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=HealthLake.ListFHIRDatastores`

Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store status.

> Body parameter

```json
{
  "Filter": {
    "DatastoreName": {},
    "DatastoreStatus": {},
    "CreatedBefore": {},
    "CreatedAfter": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listfhirdatastores-parameters">Parameters</h3>

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
|body|body|[ListFHIRDatastoresRequest](#schemalistfhirdatastoresrequest)|true|none|
|» Filter|body|object|false|none|
|» » DatastoreName|body|object|false|none|
|» » DatastoreStatus|body|object|false|none|
|» » CreatedBefore|body|object|false|none|
|» » CreatedAfter|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|HealthLake.ListFHIRDatastores|

> Example responses

> 200 Response

```json
{
  "DatastorePropertiesList": {},
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

<h3 id="listfhirdatastores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFHIRDatastoresResponse](#schemalistfhirdatastoresresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFHIRExportJobs

<a id="opIdListFHIRExportJobs"></a>

> Code samples

```bash
curl 'https://healthlake.us-east-1.amazonaws.com/#X-Amz-Target=HealthLake.ListFHIRExportJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: HealthLake.ListFHIRExportJobs' \
  -d '{
    "DatastoreId": {},
    "NextToken": {},
    "MaxResults": {},
    "JobName": {},
    "JobStatus": {},
    "SubmittedBefore": {},
    "SubmittedAfter": {}
  }'
```

`POST /#X-Amz-Target=HealthLake.ListFHIRExportJobs`

 Lists all FHIR export jobs associated with an account and their statuses. 

> Body parameter

```json
{
  "DatastoreId": {},
  "NextToken": {},
  "MaxResults": {},
  "JobName": {},
  "JobStatus": {},
  "SubmittedBefore": {},
  "SubmittedAfter": {}
}
```

<h3 id="listfhirexportjobs-parameters">Parameters</h3>

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
|body|body|[ListFHIRExportJobsRequest](#schemalistfhirexportjobsrequest)|true|none|
|» DatastoreId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» JobName|body|object|false|none|
|» JobStatus|body|object|false|none|
|» SubmittedBefore|body|object|false|none|
|» SubmittedAfter|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|HealthLake.ListFHIRExportJobs|

> Example responses

> 200 Response

```json
{
  "ExportJobPropertiesList": {},
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

<h3 id="listfhirexportjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFHIRExportJobsResponse](#schemalistfhirexportjobsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFHIRImportJobs

<a id="opIdListFHIRImportJobs"></a>

> Code samples

```bash
curl 'https://healthlake.us-east-1.amazonaws.com/#X-Amz-Target=HealthLake.ListFHIRImportJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: HealthLake.ListFHIRImportJobs' \
  -d '{
    "DatastoreId": {},
    "NextToken": {},
    "MaxResults": {},
    "JobName": {},
    "JobStatus": {},
    "SubmittedBefore": {},
    "SubmittedAfter": {}
  }'
```

`POST /#X-Amz-Target=HealthLake.ListFHIRImportJobs`

 Lists all FHIR import jobs associated with an account and their statuses. 

> Body parameter

```json
{
  "DatastoreId": {},
  "NextToken": {},
  "MaxResults": {},
  "JobName": {},
  "JobStatus": {},
  "SubmittedBefore": {},
  "SubmittedAfter": {}
}
```

<h3 id="listfhirimportjobs-parameters">Parameters</h3>

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
|body|body|[ListFHIRImportJobsRequest](#schemalistfhirimportjobsrequest)|true|none|
|» DatastoreId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» JobName|body|object|false|none|
|» JobStatus|body|object|false|none|
|» SubmittedBefore|body|object|false|none|
|» SubmittedAfter|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|HealthLake.ListFHIRImportJobs|

> Example responses

> 200 Response

```json
{
  "ImportJobPropertiesList": {},
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

<h3 id="listfhirimportjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFHIRImportJobsResponse](#schemalistfhirimportjobsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://healthlake.us-east-1.amazonaws.com/#X-Amz-Target=HealthLake.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: HealthLake.ListTagsForResource' \
  -d '{
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=HealthLake.ListTagsForResource`

 Returns a list of all existing tags associated with a Data Store. 

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
|X-Amz-Target|HealthLake.ListTagsForResource|

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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartFHIRExportJob

<a id="opIdStartFHIRExportJob"></a>

> Code samples

```bash
curl 'https://healthlake.us-east-1.amazonaws.com/#X-Amz-Target=HealthLake.StartFHIRExportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: HealthLake.StartFHIRExportJob' \
  -d '{
    "JobName": {},
    "OutputDataConfig": {
      "S3Configuration": {
        "S3Uri": {},
        "KmsKeyId": {}
      }
    },
    "DatastoreId": {},
    "DataAccessRoleArn": {},
    "ClientToken": {}
  }'
```

`POST /#X-Amz-Target=HealthLake.StartFHIRExportJob`

Begins a FHIR export job.

> Body parameter

```json
{
  "JobName": {},
  "OutputDataConfig": {
    "S3Configuration": {
      "S3Uri": {},
      "KmsKeyId": {}
    }
  },
  "DatastoreId": {},
  "DataAccessRoleArn": {},
  "ClientToken": {}
}
```

<h3 id="startfhirexportjob-parameters">Parameters</h3>

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
|body|body|[StartFHIRExportJobRequest](#schemastartfhirexportjobrequest)|true|none|
|» JobName|body|object|false|none|
|» OutputDataConfig|body|object|true|none|
|» » S3Configuration|body|object|false|none|
|» » » S3Uri|body|object|true|none|
|» » » KmsKeyId|body|object|true|none|
|» DatastoreId|body|object|true|none|
|» DataAccessRoleArn|body|object|true|none|
|» ClientToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|HealthLake.StartFHIRExportJob|

> Example responses

> 200 Response

```json
{
  "JobId": {},
  "JobStatus": {},
  "DatastoreId": {}
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

<h3 id="startfhirexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartFHIRExportJobResponse](#schemastartfhirexportjobresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartFHIRImportJob

<a id="opIdStartFHIRImportJob"></a>

> Code samples

```bash
curl 'https://healthlake.us-east-1.amazonaws.com/#X-Amz-Target=HealthLake.StartFHIRImportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: HealthLake.StartFHIRImportJob' \
  -d '{
    "JobName": {},
    "InputDataConfig": {
      "S3Uri": {}
    },
    "JobOutputDataConfig": {
      "S3Configuration": {
        "S3Uri": {},
        "KmsKeyId": {}
      }
    },
    "DatastoreId": {},
    "DataAccessRoleArn": {},
    "ClientToken": {}
  }'
```

`POST /#X-Amz-Target=HealthLake.StartFHIRImportJob`

Begins a FHIR Import job.

> Body parameter

```json
{
  "JobName": {},
  "InputDataConfig": {
    "S3Uri": {}
  },
  "JobOutputDataConfig": {
    "S3Configuration": {
      "S3Uri": {},
      "KmsKeyId": {}
    }
  },
  "DatastoreId": {},
  "DataAccessRoleArn": {},
  "ClientToken": {}
}
```

<h3 id="startfhirimportjob-parameters">Parameters</h3>

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
|body|body|[StartFHIRImportJobRequest](#schemastartfhirimportjobrequest)|true|none|
|» JobName|body|object|false|none|
|» InputDataConfig|body|object|true|none|
|» » S3Uri|body|object|false|none|
|» JobOutputDataConfig|body|[OutputDataConfig](#schemaoutputdataconfig)|true|The output data configuration that was supplied when the export job was created.|
|» DatastoreId|body|object|true|none|
|» DataAccessRoleArn|body|object|true|none|
|» ClientToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|HealthLake.StartFHIRImportJob|

> Example responses

> 200 Response

```json
{
  "JobId": {},
  "JobStatus": {},
  "DatastoreId": {}
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

<h3 id="startfhirimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartFHIRImportJobResponse](#schemastartfhirimportjobresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://healthlake.us-east-1.amazonaws.com/#X-Amz-Target=HealthLake.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: HealthLake.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=HealthLake.TagResource`

 Adds a user specifed key and value tag to a Data Store. 

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
|X-Amz-Target|HealthLake.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://healthlake.us-east-1.amazonaws.com/#X-Amz-Target=HealthLake.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: HealthLake.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=HealthLake.UntagResource`

 Removes tags from a Data Store. 

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
|X-Amz-Target|HealthLake.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateFHIRDatastoreResponse">CreateFHIRDatastoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefhirdatastoreresponse"></a>
<a id="schema_CreateFHIRDatastoreResponse"></a>
<a id="tocScreatefhirdatastoreresponse"></a>
<a id="tocscreatefhirdatastoreresponse"></a>

```json
{
  "DatastoreId": {},
  "DatastoreArn": {},
  "DatastoreStatus": {},
  "DatastoreEndpoint": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatastoreId|object|true|none|none|
|DatastoreArn|object|true|none|none|
|DatastoreStatus|object|true|none|none|
|DatastoreEndpoint|object|true|none|none|

<h2 id="tocS_CreateFHIRDatastoreRequest">CreateFHIRDatastoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefhirdatastorerequest"></a>
<a id="schema_CreateFHIRDatastoreRequest"></a>
<a id="tocScreatefhirdatastorerequest"></a>
<a id="tocscreatefhirdatastorerequest"></a>

```json
{
  "DatastoreName": {},
  "DatastoreTypeVersion": {},
  "SseConfiguration": {
    "KmsEncryptionConfig": {
      "CmkType": {},
      "KmsKeyId": {}
    }
  },
  "PreloadDataConfig": {
    "PreloadDataType": {}
  },
  "ClientToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatastoreName|object|false|none|none|
|DatastoreTypeVersion|object|true|none|none|
|SseConfiguration|object|false|none|none|
|PreloadDataConfig|object|false|none|none|
|ClientToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_DeleteFHIRDatastoreResponse">DeleteFHIRDatastoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefhirdatastoreresponse"></a>
<a id="schema_DeleteFHIRDatastoreResponse"></a>
<a id="tocSdeletefhirdatastoreresponse"></a>
<a id="tocsdeletefhirdatastoreresponse"></a>

```json
{
  "DatastoreId": {},
  "DatastoreArn": {},
  "DatastoreStatus": {},
  "DatastoreEndpoint": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatastoreId|object|true|none|none|
|DatastoreArn|object|true|none|none|
|DatastoreStatus|object|true|none|none|
|DatastoreEndpoint|object|true|none|none|

<h2 id="tocS_DeleteFHIRDatastoreRequest">DeleteFHIRDatastoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefhirdatastorerequest"></a>
<a id="schema_DeleteFHIRDatastoreRequest"></a>
<a id="tocSdeletefhirdatastorerequest"></a>
<a id="tocsdeletefhirdatastorerequest"></a>

```json
{
  "DatastoreId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatastoreId|object|false|none|none|

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

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

<h2 id="tocS_DescribeFHIRDatastoreResponse">DescribeFHIRDatastoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefhirdatastoreresponse"></a>
<a id="schema_DescribeFHIRDatastoreResponse"></a>
<a id="tocSdescribefhirdatastoreresponse"></a>
<a id="tocsdescribefhirdatastoreresponse"></a>

```json
{
  "DatastoreProperties": {
    "DatastoreId": {},
    "DatastoreArn": {},
    "DatastoreName": {},
    "DatastoreStatus": {},
    "CreatedAt": {},
    "DatastoreTypeVersion": {},
    "DatastoreEndpoint": {},
    "SseConfiguration": {
      "KmsEncryptionConfig": {
        "CmkType": {},
        "KmsKeyId": {}
      }
    },
    "PreloadDataConfig": {
      "PreloadDataType": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatastoreProperties|object|true|none|none|

<h2 id="tocS_DescribeFHIRDatastoreRequest">DescribeFHIRDatastoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefhirdatastorerequest"></a>
<a id="schema_DescribeFHIRDatastoreRequest"></a>
<a id="tocSdescribefhirdatastorerequest"></a>
<a id="tocsdescribefhirdatastorerequest"></a>

```json
{
  "DatastoreId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatastoreId|object|false|none|none|

<h2 id="tocS_DescribeFHIRExportJobResponse">DescribeFHIRExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefhirexportjobresponse"></a>
<a id="schema_DescribeFHIRExportJobResponse"></a>
<a id="tocSdescribefhirexportjobresponse"></a>
<a id="tocsdescribefhirexportjobresponse"></a>

```json
{
  "ExportJobProperties": {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "SubmitTime": {},
    "EndTime": {},
    "DatastoreId": {},
    "OutputDataConfig": {
      "S3Configuration": {
        "S3Uri": {},
        "KmsKeyId": {}
      }
    },
    "DataAccessRoleArn": {},
    "Message": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportJobProperties|object|true|none|none|

<h2 id="tocS_DescribeFHIRExportJobRequest">DescribeFHIRExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefhirexportjobrequest"></a>
<a id="schema_DescribeFHIRExportJobRequest"></a>
<a id="tocSdescribefhirexportjobrequest"></a>
<a id="tocsdescribefhirexportjobrequest"></a>

```json
{
  "DatastoreId": {},
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatastoreId|object|true|none|none|
|JobId|object|true|none|none|

<h2 id="tocS_DescribeFHIRImportJobResponse">DescribeFHIRImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefhirimportjobresponse"></a>
<a id="schema_DescribeFHIRImportJobResponse"></a>
<a id="tocSdescribefhirimportjobresponse"></a>
<a id="tocsdescribefhirimportjobresponse"></a>

```json
{
  "ImportJobProperties": {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "SubmitTime": {},
    "EndTime": {},
    "DatastoreId": {},
    "InputDataConfig": {
      "S3Uri": {}
    },
    "JobOutputDataConfig": {
      "S3Configuration": {
        "S3Uri": {},
        "KmsKeyId": {}
      }
    },
    "DataAccessRoleArn": {},
    "Message": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportJobProperties|object|true|none|none|

<h2 id="tocS_DescribeFHIRImportJobRequest">DescribeFHIRImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefhirimportjobrequest"></a>
<a id="schema_DescribeFHIRImportJobRequest"></a>
<a id="tocSdescribefhirimportjobrequest"></a>
<a id="tocsdescribefhirimportjobrequest"></a>

```json
{
  "DatastoreId": {},
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatastoreId|object|true|none|none|
|JobId|object|true|none|none|

<h2 id="tocS_ListFHIRDatastoresResponse">ListFHIRDatastoresResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfhirdatastoresresponse"></a>
<a id="schema_ListFHIRDatastoresResponse"></a>
<a id="tocSlistfhirdatastoresresponse"></a>
<a id="tocslistfhirdatastoresresponse"></a>

```json
{
  "DatastorePropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatastorePropertiesList|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFHIRDatastoresRequest">ListFHIRDatastoresRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfhirdatastoresrequest"></a>
<a id="schema_ListFHIRDatastoresRequest"></a>
<a id="tocSlistfhirdatastoresrequest"></a>
<a id="tocslistfhirdatastoresrequest"></a>

```json
{
  "Filter": {
    "DatastoreName": {},
    "DatastoreStatus": {},
    "CreatedBefore": {},
    "CreatedAfter": {}
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

<h2 id="tocS_ListFHIRExportJobsResponse">ListFHIRExportJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfhirexportjobsresponse"></a>
<a id="schema_ListFHIRExportJobsResponse"></a>
<a id="tocSlistfhirexportjobsresponse"></a>
<a id="tocslistfhirexportjobsresponse"></a>

```json
{
  "ExportJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportJobPropertiesList|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFHIRExportJobsRequest">ListFHIRExportJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfhirexportjobsrequest"></a>
<a id="schema_ListFHIRExportJobsRequest"></a>
<a id="tocSlistfhirexportjobsrequest"></a>
<a id="tocslistfhirexportjobsrequest"></a>

```json
{
  "DatastoreId": {},
  "NextToken": {},
  "MaxResults": {},
  "JobName": {},
  "JobStatus": {},
  "SubmittedBefore": {},
  "SubmittedAfter": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatastoreId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|SubmittedBefore|object|false|none|none|
|SubmittedAfter|object|false|none|none|

<h2 id="tocS_ListFHIRImportJobsResponse">ListFHIRImportJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfhirimportjobsresponse"></a>
<a id="schema_ListFHIRImportJobsResponse"></a>
<a id="tocSlistfhirimportjobsresponse"></a>
<a id="tocslistfhirimportjobsresponse"></a>

```json
{
  "ImportJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportJobPropertiesList|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFHIRImportJobsRequest">ListFHIRImportJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfhirimportjobsrequest"></a>
<a id="schema_ListFHIRImportJobsRequest"></a>
<a id="tocSlistfhirimportjobsrequest"></a>
<a id="tocslistfhirimportjobsrequest"></a>

```json
{
  "DatastoreId": {},
  "NextToken": {},
  "MaxResults": {},
  "JobName": {},
  "JobStatus": {},
  "SubmittedBefore": {},
  "SubmittedAfter": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatastoreId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|SubmittedBefore|object|false|none|none|
|SubmittedAfter|object|false|none|none|

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

<h2 id="tocS_StartFHIRExportJobResponse">StartFHIRExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartfhirexportjobresponse"></a>
<a id="schema_StartFHIRExportJobResponse"></a>
<a id="tocSstartfhirexportjobresponse"></a>
<a id="tocsstartfhirexportjobresponse"></a>

```json
{
  "JobId": {},
  "JobStatus": {},
  "DatastoreId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|
|JobStatus|object|true|none|none|
|DatastoreId|object|false|none|none|

<h2 id="tocS_StartFHIRExportJobRequest">StartFHIRExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartfhirexportjobrequest"></a>
<a id="schema_StartFHIRExportJobRequest"></a>
<a id="tocSstartfhirexportjobrequest"></a>
<a id="tocsstartfhirexportjobrequest"></a>

```json
{
  "JobName": {},
  "OutputDataConfig": {
    "S3Configuration": {
      "S3Uri": {},
      "KmsKeyId": {}
    }
  },
  "DatastoreId": {},
  "DataAccessRoleArn": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|OutputDataConfig|object|true|none|none|
|DatastoreId|object|true|none|none|
|DataAccessRoleArn|object|true|none|none|
|ClientToken|object|true|none|none|

<h2 id="tocS_StartFHIRImportJobResponse">StartFHIRImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartfhirimportjobresponse"></a>
<a id="schema_StartFHIRImportJobResponse"></a>
<a id="tocSstartfhirimportjobresponse"></a>
<a id="tocsstartfhirimportjobresponse"></a>

```json
{
  "JobId": {},
  "JobStatus": {},
  "DatastoreId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|
|JobStatus|object|true|none|none|
|DatastoreId|object|false|none|none|

<h2 id="tocS_StartFHIRImportJobRequest">StartFHIRImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartfhirimportjobrequest"></a>
<a id="schema_StartFHIRImportJobRequest"></a>
<a id="tocSstartfhirimportjobrequest"></a>
<a id="tocsstartfhirimportjobrequest"></a>

```json
{
  "JobName": {},
  "InputDataConfig": {
    "S3Uri": {}
  },
  "JobOutputDataConfig": {
    "S3Configuration": {
      "S3Uri": {},
      "KmsKeyId": {}
    }
  },
  "DatastoreId": {},
  "DataAccessRoleArn": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|InputDataConfig|object|true|none|none|
|JobOutputDataConfig|[OutputDataConfig](#schemaoutputdataconfig)|true|none|The output data configuration that was supplied when the export job was created.|
|DatastoreId|object|true|none|none|
|DataAccessRoleArn|object|true|none|none|
|ClientToken|object|true|none|none|

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

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
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

<h2 id="tocS_ClientTokenString">ClientTokenString</h2>
<!-- backwards compatibility -->
<a id="schemaclienttokenstring"></a>
<a id="schema_ClientTokenString"></a>
<a id="tocSclienttokenstring"></a>
<a id="tocsclienttokenstring"></a>

```json
"string"
```

<h2 id="tocS_CmkType">CmkType</h2>
<!-- backwards compatibility -->
<a id="schemacmktype"></a>
<a id="schema_CmkType"></a>
<a id="tocScmktype"></a>
<a id="tocscmktype"></a>

```json
"CUSTOMER_MANAGED_KMS_KEY"
```

<h2 id="tocS_DatastoreName">DatastoreName</h2>
<!-- backwards compatibility -->
<a id="schemadatastorename"></a>
<a id="schema_DatastoreName"></a>
<a id="tocSdatastorename"></a>
<a id="tocsdatastorename"></a>

```json
"string"
```

<h2 id="tocS_FHIRVersion">FHIRVersion</h2>
<!-- backwards compatibility -->
<a id="schemafhirversion"></a>
<a id="schema_FHIRVersion"></a>
<a id="tocSfhirversion"></a>
<a id="tocsfhirversion"></a>

```json
"R4"
```

<h2 id="tocS_SseConfiguration">SseConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasseconfiguration"></a>
<a id="schema_SseConfiguration"></a>
<a id="tocSsseconfiguration"></a>
<a id="tocssseconfiguration"></a>

```json
{
  "KmsEncryptionConfig": {
    "CmkType": {},
    "KmsKeyId": {}
  }
}
```

 The server-side encryption key configuration for a customer provided encryption key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KmsEncryptionConfig|object|true|none|none|

<h2 id="tocS_PreloadDataConfig">PreloadDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemapreloaddataconfig"></a>
<a id="schema_PreloadDataConfig"></a>
<a id="tocSpreloaddataconfig"></a>
<a id="tocspreloaddataconfig"></a>

```json
{
  "PreloadDataType": {}
}
```

 The input properties for the preloaded Data Store. Only data preloaded from Synthea is supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PreloadDataType|object|true|none|none|

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

<h2 id="tocS_DatastoreId">DatastoreId</h2>
<!-- backwards compatibility -->
<a id="schemadatastoreid"></a>
<a id="schema_DatastoreId"></a>
<a id="tocSdatastoreid"></a>
<a id="tocsdatastoreid"></a>

```json
"string"
```

<h2 id="tocS_DatastoreArn">DatastoreArn</h2>
<!-- backwards compatibility -->
<a id="schemadatastorearn"></a>
<a id="schema_DatastoreArn"></a>
<a id="tocSdatastorearn"></a>
<a id="tocsdatastorearn"></a>

```json
"string"
```

<h2 id="tocS_DatastoreStatus">DatastoreStatus</h2>
<!-- backwards compatibility -->
<a id="schemadatastorestatus"></a>
<a id="schema_DatastoreStatus"></a>
<a id="tocSdatastorestatus"></a>
<a id="tocsdatastorestatus"></a>

```json
"CREATING"
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

<h2 id="tocS_DatastoreFilter">DatastoreFilter</h2>
<!-- backwards compatibility -->
<a id="schemadatastorefilter"></a>
<a id="schema_DatastoreFilter"></a>
<a id="tocSdatastorefilter"></a>
<a id="tocsdatastorefilter"></a>

```json
{
  "DatastoreName": {},
  "DatastoreStatus": {},
  "CreatedBefore": {},
  "CreatedAfter": {}
}
```

The filters applied to Data Store query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatastoreName|object|false|none|none|
|DatastoreStatus|object|false|none|none|
|CreatedBefore|object|false|none|none|
|CreatedAfter|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_DatastoreProperties">DatastoreProperties</h2>
<!-- backwards compatibility -->
<a id="schemadatastoreproperties"></a>
<a id="schema_DatastoreProperties"></a>
<a id="tocSdatastoreproperties"></a>
<a id="tocsdatastoreproperties"></a>

```json
{
  "DatastoreId": {},
  "DatastoreArn": {},
  "DatastoreName": {},
  "DatastoreStatus": {},
  "CreatedAt": {},
  "DatastoreTypeVersion": {},
  "DatastoreEndpoint": {},
  "SseConfiguration": {
    "KmsEncryptionConfig": {
      "CmkType": {},
      "KmsKeyId": {}
    }
  },
  "PreloadDataConfig": {
    "PreloadDataType": {}
  }
}
```

Displays the properties of the Data Store, including the ID, Arn, name, and the status of the Data Store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatastoreId|object|true|none|none|
|DatastoreArn|object|true|none|none|
|DatastoreName|object|false|none|none|
|DatastoreStatus|object|true|none|none|
|CreatedAt|object|false|none|none|
|DatastoreTypeVersion|object|true|none|none|
|DatastoreEndpoint|object|true|none|none|
|SseConfiguration|object|false|none|none|
|PreloadDataConfig|object|false|none|none|

<h2 id="tocS_DatastorePropertiesList">DatastorePropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemadatastorepropertieslist"></a>
<a id="schema_DatastorePropertiesList"></a>
<a id="tocSdatastorepropertieslist"></a>
<a id="tocsdatastorepropertieslist"></a>

```json
[
  {
    "DatastoreId": {},
    "DatastoreArn": {},
    "DatastoreName": {},
    "DatastoreStatus": {},
    "CreatedAt": {},
    "DatastoreTypeVersion": {},
    "DatastoreEndpoint": {},
    "SseConfiguration": {
      "KmsEncryptionConfig": {
        "CmkType": {},
        "KmsKeyId": {}
      }
    },
    "PreloadDataConfig": {
      "PreloadDataType": {}
    }
  }
]
```

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
"string"
```

<h2 id="tocS_ExportJobProperties">ExportJobProperties</h2>
<!-- backwards compatibility -->
<a id="schemaexportjobproperties"></a>
<a id="schema_ExportJobProperties"></a>
<a id="tocSexportjobproperties"></a>
<a id="tocsexportjobproperties"></a>

```json
{
  "JobId": {},
  "JobName": {},
  "JobStatus": {},
  "SubmitTime": {},
  "EndTime": {},
  "DatastoreId": {},
  "OutputDataConfig": {
    "S3Configuration": {
      "S3Uri": {},
      "KmsKeyId": {}
    }
  },
  "DataAccessRoleArn": {},
  "Message": {}
}
```

The properties of a FHIR export job, including the ID, ARN, name, and the status of the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|
|JobName|object|false|none|none|
|JobStatus|object|true|none|none|
|SubmitTime|object|true|none|none|
|EndTime|object|false|none|none|
|DatastoreId|object|true|none|none|
|OutputDataConfig|object|true|none|none|
|DataAccessRoleArn|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_ImportJobProperties">ImportJobProperties</h2>
<!-- backwards compatibility -->
<a id="schemaimportjobproperties"></a>
<a id="schema_ImportJobProperties"></a>
<a id="tocSimportjobproperties"></a>
<a id="tocsimportjobproperties"></a>

```json
{
  "JobId": {},
  "JobName": {},
  "JobStatus": {},
  "SubmitTime": {},
  "EndTime": {},
  "DatastoreId": {},
  "InputDataConfig": {
    "S3Uri": {}
  },
  "JobOutputDataConfig": {
    "S3Configuration": {
      "S3Uri": {},
      "KmsKeyId": {}
    }
  },
  "DataAccessRoleArn": {},
  "Message": {}
}
```

Displays the properties of the import job, including the ID, Arn, Name, and the status of the Data Store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|
|JobName|object|false|none|none|
|JobStatus|object|true|none|none|
|SubmitTime|object|true|none|none|
|EndTime|object|false|none|none|
|DatastoreId|object|true|none|none|
|InputDataConfig|object|true|none|none|
|JobOutputDataConfig|[OutputDataConfig](#schemaoutputdataconfig)|false|none|The output data configuration that was supplied when the export job was created.|
|DataAccessRoleArn|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_EncryptionKeyID">EncryptionKeyID</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionkeyid"></a>
<a id="schema_EncryptionKeyID"></a>
<a id="tocSencryptionkeyid"></a>
<a id="tocsencryptionkeyid"></a>

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

<h2 id="tocS_OutputDataConfig">OutputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoutputdataconfig"></a>
<a id="schema_OutputDataConfig"></a>
<a id="tocSoutputdataconfig"></a>
<a id="tocsoutputdataconfig"></a>

```json
{
  "S3Configuration": {
    "S3Uri": {},
    "KmsKeyId": {}
  }
}
```

The output data configuration that was supplied when the export job was created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Configuration|object|false|none|none|

<h2 id="tocS_IamRoleArn">IamRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamrolearn"></a>
<a id="schema_IamRoleArn"></a>
<a id="tocSiamrolearn"></a>
<a id="tocsiamrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_ExportJobPropertiesList">ExportJobPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemaexportjobpropertieslist"></a>
<a id="schema_ExportJobPropertiesList"></a>
<a id="tocSexportjobpropertieslist"></a>
<a id="tocsexportjobpropertieslist"></a>

```json
[
  {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "SubmitTime": {},
    "EndTime": {},
    "DatastoreId": {},
    "OutputDataConfig": {
      "S3Configuration": {
        "S3Uri": {},
        "KmsKeyId": {}
      }
    },
    "DataAccessRoleArn": {},
    "Message": {}
  }
]
```

<h2 id="tocS_InputDataConfig">InputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemainputdataconfig"></a>
<a id="schema_InputDataConfig"></a>
<a id="tocSinputdataconfig"></a>
<a id="tocsinputdataconfig"></a>

```json
{
  "S3Uri": {}
}
```

 The input properties for an import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|false|none|none|

<h2 id="tocS_ImportJobPropertiesList">ImportJobPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemaimportjobpropertieslist"></a>
<a id="schema_ImportJobPropertiesList"></a>
<a id="tocSimportjobpropertieslist"></a>
<a id="tocsimportjobpropertieslist"></a>

```json
[
  {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "SubmitTime": {},
    "EndTime": {},
    "DatastoreId": {},
    "InputDataConfig": {
      "S3Uri": {}
    },
    "JobOutputDataConfig": {
      "S3Configuration": {
        "S3Uri": {},
        "KmsKeyId": {}
      }
    },
    "DataAccessRoleArn": {},
    "Message": {}
  }
]
```

<h2 id="tocS_S3Uri">S3Uri</h2>
<!-- backwards compatibility -->
<a id="schemas3uri"></a>
<a id="schema_S3Uri"></a>
<a id="tocSs3uri"></a>
<a id="tocss3uri"></a>

```json
"string"
```

<h2 id="tocS_KmsEncryptionConfig">KmsEncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemakmsencryptionconfig"></a>
<a id="schema_KmsEncryptionConfig"></a>
<a id="tocSkmsencryptionconfig"></a>
<a id="tocskmsencryptionconfig"></a>

```json
{
  "CmkType": {},
  "KmsKeyId": {}
}
```

 The customer-managed-key(CMK) used when creating a Data Store. If a customer owned key is not specified, an AWS owned key will be used for encryption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CmkType|object|true|none|none|
|KmsKeyId|object|false|none|none|

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

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

<h2 id="tocS_S3Configuration">S3Configuration</h2>
<!-- backwards compatibility -->
<a id="schemas3configuration"></a>
<a id="schema_S3Configuration"></a>
<a id="tocSs3configuration"></a>
<a id="tocss3configuration"></a>

```json
{
  "S3Uri": {},
  "KmsKeyId": {}
}
```

 The configuration of the S3 bucket for either an import or export job. This includes assigning permissions for access.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|
|KmsKeyId|object|true|none|none|

<h2 id="tocS_PreloadDataType">PreloadDataType</h2>
<!-- backwards compatibility -->
<a id="schemapreloaddatatype"></a>
<a id="schema_PreloadDataType"></a>
<a id="tocSpreloaddatatype"></a>
<a id="tocspreloaddatatype"></a>

```json
"SYNTHEA"
```

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

 A tag is a label consisting of a user-defined key and value. The form for tags is {"Key", "Value"}

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
