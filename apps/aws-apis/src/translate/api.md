<h1 id="amazon-translate">Amazon Translate v2017-07-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provides translation of the input content from the source language to the target language.

Base URLs:

* <a href="http://translate.us-east-1.amazonaws.com">http://translate.us-east-1.amazonaws.com</a> - The Amazon Translate multi-region endpoint

* <a href="https://translate.us-east-1.amazonaws.com">https://translate.us-east-1.amazonaws.com</a> - The Amazon Translate multi-region endpoint

* <a href="http://translate.cn-north-1.amazonaws.com.cn">http://translate.cn-north-1.amazonaws.com.cn</a> - The Amazon Translate endpoint for China (Beijing) and China (Ningxia)

* <a href="https://translate.cn-north-1.amazonaws.com.cn">https://translate.cn-north-1.amazonaws.com.cn</a> - The Amazon Translate endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/translate/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-translate-default">Default</h1>

## CreateParallelData

<a id="opIdCreateParallelData"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.CreateParallelData' \
  -d '{
    "Name": {},
    "Description": {},
    "ParallelDataConfig": {
      "S3Uri": {},
      "Format": {}
    },
    "EncryptionKey": {
      "Type": {},
      "Id": {}
    },
    "ClientToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData`

Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples that show how you want segments of text to be translated. By adding parallel data, you can influence the style, tone, and word choice in your translation output.

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "ParallelDataConfig": {
    "S3Uri": {},
    "Format": {}
  },
  "EncryptionKey": {
    "Type": {},
    "Id": {}
  },
  "ClientToken": {},
  "Tags": {}
}
```

<h3 id="createparalleldata-parameters">Parameters</h3>

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
|body|body|[CreateParallelDataRequest](#schemacreateparalleldatarequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» ParallelDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » Format|body|object|true|none|
|» EncryptionKey|body|[EncryptionKey](#schemaencryptionkey)|false|The encryption key used to encrypt this object.|
|» ClientToken|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.CreateParallelData|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "Status": {}
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

<h3 id="createparalleldata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateParallelDataResponse](#schemacreateparalleldataresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|487|487|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteParallelData

<a id="opIdDeleteParallelData"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.DeleteParallelData' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData`

Deletes a parallel data resource in Amazon Translate.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deleteparalleldata-parameters">Parameters</h3>

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
|body|body|[DeleteParallelDataRequest](#schemadeleteparalleldatarequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.DeleteParallelData|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "Status": {}
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

<h3 id="deleteparalleldata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteParallelDataResponse](#schemadeleteparalleldataresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTerminology

<a id="opIdDeleteTerminology"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.DeleteTerminology' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology`

A synchronous action that deletes a custom terminology.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deleteterminology-parameters">Parameters</h3>

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
|body|body|[DeleteTerminologyRequest](#schemadeleteterminologyrequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.DeleteTerminology|

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

<h3 id="deleteterminology-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTextTranslationJob

<a id="opIdDescribeTextTranslationJob"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.DescribeTextTranslationJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob`

Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describetexttranslationjob-parameters">Parameters</h3>

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
|body|body|[DescribeTextTranslationJobRequest](#schemadescribetexttranslationjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.DescribeTextTranslationJob|

> Example responses

> 200 Response

```json
{
  "TextTranslationJobProperties": {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "JobDetails": {
      "TranslatedDocumentsCount": {},
      "DocumentsWithErrorsCount": {},
      "InputDocumentsCount": {}
    },
    "SourceLanguageCode": {},
    "TargetLanguageCodes": {},
    "TerminologyNames": {},
    "ParallelDataNames": {},
    "Message": {},
    "SubmittedTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "ContentType": {}
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "EncryptionKey": {
        "Type": {},
        "Id": {}
      }
    },
    "DataAccessRoleArn": {},
    "Settings": {
      "Formality": {},
      "Profanity": {}
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

<h3 id="describetexttranslationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTextTranslationJobResponse](#schemadescribetexttranslationjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetParallelData

<a id="opIdGetParallelData"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.GetParallelData' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData`

Provides information about a parallel data resource.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="getparalleldata-parameters">Parameters</h3>

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
|body|body|[GetParallelDataRequest](#schemagetparalleldatarequest)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.GetParallelData|

> Example responses

> 200 Response

```json
{
  "ParallelDataProperties": {
    "Name": {},
    "Arn": {},
    "Description": {},
    "Status": {},
    "SourceLanguageCode": {},
    "TargetLanguageCodes": {},
    "ParallelDataConfig": {
      "S3Uri": {},
      "Format": {}
    },
    "Message": {},
    "ImportedDataSize": {},
    "ImportedRecordCount": {},
    "FailedRecordCount": {},
    "SkippedRecordCount": {},
    "EncryptionKey": {
      "Type": {},
      "Id": {}
    },
    "CreatedAt": {},
    "LastUpdatedAt": {},
    "LatestUpdateAttemptStatus": {},
    "LatestUpdateAttemptAt": {}
  },
  "DataLocation": {
    "RepositoryType": {},
    "Location": {}
  },
  "AuxiliaryDataLocation": {
    "RepositoryType": {},
    "Location": {}
  },
  "LatestUpdateAttemptAuxiliaryDataLocation": {
    "RepositoryType": {},
    "Location": {}
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

<h3 id="getparalleldata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetParallelDataResponse](#schemagetparalleldataresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTerminology

<a id="opIdGetTerminology"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.GetTerminology' \
  -d '{
    "Name": {},
    "TerminologyDataFormat": {}
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology`

Retrieves a custom terminology.

> Body parameter

```json
{
  "Name": {},
  "TerminologyDataFormat": {}
}
```

<h3 id="getterminology-parameters">Parameters</h3>

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
|body|body|[GetTerminologyRequest](#schemagetterminologyrequest)|true|none|
|» Name|body|object|true|none|
|» TerminologyDataFormat|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.GetTerminology|

> Example responses

> 200 Response

```json
{
  "TerminologyProperties": {
    "Name": {},
    "Description": {},
    "Arn": {},
    "SourceLanguageCode": {},
    "TargetLanguageCodes": {},
    "EncryptionKey": {
      "Type": {},
      "Id": {}
    },
    "SizeBytes": {},
    "TermCount": {},
    "CreatedAt": {},
    "LastUpdatedAt": {},
    "Directionality": {},
    "Message": {},
    "SkippedTermCount": {},
    "Format": {}
  },
  "TerminologyDataLocation": {
    "RepositoryType": {},
    "Location": {}
  },
  "AuxiliaryDataLocation": {
    "RepositoryType": {},
    "Location": {}
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

<h3 id="getterminology-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTerminologyResponse](#schemagetterminologyresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportTerminology

<a id="opIdImportTerminology"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.ImportTerminology' \
  -d '{
    "Name": {},
    "MergeStrategy": {},
    "Description": {},
    "TerminologyData": {
      "File": {},
      "Format": {},
      "Directionality": {}
    },
    "EncryptionKey": {
      "Type": {},
      "Id": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology`

<p>Creates or updates a custom terminology, depending on whether one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. The only supported merge strategy is OVERWRITE, where the imported terminology overwrites the existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology takes up to 10 minutes to fully propagate. After that, translations have access to the new terminology.</p>

> Body parameter

```json
{
  "Name": {},
  "MergeStrategy": {},
  "Description": {},
  "TerminologyData": {
    "File": {},
    "Format": {},
    "Directionality": {}
  },
  "EncryptionKey": {
    "Type": {},
    "Id": {}
  },
  "Tags": {}
}
```

<h3 id="importterminology-parameters">Parameters</h3>

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
|body|body|[ImportTerminologyRequest](#schemaimportterminologyrequest)|true|none|
|» Name|body|object|true|none|
|» MergeStrategy|body|object|true|none|
|» Description|body|object|false|none|
|» TerminologyData|body|object|true|none|
|» » File|body|object|true|none|
|» » Format|body|object|true|none|
|» » Directionality|body|object|false|none|
|» EncryptionKey|body|object|false|none|
|» » Type|body|object|true|none|
|» » Id|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.ImportTerminology|

> Example responses

> 200 Response

```json
{
  "TerminologyProperties": {
    "Name": {},
    "Description": {},
    "Arn": {},
    "SourceLanguageCode": {},
    "TargetLanguageCodes": {},
    "EncryptionKey": {
      "Type": {},
      "Id": {}
    },
    "SizeBytes": {},
    "TermCount": {},
    "CreatedAt": {},
    "LastUpdatedAt": {},
    "Directionality": {},
    "Message": {},
    "SkippedTermCount": {},
    "Format": {}
  },
  "AuxiliaryDataLocation": {
    "RepositoryType": {},
    "Location": {}
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

<h3 id="importterminology-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportTerminologyResponse](#schemaimportterminologyresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLanguages

<a id="opIdListLanguages"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.ListLanguages' \
  -d '{
    "DisplayLanguageCode": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages`

Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports.

> Body parameter

```json
{
  "DisplayLanguageCode": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listlanguages-parameters">Parameters</h3>

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
|body|body|[ListLanguagesRequest](#schemalistlanguagesrequest)|true|none|
|» DisplayLanguageCode|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.ListLanguages|

> Example responses

> 200 Response

```json
{
  "Languages": {},
  "DisplayLanguageCode": {},
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

<h3 id="listlanguages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLanguagesResponse](#schemalistlanguagesresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|UnsupportedDisplayLanguageCodeException|[UnsupportedDisplayLanguageCodeException](#schemaunsupporteddisplaylanguagecodeexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListParallelData

<a id="opIdListParallelData"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.ListParallelData' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData`

Provides a list of your parallel data resources in Amazon Translate.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listparalleldata-parameters">Parameters</h3>

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
|body|body|[ListParallelDataRequest](#schemalistparalleldatarequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.ListParallelData|

> Example responses

> 200 Response

```json
{
  "ParallelDataPropertiesList": {},
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

<h3 id="listparalleldata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListParallelDataResponse](#schemalistparalleldataresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.ListTagsForResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource`

Lists all tags associated with a given Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.

> Body parameter

```json
{
  "ResourceArn": {}
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
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.ListTagsForResource|

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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTerminologies

<a id="opIdListTerminologies"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.ListTerminologies' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies`

Provides a list of custom terminologies associated with your account.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listterminologies-parameters">Parameters</h3>

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
|body|body|[ListTerminologiesRequest](#schemalistterminologiesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.ListTerminologies|

> Example responses

> 200 Response

```json
{
  "TerminologyPropertiesList": {},
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

<h3 id="listterminologies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTerminologiesResponse](#schemalistterminologiesresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTextTranslationJobs

<a id="opIdListTextTranslationJobs"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.ListTextTranslationJobs' \
  -d '{
    "Filter": {
      "JobName": {},
      "JobStatus": {},
      "SubmittedBeforeTime": {},
      "SubmittedAfterTime": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs`

Gets a list of the batch translation jobs that you have submitted.

> Body parameter

```json
{
  "Filter": {
    "JobName": {},
    "JobStatus": {},
    "SubmittedBeforeTime": {},
    "SubmittedAfterTime": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listtexttranslationjobs-parameters">Parameters</h3>

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
|body|body|[ListTextTranslationJobsRequest](#schemalisttexttranslationjobsrequest)|true|none|
|» Filter|body|object|false|none|
|» » JobName|body|object|false|none|
|» » JobStatus|body|object|false|none|
|» » SubmittedBeforeTime|body|object|false|none|
|» » SubmittedAfterTime|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.ListTextTranslationJobs|

> Example responses

> 200 Response

```json
{
  "TextTranslationJobPropertiesList": {},
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

<h3 id="listtexttranslationjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTextTranslationJobsResponse](#schemalisttexttranslationjobsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidFilterException|[InvalidFilterException](#schemainvalidfilterexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartTextTranslationJob

<a id="opIdStartTextTranslationJob"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.StartTextTranslationJob' \
  -d '{
    "JobName": {},
    "InputDataConfig": {
      "S3Uri": {},
      "ContentType": {}
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "EncryptionKey": {
        "Type": {},
        "Id": {}
      }
    },
    "DataAccessRoleArn": {},
    "SourceLanguageCode": {},
    "TargetLanguageCodes": {},
    "TerminologyNames": {},
    "ParallelDataNames": {},
    "ClientToken": {},
    "Settings": {
      "Formality": {},
      "Profanity": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob`

<p>Starts an asynchronous batch translation job. Use batch translation jobs to translate large volumes of text across multiple documents at once. For batch translation, you can input documents with different source languages (specify <code>auto</code> as the source language). You can specify one or more target languages. Batch translation translates each input document into each of the target languages. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/async.html">Asynchronous batch processing</a>.</p> <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>

> Body parameter

```json
{
  "JobName": {},
  "InputDataConfig": {
    "S3Uri": {},
    "ContentType": {}
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "EncryptionKey": {
      "Type": {},
      "Id": {}
    }
  },
  "DataAccessRoleArn": {},
  "SourceLanguageCode": {},
  "TargetLanguageCodes": {},
  "TerminologyNames": {},
  "ParallelDataNames": {},
  "ClientToken": {},
  "Settings": {
    "Formality": {},
    "Profanity": {}
  }
}
```

<h3 id="starttexttranslationjob-parameters">Parameters</h3>

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
|body|body|[StartTextTranslationJobRequest](#schemastarttexttranslationjobrequest)|true|none|
|» JobName|body|object|false|none|
|» InputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » ContentType|body|object|true|none|
|» OutputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » EncryptionKey|body|[EncryptionKey](#schemaencryptionkey)|false|The encryption key used to encrypt this object.|
|» DataAccessRoleArn|body|object|true|none|
|» SourceLanguageCode|body|object|true|none|
|» TargetLanguageCodes|body|object|true|none|
|» TerminologyNames|body|object|false|none|
|» ParallelDataNames|body|object|false|none|
|» ClientToken|body|object|true|none|
|» Settings|body|object|false|none|
|» » Formality|body|object|false|none|
|» » Profanity|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.StartTextTranslationJob|

> Example responses

> 200 Response

```json
{
  "JobId": {},
  "JobStatus": {}
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

<h3 id="starttexttranslationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartTextTranslationJobResponse](#schemastarttexttranslationjobresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|UnsupportedLanguagePairException|[UnsupportedLanguagePairException](#schemaunsupportedlanguagepairexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopTextTranslationJob

<a id="opIdStopTextTranslationJob"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.StopTextTranslationJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob`

<p>Stops an asynchronous batch translation job that is in progress.</p> <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the <code>STOPPED</code> state.</p> <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a> operations to get a batch translation job's <code>JobId</code>.</p>

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="stoptexttranslationjob-parameters">Parameters</h3>

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
|body|body|[StopTextTranslationJobRequest](#schemastoptexttranslationjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.StopTextTranslationJob|

> Example responses

> 200 Response

```json
{
  "JobId": {},
  "JobStatus": {}
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

<h3 id="stoptexttranslationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopTextTranslationJobResponse](#schemastoptexttranslationjobresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.TagResource`

Associates a specific tag with a resource. A tag is a key-value pair that adds as a metadata to a resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.

> Body parameter

```json
{
  "ResourceArn": {},
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
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.TagResource|

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
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TranslateDocument

<a id="opIdTranslateDocument"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.TranslateDocument' \
  -d '{
    "Document": {
      "Content": {},
      "ContentType": {}
    },
    "TerminologyNames": {},
    "SourceLanguageCode": {},
    "TargetLanguageCode": {},
    "Settings": {
      "Formality": {},
      "Profanity": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument`

<p>Translates the input document from the source language to the target language. This synchronous operation supports plain text or HTML for the input document. <code>TranslateDocument</code> supports translations from English to any supported language, and from any supported language to English. Therefore, specify either the source language code or the target language code as “en” (English). </p> <p> <code>TranslateDocument</code> does not support language auto-detection. </p> <p> If you set the <code>Formality</code> parameter, the request will fail if the target language does not support formality. For a list of target languages that support formality, see <a href="https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-formality.html">Setting formality</a>. </p>

> Body parameter

```json
{
  "Document": {
    "Content": {},
    "ContentType": {}
  },
  "TerminologyNames": {},
  "SourceLanguageCode": {},
  "TargetLanguageCode": {},
  "Settings": {
    "Formality": {},
    "Profanity": {}
  }
}
```

<h3 id="translatedocument-parameters">Parameters</h3>

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
|body|body|[TranslateDocumentRequest](#schematranslatedocumentrequest)|true|none|
|» Document|body|object|true|none|
|» » Content|body|object|true|none|
|» » ContentType|body|object|true|none|
|» TerminologyNames|body|object|false|none|
|» SourceLanguageCode|body|object|true|none|
|» TargetLanguageCode|body|object|true|none|
|» Settings|body|[TranslationSettings](#schematranslationsettings)|false|Settings to configure your translation output, including the option to set the formality level of the output text and the option to mask profane words and phrases.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.TranslateDocument|

> Example responses

> 200 Response

```json
{
  "TranslatedDocument": {
    "Content": {}
  },
  "SourceLanguageCode": {},
  "TargetLanguageCode": {},
  "AppliedTerminologies": {},
  "AppliedSettings": {
    "Formality": {},
    "Profanity": {}
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

<h3 id="translatedocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TranslateDocumentResponse](#schematranslatedocumentresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|UnsupportedLanguagePairException|[UnsupportedLanguagePairException](#schemaunsupportedlanguagepairexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TranslateText

<a id="opIdTranslateText"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.TranslateText' \
  -d '{
    "Text": {},
    "TerminologyNames": {},
    "SourceLanguageCode": {},
    "TargetLanguageCode": {},
    "Settings": {
      "Formality": {},
      "Profanity": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText`

Translates input text from the source language to the target language. For a list of available languages and language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.

> Body parameter

```json
{
  "Text": {},
  "TerminologyNames": {},
  "SourceLanguageCode": {},
  "TargetLanguageCode": {},
  "Settings": {
    "Formality": {},
    "Profanity": {}
  }
}
```

<h3 id="translatetext-parameters">Parameters</h3>

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
|body|body|[TranslateTextRequest](#schematranslatetextrequest)|true|none|
|» Text|body|object|true|none|
|» TerminologyNames|body|object|false|none|
|» SourceLanguageCode|body|object|true|none|
|» TargetLanguageCode|body|object|true|none|
|» Settings|body|object|false|none|
|» » Formality|body|object|false|none|
|» » Profanity|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.TranslateText|

> Example responses

> 200 Response

```json
{
  "TranslatedText": {},
  "SourceLanguageCode": {},
  "TargetLanguageCode": {},
  "AppliedTerminologies": {},
  "AppliedSettings": {
    "Formality": {},
    "Profanity": {}
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

> 487 Response

```json
null
```

<h3 id="translatetext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TranslateTextResponse](#schematranslatetextresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|UnsupportedLanguagePairException|[UnsupportedLanguagePairException](#schemaunsupportedlanguagepairexception)|
|484|484|DetectedLanguageLowConfidenceException|[DetectedLanguageLowConfidenceException](#schemadetectedlanguagelowconfidenceexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|487|487|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource`

Removes a specific tag associated with an Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.

> Body parameter

```json
{
  "ResourceArn": {},
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
|» ResourceArn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateParallelData

<a id="opIdUpdateParallelData"></a>

> Code samples

```bash
curl 'https://translate.us-east-1.amazonaws.com/#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSShineFrontendService_20170701.UpdateParallelData' \
  -d '{
    "Name": {},
    "Description": {},
    "ParallelDataConfig": {
      "S3Uri": {},
      "Format": {}
    },
    "ClientToken": {}
  }'
```

`POST /#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData`

Updates a previously created parallel data resource by importing a new input file from Amazon S3.

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "ParallelDataConfig": {
    "S3Uri": {},
    "Format": {}
  },
  "ClientToken": {}
}
```

<h3 id="updateparalleldata-parameters">Parameters</h3>

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
|body|body|[UpdateParallelDataRequest](#schemaupdateparalleldatarequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» ParallelDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » Format|body|object|true|none|
|» ClientToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSShineFrontendService_20170701.UpdateParallelData|

> Example responses

> 200 Response

```json
{
  "Name": {},
  "Status": {},
  "LatestUpdateAttemptStatus": {},
  "LatestUpdateAttemptAt": {}
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

<h3 id="updateparalleldata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateParallelDataResponse](#schemaupdateparalleldataresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateParallelDataResponse">CreateParallelDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateparalleldataresponse"></a>
<a id="schema_CreateParallelDataResponse"></a>
<a id="tocScreateparalleldataresponse"></a>
<a id="tocscreateparalleldataresponse"></a>

```json
{
  "Name": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_CreateParallelDataRequest">CreateParallelDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateparalleldatarequest"></a>
<a id="schema_CreateParallelDataRequest"></a>
<a id="tocScreateparalleldatarequest"></a>
<a id="tocscreateparalleldatarequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "ParallelDataConfig": {
    "S3Uri": {},
    "Format": {}
  },
  "EncryptionKey": {
    "Type": {},
    "Id": {}
  },
  "ClientToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|ParallelDataConfig|object|true|none|none|
|EncryptionKey|[EncryptionKey](#schemaencryptionkey)|false|none|The encryption key used to encrypt this object.|
|ClientToken|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_InvalidParameterValueException">InvalidParameterValueException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametervalueexception"></a>
<a id="schema_InvalidParameterValueException"></a>
<a id="tocSinvalidparametervalueexception"></a>
<a id="tocsinvalidparametervalueexception"></a>

```json
null
```

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

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

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

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

<h2 id="tocS_DeleteParallelDataResponse">DeleteParallelDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteparalleldataresponse"></a>
<a id="schema_DeleteParallelDataResponse"></a>
<a id="tocSdeleteparalleldataresponse"></a>
<a id="tocsdeleteparalleldataresponse"></a>

```json
{
  "Name": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_DeleteParallelDataRequest">DeleteParallelDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteparalleldatarequest"></a>
<a id="schema_DeleteParallelDataRequest"></a>
<a id="tocSdeleteparalleldatarequest"></a>
<a id="tocsdeleteparalleldatarequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteTerminologyRequest">DeleteTerminologyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteterminologyrequest"></a>
<a id="schema_DeleteTerminologyRequest"></a>
<a id="tocSdeleteterminologyrequest"></a>
<a id="tocsdeleteterminologyrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DescribeTextTranslationJobResponse">DescribeTextTranslationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetexttranslationjobresponse"></a>
<a id="schema_DescribeTextTranslationJobResponse"></a>
<a id="tocSdescribetexttranslationjobresponse"></a>
<a id="tocsdescribetexttranslationjobresponse"></a>

```json
{
  "TextTranslationJobProperties": {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "JobDetails": {
      "TranslatedDocumentsCount": {},
      "DocumentsWithErrorsCount": {},
      "InputDocumentsCount": {}
    },
    "SourceLanguageCode": {},
    "TargetLanguageCodes": {},
    "TerminologyNames": {},
    "ParallelDataNames": {},
    "Message": {},
    "SubmittedTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "ContentType": {}
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "EncryptionKey": {
        "Type": {},
        "Id": {}
      }
    },
    "DataAccessRoleArn": {},
    "Settings": {
      "Formality": {},
      "Profanity": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TextTranslationJobProperties|object|false|none|none|

<h2 id="tocS_DescribeTextTranslationJobRequest">DescribeTextTranslationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetexttranslationjobrequest"></a>
<a id="schema_DescribeTextTranslationJobRequest"></a>
<a id="tocSdescribetexttranslationjobrequest"></a>
<a id="tocsdescribetexttranslationjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_GetParallelDataResponse">GetParallelDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetparalleldataresponse"></a>
<a id="schema_GetParallelDataResponse"></a>
<a id="tocSgetparalleldataresponse"></a>
<a id="tocsgetparalleldataresponse"></a>

```json
{
  "ParallelDataProperties": {
    "Name": {},
    "Arn": {},
    "Description": {},
    "Status": {},
    "SourceLanguageCode": {},
    "TargetLanguageCodes": {},
    "ParallelDataConfig": {
      "S3Uri": {},
      "Format": {}
    },
    "Message": {},
    "ImportedDataSize": {},
    "ImportedRecordCount": {},
    "FailedRecordCount": {},
    "SkippedRecordCount": {},
    "EncryptionKey": {
      "Type": {},
      "Id": {}
    },
    "CreatedAt": {},
    "LastUpdatedAt": {},
    "LatestUpdateAttemptStatus": {},
    "LatestUpdateAttemptAt": {}
  },
  "DataLocation": {
    "RepositoryType": {},
    "Location": {}
  },
  "AuxiliaryDataLocation": {
    "RepositoryType": {},
    "Location": {}
  },
  "LatestUpdateAttemptAuxiliaryDataLocation": {
    "RepositoryType": {},
    "Location": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParallelDataProperties|object|false|none|none|
|DataLocation|object|false|none|none|
|AuxiliaryDataLocation|object|false|none|none|
|LatestUpdateAttemptAuxiliaryDataLocation|object|false|none|none|

<h2 id="tocS_GetParallelDataRequest">GetParallelDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetparalleldatarequest"></a>
<a id="schema_GetParallelDataRequest"></a>
<a id="tocSgetparalleldatarequest"></a>
<a id="tocsgetparalleldatarequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_GetTerminologyResponse">GetTerminologyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetterminologyresponse"></a>
<a id="schema_GetTerminologyResponse"></a>
<a id="tocSgetterminologyresponse"></a>
<a id="tocsgetterminologyresponse"></a>

```json
{
  "TerminologyProperties": {
    "Name": {},
    "Description": {},
    "Arn": {},
    "SourceLanguageCode": {},
    "TargetLanguageCodes": {},
    "EncryptionKey": {
      "Type": {},
      "Id": {}
    },
    "SizeBytes": {},
    "TermCount": {},
    "CreatedAt": {},
    "LastUpdatedAt": {},
    "Directionality": {},
    "Message": {},
    "SkippedTermCount": {},
    "Format": {}
  },
  "TerminologyDataLocation": {
    "RepositoryType": {},
    "Location": {}
  },
  "AuxiliaryDataLocation": {
    "RepositoryType": {},
    "Location": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TerminologyProperties|object|false|none|none|
|TerminologyDataLocation|object|false|none|none|
|AuxiliaryDataLocation|object|false|none|none|

<h2 id="tocS_GetTerminologyRequest">GetTerminologyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetterminologyrequest"></a>
<a id="schema_GetTerminologyRequest"></a>
<a id="tocSgetterminologyrequest"></a>
<a id="tocsgetterminologyrequest"></a>

```json
{
  "Name": {},
  "TerminologyDataFormat": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|TerminologyDataFormat|object|false|none|none|

<h2 id="tocS_ImportTerminologyResponse">ImportTerminologyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportterminologyresponse"></a>
<a id="schema_ImportTerminologyResponse"></a>
<a id="tocSimportterminologyresponse"></a>
<a id="tocsimportterminologyresponse"></a>

```json
{
  "TerminologyProperties": {
    "Name": {},
    "Description": {},
    "Arn": {},
    "SourceLanguageCode": {},
    "TargetLanguageCodes": {},
    "EncryptionKey": {
      "Type": {},
      "Id": {}
    },
    "SizeBytes": {},
    "TermCount": {},
    "CreatedAt": {},
    "LastUpdatedAt": {},
    "Directionality": {},
    "Message": {},
    "SkippedTermCount": {},
    "Format": {}
  },
  "AuxiliaryDataLocation": {
    "RepositoryType": {},
    "Location": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TerminologyProperties|object|false|none|none|
|AuxiliaryDataLocation|object|false|none|none|

<h2 id="tocS_ImportTerminologyRequest">ImportTerminologyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportterminologyrequest"></a>
<a id="schema_ImportTerminologyRequest"></a>
<a id="tocSimportterminologyrequest"></a>
<a id="tocsimportterminologyrequest"></a>

```json
{
  "Name": {},
  "MergeStrategy": {},
  "Description": {},
  "TerminologyData": {
    "File": {},
    "Format": {},
    "Directionality": {}
  },
  "EncryptionKey": {
    "Type": {},
    "Id": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|MergeStrategy|object|true|none|none|
|Description|object|false|none|none|
|TerminologyData|object|true|none|none|
|EncryptionKey|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ListLanguagesResponse">ListLanguagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlanguagesresponse"></a>
<a id="schema_ListLanguagesResponse"></a>
<a id="tocSlistlanguagesresponse"></a>
<a id="tocslistlanguagesresponse"></a>

```json
{
  "Languages": {},
  "DisplayLanguageCode": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Languages|object|false|none|none|
|DisplayLanguageCode|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLanguagesRequest">ListLanguagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlanguagesrequest"></a>
<a id="schema_ListLanguagesRequest"></a>
<a id="tocSlistlanguagesrequest"></a>
<a id="tocslistlanguagesrequest"></a>

```json
{
  "DisplayLanguageCode": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisplayLanguageCode|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_UnsupportedDisplayLanguageCodeException">UnsupportedDisplayLanguageCodeException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupporteddisplaylanguagecodeexception"></a>
<a id="schema_UnsupportedDisplayLanguageCodeException"></a>
<a id="tocSunsupporteddisplaylanguagecodeexception"></a>
<a id="tocsunsupporteddisplaylanguagecodeexception"></a>

```json
null
```

<h2 id="tocS_ListParallelDataResponse">ListParallelDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistparalleldataresponse"></a>
<a id="schema_ListParallelDataResponse"></a>
<a id="tocSlistparalleldataresponse"></a>
<a id="tocslistparalleldataresponse"></a>

```json
{
  "ParallelDataPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParallelDataPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListParallelDataRequest">ListParallelDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistparalleldatarequest"></a>
<a id="schema_ListParallelDataRequest"></a>
<a id="tocSlistparalleldatarequest"></a>
<a id="tocslistparalleldatarequest"></a>

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
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_ListTerminologiesResponse">ListTerminologiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistterminologiesresponse"></a>
<a id="schema_ListTerminologiesResponse"></a>
<a id="tocSlistterminologiesresponse"></a>
<a id="tocslistterminologiesresponse"></a>

```json
{
  "TerminologyPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TerminologyPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTerminologiesRequest">ListTerminologiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistterminologiesrequest"></a>
<a id="schema_ListTerminologiesRequest"></a>
<a id="tocSlistterminologiesrequest"></a>
<a id="tocslistterminologiesrequest"></a>

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

<h2 id="tocS_ListTextTranslationJobsResponse">ListTextTranslationJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttexttranslationjobsresponse"></a>
<a id="schema_ListTextTranslationJobsResponse"></a>
<a id="tocSlisttexttranslationjobsresponse"></a>
<a id="tocslisttexttranslationjobsresponse"></a>

```json
{
  "TextTranslationJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TextTranslationJobPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTextTranslationJobsRequest">ListTextTranslationJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttexttranslationjobsrequest"></a>
<a id="schema_ListTextTranslationJobsRequest"></a>
<a id="tocSlisttexttranslationjobsrequest"></a>
<a id="tocslisttexttranslationjobsrequest"></a>

```json
{
  "Filter": {
    "JobName": {},
    "JobStatus": {},
    "SubmittedBeforeTime": {},
    "SubmittedAfterTime": {}
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

<h2 id="tocS_InvalidFilterException">InvalidFilterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfilterexception"></a>
<a id="schema_InvalidFilterException"></a>
<a id="tocSinvalidfilterexception"></a>
<a id="tocsinvalidfilterexception"></a>

```json
null
```

<h2 id="tocS_StartTextTranslationJobResponse">StartTextTranslationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastarttexttranslationjobresponse"></a>
<a id="schema_StartTextTranslationJobResponse"></a>
<a id="tocSstarttexttranslationjobresponse"></a>
<a id="tocsstarttexttranslationjobresponse"></a>

```json
{
  "JobId": {},
  "JobStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobStatus|object|false|none|none|

<h2 id="tocS_StartTextTranslationJobRequest">StartTextTranslationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastarttexttranslationjobrequest"></a>
<a id="schema_StartTextTranslationJobRequest"></a>
<a id="tocSstarttexttranslationjobrequest"></a>
<a id="tocsstarttexttranslationjobrequest"></a>

```json
{
  "JobName": {},
  "InputDataConfig": {
    "S3Uri": {},
    "ContentType": {}
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "EncryptionKey": {
      "Type": {},
      "Id": {}
    }
  },
  "DataAccessRoleArn": {},
  "SourceLanguageCode": {},
  "TargetLanguageCodes": {},
  "TerminologyNames": {},
  "ParallelDataNames": {},
  "ClientToken": {},
  "Settings": {
    "Formality": {},
    "Profanity": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|InputDataConfig|object|true|none|none|
|OutputDataConfig|object|true|none|none|
|DataAccessRoleArn|object|true|none|none|
|SourceLanguageCode|object|true|none|none|
|TargetLanguageCodes|object|true|none|none|
|TerminologyNames|object|false|none|none|
|ParallelDataNames|object|false|none|none|
|ClientToken|object|true|none|none|
|Settings|object|false|none|none|

<h2 id="tocS_UnsupportedLanguagePairException">UnsupportedLanguagePairException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedlanguagepairexception"></a>
<a id="schema_UnsupportedLanguagePairException"></a>
<a id="tocSunsupportedlanguagepairexception"></a>
<a id="tocsunsupportedlanguagepairexception"></a>

```json
null
```

<h2 id="tocS_StopTextTranslationJobResponse">StopTextTranslationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoptexttranslationjobresponse"></a>
<a id="schema_StopTextTranslationJobResponse"></a>
<a id="tocSstoptexttranslationjobresponse"></a>
<a id="tocsstoptexttranslationjobresponse"></a>

```json
{
  "JobId": {},
  "JobStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobStatus|object|false|none|none|

<h2 id="tocS_StopTextTranslationJobRequest">StopTextTranslationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoptexttranslationjobrequest"></a>
<a id="schema_StopTextTranslationJobRequest"></a>
<a id="tocSstoptexttranslationjobrequest"></a>
<a id="tocsstoptexttranslationjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

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
  "ResourceArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_TranslateDocumentResponse">TranslateDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schematranslatedocumentresponse"></a>
<a id="schema_TranslateDocumentResponse"></a>
<a id="tocStranslatedocumentresponse"></a>
<a id="tocstranslatedocumentresponse"></a>

```json
{
  "TranslatedDocument": {
    "Content": {}
  },
  "SourceLanguageCode": {},
  "TargetLanguageCode": {},
  "AppliedTerminologies": {},
  "AppliedSettings": {
    "Formality": {},
    "Profanity": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TranslatedDocument|object|true|none|none|
|SourceLanguageCode|object|true|none|none|
|TargetLanguageCode|object|true|none|none|
|AppliedTerminologies|object|false|none|none|
|AppliedSettings|[TranslationSettings](#schematranslationsettings)|false|none|Settings to configure your translation output, including the option to set the formality level of the output text and the option to mask profane words and phrases.|

<h2 id="tocS_TranslateDocumentRequest">TranslateDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schematranslatedocumentrequest"></a>
<a id="schema_TranslateDocumentRequest"></a>
<a id="tocStranslatedocumentrequest"></a>
<a id="tocstranslatedocumentrequest"></a>

```json
{
  "Document": {
    "Content": {},
    "ContentType": {}
  },
  "TerminologyNames": {},
  "SourceLanguageCode": {},
  "TargetLanguageCode": {},
  "Settings": {
    "Formality": {},
    "Profanity": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Document|object|true|none|none|
|TerminologyNames|object|false|none|none|
|SourceLanguageCode|object|true|none|none|
|TargetLanguageCode|object|true|none|none|
|Settings|[TranslationSettings](#schematranslationsettings)|false|none|Settings to configure your translation output, including the option to set the formality level of the output text and the option to mask profane words and phrases.|

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

```json
null
```

<h2 id="tocS_TranslateTextResponse">TranslateTextResponse</h2>
<!-- backwards compatibility -->
<a id="schematranslatetextresponse"></a>
<a id="schema_TranslateTextResponse"></a>
<a id="tocStranslatetextresponse"></a>
<a id="tocstranslatetextresponse"></a>

```json
{
  "TranslatedText": {},
  "SourceLanguageCode": {},
  "TargetLanguageCode": {},
  "AppliedTerminologies": {},
  "AppliedSettings": {
    "Formality": {},
    "Profanity": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TranslatedText|object|true|none|none|
|SourceLanguageCode|object|true|none|none|
|TargetLanguageCode|object|true|none|none|
|AppliedTerminologies|object|false|none|none|
|AppliedSettings|object|false|none|none|

<h2 id="tocS_TranslateTextRequest">TranslateTextRequest</h2>
<!-- backwards compatibility -->
<a id="schematranslatetextrequest"></a>
<a id="schema_TranslateTextRequest"></a>
<a id="tocStranslatetextrequest"></a>
<a id="tocstranslatetextrequest"></a>

```json
{
  "Text": {},
  "TerminologyNames": {},
  "SourceLanguageCode": {},
  "TargetLanguageCode": {},
  "Settings": {
    "Formality": {},
    "Profanity": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|true|none|none|
|TerminologyNames|object|false|none|none|
|SourceLanguageCode|object|true|none|none|
|TargetLanguageCode|object|true|none|none|
|Settings|object|false|none|none|

<h2 id="tocS_TextSizeLimitExceededException">TextSizeLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schematextsizelimitexceededexception"></a>
<a id="schema_TextSizeLimitExceededException"></a>
<a id="tocStextsizelimitexceededexception"></a>
<a id="tocstextsizelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_DetectedLanguageLowConfidenceException">DetectedLanguageLowConfidenceException</h2>
<!-- backwards compatibility -->
<a id="schemadetectedlanguagelowconfidenceexception"></a>
<a id="schema_DetectedLanguageLowConfidenceException"></a>
<a id="tocSdetectedlanguagelowconfidenceexception"></a>
<a id="tocsdetectedlanguagelowconfidenceexception"></a>

```json
null
```

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
  "ResourceArn": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateParallelDataResponse">UpdateParallelDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateparalleldataresponse"></a>
<a id="schema_UpdateParallelDataResponse"></a>
<a id="tocSupdateparalleldataresponse"></a>
<a id="tocsupdateparalleldataresponse"></a>

```json
{
  "Name": {},
  "Status": {},
  "LatestUpdateAttemptStatus": {},
  "LatestUpdateAttemptAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Status|object|false|none|none|
|LatestUpdateAttemptStatus|object|false|none|none|
|LatestUpdateAttemptAt|object|false|none|none|

<h2 id="tocS_UpdateParallelDataRequest">UpdateParallelDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateparalleldatarequest"></a>
<a id="schema_UpdateParallelDataRequest"></a>
<a id="tocSupdateparalleldatarequest"></a>
<a id="tocsupdateparalleldatarequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "ParallelDataConfig": {
    "S3Uri": {},
    "Format": {}
  },
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|ParallelDataConfig|object|true|none|none|
|ClientToken|object|true|none|none|

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_TermList">TermList</h2>
<!-- backwards compatibility -->
<a id="schematermlist"></a>
<a id="schema_TermList"></a>
<a id="tocStermlist"></a>
<a id="tocstermlist"></a>

```json
[
  {
    "SourceText": {},
    "TargetText": {}
  }
]
```

<h2 id="tocS_AppliedTerminology">AppliedTerminology</h2>
<!-- backwards compatibility -->
<a id="schemaappliedterminology"></a>
<a id="schema_AppliedTerminology"></a>
<a id="tocSappliedterminology"></a>
<a id="tocsappliedterminology"></a>

```json
{
  "Name": {},
  "Terms": {}
}
```

The custom terminology applied to the input text by Amazon Translate for the translated text response. This is optional in the response and will only be present if you specified terminology input in the request. Currently, only one terminology can be applied per TranslateText request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Terms|object|false|none|none|

<h2 id="tocS_AppliedTerminologyList">AppliedTerminologyList</h2>
<!-- backwards compatibility -->
<a id="schemaappliedterminologylist"></a>
<a id="schema_AppliedTerminologyList"></a>
<a id="tocSappliedterminologylist"></a>
<a id="tocsappliedterminologylist"></a>

```json
[
  {
    "Name": {},
    "Terms": {}
  }
]
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

<h2 id="tocS_ContentType">ContentType</h2>
<!-- backwards compatibility -->
<a id="schemacontenttype"></a>
<a id="schema_ContentType"></a>
<a id="tocScontenttype"></a>
<a id="tocscontenttype"></a>

```json
"string"
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

<h2 id="tocS_ParallelDataConfig">ParallelDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemaparalleldataconfig"></a>
<a id="schema_ParallelDataConfig"></a>
<a id="tocSparalleldataconfig"></a>
<a id="tocsparalleldataconfig"></a>

```json
{
  "S3Uri": {},
  "Format": {}
}
```

Specifies the format and S3 location of the parallel data input file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|
|Format|object|true|none|none|

<h2 id="tocS_EncryptionKey">EncryptionKey</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionkey"></a>
<a id="schema_EncryptionKey"></a>
<a id="tocSencryptionkey"></a>
<a id="tocsencryptionkey"></a>

```json
{
  "Type": {},
  "Id": {}
}
```

The encryption key used to encrypt this object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Id|object|true|none|none|

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

<h2 id="tocS_ParallelDataStatus">ParallelDataStatus</h2>
<!-- backwards compatibility -->
<a id="schemaparalleldatastatus"></a>
<a id="schema_ParallelDataStatus"></a>
<a id="tocSparalleldatastatus"></a>
<a id="tocsparalleldatastatus"></a>

```json
"CREATING"
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

<h2 id="tocS_TextTranslationJobProperties">TextTranslationJobProperties</h2>
<!-- backwards compatibility -->
<a id="schematexttranslationjobproperties"></a>
<a id="schema_TextTranslationJobProperties"></a>
<a id="tocStexttranslationjobproperties"></a>
<a id="tocstexttranslationjobproperties"></a>

```json
{
  "JobId": {},
  "JobName": {},
  "JobStatus": {},
  "JobDetails": {
    "TranslatedDocumentsCount": {},
    "DocumentsWithErrorsCount": {},
    "InputDocumentsCount": {}
  },
  "SourceLanguageCode": {},
  "TargetLanguageCodes": {},
  "TerminologyNames": {},
  "ParallelDataNames": {},
  "Message": {},
  "SubmittedTime": {},
  "EndTime": {},
  "InputDataConfig": {
    "S3Uri": {},
    "ContentType": {}
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "EncryptionKey": {
      "Type": {},
      "Id": {}
    }
  },
  "DataAccessRoleArn": {},
  "Settings": {
    "Formality": {},
    "Profanity": {}
  }
}
```

Provides information about a translation job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|JobDetails|object|false|none|none|
|SourceLanguageCode|object|false|none|none|
|TargetLanguageCodes|object|false|none|none|
|TerminologyNames|object|false|none|none|
|ParallelDataNames|object|false|none|none|
|Message|object|false|none|none|
|SubmittedTime|object|false|none|none|
|EndTime|object|false|none|none|
|InputDataConfig|object|false|none|none|
|OutputDataConfig|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|Settings|object|false|none|none|

<h2 id="tocS_Directionality">Directionality</h2>
<!-- backwards compatibility -->
<a id="schemadirectionality"></a>
<a id="schema_Directionality"></a>
<a id="tocSdirectionality"></a>
<a id="tocsdirectionality"></a>

```json
"UNI"
```

<h2 id="tocS_DisplayLanguageCode">DisplayLanguageCode</h2>
<!-- backwards compatibility -->
<a id="schemadisplaylanguagecode"></a>
<a id="schema_DisplayLanguageCode"></a>
<a id="tocSdisplaylanguagecode"></a>
<a id="tocsdisplaylanguagecode"></a>

```json
"de"
```

<h2 id="tocS_DocumentContent">DocumentContent</h2>
<!-- backwards compatibility -->
<a id="schemadocumentcontent"></a>
<a id="schema_DocumentContent"></a>
<a id="tocSdocumentcontent"></a>
<a id="tocsdocumentcontent"></a>

```json
"password"
```

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "Content": {},
  "ContentType": {}
}
```

The content and content type of a document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|true|none|none|
|ContentType|object|true|none|none|

<h2 id="tocS_EncryptionKeyType">EncryptionKeyType</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionkeytype"></a>
<a id="schema_EncryptionKeyType"></a>
<a id="tocSencryptionkeytype"></a>
<a id="tocsencryptionkeytype"></a>

```json
"KMS"
```

<h2 id="tocS_EncryptionKeyID">EncryptionKeyID</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionkeyid"></a>
<a id="schema_EncryptionKeyID"></a>
<a id="tocSencryptionkeyid"></a>
<a id="tocsencryptionkeyid"></a>

```json
"string"
```

<h2 id="tocS_Formality">Formality</h2>
<!-- backwards compatibility -->
<a id="schemaformality"></a>
<a id="schema_Formality"></a>
<a id="tocSformality"></a>
<a id="tocsformality"></a>

```json
"FORMAL"
```

<h2 id="tocS_ParallelDataProperties">ParallelDataProperties</h2>
<!-- backwards compatibility -->
<a id="schemaparalleldataproperties"></a>
<a id="schema_ParallelDataProperties"></a>
<a id="tocSparalleldataproperties"></a>
<a id="tocsparalleldataproperties"></a>

```json
{
  "Name": {},
  "Arn": {},
  "Description": {},
  "Status": {},
  "SourceLanguageCode": {},
  "TargetLanguageCodes": {},
  "ParallelDataConfig": {
    "S3Uri": {},
    "Format": {}
  },
  "Message": {},
  "ImportedDataSize": {},
  "ImportedRecordCount": {},
  "FailedRecordCount": {},
  "SkippedRecordCount": {},
  "EncryptionKey": {
    "Type": {},
    "Id": {}
  },
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "LatestUpdateAttemptStatus": {},
  "LatestUpdateAttemptAt": {}
}
```

The properties of a parallel data resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|SourceLanguageCode|object|false|none|none|
|TargetLanguageCodes|object|false|none|none|
|ParallelDataConfig|object|false|none|none|
|Message|object|false|none|none|
|ImportedDataSize|object|false|none|none|
|ImportedRecordCount|object|false|none|none|
|FailedRecordCount|object|false|none|none|
|SkippedRecordCount|object|false|none|none|
|EncryptionKey|[EncryptionKey](#schemaencryptionkey)|false|none|The encryption key used to encrypt this object.|
|CreatedAt|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|LatestUpdateAttemptStatus|object|false|none|none|
|LatestUpdateAttemptAt|object|false|none|none|

<h2 id="tocS_ParallelDataDataLocation">ParallelDataDataLocation</h2>
<!-- backwards compatibility -->
<a id="schemaparalleldatadatalocation"></a>
<a id="schema_ParallelDataDataLocation"></a>
<a id="tocSparalleldatadatalocation"></a>
<a id="tocsparalleldatadatalocation"></a>

```json
{
  "RepositoryType": {},
  "Location": {}
}
```

The location of the most recent parallel data input file that was successfully imported into Amazon Translate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RepositoryType|object|true|none|none|
|Location|object|true|none|none|

<h2 id="tocS_TerminologyDataFormat">TerminologyDataFormat</h2>
<!-- backwards compatibility -->
<a id="schematerminologydataformat"></a>
<a id="schema_TerminologyDataFormat"></a>
<a id="tocSterminologydataformat"></a>
<a id="tocsterminologydataformat"></a>

```json
"CSV"
```

<h2 id="tocS_TerminologyProperties">TerminologyProperties</h2>
<!-- backwards compatibility -->
<a id="schematerminologyproperties"></a>
<a id="schema_TerminologyProperties"></a>
<a id="tocSterminologyproperties"></a>
<a id="tocsterminologyproperties"></a>

```json
{
  "Name": {},
  "Description": {},
  "Arn": {},
  "SourceLanguageCode": {},
  "TargetLanguageCodes": {},
  "EncryptionKey": {
    "Type": {},
    "Id": {}
  },
  "SizeBytes": {},
  "TermCount": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Directionality": {},
  "Message": {},
  "SkippedTermCount": {},
  "Format": {}
}
```

The properties of the custom terminology.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Arn|object|false|none|none|
|SourceLanguageCode|object|false|none|none|
|TargetLanguageCodes|object|false|none|none|
|EncryptionKey|object|false|none|none|
|SizeBytes|object|false|none|none|
|TermCount|object|false|none|none|
|CreatedAt|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|Directionality|object|false|none|none|
|Message|object|false|none|none|
|SkippedTermCount|object|false|none|none|
|Format|object|false|none|none|

<h2 id="tocS_TerminologyDataLocation">TerminologyDataLocation</h2>
<!-- backwards compatibility -->
<a id="schematerminologydatalocation"></a>
<a id="schema_TerminologyDataLocation"></a>
<a id="tocSterminologydatalocation"></a>
<a id="tocsterminologydatalocation"></a>

```json
{
  "RepositoryType": {},
  "Location": {}
}
```

The location of the custom terminology data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RepositoryType|object|true|none|none|
|Location|object|true|none|none|

<h2 id="tocS_IamRoleArn">IamRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamrolearn"></a>
<a id="schema_IamRoleArn"></a>
<a id="tocSiamrolearn"></a>
<a id="tocsiamrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_MergeStrategy">MergeStrategy</h2>
<!-- backwards compatibility -->
<a id="schemamergestrategy"></a>
<a id="schema_MergeStrategy"></a>
<a id="tocSmergestrategy"></a>
<a id="tocsmergestrategy"></a>

```json
"OVERWRITE"
```

<h2 id="tocS_TerminologyData">TerminologyData</h2>
<!-- backwards compatibility -->
<a id="schematerminologydata"></a>
<a id="schema_TerminologyData"></a>
<a id="tocSterminologydata"></a>
<a id="tocsterminologydata"></a>

```json
{
  "File": {},
  "Format": {},
  "Directionality": {}
}
```

The data associated with the custom terminology. For information about the custom terminology file, see <a href="https://docs.aws.amazon.com/translate/latest/dg/creating-custom-terminology.html"> Creating a Custom Terminology</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|File|object|true|none|none|
|Format|object|true|none|none|
|Directionality|object|false|none|none|

<h2 id="tocS_S3Uri">S3Uri</h2>
<!-- backwards compatibility -->
<a id="schemas3uri"></a>
<a id="schema_S3Uri"></a>
<a id="tocSs3uri"></a>
<a id="tocss3uri"></a>

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
  "S3Uri": {},
  "ContentType": {}
}
```

The input configuration properties for requesting a batch translation job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|
|ContentType|object|true|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_JobDetails">JobDetails</h2>
<!-- backwards compatibility -->
<a id="schemajobdetails"></a>
<a id="schema_JobDetails"></a>
<a id="tocSjobdetails"></a>
<a id="tocsjobdetails"></a>

```json
{
  "TranslatedDocumentsCount": {},
  "DocumentsWithErrorsCount": {},
  "InputDocumentsCount": {}
}
```

The number of documents successfully and unsuccessfully processed during a translation job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TranslatedDocumentsCount|object|false|none|none|
|DocumentsWithErrorsCount|object|false|none|none|
|InputDocumentsCount|object|false|none|none|

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

<h2 id="tocS_LocalizedNameString">LocalizedNameString</h2>
<!-- backwards compatibility -->
<a id="schemalocalizednamestring"></a>
<a id="schema_LocalizedNameString"></a>
<a id="tocSlocalizednamestring"></a>
<a id="tocslocalizednamestring"></a>

```json
"string"
```

<h2 id="tocS_LanguageCodeString">LanguageCodeString</h2>
<!-- backwards compatibility -->
<a id="schemalanguagecodestring"></a>
<a id="schema_LanguageCodeString"></a>
<a id="tocSlanguagecodestring"></a>
<a id="tocslanguagecodestring"></a>

```json
"strin"
```

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
{
  "LanguageName": {},
  "LanguageCode": {}
}
```

A supported language.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageName|object|true|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_LanguageCodeStringList">LanguageCodeStringList</h2>
<!-- backwards compatibility -->
<a id="schemalanguagecodestringlist"></a>
<a id="schema_LanguageCodeStringList"></a>
<a id="tocSlanguagecodestringlist"></a>
<a id="tocslanguagecodestringlist"></a>

```json
[
  "strin"
]
```

<h2 id="tocS_LanguagesList">LanguagesList</h2>
<!-- backwards compatibility -->
<a id="schemalanguageslist"></a>
<a id="schema_LanguagesList"></a>
<a id="tocSlanguageslist"></a>
<a id="tocslanguageslist"></a>

```json
[
  {
    "LanguageName": {},
    "LanguageCode": {}
  }
]
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

<h2 id="tocS_MaxResultsInteger">MaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultsinteger"></a>
<a id="schema_MaxResultsInteger"></a>
<a id="tocSmaxresultsinteger"></a>
<a id="tocsmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_ParallelDataPropertiesList">ParallelDataPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemaparalleldatapropertieslist"></a>
<a id="schema_ParallelDataPropertiesList"></a>
<a id="tocSparalleldatapropertieslist"></a>
<a id="tocsparalleldatapropertieslist"></a>

```json
[
  {
    "Name": {},
    "Arn": {},
    "Description": {},
    "Status": {},
    "SourceLanguageCode": {},
    "TargetLanguageCodes": {},
    "ParallelDataConfig": {
      "S3Uri": {},
      "Format": {}
    },
    "Message": {},
    "ImportedDataSize": {},
    "ImportedRecordCount": {},
    "FailedRecordCount": {},
    "SkippedRecordCount": {},
    "EncryptionKey": {
      "Type": {},
      "Id": {}
    },
    "CreatedAt": {},
    "LastUpdatedAt": {},
    "LatestUpdateAttemptStatus": {},
    "LatestUpdateAttemptAt": {}
  }
]
```

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_TerminologyPropertiesList">TerminologyPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schematerminologypropertieslist"></a>
<a id="schema_TerminologyPropertiesList"></a>
<a id="tocSterminologypropertieslist"></a>
<a id="tocsterminologypropertieslist"></a>

```json
[
  {
    "Name": {},
    "Description": {},
    "Arn": {},
    "SourceLanguageCode": {},
    "TargetLanguageCodes": {},
    "EncryptionKey": {
      "Type": {},
      "Id": {}
    },
    "SizeBytes": {},
    "TermCount": {},
    "CreatedAt": {},
    "LastUpdatedAt": {},
    "Directionality": {},
    "Message": {},
    "SkippedTermCount": {},
    "Format": {}
  }
]
```

<h2 id="tocS_TextTranslationJobFilter">TextTranslationJobFilter</h2>
<!-- backwards compatibility -->
<a id="schematexttranslationjobfilter"></a>
<a id="schema_TextTranslationJobFilter"></a>
<a id="tocStexttranslationjobfilter"></a>
<a id="tocstexttranslationjobfilter"></a>

```json
{
  "JobName": {},
  "JobStatus": {},
  "SubmittedBeforeTime": {},
  "SubmittedAfterTime": {}
}
```

Provides information for filtering a list of translation jobs. For more information, see <a>ListTextTranslationJobs</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|SubmittedBeforeTime|object|false|none|none|
|SubmittedAfterTime|object|false|none|none|

<h2 id="tocS_TextTranslationJobPropertiesList">TextTranslationJobPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schematexttranslationjobpropertieslist"></a>
<a id="schema_TextTranslationJobPropertiesList"></a>
<a id="tocStexttranslationjobpropertieslist"></a>
<a id="tocstexttranslationjobpropertieslist"></a>

```json
[
  {
    "JobId": {},
    "JobName": {},
    "JobStatus": {},
    "JobDetails": {
      "TranslatedDocumentsCount": {},
      "DocumentsWithErrorsCount": {},
      "InputDocumentsCount": {}
    },
    "SourceLanguageCode": {},
    "TargetLanguageCodes": {},
    "TerminologyNames": {},
    "ParallelDataNames": {},
    "Message": {},
    "SubmittedTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "ContentType": {}
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "EncryptionKey": {
        "Type": {},
        "Id": {}
      }
    },
    "DataAccessRoleArn": {},
    "Settings": {
      "Formality": {},
      "Profanity": {}
    }
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

<h2 id="tocS_OutputDataConfig">OutputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoutputdataconfig"></a>
<a id="schema_OutputDataConfig"></a>
<a id="tocSoutputdataconfig"></a>
<a id="tocsoutputdataconfig"></a>

```json
{
  "S3Uri": {},
  "EncryptionKey": {
    "Type": {},
    "Id": {}
  }
}
```

The output configuration properties for a batch translation job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|
|EncryptionKey|[EncryptionKey](#schemaencryptionkey)|false|none|The encryption key used to encrypt this object.|

<h2 id="tocS_ParallelDataArn">ParallelDataArn</h2>
<!-- backwards compatibility -->
<a id="schemaparalleldataarn"></a>
<a id="schema_ParallelDataArn"></a>
<a id="tocSparalleldataarn"></a>
<a id="tocsparalleldataarn"></a>

```json
"string"
```

<h2 id="tocS_ParallelDataFormat">ParallelDataFormat</h2>
<!-- backwards compatibility -->
<a id="schemaparalleldataformat"></a>
<a id="schema_ParallelDataFormat"></a>
<a id="tocSparalleldataformat"></a>
<a id="tocsparalleldataformat"></a>

```json
"TSV"
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

<h2 id="tocS_UnboundedLengthString">UnboundedLengthString</h2>
<!-- backwards compatibility -->
<a id="schemaunboundedlengthstring"></a>
<a id="schema_UnboundedLengthString"></a>
<a id="tocSunboundedlengthstring"></a>
<a id="tocsunboundedlengthstring"></a>

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

<h2 id="tocS_Profanity">Profanity</h2>
<!-- backwards compatibility -->
<a id="schemaprofanity"></a>
<a id="schema_Profanity"></a>
<a id="tocSprofanity"></a>
<a id="tocsprofanity"></a>

```json
"MASK"
```

<h2 id="tocS_ResourceNameList">ResourceNameList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenamelist"></a>
<a id="schema_ResourceNameList"></a>
<a id="tocSresourcenamelist"></a>
<a id="tocsresourcenamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TargetLanguageCodeStringList">TargetLanguageCodeStringList</h2>
<!-- backwards compatibility -->
<a id="schematargetlanguagecodestringlist"></a>
<a id="schema_TargetLanguageCodeStringList"></a>
<a id="tocStargetlanguagecodestringlist"></a>
<a id="tocstargetlanguagecodestringlist"></a>

```json
[
  "strin"
]
```

<h2 id="tocS_TranslationSettings">TranslationSettings</h2>
<!-- backwards compatibility -->
<a id="schematranslationsettings"></a>
<a id="schema_TranslationSettings"></a>
<a id="tocStranslationsettings"></a>
<a id="tocstranslationsettings"></a>

```json
{
  "Formality": {},
  "Profanity": {}
}
```

Settings to configure your translation output, including the option to set the formality level of the output text and the option to mask profane words and phrases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Formality|object|false|none|none|
|Profanity|object|false|none|none|

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

A key-value pair that adds as a metadata to a resource used by Amazon Translate.

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

<h2 id="tocS_Term">Term</h2>
<!-- backwards compatibility -->
<a id="schematerm"></a>
<a id="schema_Term"></a>
<a id="tocSterm"></a>
<a id="tocsterm"></a>

```json
{
  "SourceText": {},
  "TargetText": {}
}
```

The term being translated by the custom terminology.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceText|object|false|none|none|
|TargetText|object|false|none|none|

<h2 id="tocS_TerminologyArn">TerminologyArn</h2>
<!-- backwards compatibility -->
<a id="schematerminologyarn"></a>
<a id="schema_TerminologyArn"></a>
<a id="tocSterminologyarn"></a>
<a id="tocsterminologyarn"></a>

```json
"string"
```

<h2 id="tocS_TerminologyFile">TerminologyFile</h2>
<!-- backwards compatibility -->
<a id="schematerminologyfile"></a>
<a id="schema_TerminologyFile"></a>
<a id="tocSterminologyfile"></a>
<a id="tocsterminologyfile"></a>

```json
"password"
```

<h2 id="tocS_TranslatedDocument">TranslatedDocument</h2>
<!-- backwards compatibility -->
<a id="schematranslateddocument"></a>
<a id="schema_TranslatedDocument"></a>
<a id="tocStranslateddocument"></a>
<a id="tocstranslateddocument"></a>

```json
{
  "Content": {}
}
```

The translated content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|true|none|none|

<h2 id="tocS_TranslatedTextString">TranslatedTextString</h2>
<!-- backwards compatibility -->
<a id="schematranslatedtextstring"></a>
<a id="schema_TranslatedTextString"></a>
<a id="tocStranslatedtextstring"></a>
<a id="tocstranslatedtextstring"></a>

```json
"string"
```

<h2 id="tocS_TranslatedDocumentContent">TranslatedDocumentContent</h2>
<!-- backwards compatibility -->
<a id="schematranslateddocumentcontent"></a>
<a id="schema_TranslatedDocumentContent"></a>
<a id="tocStranslateddocumentcontent"></a>
<a id="tocstranslateddocumentcontent"></a>

```json
"password"
```
