<h1 id="amazon-connect-service">Amazon Connect Service v2017-08-08</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Amazon Connect is a cloud-based contact center solution that you use to set up and manage a customer contact center and provide reliable customer engagement at any scale.</p> <p>Amazon Connect provides metrics and real-time reporting that enable you to optimize contact routing. You can also resolve customer issues more efficiently by getting customers in touch with the appropriate agents.</p> <p>There are limits to the number of Amazon Connect resources that you can create. There are also limits to the number of requests that you can make per second. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <p>You can connect programmatically to an Amazon Web Services service by using an endpoint. For a list of Amazon Connect endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect Endpoints</a>.</p>

Base URLs:

* <a href="http://connect.us-east-1.amazonaws.com">http://connect.us-east-1.amazonaws.com</a> - The Amazon Connect multi-region endpoint

* <a href="https://connect.us-east-1.amazonaws.com">https://connect.us-east-1.amazonaws.com</a> - The Amazon Connect multi-region endpoint

* <a href="http://connect.cn-north-1.amazonaws.com.cn">http://connect.cn-north-1.amazonaws.com.cn</a> - The Amazon Connect endpoint for China (Beijing) and China (Ningxia)

* <a href="https://connect.cn-north-1.amazonaws.com.cn">https://connect.cn-north-1.amazonaws.com.cn</a> - The Amazon Connect endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/connect/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-connect-service-default">Default</h1>

## AssociateApprovedOrigin

<a id="opIdAssociateApprovedOrigin"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/approved-origin \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Origin": "string"
  }'
```

`PUT /instance/{InstanceId}/approved-origin`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Associates an approved origin to an Amazon Connect instance.</p>

> Body parameter

```json
{
  "Origin": "string"
}
```

<h3 id="associateapprovedorigin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Origin|body|string|true|The domain to add to your allow list.|

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

<h3 id="associateapprovedorigin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateBot

<a id="opIdAssociateBot"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/bot \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LexBot": {
      "Name": {},
      "LexRegion": {}
    },
    "LexV2Bot": {
      "AliasArn": {}
    }
  }'
```

`PUT /instance/{InstanceId}/bot`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Allows the specified Amazon Connect instance to access the specified Amazon Lex or Amazon Lex V2 bot.</p>

> Body parameter

```json
{
  "LexBot": {
    "Name": {},
    "LexRegion": {}
  },
  "LexV2Bot": {
    "AliasArn": {}
  }
}
```

<h3 id="associatebot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LexBot|body|object|false|Configuration information of an Amazon Lex bot.|
|» » Name|body|object|false|none|
|» » LexRegion|body|object|false|none|
|» LexV2Bot|body|object|false|Configuration information of an Amazon Lex V2 bot.|
|» » AliasArn|body|object|false|none|

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

<h3 id="associatebot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateBot

<a id="opIdDisassociateBot"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/bot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LexBot": {
      "Name": {},
      "LexRegion": {}
    },
    "LexV2Bot": {
      "AliasArn": {}
    }
  }'
```

`POST /instance/{InstanceId}/bot`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Revokes authorization from the specified instance to access the specified Amazon Lex or Amazon Lex V2 bot. </p>

> Body parameter

```json
{
  "LexBot": {
    "Name": {},
    "LexRegion": {}
  },
  "LexV2Bot": {
    "AliasArn": {}
  }
}
```

<h3 id="disassociatebot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LexBot|body|object|false|Configuration information of an Amazon Lex bot.|
|» » Name|body|object|false|none|
|» » LexRegion|body|object|false|none|
|» LexV2Bot|body|object|false|Configuration information of an Amazon Lex V2 bot.|
|» » AliasArn|body|object|false|none|

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

<h3 id="disassociatebot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateDefaultVocabulary

<a id="opIdAssociateDefaultVocabulary"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/default-vocabulary/string/ar-AE \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "VocabularyId": "string"
  }'
```

`PUT /default-vocabulary/{InstanceId}/{LanguageCode}`

Associates an existing vocabulary as the default. Contact Lens for Amazon Connect uses the vocabulary in post-call and real-time analysis sessions for the given language.

> Body parameter

```json
{
  "VocabularyId": "string"
}
```

<h3 id="associatedefaultvocabulary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|LanguageCode|path|string|true|The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a> |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» VocabularyId|body|string|false|The identifier of the custom vocabulary. If this is empty, the default is set to none.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|LanguageCode|ar-AE|
|LanguageCode|de-CH|
|LanguageCode|de-DE|
|LanguageCode|en-AB|
|LanguageCode|en-AU|
|LanguageCode|en-GB|
|LanguageCode|en-IE|
|LanguageCode|en-IN|
|LanguageCode|en-US|
|LanguageCode|en-WL|
|LanguageCode|es-ES|
|LanguageCode|es-US|
|LanguageCode|fr-CA|
|LanguageCode|fr-FR|
|LanguageCode|hi-IN|
|LanguageCode|it-IT|
|LanguageCode|ja-JP|
|LanguageCode|ko-KR|
|LanguageCode|pt-BR|
|LanguageCode|pt-PT|
|LanguageCode|zh-CN|
|LanguageCode|en-NZ|
|LanguageCode|en-ZA|

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

<h3 id="associatedefaultvocabulary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateDefaultVocabularyResponse](#schemaassociatedefaultvocabularyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateInstanceStorageConfig

<a id="opIdAssociateInstanceStorageConfig"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/storage-config \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceType": "CHAT_TRANSCRIPTS",
    "StorageConfig": {
      "AssociationId": {},
      "StorageType": {},
      "S3Config": {
        "BucketName": {},
        "BucketPrefix": {},
        "EncryptionConfig": {
          "EncryptionType": {},
          "KeyId": {}
        }
      },
      "KinesisVideoStreamConfig": {
        "Prefix": {},
        "RetentionPeriodHours": {},
        "EncryptionConfig": {
          "EncryptionType": {},
          "KeyId": {}
        }
      },
      "KinesisStreamConfig": {
        "StreamArn": {}
      },
      "KinesisFirehoseConfig": {
        "FirehoseArn": {}
      }
    }
  }'
```

`PUT /instance/{InstanceId}/storage-config`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Associates a storage resource type for the first time. You can only associate one type of storage configuration in a single call. This means, for example, that you can't define an instance with multiple S3 buckets for storing chat transcripts.</p> <p>This API does not create a resource that doesn't exist. It only associates it to the instance. Ensure that the resource being specified in the storage configuration, like an S3 bucket, exists when being used for association.</p>

> Body parameter

```json
{
  "ResourceType": "CHAT_TRANSCRIPTS",
  "StorageConfig": {
    "AssociationId": {},
    "StorageType": {},
    "S3Config": {
      "BucketName": {},
      "BucketPrefix": {},
      "EncryptionConfig": {
        "EncryptionType": {},
        "KeyId": {}
      }
    },
    "KinesisVideoStreamConfig": {
      "Prefix": {},
      "RetentionPeriodHours": {},
      "EncryptionConfig": {
        "EncryptionType": {},
        "KeyId": {}
      }
    },
    "KinesisStreamConfig": {
      "StreamArn": {}
    },
    "KinesisFirehoseConfig": {
      "FirehoseArn": {}
    }
  }
}
```

<h3 id="associateinstancestorageconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ResourceType|body|string|true|A valid resource type.|
|» StorageConfig|body|object|true|The storage configuration for the instance.|
|» » AssociationId|body|object|false|none|
|» » StorageType|body|object|false|none|
|» » S3Config|body|object|false|none|
|» » » BucketName|body|object|true|none|
|» » » BucketPrefix|body|object|true|none|
|» » » EncryptionConfig|body|object|false|none|
|» » » » EncryptionType|body|object|true|none|
|» » » » KeyId|body|object|true|none|
|» » KinesisVideoStreamConfig|body|object|false|none|
|» » » Prefix|body|object|true|none|
|» » » RetentionPeriodHours|body|object|true|none|
|» » » EncryptionConfig|body|object|true|none|
|» » » » EncryptionType|body|object|true|none|
|» » » » KeyId|body|object|true|none|
|» » KinesisStreamConfig|body|object|false|none|
|» » » StreamArn|body|object|true|none|
|» » KinesisFirehoseConfig|body|object|false|none|
|» » » FirehoseArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ResourceType|CHAT_TRANSCRIPTS|
|» ResourceType|CALL_RECORDINGS|
|» ResourceType|SCHEDULED_REPORTS|
|» ResourceType|MEDIA_STREAMS|
|» ResourceType|CONTACT_TRACE_RECORDS|
|» ResourceType|AGENT_EVENTS|
|» ResourceType|REAL_TIME_CONTACT_ANALYSIS_SEGMENTS|
|» ResourceType|ATTACHMENTS|
|» ResourceType|CONTACT_EVALUATIONS|

> Example responses

> 200 Response

```json
{
  "AssociationId": {}
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

<h3 id="associateinstancestorageconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateInstanceStorageConfigResponse](#schemaassociateinstancestorageconfigresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateLambdaFunction

<a id="opIdAssociateLambdaFunction"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/lambda-function \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FunctionArn": "string"
  }'
```

`PUT /instance/{InstanceId}/lambda-function`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Allows the specified Amazon Connect instance to access the specified Lambda function.</p>

> Body parameter

```json
{
  "FunctionArn": "string"
}
```

<h3 id="associatelambdafunction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FunctionArn|body|string|true|The Amazon Resource Name (ARN) for the Lambda function being associated. Maximum number of characters allowed is 140.|

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

<h3 id="associatelambdafunction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateLexBot

<a id="opIdAssociateLexBot"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/lex-bot \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LexBot": {
      "Name": {},
      "LexRegion": {}
    }
  }'
```

`PUT /instance/{InstanceId}/lex-bot`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Allows the specified Amazon Connect instance to access the specified Amazon Lex V1 bot. This API only supports the association of Amazon Lex V1 bots.</p>

> Body parameter

```json
{
  "LexBot": {
    "Name": {},
    "LexRegion": {}
  }
}
```

<h3 id="associatelexbot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LexBot|body|object|true|Configuration information of an Amazon Lex bot.|
|» » Name|body|object|false|none|
|» » LexRegion|body|object|false|none|

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

<h3 id="associatelexbot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociatePhoneNumberContactFlow

<a id="opIdAssociatePhoneNumberContactFlow"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/phone-number/string/contact-flow \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "ContactFlowId": "string"
  }'
```

`PUT /phone-number/{PhoneNumberId}/contact-flow`

<p>Associates a flow with a phone number claimed to your Amazon Connect instance.</p> <important> <p>If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the <code>PhoneNumberId</code> URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a <code>ResourceNotFoundException</code>.</p> </important>

> Body parameter

```json
{
  "InstanceId": "string",
  "ContactFlowId": "string"
}
```

<h3 id="associatephonenumbercontactflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PhoneNumberId|path|string|true|A unique identifier for the phone number.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» ContactFlowId|body|string|true|The identifier of the flow.|

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

<h3 id="associatephonenumbercontactflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateQueueQuickConnects

<a id="opIdAssociateQueueQuickConnects"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/queues/string/string/associate-quick-connects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "QuickConnectIds": [
      "string"
    ]
  }'
```

`POST /queues/{InstanceId}/{QueueId}/associate-quick-connects`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Associates a set of quick connects with a queue.</p>

> Body parameter

```json
{
  "QuickConnectIds": [
    "string"
  ]
}
```

<h3 id="associatequeuequickconnects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|QueueId|path|string|true|The identifier for the queue.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» QuickConnectIds|body|[[QuickConnectId](#schemaquickconnectid)]|true|The quick connects to associate with this queue.|

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

<h3 id="associatequeuequickconnects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateRoutingProfileQueues

<a id="opIdAssociateRoutingProfileQueues"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/routing-profiles/string/string/associate-queues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "QueueConfigs": [
      {
        "QueueReference": {
          "QueueId": {},
          "Channel": {}
        },
        "Priority": {},
        "Delay": {}
      }
    ]
  }'
```

`POST /routing-profiles/{InstanceId}/{RoutingProfileId}/associate-queues`

Associates a set of queues with a routing profile.

> Body parameter

```json
{
  "QueueConfigs": [
    {
      "QueueReference": {
        "QueueId": {},
        "Channel": {}
      },
      "Priority": {},
      "Delay": {}
    }
  ]
}
```

<h3 id="associateroutingprofilequeues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|RoutingProfileId|path|string|true|The identifier of the routing profile.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» QueueConfigs|body|[[RoutingProfileQueueConfig](#schemaroutingprofilequeueconfig)]|true|The queues to associate with this routing profile.|

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

<h3 id="associateroutingprofilequeues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateSecurityKey

<a id="opIdAssociateSecurityKey"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/security-key \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Key": "string"
  }'
```

`PUT /instance/{InstanceId}/security-key`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Associates a security key to the instance.</p>

> Body parameter

```json
{
  "Key": "string"
}
```

<h3 id="associatesecuritykey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Key|body|string|true|A valid security key in PEM format.|

> Example responses

> 200 Response

```json
{
  "AssociationId": {}
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

<h3 id="associatesecuritykey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateSecurityKeyResponse](#schemaassociatesecuritykeyresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ClaimPhoneNumber

<a id="opIdClaimPhoneNumber"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/phone-number/claim \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TargetArn": "string",
    "PhoneNumber": "string",
    "PhoneNumberDescription": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "ClientToken": "string"
  }'
```

`POST /phone-number/claim`

<p>Claims an available phone number to your Amazon Connect instance or traffic distribution group. You can call this API only in the same Amazon Web Services Region where the Amazon Connect instance or traffic distribution group was created.</p> <p>For more information about how to use this operation, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/claim-phone-number.html">Claim a phone number in your country</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/claim-phone-numbers-traffic-distribution-groups.html">Claim phone numbers to traffic distribution groups</a> in the <i>Amazon Connect Administrator Guide</i>. </p> <important> <p>You can call the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchAvailablePhoneNumbers.html">SearchAvailablePhoneNumbers</a> API for available phone numbers that you can claim. Call the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> API to verify the status of a previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html">ClaimPhoneNumber</a> operation.</p> </important>

> Body parameter

```json
{
  "TargetArn": "string",
  "PhoneNumber": "string",
  "PhoneNumberDescription": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ClientToken": "string"
}
```

<h3 id="claimphonenumber-parameters">Parameters</h3>

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
|» TargetArn|body|string|true|The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.|
|» PhoneNumber|body|string|true|The phone number you want to claim. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.|
|» PhoneNumberDescription|body|string|false|The description of the phone number.|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» ClientToken|body|string|false|<p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p> <p>Pattern: <code>^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$</code> </p>|

> Example responses

> 200 Response

```json
{
  "PhoneNumberId": {},
  "PhoneNumberArn": {}
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

<h3 id="claimphonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ClaimPhoneNumberResponse](#schemaclaimphonenumberresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|IdempotencyException|[IdempotencyException](#schemaidempotencyexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAgentStatuses

<a id="opIdListAgentStatuses"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/agent-status/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /agent-status/{InstanceId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Lists agent statuses.</p>

<h3 id="listagentstatuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
|AgentStatusTypes|query|[[AgentStatusType](#schemaagentstatustype)]|false|Available agent status types.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|AgentStatusTypes|ROUTABLE|
|AgentStatusTypes|CUSTOM|
|AgentStatusTypes|OFFLINE|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "AgentStatusSummaryList": {}
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

<h3 id="listagentstatuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAgentStatusResponse](#schemalistagentstatusresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAgentStatus

<a id="opIdCreateAgentStatus"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/agent-status/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "State": "ENABLED",
    "DisplayOrder": 1,
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /agent-status/{InstanceId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Creates an agent status for the specified Amazon Connect instance.</p>

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "State": "ENABLED",
  "DisplayOrder": 1,
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createagentstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the status.|
|» Description|body|string|false|The description of the status.|
|» State|body|string|true|The state of the status.|
|» DisplayOrder|body|integer|false|The display order of the status.|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» State|ENABLED|
|» State|DISABLED|

> Example responses

> 200 Response

```json
{
  "AgentStatusARN": {},
  "AgentStatusId": {}
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

<h3 id="createagentstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAgentStatusResponse](#schemacreateagentstatusresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateContactFlow

<a id="opIdCreateContactFlow"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact-flows/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Type": "CONTACT_FLOW",
    "Description": "string",
    "Content": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /contact-flows/{InstanceId}`

<p>Creates a flow for the specified Amazon Connect instance.</p> <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect Flow language</a>.</p>

> Body parameter

```json
{
  "Name": "string",
  "Type": "CONTACT_FLOW",
  "Description": "string",
  "Content": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createcontactflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the flow.|
|» Type|body|string|true|The type of the flow. For descriptions of the available types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types">Choose a flow type</a> in the <i>Amazon Connect Administrator Guide</i>.|
|» Description|body|string|false|The description of the flow. |
|» Content|body|string|true|The content of the flow. |
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|CONTACT_FLOW|
|» Type|CUSTOMER_QUEUE|
|» Type|CUSTOMER_HOLD|
|» Type|CUSTOMER_WHISPER|
|» Type|AGENT_HOLD|
|» Type|AGENT_WHISPER|
|» Type|OUTBOUND_WHISPER|
|» Type|AGENT_TRANSFER|
|» Type|QUEUE_TRANSFER|

> Example responses

> 200 Response

```json
{
  "ContactFlowId": {},
  "ContactFlowArn": {}
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

<h3 id="createcontactflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateContactFlowResponse](#schemacreatecontactflowresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidContactFlowException|[InvalidContactFlowException](#schemainvalidcontactflowexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|487|487|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateContactFlowModule

<a id="opIdCreateContactFlowModule"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact-flow-modules/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "Content": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "ClientToken": "string"
  }'
```

`PUT /contact-flow-modules/{InstanceId}`

Creates a flow module for the specified Amazon Connect instance. 

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "Content": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ClientToken": "string"
}
```

<h3 id="createcontactflowmodule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the flow module.|
|» Description|body|string|false|The description of the flow module. |
|» Content|body|string|true|The content of the flow module.|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|

> Example responses

> 200 Response

```json
{
  "Id": {},
  "Arn": {}
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="createcontactflowmodule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateContactFlowModuleResponse](#schemacreatecontactflowmoduleresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidContactFlowModuleException|[InvalidContactFlowModuleException](#schemainvalidcontactflowmoduleexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|488|488|IdempotencyException|[IdempotencyException](#schemaidempotencyexception)|
|489|489|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateHoursOfOperation

<a id="opIdCreateHoursOfOperation"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/hours-of-operations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "TimeZone": "string",
    "Config": [
      {
        "Day": {},
        "StartTime": {
          "Hours": {},
          "Minutes": {}
        },
        "EndTime": {
          "Hours": {},
          "Minutes": {}
        }
      }
    ],
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /hours-of-operations/{InstanceId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Creates hours of operation. </p>

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "TimeZone": "string",
  "Config": [
    {
      "Day": {},
      "StartTime": {
        "Hours": {},
        "Minutes": {}
      },
      "EndTime": {
        "Hours": {},
        "Minutes": {}
      }
    }
  ],
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createhoursofoperation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the hours of operation.|
|» Description|body|string|false|The description of the hours of operation.|
|» TimeZone|body|string|true|The time zone of the hours of operation.|
|» Config|body|[[HoursOfOperationConfig](#schemahoursofoperationconfig)]|true|Configuration information for the hours of operation: day, start time, and end time.|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "HoursOfOperationId": {},
  "HoursOfOperationArn": {}
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

<h3 id="createhoursofoperation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateHoursOfOperationResponse](#schemacreatehoursofoperationresponse)|
|480|480|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInstances

<a id="opIdListInstances"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /instance`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Return a list of instances which are in active state, creation-in-progress state, and failed state. Instances that aren't successfully created (they are in a failed state) are returned only for 24 hours after the CreateInstance API was invoked.</p>

<h3 id="listinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "InstanceSummaryList": {},
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

<h3 id="listinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInstancesResponse](#schemalistinstancesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateInstance

<a id="opIdCreateInstance"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ClientToken": "string",
    "IdentityManagementType": "SAML",
    "InstanceAlias": "password",
    "DirectoryId": "stringstring",
    "InboundCallsEnabled": true,
    "OutboundCallsEnabled": true
  }'
```

`PUT /instance`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis. It also does not allow for any configurations on features, such as Contact Lens for Amazon Connect. </p> <p>Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account.</p>

> Body parameter

```json
{
  "ClientToken": "string",
  "IdentityManagementType": "SAML",
  "InstanceAlias": "password",
  "DirectoryId": "stringstring",
  "InboundCallsEnabled": true,
  "OutboundCallsEnabled": true
}
```

<h3 id="createinstance-parameters">Parameters</h3>

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
|» ClientToken|body|string|false|The idempotency token.|
|» IdentityManagementType|body|string|true|The type of identity management for your Amazon Connect users.|
|» InstanceAlias|body|string(password)|false|The name for your instance.|
|» DirectoryId|body|string|false|The identifier for the directory.|
|» InboundCallsEnabled|body|boolean|true|Your contact center handles incoming contacts.|
|» OutboundCallsEnabled|body|boolean|true|Your contact center allows outbound calls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» IdentityManagementType|SAML|
|» IdentityManagementType|CONNECT_MANAGED|
|» IdentityManagementType|EXISTING_DIRECTORY|

> Example responses

> 200 Response

```json
{
  "Id": {},
  "Arn": {}
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

<h3 id="createinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateInstanceResponse](#schemacreateinstanceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListIntegrationAssociations

<a id="opIdListIntegrationAssociations"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/integration-associations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /instance/{InstanceId}/integration-associations`

Provides summary information about the Amazon Web Services resource associations for the specified Amazon Connect instance.

<h3 id="listintegrationassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|integrationType|query|string|false|The integration type.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|integrationType|EVENT|
|integrationType|VOICE_ID|
|integrationType|PINPOINT_APP|
|integrationType|WISDOM_ASSISTANT|
|integrationType|WISDOM_KNOWLEDGE_BASE|
|integrationType|CASES_DOMAIN|

> Example responses

> 200 Response

```json
{
  "IntegrationAssociationSummaryList": {},
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

<h3 id="listintegrationassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIntegrationAssociationsResponse](#schemalistintegrationassociationsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateIntegrationAssociation

<a id="opIdCreateIntegrationAssociation"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/integration-associations \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "IntegrationType": "EVENT",
    "IntegrationArn": "string",
    "SourceApplicationUrl": "string",
    "SourceApplicationName": "string",
    "SourceType": "SALESFORCE",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /instance/{InstanceId}/integration-associations`

Creates an Amazon Web Services resource association with an Amazon Connect instance.

> Body parameter

```json
{
  "IntegrationType": "EVENT",
  "IntegrationArn": "string",
  "SourceApplicationUrl": "string",
  "SourceApplicationName": "string",
  "SourceType": "SALESFORCE",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createintegrationassociation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» IntegrationType|body|string|true|The type of information to be ingested.|
|» IntegrationArn|body|string|true|<p>The Amazon Resource Name (ARN) of the integration.</p> <note> <p>When integrating with Amazon Pinpoint, the Amazon Connect and Amazon Pinpoint instances must be in the same account.</p> </note>|
|» SourceApplicationUrl|body|string|false|The URL for the external application. This field is only required for the EVENT integration type.|
|» SourceApplicationName|body|string|false|The name of the external application. This field is only required for the EVENT integration type.|
|» SourceType|body|string|false|The type of the data source. This field is only required for the EVENT integration type.|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» IntegrationType|EVENT|
|» IntegrationType|VOICE_ID|
|» IntegrationType|PINPOINT_APP|
|» IntegrationType|WISDOM_ASSISTANT|
|» IntegrationType|WISDOM_KNOWLEDGE_BASE|
|» IntegrationType|CASES_DOMAIN|
|» SourceType|SALESFORCE|
|» SourceType|ZENDESK|

> Example responses

> 200 Response

```json
{
  "IntegrationAssociationId": {},
  "IntegrationAssociationArn": {}
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

<h3 id="createintegrationassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateIntegrationAssociationResponse](#schemacreateintegrationassociationresponse)|
|480|480|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateParticipant

<a id="opIdCreateParticipant"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/create-participant \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "ContactId": "string",
    "ClientToken": "string",
    "ParticipantDetails": {
      "ParticipantRole": {},
      "DisplayName": {}
    }
  }'
```

`POST /contact/create-participant`

Adds a new participant into an on-going chat contact. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-customize-flow.html">Customize chat flow experiences by integrating custom participants</a>.

> Body parameter

```json
{
  "InstanceId": "string",
  "ContactId": "string",
  "ClientToken": "string",
  "ParticipantDetails": {
    "ParticipantRole": {},
    "DisplayName": {}
  }
}
```

<h3 id="createparticipant-parameters">Parameters</h3>

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
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance. |
|» ContactId|body|string|true|The identifier of the contact in this instance of Amazon Connect. Only contacts in the CHAT channel are supported.|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|
|» ParticipantDetails|body|object|true|The details to add for the participant.|
|» » ParticipantRole|body|object|false|none|
|» » DisplayName|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "ParticipantCredentials": {
    "ParticipantToken": {},
    "Expiry": {}
  },
  "ParticipantId": {}
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

<h3 id="createparticipant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateParticipantResponse](#schemacreateparticipantresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateQueue

<a id="opIdCreateQueue"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/queues/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "OutboundCallerConfig": {
      "OutboundCallerIdName": {},
      "OutboundCallerIdNumberId": {},
      "OutboundFlowId": {}
    },
    "HoursOfOperationId": "string",
    "MaxContacts": 0,
    "QuickConnectIds": [
      "string"
    ],
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /queues/{InstanceId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Creates a new queue for the specified Amazon Connect instance.</p> <important> <p>If the number being used in the input is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the <code>OutboundCallerIdNumberId</code> value of the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_OutboundCallerConfig">OutboundCallerConfig</a> request body parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a <code>ResourceNotFoundException</code>.</p> </important>

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "OutboundCallerConfig": {
    "OutboundCallerIdName": {},
    "OutboundCallerIdNumberId": {},
    "OutboundFlowId": {}
  },
  "HoursOfOperationId": "string",
  "MaxContacts": 0,
  "QuickConnectIds": [
    "string"
  ],
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the queue.|
|» Description|body|string|false|The description of the queue.|
|» OutboundCallerConfig|body|object|false|The outbound caller ID name, number, and outbound whisper flow.|
|» » OutboundCallerIdName|body|object|false|none|
|» » OutboundCallerIdNumberId|body|object|false|none|
|» » OutboundFlowId|body|object|false|none|
|» HoursOfOperationId|body|string|true|The identifier for the hours of operation.|
|» MaxContacts|body|integer|false|The maximum number of contacts that can be in the queue before it is considered full.|
|» QuickConnectIds|body|[[QuickConnectId](#schemaquickconnectid)]|false|The quick connects available to agents who are working the queue.|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "QueueArn": {},
  "QueueId": {}
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

<h3 id="createqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateQueueResponse](#schemacreatequeueresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListQuickConnects

<a id="opIdListQuickConnects"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/quick-connects/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /quick-connects/{InstanceId}`

Provides information about the quick connects for the specified Amazon Connect instance. 

<h3 id="listquickconnects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page. The default MaxResult size is 100.|
|QuickConnectTypes|query|[[QuickConnectType](#schemaquickconnecttype)]|false|The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|QuickConnectTypes|USER|
|QuickConnectTypes|QUEUE|
|QuickConnectTypes|PHONE_NUMBER|

> Example responses

> 200 Response

```json
{
  "QuickConnectSummaryList": {},
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

<h3 id="listquickconnects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListQuickConnectsResponse](#schemalistquickconnectsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateQuickConnect

<a id="opIdCreateQuickConnect"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/quick-connects/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "QuickConnectConfig": {
      "QuickConnectType": {},
      "UserConfig": {
        "UserId": {},
        "ContactFlowId": {}
      },
      "QueueConfig": {
        "QueueId": {},
        "ContactFlowId": {}
      },
      "PhoneConfig": {
        "PhoneNumber": {}
      }
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /quick-connects/{InstanceId}`

Creates a quick connect for the specified Amazon Connect instance.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "QuickConnectConfig": {
    "QuickConnectType": {},
    "UserConfig": {
      "UserId": {},
      "ContactFlowId": {}
    },
    "QueueConfig": {
      "QueueId": {},
      "ContactFlowId": {}
    },
    "PhoneConfig": {
      "PhoneNumber": {}
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createquickconnect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the quick connect.|
|» Description|body|string|false|The description of the quick connect.|
|» QuickConnectConfig|body|object|true|Contains configuration settings for a quick connect.|
|» » QuickConnectType|body|object|false|none|
|» » UserConfig|body|object|false|none|
|» » » UserId|body|object|true|none|
|» » » ContactFlowId|body|object|true|none|
|» » QueueConfig|body|object|false|none|
|» » » QueueId|body|object|true|none|
|» » » ContactFlowId|body|object|true|none|
|» » PhoneConfig|body|object|false|none|
|» » » PhoneNumber|body|object|true|none|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "QuickConnectARN": {},
  "QuickConnectId": {}
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

<h3 id="createquickconnect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateQuickConnectResponse](#schemacreatequickconnectresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRoutingProfile

<a id="opIdCreateRoutingProfile"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/routing-profiles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "DefaultOutboundQueueId": "string",
    "QueueConfigs": [
      {
        "QueueReference": {
          "QueueId": {},
          "Channel": {}
        },
        "Priority": {},
        "Delay": {}
      }
    ],
    "MediaConcurrencies": [
      {
        "Channel": {},
        "Concurrency": {},
        "CrossChannelBehavior": {
          "BehaviorType": {}
        }
      }
    ],
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /routing-profiles/{InstanceId}`

Creates a new routing profile.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "DefaultOutboundQueueId": "string",
  "QueueConfigs": [
    {
      "QueueReference": {
        "QueueId": {},
        "Channel": {}
      },
      "Priority": {},
      "Delay": {}
    }
  ],
  "MediaConcurrencies": [
    {
      "Channel": {},
      "Concurrency": {},
      "CrossChannelBehavior": {
        "BehaviorType": {}
      }
    }
  ],
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createroutingprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the routing profile. Must not be more than 127 characters.|
|» Description|body|string|true|Description of the routing profile. Must not be more than 250 characters.|
|» DefaultOutboundQueueId|body|string|true|The default outbound queue for the routing profile.|
|» QueueConfigs|body|[[RoutingProfileQueueConfig](#schemaroutingprofilequeueconfig)]|false|<p>The inbound queues associated with the routing profile. If no queue is added, the agent can make only outbound calls.</p> <p>The limit of 10 array members applies to the maximum number of <code>RoutingProfileQueueConfig</code> objects that can be passed during a CreateRoutingProfile API request. It is different from the quota of 50 queues per routing profile per instance that is listed in <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect service quotas</a>. </p>|
|» MediaConcurrencies|body|[[MediaConcurrency](#schemamediaconcurrency)]|true|The channels that agents can handle in the Contact Control Panel (CCP) for this routing profile.|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "RoutingProfileArn": {},
  "RoutingProfileId": {}
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

<h3 id="createroutingprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRoutingProfileResponse](#schemacreateroutingprofileresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRules

<a id="opIdListRules"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/rules/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /rules/{InstanceId}`

List all rules for the specified Amazon Connect instance.

<h3 id="listrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|publishStatus|query|string|false|The publish status of the rule.|
|eventSourceName|query|string|false|The name of the event source.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|publishStatus|DRAFT|
|publishStatus|PUBLISHED|
|eventSourceName|OnPostCallAnalysisAvailable|
|eventSourceName|OnRealTimeCallAnalysisAvailable|
|eventSourceName|OnPostChatAnalysisAvailable|
|eventSourceName|OnZendeskTicketCreate|
|eventSourceName|OnZendeskTicketStatusUpdate|
|eventSourceName|OnSalesforceCaseCreate|

> Example responses

> 200 Response

```json
{
  "RuleSummaryList": {},
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

<h3 id="listrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRulesResponse](#schemalistrulesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRule

<a id="opIdCreateRule"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/rules/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "TriggerEventSource": {
      "EventSourceName": {},
      "IntegrationAssociationId": {}
    },
    "Function": "string",
    "Actions": [
      {
        "ActionType": {},
        "TaskAction": {
          "Name": {},
          "Description": {},
          "ContactFlowId": {},
          "References": {
            "property1": {
              "Value": {},
              "Type": {}
            },
            "property2": {
              "Value": {},
              "Type": {}
            }
          }
        },
        "EventBridgeAction": {
          "Name": {}
        },
        "AssignContactCategoryAction": {},
        "SendNotificationAction": {
          "DeliveryMethod": {},
          "Subject": {},
          "Content": {},
          "ContentType": {},
          "Recipient": {
            "UserTags": {
              "property1": "string",
              "property2": "string"
            },
            "UserIds": {}
          }
        }
      }
    ],
    "PublishStatus": "DRAFT",
    "ClientToken": "string"
  }'
```

`POST /rules/{InstanceId}`

<p>Creates a rule for the specified Amazon Connect instance.</p> <p>Use the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/connect-rules-language.html">Rules Function language</a> to code conditions for the rule. </p>

> Body parameter

```json
{
  "Name": "string",
  "TriggerEventSource": {
    "EventSourceName": {},
    "IntegrationAssociationId": {}
  },
  "Function": "string",
  "Actions": [
    {
      "ActionType": {},
      "TaskAction": {
        "Name": {},
        "Description": {},
        "ContactFlowId": {},
        "References": {
          "property1": {
            "Value": {},
            "Type": {}
          },
          "property2": {
            "Value": {},
            "Type": {}
          }
        }
      },
      "EventBridgeAction": {
        "Name": {}
      },
      "AssignContactCategoryAction": {},
      "SendNotificationAction": {
        "DeliveryMethod": {},
        "Subject": {},
        "Content": {},
        "ContentType": {},
        "Recipient": {
          "UserTags": {
            "property1": "string",
            "property2": "string"
          },
          "UserIds": {}
        }
      }
    }
  ],
  "PublishStatus": "DRAFT",
  "ClientToken": "string"
}
```

<h3 id="createrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|A unique name for the rule.|
|» TriggerEventSource|body|object|true|The name of the event source. This field is required if <code>TriggerEventSource</code> is one of the following values: <code>OnZendeskTicketCreate</code> \| <code>OnZendeskTicketStatusUpdate</code> \| <code>OnSalesforceCaseCreate</code> |
|» » EventSourceName|body|object|false|none|
|» » IntegrationAssociationId|body|object|false|none|
|» Function|body|string|true|The conditions of the rule.|
|» Actions|body|[[RuleAction](#schemaruleaction)]|true|A list of actions to be run when the rule is triggered.|
|» PublishStatus|body|string|true|The publish status of the rule.|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PublishStatus|DRAFT|
|» PublishStatus|PUBLISHED|

> Example responses

> 200 Response

```json
{
  "RuleArn": {},
  "RuleId": {}
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

<h3 id="createrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRuleResponse](#schemacreateruleresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSecurityProfile

<a id="opIdCreateSecurityProfile"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/security-profiles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SecurityProfileName": "string",
    "Description": "string",
    "Permissions": [
      "string"
    ],
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "AllowedAccessControlTags": {
      "property1": "string",
      "property2": "string"
    },
    "TagRestrictedResources": [
      "string"
    ]
  }'
```

`PUT /security-profiles/{InstanceId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Creates a security profile.</p>

> Body parameter

```json
{
  "SecurityProfileName": "string",
  "Description": "string",
  "Permissions": [
    "string"
  ],
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "AllowedAccessControlTags": {
    "property1": "string",
    "property2": "string"
  },
  "TagRestrictedResources": [
    "string"
  ]
}
```

<h3 id="createsecurityprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SecurityProfileName|body|string|true|The name of the security profile.|
|» Description|body|string|false|The description of the security profile.|
|» Permissions|body|[[SecurityProfilePermission](#schemasecurityprofilepermission)]|false|Permissions assigned to the security profile. For a list of valid permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security profile permissions</a>. |
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» AllowedAccessControlTags|body|object|false|The list of tags that a security profile uses to restrict access to resources in Amazon Connect.|
|» » **additionalProperties**|body|[SecurityProfilePolicyValue](#schemasecurityprofilepolicyvalue)|false|none|
|» TagRestrictedResources|body|[[TagRestrictedResourceName](#schematagrestrictedresourcename)]|false|The list of resources that a security profile applies tag restrictions to in Amazon Connect. Following are acceptable ResourceNames: <code>User</code> \| <code>SecurityProfile</code> \| <code>Queue</code> \| <code>RoutingProfile</code> |

> Example responses

> 200 Response

```json
{
  "SecurityProfileId": {},
  "SecurityProfileArn": {}
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

<h3 id="createsecurityprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSecurityProfileResponse](#schemacreatesecurityprofileresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTaskTemplates

<a id="opIdListTaskTemplates"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/task/template \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /instance/{InstanceId}/task/template`

Lists task templates for the specified Amazon Connect instance.

<h3 id="listtasktemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|nextToken|query|string|false|<p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p> <important> <p>It is not expected that you set this because the value returned in the previous response is always null.</p> </important>|
|maxResults|query|integer|false|<p>The maximum number of results to return per page.</p> <important> <p>It is not expected that you set this.</p> </important>|
|status|query|string|false|Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it. Tasks can only be created from <code>ACTIVE</code> templates. If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.|
|name|query|string|false|The name of the task template.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|

> Example responses

> 200 Response

```json
{
  "TaskTemplates": {},
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

<h3 id="listtasktemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTaskTemplatesResponse](#schemalisttasktemplatesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTaskTemplate

<a id="opIdCreateTaskTemplate"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/task/template \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "ContactFlowId": "string",
    "Constraints": {
      "RequiredFields": {},
      "ReadOnlyFields": {},
      "InvisibleFields": {}
    },
    "Defaults": {
      "DefaultFieldValues": {}
    },
    "Status": "ACTIVE",
    "Fields": [
      {
        "Id": {
          "Name": {}
        },
        "Description": {},
        "Type": {},
        "SingleSelectOptions": {}
      }
    ],
    "ClientToken": "string"
  }'
```

`PUT /instance/{InstanceId}/task/template`

Creates a new task template in the specified Amazon Connect instance.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "ContactFlowId": "string",
  "Constraints": {
    "RequiredFields": {},
    "ReadOnlyFields": {},
    "InvisibleFields": {}
  },
  "Defaults": {
    "DefaultFieldValues": {}
  },
  "Status": "ACTIVE",
  "Fields": [
    {
      "Id": {
        "Name": {}
      },
      "Description": {},
      "Type": {},
      "SingleSelectOptions": {}
    }
  ],
  "ClientToken": "string"
}
```

<h3 id="createtasktemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the task template.|
|» Description|body|string|false|The description of the task template.|
|» ContactFlowId|body|string|false|The identifier of the flow that runs by default when a task is created by referencing this template.|
|» Constraints|body|object|false|Describes constraints that apply to the template fields.|
|» » RequiredFields|body|object|false|none|
|» » ReadOnlyFields|body|object|false|none|
|» » InvisibleFields|body|object|false|none|
|» Defaults|body|object|false|Describes default values for fields on a template.|
|» » DefaultFieldValues|body|object|false|none|
|» Status|body|string|false|Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it. Tasks can only be created from <code>ACTIVE</code> templates. If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created. |
|» Fields|body|[[TaskTemplateField](#schematasktemplatefield)]|true|Fields that are part of the template.|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|ACTIVE|
|» Status|INACTIVE|

> Example responses

> 200 Response

```json
{
  "Id": {},
  "Arn": {}
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

<h3 id="createtasktemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTaskTemplateResponse](#schemacreatetasktemplateresponse)|
|480|480|PropertyValidationException|[PropertyValidationException](#schemapropertyvalidationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTrafficDistributionGroup

<a id="opIdCreateTrafficDistributionGroup"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/traffic-distribution-group \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "InstanceId": "string",
    "ClientToken": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /traffic-distribution-group`

<p>Creates a traffic distribution group given an Amazon Connect instance that has been replicated. </p> <p>For more information about creating traffic distribution groups, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-traffic-distribution-groups.html">Set up traffic distribution groups</a> in the <i>Amazon Connect Administrator Guide</i>. </p>

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "InstanceId": "string",
  "ClientToken": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createtrafficdistributiongroup-parameters">Parameters</h3>

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
|» Name|body|string|true|The name for the traffic distribution group. |
|» Description|body|string|false|A description for the traffic distribution group.|
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance that has been replicated. You can find the <code>instanceId</code> in the ARN of the instance.|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "Id": {},
  "Arn": {}
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

<h3 id="createtrafficdistributiongroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTrafficDistributionGroupResponse](#schemacreatetrafficdistributiongroupresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|486|486|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|487|487|ResourceNotReadyException|[ResourceNotReadyException](#schemaresourcenotreadyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUseCases

<a id="opIdListUseCases"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/integration-associations/string/use-cases \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases`

Lists the use cases for the integration association. 

<h3 id="listusecases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|IntegrationAssociationId|path|string|true|The identifier for the integration association.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "UseCaseSummaryList": {},
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

<h3 id="listusecases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUseCasesResponse](#schemalistusecasesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUseCase

<a id="opIdCreateUseCase"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/integration-associations/string/use-cases \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "UseCaseType": "RULES_EVALUATION",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases`

Creates a use case for an integration association.

> Body parameter

```json
{
  "UseCaseType": "RULES_EVALUATION",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createusecase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|IntegrationAssociationId|path|string|true|The identifier for the integration association.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» UseCaseType|body|string|true|The type of use case to associate to the integration association. Each integration association can have only one of each use case type.|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» UseCaseType|RULES_EVALUATION|
|» UseCaseType|CONNECT_CAMPAIGNS|

> Example responses

> 200 Response

```json
{
  "UseCaseId": {},
  "UseCaseArn": {}
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

<h3 id="createusecase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUseCaseResponse](#schemacreateusecaseresponse)|
|480|480|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUser

<a id="opIdCreateUser"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/users/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Username": "string",
    "Password": "string",
    "IdentityInfo": {
      "FirstName": {},
      "LastName": {},
      "Email": {},
      "SecondaryEmail": {},
      "Mobile": {}
    },
    "PhoneConfig": {
      "PhoneType": {},
      "AutoAccept": {},
      "AfterContactWorkTimeLimit": {},
      "DeskPhoneNumber": {}
    },
    "DirectoryUserId": "string",
    "SecurityProfileIds": [
      "string"
    ],
    "RoutingProfileId": "string",
    "HierarchyGroupId": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /users/{InstanceId}`

<p>Creates a user account for the specified Amazon Connect instance.</p> <p>For information about how to create user accounts using the Amazon Connect console, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/user-management.html">Add Users</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

> Body parameter

```json
{
  "Username": "string",
  "Password": "string",
  "IdentityInfo": {
    "FirstName": {},
    "LastName": {},
    "Email": {},
    "SecondaryEmail": {},
    "Mobile": {}
  },
  "PhoneConfig": {
    "PhoneType": {},
    "AutoAccept": {},
    "AfterContactWorkTimeLimit": {},
    "DeskPhoneNumber": {}
  },
  "DirectoryUserId": "string",
  "SecurityProfileIds": [
    "string"
  ],
  "RoutingProfileId": "string",
  "HierarchyGroupId": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Username|body|string|true|The user name for the account. For instances not using SAML for identity management, the user name can include up to 20 characters. If you are using SAML for identity management, the user name can include up to 64 characters from [a-zA-Z0-9_-.\@]+.|
|» Password|body|string|false|The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.|
|» IdentityInfo|body|object|false|Contains information about the identity of a user.|
|» » FirstName|body|object|false|none|
|» » LastName|body|object|false|none|
|» » Email|body|object|false|none|
|» » SecondaryEmail|body|object|false|none|
|» » Mobile|body|object|false|none|
|» PhoneConfig|body|object|true|Contains information about the phone configuration settings for a user.|
|» » PhoneType|body|object|false|none|
|» » AutoAccept|body|object|false|none|
|» » AfterContactWorkTimeLimit|body|object|false|none|
|» » DeskPhoneNumber|body|object|false|none|
|» DirectoryUserId|body|string|false|<p>The identifier of the user account in the directory used for identity management. If Amazon Connect cannot access the directory, you can specify this identifier to authenticate users. If you include the identifier, we assume that Amazon Connect cannot access the directory. Otherwise, the identity information is used to authenticate users from your directory.</p> <p>This parameter is required if you are using an existing directory for identity management in Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an error is returned.</p>|
|» SecurityProfileIds|body|[[SecurityProfileId](#schemasecurityprofileid)]|true|The identifier of the security profile for the user.|
|» RoutingProfileId|body|string|true|The identifier of the routing profile for the user.|
|» HierarchyGroupId|body|string|false|The identifier of the hierarchy group for the user.|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "UserId": {},
  "UserArn": {}
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

<h3 id="createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUserResponse](#schemacreateuserresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUserHierarchyGroup

<a id="opIdCreateUserHierarchyGroup"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/user-hierarchy-groups/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "ParentGroupId": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /user-hierarchy-groups/{InstanceId}`

Creates a new user hierarchy group.

> Body parameter

```json
{
  "Name": "string",
  "ParentGroupId": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createuserhierarchygroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the user hierarchy group. Must not be more than 100 characters.|
|» ParentGroupId|body|string|false|The identifier for the parent hierarchy group. The user hierarchy is created at level one if the parent group ID is null.|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "HierarchyGroupId": {},
  "HierarchyGroupArn": {}
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

<h3 id="createuserhierarchygroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUserHierarchyGroupResponse](#schemacreateuserhierarchygroupresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVocabulary

<a id="opIdCreateVocabulary"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/vocabulary/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ClientToken": "string",
    "VocabularyName": "string",
    "LanguageCode": "ar-AE",
    "Content": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /vocabulary/{InstanceId}`

Creates a custom vocabulary associated with your Amazon Connect instance. You can set a custom vocabulary to be your default vocabulary for a given language. Contact Lens for Amazon Connect uses the default vocabulary in post-call and real-time contact analysis sessions for that language.

> Body parameter

```json
{
  "ClientToken": "string",
  "VocabularyName": "string",
  "LanguageCode": "ar-AE",
  "Content": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createvocabulary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>. If a create request is received more than once with same client token, subsequent requests return the previous response without creating a vocabulary again.|
|» VocabularyName|body|string|true|A unique name of the custom vocabulary.|
|» LanguageCode|body|string|true|The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a> |
|» Content|body|string|true|The content of the custom vocabulary in plain-text format with a table of values. Each row in the table represents a word or a phrase, described with <code>Phrase</code>, <code>IPA</code>, <code>SoundsLike</code>, and <code>DisplayAs</code> fields. Separate the fields with TAB characters. The size limit is 50KB. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html#create-vocabulary-table">Create a custom vocabulary using a table</a>.|
|» Tags|body|object|false|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» LanguageCode|ar-AE|
|» LanguageCode|de-CH|
|» LanguageCode|de-DE|
|» LanguageCode|en-AB|
|» LanguageCode|en-AU|
|» LanguageCode|en-GB|
|» LanguageCode|en-IE|
|» LanguageCode|en-IN|
|» LanguageCode|en-US|
|» LanguageCode|en-WL|
|» LanguageCode|es-ES|
|» LanguageCode|es-US|
|» LanguageCode|fr-CA|
|» LanguageCode|fr-FR|
|» LanguageCode|hi-IN|
|» LanguageCode|it-IT|
|» LanguageCode|ja-JP|
|» LanguageCode|ko-KR|
|» LanguageCode|pt-BR|
|» LanguageCode|pt-PT|
|» LanguageCode|zh-CN|
|» LanguageCode|en-NZ|
|» LanguageCode|en-ZA|

> Example responses

> 200 Response

```json
{
  "VocabularyArn": {},
  "VocabularyId": {},
  "State": {}
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

<h3 id="createvocabulary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVocabularyResponse](#schemacreatevocabularyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeContactFlow

<a id="opIdDescribeContactFlow"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact-flows/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /contact-flows/{InstanceId}/{ContactFlowId}`

<p>Describes the specified flow.</p> <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect Flow language</a>.</p>

<h3 id="describecontactflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance.|
|ContactFlowId|path|string|true|The identifier of the flow.|
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
  "ContactFlow": {
    "Arn": {},
    "Id": {},
    "Name": {},
    "Type": {},
    "State": {},
    "Description": {},
    "Content": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="describecontactflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeContactFlowResponse](#schemadescribecontactflowresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ContactFlowNotPublishedException|[ContactFlowNotPublishedException](#schemacontactflownotpublishedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteContactFlow

<a id="opIdDeleteContactFlow"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact-flows/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /contact-flows/{InstanceId}/{ContactFlowId}`

Deletes a flow for the specified Amazon Connect instance.

<h3 id="deletecontactflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|ContactFlowId|path|string|true|The identifier of the flow.|
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

<h3 id="deletecontactflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteContactFlowResponse](#schemadeletecontactflowresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeContactFlowModule

<a id="opIdDescribeContactFlowModule"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact-flow-modules/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /contact-flow-modules/{InstanceId}/{ContactFlowModuleId}`

Describes the specified flow module.

<h3 id="describecontactflowmodule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|ContactFlowModuleId|path|string|true|The identifier of the flow module.|
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
  "ContactFlowModule": {
    "Arn": {},
    "Id": {},
    "Name": {},
    "Content": {},
    "Description": {},
    "State": {},
    "Status": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="describecontactflowmodule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeContactFlowModuleResponse](#schemadescribecontactflowmoduleresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteContactFlowModule

<a id="opIdDeleteContactFlowModule"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact-flow-modules/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /contact-flow-modules/{InstanceId}/{ContactFlowModuleId}`

Deletes the specified flow module.

<h3 id="deletecontactflowmodule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|ContactFlowModuleId|path|string|true|The identifier of the flow module.|
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

<h3 id="deletecontactflowmodule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteContactFlowModuleResponse](#schemadeletecontactflowmoduleresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeHoursOfOperation

<a id="opIdDescribeHoursOfOperation"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/hours-of-operations/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /hours-of-operations/{InstanceId}/{HoursOfOperationId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Describes the hours of operation.</p>

<h3 id="describehoursofoperation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|HoursOfOperationId|path|string|true|The identifier for the hours of operation.|
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
  "HoursOfOperation": {
    "HoursOfOperationId": {},
    "HoursOfOperationArn": {},
    "Name": {},
    "Description": {},
    "TimeZone": {},
    "Config": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
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

> 484 Response

```json
null
```

<h3 id="describehoursofoperation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeHoursOfOperationResponse](#schemadescribehoursofoperationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateHoursOfOperation

<a id="opIdUpdateHoursOfOperation"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/hours-of-operations/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "TimeZone": "string",
    "Config": [
      {
        "Day": {},
        "StartTime": {
          "Hours": {},
          "Minutes": {}
        },
        "EndTime": {
          "Hours": {},
          "Minutes": {}
        }
      }
    ]
  }'
```

`POST /hours-of-operations/{InstanceId}/{HoursOfOperationId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates the hours of operation.</p>

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "TimeZone": "string",
  "Config": [
    {
      "Day": {},
      "StartTime": {
        "Hours": {},
        "Minutes": {}
      },
      "EndTime": {
        "Hours": {},
        "Minutes": {}
      }
    }
  ]
}
```

<h3 id="updatehoursofoperation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|HoursOfOperationId|path|string|true|The identifier of the hours of operation.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the hours of operation.|
|» Description|body|string|false|The description of the hours of operation.|
|» TimeZone|body|string|false|The time zone of the hours of operation.|
|» Config|body|[[HoursOfOperationConfig](#schemahoursofoperationconfig)]|false|Configuration information of the hours of operation.|

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

<h3 id="updatehoursofoperation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteHoursOfOperation

<a id="opIdDeleteHoursOfOperation"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/hours-of-operations/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /hours-of-operations/{InstanceId}/{HoursOfOperationId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Deletes an hours of operation.</p>

<h3 id="deletehoursofoperation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|HoursOfOperationId|path|string|true|The identifier for the hours of operation.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deletehoursofoperation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInstance

<a id="opIdDescribeInstance"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /instance/{InstanceId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Returns the current state of the specified instance identifier. It tracks the instance while it is being created and returns an error status, if applicable. </p> <p>If an instance is not created successfully, the instance status reason field returns details relevant to the reason. The instance in a failed state is returned only for 24 hours after the CreateInstance API was invoked.</p>

<h3 id="describeinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
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
  "Instance": {
    "Id": {},
    "Arn": {},
    "IdentityManagementType": {},
    "InstanceAlias": {},
    "CreatedTime": {},
    "ServiceRole": {},
    "InstanceStatus": {},
    "StatusReason": {
      "Message": {}
    },
    "InboundCallsEnabled": {},
    "OutboundCallsEnabled": {}
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

<h3 id="describeinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInstanceResponse](#schemadescribeinstanceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInstance

<a id="opIdDeleteInstance"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /instance/{InstanceId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Deletes the Amazon Connect instance.</p> <p>Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account.</p>

<h3 id="deleteinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deleteinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIntegrationAssociation

<a id="opIdDeleteIntegrationAssociation"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/integration-associations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /instance/{InstanceId}/integration-associations/{IntegrationAssociationId}`

Deletes an Amazon Web Services resource association from an Amazon Connect instance. The association must not have any use cases associated with it.

<h3 id="deleteintegrationassociation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|IntegrationAssociationId|path|string|true|The identifier for the integration association.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deleteintegrationassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeQuickConnect

<a id="opIdDescribeQuickConnect"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/quick-connects/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /quick-connects/{InstanceId}/{QuickConnectId}`

Describes the quick connect.

<h3 id="describequickconnect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|QuickConnectId|path|string|true|The identifier for the quick connect.|
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
  "QuickConnect": {
    "QuickConnectARN": {},
    "QuickConnectId": {},
    "Name": {},
    "Description": {},
    "QuickConnectConfig": {
      "QuickConnectType": {},
      "UserConfig": {
        "UserId": {},
        "ContactFlowId": {}
      },
      "QueueConfig": {
        "QueueId": {},
        "ContactFlowId": {}
      },
      "PhoneConfig": {
        "PhoneNumber": {}
      }
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
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

> 484 Response

```json
null
```

<h3 id="describequickconnect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeQuickConnectResponse](#schemadescribequickconnectresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteQuickConnect

<a id="opIdDeleteQuickConnect"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/quick-connects/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /quick-connects/{InstanceId}/{QuickConnectId}`

Deletes a quick connect.

<h3 id="deletequickconnect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|QuickConnectId|path|string|true|The identifier for the quick connect.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deletequickconnect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRule

<a id="opIdDescribeRule"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/rules/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /rules/{InstanceId}/{RuleId}`

Describes a rule for the specified Amazon Connect instance.

<h3 id="describerule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|RuleId|path|string|true|A unique identifier for the rule.|
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
  "Rule": {
    "Name": {},
    "RuleId": {},
    "RuleArn": {},
    "TriggerEventSource": {
      "EventSourceName": {},
      "IntegrationAssociationId": {}
    },
    "Function": {},
    "Actions": {},
    "PublishStatus": {},
    "CreatedTime": {},
    "LastUpdatedTime": {},
    "LastUpdatedBy": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
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

> 484 Response

```json
null
```

<h3 id="describerule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRuleResponse](#schemadescriberuleresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRule

<a id="opIdUpdateRule"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/rules/string/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Function": "string",
    "Actions": [
      {
        "ActionType": {},
        "TaskAction": {
          "Name": {},
          "Description": {},
          "ContactFlowId": {},
          "References": {
            "property1": {
              "Value": {},
              "Type": {}
            },
            "property2": {
              "Value": {},
              "Type": {}
            }
          }
        },
        "EventBridgeAction": {
          "Name": {}
        },
        "AssignContactCategoryAction": {},
        "SendNotificationAction": {
          "DeliveryMethod": {},
          "Subject": {},
          "Content": {},
          "ContentType": {},
          "Recipient": {
            "UserTags": {
              "property1": "string",
              "property2": "string"
            },
            "UserIds": {}
          }
        }
      }
    ],
    "PublishStatus": "DRAFT"
  }'
```

`PUT /rules/{InstanceId}/{RuleId}`

<p>Updates a rule for the specified Amazon Connect instance.</p> <p>Use the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/connect-rules-language.html">Rules Function language</a> to code conditions for the rule. </p>

> Body parameter

```json
{
  "Name": "string",
  "Function": "string",
  "Actions": [
    {
      "ActionType": {},
      "TaskAction": {
        "Name": {},
        "Description": {},
        "ContactFlowId": {},
        "References": {
          "property1": {
            "Value": {},
            "Type": {}
          },
          "property2": {
            "Value": {},
            "Type": {}
          }
        }
      },
      "EventBridgeAction": {
        "Name": {}
      },
      "AssignContactCategoryAction": {},
      "SendNotificationAction": {
        "DeliveryMethod": {},
        "Subject": {},
        "Content": {},
        "ContentType": {},
        "Recipient": {
          "UserTags": {
            "property1": "string",
            "property2": "string"
          },
          "UserIds": {}
        }
      }
    }
  ],
  "PublishStatus": "DRAFT"
}
```

<h3 id="updaterule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleId|path|string|true|A unique identifier for the rule.|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the rule. You can change the name only if <code>TriggerEventSource</code> is one of the following values: <code>OnZendeskTicketCreate</code> \| <code>OnZendeskTicketStatusUpdate</code> \| <code>OnSalesforceCaseCreate</code> |
|» Function|body|string|true|The conditions of the rule.|
|» Actions|body|[[RuleAction](#schemaruleaction)]|true|A list of actions to be run when the rule is triggered.|
|» PublishStatus|body|string|true|The publish status of the rule.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PublishStatus|DRAFT|
|» PublishStatus|PUBLISHED|

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

<h3 id="updaterule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRule

<a id="opIdDeleteRule"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/rules/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /rules/{InstanceId}/{RuleId}`

Deletes a rule for the specified Amazon Connect instance.

<h3 id="deleterule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|RuleId|path|string|true|A unique identifier for the rule.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deleterule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSecurityProfile

<a id="opIdDescribeSecurityProfile"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/security-profiles/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /security-profiles/{InstanceId}/{SecurityProfileId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Gets basic information about the security profle.</p>

<h3 id="describesecurityprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SecurityProfileId|path|string|true|The identifier for the security profle.|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
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
  "SecurityProfile": {
    "Id": {},
    "OrganizationResourceId": {},
    "Arn": {},
    "SecurityProfileName": {},
    "Description": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "AllowedAccessControlTags": {
      "property1": "string",
      "property2": "string"
    },
    "TagRestrictedResources": {}
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

<h3 id="describesecurityprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSecurityProfileResponse](#schemadescribesecurityprofileresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSecurityProfile

<a id="opIdUpdateSecurityProfile"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/security-profiles/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "Permissions": [
      "string"
    ],
    "AllowedAccessControlTags": {
      "property1": "string",
      "property2": "string"
    },
    "TagRestrictedResources": [
      "string"
    ]
  }'
```

`POST /security-profiles/{InstanceId}/{SecurityProfileId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates a security profile.</p>

> Body parameter

```json
{
  "Description": "string",
  "Permissions": [
    "string"
  ],
  "AllowedAccessControlTags": {
    "property1": "string",
    "property2": "string"
  },
  "TagRestrictedResources": [
    "string"
  ]
}
```

<h3 id="updatesecurityprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SecurityProfileId|path|string|true|The identifier for the security profle.|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|The description of the security profile.|
|» Permissions|body|[[SecurityProfilePermission](#schemasecurityprofilepermission)]|false|The permissions granted to a security profile. For a list of valid permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security profile permissions</a>.|
|» AllowedAccessControlTags|body|object|false|The list of tags that a security profile uses to restrict access to resources in Amazon Connect.|
|» » **additionalProperties**|body|[SecurityProfilePolicyValue](#schemasecurityprofilepolicyvalue)|false|none|
|» TagRestrictedResources|body|[[TagRestrictedResourceName](#schematagrestrictedresourcename)]|false|The list of resources that a security profile applies tag restrictions to in Amazon Connect.|

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

<h3 id="updatesecurityprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSecurityProfile

<a id="opIdDeleteSecurityProfile"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/security-profiles/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /security-profiles/{InstanceId}/{SecurityProfileId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Deletes a security profile.</p>

<h3 id="deletesecurityprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|SecurityProfileId|path|string|true|The identifier for the security profle.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deletesecurityprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTaskTemplate

<a id="opIdGetTaskTemplate"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/task/template/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /instance/{InstanceId}/task/template/{TaskTemplateId}`

Gets details about a specific task template in the specified Amazon Connect instance.

<h3 id="gettasktemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|TaskTemplateId|path|string|true|A unique identifier for the task template.|
|snapshotVersion|query|string|false|The system generated version of a task template that is associated with a task, when the task is created.|
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
  "InstanceId": {},
  "Id": {},
  "Arn": {},
  "Name": {},
  "Description": {},
  "ContactFlowId": {},
  "Constraints": {
    "RequiredFields": {},
    "ReadOnlyFields": {},
    "InvisibleFields": {}
  },
  "Defaults": {
    "DefaultFieldValues": {}
  },
  "Fields": {},
  "Status": {},
  "LastModifiedTime": {},
  "CreatedTime": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
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

<h3 id="gettasktemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTaskTemplateResponse](#schemagettasktemplateresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTaskTemplate

<a id="opIdUpdateTaskTemplate"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/task/template/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "ContactFlowId": "string",
    "Constraints": {
      "RequiredFields": {},
      "ReadOnlyFields": {},
      "InvisibleFields": {}
    },
    "Defaults": {
      "DefaultFieldValues": {}
    },
    "Status": "ACTIVE",
    "Fields": [
      {
        "Id": {
          "Name": {}
        },
        "Description": {},
        "Type": {},
        "SingleSelectOptions": {}
      }
    ]
  }'
```

`POST /instance/{InstanceId}/task/template/{TaskTemplateId}`

Updates details about a specific task template in the specified Amazon Connect instance. This operation does not support partial updates. Instead it does a full update of template content.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "ContactFlowId": "string",
  "Constraints": {
    "RequiredFields": {},
    "ReadOnlyFields": {},
    "InvisibleFields": {}
  },
  "Defaults": {
    "DefaultFieldValues": {}
  },
  "Status": "ACTIVE",
  "Fields": [
    {
      "Id": {
        "Name": {}
      },
      "Description": {},
      "Type": {},
      "SingleSelectOptions": {}
    }
  ]
}
```

<h3 id="updatetasktemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TaskTemplateId|path|string|true|A unique identifier for the task template.|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the task template.|
|» Description|body|string|false|The description of the task template.|
|» ContactFlowId|body|string|false|The identifier of the flow that runs by default when a task is created by referencing this template.|
|» Constraints|body|object|false|Describes constraints that apply to the template fields.|
|» » RequiredFields|body|object|false|none|
|» » ReadOnlyFields|body|object|false|none|
|» » InvisibleFields|body|object|false|none|
|» Defaults|body|object|false|Describes default values for fields on a template.|
|» » DefaultFieldValues|body|object|false|none|
|» Status|body|string|false|Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it. Tasks can only be created from <code>ACTIVE</code> templates. If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.|
|» Fields|body|[[TaskTemplateField](#schematasktemplatefield)]|false|Fields that are part of the template.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|ACTIVE|
|» Status|INACTIVE|

> Example responses

> 200 Response

```json
{
  "InstanceId": {},
  "Id": {},
  "Arn": {},
  "Name": {},
  "Description": {},
  "ContactFlowId": {},
  "Constraints": {
    "RequiredFields": {},
    "ReadOnlyFields": {},
    "InvisibleFields": {}
  },
  "Defaults": {
    "DefaultFieldValues": {}
  },
  "Fields": {},
  "Status": {},
  "LastModifiedTime": {},
  "CreatedTime": {}
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

<h3 id="updatetasktemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTaskTemplateResponse](#schemaupdatetasktemplateresponse)|
|480|480|PropertyValidationException|[PropertyValidationException](#schemapropertyvalidationexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTaskTemplate

<a id="opIdDeleteTaskTemplate"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/task/template/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /instance/{InstanceId}/task/template/{TaskTemplateId}`

Deletes the task template.

<h3 id="deletetasktemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|TaskTemplateId|path|string|true|A unique identifier for the task template.|
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

<h3 id="deletetasktemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTaskTemplateResponse](#schemadeletetasktemplateresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTrafficDistributionGroup

<a id="opIdDescribeTrafficDistributionGroup"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/traffic-distribution-group/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /traffic-distribution-group/{TrafficDistributionGroupId}`

Gets details and status of a traffic distribution group.

<h3 id="describetrafficdistributiongroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TrafficDistributionGroupId|path|string|true|The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.|
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
  "TrafficDistributionGroup": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Description": {},
    "InstanceArn": {},
    "Status": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
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

> 484 Response

```json
null
```

<h3 id="describetrafficdistributiongroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTrafficDistributionGroupResponse](#schemadescribetrafficdistributiongroupresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTrafficDistributionGroup

<a id="opIdDeleteTrafficDistributionGroup"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/traffic-distribution-group/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /traffic-distribution-group/{TrafficDistributionGroupId}`

<p>Deletes a traffic distribution group. This API can be called only in the Region where the traffic distribution group is created.</p> <p>For more information about deleting traffic distribution groups, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/delete-traffic-distribution-groups.html">Delete traffic distribution groups</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

<h3 id="deletetrafficdistributiongroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TrafficDistributionGroupId|path|string|true|The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.|
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

<h3 id="deletetrafficdistributiongroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTrafficDistributionGroupResponse](#schemadeletetrafficdistributiongroupresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUseCase

<a id="opIdDeleteUseCase"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/integration-associations/string/use-cases/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases/{UseCaseId}`

Deletes a use case from an integration association.

<h3 id="deleteusecase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|IntegrationAssociationId|path|string|true|The identifier for the integration association.|
|UseCaseId|path|string|true|The identifier for the use case.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deleteusecase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUser

<a id="opIdDescribeUser"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/users/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{InstanceId}/{UserId}`

Describes the specified user account. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID in the Amazon Connect console</a> (it’s the final part of the ARN). The console does not display the user IDs. Instead, list the users and note the IDs provided in the output.

<h3 id="describeuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserId|path|string|true|The identifier of the user account.|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
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
  "User": {
    "Id": {},
    "Arn": {},
    "Username": {},
    "IdentityInfo": {
      "FirstName": {},
      "LastName": {},
      "Email": {},
      "SecondaryEmail": {},
      "Mobile": {}
    },
    "PhoneConfig": {
      "PhoneType": {},
      "AutoAccept": {},
      "AfterContactWorkTimeLimit": {},
      "DeskPhoneNumber": {}
    },
    "DirectoryUserId": {},
    "SecurityProfileIds": {},
    "RoutingProfileId": {},
    "HierarchyGroupId": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
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

> 484 Response

```json
null
```

<h3 id="describeuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUserResponse](#schemadescribeuserresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUser

<a id="opIdDeleteUser"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/users/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /users/{InstanceId}/{UserId}`

<p>Deletes a user account from the specified Amazon Connect instance.</p> <p>For information about what happens to a user's data when their account is deleted, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/delete-users.html">Delete Users from Your Amazon Connect Instance</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

<h3 id="deleteuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|UserId|path|string|true|The identifier of the user.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUserHierarchyGroup

<a id="opIdDescribeUserHierarchyGroup"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/user-hierarchy-groups/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}`

Describes the specified hierarchy group.

<h3 id="describeuserhierarchygroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|HierarchyGroupId|path|string|true|The identifier of the hierarchy group.|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
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
  "HierarchyGroup": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "LevelId": {},
    "HierarchyPath": {
      "LevelOne": {
        "Id": {},
        "Arn": {},
        "Name": {}
      },
      "LevelTwo": {
        "Id": {},
        "Arn": {},
        "Name": {}
      },
      "LevelThree": {
        "Id": {},
        "Arn": {},
        "Name": {}
      },
      "LevelFour": {
        "Id": {},
        "Arn": {},
        "Name": {}
      },
      "LevelFive": {
        "Id": {},
        "Arn": {},
        "Name": {}
      }
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
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

> 484 Response

```json
null
```

<h3 id="describeuserhierarchygroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUserHierarchyGroupResponse](#schemadescribeuserhierarchygroupresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUserHierarchyGroup

<a id="opIdDeleteUserHierarchyGroup"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/user-hierarchy-groups/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}`

Deletes an existing user hierarchy group. It must not be associated with any agents or have any active child groups.

<h3 id="deleteuserhierarchygroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|HierarchyGroupId|path|string|true|The identifier of the hierarchy group.|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deleteuserhierarchygroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVocabulary

<a id="opIdDeleteVocabulary"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/vocabulary-remove/string/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /vocabulary-remove/{InstanceId}/{VocabularyId}`

Deletes the vocabulary that has the given identifier.

<h3 id="deletevocabulary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|VocabularyId|path|string|true|The identifier of the custom vocabulary.|
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
  "VocabularyArn": {},
  "VocabularyId": {},
  "State": {}
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

<h3 id="deletevocabulary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVocabularyResponse](#schemadeletevocabularyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAgentStatus

<a id="opIdDescribeAgentStatus"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/agent-status/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /agent-status/{InstanceId}/{AgentStatusId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Describes an agent status.</p>

<h3 id="describeagentstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|AgentStatusId|path|string|true|The identifier for the agent status.|
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
  "AgentStatus": {
    "AgentStatusARN": {},
    "AgentStatusId": {},
    "Name": {},
    "Description": {},
    "Type": {},
    "DisplayOrder": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
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

> 484 Response

```json
null
```

<h3 id="describeagentstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAgentStatusResponse](#schemadescribeagentstatusresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAgentStatus

<a id="opIdUpdateAgentStatus"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/agent-status/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "State": "ENABLED",
    "DisplayOrder": 1,
    "ResetOrderNumber": true
  }'
```

`POST /agent-status/{InstanceId}/{AgentStatusId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates agent status.</p>

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "State": "ENABLED",
  "DisplayOrder": 1,
  "ResetOrderNumber": true
}
```

<h3 id="updateagentstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|AgentStatusId|path|string|true|The identifier of the agent status.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the agent status.|
|» Description|body|string|false|The description of the agent status.|
|» State|body|string|false|The state of the agent status.|
|» DisplayOrder|body|integer|false|The display order of the agent status.|
|» ResetOrderNumber|body|boolean|false|A number indicating the reset order of the agent status.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» State|ENABLED|
|» State|DISABLED|

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

<h3 id="updateagentstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeContact

<a id="opIdDescribeContact"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contacts/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /contacts/{InstanceId}/{ContactId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Describes the specified contact. </p> <important> <p>Contact information remains available in Amazon Connect for 24 months, and then it is deleted.</p> <p>Only data from November 12, 2021, and later is returned by this API.</p> </important>

<h3 id="describecontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|ContactId|path|string|true|The identifier of the contact.|
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
  "Contact": {
    "Arn": {},
    "Id": {},
    "InitialContactId": {},
    "PreviousContactId": {},
    "InitiationMethod": {},
    "Name": {},
    "Description": {},
    "Channel": {},
    "QueueInfo": {
      "Id": {},
      "EnqueueTimestamp": {}
    },
    "AgentInfo": {
      "Id": {},
      "ConnectedToAgentTimestamp": {}
    },
    "InitiationTimestamp": {},
    "DisconnectTimestamp": {},
    "LastUpdateTimestamp": {},
    "ScheduledTimestamp": {},
    "RelatedContactId": {},
    "WisdomInfo": {
      "SessionArn": {}
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

> 484 Response

```json
null
```

<h3 id="describecontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeContactResponse](#schemadescribecontactresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContact

<a id="opIdUpdateContact"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contacts/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "References": {
      "property1": {
        "Value": {},
        "Type": {}
      },
      "property2": {
        "Value": {},
        "Type": {}
      }
    }
  }'
```

`POST /contacts/{InstanceId}/{ContactId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Adds or updates user-defined contact information associated with the specified contact. At least one field to be updated must be present in the request.</p> <important> <p>You can add or update user-defined contact information for both ongoing and completed contacts.</p> </important>

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "References": {
    "property1": {
      "Value": {},
      "Type": {}
    },
    "property2": {
      "Value": {},
      "Type": {}
    }
  }
}
```

<h3 id="updatecontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|ContactId|path|string|true|The identifier of the contact. This is the identifier of the contact associated with the first interaction with your contact center.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the contact.|
|» Description|body|string|false|The description of the contact.|
|» References|body|object|false|Well-formed data on contact, shown to agents on Contact Control Panel (CCP).|
|» » **additionalProperties**|body|[Reference](#schemareference)|false|Well-formed data on a contact, used by agents to complete a contact request. You can have up to 4,096 UTF-8 bytes across all references for a contact.|

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

<h3 id="updatecontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContactResponse](#schemaupdatecontactresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInstanceAttribute

<a id="opIdDescribeInstanceAttribute"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/attribute/INBOUND_CALLS \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /instance/{InstanceId}/attribute/{AttributeType}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Describes the specified instance attribute.</p>

<h3 id="describeinstanceattribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|AttributeType|path|string|true|The type of attribute.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|AttributeType|INBOUND_CALLS|
|AttributeType|OUTBOUND_CALLS|
|AttributeType|CONTACTFLOW_LOGS|
|AttributeType|CONTACT_LENS|
|AttributeType|AUTO_RESOLVE_BEST_VOICES|
|AttributeType|USE_CUSTOM_TTS_VOICES|
|AttributeType|EARLY_MEDIA|
|AttributeType|MULTI_PARTY_CONFERENCE|
|AttributeType|HIGH_VOLUME_OUTBOUND|
|AttributeType|ENHANCED_CONTACT_MONITORING|

> Example responses

> 200 Response

```json
{
  "Attribute": {
    "AttributeType": {},
    "Value": {}
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

<h3 id="describeinstanceattribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInstanceAttributeResponse](#schemadescribeinstanceattributeresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateInstanceAttribute

<a id="opIdUpdateInstanceAttribute"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/attribute/INBOUND_CALLS \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Value": "string"
  }'
```

`POST /instance/{InstanceId}/attribute/{AttributeType}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates the value for the specified attribute type.</p>

> Body parameter

```json
{
  "Value": "string"
}
```

<h3 id="updateinstanceattribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|AttributeType|path|string|true|<p>The type of attribute.</p> <note> <p>Only allowlisted customers can consume USE_CUSTOM_TTS_VOICES. To access this feature, contact Amazon Web Services Support for allowlisting.</p> </note>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Value|body|string|true|The value for the attribute. Maximum character limit is 100. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|AttributeType|INBOUND_CALLS|
|AttributeType|OUTBOUND_CALLS|
|AttributeType|CONTACTFLOW_LOGS|
|AttributeType|CONTACT_LENS|
|AttributeType|AUTO_RESOLVE_BEST_VOICES|
|AttributeType|USE_CUSTOM_TTS_VOICES|
|AttributeType|EARLY_MEDIA|
|AttributeType|MULTI_PARTY_CONFERENCE|
|AttributeType|HIGH_VOLUME_OUTBOUND|
|AttributeType|ENHANCED_CONTACT_MONITORING|

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

<h3 id="updateinstanceattribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInstanceStorageConfig

<a id="opIdDescribeInstanceStorageConfig"></a>

> Code samples

```bash
curl 'https://connect.us-east-1.amazonaws.com/instance/string/storage-config/string#resourceType?resourceType=CHAT_TRANSCRIPTS' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /instance/{InstanceId}/storage-config/{AssociationId}#resourceType`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Retrieves the current storage configurations for the specified resource type, association ID, and instance ID.</p>

<h3 id="describeinstancestorageconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|AssociationId|path|string|true|The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.|
|resourceType|query|string|true|A valid resource type.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resourceType|CHAT_TRANSCRIPTS|
|resourceType|CALL_RECORDINGS|
|resourceType|SCHEDULED_REPORTS|
|resourceType|MEDIA_STREAMS|
|resourceType|CONTACT_TRACE_RECORDS|
|resourceType|AGENT_EVENTS|
|resourceType|REAL_TIME_CONTACT_ANALYSIS_SEGMENTS|
|resourceType|ATTACHMENTS|
|resourceType|CONTACT_EVALUATIONS|

> Example responses

> 200 Response

```json
{
  "StorageConfig": {
    "AssociationId": {},
    "StorageType": {},
    "S3Config": {
      "BucketName": {},
      "BucketPrefix": {},
      "EncryptionConfig": {
        "EncryptionType": {},
        "KeyId": {}
      }
    },
    "KinesisVideoStreamConfig": {
      "Prefix": {},
      "RetentionPeriodHours": {},
      "EncryptionConfig": {
        "EncryptionType": {},
        "KeyId": {}
      }
    },
    "KinesisStreamConfig": {
      "StreamArn": {}
    },
    "KinesisFirehoseConfig": {
      "FirehoseArn": {}
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

> 484 Response

```json
null
```

<h3 id="describeinstancestorageconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInstanceStorageConfigResponse](#schemadescribeinstancestorageconfigresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateInstanceStorageConfig

<a id="opIdUpdateInstanceStorageConfig"></a>

> Code samples

```bash
curl 'https://connect.us-east-1.amazonaws.com/instance/string/storage-config/string#resourceType?resourceType=CHAT_TRANSCRIPTS' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StorageConfig": {
      "AssociationId": {},
      "StorageType": {},
      "S3Config": {
        "BucketName": {},
        "BucketPrefix": {},
        "EncryptionConfig": {
          "EncryptionType": {},
          "KeyId": {}
        }
      },
      "KinesisVideoStreamConfig": {
        "Prefix": {},
        "RetentionPeriodHours": {},
        "EncryptionConfig": {
          "EncryptionType": {},
          "KeyId": {}
        }
      },
      "KinesisStreamConfig": {
        "StreamArn": {}
      },
      "KinesisFirehoseConfig": {
        "FirehoseArn": {}
      }
    }
  }'
```

`POST /instance/{InstanceId}/storage-config/{AssociationId}#resourceType`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates an existing configuration for a resource type. This API is idempotent.</p>

> Body parameter

```json
{
  "StorageConfig": {
    "AssociationId": {},
    "StorageType": {},
    "S3Config": {
      "BucketName": {},
      "BucketPrefix": {},
      "EncryptionConfig": {
        "EncryptionType": {},
        "KeyId": {}
      }
    },
    "KinesisVideoStreamConfig": {
      "Prefix": {},
      "RetentionPeriodHours": {},
      "EncryptionConfig": {
        "EncryptionType": {},
        "KeyId": {}
      }
    },
    "KinesisStreamConfig": {
      "StreamArn": {}
    },
    "KinesisFirehoseConfig": {
      "FirehoseArn": {}
    }
  }
}
```

<h3 id="updateinstancestorageconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|AssociationId|path|string|true|The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.|
|resourceType|query|string|true|A valid resource type.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» StorageConfig|body|object|true|The storage configuration for the instance.|
|» » AssociationId|body|object|false|none|
|» » StorageType|body|object|false|none|
|» » S3Config|body|object|false|none|
|» » » BucketName|body|object|true|none|
|» » » BucketPrefix|body|object|true|none|
|» » » EncryptionConfig|body|object|false|none|
|» » » » EncryptionType|body|object|true|none|
|» » » » KeyId|body|object|true|none|
|» » KinesisVideoStreamConfig|body|object|false|none|
|» » » Prefix|body|object|true|none|
|» » » RetentionPeriodHours|body|object|true|none|
|» » » EncryptionConfig|body|object|true|none|
|» » » » EncryptionType|body|object|true|none|
|» » » » KeyId|body|object|true|none|
|» » KinesisStreamConfig|body|object|false|none|
|» » » StreamArn|body|object|true|none|
|» » KinesisFirehoseConfig|body|object|false|none|
|» » » FirehoseArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resourceType|CHAT_TRANSCRIPTS|
|resourceType|CALL_RECORDINGS|
|resourceType|SCHEDULED_REPORTS|
|resourceType|MEDIA_STREAMS|
|resourceType|CONTACT_TRACE_RECORDS|
|resourceType|AGENT_EVENTS|
|resourceType|REAL_TIME_CONTACT_ANALYSIS_SEGMENTS|
|resourceType|ATTACHMENTS|
|resourceType|CONTACT_EVALUATIONS|

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

<h3 id="updateinstancestorageconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateInstanceStorageConfig

<a id="opIdDisassociateInstanceStorageConfig"></a>

> Code samples

```bash
curl 'https://connect.us-east-1.amazonaws.com/instance/string/storage-config/string#resourceType?resourceType=CHAT_TRANSCRIPTS' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /instance/{InstanceId}/storage-config/{AssociationId}#resourceType`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Removes the storage type configurations for the specified resource type and association ID.</p>

<h3 id="disassociateinstancestorageconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|AssociationId|path|string|true|The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.|
|resourceType|query|string|true|A valid resource type.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resourceType|CHAT_TRANSCRIPTS|
|resourceType|CALL_RECORDINGS|
|resourceType|SCHEDULED_REPORTS|
|resourceType|MEDIA_STREAMS|
|resourceType|CONTACT_TRACE_RECORDS|
|resourceType|AGENT_EVENTS|
|resourceType|REAL_TIME_CONTACT_ANALYSIS_SEGMENTS|
|resourceType|ATTACHMENTS|
|resourceType|CONTACT_EVALUATIONS|

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

<h3 id="disassociateinstancestorageconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePhoneNumber

<a id="opIdDescribePhoneNumber"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/phone-number/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /phone-number/{PhoneNumberId}`

<p>Gets details and status of a phone number that’s claimed to your Amazon Connect instance or traffic distribution group.</p> <important> <p>If the number is claimed to a traffic distribution group, and you are calling in the Amazon Web Services Region where the traffic distribution group was created, you can use either a phone number ARN or UUID value for the <code>PhoneNumberId</code> URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a <code>ResourceNotFoundException</code>.</p> </important>

<h3 id="describephonenumber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PhoneNumberId|path|string|true|A unique identifier for the phone number.|
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
  "ClaimedPhoneNumberSummary": {
    "PhoneNumberId": {},
    "PhoneNumberArn": {},
    "PhoneNumber": {},
    "PhoneNumberCountryCode": {},
    "PhoneNumberType": {},
    "PhoneNumberDescription": {},
    "TargetArn": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "PhoneNumberStatus": {
      "Status": {},
      "Message": {}
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

> 484 Response

```json
null
```

<h3 id="describephonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePhoneNumberResponse](#schemadescribephonenumberresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePhoneNumber

<a id="opIdUpdatePhoneNumber"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/phone-number/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TargetArn": "string",
    "ClientToken": "string"
  }'
```

`PUT /phone-number/{PhoneNumberId}`

<p>Updates your claimed phone number from its current Amazon Connect instance or traffic distribution group to another Amazon Connect instance or traffic distribution group in the same Amazon Web Services Region.</p> <important> <p>You can call <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> API to verify the status of a previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation.</p> </important>

> Body parameter

```json
{
  "TargetArn": "string",
  "ClientToken": "string"
}
```

<h3 id="updatephonenumber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PhoneNumberId|path|string|true|A unique identifier for the phone number.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TargetArn|body|string|true|The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|

> Example responses

> 200 Response

```json
{
  "PhoneNumberId": {},
  "PhoneNumberArn": {}
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

<h3 id="updatephonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePhoneNumberResponse](#schemaupdatephonenumberresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|IdempotencyException|[IdempotencyException](#schemaidempotencyexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ReleasePhoneNumber

<a id="opIdReleasePhoneNumber"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/phone-number/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /phone-number/{PhoneNumberId}`

<p>Releases a phone number previously claimed to an Amazon Connect instance or traffic distribution group. You can call this API only in the Amazon Web Services Region where the number was claimed.</p> <important> <p>To release phone numbers from a traffic distribution group, use the <code>ReleasePhoneNumber</code> API, not the Amazon Connect console.</p> <p>After releasing a phone number, the phone number enters into a cooldown period of 30 days. It cannot be searched for or claimed again until the period has ended. If you accidentally release a phone number, contact Amazon Web Services Support.</p> </important>

<h3 id="releasephonenumber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PhoneNumberId|path|string|true|A unique identifier for the phone number.|
|clientToken|query|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="releasephonenumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|IdempotencyException|[IdempotencyException](#schemaidempotencyexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeQueue

<a id="opIdDescribeQueue"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/queues/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /queues/{InstanceId}/{QueueId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Describes the specified queue.</p>

<h3 id="describequeue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|QueueId|path|string|true|The identifier for the queue.|
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
  "Queue": {
    "Name": {},
    "QueueArn": {},
    "QueueId": {},
    "Description": {},
    "OutboundCallerConfig": {
      "OutboundCallerIdName": {},
      "OutboundCallerIdNumberId": {},
      "OutboundFlowId": {}
    },
    "HoursOfOperationId": {},
    "MaxContacts": {},
    "Status": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
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

> 484 Response

```json
null
```

<h3 id="describequeue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeQueueResponse](#schemadescribequeueresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRoutingProfile

<a id="opIdDescribeRoutingProfile"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/routing-profiles/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /routing-profiles/{InstanceId}/{RoutingProfileId}`

Describes the specified routing profile.

<h3 id="describeroutingprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|RoutingProfileId|path|string|true|The identifier of the routing profile.|
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
  "RoutingProfile": {
    "InstanceId": {},
    "Name": {},
    "RoutingProfileArn": {},
    "RoutingProfileId": {},
    "Description": {},
    "MediaConcurrencies": {},
    "DefaultOutboundQueueId": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "NumberOfAssociatedQueues": {},
    "NumberOfAssociatedUsers": {}
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

<h3 id="describeroutingprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRoutingProfileResponse](#schemadescriberoutingprofileresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUserHierarchyStructure

<a id="opIdDescribeUserHierarchyStructure"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/user-hierarchy-structure/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /user-hierarchy-structure/{InstanceId}`

Describes the hierarchy structure of the specified Amazon Connect instance.

<h3 id="describeuserhierarchystructure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
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
  "HierarchyStructure": {
    "LevelOne": {
      "Id": {},
      "Arn": {},
      "Name": {}
    },
    "LevelTwo": {
      "Id": {},
      "Arn": {},
      "Name": {}
    },
    "LevelThree": {
      "Id": {},
      "Arn": {},
      "Name": {}
    },
    "LevelFour": {
      "Id": {},
      "Arn": {},
      "Name": {}
    },
    "LevelFive": {
      "Id": {},
      "Arn": {},
      "Name": {}
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

> 484 Response

```json
null
```

<h3 id="describeuserhierarchystructure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUserHierarchyStructureResponse](#schemadescribeuserhierarchystructureresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUserHierarchyStructure

<a id="opIdUpdateUserHierarchyStructure"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/user-hierarchy-structure/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "HierarchyStructure": {
      "LevelOne": {
        "Name": {}
      },
      "LevelTwo": {
        "Name": {}
      },
      "LevelThree": {
        "Name": {}
      },
      "LevelFour": {
        "Name": {}
      },
      "LevelFive": {
        "Name": {}
      }
    }
  }'
```

`POST /user-hierarchy-structure/{InstanceId}`

Updates the user hierarchy structure: add, remove, and rename user hierarchy levels.

> Body parameter

```json
{
  "HierarchyStructure": {
    "LevelOne": {
      "Name": {}
    },
    "LevelTwo": {
      "Name": {}
    },
    "LevelThree": {
      "Name": {}
    },
    "LevelFour": {
      "Name": {}
    },
    "LevelFive": {
      "Name": {}
    }
  }
}
```

<h3 id="updateuserhierarchystructure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» HierarchyStructure|body|object|true|Contains information about the level hierarchy to update.|
|» » LevelOne|body|object|false|none|
|» » » Name|body|object|true|none|
|» » LevelTwo|body|object|false|none|
|» » » Name|body|object|true|none|
|» » LevelThree|body|object|false|none|
|» » » Name|body|object|true|none|
|» » LevelFour|body|object|false|none|
|» » » Name|body|object|true|none|
|» » LevelFive|body|object|false|none|
|» » » Name|body|object|true|none|

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

<h3 id="updateuserhierarchystructure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVocabulary

<a id="opIdDescribeVocabulary"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/vocabulary/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /vocabulary/{InstanceId}/{VocabularyId}`

Describes the specified vocabulary.

<h3 id="describevocabulary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|VocabularyId|path|string|true|The identifier of the custom vocabulary.|
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
  "Vocabulary": {
    "Name": {},
    "Id": {},
    "Arn": {},
    "LanguageCode": {},
    "State": {},
    "LastModifiedTime": {},
    "FailureReason": {},
    "Content": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
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

> 484 Response

```json
null
```

<h3 id="describevocabulary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVocabularyResponse](#schemadescribevocabularyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateApprovedOrigin

<a id="opIdDisassociateApprovedOrigin"></a>

> Code samples

```bash
curl 'https://connect.us-east-1.amazonaws.com/instance/string/approved-origin#origin?origin=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /instance/{InstanceId}/approved-origin#origin`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Revokes access to integrated applications from Amazon Connect.</p>

<h3 id="disassociateapprovedorigin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|origin|query|string|true|The domain URL of the integrated application.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="disassociateapprovedorigin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateLambdaFunction

<a id="opIdDisassociateLambdaFunction"></a>

> Code samples

```bash
curl 'https://connect.us-east-1.amazonaws.com/instance/string/lambda-function#functionArn?functionArn=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /instance/{InstanceId}/lambda-function#functionArn`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Remove the Lambda function from the dropdown options available in the relevant flow blocks.</p>

<h3 id="disassociatelambdafunction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance..|
|functionArn|query|string|true|The Amazon Resource Name (ARN) of the Lambda function being disassociated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="disassociatelambdafunction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateLexBot

<a id="opIdDisassociateLexBot"></a>

> Code samples

```bash
curl 'https://connect.us-east-1.amazonaws.com/instance/string/lex-bot#botName&lexRegion?botName=string&lexRegion=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /instance/{InstanceId}/lex-bot#botName&lexRegion`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Revokes authorization from the specified instance to access the specified Amazon Lex bot.</p>

<h3 id="disassociatelexbot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|botName|query|string|true|The name of the Amazon Lex bot. Maximum character limit of 50.|
|lexRegion|query|string|true|The Amazon Web Services Region in which the Amazon Lex bot has been created.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="disassociatelexbot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociatePhoneNumberContactFlow

<a id="opIdDisassociatePhoneNumberContactFlow"></a>

> Code samples

```bash
curl 'https://connect.us-east-1.amazonaws.com/phone-number/string/contact-flow#instanceId?instanceId=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /phone-number/{PhoneNumberId}/contact-flow#instanceId`

<p>Removes the flow association from a phone number claimed to your Amazon Connect instance.</p> <important> <p>If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the <code>PhoneNumberId</code> URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a <code>ResourceNotFoundException</code>.</p> </important>

<h3 id="disassociatephonenumbercontactflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PhoneNumberId|path|string|true|A unique identifier for the phone number.|
|instanceId|query|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="disassociatephonenumbercontactflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateQueueQuickConnects

<a id="opIdDisassociateQueueQuickConnects"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/queues/string/string/disassociate-quick-connects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "QuickConnectIds": [
      "string"
    ]
  }'
```

`POST /queues/{InstanceId}/{QueueId}/disassociate-quick-connects`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Disassociates a set of quick connects from a queue.</p>

> Body parameter

```json
{
  "QuickConnectIds": [
    "string"
  ]
}
```

<h3 id="disassociatequeuequickconnects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|QueueId|path|string|true|The identifier for the queue.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» QuickConnectIds|body|[[QuickConnectId](#schemaquickconnectid)]|true|The quick connects to disassociate from the queue.|

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

<h3 id="disassociatequeuequickconnects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateRoutingProfileQueues

<a id="opIdDisassociateRoutingProfileQueues"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/routing-profiles/string/string/disassociate-queues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "QueueReferences": [
      {
        "QueueId": {},
        "Channel": {}
      }
    ]
  }'
```

`POST /routing-profiles/{InstanceId}/{RoutingProfileId}/disassociate-queues`

Disassociates a set of queues from a routing profile.

> Body parameter

```json
{
  "QueueReferences": [
    {
      "QueueId": {},
      "Channel": {}
    }
  ]
}
```

<h3 id="disassociateroutingprofilequeues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|RoutingProfileId|path|string|true|The identifier of the routing profile.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» QueueReferences|body|[[RoutingProfileQueueReference](#schemaroutingprofilequeuereference)]|true|The queues to disassociate from this routing profile.|

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

<h3 id="disassociateroutingprofilequeues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateSecurityKey

<a id="opIdDisassociateSecurityKey"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/security-key/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /instance/{InstanceId}/security-key/{AssociationId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Deletes the specified security key.</p>

<h3 id="disassociatesecuritykey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|AssociationId|path|string|true|The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="disassociatesecuritykey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DismissUserContact

<a id="opIdDismissUserContact"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/users/string/string/contact \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ContactId": "string"
  }'
```

`POST /users/{InstanceId}/{UserId}/contact`

Dismisses contacts from an agent’s CCP and returns the agent to an available state, which allows the agent to receive a new routed contact. Contacts can only be dismissed if they are in a <code>MISSED</code>, <code>ERROR</code>, <code>ENDED</code>, or <code>REJECTED</code> state in the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">Agent Event Stream</a>.

> Body parameter

```json
{
  "ContactId": "string"
}
```

<h3 id="dismissusercontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserId|path|string|true|The identifier of the user account.|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ContactId|body|string|true|The identifier of the contact.|

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

<h3 id="dismissusercontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DismissUserContactResponse](#schemadismissusercontactresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContactAttributes

<a id="opIdGetContactAttributes"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/attributes/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /contact/attributes/{InstanceId}/{InitialContactId}`

Retrieves the contact attributes for the specified contact.

<h3 id="getcontactattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance.|
|InitialContactId|path|string|true|The identifier of the initial contact.|
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
  "Attributes": {
    "property1": "string",
    "property2": "string"
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

<h3 id="getcontactattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContactAttributesResponse](#schemagetcontactattributesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCurrentMetricData

<a id="opIdGetCurrentMetricData"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/metrics/current/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Filters": {
      "Queues": {},
      "Channels": {},
      "RoutingProfiles": {}
    },
    "Groupings": [
      "QUEUE"
    ],
    "CurrentMetrics": [
      {
        "Name": {},
        "Unit": {}
      }
    ],
    "NextToken": "string",
    "MaxResults": 1,
    "SortCriteria": [
      {
        "SortByMetric": "AGENTS_ONLINE",
        "SortOrder": {}
      }
    ]
  }'
```

`POST /metrics/current/{InstanceId}`

<p>Gets the real-time metric data from the specified Amazon Connect instance.</p> <p>For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

> Body parameter

```json
{
  "Filters": {
    "Queues": {},
    "Channels": {},
    "RoutingProfiles": {}
  },
  "Groupings": [
    "QUEUE"
  ],
  "CurrentMetrics": [
    {
      "Name": {},
      "Unit": {}
    }
  ],
  "NextToken": "string",
  "MaxResults": 1,
  "SortCriteria": [
    {
      "SortByMetric": "AGENTS_ONLINE",
      "SortOrder": {}
    }
  ]
}
```

<h3 id="getcurrentmetricdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Filters|body|object|true|Contains the filter to apply when retrieving metrics.|
|» » Queues|body|object|false|none|
|» » Channels|body|object|false|none|
|» » RoutingProfiles|body|object|false|none|
|» Groupings|body|[[Grouping](#schemagrouping)]|false|<p>The grouping applied to the metrics returned. For example, when grouped by <code>QUEUE</code>, the metrics returned apply to each queue rather than aggregated for all queues. </p> <ul> <li> <p>If you group by <code>CHANNEL</code>, you should include a Channels filter. VOICE, CHAT, and TASK channels are supported.</p> </li> <li> <p>If you group by <code>ROUTING_PROFILE</code>, you must include either a queue or routing profile filter. In addition, a routing profile filter is required for metrics <code>CONTACTS_SCHEDULED</code>, <code>CONTACTS_IN_QUEUE</code>, and <code> OLDEST_CONTACT_AGE</code>.</p> </li> <li> <p>If no <code>Grouping</code> is included in the request, a summary of metrics is returned.</p> </li> </ul>|
|» CurrentMetrics|body|[[CurrentMetric](#schemacurrentmetric)]|true|<p>The metrics to retrieve. Specify the name and unit for each metric. The following metrics are available. For a description of all the metrics, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <dl> <dt>AGENTS_AFTER_CONTACT_WORK</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#aftercallwork-real-time">ACW</a> </p> </dd> <dt>AGENTS_AVAILABLE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#available-real-time">Available</a> </p> </dd> <dt>AGENTS_ERROR</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#error-real-time">Error</a> </p> </dd> <dt>AGENTS_NON_PRODUCTIVE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#non-productive-time-real-time">NPT (Non-Productive Time)</a> </p> </dd> <dt>AGENTS_ON_CALL</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#on-call-real-time">On contact</a> </p> </dd> <dt>AGENTS_ON_CONTACT</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#on-call-real-time">On contact</a> </p> </dd> <dt>AGENTS_ONLINE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#online-real-time">Online</a> </p> </dd> <dt>AGENTS_STAFFED</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#staffed-real-time">Staffed</a> </p> </dd> <dt>CONTACTS_IN_QUEUE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#in-queue-real-time">In queue</a> </p> </dd> <dt>CONTACTS_SCHEDULED</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#scheduled-real-time">Scheduled</a> </p> </dd> <dt>OLDEST_CONTACT_AGE</dt> <dd> <p>Unit: SECONDS</p> <p>When you use groupings, Unit says SECONDS and the Value is returned in SECONDS. </p> <p>When you do not use groupings, Unit says SECONDS but the Value is returned in MILLISECONDS. For example, if you get a response like this:</p> <p> <code>{ "Metric": { "Name": "OLDEST_CONTACT_AGE", "Unit": "SECONDS" }, "Value": 24113.0 </code>}</p> <p>The actual OLDEST_CONTACT_AGE is 24 seconds.</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#oldest-real-time">Oldest</a> </p> </dd> <dt>SLOTS_ACTIVE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#active-real-time">Active</a> </p> </dd> <dt>SLOTS_AVAILABLE</dt> <dd> <p>Unit: COUNT</p> <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#availability-real-time">Availability</a> </p> </dd> </dl>|
|» NextToken|body|string|false|<p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p> <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token.</p>|
|» MaxResults|body|integer|false|The maximum number of results to return per page.|
|» SortCriteria|body|[[CurrentMetricSortCriteria](#schemacurrentmetricsortcriteria)]|false|<p>The way to sort the resulting response based on metrics. You can enter one sort criteria. By default resources are sorted based on <code>AGENTS_ONLINE</code>, <code>DESCENDING</code>. The metric collection is sorted based on the input metrics.</p> <p>Note the following:</p> <ul> <li> <p>Sorting on <code>SLOTS_ACTIVE</code> and <code>SLOTS_AVAILABLE</code> is not supported.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Groupings|QUEUE|
|» Groupings|CHANNEL|
|» Groupings|ROUTING_PROFILE|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "MetricResults": {},
  "DataSnapshotTime": {},
  "ApproximateTotalCount": {}
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

<h3 id="getcurrentmetricdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCurrentMetricDataResponse](#schemagetcurrentmetricdataresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCurrentUserData

<a id="opIdGetCurrentUserData"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/metrics/userdata/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Filters": {
      "Queues": {},
      "ContactFilter": {
        "ContactStates": {}
      },
      "RoutingProfiles": {},
      "Agents": {},
      "UserHierarchyGroups": {}
    },
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /metrics/userdata/{InstanceId}`

Gets the real-time active user data from the specified Amazon Connect instance. 

> Body parameter

```json
{
  "Filters": {
    "Queues": {},
    "ContactFilter": {
      "ContactStates": {}
    },
    "RoutingProfiles": {},
    "Agents": {},
    "UserHierarchyGroups": {}
  },
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="getcurrentuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Filters|body|object|true|A filter for the user data.|
|» » Queues|body|object|false|none|
|» » ContactFilter|body|object|false|none|
|» » » ContactStates|body|object|false|none|
|» » RoutingProfiles|body|object|false|none|
|» » Agents|body|object|false|none|
|» » UserHierarchyGroups|body|object|false|none|
|» NextToken|body|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|» MaxResults|body|integer|false|The maximum number of results to return per page.|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "UserDataList": {},
  "ApproximateTotalCount": {}
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

<h3 id="getcurrentuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCurrentUserDataResponse](#schemagetcurrentuserdataresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFederationToken

<a id="opIdGetFederationToken"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/user/federate/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /user/federate/{InstanceId}`

<p>Retrieves a token for federation.</p> <note> <p>This API doesn't support root users. If you try to invoke GetFederationToken with root credentials, an error message similar to the following one appears: </p> <p> <code>Provided identity: Principal: .... User: .... cannot be used for federation with Amazon Connect</code> </p> </note>

<h3 id="getfederationtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
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
  "Credentials": {
    "AccessToken": {},
    "AccessTokenExpiration": {},
    "RefreshToken": {},
    "RefreshTokenExpiration": {}
  },
  "SignInUrl": {},
  "UserArn": {},
  "UserId": {}
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

<h3 id="getfederationtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFederationTokenResponse](#schemagetfederationtokenresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|UserNotFoundException|[UserNotFoundException](#schemausernotfoundexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|485|485|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMetricData

<a id="opIdGetMetricData"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/metrics/historical/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "StartTime": "1970-01-01T00:00:00Z",
    "EndTime": "1970-01-01T00:00:00Z",
    "Filters": {
      "Queues": {},
      "Channels": {},
      "RoutingProfiles": {}
    },
    "Groupings": [
      "QUEUE"
    ],
    "HistoricalMetrics": [
      {
        "Name": {},
        "Threshold": {
          "Comparison": {},
          "ThresholdValue": {}
        },
        "Statistic": {},
        "Unit": {}
      }
    ],
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /metrics/historical/{InstanceId}`

<p>Gets historical metric data from the specified Amazon Connect instance.</p> <p>For a description of each historical metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

> Body parameter

```json
{
  "StartTime": "1970-01-01T00:00:00Z",
  "EndTime": "1970-01-01T00:00:00Z",
  "Filters": {
    "Queues": {},
    "Channels": {},
    "RoutingProfiles": {}
  },
  "Groupings": [
    "QUEUE"
  ],
  "HistoricalMetrics": [
    {
      "Name": {},
      "Threshold": {
        "Comparison": {},
        "ThresholdValue": {}
      },
      "Statistic": {},
      "Unit": {}
    }
  ],
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="getmetricdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» StartTime|body|string(date-time)|true|<p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes, such as 10:05, 10:10, 10:15.</p> <p>The start time cannot be earlier than 24 hours before the time of the request. Historical metrics are available only for 24 hours.</p>|
|» EndTime|body|string(date-time)|true|<p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be specified using an interval of 5 minutes, such as 11:00, 11:05, 11:10, and must be later than the start time timestamp.</p> <p>The time range between the start and end time must be less than 24 hours.</p>|
|» Filters|body|object|true|Contains the filter to apply when retrieving metrics.|
|» » Queues|body|object|false|none|
|» » Channels|body|object|false|none|
|» » RoutingProfiles|body|object|false|none|
|» Groupings|body|[[Grouping](#schemagrouping)]|false|<p>The grouping applied to the metrics returned. For example, when results are grouped by queue, the metrics returned are grouped by queue. The values returned apply to the metrics for each queue rather than aggregated for all queues.</p> <p>If no grouping is specified, a summary of metrics for all queues is returned.</p>|
|» HistoricalMetrics|body|[[HistoricalMetric](#schemahistoricalmetric)]|true|<p>The metrics to retrieve. Specify the name, unit, and statistic for each metric. The following historical metrics are available. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <note> <p>This API does not support a contacts incoming metric (there's no CONTACTS_INCOMING metric missing from the documented list). </p> </note> <dl> <dt>ABANDON_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>AFTER_CONTACT_WORK_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>API_CONTACTS_HANDLED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CALLBACK_CONTACTS_HANDLED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_ABANDONED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_AGENT_HUNG_UP_FIRST</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_CONSULTED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HANDLED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HANDLED_INCOMING</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HANDLED_OUTBOUND</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HOLD_ABANDONS</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_MISSED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_QUEUED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_IN</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_IN_FROM_QUEUE</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_OUT</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>HANDLE_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>HOLD_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>INTERACTION_AND_HOLD_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>INTERACTION_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>OCCUPANCY</dt> <dd> <p>Unit: PERCENT</p> <p>Statistic: AVG</p> </dd> <dt>QUEUE_ANSWER_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>QUEUED_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: MAX</p> </dd> <dt>SERVICE_LEVEL</dt> <dd> <p>You can include up to 20 SERVICE_LEVEL metrics in a request.</p> <p>Unit: PERCENT</p> <p>Statistic: AVG</p> <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for "Less than"). </p> </dd> </dl>|
|» NextToken|body|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|» MaxResults|body|integer|false|The maximum number of results to return per page.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Groupings|QUEUE|
|» Groupings|CHANNEL|
|» Groupings|ROUTING_PROFILE|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "MetricResults": {}
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

<h3 id="getmetricdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMetricDataResponse](#schemagetmetricdataresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMetricDataV2

<a id="opIdGetMetricDataV2"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/metrics/data \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceArn": "string",
    "StartTime": "1970-01-01T00:00:00Z",
    "EndTime": "1970-01-01T00:00:00Z",
    "Filters": [
      {
        "FilterKey": {},
        "FilterValues": {}
      }
    ],
    "Groupings": [
      "string"
    ],
    "Metrics": [
      {
        "Name": {},
        "Threshold": {},
        "MetricFilters": {}
      }
    ],
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /metrics/data`

<p>Gets metric data from the specified Amazon Connect instance. </p> <p> <code>GetMetricDataV2</code> offers more features than <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricData.html">GetMetricData</a>, the previous version of this API. It has new metrics, offers filtering at a metric level, and offers the ability to filter and group data by channels, queues, routing profiles, agents, and agent hierarchy levels. It can retrieve historical data for the last 14 days, in 24-hour intervals.</p> <p>For a description of the historical metrics that are supported by <code>GetMetricDataV2</code> and <code>GetMetricData</code>, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical metrics definitions</a> in the <i>Amazon Connect Administrator's Guide</i>. </p> <p>This API is not available in the Amazon Web Services GovCloud (US) Regions.</p>

> Body parameter

```json
{
  "ResourceArn": "string",
  "StartTime": "1970-01-01T00:00:00Z",
  "EndTime": "1970-01-01T00:00:00Z",
  "Filters": [
    {
      "FilterKey": {},
      "FilterValues": {}
    }
  ],
  "Groupings": [
    "string"
  ],
  "Metrics": [
    {
      "Name": {},
      "Threshold": {},
      "MetricFilters": {}
    }
  ],
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="getmetricdatav2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ResourceArn|body|string|true|The Amazon Resource Name (ARN) of the resource. This includes the <code>instanceId</code> an Amazon Connect instance.|
|» StartTime|body|string(date-time)|true|The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be before the end time timestamp. The time range between the start and end time must be less than 24 hours. The start time cannot be earlier than 14 days before the time of the request. Historical metrics are available for 14 days.|
|» EndTime|body|string(date-time)|true|<p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be later than the start time timestamp. It cannot be later than the current timestamp.</p> <p>The time range between the start and end time must be less than 24 hours.</p>|
|» Filters|body|[[FilterV2](#schemafilterv2)]|true|<p>The filters to apply to returned metrics. You can filter on the following resources:</p> <ul> <li> <p>Queues</p> </li> <li> <p>Routing profiles</p> </li> <li> <p>Agents</p> </li> <li> <p>Channels</p> </li> <li> <p>User hierarchy groups</p> </li> </ul> <p>At least one filter must be passed from queues, routing profiles, agents, or user hierarchy groups.</p> <p>To filter by phone number, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-historical-metrics-report.html">Create a historical metrics report</a> in the <i>Amazon Connect Administrator's Guide</i>.</p> <p>Note the following limits:</p> <ul> <li> <p> <b>Filter keys</b>: A maximum of 5 filter keys are supported in a single request. Valid filter keys: <code>QUEUE</code> \| <code>ROUTING_PROFILE</code> \| <code>AGENT</code> \| <code>CHANNEL</code> \| <code>AGENT_HIERARCHY_LEVEL_ONE</code> \| <code>AGENT_HIERARCHY_LEVEL_TWO</code> \| <code>AGENT_HIERARCHY_LEVEL_THREE</code> \| <code>AGENT_HIERARCHY_LEVEL_FOUR</code> \| <code>AGENT_HIERARCHY_LEVEL_FIVE</code> </p> </li> <li> <p> <b>Filter values</b>: A maximum of 100 filter values are supported in a single request. For example, a <code>GetMetricDataV2</code> request can filter by 50 queues, 35 agents, and 15 routing profiles for a total of 100 filter values. <code>VOICE</code>, <code>CHAT</code>, and <code>TASK</code> are valid <code>filterValue</code> for the <code>CHANNEL</code> filter key.</p> </li> </ul>|
|» Groupings|body|[[GroupingV2](#schemagroupingv2)]|false|<p>The grouping applied to the metrics that are returned. For example, when results are grouped by queue, the metrics returned are grouped by queue. The values that are returned apply to the metrics for each queue. They are not aggregated for all queues.</p> <p>If no grouping is specified, a summary of all metrics is returned.</p> <p>Valid grouping keys: <code>QUEUE</code> \| <code>ROUTING_PROFILE</code> \| <code>AGENT</code> \| <code>CHANNEL</code> \| <code>AGENT_HIERARCHY_LEVEL_ONE</code> \| <code>AGENT_HIERARCHY_LEVEL_TWO</code> \| <code>AGENT_HIERARCHY_LEVEL_THREE</code> \| <code>AGENT_HIERARCHY_LEVEL_FOUR</code> \| <code>AGENT_HIERARCHY_LEVEL_FIVE</code> </p>|
|» Metrics|body|[[MetricV2](#schemametricv2)]|true|<p>The metrics to retrieve. Specify the name, groupings, and filters for each metric. The following historical metrics are available. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical metrics definitions</a> in the <i>Amazon Connect Administrator's Guide</i>.</p> <dl> <dt>AGENT_ADHERENT_TIME</dt> <dd> <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy </p> </dd> <dt>AGENT_NON_RESPONSE</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy </p> </dd> <dt>AGENT_OCCUPANCY</dt> <dd> <p>Unit: Percentage</p> <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy </p> </dd> <dt>AGENT_SCHEDULE_ADHERENCE</dt> <dd> <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p> <p>Unit: Percent</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AGENT_SCHEDULED_TIME</dt> <dd> <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_ABANDON_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_AFTER_CONTACT_WORK_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_AGENT_CONNECTING_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid metric filter key: <code>INITIATION_METHOD</code>. For now, this metric only supports the following as <code>INITIATION_METHOD</code>: <code>INBOUND</code> \| <code>OUTBOUND</code> \| <code>CALLBACK</code> \| <code>API</code> </p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_HANDLE_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_HOLD_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_INTERACTION_AND_HOLD_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>AVG_INTERACTION_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile</p> </dd> <dt>AVG_QUEUE_ANSWER_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile</p> </dd> <dt>CONTACTS_ABANDONED</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>CONTACTS_CREATED</dt> <dd> <p>Unit: Count</p> <p>Valid metric filter key: <code>INITIATION_METHOD</code> </p> <p>Valid groupings and filters: Queue, Channel, Routing Profile</p> </dd> <dt>CONTACTS_HANDLED</dt> <dd> <p>Unit: Count</p> <p>Valid metric filter key: <code>INITIATION_METHOD</code>, <code>DISCONNECT_REASON</code> </p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>CONTACTS_HOLD_ABANDONS</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>CONTACTS_QUEUED</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>CONTACTS_TRANSFERRED_OUT</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>CONTACTS_TRANSFERRED_OUT_BY_AGENT</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>MAX_QUEUED_TIME</dt> <dd> <p>Unit: Seconds</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p> </dd> <dt>SERVICE_LEVEL</dt> <dd> <p>You can include up to 20 SERVICE_LEVEL metrics in a request.</p> <p>Unit: Percent</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile</p> <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for "Less than"). </p> </dd> <dt>SUM_CONTACTS_ANSWERED_IN_X</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile</p> <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for "Less than"). </p> </dd> <dt>SUM_CONTACTS_ABANDONED_IN_X</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile</p> <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for "Less than"). </p> </dd> <dt>SUM_CONTACTS_DISCONNECTED </dt> <dd> <p>Valid metric filter key: <code>DISCONNECT_REASON</code> </p> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile</p> </dd> <dt>SUM_RETRY_CALLBACK_ATTEMPTS</dt> <dd> <p>Unit: Count</p> <p>Valid groupings and filters: Queue, Channel, Routing Profile</p> </dd> </dl>|
|» NextToken|body|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|» MaxResults|body|integer|false|The maximum number of results to return per page.|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "MetricResults": {}
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

<h3 id="getmetricdatav2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMetricDataV2Response](#schemagetmetricdatav2response)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTrafficDistribution

<a id="opIdGetTrafficDistribution"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/traffic-distribution/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /traffic-distribution/{Id}`

Retrieves the current traffic distribution for a given traffic distribution group.

<h3 id="gettrafficdistribution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the traffic distribution group.|
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
  "TelephonyConfig": {
    "Distributions": {}
  },
  "Id": {},
  "Arn": {}
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

<h3 id="gettrafficdistribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTrafficDistributionResponse](#schemagettrafficdistributionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTrafficDistribution

<a id="opIdUpdateTrafficDistribution"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/traffic-distribution/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TelephonyConfig": {
      "Distributions": {}
    }
  }'
```

`PUT /traffic-distribution/{Id}`

<p>Updates the traffic distribution for a given traffic distribution group. </p> <p>For more information about updating a traffic distribution group, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/update-telephony-traffic-distribution.html">Update telephony traffic distribution across Amazon Web Services Regions </a> in the <i>Amazon Connect Administrator Guide</i>. </p>

> Body parameter

```json
{
  "TelephonyConfig": {
    "Distributions": {}
  }
}
```

<h3 id="updatetrafficdistribution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TelephonyConfig|body|object|false|The distribution of traffic between the instance and its replicas.|
|» » Distributions|body|object|false|none|

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

<h3 id="updatetrafficdistribution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTrafficDistributionResponse](#schemaupdatetrafficdistributionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApprovedOrigins

<a id="opIdListApprovedOrigins"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/approved-origins \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /instance/{InstanceId}/approved-origins`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Returns a paginated list of all approved origins associated with the instance.</p>

<h3 id="listapprovedorigins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "Origins": {},
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

<h3 id="listapprovedorigins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApprovedOriginsResponse](#schemalistapprovedoriginsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBots

<a id="opIdListBots"></a>

> Code samples

```bash
curl 'https://connect.us-east-1.amazonaws.com/instance/string/bots#lexVersion?lexVersion=V1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /instance/{InstanceId}/bots#lexVersion`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>For the specified version of Amazon Lex, returns a paginated list of all the Amazon Lex bots currently associated with the instance. Use this API to returns both Amazon Lex V1 and V2 bots.</p>

<h3 id="listbots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
|lexVersion|query|string|true|The version of Amazon Lex or Amazon Lex V2.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lexVersion|V1|
|lexVersion|V2|

> Example responses

> 200 Response

```json
{
  "LexBots": {},
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

<h3 id="listbots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBotsResponse](#schemalistbotsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListContactFlowModules

<a id="opIdListContactFlowModules"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact-flow-modules-summary/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /contact-flow-modules-summary/{InstanceId}`

Provides information about the flow modules for the specified Amazon Connect instance.

<h3 id="listcontactflowmodules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
|state|query|string|false|The state of the flow module.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|ACTIVE|
|state|ARCHIVED|

> Example responses

> 200 Response

```json
{
  "ContactFlowModulesSummaryList": {},
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

<h3 id="listcontactflowmodules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListContactFlowModulesResponse](#schemalistcontactflowmodulesresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListContactFlows

<a id="opIdListContactFlows"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact-flows-summary/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /contact-flows-summary/{InstanceId}`

<p>Provides information about the flows for the specified Amazon Connect instance.</p> <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect Flow language</a>.</p> <p>For more information about flows, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-contact-flows.html">Flows</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

<h3 id="listcontactflows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|contactFlowTypes|query|[[ContactFlowType](#schemacontactflowtype)]|false|The type of flow.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page. The default MaxResult size is 100.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|contactFlowTypes|CONTACT_FLOW|
|contactFlowTypes|CUSTOMER_QUEUE|
|contactFlowTypes|CUSTOMER_HOLD|
|contactFlowTypes|CUSTOMER_WHISPER|
|contactFlowTypes|AGENT_HOLD|
|contactFlowTypes|AGENT_WHISPER|
|contactFlowTypes|OUTBOUND_WHISPER|
|contactFlowTypes|AGENT_TRANSFER|
|contactFlowTypes|QUEUE_TRANSFER|

> Example responses

> 200 Response

```json
{
  "ContactFlowSummaryList": {},
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

<h3 id="listcontactflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListContactFlowsResponse](#schemalistcontactflowsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListContactReferences

<a id="opIdListContactReferences"></a>

> Code samples

```bash
curl 'https://connect.us-east-1.amazonaws.com/contact/references/string/string#referenceTypes?referenceTypes=URL' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /contact/references/{InstanceId}/{ContactId}#referenceTypes`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>For the specified <code>referenceTypes</code>, returns a list of references associated with the contact. </p>

<h3 id="listcontactreferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|ContactId|path|string|true|The identifier of the initial contact.|
|referenceTypes|query|[[ReferenceType](#schemareferencetype)]|true|The type of reference.|
|nextToken|query|string|false|<p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p> <important> <p>This is not expected to be set, because the value returned in the previous response is always null.</p> </important>|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|referenceTypes|URL|
|referenceTypes|ATTACHMENT|
|referenceTypes|NUMBER|
|referenceTypes|STRING|
|referenceTypes|DATE|
|referenceTypes|EMAIL|

> Example responses

> 200 Response

```json
{
  "ReferenceSummaryList": {},
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

<h3 id="listcontactreferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListContactReferencesResponse](#schemalistcontactreferencesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDefaultVocabularies

<a id="opIdListDefaultVocabularies"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/default-vocabulary-summary/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "LanguageCode": "ar-AE",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /default-vocabulary-summary/{InstanceId}`

Lists the default vocabularies for the specified Amazon Connect instance.

> Body parameter

```json
{
  "LanguageCode": "ar-AE",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listdefaultvocabularies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LanguageCode|body|string|false|The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a> |
|» MaxResults|body|integer|false|The maximum number of results to return per page.|
|» NextToken|body|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» LanguageCode|ar-AE|
|» LanguageCode|de-CH|
|» LanguageCode|de-DE|
|» LanguageCode|en-AB|
|» LanguageCode|en-AU|
|» LanguageCode|en-GB|
|» LanguageCode|en-IE|
|» LanguageCode|en-IN|
|» LanguageCode|en-US|
|» LanguageCode|en-WL|
|» LanguageCode|es-ES|
|» LanguageCode|es-US|
|» LanguageCode|fr-CA|
|» LanguageCode|fr-FR|
|» LanguageCode|hi-IN|
|» LanguageCode|it-IT|
|» LanguageCode|ja-JP|
|» LanguageCode|ko-KR|
|» LanguageCode|pt-BR|
|» LanguageCode|pt-PT|
|» LanguageCode|zh-CN|
|» LanguageCode|en-NZ|
|» LanguageCode|en-ZA|

> Example responses

> 200 Response

```json
{
  "DefaultVocabularyList": {},
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

<h3 id="listdefaultvocabularies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDefaultVocabulariesResponse](#schemalistdefaultvocabulariesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListHoursOfOperations

<a id="opIdListHoursOfOperations"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/hours-of-operations-summary/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /hours-of-operations-summary/{InstanceId}`

<p>Provides information about the hours of operation for the specified Amazon Connect instance.</p> <p>For more information about hours of operation, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-hours-operation.html">Set the Hours of Operation for a Queue</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

<h3 id="listhoursofoperations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page. The default MaxResult size is 100.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "HoursOfOperationSummaryList": {},
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

<h3 id="listhoursofoperations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListHoursOfOperationsResponse](#schemalisthoursofoperationsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInstanceAttributes

<a id="opIdListInstanceAttributes"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/attributes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /instance/{InstanceId}/attributes`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Returns a paginated list of all attribute types for the given instance.</p>

<h3 id="listinstanceattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "Attributes": {},
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

<h3 id="listinstanceattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInstanceAttributesResponse](#schemalistinstanceattributesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInstanceStorageConfigs

<a id="opIdListInstanceStorageConfigs"></a>

> Code samples

```bash
curl 'https://connect.us-east-1.amazonaws.com/instance/string/storage-configs#resourceType?resourceType=CHAT_TRANSCRIPTS' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /instance/{InstanceId}/storage-configs#resourceType`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Returns a paginated list of storage configs for the identified instance and resource type.</p>

<h3 id="listinstancestorageconfigs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|resourceType|query|string|true|A valid resource type.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resourceType|CHAT_TRANSCRIPTS|
|resourceType|CALL_RECORDINGS|
|resourceType|SCHEDULED_REPORTS|
|resourceType|MEDIA_STREAMS|
|resourceType|CONTACT_TRACE_RECORDS|
|resourceType|AGENT_EVENTS|
|resourceType|REAL_TIME_CONTACT_ANALYSIS_SEGMENTS|
|resourceType|ATTACHMENTS|
|resourceType|CONTACT_EVALUATIONS|

> Example responses

> 200 Response

```json
{
  "StorageConfigs": {},
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

<h3 id="listinstancestorageconfigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInstanceStorageConfigsResponse](#schemalistinstancestorageconfigsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLambdaFunctions

<a id="opIdListLambdaFunctions"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/lambda-functions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /instance/{InstanceId}/lambda-functions`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Returns a paginated list of all Lambda functions that display in the dropdown options in the relevant flow blocks.</p>

<h3 id="listlambdafunctions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "LambdaFunctions": {},
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

<h3 id="listlambdafunctions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLambdaFunctionsResponse](#schemalistlambdafunctionsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLexBots

<a id="opIdListLexBots"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/lex-bots \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /instance/{InstanceId}/lex-bots`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Returns a paginated list of all the Amazon Lex V1 bots currently associated with the instance. To return both Amazon Lex V1 and V2 bots, use the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListBots.html">ListBots</a> API. </p>

<h3 id="listlexbots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page. If no value is specified, the default is 10. |
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "LexBots": {},
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

<h3 id="listlexbots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLexBotsResponse](#schemalistlexbotsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPhoneNumbers

<a id="opIdListPhoneNumbers"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/phone-numbers-summary/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /phone-numbers-summary/{InstanceId}`

<p>Provides information about the phone numbers for the specified Amazon Connect instance. </p> <p>For more information about phone numbers, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-center-phone-number.html">Set Up Phone Numbers for Your Contact Center</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <important> <p>The phone number <code>Arn</code> value that is returned from each of the items in the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbers.html#connect-ListPhoneNumbers-response-PhoneNumberSummaryList">PhoneNumberSummaryList</a> cannot be used to tag phone number resources. It will fail with a <code>ResourceNotFoundException</code>. Instead, use the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbersV2.html">ListPhoneNumbersV2</a> API. It returns the new phone number ARN that can be used to tag phone number resources.</p> </important>

<h3 id="listphonenumbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|phoneNumberTypes|query|[[PhoneNumberType](#schemaphonenumbertype)]|false|The type of phone number.|
|phoneNumberCountryCodes|query|[[PhoneNumberCountryCode](#schemaphonenumbercountrycode)]|false|The ISO country code.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page. The default MaxResult size is 100.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|phoneNumberTypes|TOLL_FREE|
|phoneNumberTypes|DID|
|phoneNumberCountryCodes|AF|
|phoneNumberCountryCodes|AL|
|phoneNumberCountryCodes|DZ|
|phoneNumberCountryCodes|AS|
|phoneNumberCountryCodes|AD|
|phoneNumberCountryCodes|AO|
|phoneNumberCountryCodes|AI|
|phoneNumberCountryCodes|AQ|
|phoneNumberCountryCodes|AG|
|phoneNumberCountryCodes|AR|
|phoneNumberCountryCodes|AM|
|phoneNumberCountryCodes|AW|
|phoneNumberCountryCodes|AU|
|phoneNumberCountryCodes|AT|
|phoneNumberCountryCodes|AZ|
|phoneNumberCountryCodes|BS|
|phoneNumberCountryCodes|BH|
|phoneNumberCountryCodes|BD|
|phoneNumberCountryCodes|BB|
|phoneNumberCountryCodes|BY|
|phoneNumberCountryCodes|BE|
|phoneNumberCountryCodes|BZ|
|phoneNumberCountryCodes|BJ|
|phoneNumberCountryCodes|BM|
|phoneNumberCountryCodes|BT|
|phoneNumberCountryCodes|BO|
|phoneNumberCountryCodes|BA|
|phoneNumberCountryCodes|BW|
|phoneNumberCountryCodes|BR|
|phoneNumberCountryCodes|IO|
|phoneNumberCountryCodes|VG|
|phoneNumberCountryCodes|BN|
|phoneNumberCountryCodes|BG|
|phoneNumberCountryCodes|BF|
|phoneNumberCountryCodes|BI|
|phoneNumberCountryCodes|KH|
|phoneNumberCountryCodes|CM|
|phoneNumberCountryCodes|CA|
|phoneNumberCountryCodes|CV|
|phoneNumberCountryCodes|KY|
|phoneNumberCountryCodes|CF|
|phoneNumberCountryCodes|TD|
|phoneNumberCountryCodes|CL|
|phoneNumberCountryCodes|CN|
|phoneNumberCountryCodes|CX|
|phoneNumberCountryCodes|CC|
|phoneNumberCountryCodes|CO|
|phoneNumberCountryCodes|KM|
|phoneNumberCountryCodes|CK|
|phoneNumberCountryCodes|CR|
|phoneNumberCountryCodes|HR|
|phoneNumberCountryCodes|CU|
|phoneNumberCountryCodes|CW|
|phoneNumberCountryCodes|CY|
|phoneNumberCountryCodes|CZ|
|phoneNumberCountryCodes|CD|
|phoneNumberCountryCodes|DK|
|phoneNumberCountryCodes|DJ|
|phoneNumberCountryCodes|DM|
|phoneNumberCountryCodes|DO|
|phoneNumberCountryCodes|TL|
|phoneNumberCountryCodes|EC|
|phoneNumberCountryCodes|EG|
|phoneNumberCountryCodes|SV|
|phoneNumberCountryCodes|GQ|
|phoneNumberCountryCodes|ER|
|phoneNumberCountryCodes|EE|
|phoneNumberCountryCodes|ET|
|phoneNumberCountryCodes|FK|
|phoneNumberCountryCodes|FO|
|phoneNumberCountryCodes|FJ|
|phoneNumberCountryCodes|FI|
|phoneNumberCountryCodes|FR|
|phoneNumberCountryCodes|PF|
|phoneNumberCountryCodes|GA|
|phoneNumberCountryCodes|GM|
|phoneNumberCountryCodes|GE|
|phoneNumberCountryCodes|DE|
|phoneNumberCountryCodes|GH|
|phoneNumberCountryCodes|GI|
|phoneNumberCountryCodes|GR|
|phoneNumberCountryCodes|GL|
|phoneNumberCountryCodes|GD|
|phoneNumberCountryCodes|GU|
|phoneNumberCountryCodes|GT|
|phoneNumberCountryCodes|GG|
|phoneNumberCountryCodes|GN|
|phoneNumberCountryCodes|GW|
|phoneNumberCountryCodes|GY|
|phoneNumberCountryCodes|HT|
|phoneNumberCountryCodes|HN|
|phoneNumberCountryCodes|HK|
|phoneNumberCountryCodes|HU|
|phoneNumberCountryCodes|IS|
|phoneNumberCountryCodes|IN|
|phoneNumberCountryCodes|ID|
|phoneNumberCountryCodes|IR|
|phoneNumberCountryCodes|IQ|
|phoneNumberCountryCodes|IE|
|phoneNumberCountryCodes|IM|
|phoneNumberCountryCodes|IL|
|phoneNumberCountryCodes|IT|
|phoneNumberCountryCodes|CI|
|phoneNumberCountryCodes|JM|
|phoneNumberCountryCodes|JP|
|phoneNumberCountryCodes|JE|
|phoneNumberCountryCodes|JO|
|phoneNumberCountryCodes|KZ|
|phoneNumberCountryCodes|KE|
|phoneNumberCountryCodes|KI|
|phoneNumberCountryCodes|KW|
|phoneNumberCountryCodes|KG|
|phoneNumberCountryCodes|LA|
|phoneNumberCountryCodes|LV|
|phoneNumberCountryCodes|LB|
|phoneNumberCountryCodes|LS|
|phoneNumberCountryCodes|LR|
|phoneNumberCountryCodes|LY|
|phoneNumberCountryCodes|LI|
|phoneNumberCountryCodes|LT|
|phoneNumberCountryCodes|LU|
|phoneNumberCountryCodes|MO|
|phoneNumberCountryCodes|MK|
|phoneNumberCountryCodes|MG|
|phoneNumberCountryCodes|MW|
|phoneNumberCountryCodes|MY|
|phoneNumberCountryCodes|MV|
|phoneNumberCountryCodes|ML|
|phoneNumberCountryCodes|MT|
|phoneNumberCountryCodes|MH|
|phoneNumberCountryCodes|MR|
|phoneNumberCountryCodes|MU|
|phoneNumberCountryCodes|YT|
|phoneNumberCountryCodes|MX|
|phoneNumberCountryCodes|FM|
|phoneNumberCountryCodes|MD|
|phoneNumberCountryCodes|MC|
|phoneNumberCountryCodes|MN|
|phoneNumberCountryCodes|ME|
|phoneNumberCountryCodes|MS|
|phoneNumberCountryCodes|MA|
|phoneNumberCountryCodes|MZ|
|phoneNumberCountryCodes|MM|
|phoneNumberCountryCodes|NA|
|phoneNumberCountryCodes|NR|
|phoneNumberCountryCodes|NP|
|phoneNumberCountryCodes|NL|
|phoneNumberCountryCodes|AN|
|phoneNumberCountryCodes|NC|
|phoneNumberCountryCodes|NZ|
|phoneNumberCountryCodes|NI|
|phoneNumberCountryCodes|NE|
|phoneNumberCountryCodes|NG|
|phoneNumberCountryCodes|NU|
|phoneNumberCountryCodes|KP|
|phoneNumberCountryCodes|MP|
|phoneNumberCountryCodes|NO|
|phoneNumberCountryCodes|OM|
|phoneNumberCountryCodes|PK|
|phoneNumberCountryCodes|PW|
|phoneNumberCountryCodes|PA|
|phoneNumberCountryCodes|PG|
|phoneNumberCountryCodes|PY|
|phoneNumberCountryCodes|PE|
|phoneNumberCountryCodes|PH|
|phoneNumberCountryCodes|PN|
|phoneNumberCountryCodes|PL|
|phoneNumberCountryCodes|PT|
|phoneNumberCountryCodes|PR|
|phoneNumberCountryCodes|QA|
|phoneNumberCountryCodes|CG|
|phoneNumberCountryCodes|RE|
|phoneNumberCountryCodes|RO|
|phoneNumberCountryCodes|RU|
|phoneNumberCountryCodes|RW|
|phoneNumberCountryCodes|BL|
|phoneNumberCountryCodes|SH|
|phoneNumberCountryCodes|KN|
|phoneNumberCountryCodes|LC|
|phoneNumberCountryCodes|MF|
|phoneNumberCountryCodes|PM|
|phoneNumberCountryCodes|VC|
|phoneNumberCountryCodes|WS|
|phoneNumberCountryCodes|SM|
|phoneNumberCountryCodes|ST|
|phoneNumberCountryCodes|SA|
|phoneNumberCountryCodes|SN|
|phoneNumberCountryCodes|RS|
|phoneNumberCountryCodes|SC|
|phoneNumberCountryCodes|SL|
|phoneNumberCountryCodes|SG|
|phoneNumberCountryCodes|SX|
|phoneNumberCountryCodes|SK|
|phoneNumberCountryCodes|SI|
|phoneNumberCountryCodes|SB|
|phoneNumberCountryCodes|SO|
|phoneNumberCountryCodes|ZA|
|phoneNumberCountryCodes|KR|
|phoneNumberCountryCodes|ES|
|phoneNumberCountryCodes|LK|
|phoneNumberCountryCodes|SD|
|phoneNumberCountryCodes|SR|
|phoneNumberCountryCodes|SJ|
|phoneNumberCountryCodes|SZ|
|phoneNumberCountryCodes|SE|
|phoneNumberCountryCodes|CH|
|phoneNumberCountryCodes|SY|
|phoneNumberCountryCodes|TW|
|phoneNumberCountryCodes|TJ|
|phoneNumberCountryCodes|TZ|
|phoneNumberCountryCodes|TH|
|phoneNumberCountryCodes|TG|
|phoneNumberCountryCodes|TK|
|phoneNumberCountryCodes|TO|
|phoneNumberCountryCodes|TT|
|phoneNumberCountryCodes|TN|
|phoneNumberCountryCodes|TR|
|phoneNumberCountryCodes|TM|
|phoneNumberCountryCodes|TC|
|phoneNumberCountryCodes|TV|
|phoneNumberCountryCodes|VI|
|phoneNumberCountryCodes|UG|
|phoneNumberCountryCodes|UA|
|phoneNumberCountryCodes|AE|
|phoneNumberCountryCodes|GB|
|phoneNumberCountryCodes|US|
|phoneNumberCountryCodes|UY|
|phoneNumberCountryCodes|UZ|
|phoneNumberCountryCodes|VU|
|phoneNumberCountryCodes|VA|
|phoneNumberCountryCodes|VE|
|phoneNumberCountryCodes|VN|
|phoneNumberCountryCodes|WF|
|phoneNumberCountryCodes|EH|
|phoneNumberCountryCodes|YE|
|phoneNumberCountryCodes|ZM|
|phoneNumberCountryCodes|ZW|

> Example responses

> 200 Response

```json
{
  "PhoneNumberSummaryList": {},
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

<h3 id="listphonenumbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPhoneNumbersResponse](#schemalistphonenumbersresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPhoneNumbersV2

<a id="opIdListPhoneNumbersV2"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/phone-number/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TargetArn": "string",
    "MaxResults": 1,
    "NextToken": "string",
    "PhoneNumberCountryCodes": [
      "AF"
    ],
    "PhoneNumberTypes": [
      "TOLL_FREE"
    ],
    "PhoneNumberPrefix": "string"
  }'
```

`POST /phone-number/list`

<p>Lists phone numbers claimed to your Amazon Connect instance or traffic distribution group. If the provided <code>TargetArn</code> is a traffic distribution group, you can call this API in both Amazon Web Services Regions associated with traffic distribution group.</p> <p>For more information about phone numbers, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-center-phone-number.html">Set Up Phone Numbers for Your Contact Center</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

> Body parameter

```json
{
  "TargetArn": "string",
  "MaxResults": 1,
  "NextToken": "string",
  "PhoneNumberCountryCodes": [
    "AF"
  ],
  "PhoneNumberTypes": [
    "TOLL_FREE"
  ],
  "PhoneNumberPrefix": "string"
}
```

<h3 id="listphonenumbersv2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TargetArn|body|string|false|The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to. If <code>TargetArn</code> input is not provided, this API lists numbers claimed to all the Amazon Connect instances belonging to your account in the same Amazon Web Services Region as the request.|
|» MaxResults|body|integer|false|The maximum number of results to return per page.|
|» NextToken|body|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|» PhoneNumberCountryCodes|body|[[PhoneNumberCountryCode](#schemaphonenumbercountrycode)]|false|The ISO country code.|
|» PhoneNumberTypes|body|[[PhoneNumberType](#schemaphonenumbertype)]|false|The type of phone number.|
|» PhoneNumberPrefix|body|string|false|The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PhoneNumberCountryCodes|AF|
|» PhoneNumberCountryCodes|AL|
|» PhoneNumberCountryCodes|DZ|
|» PhoneNumberCountryCodes|AS|
|» PhoneNumberCountryCodes|AD|
|» PhoneNumberCountryCodes|AO|
|» PhoneNumberCountryCodes|AI|
|» PhoneNumberCountryCodes|AQ|
|» PhoneNumberCountryCodes|AG|
|» PhoneNumberCountryCodes|AR|
|» PhoneNumberCountryCodes|AM|
|» PhoneNumberCountryCodes|AW|
|» PhoneNumberCountryCodes|AU|
|» PhoneNumberCountryCodes|AT|
|» PhoneNumberCountryCodes|AZ|
|» PhoneNumberCountryCodes|BS|
|» PhoneNumberCountryCodes|BH|
|» PhoneNumberCountryCodes|BD|
|» PhoneNumberCountryCodes|BB|
|» PhoneNumberCountryCodes|BY|
|» PhoneNumberCountryCodes|BE|
|» PhoneNumberCountryCodes|BZ|
|» PhoneNumberCountryCodes|BJ|
|» PhoneNumberCountryCodes|BM|
|» PhoneNumberCountryCodes|BT|
|» PhoneNumberCountryCodes|BO|
|» PhoneNumberCountryCodes|BA|
|» PhoneNumberCountryCodes|BW|
|» PhoneNumberCountryCodes|BR|
|» PhoneNumberCountryCodes|IO|
|» PhoneNumberCountryCodes|VG|
|» PhoneNumberCountryCodes|BN|
|» PhoneNumberCountryCodes|BG|
|» PhoneNumberCountryCodes|BF|
|» PhoneNumberCountryCodes|BI|
|» PhoneNumberCountryCodes|KH|
|» PhoneNumberCountryCodes|CM|
|» PhoneNumberCountryCodes|CA|
|» PhoneNumberCountryCodes|CV|
|» PhoneNumberCountryCodes|KY|
|» PhoneNumberCountryCodes|CF|
|» PhoneNumberCountryCodes|TD|
|» PhoneNumberCountryCodes|CL|
|» PhoneNumberCountryCodes|CN|
|» PhoneNumberCountryCodes|CX|
|» PhoneNumberCountryCodes|CC|
|» PhoneNumberCountryCodes|CO|
|» PhoneNumberCountryCodes|KM|
|» PhoneNumberCountryCodes|CK|
|» PhoneNumberCountryCodes|CR|
|» PhoneNumberCountryCodes|HR|
|» PhoneNumberCountryCodes|CU|
|» PhoneNumberCountryCodes|CW|
|» PhoneNumberCountryCodes|CY|
|» PhoneNumberCountryCodes|CZ|
|» PhoneNumberCountryCodes|CD|
|» PhoneNumberCountryCodes|DK|
|» PhoneNumberCountryCodes|DJ|
|» PhoneNumberCountryCodes|DM|
|» PhoneNumberCountryCodes|DO|
|» PhoneNumberCountryCodes|TL|
|» PhoneNumberCountryCodes|EC|
|» PhoneNumberCountryCodes|EG|
|» PhoneNumberCountryCodes|SV|
|» PhoneNumberCountryCodes|GQ|
|» PhoneNumberCountryCodes|ER|
|» PhoneNumberCountryCodes|EE|
|» PhoneNumberCountryCodes|ET|
|» PhoneNumberCountryCodes|FK|
|» PhoneNumberCountryCodes|FO|
|» PhoneNumberCountryCodes|FJ|
|» PhoneNumberCountryCodes|FI|
|» PhoneNumberCountryCodes|FR|
|» PhoneNumberCountryCodes|PF|
|» PhoneNumberCountryCodes|GA|
|» PhoneNumberCountryCodes|GM|
|» PhoneNumberCountryCodes|GE|
|» PhoneNumberCountryCodes|DE|
|» PhoneNumberCountryCodes|GH|
|» PhoneNumberCountryCodes|GI|
|» PhoneNumberCountryCodes|GR|
|» PhoneNumberCountryCodes|GL|
|» PhoneNumberCountryCodes|GD|
|» PhoneNumberCountryCodes|GU|
|» PhoneNumberCountryCodes|GT|
|» PhoneNumberCountryCodes|GG|
|» PhoneNumberCountryCodes|GN|
|» PhoneNumberCountryCodes|GW|
|» PhoneNumberCountryCodes|GY|
|» PhoneNumberCountryCodes|HT|
|» PhoneNumberCountryCodes|HN|
|» PhoneNumberCountryCodes|HK|
|» PhoneNumberCountryCodes|HU|
|» PhoneNumberCountryCodes|IS|
|» PhoneNumberCountryCodes|IN|
|» PhoneNumberCountryCodes|ID|
|» PhoneNumberCountryCodes|IR|
|» PhoneNumberCountryCodes|IQ|
|» PhoneNumberCountryCodes|IE|
|» PhoneNumberCountryCodes|IM|
|» PhoneNumberCountryCodes|IL|
|» PhoneNumberCountryCodes|IT|
|» PhoneNumberCountryCodes|CI|
|» PhoneNumberCountryCodes|JM|
|» PhoneNumberCountryCodes|JP|
|» PhoneNumberCountryCodes|JE|
|» PhoneNumberCountryCodes|JO|
|» PhoneNumberCountryCodes|KZ|
|» PhoneNumberCountryCodes|KE|
|» PhoneNumberCountryCodes|KI|
|» PhoneNumberCountryCodes|KW|
|» PhoneNumberCountryCodes|KG|
|» PhoneNumberCountryCodes|LA|
|» PhoneNumberCountryCodes|LV|
|» PhoneNumberCountryCodes|LB|
|» PhoneNumberCountryCodes|LS|
|» PhoneNumberCountryCodes|LR|
|» PhoneNumberCountryCodes|LY|
|» PhoneNumberCountryCodes|LI|
|» PhoneNumberCountryCodes|LT|
|» PhoneNumberCountryCodes|LU|
|» PhoneNumberCountryCodes|MO|
|» PhoneNumberCountryCodes|MK|
|» PhoneNumberCountryCodes|MG|
|» PhoneNumberCountryCodes|MW|
|» PhoneNumberCountryCodes|MY|
|» PhoneNumberCountryCodes|MV|
|» PhoneNumberCountryCodes|ML|
|» PhoneNumberCountryCodes|MT|
|» PhoneNumberCountryCodes|MH|
|» PhoneNumberCountryCodes|MR|
|» PhoneNumberCountryCodes|MU|
|» PhoneNumberCountryCodes|YT|
|» PhoneNumberCountryCodes|MX|
|» PhoneNumberCountryCodes|FM|
|» PhoneNumberCountryCodes|MD|
|» PhoneNumberCountryCodes|MC|
|» PhoneNumberCountryCodes|MN|
|» PhoneNumberCountryCodes|ME|
|» PhoneNumberCountryCodes|MS|
|» PhoneNumberCountryCodes|MA|
|» PhoneNumberCountryCodes|MZ|
|» PhoneNumberCountryCodes|MM|
|» PhoneNumberCountryCodes|NA|
|» PhoneNumberCountryCodes|NR|
|» PhoneNumberCountryCodes|NP|
|» PhoneNumberCountryCodes|NL|
|» PhoneNumberCountryCodes|AN|
|» PhoneNumberCountryCodes|NC|
|» PhoneNumberCountryCodes|NZ|
|» PhoneNumberCountryCodes|NI|
|» PhoneNumberCountryCodes|NE|
|» PhoneNumberCountryCodes|NG|
|» PhoneNumberCountryCodes|NU|
|» PhoneNumberCountryCodes|KP|
|» PhoneNumberCountryCodes|MP|
|» PhoneNumberCountryCodes|NO|
|» PhoneNumberCountryCodes|OM|
|» PhoneNumberCountryCodes|PK|
|» PhoneNumberCountryCodes|PW|
|» PhoneNumberCountryCodes|PA|
|» PhoneNumberCountryCodes|PG|
|» PhoneNumberCountryCodes|PY|
|» PhoneNumberCountryCodes|PE|
|» PhoneNumberCountryCodes|PH|
|» PhoneNumberCountryCodes|PN|
|» PhoneNumberCountryCodes|PL|
|» PhoneNumberCountryCodes|PT|
|» PhoneNumberCountryCodes|PR|
|» PhoneNumberCountryCodes|QA|
|» PhoneNumberCountryCodes|CG|
|» PhoneNumberCountryCodes|RE|
|» PhoneNumberCountryCodes|RO|
|» PhoneNumberCountryCodes|RU|
|» PhoneNumberCountryCodes|RW|
|» PhoneNumberCountryCodes|BL|
|» PhoneNumberCountryCodes|SH|
|» PhoneNumberCountryCodes|KN|
|» PhoneNumberCountryCodes|LC|
|» PhoneNumberCountryCodes|MF|
|» PhoneNumberCountryCodes|PM|
|» PhoneNumberCountryCodes|VC|
|» PhoneNumberCountryCodes|WS|
|» PhoneNumberCountryCodes|SM|
|» PhoneNumberCountryCodes|ST|
|» PhoneNumberCountryCodes|SA|
|» PhoneNumberCountryCodes|SN|
|» PhoneNumberCountryCodes|RS|
|» PhoneNumberCountryCodes|SC|
|» PhoneNumberCountryCodes|SL|
|» PhoneNumberCountryCodes|SG|
|» PhoneNumberCountryCodes|SX|
|» PhoneNumberCountryCodes|SK|
|» PhoneNumberCountryCodes|SI|
|» PhoneNumberCountryCodes|SB|
|» PhoneNumberCountryCodes|SO|
|» PhoneNumberCountryCodes|ZA|
|» PhoneNumberCountryCodes|KR|
|» PhoneNumberCountryCodes|ES|
|» PhoneNumberCountryCodes|LK|
|» PhoneNumberCountryCodes|SD|
|» PhoneNumberCountryCodes|SR|
|» PhoneNumberCountryCodes|SJ|
|» PhoneNumberCountryCodes|SZ|
|» PhoneNumberCountryCodes|SE|
|» PhoneNumberCountryCodes|CH|
|» PhoneNumberCountryCodes|SY|
|» PhoneNumberCountryCodes|TW|
|» PhoneNumberCountryCodes|TJ|
|» PhoneNumberCountryCodes|TZ|
|» PhoneNumberCountryCodes|TH|
|» PhoneNumberCountryCodes|TG|
|» PhoneNumberCountryCodes|TK|
|» PhoneNumberCountryCodes|TO|
|» PhoneNumberCountryCodes|TT|
|» PhoneNumberCountryCodes|TN|
|» PhoneNumberCountryCodes|TR|
|» PhoneNumberCountryCodes|TM|
|» PhoneNumberCountryCodes|TC|
|» PhoneNumberCountryCodes|TV|
|» PhoneNumberCountryCodes|VI|
|» PhoneNumberCountryCodes|UG|
|» PhoneNumberCountryCodes|UA|
|» PhoneNumberCountryCodes|AE|
|» PhoneNumberCountryCodes|GB|
|» PhoneNumberCountryCodes|US|
|» PhoneNumberCountryCodes|UY|
|» PhoneNumberCountryCodes|UZ|
|» PhoneNumberCountryCodes|VU|
|» PhoneNumberCountryCodes|VA|
|» PhoneNumberCountryCodes|VE|
|» PhoneNumberCountryCodes|VN|
|» PhoneNumberCountryCodes|WF|
|» PhoneNumberCountryCodes|EH|
|» PhoneNumberCountryCodes|YE|
|» PhoneNumberCountryCodes|ZM|
|» PhoneNumberCountryCodes|ZW|
|» PhoneNumberTypes|TOLL_FREE|
|» PhoneNumberTypes|DID|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "ListPhoneNumbersSummaryList": {}
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

<h3 id="listphonenumbersv2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPhoneNumbersV2Response](#schemalistphonenumbersv2response)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPrompts

<a id="opIdListPrompts"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/prompts-summary/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /prompts-summary/{InstanceId}`

Provides information about the prompts for the specified Amazon Connect instance.

<h3 id="listprompts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page. The default MaxResult size is 100.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "PromptSummaryList": {},
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

<h3 id="listprompts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPromptsResponse](#schemalistpromptsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListQueueQuickConnects

<a id="opIdListQueueQuickConnects"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/queues/string/string/quick-connects \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /queues/{InstanceId}/{QueueId}/quick-connects`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Lists the quick connects associated with a queue.</p>

<h3 id="listqueuequickconnects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|QueueId|path|string|true|The identifier for the queue.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page. The default MaxResult size is 100.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "QuickConnectSummaryList": {}
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

<h3 id="listqueuequickconnects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListQueueQuickConnectsResponse](#schemalistqueuequickconnectsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListQueues

<a id="opIdListQueues"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/queues-summary/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /queues-summary/{InstanceId}`

<p>Provides information about the queues for the specified Amazon Connect instance.</p> <p>If you do not specify a <code>QueueTypes</code> parameter, both standard and agent queues are returned. This might cause an unexpected truncation of results if you have more than 1000 agents and you limit the number of results of the API call in code.</p> <p>For more information about queues, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-queues-standard-and-agent.html">Queues: Standard and Agent</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

<h3 id="listqueues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|queueTypes|query|[[QueueType](#schemaqueuetype)]|false|The type of queue.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page. The default MaxResult size is 100.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|queueTypes|STANDARD|
|queueTypes|AGENT|

> Example responses

> 200 Response

```json
{
  "QueueSummaryList": {},
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

<h3 id="listqueues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListQueuesResponse](#schemalistqueuesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRoutingProfileQueues

<a id="opIdListRoutingProfileQueues"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/routing-profiles/string/string/queues \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /routing-profiles/{InstanceId}/{RoutingProfileId}/queues`

Lists the queues associated with a routing profile.

<h3 id="listroutingprofilequeues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|RoutingProfileId|path|string|true|The identifier of the routing profile.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page. The default MaxResult size is 100.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "RoutingProfileQueueConfigSummaryList": {}
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

<h3 id="listroutingprofilequeues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRoutingProfileQueuesResponse](#schemalistroutingprofilequeuesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRoutingProfileQueues

<a id="opIdUpdateRoutingProfileQueues"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/routing-profiles/string/string/queues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "QueueConfigs": [
      {
        "QueueReference": {
          "QueueId": {},
          "Channel": {}
        },
        "Priority": {},
        "Delay": {}
      }
    ]
  }'
```

`POST /routing-profiles/{InstanceId}/{RoutingProfileId}/queues`

Updates the properties associated with a set of queues for a routing profile.

> Body parameter

```json
{
  "QueueConfigs": [
    {
      "QueueReference": {
        "QueueId": {},
        "Channel": {}
      },
      "Priority": {},
      "Delay": {}
    }
  ]
}
```

<h3 id="updateroutingprofilequeues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|RoutingProfileId|path|string|true|The identifier of the routing profile.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» QueueConfigs|body|[[RoutingProfileQueueConfig](#schemaroutingprofilequeueconfig)]|true|The queues to be updated for this routing profile. Queues must first be associated to the routing profile. You can do this using AssociateRoutingProfileQueues.|

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

<h3 id="updateroutingprofilequeues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRoutingProfiles

<a id="opIdListRoutingProfiles"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/routing-profiles-summary/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /routing-profiles-summary/{InstanceId}`

<p>Provides summary information about the routing profiles for the specified Amazon Connect instance.</p> <p>For more information about routing profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing.html">Routing Profiles</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html">Create a Routing Profile</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

<h3 id="listroutingprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page. The default MaxResult size is 100.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "RoutingProfileSummaryList": {},
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

<h3 id="listroutingprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRoutingProfilesResponse](#schemalistroutingprofilesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSecurityKeys

<a id="opIdListSecurityKeys"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/security-keys \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /instance/{InstanceId}/security-keys`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Returns a paginated list of all security keys associated with the instance.</p>

<h3 id="listsecuritykeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "SecurityKeys": {},
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

<h3 id="listsecuritykeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSecurityKeysResponse](#schemalistsecuritykeysresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSecurityProfilePermissions

<a id="opIdListSecurityProfilePermissions"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/security-profiles-permissions/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /security-profiles-permissions/{InstanceId}/{SecurityProfileId}`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Lists the permissions granted to a security profile.</p>

<h3 id="listsecurityprofilepermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SecurityProfileId|path|string|true|The identifier for the security profle.|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "Permissions": {},
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

<h3 id="listsecurityprofilepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSecurityProfilePermissionsResponse](#schemalistsecurityprofilepermissionsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSecurityProfiles

<a id="opIdListSecurityProfiles"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/security-profiles-summary/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /security-profiles-summary/{InstanceId}`

<p>Provides summary information about the security profiles for the specified Amazon Connect instance.</p> <p>For more information about security profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html">Security Profiles</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

<h3 id="listsecurityprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page. The default MaxResult size is 100.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "SecurityProfileSummaryList": {},
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

<h3 id="listsecurityprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSecurityProfilesResponse](#schemalistsecurityprofilesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

<p>Lists the tags for the specified resource.</p> <p>For sample policies that use tags, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_id-based-policy-examples.html">Amazon Connect Identity-Based Policy Examples</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource. All Amazon Connect resources (instances, queues, flows, routing profiles, etc) have an ARN. To locate the ARN for an instance, for example, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">Find your Amazon Connect instance ID/ARN</a>. |
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
  "tags": {
    "property1": "string",
    "property2": "string"
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{resourceArn}`

<p>Adds the specified tags to the specified resource.</p> <p>Some of the supported resource types are agents, routing profiles, queues, quick connects, contact flows, agent statuses, hours of operation, phone numbers, security profiles, and task templates. For a complete list, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/tagging.html">Tagging resources in Amazon Connect</a>.</p> <p>For sample policies that use tags, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_id-based-policy-examples.html">Amazon Connect Identity-Based Policy Examples</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTrafficDistributionGroups

<a id="opIdListTrafficDistributionGroups"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/traffic-distribution-groups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /traffic-distribution-groups`

Lists traffic distribution groups.

<h3 id="listtrafficdistributiongroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of results to return per page.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|instanceId|query|string|false|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "TrafficDistributionGroupSummaryList": {}
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

<h3 id="listtrafficdistributiongroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTrafficDistributionGroupsResponse](#schemalisttrafficdistributiongroupsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUserHierarchyGroups

<a id="opIdListUserHierarchyGroups"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/user-hierarchy-groups-summary/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /user-hierarchy-groups-summary/{InstanceId}`

<p>Provides summary information about the hierarchy groups for the specified Amazon Connect instance.</p> <p>For more information about agent hierarchies, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html">Set Up Agent Hierarchies</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

<h3 id="listuserhierarchygroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page. The default MaxResult size is 100.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "UserHierarchyGroupSummaryList": {},
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

<h3 id="listuserhierarchygroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUserHierarchyGroupsResponse](#schemalistuserhierarchygroupsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUsers

<a id="opIdListUsers"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/users-summary/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users-summary/{InstanceId}`

Provides summary information about the users for the specified Amazon Connect instance.

<h3 id="listusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|nextToken|query|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return per page. The default MaxResult size is 100.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "UserSummaryList": {},
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

<h3 id="listusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUsersResponse](#schemalistusersresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## MonitorContact

<a id="opIdMonitorContact"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/monitor \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "ContactId": "string",
    "UserId": "string",
    "AllowedMonitorCapabilities": [
      "SILENT_MONITOR"
    ],
    "ClientToken": "string"
  }'
```

`POST /contact/monitor`

Initiates silent monitoring of a contact. The Contact Control Panel (CCP) of the user specified by <i>userId</i> will be set to silent monitoring mode on the contact.

> Body parameter

```json
{
  "InstanceId": "string",
  "ContactId": "string",
  "UserId": "string",
  "AllowedMonitorCapabilities": [
    "SILENT_MONITOR"
  ],
  "ClientToken": "string"
}
```

<h3 id="monitorcontact-parameters">Parameters</h3>

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
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.|
|» ContactId|body|string|true|The identifier of the contact.|
|» UserId|body|string|true|The identifier of the user account.|
|» AllowedMonitorCapabilities|body|[[MonitorCapability](#schemamonitorcapability)]|false|Specify which monitoring actions the user is allowed to take. For example, whether the user is allowed to escalate from silent monitoring to barge.|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» AllowedMonitorCapabilities|SILENT_MONITOR|
|» AllowedMonitorCapabilities|BARGE|

> Example responses

> 200 Response

```json
{
  "ContactId": {},
  "ContactArn": {}
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

<h3 id="monitorcontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MonitorContactResponse](#schemamonitorcontactresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|IdempotencyException|[IdempotencyException](#schemaidempotencyexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutUserStatus

<a id="opIdPutUserStatus"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/users/string/string/status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AgentStatusId": "string"
  }'
```

`PUT /users/{InstanceId}/{UserId}/status`

<p>Changes the current status of a user or agent in Amazon Connect. If the agent is currently handling a contact, this sets the agent's next status.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-agent-status.html">Agent status</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-next-status.html">Set your next status</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

> Body parameter

```json
{
  "AgentStatusId": "string"
}
```

<h3 id="putuserstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserId|path|string|true|The identifier of the user.|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AgentStatusId|body|string|true|The identifier of the agent status.|

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

<h3 id="putuserstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutUserStatusResponse](#schemaputuserstatusresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ReplicateInstance

<a id="opIdReplicateInstance"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/instance/string/replicate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ReplicaRegion": "stringst",
    "ClientToken": "string",
    "ReplicaAlias": "password"
  }'
```

`POST /instance/{InstanceId}/replicate`

<p>Replicates an Amazon Connect instance in the specified Amazon Web Services Region.</p> <p>For more information about replicating an Amazon Connect instance, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-replica-connect-instance.html">Create a replica of your existing Amazon Connect instance</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

> Body parameter

```json
{
  "ReplicaRegion": "stringst",
  "ClientToken": "string",
  "ReplicaAlias": "password"
}
```

<h3 id="replicateinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance. You can provide the <code>InstanceId</code>, or the entire ARN.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ReplicaRegion|body|string|true|The Amazon Web Services Region where to replicate the Amazon Connect instance.|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|
|» ReplicaAlias|body|string(password)|true|The alias for the replicated instance. The <code>ReplicaAlias</code> must be unique.|

> Example responses

> 200 Response

```json
{
  "Id": {},
  "Arn": {}
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

<h3 id="replicateinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReplicateInstanceResponse](#schemareplicateinstanceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|486|486|ResourceNotReadyException|[ResourceNotReadyException](#schemaresourcenotreadyexception)|
|487|487|ResourceConflictException|[ResourceConflictException](#schemaresourceconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResumeContactRecording

<a id="opIdResumeContactRecording"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/resume-recording \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "ContactId": "string",
    "InitialContactId": "string"
  }'
```

`POST /contact/resume-recording`

<p>When a contact is being recorded, and the recording has been suspended using SuspendContactRecording, this API resumes recording the call.</p> <p>Only voice recordings are supported at this time.</p>

> Body parameter

```json
{
  "InstanceId": "string",
  "ContactId": "string",
  "InitialContactId": "string"
}
```

<h3 id="resumecontactrecording-parameters">Parameters</h3>

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
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» ContactId|body|string|true|The identifier of the contact.|
|» InitialContactId|body|string|true|The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.|

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

<h3 id="resumecontactrecording-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResumeContactRecordingResponse](#schemaresumecontactrecordingresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchAvailablePhoneNumbers

<a id="opIdSearchAvailablePhoneNumbers"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/phone-number/search-available \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TargetArn": "string",
    "PhoneNumberCountryCode": "AF",
    "PhoneNumberType": "TOLL_FREE",
    "PhoneNumberPrefix": "string",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /phone-number/search-available`

Searches for available phone numbers that you can claim to your Amazon Connect instance or traffic distribution group. If the provided <code>TargetArn</code> is a traffic distribution group, you can call this API in both Amazon Web Services Regions associated with the traffic distribution group.

> Body parameter

```json
{
  "TargetArn": "string",
  "PhoneNumberCountryCode": "AF",
  "PhoneNumberType": "TOLL_FREE",
  "PhoneNumberPrefix": "string",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="searchavailablephonenumbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TargetArn|body|string|true|The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.|
|» PhoneNumberCountryCode|body|string|true|The ISO country code.|
|» PhoneNumberType|body|string|true|The type of phone number.|
|» PhoneNumberPrefix|body|string|false|The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code.|
|» MaxResults|body|integer|false|The maximum number of results to return per page.|
|» NextToken|body|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PhoneNumberCountryCode|AF|
|» PhoneNumberCountryCode|AL|
|» PhoneNumberCountryCode|DZ|
|» PhoneNumberCountryCode|AS|
|» PhoneNumberCountryCode|AD|
|» PhoneNumberCountryCode|AO|
|» PhoneNumberCountryCode|AI|
|» PhoneNumberCountryCode|AQ|
|» PhoneNumberCountryCode|AG|
|» PhoneNumberCountryCode|AR|
|» PhoneNumberCountryCode|AM|
|» PhoneNumberCountryCode|AW|
|» PhoneNumberCountryCode|AU|
|» PhoneNumberCountryCode|AT|
|» PhoneNumberCountryCode|AZ|
|» PhoneNumberCountryCode|BS|
|» PhoneNumberCountryCode|BH|
|» PhoneNumberCountryCode|BD|
|» PhoneNumberCountryCode|BB|
|» PhoneNumberCountryCode|BY|
|» PhoneNumberCountryCode|BE|
|» PhoneNumberCountryCode|BZ|
|» PhoneNumberCountryCode|BJ|
|» PhoneNumberCountryCode|BM|
|» PhoneNumberCountryCode|BT|
|» PhoneNumberCountryCode|BO|
|» PhoneNumberCountryCode|BA|
|» PhoneNumberCountryCode|BW|
|» PhoneNumberCountryCode|BR|
|» PhoneNumberCountryCode|IO|
|» PhoneNumberCountryCode|VG|
|» PhoneNumberCountryCode|BN|
|» PhoneNumberCountryCode|BG|
|» PhoneNumberCountryCode|BF|
|» PhoneNumberCountryCode|BI|
|» PhoneNumberCountryCode|KH|
|» PhoneNumberCountryCode|CM|
|» PhoneNumberCountryCode|CA|
|» PhoneNumberCountryCode|CV|
|» PhoneNumberCountryCode|KY|
|» PhoneNumberCountryCode|CF|
|» PhoneNumberCountryCode|TD|
|» PhoneNumberCountryCode|CL|
|» PhoneNumberCountryCode|CN|
|» PhoneNumberCountryCode|CX|
|» PhoneNumberCountryCode|CC|
|» PhoneNumberCountryCode|CO|
|» PhoneNumberCountryCode|KM|
|» PhoneNumberCountryCode|CK|
|» PhoneNumberCountryCode|CR|
|» PhoneNumberCountryCode|HR|
|» PhoneNumberCountryCode|CU|
|» PhoneNumberCountryCode|CW|
|» PhoneNumberCountryCode|CY|
|» PhoneNumberCountryCode|CZ|
|» PhoneNumberCountryCode|CD|
|» PhoneNumberCountryCode|DK|
|» PhoneNumberCountryCode|DJ|
|» PhoneNumberCountryCode|DM|
|» PhoneNumberCountryCode|DO|
|» PhoneNumberCountryCode|TL|
|» PhoneNumberCountryCode|EC|
|» PhoneNumberCountryCode|EG|
|» PhoneNumberCountryCode|SV|
|» PhoneNumberCountryCode|GQ|
|» PhoneNumberCountryCode|ER|
|» PhoneNumberCountryCode|EE|
|» PhoneNumberCountryCode|ET|
|» PhoneNumberCountryCode|FK|
|» PhoneNumberCountryCode|FO|
|» PhoneNumberCountryCode|FJ|
|» PhoneNumberCountryCode|FI|
|» PhoneNumberCountryCode|FR|
|» PhoneNumberCountryCode|PF|
|» PhoneNumberCountryCode|GA|
|» PhoneNumberCountryCode|GM|
|» PhoneNumberCountryCode|GE|
|» PhoneNumberCountryCode|DE|
|» PhoneNumberCountryCode|GH|
|» PhoneNumberCountryCode|GI|
|» PhoneNumberCountryCode|GR|
|» PhoneNumberCountryCode|GL|
|» PhoneNumberCountryCode|GD|
|» PhoneNumberCountryCode|GU|
|» PhoneNumberCountryCode|GT|
|» PhoneNumberCountryCode|GG|
|» PhoneNumberCountryCode|GN|
|» PhoneNumberCountryCode|GW|
|» PhoneNumberCountryCode|GY|
|» PhoneNumberCountryCode|HT|
|» PhoneNumberCountryCode|HN|
|» PhoneNumberCountryCode|HK|
|» PhoneNumberCountryCode|HU|
|» PhoneNumberCountryCode|IS|
|» PhoneNumberCountryCode|IN|
|» PhoneNumberCountryCode|ID|
|» PhoneNumberCountryCode|IR|
|» PhoneNumberCountryCode|IQ|
|» PhoneNumberCountryCode|IE|
|» PhoneNumberCountryCode|IM|
|» PhoneNumberCountryCode|IL|
|» PhoneNumberCountryCode|IT|
|» PhoneNumberCountryCode|CI|
|» PhoneNumberCountryCode|JM|
|» PhoneNumberCountryCode|JP|
|» PhoneNumberCountryCode|JE|
|» PhoneNumberCountryCode|JO|
|» PhoneNumberCountryCode|KZ|
|» PhoneNumberCountryCode|KE|
|» PhoneNumberCountryCode|KI|
|» PhoneNumberCountryCode|KW|
|» PhoneNumberCountryCode|KG|
|» PhoneNumberCountryCode|LA|
|» PhoneNumberCountryCode|LV|
|» PhoneNumberCountryCode|LB|
|» PhoneNumberCountryCode|LS|
|» PhoneNumberCountryCode|LR|
|» PhoneNumberCountryCode|LY|
|» PhoneNumberCountryCode|LI|
|» PhoneNumberCountryCode|LT|
|» PhoneNumberCountryCode|LU|
|» PhoneNumberCountryCode|MO|
|» PhoneNumberCountryCode|MK|
|» PhoneNumberCountryCode|MG|
|» PhoneNumberCountryCode|MW|
|» PhoneNumberCountryCode|MY|
|» PhoneNumberCountryCode|MV|
|» PhoneNumberCountryCode|ML|
|» PhoneNumberCountryCode|MT|
|» PhoneNumberCountryCode|MH|
|» PhoneNumberCountryCode|MR|
|» PhoneNumberCountryCode|MU|
|» PhoneNumberCountryCode|YT|
|» PhoneNumberCountryCode|MX|
|» PhoneNumberCountryCode|FM|
|» PhoneNumberCountryCode|MD|
|» PhoneNumberCountryCode|MC|
|» PhoneNumberCountryCode|MN|
|» PhoneNumberCountryCode|ME|
|» PhoneNumberCountryCode|MS|
|» PhoneNumberCountryCode|MA|
|» PhoneNumberCountryCode|MZ|
|» PhoneNumberCountryCode|MM|
|» PhoneNumberCountryCode|NA|
|» PhoneNumberCountryCode|NR|
|» PhoneNumberCountryCode|NP|
|» PhoneNumberCountryCode|NL|
|» PhoneNumberCountryCode|AN|
|» PhoneNumberCountryCode|NC|
|» PhoneNumberCountryCode|NZ|
|» PhoneNumberCountryCode|NI|
|» PhoneNumberCountryCode|NE|
|» PhoneNumberCountryCode|NG|
|» PhoneNumberCountryCode|NU|
|» PhoneNumberCountryCode|KP|
|» PhoneNumberCountryCode|MP|
|» PhoneNumberCountryCode|NO|
|» PhoneNumberCountryCode|OM|
|» PhoneNumberCountryCode|PK|
|» PhoneNumberCountryCode|PW|
|» PhoneNumberCountryCode|PA|
|» PhoneNumberCountryCode|PG|
|» PhoneNumberCountryCode|PY|
|» PhoneNumberCountryCode|PE|
|» PhoneNumberCountryCode|PH|
|» PhoneNumberCountryCode|PN|
|» PhoneNumberCountryCode|PL|
|» PhoneNumberCountryCode|PT|
|» PhoneNumberCountryCode|PR|
|» PhoneNumberCountryCode|QA|
|» PhoneNumberCountryCode|CG|
|» PhoneNumberCountryCode|RE|
|» PhoneNumberCountryCode|RO|
|» PhoneNumberCountryCode|RU|
|» PhoneNumberCountryCode|RW|
|» PhoneNumberCountryCode|BL|
|» PhoneNumberCountryCode|SH|
|» PhoneNumberCountryCode|KN|
|» PhoneNumberCountryCode|LC|
|» PhoneNumberCountryCode|MF|
|» PhoneNumberCountryCode|PM|
|» PhoneNumberCountryCode|VC|
|» PhoneNumberCountryCode|WS|
|» PhoneNumberCountryCode|SM|
|» PhoneNumberCountryCode|ST|
|» PhoneNumberCountryCode|SA|
|» PhoneNumberCountryCode|SN|
|» PhoneNumberCountryCode|RS|
|» PhoneNumberCountryCode|SC|
|» PhoneNumberCountryCode|SL|
|» PhoneNumberCountryCode|SG|
|» PhoneNumberCountryCode|SX|
|» PhoneNumberCountryCode|SK|
|» PhoneNumberCountryCode|SI|
|» PhoneNumberCountryCode|SB|
|» PhoneNumberCountryCode|SO|
|» PhoneNumberCountryCode|ZA|
|» PhoneNumberCountryCode|KR|
|» PhoneNumberCountryCode|ES|
|» PhoneNumberCountryCode|LK|
|» PhoneNumberCountryCode|SD|
|» PhoneNumberCountryCode|SR|
|» PhoneNumberCountryCode|SJ|
|» PhoneNumberCountryCode|SZ|
|» PhoneNumberCountryCode|SE|
|» PhoneNumberCountryCode|CH|
|» PhoneNumberCountryCode|SY|
|» PhoneNumberCountryCode|TW|
|» PhoneNumberCountryCode|TJ|
|» PhoneNumberCountryCode|TZ|
|» PhoneNumberCountryCode|TH|
|» PhoneNumberCountryCode|TG|
|» PhoneNumberCountryCode|TK|
|» PhoneNumberCountryCode|TO|
|» PhoneNumberCountryCode|TT|
|» PhoneNumberCountryCode|TN|
|» PhoneNumberCountryCode|TR|
|» PhoneNumberCountryCode|TM|
|» PhoneNumberCountryCode|TC|
|» PhoneNumberCountryCode|TV|
|» PhoneNumberCountryCode|VI|
|» PhoneNumberCountryCode|UG|
|» PhoneNumberCountryCode|UA|
|» PhoneNumberCountryCode|AE|
|» PhoneNumberCountryCode|GB|
|» PhoneNumberCountryCode|US|
|» PhoneNumberCountryCode|UY|
|» PhoneNumberCountryCode|UZ|
|» PhoneNumberCountryCode|VU|
|» PhoneNumberCountryCode|VA|
|» PhoneNumberCountryCode|VE|
|» PhoneNumberCountryCode|VN|
|» PhoneNumberCountryCode|WF|
|» PhoneNumberCountryCode|EH|
|» PhoneNumberCountryCode|YE|
|» PhoneNumberCountryCode|ZM|
|» PhoneNumberCountryCode|ZW|
|» PhoneNumberType|TOLL_FREE|
|» PhoneNumberType|DID|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "AvailableNumbersList": {}
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

<h3 id="searchavailablephonenumbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchAvailablePhoneNumbersResponse](#schemasearchavailablephonenumbersresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchQueues

<a id="opIdSearchQueues"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/search-queues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "NextToken": "string",
    "MaxResults": 1,
    "SearchFilter": {
      "TagFilter": {
        "OrConditions": {},
        "AndConditions": {},
        "TagCondition": {
          "TagKey": {},
          "TagValue": {}
        }
      }
    },
    "SearchCriteria": {
      "OrConditions": {},
      "AndConditions": {},
      "StringCondition": {
        "FieldName": {},
        "Value": {},
        "ComparisonType": {}
      },
      "QueueTypeCondition": {}
    }
  }'
```

`POST /search-queues`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Searches queues in an Amazon Connect instance, with optional filtering.</p>

> Body parameter

```json
{
  "InstanceId": "string",
  "NextToken": "string",
  "MaxResults": 1,
  "SearchFilter": {
    "TagFilter": {
      "OrConditions": {},
      "AndConditions": {},
      "TagCondition": {
        "TagKey": {},
        "TagValue": {}
      }
    }
  },
  "SearchCriteria": {
    "OrConditions": {},
    "AndConditions": {},
    "StringCondition": {
      "FieldName": {},
      "Value": {},
      "ComparisonType": {}
    },
    "QueueTypeCondition": {}
  }
}
```

<h3 id="searchqueues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» NextToken|body|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|» MaxResults|body|integer|false|The maximum number of results to return per page.|
|» SearchFilter|body|object|false|Filters to be applied to search results.|
|» » TagFilter|body|[ControlPlaneTagFilter](#schemacontrolplanetagfilter)|false|<p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul>|
|» SearchCriteria|body|object|false|<p>The search criteria to be used to return queues.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note>|
|» » OrConditions|body|object|false|none|
|» » AndConditions|body|object|false|none|
|» » StringCondition|body|[StringCondition](#schemastringcondition)|false|<p>A leaf node condition which can be used to specify a string condition. </p> <note> <p>The currently supported value for <code>FieldName</code>: <code>name</code> </p> </note>|
|» » QueueTypeCondition|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Queues": {},
  "NextToken": {},
  "ApproximateTotalCount": {}
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

<h3 id="searchqueues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchQueuesResponse](#schemasearchqueuesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchRoutingProfiles

<a id="opIdSearchRoutingProfiles"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/search-routing-profiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "NextToken": "string",
    "MaxResults": 1,
    "SearchFilter": {
      "TagFilter": {
        "OrConditions": {},
        "AndConditions": {},
        "TagCondition": {
          "TagKey": {},
          "TagValue": {}
        }
      }
    },
    "SearchCriteria": {
      "OrConditions": {},
      "AndConditions": {},
      "StringCondition": {
        "FieldName": {},
        "Value": {},
        "ComparisonType": {}
      }
    }
  }'
```

`POST /search-routing-profiles`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Searches routing profiles in an Amazon Connect instance, with optional filtering.</p>

> Body parameter

```json
{
  "InstanceId": "string",
  "NextToken": "string",
  "MaxResults": 1,
  "SearchFilter": {
    "TagFilter": {
      "OrConditions": {},
      "AndConditions": {},
      "TagCondition": {
        "TagKey": {},
        "TagValue": {}
      }
    }
  },
  "SearchCriteria": {
    "OrConditions": {},
    "AndConditions": {},
    "StringCondition": {
      "FieldName": {},
      "Value": {},
      "ComparisonType": {}
    }
  }
}
```

<h3 id="searchroutingprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» NextToken|body|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|» MaxResults|body|integer|false|The maximum number of results to return per page.|
|» SearchFilter|body|object|false|Filters to be applied to search results.|
|» » TagFilter|body|[ControlPlaneTagFilter](#schemacontrolplanetagfilter)|false|<p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul>|
|» SearchCriteria|body|object|false|<p>The search criteria to be used to return routing profiles.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note>|
|» » OrConditions|body|object|false|none|
|» » AndConditions|body|object|false|none|
|» » StringCondition|body|[StringCondition](#schemastringcondition)|false|<p>A leaf node condition which can be used to specify a string condition. </p> <note> <p>The currently supported value for <code>FieldName</code>: <code>name</code> </p> </note>|

> Example responses

> 200 Response

```json
{
  "RoutingProfiles": {},
  "NextToken": {},
  "ApproximateTotalCount": {}
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

<h3 id="searchroutingprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchRoutingProfilesResponse](#schemasearchroutingprofilesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchSecurityProfiles

<a id="opIdSearchSecurityProfiles"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/search-security-profiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "NextToken": "string",
    "MaxResults": 1,
    "SearchCriteria": {
      "OrConditions": {},
      "AndConditions": {},
      "StringCondition": {
        "FieldName": {},
        "Value": {},
        "ComparisonType": {}
      }
    },
    "SearchFilter": {
      "TagFilter": {
        "OrConditions": {},
        "AndConditions": {},
        "TagCondition": {
          "TagKey": {},
          "TagValue": {}
        }
      }
    }
  }'
```

`POST /search-security-profiles`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Searches security profiles in an Amazon Connect instance, with optional filtering.</p>

> Body parameter

```json
{
  "InstanceId": "string",
  "NextToken": "string",
  "MaxResults": 1,
  "SearchCriteria": {
    "OrConditions": {},
    "AndConditions": {},
    "StringCondition": {
      "FieldName": {},
      "Value": {},
      "ComparisonType": {}
    }
  },
  "SearchFilter": {
    "TagFilter": {
      "OrConditions": {},
      "AndConditions": {},
      "TagCondition": {
        "TagKey": {},
        "TagValue": {}
      }
    }
  }
}
```

<h3 id="searchsecurityprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» NextToken|body|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|» MaxResults|body|integer|false|The maximum number of results to return per page.|
|» SearchCriteria|body|object|false|<p>The search criteria to be used to return security profiles.</p> <note> <p>The <code>name</code> field support "contains" queries with a minimum of 2 characters and maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.</p> </note>|
|» » OrConditions|body|object|false|none|
|» » AndConditions|body|object|false|none|
|» » StringCondition|body|[StringCondition](#schemastringcondition)|false|<p>A leaf node condition which can be used to specify a string condition. </p> <note> <p>The currently supported value for <code>FieldName</code>: <code>name</code> </p> </note>|
|» SearchFilter|body|object|false|Filters to be applied to search results.|
|» » TagFilter|body|[ControlPlaneTagFilter](#schemacontrolplanetagfilter)|false|<p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul>|

> Example responses

> 200 Response

```json
{
  "SecurityProfiles": {},
  "NextToken": {},
  "ApproximateTotalCount": {}
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

<h3 id="searchsecurityprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchSecurityProfilesResponse](#schemasearchsecurityprofilesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchUsers

<a id="opIdSearchUsers"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/search-users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "NextToken": "string",
    "MaxResults": 1,
    "SearchFilter": {
      "TagFilter": {
        "OrConditions": {},
        "AndConditions": {},
        "TagCondition": {
          "TagKey": {},
          "TagValue": {}
        }
      }
    },
    "SearchCriteria": {
      "OrConditions": {},
      "AndConditions": {},
      "StringCondition": {
        "FieldName": {},
        "Value": {},
        "ComparisonType": {}
      },
      "HierarchyGroupCondition": {
        "Value": {},
        "HierarchyGroupMatchType": {}
      }
    }
  }'
```

`POST /search-users`

<p>Searches users in an Amazon Connect instance, with optional filtering.</p> <note> <p> <code>AfterContactWorkTimeLimit</code> is returned in milliseconds. </p> </note>

> Body parameter

```json
{
  "InstanceId": "string",
  "NextToken": "string",
  "MaxResults": 1,
  "SearchFilter": {
    "TagFilter": {
      "OrConditions": {},
      "AndConditions": {},
      "TagCondition": {
        "TagKey": {},
        "TagValue": {}
      }
    }
  },
  "SearchCriteria": {
    "OrConditions": {},
    "AndConditions": {},
    "StringCondition": {
      "FieldName": {},
      "Value": {},
      "ComparisonType": {}
    },
    "HierarchyGroupCondition": {
      "Value": {},
      "HierarchyGroupMatchType": {}
    }
  }
}
```

<h3 id="searchusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InstanceId|body|string|false|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» NextToken|body|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|» MaxResults|body|integer|false|The maximum number of results to return per page.|
|» SearchFilter|body|object|false|Filters to be applied to search results.|
|» » TagFilter|body|[ControlPlaneTagFilter](#schemacontrolplanetagfilter)|false|<p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul>|
|» SearchCriteria|body|object|false|<p>The search criteria to be used to return users.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note>|
|» » OrConditions|body|object|false|none|
|» » AndConditions|body|object|false|none|
|» » StringCondition|body|object|false|none|
|» » » FieldName|body|object|false|none|
|» » » Value|body|object|false|none|
|» » » ComparisonType|body|object|false|none|
|» » HierarchyGroupCondition|body|object|false|none|
|» » » Value|body|object|false|none|
|» » » HierarchyGroupMatchType|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Users": {},
  "NextToken": {},
  "ApproximateTotalCount": {}
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

<h3 id="searchusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchUsersResponse](#schemasearchusersresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchVocabularies

<a id="opIdSearchVocabularies"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/vocabulary-summary/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaxResults": 1,
    "NextToken": "string",
    "State": "CREATION_IN_PROGRESS",
    "NameStartsWith": "string",
    "LanguageCode": "ar-AE"
  }'
```

`POST /vocabulary-summary/{InstanceId}`

Searches for vocabularies within a specific Amazon Connect instance using <code>State</code>, <code>NameStartsWith</code>, and <code>LanguageCode</code>.

> Body parameter

```json
{
  "MaxResults": 1,
  "NextToken": "string",
  "State": "CREATION_IN_PROGRESS",
  "NameStartsWith": "string",
  "LanguageCode": "ar-AE"
}
```

<h3 id="searchvocabularies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MaxResults|body|integer|false|The maximum number of results to return per page.|
|» NextToken|body|string|false|The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.|
|» State|body|string|false|The current state of the custom vocabulary.|
|» NameStartsWith|body|string|false|The starting pattern of the name of the vocabulary.|
|» LanguageCode|body|string|false|The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a> |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» State|CREATION_IN_PROGRESS|
|» State|ACTIVE|
|» State|CREATION_FAILED|
|» State|DELETE_IN_PROGRESS|
|» LanguageCode|ar-AE|
|» LanguageCode|de-CH|
|» LanguageCode|de-DE|
|» LanguageCode|en-AB|
|» LanguageCode|en-AU|
|» LanguageCode|en-GB|
|» LanguageCode|en-IE|
|» LanguageCode|en-IN|
|» LanguageCode|en-US|
|» LanguageCode|en-WL|
|» LanguageCode|es-ES|
|» LanguageCode|es-US|
|» LanguageCode|fr-CA|
|» LanguageCode|fr-FR|
|» LanguageCode|hi-IN|
|» LanguageCode|it-IT|
|» LanguageCode|ja-JP|
|» LanguageCode|ko-KR|
|» LanguageCode|pt-BR|
|» LanguageCode|pt-PT|
|» LanguageCode|zh-CN|
|» LanguageCode|en-NZ|
|» LanguageCode|en-ZA|

> Example responses

> 200 Response

```json
{
  "VocabularySummaryList": {},
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

<h3 id="searchvocabularies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchVocabulariesResponse](#schemasearchvocabulariesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartChatContact

<a id="opIdStartChatContact"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/chat \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "ContactFlowId": "string",
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "ParticipantDetails": {
      "DisplayName": {}
    },
    "InitialMessage": {
      "ContentType": {},
      "Content": {}
    },
    "ClientToken": "string",
    "ChatDurationInMinutes": 60,
    "SupportedMessagingContentTypes": [
      "string"
    ],
    "PersistentChat": {
      "RehydrationType": {},
      "SourceContactId": {}
    },
    "RelatedContactId": "string"
  }'
```

`PUT /contact/chat`

<p>Initiates a flow to start a new chat for the customer. Response of this API provides a token required to obtain credentials from the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> API in the Amazon Connect Participant Service.</p> <p>When a new chat contact is successfully created, clients must subscribe to the participant’s connection for the created chat within 5 minutes. This is achieved by invoking <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> with WEBSOCKET and CONNECTION_CREDENTIALS. </p> <p>A 429 error occurs in the following situations:</p> <ul> <li> <p>API rate limit is exceeded. API TPS throttling returns a <code>TooManyRequests</code> exception.</p> </li> <li> <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">quota for concurrent active chats</a> is exceeded. Active chat throttling returns a <code>LimitExceededException</code>.</p> </li> </ul> <p>If you use the <code>ChatDurationInMinutes</code> parameter and receive a 400 error, your account may not support the ability to configure custom chat durations. For more information, contact Amazon Web Services Support. </p> <p>For more information about chat, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat.html">Chat</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

> Body parameter

```json
{
  "InstanceId": "string",
  "ContactFlowId": "string",
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "ParticipantDetails": {
    "DisplayName": {}
  },
  "InitialMessage": {
    "ContentType": {},
    "Content": {}
  },
  "ClientToken": "string",
  "ChatDurationInMinutes": 60,
  "SupportedMessagingContentTypes": [
    "string"
  ],
  "PersistentChat": {
    "RehydrationType": {},
    "SourceContactId": {}
  },
  "RelatedContactId": "string"
}
```

<h3 id="startchatcontact-parameters">Parameters</h3>

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
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» ContactFlowId|body|string|true|<p>The identifier of the flow for initiating the chat. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose <b>Show additional flow information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p> <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b> </p>|
|» Attributes|body|object|false|<p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows just like any other contact attributes. </p> <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p>|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|none|
|» ParticipantDetails|body|object|true|The customer's details.|
|» » DisplayName|body|object|false|none|
|» InitialMessage|body|object|false|A chat message.|
|» » ContentType|body|object|false|none|
|» » Content|body|object|false|none|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|
|» ChatDurationInMinutes|body|integer|false|The total duration of the newly started chat session. If not specified, the chat session duration defaults to 25 hour. The minimum configurable time is 60 minutes. The maximum configurable time is 10,080 minutes (7 days).|
|» SupportedMessagingContentTypes|body|[[SupportedMessagingContentType](#schemasupportedmessagingcontenttype)]|false|<p>The supported chat message content types. Supported types are <code>text/plain</code>, <code>text/markdown</code>, <code>application/json</code>, <code>application/vnd.amazonaws.connect.message.interactive</code>, and <code>application/vnd.amazonaws.connect.message.interactive.response</code>. </p> <p>Content types must always contain <code>text/plain</code>. You can then put any other supported type in the list. For example, all the following lists are valid because they contain <code>text/plain</code>: <code>[text/plain, text/markdown, application/json]</code>, <code>[text/markdown, text/plain]</code>, <code>[text/plain, application/json, application/vnd.amazonaws.connect.message.interactive.response]</code>. </p> <note> <p>The type <code>application/vnd.amazonaws.connect.message.interactive</code> is required to use the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/show-view-block.html">Show view</a> flow block.</p> </note>|
|» PersistentChat|body|object|false|Enable persistent chats. For more information about enabling persistent chat, and for example use cases and how to configure for them, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>.|
|» » RehydrationType|body|object|false|none|
|» » SourceContactId|body|object|false|none|
|» RelatedContactId|body|string|false|<p>The unique identifier for an Amazon Connect contact. This identifier is related to the chat starting.</p> <note> <p>You cannot provide data for both RelatedContactId and PersistentChat. </p> </note>|

> Example responses

> 200 Response

```json
{
  "ContactId": {},
  "ParticipantId": {},
  "ParticipantToken": {},
  "ContinuedFromContactId": {}
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

<h3 id="startchatcontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartChatContactResponse](#schemastartchatcontactresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartContactRecording

<a id="opIdStartContactRecording"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/start-recording \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "ContactId": "string",
    "InitialContactId": "string",
    "VoiceRecordingConfiguration": {
      "VoiceRecordingTrack": {}
    }
  }'
```

`POST /contact/start-recording`

<p>Starts recording the contact: </p> <ul> <li> <p>If the API is called <i>before</i> the agent joins the call, recording starts when the agent joins the call.</p> </li> <li> <p>If the API is called <i>after</i> the agent joins the call, recording starts at the time of the API call.</p> </li> </ul> <p>StartContactRecording is a one-time action. For example, if you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend and resume it, such as when collecting sensitive information (for example, a credit card number), use SuspendContactRecording and ResumeContactRecording.</p> <p>You can use this API to override the recording behavior configured in the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-recording-behavior.html">Set recording behavior</a> block.</p> <p>Only voice recordings are supported at this time.</p>

> Body parameter

```json
{
  "InstanceId": "string",
  "ContactId": "string",
  "InitialContactId": "string",
  "VoiceRecordingConfiguration": {
    "VoiceRecordingTrack": {}
  }
}
```

<h3 id="startcontactrecording-parameters">Parameters</h3>

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
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» ContactId|body|string|true|The identifier of the contact.|
|» InitialContactId|body|string|true|The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.|
|» VoiceRecordingConfiguration|body|object|true|Contains information about the recording configuration settings.|
|» » VoiceRecordingTrack|body|object|false|none|

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

<h3 id="startcontactrecording-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartContactRecordingResponse](#schemastartcontactrecordingresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartContactStreaming

<a id="opIdStartContactStreaming"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/start-streaming \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "ContactId": "string",
    "ChatStreamingConfiguration": {
      "StreamingEndpointArn": {}
    },
    "ClientToken": "string"
  }'
```

`POST /contact/start-streaming`

<p> Initiates real-time message streaming for a new chat contact.</p> <p> For more information about message streaming, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html">Enable real-time chat message streaming</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

> Body parameter

```json
{
  "InstanceId": "string",
  "ContactId": "string",
  "ChatStreamingConfiguration": {
    "StreamingEndpointArn": {}
  },
  "ClientToken": "string"
}
```

<h3 id="startcontactstreaming-parameters">Parameters</h3>

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
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» ContactId|body|string|true|The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.|
|» ChatStreamingConfiguration|body|object|true|The streaming configuration, such as the Amazon SNS streaming endpoint.|
|» » StreamingEndpointArn|body|object|false|none|
|» ClientToken|body|string|true|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|

> Example responses

> 200 Response

```json
{
  "StreamingId": {}
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

<h3 id="startcontactstreaming-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartContactStreamingResponse](#schemastartcontactstreamingresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartOutboundVoiceContact

<a id="opIdStartOutboundVoiceContact"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/outbound-voice \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DestinationPhoneNumber": "string",
    "ContactFlowId": "string",
    "InstanceId": "string",
    "ClientToken": "string",
    "SourcePhoneNumber": "string",
    "QueueId": "string",
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "AnswerMachineDetectionConfig": {
      "EnableAnswerMachineDetection": {},
      "AwaitAnswerMachinePrompt": {}
    },
    "CampaignId": "string",
    "TrafficType": "GENERAL"
  }'
```

`PUT /contact/outbound-voice`

<p>Places an outbound call to a contact, and then initiates the flow. It performs the actions in the flow that's specified (in <code>ContactFlowId</code>).</p> <p>Agents do not initiate the outbound API, which means that they do not dial the contact. If the flow places an outbound call to a contact, and then puts the contact in queue, the call is then routed to the agent, like any other inbound case.</p> <p>There is a 60-second dialing timeout for this operation. If the call is not connected after 60 seconds, it fails.</p> <note> <p>UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK mobile numbers, you must submit a service quota increase request. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect Administrator Guide</i>. </p> </note> <note> <p>Campaign calls are not allowed by default. Before you can make a call with <code>TrafficType</code> = <code>CAMPAIGN</code>, you must submit a service quota increase request to the quota <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#outbound-communications-quotas">Amazon Connect campaigns</a>. </p> </note>

> Body parameter

```json
{
  "DestinationPhoneNumber": "string",
  "ContactFlowId": "string",
  "InstanceId": "string",
  "ClientToken": "string",
  "SourcePhoneNumber": "string",
  "QueueId": "string",
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "AnswerMachineDetectionConfig": {
    "EnableAnswerMachineDetection": {},
    "AwaitAnswerMachinePrompt": {}
  },
  "CampaignId": "string",
  "TrafficType": "GENERAL"
}
```

<h3 id="startoutboundvoicecontact-parameters">Parameters</h3>

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
|» DestinationPhoneNumber|body|string|true|The phone number of the customer, in E.164 format.|
|» ContactFlowId|body|string|true|<p>The identifier of the flow for the outbound call. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose <b>Show additional flow information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p> <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b> </p>|
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>. The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned. |
|» SourcePhoneNumber|body|string|false|The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.|
|» QueueId|body|string|false|The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the flow is used. If you do not specify a queue, you must specify a source phone number.|
|» Attributes|body|object|false|<p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p> <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p>|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|none|
|» AnswerMachineDetectionConfig|body|object|false|Configuration of the answering machine detection.|
|» » EnableAnswerMachineDetection|body|object|false|none|
|» » AwaitAnswerMachinePrompt|body|object|false|none|
|» CampaignId|body|string|false|The campaign identifier of the outbound communication.|
|» TrafficType|body|string|false|Denotes the class of traffic. Calls with different traffic types are handled differently by Amazon Connect. The default value is <code>GENERAL</code>. Use <code>CAMPAIGN</code> if <code>EnableAnswerMachineDetection</code> is set to <code>true</code>. For all other cases, use <code>GENERAL</code>. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» TrafficType|GENERAL|
|» TrafficType|CAMPAIGN|

> Example responses

> 200 Response

```json
{
  "ContactId": {}
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

<h3 id="startoutboundvoicecontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartOutboundVoiceContactResponse](#schemastartoutboundvoicecontactresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|DestinationNotAllowedException|[DestinationNotAllowedException](#schemadestinationnotallowedexception)|
|486|486|OutboundContactNotPermittedException|[OutboundContactNotPermittedException](#schemaoutboundcontactnotpermittedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartTaskContact

<a id="opIdStartTaskContact"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/task \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "PreviousContactId": "string",
    "ContactFlowId": "string",
    "Attributes": {
      "property1": "string",
      "property2": "string"
    },
    "Name": "string",
    "References": {
      "property1": {
        "Value": {},
        "Type": {}
      },
      "property2": {
        "Value": {},
        "Type": {}
      }
    },
    "Description": "string",
    "ClientToken": "string",
    "ScheduledTime": "1970-01-01T00:00:00Z",
    "TaskTemplateId": "string",
    "QuickConnectId": "string",
    "RelatedContactId": "string"
  }'
```

`PUT /contact/task`

Initiates a flow to start a new task.

> Body parameter

```json
{
  "InstanceId": "string",
  "PreviousContactId": "string",
  "ContactFlowId": "string",
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "Name": "string",
  "References": {
    "property1": {
      "Value": {},
      "Type": {}
    },
    "property2": {
      "Value": {},
      "Type": {}
    }
  },
  "Description": "string",
  "ClientToken": "string",
  "ScheduledTime": "1970-01-01T00:00:00Z",
  "TaskTemplateId": "string",
  "QuickConnectId": "string",
  "RelatedContactId": "string"
}
```

<h3 id="starttaskcontact-parameters">Parameters</h3>

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
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» PreviousContactId|body|string|false|The identifier of the previous chat, voice, or task contact. |
|» ContactFlowId|body|string|false|<p>The identifier of the flow for initiating the tasks. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose <b>Show additional flow information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p> <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b> </p>|
|» Attributes|body|object|false|<p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p> <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p>|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|none|
|» Name|body|string|true|The name of a task that is shown to an agent in the Contact Control Panel (CCP).|
|» References|body|object|false|A formatted URL that is shown to an agent in the Contact Control Panel (CCP).|
|» » **additionalProperties**|body|[Reference](#schemareference)|false|Well-formed data on a contact, used by agents to complete a contact request. You can have up to 4,096 UTF-8 bytes across all references for a contact.|
|» Description|body|string|false|A description of the task that is shown to an agent in the Contact Control Panel (CCP).|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|
|» ScheduledTime|body|string(date-time)|false|The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. |
|» TaskTemplateId|body|string|false|A unique identifier for the task template.|
|» QuickConnectId|body|string|false|The identifier for the quick connect.|
|» RelatedContactId|body|string|false|The contactId that is <a href="https://docs.aws.amazon.com/connect/latest/adminguide/tasks.html#linked-tasks">related</a> to this contact.|

> Example responses

> 200 Response

```json
{
  "ContactId": {}
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

<h3 id="starttaskcontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartTaskContactResponse](#schemastarttaskcontactresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopContact

<a id="opIdStopContact"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ContactId": "string",
    "InstanceId": "string"
  }'
```

`POST /contact/stop`

<p>Ends the specified contact. This call does not work for the following initiation methods:</p> <ul> <li> <p>DISCONNECT</p> </li> <li> <p>TRANSFER</p> </li> <li> <p>QUEUE_TRANSFER</p> </li> </ul>

> Body parameter

```json
{
  "ContactId": "string",
  "InstanceId": "string"
}
```

<h3 id="stopcontact-parameters">Parameters</h3>

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
|» ContactId|body|string|true|The ID of the contact.|
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|

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

<h3 id="stopcontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopContactResponse](#schemastopcontactresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ContactNotFoundException|[ContactNotFoundException](#schemacontactnotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopContactRecording

<a id="opIdStopContactRecording"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/stop-recording \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "ContactId": "string",
    "InitialContactId": "string"
  }'
```

`POST /contact/stop-recording`

<p>Stops recording a call when a contact is being recorded. StopContactRecording is a one-time action. If you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend it for sensitive information (for example, to collect a credit card number), and then restart it, use SuspendContactRecording and ResumeContactRecording.</p> <p>Only voice recordings are supported at this time.</p>

> Body parameter

```json
{
  "InstanceId": "string",
  "ContactId": "string",
  "InitialContactId": "string"
}
```

<h3 id="stopcontactrecording-parameters">Parameters</h3>

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
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» ContactId|body|string|true|The identifier of the contact.|
|» InitialContactId|body|string|true|The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.|

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

<h3 id="stopcontactrecording-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopContactRecordingResponse](#schemastopcontactrecordingresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopContactStreaming

<a id="opIdStopContactStreaming"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/stop-streaming \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "ContactId": "string",
    "StreamingId": "string"
  }'
```

`POST /contact/stop-streaming`

 Ends message streaming on a specified contact. To restart message streaming on that contact, call the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html">StartContactStreaming</a> API. 

> Body parameter

```json
{
  "InstanceId": "string",
  "ContactId": "string",
  "StreamingId": "string"
}
```

<h3 id="stopcontactstreaming-parameters">Parameters</h3>

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
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» ContactId|body|string|true|The identifier of the contact. This is the identifier of the contact that is associated with the first interaction with the contact center.|
|» StreamingId|body|string|true|The identifier of the streaming configuration enabled. |

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

<h3 id="stopcontactstreaming-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopContactStreamingResponse](#schemastopcontactstreamingresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SuspendContactRecording

<a id="opIdSuspendContactRecording"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/suspend-recording \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "ContactId": "string",
    "InitialContactId": "string"
  }'
```

`POST /contact/suspend-recording`

<p>When a contact is being recorded, this API suspends recording the call. For example, you might suspend the call recording while collecting sensitive information, such as a credit card number. Then use ResumeContactRecording to restart recording. </p> <p>The period of time that the recording is suspended is filled with silence in the final recording. </p> <p>Only voice recordings are supported at this time.</p>

> Body parameter

```json
{
  "InstanceId": "string",
  "ContactId": "string",
  "InitialContactId": "string"
}
```

<h3 id="suspendcontactrecording-parameters">Parameters</h3>

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
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» ContactId|body|string|true|The identifier of the contact.|
|» InitialContactId|body|string|true|The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.|

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

<h3 id="suspendcontactrecording-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SuspendContactRecordingResponse](#schemasuspendcontactrecordingresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TransferContact

<a id="opIdTransferContact"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/transfer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "ContactId": "string",
    "QueueId": "string",
    "UserId": "string",
    "ContactFlowId": "string",
    "ClientToken": "string"
  }'
```

`POST /contact/transfer`

<p>Transfers contacts from one agent or queue to another agent or queue at any point after a contact is created. You can transfer a contact to another queue by providing the flow which orchestrates the contact to the destination queue. This gives you more control over contact handling and helps you adhere to the service level agreement (SLA) guaranteed to your customers.</p> <p>Note the following requirements:</p> <ul> <li> <p>Transfer is supported for only <code>TASK</code> contacts.</p> </li> <li> <p>Do not use both <code>QueueId</code> and <code>UserId</code> in the same call.</p> </li> <li> <p>The following flow types are supported: Inbound flow, Transfer to agent flow, and Transfer to queue flow.</p> </li> <li> <p>The <code>TransferContact</code> API can be called only on active contacts.</p> </li> <li> <p>A contact cannot be transferred more than 11 times.</p> </li> </ul>

> Body parameter

```json
{
  "InstanceId": "string",
  "ContactId": "string",
  "QueueId": "string",
  "UserId": "string",
  "ContactFlowId": "string",
  "ClientToken": "string"
}
```

<h3 id="transfercontact-parameters">Parameters</h3>

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
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» ContactId|body|string|true|The identifier of the contact in this instance of Amazon Connect. |
|» QueueId|body|string|false|The identifier for the queue.|
|» UserId|body|string|false|The identifier for the user.|
|» ContactFlowId|body|string|true|The identifier of the flow.|
|» ClientToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.|

> Example responses

> 200 Response

```json
{
  "ContactId": {},
  "ContactArn": {}
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

<h3 id="transfercontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TransferContactResponse](#schematransfercontactresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|IdempotencyException|[IdempotencyException](#schemaidempotencyexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://connect.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes the specified tags from the specified resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The tag keys.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContactAttributes

<a id="opIdUpdateContactAttributes"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/attributes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InitialContactId": "string",
    "InstanceId": "string",
    "Attributes": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /contact/attributes`

<p>Creates or updates user-defined contact attributes associated with the specified contact.</p> <p>You can create or update user-defined attributes for both ongoing and completed contacts. For example, while the call is active, you can update the customer's name or the reason the customer called. You can add notes about steps that the agent took during the call that display to the next agent that takes the call. You can also update attributes for a contact using data from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis, such as legal review or to identify abusive callers.</p> <p>Contact attributes are available in Amazon Connect for 24 months, and are then deleted. For information about contact record retention and the maximum size of the contact record attributes section, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>. </p>

> Body parameter

```json
{
  "InitialContactId": "string",
  "InstanceId": "string",
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updatecontactattributes-parameters">Parameters</h3>

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
|» InitialContactId|body|string|true|The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.|
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» Attributes|body|object|true|<p>The Amazon Connect attributes. These attributes can be accessed in flows just like any other contact attributes.</p> <p>You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p>|
|» » **additionalProperties**|body|[AttributeValue](#schemaattributevalue)|false|none|

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

<h3 id="updatecontactattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContactAttributesResponse](#schemaupdatecontactattributesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContactFlowContent

<a id="opIdUpdateContactFlowContent"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact-flows/string/string/content \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Content": "string"
  }'
```

`POST /contact-flows/{InstanceId}/{ContactFlowId}/content`

<p>Updates the specified flow.</p> <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect Flow language</a>.</p>

> Body parameter

```json
{
  "Content": "string"
}
```

<h3 id="updatecontactflowcontent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance.|
|ContactFlowId|path|string|true|The identifier of the flow.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Content|body|string|true|The JSON string that represents flow's content. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example contact flow in Amazon Connect Flow language</a>. |

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

<h3 id="updatecontactflowcontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContactFlowContentResponse](#schemaupdatecontactflowcontentresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidContactFlowException|[InvalidContactFlowException](#schemainvalidcontactflowexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContactFlowMetadata

<a id="opIdUpdateContactFlowMetadata"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact-flows/string/string/metadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "ContactFlowState": "ACTIVE"
  }'
```

`POST /contact-flows/{InstanceId}/{ContactFlowId}/metadata`

Updates metadata about specified flow.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "ContactFlowState": "ACTIVE"
}
```

<h3 id="updatecontactflowmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|ContactFlowId|path|string|true|The identifier of the flow.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the flow.|
|» Description|body|string|false|The description of the flow.|
|» ContactFlowState|body|string|false|The state of flow.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ContactFlowState|ACTIVE|
|» ContactFlowState|ARCHIVED|

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

<h3 id="updatecontactflowmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContactFlowMetadataResponse](#schemaupdatecontactflowmetadataresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContactFlowModuleContent

<a id="opIdUpdateContactFlowModuleContent"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact-flow-modules/string/string/content \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Content": "string"
  }'
```

`POST /contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/content`

Updates specified flow module for the specified Amazon Connect instance. 

> Body parameter

```json
{
  "Content": "string"
}
```

<h3 id="updatecontactflowmodulecontent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|ContactFlowModuleId|path|string|true|The identifier of the flow module.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Content|body|string|true|The content of the flow module.|

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

<h3 id="updatecontactflowmodulecontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContactFlowModuleContentResponse](#schemaupdatecontactflowmodulecontentresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidContactFlowModuleException|[InvalidContactFlowModuleException](#schemainvalidcontactflowmoduleexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContactFlowModuleMetadata

<a id="opIdUpdateContactFlowModuleMetadata"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact-flow-modules/string/string/metadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "State": "ACTIVE"
  }'
```

`POST /contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/metadata`

Updates metadata about specified flow module.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "State": "ACTIVE"
}
```

<h3 id="updatecontactflowmodulemetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|ContactFlowModuleId|path|string|true|The identifier of the flow module.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the flow module.|
|» Description|body|string|false|The description of the flow module.|
|» State|body|string|false|The state of flow module.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» State|ACTIVE|
|» State|ARCHIVED|

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

<h3 id="updatecontactflowmodulemetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContactFlowModuleMetadataResponse](#schemaupdatecontactflowmodulemetadataresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContactFlowName

<a id="opIdUpdateContactFlowName"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact-flows/string/string/name \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string"
  }'
```

`POST /contact-flows/{InstanceId}/{ContactFlowId}/name`

<p>The name of the flow.</p> <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect Flow language</a>.</p>

> Body parameter

```json
{
  "Name": "string",
  "Description": "string"
}
```

<h3 id="updatecontactflowname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance.|
|ContactFlowId|path|string|true|The identifier of the flow.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the flow.|
|» Description|body|string|false|The description of the flow.|

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

<h3 id="updatecontactflowname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContactFlowNameResponse](#schemaupdatecontactflownameresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContactSchedule

<a id="opIdUpdateContactSchedule"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/schedule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "InstanceId": "string",
    "ContactId": "string",
    "ScheduledTime": "1970-01-01T00:00:00Z"
  }'
```

`POST /contact/schedule`

Updates the scheduled time of a task contact that is already scheduled.

> Body parameter

```json
{
  "InstanceId": "string",
  "ContactId": "string",
  "ScheduledTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="updatecontactschedule-parameters">Parameters</h3>

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
|» InstanceId|body|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|» ContactId|body|string|true|The identifier of the contact.|
|» ScheduledTime|body|string(date-time)|true|The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. |

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

<h3 id="updatecontactschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContactScheduleResponse](#schemaupdatecontactscheduleresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateParticipantRoleConfig

<a id="opIdUpdateParticipantRoleConfig"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/contact/participant-role-config/string/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ChannelConfiguration": {
      "Chat": {
        "ParticipantTimerConfigList": {}
      }
    }
  }'
```

`PUT /contact/participant-role-config/{InstanceId}/{ContactId}`

<p>Updates timeouts for when human chat participants are to be considered idle, and when agents are automatically disconnected from a chat due to idleness. You can set four timers:</p> <ul> <li> <p>Customer idle timeout</p> </li> <li> <p>Customer auto-disconnect timeout</p> </li> <li> <p>Agent idle timeout</p> </li> <li> <p>Agent auto-disconnect timeout</p> </li> </ul> <p>For more information about how chat timeouts work, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p>

> Body parameter

```json
{
  "ChannelConfiguration": {
    "Chat": {
      "ParticipantTimerConfigList": {}
    }
  }
}
```

<h3 id="updateparticipantroleconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|ContactId|path|string|true|The identifier of the contact in this instance of Amazon Connect. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ChannelConfiguration|body|object|true|Configuration information for the chat participant role.|
|» » Chat|body|object|false|none|
|» » » ParticipantTimerConfigList|body|object|true|none|

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

<h3 id="updateparticipantroleconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateParticipantRoleConfigResponse](#schemaupdateparticipantroleconfigresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateQueueHoursOfOperation

<a id="opIdUpdateQueueHoursOfOperation"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/queues/string/string/hours-of-operation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "HoursOfOperationId": "string"
  }'
```

`POST /queues/{InstanceId}/{QueueId}/hours-of-operation`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates the hours of operation for the specified queue.</p>

> Body parameter

```json
{
  "HoursOfOperationId": "string"
}
```

<h3 id="updatequeuehoursofoperation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|QueueId|path|string|true|The identifier for the queue.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» HoursOfOperationId|body|string|true|The identifier for the hours of operation.|

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

<h3 id="updatequeuehoursofoperation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateQueueMaxContacts

<a id="opIdUpdateQueueMaxContacts"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/queues/string/string/max-contacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaxContacts": 0
  }'
```

`POST /queues/{InstanceId}/{QueueId}/max-contacts`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates the maximum number of contacts allowed in a queue before it is considered full.</p>

> Body parameter

```json
{
  "MaxContacts": 0
}
```

<h3 id="updatequeuemaxcontacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|QueueId|path|string|true|The identifier for the queue.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MaxContacts|body|integer|false|The maximum number of contacts that can be in the queue before it is considered full.|

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

<h3 id="updatequeuemaxcontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateQueueName

<a id="opIdUpdateQueueName"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/queues/string/string/name \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string"
  }'
```

`POST /queues/{InstanceId}/{QueueId}/name`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates the name and description of a queue. At least <code>Name</code> or <code>Description</code> must be provided.</p>

> Body parameter

```json
{
  "Name": "string",
  "Description": "string"
}
```

<h3 id="updatequeuename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|QueueId|path|string|true|The identifier for the queue.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the queue.|
|» Description|body|string|false|The description of the queue.|

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

<h3 id="updatequeuename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateQueueOutboundCallerConfig

<a id="opIdUpdateQueueOutboundCallerConfig"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/queues/string/string/outbound-caller-config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "OutboundCallerConfig": {
      "OutboundCallerIdName": {},
      "OutboundCallerIdNumberId": {},
      "OutboundFlowId": {}
    }
  }'
```

`POST /queues/{InstanceId}/{QueueId}/outbound-caller-config`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates the outbound caller ID name, number, and outbound whisper flow for a specified queue.</p> <important> <p>If the number being used in the input is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the <code>OutboundCallerIdNumberId</code> value of the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_OutboundCallerConfig">OutboundCallerConfig</a> request body parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a <code>ResourceNotFoundException</code>.</p> </important>

> Body parameter

```json
{
  "OutboundCallerConfig": {
    "OutboundCallerIdName": {},
    "OutboundCallerIdNumberId": {},
    "OutboundFlowId": {}
  }
}
```

<h3 id="updatequeueoutboundcallerconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|QueueId|path|string|true|The identifier for the queue.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» OutboundCallerConfig|body|object|true|The outbound caller ID name, number, and outbound whisper flow.|
|» » OutboundCallerIdName|body|object|false|none|
|» » OutboundCallerIdNumberId|body|object|false|none|
|» » OutboundFlowId|body|object|false|none|

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

<h3 id="updatequeueoutboundcallerconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateQueueStatus

<a id="opIdUpdateQueueStatus"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/queues/string/string/status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Status": "ENABLED"
  }'
```

`POST /queues/{InstanceId}/{QueueId}/status`

<p>This API is in preview release for Amazon Connect and is subject to change.</p> <p>Updates the status of the queue.</p>

> Body parameter

```json
{
  "Status": "ENABLED"
}
```

<h3 id="updatequeuestatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|QueueId|path|string|true|The identifier for the queue.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Status|body|string|true|The status of the queue.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|ENABLED|
|» Status|DISABLED|

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

<h3 id="updatequeuestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateQuickConnectConfig

<a id="opIdUpdateQuickConnectConfig"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/quick-connects/string/string/config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "QuickConnectConfig": {
      "QuickConnectType": {},
      "UserConfig": {
        "UserId": {},
        "ContactFlowId": {}
      },
      "QueueConfig": {
        "QueueId": {},
        "ContactFlowId": {}
      },
      "PhoneConfig": {
        "PhoneNumber": {}
      }
    }
  }'
```

`POST /quick-connects/{InstanceId}/{QuickConnectId}/config`

Updates the configuration settings for the specified quick connect.

> Body parameter

```json
{
  "QuickConnectConfig": {
    "QuickConnectType": {},
    "UserConfig": {
      "UserId": {},
      "ContactFlowId": {}
    },
    "QueueConfig": {
      "QueueId": {},
      "ContactFlowId": {}
    },
    "PhoneConfig": {
      "PhoneNumber": {}
    }
  }
}
```

<h3 id="updatequickconnectconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|QuickConnectId|path|string|true|The identifier for the quick connect.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» QuickConnectConfig|body|object|true|Contains configuration settings for a quick connect.|
|» » QuickConnectType|body|object|false|none|
|» » UserConfig|body|object|false|none|
|» » » UserId|body|object|true|none|
|» » » ContactFlowId|body|object|true|none|
|» » QueueConfig|body|object|false|none|
|» » » QueueId|body|object|true|none|
|» » » ContactFlowId|body|object|true|none|
|» » PhoneConfig|body|object|false|none|
|» » » PhoneNumber|body|object|true|none|

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

<h3 id="updatequickconnectconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateQuickConnectName

<a id="opIdUpdateQuickConnectName"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/quick-connects/string/string/name \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string"
  }'
```

`POST /quick-connects/{InstanceId}/{QuickConnectId}/name`

Updates the name and description of a quick connect. The request accepts the following data in JSON format. At least <code>Name</code> or <code>Description</code> must be provided.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string"
}
```

<h3 id="updatequickconnectname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|QuickConnectId|path|string|true|The identifier for the quick connect.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the quick connect.|
|» Description|body|string|false|The description of the quick connect.|

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

<h3 id="updatequickconnectname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRoutingProfileConcurrency

<a id="opIdUpdateRoutingProfileConcurrency"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/routing-profiles/string/string/concurrency \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MediaConcurrencies": [
      {
        "Channel": {},
        "Concurrency": {},
        "CrossChannelBehavior": {
          "BehaviorType": {}
        }
      }
    ]
  }'
```

`POST /routing-profiles/{InstanceId}/{RoutingProfileId}/concurrency`

Updates the channels that agents can handle in the Contact Control Panel (CCP) for a routing profile.

> Body parameter

```json
{
  "MediaConcurrencies": [
    {
      "Channel": {},
      "Concurrency": {},
      "CrossChannelBehavior": {
        "BehaviorType": {}
      }
    }
  ]
}
```

<h3 id="updateroutingprofileconcurrency-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|RoutingProfileId|path|string|true|The identifier of the routing profile.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MediaConcurrencies|body|[[MediaConcurrency](#schemamediaconcurrency)]|true|The channels that agents can handle in the Contact Control Panel (CCP).|

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

<h3 id="updateroutingprofileconcurrency-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRoutingProfileDefaultOutboundQueue

<a id="opIdUpdateRoutingProfileDefaultOutboundQueue"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/routing-profiles/string/string/default-outbound-queue \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DefaultOutboundQueueId": "string"
  }'
```

`POST /routing-profiles/{InstanceId}/{RoutingProfileId}/default-outbound-queue`

Updates the default outbound queue of a routing profile.

> Body parameter

```json
{
  "DefaultOutboundQueueId": "string"
}
```

<h3 id="updateroutingprofiledefaultoutboundqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|RoutingProfileId|path|string|true|The identifier of the routing profile.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DefaultOutboundQueueId|body|string|true|The identifier for the default outbound queue.|

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

<h3 id="updateroutingprofiledefaultoutboundqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRoutingProfileName

<a id="opIdUpdateRoutingProfileName"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/routing-profiles/string/string/name \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string"
  }'
```

`POST /routing-profiles/{InstanceId}/{RoutingProfileId}/name`

Updates the name and description of a routing profile. The request accepts the following data in JSON format. At least <code>Name</code> or <code>Description</code> must be provided.

> Body parameter

```json
{
  "Name": "string",
  "Description": "string"
}
```

<h3 id="updateroutingprofilename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|RoutingProfileId|path|string|true|The identifier of the routing profile.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|The name of the routing profile. Must not be more than 127 characters.|
|» Description|body|string|false|The description of the routing profile. Must not be more than 250 characters.|

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

<h3 id="updateroutingprofilename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUserHierarchy

<a id="opIdUpdateUserHierarchy"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/users/string/string/hierarchy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "HierarchyGroupId": "string"
  }'
```

`POST /users/{InstanceId}/{UserId}/hierarchy`

Assigns the specified hierarchy group to the specified user.

> Body parameter

```json
{
  "HierarchyGroupId": "string"
}
```

<h3 id="updateuserhierarchy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserId|path|string|true|The identifier of the user account.|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» HierarchyGroupId|body|string|false|The identifier of the hierarchy group.|

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

<h3 id="updateuserhierarchy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUserHierarchyGroupName

<a id="opIdUpdateUserHierarchyGroupName"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/user-hierarchy-groups/string/string/name \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string"
  }'
```

`POST /user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}/name`

Updates the name of the user hierarchy group. 

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="updateuserhierarchygroupname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|HierarchyGroupId|path|string|true|The identifier of the hierarchy group.|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the hierarchy group. Must not be more than 100 characters.|

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

<h3 id="updateuserhierarchygroupname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUserIdentityInfo

<a id="opIdUpdateUserIdentityInfo"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/users/string/string/identity-info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "IdentityInfo": {
      "FirstName": {},
      "LastName": {},
      "Email": {},
      "SecondaryEmail": {},
      "Mobile": {}
    }
  }'
```

`POST /users/{InstanceId}/{UserId}/identity-info`

<p>Updates the identity information for the specified user.</p> <important> <p>We strongly recommend limiting who has the ability to invoke <code>UpdateUserIdentityInfo</code>. Someone with that ability can change the login credentials of other users by changing their email address. This poses a security risk to your organization. They can change the email address of a user to the attacker's email address, and then reset the password through email. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html">Best Practices for Security Profiles</a> in the <i>Amazon Connect Administrator Guide</i>.</p> </important>

> Body parameter

```json
{
  "IdentityInfo": {
    "FirstName": {},
    "LastName": {},
    "Email": {},
    "SecondaryEmail": {},
    "Mobile": {}
  }
}
```

<h3 id="updateuseridentityinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserId|path|string|true|The identifier of the user account.|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» IdentityInfo|body|object|true|Contains information about the identity of a user.|
|» » FirstName|body|object|false|none|
|» » LastName|body|object|false|none|
|» » Email|body|object|false|none|
|» » SecondaryEmail|body|object|false|none|
|» » Mobile|body|object|false|none|

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

<h3 id="updateuseridentityinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUserPhoneConfig

<a id="opIdUpdateUserPhoneConfig"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/users/string/string/phone-config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PhoneConfig": {
      "PhoneType": {},
      "AutoAccept": {},
      "AfterContactWorkTimeLimit": {},
      "DeskPhoneNumber": {}
    }
  }'
```

`POST /users/{InstanceId}/{UserId}/phone-config`

Updates the phone configuration settings for the specified user.

> Body parameter

```json
{
  "PhoneConfig": {
    "PhoneType": {},
    "AutoAccept": {},
    "AfterContactWorkTimeLimit": {},
    "DeskPhoneNumber": {}
  }
}
```

<h3 id="updateuserphoneconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserId|path|string|true|The identifier of the user account.|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» PhoneConfig|body|object|true|Contains information about the phone configuration settings for a user.|
|» » PhoneType|body|object|false|none|
|» » AutoAccept|body|object|false|none|
|» » AfterContactWorkTimeLimit|body|object|false|none|
|» » DeskPhoneNumber|body|object|false|none|

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

<h3 id="updateuserphoneconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUserRoutingProfile

<a id="opIdUpdateUserRoutingProfile"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/users/string/string/routing-profile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "RoutingProfileId": "string"
  }'
```

`POST /users/{InstanceId}/{UserId}/routing-profile`

Assigns the specified routing profile to the specified user.

> Body parameter

```json
{
  "RoutingProfileId": "string"
}
```

<h3 id="updateuserroutingprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserId|path|string|true|The identifier of the user account.|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» RoutingProfileId|body|string|true|The identifier of the routing profile for the user.|

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

<h3 id="updateuserroutingprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUserSecurityProfiles

<a id="opIdUpdateUserSecurityProfiles"></a>

> Code samples

```bash
curl https://connect.us-east-1.amazonaws.com/users/string/string/security-profiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SecurityProfileIds": [
      "string"
    ]
  }'
```

`POST /users/{InstanceId}/{UserId}/security-profiles`

Assigns the specified security profiles to the specified user.

> Body parameter

```json
{
  "SecurityProfileIds": [
    "string"
  ]
}
```

<h3 id="updateusersecurityprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserId|path|string|true|The identifier of the user account.|
|InstanceId|path|string|true|The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SecurityProfileIds|body|[[SecurityProfileId](#schemasecurityprofileid)]|true|The identifiers of the security profiles for the user.|

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

<h3 id="updateusersecurityprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ResourceConflictException">ResourceConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceconflictexception"></a>
<a id="schema_ResourceConflictException"></a>
<a id="tocSresourceconflictexception"></a>
<a id="tocsresourceconflictexception"></a>

```json
null
```

<h2 id="tocS_InternalServiceException">InternalServiceException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceexception"></a>
<a id="schema_InternalServiceException"></a>
<a id="tocSinternalserviceexception"></a>
<a id="tocsinternalserviceexception"></a>

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

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

```json
null
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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_BotName">BotName</h2>
<!-- backwards compatibility -->
<a id="schemabotname"></a>
<a id="schema_BotName"></a>
<a id="tocSbotname"></a>
<a id="tocsbotname"></a>

```json
"string"
```

<h2 id="tocS_LexRegion">LexRegion</h2>
<!-- backwards compatibility -->
<a id="schemalexregion"></a>
<a id="schema_LexRegion"></a>
<a id="tocSlexregion"></a>
<a id="tocslexregion"></a>

```json
"string"
```

<h2 id="tocS_AliasArn">AliasArn</h2>
<!-- backwards compatibility -->
<a id="schemaaliasarn"></a>
<a id="schema_AliasArn"></a>
<a id="tocSaliasarn"></a>
<a id="tocsaliasarn"></a>

```json
"string"
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

<h2 id="tocS_AssociateDefaultVocabularyResponse">AssociateDefaultVocabularyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedefaultvocabularyresponse"></a>
<a id="schema_AssociateDefaultVocabularyResponse"></a>
<a id="tocSassociatedefaultvocabularyresponse"></a>
<a id="tocsassociatedefaultvocabularyresponse"></a>

```json
{}
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

<h2 id="tocS_AssociateInstanceStorageConfigResponse">AssociateInstanceStorageConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateinstancestorageconfigresponse"></a>
<a id="schema_AssociateInstanceStorageConfigResponse"></a>
<a id="tocSassociateinstancestorageconfigresponse"></a>
<a id="tocsassociateinstancestorageconfigresponse"></a>

```json
{
  "AssociationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|false|none|none|

<h2 id="tocS_AssociationId">AssociationId</h2>
<!-- backwards compatibility -->
<a id="schemaassociationid"></a>
<a id="schema_AssociationId"></a>
<a id="tocSassociationid"></a>
<a id="tocsassociationid"></a>

```json
"string"
```

<h2 id="tocS_StorageType">StorageType</h2>
<!-- backwards compatibility -->
<a id="schemastoragetype"></a>
<a id="schema_StorageType"></a>
<a id="tocSstoragetype"></a>
<a id="tocsstoragetype"></a>

```json
"S3"
```

<h2 id="tocS_S3Config">S3Config</h2>
<!-- backwards compatibility -->
<a id="schemas3config"></a>
<a id="schema_S3Config"></a>
<a id="tocSs3config"></a>
<a id="tocss3config"></a>

```json
{
  "BucketName": {},
  "BucketPrefix": {},
  "EncryptionConfig": {
    "EncryptionType": {},
    "KeyId": {}
  }
}
```

Information about the Amazon Simple Storage Service (Amazon S3) storage type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|true|none|none|
|BucketPrefix|object|true|none|none|
|EncryptionConfig|object|false|none|none|

<h2 id="tocS_KinesisVideoStreamConfig">KinesisVideoStreamConfig</h2>
<!-- backwards compatibility -->
<a id="schemakinesisvideostreamconfig"></a>
<a id="schema_KinesisVideoStreamConfig"></a>
<a id="tocSkinesisvideostreamconfig"></a>
<a id="tocskinesisvideostreamconfig"></a>

```json
{
  "Prefix": {},
  "RetentionPeriodHours": {},
  "EncryptionConfig": {
    "EncryptionType": {},
    "KeyId": {}
  }
}
```

Configuration information of a Kinesis video stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|true|none|none|
|RetentionPeriodHours|object|true|none|none|
|EncryptionConfig|object|true|none|none|

<h2 id="tocS_KinesisStreamConfig">KinesisStreamConfig</h2>
<!-- backwards compatibility -->
<a id="schemakinesisstreamconfig"></a>
<a id="schema_KinesisStreamConfig"></a>
<a id="tocSkinesisstreamconfig"></a>
<a id="tocskinesisstreamconfig"></a>

```json
{
  "StreamArn": {}
}
```

Configuration information of a Kinesis data stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamArn|object|true|none|none|

<h2 id="tocS_KinesisFirehoseConfig">KinesisFirehoseConfig</h2>
<!-- backwards compatibility -->
<a id="schemakinesisfirehoseconfig"></a>
<a id="schema_KinesisFirehoseConfig"></a>
<a id="tocSkinesisfirehoseconfig"></a>
<a id="tocskinesisfirehoseconfig"></a>

```json
{
  "FirehoseArn": {}
}
```

Configuration information of a Kinesis Data Firehose delivery stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirehoseArn|object|true|none|none|

<h2 id="tocS_QuickConnectId">QuickConnectId</h2>
<!-- backwards compatibility -->
<a id="schemaquickconnectid"></a>
<a id="schema_QuickConnectId"></a>
<a id="tocSquickconnectid"></a>
<a id="tocsquickconnectid"></a>

```json
"string"
```

<h2 id="tocS_RoutingProfileQueueConfig">RoutingProfileQueueConfig</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofilequeueconfig"></a>
<a id="schema_RoutingProfileQueueConfig"></a>
<a id="tocSroutingprofilequeueconfig"></a>
<a id="tocsroutingprofilequeueconfig"></a>

```json
{
  "QueueReference": {
    "QueueId": {},
    "Channel": {}
  },
  "Priority": {},
  "Delay": {}
}
```

Contains information about the queue and channel for which priority and delay can be set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueReference|object|true|none|none|
|Priority|object|true|none|none|
|Delay|object|true|none|none|

<h2 id="tocS_AssociateSecurityKeyResponse">AssociateSecurityKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatesecuritykeyresponse"></a>
<a id="schema_AssociateSecurityKeyResponse"></a>
<a id="tocSassociatesecuritykeyresponse"></a>
<a id="tocsassociatesecuritykeyresponse"></a>

```json
{
  "AssociationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|false|none|none|

<h2 id="tocS_ClaimPhoneNumberResponse">ClaimPhoneNumberResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclaimphonenumberresponse"></a>
<a id="schema_ClaimPhoneNumberResponse"></a>
<a id="tocSclaimphonenumberresponse"></a>
<a id="tocsclaimphonenumberresponse"></a>

```json
{
  "PhoneNumberId": {},
  "PhoneNumberArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberId|object|false|none|none|
|PhoneNumberArn|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_IdempotencyException">IdempotencyException</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencyexception"></a>
<a id="schema_IdempotencyException"></a>
<a id="tocSidempotencyexception"></a>
<a id="tocsidempotencyexception"></a>

```json
null
```

<h2 id="tocS_CreateAgentStatusResponse">CreateAgentStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateagentstatusresponse"></a>
<a id="schema_CreateAgentStatusResponse"></a>
<a id="tocScreateagentstatusresponse"></a>
<a id="tocscreateagentstatusresponse"></a>

```json
{
  "AgentStatusARN": {},
  "AgentStatusId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgentStatusARN|object|false|none|none|
|AgentStatusId|object|false|none|none|

<h2 id="tocS_DuplicateResourceException">DuplicateResourceException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateresourceexception"></a>
<a id="schema_DuplicateResourceException"></a>
<a id="tocSduplicateresourceexception"></a>
<a id="tocsduplicateresourceexception"></a>

```json
null
```

<h2 id="tocS_CreateContactFlowResponse">CreateContactFlowResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactflowresponse"></a>
<a id="schema_CreateContactFlowResponse"></a>
<a id="tocScreatecontactflowresponse"></a>
<a id="tocscreatecontactflowresponse"></a>

```json
{
  "ContactFlowId": {},
  "ContactFlowArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactFlowId|object|false|none|none|
|ContactFlowArn|object|false|none|none|

<h2 id="tocS_InvalidContactFlowException">InvalidContactFlowException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcontactflowexception"></a>
<a id="schema_InvalidContactFlowException"></a>
<a id="tocSinvalidcontactflowexception"></a>
<a id="tocsinvalidcontactflowexception"></a>

```json
null
```

<h2 id="tocS_CreateContactFlowModuleResponse">CreateContactFlowModuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactflowmoduleresponse"></a>
<a id="schema_CreateContactFlowModuleResponse"></a>
<a id="tocScreatecontactflowmoduleresponse"></a>
<a id="tocscreatecontactflowmoduleresponse"></a>

```json
{
  "Id": {},
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_InvalidContactFlowModuleException">InvalidContactFlowModuleException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcontactflowmoduleexception"></a>
<a id="schema_InvalidContactFlowModuleException"></a>
<a id="tocSinvalidcontactflowmoduleexception"></a>
<a id="tocsinvalidcontactflowmoduleexception"></a>

```json
null
```

<h2 id="tocS_CreateHoursOfOperationResponse">CreateHoursOfOperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatehoursofoperationresponse"></a>
<a id="schema_CreateHoursOfOperationResponse"></a>
<a id="tocScreatehoursofoperationresponse"></a>
<a id="tocscreatehoursofoperationresponse"></a>

```json
{
  "HoursOfOperationId": {},
  "HoursOfOperationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HoursOfOperationId|object|false|none|none|
|HoursOfOperationArn|object|false|none|none|

<h2 id="tocS_HoursOfOperationConfig">HoursOfOperationConfig</h2>
<!-- backwards compatibility -->
<a id="schemahoursofoperationconfig"></a>
<a id="schema_HoursOfOperationConfig"></a>
<a id="tocShoursofoperationconfig"></a>
<a id="tocshoursofoperationconfig"></a>

```json
{
  "Day": {},
  "StartTime": {
    "Hours": {},
    "Minutes": {}
  },
  "EndTime": {
    "Hours": {},
    "Minutes": {}
  }
}
```

Contains information about the hours of operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Day|object|true|none|none|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|

<h2 id="tocS_CreateInstanceResponse">CreateInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstanceresponse"></a>
<a id="schema_CreateInstanceResponse"></a>
<a id="tocScreateinstanceresponse"></a>
<a id="tocscreateinstanceresponse"></a>

```json
{
  "Id": {},
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_CreateIntegrationAssociationResponse">CreateIntegrationAssociationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateintegrationassociationresponse"></a>
<a id="schema_CreateIntegrationAssociationResponse"></a>
<a id="tocScreateintegrationassociationresponse"></a>
<a id="tocscreateintegrationassociationresponse"></a>

```json
{
  "IntegrationAssociationId": {},
  "IntegrationAssociationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IntegrationAssociationId|object|false|none|none|
|IntegrationAssociationArn|object|false|none|none|

<h2 id="tocS_CreateParticipantResponse">CreateParticipantResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateparticipantresponse"></a>
<a id="schema_CreateParticipantResponse"></a>
<a id="tocScreateparticipantresponse"></a>
<a id="tocscreateparticipantresponse"></a>

```json
{
  "ParticipantCredentials": {
    "ParticipantToken": {},
    "Expiry": {}
  },
  "ParticipantId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParticipantCredentials|object|false|none|none|
|ParticipantId|object|false|none|none|

<h2 id="tocS_ParticipantRole">ParticipantRole</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantrole"></a>
<a id="schema_ParticipantRole"></a>
<a id="tocSparticipantrole"></a>
<a id="tocsparticipantrole"></a>

```json
"AGENT"
```

<h2 id="tocS_DisplayName">DisplayName</h2>
<!-- backwards compatibility -->
<a id="schemadisplayname"></a>
<a id="schema_DisplayName"></a>
<a id="tocSdisplayname"></a>
<a id="tocsdisplayname"></a>

```json
"string"
```

<h2 id="tocS_CreateQueueResponse">CreateQueueResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatequeueresponse"></a>
<a id="schema_CreateQueueResponse"></a>
<a id="tocScreatequeueresponse"></a>
<a id="tocscreatequeueresponse"></a>

```json
{
  "QueueArn": {},
  "QueueId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueArn|object|false|none|none|
|QueueId|object|false|none|none|

<h2 id="tocS_OutboundCallerIdName">OutboundCallerIdName</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundcalleridname"></a>
<a id="schema_OutboundCallerIdName"></a>
<a id="tocSoutboundcalleridname"></a>
<a id="tocsoutboundcalleridname"></a>

```json
"string"
```

<h2 id="tocS_PhoneNumberId">PhoneNumberId</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberid"></a>
<a id="schema_PhoneNumberId"></a>
<a id="tocSphonenumberid"></a>
<a id="tocsphonenumberid"></a>

```json
"string"
```

<h2 id="tocS_ContactFlowId">ContactFlowId</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowid"></a>
<a id="schema_ContactFlowId"></a>
<a id="tocScontactflowid"></a>
<a id="tocscontactflowid"></a>

```json
"string"
```

<h2 id="tocS_CreateQuickConnectResponse">CreateQuickConnectResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatequickconnectresponse"></a>
<a id="schema_CreateQuickConnectResponse"></a>
<a id="tocScreatequickconnectresponse"></a>
<a id="tocscreatequickconnectresponse"></a>

```json
{
  "QuickConnectARN": {},
  "QuickConnectId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuickConnectARN|object|false|none|none|
|QuickConnectId|object|false|none|none|

<h2 id="tocS_QuickConnectType">QuickConnectType</h2>
<!-- backwards compatibility -->
<a id="schemaquickconnecttype"></a>
<a id="schema_QuickConnectType"></a>
<a id="tocSquickconnecttype"></a>
<a id="tocsquickconnecttype"></a>

```json
"USER"
```

<h2 id="tocS_UserQuickConnectConfig">UserQuickConnectConfig</h2>
<!-- backwards compatibility -->
<a id="schemauserquickconnectconfig"></a>
<a id="schema_UserQuickConnectConfig"></a>
<a id="tocSuserquickconnectconfig"></a>
<a id="tocsuserquickconnectconfig"></a>

```json
{
  "UserId": {},
  "ContactFlowId": {}
}
```

Contains information about the quick connect configuration settings for a user. The contact flow must be of type Transfer to Agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|true|none|none|
|ContactFlowId|object|true|none|none|

<h2 id="tocS_QueueQuickConnectConfig">QueueQuickConnectConfig</h2>
<!-- backwards compatibility -->
<a id="schemaqueuequickconnectconfig"></a>
<a id="schema_QueueQuickConnectConfig"></a>
<a id="tocSqueuequickconnectconfig"></a>
<a id="tocsqueuequickconnectconfig"></a>

```json
{
  "QueueId": {},
  "ContactFlowId": {}
}
```

Contains information about a queue for a quick connect. The flow must be of type Transfer to Queue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueId|object|true|none|none|
|ContactFlowId|object|true|none|none|

<h2 id="tocS_PhoneNumberQuickConnectConfig">PhoneNumberQuickConnectConfig</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberquickconnectconfig"></a>
<a id="schema_PhoneNumberQuickConnectConfig"></a>
<a id="tocSphonenumberquickconnectconfig"></a>
<a id="tocsphonenumberquickconnectconfig"></a>

```json
{
  "PhoneNumber": {}
}
```

Contains information about a phone number for a quick connect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumber|object|true|none|none|

<h2 id="tocS_CreateRoutingProfileResponse">CreateRoutingProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateroutingprofileresponse"></a>
<a id="schema_CreateRoutingProfileResponse"></a>
<a id="tocScreateroutingprofileresponse"></a>
<a id="tocscreateroutingprofileresponse"></a>

```json
{
  "RoutingProfileArn": {},
  "RoutingProfileId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoutingProfileArn|object|false|none|none|
|RoutingProfileId|object|false|none|none|

<h2 id="tocS_MediaConcurrency">MediaConcurrency</h2>
<!-- backwards compatibility -->
<a id="schemamediaconcurrency"></a>
<a id="schema_MediaConcurrency"></a>
<a id="tocSmediaconcurrency"></a>
<a id="tocsmediaconcurrency"></a>

```json
{
  "Channel": {},
  "Concurrency": {},
  "CrossChannelBehavior": {
    "BehaviorType": {}
  }
}
```

Contains information about which channels are supported, and how many contacts an agent can have on a channel simultaneously.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Channel|object|true|none|none|
|Concurrency|object|true|none|none|
|CrossChannelBehavior|object|false|none|none|

<h2 id="tocS_CreateRuleResponse">CreateRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateruleresponse"></a>
<a id="schema_CreateRuleResponse"></a>
<a id="tocScreateruleresponse"></a>
<a id="tocscreateruleresponse"></a>

```json
{
  "RuleArn": {},
  "RuleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleArn|object|true|none|none|
|RuleId|object|true|none|none|

<h2 id="tocS_EventSourceName">EventSourceName</h2>
<!-- backwards compatibility -->
<a id="schemaeventsourcename"></a>
<a id="schema_EventSourceName"></a>
<a id="tocSeventsourcename"></a>
<a id="tocseventsourcename"></a>

```json
"OnPostCallAnalysisAvailable"
```

<h2 id="tocS_IntegrationAssociationId">IntegrationAssociationId</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationassociationid"></a>
<a id="schema_IntegrationAssociationId"></a>
<a id="tocSintegrationassociationid"></a>
<a id="tocsintegrationassociationid"></a>

```json
"string"
```

<h2 id="tocS_RuleAction">RuleAction</h2>
<!-- backwards compatibility -->
<a id="schemaruleaction"></a>
<a id="schema_RuleAction"></a>
<a id="tocSruleaction"></a>
<a id="tocsruleaction"></a>

```json
{
  "ActionType": {},
  "TaskAction": {
    "Name": {},
    "Description": {},
    "ContactFlowId": {},
    "References": {
      "property1": {
        "Value": {},
        "Type": {}
      },
      "property2": {
        "Value": {},
        "Type": {}
      }
    }
  },
  "EventBridgeAction": {
    "Name": {}
  },
  "AssignContactCategoryAction": {},
  "SendNotificationAction": {
    "DeliveryMethod": {},
    "Subject": {},
    "Content": {},
    "ContentType": {},
    "Recipient": {
      "UserTags": {
        "property1": "string",
        "property2": "string"
      },
      "UserIds": {}
    }
  }
}
```

Information about the action to be performed when a rule is triggered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionType|object|true|none|none|
|TaskAction|object|false|none|none|
|EventBridgeAction|object|false|none|none|
|AssignContactCategoryAction|object|false|none|none|
|SendNotificationAction|object|false|none|none|

<h2 id="tocS_CreateSecurityProfileResponse">CreateSecurityProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesecurityprofileresponse"></a>
<a id="schema_CreateSecurityProfileResponse"></a>
<a id="tocScreatesecurityprofileresponse"></a>
<a id="tocscreatesecurityprofileresponse"></a>

```json
{
  "SecurityProfileId": {},
  "SecurityProfileArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityProfileId|object|false|none|none|
|SecurityProfileArn|object|false|none|none|

<h2 id="tocS_SecurityProfilePermission">SecurityProfilePermission</h2>
<!-- backwards compatibility -->
<a id="schemasecurityprofilepermission"></a>
<a id="schema_SecurityProfilePermission"></a>
<a id="tocSsecurityprofilepermission"></a>
<a id="tocssecurityprofilepermission"></a>

```json
"string"
```

<h2 id="tocS_SecurityProfilePolicyValue">SecurityProfilePolicyValue</h2>
<!-- backwards compatibility -->
<a id="schemasecurityprofilepolicyvalue"></a>
<a id="schema_SecurityProfilePolicyValue"></a>
<a id="tocSsecurityprofilepolicyvalue"></a>
<a id="tocssecurityprofilepolicyvalue"></a>

```json
"string"
```

<h2 id="tocS_TagRestrictedResourceName">TagRestrictedResourceName</h2>
<!-- backwards compatibility -->
<a id="schematagrestrictedresourcename"></a>
<a id="schema_TagRestrictedResourceName"></a>
<a id="tocStagrestrictedresourcename"></a>
<a id="tocstagrestrictedresourcename"></a>

```json
"string"
```

<h2 id="tocS_CreateTaskTemplateResponse">CreateTaskTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetasktemplateresponse"></a>
<a id="schema_CreateTaskTemplateResponse"></a>
<a id="tocScreatetasktemplateresponse"></a>
<a id="tocscreatetasktemplateresponse"></a>

```json
{
  "Id": {},
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Arn|object|true|none|none|

<h2 id="tocS_RequiredTaskTemplateFields">RequiredTaskTemplateFields</h2>
<!-- backwards compatibility -->
<a id="schemarequiredtasktemplatefields"></a>
<a id="schema_RequiredTaskTemplateFields"></a>
<a id="tocSrequiredtasktemplatefields"></a>
<a id="tocsrequiredtasktemplatefields"></a>

```json
[
  {
    "Id": {
      "Name": {}
    }
  }
]
```

<h2 id="tocS_ReadOnlyTaskTemplateFields">ReadOnlyTaskTemplateFields</h2>
<!-- backwards compatibility -->
<a id="schemareadonlytasktemplatefields"></a>
<a id="schema_ReadOnlyTaskTemplateFields"></a>
<a id="tocSreadonlytasktemplatefields"></a>
<a id="tocsreadonlytasktemplatefields"></a>

```json
[
  {
    "Id": {
      "Name": {}
    }
  }
]
```

<h2 id="tocS_InvisibleTaskTemplateFields">InvisibleTaskTemplateFields</h2>
<!-- backwards compatibility -->
<a id="schemainvisibletasktemplatefields"></a>
<a id="schema_InvisibleTaskTemplateFields"></a>
<a id="tocSinvisibletasktemplatefields"></a>
<a id="tocsinvisibletasktemplatefields"></a>

```json
[
  {
    "Id": {
      "Name": {}
    }
  }
]
```

<h2 id="tocS_TaskTemplateDefaultFieldValueList">TaskTemplateDefaultFieldValueList</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatedefaultfieldvaluelist"></a>
<a id="schema_TaskTemplateDefaultFieldValueList"></a>
<a id="tocStasktemplatedefaultfieldvaluelist"></a>
<a id="tocstasktemplatedefaultfieldvaluelist"></a>

```json
[
  {
    "Id": {
      "Name": {}
    },
    "DefaultValue": {}
  }
]
```

<h2 id="tocS_TaskTemplateField">TaskTemplateField</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatefield"></a>
<a id="schema_TaskTemplateField"></a>
<a id="tocStasktemplatefield"></a>
<a id="tocstasktemplatefield"></a>

```json
{
  "Id": {
    "Name": {}
  },
  "Description": {},
  "Type": {},
  "SingleSelectOptions": {}
}
```

Describes a single task template field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Description|object|false|none|none|
|Type|object|false|none|none|
|SingleSelectOptions|object|false|none|none|

<h2 id="tocS_PropertyValidationException">PropertyValidationException</h2>
<!-- backwards compatibility -->
<a id="schemapropertyvalidationexception"></a>
<a id="schema_PropertyValidationException"></a>
<a id="tocSpropertyvalidationexception"></a>
<a id="tocspropertyvalidationexception"></a>

```json
null
```

<h2 id="tocS_CreateTrafficDistributionGroupResponse">CreateTrafficDistributionGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetrafficdistributiongroupresponse"></a>
<a id="schema_CreateTrafficDistributionGroupResponse"></a>
<a id="tocScreatetrafficdistributiongroupresponse"></a>
<a id="tocscreatetrafficdistributiongroupresponse"></a>

```json
{
  "Id": {},
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_ResourceNotReadyException">ResourceNotReadyException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotreadyexception"></a>
<a id="schema_ResourceNotReadyException"></a>
<a id="tocSresourcenotreadyexception"></a>
<a id="tocsresourcenotreadyexception"></a>

```json
null
```

<h2 id="tocS_CreateUseCaseResponse">CreateUseCaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateusecaseresponse"></a>
<a id="schema_CreateUseCaseResponse"></a>
<a id="tocScreateusecaseresponse"></a>
<a id="tocscreateusecaseresponse"></a>

```json
{
  "UseCaseId": {},
  "UseCaseArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UseCaseId|object|false|none|none|
|UseCaseArn|object|false|none|none|

<h2 id="tocS_CreateUserResponse">CreateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserresponse"></a>
<a id="schema_CreateUserResponse"></a>
<a id="tocScreateuserresponse"></a>
<a id="tocscreateuserresponse"></a>

```json
{
  "UserId": {},
  "UserArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|false|none|none|
|UserArn|object|false|none|none|

<h2 id="tocS_AgentFirstName">AgentFirstName</h2>
<!-- backwards compatibility -->
<a id="schemaagentfirstname"></a>
<a id="schema_AgentFirstName"></a>
<a id="tocSagentfirstname"></a>
<a id="tocsagentfirstname"></a>

```json
"string"
```

<h2 id="tocS_AgentLastName">AgentLastName</h2>
<!-- backwards compatibility -->
<a id="schemaagentlastname"></a>
<a id="schema_AgentLastName"></a>
<a id="tocSagentlastname"></a>
<a id="tocsagentlastname"></a>

```json
"string"
```

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
"string"
```

<h2 id="tocS_PhoneNumber">PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_PhoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
"string"
```

<h2 id="tocS_PhoneType">PhoneType</h2>
<!-- backwards compatibility -->
<a id="schemaphonetype"></a>
<a id="schema_PhoneType"></a>
<a id="tocSphonetype"></a>
<a id="tocsphonetype"></a>

```json
"SOFT_PHONE"
```

<h2 id="tocS_AutoAccept">AutoAccept</h2>
<!-- backwards compatibility -->
<a id="schemaautoaccept"></a>
<a id="schema_AutoAccept"></a>
<a id="tocSautoaccept"></a>
<a id="tocsautoaccept"></a>

```json
true
```

<h2 id="tocS_AfterContactWorkTimeLimit">AfterContactWorkTimeLimit</h2>
<!-- backwards compatibility -->
<a id="schemaaftercontactworktimelimit"></a>
<a id="schema_AfterContactWorkTimeLimit"></a>
<a id="tocSaftercontactworktimelimit"></a>
<a id="tocsaftercontactworktimelimit"></a>

```json
0
```

<h2 id="tocS_SecurityProfileId">SecurityProfileId</h2>
<!-- backwards compatibility -->
<a id="schemasecurityprofileid"></a>
<a id="schema_SecurityProfileId"></a>
<a id="tocSsecurityprofileid"></a>
<a id="tocssecurityprofileid"></a>

```json
"string"
```

<h2 id="tocS_CreateUserHierarchyGroupResponse">CreateUserHierarchyGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserhierarchygroupresponse"></a>
<a id="schema_CreateUserHierarchyGroupResponse"></a>
<a id="tocScreateuserhierarchygroupresponse"></a>
<a id="tocscreateuserhierarchygroupresponse"></a>

```json
{
  "HierarchyGroupId": {},
  "HierarchyGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HierarchyGroupId|object|false|none|none|
|HierarchyGroupArn|object|false|none|none|

<h2 id="tocS_CreateVocabularyResponse">CreateVocabularyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevocabularyresponse"></a>
<a id="schema_CreateVocabularyResponse"></a>
<a id="tocScreatevocabularyresponse"></a>
<a id="tocscreatevocabularyresponse"></a>

```json
{
  "VocabularyArn": {},
  "VocabularyId": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyArn|object|true|none|none|
|VocabularyId|object|true|none|none|
|State|object|true|none|none|

<h2 id="tocS_DeleteContactFlowResponse">DeleteContactFlowResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontactflowresponse"></a>
<a id="schema_DeleteContactFlowResponse"></a>
<a id="tocSdeletecontactflowresponse"></a>
<a id="tocsdeletecontactflowresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteContactFlowModuleResponse">DeleteContactFlowModuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontactflowmoduleresponse"></a>
<a id="schema_DeleteContactFlowModuleResponse"></a>
<a id="tocSdeletecontactflowmoduleresponse"></a>
<a id="tocsdeletecontactflowmoduleresponse"></a>

```json
{}
```

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_DeleteTaskTemplateResponse">DeleteTaskTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetasktemplateresponse"></a>
<a id="schema_DeleteTaskTemplateResponse"></a>
<a id="tocSdeletetasktemplateresponse"></a>
<a id="tocsdeletetasktemplateresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteTrafficDistributionGroupResponse">DeleteTrafficDistributionGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetrafficdistributiongroupresponse"></a>
<a id="schema_DeleteTrafficDistributionGroupResponse"></a>
<a id="tocSdeletetrafficdistributiongroupresponse"></a>
<a id="tocsdeletetrafficdistributiongroupresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteVocabularyResponse">DeleteVocabularyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletevocabularyresponse"></a>
<a id="schema_DeleteVocabularyResponse"></a>
<a id="tocSdeletevocabularyresponse"></a>
<a id="tocsdeletevocabularyresponse"></a>

```json
{
  "VocabularyArn": {},
  "VocabularyId": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyArn|object|true|none|none|
|VocabularyId|object|true|none|none|
|State|object|true|none|none|

<h2 id="tocS_DescribeAgentStatusResponse">DescribeAgentStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeagentstatusresponse"></a>
<a id="schema_DescribeAgentStatusResponse"></a>
<a id="tocSdescribeagentstatusresponse"></a>
<a id="tocsdescribeagentstatusresponse"></a>

```json
{
  "AgentStatus": {
    "AgentStatusARN": {},
    "AgentStatusId": {},
    "Name": {},
    "Description": {},
    "Type": {},
    "DisplayOrder": {},
    "State": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgentStatus|object|false|none|none|

<h2 id="tocS_DescribeContactResponse">DescribeContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontactresponse"></a>
<a id="schema_DescribeContactResponse"></a>
<a id="tocSdescribecontactresponse"></a>
<a id="tocsdescribecontactresponse"></a>

```json
{
  "Contact": {
    "Arn": {},
    "Id": {},
    "InitialContactId": {},
    "PreviousContactId": {},
    "InitiationMethod": {},
    "Name": {},
    "Description": {},
    "Channel": {},
    "QueueInfo": {
      "Id": {},
      "EnqueueTimestamp": {}
    },
    "AgentInfo": {
      "Id": {},
      "ConnectedToAgentTimestamp": {}
    },
    "InitiationTimestamp": {},
    "DisconnectTimestamp": {},
    "LastUpdateTimestamp": {},
    "ScheduledTimestamp": {},
    "RelatedContactId": {},
    "WisdomInfo": {
      "SessionArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Contact|object|false|none|none|

<h2 id="tocS_DescribeContactFlowResponse">DescribeContactFlowResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontactflowresponse"></a>
<a id="schema_DescribeContactFlowResponse"></a>
<a id="tocSdescribecontactflowresponse"></a>
<a id="tocsdescribecontactflowresponse"></a>

```json
{
  "ContactFlow": {
    "Arn": {},
    "Id": {},
    "Name": {},
    "Type": {},
    "State": {},
    "Description": {},
    "Content": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactFlow|object|false|none|none|

<h2 id="tocS_ContactFlowNotPublishedException">ContactFlowNotPublishedException</h2>
<!-- backwards compatibility -->
<a id="schemacontactflownotpublishedexception"></a>
<a id="schema_ContactFlowNotPublishedException"></a>
<a id="tocScontactflownotpublishedexception"></a>
<a id="tocscontactflownotpublishedexception"></a>

```json
null
```

<h2 id="tocS_DescribeContactFlowModuleResponse">DescribeContactFlowModuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontactflowmoduleresponse"></a>
<a id="schema_DescribeContactFlowModuleResponse"></a>
<a id="tocSdescribecontactflowmoduleresponse"></a>
<a id="tocsdescribecontactflowmoduleresponse"></a>

```json
{
  "ContactFlowModule": {
    "Arn": {},
    "Id": {},
    "Name": {},
    "Content": {},
    "Description": {},
    "State": {},
    "Status": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactFlowModule|object|false|none|none|

<h2 id="tocS_DescribeHoursOfOperationResponse">DescribeHoursOfOperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribehoursofoperationresponse"></a>
<a id="schema_DescribeHoursOfOperationResponse"></a>
<a id="tocSdescribehoursofoperationresponse"></a>
<a id="tocsdescribehoursofoperationresponse"></a>

```json
{
  "HoursOfOperation": {
    "HoursOfOperationId": {},
    "HoursOfOperationArn": {},
    "Name": {},
    "Description": {},
    "TimeZone": {},
    "Config": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HoursOfOperation|object|false|none|none|

<h2 id="tocS_DescribeInstanceResponse">DescribeInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstanceresponse"></a>
<a id="schema_DescribeInstanceResponse"></a>
<a id="tocSdescribeinstanceresponse"></a>
<a id="tocsdescribeinstanceresponse"></a>

```json
{
  "Instance": {
    "Id": {},
    "Arn": {},
    "IdentityManagementType": {},
    "InstanceAlias": {},
    "CreatedTime": {},
    "ServiceRole": {},
    "InstanceStatus": {},
    "StatusReason": {
      "Message": {}
    },
    "InboundCallsEnabled": {},
    "OutboundCallsEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Instance|object|false|none|none|

<h2 id="tocS_DescribeInstanceAttributeResponse">DescribeInstanceAttributeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstanceattributeresponse"></a>
<a id="schema_DescribeInstanceAttributeResponse"></a>
<a id="tocSdescribeinstanceattributeresponse"></a>
<a id="tocsdescribeinstanceattributeresponse"></a>

```json
{
  "Attribute": {
    "AttributeType": {},
    "Value": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attribute|object|false|none|none|

<h2 id="tocS_DescribeInstanceStorageConfigResponse">DescribeInstanceStorageConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstancestorageconfigresponse"></a>
<a id="schema_DescribeInstanceStorageConfigResponse"></a>
<a id="tocSdescribeinstancestorageconfigresponse"></a>
<a id="tocsdescribeinstancestorageconfigresponse"></a>

```json
{
  "StorageConfig": {
    "AssociationId": {},
    "StorageType": {},
    "S3Config": {
      "BucketName": {},
      "BucketPrefix": {},
      "EncryptionConfig": {
        "EncryptionType": {},
        "KeyId": {}
      }
    },
    "KinesisVideoStreamConfig": {
      "Prefix": {},
      "RetentionPeriodHours": {},
      "EncryptionConfig": {
        "EncryptionType": {},
        "KeyId": {}
      }
    },
    "KinesisStreamConfig": {
      "StreamArn": {}
    },
    "KinesisFirehoseConfig": {
      "FirehoseArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageConfig|object|false|none|none|

<h2 id="tocS_DescribePhoneNumberResponse">DescribePhoneNumberResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribephonenumberresponse"></a>
<a id="schema_DescribePhoneNumberResponse"></a>
<a id="tocSdescribephonenumberresponse"></a>
<a id="tocsdescribephonenumberresponse"></a>

```json
{
  "ClaimedPhoneNumberSummary": {
    "PhoneNumberId": {},
    "PhoneNumberArn": {},
    "PhoneNumber": {},
    "PhoneNumberCountryCode": {},
    "PhoneNumberType": {},
    "PhoneNumberDescription": {},
    "TargetArn": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "PhoneNumberStatus": {
      "Status": {},
      "Message": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClaimedPhoneNumberSummary|object|false|none|none|

<h2 id="tocS_DescribeQueueResponse">DescribeQueueResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribequeueresponse"></a>
<a id="schema_DescribeQueueResponse"></a>
<a id="tocSdescribequeueresponse"></a>
<a id="tocsdescribequeueresponse"></a>

```json
{
  "Queue": {
    "Name": {},
    "QueueArn": {},
    "QueueId": {},
    "Description": {},
    "OutboundCallerConfig": {
      "OutboundCallerIdName": {},
      "OutboundCallerIdNumberId": {},
      "OutboundFlowId": {}
    },
    "HoursOfOperationId": {},
    "MaxContacts": {},
    "Status": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Queue|object|false|none|none|

<h2 id="tocS_DescribeQuickConnectResponse">DescribeQuickConnectResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribequickconnectresponse"></a>
<a id="schema_DescribeQuickConnectResponse"></a>
<a id="tocSdescribequickconnectresponse"></a>
<a id="tocsdescribequickconnectresponse"></a>

```json
{
  "QuickConnect": {
    "QuickConnectARN": {},
    "QuickConnectId": {},
    "Name": {},
    "Description": {},
    "QuickConnectConfig": {
      "QuickConnectType": {},
      "UserConfig": {
        "UserId": {},
        "ContactFlowId": {}
      },
      "QueueConfig": {
        "QueueId": {},
        "ContactFlowId": {}
      },
      "PhoneConfig": {
        "PhoneNumber": {}
      }
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuickConnect|object|false|none|none|

<h2 id="tocS_DescribeRoutingProfileResponse">DescribeRoutingProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberoutingprofileresponse"></a>
<a id="schema_DescribeRoutingProfileResponse"></a>
<a id="tocSdescriberoutingprofileresponse"></a>
<a id="tocsdescriberoutingprofileresponse"></a>

```json
{
  "RoutingProfile": {
    "InstanceId": {},
    "Name": {},
    "RoutingProfileArn": {},
    "RoutingProfileId": {},
    "Description": {},
    "MediaConcurrencies": {},
    "DefaultOutboundQueueId": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "NumberOfAssociatedQueues": {},
    "NumberOfAssociatedUsers": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoutingProfile|object|false|none|none|

<h2 id="tocS_DescribeRuleResponse">DescribeRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberuleresponse"></a>
<a id="schema_DescribeRuleResponse"></a>
<a id="tocSdescriberuleresponse"></a>
<a id="tocsdescriberuleresponse"></a>

```json
{
  "Rule": {
    "Name": {},
    "RuleId": {},
    "RuleArn": {},
    "TriggerEventSource": {
      "EventSourceName": {},
      "IntegrationAssociationId": {}
    },
    "Function": {},
    "Actions": {},
    "PublishStatus": {},
    "CreatedTime": {},
    "LastUpdatedTime": {},
    "LastUpdatedBy": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rule|object|true|none|none|

<h2 id="tocS_DescribeSecurityProfileResponse">DescribeSecurityProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesecurityprofileresponse"></a>
<a id="schema_DescribeSecurityProfileResponse"></a>
<a id="tocSdescribesecurityprofileresponse"></a>
<a id="tocsdescribesecurityprofileresponse"></a>

```json
{
  "SecurityProfile": {
    "Id": {},
    "OrganizationResourceId": {},
    "Arn": {},
    "SecurityProfileName": {},
    "Description": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "AllowedAccessControlTags": {
      "property1": "string",
      "property2": "string"
    },
    "TagRestrictedResources": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityProfile|object|false|none|none|

<h2 id="tocS_DescribeTrafficDistributionGroupResponse">DescribeTrafficDistributionGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrafficdistributiongroupresponse"></a>
<a id="schema_DescribeTrafficDistributionGroupResponse"></a>
<a id="tocSdescribetrafficdistributiongroupresponse"></a>
<a id="tocsdescribetrafficdistributiongroupresponse"></a>

```json
{
  "TrafficDistributionGroup": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Description": {},
    "InstanceArn": {},
    "Status": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrafficDistributionGroup|object|false|none|none|

<h2 id="tocS_DescribeUserResponse">DescribeUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserresponse"></a>
<a id="schema_DescribeUserResponse"></a>
<a id="tocSdescribeuserresponse"></a>
<a id="tocsdescribeuserresponse"></a>

```json
{
  "User": {
    "Id": {},
    "Arn": {},
    "Username": {},
    "IdentityInfo": {
      "FirstName": {},
      "LastName": {},
      "Email": {},
      "SecondaryEmail": {},
      "Mobile": {}
    },
    "PhoneConfig": {
      "PhoneType": {},
      "AutoAccept": {},
      "AfterContactWorkTimeLimit": {},
      "DeskPhoneNumber": {}
    },
    "DirectoryUserId": {},
    "SecurityProfileIds": {},
    "RoutingProfileId": {},
    "HierarchyGroupId": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|User|object|false|none|none|

<h2 id="tocS_DescribeUserHierarchyGroupResponse">DescribeUserHierarchyGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserhierarchygroupresponse"></a>
<a id="schema_DescribeUserHierarchyGroupResponse"></a>
<a id="tocSdescribeuserhierarchygroupresponse"></a>
<a id="tocsdescribeuserhierarchygroupresponse"></a>

```json
{
  "HierarchyGroup": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "LevelId": {},
    "HierarchyPath": {
      "LevelOne": {
        "Id": {},
        "Arn": {},
        "Name": {}
      },
      "LevelTwo": {
        "Id": {},
        "Arn": {},
        "Name": {}
      },
      "LevelThree": {
        "Id": {},
        "Arn": {},
        "Name": {}
      },
      "LevelFour": {
        "Id": {},
        "Arn": {},
        "Name": {}
      },
      "LevelFive": {
        "Id": {},
        "Arn": {},
        "Name": {}
      }
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HierarchyGroup|object|false|none|none|

<h2 id="tocS_DescribeUserHierarchyStructureResponse">DescribeUserHierarchyStructureResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserhierarchystructureresponse"></a>
<a id="schema_DescribeUserHierarchyStructureResponse"></a>
<a id="tocSdescribeuserhierarchystructureresponse"></a>
<a id="tocsdescribeuserhierarchystructureresponse"></a>

```json
{
  "HierarchyStructure": {
    "LevelOne": {
      "Id": {},
      "Arn": {},
      "Name": {}
    },
    "LevelTwo": {
      "Id": {},
      "Arn": {},
      "Name": {}
    },
    "LevelThree": {
      "Id": {},
      "Arn": {},
      "Name": {}
    },
    "LevelFour": {
      "Id": {},
      "Arn": {},
      "Name": {}
    },
    "LevelFive": {
      "Id": {},
      "Arn": {},
      "Name": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HierarchyStructure|object|false|none|none|

<h2 id="tocS_DescribeVocabularyResponse">DescribeVocabularyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribevocabularyresponse"></a>
<a id="schema_DescribeVocabularyResponse"></a>
<a id="tocSdescribevocabularyresponse"></a>
<a id="tocsdescribevocabularyresponse"></a>

```json
{
  "Vocabulary": {
    "Name": {},
    "Id": {},
    "Arn": {},
    "LanguageCode": {},
    "State": {},
    "LastModifiedTime": {},
    "FailureReason": {},
    "Content": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Vocabulary|object|true|none|none|

<h2 id="tocS_RoutingProfileQueueReference">RoutingProfileQueueReference</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofilequeuereference"></a>
<a id="schema_RoutingProfileQueueReference"></a>
<a id="tocSroutingprofilequeuereference"></a>
<a id="tocsroutingprofilequeuereference"></a>

```json
{
  "QueueId": {},
  "Channel": {}
}
```

Contains the channel and queue identifier for a routing profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueId|object|true|none|none|
|Channel|object|true|none|none|

<h2 id="tocS_DismissUserContactResponse">DismissUserContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemadismissusercontactresponse"></a>
<a id="schema_DismissUserContactResponse"></a>
<a id="tocSdismissusercontactresponse"></a>
<a id="tocsdismissusercontactresponse"></a>

```json
{}
```

<h2 id="tocS_GetContactAttributesResponse">GetContactAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactattributesresponse"></a>
<a id="schema_GetContactAttributesResponse"></a>
<a id="tocSgetcontactattributesresponse"></a>
<a id="tocsgetcontactattributesresponse"></a>

```json
{
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_GetCurrentMetricDataResponse">GetCurrentMetricDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcurrentmetricdataresponse"></a>
<a id="schema_GetCurrentMetricDataResponse"></a>
<a id="tocSgetcurrentmetricdataresponse"></a>
<a id="tocsgetcurrentmetricdataresponse"></a>

```json
{
  "NextToken": {},
  "MetricResults": {},
  "DataSnapshotTime": {},
  "ApproximateTotalCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MetricResults|object|false|none|none|
|DataSnapshotTime|object|false|none|none|
|ApproximateTotalCount|object|false|none|none|

<h2 id="tocS_Queues">Queues</h2>
<!-- backwards compatibility -->
<a id="schemaqueues"></a>
<a id="schema_Queues"></a>
<a id="tocSqueues"></a>
<a id="tocsqueues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Channels">Channels</h2>
<!-- backwards compatibility -->
<a id="schemachannels"></a>
<a id="schema_Channels"></a>
<a id="tocSchannels"></a>
<a id="tocschannels"></a>

```json
[
  "VOICE"
]
```

<h2 id="tocS_RoutingProfiles">RoutingProfiles</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofiles"></a>
<a id="schema_RoutingProfiles"></a>
<a id="tocSroutingprofiles"></a>
<a id="tocsroutingprofiles"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Grouping">Grouping</h2>
<!-- backwards compatibility -->
<a id="schemagrouping"></a>
<a id="schema_Grouping"></a>
<a id="tocSgrouping"></a>
<a id="tocsgrouping"></a>

```json
"QUEUE"
```

<h2 id="tocS_CurrentMetric">CurrentMetric</h2>
<!-- backwards compatibility -->
<a id="schemacurrentmetric"></a>
<a id="schema_CurrentMetric"></a>
<a id="tocScurrentmetric"></a>
<a id="tocscurrentmetric"></a>

```json
{
  "Name": {},
  "Unit": {}
}
```

Contains information about a real-time metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Unit|object|false|none|none|

<h2 id="tocS_CurrentMetricSortCriteria">CurrentMetricSortCriteria</h2>
<!-- backwards compatibility -->
<a id="schemacurrentmetricsortcriteria"></a>
<a id="schema_CurrentMetricSortCriteria"></a>
<a id="tocScurrentmetricsortcriteria"></a>
<a id="tocscurrentmetricsortcriteria"></a>

```json
{
  "SortByMetric": "AGENTS_ONLINE",
  "SortOrder": {}
}
```

The way to sort the resulting response based on metrics. By default resources are sorted based on <code>AGENTS_ONLINE</code>, <code>DESCENDING</code>. The metric collection is sorted based on the input metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SortByMetric|[CurrentMetricName](#schemacurrentmetricname)|false|none|The current metric names.|
|SortOrder|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|SortByMetric|AGENTS_ONLINE|
|SortByMetric|AGENTS_AVAILABLE|
|SortByMetric|AGENTS_ON_CALL|
|SortByMetric|AGENTS_NON_PRODUCTIVE|
|SortByMetric|AGENTS_AFTER_CONTACT_WORK|
|SortByMetric|AGENTS_ERROR|
|SortByMetric|AGENTS_STAFFED|
|SortByMetric|CONTACTS_IN_QUEUE|
|SortByMetric|OLDEST_CONTACT_AGE|
|SortByMetric|CONTACTS_SCHEDULED|
|SortByMetric|AGENTS_ON_CONTACT|
|SortByMetric|SLOTS_ACTIVE|
|SortByMetric|SLOTS_AVAILABLE|

<h2 id="tocS_GetCurrentUserDataResponse">GetCurrentUserDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcurrentuserdataresponse"></a>
<a id="schema_GetCurrentUserDataResponse"></a>
<a id="tocSgetcurrentuserdataresponse"></a>
<a id="tocsgetcurrentuserdataresponse"></a>

```json
{
  "NextToken": {},
  "UserDataList": {},
  "ApproximateTotalCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|UserDataList|object|false|none|none|
|ApproximateTotalCount|object|false|none|none|

<h2 id="tocS_ContactFilter">ContactFilter</h2>
<!-- backwards compatibility -->
<a id="schemacontactfilter"></a>
<a id="schema_ContactFilter"></a>
<a id="tocScontactfilter"></a>
<a id="tocscontactfilter"></a>

```json
{
  "ContactStates": {}
}
```

Filters user data based on the contact information that is associated to the users. It contains a list of <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">contact states</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactStates|object|false|none|none|

<h2 id="tocS_AgentsMinOneMaxHundred">AgentsMinOneMaxHundred</h2>
<!-- backwards compatibility -->
<a id="schemaagentsminonemaxhundred"></a>
<a id="schema_AgentsMinOneMaxHundred"></a>
<a id="tocSagentsminonemaxhundred"></a>
<a id="tocsagentsminonemaxhundred"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UserDataHierarchyGroups">UserDataHierarchyGroups</h2>
<!-- backwards compatibility -->
<a id="schemauserdatahierarchygroups"></a>
<a id="schema_UserDataHierarchyGroups"></a>
<a id="tocSuserdatahierarchygroups"></a>
<a id="tocsuserdatahierarchygroups"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetFederationTokenResponse">GetFederationTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfederationtokenresponse"></a>
<a id="schema_GetFederationTokenResponse"></a>
<a id="tocSgetfederationtokenresponse"></a>
<a id="tocsgetfederationtokenresponse"></a>

```json
{
  "Credentials": {
    "AccessToken": {},
    "AccessTokenExpiration": {},
    "RefreshToken": {},
    "RefreshTokenExpiration": {}
  },
  "SignInUrl": {},
  "UserArn": {},
  "UserId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Credentials|object|false|none|none|
|SignInUrl|object|false|none|none|
|UserArn|object|false|none|none|
|UserId|object|false|none|none|

<h2 id="tocS_UserNotFoundException">UserNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemausernotfoundexception"></a>
<a id="schema_UserNotFoundException"></a>
<a id="tocSusernotfoundexception"></a>
<a id="tocsusernotfoundexception"></a>

```json
null
```

<h2 id="tocS_GetMetricDataResponse">GetMetricDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmetricdataresponse"></a>
<a id="schema_GetMetricDataResponse"></a>
<a id="tocSgetmetricdataresponse"></a>
<a id="tocsgetmetricdataresponse"></a>

```json
{
  "NextToken": {},
  "MetricResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MetricResults|object|false|none|none|

<h2 id="tocS_HistoricalMetric">HistoricalMetric</h2>
<!-- backwards compatibility -->
<a id="schemahistoricalmetric"></a>
<a id="schema_HistoricalMetric"></a>
<a id="tocShistoricalmetric"></a>
<a id="tocshistoricalmetric"></a>

```json
{
  "Name": {},
  "Threshold": {
    "Comparison": {},
    "ThresholdValue": {}
  },
  "Statistic": {},
  "Unit": {}
}
```

Contains information about a historical metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Threshold|object|false|none|none|
|Statistic|object|false|none|none|
|Unit|object|false|none|none|

<h2 id="tocS_GetMetricDataV2Response">GetMetricDataV2Response</h2>
<!-- backwards compatibility -->
<a id="schemagetmetricdatav2response"></a>
<a id="schema_GetMetricDataV2Response"></a>
<a id="tocSgetmetricdatav2response"></a>
<a id="tocsgetmetricdatav2response"></a>

```json
{
  "NextToken": {},
  "MetricResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MetricResults|object|false|none|none|

<h2 id="tocS_FilterV2">FilterV2</h2>
<!-- backwards compatibility -->
<a id="schemafilterv2"></a>
<a id="schema_FilterV2"></a>
<a id="tocSfilterv2"></a>
<a id="tocsfilterv2"></a>

```json
{
  "FilterKey": {},
  "FilterValues": {}
}
```

Contains the filter to apply when retrieving metrics with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricDataV2.html">GetMetricDataV2</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilterKey|object|false|none|none|
|FilterValues|object|false|none|none|

<h2 id="tocS_GroupingV2">GroupingV2</h2>
<!-- backwards compatibility -->
<a id="schemagroupingv2"></a>
<a id="schema_GroupingV2"></a>
<a id="tocSgroupingv2"></a>
<a id="tocsgroupingv2"></a>

```json
"string"
```

<h2 id="tocS_MetricV2">MetricV2</h2>
<!-- backwards compatibility -->
<a id="schemametricv2"></a>
<a id="schema_MetricV2"></a>
<a id="tocSmetricv2"></a>
<a id="tocsmetricv2"></a>

```json
{
  "Name": {},
  "Threshold": {},
  "MetricFilters": {}
}
```

Contains information about the metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Threshold|object|false|none|none|
|MetricFilters|object|false|none|none|

<h2 id="tocS_GetTaskTemplateResponse">GetTaskTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettasktemplateresponse"></a>
<a id="schema_GetTaskTemplateResponse"></a>
<a id="tocSgettasktemplateresponse"></a>
<a id="tocsgettasktemplateresponse"></a>

```json
{
  "InstanceId": {},
  "Id": {},
  "Arn": {},
  "Name": {},
  "Description": {},
  "ContactFlowId": {},
  "Constraints": {
    "RequiredFields": {},
    "ReadOnlyFields": {},
    "InvisibleFields": {}
  },
  "Defaults": {
    "DefaultFieldValues": {}
  },
  "Fields": {},
  "Status": {},
  "LastModifiedTime": {},
  "CreatedTime": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|
|Id|object|true|none|none|
|Arn|object|true|none|none|
|Name|object|true|none|none|
|Description|object|false|none|none|
|ContactFlowId|object|false|none|none|
|Constraints|object|false|none|none|
|Defaults|object|false|none|none|
|Fields|object|false|none|none|
|Status|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|CreatedTime|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_GetTrafficDistributionResponse">GetTrafficDistributionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettrafficdistributionresponse"></a>
<a id="schema_GetTrafficDistributionResponse"></a>
<a id="tocSgettrafficdistributionresponse"></a>
<a id="tocsgettrafficdistributionresponse"></a>

```json
{
  "TelephonyConfig": {
    "Distributions": {}
  },
  "Id": {},
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TelephonyConfig|object|false|none|none|
|Id|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_ListAgentStatusResponse">ListAgentStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistagentstatusresponse"></a>
<a id="schema_ListAgentStatusResponse"></a>
<a id="tocSlistagentstatusresponse"></a>
<a id="tocslistagentstatusresponse"></a>

```json
{
  "NextToken": {},
  "AgentStatusSummaryList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|AgentStatusSummaryList|object|false|none|none|

<h2 id="tocS_AgentStatusType">AgentStatusType</h2>
<!-- backwards compatibility -->
<a id="schemaagentstatustype"></a>
<a id="schema_AgentStatusType"></a>
<a id="tocSagentstatustype"></a>
<a id="tocsagentstatustype"></a>

```json
"ROUTABLE"
```

<h2 id="tocS_ListApprovedOriginsResponse">ListApprovedOriginsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapprovedoriginsresponse"></a>
<a id="schema_ListApprovedOriginsResponse"></a>
<a id="tocSlistapprovedoriginsresponse"></a>
<a id="tocslistapprovedoriginsresponse"></a>

```json
{
  "Origins": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Origins|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListBotsResponse">ListBotsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbotsresponse"></a>
<a id="schema_ListBotsResponse"></a>
<a id="tocSlistbotsresponse"></a>
<a id="tocslistbotsresponse"></a>

```json
{
  "LexBots": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LexBots|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListContactFlowModulesResponse">ListContactFlowModulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactflowmodulesresponse"></a>
<a id="schema_ListContactFlowModulesResponse"></a>
<a id="tocSlistcontactflowmodulesresponse"></a>
<a id="tocslistcontactflowmodulesresponse"></a>

```json
{
  "ContactFlowModulesSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactFlowModulesSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListContactFlowsResponse">ListContactFlowsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactflowsresponse"></a>
<a id="schema_ListContactFlowsResponse"></a>
<a id="tocSlistcontactflowsresponse"></a>
<a id="tocslistcontactflowsresponse"></a>

```json
{
  "ContactFlowSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactFlowSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ContactFlowType">ContactFlowType</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowtype"></a>
<a id="schema_ContactFlowType"></a>
<a id="tocScontactflowtype"></a>
<a id="tocscontactflowtype"></a>

```json
"CONTACT_FLOW"
```

<h2 id="tocS_ListContactReferencesResponse">ListContactReferencesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactreferencesresponse"></a>
<a id="schema_ListContactReferencesResponse"></a>
<a id="tocSlistcontactreferencesresponse"></a>
<a id="tocslistcontactreferencesresponse"></a>

```json
{
  "ReferenceSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReferenceSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ReferenceType">ReferenceType</h2>
<!-- backwards compatibility -->
<a id="schemareferencetype"></a>
<a id="schema_ReferenceType"></a>
<a id="tocSreferencetype"></a>
<a id="tocsreferencetype"></a>

```json
"URL"
```

<h2 id="tocS_ListDefaultVocabulariesResponse">ListDefaultVocabulariesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdefaultvocabulariesresponse"></a>
<a id="schema_ListDefaultVocabulariesResponse"></a>
<a id="tocSlistdefaultvocabulariesresponse"></a>
<a id="tocslistdefaultvocabulariesresponse"></a>

```json
{
  "DefaultVocabularyList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultVocabularyList|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListHoursOfOperationsResponse">ListHoursOfOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthoursofoperationsresponse"></a>
<a id="schema_ListHoursOfOperationsResponse"></a>
<a id="tocSlisthoursofoperationsresponse"></a>
<a id="tocslisthoursofoperationsresponse"></a>

```json
{
  "HoursOfOperationSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HoursOfOperationSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListInstanceAttributesResponse">ListInstanceAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinstanceattributesresponse"></a>
<a id="schema_ListInstanceAttributesResponse"></a>
<a id="tocSlistinstanceattributesresponse"></a>
<a id="tocslistinstanceattributesresponse"></a>

```json
{
  "Attributes": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListInstanceStorageConfigsResponse">ListInstanceStorageConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancestorageconfigsresponse"></a>
<a id="schema_ListInstanceStorageConfigsResponse"></a>
<a id="tocSlistinstancestorageconfigsresponse"></a>
<a id="tocslistinstancestorageconfigsresponse"></a>

```json
{
  "StorageConfigs": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageConfigs|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListInstancesResponse">ListInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancesresponse"></a>
<a id="schema_ListInstancesResponse"></a>
<a id="tocSlistinstancesresponse"></a>
<a id="tocslistinstancesresponse"></a>

```json
{
  "InstanceSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListIntegrationAssociationsResponse">ListIntegrationAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistintegrationassociationsresponse"></a>
<a id="schema_ListIntegrationAssociationsResponse"></a>
<a id="tocSlistintegrationassociationsresponse"></a>
<a id="tocslistintegrationassociationsresponse"></a>

```json
{
  "IntegrationAssociationSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IntegrationAssociationSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLambdaFunctionsResponse">ListLambdaFunctionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlambdafunctionsresponse"></a>
<a id="schema_ListLambdaFunctionsResponse"></a>
<a id="tocSlistlambdafunctionsresponse"></a>
<a id="tocslistlambdafunctionsresponse"></a>

```json
{
  "LambdaFunctions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LambdaFunctions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLexBotsResponse">ListLexBotsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlexbotsresponse"></a>
<a id="schema_ListLexBotsResponse"></a>
<a id="tocSlistlexbotsresponse"></a>
<a id="tocslistlexbotsresponse"></a>

```json
{
  "LexBots": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LexBots|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPhoneNumbersResponse">ListPhoneNumbersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistphonenumbersresponse"></a>
<a id="schema_ListPhoneNumbersResponse"></a>
<a id="tocSlistphonenumbersresponse"></a>
<a id="tocslistphonenumbersresponse"></a>

```json
{
  "PhoneNumberSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PhoneNumberType">PhoneNumberType</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbertype"></a>
<a id="schema_PhoneNumberType"></a>
<a id="tocSphonenumbertype"></a>
<a id="tocsphonenumbertype"></a>

```json
"TOLL_FREE"
```

<h2 id="tocS_PhoneNumberCountryCode">PhoneNumberCountryCode</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbercountrycode"></a>
<a id="schema_PhoneNumberCountryCode"></a>
<a id="tocSphonenumbercountrycode"></a>
<a id="tocsphonenumbercountrycode"></a>

```json
"AF"
```

<h2 id="tocS_ListPhoneNumbersV2Response">ListPhoneNumbersV2Response</h2>
<!-- backwards compatibility -->
<a id="schemalistphonenumbersv2response"></a>
<a id="schema_ListPhoneNumbersV2Response"></a>
<a id="tocSlistphonenumbersv2response"></a>
<a id="tocslistphonenumbersv2response"></a>

```json
{
  "NextToken": {},
  "ListPhoneNumbersSummaryList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|ListPhoneNumbersSummaryList|object|false|none|none|

<h2 id="tocS_ListPromptsResponse">ListPromptsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpromptsresponse"></a>
<a id="schema_ListPromptsResponse"></a>
<a id="tocSlistpromptsresponse"></a>
<a id="tocslistpromptsresponse"></a>

```json
{
  "PromptSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PromptSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListQueueQuickConnectsResponse">ListQueueQuickConnectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistqueuequickconnectsresponse"></a>
<a id="schema_ListQueueQuickConnectsResponse"></a>
<a id="tocSlistqueuequickconnectsresponse"></a>
<a id="tocslistqueuequickconnectsresponse"></a>

```json
{
  "NextToken": {},
  "QuickConnectSummaryList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|QuickConnectSummaryList|object|false|none|none|

<h2 id="tocS_ListQueuesResponse">ListQueuesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistqueuesresponse"></a>
<a id="schema_ListQueuesResponse"></a>
<a id="tocSlistqueuesresponse"></a>
<a id="tocslistqueuesresponse"></a>

```json
{
  "QueueSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_QueueType">QueueType</h2>
<!-- backwards compatibility -->
<a id="schemaqueuetype"></a>
<a id="schema_QueueType"></a>
<a id="tocSqueuetype"></a>
<a id="tocsqueuetype"></a>

```json
"STANDARD"
```

<h2 id="tocS_ListQuickConnectsResponse">ListQuickConnectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistquickconnectsresponse"></a>
<a id="schema_ListQuickConnectsResponse"></a>
<a id="tocSlistquickconnectsresponse"></a>
<a id="tocslistquickconnectsresponse"></a>

```json
{
  "QuickConnectSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuickConnectSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRoutingProfileQueuesResponse">ListRoutingProfileQueuesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistroutingprofilequeuesresponse"></a>
<a id="schema_ListRoutingProfileQueuesResponse"></a>
<a id="tocSlistroutingprofilequeuesresponse"></a>
<a id="tocslistroutingprofilequeuesresponse"></a>

```json
{
  "NextToken": {},
  "RoutingProfileQueueConfigSummaryList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|RoutingProfileQueueConfigSummaryList|object|false|none|none|

<h2 id="tocS_ListRoutingProfilesResponse">ListRoutingProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistroutingprofilesresponse"></a>
<a id="schema_ListRoutingProfilesResponse"></a>
<a id="tocSlistroutingprofilesresponse"></a>
<a id="tocslistroutingprofilesresponse"></a>

```json
{
  "RoutingProfileSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoutingProfileSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRulesResponse">ListRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrulesresponse"></a>
<a id="schema_ListRulesResponse"></a>
<a id="tocSlistrulesresponse"></a>
<a id="tocslistrulesresponse"></a>

```json
{
  "RuleSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSummaryList|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSecurityKeysResponse">ListSecurityKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsecuritykeysresponse"></a>
<a id="schema_ListSecurityKeysResponse"></a>
<a id="tocSlistsecuritykeysresponse"></a>
<a id="tocslistsecuritykeysresponse"></a>

```json
{
  "SecurityKeys": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityKeys|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSecurityProfilePermissionsResponse">ListSecurityProfilePermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsecurityprofilepermissionsresponse"></a>
<a id="schema_ListSecurityProfilePermissionsResponse"></a>
<a id="tocSlistsecurityprofilepermissionsresponse"></a>
<a id="tocslistsecurityprofilepermissionsresponse"></a>

```json
{
  "Permissions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Permissions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSecurityProfilesResponse">ListSecurityProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsecurityprofilesresponse"></a>
<a id="schema_ListSecurityProfilesResponse"></a>
<a id="tocSlistsecurityprofilesresponse"></a>
<a id="tocslistsecurityprofilesresponse"></a>

```json
{
  "SecurityProfileSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityProfileSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_ListTaskTemplatesResponse">ListTaskTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttasktemplatesresponse"></a>
<a id="schema_ListTaskTemplatesResponse"></a>
<a id="tocSlisttasktemplatesresponse"></a>
<a id="tocslisttasktemplatesresponse"></a>

```json
{
  "TaskTemplates": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskTemplates|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTrafficDistributionGroupsResponse">ListTrafficDistributionGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttrafficdistributiongroupsresponse"></a>
<a id="schema_ListTrafficDistributionGroupsResponse"></a>
<a id="tocSlisttrafficdistributiongroupsresponse"></a>
<a id="tocslisttrafficdistributiongroupsresponse"></a>

```json
{
  "NextToken": {},
  "TrafficDistributionGroupSummaryList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|TrafficDistributionGroupSummaryList|object|false|none|none|

<h2 id="tocS_ListUseCasesResponse">ListUseCasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusecasesresponse"></a>
<a id="schema_ListUseCasesResponse"></a>
<a id="tocSlistusecasesresponse"></a>
<a id="tocslistusecasesresponse"></a>

```json
{
  "UseCaseSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UseCaseSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListUserHierarchyGroupsResponse">ListUserHierarchyGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistuserhierarchygroupsresponse"></a>
<a id="schema_ListUserHierarchyGroupsResponse"></a>
<a id="tocSlistuserhierarchygroupsresponse"></a>
<a id="tocslistuserhierarchygroupsresponse"></a>

```json
{
  "UserHierarchyGroupSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserHierarchyGroupSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListUsersResponse">ListUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusersresponse"></a>
<a id="schema_ListUsersResponse"></a>
<a id="tocSlistusersresponse"></a>
<a id="tocslistusersresponse"></a>

```json
{
  "UserSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_MonitorContactResponse">MonitorContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemamonitorcontactresponse"></a>
<a id="schema_MonitorContactResponse"></a>
<a id="tocSmonitorcontactresponse"></a>
<a id="tocsmonitorcontactresponse"></a>

```json
{
  "ContactId": {},
  "ContactArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|false|none|none|
|ContactArn|object|false|none|none|

<h2 id="tocS_MonitorCapability">MonitorCapability</h2>
<!-- backwards compatibility -->
<a id="schemamonitorcapability"></a>
<a id="schema_MonitorCapability"></a>
<a id="tocSmonitorcapability"></a>
<a id="tocsmonitorcapability"></a>

```json
"SILENT_MONITOR"
```

<h2 id="tocS_PutUserStatusResponse">PutUserStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputuserstatusresponse"></a>
<a id="schema_PutUserStatusResponse"></a>
<a id="tocSputuserstatusresponse"></a>
<a id="tocsputuserstatusresponse"></a>

```json
{}
```

<h2 id="tocS_ReplicateInstanceResponse">ReplicateInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemareplicateinstanceresponse"></a>
<a id="schema_ReplicateInstanceResponse"></a>
<a id="tocSreplicateinstanceresponse"></a>
<a id="tocsreplicateinstanceresponse"></a>

```json
{
  "Id": {},
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_ResumeContactRecordingResponse">ResumeContactRecordingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresumecontactrecordingresponse"></a>
<a id="schema_ResumeContactRecordingResponse"></a>
<a id="tocSresumecontactrecordingresponse"></a>
<a id="tocsresumecontactrecordingresponse"></a>

```json
{}
```

<h2 id="tocS_SearchAvailablePhoneNumbersResponse">SearchAvailablePhoneNumbersResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchavailablephonenumbersresponse"></a>
<a id="schema_SearchAvailablePhoneNumbersResponse"></a>
<a id="tocSsearchavailablephonenumbersresponse"></a>
<a id="tocssearchavailablephonenumbersresponse"></a>

```json
{
  "NextToken": {},
  "AvailableNumbersList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|AvailableNumbersList|object|false|none|none|

<h2 id="tocS_SearchQueuesResponse">SearchQueuesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchqueuesresponse"></a>
<a id="schema_SearchQueuesResponse"></a>
<a id="tocSsearchqueuesresponse"></a>
<a id="tocssearchqueuesresponse"></a>

```json
{
  "Queues": {},
  "NextToken": {},
  "ApproximateTotalCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Queues|object|false|none|none|
|NextToken|object|false|none|none|
|ApproximateTotalCount|object|false|none|none|

<h2 id="tocS_ControlPlaneTagFilter">ControlPlaneTagFilter</h2>
<!-- backwards compatibility -->
<a id="schemacontrolplanetagfilter"></a>
<a id="schema_ControlPlaneTagFilter"></a>
<a id="tocScontrolplanetagfilter"></a>
<a id="tocscontrolplanetagfilter"></a>

```json
{
  "OrConditions": {},
  "AndConditions": {},
  "TagCondition": {
    "TagKey": {},
    "TagValue": {}
  }
}
```

<p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrConditions|object|false|none|none|
|AndConditions|object|false|none|none|
|TagCondition|object|false|none|none|

<h2 id="tocS_QueueSearchConditionList">QueueSearchConditionList</h2>
<!-- backwards compatibility -->
<a id="schemaqueuesearchconditionlist"></a>
<a id="schema_QueueSearchConditionList"></a>
<a id="tocSqueuesearchconditionlist"></a>
<a id="tocsqueuesearchconditionlist"></a>

```json
[
  {
    "OrConditions": {},
    "AndConditions": {},
    "StringCondition": {
      "FieldName": {},
      "Value": {},
      "ComparisonType": {}
    },
    "QueueTypeCondition": {}
  }
]
```

<h2 id="tocS_StringCondition">StringCondition</h2>
<!-- backwards compatibility -->
<a id="schemastringcondition"></a>
<a id="schema_StringCondition"></a>
<a id="tocSstringcondition"></a>
<a id="tocsstringcondition"></a>

```json
{
  "FieldName": {},
  "Value": {},
  "ComparisonType": {}
}
```

<p>A leaf node condition which can be used to specify a string condition. </p> <note> <p>The currently supported value for <code>FieldName</code>: <code>name</code> </p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldName|object|false|none|none|
|Value|object|false|none|none|
|ComparisonType|object|false|none|none|

<h2 id="tocS_SearchableQueueType">SearchableQueueType</h2>
<!-- backwards compatibility -->
<a id="schemasearchablequeuetype"></a>
<a id="schema_SearchableQueueType"></a>
<a id="tocSsearchablequeuetype"></a>
<a id="tocssearchablequeuetype"></a>

```json
"STANDARD"
```

<h2 id="tocS_SearchRoutingProfilesResponse">SearchRoutingProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchroutingprofilesresponse"></a>
<a id="schema_SearchRoutingProfilesResponse"></a>
<a id="tocSsearchroutingprofilesresponse"></a>
<a id="tocssearchroutingprofilesresponse"></a>

```json
{
  "RoutingProfiles": {},
  "NextToken": {},
  "ApproximateTotalCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoutingProfiles|object|false|none|none|
|NextToken|object|false|none|none|
|ApproximateTotalCount|object|false|none|none|

<h2 id="tocS_RoutingProfileSearchConditionList">RoutingProfileSearchConditionList</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofilesearchconditionlist"></a>
<a id="schema_RoutingProfileSearchConditionList"></a>
<a id="tocSroutingprofilesearchconditionlist"></a>
<a id="tocsroutingprofilesearchconditionlist"></a>

```json
[
  {
    "OrConditions": {},
    "AndConditions": {},
    "StringCondition": {
      "FieldName": {},
      "Value": {},
      "ComparisonType": {}
    }
  }
]
```

<h2 id="tocS_SearchSecurityProfilesResponse">SearchSecurityProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchsecurityprofilesresponse"></a>
<a id="schema_SearchSecurityProfilesResponse"></a>
<a id="tocSsearchsecurityprofilesresponse"></a>
<a id="tocssearchsecurityprofilesresponse"></a>

```json
{
  "SecurityProfiles": {},
  "NextToken": {},
  "ApproximateTotalCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityProfiles|object|false|none|none|
|NextToken|object|false|none|none|
|ApproximateTotalCount|object|false|none|none|

<h2 id="tocS_SecurityProfileSearchConditionList">SecurityProfileSearchConditionList</h2>
<!-- backwards compatibility -->
<a id="schemasecurityprofilesearchconditionlist"></a>
<a id="schema_SecurityProfileSearchConditionList"></a>
<a id="tocSsecurityprofilesearchconditionlist"></a>
<a id="tocssecurityprofilesearchconditionlist"></a>

```json
[
  {
    "OrConditions": {},
    "AndConditions": {},
    "StringCondition": {
      "FieldName": {},
      "Value": {},
      "ComparisonType": {}
    }
  }
]
```

<h2 id="tocS_SearchUsersResponse">SearchUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchusersresponse"></a>
<a id="schema_SearchUsersResponse"></a>
<a id="tocSsearchusersresponse"></a>
<a id="tocssearchusersresponse"></a>

```json
{
  "Users": {},
  "NextToken": {},
  "ApproximateTotalCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Users|object|false|none|none|
|NextToken|object|false|none|none|
|ApproximateTotalCount|object|false|none|none|

<h2 id="tocS_UserSearchConditionList">UserSearchConditionList</h2>
<!-- backwards compatibility -->
<a id="schemausersearchconditionlist"></a>
<a id="schema_UserSearchConditionList"></a>
<a id="tocSusersearchconditionlist"></a>
<a id="tocsusersearchconditionlist"></a>

```json
[
  {
    "OrConditions": {},
    "AndConditions": {},
    "StringCondition": {
      "FieldName": {},
      "Value": {},
      "ComparisonType": {}
    },
    "HierarchyGroupCondition": {
      "Value": {},
      "HierarchyGroupMatchType": {}
    }
  }
]
```

<h2 id="tocS_HierarchyGroupCondition">HierarchyGroupCondition</h2>
<!-- backwards compatibility -->
<a id="schemahierarchygroupcondition"></a>
<a id="schema_HierarchyGroupCondition"></a>
<a id="tocShierarchygroupcondition"></a>
<a id="tocshierarchygroupcondition"></a>

```json
{
  "Value": {},
  "HierarchyGroupMatchType": {}
}
```

A leaf node condition which can be used to specify a hierarchy group condition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|HierarchyGroupMatchType|object|false|none|none|

<h2 id="tocS_SearchVocabulariesResponse">SearchVocabulariesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchvocabulariesresponse"></a>
<a id="schema_SearchVocabulariesResponse"></a>
<a id="tocSsearchvocabulariesresponse"></a>
<a id="tocssearchvocabulariesresponse"></a>

```json
{
  "VocabularySummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularySummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_StartChatContactResponse">StartChatContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartchatcontactresponse"></a>
<a id="schema_StartChatContactResponse"></a>
<a id="tocSstartchatcontactresponse"></a>
<a id="tocsstartchatcontactresponse"></a>

```json
{
  "ContactId": {},
  "ParticipantId": {},
  "ParticipantToken": {},
  "ContinuedFromContactId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|false|none|none|
|ParticipantId|object|false|none|none|
|ParticipantToken|object|false|none|none|
|ContinuedFromContactId|object|false|none|none|

<h2 id="tocS_AttributeValue">AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_AttributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
"string"
```

<h2 id="tocS_ChatContentType">ChatContentType</h2>
<!-- backwards compatibility -->
<a id="schemachatcontenttype"></a>
<a id="schema_ChatContentType"></a>
<a id="tocSchatcontenttype"></a>
<a id="tocschatcontenttype"></a>

```json
"string"
```

<h2 id="tocS_ChatContent">ChatContent</h2>
<!-- backwards compatibility -->
<a id="schemachatcontent"></a>
<a id="schema_ChatContent"></a>
<a id="tocSchatcontent"></a>
<a id="tocschatcontent"></a>

```json
"string"
```

<h2 id="tocS_SupportedMessagingContentType">SupportedMessagingContentType</h2>
<!-- backwards compatibility -->
<a id="schemasupportedmessagingcontenttype"></a>
<a id="schema_SupportedMessagingContentType"></a>
<a id="tocSsupportedmessagingcontenttype"></a>
<a id="tocssupportedmessagingcontenttype"></a>

```json
"string"
```

<h2 id="tocS_RehydrationType">RehydrationType</h2>
<!-- backwards compatibility -->
<a id="schemarehydrationtype"></a>
<a id="schema_RehydrationType"></a>
<a id="tocSrehydrationtype"></a>
<a id="tocsrehydrationtype"></a>

```json
"ENTIRE_PAST_SESSION"
```

<h2 id="tocS_ContactId">ContactId</h2>
<!-- backwards compatibility -->
<a id="schemacontactid"></a>
<a id="schema_ContactId"></a>
<a id="tocScontactid"></a>
<a id="tocscontactid"></a>

```json
"string"
```

<h2 id="tocS_StartContactRecordingResponse">StartContactRecordingResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartcontactrecordingresponse"></a>
<a id="schema_StartContactRecordingResponse"></a>
<a id="tocSstartcontactrecordingresponse"></a>
<a id="tocsstartcontactrecordingresponse"></a>

```json
{}
```

<h2 id="tocS_VoiceRecordingTrack">VoiceRecordingTrack</h2>
<!-- backwards compatibility -->
<a id="schemavoicerecordingtrack"></a>
<a id="schema_VoiceRecordingTrack"></a>
<a id="tocSvoicerecordingtrack"></a>
<a id="tocsvoicerecordingtrack"></a>

```json
"FROM_AGENT"
```

<h2 id="tocS_StartContactStreamingResponse">StartContactStreamingResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartcontactstreamingresponse"></a>
<a id="schema_StartContactStreamingResponse"></a>
<a id="tocSstartcontactstreamingresponse"></a>
<a id="tocsstartcontactstreamingresponse"></a>

```json
{
  "StreamingId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingId|object|true|none|none|

<h2 id="tocS_ChatStreamingEndpointARN">ChatStreamingEndpointARN</h2>
<!-- backwards compatibility -->
<a id="schemachatstreamingendpointarn"></a>
<a id="schema_ChatStreamingEndpointARN"></a>
<a id="tocSchatstreamingendpointarn"></a>
<a id="tocschatstreamingendpointarn"></a>

```json
"string"
```

<h2 id="tocS_StartOutboundVoiceContactResponse">StartOutboundVoiceContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartoutboundvoicecontactresponse"></a>
<a id="schema_StartOutboundVoiceContactResponse"></a>
<a id="tocSstartoutboundvoicecontactresponse"></a>
<a id="tocsstartoutboundvoicecontactresponse"></a>

```json
{
  "ContactId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_DestinationNotAllowedException">DestinationNotAllowedException</h2>
<!-- backwards compatibility -->
<a id="schemadestinationnotallowedexception"></a>
<a id="schema_DestinationNotAllowedException"></a>
<a id="tocSdestinationnotallowedexception"></a>
<a id="tocsdestinationnotallowedexception"></a>

```json
null
```

<h2 id="tocS_OutboundContactNotPermittedException">OutboundContactNotPermittedException</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundcontactnotpermittedexception"></a>
<a id="schema_OutboundContactNotPermittedException"></a>
<a id="tocSoutboundcontactnotpermittedexception"></a>
<a id="tocsoutboundcontactnotpermittedexception"></a>

```json
null
```

<h2 id="tocS_StartTaskContactResponse">StartTaskContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemastarttaskcontactresponse"></a>
<a id="schema_StartTaskContactResponse"></a>
<a id="tocSstarttaskcontactresponse"></a>
<a id="tocsstarttaskcontactresponse"></a>

```json
{
  "ContactId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|false|none|none|

<h2 id="tocS_Reference">Reference</h2>
<!-- backwards compatibility -->
<a id="schemareference"></a>
<a id="schema_Reference"></a>
<a id="tocSreference"></a>
<a id="tocsreference"></a>

```json
{
  "Value": {},
  "Type": {}
}
```

Well-formed data on a contact, used by agents to complete a contact request. You can have up to 4,096 UTF-8 bytes across all references for a contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_StopContactResponse">StopContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopcontactresponse"></a>
<a id="schema_StopContactResponse"></a>
<a id="tocSstopcontactresponse"></a>
<a id="tocsstopcontactresponse"></a>

```json
{}
```

<h2 id="tocS_ContactNotFoundException">ContactNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemacontactnotfoundexception"></a>
<a id="schema_ContactNotFoundException"></a>
<a id="tocScontactnotfoundexception"></a>
<a id="tocscontactnotfoundexception"></a>

```json
null
```

<h2 id="tocS_StopContactRecordingResponse">StopContactRecordingResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopcontactrecordingresponse"></a>
<a id="schema_StopContactRecordingResponse"></a>
<a id="tocSstopcontactrecordingresponse"></a>
<a id="tocsstopcontactrecordingresponse"></a>

```json
{}
```

<h2 id="tocS_StopContactStreamingResponse">StopContactStreamingResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopcontactstreamingresponse"></a>
<a id="schema_StopContactStreamingResponse"></a>
<a id="tocSstopcontactstreamingresponse"></a>
<a id="tocsstopcontactstreamingresponse"></a>

```json
{}
```

<h2 id="tocS_SuspendContactRecordingResponse">SuspendContactRecordingResponse</h2>
<!-- backwards compatibility -->
<a id="schemasuspendcontactrecordingresponse"></a>
<a id="schema_SuspendContactRecordingResponse"></a>
<a id="tocSsuspendcontactrecordingresponse"></a>
<a id="tocssuspendcontactrecordingresponse"></a>

```json
{}
```

<h2 id="tocS_TransferContactResponse">TransferContactResponse</h2>
<!-- backwards compatibility -->
<a id="schematransfercontactresponse"></a>
<a id="schema_TransferContactResponse"></a>
<a id="tocStransfercontactresponse"></a>
<a id="tocstransfercontactresponse"></a>

```json
{
  "ContactId": {},
  "ContactArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|false|none|none|
|ContactArn|object|false|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_UpdateContactResponse">UpdateContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactresponse"></a>
<a id="schema_UpdateContactResponse"></a>
<a id="tocSupdatecontactresponse"></a>
<a id="tocsupdatecontactresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateContactAttributesResponse">UpdateContactAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactattributesresponse"></a>
<a id="schema_UpdateContactAttributesResponse"></a>
<a id="tocSupdatecontactattributesresponse"></a>
<a id="tocsupdatecontactattributesresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateContactFlowContentResponse">UpdateContactFlowContentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactflowcontentresponse"></a>
<a id="schema_UpdateContactFlowContentResponse"></a>
<a id="tocSupdatecontactflowcontentresponse"></a>
<a id="tocsupdatecontactflowcontentresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateContactFlowMetadataResponse">UpdateContactFlowMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactflowmetadataresponse"></a>
<a id="schema_UpdateContactFlowMetadataResponse"></a>
<a id="tocSupdatecontactflowmetadataresponse"></a>
<a id="tocsupdatecontactflowmetadataresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateContactFlowModuleContentResponse">UpdateContactFlowModuleContentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactflowmodulecontentresponse"></a>
<a id="schema_UpdateContactFlowModuleContentResponse"></a>
<a id="tocSupdatecontactflowmodulecontentresponse"></a>
<a id="tocsupdatecontactflowmodulecontentresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateContactFlowModuleMetadataResponse">UpdateContactFlowModuleMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactflowmodulemetadataresponse"></a>
<a id="schema_UpdateContactFlowModuleMetadataResponse"></a>
<a id="tocSupdatecontactflowmodulemetadataresponse"></a>
<a id="tocsupdatecontactflowmodulemetadataresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateContactFlowNameResponse">UpdateContactFlowNameResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactflownameresponse"></a>
<a id="schema_UpdateContactFlowNameResponse"></a>
<a id="tocSupdatecontactflownameresponse"></a>
<a id="tocsupdatecontactflownameresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateContactScheduleResponse">UpdateContactScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactscheduleresponse"></a>
<a id="schema_UpdateContactScheduleResponse"></a>
<a id="tocSupdatecontactscheduleresponse"></a>
<a id="tocsupdatecontactscheduleresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateParticipantRoleConfigResponse">UpdateParticipantRoleConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateparticipantroleconfigresponse"></a>
<a id="schema_UpdateParticipantRoleConfigResponse"></a>
<a id="tocSupdateparticipantroleconfigresponse"></a>
<a id="tocsupdateparticipantroleconfigresponse"></a>

```json
{}
```

<h2 id="tocS_ChatParticipantRoleConfig">ChatParticipantRoleConfig</h2>
<!-- backwards compatibility -->
<a id="schemachatparticipantroleconfig"></a>
<a id="schema_ChatParticipantRoleConfig"></a>
<a id="tocSchatparticipantroleconfig"></a>
<a id="tocschatparticipantroleconfig"></a>

```json
{
  "ParticipantTimerConfigList": {}
}
```

Configuration information for the chat participant role.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParticipantTimerConfigList|object|true|none|none|

<h2 id="tocS_UpdatePhoneNumberResponse">UpdatePhoneNumberResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatephonenumberresponse"></a>
<a id="schema_UpdatePhoneNumberResponse"></a>
<a id="tocSupdatephonenumberresponse"></a>
<a id="tocsupdatephonenumberresponse"></a>

```json
{
  "PhoneNumberId": {},
  "PhoneNumberArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberId|object|false|none|none|
|PhoneNumberArn|object|false|none|none|

<h2 id="tocS_UpdateTaskTemplateResponse">UpdateTaskTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetasktemplateresponse"></a>
<a id="schema_UpdateTaskTemplateResponse"></a>
<a id="tocSupdatetasktemplateresponse"></a>
<a id="tocsupdatetasktemplateresponse"></a>

```json
{
  "InstanceId": {},
  "Id": {},
  "Arn": {},
  "Name": {},
  "Description": {},
  "ContactFlowId": {},
  "Constraints": {
    "RequiredFields": {},
    "ReadOnlyFields": {},
    "InvisibleFields": {}
  },
  "Defaults": {
    "DefaultFieldValues": {}
  },
  "Fields": {},
  "Status": {},
  "LastModifiedTime": {},
  "CreatedTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|ContactFlowId|object|false|none|none|
|Constraints|object|false|none|none|
|Defaults|object|false|none|none|
|Fields|object|false|none|none|
|Status|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|CreatedTime|object|false|none|none|

<h2 id="tocS_UpdateTrafficDistributionResponse">UpdateTrafficDistributionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetrafficdistributionresponse"></a>
<a id="schema_UpdateTrafficDistributionResponse"></a>
<a id="tocSupdatetrafficdistributionresponse"></a>
<a id="tocsupdatetrafficdistributionresponse"></a>

```json
{}
```

<h2 id="tocS_DistributionList">DistributionList</h2>
<!-- backwards compatibility -->
<a id="schemadistributionlist"></a>
<a id="schema_DistributionList"></a>
<a id="tocSdistributionlist"></a>
<a id="tocsdistributionlist"></a>

```json
[
  {
    "Region": {},
    "Percentage": {}
  }
]
```

<h2 id="tocS_HierarchyLevelUpdate">HierarchyLevelUpdate</h2>
<!-- backwards compatibility -->
<a id="schemahierarchylevelupdate"></a>
<a id="schema_HierarchyLevelUpdate"></a>
<a id="tocShierarchylevelupdate"></a>
<a id="tocshierarchylevelupdate"></a>

```json
{
  "Name": {}
}
```

Contains information about the hierarchy level to update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_ARN">ARN</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_ARN"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_ActionSummary">ActionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaactionsummary"></a>
<a id="schema_ActionSummary"></a>
<a id="tocSactionsummary"></a>
<a id="tocsactionsummary"></a>

```json
{
  "ActionType": {}
}
```

Information about an action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionType|object|true|none|none|

<h2 id="tocS_ActionSummaries">ActionSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaactionsummaries"></a>
<a id="schema_ActionSummaries"></a>
<a id="tocSactionsummaries"></a>
<a id="tocsactionsummaries"></a>

```json
[
  {
    "ActionType": {}
  }
]
```

<h2 id="tocS_ActionType">ActionType</h2>
<!-- backwards compatibility -->
<a id="schemaactiontype"></a>
<a id="schema_ActionType"></a>
<a id="tocSactiontype"></a>
<a id="tocsactiontype"></a>

```json
"CREATE_TASK"
```

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
"VOICE"
```

<h2 id="tocS_ContactInitiationMethod">ContactInitiationMethod</h2>
<!-- backwards compatibility -->
<a id="schemacontactinitiationmethod"></a>
<a id="schema_ContactInitiationMethod"></a>
<a id="tocScontactinitiationmethod"></a>
<a id="tocscontactinitiationmethod"></a>

```json
"INBOUND"
```

<h2 id="tocS_ContactState">ContactState</h2>
<!-- backwards compatibility -->
<a id="schemacontactstate"></a>
<a id="schema_ContactState"></a>
<a id="tocScontactstate"></a>
<a id="tocscontactstate"></a>

```json
"INCOMING"
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

<h2 id="tocS_QueueReference">QueueReference</h2>
<!-- backwards compatibility -->
<a id="schemaqueuereference"></a>
<a id="schema_QueueReference"></a>
<a id="tocSqueuereference"></a>
<a id="tocsqueuereference"></a>

```json
{
  "Id": {},
  "Arn": {}
}
```

Contains information about a queue resource for which metrics are returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_AgentContactReference">AgentContactReference</h2>
<!-- backwards compatibility -->
<a id="schemaagentcontactreference"></a>
<a id="schema_AgentContactReference"></a>
<a id="tocSagentcontactreference"></a>
<a id="tocsagentcontactreference"></a>

```json
{
  "ContactId": {},
  "Channel": {},
  "InitiationMethod": {},
  "AgentContactState": {},
  "StateStartTimestamp": {},
  "ConnectedToAgentTimestamp": {},
  "Queue": {
    "Id": {},
    "Arn": {}
  }
}
```

Information about the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Contact.html">contact</a> associated to the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|false|none|none|
|Channel|object|false|none|none|
|InitiationMethod|object|false|none|none|
|AgentContactState|object|false|none|none|
|StateStartTimestamp|object|false|none|none|
|ConnectedToAgentTimestamp|object|false|none|none|
|Queue|[QueueReference](#schemaqueuereference)|false|none|Contains information about a queue resource for which metrics are returned.|

<h2 id="tocS_AgentContactReferenceList">AgentContactReferenceList</h2>
<!-- backwards compatibility -->
<a id="schemaagentcontactreferencelist"></a>
<a id="schema_AgentContactReferenceList"></a>
<a id="tocSagentcontactreferencelist"></a>
<a id="tocsagentcontactreferencelist"></a>

```json
[
  {
    "ContactId": {},
    "Channel": {},
    "InitiationMethod": {},
    "AgentContactState": {},
    "StateStartTimestamp": {},
    "ConnectedToAgentTimestamp": {},
    "Queue": {
      "Id": {},
      "Arn": {}
    }
  }
]
```

<h2 id="tocS_AgentResourceId">AgentResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaagentresourceid"></a>
<a id="schema_AgentResourceId"></a>
<a id="tocSagentresourceid"></a>
<a id="tocsagentresourceid"></a>

```json
"string"
```

<h2 id="tocS_timestamp">timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp-1"></a>
<a id="schema_timestamp"></a>
<a id="tocStimestamp-1"></a>
<a id="tocstimestamp-1"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_AgentInfo">AgentInfo</h2>
<!-- backwards compatibility -->
<a id="schemaagentinfo"></a>
<a id="schema_AgentInfo"></a>
<a id="tocSagentinfo"></a>
<a id="tocsagentinfo"></a>

```json
{
  "Id": {},
  "ConnectedToAgentTimestamp": {}
}
```

Information about the agent who accepted the contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|ConnectedToAgentTimestamp|object|false|none|none|

<h2 id="tocS_AgentStatusId">AgentStatusId</h2>
<!-- backwards compatibility -->
<a id="schemaagentstatusid"></a>
<a id="schema_AgentStatusId"></a>
<a id="tocSagentstatusid"></a>
<a id="tocsagentstatusid"></a>

```json
"string"
```

<h2 id="tocS_AgentStatusName">AgentStatusName</h2>
<!-- backwards compatibility -->
<a id="schemaagentstatusname"></a>
<a id="schema_AgentStatusName"></a>
<a id="tocSagentstatusname"></a>
<a id="tocsagentstatusname"></a>

```json
"string"
```

<h2 id="tocS_AgentStatusDescription">AgentStatusDescription</h2>
<!-- backwards compatibility -->
<a id="schemaagentstatusdescription"></a>
<a id="schema_AgentStatusDescription"></a>
<a id="tocSagentstatusdescription"></a>
<a id="tocsagentstatusdescription"></a>

```json
"string"
```

<h2 id="tocS_AgentStatusOrderNumber">AgentStatusOrderNumber</h2>
<!-- backwards compatibility -->
<a id="schemaagentstatusordernumber"></a>
<a id="schema_AgentStatusOrderNumber"></a>
<a id="tocSagentstatusordernumber"></a>
<a id="tocsagentstatusordernumber"></a>

```json
1
```

<h2 id="tocS_AgentStatusState">AgentStatusState</h2>
<!-- backwards compatibility -->
<a id="schemaagentstatusstate"></a>
<a id="schema_AgentStatusState"></a>
<a id="tocSagentstatusstate"></a>
<a id="tocsagentstatusstate"></a>

```json
"ENABLED"
```

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_AgentStatus">AgentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaagentstatus"></a>
<a id="schema_AgentStatus"></a>
<a id="tocSagentstatus"></a>
<a id="tocsagentstatus"></a>

```json
{
  "AgentStatusARN": {},
  "AgentStatusId": {},
  "Name": {},
  "Description": {},
  "Type": {},
  "DisplayOrder": {},
  "State": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains information about an agent status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgentStatusARN|object|false|none|none|
|AgentStatusId|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Type|object|false|none|none|
|DisplayOrder|object|false|none|none|
|State|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_AgentStatusReference">AgentStatusReference</h2>
<!-- backwards compatibility -->
<a id="schemaagentstatusreference"></a>
<a id="schema_AgentStatusReference"></a>
<a id="tocSagentstatusreference"></a>
<a id="tocsagentstatusreference"></a>

```json
{
  "StatusStartTimestamp": {},
  "StatusArn": {},
  "StatusName": {}
}
```

Information about the agent's status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatusStartTimestamp|object|false|none|none|
|StatusArn|object|false|none|none|
|StatusName|object|false|none|none|

<h2 id="tocS_AgentStatusSummary">AgentStatusSummary</h2>
<!-- backwards compatibility -->
<a id="schemaagentstatussummary"></a>
<a id="schema_AgentStatusSummary"></a>
<a id="tocSagentstatussummary"></a>
<a id="tocsagentstatussummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "Type": {}
}
```

Summary information for an agent status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_AgentStatusSummaryList">AgentStatusSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaagentstatussummarylist"></a>
<a id="schema_AgentStatusSummaryList"></a>
<a id="tocSagentstatussummarylist"></a>
<a id="tocsagentstatussummarylist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Type": {}
  }
]
```

<h2 id="tocS_AgentStatusTypes">AgentStatusTypes</h2>
<!-- backwards compatibility -->
<a id="schemaagentstatustypes"></a>
<a id="schema_AgentStatusTypes"></a>
<a id="tocSagentstatustypes"></a>
<a id="tocsagentstatustypes"></a>

```json
[
  "ROUTABLE"
]
```

<h2 id="tocS_AgentUsername">AgentUsername</h2>
<!-- backwards compatibility -->
<a id="schemaagentusername"></a>
<a id="schema_AgentUsername"></a>
<a id="tocSagentusername"></a>
<a id="tocsagentusername"></a>

```json
"string"
```

<h2 id="tocS_UserId">UserId</h2>
<!-- backwards compatibility -->
<a id="schemauserid"></a>
<a id="schema_UserId"></a>
<a id="tocSuserid"></a>
<a id="tocsuserid"></a>

```json
"string"
```

<h2 id="tocS_AllowedAccessControlTags">AllowedAccessControlTags</h2>
<!-- backwards compatibility -->
<a id="schemaallowedaccesscontroltags"></a>
<a id="schema_AllowedAccessControlTags"></a>
<a id="tocSallowedaccesscontroltags"></a>
<a id="tocsallowedaccesscontroltags"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SecurityProfilePolicyValue](#schemasecurityprofilepolicyvalue)|false|none|none|

<h2 id="tocS_AllowedMonitorCapabilities">AllowedMonitorCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemaallowedmonitorcapabilities"></a>
<a id="schema_AllowedMonitorCapabilities"></a>
<a id="tocSallowedmonitorcapabilities"></a>
<a id="tocsallowedmonitorcapabilities"></a>

```json
[
  "SILENT_MONITOR"
]
```

<h2 id="tocS_AnswerMachineDetectionConfig">AnswerMachineDetectionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaanswermachinedetectionconfig"></a>
<a id="schema_AnswerMachineDetectionConfig"></a>
<a id="tocSanswermachinedetectionconfig"></a>
<a id="tocsanswermachinedetectionconfig"></a>

```json
{
  "EnableAnswerMachineDetection": {},
  "AwaitAnswerMachinePrompt": {}
}
```

Configuration of the answering machine detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnableAnswerMachineDetection|object|false|none|none|
|AwaitAnswerMachinePrompt|object|false|none|none|

<h2 id="tocS_ApproximateTotalCount">ApproximateTotalCount</h2>
<!-- backwards compatibility -->
<a id="schemaapproximatetotalcount"></a>
<a id="schema_ApproximateTotalCount"></a>
<a id="tocSapproximatetotalcount"></a>
<a id="tocsapproximatetotalcount"></a>

```json
0
```

<h2 id="tocS_AssignContactCategoryActionDefinition">AssignContactCategoryActionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaassigncontactcategoryactiondefinition"></a>
<a id="schema_AssignContactCategoryActionDefinition"></a>
<a id="tocSassigncontactcategoryactiondefinition"></a>
<a id="tocsassigncontactcategoryactiondefinition"></a>

```json
{}
```

<p>This action must be set if <code>TriggerEventSource</code> is one of the following values: <code>OnPostCallAnalysisAvailable</code> | <code>OnRealTimeCallAnalysisAvailable</code> | <code>OnPostChatAnalysisAvailable</code>. Contact is categorized using the rule name.</p> <p> <code>RuleName</code> is used as <code>ContactCategory</code>.</p>

<h2 id="tocS_InstanceId">InstanceId</h2>
<!-- backwards compatibility -->
<a id="schemainstanceid"></a>
<a id="schema_InstanceId"></a>
<a id="tocSinstanceid"></a>
<a id="tocsinstanceid"></a>

```json
"string"
```

<h2 id="tocS_Origin">Origin</h2>
<!-- backwards compatibility -->
<a id="schemaorigin"></a>
<a id="schema_Origin"></a>
<a id="tocSorigin"></a>
<a id="tocsorigin"></a>

```json
"string"
```

<h2 id="tocS_AssociateApprovedOriginRequest">AssociateApprovedOriginRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateapprovedoriginrequest"></a>
<a id="schema_AssociateApprovedOriginRequest"></a>
<a id="tocSassociateapprovedoriginrequest"></a>
<a id="tocsassociateapprovedoriginrequest"></a>

```json
{
  "Origin": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Origin|object|true|none|none|

<h2 id="tocS_LexBot">LexBot</h2>
<!-- backwards compatibility -->
<a id="schemalexbot"></a>
<a id="schema_LexBot"></a>
<a id="tocSlexbot"></a>
<a id="tocslexbot"></a>

```json
{
  "Name": {},
  "LexRegion": {}
}
```

Configuration information of an Amazon Lex bot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|LexRegion|object|true|none|none|

<h2 id="tocS_LexV2Bot">LexV2Bot</h2>
<!-- backwards compatibility -->
<a id="schemalexv2bot"></a>
<a id="schema_LexV2Bot"></a>
<a id="tocSlexv2bot"></a>
<a id="tocslexv2bot"></a>

```json
{
  "AliasArn": {}
}
```

Configuration information of an Amazon Lex V2 bot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasArn|object|false|none|none|

<h2 id="tocS_AssociateBotRequest">AssociateBotRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatebotrequest"></a>
<a id="schema_AssociateBotRequest"></a>
<a id="tocSassociatebotrequest"></a>
<a id="tocsassociatebotrequest"></a>

```json
{
  "LexBot": {
    "Name": {},
    "LexRegion": {}
  },
  "LexV2Bot": {
    "AliasArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LexBot|[LexBot](#schemalexbot)|false|none|Configuration information of an Amazon Lex bot.|
|LexV2Bot|object|false|none|none|

<h2 id="tocS_VocabularyLanguageCode">VocabularyLanguageCode</h2>
<!-- backwards compatibility -->
<a id="schemavocabularylanguagecode"></a>
<a id="schema_VocabularyLanguageCode"></a>
<a id="tocSvocabularylanguagecode"></a>
<a id="tocsvocabularylanguagecode"></a>

```json
"ar-AE"
```

<h2 id="tocS_VocabularyId">VocabularyId</h2>
<!-- backwards compatibility -->
<a id="schemavocabularyid"></a>
<a id="schema_VocabularyId"></a>
<a id="tocSvocabularyid"></a>
<a id="tocsvocabularyid"></a>

```json
"string"
```

<h2 id="tocS_AssociateDefaultVocabularyRequest">AssociateDefaultVocabularyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedefaultvocabularyrequest"></a>
<a id="schema_AssociateDefaultVocabularyRequest"></a>
<a id="tocSassociatedefaultvocabularyrequest"></a>
<a id="tocsassociatedefaultvocabularyrequest"></a>

```json
{
  "VocabularyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyId|object|false|none|none|

<h2 id="tocS_InstanceStorageResourceType">InstanceStorageResourceType</h2>
<!-- backwards compatibility -->
<a id="schemainstancestorageresourcetype"></a>
<a id="schema_InstanceStorageResourceType"></a>
<a id="tocSinstancestorageresourcetype"></a>
<a id="tocsinstancestorageresourcetype"></a>

```json
"CHAT_TRANSCRIPTS"
```

<h2 id="tocS_InstanceStorageConfig">InstanceStorageConfig</h2>
<!-- backwards compatibility -->
<a id="schemainstancestorageconfig"></a>
<a id="schema_InstanceStorageConfig"></a>
<a id="tocSinstancestorageconfig"></a>
<a id="tocsinstancestorageconfig"></a>

```json
{
  "AssociationId": {},
  "StorageType": {},
  "S3Config": {
    "BucketName": {},
    "BucketPrefix": {},
    "EncryptionConfig": {
      "EncryptionType": {},
      "KeyId": {}
    }
  },
  "KinesisVideoStreamConfig": {
    "Prefix": {},
    "RetentionPeriodHours": {},
    "EncryptionConfig": {
      "EncryptionType": {},
      "KeyId": {}
    }
  },
  "KinesisStreamConfig": {
    "StreamArn": {}
  },
  "KinesisFirehoseConfig": {
    "FirehoseArn": {}
  }
}
```

The storage configuration for the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|false|none|none|
|StorageType|object|true|none|none|
|S3Config|object|false|none|none|
|KinesisVideoStreamConfig|object|false|none|none|
|KinesisStreamConfig|object|false|none|none|
|KinesisFirehoseConfig|object|false|none|none|

<h2 id="tocS_AssociateInstanceStorageConfigRequest">AssociateInstanceStorageConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateinstancestorageconfigrequest"></a>
<a id="schema_AssociateInstanceStorageConfigRequest"></a>
<a id="tocSassociateinstancestorageconfigrequest"></a>
<a id="tocsassociateinstancestorageconfigrequest"></a>

```json
{
  "ResourceType": {},
  "StorageConfig": {
    "AssociationId": {},
    "StorageType": {},
    "S3Config": {
      "BucketName": {},
      "BucketPrefix": {},
      "EncryptionConfig": {
        "EncryptionType": {},
        "KeyId": {}
      }
    },
    "KinesisVideoStreamConfig": {
      "Prefix": {},
      "RetentionPeriodHours": {},
      "EncryptionConfig": {
        "EncryptionType": {},
        "KeyId": {}
      }
    },
    "KinesisStreamConfig": {
      "StreamArn": {}
    },
    "KinesisFirehoseConfig": {
      "FirehoseArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|true|none|none|
|StorageConfig|object|true|none|none|

<h2 id="tocS_FunctionArn">FunctionArn</h2>
<!-- backwards compatibility -->
<a id="schemafunctionarn"></a>
<a id="schema_FunctionArn"></a>
<a id="tocSfunctionarn"></a>
<a id="tocsfunctionarn"></a>

```json
"string"
```

<h2 id="tocS_AssociateLambdaFunctionRequest">AssociateLambdaFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatelambdafunctionrequest"></a>
<a id="schema_AssociateLambdaFunctionRequest"></a>
<a id="tocSassociatelambdafunctionrequest"></a>
<a id="tocsassociatelambdafunctionrequest"></a>

```json
{
  "FunctionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionArn|object|true|none|none|

<h2 id="tocS_AssociateLexBotRequest">AssociateLexBotRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatelexbotrequest"></a>
<a id="schema_AssociateLexBotRequest"></a>
<a id="tocSassociatelexbotrequest"></a>
<a id="tocsassociatelexbotrequest"></a>

```json
{
  "LexBot": {
    "Name": {},
    "LexRegion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LexBot|object|true|none|none|

<h2 id="tocS_AssociatePhoneNumberContactFlowRequest">AssociatePhoneNumberContactFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatephonenumbercontactflowrequest"></a>
<a id="schema_AssociatePhoneNumberContactFlowRequest"></a>
<a id="tocSassociatephonenumbercontactflowrequest"></a>
<a id="tocsassociatephonenumbercontactflowrequest"></a>

```json
{
  "InstanceId": {},
  "ContactFlowId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|ContactFlowId|object|true|none|none|

<h2 id="tocS_QueueId">QueueId</h2>
<!-- backwards compatibility -->
<a id="schemaqueueid"></a>
<a id="schema_QueueId"></a>
<a id="tocSqueueid"></a>
<a id="tocsqueueid"></a>

```json
"string"
```

<h2 id="tocS_QuickConnectsList">QuickConnectsList</h2>
<!-- backwards compatibility -->
<a id="schemaquickconnectslist"></a>
<a id="schema_QuickConnectsList"></a>
<a id="tocSquickconnectslist"></a>
<a id="tocsquickconnectslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AssociateQueueQuickConnectsRequest">AssociateQueueQuickConnectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatequeuequickconnectsrequest"></a>
<a id="schema_AssociateQueueQuickConnectsRequest"></a>
<a id="tocSassociatequeuequickconnectsrequest"></a>
<a id="tocsassociatequeuequickconnectsrequest"></a>

```json
{
  "QuickConnectIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuickConnectIds|object|true|none|none|

<h2 id="tocS_RoutingProfileId">RoutingProfileId</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofileid"></a>
<a id="schema_RoutingProfileId"></a>
<a id="tocSroutingprofileid"></a>
<a id="tocsroutingprofileid"></a>

```json
"string"
```

<h2 id="tocS_RoutingProfileQueueConfigList">RoutingProfileQueueConfigList</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofilequeueconfiglist"></a>
<a id="schema_RoutingProfileQueueConfigList"></a>
<a id="tocSroutingprofilequeueconfiglist"></a>
<a id="tocsroutingprofilequeueconfiglist"></a>

```json
[
  {
    "QueueReference": {
      "QueueId": {},
      "Channel": {}
    },
    "Priority": {},
    "Delay": {}
  }
]
```

<h2 id="tocS_AssociateRoutingProfileQueuesRequest">AssociateRoutingProfileQueuesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateroutingprofilequeuesrequest"></a>
<a id="schema_AssociateRoutingProfileQueuesRequest"></a>
<a id="tocSassociateroutingprofilequeuesrequest"></a>
<a id="tocsassociateroutingprofilequeuesrequest"></a>

```json
{
  "QueueConfigs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueConfigs|object|true|none|none|

<h2 id="tocS_PEM">PEM</h2>
<!-- backwards compatibility -->
<a id="schemapem"></a>
<a id="schema_PEM"></a>
<a id="tocSpem"></a>
<a id="tocspem"></a>

```json
"string"
```

<h2 id="tocS_AssociateSecurityKeyRequest">AssociateSecurityKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatesecuritykeyrequest"></a>
<a id="schema_AssociateSecurityKeyRequest"></a>
<a id="tocSassociatesecuritykeyrequest"></a>
<a id="tocsassociatesecuritykeyrequest"></a>

```json
{
  "Key": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|

<h2 id="tocS_ReferenceKey">ReferenceKey</h2>
<!-- backwards compatibility -->
<a id="schemareferencekey"></a>
<a id="schema_ReferenceKey"></a>
<a id="tocSreferencekey"></a>
<a id="tocsreferencekey"></a>

```json
"string"
```

<h2 id="tocS_ReferenceValue">ReferenceValue</h2>
<!-- backwards compatibility -->
<a id="schemareferencevalue"></a>
<a id="schema_ReferenceValue"></a>
<a id="tocSreferencevalue"></a>
<a id="tocsreferencevalue"></a>

```json
"string"
```

<h2 id="tocS_ReferenceStatus">ReferenceStatus</h2>
<!-- backwards compatibility -->
<a id="schemareferencestatus"></a>
<a id="schema_ReferenceStatus"></a>
<a id="tocSreferencestatus"></a>
<a id="tocsreferencestatus"></a>

```json
"APPROVED"
```

<h2 id="tocS_AttachmentReference">AttachmentReference</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentreference"></a>
<a id="schema_AttachmentReference"></a>
<a id="tocSattachmentreference"></a>
<a id="tocsattachmentreference"></a>

```json
{
  "Name": {},
  "Value": {},
  "Status": {}
}
```

Information about a reference when the <code>referenceType</code> is <code>ATTACHMENT</code>. Otherwise, null.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_InstanceAttributeType">InstanceAttributeType</h2>
<!-- backwards compatibility -->
<a id="schemainstanceattributetype"></a>
<a id="schema_InstanceAttributeType"></a>
<a id="tocSinstanceattributetype"></a>
<a id="tocsinstanceattributetype"></a>

```json
"INBOUND_CALLS"
```

<h2 id="tocS_InstanceAttributeValue">InstanceAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemainstanceattributevalue"></a>
<a id="schema_InstanceAttributeValue"></a>
<a id="tocSinstanceattributevalue"></a>
<a id="tocsinstanceattributevalue"></a>

```json
"string"
```

<h2 id="tocS_Attribute">Attribute</h2>
<!-- backwards compatibility -->
<a id="schemaattribute"></a>
<a id="schema_Attribute"></a>
<a id="tocSattribute"></a>
<a id="tocsattribute"></a>

```json
{
  "AttributeType": {},
  "Value": {}
}
```

A toggle for an individual feature at the instance level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeType|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_AttributeName">AttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaattributename"></a>
<a id="schema_AttributeName"></a>
<a id="tocSattributename"></a>
<a id="tocsattributename"></a>

```json
"string"
```

<h2 id="tocS_Attributes">Attributes</h2>
<!-- backwards compatibility -->
<a id="schemaattributes"></a>
<a id="schema_Attributes"></a>
<a id="tocSattributes"></a>
<a id="tocsattributes"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeValue](#schemaattributevalue)|false|none|none|

<h2 id="tocS_AttributesList">AttributesList</h2>
<!-- backwards compatibility -->
<a id="schemaattributeslist"></a>
<a id="schema_AttributesList"></a>
<a id="tocSattributeslist"></a>
<a id="tocsattributeslist"></a>

```json
[
  {
    "AttributeType": {},
    "Value": {}
  }
]
```

<h2 id="tocS_AvailableNumberSummary">AvailableNumberSummary</h2>
<!-- backwards compatibility -->
<a id="schemaavailablenumbersummary"></a>
<a id="schema_AvailableNumberSummary"></a>
<a id="tocSavailablenumbersummary"></a>
<a id="tocsavailablenumbersummary"></a>

```json
{
  "PhoneNumber": {},
  "PhoneNumberCountryCode": {},
  "PhoneNumberType": {}
}
```

Information about available phone numbers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumber|object|false|none|none|
|PhoneNumberCountryCode|object|false|none|none|
|PhoneNumberType|object|false|none|none|

<h2 id="tocS_AvailableNumbersList">AvailableNumbersList</h2>
<!-- backwards compatibility -->
<a id="schemaavailablenumberslist"></a>
<a id="schema_AvailableNumbersList"></a>
<a id="tocSavailablenumberslist"></a>
<a id="tocsavailablenumberslist"></a>

```json
[
  {
    "PhoneNumber": {},
    "PhoneNumberCountryCode": {},
    "PhoneNumberType": {}
  }
]
```

<h2 id="tocS_AwsRegion">AwsRegion</h2>
<!-- backwards compatibility -->
<a id="schemaawsregion"></a>
<a id="schema_AwsRegion"></a>
<a id="tocSawsregion"></a>
<a id="tocsawsregion"></a>

```json
"stringst"
```

<h2 id="tocS_BehaviorType">BehaviorType</h2>
<!-- backwards compatibility -->
<a id="schemabehaviortype"></a>
<a id="schema_BehaviorType"></a>
<a id="tocSbehaviortype"></a>
<a id="tocsbehaviortype"></a>

```json
"ROUTE_CURRENT_CHANNEL_ONLY"
```

<h2 id="tocS_BucketName">BucketName</h2>
<!-- backwards compatibility -->
<a id="schemabucketname"></a>
<a id="schema_BucketName"></a>
<a id="tocSbucketname"></a>
<a id="tocsbucketname"></a>

```json
"string"
```

<h2 id="tocS_CampaignId">CampaignId</h2>
<!-- backwards compatibility -->
<a id="schemacampaignid"></a>
<a id="schema_CampaignId"></a>
<a id="tocScampaignid"></a>
<a id="tocscampaignid"></a>

```json
"string"
```

<h2 id="tocS_IntegerCount">IntegerCount</h2>
<!-- backwards compatibility -->
<a id="schemaintegercount"></a>
<a id="schema_IntegerCount"></a>
<a id="tocSintegercount"></a>
<a id="tocsintegercount"></a>

```json
0
```

<h2 id="tocS_ChannelToCountMap">ChannelToCountMap</h2>
<!-- backwards compatibility -->
<a id="schemachanneltocountmap"></a>
<a id="schema_ChannelToCountMap"></a>
<a id="tocSchanneltocountmap"></a>
<a id="tocschanneltocountmap"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[IntegerCount](#schemaintegercount)|false|none|none|

<h2 id="tocS_ChatDurationInMinutes">ChatDurationInMinutes</h2>
<!-- backwards compatibility -->
<a id="schemachatdurationinminutes"></a>
<a id="schema_ChatDurationInMinutes"></a>
<a id="tocSchatdurationinminutes"></a>
<a id="tocschatdurationinminutes"></a>

```json
60
```

<h2 id="tocS_ChatMessage">ChatMessage</h2>
<!-- backwards compatibility -->
<a id="schemachatmessage"></a>
<a id="schema_ChatMessage"></a>
<a id="tocSchatmessage"></a>
<a id="tocschatmessage"></a>

```json
{
  "ContentType": {},
  "Content": {}
}
```

A chat message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentType|object|true|none|none|
|Content|object|true|none|none|

<h2 id="tocS_ParticipantTimerConfigList">ParticipantTimerConfigList</h2>
<!-- backwards compatibility -->
<a id="schemaparticipanttimerconfiglist"></a>
<a id="schema_ParticipantTimerConfigList"></a>
<a id="tocSparticipanttimerconfiglist"></a>
<a id="tocsparticipanttimerconfiglist"></a>

```json
[
  {
    "ParticipantRole": {},
    "TimerType": {},
    "TimerValue": {
      "ParticipantTimerAction": {},
      "ParticipantTimerDurationInMinutes": {}
    }
  }
]
```

<h2 id="tocS_ChatStreamingConfiguration">ChatStreamingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemachatstreamingconfiguration"></a>
<a id="schema_ChatStreamingConfiguration"></a>
<a id="tocSchatstreamingconfiguration"></a>
<a id="tocschatstreamingconfiguration"></a>

```json
{
  "StreamingEndpointArn": {}
}
```

The streaming configuration, such as the Amazon SNS streaming endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingEndpointArn|object|true|none|none|

<h2 id="tocS_PhoneNumberDescription">PhoneNumberDescription</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberdescription"></a>
<a id="schema_PhoneNumberDescription"></a>
<a id="tocSphonenumberdescription"></a>
<a id="tocsphonenumberdescription"></a>

```json
"string"
```

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_ClaimPhoneNumberRequest">ClaimPhoneNumberRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclaimphonenumberrequest"></a>
<a id="schema_ClaimPhoneNumberRequest"></a>
<a id="tocSclaimphonenumberrequest"></a>
<a id="tocsclaimphonenumberrequest"></a>

```json
{
  "TargetArn": {},
  "PhoneNumber": {},
  "PhoneNumberDescription": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetArn|object|true|none|none|
|PhoneNumber|object|true|none|none|
|PhoneNumberDescription|object|false|none|none|
|Tags|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_PhoneNumberStatus">PhoneNumberStatus</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberstatus"></a>
<a id="schema_PhoneNumberStatus"></a>
<a id="tocSphonenumberstatus"></a>
<a id="tocsphonenumberstatus"></a>

```json
{
  "Status": {},
  "Message": {}
}
```

<p>The status of the phone number.</p> <ul> <li> <p> <code>CLAIMED</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimedPhoneNumber.html">ClaimedPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation succeeded.</p> </li> <li> <p> <code>IN_PROGRESS</code> means a <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimedPhoneNumber.html">ClaimedPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation is still in progress and has not yet completed. You can call <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> at a later time to verify if the previous operation has completed.</p> </li> <li> <p> <code>FAILED</code> indicates that the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimedPhoneNumber.html">ClaimedPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation has failed. It will include a message indicating the failure reason. A common reason for a failure may be that the <code>TargetArn</code> value you are claiming or updating a phone number to has reached its limit of total claimed numbers. If you received a <code>FAILED</code> status from a <code>ClaimPhoneNumber</code> API call, you have one day to retry claiming the phone number before the number is released back to the inventory for other customers to claim.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_ClaimedPhoneNumberSummary">ClaimedPhoneNumberSummary</h2>
<!-- backwards compatibility -->
<a id="schemaclaimedphonenumbersummary"></a>
<a id="schema_ClaimedPhoneNumberSummary"></a>
<a id="tocSclaimedphonenumbersummary"></a>
<a id="tocsclaimedphonenumbersummary"></a>

```json
{
  "PhoneNumberId": {},
  "PhoneNumberArn": {},
  "PhoneNumber": {},
  "PhoneNumberCountryCode": {},
  "PhoneNumberType": {},
  "PhoneNumberDescription": {},
  "TargetArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "PhoneNumberStatus": {
    "Status": {},
    "Message": {}
  }
}
```

Information about a phone number that has been claimed to your Amazon Connect instance or traffic distribution group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberId|object|false|none|none|
|PhoneNumberArn|object|false|none|none|
|PhoneNumber|object|false|none|none|
|PhoneNumberCountryCode|object|false|none|none|
|PhoneNumberType|object|false|none|none|
|PhoneNumberDescription|object|false|none|none|
|TargetArn|object|false|none|none|
|Tags|object|false|none|none|
|PhoneNumberStatus|object|false|none|none|

<h2 id="tocS_CommonNameLength127">CommonNameLength127</h2>
<!-- backwards compatibility -->
<a id="schemacommonnamelength127"></a>
<a id="schema_CommonNameLength127"></a>
<a id="tocScommonnamelength127"></a>
<a id="tocscommonnamelength127"></a>

```json
"string"
```

<h2 id="tocS_Comparison">Comparison</h2>
<!-- backwards compatibility -->
<a id="schemacomparison"></a>
<a id="schema_Comparison"></a>
<a id="tocScomparison"></a>
<a id="tocscomparison"></a>

```json
"LT"
```

<h2 id="tocS_Concurrency">Concurrency</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrency"></a>
<a id="schema_Concurrency"></a>
<a id="tocSconcurrency"></a>
<a id="tocsconcurrency"></a>

```json
1
```

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

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

<h2 id="tocS_QueueInfo">QueueInfo</h2>
<!-- backwards compatibility -->
<a id="schemaqueueinfo"></a>
<a id="schema_QueueInfo"></a>
<a id="tocSqueueinfo"></a>
<a id="tocsqueueinfo"></a>

```json
{
  "Id": {},
  "EnqueueTimestamp": {}
}
```

If this contact was queued, this contains information about the queue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|EnqueueTimestamp|object|false|none|none|

<h2 id="tocS_WisdomInfo">WisdomInfo</h2>
<!-- backwards compatibility -->
<a id="schemawisdominfo"></a>
<a id="schema_WisdomInfo"></a>
<a id="tocSwisdominfo"></a>
<a id="tocswisdominfo"></a>

```json
{
  "SessionArn": {}
}
```

Information about Amazon Connect Wisdom.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionArn|object|false|none|none|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "Arn": {},
  "Id": {},
  "InitialContactId": {},
  "PreviousContactId": {},
  "InitiationMethod": {},
  "Name": {},
  "Description": {},
  "Channel": {},
  "QueueInfo": {
    "Id": {},
    "EnqueueTimestamp": {}
  },
  "AgentInfo": {
    "Id": {},
    "ConnectedToAgentTimestamp": {}
  },
  "InitiationTimestamp": {},
  "DisconnectTimestamp": {},
  "LastUpdateTimestamp": {},
  "ScheduledTimestamp": {},
  "RelatedContactId": {},
  "WisdomInfo": {
    "SessionArn": {}
  }
}
```

Contains information about a contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|
|InitialContactId|object|false|none|none|
|PreviousContactId|object|false|none|none|
|InitiationMethod|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Channel|object|false|none|none|
|QueueInfo|object|false|none|none|
|AgentInfo|object|false|none|none|
|InitiationTimestamp|object|false|none|none|
|DisconnectTimestamp|object|false|none|none|
|LastUpdateTimestamp|object|false|none|none|
|ScheduledTimestamp|object|false|none|none|
|RelatedContactId|object|false|none|none|
|WisdomInfo|object|false|none|none|

<h2 id="tocS_ContactStates">ContactStates</h2>
<!-- backwards compatibility -->
<a id="schemacontactstates"></a>
<a id="schema_ContactStates"></a>
<a id="tocScontactstates"></a>
<a id="tocscontactstates"></a>

```json
[
  "INCOMING"
]
```

<h2 id="tocS_ContactFlowName">ContactFlowName</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowname"></a>
<a id="schema_ContactFlowName"></a>
<a id="tocScontactflowname"></a>
<a id="tocscontactflowname"></a>

```json
"string"
```

<h2 id="tocS_ContactFlowState">ContactFlowState</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowstate"></a>
<a id="schema_ContactFlowState"></a>
<a id="tocScontactflowstate"></a>
<a id="tocscontactflowstate"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ContactFlowDescription">ContactFlowDescription</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowdescription"></a>
<a id="schema_ContactFlowDescription"></a>
<a id="tocScontactflowdescription"></a>
<a id="tocscontactflowdescription"></a>

```json
"string"
```

<h2 id="tocS_ContactFlowContent">ContactFlowContent</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowcontent"></a>
<a id="schema_ContactFlowContent"></a>
<a id="tocScontactflowcontent"></a>
<a id="tocscontactflowcontent"></a>

```json
"string"
```

<h2 id="tocS_ContactFlow">ContactFlow</h2>
<!-- backwards compatibility -->
<a id="schemacontactflow"></a>
<a id="schema_ContactFlow"></a>
<a id="tocScontactflow"></a>
<a id="tocscontactflow"></a>

```json
{
  "Arn": {},
  "Id": {},
  "Name": {},
  "Type": {},
  "State": {},
  "Description": {},
  "Content": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains information about a flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Type|object|false|none|none|
|State|object|false|none|none|
|Description|object|false|none|none|
|Content|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ContactFlowModuleId">ContactFlowModuleId</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowmoduleid"></a>
<a id="schema_ContactFlowModuleId"></a>
<a id="tocScontactflowmoduleid"></a>
<a id="tocscontactflowmoduleid"></a>

```json
"string"
```

<h2 id="tocS_ContactFlowModuleName">ContactFlowModuleName</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowmodulename"></a>
<a id="schema_ContactFlowModuleName"></a>
<a id="tocScontactflowmodulename"></a>
<a id="tocscontactflowmodulename"></a>

```json
"string"
```

<h2 id="tocS_ContactFlowModuleContent">ContactFlowModuleContent</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowmodulecontent"></a>
<a id="schema_ContactFlowModuleContent"></a>
<a id="tocScontactflowmodulecontent"></a>
<a id="tocscontactflowmodulecontent"></a>

```json
"string"
```

<h2 id="tocS_ContactFlowModuleDescription">ContactFlowModuleDescription</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowmoduledescription"></a>
<a id="schema_ContactFlowModuleDescription"></a>
<a id="tocScontactflowmoduledescription"></a>
<a id="tocscontactflowmoduledescription"></a>

```json
"string"
```

<h2 id="tocS_ContactFlowModuleState">ContactFlowModuleState</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowmodulestate"></a>
<a id="schema_ContactFlowModuleState"></a>
<a id="tocScontactflowmodulestate"></a>
<a id="tocscontactflowmodulestate"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ContactFlowModuleStatus">ContactFlowModuleStatus</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowmodulestatus"></a>
<a id="schema_ContactFlowModuleStatus"></a>
<a id="tocScontactflowmodulestatus"></a>
<a id="tocscontactflowmodulestatus"></a>

```json
"PUBLISHED"
```

<h2 id="tocS_ContactFlowModule">ContactFlowModule</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowmodule"></a>
<a id="schema_ContactFlowModule"></a>
<a id="tocScontactflowmodule"></a>
<a id="tocscontactflowmodule"></a>

```json
{
  "Arn": {},
  "Id": {},
  "Name": {},
  "Content": {},
  "Description": {},
  "State": {},
  "Status": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains information about a flow module.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Content|object|false|none|none|
|Description|object|false|none|none|
|State|object|false|none|none|
|Status|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ContactFlowModuleSummary">ContactFlowModuleSummary</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowmodulesummary"></a>
<a id="schema_ContactFlowModuleSummary"></a>
<a id="tocScontactflowmodulesummary"></a>
<a id="tocscontactflowmodulesummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "State": {}
}
```

Contains summary information about a flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_ContactFlowModulesSummaryList">ContactFlowModulesSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowmodulessummarylist"></a>
<a id="schema_ContactFlowModulesSummaryList"></a>
<a id="tocScontactflowmodulessummarylist"></a>
<a id="tocscontactflowmodulessummarylist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {},
    "State": {}
  }
]
```

<h2 id="tocS_ContactFlowSummary">ContactFlowSummary</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowsummary"></a>
<a id="schema_ContactFlowSummary"></a>
<a id="tocScontactflowsummary"></a>
<a id="tocscontactflowsummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "ContactFlowType": {},
  "ContactFlowState": {}
}
```

<p>Contains summary information about a flow.</p> <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect Flow language</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|ContactFlowType|object|false|none|none|
|ContactFlowState|object|false|none|none|

<h2 id="tocS_ContactFlowSummaryList">ContactFlowSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowsummarylist"></a>
<a id="schema_ContactFlowSummaryList"></a>
<a id="tocScontactflowsummarylist"></a>
<a id="tocscontactflowsummarylist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {},
    "ContactFlowType": {},
    "ContactFlowState": {}
  }
]
```

<h2 id="tocS_ContactFlowTypes">ContactFlowTypes</h2>
<!-- backwards compatibility -->
<a id="schemacontactflowtypes"></a>
<a id="schema_ContactFlowTypes"></a>
<a id="tocScontactflowtypes"></a>
<a id="tocscontactflowtypes"></a>

```json
[
  "CONTACT_FLOW"
]
```

<h2 id="tocS_ContactReferences">ContactReferences</h2>
<!-- backwards compatibility -->
<a id="schemacontactreferences"></a>
<a id="schema_ContactReferences"></a>
<a id="tocScontactreferences"></a>
<a id="tocscontactreferences"></a>

```json
{
  "property1": {
    "Value": {},
    "Type": {}
  },
  "property2": {
    "Value": {},
    "Type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Reference](#schemareference)|false|none|Well-formed data on a contact, used by agents to complete a contact request. You can have up to 4,096 UTF-8 bytes across all references for a contact.|

<h2 id="tocS_Content">Content</h2>
<!-- backwards compatibility -->
<a id="schemacontent"></a>
<a id="schema_Content"></a>
<a id="tocScontent"></a>
<a id="tocscontent"></a>

```json
"string"
```

<h2 id="tocS_TagOrConditionList">TagOrConditionList</h2>
<!-- backwards compatibility -->
<a id="schematagorconditionlist"></a>
<a id="schema_TagOrConditionList"></a>
<a id="tocStagorconditionlist"></a>
<a id="tocstagorconditionlist"></a>

```json
[
  [
    {
      "TagKey": {},
      "TagValue": {}
    }
  ]
]
```

<h2 id="tocS_TagAndConditionList">TagAndConditionList</h2>
<!-- backwards compatibility -->
<a id="schematagandconditionlist"></a>
<a id="schema_TagAndConditionList"></a>
<a id="tocStagandconditionlist"></a>
<a id="tocstagandconditionlist"></a>

```json
[
  {
    "TagKey": {},
    "TagValue": {}
  }
]
```

<h2 id="tocS_TagCondition">TagCondition</h2>
<!-- backwards compatibility -->
<a id="schematagcondition"></a>
<a id="schema_TagCondition"></a>
<a id="tocStagcondition"></a>
<a id="tocstagcondition"></a>

```json
{
  "TagKey": {},
  "TagValue": {}
}
```

A leaf node condition which can be used to specify a tag condition, for example, <code>HAVE BPO = 123</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagKey|object|false|none|none|
|TagValue|object|false|none|none|

<h2 id="tocS_CreateAgentStatusRequest">CreateAgentStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateagentstatusrequest"></a>
<a id="schema_CreateAgentStatusRequest"></a>
<a id="tocScreateagentstatusrequest"></a>
<a id="tocscreateagentstatusrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "State": {},
  "DisplayOrder": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|State|object|true|none|none|
|DisplayOrder|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateContactFlowModuleRequest">CreateContactFlowModuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactflowmodulerequest"></a>
<a id="schema_CreateContactFlowModuleRequest"></a>
<a id="tocScreatecontactflowmodulerequest"></a>
<a id="tocscreatecontactflowmodulerequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "Content": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|Content|object|true|none|none|
|Tags|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_CreateContactFlowRequest">CreateContactFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactflowrequest"></a>
<a id="schema_CreateContactFlowRequest"></a>
<a id="tocScreatecontactflowrequest"></a>
<a id="tocscreatecontactflowrequest"></a>

```json
{
  "Name": {},
  "Type": {},
  "Description": {},
  "Content": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Type|object|true|none|none|
|Description|object|false|none|none|
|Content|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_HoursOfOperationDescription">HoursOfOperationDescription</h2>
<!-- backwards compatibility -->
<a id="schemahoursofoperationdescription"></a>
<a id="schema_HoursOfOperationDescription"></a>
<a id="tocShoursofoperationdescription"></a>
<a id="tocshoursofoperationdescription"></a>

```json
"string"
```

<h2 id="tocS_TimeZone">TimeZone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_TimeZone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
"string"
```

<h2 id="tocS_HoursOfOperationConfigList">HoursOfOperationConfigList</h2>
<!-- backwards compatibility -->
<a id="schemahoursofoperationconfiglist"></a>
<a id="schema_HoursOfOperationConfigList"></a>
<a id="tocShoursofoperationconfiglist"></a>
<a id="tocshoursofoperationconfiglist"></a>

```json
[
  {
    "Day": {},
    "StartTime": {
      "Hours": {},
      "Minutes": {}
    },
    "EndTime": {
      "Hours": {},
      "Minutes": {}
    }
  }
]
```

<h2 id="tocS_CreateHoursOfOperationRequest">CreateHoursOfOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatehoursofoperationrequest"></a>
<a id="schema_CreateHoursOfOperationRequest"></a>
<a id="tocScreatehoursofoperationrequest"></a>
<a id="tocscreatehoursofoperationrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "TimeZone": {},
  "Config": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|TimeZone|object|true|none|none|
|Config|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_HoursOfOperationId">HoursOfOperationId</h2>
<!-- backwards compatibility -->
<a id="schemahoursofoperationid"></a>
<a id="schema_HoursOfOperationId"></a>
<a id="tocShoursofoperationid"></a>
<a id="tocshoursofoperationid"></a>

```json
"string"
```

<h2 id="tocS_DirectoryType">DirectoryType</h2>
<!-- backwards compatibility -->
<a id="schemadirectorytype"></a>
<a id="schema_DirectoryType"></a>
<a id="tocSdirectorytype"></a>
<a id="tocsdirectorytype"></a>

```json
"SAML"
```

<h2 id="tocS_DirectoryAlias">DirectoryAlias</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryalias"></a>
<a id="schema_DirectoryAlias"></a>
<a id="tocSdirectoryalias"></a>
<a id="tocsdirectoryalias"></a>

```json
"password"
```

<h2 id="tocS_DirectoryId">DirectoryId</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryid"></a>
<a id="schema_DirectoryId"></a>
<a id="tocSdirectoryid"></a>
<a id="tocsdirectoryid"></a>

```json
"stringstring"
```

<h2 id="tocS_InboundCallsEnabled">InboundCallsEnabled</h2>
<!-- backwards compatibility -->
<a id="schemainboundcallsenabled"></a>
<a id="schema_InboundCallsEnabled"></a>
<a id="tocSinboundcallsenabled"></a>
<a id="tocsinboundcallsenabled"></a>

```json
true
```

<h2 id="tocS_OutboundCallsEnabled">OutboundCallsEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundcallsenabled"></a>
<a id="schema_OutboundCallsEnabled"></a>
<a id="tocSoutboundcallsenabled"></a>
<a id="tocsoutboundcallsenabled"></a>

```json
true
```

<h2 id="tocS_CreateInstanceRequest">CreateInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstancerequest"></a>
<a id="schema_CreateInstanceRequest"></a>
<a id="tocScreateinstancerequest"></a>
<a id="tocscreateinstancerequest"></a>

```json
{
  "ClientToken": {},
  "IdentityManagementType": {},
  "InstanceAlias": {},
  "DirectoryId": {},
  "InboundCallsEnabled": {},
  "OutboundCallsEnabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|false|none|none|
|IdentityManagementType|object|true|none|none|
|InstanceAlias|object|false|none|none|
|DirectoryId|object|false|none|none|
|InboundCallsEnabled|object|true|none|none|
|OutboundCallsEnabled|object|true|none|none|

<h2 id="tocS_IntegrationType">IntegrationType</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationtype"></a>
<a id="schema_IntegrationType"></a>
<a id="tocSintegrationtype"></a>
<a id="tocsintegrationtype"></a>

```json
"EVENT"
```

<h2 id="tocS_URI">URI</h2>
<!-- backwards compatibility -->
<a id="schemauri"></a>
<a id="schema_URI"></a>
<a id="tocSuri"></a>
<a id="tocsuri"></a>

```json
"string"
```

<h2 id="tocS_SourceApplicationName">SourceApplicationName</h2>
<!-- backwards compatibility -->
<a id="schemasourceapplicationname"></a>
<a id="schema_SourceApplicationName"></a>
<a id="tocSsourceapplicationname"></a>
<a id="tocssourceapplicationname"></a>

```json
"string"
```

<h2 id="tocS_SourceType">SourceType</h2>
<!-- backwards compatibility -->
<a id="schemasourcetype"></a>
<a id="schema_SourceType"></a>
<a id="tocSsourcetype"></a>
<a id="tocssourcetype"></a>

```json
"SALESFORCE"
```

<h2 id="tocS_CreateIntegrationAssociationRequest">CreateIntegrationAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateintegrationassociationrequest"></a>
<a id="schema_CreateIntegrationAssociationRequest"></a>
<a id="tocScreateintegrationassociationrequest"></a>
<a id="tocscreateintegrationassociationrequest"></a>

```json
{
  "IntegrationType": {},
  "IntegrationArn": {},
  "SourceApplicationUrl": {},
  "SourceApplicationName": {},
  "SourceType": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IntegrationType|object|true|none|none|
|IntegrationArn|object|true|none|none|
|SourceApplicationUrl|object|false|none|none|
|SourceApplicationName|object|false|none|none|
|SourceType|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ParticipantDetailsToAdd">ParticipantDetailsToAdd</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantdetailstoadd"></a>
<a id="schema_ParticipantDetailsToAdd"></a>
<a id="tocSparticipantdetailstoadd"></a>
<a id="tocsparticipantdetailstoadd"></a>

```json
{
  "ParticipantRole": {},
  "DisplayName": {}
}
```

The details to add for the participant.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParticipantRole|object|false|none|none|
|DisplayName|object|false|none|none|

<h2 id="tocS_CreateParticipantRequest">CreateParticipantRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateparticipantrequest"></a>
<a id="schema_CreateParticipantRequest"></a>
<a id="tocScreateparticipantrequest"></a>
<a id="tocscreateparticipantrequest"></a>

```json
{
  "InstanceId": {},
  "ContactId": {},
  "ClientToken": {},
  "ParticipantDetails": {
    "ParticipantRole": {},
    "DisplayName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|ContactId|object|true|none|none|
|ClientToken|object|false|none|none|
|ParticipantDetails|object|true|none|none|

<h2 id="tocS_ParticipantTokenCredentials">ParticipantTokenCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaparticipanttokencredentials"></a>
<a id="schema_ParticipantTokenCredentials"></a>
<a id="tocSparticipanttokencredentials"></a>
<a id="tocsparticipanttokencredentials"></a>

```json
{
  "ParticipantToken": {},
  "Expiry": {}
}
```

The credentials used by the participant.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParticipantToken|object|false|none|none|
|Expiry|object|false|none|none|

<h2 id="tocS_ParticipantId">ParticipantId</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantid"></a>
<a id="schema_ParticipantId"></a>
<a id="tocSparticipantid"></a>
<a id="tocsparticipantid"></a>

```json
"string"
```

<h2 id="tocS_QueueDescription">QueueDescription</h2>
<!-- backwards compatibility -->
<a id="schemaqueuedescription"></a>
<a id="schema_QueueDescription"></a>
<a id="tocSqueuedescription"></a>
<a id="tocsqueuedescription"></a>

```json
"string"
```

<h2 id="tocS_OutboundCallerConfig">OutboundCallerConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundcallerconfig"></a>
<a id="schema_OutboundCallerConfig"></a>
<a id="tocSoutboundcallerconfig"></a>
<a id="tocsoutboundcallerconfig"></a>

```json
{
  "OutboundCallerIdName": {},
  "OutboundCallerIdNumberId": {},
  "OutboundFlowId": {}
}
```

The outbound caller ID name, number, and outbound whisper flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutboundCallerIdName|object|false|none|none|
|OutboundCallerIdNumberId|object|false|none|none|
|OutboundFlowId|object|false|none|none|

<h2 id="tocS_QueueMaxContacts">QueueMaxContacts</h2>
<!-- backwards compatibility -->
<a id="schemaqueuemaxcontacts"></a>
<a id="schema_QueueMaxContacts"></a>
<a id="tocSqueuemaxcontacts"></a>
<a id="tocsqueuemaxcontacts"></a>

```json
0
```

<h2 id="tocS_CreateQueueRequest">CreateQueueRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatequeuerequest"></a>
<a id="schema_CreateQueueRequest"></a>
<a id="tocScreatequeuerequest"></a>
<a id="tocscreatequeuerequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "OutboundCallerConfig": {
    "OutboundCallerIdName": {},
    "OutboundCallerIdNumberId": {},
    "OutboundFlowId": {}
  },
  "HoursOfOperationId": {},
  "MaxContacts": {},
  "QuickConnectIds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|OutboundCallerConfig|object|false|none|none|
|HoursOfOperationId|object|true|none|none|
|MaxContacts|object|false|none|none|
|QuickConnectIds|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_QuickConnectName">QuickConnectName</h2>
<!-- backwards compatibility -->
<a id="schemaquickconnectname"></a>
<a id="schema_QuickConnectName"></a>
<a id="tocSquickconnectname"></a>
<a id="tocsquickconnectname"></a>

```json
"string"
```

<h2 id="tocS_QuickConnectDescription">QuickConnectDescription</h2>
<!-- backwards compatibility -->
<a id="schemaquickconnectdescription"></a>
<a id="schema_QuickConnectDescription"></a>
<a id="tocSquickconnectdescription"></a>
<a id="tocsquickconnectdescription"></a>

```json
"string"
```

<h2 id="tocS_QuickConnectConfig">QuickConnectConfig</h2>
<!-- backwards compatibility -->
<a id="schemaquickconnectconfig"></a>
<a id="schema_QuickConnectConfig"></a>
<a id="tocSquickconnectconfig"></a>
<a id="tocsquickconnectconfig"></a>

```json
{
  "QuickConnectType": {},
  "UserConfig": {
    "UserId": {},
    "ContactFlowId": {}
  },
  "QueueConfig": {
    "QueueId": {},
    "ContactFlowId": {}
  },
  "PhoneConfig": {
    "PhoneNumber": {}
  }
}
```

Contains configuration settings for a quick connect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuickConnectType|object|true|none|none|
|UserConfig|object|false|none|none|
|QueueConfig|object|false|none|none|
|PhoneConfig|object|false|none|none|

<h2 id="tocS_CreateQuickConnectRequest">CreateQuickConnectRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatequickconnectrequest"></a>
<a id="schema_CreateQuickConnectRequest"></a>
<a id="tocScreatequickconnectrequest"></a>
<a id="tocscreatequickconnectrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "QuickConnectConfig": {
    "QuickConnectType": {},
    "UserConfig": {
      "UserId": {},
      "ContactFlowId": {}
    },
    "QueueConfig": {
      "QueueId": {},
      "ContactFlowId": {}
    },
    "PhoneConfig": {
      "PhoneNumber": {}
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|QuickConnectConfig|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_RoutingProfileName">RoutingProfileName</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofilename"></a>
<a id="schema_RoutingProfileName"></a>
<a id="tocSroutingprofilename"></a>
<a id="tocsroutingprofilename"></a>

```json
"string"
```

<h2 id="tocS_RoutingProfileDescription">RoutingProfileDescription</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofiledescription"></a>
<a id="schema_RoutingProfileDescription"></a>
<a id="tocSroutingprofiledescription"></a>
<a id="tocsroutingprofiledescription"></a>

```json
"string"
```

<h2 id="tocS_MediaConcurrencies">MediaConcurrencies</h2>
<!-- backwards compatibility -->
<a id="schemamediaconcurrencies"></a>
<a id="schema_MediaConcurrencies"></a>
<a id="tocSmediaconcurrencies"></a>
<a id="tocsmediaconcurrencies"></a>

```json
[
  {
    "Channel": {},
    "Concurrency": {},
    "CrossChannelBehavior": {
      "BehaviorType": {}
    }
  }
]
```

<h2 id="tocS_CreateRoutingProfileRequest">CreateRoutingProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateroutingprofilerequest"></a>
<a id="schema_CreateRoutingProfileRequest"></a>
<a id="tocScreateroutingprofilerequest"></a>
<a id="tocscreateroutingprofilerequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "DefaultOutboundQueueId": {},
  "QueueConfigs": {},
  "MediaConcurrencies": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|true|none|none|
|DefaultOutboundQueueId|object|true|none|none|
|QueueConfigs|object|false|none|none|
|MediaConcurrencies|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_RuleName">RuleName</h2>
<!-- backwards compatibility -->
<a id="schemarulename"></a>
<a id="schema_RuleName"></a>
<a id="tocSrulename"></a>
<a id="tocsrulename"></a>

```json
"string"
```

<h2 id="tocS_RuleTriggerEventSource">RuleTriggerEventSource</h2>
<!-- backwards compatibility -->
<a id="schemaruletriggereventsource"></a>
<a id="schema_RuleTriggerEventSource"></a>
<a id="tocSruletriggereventsource"></a>
<a id="tocsruletriggereventsource"></a>

```json
{
  "EventSourceName": {},
  "IntegrationAssociationId": {}
}
```

The name of the event source. This field is required if <code>TriggerEventSource</code> is one of the following values: <code>OnZendeskTicketCreate</code> | <code>OnZendeskTicketStatusUpdate</code> | <code>OnSalesforceCaseCreate</code>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventSourceName|object|true|none|none|
|IntegrationAssociationId|object|false|none|none|

<h2 id="tocS_RuleFunction">RuleFunction</h2>
<!-- backwards compatibility -->
<a id="schemarulefunction"></a>
<a id="schema_RuleFunction"></a>
<a id="tocSrulefunction"></a>
<a id="tocsrulefunction"></a>

```json
"string"
```

<h2 id="tocS_RuleActions">RuleActions</h2>
<!-- backwards compatibility -->
<a id="schemaruleactions"></a>
<a id="schema_RuleActions"></a>
<a id="tocSruleactions"></a>
<a id="tocsruleactions"></a>

```json
[
  {
    "ActionType": {},
    "TaskAction": {
      "Name": {},
      "Description": {},
      "ContactFlowId": {},
      "References": {
        "property1": {
          "Value": {},
          "Type": {}
        },
        "property2": {
          "Value": {},
          "Type": {}
        }
      }
    },
    "EventBridgeAction": {
      "Name": {}
    },
    "AssignContactCategoryAction": {},
    "SendNotificationAction": {
      "DeliveryMethod": {},
      "Subject": {},
      "Content": {},
      "ContentType": {},
      "Recipient": {
        "UserTags": {
          "property1": "string",
          "property2": "string"
        },
        "UserIds": {}
      }
    }
  }
]
```

<h2 id="tocS_RulePublishStatus">RulePublishStatus</h2>
<!-- backwards compatibility -->
<a id="schemarulepublishstatus"></a>
<a id="schema_RulePublishStatus"></a>
<a id="tocSrulepublishstatus"></a>
<a id="tocsrulepublishstatus"></a>

```json
"DRAFT"
```

<h2 id="tocS_CreateRuleRequest">CreateRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterulerequest"></a>
<a id="schema_CreateRuleRequest"></a>
<a id="tocScreaterulerequest"></a>
<a id="tocscreaterulerequest"></a>

```json
{
  "Name": {},
  "TriggerEventSource": {
    "EventSourceName": {},
    "IntegrationAssociationId": {}
  },
  "Function": {},
  "Actions": {},
  "PublishStatus": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|TriggerEventSource|object|true|none|none|
|Function|object|true|none|none|
|Actions|object|true|none|none|
|PublishStatus|object|true|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_RuleId">RuleId</h2>
<!-- backwards compatibility -->
<a id="schemaruleid"></a>
<a id="schema_RuleId"></a>
<a id="tocSruleid"></a>
<a id="tocsruleid"></a>

```json
"string"
```

<h2 id="tocS_CreateSecurityProfileName">CreateSecurityProfileName</h2>
<!-- backwards compatibility -->
<a id="schemacreatesecurityprofilename"></a>
<a id="schema_CreateSecurityProfileName"></a>
<a id="tocScreatesecurityprofilename"></a>
<a id="tocscreatesecurityprofilename"></a>

```json
"string"
```

<h2 id="tocS_SecurityProfileDescription">SecurityProfileDescription</h2>
<!-- backwards compatibility -->
<a id="schemasecurityprofiledescription"></a>
<a id="schema_SecurityProfileDescription"></a>
<a id="tocSsecurityprofiledescription"></a>
<a id="tocssecurityprofiledescription"></a>

```json
"string"
```

<h2 id="tocS_PermissionsList">PermissionsList</h2>
<!-- backwards compatibility -->
<a id="schemapermissionslist"></a>
<a id="schema_PermissionsList"></a>
<a id="tocSpermissionslist"></a>
<a id="tocspermissionslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagRestrictedResourceList">TagRestrictedResourceList</h2>
<!-- backwards compatibility -->
<a id="schematagrestrictedresourcelist"></a>
<a id="schema_TagRestrictedResourceList"></a>
<a id="tocStagrestrictedresourcelist"></a>
<a id="tocstagrestrictedresourcelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CreateSecurityProfileRequest">CreateSecurityProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesecurityprofilerequest"></a>
<a id="schema_CreateSecurityProfileRequest"></a>
<a id="tocScreatesecurityprofilerequest"></a>
<a id="tocscreatesecurityprofilerequest"></a>

```json
{
  "SecurityProfileName": {},
  "Description": {},
  "Permissions": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "AllowedAccessControlTags": {
    "property1": "string",
    "property2": "string"
  },
  "TagRestrictedResources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityProfileName|object|true|none|none|
|Description|object|false|none|none|
|Permissions|object|false|none|none|
|Tags|object|false|none|none|
|AllowedAccessControlTags|object|false|none|none|
|TagRestrictedResources|object|false|none|none|

<h2 id="tocS_TaskTemplateName">TaskTemplateName</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatename"></a>
<a id="schema_TaskTemplateName"></a>
<a id="tocStasktemplatename"></a>
<a id="tocstasktemplatename"></a>

```json
"string"
```

<h2 id="tocS_TaskTemplateDescription">TaskTemplateDescription</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatedescription"></a>
<a id="schema_TaskTemplateDescription"></a>
<a id="tocStasktemplatedescription"></a>
<a id="tocstasktemplatedescription"></a>

```json
"string"
```

<h2 id="tocS_TaskTemplateConstraints">TaskTemplateConstraints</h2>
<!-- backwards compatibility -->
<a id="schematasktemplateconstraints"></a>
<a id="schema_TaskTemplateConstraints"></a>
<a id="tocStasktemplateconstraints"></a>
<a id="tocstasktemplateconstraints"></a>

```json
{
  "RequiredFields": {},
  "ReadOnlyFields": {},
  "InvisibleFields": {}
}
```

Describes constraints that apply to the template fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequiredFields|object|false|none|none|
|ReadOnlyFields|object|false|none|none|
|InvisibleFields|object|false|none|none|

<h2 id="tocS_TaskTemplateDefaults">TaskTemplateDefaults</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatedefaults"></a>
<a id="schema_TaskTemplateDefaults"></a>
<a id="tocStasktemplatedefaults"></a>
<a id="tocstasktemplatedefaults"></a>

```json
{
  "DefaultFieldValues": {}
}
```

Describes default values for fields on a template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultFieldValues|object|false|none|none|

<h2 id="tocS_TaskTemplateStatus">TaskTemplateStatus</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatestatus"></a>
<a id="schema_TaskTemplateStatus"></a>
<a id="tocStasktemplatestatus"></a>
<a id="tocstasktemplatestatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_TaskTemplateFields">TaskTemplateFields</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatefields"></a>
<a id="schema_TaskTemplateFields"></a>
<a id="tocStasktemplatefields"></a>
<a id="tocstasktemplatefields"></a>

```json
[
  {
    "Id": {
      "Name": {}
    },
    "Description": {},
    "Type": {},
    "SingleSelectOptions": {}
  }
]
```

<h2 id="tocS_CreateTaskTemplateRequest">CreateTaskTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetasktemplaterequest"></a>
<a id="schema_CreateTaskTemplateRequest"></a>
<a id="tocScreatetasktemplaterequest"></a>
<a id="tocscreatetasktemplaterequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "ContactFlowId": {},
  "Constraints": {
    "RequiredFields": {},
    "ReadOnlyFields": {},
    "InvisibleFields": {}
  },
  "Defaults": {
    "DefaultFieldValues": {}
  },
  "Status": {},
  "Fields": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|ContactFlowId|object|false|none|none|
|Constraints|object|false|none|none|
|Defaults|object|false|none|none|
|Status|object|false|none|none|
|Fields|object|true|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_TaskTemplateId">TaskTemplateId</h2>
<!-- backwards compatibility -->
<a id="schematasktemplateid"></a>
<a id="schema_TaskTemplateId"></a>
<a id="tocStasktemplateid"></a>
<a id="tocstasktemplateid"></a>

```json
"string"
```

<h2 id="tocS_TaskTemplateArn">TaskTemplateArn</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatearn"></a>
<a id="schema_TaskTemplateArn"></a>
<a id="tocStasktemplatearn"></a>
<a id="tocstasktemplatearn"></a>

```json
"string"
```

<h2 id="tocS_Name128">Name128</h2>
<!-- backwards compatibility -->
<a id="schemaname128"></a>
<a id="schema_Name128"></a>
<a id="tocSname128"></a>
<a id="tocsname128"></a>

```json
"string"
```

<h2 id="tocS_Description250">Description250</h2>
<!-- backwards compatibility -->
<a id="schemadescription250"></a>
<a id="schema_Description250"></a>
<a id="tocSdescription250"></a>
<a id="tocsdescription250"></a>

```json
"string"
```

<h2 id="tocS_InstanceIdOrArn">InstanceIdOrArn</h2>
<!-- backwards compatibility -->
<a id="schemainstanceidorarn"></a>
<a id="schema_InstanceIdOrArn"></a>
<a id="tocSinstanceidorarn"></a>
<a id="tocsinstanceidorarn"></a>

```json
"string"
```

<h2 id="tocS_CreateTrafficDistributionGroupRequest">CreateTrafficDistributionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetrafficdistributiongrouprequest"></a>
<a id="schema_CreateTrafficDistributionGroupRequest"></a>
<a id="tocScreatetrafficdistributiongrouprequest"></a>
<a id="tocscreatetrafficdistributiongrouprequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "InstanceId": {},
  "ClientToken": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|InstanceId|object|true|none|none|
|ClientToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_TrafficDistributionGroupId">TrafficDistributionGroupId</h2>
<!-- backwards compatibility -->
<a id="schematrafficdistributiongroupid"></a>
<a id="schema_TrafficDistributionGroupId"></a>
<a id="tocStrafficdistributiongroupid"></a>
<a id="tocstrafficdistributiongroupid"></a>

```json
"string"
```

<h2 id="tocS_TrafficDistributionGroupArn">TrafficDistributionGroupArn</h2>
<!-- backwards compatibility -->
<a id="schematrafficdistributiongrouparn"></a>
<a id="schema_TrafficDistributionGroupArn"></a>
<a id="tocStrafficdistributiongrouparn"></a>
<a id="tocstrafficdistributiongrouparn"></a>

```json
"string"
```

<h2 id="tocS_UseCaseType">UseCaseType</h2>
<!-- backwards compatibility -->
<a id="schemausecasetype"></a>
<a id="schema_UseCaseType"></a>
<a id="tocSusecasetype"></a>
<a id="tocsusecasetype"></a>

```json
"RULES_EVALUATION"
```

<h2 id="tocS_CreateUseCaseRequest">CreateUseCaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateusecaserequest"></a>
<a id="schema_CreateUseCaseRequest"></a>
<a id="tocScreateusecaserequest"></a>
<a id="tocscreateusecaserequest"></a>

```json
{
  "UseCaseType": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UseCaseType|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UseCaseId">UseCaseId</h2>
<!-- backwards compatibility -->
<a id="schemausecaseid"></a>
<a id="schema_UseCaseId"></a>
<a id="tocSusecaseid"></a>
<a id="tocsusecaseid"></a>

```json
"string"
```

<h2 id="tocS_HierarchyGroupName">HierarchyGroupName</h2>
<!-- backwards compatibility -->
<a id="schemahierarchygroupname"></a>
<a id="schema_HierarchyGroupName"></a>
<a id="tocShierarchygroupname"></a>
<a id="tocshierarchygroupname"></a>

```json
"string"
```

<h2 id="tocS_HierarchyGroupId">HierarchyGroupId</h2>
<!-- backwards compatibility -->
<a id="schemahierarchygroupid"></a>
<a id="schema_HierarchyGroupId"></a>
<a id="tocShierarchygroupid"></a>
<a id="tocshierarchygroupid"></a>

```json
"string"
```

<h2 id="tocS_CreateUserHierarchyGroupRequest">CreateUserHierarchyGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserhierarchygrouprequest"></a>
<a id="schema_CreateUserHierarchyGroupRequest"></a>
<a id="tocScreateuserhierarchygrouprequest"></a>
<a id="tocscreateuserhierarchygrouprequest"></a>

```json
{
  "Name": {},
  "ParentGroupId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ParentGroupId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Password">Password</h2>
<!-- backwards compatibility -->
<a id="schemapassword"></a>
<a id="schema_Password"></a>
<a id="tocSpassword"></a>
<a id="tocspassword"></a>

```json
"string"
```

<h2 id="tocS_UserIdentityInfo">UserIdentityInfo</h2>
<!-- backwards compatibility -->
<a id="schemauseridentityinfo"></a>
<a id="schema_UserIdentityInfo"></a>
<a id="tocSuseridentityinfo"></a>
<a id="tocsuseridentityinfo"></a>

```json
{
  "FirstName": {},
  "LastName": {},
  "Email": {},
  "SecondaryEmail": {},
  "Mobile": {}
}
```

Contains information about the identity of a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirstName|object|false|none|none|
|LastName|object|false|none|none|
|Email|object|false|none|none|
|SecondaryEmail|object|false|none|none|
|Mobile|object|false|none|none|

<h2 id="tocS_UserPhoneConfig">UserPhoneConfig</h2>
<!-- backwards compatibility -->
<a id="schemauserphoneconfig"></a>
<a id="schema_UserPhoneConfig"></a>
<a id="tocSuserphoneconfig"></a>
<a id="tocsuserphoneconfig"></a>

```json
{
  "PhoneType": {},
  "AutoAccept": {},
  "AfterContactWorkTimeLimit": {},
  "DeskPhoneNumber": {}
}
```

Contains information about the phone configuration settings for a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneType|object|true|none|none|
|AutoAccept|object|false|none|none|
|AfterContactWorkTimeLimit|object|false|none|none|
|DeskPhoneNumber|object|false|none|none|

<h2 id="tocS_DirectoryUserId">DirectoryUserId</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryuserid"></a>
<a id="schema_DirectoryUserId"></a>
<a id="tocSdirectoryuserid"></a>
<a id="tocsdirectoryuserid"></a>

```json
"string"
```

<h2 id="tocS_SecurityProfileIds">SecurityProfileIds</h2>
<!-- backwards compatibility -->
<a id="schemasecurityprofileids"></a>
<a id="schema_SecurityProfileIds"></a>
<a id="tocSsecurityprofileids"></a>
<a id="tocssecurityprofileids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CreateUserRequest">CreateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserrequest"></a>
<a id="schema_CreateUserRequest"></a>
<a id="tocScreateuserrequest"></a>
<a id="tocscreateuserrequest"></a>

```json
{
  "Username": {},
  "Password": {},
  "IdentityInfo": {
    "FirstName": {},
    "LastName": {},
    "Email": {},
    "SecondaryEmail": {},
    "Mobile": {}
  },
  "PhoneConfig": {
    "PhoneType": {},
    "AutoAccept": {},
    "AfterContactWorkTimeLimit": {},
    "DeskPhoneNumber": {}
  },
  "DirectoryUserId": {},
  "SecurityProfileIds": {},
  "RoutingProfileId": {},
  "HierarchyGroupId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|object|true|none|none|
|Password|object|false|none|none|
|IdentityInfo|object|false|none|none|
|PhoneConfig|object|true|none|none|
|DirectoryUserId|object|false|none|none|
|SecurityProfileIds|object|true|none|none|
|RoutingProfileId|object|true|none|none|
|HierarchyGroupId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_VocabularyName">VocabularyName</h2>
<!-- backwards compatibility -->
<a id="schemavocabularyname"></a>
<a id="schema_VocabularyName"></a>
<a id="tocSvocabularyname"></a>
<a id="tocsvocabularyname"></a>

```json
"string"
```

<h2 id="tocS_VocabularyContent">VocabularyContent</h2>
<!-- backwards compatibility -->
<a id="schemavocabularycontent"></a>
<a id="schema_VocabularyContent"></a>
<a id="tocSvocabularycontent"></a>
<a id="tocsvocabularycontent"></a>

```json
"string"
```

<h2 id="tocS_CreateVocabularyRequest">CreateVocabularyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevocabularyrequest"></a>
<a id="schema_CreateVocabularyRequest"></a>
<a id="tocScreatevocabularyrequest"></a>
<a id="tocscreatevocabularyrequest"></a>

```json
{
  "ClientToken": {},
  "VocabularyName": {},
  "LanguageCode": {},
  "Content": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|false|none|none|
|VocabularyName|object|true|none|none|
|LanguageCode|object|true|none|none|
|Content|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_VocabularyState">VocabularyState</h2>
<!-- backwards compatibility -->
<a id="schemavocabularystate"></a>
<a id="schema_VocabularyState"></a>
<a id="tocSvocabularystate"></a>
<a id="tocsvocabularystate"></a>

```json
"CREATION_IN_PROGRESS"
```

<h2 id="tocS_SecurityToken">SecurityToken</h2>
<!-- backwards compatibility -->
<a id="schemasecuritytoken"></a>
<a id="schema_SecurityToken"></a>
<a id="tocSsecuritytoken"></a>
<a id="tocssecuritytoken"></a>

```json
"password"
```

<h2 id="tocS_Credentials">Credentials</h2>
<!-- backwards compatibility -->
<a id="schemacredentials"></a>
<a id="schema_Credentials"></a>
<a id="tocScredentials"></a>
<a id="tocscredentials"></a>

```json
{
  "AccessToken": {},
  "AccessTokenExpiration": {},
  "RefreshToken": {},
  "RefreshTokenExpiration": {}
}
```

Contains credentials to use for federation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|object|false|none|none|
|AccessTokenExpiration|object|false|none|none|
|RefreshToken|object|false|none|none|
|RefreshTokenExpiration|object|false|none|none|

<h2 id="tocS_CrossChannelBehavior">CrossChannelBehavior</h2>
<!-- backwards compatibility -->
<a id="schemacrosschannelbehavior"></a>
<a id="schema_CrossChannelBehavior"></a>
<a id="tocScrosschannelbehavior"></a>
<a id="tocscrosschannelbehavior"></a>

```json
{
  "BehaviorType": {}
}
```

Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BehaviorType|object|true|none|none|

<h2 id="tocS_CurrentMetricName">CurrentMetricName</h2>
<!-- backwards compatibility -->
<a id="schemacurrentmetricname"></a>
<a id="schema_CurrentMetricName"></a>
<a id="tocScurrentmetricname"></a>
<a id="tocscurrentmetricname"></a>

```json
"AGENTS_ONLINE"
```

The current metric names.

<h2 id="tocS_Unit">Unit</h2>
<!-- backwards compatibility -->
<a id="schemaunit"></a>
<a id="schema_Unit"></a>
<a id="tocSunit"></a>
<a id="tocsunit"></a>

```json
"SECONDS"
```

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
0
```

<h2 id="tocS_CurrentMetricData">CurrentMetricData</h2>
<!-- backwards compatibility -->
<a id="schemacurrentmetricdata"></a>
<a id="schema_CurrentMetricData"></a>
<a id="tocScurrentmetricdata"></a>
<a id="tocscurrentmetricdata"></a>

```json
{
  "Metric": {
    "Name": {},
    "Unit": {}
  },
  "Value": {}
}
```

Contains the data for a real-time metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metric|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_CurrentMetricDataCollections">CurrentMetricDataCollections</h2>
<!-- backwards compatibility -->
<a id="schemacurrentmetricdatacollections"></a>
<a id="schema_CurrentMetricDataCollections"></a>
<a id="tocScurrentmetricdatacollections"></a>
<a id="tocscurrentmetricdatacollections"></a>

```json
[
  {
    "Metric": {
      "Name": {},
      "Unit": {}
    },
    "Value": {}
  }
]
```

<h2 id="tocS_Dimensions">Dimensions</h2>
<!-- backwards compatibility -->
<a id="schemadimensions"></a>
<a id="schema_Dimensions"></a>
<a id="tocSdimensions"></a>
<a id="tocsdimensions"></a>

```json
{
  "Queue": {
    "Id": {},
    "Arn": {}
  },
  "Channel": {},
  "RoutingProfile": {
    "Id": {},
    "Arn": {}
  }
}
```

Contains information about the dimensions for a set of metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Queue|object|false|none|none|
|Channel|object|false|none|none|
|RoutingProfile|[RoutingProfileReference](#schemaroutingprofilereference)|false|none|Information about the routing profile assigned to the user.|

<h2 id="tocS_CurrentMetricResult">CurrentMetricResult</h2>
<!-- backwards compatibility -->
<a id="schemacurrentmetricresult"></a>
<a id="schema_CurrentMetricResult"></a>
<a id="tocScurrentmetricresult"></a>
<a id="tocscurrentmetricresult"></a>

```json
{
  "Dimensions": {
    "Queue": {
      "Id": {},
      "Arn": {}
    },
    "Channel": {},
    "RoutingProfile": {
      "Id": {},
      "Arn": {}
    }
  },
  "Collections": {}
}
```

Contains information about a set of real-time metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Dimensions|object|false|none|none|
|Collections|object|false|none|none|

<h2 id="tocS_CurrentMetricResults">CurrentMetricResults</h2>
<!-- backwards compatibility -->
<a id="schemacurrentmetricresults"></a>
<a id="schema_CurrentMetricResults"></a>
<a id="tocScurrentmetricresults"></a>
<a id="tocscurrentmetricresults"></a>

```json
[
  {
    "Dimensions": {
      "Queue": {
        "Id": {},
        "Arn": {}
      },
      "Channel": {},
      "RoutingProfile": {
        "Id": {},
        "Arn": {}
      }
    },
    "Collections": {}
  }
]
```

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"ASCENDING"
```

<h2 id="tocS_CurrentMetricSortCriteriaMaxOne">CurrentMetricSortCriteriaMaxOne</h2>
<!-- backwards compatibility -->
<a id="schemacurrentmetricsortcriteriamaxone"></a>
<a id="schema_CurrentMetricSortCriteriaMaxOne"></a>
<a id="tocScurrentmetricsortcriteriamaxone"></a>
<a id="tocscurrentmetricsortcriteriamaxone"></a>

```json
[
  {
    "SortByMetric": "AGENTS_ONLINE",
    "SortOrder": {}
  }
]
```

<h2 id="tocS_CurrentMetrics">CurrentMetrics</h2>
<!-- backwards compatibility -->
<a id="schemacurrentmetrics"></a>
<a id="schema_CurrentMetrics"></a>
<a id="tocScurrentmetrics"></a>
<a id="tocscurrentmetrics"></a>

```json
[
  {
    "Name": {},
    "Unit": {}
  }
]
```

<h2 id="tocS_DateReference">DateReference</h2>
<!-- backwards compatibility -->
<a id="schemadatereference"></a>
<a id="schema_DateReference"></a>
<a id="tocSdatereference"></a>
<a id="tocsdatereference"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Information about a reference when the <code>referenceType</code> is <code>DATE</code>. Otherwise, null.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_DefaultVocabulary">DefaultVocabulary</h2>
<!-- backwards compatibility -->
<a id="schemadefaultvocabulary"></a>
<a id="schema_DefaultVocabulary"></a>
<a id="tocSdefaultvocabulary"></a>
<a id="tocsdefaultvocabulary"></a>

```json
{
  "InstanceId": {},
  "LanguageCode": {},
  "VocabularyId": {},
  "VocabularyName": {}
}
```

Contains information about a default vocabulary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|LanguageCode|object|true|none|none|
|VocabularyId|object|true|none|none|
|VocabularyName|object|true|none|none|

<h2 id="tocS_DefaultVocabularyList">DefaultVocabularyList</h2>
<!-- backwards compatibility -->
<a id="schemadefaultvocabularylist"></a>
<a id="schema_DefaultVocabularyList"></a>
<a id="tocSdefaultvocabularylist"></a>
<a id="tocsdefaultvocabularylist"></a>

```json
[
  {
    "InstanceId": {},
    "LanguageCode": {},
    "VocabularyId": {},
    "VocabularyName": {}
  }
]
```

<h2 id="tocS_Delay">Delay</h2>
<!-- backwards compatibility -->
<a id="schemadelay"></a>
<a id="schema_Delay"></a>
<a id="tocSdelay"></a>
<a id="tocsdelay"></a>

```json
0
```

<h2 id="tocS_DeleteContactFlowModuleRequest">DeleteContactFlowModuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontactflowmodulerequest"></a>
<a id="schema_DeleteContactFlowModuleRequest"></a>
<a id="tocSdeletecontactflowmodulerequest"></a>
<a id="tocsdeletecontactflowmodulerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteContactFlowRequest">DeleteContactFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontactflowrequest"></a>
<a id="schema_DeleteContactFlowRequest"></a>
<a id="tocSdeletecontactflowrequest"></a>
<a id="tocsdeletecontactflowrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteHoursOfOperationRequest">DeleteHoursOfOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletehoursofoperationrequest"></a>
<a id="schema_DeleteHoursOfOperationRequest"></a>
<a id="tocSdeletehoursofoperationrequest"></a>
<a id="tocsdeletehoursofoperationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteInstanceRequest">DeleteInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinstancerequest"></a>
<a id="schema_DeleteInstanceRequest"></a>
<a id="tocSdeleteinstancerequest"></a>
<a id="tocsdeleteinstancerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteIntegrationAssociationRequest">DeleteIntegrationAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteintegrationassociationrequest"></a>
<a id="schema_DeleteIntegrationAssociationRequest"></a>
<a id="tocSdeleteintegrationassociationrequest"></a>
<a id="tocsdeleteintegrationassociationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteQuickConnectRequest">DeleteQuickConnectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletequickconnectrequest"></a>
<a id="schema_DeleteQuickConnectRequest"></a>
<a id="tocSdeletequickconnectrequest"></a>
<a id="tocsdeletequickconnectrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteRuleRequest">DeleteRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterulerequest"></a>
<a id="schema_DeleteRuleRequest"></a>
<a id="tocSdeleterulerequest"></a>
<a id="tocsdeleterulerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteSecurityProfileRequest">DeleteSecurityProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesecurityprofilerequest"></a>
<a id="schema_DeleteSecurityProfileRequest"></a>
<a id="tocSdeletesecurityprofilerequest"></a>
<a id="tocsdeletesecurityprofilerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteTaskTemplateRequest">DeleteTaskTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetasktemplaterequest"></a>
<a id="schema_DeleteTaskTemplateRequest"></a>
<a id="tocSdeletetasktemplaterequest"></a>
<a id="tocsdeletetasktemplaterequest"></a>

```json
{}
```

<h2 id="tocS_TrafficDistributionGroupIdOrArn">TrafficDistributionGroupIdOrArn</h2>
<!-- backwards compatibility -->
<a id="schematrafficdistributiongroupidorarn"></a>
<a id="schema_TrafficDistributionGroupIdOrArn"></a>
<a id="tocStrafficdistributiongroupidorarn"></a>
<a id="tocstrafficdistributiongroupidorarn"></a>

```json
"string"
```

<h2 id="tocS_DeleteTrafficDistributionGroupRequest">DeleteTrafficDistributionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetrafficdistributiongrouprequest"></a>
<a id="schema_DeleteTrafficDistributionGroupRequest"></a>
<a id="tocSdeletetrafficdistributiongrouprequest"></a>
<a id="tocsdeletetrafficdistributiongrouprequest"></a>

```json
{}
```

<h2 id="tocS_DeleteUseCaseRequest">DeleteUseCaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteusecaserequest"></a>
<a id="schema_DeleteUseCaseRequest"></a>
<a id="tocSdeleteusecaserequest"></a>
<a id="tocsdeleteusecaserequest"></a>

```json
{}
```

<h2 id="tocS_DeleteUserHierarchyGroupRequest">DeleteUserHierarchyGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserhierarchygrouprequest"></a>
<a id="schema_DeleteUserHierarchyGroupRequest"></a>
<a id="tocSdeleteuserhierarchygrouprequest"></a>
<a id="tocsdeleteuserhierarchygrouprequest"></a>

```json
{}
```

<h2 id="tocS_DeleteUserRequest">DeleteUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserrequest"></a>
<a id="schema_DeleteUserRequest"></a>
<a id="tocSdeleteuserrequest"></a>
<a id="tocsdeleteuserrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteVocabularyRequest">DeleteVocabularyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevocabularyrequest"></a>
<a id="schema_DeleteVocabularyRequest"></a>
<a id="tocSdeletevocabularyrequest"></a>
<a id="tocsdeletevocabularyrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeAgentStatusRequest">DescribeAgentStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeagentstatusrequest"></a>
<a id="schema_DescribeAgentStatusRequest"></a>
<a id="tocSdescribeagentstatusrequest"></a>
<a id="tocsdescribeagentstatusrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeContactFlowModuleRequest">DescribeContactFlowModuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontactflowmodulerequest"></a>
<a id="schema_DescribeContactFlowModuleRequest"></a>
<a id="tocSdescribecontactflowmodulerequest"></a>
<a id="tocsdescribecontactflowmodulerequest"></a>

```json
{}
```

<h2 id="tocS_DescribeContactFlowRequest">DescribeContactFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontactflowrequest"></a>
<a id="schema_DescribeContactFlowRequest"></a>
<a id="tocSdescribecontactflowrequest"></a>
<a id="tocsdescribecontactflowrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeContactRequest">DescribeContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontactrequest"></a>
<a id="schema_DescribeContactRequest"></a>
<a id="tocSdescribecontactrequest"></a>
<a id="tocsdescribecontactrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeHoursOfOperationRequest">DescribeHoursOfOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribehoursofoperationrequest"></a>
<a id="schema_DescribeHoursOfOperationRequest"></a>
<a id="tocSdescribehoursofoperationrequest"></a>
<a id="tocsdescribehoursofoperationrequest"></a>

```json
{}
```

<h2 id="tocS_HoursOfOperation">HoursOfOperation</h2>
<!-- backwards compatibility -->
<a id="schemahoursofoperation"></a>
<a id="schema_HoursOfOperation"></a>
<a id="tocShoursofoperation"></a>
<a id="tocshoursofoperation"></a>

```json
{
  "HoursOfOperationId": {},
  "HoursOfOperationArn": {},
  "Name": {},
  "Description": {},
  "TimeZone": {},
  "Config": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information about of the hours of operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HoursOfOperationId|object|false|none|none|
|HoursOfOperationArn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|TimeZone|object|false|none|none|
|Config|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeInstanceAttributeRequest">DescribeInstanceAttributeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstanceattributerequest"></a>
<a id="schema_DescribeInstanceAttributeRequest"></a>
<a id="tocSdescribeinstanceattributerequest"></a>
<a id="tocsdescribeinstanceattributerequest"></a>

```json
{}
```

<h2 id="tocS_DescribeInstanceRequest">DescribeInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstancerequest"></a>
<a id="schema_DescribeInstanceRequest"></a>
<a id="tocSdescribeinstancerequest"></a>
<a id="tocsdescribeinstancerequest"></a>

```json
{}
```

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "Id": {},
  "Arn": {},
  "IdentityManagementType": {},
  "InstanceAlias": {},
  "CreatedTime": {},
  "ServiceRole": {},
  "InstanceStatus": {},
  "StatusReason": {
    "Message": {}
  },
  "InboundCallsEnabled": {},
  "OutboundCallsEnabled": {}
}
```

The Amazon Connect instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|IdentityManagementType|object|false|none|none|
|InstanceAlias|object|false|none|none|
|CreatedTime|object|false|none|none|
|ServiceRole|object|false|none|none|
|InstanceStatus|object|false|none|none|
|StatusReason|object|false|none|none|
|InboundCallsEnabled|object|false|none|none|
|OutboundCallsEnabled|object|false|none|none|

<h2 id="tocS_DescribeInstanceStorageConfigRequest">DescribeInstanceStorageConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstancestorageconfigrequest"></a>
<a id="schema_DescribeInstanceStorageConfigRequest"></a>
<a id="tocSdescribeinstancestorageconfigrequest"></a>
<a id="tocsdescribeinstancestorageconfigrequest"></a>

```json
{}
```

<h2 id="tocS_DescribePhoneNumberRequest">DescribePhoneNumberRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribephonenumberrequest"></a>
<a id="schema_DescribePhoneNumberRequest"></a>
<a id="tocSdescribephonenumberrequest"></a>
<a id="tocsdescribephonenumberrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeQueueRequest">DescribeQueueRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribequeuerequest"></a>
<a id="schema_DescribeQueueRequest"></a>
<a id="tocSdescribequeuerequest"></a>
<a id="tocsdescribequeuerequest"></a>

```json
{}
```

<h2 id="tocS_Queue">Queue</h2>
<!-- backwards compatibility -->
<a id="schemaqueue"></a>
<a id="schema_Queue"></a>
<a id="tocSqueue"></a>
<a id="tocsqueue"></a>

```json
{
  "Name": {},
  "QueueArn": {},
  "QueueId": {},
  "Description": {},
  "OutboundCallerConfig": {
    "OutboundCallerIdName": {},
    "OutboundCallerIdNumberId": {},
    "OutboundFlowId": {}
  },
  "HoursOfOperationId": {},
  "MaxContacts": {},
  "Status": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains information about a queue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|QueueArn|object|false|none|none|
|QueueId|object|false|none|none|
|Description|object|false|none|none|
|OutboundCallerConfig|object|false|none|none|
|HoursOfOperationId|object|false|none|none|
|MaxContacts|object|false|none|none|
|Status|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeQuickConnectRequest">DescribeQuickConnectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribequickconnectrequest"></a>
<a id="schema_DescribeQuickConnectRequest"></a>
<a id="tocSdescribequickconnectrequest"></a>
<a id="tocsdescribequickconnectrequest"></a>

```json
{}
```

<h2 id="tocS_QuickConnect">QuickConnect</h2>
<!-- backwards compatibility -->
<a id="schemaquickconnect"></a>
<a id="schema_QuickConnect"></a>
<a id="tocSquickconnect"></a>
<a id="tocsquickconnect"></a>

```json
{
  "QuickConnectARN": {},
  "QuickConnectId": {},
  "Name": {},
  "Description": {},
  "QuickConnectConfig": {
    "QuickConnectType": {},
    "UserConfig": {
      "UserId": {},
      "ContactFlowId": {}
    },
    "QueueConfig": {
      "QueueId": {},
      "ContactFlowId": {}
    },
    "PhoneConfig": {
      "PhoneNumber": {}
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains information about a quick connect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuickConnectARN|object|false|none|none|
|QuickConnectId|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|QuickConnectConfig|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeRoutingProfileRequest">DescribeRoutingProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberoutingprofilerequest"></a>
<a id="schema_DescribeRoutingProfileRequest"></a>
<a id="tocSdescriberoutingprofilerequest"></a>
<a id="tocsdescriberoutingprofilerequest"></a>

```json
{}
```

<h2 id="tocS_RoutingProfile">RoutingProfile</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofile"></a>
<a id="schema_RoutingProfile"></a>
<a id="tocSroutingprofile"></a>
<a id="tocsroutingprofile"></a>

```json
{
  "InstanceId": {},
  "Name": {},
  "RoutingProfileArn": {},
  "RoutingProfileId": {},
  "Description": {},
  "MediaConcurrencies": {},
  "DefaultOutboundQueueId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "NumberOfAssociatedQueues": {},
  "NumberOfAssociatedUsers": {}
}
```

Contains information about a routing profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|
|Name|object|false|none|none|
|RoutingProfileArn|object|false|none|none|
|RoutingProfileId|object|false|none|none|
|Description|object|false|none|none|
|MediaConcurrencies|object|false|none|none|
|DefaultOutboundQueueId|object|false|none|none|
|Tags|object|false|none|none|
|NumberOfAssociatedQueues|object|false|none|none|
|NumberOfAssociatedUsers|object|false|none|none|

<h2 id="tocS_DescribeRuleRequest">DescribeRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberulerequest"></a>
<a id="schema_DescribeRuleRequest"></a>
<a id="tocSdescriberulerequest"></a>
<a id="tocsdescriberulerequest"></a>

```json
{}
```

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "Name": {},
  "RuleId": {},
  "RuleArn": {},
  "TriggerEventSource": {
    "EventSourceName": {},
    "IntegrationAssociationId": {}
  },
  "Function": {},
  "Actions": {},
  "PublishStatus": {},
  "CreatedTime": {},
  "LastUpdatedTime": {},
  "LastUpdatedBy": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information about a rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|RuleId|object|true|none|none|
|RuleArn|object|true|none|none|
|TriggerEventSource|object|true|none|none|
|Function|object|true|none|none|
|Actions|object|true|none|none|
|PublishStatus|object|true|none|none|
|CreatedTime|object|true|none|none|
|LastUpdatedTime|object|true|none|none|
|LastUpdatedBy|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeSecurityProfileRequest">DescribeSecurityProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesecurityprofilerequest"></a>
<a id="schema_DescribeSecurityProfileRequest"></a>
<a id="tocSdescribesecurityprofilerequest"></a>
<a id="tocsdescribesecurityprofilerequest"></a>

```json
{}
```

<h2 id="tocS_SecurityProfile">SecurityProfile</h2>
<!-- backwards compatibility -->
<a id="schemasecurityprofile"></a>
<a id="schema_SecurityProfile"></a>
<a id="tocSsecurityprofile"></a>
<a id="tocssecurityprofile"></a>

```json
{
  "Id": {},
  "OrganizationResourceId": {},
  "Arn": {},
  "SecurityProfileName": {},
  "Description": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "AllowedAccessControlTags": {
    "property1": "string",
    "property2": "string"
  },
  "TagRestrictedResources": {}
}
```

Contains information about a security profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|OrganizationResourceId|object|false|none|none|
|Arn|object|false|none|none|
|SecurityProfileName|object|false|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|
|AllowedAccessControlTags|object|false|none|none|
|TagRestrictedResources|object|false|none|none|

<h2 id="tocS_DescribeTrafficDistributionGroupRequest">DescribeTrafficDistributionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrafficdistributiongrouprequest"></a>
<a id="schema_DescribeTrafficDistributionGroupRequest"></a>
<a id="tocSdescribetrafficdistributiongrouprequest"></a>
<a id="tocsdescribetrafficdistributiongrouprequest"></a>

```json
{}
```

<h2 id="tocS_TrafficDistributionGroup">TrafficDistributionGroup</h2>
<!-- backwards compatibility -->
<a id="schematrafficdistributiongroup"></a>
<a id="schema_TrafficDistributionGroup"></a>
<a id="tocStrafficdistributiongroup"></a>
<a id="tocstrafficdistributiongroup"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "Description": {},
  "InstanceArn": {},
  "Status": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information about a traffic distribution group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|InstanceArn|object|false|none|none|
|Status|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeUserHierarchyGroupRequest">DescribeUserHierarchyGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserhierarchygrouprequest"></a>
<a id="schema_DescribeUserHierarchyGroupRequest"></a>
<a id="tocSdescribeuserhierarchygrouprequest"></a>
<a id="tocsdescribeuserhierarchygrouprequest"></a>

```json
{}
```

<h2 id="tocS_HierarchyGroup">HierarchyGroup</h2>
<!-- backwards compatibility -->
<a id="schemahierarchygroup"></a>
<a id="schema_HierarchyGroup"></a>
<a id="tocShierarchygroup"></a>
<a id="tocshierarchygroup"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "LevelId": {},
  "HierarchyPath": {
    "LevelOne": {
      "Id": {},
      "Arn": {},
      "Name": {}
    },
    "LevelTwo": {
      "Id": {},
      "Arn": {},
      "Name": {}
    },
    "LevelThree": {
      "Id": {},
      "Arn": {},
      "Name": {}
    },
    "LevelFour": {
      "Id": {},
      "Arn": {},
      "Name": {}
    },
    "LevelFive": {
      "Id": {},
      "Arn": {},
      "Name": {}
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains information about a hierarchy group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|LevelId|object|false|none|none|
|HierarchyPath|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeUserHierarchyStructureRequest">DescribeUserHierarchyStructureRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserhierarchystructurerequest"></a>
<a id="schema_DescribeUserHierarchyStructureRequest"></a>
<a id="tocSdescribeuserhierarchystructurerequest"></a>
<a id="tocsdescribeuserhierarchystructurerequest"></a>

```json
{}
```

<h2 id="tocS_HierarchyStructure">HierarchyStructure</h2>
<!-- backwards compatibility -->
<a id="schemahierarchystructure"></a>
<a id="schema_HierarchyStructure"></a>
<a id="tocShierarchystructure"></a>
<a id="tocshierarchystructure"></a>

```json
{
  "LevelOne": {
    "Id": {},
    "Arn": {},
    "Name": {}
  },
  "LevelTwo": {
    "Id": {},
    "Arn": {},
    "Name": {}
  },
  "LevelThree": {
    "Id": {},
    "Arn": {},
    "Name": {}
  },
  "LevelFour": {
    "Id": {},
    "Arn": {},
    "Name": {}
  },
  "LevelFive": {
    "Id": {},
    "Arn": {},
    "Name": {}
  }
}
```

Contains information about a hierarchy structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LevelOne|object|false|none|none|
|LevelTwo|object|false|none|none|
|LevelThree|object|false|none|none|
|LevelFour|object|false|none|none|
|LevelFive|object|false|none|none|

<h2 id="tocS_DescribeUserRequest">DescribeUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserrequest"></a>
<a id="schema_DescribeUserRequest"></a>
<a id="tocSdescribeuserrequest"></a>
<a id="tocsdescribeuserrequest"></a>

```json
{}
```

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Username": {},
  "IdentityInfo": {
    "FirstName": {},
    "LastName": {},
    "Email": {},
    "SecondaryEmail": {},
    "Mobile": {}
  },
  "PhoneConfig": {
    "PhoneType": {},
    "AutoAccept": {},
    "AfterContactWorkTimeLimit": {},
    "DeskPhoneNumber": {}
  },
  "DirectoryUserId": {},
  "SecurityProfileIds": {},
  "RoutingProfileId": {},
  "HierarchyGroupId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains information about a user account for an Amazon Connect instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Username|object|false|none|none|
|IdentityInfo|object|false|none|none|
|PhoneConfig|object|false|none|none|
|DirectoryUserId|object|false|none|none|
|SecurityProfileIds|object|false|none|none|
|RoutingProfileId|object|false|none|none|
|HierarchyGroupId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeVocabularyRequest">DescribeVocabularyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribevocabularyrequest"></a>
<a id="schema_DescribeVocabularyRequest"></a>
<a id="tocSdescribevocabularyrequest"></a>
<a id="tocsdescribevocabularyrequest"></a>

```json
{}
```

<h2 id="tocS_Vocabulary">Vocabulary</h2>
<!-- backwards compatibility -->
<a id="schemavocabulary"></a>
<a id="schema_Vocabulary"></a>
<a id="tocSvocabulary"></a>
<a id="tocsvocabulary"></a>

```json
{
  "Name": {},
  "Id": {},
  "Arn": {},
  "LanguageCode": {},
  "State": {},
  "LastModifiedTime": {},
  "FailureReason": {},
  "Content": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains information about a custom vocabulary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Id|object|true|none|none|
|Arn|object|true|none|none|
|LanguageCode|object|true|none|none|
|State|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|FailureReason|object|false|none|none|
|Content|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_RoutingProfileReference">RoutingProfileReference</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofilereference"></a>
<a id="schema_RoutingProfileReference"></a>
<a id="tocSroutingprofilereference"></a>
<a id="tocsroutingprofilereference"></a>

```json
{
  "Id": {},
  "Arn": {}
}
```

Information about the routing profile assigned to the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_DimensionsV2Key">DimensionsV2Key</h2>
<!-- backwards compatibility -->
<a id="schemadimensionsv2key"></a>
<a id="schema_DimensionsV2Key"></a>
<a id="tocSdimensionsv2key"></a>
<a id="tocsdimensionsv2key"></a>

```json
"string"
```

<h2 id="tocS_DimensionsV2Value">DimensionsV2Value</h2>
<!-- backwards compatibility -->
<a id="schemadimensionsv2value"></a>
<a id="schema_DimensionsV2Value"></a>
<a id="tocSdimensionsv2value"></a>
<a id="tocsdimensionsv2value"></a>

```json
"string"
```

<h2 id="tocS_DimensionsV2Map">DimensionsV2Map</h2>
<!-- backwards compatibility -->
<a id="schemadimensionsv2map"></a>
<a id="schema_DimensionsV2Map"></a>
<a id="tocSdimensionsv2map"></a>
<a id="tocsdimensionsv2map"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DimensionsV2Value](#schemadimensionsv2value)|false|none|none|

<h2 id="tocS_DisassociateApprovedOriginRequest">DisassociateApprovedOriginRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateapprovedoriginrequest"></a>
<a id="schema_DisassociateApprovedOriginRequest"></a>
<a id="tocSdisassociateapprovedoriginrequest"></a>
<a id="tocsdisassociateapprovedoriginrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateBotRequest">DisassociateBotRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatebotrequest"></a>
<a id="schema_DisassociateBotRequest"></a>
<a id="tocSdisassociatebotrequest"></a>
<a id="tocsdisassociatebotrequest"></a>

```json
{
  "LexBot": {
    "Name": {},
    "LexRegion": {}
  },
  "LexV2Bot": {
    "AliasArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LexBot|[LexBot](#schemalexbot)|false|none|Configuration information of an Amazon Lex bot.|
|LexV2Bot|object|false|none|none|

<h2 id="tocS_DisassociateInstanceStorageConfigRequest">DisassociateInstanceStorageConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateinstancestorageconfigrequest"></a>
<a id="schema_DisassociateInstanceStorageConfigRequest"></a>
<a id="tocSdisassociateinstancestorageconfigrequest"></a>
<a id="tocsdisassociateinstancestorageconfigrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateLambdaFunctionRequest">DisassociateLambdaFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatelambdafunctionrequest"></a>
<a id="schema_DisassociateLambdaFunctionRequest"></a>
<a id="tocSdisassociatelambdafunctionrequest"></a>
<a id="tocsdisassociatelambdafunctionrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateLexBotRequest">DisassociateLexBotRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatelexbotrequest"></a>
<a id="schema_DisassociateLexBotRequest"></a>
<a id="tocSdisassociatelexbotrequest"></a>
<a id="tocsdisassociatelexbotrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociatePhoneNumberContactFlowRequest">DisassociatePhoneNumberContactFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatephonenumbercontactflowrequest"></a>
<a id="schema_DisassociatePhoneNumberContactFlowRequest"></a>
<a id="tocSdisassociatephonenumbercontactflowrequest"></a>
<a id="tocsdisassociatephonenumbercontactflowrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateQueueQuickConnectsRequest">DisassociateQueueQuickConnectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatequeuequickconnectsrequest"></a>
<a id="schema_DisassociateQueueQuickConnectsRequest"></a>
<a id="tocSdisassociatequeuequickconnectsrequest"></a>
<a id="tocsdisassociatequeuequickconnectsrequest"></a>

```json
{
  "QuickConnectIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuickConnectIds|object|true|none|none|

<h2 id="tocS_RoutingProfileQueueReferenceList">RoutingProfileQueueReferenceList</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofilequeuereferencelist"></a>
<a id="schema_RoutingProfileQueueReferenceList"></a>
<a id="tocSroutingprofilequeuereferencelist"></a>
<a id="tocsroutingprofilequeuereferencelist"></a>

```json
[
  {
    "QueueId": {},
    "Channel": {}
  }
]
```

<h2 id="tocS_DisassociateRoutingProfileQueuesRequest">DisassociateRoutingProfileQueuesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateroutingprofilequeuesrequest"></a>
<a id="schema_DisassociateRoutingProfileQueuesRequest"></a>
<a id="tocSdisassociateroutingprofilequeuesrequest"></a>
<a id="tocsdisassociateroutingprofilequeuesrequest"></a>

```json
{
  "QueueReferences": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueReferences|object|true|none|none|

<h2 id="tocS_DisassociateSecurityKeyRequest">DisassociateSecurityKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatesecuritykeyrequest"></a>
<a id="schema_DisassociateSecurityKeyRequest"></a>
<a id="tocSdisassociatesecuritykeyrequest"></a>
<a id="tocsdisassociatesecuritykeyrequest"></a>

```json
{}
```

<h2 id="tocS_DismissUserContactRequest">DismissUserContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemadismissusercontactrequest"></a>
<a id="schema_DismissUserContactRequest"></a>
<a id="tocSdismissusercontactrequest"></a>
<a id="tocsdismissusercontactrequest"></a>

```json
{
  "ContactId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|true|none|none|

<h2 id="tocS_Percentage">Percentage</h2>
<!-- backwards compatibility -->
<a id="schemapercentage"></a>
<a id="schema_Percentage"></a>
<a id="tocSpercentage"></a>
<a id="tocspercentage"></a>

```json
0
```

<h2 id="tocS_Distribution">Distribution</h2>
<!-- backwards compatibility -->
<a id="schemadistribution"></a>
<a id="schema_Distribution"></a>
<a id="tocSdistribution"></a>
<a id="tocsdistribution"></a>

```json
{
  "Region": {},
  "Percentage": {}
}
```

Information about a traffic distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Region|object|true|none|none|
|Percentage|object|true|none|none|

<h2 id="tocS_EmailReference">EmailReference</h2>
<!-- backwards compatibility -->
<a id="schemaemailreference"></a>
<a id="schema_EmailReference"></a>
<a id="tocSemailreference"></a>
<a id="tocsemailreference"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Information about a reference when the <code>referenceType</code> is <code>EMAIL</code>. Otherwise, null.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_EncryptionType">EncryptionType</h2>
<!-- backwards compatibility -->
<a id="schemaencryptiontype"></a>
<a id="schema_EncryptionType"></a>
<a id="tocSencryptiontype"></a>
<a id="tocsencryptiontype"></a>

```json
"KMS"
```

<h2 id="tocS_KeyId">KeyId</h2>
<!-- backwards compatibility -->
<a id="schemakeyid"></a>
<a id="schema_KeyId"></a>
<a id="tocSkeyid"></a>
<a id="tocskeyid"></a>

```json
"string"
```

<h2 id="tocS_EncryptionConfig">EncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfig"></a>
<a id="schema_EncryptionConfig"></a>
<a id="tocSencryptionconfig"></a>
<a id="tocsencryptionconfig"></a>

```json
{
  "EncryptionType": {},
  "KeyId": {}
}
```

The encryption configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncryptionType|object|true|none|none|
|KeyId|object|true|none|none|

<h2 id="tocS_EventBridgeActionName">EventBridgeActionName</h2>
<!-- backwards compatibility -->
<a id="schemaeventbridgeactionname"></a>
<a id="schema_EventBridgeActionName"></a>
<a id="tocSeventbridgeactionname"></a>
<a id="tocseventbridgeactionname"></a>

```json
"string"
```

<h2 id="tocS_EventBridgeActionDefinition">EventBridgeActionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaeventbridgeactiondefinition"></a>
<a id="schema_EventBridgeActionDefinition"></a>
<a id="tocSeventbridgeactiondefinition"></a>
<a id="tocseventbridgeactiondefinition"></a>

```json
{
  "Name": {}
}
```

The EventBridge action definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_ResourceArnOrId">ResourceArnOrId</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearnorid"></a>
<a id="schema_ResourceArnOrId"></a>
<a id="tocSresourcearnorid"></a>
<a id="tocsresourcearnorid"></a>

```json
"string"
```

<h2 id="tocS_FilterValueList">FilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemafiltervaluelist"></a>
<a id="schema_FilterValueList"></a>
<a id="tocSfiltervaluelist"></a>
<a id="tocsfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
{
  "Queues": {},
  "Channels": {},
  "RoutingProfiles": {}
}
```

Contains the filter to apply when retrieving metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Queues|object|false|none|none|
|Channels|object|false|none|none|
|RoutingProfiles|object|false|none|none|

<h2 id="tocS_FiltersV2List">FiltersV2List</h2>
<!-- backwards compatibility -->
<a id="schemafiltersv2list"></a>
<a id="schema_FiltersV2List"></a>
<a id="tocSfiltersv2list"></a>
<a id="tocsfiltersv2list"></a>

```json
[
  {
    "FilterKey": {},
    "FilterValues": {}
  }
]
```

<h2 id="tocS_FunctionArnsList">FunctionArnsList</h2>
<!-- backwards compatibility -->
<a id="schemafunctionarnslist"></a>
<a id="schema_FunctionArnsList"></a>
<a id="tocSfunctionarnslist"></a>
<a id="tocsfunctionarnslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetContactAttributesRequest">GetContactAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactattributesrequest"></a>
<a id="schema_GetContactAttributesRequest"></a>
<a id="tocSgetcontactattributesrequest"></a>
<a id="tocsgetcontactattributesrequest"></a>

```json
{}
```

<h2 id="tocS_Groupings">Groupings</h2>
<!-- backwards compatibility -->
<a id="schemagroupings"></a>
<a id="schema_Groupings"></a>
<a id="tocSgroupings"></a>
<a id="tocsgroupings"></a>

```json
[
  "QUEUE"
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

<h2 id="tocS_MaxResult100">MaxResult100</h2>
<!-- backwards compatibility -->
<a id="schemamaxresult100"></a>
<a id="schema_MaxResult100"></a>
<a id="tocSmaxresult100"></a>
<a id="tocsmaxresult100"></a>

```json
1
```

<h2 id="tocS_GetCurrentMetricDataRequest">GetCurrentMetricDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcurrentmetricdatarequest"></a>
<a id="schema_GetCurrentMetricDataRequest"></a>
<a id="tocSgetcurrentmetricdatarequest"></a>
<a id="tocsgetcurrentmetricdatarequest"></a>

```json
{
  "Filters": {
    "Queues": {},
    "Channels": {},
    "RoutingProfiles": {}
  },
  "Groupings": {},
  "CurrentMetrics": {},
  "NextToken": {},
  "MaxResults": {},
  "SortCriteria": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|true|none|none|
|Groupings|object|false|none|none|
|CurrentMetrics|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|SortCriteria|object|false|none|none|

<h2 id="tocS_UserDataFilters">UserDataFilters</h2>
<!-- backwards compatibility -->
<a id="schemauserdatafilters"></a>
<a id="schema_UserDataFilters"></a>
<a id="tocSuserdatafilters"></a>
<a id="tocsuserdatafilters"></a>

```json
{
  "Queues": {},
  "ContactFilter": {
    "ContactStates": {}
  },
  "RoutingProfiles": {},
  "Agents": {},
  "UserHierarchyGroups": {}
}
```

A filter for the user data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Queues|object|false|none|none|
|ContactFilter|object|false|none|none|
|RoutingProfiles|object|false|none|none|
|Agents|object|false|none|none|
|UserHierarchyGroups|object|false|none|none|

<h2 id="tocS_GetCurrentUserDataRequest">GetCurrentUserDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcurrentuserdatarequest"></a>
<a id="schema_GetCurrentUserDataRequest"></a>
<a id="tocSgetcurrentuserdatarequest"></a>
<a id="tocsgetcurrentuserdatarequest"></a>

```json
{
  "Filters": {
    "Queues": {},
    "ContactFilter": {
      "ContactStates": {}
    },
    "RoutingProfiles": {},
    "Agents": {},
    "UserHierarchyGroups": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_UserDataList">UserDataList</h2>
<!-- backwards compatibility -->
<a id="schemauserdatalist"></a>
<a id="schema_UserDataList"></a>
<a id="tocSuserdatalist"></a>
<a id="tocsuserdatalist"></a>

```json
[
  {
    "User": {
      "Id": {},
      "Arn": {}
    },
    "RoutingProfile": {
      "Id": {},
      "Arn": {}
    },
    "HierarchyPath": {
      "LevelOne": {
        "Id": {},
        "Arn": {}
      },
      "LevelTwo": {
        "Id": {},
        "Arn": {}
      },
      "LevelThree": {
        "Id": {},
        "Arn": {}
      },
      "LevelFour": {
        "Id": {},
        "Arn": {}
      },
      "LevelFive": {
        "Id": {},
        "Arn": {}
      }
    },
    "Status": {
      "StatusStartTimestamp": {},
      "StatusArn": {},
      "StatusName": {}
    },
    "AvailableSlotsByChannel": {
      "property1": 0,
      "property2": 0
    },
    "MaxSlotsByChannel": {
      "property1": 0,
      "property2": 0
    },
    "ActiveSlotsByChannel": {
      "property1": 0,
      "property2": 0
    },
    "Contacts": {},
    "NextStatus": {}
  }
]
```

<h2 id="tocS_GetFederationTokenRequest">GetFederationTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfederationtokenrequest"></a>
<a id="schema_GetFederationTokenRequest"></a>
<a id="tocSgetfederationtokenrequest"></a>
<a id="tocsgetfederationtokenrequest"></a>

```json
{}
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

<h2 id="tocS_HistoricalMetrics">HistoricalMetrics</h2>
<!-- backwards compatibility -->
<a id="schemahistoricalmetrics"></a>
<a id="schema_HistoricalMetrics"></a>
<a id="tocShistoricalmetrics"></a>
<a id="tocshistoricalmetrics"></a>

```json
[
  {
    "Name": {},
    "Threshold": {
      "Comparison": {},
      "ThresholdValue": {}
    },
    "Statistic": {},
    "Unit": {}
  }
]
```

<h2 id="tocS_GetMetricDataRequest">GetMetricDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmetricdatarequest"></a>
<a id="schema_GetMetricDataRequest"></a>
<a id="tocSgetmetricdatarequest"></a>
<a id="tocsgetmetricdatarequest"></a>

```json
{
  "StartTime": {},
  "EndTime": {},
  "Filters": {
    "Queues": {},
    "Channels": {},
    "RoutingProfiles": {}
  },
  "Groupings": {},
  "HistoricalMetrics": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|Filters|object|true|none|none|
|Groupings|object|false|none|none|
|HistoricalMetrics|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_HistoricalMetricResults">HistoricalMetricResults</h2>
<!-- backwards compatibility -->
<a id="schemahistoricalmetricresults"></a>
<a id="schema_HistoricalMetricResults"></a>
<a id="tocShistoricalmetricresults"></a>
<a id="tocshistoricalmetricresults"></a>

```json
[
  {
    "Dimensions": {
      "Queue": {
        "Id": {},
        "Arn": {}
      },
      "Channel": {},
      "RoutingProfile": {
        "Id": {},
        "Arn": {}
      }
    },
    "Collections": {}
  }
]
```

<h2 id="tocS_GroupingsV2">GroupingsV2</h2>
<!-- backwards compatibility -->
<a id="schemagroupingsv2"></a>
<a id="schema_GroupingsV2"></a>
<a id="tocSgroupingsv2"></a>
<a id="tocsgroupingsv2"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MetricsV2">MetricsV2</h2>
<!-- backwards compatibility -->
<a id="schemametricsv2"></a>
<a id="schema_MetricsV2"></a>
<a id="tocSmetricsv2"></a>
<a id="tocsmetricsv2"></a>

```json
[
  {
    "Name": {},
    "Threshold": {},
    "MetricFilters": {}
  }
]
```

<h2 id="tocS_NextToken2500">NextToken2500</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken2500"></a>
<a id="schema_NextToken2500"></a>
<a id="tocSnexttoken2500"></a>
<a id="tocsnexttoken2500"></a>

```json
"string"
```

<h2 id="tocS_GetMetricDataV2Request">GetMetricDataV2Request</h2>
<!-- backwards compatibility -->
<a id="schemagetmetricdatav2request"></a>
<a id="schema_GetMetricDataV2Request"></a>
<a id="tocSgetmetricdatav2request"></a>
<a id="tocsgetmetricdatav2request"></a>

```json
{
  "ResourceArn": {},
  "StartTime": {},
  "EndTime": {},
  "Filters": {},
  "Groupings": {},
  "Metrics": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|Filters|object|true|none|none|
|Groupings|object|false|none|none|
|Metrics|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_MetricResultsV2">MetricResultsV2</h2>
<!-- backwards compatibility -->
<a id="schemametricresultsv2"></a>
<a id="schema_MetricResultsV2"></a>
<a id="tocSmetricresultsv2"></a>
<a id="tocsmetricresultsv2"></a>

```json
[
  {
    "Dimensions": {
      "property1": "string",
      "property2": "string"
    },
    "Collections": {}
  }
]
```

<h2 id="tocS_SnapshotVersion">SnapshotVersion</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotversion"></a>
<a id="schema_SnapshotVersion"></a>
<a id="tocSsnapshotversion"></a>
<a id="tocssnapshotversion"></a>

```json
"string"
```

<h2 id="tocS_GetTaskTemplateRequest">GetTaskTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettasktemplaterequest"></a>
<a id="schema_GetTaskTemplateRequest"></a>
<a id="tocSgettasktemplaterequest"></a>
<a id="tocsgettasktemplaterequest"></a>

```json
{}
```

<h2 id="tocS_GetTrafficDistributionRequest">GetTrafficDistributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettrafficdistributionrequest"></a>
<a id="schema_GetTrafficDistributionRequest"></a>
<a id="tocSgettrafficdistributionrequest"></a>
<a id="tocsgettrafficdistributionrequest"></a>

```json
{}
```

<h2 id="tocS_TelephonyConfig">TelephonyConfig</h2>
<!-- backwards compatibility -->
<a id="schematelephonyconfig"></a>
<a id="schema_TelephonyConfig"></a>
<a id="tocStelephonyconfig"></a>
<a id="tocstelephonyconfig"></a>

```json
{
  "Distributions": {}
}
```

The distribution of traffic between the instance and its replicas.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Distributions|object|true|none|none|

<h2 id="tocS_HierarchyLevelId">HierarchyLevelId</h2>
<!-- backwards compatibility -->
<a id="schemahierarchylevelid"></a>
<a id="schema_HierarchyLevelId"></a>
<a id="tocShierarchylevelid"></a>
<a id="tocshierarchylevelid"></a>

```json
"string"
```

<h2 id="tocS_HierarchyPath">HierarchyPath</h2>
<!-- backwards compatibility -->
<a id="schemahierarchypath"></a>
<a id="schema_HierarchyPath"></a>
<a id="tocShierarchypath"></a>
<a id="tocshierarchypath"></a>

```json
{
  "LevelOne": {
    "Id": {},
    "Arn": {},
    "Name": {}
  },
  "LevelTwo": {
    "Id": {},
    "Arn": {},
    "Name": {}
  },
  "LevelThree": {
    "Id": {},
    "Arn": {},
    "Name": {}
  },
  "LevelFour": {
    "Id": {},
    "Arn": {},
    "Name": {}
  },
  "LevelFive": {
    "Id": {},
    "Arn": {},
    "Name": {}
  }
}
```

Contains information about the levels of a hierarchy group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LevelOne|object|false|none|none|
|LevelTwo|object|false|none|none|
|LevelThree|object|false|none|none|
|LevelFour|object|false|none|none|
|LevelFive|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_HierarchyGroupMatchType">HierarchyGroupMatchType</h2>
<!-- backwards compatibility -->
<a id="schemahierarchygroupmatchtype"></a>
<a id="schema_HierarchyGroupMatchType"></a>
<a id="tocShierarchygroupmatchtype"></a>
<a id="tocshierarchygroupmatchtype"></a>

```json
"EXACT"
```

<h2 id="tocS_HierarchyGroupSummary">HierarchyGroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemahierarchygroupsummary"></a>
<a id="schema_HierarchyGroupSummary"></a>
<a id="tocShierarchygroupsummary"></a>
<a id="tocshierarchygroupsummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {}
}
```

Contains summary information about a hierarchy group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_HierarchyGroupSummaryList">HierarchyGroupSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemahierarchygroupsummarylist"></a>
<a id="schema_HierarchyGroupSummaryList"></a>
<a id="tocShierarchygroupsummarylist"></a>
<a id="tocshierarchygroupsummarylist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {}
  }
]
```

<h2 id="tocS_HierarchyGroupSummaryReference">HierarchyGroupSummaryReference</h2>
<!-- backwards compatibility -->
<a id="schemahierarchygroupsummaryreference"></a>
<a id="schema_HierarchyGroupSummaryReference"></a>
<a id="tocShierarchygroupsummaryreference"></a>
<a id="tocshierarchygroupsummaryreference"></a>

```json
{
  "Id": {},
  "Arn": {}
}
```

Information about the hierarchy group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_HierarchyLevelName">HierarchyLevelName</h2>
<!-- backwards compatibility -->
<a id="schemahierarchylevelname"></a>
<a id="schema_HierarchyLevelName"></a>
<a id="tocShierarchylevelname"></a>
<a id="tocshierarchylevelname"></a>

```json
"string"
```

<h2 id="tocS_HierarchyLevel">HierarchyLevel</h2>
<!-- backwards compatibility -->
<a id="schemahierarchylevel"></a>
<a id="schema_HierarchyLevel"></a>
<a id="tocShierarchylevel"></a>
<a id="tocshierarchylevel"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {}
}
```

Contains information about a hierarchy level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_HierarchyPathReference">HierarchyPathReference</h2>
<!-- backwards compatibility -->
<a id="schemahierarchypathreference"></a>
<a id="schema_HierarchyPathReference"></a>
<a id="tocShierarchypathreference"></a>
<a id="tocshierarchypathreference"></a>

```json
{
  "LevelOne": {
    "Id": {},
    "Arn": {}
  },
  "LevelTwo": {
    "Id": {},
    "Arn": {}
  },
  "LevelThree": {
    "Id": {},
    "Arn": {}
  },
  "LevelFour": {
    "Id": {},
    "Arn": {}
  },
  "LevelFive": {
    "Id": {},
    "Arn": {}
  }
}
```

Information about the levels in the hierarchy group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LevelOne|object|false|none|none|
|LevelTwo|object|false|none|none|
|LevelThree|object|false|none|none|
|LevelFour|object|false|none|none|
|LevelFive|object|false|none|none|

<h2 id="tocS_HierarchyStructureUpdate">HierarchyStructureUpdate</h2>
<!-- backwards compatibility -->
<a id="schemahierarchystructureupdate"></a>
<a id="schema_HierarchyStructureUpdate"></a>
<a id="tocShierarchystructureupdate"></a>
<a id="tocshierarchystructureupdate"></a>

```json
{
  "LevelOne": {
    "Name": {}
  },
  "LevelTwo": {
    "Name": {}
  },
  "LevelThree": {
    "Name": {}
  },
  "LevelFour": {
    "Name": {}
  },
  "LevelFive": {
    "Name": {}
  }
}
```

Contains information about the level hierarchy to update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LevelOne|object|false|none|none|
|LevelTwo|object|false|none|none|
|LevelThree|object|false|none|none|
|LevelFour|object|false|none|none|
|LevelFive|object|false|none|none|

<h2 id="tocS_HistoricalMetricName">HistoricalMetricName</h2>
<!-- backwards compatibility -->
<a id="schemahistoricalmetricname"></a>
<a id="schema_HistoricalMetricName"></a>
<a id="tocShistoricalmetricname"></a>
<a id="tocshistoricalmetricname"></a>

```json
"CONTACTS_QUEUED"
```

The historical metric names.

<h2 id="tocS_Threshold">Threshold</h2>
<!-- backwards compatibility -->
<a id="schemathreshold"></a>
<a id="schema_Threshold"></a>
<a id="tocSthreshold"></a>
<a id="tocsthreshold"></a>

```json
{
  "Comparison": {},
  "ThresholdValue": {}
}
```

Contains information about the threshold for service level metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comparison|object|false|none|none|
|ThresholdValue|object|false|none|none|

<h2 id="tocS_Statistic">Statistic</h2>
<!-- backwards compatibility -->
<a id="schemastatistic"></a>
<a id="schema_Statistic"></a>
<a id="tocSstatistic"></a>
<a id="tocsstatistic"></a>

```json
"SUM"
```

<h2 id="tocS_HistoricalMetricData">HistoricalMetricData</h2>
<!-- backwards compatibility -->
<a id="schemahistoricalmetricdata"></a>
<a id="schema_HistoricalMetricData"></a>
<a id="tocShistoricalmetricdata"></a>
<a id="tocshistoricalmetricdata"></a>

```json
{
  "Metric": {
    "Name": {},
    "Threshold": {
      "Comparison": {},
      "ThresholdValue": {}
    },
    "Statistic": {},
    "Unit": {}
  },
  "Value": {}
}
```

Contains the data for a historical metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metric|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_HistoricalMetricDataCollections">HistoricalMetricDataCollections</h2>
<!-- backwards compatibility -->
<a id="schemahistoricalmetricdatacollections"></a>
<a id="schema_HistoricalMetricDataCollections"></a>
<a id="tocShistoricalmetricdatacollections"></a>
<a id="tocshistoricalmetricdatacollections"></a>

```json
[
  {
    "Metric": {
      "Name": {},
      "Threshold": {
        "Comparison": {},
        "ThresholdValue": {}
      },
      "Statistic": {},
      "Unit": {}
    },
    "Value": {}
  }
]
```

<h2 id="tocS_HistoricalMetricResult">HistoricalMetricResult</h2>
<!-- backwards compatibility -->
<a id="schemahistoricalmetricresult"></a>
<a id="schema_HistoricalMetricResult"></a>
<a id="tocShistoricalmetricresult"></a>
<a id="tocshistoricalmetricresult"></a>

```json
{
  "Dimensions": {
    "Queue": {
      "Id": {},
      "Arn": {}
    },
    "Channel": {},
    "RoutingProfile": {
      "Id": {},
      "Arn": {}
    }
  },
  "Collections": {}
}
```

Contains information about the historical metrics retrieved.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Dimensions|object|false|none|none|
|Collections|object|false|none|none|

<h2 id="tocS_Hours">Hours</h2>
<!-- backwards compatibility -->
<a id="schemahours"></a>
<a id="schema_Hours"></a>
<a id="tocShours"></a>
<a id="tocshours"></a>

```json
0
```

<h2 id="tocS_Hours24Format">Hours24Format</h2>
<!-- backwards compatibility -->
<a id="schemahours24format"></a>
<a id="schema_Hours24Format"></a>
<a id="tocShours24format"></a>
<a id="tocshours24format"></a>

```json
0
```

<h2 id="tocS_HoursOfOperationDays">HoursOfOperationDays</h2>
<!-- backwards compatibility -->
<a id="schemahoursofoperationdays"></a>
<a id="schema_HoursOfOperationDays"></a>
<a id="tocShoursofoperationdays"></a>
<a id="tocshoursofoperationdays"></a>

```json
"SUNDAY"
```

<h2 id="tocS_HoursOfOperationTimeSlice">HoursOfOperationTimeSlice</h2>
<!-- backwards compatibility -->
<a id="schemahoursofoperationtimeslice"></a>
<a id="schema_HoursOfOperationTimeSlice"></a>
<a id="tocShoursofoperationtimeslice"></a>
<a id="tocshoursofoperationtimeslice"></a>

```json
{
  "Hours": {},
  "Minutes": {}
}
```

The start time or end time for an hours of operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Hours|object|true|none|none|
|Minutes|object|true|none|none|

<h2 id="tocS_HoursOfOperationName">HoursOfOperationName</h2>
<!-- backwards compatibility -->
<a id="schemahoursofoperationname"></a>
<a id="schema_HoursOfOperationName"></a>
<a id="tocShoursofoperationname"></a>
<a id="tocshoursofoperationname"></a>

```json
"string"
```

<h2 id="tocS_HoursOfOperationSummary">HoursOfOperationSummary</h2>
<!-- backwards compatibility -->
<a id="schemahoursofoperationsummary"></a>
<a id="schema_HoursOfOperationSummary"></a>
<a id="tocShoursofoperationsummary"></a>
<a id="tocshoursofoperationsummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {}
}
```

Contains summary information about hours of operation for a contact center.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_HoursOfOperationSummaryList">HoursOfOperationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemahoursofoperationsummarylist"></a>
<a id="schema_HoursOfOperationSummaryList"></a>
<a id="tocShoursofoperationsummarylist"></a>
<a id="tocshoursofoperationsummarylist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {}
  }
]
```

<h2 id="tocS_MinutesLimit60">MinutesLimit60</h2>
<!-- backwards compatibility -->
<a id="schemaminuteslimit60"></a>
<a id="schema_MinutesLimit60"></a>
<a id="tocSminuteslimit60"></a>
<a id="tocsminuteslimit60"></a>

```json
0
```

<h2 id="tocS_ISO8601Datetime">ISO8601Datetime</h2>
<!-- backwards compatibility -->
<a id="schemaiso8601datetime"></a>
<a id="schema_ISO8601Datetime"></a>
<a id="tocSiso8601datetime"></a>
<a id="tocsiso8601datetime"></a>

```json
"string"
```

<h2 id="tocS_InstanceStatus">InstanceStatus</h2>
<!-- backwards compatibility -->
<a id="schemainstancestatus"></a>
<a id="schema_InstanceStatus"></a>
<a id="tocSinstancestatus"></a>
<a id="tocsinstancestatus"></a>

```json
"CREATION_IN_PROGRESS"
```

<h2 id="tocS_InstanceStatusReason">InstanceStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemainstancestatusreason"></a>
<a id="schema_InstanceStatusReason"></a>
<a id="tocSinstancestatusreason"></a>
<a id="tocsinstancestatusreason"></a>

```json
{
  "Message": {}
}
```

Relevant details why the instance was not successfully created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|object|false|none|none|

<h2 id="tocS_InstanceArn">InstanceArn</h2>
<!-- backwards compatibility -->
<a id="schemainstancearn"></a>
<a id="schema_InstanceArn"></a>
<a id="tocSinstancearn"></a>
<a id="tocsinstancearn"></a>

```json
"string"
```

<h2 id="tocS_InstanceStorageConfigs">InstanceStorageConfigs</h2>
<!-- backwards compatibility -->
<a id="schemainstancestorageconfigs"></a>
<a id="schema_InstanceStorageConfigs"></a>
<a id="tocSinstancestorageconfigs"></a>
<a id="tocsinstancestorageconfigs"></a>

```json
[
  {
    "AssociationId": {},
    "StorageType": {},
    "S3Config": {
      "BucketName": {},
      "BucketPrefix": {},
      "EncryptionConfig": {
        "EncryptionType": {},
        "KeyId": {}
      }
    },
    "KinesisVideoStreamConfig": {
      "Prefix": {},
      "RetentionPeriodHours": {},
      "EncryptionConfig": {
        "EncryptionType": {},
        "KeyId": {}
      }
    },
    "KinesisStreamConfig": {
      "StreamArn": {}
    },
    "KinesisFirehoseConfig": {
      "FirehoseArn": {}
    }
  }
]
```

<h2 id="tocS_InstanceSummary">InstanceSummary</h2>
<!-- backwards compatibility -->
<a id="schemainstancesummary"></a>
<a id="schema_InstanceSummary"></a>
<a id="tocSinstancesummary"></a>
<a id="tocsinstancesummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "IdentityManagementType": {},
  "InstanceAlias": {},
  "CreatedTime": {},
  "ServiceRole": {},
  "InstanceStatus": {},
  "InboundCallsEnabled": {},
  "OutboundCallsEnabled": {}
}
```

Information about the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|IdentityManagementType|object|false|none|none|
|InstanceAlias|object|false|none|none|
|CreatedTime|object|false|none|none|
|ServiceRole|object|false|none|none|
|InstanceStatus|object|false|none|none|
|InboundCallsEnabled|object|false|none|none|
|OutboundCallsEnabled|object|false|none|none|

<h2 id="tocS_InstanceSummaryList">InstanceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemainstancesummarylist"></a>
<a id="schema_InstanceSummaryList"></a>
<a id="tocSinstancesummarylist"></a>
<a id="tocsinstancesummarylist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "IdentityManagementType": {},
    "InstanceAlias": {},
    "CreatedTime": {},
    "ServiceRole": {},
    "InstanceStatus": {},
    "InboundCallsEnabled": {},
    "OutboundCallsEnabled": {}
  }
]
```

<h2 id="tocS_IntegrationAssociationSummary">IntegrationAssociationSummary</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationassociationsummary"></a>
<a id="schema_IntegrationAssociationSummary"></a>
<a id="tocSintegrationassociationsummary"></a>
<a id="tocsintegrationassociationsummary"></a>

```json
{
  "IntegrationAssociationId": {},
  "IntegrationAssociationArn": {},
  "InstanceId": {},
  "IntegrationType": {},
  "IntegrationArn": {},
  "SourceApplicationUrl": {},
  "SourceApplicationName": {},
  "SourceType": {}
}
```

Contains summary information about the associated AppIntegrations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IntegrationAssociationId|object|false|none|none|
|IntegrationAssociationArn|object|false|none|none|
|InstanceId|object|false|none|none|
|IntegrationType|object|false|none|none|
|IntegrationArn|object|false|none|none|
|SourceApplicationUrl|object|false|none|none|
|SourceApplicationName|object|false|none|none|
|SourceType|object|false|none|none|

<h2 id="tocS_IntegrationAssociationSummaryList">IntegrationAssociationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationassociationsummarylist"></a>
<a id="schema_IntegrationAssociationSummaryList"></a>
<a id="tocSintegrationassociationsummarylist"></a>
<a id="tocsintegrationassociationsummarylist"></a>

```json
[
  {
    "IntegrationAssociationId": {},
    "IntegrationAssociationArn": {},
    "InstanceId": {},
    "IntegrationType": {},
    "IntegrationArn": {},
    "SourceApplicationUrl": {},
    "SourceApplicationName": {},
    "SourceType": {}
  }
]
```

<h2 id="tocS_TaskTemplateFieldIdentifier">TaskTemplateFieldIdentifier</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatefieldidentifier"></a>
<a id="schema_TaskTemplateFieldIdentifier"></a>
<a id="tocStasktemplatefieldidentifier"></a>
<a id="tocstasktemplatefieldidentifier"></a>

```json
{
  "Name": {}
}
```

The identifier of the task template field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_InvisibleFieldInfo">InvisibleFieldInfo</h2>
<!-- backwards compatibility -->
<a id="schemainvisiblefieldinfo"></a>
<a id="schema_InvisibleFieldInfo"></a>
<a id="tocSinvisiblefieldinfo"></a>
<a id="tocsinvisiblefieldinfo"></a>

```json
{
  "Id": {
    "Name": {}
  }
}
```

A field that is invisible to an agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_Prefix">Prefix</h2>
<!-- backwards compatibility -->
<a id="schemaprefix"></a>
<a id="schema_Prefix"></a>
<a id="tocSprefix"></a>
<a id="tocsprefix"></a>

```json
"string"
```

<h2 id="tocS_LargeNextToken">LargeNextToken</h2>
<!-- backwards compatibility -->
<a id="schemalargenexttoken"></a>
<a id="schema_LargeNextToken"></a>
<a id="tocSlargenexttoken"></a>
<a id="tocslargenexttoken"></a>

```json
"string"
```

<h2 id="tocS_LexBotConfig">LexBotConfig</h2>
<!-- backwards compatibility -->
<a id="schemalexbotconfig"></a>
<a id="schema_LexBotConfig"></a>
<a id="tocSlexbotconfig"></a>
<a id="tocslexbotconfig"></a>

```json
{
  "LexBot": {
    "Name": {},
    "LexRegion": {}
  },
  "LexV2Bot": {
    "AliasArn": {}
  }
}
```

Configuration information of an Amazon Lex or Amazon Lex V2 bot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LexBot|[LexBot](#schemalexbot)|false|none|Configuration information of an Amazon Lex bot.|
|LexV2Bot|object|false|none|none|

<h2 id="tocS_LexBotConfigList">LexBotConfigList</h2>
<!-- backwards compatibility -->
<a id="schemalexbotconfiglist"></a>
<a id="schema_LexBotConfigList"></a>
<a id="tocSlexbotconfiglist"></a>
<a id="tocslexbotconfiglist"></a>

```json
[
  {
    "LexBot": {
      "Name": {},
      "LexRegion": {}
    },
    "LexV2Bot": {
      "AliasArn": {}
    }
  }
]
```

<h2 id="tocS_LexBotsList">LexBotsList</h2>
<!-- backwards compatibility -->
<a id="schemalexbotslist"></a>
<a id="schema_LexBotsList"></a>
<a id="tocSlexbotslist"></a>
<a id="tocslexbotslist"></a>

```json
[
  {
    "Name": {},
    "LexRegion": {}
  }
]
```

<h2 id="tocS_LexVersion">LexVersion</h2>
<!-- backwards compatibility -->
<a id="schemalexversion"></a>
<a id="schema_LexVersion"></a>
<a id="tocSlexversion"></a>
<a id="tocslexversion"></a>

```json
"V1"
```

<h2 id="tocS_MaxResult1000">MaxResult1000</h2>
<!-- backwards compatibility -->
<a id="schemamaxresult1000"></a>
<a id="schema_MaxResult1000"></a>
<a id="tocSmaxresult1000"></a>
<a id="tocsmaxresult1000"></a>

```json
1
```

<h2 id="tocS_ListAgentStatusRequest">ListAgentStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistagentstatusrequest"></a>
<a id="schema_ListAgentStatusRequest"></a>
<a id="tocSlistagentstatusrequest"></a>
<a id="tocslistagentstatusrequest"></a>

```json
{}
```

<h2 id="tocS_MaxResult25">MaxResult25</h2>
<!-- backwards compatibility -->
<a id="schemamaxresult25"></a>
<a id="schema_MaxResult25"></a>
<a id="tocSmaxresult25"></a>
<a id="tocsmaxresult25"></a>

```json
1
```

<h2 id="tocS_ListApprovedOriginsRequest">ListApprovedOriginsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistapprovedoriginsrequest"></a>
<a id="schema_ListApprovedOriginsRequest"></a>
<a id="tocSlistapprovedoriginsrequest"></a>
<a id="tocslistapprovedoriginsrequest"></a>

```json
{}
```

<h2 id="tocS_OriginsList">OriginsList</h2>
<!-- backwards compatibility -->
<a id="schemaoriginslist"></a>
<a id="schema_OriginsList"></a>
<a id="tocSoriginslist"></a>
<a id="tocsoriginslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListBotsRequest">ListBotsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbotsrequest"></a>
<a id="schema_ListBotsRequest"></a>
<a id="tocSlistbotsrequest"></a>
<a id="tocslistbotsrequest"></a>

```json
{}
```

<h2 id="tocS_ListContactFlowModulesRequest">ListContactFlowModulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactflowmodulesrequest"></a>
<a id="schema_ListContactFlowModulesRequest"></a>
<a id="tocSlistcontactflowmodulesrequest"></a>
<a id="tocslistcontactflowmodulesrequest"></a>

```json
{}
```

<h2 id="tocS_ListContactFlowsRequest">ListContactFlowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactflowsrequest"></a>
<a id="schema_ListContactFlowsRequest"></a>
<a id="tocSlistcontactflowsrequest"></a>
<a id="tocslistcontactflowsrequest"></a>

```json
{}
```

<h2 id="tocS_ReferenceTypes">ReferenceTypes</h2>
<!-- backwards compatibility -->
<a id="schemareferencetypes"></a>
<a id="schema_ReferenceTypes"></a>
<a id="tocSreferencetypes"></a>
<a id="tocsreferencetypes"></a>

```json
[
  "URL"
]
```

<h2 id="tocS_ListContactReferencesRequest">ListContactReferencesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactreferencesrequest"></a>
<a id="schema_ListContactReferencesRequest"></a>
<a id="tocSlistcontactreferencesrequest"></a>
<a id="tocslistcontactreferencesrequest"></a>

```json
{}
```

<h2 id="tocS_ReferenceSummaryList">ReferenceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemareferencesummarylist"></a>
<a id="schema_ReferenceSummaryList"></a>
<a id="tocSreferencesummarylist"></a>
<a id="tocsreferencesummarylist"></a>

```json
[
  {
    "Url": {
      "Name": {},
      "Value": {}
    },
    "Attachment": {
      "Name": {},
      "Value": {},
      "Status": {}
    },
    "String": {
      "Name": {},
      "Value": {}
    },
    "Number": {
      "Name": {},
      "Value": {}
    },
    "Date": {
      "Name": {},
      "Value": {}
    },
    "Email": {
      "Name": {},
      "Value": {}
    }
  }
]
```

<h2 id="tocS_VocabularyNextToken">VocabularyNextToken</h2>
<!-- backwards compatibility -->
<a id="schemavocabularynexttoken"></a>
<a id="schema_VocabularyNextToken"></a>
<a id="tocSvocabularynexttoken"></a>
<a id="tocsvocabularynexttoken"></a>

```json
"string"
```

<h2 id="tocS_ListDefaultVocabulariesRequest">ListDefaultVocabulariesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdefaultvocabulariesrequest"></a>
<a id="schema_ListDefaultVocabulariesRequest"></a>
<a id="tocSlistdefaultvocabulariesrequest"></a>
<a id="tocslistdefaultvocabulariesrequest"></a>

```json
{
  "LanguageCode": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageCode|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListHoursOfOperationsRequest">ListHoursOfOperationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisthoursofoperationsrequest"></a>
<a id="schema_ListHoursOfOperationsRequest"></a>
<a id="tocSlisthoursofoperationsrequest"></a>
<a id="tocslisthoursofoperationsrequest"></a>

```json
{}
```

<h2 id="tocS_MaxResult7">MaxResult7</h2>
<!-- backwards compatibility -->
<a id="schemamaxresult7"></a>
<a id="schema_MaxResult7"></a>
<a id="tocSmaxresult7"></a>
<a id="tocsmaxresult7"></a>

```json
1
```

<h2 id="tocS_ListInstanceAttributesRequest">ListInstanceAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinstanceattributesrequest"></a>
<a id="schema_ListInstanceAttributesRequest"></a>
<a id="tocSlistinstanceattributesrequest"></a>
<a id="tocslistinstanceattributesrequest"></a>

```json
{}
```

<h2 id="tocS_MaxResult10">MaxResult10</h2>
<!-- backwards compatibility -->
<a id="schemamaxresult10"></a>
<a id="schema_MaxResult10"></a>
<a id="tocSmaxresult10"></a>
<a id="tocsmaxresult10"></a>

```json
1
```

<h2 id="tocS_ListInstanceStorageConfigsRequest">ListInstanceStorageConfigsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancestorageconfigsrequest"></a>
<a id="schema_ListInstanceStorageConfigsRequest"></a>
<a id="tocSlistinstancestorageconfigsrequest"></a>
<a id="tocslistinstancestorageconfigsrequest"></a>

```json
{}
```

<h2 id="tocS_ListInstancesRequest">ListInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancesrequest"></a>
<a id="schema_ListInstancesRequest"></a>
<a id="tocSlistinstancesrequest"></a>
<a id="tocslistinstancesrequest"></a>

```json
{}
```

<h2 id="tocS_ListIntegrationAssociationsRequest">ListIntegrationAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistintegrationassociationsrequest"></a>
<a id="schema_ListIntegrationAssociationsRequest"></a>
<a id="tocSlistintegrationassociationsrequest"></a>
<a id="tocslistintegrationassociationsrequest"></a>

```json
{}
```

<h2 id="tocS_ListLambdaFunctionsRequest">ListLambdaFunctionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlambdafunctionsrequest"></a>
<a id="schema_ListLambdaFunctionsRequest"></a>
<a id="tocSlistlambdafunctionsrequest"></a>
<a id="tocslistlambdafunctionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListLexBotsRequest">ListLexBotsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlexbotsrequest"></a>
<a id="schema_ListLexBotsRequest"></a>
<a id="tocSlistlexbotsrequest"></a>
<a id="tocslistlexbotsrequest"></a>

```json
{}
```

<h2 id="tocS_PhoneNumberTypes">PhoneNumberTypes</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbertypes"></a>
<a id="schema_PhoneNumberTypes"></a>
<a id="tocSphonenumbertypes"></a>
<a id="tocsphonenumbertypes"></a>

```json
[
  "TOLL_FREE"
]
```

<h2 id="tocS_PhoneNumberCountryCodes">PhoneNumberCountryCodes</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbercountrycodes"></a>
<a id="schema_PhoneNumberCountryCodes"></a>
<a id="tocSphonenumbercountrycodes"></a>
<a id="tocsphonenumbercountrycodes"></a>

```json
[
  "AF"
]
```

<h2 id="tocS_ListPhoneNumbersRequest">ListPhoneNumbersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistphonenumbersrequest"></a>
<a id="schema_ListPhoneNumbersRequest"></a>
<a id="tocSlistphonenumbersrequest"></a>
<a id="tocslistphonenumbersrequest"></a>

```json
{}
```

<h2 id="tocS_PhoneNumberSummaryList">PhoneNumberSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbersummarylist"></a>
<a id="schema_PhoneNumberSummaryList"></a>
<a id="tocSphonenumbersummarylist"></a>
<a id="tocsphonenumbersummarylist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "PhoneNumber": {},
    "PhoneNumberType": {},
    "PhoneNumberCountryCode": {}
  }
]
```

<h2 id="tocS_ListPhoneNumbersSummary">ListPhoneNumbersSummary</h2>
<!-- backwards compatibility -->
<a id="schemalistphonenumberssummary"></a>
<a id="schema_ListPhoneNumbersSummary"></a>
<a id="tocSlistphonenumberssummary"></a>
<a id="tocslistphonenumberssummary"></a>

```json
{
  "PhoneNumberId": {},
  "PhoneNumberArn": {},
  "PhoneNumber": {},
  "PhoneNumberCountryCode": {},
  "PhoneNumberType": {},
  "TargetArn": {}
}
```

Information about phone numbers that have been claimed to your Amazon Connect instance or traffic distribution group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneNumberId|object|false|none|none|
|PhoneNumberArn|object|false|none|none|
|PhoneNumber|object|false|none|none|
|PhoneNumberCountryCode|object|false|none|none|
|PhoneNumberType|object|false|none|none|
|TargetArn|object|false|none|none|

<h2 id="tocS_ListPhoneNumbersSummaryList">ListPhoneNumbersSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemalistphonenumberssummarylist"></a>
<a id="schema_ListPhoneNumbersSummaryList"></a>
<a id="tocSlistphonenumberssummarylist"></a>
<a id="tocslistphonenumberssummarylist"></a>

```json
[
  {
    "PhoneNumberId": {},
    "PhoneNumberArn": {},
    "PhoneNumber": {},
    "PhoneNumberCountryCode": {},
    "PhoneNumberType": {},
    "TargetArn": {}
  }
]
```

<h2 id="tocS_PhoneNumberPrefix">PhoneNumberPrefix</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberprefix"></a>
<a id="schema_PhoneNumberPrefix"></a>
<a id="tocSphonenumberprefix"></a>
<a id="tocsphonenumberprefix"></a>

```json
"string"
```

<h2 id="tocS_ListPhoneNumbersV2Request">ListPhoneNumbersV2Request</h2>
<!-- backwards compatibility -->
<a id="schemalistphonenumbersv2request"></a>
<a id="schema_ListPhoneNumbersV2Request"></a>
<a id="tocSlistphonenumbersv2request"></a>
<a id="tocslistphonenumbersv2request"></a>

```json
{
  "TargetArn": {},
  "MaxResults": {},
  "NextToken": {},
  "PhoneNumberCountryCodes": {},
  "PhoneNumberTypes": {},
  "PhoneNumberPrefix": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetArn|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|PhoneNumberCountryCodes|object|false|none|none|
|PhoneNumberTypes|object|false|none|none|
|PhoneNumberPrefix|object|false|none|none|

<h2 id="tocS_ListPromptsRequest">ListPromptsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpromptsrequest"></a>
<a id="schema_ListPromptsRequest"></a>
<a id="tocSlistpromptsrequest"></a>
<a id="tocslistpromptsrequest"></a>

```json
{}
```

<h2 id="tocS_PromptSummaryList">PromptSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapromptsummarylist"></a>
<a id="schema_PromptSummaryList"></a>
<a id="tocSpromptsummarylist"></a>
<a id="tocspromptsummarylist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {}
  }
]
```

<h2 id="tocS_ListQueueQuickConnectsRequest">ListQueueQuickConnectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistqueuequickconnectsrequest"></a>
<a id="schema_ListQueueQuickConnectsRequest"></a>
<a id="tocSlistqueuequickconnectsrequest"></a>
<a id="tocslistqueuequickconnectsrequest"></a>

```json
{}
```

<h2 id="tocS_QuickConnectSummaryList">QuickConnectSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaquickconnectsummarylist"></a>
<a id="schema_QuickConnectSummaryList"></a>
<a id="tocSquickconnectsummarylist"></a>
<a id="tocsquickconnectsummarylist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {},
    "QuickConnectType": {}
  }
]
```

<h2 id="tocS_QueueTypes">QueueTypes</h2>
<!-- backwards compatibility -->
<a id="schemaqueuetypes"></a>
<a id="schema_QueueTypes"></a>
<a id="tocSqueuetypes"></a>
<a id="tocsqueuetypes"></a>

```json
[
  "STANDARD"
]
```

<h2 id="tocS_ListQueuesRequest">ListQueuesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistqueuesrequest"></a>
<a id="schema_ListQueuesRequest"></a>
<a id="tocSlistqueuesrequest"></a>
<a id="tocslistqueuesrequest"></a>

```json
{}
```

<h2 id="tocS_QueueSummaryList">QueueSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaqueuesummarylist"></a>
<a id="schema_QueueSummaryList"></a>
<a id="tocSqueuesummarylist"></a>
<a id="tocsqueuesummarylist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {},
    "QueueType": {}
  }
]
```

<h2 id="tocS_QuickConnectTypes">QuickConnectTypes</h2>
<!-- backwards compatibility -->
<a id="schemaquickconnecttypes"></a>
<a id="schema_QuickConnectTypes"></a>
<a id="tocSquickconnecttypes"></a>
<a id="tocsquickconnecttypes"></a>

```json
[
  "USER"
]
```

<h2 id="tocS_ListQuickConnectsRequest">ListQuickConnectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistquickconnectsrequest"></a>
<a id="schema_ListQuickConnectsRequest"></a>
<a id="tocSlistquickconnectsrequest"></a>
<a id="tocslistquickconnectsrequest"></a>

```json
{}
```

<h2 id="tocS_ListRoutingProfileQueuesRequest">ListRoutingProfileQueuesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistroutingprofilequeuesrequest"></a>
<a id="schema_ListRoutingProfileQueuesRequest"></a>
<a id="tocSlistroutingprofilequeuesrequest"></a>
<a id="tocslistroutingprofilequeuesrequest"></a>

```json
{}
```

<h2 id="tocS_RoutingProfileQueueConfigSummaryList">RoutingProfileQueueConfigSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofilequeueconfigsummarylist"></a>
<a id="schema_RoutingProfileQueueConfigSummaryList"></a>
<a id="tocSroutingprofilequeueconfigsummarylist"></a>
<a id="tocsroutingprofilequeueconfigsummarylist"></a>

```json
[
  {
    "QueueId": {},
    "QueueArn": {},
    "QueueName": {},
    "Priority": {},
    "Delay": {},
    "Channel": {}
  }
]
```

<h2 id="tocS_ListRoutingProfilesRequest">ListRoutingProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistroutingprofilesrequest"></a>
<a id="schema_ListRoutingProfilesRequest"></a>
<a id="tocSlistroutingprofilesrequest"></a>
<a id="tocslistroutingprofilesrequest"></a>

```json
{}
```

<h2 id="tocS_RoutingProfileSummaryList">RoutingProfileSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofilesummarylist"></a>
<a id="schema_RoutingProfileSummaryList"></a>
<a id="tocSroutingprofilesummarylist"></a>
<a id="tocsroutingprofilesummarylist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {}
  }
]
```

<h2 id="tocS_MaxResult200">MaxResult200</h2>
<!-- backwards compatibility -->
<a id="schemamaxresult200"></a>
<a id="schema_MaxResult200"></a>
<a id="tocSmaxresult200"></a>
<a id="tocsmaxresult200"></a>

```json
1
```

<h2 id="tocS_ListRulesRequest">ListRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrulesrequest"></a>
<a id="schema_ListRulesRequest"></a>
<a id="tocSlistrulesrequest"></a>
<a id="tocslistrulesrequest"></a>

```json
{}
```

<h2 id="tocS_RuleSummaryList">RuleSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemarulesummarylist"></a>
<a id="schema_RuleSummaryList"></a>
<a id="tocSrulesummarylist"></a>
<a id="tocsrulesummarylist"></a>

```json
[
  {
    "Name": {},
    "RuleId": {},
    "RuleArn": {},
    "EventSourceName": {},
    "PublishStatus": {},
    "ActionSummaries": {},
    "CreatedTime": {},
    "LastUpdatedTime": {}
  }
]
```

<h2 id="tocS_MaxResult2">MaxResult2</h2>
<!-- backwards compatibility -->
<a id="schemamaxresult2"></a>
<a id="schema_MaxResult2"></a>
<a id="tocSmaxresult2"></a>
<a id="tocsmaxresult2"></a>

```json
1
```

<h2 id="tocS_ListSecurityKeysRequest">ListSecurityKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsecuritykeysrequest"></a>
<a id="schema_ListSecurityKeysRequest"></a>
<a id="tocSlistsecuritykeysrequest"></a>
<a id="tocslistsecuritykeysrequest"></a>

```json
{}
```

<h2 id="tocS_SecurityKeysList">SecurityKeysList</h2>
<!-- backwards compatibility -->
<a id="schemasecuritykeyslist"></a>
<a id="schema_SecurityKeysList"></a>
<a id="tocSsecuritykeyslist"></a>
<a id="tocssecuritykeyslist"></a>

```json
[
  {
    "AssociationId": {},
    "Key": {},
    "CreationTime": {}
  }
]
```

<h2 id="tocS_ListSecurityProfilePermissionsRequest">ListSecurityProfilePermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsecurityprofilepermissionsrequest"></a>
<a id="schema_ListSecurityProfilePermissionsRequest"></a>
<a id="tocSlistsecurityprofilepermissionsrequest"></a>
<a id="tocslistsecurityprofilepermissionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListSecurityProfilesRequest">ListSecurityProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsecurityprofilesrequest"></a>
<a id="schema_ListSecurityProfilesRequest"></a>
<a id="tocSlistsecurityprofilesrequest"></a>
<a id="tocslistsecurityprofilesrequest"></a>

```json
{}
```

<h2 id="tocS_SecurityProfileSummaryList">SecurityProfileSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemasecurityprofilesummarylist"></a>
<a id="schema_SecurityProfileSummaryList"></a>
<a id="tocSsecurityprofilesummarylist"></a>
<a id="tocssecurityprofilesummarylist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {}
  }
]
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_ListTaskTemplatesRequest">ListTaskTemplatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttasktemplatesrequest"></a>
<a id="schema_ListTaskTemplatesRequest"></a>
<a id="tocSlisttasktemplatesrequest"></a>
<a id="tocslisttasktemplatesrequest"></a>

```json
{}
```

<h2 id="tocS_TaskTemplateList">TaskTemplateList</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatelist"></a>
<a id="schema_TaskTemplateList"></a>
<a id="tocStasktemplatelist"></a>
<a id="tocstasktemplatelist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Description": {},
    "Status": {},
    "LastModifiedTime": {},
    "CreatedTime": {}
  }
]
```

<h2 id="tocS_ListTrafficDistributionGroupsRequest">ListTrafficDistributionGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttrafficdistributiongroupsrequest"></a>
<a id="schema_ListTrafficDistributionGroupsRequest"></a>
<a id="tocSlisttrafficdistributiongroupsrequest"></a>
<a id="tocslisttrafficdistributiongroupsrequest"></a>

```json
{}
```

<h2 id="tocS_TrafficDistributionGroupSummaryList">TrafficDistributionGroupSummaryList</h2>
<!-- backwards compatibility -->
<a id="schematrafficdistributiongroupsummarylist"></a>
<a id="schema_TrafficDistributionGroupSummaryList"></a>
<a id="tocStrafficdistributiongroupsummarylist"></a>
<a id="tocstrafficdistributiongroupsummarylist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {},
    "InstanceArn": {},
    "Status": {}
  }
]
```

<h2 id="tocS_ListUseCasesRequest">ListUseCasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistusecasesrequest"></a>
<a id="schema_ListUseCasesRequest"></a>
<a id="tocSlistusecasesrequest"></a>
<a id="tocslistusecasesrequest"></a>

```json
{}
```

Provides summary information about the use cases for the specified integration association.

<h2 id="tocS_UseCaseSummaryList">UseCaseSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemausecasesummarylist"></a>
<a id="schema_UseCaseSummaryList"></a>
<a id="tocSusecasesummarylist"></a>
<a id="tocsusecasesummarylist"></a>

```json
[
  {
    "UseCaseId": {},
    "UseCaseArn": {},
    "UseCaseType": {}
  }
]
```

<h2 id="tocS_ListUserHierarchyGroupsRequest">ListUserHierarchyGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistuserhierarchygroupsrequest"></a>
<a id="schema_ListUserHierarchyGroupsRequest"></a>
<a id="tocSlistuserhierarchygroupsrequest"></a>
<a id="tocslistuserhierarchygroupsrequest"></a>

```json
{}
```

<h2 id="tocS_ListUsersRequest">ListUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistusersrequest"></a>
<a id="schema_ListUsersRequest"></a>
<a id="tocSlistusersrequest"></a>
<a id="tocslistusersrequest"></a>

```json
{}
```

<h2 id="tocS_UserSummaryList">UserSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemausersummarylist"></a>
<a id="schema_UserSummaryList"></a>
<a id="tocSusersummarylist"></a>
<a id="tocsusersummarylist"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Username": {}
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

<h2 id="tocS_MetricDataV2">MetricDataV2</h2>
<!-- backwards compatibility -->
<a id="schemametricdatav2"></a>
<a id="schema_MetricDataV2"></a>
<a id="tocSmetricdatav2"></a>
<a id="tocsmetricdatav2"></a>

```json
{
  "Metric": {
    "Name": {},
    "Threshold": {},
    "MetricFilters": {}
  },
  "Value": {}
}
```

Contains the name, thresholds, and metric filters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metric|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_MetricDataCollectionsV2">MetricDataCollectionsV2</h2>
<!-- backwards compatibility -->
<a id="schemametricdatacollectionsv2"></a>
<a id="schema_MetricDataCollectionsV2"></a>
<a id="tocSmetricdatacollectionsv2"></a>
<a id="tocsmetricdatacollectionsv2"></a>

```json
[
  {
    "Metric": {
      "Name": {},
      "Threshold": {},
      "MetricFilters": {}
    },
    "Value": {}
  }
]
```

<h2 id="tocS_MetricFilterValueList">MetricFilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemametricfiltervaluelist"></a>
<a id="schema_MetricFilterValueList"></a>
<a id="tocSmetricfiltervaluelist"></a>
<a id="tocsmetricfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MetricFilterV2">MetricFilterV2</h2>
<!-- backwards compatibility -->
<a id="schemametricfilterv2"></a>
<a id="schema_MetricFilterV2"></a>
<a id="tocSmetricfilterv2"></a>
<a id="tocsmetricfilterv2"></a>

```json
{
  "MetricFilterKey": {},
  "MetricFilterValues": {}
}
```

Contains information about the filter used when retrieving metrics. <code>MetricFiltersV2</code> can be used on the following metrics: <code>AVG_AGENT_CONNECTING_TIME</code>, <code>CONTACTS_CREATED</code>, <code>CONTACTS_HANDLED</code>, <code>SUM_CONTACTS_DISCONNECTED</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricFilterKey|object|false|none|none|
|MetricFilterValues|object|false|none|none|

<h2 id="tocS_MetricFiltersV2List">MetricFiltersV2List</h2>
<!-- backwards compatibility -->
<a id="schemametricfiltersv2list"></a>
<a id="schema_MetricFiltersV2List"></a>
<a id="tocSmetricfiltersv2list"></a>
<a id="tocsmetricfiltersv2list"></a>

```json
[
  {
    "MetricFilterKey": {},
    "MetricFilterValues": {}
  }
]
```

<h2 id="tocS_MetricNameV2">MetricNameV2</h2>
<!-- backwards compatibility -->
<a id="schemametricnamev2"></a>
<a id="schema_MetricNameV2"></a>
<a id="tocSmetricnamev2"></a>
<a id="tocsmetricnamev2"></a>

```json
"string"
```

<h2 id="tocS_MetricResultV2">MetricResultV2</h2>
<!-- backwards compatibility -->
<a id="schemametricresultv2"></a>
<a id="schema_MetricResultV2"></a>
<a id="tocSmetricresultv2"></a>
<a id="tocsmetricresultv2"></a>

```json
{
  "Dimensions": {
    "property1": "string",
    "property2": "string"
  },
  "Collections": {}
}
```

Contains information about the metric results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Dimensions|object|false|none|none|
|Collections|object|false|none|none|

<h2 id="tocS_ThresholdCollections">ThresholdCollections</h2>
<!-- backwards compatibility -->
<a id="schemathresholdcollections"></a>
<a id="schema_ThresholdCollections"></a>
<a id="tocSthresholdcollections"></a>
<a id="tocsthresholdcollections"></a>

```json
[
  {
    "Comparison": {},
    "ThresholdValue": {}
  }
]
```

<h2 id="tocS_MonitorContactRequest">MonitorContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemamonitorcontactrequest"></a>
<a id="schema_MonitorContactRequest"></a>
<a id="tocSmonitorcontactrequest"></a>
<a id="tocsmonitorcontactrequest"></a>

```json
{
  "InstanceId": {},
  "ContactId": {},
  "UserId": {},
  "AllowedMonitorCapabilities": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|ContactId|object|true|none|none|
|UserId|object|true|none|none|
|AllowedMonitorCapabilities|object|false|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_NotificationContentType">NotificationContentType</h2>
<!-- backwards compatibility -->
<a id="schemanotificationcontenttype"></a>
<a id="schema_NotificationContentType"></a>
<a id="tocSnotificationcontenttype"></a>
<a id="tocsnotificationcontenttype"></a>

```json
"PLAIN_TEXT"
```

<h2 id="tocS_NotificationDeliveryType">NotificationDeliveryType</h2>
<!-- backwards compatibility -->
<a id="schemanotificationdeliverytype"></a>
<a id="schema_NotificationDeliveryType"></a>
<a id="tocSnotificationdeliverytype"></a>
<a id="tocsnotificationdeliverytype"></a>

```json
"EMAIL"
```

<h2 id="tocS_UserTagMap">UserTagMap</h2>
<!-- backwards compatibility -->
<a id="schemausertagmap"></a>
<a id="schema_UserTagMap"></a>
<a id="tocSusertagmap"></a>
<a id="tocsusertagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_UserIdList">UserIdList</h2>
<!-- backwards compatibility -->
<a id="schemauseridlist"></a>
<a id="schema_UserIdList"></a>
<a id="tocSuseridlist"></a>
<a id="tocsuseridlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NotificationRecipientType">NotificationRecipientType</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrecipienttype"></a>
<a id="schema_NotificationRecipientType"></a>
<a id="tocSnotificationrecipienttype"></a>
<a id="tocsnotificationrecipienttype"></a>

```json
{
  "UserTags": {
    "property1": "string",
    "property2": "string"
  },
  "UserIds": {}
}
```

The type of notification recipient.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserTags|object|false|none|none|
|UserIds|object|false|none|none|

<h2 id="tocS_NumberReference">NumberReference</h2>
<!-- backwards compatibility -->
<a id="schemanumberreference"></a>
<a id="schema_NumberReference"></a>
<a id="tocSnumberreference"></a>
<a id="tocsnumberreference"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Information about a reference when the <code>referenceType</code> is <code>NUMBER</code>. Otherwise, null.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_ParticipantDetails">ParticipantDetails</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantdetails"></a>
<a id="schema_ParticipantDetails"></a>
<a id="tocSparticipantdetails"></a>
<a id="tocsparticipantdetails"></a>

```json
{
  "DisplayName": {}
}
```

The customer's details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisplayName|object|true|none|none|

<h2 id="tocS_ParticipantTimerAction">ParticipantTimerAction</h2>
<!-- backwards compatibility -->
<a id="schemaparticipanttimeraction"></a>
<a id="schema_ParticipantTimerAction"></a>
<a id="tocSparticipanttimeraction"></a>
<a id="tocsparticipanttimeraction"></a>

```json
"Unset"
```

<h2 id="tocS_ParticipantTimerConfiguration">ParticipantTimerConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaparticipanttimerconfiguration"></a>
<a id="schema_ParticipantTimerConfiguration"></a>
<a id="tocSparticipanttimerconfiguration"></a>
<a id="tocsparticipanttimerconfiguration"></a>

```json
{
  "ParticipantRole": {},
  "TimerType": {},
  "TimerValue": {
    "ParticipantTimerAction": {},
    "ParticipantTimerDurationInMinutes": {}
  }
}
```

<p>Configuration information for the timer. After the timer configuration is set, it persists for the duration of the chat. It persists across new contacts in the chain, for example, transfer contacts.</p> <p>For more information about how chat timeouts work, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParticipantRole|object|true|none|none|
|TimerType|object|true|none|none|
|TimerValue|object|true|none|none|

<h2 id="tocS_TimerEligibleParticipantRoles">TimerEligibleParticipantRoles</h2>
<!-- backwards compatibility -->
<a id="schematimereligibleparticipantroles"></a>
<a id="schema_TimerEligibleParticipantRoles"></a>
<a id="tocStimereligibleparticipantroles"></a>
<a id="tocstimereligibleparticipantroles"></a>

```json
"CUSTOMER"
```

<h2 id="tocS_ParticipantTimerType">ParticipantTimerType</h2>
<!-- backwards compatibility -->
<a id="schemaparticipanttimertype"></a>
<a id="schema_ParticipantTimerType"></a>
<a id="tocSparticipanttimertype"></a>
<a id="tocsparticipanttimertype"></a>

```json
"IDLE"
```

<h2 id="tocS_ParticipantTimerValue">ParticipantTimerValue</h2>
<!-- backwards compatibility -->
<a id="schemaparticipanttimervalue"></a>
<a id="schema_ParticipantTimerValue"></a>
<a id="tocSparticipanttimervalue"></a>
<a id="tocsparticipanttimervalue"></a>

```json
{
  "ParticipantTimerAction": {},
  "ParticipantTimerDurationInMinutes": {}
}
```

<p>The value of the timer. Either the timer action (<code>Unset</code> to delete the timer), or the duration of the timer in minutes. Only one value can be set.</p> <p>For more information about how chat timeouts work, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParticipantTimerAction|object|false|none|none|
|ParticipantTimerDurationInMinutes|object|false|none|none|

<h2 id="tocS_ParticipantTimerDurationInMinutes">ParticipantTimerDurationInMinutes</h2>
<!-- backwards compatibility -->
<a id="schemaparticipanttimerdurationinminutes"></a>
<a id="schema_ParticipantTimerDurationInMinutes"></a>
<a id="tocSparticipanttimerdurationinminutes"></a>
<a id="tocsparticipanttimerdurationinminutes"></a>

```json
2
```

<h2 id="tocS_ParticipantToken">ParticipantToken</h2>
<!-- backwards compatibility -->
<a id="schemaparticipanttoken"></a>
<a id="schema_ParticipantToken"></a>
<a id="tocSparticipanttoken"></a>
<a id="tocsparticipanttoken"></a>

```json
"string"
```

<h2 id="tocS_PersistentChat">PersistentChat</h2>
<!-- backwards compatibility -->
<a id="schemapersistentchat"></a>
<a id="schema_PersistentChat"></a>
<a id="tocSpersistentchat"></a>
<a id="tocspersistentchat"></a>

```json
{
  "RehydrationType": {},
  "SourceContactId": {}
}
```

Enable persistent chats. For more information about enabling persistent chat, and for example use cases and how to configure for them, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RehydrationType|object|false|none|none|
|SourceContactId|object|false|none|none|

<h2 id="tocS_PhoneNumberWorkflowStatus">PhoneNumberWorkflowStatus</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberworkflowstatus"></a>
<a id="schema_PhoneNumberWorkflowStatus"></a>
<a id="tocSphonenumberworkflowstatus"></a>
<a id="tocsphonenumberworkflowstatus"></a>

```json
"CLAIMED"
```

<h2 id="tocS_PhoneNumberWorkflowMessage">PhoneNumberWorkflowMessage</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberworkflowmessage"></a>
<a id="schema_PhoneNumberWorkflowMessage"></a>
<a id="tocSphonenumberworkflowmessage"></a>
<a id="tocsphonenumberworkflowmessage"></a>

```json
"string"
```

<h2 id="tocS_PhoneNumberSummary">PhoneNumberSummary</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbersummary"></a>
<a id="schema_PhoneNumberSummary"></a>
<a id="tocSphonenumbersummary"></a>
<a id="tocsphonenumbersummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "PhoneNumber": {},
  "PhoneNumberType": {},
  "PhoneNumberCountryCode": {}
}
```

Contains summary information about a phone number for a contact center.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|PhoneNumber|object|false|none|none|
|PhoneNumberType|object|false|none|none|
|PhoneNumberCountryCode|object|false|none|none|

<h2 id="tocS_Priority">Priority</h2>
<!-- backwards compatibility -->
<a id="schemapriority"></a>
<a id="schema_Priority"></a>
<a id="tocSpriority"></a>
<a id="tocspriority"></a>

```json
1
```

<h2 id="tocS_PromptId">PromptId</h2>
<!-- backwards compatibility -->
<a id="schemapromptid"></a>
<a id="schema_PromptId"></a>
<a id="tocSpromptid"></a>
<a id="tocspromptid"></a>

```json
"string"
```

<h2 id="tocS_PromptName">PromptName</h2>
<!-- backwards compatibility -->
<a id="schemapromptname"></a>
<a id="schema_PromptName"></a>
<a id="tocSpromptname"></a>
<a id="tocspromptname"></a>

```json
"string"
```

<h2 id="tocS_PromptSummary">PromptSummary</h2>
<!-- backwards compatibility -->
<a id="schemapromptsummary"></a>
<a id="schema_PromptSummary"></a>
<a id="tocSpromptsummary"></a>
<a id="tocspromptsummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {}
}
```

Contains information about the prompt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_PutUserStatusRequest">PutUserStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputuserstatusrequest"></a>
<a id="schema_PutUserStatusRequest"></a>
<a id="tocSputuserstatusrequest"></a>
<a id="tocsputuserstatusrequest"></a>

```json
{
  "AgentStatusId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AgentStatusId|object|true|none|none|

<h2 id="tocS_QueueStatus">QueueStatus</h2>
<!-- backwards compatibility -->
<a id="schemaqueuestatus"></a>
<a id="schema_QueueStatus"></a>
<a id="tocSqueuestatus"></a>
<a id="tocsqueuestatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_QueueName">QueueName</h2>
<!-- backwards compatibility -->
<a id="schemaqueuename"></a>
<a id="schema_QueueName"></a>
<a id="tocSqueuename"></a>
<a id="tocsqueuename"></a>

```json
"string"
```

<h2 id="tocS_QueueSearchCriteria">QueueSearchCriteria</h2>
<!-- backwards compatibility -->
<a id="schemaqueuesearchcriteria"></a>
<a id="schema_QueueSearchCriteria"></a>
<a id="tocSqueuesearchcriteria"></a>
<a id="tocsqueuesearchcriteria"></a>

```json
{
  "OrConditions": {},
  "AndConditions": {},
  "StringCondition": {
    "FieldName": {},
    "Value": {},
    "ComparisonType": {}
  },
  "QueueTypeCondition": {}
}
```

<p>The search criteria to be used to return queues.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrConditions|object|false|none|none|
|AndConditions|object|false|none|none|
|StringCondition|[StringCondition](#schemastringcondition)|false|none|<p>A leaf node condition which can be used to specify a string condition. </p> <note> <p>The currently supported value for <code>FieldName</code>: <code>name</code> </p> </note>|
|QueueTypeCondition|object|false|none|none|

<h2 id="tocS_QueueSearchFilter">QueueSearchFilter</h2>
<!-- backwards compatibility -->
<a id="schemaqueuesearchfilter"></a>
<a id="schema_QueueSearchFilter"></a>
<a id="tocSqueuesearchfilter"></a>
<a id="tocsqueuesearchfilter"></a>

```json
{
  "TagFilter": {
    "OrConditions": {},
    "AndConditions": {},
    "TagCondition": {
      "TagKey": {},
      "TagValue": {}
    }
  }
}
```

Filters to be applied to search results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagFilter|[ControlPlaneTagFilter](#schemacontrolplanetagfilter)|false|none|<p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul>|

<h2 id="tocS_QueueSearchSummaryList">QueueSearchSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaqueuesearchsummarylist"></a>
<a id="schema_QueueSearchSummaryList"></a>
<a id="tocSqueuesearchsummarylist"></a>
<a id="tocsqueuesearchsummarylist"></a>

```json
[
  {
    "Name": {},
    "QueueArn": {},
    "QueueId": {},
    "Description": {},
    "OutboundCallerConfig": {
      "OutboundCallerIdName": {},
      "OutboundCallerIdNumberId": {},
      "OutboundFlowId": {}
    },
    "HoursOfOperationId": {},
    "MaxContacts": {},
    "Status": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_QueueSummary">QueueSummary</h2>
<!-- backwards compatibility -->
<a id="schemaqueuesummary"></a>
<a id="schema_QueueSummary"></a>
<a id="tocSqueuesummary"></a>
<a id="tocsqueuesummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "QueueType": {}
}
```

Contains summary information about a queue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|QueueType|object|false|none|none|

<h2 id="tocS_QuickConnectSummary">QuickConnectSummary</h2>
<!-- backwards compatibility -->
<a id="schemaquickconnectsummary"></a>
<a id="schema_QuickConnectSummary"></a>
<a id="tocSquickconnectsummary"></a>
<a id="tocsquickconnectsummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "QuickConnectType": {}
}
```

Contains summary information about a quick connect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|QuickConnectType|object|false|none|none|

<h2 id="tocS_ReadOnlyFieldInfo">ReadOnlyFieldInfo</h2>
<!-- backwards compatibility -->
<a id="schemareadonlyfieldinfo"></a>
<a id="schema_ReadOnlyFieldInfo"></a>
<a id="tocSreadonlyfieldinfo"></a>
<a id="tocsreadonlyfieldinfo"></a>

```json
{
  "Id": {
    "Name": {}
  }
}
```

Indicates a field that is read-only to an agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_UrlReference">UrlReference</h2>
<!-- backwards compatibility -->
<a id="schemaurlreference"></a>
<a id="schema_UrlReference"></a>
<a id="tocSurlreference"></a>
<a id="tocsurlreference"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

The URL reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_StringReference">StringReference</h2>
<!-- backwards compatibility -->
<a id="schemastringreference"></a>
<a id="schema_StringReference"></a>
<a id="tocSstringreference"></a>
<a id="tocsstringreference"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Information about a reference when the <code>referenceType</code> is <code>STRING</code>. Otherwise, null.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_ReferenceSummary">ReferenceSummary</h2>
<!-- backwards compatibility -->
<a id="schemareferencesummary"></a>
<a id="schema_ReferenceSummary"></a>
<a id="tocSreferencesummary"></a>
<a id="tocsreferencesummary"></a>

```json
{
  "Url": {
    "Name": {},
    "Value": {}
  },
  "Attachment": {
    "Name": {},
    "Value": {},
    "Status": {}
  },
  "String": {
    "Name": {},
    "Value": {}
  },
  "Number": {
    "Name": {},
    "Value": {}
  },
  "Date": {
    "Name": {},
    "Value": {}
  },
  "Email": {
    "Name": {},
    "Value": {}
  }
}
```

Contains summary information about a reference. <code>ReferenceSummary</code> contains only one non null field between the URL and attachment based on the reference type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Url|object|false|none|none|
|Attachment|object|false|none|none|
|String|object|false|none|none|
|Number|object|false|none|none|
|Date|object|false|none|none|
|Email|object|false|none|none|

<h2 id="tocS_ReleasePhoneNumberRequest">ReleasePhoneNumberRequest</h2>
<!-- backwards compatibility -->
<a id="schemareleasephonenumberrequest"></a>
<a id="schema_ReleasePhoneNumberRequest"></a>
<a id="tocSreleasephonenumberrequest"></a>
<a id="tocsreleasephonenumberrequest"></a>

```json
{}
```

<h2 id="tocS_ReplicateInstanceRequest">ReplicateInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemareplicateinstancerequest"></a>
<a id="schema_ReplicateInstanceRequest"></a>
<a id="tocSreplicateinstancerequest"></a>
<a id="tocsreplicateinstancerequest"></a>

```json
{
  "ReplicaRegion": {},
  "ClientToken": {},
  "ReplicaAlias": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicaRegion|object|true|none|none|
|ClientToken|object|false|none|none|
|ReplicaAlias|object|true|none|none|

<h2 id="tocS_RequiredFieldInfo">RequiredFieldInfo</h2>
<!-- backwards compatibility -->
<a id="schemarequiredfieldinfo"></a>
<a id="schema_RequiredFieldInfo"></a>
<a id="tocSrequiredfieldinfo"></a>
<a id="tocsrequiredfieldinfo"></a>

```json
{
  "Id": {
    "Name": {}
  }
}
```

Information about a required field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|

<h2 id="tocS_ResumeContactRecordingRequest">ResumeContactRecordingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresumecontactrecordingrequest"></a>
<a id="schema_ResumeContactRecordingRequest"></a>
<a id="tocSresumecontactrecordingrequest"></a>
<a id="tocsresumecontactrecordingrequest"></a>

```json
{
  "InstanceId": {},
  "ContactId": {},
  "InitialContactId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|ContactId|object|true|none|none|
|InitialContactId|object|true|none|none|

<h2 id="tocS_RoutingProfileList">RoutingProfileList</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofilelist"></a>
<a id="schema_RoutingProfileList"></a>
<a id="tocSroutingprofilelist"></a>
<a id="tocsroutingprofilelist"></a>

```json
[
  {
    "InstanceId": {},
    "Name": {},
    "RoutingProfileArn": {},
    "RoutingProfileId": {},
    "Description": {},
    "MediaConcurrencies": {},
    "DefaultOutboundQueueId": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "NumberOfAssociatedQueues": {},
    "NumberOfAssociatedUsers": {}
  }
]
```

<h2 id="tocS_RoutingProfileQueueConfigSummary">RoutingProfileQueueConfigSummary</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofilequeueconfigsummary"></a>
<a id="schema_RoutingProfileQueueConfigSummary"></a>
<a id="tocSroutingprofilequeueconfigsummary"></a>
<a id="tocsroutingprofilequeueconfigsummary"></a>

```json
{
  "QueueId": {},
  "QueueArn": {},
  "QueueName": {},
  "Priority": {},
  "Delay": {},
  "Channel": {}
}
```

Contains summary information about a routing profile queue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueId|object|true|none|none|
|QueueArn|object|true|none|none|
|QueueName|object|true|none|none|
|Priority|object|true|none|none|
|Delay|object|true|none|none|
|Channel|object|true|none|none|

<h2 id="tocS_RoutingProfileSearchCriteria">RoutingProfileSearchCriteria</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofilesearchcriteria"></a>
<a id="schema_RoutingProfileSearchCriteria"></a>
<a id="tocSroutingprofilesearchcriteria"></a>
<a id="tocsroutingprofilesearchcriteria"></a>

```json
{
  "OrConditions": {},
  "AndConditions": {},
  "StringCondition": {
    "FieldName": {},
    "Value": {},
    "ComparisonType": {}
  }
}
```

<p>The search criteria to be used to return routing profiles.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrConditions|object|false|none|none|
|AndConditions|object|false|none|none|
|StringCondition|[StringCondition](#schemastringcondition)|false|none|<p>A leaf node condition which can be used to specify a string condition. </p> <note> <p>The currently supported value for <code>FieldName</code>: <code>name</code> </p> </note>|

<h2 id="tocS_RoutingProfileSearchFilter">RoutingProfileSearchFilter</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofilesearchfilter"></a>
<a id="schema_RoutingProfileSearchFilter"></a>
<a id="tocSroutingprofilesearchfilter"></a>
<a id="tocsroutingprofilesearchfilter"></a>

```json
{
  "TagFilter": {
    "OrConditions": {},
    "AndConditions": {},
    "TagCondition": {
      "TagKey": {},
      "TagValue": {}
    }
  }
}
```

Filters to be applied to search results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagFilter|[ControlPlaneTagFilter](#schemacontrolplanetagfilter)|false|none|<p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul>|

<h2 id="tocS_RoutingProfileSummary">RoutingProfileSummary</h2>
<!-- backwards compatibility -->
<a id="schemaroutingprofilesummary"></a>
<a id="schema_RoutingProfileSummary"></a>
<a id="tocSroutingprofilesummary"></a>
<a id="tocsroutingprofilesummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {}
}
```

Contains summary information about a routing profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_TaskActionDefinition">TaskActionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemataskactiondefinition"></a>
<a id="schema_TaskActionDefinition"></a>
<a id="tocStaskactiondefinition"></a>
<a id="tocstaskactiondefinition"></a>

```json
{
  "Name": {},
  "Description": {},
  "ContactFlowId": {},
  "References": {
    "property1": {
      "Value": {},
      "Type": {}
    },
    "property2": {
      "Value": {},
      "Type": {}
    }
  }
}
```

Information about the task action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|ContactFlowId|object|true|none|none|
|References|object|false|none|none|

<h2 id="tocS_SendNotificationActionDefinition">SendNotificationActionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemasendnotificationactiondefinition"></a>
<a id="schema_SendNotificationActionDefinition"></a>
<a id="tocSsendnotificationactiondefinition"></a>
<a id="tocssendnotificationactiondefinition"></a>

```json
{
  "DeliveryMethod": {},
  "Subject": {},
  "Content": {},
  "ContentType": {},
  "Recipient": {
    "UserTags": {
      "property1": "string",
      "property2": "string"
    },
    "UserIds": {}
  }
}
```

Information about the send notification action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryMethod|object|true|none|none|
|Subject|object|false|none|none|
|Content|object|true|none|none|
|ContentType|object|true|none|none|
|Recipient|object|true|none|none|

<h2 id="tocS_RuleSummary">RuleSummary</h2>
<!-- backwards compatibility -->
<a id="schemarulesummary"></a>
<a id="schema_RuleSummary"></a>
<a id="tocSrulesummary"></a>
<a id="tocsrulesummary"></a>

```json
{
  "Name": {},
  "RuleId": {},
  "RuleArn": {},
  "EventSourceName": {},
  "PublishStatus": {},
  "ActionSummaries": {},
  "CreatedTime": {},
  "LastUpdatedTime": {}
}
```

A list of <code>ActionTypes</code> associated with a rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|RuleId|object|true|none|none|
|RuleArn|object|true|none|none|
|EventSourceName|object|true|none|none|
|PublishStatus|object|true|none|none|
|ActionSummaries|object|true|none|none|
|CreatedTime|object|true|none|none|
|LastUpdatedTime|object|true|none|none|

<h2 id="tocS_SearchAvailablePhoneNumbersRequest">SearchAvailablePhoneNumbersRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchavailablephonenumbersrequest"></a>
<a id="schema_SearchAvailablePhoneNumbersRequest"></a>
<a id="tocSsearchavailablephonenumbersrequest"></a>
<a id="tocssearchavailablephonenumbersrequest"></a>

```json
{
  "TargetArn": {},
  "PhoneNumberCountryCode": {},
  "PhoneNumberType": {},
  "PhoneNumberPrefix": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetArn|object|true|none|none|
|PhoneNumberCountryCode|object|true|none|none|
|PhoneNumberType|object|true|none|none|
|PhoneNumberPrefix|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_SearchQueuesRequest">SearchQueuesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchqueuesrequest"></a>
<a id="schema_SearchQueuesRequest"></a>
<a id="tocSsearchqueuesrequest"></a>
<a id="tocssearchqueuesrequest"></a>

```json
{
  "InstanceId": {},
  "NextToken": {},
  "MaxResults": {},
  "SearchFilter": {
    "TagFilter": {
      "OrConditions": {},
      "AndConditions": {},
      "TagCondition": {
        "TagKey": {},
        "TagValue": {}
      }
    }
  },
  "SearchCriteria": {
    "OrConditions": {},
    "AndConditions": {},
    "StringCondition": {
      "FieldName": {},
      "Value": {},
      "ComparisonType": {}
    },
    "QueueTypeCondition": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|SearchFilter|object|false|none|none|
|SearchCriteria|object|false|none|none|

<h2 id="tocS_SearchRoutingProfilesRequest">SearchRoutingProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchroutingprofilesrequest"></a>
<a id="schema_SearchRoutingProfilesRequest"></a>
<a id="tocSsearchroutingprofilesrequest"></a>
<a id="tocssearchroutingprofilesrequest"></a>

```json
{
  "InstanceId": {},
  "NextToken": {},
  "MaxResults": {},
  "SearchFilter": {
    "TagFilter": {
      "OrConditions": {},
      "AndConditions": {},
      "TagCondition": {
        "TagKey": {},
        "TagValue": {}
      }
    }
  },
  "SearchCriteria": {
    "OrConditions": {},
    "AndConditions": {},
    "StringCondition": {
      "FieldName": {},
      "Value": {},
      "ComparisonType": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|SearchFilter|object|false|none|none|
|SearchCriteria|object|false|none|none|

<h2 id="tocS_SecurityProfileSearchCriteria">SecurityProfileSearchCriteria</h2>
<!-- backwards compatibility -->
<a id="schemasecurityprofilesearchcriteria"></a>
<a id="schema_SecurityProfileSearchCriteria"></a>
<a id="tocSsecurityprofilesearchcriteria"></a>
<a id="tocssecurityprofilesearchcriteria"></a>

```json
{
  "OrConditions": {},
  "AndConditions": {},
  "StringCondition": {
    "FieldName": {},
    "Value": {},
    "ComparisonType": {}
  }
}
```

<p>The search criteria to be used to return security profiles.</p> <note> <p>The <code>name</code> field support "contains" queries with a minimum of 2 characters and maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrConditions|object|false|none|none|
|AndConditions|object|false|none|none|
|StringCondition|[StringCondition](#schemastringcondition)|false|none|<p>A leaf node condition which can be used to specify a string condition. </p> <note> <p>The currently supported value for <code>FieldName</code>: <code>name</code> </p> </note>|

<h2 id="tocS_SecurityProfilesSearchFilter">SecurityProfilesSearchFilter</h2>
<!-- backwards compatibility -->
<a id="schemasecurityprofilessearchfilter"></a>
<a id="schema_SecurityProfilesSearchFilter"></a>
<a id="tocSsecurityprofilessearchfilter"></a>
<a id="tocssecurityprofilessearchfilter"></a>

```json
{
  "TagFilter": {
    "OrConditions": {},
    "AndConditions": {},
    "TagCondition": {
      "TagKey": {},
      "TagValue": {}
    }
  }
}
```

Filters to be applied to search results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagFilter|[ControlPlaneTagFilter](#schemacontrolplanetagfilter)|false|none|<p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul>|

<h2 id="tocS_SearchSecurityProfilesRequest">SearchSecurityProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchsecurityprofilesrequest"></a>
<a id="schema_SearchSecurityProfilesRequest"></a>
<a id="tocSsearchsecurityprofilesrequest"></a>
<a id="tocssearchsecurityprofilesrequest"></a>

```json
{
  "InstanceId": {},
  "NextToken": {},
  "MaxResults": {},
  "SearchCriteria": {
    "OrConditions": {},
    "AndConditions": {},
    "StringCondition": {
      "FieldName": {},
      "Value": {},
      "ComparisonType": {}
    }
  },
  "SearchFilter": {
    "TagFilter": {
      "OrConditions": {},
      "AndConditions": {},
      "TagCondition": {
        "TagKey": {},
        "TagValue": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|SearchCriteria|object|false|none|none|
|SearchFilter|object|false|none|none|

<h2 id="tocS_SecurityProfilesSearchSummaryList">SecurityProfilesSearchSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemasecurityprofilessearchsummarylist"></a>
<a id="schema_SecurityProfilesSearchSummaryList"></a>
<a id="tocSsecurityprofilessearchsummarylist"></a>
<a id="tocssecurityprofilessearchsummarylist"></a>

```json
[
  {
    "Id": {},
    "OrganizationResourceId": {},
    "Arn": {},
    "SecurityProfileName": {},
    "Description": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_UserSearchFilter">UserSearchFilter</h2>
<!-- backwards compatibility -->
<a id="schemausersearchfilter"></a>
<a id="schema_UserSearchFilter"></a>
<a id="tocSusersearchfilter"></a>
<a id="tocsusersearchfilter"></a>

```json
{
  "TagFilter": {
    "OrConditions": {},
    "AndConditions": {},
    "TagCondition": {
      "TagKey": {},
      "TagValue": {}
    }
  }
}
```

Filters to be applied to search results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagFilter|[ControlPlaneTagFilter](#schemacontrolplanetagfilter)|false|none|<p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p> <ul> <li> <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p> </li> <li> <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p> </li> </ul>|

<h2 id="tocS_UserSearchCriteria">UserSearchCriteria</h2>
<!-- backwards compatibility -->
<a id="schemausersearchcriteria"></a>
<a id="schema_UserSearchCriteria"></a>
<a id="tocSusersearchcriteria"></a>
<a id="tocsusersearchcriteria"></a>

```json
{
  "OrConditions": {},
  "AndConditions": {},
  "StringCondition": {
    "FieldName": {},
    "Value": {},
    "ComparisonType": {}
  },
  "HierarchyGroupCondition": {
    "Value": {},
    "HierarchyGroupMatchType": {}
  }
}
```

<p>The search criteria to be used to return users.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrConditions|object|false|none|none|
|AndConditions|object|false|none|none|
|StringCondition|object|false|none|none|
|HierarchyGroupCondition|object|false|none|none|

<h2 id="tocS_SearchUsersRequest">SearchUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchusersrequest"></a>
<a id="schema_SearchUsersRequest"></a>
<a id="tocSsearchusersrequest"></a>
<a id="tocssearchusersrequest"></a>

```json
{
  "InstanceId": {},
  "NextToken": {},
  "MaxResults": {},
  "SearchFilter": {
    "TagFilter": {
      "OrConditions": {},
      "AndConditions": {},
      "TagCondition": {
        "TagKey": {},
        "TagValue": {}
      }
    }
  },
  "SearchCriteria": {
    "OrConditions": {},
    "AndConditions": {},
    "StringCondition": {
      "FieldName": {},
      "Value": {},
      "ComparisonType": {}
    },
    "HierarchyGroupCondition": {
      "Value": {},
      "HierarchyGroupMatchType": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|SearchFilter|object|false|none|none|
|SearchCriteria|[UserSearchCriteria](#schemausersearchcriteria)|false|none|<p>The search criteria to be used to return users.</p> <note> <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results. </p> </note>|

<h2 id="tocS_UserSearchSummaryList">UserSearchSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemausersearchsummarylist"></a>
<a id="schema_UserSearchSummaryList"></a>
<a id="tocSusersearchsummarylist"></a>
<a id="tocsusersearchsummarylist"></a>

```json
[
  {
    "Arn": {},
    "DirectoryUserId": {},
    "HierarchyGroupId": {},
    "Id": {},
    "IdentityInfo": {
      "FirstName": {},
      "LastName": {}
    },
    "PhoneConfig": {
      "PhoneType": {},
      "AutoAccept": {},
      "AfterContactWorkTimeLimit": {},
      "DeskPhoneNumber": {}
    },
    "RoutingProfileId": {},
    "SecurityProfileIds": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Username": {}
  }
]
```

<h2 id="tocS_SearchVocabulariesRequest">SearchVocabulariesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchvocabulariesrequest"></a>
<a id="schema_SearchVocabulariesRequest"></a>
<a id="tocSsearchvocabulariesrequest"></a>
<a id="tocssearchvocabulariesrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "State": {},
  "NameStartsWith": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|State|object|false|none|none|
|NameStartsWith|object|false|none|none|
|LanguageCode|object|false|none|none|

<h2 id="tocS_VocabularySummaryList">VocabularySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemavocabularysummarylist"></a>
<a id="schema_VocabularySummaryList"></a>
<a id="tocSvocabularysummarylist"></a>
<a id="tocsvocabularysummarylist"></a>

```json
[
  {
    "Name": {},
    "Id": {},
    "Arn": {},
    "LanguageCode": {},
    "State": {},
    "LastModifiedTime": {},
    "FailureReason": {}
  }
]
```

<h2 id="tocS_SecurityKey">SecurityKey</h2>
<!-- backwards compatibility -->
<a id="schemasecuritykey"></a>
<a id="schema_SecurityKey"></a>
<a id="tocSsecuritykey"></a>
<a id="tocssecuritykey"></a>

```json
{
  "AssociationId": {},
  "Key": {},
  "CreationTime": {}
}
```

Configuration information of the security key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssociationId|object|false|none|none|
|Key|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_SecurityProfileName">SecurityProfileName</h2>
<!-- backwards compatibility -->
<a id="schemasecurityprofilename"></a>
<a id="schema_SecurityProfileName"></a>
<a id="tocSsecurityprofilename"></a>
<a id="tocssecurityprofilename"></a>

```json
"string"
```

<h2 id="tocS_SecurityProfilePolicyKey">SecurityProfilePolicyKey</h2>
<!-- backwards compatibility -->
<a id="schemasecurityprofilepolicykey"></a>
<a id="schema_SecurityProfilePolicyKey"></a>
<a id="tocSsecurityprofilepolicykey"></a>
<a id="tocssecurityprofilepolicykey"></a>

```json
"string"
```

<h2 id="tocS_SecurityProfileSearchSummary">SecurityProfileSearchSummary</h2>
<!-- backwards compatibility -->
<a id="schemasecurityprofilesearchsummary"></a>
<a id="schema_SecurityProfileSearchSummary"></a>
<a id="tocSsecurityprofilesearchsummary"></a>
<a id="tocssecurityprofilesearchsummary"></a>

```json
{
  "Id": {},
  "OrganizationResourceId": {},
  "Arn": {},
  "SecurityProfileName": {},
  "Description": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information about the returned security profiles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|OrganizationResourceId|object|false|none|none|
|Arn|object|false|none|none|
|SecurityProfileName|object|false|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_SecurityProfileSummary">SecurityProfileSummary</h2>
<!-- backwards compatibility -->
<a id="schemasecurityprofilesummary"></a>
<a id="schema_SecurityProfileSummary"></a>
<a id="tocSsecurityprofilesummary"></a>
<a id="tocssecurityprofilesummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {}
}
```

Contains information about a security profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_Subject">Subject</h2>
<!-- backwards compatibility -->
<a id="schemasubject"></a>
<a id="schema_Subject"></a>
<a id="tocSsubject"></a>
<a id="tocssubject"></a>

```json
"string"
```

<h2 id="tocS_TaskTemplateSingleSelectOption">TaskTemplateSingleSelectOption</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatesingleselectoption"></a>
<a id="schema_TaskTemplateSingleSelectOption"></a>
<a id="tocStasktemplatesingleselectoption"></a>
<a id="tocstasktemplatesingleselectoption"></a>

```json
"string"
```

<h2 id="tocS_SingleSelectOptions">SingleSelectOptions</h2>
<!-- backwards compatibility -->
<a id="schemasingleselectoptions"></a>
<a id="schema_SingleSelectOptions"></a>
<a id="tocSsingleselectoptions"></a>
<a id="tocssingleselectoptions"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SupportedMessagingContentTypes">SupportedMessagingContentTypes</h2>
<!-- backwards compatibility -->
<a id="schemasupportedmessagingcontenttypes"></a>
<a id="schema_SupportedMessagingContentTypes"></a>
<a id="tocSsupportedmessagingcontenttypes"></a>
<a id="tocssupportedmessagingcontenttypes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StartChatContactRequest">StartChatContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartchatcontactrequest"></a>
<a id="schema_StartChatContactRequest"></a>
<a id="tocSstartchatcontactrequest"></a>
<a id="tocsstartchatcontactrequest"></a>

```json
{
  "InstanceId": {},
  "ContactFlowId": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "ParticipantDetails": {
    "DisplayName": {}
  },
  "InitialMessage": {
    "ContentType": {},
    "Content": {}
  },
  "ClientToken": {},
  "ChatDurationInMinutes": {},
  "SupportedMessagingContentTypes": {},
  "PersistentChat": {
    "RehydrationType": {},
    "SourceContactId": {}
  },
  "RelatedContactId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|ContactFlowId|object|true|none|none|
|Attributes|object|false|none|none|
|ParticipantDetails|object|true|none|none|
|InitialMessage|object|false|none|none|
|ClientToken|object|false|none|none|
|ChatDurationInMinutes|object|false|none|none|
|SupportedMessagingContentTypes|object|false|none|none|
|PersistentChat|object|false|none|none|
|RelatedContactId|object|false|none|none|

<h2 id="tocS_VoiceRecordingConfiguration">VoiceRecordingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemavoicerecordingconfiguration"></a>
<a id="schema_VoiceRecordingConfiguration"></a>
<a id="tocSvoicerecordingconfiguration"></a>
<a id="tocsvoicerecordingconfiguration"></a>

```json
{
  "VoiceRecordingTrack": {}
}
```

Contains information about the recording configuration settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VoiceRecordingTrack|object|false|none|none|

<h2 id="tocS_StartContactRecordingRequest">StartContactRecordingRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartcontactrecordingrequest"></a>
<a id="schema_StartContactRecordingRequest"></a>
<a id="tocSstartcontactrecordingrequest"></a>
<a id="tocsstartcontactrecordingrequest"></a>

```json
{
  "InstanceId": {},
  "ContactId": {},
  "InitialContactId": {},
  "VoiceRecordingConfiguration": {
    "VoiceRecordingTrack": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|ContactId|object|true|none|none|
|InitialContactId|object|true|none|none|
|VoiceRecordingConfiguration|object|true|none|none|

<h2 id="tocS_StartContactStreamingRequest">StartContactStreamingRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartcontactstreamingrequest"></a>
<a id="schema_StartContactStreamingRequest"></a>
<a id="tocSstartcontactstreamingrequest"></a>
<a id="tocsstartcontactstreamingrequest"></a>

```json
{
  "InstanceId": {},
  "ContactId": {},
  "ChatStreamingConfiguration": {
    "StreamingEndpointArn": {}
  },
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|ContactId|object|true|none|none|
|ChatStreamingConfiguration|object|true|none|none|
|ClientToken|object|true|none|none|

<h2 id="tocS_StreamingId">StreamingId</h2>
<!-- backwards compatibility -->
<a id="schemastreamingid"></a>
<a id="schema_StreamingId"></a>
<a id="tocSstreamingid"></a>
<a id="tocsstreamingid"></a>

```json
"string"
```

<h2 id="tocS_TrafficType">TrafficType</h2>
<!-- backwards compatibility -->
<a id="schematraffictype"></a>
<a id="schema_TrafficType"></a>
<a id="tocStraffictype"></a>
<a id="tocstraffictype"></a>

```json
"GENERAL"
```

<h2 id="tocS_StartOutboundVoiceContactRequest">StartOutboundVoiceContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartoutboundvoicecontactrequest"></a>
<a id="schema_StartOutboundVoiceContactRequest"></a>
<a id="tocSstartoutboundvoicecontactrequest"></a>
<a id="tocsstartoutboundvoicecontactrequest"></a>

```json
{
  "DestinationPhoneNumber": {},
  "ContactFlowId": {},
  "InstanceId": {},
  "ClientToken": {},
  "SourcePhoneNumber": {},
  "QueueId": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "AnswerMachineDetectionConfig": {
    "EnableAnswerMachineDetection": {},
    "AwaitAnswerMachinePrompt": {}
  },
  "CampaignId": {},
  "TrafficType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationPhoneNumber|object|true|none|none|
|ContactFlowId|object|true|none|none|
|InstanceId|object|true|none|none|
|ClientToken|object|false|none|none|
|SourcePhoneNumber|object|false|none|none|
|QueueId|object|false|none|none|
|Attributes|object|false|none|none|
|AnswerMachineDetectionConfig|object|false|none|none|
|CampaignId|object|false|none|none|
|TrafficType|object|false|none|none|

<h2 id="tocS_StartTaskContactRequest">StartTaskContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemastarttaskcontactrequest"></a>
<a id="schema_StartTaskContactRequest"></a>
<a id="tocSstarttaskcontactrequest"></a>
<a id="tocsstarttaskcontactrequest"></a>

```json
{
  "InstanceId": {},
  "PreviousContactId": {},
  "ContactFlowId": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  },
  "Name": {},
  "References": {
    "property1": {
      "Value": {},
      "Type": {}
    },
    "property2": {
      "Value": {},
      "Type": {}
    }
  },
  "Description": {},
  "ClientToken": {},
  "ScheduledTime": {},
  "TaskTemplateId": {},
  "QuickConnectId": {},
  "RelatedContactId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|PreviousContactId|object|false|none|none|
|ContactFlowId|object|false|none|none|
|Attributes|object|false|none|none|
|Name|object|true|none|none|
|References|object|false|none|none|
|Description|object|false|none|none|
|ClientToken|object|false|none|none|
|ScheduledTime|object|false|none|none|
|TaskTemplateId|object|false|none|none|
|QuickConnectId|object|false|none|none|
|RelatedContactId|object|false|none|none|

<h2 id="tocS_StopContactRecordingRequest">StopContactRecordingRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopcontactrecordingrequest"></a>
<a id="schema_StopContactRecordingRequest"></a>
<a id="tocSstopcontactrecordingrequest"></a>
<a id="tocsstopcontactrecordingrequest"></a>

```json
{
  "InstanceId": {},
  "ContactId": {},
  "InitialContactId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|ContactId|object|true|none|none|
|InitialContactId|object|true|none|none|

<h2 id="tocS_StopContactRequest">StopContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopcontactrequest"></a>
<a id="schema_StopContactRequest"></a>
<a id="tocSstopcontactrequest"></a>
<a id="tocsstopcontactrequest"></a>

```json
{
  "ContactId": {},
  "InstanceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|true|none|none|
|InstanceId|object|true|none|none|

<h2 id="tocS_StopContactStreamingRequest">StopContactStreamingRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopcontactstreamingrequest"></a>
<a id="schema_StopContactStreamingRequest"></a>
<a id="tocSstopcontactstreamingrequest"></a>
<a id="tocsstopcontactstreamingrequest"></a>

```json
{
  "InstanceId": {},
  "ContactId": {},
  "StreamingId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|ContactId|object|true|none|none|
|StreamingId|object|true|none|none|

<h2 id="tocS_StringComparisonType">StringComparisonType</h2>
<!-- backwards compatibility -->
<a id="schemastringcomparisontype"></a>
<a id="schema_StringComparisonType"></a>
<a id="tocSstringcomparisontype"></a>
<a id="tocsstringcomparisontype"></a>

```json
"STARTS_WITH"
```

<h2 id="tocS_SuspendContactRecordingRequest">SuspendContactRecordingRequest</h2>
<!-- backwards compatibility -->
<a id="schemasuspendcontactrecordingrequest"></a>
<a id="schema_SuspendContactRecordingRequest"></a>
<a id="tocSsuspendcontactrecordingrequest"></a>
<a id="tocssuspendcontactrecordingrequest"></a>

```json
{
  "InstanceId": {},
  "ContactId": {},
  "InitialContactId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|ContactId|object|true|none|none|
|InitialContactId|object|true|none|none|

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

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_TaskNameExpression">TaskNameExpression</h2>
<!-- backwards compatibility -->
<a id="schematasknameexpression"></a>
<a id="schema_TaskNameExpression"></a>
<a id="tocStasknameexpression"></a>
<a id="tocstasknameexpression"></a>

```json
"string"
```

<h2 id="tocS_TaskDescriptionExpression">TaskDescriptionExpression</h2>
<!-- backwards compatibility -->
<a id="schemataskdescriptionexpression"></a>
<a id="schema_TaskDescriptionExpression"></a>
<a id="tocStaskdescriptionexpression"></a>
<a id="tocstaskdescriptionexpression"></a>

```json
"string"
```

<h2 id="tocS_TaskTemplateFieldValue">TaskTemplateFieldValue</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatefieldvalue"></a>
<a id="schema_TaskTemplateFieldValue"></a>
<a id="tocStasktemplatefieldvalue"></a>
<a id="tocstasktemplatefieldvalue"></a>

```json
"string"
```

<h2 id="tocS_TaskTemplateDefaultFieldValue">TaskTemplateDefaultFieldValue</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatedefaultfieldvalue"></a>
<a id="schema_TaskTemplateDefaultFieldValue"></a>
<a id="tocStasktemplatedefaultfieldvalue"></a>
<a id="tocstasktemplatedefaultfieldvalue"></a>

```json
{
  "Id": {
    "Name": {}
  },
  "DefaultValue": {}
}
```

Describes a default field and its corresponding value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|DefaultValue|object|false|none|none|

<h2 id="tocS_TaskTemplateFieldDescription">TaskTemplateFieldDescription</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatefielddescription"></a>
<a id="schema_TaskTemplateFieldDescription"></a>
<a id="tocStasktemplatefielddescription"></a>
<a id="tocstasktemplatefielddescription"></a>

```json
"string"
```

<h2 id="tocS_TaskTemplateFieldType">TaskTemplateFieldType</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatefieldtype"></a>
<a id="schema_TaskTemplateFieldType"></a>
<a id="tocStasktemplatefieldtype"></a>
<a id="tocstasktemplatefieldtype"></a>

```json
"NAME"
```

<h2 id="tocS_TaskTemplateFieldName">TaskTemplateFieldName</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatefieldname"></a>
<a id="schema_TaskTemplateFieldName"></a>
<a id="tocStasktemplatefieldname"></a>
<a id="tocstasktemplatefieldname"></a>

```json
"string"
```

<h2 id="tocS_TaskTemplateMetadata">TaskTemplateMetadata</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatemetadata"></a>
<a id="schema_TaskTemplateMetadata"></a>
<a id="tocStasktemplatemetadata"></a>
<a id="tocstasktemplatemetadata"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "Description": {},
  "Status": {},
  "LastModifiedTime": {},
  "CreatedTime": {}
}
```

Contains summary information about the task template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|CreatedTime|object|false|none|none|

<h2 id="tocS_ThresholdValue">ThresholdValue</h2>
<!-- backwards compatibility -->
<a id="schemathresholdvalue"></a>
<a id="schema_ThresholdValue"></a>
<a id="tocSthresholdvalue"></a>
<a id="tocsthresholdvalue"></a>

```json
0
```

<h2 id="tocS_ThresholdV2">ThresholdV2</h2>
<!-- backwards compatibility -->
<a id="schemathresholdv2"></a>
<a id="schema_ThresholdV2"></a>
<a id="tocSthresholdv2"></a>
<a id="tocsthresholdv2"></a>

```json
{
  "Comparison": {},
  "ThresholdValue": {}
}
```

Contains information about the threshold for service level metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comparison|object|false|none|none|
|ThresholdValue|object|false|none|none|

<h2 id="tocS_TrafficDistributionGroupStatus">TrafficDistributionGroupStatus</h2>
<!-- backwards compatibility -->
<a id="schematrafficdistributiongroupstatus"></a>
<a id="schema_TrafficDistributionGroupStatus"></a>
<a id="tocStrafficdistributiongroupstatus"></a>
<a id="tocstrafficdistributiongroupstatus"></a>

```json
"CREATION_IN_PROGRESS"
```

<h2 id="tocS_TrafficDistributionGroupSummary">TrafficDistributionGroupSummary</h2>
<!-- backwards compatibility -->
<a id="schematrafficdistributiongroupsummary"></a>
<a id="schema_TrafficDistributionGroupSummary"></a>
<a id="tocStrafficdistributiongroupsummary"></a>
<a id="tocstrafficdistributiongroupsummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "InstanceArn": {},
  "Status": {}
}
```

Information about traffic distribution groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|InstanceArn|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_TransferContactRequest">TransferContactRequest</h2>
<!-- backwards compatibility -->
<a id="schematransfercontactrequest"></a>
<a id="schema_TransferContactRequest"></a>
<a id="tocStransfercontactrequest"></a>
<a id="tocstransfercontactrequest"></a>

```json
{
  "InstanceId": {},
  "ContactId": {},
  "QueueId": {},
  "UserId": {},
  "ContactFlowId": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|ContactId|object|true|none|none|
|QueueId|object|false|none|none|
|UserId|object|false|none|none|
|ContactFlowId|object|true|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateAgentStatusDescription">UpdateAgentStatusDescription</h2>
<!-- backwards compatibility -->
<a id="schemaupdateagentstatusdescription"></a>
<a id="schema_UpdateAgentStatusDescription"></a>
<a id="tocSupdateagentstatusdescription"></a>
<a id="tocsupdateagentstatusdescription"></a>

```json
"string"
```

<h2 id="tocS_UpdateAgentStatusRequest">UpdateAgentStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateagentstatusrequest"></a>
<a id="schema_UpdateAgentStatusRequest"></a>
<a id="tocSupdateagentstatusrequest"></a>
<a id="tocsupdateagentstatusrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "State": {},
  "DisplayOrder": {},
  "ResetOrderNumber": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|
|State|object|false|none|none|
|DisplayOrder|object|false|none|none|
|ResetOrderNumber|object|false|none|none|

<h2 id="tocS_UpdateContactAttributesRequest">UpdateContactAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactattributesrequest"></a>
<a id="schema_UpdateContactAttributesRequest"></a>
<a id="tocSupdatecontactattributesrequest"></a>
<a id="tocsupdatecontactattributesrequest"></a>

```json
{
  "InitialContactId": {},
  "InstanceId": {},
  "Attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InitialContactId|object|true|none|none|
|InstanceId|object|true|none|none|
|Attributes|object|true|none|none|

<h2 id="tocS_UpdateContactFlowContentRequest">UpdateContactFlowContentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactflowcontentrequest"></a>
<a id="schema_UpdateContactFlowContentRequest"></a>
<a id="tocSupdatecontactflowcontentrequest"></a>
<a id="tocsupdatecontactflowcontentrequest"></a>

```json
{
  "Content": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|true|none|none|

<h2 id="tocS_UpdateContactFlowMetadataRequest">UpdateContactFlowMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactflowmetadatarequest"></a>
<a id="schema_UpdateContactFlowMetadataRequest"></a>
<a id="tocSupdatecontactflowmetadatarequest"></a>
<a id="tocsupdatecontactflowmetadatarequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "ContactFlowState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|
|ContactFlowState|object|false|none|none|

<h2 id="tocS_UpdateContactFlowModuleContentRequest">UpdateContactFlowModuleContentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactflowmodulecontentrequest"></a>
<a id="schema_UpdateContactFlowModuleContentRequest"></a>
<a id="tocSupdatecontactflowmodulecontentrequest"></a>
<a id="tocsupdatecontactflowmodulecontentrequest"></a>

```json
{
  "Content": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|true|none|none|

<h2 id="tocS_UpdateContactFlowModuleMetadataRequest">UpdateContactFlowModuleMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactflowmodulemetadatarequest"></a>
<a id="schema_UpdateContactFlowModuleMetadataRequest"></a>
<a id="tocSupdatecontactflowmodulemetadatarequest"></a>
<a id="tocsupdatecontactflowmodulemetadatarequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_UpdateContactFlowNameRequest">UpdateContactFlowNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactflownamerequest"></a>
<a id="schema_UpdateContactFlowNameRequest"></a>
<a id="tocSupdatecontactflownamerequest"></a>
<a id="tocsupdatecontactflownamerequest"></a>

```json
{
  "Name": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateContactRequest">UpdateContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactrequest"></a>
<a id="schema_UpdateContactRequest"></a>
<a id="tocSupdatecontactrequest"></a>
<a id="tocsupdatecontactrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "References": {
    "property1": {
      "Value": {},
      "Type": {}
    },
    "property2": {
      "Value": {},
      "Type": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|
|References|object|false|none|none|

<h2 id="tocS_UpdateContactScheduleRequest">UpdateContactScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactschedulerequest"></a>
<a id="schema_UpdateContactScheduleRequest"></a>
<a id="tocSupdatecontactschedulerequest"></a>
<a id="tocsupdatecontactschedulerequest"></a>

```json
{
  "InstanceId": {},
  "ContactId": {},
  "ScheduledTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceId|object|true|none|none|
|ContactId|object|true|none|none|
|ScheduledTime|object|true|none|none|

<h2 id="tocS_UpdateHoursOfOperationDescription">UpdateHoursOfOperationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehoursofoperationdescription"></a>
<a id="schema_UpdateHoursOfOperationDescription"></a>
<a id="tocSupdatehoursofoperationdescription"></a>
<a id="tocsupdatehoursofoperationdescription"></a>

```json
"string"
```

<h2 id="tocS_UpdateHoursOfOperationRequest">UpdateHoursOfOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehoursofoperationrequest"></a>
<a id="schema_UpdateHoursOfOperationRequest"></a>
<a id="tocSupdatehoursofoperationrequest"></a>
<a id="tocsupdatehoursofoperationrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "TimeZone": {},
  "Config": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|
|TimeZone|object|false|none|none|
|Config|object|false|none|none|

<h2 id="tocS_UpdateInstanceAttributeRequest">UpdateInstanceAttributeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinstanceattributerequest"></a>
<a id="schema_UpdateInstanceAttributeRequest"></a>
<a id="tocSupdateinstanceattributerequest"></a>
<a id="tocsupdateinstanceattributerequest"></a>

```json
{
  "Value": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|true|none|none|

<h2 id="tocS_UpdateInstanceStorageConfigRequest">UpdateInstanceStorageConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinstancestorageconfigrequest"></a>
<a id="schema_UpdateInstanceStorageConfigRequest"></a>
<a id="tocSupdateinstancestorageconfigrequest"></a>
<a id="tocsupdateinstancestorageconfigrequest"></a>

```json
{
  "StorageConfig": {
    "AssociationId": {},
    "StorageType": {},
    "S3Config": {
      "BucketName": {},
      "BucketPrefix": {},
      "EncryptionConfig": {
        "EncryptionType": {},
        "KeyId": {}
      }
    },
    "KinesisVideoStreamConfig": {
      "Prefix": {},
      "RetentionPeriodHours": {},
      "EncryptionConfig": {
        "EncryptionType": {},
        "KeyId": {}
      }
    },
    "KinesisStreamConfig": {
      "StreamArn": {}
    },
    "KinesisFirehoseConfig": {
      "FirehoseArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageConfig|[InstanceStorageConfig](#schemainstancestorageconfig)|true|none|The storage configuration for the instance.|

<h2 id="tocS_UpdateParticipantRoleConfigChannelInfo">UpdateParticipantRoleConfigChannelInfo</h2>
<!-- backwards compatibility -->
<a id="schemaupdateparticipantroleconfigchannelinfo"></a>
<a id="schema_UpdateParticipantRoleConfigChannelInfo"></a>
<a id="tocSupdateparticipantroleconfigchannelinfo"></a>
<a id="tocsupdateparticipantroleconfigchannelinfo"></a>

```json
{
  "Chat": {
    "ParticipantTimerConfigList": {}
  }
}
```

Configuration information for the chat participant role.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Chat|object|false|none|none|

<h2 id="tocS_UpdateParticipantRoleConfigRequest">UpdateParticipantRoleConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateparticipantroleconfigrequest"></a>
<a id="schema_UpdateParticipantRoleConfigRequest"></a>
<a id="tocSupdateparticipantroleconfigrequest"></a>
<a id="tocsupdateparticipantroleconfigrequest"></a>

```json
{
  "ChannelConfiguration": {
    "Chat": {
      "ParticipantTimerConfigList": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelConfiguration|object|true|none|none|

<h2 id="tocS_UpdatePhoneNumberRequest">UpdatePhoneNumberRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatephonenumberrequest"></a>
<a id="schema_UpdatePhoneNumberRequest"></a>
<a id="tocSupdatephonenumberrequest"></a>
<a id="tocsupdatephonenumberrequest"></a>

```json
{
  "TargetArn": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetArn|object|true|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_UpdateQueueHoursOfOperationRequest">UpdateQueueHoursOfOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatequeuehoursofoperationrequest"></a>
<a id="schema_UpdateQueueHoursOfOperationRequest"></a>
<a id="tocSupdatequeuehoursofoperationrequest"></a>
<a id="tocsupdatequeuehoursofoperationrequest"></a>

```json
{
  "HoursOfOperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HoursOfOperationId|object|true|none|none|

<h2 id="tocS_UpdateQueueMaxContactsRequest">UpdateQueueMaxContactsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatequeuemaxcontactsrequest"></a>
<a id="schema_UpdateQueueMaxContactsRequest"></a>
<a id="tocSupdatequeuemaxcontactsrequest"></a>
<a id="tocsupdatequeuemaxcontactsrequest"></a>

```json
{
  "MaxContacts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxContacts|object|false|none|none|

<h2 id="tocS_UpdateQueueNameRequest">UpdateQueueNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatequeuenamerequest"></a>
<a id="schema_UpdateQueueNameRequest"></a>
<a id="tocSupdatequeuenamerequest"></a>
<a id="tocsupdatequeuenamerequest"></a>

```json
{
  "Name": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateQueueOutboundCallerConfigRequest">UpdateQueueOutboundCallerConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatequeueoutboundcallerconfigrequest"></a>
<a id="schema_UpdateQueueOutboundCallerConfigRequest"></a>
<a id="tocSupdatequeueoutboundcallerconfigrequest"></a>
<a id="tocsupdatequeueoutboundcallerconfigrequest"></a>

```json
{
  "OutboundCallerConfig": {
    "OutboundCallerIdName": {},
    "OutboundCallerIdNumberId": {},
    "OutboundFlowId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutboundCallerConfig|object|true|none|none|

<h2 id="tocS_UpdateQueueStatusRequest">UpdateQueueStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatequeuestatusrequest"></a>
<a id="schema_UpdateQueueStatusRequest"></a>
<a id="tocSupdatequeuestatusrequest"></a>
<a id="tocsupdatequeuestatusrequest"></a>

```json
{
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_UpdateQuickConnectConfigRequest">UpdateQuickConnectConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatequickconnectconfigrequest"></a>
<a id="schema_UpdateQuickConnectConfigRequest"></a>
<a id="tocSupdatequickconnectconfigrequest"></a>
<a id="tocsupdatequickconnectconfigrequest"></a>

```json
{
  "QuickConnectConfig": {
    "QuickConnectType": {},
    "UserConfig": {
      "UserId": {},
      "ContactFlowId": {}
    },
    "QueueConfig": {
      "QueueId": {},
      "ContactFlowId": {}
    },
    "PhoneConfig": {
      "PhoneNumber": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuickConnectConfig|object|true|none|none|

<h2 id="tocS_UpdateQuickConnectDescription">UpdateQuickConnectDescription</h2>
<!-- backwards compatibility -->
<a id="schemaupdatequickconnectdescription"></a>
<a id="schema_UpdateQuickConnectDescription"></a>
<a id="tocSupdatequickconnectdescription"></a>
<a id="tocsupdatequickconnectdescription"></a>

```json
"string"
```

<h2 id="tocS_UpdateQuickConnectNameRequest">UpdateQuickConnectNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatequickconnectnamerequest"></a>
<a id="schema_UpdateQuickConnectNameRequest"></a>
<a id="tocSupdatequickconnectnamerequest"></a>
<a id="tocsupdatequickconnectnamerequest"></a>

```json
{
  "Name": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateRoutingProfileConcurrencyRequest">UpdateRoutingProfileConcurrencyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateroutingprofileconcurrencyrequest"></a>
<a id="schema_UpdateRoutingProfileConcurrencyRequest"></a>
<a id="tocSupdateroutingprofileconcurrencyrequest"></a>
<a id="tocsupdateroutingprofileconcurrencyrequest"></a>

```json
{
  "MediaConcurrencies": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MediaConcurrencies|object|true|none|none|

<h2 id="tocS_UpdateRoutingProfileDefaultOutboundQueueRequest">UpdateRoutingProfileDefaultOutboundQueueRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateroutingprofiledefaultoutboundqueuerequest"></a>
<a id="schema_UpdateRoutingProfileDefaultOutboundQueueRequest"></a>
<a id="tocSupdateroutingprofiledefaultoutboundqueuerequest"></a>
<a id="tocsupdateroutingprofiledefaultoutboundqueuerequest"></a>

```json
{
  "DefaultOutboundQueueId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultOutboundQueueId|object|true|none|none|

<h2 id="tocS_UpdateRoutingProfileNameRequest">UpdateRoutingProfileNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateroutingprofilenamerequest"></a>
<a id="schema_UpdateRoutingProfileNameRequest"></a>
<a id="tocSupdateroutingprofilenamerequest"></a>
<a id="tocsupdateroutingprofilenamerequest"></a>

```json
{
  "Name": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateRoutingProfileQueuesRequest">UpdateRoutingProfileQueuesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateroutingprofilequeuesrequest"></a>
<a id="schema_UpdateRoutingProfileQueuesRequest"></a>
<a id="tocSupdateroutingprofilequeuesrequest"></a>
<a id="tocsupdateroutingprofilequeuesrequest"></a>

```json
{
  "QueueConfigs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueueConfigs|object|true|none|none|

<h2 id="tocS_UpdateRuleRequest">UpdateRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterulerequest"></a>
<a id="schema_UpdateRuleRequest"></a>
<a id="tocSupdaterulerequest"></a>
<a id="tocsupdaterulerequest"></a>

```json
{
  "Name": {},
  "Function": {},
  "Actions": {},
  "PublishStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Function|object|true|none|none|
|Actions|object|true|none|none|
|PublishStatus|object|true|none|none|

<h2 id="tocS_UpdateSecurityProfileRequest">UpdateSecurityProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesecurityprofilerequest"></a>
<a id="schema_UpdateSecurityProfileRequest"></a>
<a id="tocSupdatesecurityprofilerequest"></a>
<a id="tocsupdatesecurityprofilerequest"></a>

```json
{
  "Description": {},
  "Permissions": {},
  "AllowedAccessControlTags": {
    "property1": "string",
    "property2": "string"
  },
  "TagRestrictedResources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Permissions|object|false|none|none|
|AllowedAccessControlTags|object|false|none|none|
|TagRestrictedResources|object|false|none|none|

<h2 id="tocS_UpdateTaskTemplateRequest">UpdateTaskTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetasktemplaterequest"></a>
<a id="schema_UpdateTaskTemplateRequest"></a>
<a id="tocSupdatetasktemplaterequest"></a>
<a id="tocsupdatetasktemplaterequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "ContactFlowId": {},
  "Constraints": {
    "RequiredFields": {},
    "ReadOnlyFields": {},
    "InvisibleFields": {}
  },
  "Defaults": {
    "DefaultFieldValues": {}
  },
  "Status": {},
  "Fields": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|
|ContactFlowId|object|false|none|none|
|Constraints|object|false|none|none|
|Defaults|object|false|none|none|
|Status|object|false|none|none|
|Fields|object|false|none|none|

<h2 id="tocS_UpdateTrafficDistributionRequest">UpdateTrafficDistributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetrafficdistributionrequest"></a>
<a id="schema_UpdateTrafficDistributionRequest"></a>
<a id="tocSupdatetrafficdistributionrequest"></a>
<a id="tocsupdatetrafficdistributionrequest"></a>

```json
{
  "TelephonyConfig": {
    "Distributions": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TelephonyConfig|object|false|none|none|

<h2 id="tocS_UpdateUserHierarchyGroupNameRequest">UpdateUserHierarchyGroupNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserhierarchygroupnamerequest"></a>
<a id="schema_UpdateUserHierarchyGroupNameRequest"></a>
<a id="tocSupdateuserhierarchygroupnamerequest"></a>
<a id="tocsupdateuserhierarchygroupnamerequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_UpdateUserHierarchyRequest">UpdateUserHierarchyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserhierarchyrequest"></a>
<a id="schema_UpdateUserHierarchyRequest"></a>
<a id="tocSupdateuserhierarchyrequest"></a>
<a id="tocsupdateuserhierarchyrequest"></a>

```json
{
  "HierarchyGroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HierarchyGroupId|object|false|none|none|

<h2 id="tocS_UpdateUserHierarchyStructureRequest">UpdateUserHierarchyStructureRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserhierarchystructurerequest"></a>
<a id="schema_UpdateUserHierarchyStructureRequest"></a>
<a id="tocSupdateuserhierarchystructurerequest"></a>
<a id="tocsupdateuserhierarchystructurerequest"></a>

```json
{
  "HierarchyStructure": {
    "LevelOne": {
      "Name": {}
    },
    "LevelTwo": {
      "Name": {}
    },
    "LevelThree": {
      "Name": {}
    },
    "LevelFour": {
      "Name": {}
    },
    "LevelFive": {
      "Name": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HierarchyStructure|object|true|none|none|

<h2 id="tocS_UpdateUserIdentityInfoRequest">UpdateUserIdentityInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuseridentityinforequest"></a>
<a id="schema_UpdateUserIdentityInfoRequest"></a>
<a id="tocSupdateuseridentityinforequest"></a>
<a id="tocsupdateuseridentityinforequest"></a>

```json
{
  "IdentityInfo": {
    "FirstName": {},
    "LastName": {},
    "Email": {},
    "SecondaryEmail": {},
    "Mobile": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityInfo|object|true|none|none|

<h2 id="tocS_UpdateUserPhoneConfigRequest">UpdateUserPhoneConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserphoneconfigrequest"></a>
<a id="schema_UpdateUserPhoneConfigRequest"></a>
<a id="tocSupdateuserphoneconfigrequest"></a>
<a id="tocsupdateuserphoneconfigrequest"></a>

```json
{
  "PhoneConfig": {
    "PhoneType": {},
    "AutoAccept": {},
    "AfterContactWorkTimeLimit": {},
    "DeskPhoneNumber": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PhoneConfig|object|true|none|none|

<h2 id="tocS_UpdateUserRoutingProfileRequest">UpdateUserRoutingProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserroutingprofilerequest"></a>
<a id="schema_UpdateUserRoutingProfileRequest"></a>
<a id="tocSupdateuserroutingprofilerequest"></a>
<a id="tocsupdateuserroutingprofilerequest"></a>

```json
{
  "RoutingProfileId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoutingProfileId|object|true|none|none|

<h2 id="tocS_UpdateUserSecurityProfilesRequest">UpdateUserSecurityProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateusersecurityprofilesrequest"></a>
<a id="schema_UpdateUserSecurityProfilesRequest"></a>
<a id="tocSupdateusersecurityprofilesrequest"></a>
<a id="tocsupdateusersecurityprofilesrequest"></a>

```json
{
  "SecurityProfileIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityProfileIds|object|true|none|none|

<h2 id="tocS_UseCase">UseCase</h2>
<!-- backwards compatibility -->
<a id="schemausecase"></a>
<a id="schema_UseCase"></a>
<a id="tocSusecase"></a>
<a id="tocsusecase"></a>

```json
{
  "UseCaseId": {},
  "UseCaseArn": {},
  "UseCaseType": {}
}
```

Contains the use case.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UseCaseId|object|false|none|none|
|UseCaseArn|object|false|none|none|
|UseCaseType|object|false|none|none|

<h2 id="tocS_UserReference">UserReference</h2>
<!-- backwards compatibility -->
<a id="schemauserreference"></a>
<a id="schema_UserReference"></a>
<a id="tocSuserreference"></a>
<a id="tocsuserreference"></a>

```json
{
  "Id": {},
  "Arn": {}
}
```

Information about the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_UserData">UserData</h2>
<!-- backwards compatibility -->
<a id="schemauserdata"></a>
<a id="schema_UserData"></a>
<a id="tocSuserdata"></a>
<a id="tocsuserdata"></a>

```json
{
  "User": {
    "Id": {},
    "Arn": {}
  },
  "RoutingProfile": {
    "Id": {},
    "Arn": {}
  },
  "HierarchyPath": {
    "LevelOne": {
      "Id": {},
      "Arn": {}
    },
    "LevelTwo": {
      "Id": {},
      "Arn": {}
    },
    "LevelThree": {
      "Id": {},
      "Arn": {}
    },
    "LevelFour": {
      "Id": {},
      "Arn": {}
    },
    "LevelFive": {
      "Id": {},
      "Arn": {}
    }
  },
  "Status": {
    "StatusStartTimestamp": {},
    "StatusArn": {},
    "StatusName": {}
  },
  "AvailableSlotsByChannel": {
    "property1": 0,
    "property2": 0
  },
  "MaxSlotsByChannel": {
    "property1": 0,
    "property2": 0
  },
  "ActiveSlotsByChannel": {
    "property1": 0,
    "property2": 0
  },
  "Contacts": {},
  "NextStatus": {}
}
```

Data for a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|User|object|false|none|none|
|RoutingProfile|object|false|none|none|
|HierarchyPath|object|false|none|none|
|Status|object|false|none|none|
|AvailableSlotsByChannel|object|false|none|none|
|MaxSlotsByChannel|object|false|none|none|
|ActiveSlotsByChannel|object|false|none|none|
|Contacts|object|false|none|none|
|NextStatus|object|false|none|none|

<h2 id="tocS_UserIdentityInfoLite">UserIdentityInfoLite</h2>
<!-- backwards compatibility -->
<a id="schemauseridentityinfolite"></a>
<a id="schema_UserIdentityInfoLite"></a>
<a id="tocSuseridentityinfolite"></a>
<a id="tocsuseridentityinfolite"></a>

```json
{
  "FirstName": {},
  "LastName": {}
}
```

The user's first name and last name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirstName|object|false|none|none|
|LastName|object|false|none|none|

<h2 id="tocS_UserSearchSummary">UserSearchSummary</h2>
<!-- backwards compatibility -->
<a id="schemausersearchsummary"></a>
<a id="schema_UserSearchSummary"></a>
<a id="tocSusersearchsummary"></a>
<a id="tocsusersearchsummary"></a>

```json
{
  "Arn": {},
  "DirectoryUserId": {},
  "HierarchyGroupId": {},
  "Id": {},
  "IdentityInfo": {
    "FirstName": {},
    "LastName": {}
  },
  "PhoneConfig": {
    "PhoneType": {},
    "AutoAccept": {},
    "AfterContactWorkTimeLimit": {},
    "DeskPhoneNumber": {}
  },
  "RoutingProfileId": {},
  "SecurityProfileIds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Username": {}
}
```

Information about the returned users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|DirectoryUserId|object|false|none|none|
|HierarchyGroupId|object|false|none|none|
|Id|object|false|none|none|
|IdentityInfo|object|false|none|none|
|PhoneConfig|[UserPhoneConfig](#schemauserphoneconfig)|false|none|Contains information about the phone configuration settings for a user.|
|RoutingProfileId|object|false|none|none|
|SecurityProfileIds|object|false|none|none|
|Tags|object|false|none|none|
|Username|object|false|none|none|

<h2 id="tocS_UserSummary">UserSummary</h2>
<!-- backwards compatibility -->
<a id="schemausersummary"></a>
<a id="schema_UserSummary"></a>
<a id="tocSusersummary"></a>
<a id="tocsusersummary"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Username": {}
}
```

Contains summary information about a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Username|object|false|none|none|

<h2 id="tocS_VocabularyLastModifiedTime">VocabularyLastModifiedTime</h2>
<!-- backwards compatibility -->
<a id="schemavocabularylastmodifiedtime"></a>
<a id="schema_VocabularyLastModifiedTime"></a>
<a id="tocSvocabularylastmodifiedtime"></a>
<a id="tocsvocabularylastmodifiedtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_VocabularyFailureReason">VocabularyFailureReason</h2>
<!-- backwards compatibility -->
<a id="schemavocabularyfailurereason"></a>
<a id="schema_VocabularyFailureReason"></a>
<a id="tocSvocabularyfailurereason"></a>
<a id="tocsvocabularyfailurereason"></a>

```json
"string"
```

<h2 id="tocS_VocabularySummary">VocabularySummary</h2>
<!-- backwards compatibility -->
<a id="schemavocabularysummary"></a>
<a id="schema_VocabularySummary"></a>
<a id="tocSvocabularysummary"></a>
<a id="tocsvocabularysummary"></a>

```json
{
  "Name": {},
  "Id": {},
  "Arn": {},
  "LanguageCode": {},
  "State": {},
  "LastModifiedTime": {},
  "FailureReason": {}
}
```

Contains summary information about the custom vocabulary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Id|object|true|none|none|
|Arn|object|true|none|none|
|LanguageCode|object|true|none|none|
|State|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|FailureReason|object|false|none|none|
