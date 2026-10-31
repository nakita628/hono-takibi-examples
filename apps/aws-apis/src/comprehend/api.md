<h1 id="amazon-comprehend">Amazon Comprehend v2017-11-27</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon Comprehend is an Amazon Web Services service for gaining insight into the content of documents. Use these actions to determine the topics contained in your documents, the topics they discuss, the predominant sentiment expressed in them, the predominant language used, and more.

Base URLs:

* <a href="http://comprehend.us-east-1.amazonaws.com">http://comprehend.us-east-1.amazonaws.com</a> - The Amazon Comprehend multi-region endpoint

* <a href="https://comprehend.us-east-1.amazonaws.com">https://comprehend.us-east-1.amazonaws.com</a> - The Amazon Comprehend multi-region endpoint

* <a href="http://comprehend.cn-north-1.amazonaws.com.cn">http://comprehend.cn-north-1.amazonaws.com.cn</a> - The Amazon Comprehend endpoint for China (Beijing) and China (Ningxia)

* <a href="https://comprehend.cn-north-1.amazonaws.com.cn">https://comprehend.cn-north-1.amazonaws.com.cn</a> - The Amazon Comprehend endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/comprehend/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-comprehend-default">Default</h1>

## BatchDetectDominantLanguage

<a id="opIdBatchDetectDominantLanguage"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.BatchDetectDominantLanguage' \
  -d '{
    "TextList": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage`

Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. 

> Body parameter

```json
{
  "TextList": {}
}
```

<h3 id="batchdetectdominantlanguage-parameters">Parameters</h3>

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
|body|body|[BatchDetectDominantLanguageRequest](#schemabatchdetectdominantlanguagerequest)|true|none|
|» TextList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.BatchDetectDominantLanguage|

> Example responses

> 200 Response

```json
{
  "ResultList": {},
  "ErrorList": {}
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

<h3 id="batchdetectdominantlanguage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDetectDominantLanguageResponse](#schemabatchdetectdominantlanguageresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|
|482|482|BatchSizeLimitExceededException|[BatchSizeLimitExceededException](#schemabatchsizelimitexceededexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDetectEntities

<a id="opIdBatchDetectEntities"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.BatchDetectEntities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.BatchDetectEntities' \
  -d '{
    "TextList": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.BatchDetectEntities`

Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide. 

> Body parameter

```json
{
  "TextList": {},
  "LanguageCode": {}
}
```

<h3 id="batchdetectentities-parameters">Parameters</h3>

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
|body|body|[BatchDetectEntitiesRequest](#schemabatchdetectentitiesrequest)|true|none|
|» TextList|body|object|true|none|
|» LanguageCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.BatchDetectEntities|

> Example responses

> 200 Response

```json
{
  "ResultList": {},
  "ErrorList": {}
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

<h3 id="batchdetectentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDetectEntitiesResponse](#schemabatchdetectentitiesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|
|482|482|UnsupportedLanguageException|[UnsupportedLanguageException](#schemaunsupportedlanguageexception)|
|483|483|BatchSizeLimitExceededException|[BatchSizeLimitExceededException](#schemabatchsizelimitexceededexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDetectKeyPhrases

<a id="opIdBatchDetectKeyPhrases"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.BatchDetectKeyPhrases' \
  -d '{
    "TextList": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases`

Detects the key noun phrases found in a batch of documents.

> Body parameter

```json
{
  "TextList": {},
  "LanguageCode": {}
}
```

<h3 id="batchdetectkeyphrases-parameters">Parameters</h3>

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
|body|body|[BatchDetectKeyPhrasesRequest](#schemabatchdetectkeyphrasesrequest)|true|none|
|» TextList|body|object|true|none|
|» LanguageCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.BatchDetectKeyPhrases|

> Example responses

> 200 Response

```json
{
  "ResultList": {},
  "ErrorList": {}
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

<h3 id="batchdetectkeyphrases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDetectKeyPhrasesResponse](#schemabatchdetectkeyphrasesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|
|482|482|UnsupportedLanguageException|[UnsupportedLanguageException](#schemaunsupportedlanguageexception)|
|483|483|BatchSizeLimitExceededException|[BatchSizeLimitExceededException](#schemabatchsizelimitexceededexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDetectSentiment

<a id="opIdBatchDetectSentiment"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.BatchDetectSentiment' \
  -d '{
    "TextList": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment`

Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.

> Body parameter

```json
{
  "TextList": {},
  "LanguageCode": {}
}
```

<h3 id="batchdetectsentiment-parameters">Parameters</h3>

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
|body|body|[BatchDetectSentimentRequest](#schemabatchdetectsentimentrequest)|true|none|
|» TextList|body|object|true|none|
|» LanguageCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.BatchDetectSentiment|

> Example responses

> 200 Response

```json
{
  "ResultList": {},
  "ErrorList": {}
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

<h3 id="batchdetectsentiment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDetectSentimentResponse](#schemabatchdetectsentimentresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|
|482|482|UnsupportedLanguageException|[UnsupportedLanguageException](#schemaunsupportedlanguageexception)|
|483|483|BatchSizeLimitExceededException|[BatchSizeLimitExceededException](#schemabatchsizelimitexceededexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDetectSyntax

<a id="opIdBatchDetectSyntax"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.BatchDetectSyntax' \
  -d '{
    "TextList": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax`

Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. 

> Body parameter

```json
{
  "TextList": {},
  "LanguageCode": {}
}
```

<h3 id="batchdetectsyntax-parameters">Parameters</h3>

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
|body|body|[BatchDetectSyntaxRequest](#schemabatchdetectsyntaxrequest)|true|none|
|» TextList|body|object|true|none|
|» LanguageCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.BatchDetectSyntax|

> Example responses

> 200 Response

```json
{
  "ResultList": {},
  "ErrorList": {}
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

<h3 id="batchdetectsyntax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDetectSyntaxResponse](#schemabatchdetectsyntaxresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|
|482|482|UnsupportedLanguageException|[UnsupportedLanguageException](#schemaunsupportedlanguageexception)|
|483|483|BatchSizeLimitExceededException|[BatchSizeLimitExceededException](#schemabatchsizelimitexceededexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDetectTargetedSentiment

<a id="opIdBatchDetectTargetedSentiment"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.BatchDetectTargetedSentiment' \
  -d '{
    "TextList": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment`

<p>Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>

> Body parameter

```json
{
  "TextList": {},
  "LanguageCode": {}
}
```

<h3 id="batchdetecttargetedsentiment-parameters">Parameters</h3>

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
|body|body|[BatchDetectTargetedSentimentRequest](#schemabatchdetecttargetedsentimentrequest)|true|none|
|» TextList|body|object|true|none|
|» LanguageCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.BatchDetectTargetedSentiment|

> Example responses

> 200 Response

```json
{
  "ResultList": {},
  "ErrorList": {}
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

<h3 id="batchdetecttargetedsentiment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDetectTargetedSentimentResponse](#schemabatchdetecttargetedsentimentresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|
|482|482|UnsupportedLanguageException|[UnsupportedLanguageException](#schemaunsupportedlanguageexception)|
|483|483|BatchSizeLimitExceededException|[BatchSizeLimitExceededException](#schemabatchsizelimitexceededexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ClassifyDocument

<a id="opIdClassifyDocument"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ClassifyDocument' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ClassifyDocument' \
  -d '{
    "Text": {},
    "EndpointArn": {},
    "Bytes": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.ClassifyDocument`

<p>Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.</p> <p>You can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> that describes the errors.</p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>

> Body parameter

```json
{
  "Text": {},
  "EndpointArn": {},
  "Bytes": {},
  "DocumentReaderConfig": {
    "DocumentReadAction": {},
    "DocumentReadMode": {},
    "FeatureTypes": {}
  }
}
```

<h3 id="classifydocument-parameters">Parameters</h3>

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
|body|body|[ClassifyDocumentRequest](#schemaclassifydocumentrequest)|true|none|
|» Text|body|object|false|none|
|» EndpointArn|body|object|true|none|
|» Bytes|body|object|false|none|
|» DocumentReaderConfig|body|object|false|none|
|» » DocumentReadAction|body|object|true|none|
|» » DocumentReadMode|body|object|false|none|
|» » FeatureTypes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.ClassifyDocument|

> Example responses

> 200 Response

```json
{
  "Classes": {},
  "Labels": {},
  "DocumentMetadata": {
    "Pages": {},
    "ExtractedCharacters": {}
  },
  "DocumentType": {},
  "Errors": {},
  "Warnings": {}
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

<h3 id="classifydocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ClassifyDocumentResponse](#schemaclassifydocumentresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|482|482|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ContainsPiiEntities

<a id="opIdContainsPiiEntities"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ContainsPiiEntities' \
  -d '{
    "Text": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities`

Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.

> Body parameter

```json
{
  "Text": {},
  "LanguageCode": {}
}
```

<h3 id="containspiientities-parameters">Parameters</h3>

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
|body|body|[ContainsPiiEntitiesRequest](#schemacontainspiientitiesrequest)|true|none|
|» Text|body|object|true|none|
|» LanguageCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.ContainsPiiEntities|

> Example responses

> 200 Response

```json
{
  "Labels": {}
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

<h3 id="containspiientities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContainsPiiEntitiesResponse](#schemacontainspiientitiesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|
|482|482|UnsupportedLanguageException|[UnsupportedLanguageException](#schemaunsupportedlanguageexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataset

<a id="opIdCreateDataset"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.CreateDataset' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.CreateDataset' \
  -d '{
    "FlywheelArn": {},
    "DatasetName": {},
    "DatasetType": {},
    "Description": {},
    "InputDataConfig": {
      "AugmentedManifests": {},
      "DataFormat": {},
      "DocumentClassifierInputDataConfig": {
        "S3Uri": {},
        "LabelDelimiter": {}
      },
      "EntityRecognizerInputDataConfig": {
        "Annotations": {
          "S3Uri": {}
        },
        "Documents": {
          "S3Uri": {},
          "InputFormat": {}
        },
        "EntityList": {
          "S3Uri": {}
        }
      }
    },
    "ClientRequestToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.CreateDataset`

Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

> Body parameter

```json
{
  "FlywheelArn": {},
  "DatasetName": {},
  "DatasetType": {},
  "Description": {},
  "InputDataConfig": {
    "AugmentedManifests": {},
    "DataFormat": {},
    "DocumentClassifierInputDataConfig": {
      "S3Uri": {},
      "LabelDelimiter": {}
    },
    "EntityRecognizerInputDataConfig": {
      "Annotations": {
        "S3Uri": {}
      },
      "Documents": {
        "S3Uri": {},
        "InputFormat": {}
      },
      "EntityList": {
        "S3Uri": {}
      }
    }
  },
  "ClientRequestToken": {},
  "Tags": {}
}
```

<h3 id="createdataset-parameters">Parameters</h3>

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
|body|body|[CreateDatasetRequest](#schemacreatedatasetrequest)|true|none|
|» FlywheelArn|body|object|true|none|
|» DatasetName|body|object|true|none|
|» DatasetType|body|object|false|none|
|» Description|body|object|false|none|
|» InputDataConfig|body|object|true|none|
|» » AugmentedManifests|body|object|false|none|
|» » DataFormat|body|object|false|none|
|» » DocumentClassifierInputDataConfig|body|object|false|none|
|» » » S3Uri|body|object|true|none|
|» » » LabelDelimiter|body|object|false|none|
|» » EntityRecognizerInputDataConfig|body|object|false|none|
|» » » Annotations|body|object|false|none|
|» » » » S3Uri|body|object|true|none|
|» » » Documents|body|object|true|none|
|» » » » S3Uri|body|object|true|none|
|» » » » InputFormat|body|object|false|none|
|» » » EntityList|body|object|false|none|
|» » » » S3Uri|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.CreateDataset|

> Example responses

> 200 Response

```json
{
  "DatasetArn": {}
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

<h3 id="createdataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDatasetResponse](#schemacreatedatasetresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDocumentClassifier

<a id="opIdCreateDocumentClassifier"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.CreateDocumentClassifier' \
  -d '{
    "DocumentClassifierName": {},
    "VersionName": {},
    "DataAccessRoleArn": {},
    "Tags": {},
    "InputDataConfig": {
      "DataFormat": {},
      "S3Uri": {},
      "TestS3Uri": {},
      "LabelDelimiter": {},
      "AugmentedManifests": {},
      "DocumentType": {},
      "Documents": {
        "S3Uri": {},
        "TestS3Uri": {}
      },
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {},
      "FlywheelStatsS3Prefix": {}
    },
    "ClientRequestToken": {},
    "LanguageCode": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "Mode": {},
    "ModelKmsKeyId": {},
    "ModelPolicy": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier`

Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that are labeled with the categories that you want to use. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/training-classifier-model.html">Training classifier models</a> in the Comprehend Developer Guide. 

> Body parameter

```json
{
  "DocumentClassifierName": {},
  "VersionName": {},
  "DataAccessRoleArn": {},
  "Tags": {},
  "InputDataConfig": {
    "DataFormat": {},
    "S3Uri": {},
    "TestS3Uri": {},
    "LabelDelimiter": {},
    "AugmentedManifests": {},
    "DocumentType": {},
    "Documents": {
      "S3Uri": {},
      "TestS3Uri": {}
    },
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {},
    "FlywheelStatsS3Prefix": {}
  },
  "ClientRequestToken": {},
  "LanguageCode": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Mode": {},
  "ModelKmsKeyId": {},
  "ModelPolicy": {}
}
```

<h3 id="createdocumentclassifier-parameters">Parameters</h3>

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
|body|body|[CreateDocumentClassifierRequest](#schemacreatedocumentclassifierrequest)|true|none|
|» DocumentClassifierName|body|object|true|none|
|» VersionName|body|object|false|none|
|» DataAccessRoleArn|body|object|true|none|
|» Tags|body|object|false|none|
|» InputDataConfig|body|object|true|none|
|» » DataFormat|body|object|false|none|
|» » S3Uri|body|object|false|none|
|» » TestS3Uri|body|object|false|none|
|» » LabelDelimiter|body|object|false|none|
|» » AugmentedManifests|body|object|false|none|
|» » DocumentType|body|object|false|none|
|» » Documents|body|object|false|none|
|» » » S3Uri|body|object|true|none|
|» » » TestS3Uri|body|object|false|none|
|» » DocumentReaderConfig|body|[DocumentReaderConfig](#schemadocumentreaderconfig)|false|<p>Provides configuration parameters to override the default actions for extracting text from PDF documents and image files. </p> <p> By default, Amazon Comprehend performs the following actions to extract text from files, based on the input file type: </p> <ul> <li> <p> <b>Word files</b> - Amazon Comprehend parser extracts the text. </p> </li> <li> <p> <b>Digital PDF files</b> - Amazon Comprehend parser extracts the text. </p> </li> <li> <p> <b>Image files and scanned PDF files</b> - Amazon Comprehend uses the Amazon Textract <code>DetectDocumentText</code> API to extract the text. </p> </li> </ul> <p> <code>DocumentReaderConfig</code> does not apply to plain text files or Word files.</p> <p> For image files and PDF documents, you can override these default actions using the fields listed below. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-set-textract-options.html"> Setting text extraction options</a> in the Comprehend Developer Guide. </p>|
|» OutputDataConfig|body|object|false|none|
|» » S3Uri|body|object|false|none|
|» » KmsKeyId|body|object|false|none|
|» » FlywheelStatsS3Prefix|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» LanguageCode|body|object|true|none|
|» VolumeKmsKeyId|body|object|false|none|
|» VpcConfig|body|object|false|none|
|» » SecurityGroupIds|body|object|true|none|
|» » Subnets|body|object|true|none|
|» Mode|body|object|false|none|
|» ModelKmsKeyId|body|object|false|none|
|» ModelPolicy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.CreateDocumentClassifier|

> Example responses

> 200 Response

```json
{
  "DocumentClassifierArn": {}
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

<h3 id="createdocumentclassifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDocumentClassifierResponse](#schemacreatedocumentclassifierresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|485|485|UnsupportedLanguageException|[UnsupportedLanguageException](#schemaunsupportedlanguageexception)|
|486|486|KmsKeyValidationException|[KmsKeyValidationException](#schemakmskeyvalidationexception)|
|487|487|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEndpoint

<a id="opIdCreateEndpoint"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.CreateEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.CreateEndpoint' \
  -d '{
    "EndpointName": {},
    "ModelArn": {},
    "DesiredInferenceUnits": {},
    "ClientRequestToken": {},
    "Tags": {},
    "DataAccessRoleArn": {},
    "FlywheelArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.CreateEndpoint`

Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

> Body parameter

```json
{
  "EndpointName": {},
  "ModelArn": {},
  "DesiredInferenceUnits": {},
  "ClientRequestToken": {},
  "Tags": {},
  "DataAccessRoleArn": {},
  "FlywheelArn": {}
}
```

<h3 id="createendpoint-parameters">Parameters</h3>

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
|body|body|[CreateEndpointRequest](#schemacreateendpointrequest)|true|none|
|» EndpointName|body|object|true|none|
|» ModelArn|body|object|false|none|
|» DesiredInferenceUnits|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» Tags|body|object|false|none|
|» DataAccessRoleArn|body|object|false|none|
|» FlywheelArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.CreateEndpoint|

> Example responses

> 200 Response

```json
{
  "EndpointArn": {},
  "ModelArn": {}
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

<h3 id="createendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEndpointResponse](#schemacreateendpointresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|487|487|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEntityRecognizer

<a id="opIdCreateEntityRecognizer"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.CreateEntityRecognizer' \
  -d '{
    "RecognizerName": {},
    "VersionName": {},
    "DataAccessRoleArn": {},
    "Tags": {},
    "InputDataConfig": {
      "DataFormat": {},
      "EntityTypes": {},
      "Documents": {
        "S3Uri": {},
        "TestS3Uri": {},
        "InputFormat": {}
      },
      "Annotations": {
        "S3Uri": {},
        "TestS3Uri": {}
      },
      "EntityList": {
        "S3Uri": {}
      },
      "AugmentedManifests": {}
    },
    "ClientRequestToken": {},
    "LanguageCode": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "ModelKmsKeyId": {},
    "ModelPolicy": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer`

Creates an entity recognizer using submitted files. After your <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the <code>DescribeEntityRecognizer</code> API. 

> Body parameter

```json
{
  "RecognizerName": {},
  "VersionName": {},
  "DataAccessRoleArn": {},
  "Tags": {},
  "InputDataConfig": {
    "DataFormat": {},
    "EntityTypes": {},
    "Documents": {
      "S3Uri": {},
      "TestS3Uri": {},
      "InputFormat": {}
    },
    "Annotations": {
      "S3Uri": {},
      "TestS3Uri": {}
    },
    "EntityList": {
      "S3Uri": {}
    },
    "AugmentedManifests": {}
  },
  "ClientRequestToken": {},
  "LanguageCode": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "ModelKmsKeyId": {},
  "ModelPolicy": {}
}
```

<h3 id="createentityrecognizer-parameters">Parameters</h3>

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
|body|body|[CreateEntityRecognizerRequest](#schemacreateentityrecognizerrequest)|true|none|
|» RecognizerName|body|object|true|none|
|» VersionName|body|object|false|none|
|» DataAccessRoleArn|body|object|true|none|
|» Tags|body|object|false|none|
|» InputDataConfig|body|object|true|none|
|» » DataFormat|body|object|false|none|
|» » EntityTypes|body|object|true|none|
|» » Documents|body|object|false|none|
|» » » S3Uri|body|object|true|none|
|» » » TestS3Uri|body|object|false|none|
|» » » InputFormat|body|object|false|none|
|» » Annotations|body|object|false|none|
|» » » S3Uri|body|object|true|none|
|» » » TestS3Uri|body|object|false|none|
|» » EntityList|body|object|false|none|
|» » » S3Uri|body|object|true|none|
|» » AugmentedManifests|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» LanguageCode|body|object|true|none|
|» VolumeKmsKeyId|body|object|false|none|
|» VpcConfig|body|object|false|none|
|» » SecurityGroupIds|body|object|true|none|
|» » Subnets|body|object|true|none|
|» ModelKmsKeyId|body|object|false|none|
|» ModelPolicy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.CreateEntityRecognizer|

> Example responses

> 200 Response

```json
{
  "EntityRecognizerArn": {}
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

<h3 id="createentityrecognizer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEntityRecognizerResponse](#schemacreateentityrecognizerresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|485|485|UnsupportedLanguageException|[UnsupportedLanguageException](#schemaunsupportedlanguageexception)|
|486|486|KmsKeyValidationException|[KmsKeyValidationException](#schemakmskeyvalidationexception)|
|487|487|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFlywheel

<a id="opIdCreateFlywheel"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.CreateFlywheel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.CreateFlywheel' \
  -d '{
    "FlywheelName": {},
    "ActiveModelArn": {},
    "DataAccessRoleArn": {},
    "TaskConfig": {
      "LanguageCode": {},
      "DocumentClassificationConfig": {
        "Mode": {},
        "Labels": {}
      },
      "EntityRecognitionConfig": {
        "EntityTypes": {}
      }
    },
    "ModelType": {},
    "DataLakeS3Uri": {},
    "DataSecurityConfig": {
      "ModelKmsKeyId": {},
      "VolumeKmsKeyId": {},
      "DataLakeKmsKeyId": {},
      "VpcConfig": {
        "SecurityGroupIds": {},
        "Subnets": {}
      }
    },
    "ClientRequestToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.CreateFlywheel`

<p>A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model.</p> <p>When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model.</p> <p>To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake.</p> <p>To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>

> Body parameter

```json
{
  "FlywheelName": {},
  "ActiveModelArn": {},
  "DataAccessRoleArn": {},
  "TaskConfig": {
    "LanguageCode": {},
    "DocumentClassificationConfig": {
      "Mode": {},
      "Labels": {}
    },
    "EntityRecognitionConfig": {
      "EntityTypes": {}
    }
  },
  "ModelType": {},
  "DataLakeS3Uri": {},
  "DataSecurityConfig": {
    "ModelKmsKeyId": {},
    "VolumeKmsKeyId": {},
    "DataLakeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    }
  },
  "ClientRequestToken": {},
  "Tags": {}
}
```

<h3 id="createflywheel-parameters">Parameters</h3>

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
|body|body|[CreateFlywheelRequest](#schemacreateflywheelrequest)|true|none|
|» FlywheelName|body|object|true|none|
|» ActiveModelArn|body|object|false|none|
|» DataAccessRoleArn|body|object|true|none|
|» TaskConfig|body|object|false|none|
|» » LanguageCode|body|object|true|none|
|» » DocumentClassificationConfig|body|object|false|none|
|» » » Mode|body|object|true|none|
|» » » Labels|body|object|false|none|
|» » EntityRecognitionConfig|body|object|false|none|
|» » » EntityTypes|body|object|true|none|
|» ModelType|body|object|false|none|
|» DataLakeS3Uri|body|object|true|none|
|» DataSecurityConfig|body|object|false|none|
|» » ModelKmsKeyId|body|object|false|none|
|» » VolumeKmsKeyId|body|object|false|none|
|» » DataLakeKmsKeyId|body|object|false|none|
|» » VpcConfig|body|[VpcConfig](#schemavpcconfig)|false| Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. |
|» ClientRequestToken|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.CreateFlywheel|

> Example responses

> 200 Response

```json
{
  "FlywheelArn": {},
  "ActiveModelArn": {}
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

<h3 id="createflywheel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFlywheelResponse](#schemacreateflywheelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|485|485|UnsupportedLanguageException|[UnsupportedLanguageException](#schemaunsupportedlanguageexception)|
|486|486|KmsKeyValidationException|[KmsKeyValidationException](#schemakmskeyvalidationexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|489|489|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDocumentClassifier

<a id="opIdDeleteDocumentClassifier"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DeleteDocumentClassifier' \
  -d '{
    "DocumentClassifierArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier`

<p>Deletes a previously created document classifier</p> <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. </p>

> Body parameter

```json
{
  "DocumentClassifierArn": {}
}
```

<h3 id="deletedocumentclassifier-parameters">Parameters</h3>

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
|body|body|[DeleteDocumentClassifierRequest](#schemadeletedocumentclassifierrequest)|true|none|
|» DocumentClassifierArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DeleteDocumentClassifier|

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

<h3 id="deletedocumentclassifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDocumentClassifierResponse](#schemadeletedocumentclassifierresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEndpoint

<a id="opIdDeleteEndpoint"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DeleteEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DeleteEndpoint' \
  -d '{
    "EndpointArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DeleteEndpoint`

Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

> Body parameter

```json
{
  "EndpointArn": {}
}
```

<h3 id="deleteendpoint-parameters">Parameters</h3>

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
|body|body|[DeleteEndpointRequest](#schemadeleteendpointrequest)|true|none|
|» EndpointArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DeleteEndpoint|

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

<h3 id="deleteendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEndpointResponse](#schemadeleteendpointresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEntityRecognizer

<a id="opIdDeleteEntityRecognizer"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DeleteEntityRecognizer' \
  -d '{
    "EntityRecognizerArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer`

<p>Deletes an entity recognizer.</p> <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. </p>

> Body parameter

```json
{
  "EntityRecognizerArn": {}
}
```

<h3 id="deleteentityrecognizer-parameters">Parameters</h3>

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
|body|body|[DeleteEntityRecognizerRequest](#schemadeleteentityrecognizerrequest)|true|none|
|» EntityRecognizerArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DeleteEntityRecognizer|

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

<h3 id="deleteentityrecognizer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEntityRecognizerResponse](#schemadeleteentityrecognizerresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFlywheel

<a id="opIdDeleteFlywheel"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DeleteFlywheel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DeleteFlywheel' \
  -d '{
    "FlywheelArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DeleteFlywheel`

<p>Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>

> Body parameter

```json
{
  "FlywheelArn": {}
}
```

<h3 id="deleteflywheel-parameters">Parameters</h3>

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
|body|body|[DeleteFlywheelRequest](#schemadeleteflywheelrequest)|true|none|
|» FlywheelArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DeleteFlywheel|

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

<h3 id="deleteflywheel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFlywheelResponse](#schemadeleteflywheelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourcePolicy

<a id="opIdDeleteResourcePolicy"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DeleteResourcePolicy' \
  -d '{
    "ResourceArn": {},
    "PolicyRevisionId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy`

Deletes a resource-based policy that is attached to a custom model.

> Body parameter

```json
{
  "ResourceArn": {},
  "PolicyRevisionId": {}
}
```

<h3 id="deleteresourcepolicy-parameters">Parameters</h3>

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
|body|body|[DeleteResourcePolicyRequest](#schemadeleteresourcepolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|
|» PolicyRevisionId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DeleteResourcePolicy|

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

<h3 id="deleteresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResourcePolicyResponse](#schemadeleteresourcepolicyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDataset

<a id="opIdDescribeDataset"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DescribeDataset' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DescribeDataset' \
  -d '{
    "DatasetArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DescribeDataset`

Returns information about the dataset that you specify. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

> Body parameter

```json
{
  "DatasetArn": {}
}
```

<h3 id="describedataset-parameters">Parameters</h3>

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
|body|body|[DescribeDatasetRequest](#schemadescribedatasetrequest)|true|none|
|» DatasetArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DescribeDataset|

> Example responses

> 200 Response

```json
{
  "DatasetProperties": {
    "DatasetArn": {},
    "DatasetName": {},
    "DatasetType": {},
    "DatasetS3Uri": {},
    "Description": {},
    "Status": {},
    "Message": {},
    "NumberOfDocuments": {},
    "CreationTime": {},
    "EndTime": {}
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

<h3 id="describedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDatasetResponse](#schemadescribedatasetresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDocumentClassificationJob

<a id="opIdDescribeDocumentClassificationJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DescribeDocumentClassificationJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob`

Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describedocumentclassificationjob-parameters">Parameters</h3>

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
|body|body|[DescribeDocumentClassificationJobRequest](#schemadescribedocumentclassificationjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DescribeDocumentClassificationJob|

> Example responses

> 200 Response

```json
{
  "DocumentClassificationJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "DocumentClassifierArn": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "FlywheelArn": {}
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

<h3 id="describedocumentclassificationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDocumentClassificationJobResponse](#schemadescribedocumentclassificationjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDocumentClassifier

<a id="opIdDescribeDocumentClassifier"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DescribeDocumentClassifier' \
  -d '{
    "DocumentClassifierArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier`

Gets the properties associated with a document classifier.

> Body parameter

```json
{
  "DocumentClassifierArn": {}
}
```

<h3 id="describedocumentclassifier-parameters">Parameters</h3>

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
|body|body|[DescribeDocumentClassifierRequest](#schemadescribedocumentclassifierrequest)|true|none|
|» DocumentClassifierArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DescribeDocumentClassifier|

> Example responses

> 200 Response

```json
{
  "DocumentClassifierProperties": {
    "DocumentClassifierArn": {},
    "LanguageCode": {},
    "Status": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "TrainingStartTime": {},
    "TrainingEndTime": {},
    "InputDataConfig": {
      "DataFormat": {},
      "S3Uri": {},
      "TestS3Uri": {},
      "LabelDelimiter": {},
      "AugmentedManifests": {},
      "DocumentType": {},
      "Documents": {
        "S3Uri": {},
        "TestS3Uri": {}
      },
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {},
      "FlywheelStatsS3Prefix": {}
    },
    "ClassifierMetadata": {
      "NumberOfLabels": {},
      "NumberOfTrainedDocuments": {},
      "NumberOfTestDocuments": {},
      "EvaluationMetrics": {
        "Accuracy": {},
        "Precision": {},
        "Recall": {},
        "F1Score": {},
        "MicroPrecision": {},
        "MicroRecall": {},
        "MicroF1Score": {},
        "HammingLoss": {}
      }
    },
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "Mode": {},
    "ModelKmsKeyId": {},
    "VersionName": {},
    "SourceModelArn": {},
    "FlywheelArn": {}
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

<h3 id="describedocumentclassifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDocumentClassifierResponse](#schemadescribedocumentclassifierresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDominantLanguageDetectionJob

<a id="opIdDescribeDominantLanguageDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DescribeDominantLanguageDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob`

Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describedominantlanguagedetectionjob-parameters">Parameters</h3>

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
|body|body|[DescribeDominantLanguageDetectionJobRequest](#schemadescribedominantlanguagedetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DescribeDominantLanguageDetectionJob|

> Example responses

> 200 Response

```json
{
  "DominantLanguageDetectionJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
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

<h3 id="describedominantlanguagedetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDominantLanguageDetectionJobResponse](#schemadescribedominantlanguagedetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEndpoint

<a id="opIdDescribeEndpoint"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DescribeEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DescribeEndpoint' \
  -d '{
    "EndpointArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DescribeEndpoint`

Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

> Body parameter

```json
{
  "EndpointArn": {}
}
```

<h3 id="describeendpoint-parameters">Parameters</h3>

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
|body|body|[DescribeEndpointRequest](#schemadescribeendpointrequest)|true|none|
|» EndpointArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DescribeEndpoint|

> Example responses

> 200 Response

```json
{
  "EndpointProperties": {
    "EndpointArn": {},
    "Status": {},
    "Message": {},
    "ModelArn": {},
    "DesiredModelArn": {},
    "DesiredInferenceUnits": {},
    "CurrentInferenceUnits": {},
    "CreationTime": {},
    "LastModifiedTime": {},
    "DataAccessRoleArn": {},
    "DesiredDataAccessRoleArn": {},
    "FlywheelArn": {}
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

<h3 id="describeendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEndpointResponse](#schemadescribeendpointresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEntitiesDetectionJob

<a id="opIdDescribeEntitiesDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DescribeEntitiesDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob`

Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describeentitiesdetectionjob-parameters">Parameters</h3>

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
|body|body|[DescribeEntitiesDetectionJobRequest](#schemadescribeentitiesdetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DescribeEntitiesDetectionJob|

> Example responses

> 200 Response

```json
{
  "EntitiesDetectionJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "EntityRecognizerArn": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "FlywheelArn": {}
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

<h3 id="describeentitiesdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEntitiesDetectionJobResponse](#schemadescribeentitiesdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEntityRecognizer

<a id="opIdDescribeEntityRecognizer"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DescribeEntityRecognizer' \
  -d '{
    "EntityRecognizerArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer`

Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.

> Body parameter

```json
{
  "EntityRecognizerArn": {}
}
```

<h3 id="describeentityrecognizer-parameters">Parameters</h3>

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
|body|body|[DescribeEntityRecognizerRequest](#schemadescribeentityrecognizerrequest)|true|none|
|» EntityRecognizerArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DescribeEntityRecognizer|

> Example responses

> 200 Response

```json
{
  "EntityRecognizerProperties": {
    "EntityRecognizerArn": {},
    "LanguageCode": {},
    "Status": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "TrainingStartTime": {},
    "TrainingEndTime": {},
    "InputDataConfig": {
      "DataFormat": {},
      "EntityTypes": {},
      "Documents": {
        "S3Uri": {},
        "TestS3Uri": {},
        "InputFormat": {}
      },
      "Annotations": {
        "S3Uri": {},
        "TestS3Uri": {}
      },
      "EntityList": {
        "S3Uri": {}
      },
      "AugmentedManifests": {}
    },
    "RecognizerMetadata": {
      "NumberOfTrainedDocuments": {},
      "NumberOfTestDocuments": {},
      "EvaluationMetrics": {
        "Precision": {},
        "Recall": {},
        "F1Score": {}
      },
      "EntityTypes": {}
    },
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "ModelKmsKeyId": {},
    "VersionName": {},
    "SourceModelArn": {},
    "FlywheelArn": {},
    "OutputDataConfig": {
      "FlywheelStatsS3Prefix": {}
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

<h3 id="describeentityrecognizer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEntityRecognizerResponse](#schemadescribeentityrecognizerresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEventsDetectionJob

<a id="opIdDescribeEventsDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DescribeEventsDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob`

Gets the status and details of an events detection job.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describeeventsdetectionjob-parameters">Parameters</h3>

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
|body|body|[DescribeEventsDetectionJobRequest](#schemadescribeeventsdetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DescribeEventsDetectionJob|

> Example responses

> 200 Response

```json
{
  "EventsDetectionJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "TargetEventTypes": {}
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

<h3 id="describeeventsdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventsDetectionJobResponse](#schemadescribeeventsdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFlywheel

<a id="opIdDescribeFlywheel"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DescribeFlywheel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DescribeFlywheel' \
  -d '{
    "FlywheelArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DescribeFlywheel`

Provides configuration information about the flywheel. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

> Body parameter

```json
{
  "FlywheelArn": {}
}
```

<h3 id="describeflywheel-parameters">Parameters</h3>

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
|body|body|[DescribeFlywheelRequest](#schemadescribeflywheelrequest)|true|none|
|» FlywheelArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DescribeFlywheel|

> Example responses

> 200 Response

```json
{
  "FlywheelProperties": {
    "FlywheelArn": {},
    "ActiveModelArn": {},
    "DataAccessRoleArn": {},
    "TaskConfig": {
      "LanguageCode": {},
      "DocumentClassificationConfig": {
        "Mode": {},
        "Labels": {}
      },
      "EntityRecognitionConfig": {
        "EntityTypes": {}
      }
    },
    "DataLakeS3Uri": {},
    "DataSecurityConfig": {
      "ModelKmsKeyId": {},
      "VolumeKmsKeyId": {},
      "DataLakeKmsKeyId": {},
      "VpcConfig": {
        "SecurityGroupIds": {},
        "Subnets": {}
      }
    },
    "Status": {},
    "ModelType": {},
    "Message": {},
    "CreationTime": {},
    "LastModifiedTime": {},
    "LatestFlywheelIteration": {}
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

<h3 id="describeflywheel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFlywheelResponse](#schemadescribeflywheelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFlywheelIteration

<a id="opIdDescribeFlywheelIteration"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DescribeFlywheelIteration' \
  -d '{
    "FlywheelArn": {},
    "FlywheelIterationId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration`

Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

> Body parameter

```json
{
  "FlywheelArn": {},
  "FlywheelIterationId": {}
}
```

<h3 id="describeflywheeliteration-parameters">Parameters</h3>

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
|body|body|[DescribeFlywheelIterationRequest](#schemadescribeflywheeliterationrequest)|true|none|
|» FlywheelArn|body|object|true|none|
|» FlywheelIterationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DescribeFlywheelIteration|

> Example responses

> 200 Response

```json
{
  "FlywheelIterationProperties": {
    "FlywheelArn": {},
    "FlywheelIterationId": {},
    "CreationTime": {},
    "EndTime": {},
    "Status": {},
    "Message": {},
    "EvaluatedModelArn": {},
    "EvaluatedModelMetrics": {
      "AverageF1Score": {},
      "AveragePrecision": {},
      "AverageRecall": {},
      "AverageAccuracy": {}
    },
    "TrainedModelArn": {},
    "TrainedModelMetrics": {
      "AverageF1Score": {},
      "AveragePrecision": {},
      "AverageRecall": {},
      "AverageAccuracy": {}
    },
    "EvaluationManifestS3Prefix": {}
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

<h3 id="describeflywheeliteration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFlywheelIterationResponse](#schemadescribeflywheeliterationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeKeyPhrasesDetectionJob

<a id="opIdDescribeKeyPhrasesDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DescribeKeyPhrasesDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob`

Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describekeyphrasesdetectionjob-parameters">Parameters</h3>

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
|body|body|[DescribeKeyPhrasesDetectionJobRequest](#schemadescribekeyphrasesdetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DescribeKeyPhrasesDetectionJob|

> Example responses

> 200 Response

```json
{
  "KeyPhrasesDetectionJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
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

<h3 id="describekeyphrasesdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeKeyPhrasesDetectionJobResponse](#schemadescribekeyphrasesdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePiiEntitiesDetectionJob

<a id="opIdDescribePiiEntitiesDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DescribePiiEntitiesDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob`

Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describepiientitiesdetectionjob-parameters">Parameters</h3>

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
|body|body|[DescribePiiEntitiesDetectionJobRequest](#schemadescribepiientitiesdetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DescribePiiEntitiesDetectionJob|

> Example responses

> 200 Response

```json
{
  "PiiEntitiesDetectionJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "RedactionConfig": {
      "PiiEntityTypes": {},
      "MaskMode": {},
      "MaskCharacter": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "Mode": {}
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

<h3 id="describepiientitiesdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePiiEntitiesDetectionJobResponse](#schemadescribepiientitiesdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeResourcePolicy

<a id="opIdDescribeResourcePolicy"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DescribeResourcePolicy' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy`

Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy.

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="describeresourcepolicy-parameters">Parameters</h3>

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
|body|body|[DescribeResourcePolicyRequest](#schemadescriberesourcepolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DescribeResourcePolicy|

> Example responses

> 200 Response

```json
{
  "ResourcePolicy": {},
  "CreationTime": {},
  "LastModifiedTime": {},
  "PolicyRevisionId": {}
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

<h3 id="describeresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeResourcePolicyResponse](#schemadescriberesourcepolicyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSentimentDetectionJob

<a id="opIdDescribeSentimentDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DescribeSentimentDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob`

Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describesentimentdetectionjob-parameters">Parameters</h3>

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
|body|body|[DescribeSentimentDetectionJobRequest](#schemadescribesentimentdetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DescribeSentimentDetectionJob|

> Example responses

> 200 Response

```json
{
  "SentimentDetectionJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
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

<h3 id="describesentimentdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSentimentDetectionJobResponse](#schemadescribesentimentdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTargetedSentimentDetectionJob

<a id="opIdDescribeTargetedSentimentDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DescribeTargetedSentimentDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob`

Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status of the job.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describetargetedsentimentdetectionjob-parameters">Parameters</h3>

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
|body|body|[DescribeTargetedSentimentDetectionJobRequest](#schemadescribetargetedsentimentdetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DescribeTargetedSentimentDetectionJob|

> Example responses

> 200 Response

```json
{
  "TargetedSentimentDetectionJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
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

<h3 id="describetargetedsentimentdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTargetedSentimentDetectionJobResponse](#schemadescribetargetedsentimentdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTopicsDetectionJob

<a id="opIdDescribeTopicsDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DescribeTopicsDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob`

Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describetopicsdetectionjob-parameters">Parameters</h3>

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
|body|body|[DescribeTopicsDetectionJobRequest](#schemadescribetopicsdetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DescribeTopicsDetectionJob|

> Example responses

> 200 Response

```json
{
  "TopicsDetectionJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "NumberOfTopics": {},
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
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

<h3 id="describetopicsdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTopicsDetectionJobResponse](#schemadescribetopicsdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetectDominantLanguage

<a id="opIdDetectDominantLanguage"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DetectDominantLanguage' \
  -d '{
    "Text": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage`

Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. 

> Body parameter

```json
{
  "Text": {}
}
```

<h3 id="detectdominantlanguage-parameters">Parameters</h3>

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
|body|body|[DetectDominantLanguageRequest](#schemadetectdominantlanguagerequest)|true|none|
|» Text|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DetectDominantLanguage|

> Example responses

> 200 Response

```json
{
  "Languages": {}
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

<h3 id="detectdominantlanguage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectDominantLanguageResponse](#schemadetectdominantlanguageresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetectEntities

<a id="opIdDetectEntities"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DetectEntities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DetectEntities' \
  -d '{
    "Text": {},
    "LanguageCode": {},
    "EndpointArn": {},
    "Bytes": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DetectEntities`

<p>Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. </p> <p> When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.</p> <p>When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> for each error. </p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>

> Body parameter

```json
{
  "Text": {},
  "LanguageCode": {},
  "EndpointArn": {},
  "Bytes": {},
  "DocumentReaderConfig": {
    "DocumentReadAction": {},
    "DocumentReadMode": {},
    "FeatureTypes": {}
  }
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
|» Text|body|object|false|none|
|» LanguageCode|body|object|false|none|
|» EndpointArn|body|object|false|none|
|» Bytes|body|object|false|none|
|» DocumentReaderConfig|body|object|false|none|
|» » DocumentReadAction|body|object|true|none|
|» » DocumentReadMode|body|object|false|none|
|» » FeatureTypes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DetectEntities|

> Example responses

> 200 Response

```json
{
  "Entities": {},
  "DocumentMetadata": {
    "Pages": {},
    "ExtractedCharacters": {}
  },
  "DocumentType": {},
  "Blocks": {},
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

<h3 id="detectentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectEntitiesResponse](#schemadetectentitiesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|482|482|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|
|483|483|UnsupportedLanguageException|[UnsupportedLanguageException](#schemaunsupportedlanguageexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetectKeyPhrases

<a id="opIdDetectKeyPhrases"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DetectKeyPhrases' \
  -d '{
    "Text": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases`

Detects the key noun phrases found in the text. 

> Body parameter

```json
{
  "Text": {},
  "LanguageCode": {}
}
```

<h3 id="detectkeyphrases-parameters">Parameters</h3>

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
|body|body|[DetectKeyPhrasesRequest](#schemadetectkeyphrasesrequest)|true|none|
|» Text|body|object|true|none|
|» LanguageCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DetectKeyPhrases|

> Example responses

> 200 Response

```json
{
  "KeyPhrases": {}
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

<h3 id="detectkeyphrases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectKeyPhrasesResponse](#schemadetectkeyphrasesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|
|482|482|UnsupportedLanguageException|[UnsupportedLanguageException](#schemaunsupportedlanguageexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetectPiiEntities

<a id="opIdDetectPiiEntities"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DetectPiiEntities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DetectPiiEntities' \
  -d '{
    "Text": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DetectPiiEntities`

Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.

> Body parameter

```json
{
  "Text": {},
  "LanguageCode": {}
}
```

<h3 id="detectpiientities-parameters">Parameters</h3>

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
|body|body|[DetectPiiEntitiesRequest](#schemadetectpiientitiesrequest)|true|none|
|» Text|body|object|true|none|
|» LanguageCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DetectPiiEntities|

> Example responses

> 200 Response

```json
{
  "Entities": {}
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

<h3 id="detectpiientities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectPiiEntitiesResponse](#schemadetectpiientitiesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|
|482|482|UnsupportedLanguageException|[UnsupportedLanguageException](#schemaunsupportedlanguageexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetectSentiment

<a id="opIdDetectSentiment"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DetectSentiment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DetectSentiment' \
  -d '{
    "Text": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DetectSentiment`

Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>). 

> Body parameter

```json
{
  "Text": {},
  "LanguageCode": {}
}
```

<h3 id="detectsentiment-parameters">Parameters</h3>

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
|body|body|[DetectSentimentRequest](#schemadetectsentimentrequest)|true|none|
|» Text|body|object|true|none|
|» LanguageCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DetectSentiment|

> Example responses

> 200 Response

```json
{
  "Sentiment": {},
  "SentimentScore": {
    "Positive": {},
    "Negative": {},
    "Neutral": {},
    "Mixed": {}
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

<h3 id="detectsentiment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectSentimentResponse](#schemadetectsentimentresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|
|482|482|UnsupportedLanguageException|[UnsupportedLanguageException](#schemaunsupportedlanguageexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetectSyntax

<a id="opIdDetectSyntax"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DetectSyntax' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DetectSyntax' \
  -d '{
    "Text": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DetectSyntax`

Inspects text for syntax and the part of speech of words in the document. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. 

> Body parameter

```json
{
  "Text": {},
  "LanguageCode": {}
}
```

<h3 id="detectsyntax-parameters">Parameters</h3>

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
|body|body|[DetectSyntaxRequest](#schemadetectsyntaxrequest)|true|none|
|» Text|body|object|true|none|
|» LanguageCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DetectSyntax|

> Example responses

> 200 Response

```json
{
  "SyntaxTokens": {}
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

<h3 id="detectsyntax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectSyntaxResponse](#schemadetectsyntaxresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|
|482|482|UnsupportedLanguageException|[UnsupportedLanguageException](#schemaunsupportedlanguageexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetectTargetedSentiment

<a id="opIdDetectTargetedSentiment"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.DetectTargetedSentiment' \
  -d '{
    "Text": {},
    "LanguageCode": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment`

<p>Inspects the input text and returns a sentiment analysis for each entity identified in the text.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>

> Body parameter

```json
{
  "Text": {},
  "LanguageCode": {}
}
```

<h3 id="detecttargetedsentiment-parameters">Parameters</h3>

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
|body|body|[DetectTargetedSentimentRequest](#schemadetecttargetedsentimentrequest)|true|none|
|» Text|body|object|true|none|
|» LanguageCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.DetectTargetedSentiment|

> Example responses

> 200 Response

```json
{
  "Entities": {}
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

<h3 id="detecttargetedsentiment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectTargetedSentimentResponse](#schemadetecttargetedsentimentresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TextSizeLimitExceededException|[TextSizeLimitExceededException](#schematextsizelimitexceededexception)|
|482|482|UnsupportedLanguageException|[UnsupportedLanguageException](#schemaunsupportedlanguageexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportModel

<a id="opIdImportModel"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ImportModel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ImportModel' \
  -d '{
    "SourceModelArn": {},
    "ModelName": {},
    "VersionName": {},
    "ModelKmsKeyId": {},
    "DataAccessRoleArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.ImportModel`

<p>Creates a new custom model that replicates a source custom model that you import. The source model can be in your Amazon Web Services account or another one.</p> <p>If the source model is in another Amazon Web Services account, then it must have a resource-based policy that authorizes you to import it.</p> <p>The source model must be in the same Amazon Web Services Region that you're using when you import. You can't import a model that's in a different Region.</p>

> Body parameter

```json
{
  "SourceModelArn": {},
  "ModelName": {},
  "VersionName": {},
  "ModelKmsKeyId": {},
  "DataAccessRoleArn": {},
  "Tags": {}
}
```

<h3 id="importmodel-parameters">Parameters</h3>

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
|body|body|[ImportModelRequest](#schemaimportmodelrequest)|true|none|
|» SourceModelArn|body|object|true|none|
|» ModelName|body|object|false|none|
|» VersionName|body|object|false|none|
|» ModelKmsKeyId|body|object|false|none|
|» DataAccessRoleArn|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.ImportModel|

> Example responses

> 200 Response

```json
{
  "ModelArn": {}
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

<h3 id="importmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportModelResponse](#schemaimportmodelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|484|484|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|487|487|KmsKeyValidationException|[KmsKeyValidationException](#schemakmskeyvalidationexception)|
|488|488|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatasets

<a id="opIdListDatasets"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListDatasets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListDatasets' \
  -d '{
    "FlywheelArn": {},
    "Filter": {
      "Status": {},
      "DatasetType": {},
      "CreationTimeAfter": {},
      "CreationTimeBefore": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.ListDatasets`

List the datasets that you have configured in this Region. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

> Body parameter

```json
{
  "FlywheelArn": {},
  "Filter": {
    "Status": {},
    "DatasetType": {},
    "CreationTimeAfter": {},
    "CreationTimeBefore": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listdatasets-parameters">Parameters</h3>

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
|body|body|[ListDatasetsRequest](#schemalistdatasetsrequest)|true|none|
|» FlywheelArn|body|object|false|none|
|» Filter|body|object|false|none|
|» » Status|body|object|false|none|
|» » DatasetType|body|object|false|none|
|» » CreationTimeAfter|body|object|false|none|
|» » CreationTimeBefore|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.ListDatasets|

> Example responses

> 200 Response

```json
{
  "DatasetPropertiesList": {},
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

<h3 id="listdatasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatasetsResponse](#schemalistdatasetsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidFilterException|[InvalidFilterException](#schemainvalidfilterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDocumentClassificationJobs

<a id="opIdListDocumentClassificationJobs"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListDocumentClassificationJobs' \
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

`POST /#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs`

Gets a list of the documentation classification jobs that you have submitted.

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

<h3 id="listdocumentclassificationjobs-parameters">Parameters</h3>

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
|body|body|[ListDocumentClassificationJobsRequest](#schemalistdocumentclassificationjobsrequest)|true|none|
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
|X-Amz-Target|Comprehend_20171127.ListDocumentClassificationJobs|

> Example responses

> 200 Response

```json
{
  "DocumentClassificationJobPropertiesList": {},
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

<h3 id="listdocumentclassificationjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDocumentClassificationJobsResponse](#schemalistdocumentclassificationjobsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidFilterException|[InvalidFilterException](#schemainvalidfilterexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDocumentClassifierSummaries

<a id="opIdListDocumentClassifierSummaries"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListDocumentClassifierSummaries' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries`

Gets a list of summaries of the document classifiers that you have created

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listdocumentclassifiersummaries-parameters">Parameters</h3>

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
|body|body|[ListDocumentClassifierSummariesRequest](#schemalistdocumentclassifiersummariesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.ListDocumentClassifierSummaries|

> Example responses

> 200 Response

```json
{
  "DocumentClassifierSummariesList": {},
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

<h3 id="listdocumentclassifiersummaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDocumentClassifierSummariesResponse](#schemalistdocumentclassifiersummariesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDocumentClassifiers

<a id="opIdListDocumentClassifiers"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListDocumentClassifiers' \
  -d '{
    "Filter": {
      "Status": {},
      "DocumentClassifierName": {},
      "SubmitTimeBefore": {},
      "SubmitTimeAfter": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers`

Gets a list of the document classifiers that you have created.

> Body parameter

```json
{
  "Filter": {
    "Status": {},
    "DocumentClassifierName": {},
    "SubmitTimeBefore": {},
    "SubmitTimeAfter": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listdocumentclassifiers-parameters">Parameters</h3>

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
|body|body|[ListDocumentClassifiersRequest](#schemalistdocumentclassifiersrequest)|true|none|
|» Filter|body|object|false|none|
|» » Status|body|object|false|none|
|» » DocumentClassifierName|body|object|false|none|
|» » SubmitTimeBefore|body|object|false|none|
|» » SubmitTimeAfter|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.ListDocumentClassifiers|

> Example responses

> 200 Response

```json
{
  "DocumentClassifierPropertiesList": {},
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

<h3 id="listdocumentclassifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDocumentClassifiersResponse](#schemalistdocumentclassifiersresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidFilterException|[InvalidFilterException](#schemainvalidfilterexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDominantLanguageDetectionJobs

<a id="opIdListDominantLanguageDetectionJobs"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListDominantLanguageDetectionJobs' \
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

`POST /#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs`

Gets a list of the dominant language detection jobs that you have submitted.

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

<h3 id="listdominantlanguagedetectionjobs-parameters">Parameters</h3>

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
|body|body|[ListDominantLanguageDetectionJobsRequest](#schemalistdominantlanguagedetectionjobsrequest)|true|none|
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
|X-Amz-Target|Comprehend_20171127.ListDominantLanguageDetectionJobs|

> Example responses

> 200 Response

```json
{
  "DominantLanguageDetectionJobPropertiesList": {},
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

<h3 id="listdominantlanguagedetectionjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDominantLanguageDetectionJobsResponse](#schemalistdominantlanguagedetectionjobsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidFilterException|[InvalidFilterException](#schemainvalidfilterexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEndpoints

<a id="opIdListEndpoints"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListEndpoints' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListEndpoints' \
  -d '{
    "Filter": {
      "ModelArn": {},
      "Status": {},
      "CreationTimeBefore": {},
      "CreationTimeAfter": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.ListEndpoints`

Gets a list of all existing endpoints that you've created. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

> Body parameter

```json
{
  "Filter": {
    "ModelArn": {},
    "Status": {},
    "CreationTimeBefore": {},
    "CreationTimeAfter": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listendpoints-parameters">Parameters</h3>

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
|body|body|[ListEndpointsRequest](#schemalistendpointsrequest)|true|none|
|» Filter|body|object|false|none|
|» » ModelArn|body|object|false|none|
|» » Status|body|object|false|none|
|» » CreationTimeBefore|body|object|false|none|
|» » CreationTimeAfter|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.ListEndpoints|

> Example responses

> 200 Response

```json
{
  "EndpointPropertiesList": {},
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

<h3 id="listendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEndpointsResponse](#schemalistendpointsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEntitiesDetectionJobs

<a id="opIdListEntitiesDetectionJobs"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListEntitiesDetectionJobs' \
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

`POST /#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs`

Gets a list of the entity detection jobs that you have submitted.

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

<h3 id="listentitiesdetectionjobs-parameters">Parameters</h3>

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
|body|body|[ListEntitiesDetectionJobsRequest](#schemalistentitiesdetectionjobsrequest)|true|none|
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
|X-Amz-Target|Comprehend_20171127.ListEntitiesDetectionJobs|

> Example responses

> 200 Response

```json
{
  "EntitiesDetectionJobPropertiesList": {},
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

<h3 id="listentitiesdetectionjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEntitiesDetectionJobsResponse](#schemalistentitiesdetectionjobsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidFilterException|[InvalidFilterException](#schemainvalidfilterexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEntityRecognizerSummaries

<a id="opIdListEntityRecognizerSummaries"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListEntityRecognizerSummaries' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries`

Gets a list of summaries for the entity recognizers that you have created.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listentityrecognizersummaries-parameters">Parameters</h3>

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
|body|body|[ListEntityRecognizerSummariesRequest](#schemalistentityrecognizersummariesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.ListEntityRecognizerSummaries|

> Example responses

> 200 Response

```json
{
  "EntityRecognizerSummariesList": {},
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

<h3 id="listentityrecognizersummaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEntityRecognizerSummariesResponse](#schemalistentityrecognizersummariesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEntityRecognizers

<a id="opIdListEntityRecognizers"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListEntityRecognizers' \
  -d '{
    "Filter": {
      "Status": {},
      "RecognizerName": {},
      "SubmitTimeBefore": {},
      "SubmitTimeAfter": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers`

<p>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list.</p> <p>The results of this list are not in any particular order. Please get the list and sort locally if needed.</p>

> Body parameter

```json
{
  "Filter": {
    "Status": {},
    "RecognizerName": {},
    "SubmitTimeBefore": {},
    "SubmitTimeAfter": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listentityrecognizers-parameters">Parameters</h3>

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
|body|body|[ListEntityRecognizersRequest](#schemalistentityrecognizersrequest)|true|none|
|» Filter|body|object|false|none|
|» » Status|body|object|false|none|
|» » RecognizerName|body|object|false|none|
|» » SubmitTimeBefore|body|object|false|none|
|» » SubmitTimeAfter|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.ListEntityRecognizers|

> Example responses

> 200 Response

```json
{
  "EntityRecognizerPropertiesList": {},
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

<h3 id="listentityrecognizers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEntityRecognizersResponse](#schemalistentityrecognizersresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidFilterException|[InvalidFilterException](#schemainvalidfilterexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEventsDetectionJobs

<a id="opIdListEventsDetectionJobs"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListEventsDetectionJobs' \
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

`POST /#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs`

Gets a list of the events detection jobs that you have submitted.

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

<h3 id="listeventsdetectionjobs-parameters">Parameters</h3>

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
|body|body|[ListEventsDetectionJobsRequest](#schemalisteventsdetectionjobsrequest)|true|none|
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
|X-Amz-Target|Comprehend_20171127.ListEventsDetectionJobs|

> Example responses

> 200 Response

```json
{
  "EventsDetectionJobPropertiesList": {},
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

<h3 id="listeventsdetectionjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEventsDetectionJobsResponse](#schemalisteventsdetectionjobsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidFilterException|[InvalidFilterException](#schemainvalidfilterexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFlywheelIterationHistory

<a id="opIdListFlywheelIterationHistory"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListFlywheelIterationHistory' \
  -d '{
    "FlywheelArn": {},
    "Filter": {
      "CreationTimeAfter": {},
      "CreationTimeBefore": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory`

Information about the history of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

> Body parameter

```json
{
  "FlywheelArn": {},
  "Filter": {
    "CreationTimeAfter": {},
    "CreationTimeBefore": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listflywheeliterationhistory-parameters">Parameters</h3>

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
|body|body|[ListFlywheelIterationHistoryRequest](#schemalistflywheeliterationhistoryrequest)|true|none|
|» FlywheelArn|body|object|true|none|
|» Filter|body|object|false|none|
|» » CreationTimeAfter|body|object|false|none|
|» » CreationTimeBefore|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.ListFlywheelIterationHistory|

> Example responses

> 200 Response

```json
{
  "FlywheelIterationPropertiesList": {},
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

<h3 id="listflywheeliterationhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFlywheelIterationHistoryResponse](#schemalistflywheeliterationhistoryresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidFilterException|[InvalidFilterException](#schemainvalidfilterexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFlywheels

<a id="opIdListFlywheels"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListFlywheels' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListFlywheels' \
  -d '{
    "Filter": {
      "Status": {},
      "CreationTimeAfter": {},
      "CreationTimeBefore": {}
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.ListFlywheels`

Gets a list of the flywheels that you have created.

> Body parameter

```json
{
  "Filter": {
    "Status": {},
    "CreationTimeAfter": {},
    "CreationTimeBefore": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listflywheels-parameters">Parameters</h3>

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
|body|body|[ListFlywheelsRequest](#schemalistflywheelsrequest)|true|none|
|» Filter|body|object|false|none|
|» » Status|body|object|false|none|
|» » CreationTimeAfter|body|object|false|none|
|» » CreationTimeBefore|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.ListFlywheels|

> Example responses

> 200 Response

```json
{
  "FlywheelSummaryList": {},
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

<h3 id="listflywheels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFlywheelsResponse](#schemalistflywheelsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidFilterException|[InvalidFilterException](#schemainvalidfilterexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListKeyPhrasesDetectionJobs

<a id="opIdListKeyPhrasesDetectionJobs"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListKeyPhrasesDetectionJobs' \
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

`POST /#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs`

Get a list of key phrase detection jobs that you have submitted.

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

<h3 id="listkeyphrasesdetectionjobs-parameters">Parameters</h3>

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
|body|body|[ListKeyPhrasesDetectionJobsRequest](#schemalistkeyphrasesdetectionjobsrequest)|true|none|
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
|X-Amz-Target|Comprehend_20171127.ListKeyPhrasesDetectionJobs|

> Example responses

> 200 Response

```json
{
  "KeyPhrasesDetectionJobPropertiesList": {},
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

<h3 id="listkeyphrasesdetectionjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListKeyPhrasesDetectionJobsResponse](#schemalistkeyphrasesdetectionjobsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidFilterException|[InvalidFilterException](#schemainvalidfilterexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPiiEntitiesDetectionJobs

<a id="opIdListPiiEntitiesDetectionJobs"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListPiiEntitiesDetectionJobs' \
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

`POST /#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs`

Gets a list of the PII entity detection jobs that you have submitted.

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

<h3 id="listpiientitiesdetectionjobs-parameters">Parameters</h3>

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
|body|body|[ListPiiEntitiesDetectionJobsRequest](#schemalistpiientitiesdetectionjobsrequest)|true|none|
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
|X-Amz-Target|Comprehend_20171127.ListPiiEntitiesDetectionJobs|

> Example responses

> 200 Response

```json
{
  "PiiEntitiesDetectionJobPropertiesList": {},
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

<h3 id="listpiientitiesdetectionjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPiiEntitiesDetectionJobsResponse](#schemalistpiientitiesdetectionjobsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidFilterException|[InvalidFilterException](#schemainvalidfilterexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSentimentDetectionJobs

<a id="opIdListSentimentDetectionJobs"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListSentimentDetectionJobs' \
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

`POST /#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs`

Gets a list of sentiment detection jobs that you have submitted.

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

<h3 id="listsentimentdetectionjobs-parameters">Parameters</h3>

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
|body|body|[ListSentimentDetectionJobsRequest](#schemalistsentimentdetectionjobsrequest)|true|none|
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
|X-Amz-Target|Comprehend_20171127.ListSentimentDetectionJobs|

> Example responses

> 200 Response

```json
{
  "SentimentDetectionJobPropertiesList": {},
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

<h3 id="listsentimentdetectionjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSentimentDetectionJobsResponse](#schemalistsentimentdetectionjobsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidFilterException|[InvalidFilterException](#schemainvalidfilterexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListTagsForResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.ListTagsForResource`

Lists all tags associated with a given Amazon Comprehend resource. 

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
|X-Amz-Target|Comprehend_20171127.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "ResourceArn": {},
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
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTargetedSentimentDetectionJobs

<a id="opIdListTargetedSentimentDetectionJobs"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListTargetedSentimentDetectionJobs' \
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

`POST /#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs`

Gets a list of targeted sentiment detection jobs that you have submitted.

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

<h3 id="listtargetedsentimentdetectionjobs-parameters">Parameters</h3>

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
|body|body|[ListTargetedSentimentDetectionJobsRequest](#schemalisttargetedsentimentdetectionjobsrequest)|true|none|
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
|X-Amz-Target|Comprehend_20171127.ListTargetedSentimentDetectionJobs|

> Example responses

> 200 Response

```json
{
  "TargetedSentimentDetectionJobPropertiesList": {},
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

<h3 id="listtargetedsentimentdetectionjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTargetedSentimentDetectionJobsResponse](#schemalisttargetedsentimentdetectionjobsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidFilterException|[InvalidFilterException](#schemainvalidfilterexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTopicsDetectionJobs

<a id="opIdListTopicsDetectionJobs"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.ListTopicsDetectionJobs' \
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

`POST /#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs`

Gets a list of the topic detection jobs that you have submitted.

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

<h3 id="listtopicsdetectionjobs-parameters">Parameters</h3>

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
|body|body|[ListTopicsDetectionJobsRequest](#schemalisttopicsdetectionjobsrequest)|true|none|
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
|X-Amz-Target|Comprehend_20171127.ListTopicsDetectionJobs|

> Example responses

> 200 Response

```json
{
  "TopicsDetectionJobPropertiesList": {},
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

<h3 id="listtopicsdetectionjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTopicsDetectionJobsResponse](#schemalisttopicsdetectionjobsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidFilterException|[InvalidFilterException](#schemainvalidfilterexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourcePolicy

<a id="opIdPutResourcePolicy"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.PutResourcePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.PutResourcePolicy' \
  -d '{
    "ResourceArn": {},
    "ResourcePolicy": {},
    "PolicyRevisionId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.PutResourcePolicy`

Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account.

> Body parameter

```json
{
  "ResourceArn": {},
  "ResourcePolicy": {},
  "PolicyRevisionId": {}
}
```

<h3 id="putresourcepolicy-parameters">Parameters</h3>

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
|body|body|[PutResourcePolicyRequest](#schemaputresourcepolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|
|» ResourcePolicy|body|object|true|none|
|» PolicyRevisionId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.PutResourcePolicy|

> Example responses

> 200 Response

```json
{
  "PolicyRevisionId": {}
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

<h3 id="putresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResourcePolicyResponse](#schemaputresourcepolicyresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartDocumentClassificationJob

<a id="opIdStartDocumentClassificationJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StartDocumentClassificationJob' \
  -d '{
    "JobName": {},
    "DocumentClassifierArn": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "DataAccessRoleArn": {},
    "ClientRequestToken": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "Tags": {},
    "FlywheelArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob`

Starts an asynchronous document classification job. Use the <code>DescribeDocumentClassificationJob</code> operation to track the progress of the job.

> Body parameter

```json
{
  "JobName": {},
  "DocumentClassifierArn": {},
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "ClientRequestToken": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Tags": {},
  "FlywheelArn": {}
}
```

<h3 id="startdocumentclassificationjob-parameters">Parameters</h3>

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
|body|body|[StartDocumentClassificationJobRequest](#schemastartdocumentclassificationjobrequest)|true|none|
|» JobName|body|object|false|none|
|» DocumentClassifierArn|body|object|false|none|
|» InputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » InputFormat|body|object|false|none|
|» » DocumentReaderConfig|body|object|false|none|
|» » » DocumentReadAction|body|object|true|none|
|» » » DocumentReadMode|body|object|false|none|
|» » » FeatureTypes|body|object|false|none|
|» OutputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » KmsKeyId|body|object|false|none|
|» DataAccessRoleArn|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» VolumeKmsKeyId|body|object|false|none|
|» VpcConfig|body|object|false|none|
|» » SecurityGroupIds|body|object|true|none|
|» » Subnets|body|object|true|none|
|» Tags|body|object|false|none|
|» FlywheelArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StartDocumentClassificationJob|

> Example responses

> 200 Response

```json
{
  "JobId": {},
  "JobArn": {},
  "JobStatus": {},
  "DocumentClassifierArn": {}
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

<h3 id="startdocumentclassificationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartDocumentClassificationJobResponse](#schemastartdocumentclassificationjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|484|484|KmsKeyValidationException|[KmsKeyValidationException](#schemakmskeyvalidationexception)|
|485|485|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|486|486|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|487|487|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartDominantLanguageDetectionJob

<a id="opIdStartDominantLanguageDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StartDominantLanguageDetectionJob' \
  -d '{
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "DataAccessRoleArn": {},
    "JobName": {},
    "ClientRequestToken": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob`

Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.

> Body parameter

```json
{
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "ClientRequestToken": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Tags": {}
}
```

<h3 id="startdominantlanguagedetectionjob-parameters">Parameters</h3>

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
|body|body|[StartDominantLanguageDetectionJobRequest](#schemastartdominantlanguagedetectionjobrequest)|true|none|
|» InputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » InputFormat|body|object|false|none|
|» » DocumentReaderConfig|body|object|false|none|
|» » » DocumentReadAction|body|object|true|none|
|» » » DocumentReadMode|body|object|false|none|
|» » » FeatureTypes|body|object|false|none|
|» OutputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » KmsKeyId|body|object|false|none|
|» DataAccessRoleArn|body|object|true|none|
|» JobName|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» VolumeKmsKeyId|body|object|false|none|
|» VpcConfig|body|object|false|none|
|» » SecurityGroupIds|body|object|true|none|
|» » Subnets|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StartDominantLanguageDetectionJob|

> Example responses

> 200 Response

```json
{
  "JobId": {},
  "JobArn": {},
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

<h3 id="startdominantlanguagedetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartDominantLanguageDetectionJobResponse](#schemastartdominantlanguagedetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|KmsKeyValidationException|[KmsKeyValidationException](#schemakmskeyvalidationexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartEntitiesDetectionJob

<a id="opIdStartEntitiesDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StartEntitiesDetectionJob' \
  -d '{
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "DataAccessRoleArn": {},
    "JobName": {},
    "EntityRecognizerArn": {},
    "LanguageCode": {},
    "ClientRequestToken": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "Tags": {},
    "FlywheelArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob`

<p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p> <p>This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code> must be used in order to provide access to the recognizer being used to detect the custom entity.</p>

> Body parameter

```json
{
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "EntityRecognizerArn": {},
  "LanguageCode": {},
  "ClientRequestToken": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Tags": {},
  "FlywheelArn": {}
}
```

<h3 id="startentitiesdetectionjob-parameters">Parameters</h3>

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
|body|body|[StartEntitiesDetectionJobRequest](#schemastartentitiesdetectionjobrequest)|true|none|
|» InputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » InputFormat|body|object|false|none|
|» » DocumentReaderConfig|body|object|false|none|
|» » » DocumentReadAction|body|object|true|none|
|» » » DocumentReadMode|body|object|false|none|
|» » » FeatureTypes|body|object|false|none|
|» OutputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » KmsKeyId|body|object|false|none|
|» DataAccessRoleArn|body|object|true|none|
|» JobName|body|object|false|none|
|» EntityRecognizerArn|body|object|false|none|
|» LanguageCode|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» VolumeKmsKeyId|body|object|false|none|
|» VpcConfig|body|object|false|none|
|» » SecurityGroupIds|body|object|true|none|
|» » Subnets|body|object|true|none|
|» Tags|body|object|false|none|
|» FlywheelArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StartEntitiesDetectionJob|

> Example responses

> 200 Response

```json
{
  "JobId": {},
  "JobArn": {},
  "JobStatus": {},
  "EntityRecognizerArn": {}
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

<h3 id="startentitiesdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartEntitiesDetectionJobResponse](#schemastartentitiesdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|484|484|KmsKeyValidationException|[KmsKeyValidationException](#schemakmskeyvalidationexception)|
|485|485|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|486|486|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|487|487|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartEventsDetectionJob

<a id="opIdStartEventsDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StartEventsDetectionJob' \
  -d '{
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "DataAccessRoleArn": {},
    "JobName": {},
    "LanguageCode": {},
    "ClientRequestToken": {},
    "TargetEventTypes": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob`

Starts an asynchronous event detection job for a collection of documents.

> Body parameter

```json
{
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "LanguageCode": {},
  "ClientRequestToken": {},
  "TargetEventTypes": {},
  "Tags": {}
}
```

<h3 id="starteventsdetectionjob-parameters">Parameters</h3>

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
|body|body|[StartEventsDetectionJobRequest](#schemastarteventsdetectionjobrequest)|true|none|
|» InputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » InputFormat|body|object|false|none|
|» » DocumentReaderConfig|body|object|false|none|
|» » » DocumentReadAction|body|object|true|none|
|» » » DocumentReadMode|body|object|false|none|
|» » » FeatureTypes|body|object|false|none|
|» OutputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » KmsKeyId|body|object|false|none|
|» DataAccessRoleArn|body|object|true|none|
|» JobName|body|object|false|none|
|» LanguageCode|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» TargetEventTypes|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StartEventsDetectionJob|

> Example responses

> 200 Response

```json
{
  "JobId": {},
  "JobArn": {},
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

<h3 id="starteventsdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartEventsDetectionJobResponse](#schemastarteventsdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|KmsKeyValidationException|[KmsKeyValidationException](#schemakmskeyvalidationexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartFlywheelIteration

<a id="opIdStartFlywheelIteration"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StartFlywheelIteration' \
  -d '{
    "FlywheelArn": {},
    "ClientRequestToken": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration`

Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

> Body parameter

```json
{
  "FlywheelArn": {},
  "ClientRequestToken": {}
}
```

<h3 id="startflywheeliteration-parameters">Parameters</h3>

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
|body|body|[StartFlywheelIterationRequest](#schemastartflywheeliterationrequest)|true|none|
|» FlywheelArn|body|object|true|none|
|» ClientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StartFlywheelIteration|

> Example responses

> 200 Response

```json
{
  "FlywheelArn": {},
  "FlywheelIterationId": {}
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

<h3 id="startflywheeliteration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartFlywheelIterationResponse](#schemastartflywheeliterationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartKeyPhrasesDetectionJob

<a id="opIdStartKeyPhrasesDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StartKeyPhrasesDetectionJob' \
  -d '{
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "DataAccessRoleArn": {},
    "JobName": {},
    "LanguageCode": {},
    "ClientRequestToken": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob`

Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.

> Body parameter

```json
{
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "LanguageCode": {},
  "ClientRequestToken": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Tags": {}
}
```

<h3 id="startkeyphrasesdetectionjob-parameters">Parameters</h3>

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
|body|body|[StartKeyPhrasesDetectionJobRequest](#schemastartkeyphrasesdetectionjobrequest)|true|none|
|» InputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » InputFormat|body|object|false|none|
|» » DocumentReaderConfig|body|object|false|none|
|» » » DocumentReadAction|body|object|true|none|
|» » » DocumentReadMode|body|object|false|none|
|» » » FeatureTypes|body|object|false|none|
|» OutputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » KmsKeyId|body|object|false|none|
|» DataAccessRoleArn|body|object|true|none|
|» JobName|body|object|false|none|
|» LanguageCode|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» VolumeKmsKeyId|body|object|false|none|
|» VpcConfig|body|object|false|none|
|» » SecurityGroupIds|body|object|true|none|
|» » Subnets|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StartKeyPhrasesDetectionJob|

> Example responses

> 200 Response

```json
{
  "JobId": {},
  "JobArn": {},
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

<h3 id="startkeyphrasesdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartKeyPhrasesDetectionJobResponse](#schemastartkeyphrasesdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|KmsKeyValidationException|[KmsKeyValidationException](#schemakmskeyvalidationexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartPiiEntitiesDetectionJob

<a id="opIdStartPiiEntitiesDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StartPiiEntitiesDetectionJob' \
  -d '{
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "Mode": {},
    "RedactionConfig": {
      "PiiEntityTypes": {},
      "MaskMode": {},
      "MaskCharacter": {}
    },
    "DataAccessRoleArn": {},
    "JobName": {},
    "LanguageCode": {},
    "ClientRequestToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob`

Starts an asynchronous PII entity detection job for a collection of documents.

> Body parameter

```json
{
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "Mode": {},
  "RedactionConfig": {
    "PiiEntityTypes": {},
    "MaskMode": {},
    "MaskCharacter": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "LanguageCode": {},
  "ClientRequestToken": {},
  "Tags": {}
}
```

<h3 id="startpiientitiesdetectionjob-parameters">Parameters</h3>

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
|body|body|[StartPiiEntitiesDetectionJobRequest](#schemastartpiientitiesdetectionjobrequest)|true|none|
|» InputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » InputFormat|body|object|false|none|
|» » DocumentReaderConfig|body|object|false|none|
|» » » DocumentReadAction|body|object|true|none|
|» » » DocumentReadMode|body|object|false|none|
|» » » FeatureTypes|body|object|false|none|
|» OutputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » KmsKeyId|body|object|false|none|
|» Mode|body|object|true|none|
|» RedactionConfig|body|object|false|none|
|» » PiiEntityTypes|body|object|false|none|
|» » MaskMode|body|object|false|none|
|» » MaskCharacter|body|object|false|none|
|» DataAccessRoleArn|body|object|true|none|
|» JobName|body|object|false|none|
|» LanguageCode|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StartPiiEntitiesDetectionJob|

> Example responses

> 200 Response

```json
{
  "JobId": {},
  "JobArn": {},
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

<h3 id="startpiientitiesdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartPiiEntitiesDetectionJobResponse](#schemastartpiientitiesdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|KmsKeyValidationException|[KmsKeyValidationException](#schemakmskeyvalidationexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSentimentDetectionJob

<a id="opIdStartSentimentDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StartSentimentDetectionJob' \
  -d '{
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "DataAccessRoleArn": {},
    "JobName": {},
    "LanguageCode": {},
    "ClientRequestToken": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob`

Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the status of a job.

> Body parameter

```json
{
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "LanguageCode": {},
  "ClientRequestToken": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Tags": {}
}
```

<h3 id="startsentimentdetectionjob-parameters">Parameters</h3>

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
|body|body|[StartSentimentDetectionJobRequest](#schemastartsentimentdetectionjobrequest)|true|none|
|» InputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » InputFormat|body|object|false|none|
|» » DocumentReaderConfig|body|object|false|none|
|» » » DocumentReadAction|body|object|true|none|
|» » » DocumentReadMode|body|object|false|none|
|» » » FeatureTypes|body|object|false|none|
|» OutputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » KmsKeyId|body|object|false|none|
|» DataAccessRoleArn|body|object|true|none|
|» JobName|body|object|false|none|
|» LanguageCode|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» VolumeKmsKeyId|body|object|false|none|
|» VpcConfig|body|object|false|none|
|» » SecurityGroupIds|body|object|true|none|
|» » Subnets|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StartSentimentDetectionJob|

> Example responses

> 200 Response

```json
{
  "JobId": {},
  "JobArn": {},
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

<h3 id="startsentimentdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartSentimentDetectionJobResponse](#schemastartsentimentdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|KmsKeyValidationException|[KmsKeyValidationException](#schemakmskeyvalidationexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartTargetedSentimentDetectionJob

<a id="opIdStartTargetedSentimentDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StartTargetedSentimentDetectionJob' \
  -d '{
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "DataAccessRoleArn": {},
    "JobName": {},
    "LanguageCode": {},
    "ClientRequestToken": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob`

Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the <code>DescribeTargetedSentimentDetectionJob</code> operation to track the status of a job.

> Body parameter

```json
{
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "LanguageCode": {},
  "ClientRequestToken": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Tags": {}
}
```

<h3 id="starttargetedsentimentdetectionjob-parameters">Parameters</h3>

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
|body|body|[StartTargetedSentimentDetectionJobRequest](#schemastarttargetedsentimentdetectionjobrequest)|true|none|
|» InputDataConfig|body|[InputDataConfig](#schemainputdataconfig)|true|The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis.|
|» OutputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » KmsKeyId|body|object|false|none|
|» DataAccessRoleArn|body|object|true|none|
|» JobName|body|object|false|none|
|» LanguageCode|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» VolumeKmsKeyId|body|object|false|none|
|» VpcConfig|body|[VpcConfig](#schemavpcconfig)|false| Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. |
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StartTargetedSentimentDetectionJob|

> Example responses

> 200 Response

```json
{
  "JobId": {},
  "JobArn": {},
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

<h3 id="starttargetedsentimentdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartTargetedSentimentDetectionJobResponse](#schemastarttargetedsentimentdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|KmsKeyValidationException|[KmsKeyValidationException](#schemakmskeyvalidationexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartTopicsDetectionJob

<a id="opIdStartTopicsDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StartTopicsDetectionJob' \
  -d '{
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "DataAccessRoleArn": {},
    "JobName": {},
    "NumberOfTopics": {},
    "ClientRequestToken": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob`

Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.

> Body parameter

```json
{
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "NumberOfTopics": {},
  "ClientRequestToken": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Tags": {}
}
```

<h3 id="starttopicsdetectionjob-parameters">Parameters</h3>

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
|body|body|[StartTopicsDetectionJobRequest](#schemastarttopicsdetectionjobrequest)|true|none|
|» InputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » InputFormat|body|object|false|none|
|» » DocumentReaderConfig|body|object|false|none|
|» » » DocumentReadAction|body|object|true|none|
|» » » DocumentReadMode|body|object|false|none|
|» » » FeatureTypes|body|object|false|none|
|» OutputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » KmsKeyId|body|object|false|none|
|» DataAccessRoleArn|body|object|true|none|
|» JobName|body|object|false|none|
|» NumberOfTopics|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» VolumeKmsKeyId|body|object|false|none|
|» VpcConfig|body|object|false|none|
|» » SecurityGroupIds|body|object|true|none|
|» » Subnets|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StartTopicsDetectionJob|

> Example responses

> 200 Response

```json
{
  "JobId": {},
  "JobArn": {},
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

<h3 id="starttopicsdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartTopicsDetectionJobResponse](#schemastarttopicsdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|KmsKeyValidationException|[KmsKeyValidationException](#schemakmskeyvalidationexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopDominantLanguageDetectionJob

<a id="opIdStopDominantLanguageDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StopDominantLanguageDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob`

<p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="stopdominantlanguagedetectionjob-parameters">Parameters</h3>

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
|body|body|[StopDominantLanguageDetectionJobRequest](#schemastopdominantlanguagedetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StopDominantLanguageDetectionJob|

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

<h3 id="stopdominantlanguagedetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopDominantLanguageDetectionJobResponse](#schemastopdominantlanguagedetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopEntitiesDetectionJob

<a id="opIdStopEntitiesDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StopEntitiesDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob`

<p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="stopentitiesdetectionjob-parameters">Parameters</h3>

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
|body|body|[StopEntitiesDetectionJobRequest](#schemastopentitiesdetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StopEntitiesDetectionJob|

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

<h3 id="stopentitiesdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopEntitiesDetectionJobResponse](#schemastopentitiesdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopEventsDetectionJob

<a id="opIdStopEventsDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StopEventsDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob`

Stops an events detection job in progress.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="stopeventsdetectionjob-parameters">Parameters</h3>

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
|body|body|[StopEventsDetectionJobRequest](#schemastopeventsdetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StopEventsDetectionJob|

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

<h3 id="stopeventsdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopEventsDetectionJobResponse](#schemastopeventsdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopKeyPhrasesDetectionJob

<a id="opIdStopKeyPhrasesDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StopKeyPhrasesDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob`

<p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="stopkeyphrasesdetectionjob-parameters">Parameters</h3>

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
|body|body|[StopKeyPhrasesDetectionJobRequest](#schemastopkeyphrasesdetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StopKeyPhrasesDetectionJob|

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

<h3 id="stopkeyphrasesdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopKeyPhrasesDetectionJobResponse](#schemastopkeyphrasesdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopPiiEntitiesDetectionJob

<a id="opIdStopPiiEntitiesDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StopPiiEntitiesDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob`

Stops a PII entities detection job in progress.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="stoppiientitiesdetectionjob-parameters">Parameters</h3>

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
|body|body|[StopPiiEntitiesDetectionJobRequest](#schemastoppiientitiesdetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StopPiiEntitiesDetectionJob|

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

<h3 id="stoppiientitiesdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopPiiEntitiesDetectionJobResponse](#schemastoppiientitiesdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopSentimentDetectionJob

<a id="opIdStopSentimentDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StopSentimentDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob`

<p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="stopsentimentdetectionjob-parameters">Parameters</h3>

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
|body|body|[StopSentimentDetectionJobRequest](#schemastopsentimentdetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StopSentimentDetectionJob|

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

<h3 id="stopsentimentdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopSentimentDetectionJobResponse](#schemastopsentimentdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopTargetedSentimentDetectionJob

<a id="opIdStopTargetedSentimentDetectionJob"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StopTargetedSentimentDetectionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob`

<p>Stops a targeted sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="stoptargetedsentimentdetectionjob-parameters">Parameters</h3>

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
|body|body|[StopTargetedSentimentDetectionJobRequest](#schemastoptargetedsentimentdetectionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StopTargetedSentimentDetectionJob|

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

<h3 id="stoptargetedsentimentdetectionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopTargetedSentimentDetectionJobResponse](#schemastoptargetedsentimentdetectionjobresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|JobNotFoundException|[JobNotFoundException](#schemajobnotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopTrainingDocumentClassifier

<a id="opIdStopTrainingDocumentClassifier"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StopTrainingDocumentClassifier' \
  -d '{
    "DocumentClassifierArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier`

<p>Stops a document classifier training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body. </p>

> Body parameter

```json
{
  "DocumentClassifierArn": {}
}
```

<h3 id="stoptrainingdocumentclassifier-parameters">Parameters</h3>

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
|body|body|[StopTrainingDocumentClassifierRequest](#schemastoptrainingdocumentclassifierrequest)|true|none|
|» DocumentClassifierArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StopTrainingDocumentClassifier|

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

<h3 id="stoptrainingdocumentclassifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopTrainingDocumentClassifierResponse](#schemastoptrainingdocumentclassifierresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopTrainingEntityRecognizer

<a id="opIdStopTrainingEntityRecognizer"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.StopTrainingEntityRecognizer' \
  -d '{
    "EntityRecognizerArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer`

<p>Stops an entity recognizer training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body.</p>

> Body parameter

```json
{
  "EntityRecognizerArn": {}
}
```

<h3 id="stoptrainingentityrecognizer-parameters">Parameters</h3>

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
|body|body|[StopTrainingEntityRecognizerRequest](#schemastoptrainingentityrecognizerrequest)|true|none|
|» EntityRecognizerArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.StopTrainingEntityRecognizer|

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

<h3 id="stoptrainingentityrecognizer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopTrainingEntityRecognizerResponse](#schemastoptrainingentityrecognizerresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.TagResource`

Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. 

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
|X-Amz-Target|Comprehend_20171127.TagResource|

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
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.UntagResource`

Removes a specific tag associated with an Amazon Comprehend resource. 

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
|X-Amz-Target|Comprehend_20171127.UntagResource|

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
|480|480|TooManyTagKeysException|[TooManyTagKeysException](#schematoomanytagkeysexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEndpoint

<a id="opIdUpdateEndpoint"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.UpdateEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.UpdateEndpoint' \
  -d '{
    "EndpointArn": {},
    "DesiredModelArn": {},
    "DesiredInferenceUnits": {},
    "DesiredDataAccessRoleArn": {},
    "FlywheelArn": {}
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.UpdateEndpoint`

Updates information about the specified endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

> Body parameter

```json
{
  "EndpointArn": {},
  "DesiredModelArn": {},
  "DesiredInferenceUnits": {},
  "DesiredDataAccessRoleArn": {},
  "FlywheelArn": {}
}
```

<h3 id="updateendpoint-parameters">Parameters</h3>

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
|body|body|[UpdateEndpointRequest](#schemaupdateendpointrequest)|true|none|
|» EndpointArn|body|object|true|none|
|» DesiredModelArn|body|object|false|none|
|» DesiredInferenceUnits|body|object|false|none|
|» DesiredDataAccessRoleArn|body|object|false|none|
|» FlywheelArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.UpdateEndpoint|

> Example responses

> 200 Response

```json
{
  "DesiredModelArn": {}
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

<h3 id="updateendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEndpointResponse](#schemaupdateendpointresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFlywheel

<a id="opIdUpdateFlywheel"></a>

> Code samples

```bash
curl 'https://comprehend.us-east-1.amazonaws.com/#X-Amz-Target=Comprehend_20171127.UpdateFlywheel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Comprehend_20171127.UpdateFlywheel' \
  -d '{
    "FlywheelArn": {},
    "ActiveModelArn": {},
    "DataAccessRoleArn": {},
    "DataSecurityConfig": {
      "ModelKmsKeyId": {},
      "VolumeKmsKeyId": {},
      "VpcConfig": {
        "SecurityGroupIds": {},
        "Subnets": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=Comprehend_20171127.UpdateFlywheel`

Update the configuration information for an existing flywheel.

> Body parameter

```json
{
  "FlywheelArn": {},
  "ActiveModelArn": {},
  "DataAccessRoleArn": {},
  "DataSecurityConfig": {
    "ModelKmsKeyId": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    }
  }
}
```

<h3 id="updateflywheel-parameters">Parameters</h3>

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
|body|body|[UpdateFlywheelRequest](#schemaupdateflywheelrequest)|true|none|
|» FlywheelArn|body|object|true|none|
|» ActiveModelArn|body|object|false|none|
|» DataAccessRoleArn|body|object|false|none|
|» DataSecurityConfig|body|object|false|none|
|» » ModelKmsKeyId|body|object|false|none|
|» » VolumeKmsKeyId|body|object|false|none|
|» » VpcConfig|body|[VpcConfig](#schemavpcconfig)|false| Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Comprehend_20171127.UpdateFlywheel|

> Example responses

> 200 Response

```json
{
  "FlywheelProperties": {
    "FlywheelArn": {},
    "ActiveModelArn": {},
    "DataAccessRoleArn": {},
    "TaskConfig": {
      "LanguageCode": {},
      "DocumentClassificationConfig": {
        "Mode": {},
        "Labels": {}
      },
      "EntityRecognitionConfig": {
        "EntityTypes": {}
      }
    },
    "DataLakeS3Uri": {},
    "DataSecurityConfig": {
      "ModelKmsKeyId": {},
      "VolumeKmsKeyId": {},
      "DataLakeKmsKeyId": {},
      "VpcConfig": {
        "SecurityGroupIds": {},
        "Subnets": {}
      }
    },
    "Status": {},
    "ModelType": {},
    "Message": {},
    "CreationTime": {},
    "LastModifiedTime": {},
    "LatestFlywheelIteration": {}
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

<h3 id="updateflywheel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFlywheelResponse](#schemaupdateflywheelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|KmsKeyValidationException|[KmsKeyValidationException](#schemakmskeyvalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchDetectDominantLanguageResponse">BatchDetectDominantLanguageResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetectdominantlanguageresponse"></a>
<a id="schema_BatchDetectDominantLanguageResponse"></a>
<a id="tocSbatchdetectdominantlanguageresponse"></a>
<a id="tocsbatchdetectdominantlanguageresponse"></a>

```json
{
  "ResultList": {},
  "ErrorList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResultList|object|true|none|none|
|ErrorList|object|true|none|none|

<h2 id="tocS_BatchDetectDominantLanguageRequest">BatchDetectDominantLanguageRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetectdominantlanguagerequest"></a>
<a id="schema_BatchDetectDominantLanguageRequest"></a>
<a id="tocSbatchdetectdominantlanguagerequest"></a>
<a id="tocsbatchdetectdominantlanguagerequest"></a>

```json
{
  "TextList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TextList|object|true|none|none|

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

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

<h2 id="tocS_BatchSizeLimitExceededException">BatchSizeLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemabatchsizelimitexceededexception"></a>
<a id="schema_BatchSizeLimitExceededException"></a>
<a id="tocSbatchsizelimitexceededexception"></a>
<a id="tocsbatchsizelimitexceededexception"></a>

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

<h2 id="tocS_BatchDetectEntitiesResponse">BatchDetectEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetectentitiesresponse"></a>
<a id="schema_BatchDetectEntitiesResponse"></a>
<a id="tocSbatchdetectentitiesresponse"></a>
<a id="tocsbatchdetectentitiesresponse"></a>

```json
{
  "ResultList": {},
  "ErrorList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResultList|object|true|none|none|
|ErrorList|object|true|none|none|

<h2 id="tocS_BatchDetectEntitiesRequest">BatchDetectEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetectentitiesrequest"></a>
<a id="schema_BatchDetectEntitiesRequest"></a>
<a id="tocSbatchdetectentitiesrequest"></a>
<a id="tocsbatchdetectentitiesrequest"></a>

```json
{
  "TextList": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TextList|object|true|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_UnsupportedLanguageException">UnsupportedLanguageException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedlanguageexception"></a>
<a id="schema_UnsupportedLanguageException"></a>
<a id="tocSunsupportedlanguageexception"></a>
<a id="tocsunsupportedlanguageexception"></a>

```json
null
```

<h2 id="tocS_BatchDetectKeyPhrasesResponse">BatchDetectKeyPhrasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetectkeyphrasesresponse"></a>
<a id="schema_BatchDetectKeyPhrasesResponse"></a>
<a id="tocSbatchdetectkeyphrasesresponse"></a>
<a id="tocsbatchdetectkeyphrasesresponse"></a>

```json
{
  "ResultList": {},
  "ErrorList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResultList|object|true|none|none|
|ErrorList|object|true|none|none|

<h2 id="tocS_BatchDetectKeyPhrasesRequest">BatchDetectKeyPhrasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetectkeyphrasesrequest"></a>
<a id="schema_BatchDetectKeyPhrasesRequest"></a>
<a id="tocSbatchdetectkeyphrasesrequest"></a>
<a id="tocsbatchdetectkeyphrasesrequest"></a>

```json
{
  "TextList": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TextList|object|true|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_BatchDetectSentimentResponse">BatchDetectSentimentResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetectsentimentresponse"></a>
<a id="schema_BatchDetectSentimentResponse"></a>
<a id="tocSbatchdetectsentimentresponse"></a>
<a id="tocsbatchdetectsentimentresponse"></a>

```json
{
  "ResultList": {},
  "ErrorList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResultList|object|true|none|none|
|ErrorList|object|true|none|none|

<h2 id="tocS_BatchDetectSentimentRequest">BatchDetectSentimentRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetectsentimentrequest"></a>
<a id="schema_BatchDetectSentimentRequest"></a>
<a id="tocSbatchdetectsentimentrequest"></a>
<a id="tocsbatchdetectsentimentrequest"></a>

```json
{
  "TextList": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TextList|object|true|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_BatchDetectSyntaxResponse">BatchDetectSyntaxResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetectsyntaxresponse"></a>
<a id="schema_BatchDetectSyntaxResponse"></a>
<a id="tocSbatchdetectsyntaxresponse"></a>
<a id="tocsbatchdetectsyntaxresponse"></a>

```json
{
  "ResultList": {},
  "ErrorList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResultList|object|true|none|none|
|ErrorList|object|true|none|none|

<h2 id="tocS_BatchDetectSyntaxRequest">BatchDetectSyntaxRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetectsyntaxrequest"></a>
<a id="schema_BatchDetectSyntaxRequest"></a>
<a id="tocSbatchdetectsyntaxrequest"></a>
<a id="tocsbatchdetectsyntaxrequest"></a>

```json
{
  "TextList": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TextList|object|true|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_BatchDetectTargetedSentimentResponse">BatchDetectTargetedSentimentResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetecttargetedsentimentresponse"></a>
<a id="schema_BatchDetectTargetedSentimentResponse"></a>
<a id="tocSbatchdetecttargetedsentimentresponse"></a>
<a id="tocsbatchdetecttargetedsentimentresponse"></a>

```json
{
  "ResultList": {},
  "ErrorList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResultList|object|true|none|none|
|ErrorList|object|true|none|none|

<h2 id="tocS_BatchDetectTargetedSentimentRequest">BatchDetectTargetedSentimentRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetecttargetedsentimentrequest"></a>
<a id="schema_BatchDetectTargetedSentimentRequest"></a>
<a id="tocSbatchdetecttargetedsentimentrequest"></a>
<a id="tocsbatchdetecttargetedsentimentrequest"></a>

```json
{
  "TextList": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TextList|object|true|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_ClassifyDocumentResponse">ClassifyDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclassifydocumentresponse"></a>
<a id="schema_ClassifyDocumentResponse"></a>
<a id="tocSclassifydocumentresponse"></a>
<a id="tocsclassifydocumentresponse"></a>

```json
{
  "Classes": {},
  "Labels": {},
  "DocumentMetadata": {
    "Pages": {},
    "ExtractedCharacters": {}
  },
  "DocumentType": {},
  "Errors": {},
  "Warnings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Classes|object|false|none|none|
|Labels|object|false|none|none|
|DocumentMetadata|object|false|none|none|
|DocumentType|object|false|none|none|
|Errors|object|false|none|none|
|Warnings|object|false|none|none|

<h2 id="tocS_ClassifyDocumentRequest">ClassifyDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclassifydocumentrequest"></a>
<a id="schema_ClassifyDocumentRequest"></a>
<a id="tocSclassifydocumentrequest"></a>
<a id="tocsclassifydocumentrequest"></a>

```json
{
  "Text": {},
  "EndpointArn": {},
  "Bytes": {},
  "DocumentReaderConfig": {
    "DocumentReadAction": {},
    "DocumentReadMode": {},
    "FeatureTypes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|false|none|none|
|EndpointArn|object|true|none|none|
|Bytes|object|false|none|none|
|DocumentReaderConfig|object|false|none|none|

<h2 id="tocS_ResourceUnavailableException">ResourceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceunavailableexception"></a>
<a id="schema_ResourceUnavailableException"></a>
<a id="tocSresourceunavailableexception"></a>
<a id="tocsresourceunavailableexception"></a>

```json
null
```

<h2 id="tocS_ContainsPiiEntitiesResponse">ContainsPiiEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontainspiientitiesresponse"></a>
<a id="schema_ContainsPiiEntitiesResponse"></a>
<a id="tocScontainspiientitiesresponse"></a>
<a id="tocscontainspiientitiesresponse"></a>

```json
{
  "Labels": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Labels|object|false|none|none|

<h2 id="tocS_ContainsPiiEntitiesRequest">ContainsPiiEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemacontainspiientitiesrequest"></a>
<a id="schema_ContainsPiiEntitiesRequest"></a>
<a id="tocScontainspiientitiesrequest"></a>
<a id="tocscontainspiientitiesrequest"></a>

```json
{
  "Text": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|true|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_CreateDatasetResponse">CreateDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetresponse"></a>
<a id="schema_CreateDatasetResponse"></a>
<a id="tocScreatedatasetresponse"></a>
<a id="tocscreatedatasetresponse"></a>

```json
{
  "DatasetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetArn|object|false|none|none|

<h2 id="tocS_CreateDatasetRequest">CreateDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetrequest"></a>
<a id="schema_CreateDatasetRequest"></a>
<a id="tocScreatedatasetrequest"></a>
<a id="tocscreatedatasetrequest"></a>

```json
{
  "FlywheelArn": {},
  "DatasetName": {},
  "DatasetType": {},
  "Description": {},
  "InputDataConfig": {
    "AugmentedManifests": {},
    "DataFormat": {},
    "DocumentClassifierInputDataConfig": {
      "S3Uri": {},
      "LabelDelimiter": {}
    },
    "EntityRecognizerInputDataConfig": {
      "Annotations": {
        "S3Uri": {}
      },
      "Documents": {
        "S3Uri": {},
        "InputFormat": {}
      },
      "EntityList": {
        "S3Uri": {}
      }
    }
  },
  "ClientRequestToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelArn|object|true|none|none|
|DatasetName|object|true|none|none|
|DatasetType|object|false|none|none|
|Description|object|false|none|none|
|InputDataConfig|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

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

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
null
```

<h2 id="tocS_ResourceLimitExceededException">ResourceLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelimitexceededexception"></a>
<a id="schema_ResourceLimitExceededException"></a>
<a id="tocSresourcelimitexceededexception"></a>
<a id="tocsresourcelimitexceededexception"></a>

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

<h2 id="tocS_CreateDocumentClassifierResponse">CreateDocumentClassifierResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedocumentclassifierresponse"></a>
<a id="schema_CreateDocumentClassifierResponse"></a>
<a id="tocScreatedocumentclassifierresponse"></a>
<a id="tocscreatedocumentclassifierresponse"></a>

```json
{
  "DocumentClassifierArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentClassifierArn|object|false|none|none|

<h2 id="tocS_CreateDocumentClassifierRequest">CreateDocumentClassifierRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedocumentclassifierrequest"></a>
<a id="schema_CreateDocumentClassifierRequest"></a>
<a id="tocScreatedocumentclassifierrequest"></a>
<a id="tocscreatedocumentclassifierrequest"></a>

```json
{
  "DocumentClassifierName": {},
  "VersionName": {},
  "DataAccessRoleArn": {},
  "Tags": {},
  "InputDataConfig": {
    "DataFormat": {},
    "S3Uri": {},
    "TestS3Uri": {},
    "LabelDelimiter": {},
    "AugmentedManifests": {},
    "DocumentType": {},
    "Documents": {
      "S3Uri": {},
      "TestS3Uri": {}
    },
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {},
    "FlywheelStatsS3Prefix": {}
  },
  "ClientRequestToken": {},
  "LanguageCode": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Mode": {},
  "ModelKmsKeyId": {},
  "ModelPolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentClassifierName|object|true|none|none|
|VersionName|object|false|none|none|
|DataAccessRoleArn|object|true|none|none|
|Tags|object|false|none|none|
|InputDataConfig|object|true|none|none|
|OutputDataConfig|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|LanguageCode|object|true|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|object|false|none|none|
|Mode|object|false|none|none|
|ModelKmsKeyId|object|false|none|none|
|ModelPolicy|object|false|none|none|

<h2 id="tocS_KmsKeyValidationException">KmsKeyValidationException</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyvalidationexception"></a>
<a id="schema_KmsKeyValidationException"></a>
<a id="tocSkmskeyvalidationexception"></a>
<a id="tocskmskeyvalidationexception"></a>

```json
null
```

<h2 id="tocS_CreateEndpointResponse">CreateEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateendpointresponse"></a>
<a id="schema_CreateEndpointResponse"></a>
<a id="tocScreateendpointresponse"></a>
<a id="tocscreateendpointresponse"></a>

```json
{
  "EndpointArn": {},
  "ModelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|false|none|none|
|ModelArn|object|false|none|none|

<h2 id="tocS_CreateEndpointRequest">CreateEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateendpointrequest"></a>
<a id="schema_CreateEndpointRequest"></a>
<a id="tocScreateendpointrequest"></a>
<a id="tocscreateendpointrequest"></a>

```json
{
  "EndpointName": {},
  "ModelArn": {},
  "DesiredInferenceUnits": {},
  "ClientRequestToken": {},
  "Tags": {},
  "DataAccessRoleArn": {},
  "FlywheelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointName|object|true|none|none|
|ModelArn|object|false|none|none|
|DesiredInferenceUnits|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|Tags|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|FlywheelArn|object|false|none|none|

<h2 id="tocS_CreateEntityRecognizerResponse">CreateEntityRecognizerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateentityrecognizerresponse"></a>
<a id="schema_CreateEntityRecognizerResponse"></a>
<a id="tocScreateentityrecognizerresponse"></a>
<a id="tocscreateentityrecognizerresponse"></a>

```json
{
  "EntityRecognizerArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityRecognizerArn|object|false|none|none|

<h2 id="tocS_CreateEntityRecognizerRequest">CreateEntityRecognizerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateentityrecognizerrequest"></a>
<a id="schema_CreateEntityRecognizerRequest"></a>
<a id="tocScreateentityrecognizerrequest"></a>
<a id="tocscreateentityrecognizerrequest"></a>

```json
{
  "RecognizerName": {},
  "VersionName": {},
  "DataAccessRoleArn": {},
  "Tags": {},
  "InputDataConfig": {
    "DataFormat": {},
    "EntityTypes": {},
    "Documents": {
      "S3Uri": {},
      "TestS3Uri": {},
      "InputFormat": {}
    },
    "Annotations": {
      "S3Uri": {},
      "TestS3Uri": {}
    },
    "EntityList": {
      "S3Uri": {}
    },
    "AugmentedManifests": {}
  },
  "ClientRequestToken": {},
  "LanguageCode": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "ModelKmsKeyId": {},
  "ModelPolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecognizerName|object|true|none|none|
|VersionName|object|false|none|none|
|DataAccessRoleArn|object|true|none|none|
|Tags|object|false|none|none|
|InputDataConfig|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|LanguageCode|object|true|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|object|false|none|none|
|ModelKmsKeyId|object|false|none|none|
|ModelPolicy|object|false|none|none|

<h2 id="tocS_CreateFlywheelResponse">CreateFlywheelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateflywheelresponse"></a>
<a id="schema_CreateFlywheelResponse"></a>
<a id="tocScreateflywheelresponse"></a>
<a id="tocscreateflywheelresponse"></a>

```json
{
  "FlywheelArn": {},
  "ActiveModelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelArn|object|false|none|none|
|ActiveModelArn|object|false|none|none|

<h2 id="tocS_CreateFlywheelRequest">CreateFlywheelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateflywheelrequest"></a>
<a id="schema_CreateFlywheelRequest"></a>
<a id="tocScreateflywheelrequest"></a>
<a id="tocscreateflywheelrequest"></a>

```json
{
  "FlywheelName": {},
  "ActiveModelArn": {},
  "DataAccessRoleArn": {},
  "TaskConfig": {
    "LanguageCode": {},
    "DocumentClassificationConfig": {
      "Mode": {},
      "Labels": {}
    },
    "EntityRecognitionConfig": {
      "EntityTypes": {}
    }
  },
  "ModelType": {},
  "DataLakeS3Uri": {},
  "DataSecurityConfig": {
    "ModelKmsKeyId": {},
    "VolumeKmsKeyId": {},
    "DataLakeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    }
  },
  "ClientRequestToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelName|object|true|none|none|
|ActiveModelArn|object|false|none|none|
|DataAccessRoleArn|object|true|none|none|
|TaskConfig|object|false|none|none|
|ModelType|object|false|none|none|
|DataLakeS3Uri|object|true|none|none|
|DataSecurityConfig|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DeleteDocumentClassifierResponse">DeleteDocumentClassifierResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedocumentclassifierresponse"></a>
<a id="schema_DeleteDocumentClassifierResponse"></a>
<a id="tocSdeletedocumentclassifierresponse"></a>
<a id="tocsdeletedocumentclassifierresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteDocumentClassifierRequest">DeleteDocumentClassifierRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedocumentclassifierrequest"></a>
<a id="schema_DeleteDocumentClassifierRequest"></a>
<a id="tocSdeletedocumentclassifierrequest"></a>
<a id="tocsdeletedocumentclassifierrequest"></a>

```json
{
  "DocumentClassifierArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentClassifierArn|object|true|none|none|

<h2 id="tocS_DeleteEndpointResponse">DeleteEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteendpointresponse"></a>
<a id="schema_DeleteEndpointResponse"></a>
<a id="tocSdeleteendpointresponse"></a>
<a id="tocsdeleteendpointresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteEndpointRequest">DeleteEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteendpointrequest"></a>
<a id="schema_DeleteEndpointRequest"></a>
<a id="tocSdeleteendpointrequest"></a>
<a id="tocsdeleteendpointrequest"></a>

```json
{
  "EndpointArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|true|none|none|

<h2 id="tocS_DeleteEntityRecognizerResponse">DeleteEntityRecognizerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteentityrecognizerresponse"></a>
<a id="schema_DeleteEntityRecognizerResponse"></a>
<a id="tocSdeleteentityrecognizerresponse"></a>
<a id="tocsdeleteentityrecognizerresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteEntityRecognizerRequest">DeleteEntityRecognizerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteentityrecognizerrequest"></a>
<a id="schema_DeleteEntityRecognizerRequest"></a>
<a id="tocSdeleteentityrecognizerrequest"></a>
<a id="tocsdeleteentityrecognizerrequest"></a>

```json
{
  "EntityRecognizerArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityRecognizerArn|object|true|none|none|

<h2 id="tocS_DeleteFlywheelResponse">DeleteFlywheelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteflywheelresponse"></a>
<a id="schema_DeleteFlywheelResponse"></a>
<a id="tocSdeleteflywheelresponse"></a>
<a id="tocsdeleteflywheelresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteFlywheelRequest">DeleteFlywheelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteflywheelrequest"></a>
<a id="schema_DeleteFlywheelRequest"></a>
<a id="tocSdeleteflywheelrequest"></a>
<a id="tocsdeleteflywheelrequest"></a>

```json
{
  "FlywheelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelArn|object|true|none|none|

<h2 id="tocS_DeleteResourcePolicyResponse">DeleteResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyresponse"></a>
<a id="schema_DeleteResourcePolicyResponse"></a>
<a id="tocSdeleteresourcepolicyresponse"></a>
<a id="tocsdeleteresourcepolicyresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteResourcePolicyRequest">DeleteResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyrequest"></a>
<a id="schema_DeleteResourcePolicyRequest"></a>
<a id="tocSdeleteresourcepolicyrequest"></a>
<a id="tocsdeleteresourcepolicyrequest"></a>

```json
{
  "ResourceArn": {},
  "PolicyRevisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|PolicyRevisionId|object|false|none|none|

<h2 id="tocS_DescribeDatasetResponse">DescribeDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetresponse"></a>
<a id="schema_DescribeDatasetResponse"></a>
<a id="tocSdescribedatasetresponse"></a>
<a id="tocsdescribedatasetresponse"></a>

```json
{
  "DatasetProperties": {
    "DatasetArn": {},
    "DatasetName": {},
    "DatasetType": {},
    "DatasetS3Uri": {},
    "Description": {},
    "Status": {},
    "Message": {},
    "NumberOfDocuments": {},
    "CreationTime": {},
    "EndTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetProperties|object|false|none|none|

<h2 id="tocS_DescribeDatasetRequest">DescribeDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetrequest"></a>
<a id="schema_DescribeDatasetRequest"></a>
<a id="tocSdescribedatasetrequest"></a>
<a id="tocsdescribedatasetrequest"></a>

```json
{
  "DatasetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetArn|object|true|none|none|

<h2 id="tocS_DescribeDocumentClassificationJobResponse">DescribeDocumentClassificationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedocumentclassificationjobresponse"></a>
<a id="schema_DescribeDocumentClassificationJobResponse"></a>
<a id="tocSdescribedocumentclassificationjobresponse"></a>
<a id="tocsdescribedocumentclassificationjobresponse"></a>

```json
{
  "DocumentClassificationJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "DocumentClassifierArn": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "FlywheelArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentClassificationJobProperties|object|false|none|none|

<h2 id="tocS_DescribeDocumentClassificationJobRequest">DescribeDocumentClassificationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedocumentclassificationjobrequest"></a>
<a id="schema_DescribeDocumentClassificationJobRequest"></a>
<a id="tocSdescribedocumentclassificationjobrequest"></a>
<a id="tocsdescribedocumentclassificationjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_JobNotFoundException">JobNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemajobnotfoundexception"></a>
<a id="schema_JobNotFoundException"></a>
<a id="tocSjobnotfoundexception"></a>
<a id="tocsjobnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeDocumentClassifierResponse">DescribeDocumentClassifierResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedocumentclassifierresponse"></a>
<a id="schema_DescribeDocumentClassifierResponse"></a>
<a id="tocSdescribedocumentclassifierresponse"></a>
<a id="tocsdescribedocumentclassifierresponse"></a>

```json
{
  "DocumentClassifierProperties": {
    "DocumentClassifierArn": {},
    "LanguageCode": {},
    "Status": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "TrainingStartTime": {},
    "TrainingEndTime": {},
    "InputDataConfig": {
      "DataFormat": {},
      "S3Uri": {},
      "TestS3Uri": {},
      "LabelDelimiter": {},
      "AugmentedManifests": {},
      "DocumentType": {},
      "Documents": {
        "S3Uri": {},
        "TestS3Uri": {}
      },
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {},
      "FlywheelStatsS3Prefix": {}
    },
    "ClassifierMetadata": {
      "NumberOfLabels": {},
      "NumberOfTrainedDocuments": {},
      "NumberOfTestDocuments": {},
      "EvaluationMetrics": {
        "Accuracy": {},
        "Precision": {},
        "Recall": {},
        "F1Score": {},
        "MicroPrecision": {},
        "MicroRecall": {},
        "MicroF1Score": {},
        "HammingLoss": {}
      }
    },
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "Mode": {},
    "ModelKmsKeyId": {},
    "VersionName": {},
    "SourceModelArn": {},
    "FlywheelArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentClassifierProperties|object|false|none|none|

<h2 id="tocS_DescribeDocumentClassifierRequest">DescribeDocumentClassifierRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedocumentclassifierrequest"></a>
<a id="schema_DescribeDocumentClassifierRequest"></a>
<a id="tocSdescribedocumentclassifierrequest"></a>
<a id="tocsdescribedocumentclassifierrequest"></a>

```json
{
  "DocumentClassifierArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentClassifierArn|object|true|none|none|

<h2 id="tocS_DescribeDominantLanguageDetectionJobResponse">DescribeDominantLanguageDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedominantlanguagedetectionjobresponse"></a>
<a id="schema_DescribeDominantLanguageDetectionJobResponse"></a>
<a id="tocSdescribedominantlanguagedetectionjobresponse"></a>
<a id="tocsdescribedominantlanguagedetectionjobresponse"></a>

```json
{
  "DominantLanguageDetectionJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DominantLanguageDetectionJobProperties|object|false|none|none|

<h2 id="tocS_DescribeDominantLanguageDetectionJobRequest">DescribeDominantLanguageDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedominantlanguagedetectionjobrequest"></a>
<a id="schema_DescribeDominantLanguageDetectionJobRequest"></a>
<a id="tocSdescribedominantlanguagedetectionjobrequest"></a>
<a id="tocsdescribedominantlanguagedetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_DescribeEndpointResponse">DescribeEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointresponse"></a>
<a id="schema_DescribeEndpointResponse"></a>
<a id="tocSdescribeendpointresponse"></a>
<a id="tocsdescribeendpointresponse"></a>

```json
{
  "EndpointProperties": {
    "EndpointArn": {},
    "Status": {},
    "Message": {},
    "ModelArn": {},
    "DesiredModelArn": {},
    "DesiredInferenceUnits": {},
    "CurrentInferenceUnits": {},
    "CreationTime": {},
    "LastModifiedTime": {},
    "DataAccessRoleArn": {},
    "DesiredDataAccessRoleArn": {},
    "FlywheelArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointProperties|object|false|none|none|

<h2 id="tocS_DescribeEndpointRequest">DescribeEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointrequest"></a>
<a id="schema_DescribeEndpointRequest"></a>
<a id="tocSdescribeendpointrequest"></a>
<a id="tocsdescribeendpointrequest"></a>

```json
{
  "EndpointArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|true|none|none|

<h2 id="tocS_DescribeEntitiesDetectionJobResponse">DescribeEntitiesDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeentitiesdetectionjobresponse"></a>
<a id="schema_DescribeEntitiesDetectionJobResponse"></a>
<a id="tocSdescribeentitiesdetectionjobresponse"></a>
<a id="tocsdescribeentitiesdetectionjobresponse"></a>

```json
{
  "EntitiesDetectionJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "EntityRecognizerArn": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "FlywheelArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntitiesDetectionJobProperties|object|false|none|none|

<h2 id="tocS_DescribeEntitiesDetectionJobRequest">DescribeEntitiesDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeentitiesdetectionjobrequest"></a>
<a id="schema_DescribeEntitiesDetectionJobRequest"></a>
<a id="tocSdescribeentitiesdetectionjobrequest"></a>
<a id="tocsdescribeentitiesdetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_DescribeEntityRecognizerResponse">DescribeEntityRecognizerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeentityrecognizerresponse"></a>
<a id="schema_DescribeEntityRecognizerResponse"></a>
<a id="tocSdescribeentityrecognizerresponse"></a>
<a id="tocsdescribeentityrecognizerresponse"></a>

```json
{
  "EntityRecognizerProperties": {
    "EntityRecognizerArn": {},
    "LanguageCode": {},
    "Status": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "TrainingStartTime": {},
    "TrainingEndTime": {},
    "InputDataConfig": {
      "DataFormat": {},
      "EntityTypes": {},
      "Documents": {
        "S3Uri": {},
        "TestS3Uri": {},
        "InputFormat": {}
      },
      "Annotations": {
        "S3Uri": {},
        "TestS3Uri": {}
      },
      "EntityList": {
        "S3Uri": {}
      },
      "AugmentedManifests": {}
    },
    "RecognizerMetadata": {
      "NumberOfTrainedDocuments": {},
      "NumberOfTestDocuments": {},
      "EvaluationMetrics": {
        "Precision": {},
        "Recall": {},
        "F1Score": {}
      },
      "EntityTypes": {}
    },
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "ModelKmsKeyId": {},
    "VersionName": {},
    "SourceModelArn": {},
    "FlywheelArn": {},
    "OutputDataConfig": {
      "FlywheelStatsS3Prefix": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityRecognizerProperties|object|false|none|none|

<h2 id="tocS_DescribeEntityRecognizerRequest">DescribeEntityRecognizerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeentityrecognizerrequest"></a>
<a id="schema_DescribeEntityRecognizerRequest"></a>
<a id="tocSdescribeentityrecognizerrequest"></a>
<a id="tocsdescribeentityrecognizerrequest"></a>

```json
{
  "EntityRecognizerArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityRecognizerArn|object|true|none|none|

<h2 id="tocS_DescribeEventsDetectionJobResponse">DescribeEventsDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsdetectionjobresponse"></a>
<a id="schema_DescribeEventsDetectionJobResponse"></a>
<a id="tocSdescribeeventsdetectionjobresponse"></a>
<a id="tocsdescribeeventsdetectionjobresponse"></a>

```json
{
  "EventsDetectionJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "TargetEventTypes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventsDetectionJobProperties|object|false|none|none|

<h2 id="tocS_DescribeEventsDetectionJobRequest">DescribeEventsDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsdetectionjobrequest"></a>
<a id="schema_DescribeEventsDetectionJobRequest"></a>
<a id="tocSdescribeeventsdetectionjobrequest"></a>
<a id="tocsdescribeeventsdetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_DescribeFlywheelResponse">DescribeFlywheelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeflywheelresponse"></a>
<a id="schema_DescribeFlywheelResponse"></a>
<a id="tocSdescribeflywheelresponse"></a>
<a id="tocsdescribeflywheelresponse"></a>

```json
{
  "FlywheelProperties": {
    "FlywheelArn": {},
    "ActiveModelArn": {},
    "DataAccessRoleArn": {},
    "TaskConfig": {
      "LanguageCode": {},
      "DocumentClassificationConfig": {
        "Mode": {},
        "Labels": {}
      },
      "EntityRecognitionConfig": {
        "EntityTypes": {}
      }
    },
    "DataLakeS3Uri": {},
    "DataSecurityConfig": {
      "ModelKmsKeyId": {},
      "VolumeKmsKeyId": {},
      "DataLakeKmsKeyId": {},
      "VpcConfig": {
        "SecurityGroupIds": {},
        "Subnets": {}
      }
    },
    "Status": {},
    "ModelType": {},
    "Message": {},
    "CreationTime": {},
    "LastModifiedTime": {},
    "LatestFlywheelIteration": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelProperties|object|false|none|none|

<h2 id="tocS_DescribeFlywheelRequest">DescribeFlywheelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeflywheelrequest"></a>
<a id="schema_DescribeFlywheelRequest"></a>
<a id="tocSdescribeflywheelrequest"></a>
<a id="tocsdescribeflywheelrequest"></a>

```json
{
  "FlywheelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelArn|object|true|none|none|

<h2 id="tocS_DescribeFlywheelIterationResponse">DescribeFlywheelIterationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeflywheeliterationresponse"></a>
<a id="schema_DescribeFlywheelIterationResponse"></a>
<a id="tocSdescribeflywheeliterationresponse"></a>
<a id="tocsdescribeflywheeliterationresponse"></a>

```json
{
  "FlywheelIterationProperties": {
    "FlywheelArn": {},
    "FlywheelIterationId": {},
    "CreationTime": {},
    "EndTime": {},
    "Status": {},
    "Message": {},
    "EvaluatedModelArn": {},
    "EvaluatedModelMetrics": {
      "AverageF1Score": {},
      "AveragePrecision": {},
      "AverageRecall": {},
      "AverageAccuracy": {}
    },
    "TrainedModelArn": {},
    "TrainedModelMetrics": {
      "AverageF1Score": {},
      "AveragePrecision": {},
      "AverageRecall": {},
      "AverageAccuracy": {}
    },
    "EvaluationManifestS3Prefix": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelIterationProperties|object|false|none|none|

<h2 id="tocS_DescribeFlywheelIterationRequest">DescribeFlywheelIterationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeflywheeliterationrequest"></a>
<a id="schema_DescribeFlywheelIterationRequest"></a>
<a id="tocSdescribeflywheeliterationrequest"></a>
<a id="tocsdescribeflywheeliterationrequest"></a>

```json
{
  "FlywheelArn": {},
  "FlywheelIterationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelArn|object|true|none|none|
|FlywheelIterationId|object|true|none|none|

<h2 id="tocS_DescribeKeyPhrasesDetectionJobResponse">DescribeKeyPhrasesDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribekeyphrasesdetectionjobresponse"></a>
<a id="schema_DescribeKeyPhrasesDetectionJobResponse"></a>
<a id="tocSdescribekeyphrasesdetectionjobresponse"></a>
<a id="tocsdescribekeyphrasesdetectionjobresponse"></a>

```json
{
  "KeyPhrasesDetectionJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyPhrasesDetectionJobProperties|object|false|none|none|

<h2 id="tocS_DescribeKeyPhrasesDetectionJobRequest">DescribeKeyPhrasesDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribekeyphrasesdetectionjobrequest"></a>
<a id="schema_DescribeKeyPhrasesDetectionJobRequest"></a>
<a id="tocSdescribekeyphrasesdetectionjobrequest"></a>
<a id="tocsdescribekeyphrasesdetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_DescribePiiEntitiesDetectionJobResponse">DescribePiiEntitiesDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribepiientitiesdetectionjobresponse"></a>
<a id="schema_DescribePiiEntitiesDetectionJobResponse"></a>
<a id="tocSdescribepiientitiesdetectionjobresponse"></a>
<a id="tocsdescribepiientitiesdetectionjobresponse"></a>

```json
{
  "PiiEntitiesDetectionJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "RedactionConfig": {
      "PiiEntityTypes": {},
      "MaskMode": {},
      "MaskCharacter": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "Mode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PiiEntitiesDetectionJobProperties|[PiiEntitiesDetectionJobProperties](#schemapiientitiesdetectionjobproperties)|false|none|Provides information about a PII entities detection job.|

<h2 id="tocS_DescribePiiEntitiesDetectionJobRequest">DescribePiiEntitiesDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepiientitiesdetectionjobrequest"></a>
<a id="schema_DescribePiiEntitiesDetectionJobRequest"></a>
<a id="tocSdescribepiientitiesdetectionjobrequest"></a>
<a id="tocsdescribepiientitiesdetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_DescribeResourcePolicyResponse">DescribeResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourcepolicyresponse"></a>
<a id="schema_DescribeResourcePolicyResponse"></a>
<a id="tocSdescriberesourcepolicyresponse"></a>
<a id="tocsdescriberesourcepolicyresponse"></a>

```json
{
  "ResourcePolicy": {},
  "CreationTime": {},
  "LastModifiedTime": {},
  "PolicyRevisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourcePolicy|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|PolicyRevisionId|object|false|none|none|

<h2 id="tocS_DescribeResourcePolicyRequest">DescribeResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberesourcepolicyrequest"></a>
<a id="schema_DescribeResourcePolicyRequest"></a>
<a id="tocSdescriberesourcepolicyrequest"></a>
<a id="tocsdescriberesourcepolicyrequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_DescribeSentimentDetectionJobResponse">DescribeSentimentDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesentimentdetectionjobresponse"></a>
<a id="schema_DescribeSentimentDetectionJobResponse"></a>
<a id="tocSdescribesentimentdetectionjobresponse"></a>
<a id="tocsdescribesentimentdetectionjobresponse"></a>

```json
{
  "SentimentDetectionJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SentimentDetectionJobProperties|object|false|none|none|

<h2 id="tocS_DescribeSentimentDetectionJobRequest">DescribeSentimentDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesentimentdetectionjobrequest"></a>
<a id="schema_DescribeSentimentDetectionJobRequest"></a>
<a id="tocSdescribesentimentdetectionjobrequest"></a>
<a id="tocsdescribesentimentdetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_DescribeTargetedSentimentDetectionJobResponse">DescribeTargetedSentimentDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetargetedsentimentdetectionjobresponse"></a>
<a id="schema_DescribeTargetedSentimentDetectionJobResponse"></a>
<a id="tocSdescribetargetedsentimentdetectionjobresponse"></a>
<a id="tocsdescribetargetedsentimentdetectionjobresponse"></a>

```json
{
  "TargetedSentimentDetectionJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetedSentimentDetectionJobProperties|object|false|none|none|

<h2 id="tocS_DescribeTargetedSentimentDetectionJobRequest">DescribeTargetedSentimentDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetargetedsentimentdetectionjobrequest"></a>
<a id="schema_DescribeTargetedSentimentDetectionJobRequest"></a>
<a id="tocSdescribetargetedsentimentdetectionjobrequest"></a>
<a id="tocsdescribetargetedsentimentdetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_DescribeTopicsDetectionJobResponse">DescribeTopicsDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetopicsdetectionjobresponse"></a>
<a id="schema_DescribeTopicsDetectionJobResponse"></a>
<a id="tocSdescribetopicsdetectionjobresponse"></a>
<a id="tocsdescribetopicsdetectionjobresponse"></a>

```json
{
  "TopicsDetectionJobProperties": {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "NumberOfTopics": {},
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicsDetectionJobProperties|object|false|none|none|

<h2 id="tocS_DescribeTopicsDetectionJobRequest">DescribeTopicsDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetopicsdetectionjobrequest"></a>
<a id="schema_DescribeTopicsDetectionJobRequest"></a>
<a id="tocSdescribetopicsdetectionjobrequest"></a>
<a id="tocsdescribetopicsdetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_DetectDominantLanguageResponse">DetectDominantLanguageResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetectdominantlanguageresponse"></a>
<a id="schema_DetectDominantLanguageResponse"></a>
<a id="tocSdetectdominantlanguageresponse"></a>
<a id="tocsdetectdominantlanguageresponse"></a>

```json
{
  "Languages": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Languages|object|false|none|none|

<h2 id="tocS_DetectDominantLanguageRequest">DetectDominantLanguageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetectdominantlanguagerequest"></a>
<a id="schema_DetectDominantLanguageRequest"></a>
<a id="tocSdetectdominantlanguagerequest"></a>
<a id="tocsdetectdominantlanguagerequest"></a>

```json
{
  "Text": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|true|none|none|

<h2 id="tocS_DetectEntitiesResponse">DetectEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetectentitiesresponse"></a>
<a id="schema_DetectEntitiesResponse"></a>
<a id="tocSdetectentitiesresponse"></a>
<a id="tocsdetectentitiesresponse"></a>

```json
{
  "Entities": {},
  "DocumentMetadata": {
    "Pages": {},
    "ExtractedCharacters": {}
  },
  "DocumentType": {},
  "Blocks": {},
  "Errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|object|false|none|none|
|DocumentMetadata|object|false|none|none|
|DocumentType|object|false|none|none|
|Blocks|object|false|none|none|
|Errors|object|false|none|none|

<h2 id="tocS_DetectEntitiesRequest">DetectEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetectentitiesrequest"></a>
<a id="schema_DetectEntitiesRequest"></a>
<a id="tocSdetectentitiesrequest"></a>
<a id="tocsdetectentitiesrequest"></a>

```json
{
  "Text": {},
  "LanguageCode": {},
  "EndpointArn": {},
  "Bytes": {},
  "DocumentReaderConfig": {
    "DocumentReadAction": {},
    "DocumentReadMode": {},
    "FeatureTypes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|false|none|none|
|LanguageCode|object|false|none|none|
|EndpointArn|object|false|none|none|
|Bytes|object|false|none|none|
|DocumentReaderConfig|object|false|none|none|

<h2 id="tocS_DetectKeyPhrasesResponse">DetectKeyPhrasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetectkeyphrasesresponse"></a>
<a id="schema_DetectKeyPhrasesResponse"></a>
<a id="tocSdetectkeyphrasesresponse"></a>
<a id="tocsdetectkeyphrasesresponse"></a>

```json
{
  "KeyPhrases": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyPhrases|object|false|none|none|

<h2 id="tocS_DetectKeyPhrasesRequest">DetectKeyPhrasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetectkeyphrasesrequest"></a>
<a id="schema_DetectKeyPhrasesRequest"></a>
<a id="tocSdetectkeyphrasesrequest"></a>
<a id="tocsdetectkeyphrasesrequest"></a>

```json
{
  "Text": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|true|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_DetectPiiEntitiesResponse">DetectPiiEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetectpiientitiesresponse"></a>
<a id="schema_DetectPiiEntitiesResponse"></a>
<a id="tocSdetectpiientitiesresponse"></a>
<a id="tocsdetectpiientitiesresponse"></a>

```json
{
  "Entities": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|object|false|none|none|

<h2 id="tocS_DetectPiiEntitiesRequest">DetectPiiEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetectpiientitiesrequest"></a>
<a id="schema_DetectPiiEntitiesRequest"></a>
<a id="tocSdetectpiientitiesrequest"></a>
<a id="tocsdetectpiientitiesrequest"></a>

```json
{
  "Text": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|true|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_DetectSentimentResponse">DetectSentimentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetectsentimentresponse"></a>
<a id="schema_DetectSentimentResponse"></a>
<a id="tocSdetectsentimentresponse"></a>
<a id="tocsdetectsentimentresponse"></a>

```json
{
  "Sentiment": {},
  "SentimentScore": {
    "Positive": {},
    "Negative": {},
    "Neutral": {},
    "Mixed": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sentiment|object|false|none|none|
|SentimentScore|object|false|none|none|

<h2 id="tocS_DetectSentimentRequest">DetectSentimentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetectsentimentrequest"></a>
<a id="schema_DetectSentimentRequest"></a>
<a id="tocSdetectsentimentrequest"></a>
<a id="tocsdetectsentimentrequest"></a>

```json
{
  "Text": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|true|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_DetectSyntaxResponse">DetectSyntaxResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetectsyntaxresponse"></a>
<a id="schema_DetectSyntaxResponse"></a>
<a id="tocSdetectsyntaxresponse"></a>
<a id="tocsdetectsyntaxresponse"></a>

```json
{
  "SyntaxTokens": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SyntaxTokens|object|false|none|none|

<h2 id="tocS_DetectSyntaxRequest">DetectSyntaxRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetectsyntaxrequest"></a>
<a id="schema_DetectSyntaxRequest"></a>
<a id="tocSdetectsyntaxrequest"></a>
<a id="tocsdetectsyntaxrequest"></a>

```json
{
  "Text": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|true|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_DetectTargetedSentimentResponse">DetectTargetedSentimentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetecttargetedsentimentresponse"></a>
<a id="schema_DetectTargetedSentimentResponse"></a>
<a id="tocSdetecttargetedsentimentresponse"></a>
<a id="tocsdetecttargetedsentimentresponse"></a>

```json
{
  "Entities": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|object|false|none|none|

<h2 id="tocS_DetectTargetedSentimentRequest">DetectTargetedSentimentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetecttargetedsentimentrequest"></a>
<a id="schema_DetectTargetedSentimentRequest"></a>
<a id="tocSdetecttargetedsentimentrequest"></a>
<a id="tocsdetecttargetedsentimentrequest"></a>

```json
{
  "Text": {},
  "LanguageCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|true|none|none|
|LanguageCode|object|true|none|none|

<h2 id="tocS_ImportModelResponse">ImportModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportmodelresponse"></a>
<a id="schema_ImportModelResponse"></a>
<a id="tocSimportmodelresponse"></a>
<a id="tocsimportmodelresponse"></a>

```json
{
  "ModelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelArn|object|false|none|none|

<h2 id="tocS_ImportModelRequest">ImportModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportmodelrequest"></a>
<a id="schema_ImportModelRequest"></a>
<a id="tocSimportmodelrequest"></a>
<a id="tocsimportmodelrequest"></a>

```json
{
  "SourceModelArn": {},
  "ModelName": {},
  "VersionName": {},
  "ModelKmsKeyId": {},
  "DataAccessRoleArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceModelArn|object|true|none|none|
|ModelName|object|false|none|none|
|VersionName|object|false|none|none|
|ModelKmsKeyId|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ListDatasetsResponse">ListDatasetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsresponse"></a>
<a id="schema_ListDatasetsResponse"></a>
<a id="tocSlistdatasetsresponse"></a>
<a id="tocslistdatasetsresponse"></a>

```json
{
  "DatasetPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDatasetsRequest">ListDatasetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsrequest"></a>
<a id="schema_ListDatasetsRequest"></a>
<a id="tocSlistdatasetsrequest"></a>
<a id="tocslistdatasetsrequest"></a>

```json
{
  "FlywheelArn": {},
  "Filter": {
    "Status": {},
    "DatasetType": {},
    "CreationTimeAfter": {},
    "CreationTimeBefore": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelArn|object|false|none|none|
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

<h2 id="tocS_ListDocumentClassificationJobsResponse">ListDocumentClassificationJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdocumentclassificationjobsresponse"></a>
<a id="schema_ListDocumentClassificationJobsResponse"></a>
<a id="tocSlistdocumentclassificationjobsresponse"></a>
<a id="tocslistdocumentclassificationjobsresponse"></a>

```json
{
  "DocumentClassificationJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentClassificationJobPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDocumentClassificationJobsRequest">ListDocumentClassificationJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdocumentclassificationjobsrequest"></a>
<a id="schema_ListDocumentClassificationJobsRequest"></a>
<a id="tocSlistdocumentclassificationjobsrequest"></a>
<a id="tocslistdocumentclassificationjobsrequest"></a>

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

<h2 id="tocS_ListDocumentClassifierSummariesResponse">ListDocumentClassifierSummariesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdocumentclassifiersummariesresponse"></a>
<a id="schema_ListDocumentClassifierSummariesResponse"></a>
<a id="tocSlistdocumentclassifiersummariesresponse"></a>
<a id="tocslistdocumentclassifiersummariesresponse"></a>

```json
{
  "DocumentClassifierSummariesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentClassifierSummariesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDocumentClassifierSummariesRequest">ListDocumentClassifierSummariesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdocumentclassifiersummariesrequest"></a>
<a id="schema_ListDocumentClassifierSummariesRequest"></a>
<a id="tocSlistdocumentclassifiersummariesrequest"></a>
<a id="tocslistdocumentclassifiersummariesrequest"></a>

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

<h2 id="tocS_ListDocumentClassifiersResponse">ListDocumentClassifiersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdocumentclassifiersresponse"></a>
<a id="schema_ListDocumentClassifiersResponse"></a>
<a id="tocSlistdocumentclassifiersresponse"></a>
<a id="tocslistdocumentclassifiersresponse"></a>

```json
{
  "DocumentClassifierPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentClassifierPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDocumentClassifiersRequest">ListDocumentClassifiersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdocumentclassifiersrequest"></a>
<a id="schema_ListDocumentClassifiersRequest"></a>
<a id="tocSlistdocumentclassifiersrequest"></a>
<a id="tocslistdocumentclassifiersrequest"></a>

```json
{
  "Filter": {
    "Status": {},
    "DocumentClassifierName": {},
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

<h2 id="tocS_ListDominantLanguageDetectionJobsResponse">ListDominantLanguageDetectionJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdominantlanguagedetectionjobsresponse"></a>
<a id="schema_ListDominantLanguageDetectionJobsResponse"></a>
<a id="tocSlistdominantlanguagedetectionjobsresponse"></a>
<a id="tocslistdominantlanguagedetectionjobsresponse"></a>

```json
{
  "DominantLanguageDetectionJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DominantLanguageDetectionJobPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDominantLanguageDetectionJobsRequest">ListDominantLanguageDetectionJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdominantlanguagedetectionjobsrequest"></a>
<a id="schema_ListDominantLanguageDetectionJobsRequest"></a>
<a id="tocSlistdominantlanguagedetectionjobsrequest"></a>
<a id="tocslistdominantlanguagedetectionjobsrequest"></a>

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

<h2 id="tocS_ListEndpointsResponse">ListEndpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistendpointsresponse"></a>
<a id="schema_ListEndpointsResponse"></a>
<a id="tocSlistendpointsresponse"></a>
<a id="tocslistendpointsresponse"></a>

```json
{
  "EndpointPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEndpointsRequest">ListEndpointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistendpointsrequest"></a>
<a id="schema_ListEndpointsRequest"></a>
<a id="tocSlistendpointsrequest"></a>
<a id="tocslistendpointsrequest"></a>

```json
{
  "Filter": {
    "ModelArn": {},
    "Status": {},
    "CreationTimeBefore": {},
    "CreationTimeAfter": {}
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

<h2 id="tocS_ListEntitiesDetectionJobsResponse">ListEntitiesDetectionJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistentitiesdetectionjobsresponse"></a>
<a id="schema_ListEntitiesDetectionJobsResponse"></a>
<a id="tocSlistentitiesdetectionjobsresponse"></a>
<a id="tocslistentitiesdetectionjobsresponse"></a>

```json
{
  "EntitiesDetectionJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntitiesDetectionJobPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEntitiesDetectionJobsRequest">ListEntitiesDetectionJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistentitiesdetectionjobsrequest"></a>
<a id="schema_ListEntitiesDetectionJobsRequest"></a>
<a id="tocSlistentitiesdetectionjobsrequest"></a>
<a id="tocslistentitiesdetectionjobsrequest"></a>

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

<h2 id="tocS_ListEntityRecognizerSummariesResponse">ListEntityRecognizerSummariesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistentityrecognizersummariesresponse"></a>
<a id="schema_ListEntityRecognizerSummariesResponse"></a>
<a id="tocSlistentityrecognizersummariesresponse"></a>
<a id="tocslistentityrecognizersummariesresponse"></a>

```json
{
  "EntityRecognizerSummariesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityRecognizerSummariesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEntityRecognizerSummariesRequest">ListEntityRecognizerSummariesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistentityrecognizersummariesrequest"></a>
<a id="schema_ListEntityRecognizerSummariesRequest"></a>
<a id="tocSlistentityrecognizersummariesrequest"></a>
<a id="tocslistentityrecognizersummariesrequest"></a>

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

<h2 id="tocS_ListEntityRecognizersResponse">ListEntityRecognizersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistentityrecognizersresponse"></a>
<a id="schema_ListEntityRecognizersResponse"></a>
<a id="tocSlistentityrecognizersresponse"></a>
<a id="tocslistentityrecognizersresponse"></a>

```json
{
  "EntityRecognizerPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityRecognizerPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEntityRecognizersRequest">ListEntityRecognizersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistentityrecognizersrequest"></a>
<a id="schema_ListEntityRecognizersRequest"></a>
<a id="tocSlistentityrecognizersrequest"></a>
<a id="tocslistentityrecognizersrequest"></a>

```json
{
  "Filter": {
    "Status": {},
    "RecognizerName": {},
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

<h2 id="tocS_ListEventsDetectionJobsResponse">ListEventsDetectionJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteventsdetectionjobsresponse"></a>
<a id="schema_ListEventsDetectionJobsResponse"></a>
<a id="tocSlisteventsdetectionjobsresponse"></a>
<a id="tocslisteventsdetectionjobsresponse"></a>

```json
{
  "EventsDetectionJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventsDetectionJobPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEventsDetectionJobsRequest">ListEventsDetectionJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisteventsdetectionjobsrequest"></a>
<a id="schema_ListEventsDetectionJobsRequest"></a>
<a id="tocSlisteventsdetectionjobsrequest"></a>
<a id="tocslisteventsdetectionjobsrequest"></a>

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

<h2 id="tocS_ListFlywheelIterationHistoryResponse">ListFlywheelIterationHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistflywheeliterationhistoryresponse"></a>
<a id="schema_ListFlywheelIterationHistoryResponse"></a>
<a id="tocSlistflywheeliterationhistoryresponse"></a>
<a id="tocslistflywheeliterationhistoryresponse"></a>

```json
{
  "FlywheelIterationPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelIterationPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFlywheelIterationHistoryRequest">ListFlywheelIterationHistoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistflywheeliterationhistoryrequest"></a>
<a id="schema_ListFlywheelIterationHistoryRequest"></a>
<a id="tocSlistflywheeliterationhistoryrequest"></a>
<a id="tocslistflywheeliterationhistoryrequest"></a>

```json
{
  "FlywheelArn": {},
  "Filter": {
    "CreationTimeAfter": {},
    "CreationTimeBefore": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelArn|object|true|none|none|
|Filter|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListFlywheelsResponse">ListFlywheelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistflywheelsresponse"></a>
<a id="schema_ListFlywheelsResponse"></a>
<a id="tocSlistflywheelsresponse"></a>
<a id="tocslistflywheelsresponse"></a>

```json
{
  "FlywheelSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFlywheelsRequest">ListFlywheelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistflywheelsrequest"></a>
<a id="schema_ListFlywheelsRequest"></a>
<a id="tocSlistflywheelsrequest"></a>
<a id="tocslistflywheelsrequest"></a>

```json
{
  "Filter": {
    "Status": {},
    "CreationTimeAfter": {},
    "CreationTimeBefore": {}
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

<h2 id="tocS_ListKeyPhrasesDetectionJobsResponse">ListKeyPhrasesDetectionJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistkeyphrasesdetectionjobsresponse"></a>
<a id="schema_ListKeyPhrasesDetectionJobsResponse"></a>
<a id="tocSlistkeyphrasesdetectionjobsresponse"></a>
<a id="tocslistkeyphrasesdetectionjobsresponse"></a>

```json
{
  "KeyPhrasesDetectionJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyPhrasesDetectionJobPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListKeyPhrasesDetectionJobsRequest">ListKeyPhrasesDetectionJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistkeyphrasesdetectionjobsrequest"></a>
<a id="schema_ListKeyPhrasesDetectionJobsRequest"></a>
<a id="tocSlistkeyphrasesdetectionjobsrequest"></a>
<a id="tocslistkeyphrasesdetectionjobsrequest"></a>

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

<h2 id="tocS_ListPiiEntitiesDetectionJobsResponse">ListPiiEntitiesDetectionJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpiientitiesdetectionjobsresponse"></a>
<a id="schema_ListPiiEntitiesDetectionJobsResponse"></a>
<a id="tocSlistpiientitiesdetectionjobsresponse"></a>
<a id="tocslistpiientitiesdetectionjobsresponse"></a>

```json
{
  "PiiEntitiesDetectionJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PiiEntitiesDetectionJobPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPiiEntitiesDetectionJobsRequest">ListPiiEntitiesDetectionJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpiientitiesdetectionjobsrequest"></a>
<a id="schema_ListPiiEntitiesDetectionJobsRequest"></a>
<a id="tocSlistpiientitiesdetectionjobsrequest"></a>
<a id="tocslistpiientitiesdetectionjobsrequest"></a>

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

<h2 id="tocS_ListSentimentDetectionJobsResponse">ListSentimentDetectionJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsentimentdetectionjobsresponse"></a>
<a id="schema_ListSentimentDetectionJobsResponse"></a>
<a id="tocSlistsentimentdetectionjobsresponse"></a>
<a id="tocslistsentimentdetectionjobsresponse"></a>

```json
{
  "SentimentDetectionJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SentimentDetectionJobPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSentimentDetectionJobsRequest">ListSentimentDetectionJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsentimentdetectionjobsrequest"></a>
<a id="schema_ListSentimentDetectionJobsRequest"></a>
<a id="tocSlistsentimentdetectionjobsrequest"></a>
<a id="tocslistsentimentdetectionjobsrequest"></a>

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

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "ResourceArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
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

<h2 id="tocS_ListTargetedSentimentDetectionJobsResponse">ListTargetedSentimentDetectionJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetedsentimentdetectionjobsresponse"></a>
<a id="schema_ListTargetedSentimentDetectionJobsResponse"></a>
<a id="tocSlisttargetedsentimentdetectionjobsresponse"></a>
<a id="tocslisttargetedsentimentdetectionjobsresponse"></a>

```json
{
  "TargetedSentimentDetectionJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetedSentimentDetectionJobPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTargetedSentimentDetectionJobsRequest">ListTargetedSentimentDetectionJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttargetedsentimentdetectionjobsrequest"></a>
<a id="schema_ListTargetedSentimentDetectionJobsRequest"></a>
<a id="tocSlisttargetedsentimentdetectionjobsrequest"></a>
<a id="tocslisttargetedsentimentdetectionjobsrequest"></a>

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

<h2 id="tocS_ListTopicsDetectionJobsResponse">ListTopicsDetectionJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttopicsdetectionjobsresponse"></a>
<a id="schema_ListTopicsDetectionJobsResponse"></a>
<a id="tocSlisttopicsdetectionjobsresponse"></a>
<a id="tocslisttopicsdetectionjobsresponse"></a>

```json
{
  "TopicsDetectionJobPropertiesList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicsDetectionJobPropertiesList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTopicsDetectionJobsRequest">ListTopicsDetectionJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttopicsdetectionjobsrequest"></a>
<a id="schema_ListTopicsDetectionJobsRequest"></a>
<a id="tocSlisttopicsdetectionjobsrequest"></a>
<a id="tocslisttopicsdetectionjobsrequest"></a>

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

<h2 id="tocS_PutResourcePolicyResponse">PutResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyresponse"></a>
<a id="schema_PutResourcePolicyResponse"></a>
<a id="tocSputresourcepolicyresponse"></a>
<a id="tocsputresourcepolicyresponse"></a>

```json
{
  "PolicyRevisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyRevisionId|object|false|none|none|

<h2 id="tocS_PutResourcePolicyRequest">PutResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyrequest"></a>
<a id="schema_PutResourcePolicyRequest"></a>
<a id="tocSputresourcepolicyrequest"></a>
<a id="tocsputresourcepolicyrequest"></a>

```json
{
  "ResourceArn": {},
  "ResourcePolicy": {},
  "PolicyRevisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|ResourcePolicy|object|true|none|none|
|PolicyRevisionId|object|false|none|none|

<h2 id="tocS_StartDocumentClassificationJobResponse">StartDocumentClassificationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartdocumentclassificationjobresponse"></a>
<a id="schema_StartDocumentClassificationJobResponse"></a>
<a id="tocSstartdocumentclassificationjobresponse"></a>
<a id="tocsstartdocumentclassificationjobresponse"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobStatus": {},
  "DocumentClassifierArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobStatus|object|false|none|none|
|DocumentClassifierArn|object|false|none|none|

<h2 id="tocS_StartDocumentClassificationJobRequest">StartDocumentClassificationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartdocumentclassificationjobrequest"></a>
<a id="schema_StartDocumentClassificationJobRequest"></a>
<a id="tocSstartdocumentclassificationjobrequest"></a>
<a id="tocsstartdocumentclassificationjobrequest"></a>

```json
{
  "JobName": {},
  "DocumentClassifierArn": {},
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "ClientRequestToken": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Tags": {},
  "FlywheelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|DocumentClassifierArn|object|false|none|none|
|InputDataConfig|object|true|none|none|
|OutputDataConfig|object|true|none|none|
|DataAccessRoleArn|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|object|false|none|none|
|Tags|object|false|none|none|
|FlywheelArn|object|false|none|none|

<h2 id="tocS_StartDominantLanguageDetectionJobResponse">StartDominantLanguageDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartdominantlanguagedetectionjobresponse"></a>
<a id="schema_StartDominantLanguageDetectionJobResponse"></a>
<a id="tocSstartdominantlanguagedetectionjobresponse"></a>
<a id="tocsstartdominantlanguagedetectionjobresponse"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobStatus|object|false|none|none|

<h2 id="tocS_StartDominantLanguageDetectionJobRequest">StartDominantLanguageDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartdominantlanguagedetectionjobrequest"></a>
<a id="schema_StartDominantLanguageDetectionJobRequest"></a>
<a id="tocSstartdominantlanguagedetectionjobrequest"></a>
<a id="tocsstartdominantlanguagedetectionjobrequest"></a>

```json
{
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "ClientRequestToken": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Tags": {}
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
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_StartEntitiesDetectionJobResponse">StartEntitiesDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartentitiesdetectionjobresponse"></a>
<a id="schema_StartEntitiesDetectionJobResponse"></a>
<a id="tocSstartentitiesdetectionjobresponse"></a>
<a id="tocsstartentitiesdetectionjobresponse"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobStatus": {},
  "EntityRecognizerArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobStatus|object|false|none|none|
|EntityRecognizerArn|object|false|none|none|

<h2 id="tocS_StartEntitiesDetectionJobRequest">StartEntitiesDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartentitiesdetectionjobrequest"></a>
<a id="schema_StartEntitiesDetectionJobRequest"></a>
<a id="tocSstartentitiesdetectionjobrequest"></a>
<a id="tocsstartentitiesdetectionjobrequest"></a>

```json
{
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "EntityRecognizerArn": {},
  "LanguageCode": {},
  "ClientRequestToken": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Tags": {},
  "FlywheelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputDataConfig|object|true|none|none|
|OutputDataConfig|object|true|none|none|
|DataAccessRoleArn|object|true|none|none|
|JobName|object|false|none|none|
|EntityRecognizerArn|object|false|none|none|
|LanguageCode|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|object|false|none|none|
|Tags|object|false|none|none|
|FlywheelArn|object|false|none|none|

<h2 id="tocS_StartEventsDetectionJobResponse">StartEventsDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastarteventsdetectionjobresponse"></a>
<a id="schema_StartEventsDetectionJobResponse"></a>
<a id="tocSstarteventsdetectionjobresponse"></a>
<a id="tocsstarteventsdetectionjobresponse"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobStatus|object|false|none|none|

<h2 id="tocS_StartEventsDetectionJobRequest">StartEventsDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastarteventsdetectionjobrequest"></a>
<a id="schema_StartEventsDetectionJobRequest"></a>
<a id="tocSstarteventsdetectionjobrequest"></a>
<a id="tocsstarteventsdetectionjobrequest"></a>

```json
{
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "LanguageCode": {},
  "ClientRequestToken": {},
  "TargetEventTypes": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputDataConfig|object|true|none|none|
|OutputDataConfig|object|true|none|none|
|DataAccessRoleArn|object|true|none|none|
|JobName|object|false|none|none|
|LanguageCode|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|TargetEventTypes|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_StartFlywheelIterationResponse">StartFlywheelIterationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartflywheeliterationresponse"></a>
<a id="schema_StartFlywheelIterationResponse"></a>
<a id="tocSstartflywheeliterationresponse"></a>
<a id="tocsstartflywheeliterationresponse"></a>

```json
{
  "FlywheelArn": {},
  "FlywheelIterationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelArn|object|false|none|none|
|FlywheelIterationId|object|false|none|none|

<h2 id="tocS_StartFlywheelIterationRequest">StartFlywheelIterationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartflywheeliterationrequest"></a>
<a id="schema_StartFlywheelIterationRequest"></a>
<a id="tocSstartflywheeliterationrequest"></a>
<a id="tocsstartflywheeliterationrequest"></a>

```json
{
  "FlywheelArn": {},
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelArn|object|true|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_StartKeyPhrasesDetectionJobResponse">StartKeyPhrasesDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartkeyphrasesdetectionjobresponse"></a>
<a id="schema_StartKeyPhrasesDetectionJobResponse"></a>
<a id="tocSstartkeyphrasesdetectionjobresponse"></a>
<a id="tocsstartkeyphrasesdetectionjobresponse"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobStatus|object|false|none|none|

<h2 id="tocS_StartKeyPhrasesDetectionJobRequest">StartKeyPhrasesDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartkeyphrasesdetectionjobrequest"></a>
<a id="schema_StartKeyPhrasesDetectionJobRequest"></a>
<a id="tocSstartkeyphrasesdetectionjobrequest"></a>
<a id="tocsstartkeyphrasesdetectionjobrequest"></a>

```json
{
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "LanguageCode": {},
  "ClientRequestToken": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputDataConfig|object|true|none|none|
|OutputDataConfig|object|true|none|none|
|DataAccessRoleArn|object|true|none|none|
|JobName|object|false|none|none|
|LanguageCode|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_StartPiiEntitiesDetectionJobResponse">StartPiiEntitiesDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartpiientitiesdetectionjobresponse"></a>
<a id="schema_StartPiiEntitiesDetectionJobResponse"></a>
<a id="tocSstartpiientitiesdetectionjobresponse"></a>
<a id="tocsstartpiientitiesdetectionjobresponse"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobStatus|object|false|none|none|

<h2 id="tocS_StartPiiEntitiesDetectionJobRequest">StartPiiEntitiesDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartpiientitiesdetectionjobrequest"></a>
<a id="schema_StartPiiEntitiesDetectionJobRequest"></a>
<a id="tocSstartpiientitiesdetectionjobrequest"></a>
<a id="tocsstartpiientitiesdetectionjobrequest"></a>

```json
{
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "Mode": {},
  "RedactionConfig": {
    "PiiEntityTypes": {},
    "MaskMode": {},
    "MaskCharacter": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "LanguageCode": {},
  "ClientRequestToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputDataConfig|object|true|none|none|
|OutputDataConfig|object|true|none|none|
|Mode|object|true|none|none|
|RedactionConfig|object|false|none|none|
|DataAccessRoleArn|object|true|none|none|
|JobName|object|false|none|none|
|LanguageCode|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_StartSentimentDetectionJobResponse">StartSentimentDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartsentimentdetectionjobresponse"></a>
<a id="schema_StartSentimentDetectionJobResponse"></a>
<a id="tocSstartsentimentdetectionjobresponse"></a>
<a id="tocsstartsentimentdetectionjobresponse"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobStatus|object|false|none|none|

<h2 id="tocS_StartSentimentDetectionJobRequest">StartSentimentDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartsentimentdetectionjobrequest"></a>
<a id="schema_StartSentimentDetectionJobRequest"></a>
<a id="tocSstartsentimentdetectionjobrequest"></a>
<a id="tocsstartsentimentdetectionjobrequest"></a>

```json
{
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "LanguageCode": {},
  "ClientRequestToken": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputDataConfig|object|true|none|none|
|OutputDataConfig|object|true|none|none|
|DataAccessRoleArn|object|true|none|none|
|JobName|object|false|none|none|
|LanguageCode|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_StartTargetedSentimentDetectionJobResponse">StartTargetedSentimentDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastarttargetedsentimentdetectionjobresponse"></a>
<a id="schema_StartTargetedSentimentDetectionJobResponse"></a>
<a id="tocSstarttargetedsentimentdetectionjobresponse"></a>
<a id="tocsstarttargetedsentimentdetectionjobresponse"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobStatus|object|false|none|none|

<h2 id="tocS_StartTargetedSentimentDetectionJobRequest">StartTargetedSentimentDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastarttargetedsentimentdetectionjobrequest"></a>
<a id="schema_StartTargetedSentimentDetectionJobRequest"></a>
<a id="tocSstarttargetedsentimentdetectionjobrequest"></a>
<a id="tocsstarttargetedsentimentdetectionjobrequest"></a>

```json
{
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "LanguageCode": {},
  "ClientRequestToken": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputDataConfig|[InputDataConfig](#schemainputdataconfig)|true|none|The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis.|
|OutputDataConfig|object|true|none|none|
|DataAccessRoleArn|object|true|none|none|
|JobName|object|false|none|none|
|LanguageCode|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|[VpcConfig](#schemavpcconfig)|false|none| Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. |
|Tags|object|false|none|none|

<h2 id="tocS_StartTopicsDetectionJobResponse">StartTopicsDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastarttopicsdetectionjobresponse"></a>
<a id="schema_StartTopicsDetectionJobResponse"></a>
<a id="tocSstarttopicsdetectionjobresponse"></a>
<a id="tocsstarttopicsdetectionjobresponse"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobStatus|object|false|none|none|

<h2 id="tocS_StartTopicsDetectionJobRequest">StartTopicsDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastarttopicsdetectionjobrequest"></a>
<a id="schema_StartTopicsDetectionJobRequest"></a>
<a id="tocSstarttopicsdetectionjobrequest"></a>
<a id="tocsstarttopicsdetectionjobrequest"></a>

```json
{
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "JobName": {},
  "NumberOfTopics": {},
  "ClientRequestToken": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputDataConfig|object|true|none|none|
|OutputDataConfig|object|true|none|none|
|DataAccessRoleArn|object|true|none|none|
|JobName|object|false|none|none|
|NumberOfTopics|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_StopDominantLanguageDetectionJobResponse">StopDominantLanguageDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopdominantlanguagedetectionjobresponse"></a>
<a id="schema_StopDominantLanguageDetectionJobResponse"></a>
<a id="tocSstopdominantlanguagedetectionjobresponse"></a>
<a id="tocsstopdominantlanguagedetectionjobresponse"></a>

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

<h2 id="tocS_StopDominantLanguageDetectionJobRequest">StopDominantLanguageDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopdominantlanguagedetectionjobrequest"></a>
<a id="schema_StopDominantLanguageDetectionJobRequest"></a>
<a id="tocSstopdominantlanguagedetectionjobrequest"></a>
<a id="tocsstopdominantlanguagedetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_StopEntitiesDetectionJobResponse">StopEntitiesDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopentitiesdetectionjobresponse"></a>
<a id="schema_StopEntitiesDetectionJobResponse"></a>
<a id="tocSstopentitiesdetectionjobresponse"></a>
<a id="tocsstopentitiesdetectionjobresponse"></a>

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

<h2 id="tocS_StopEntitiesDetectionJobRequest">StopEntitiesDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopentitiesdetectionjobrequest"></a>
<a id="schema_StopEntitiesDetectionJobRequest"></a>
<a id="tocSstopentitiesdetectionjobrequest"></a>
<a id="tocsstopentitiesdetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_StopEventsDetectionJobResponse">StopEventsDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopeventsdetectionjobresponse"></a>
<a id="schema_StopEventsDetectionJobResponse"></a>
<a id="tocSstopeventsdetectionjobresponse"></a>
<a id="tocsstopeventsdetectionjobresponse"></a>

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

<h2 id="tocS_StopEventsDetectionJobRequest">StopEventsDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopeventsdetectionjobrequest"></a>
<a id="schema_StopEventsDetectionJobRequest"></a>
<a id="tocSstopeventsdetectionjobrequest"></a>
<a id="tocsstopeventsdetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_StopKeyPhrasesDetectionJobResponse">StopKeyPhrasesDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopkeyphrasesdetectionjobresponse"></a>
<a id="schema_StopKeyPhrasesDetectionJobResponse"></a>
<a id="tocSstopkeyphrasesdetectionjobresponse"></a>
<a id="tocsstopkeyphrasesdetectionjobresponse"></a>

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

<h2 id="tocS_StopKeyPhrasesDetectionJobRequest">StopKeyPhrasesDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopkeyphrasesdetectionjobrequest"></a>
<a id="schema_StopKeyPhrasesDetectionJobRequest"></a>
<a id="tocSstopkeyphrasesdetectionjobrequest"></a>
<a id="tocsstopkeyphrasesdetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_StopPiiEntitiesDetectionJobResponse">StopPiiEntitiesDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoppiientitiesdetectionjobresponse"></a>
<a id="schema_StopPiiEntitiesDetectionJobResponse"></a>
<a id="tocSstoppiientitiesdetectionjobresponse"></a>
<a id="tocsstoppiientitiesdetectionjobresponse"></a>

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

<h2 id="tocS_StopPiiEntitiesDetectionJobRequest">StopPiiEntitiesDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoppiientitiesdetectionjobrequest"></a>
<a id="schema_StopPiiEntitiesDetectionJobRequest"></a>
<a id="tocSstoppiientitiesdetectionjobrequest"></a>
<a id="tocsstoppiientitiesdetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_StopSentimentDetectionJobResponse">StopSentimentDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopsentimentdetectionjobresponse"></a>
<a id="schema_StopSentimentDetectionJobResponse"></a>
<a id="tocSstopsentimentdetectionjobresponse"></a>
<a id="tocsstopsentimentdetectionjobresponse"></a>

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

<h2 id="tocS_StopSentimentDetectionJobRequest">StopSentimentDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopsentimentdetectionjobrequest"></a>
<a id="schema_StopSentimentDetectionJobRequest"></a>
<a id="tocSstopsentimentdetectionjobrequest"></a>
<a id="tocsstopsentimentdetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_StopTargetedSentimentDetectionJobResponse">StopTargetedSentimentDetectionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoptargetedsentimentdetectionjobresponse"></a>
<a id="schema_StopTargetedSentimentDetectionJobResponse"></a>
<a id="tocSstoptargetedsentimentdetectionjobresponse"></a>
<a id="tocsstoptargetedsentimentdetectionjobresponse"></a>

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

<h2 id="tocS_StopTargetedSentimentDetectionJobRequest">StopTargetedSentimentDetectionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoptargetedsentimentdetectionjobrequest"></a>
<a id="schema_StopTargetedSentimentDetectionJobRequest"></a>
<a id="tocSstoptargetedsentimentdetectionjobrequest"></a>
<a id="tocsstoptargetedsentimentdetectionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_StopTrainingDocumentClassifierResponse">StopTrainingDocumentClassifierResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoptrainingdocumentclassifierresponse"></a>
<a id="schema_StopTrainingDocumentClassifierResponse"></a>
<a id="tocSstoptrainingdocumentclassifierresponse"></a>
<a id="tocsstoptrainingdocumentclassifierresponse"></a>

```json
{}
```

<h2 id="tocS_StopTrainingDocumentClassifierRequest">StopTrainingDocumentClassifierRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoptrainingdocumentclassifierrequest"></a>
<a id="schema_StopTrainingDocumentClassifierRequest"></a>
<a id="tocSstoptrainingdocumentclassifierrequest"></a>
<a id="tocsstoptrainingdocumentclassifierrequest"></a>

```json
{
  "DocumentClassifierArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentClassifierArn|object|true|none|none|

<h2 id="tocS_StopTrainingEntityRecognizerResponse">StopTrainingEntityRecognizerResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoptrainingentityrecognizerresponse"></a>
<a id="schema_StopTrainingEntityRecognizerResponse"></a>
<a id="tocSstoptrainingentityrecognizerresponse"></a>
<a id="tocsstoptrainingentityrecognizerresponse"></a>

```json
{}
```

<h2 id="tocS_StopTrainingEntityRecognizerRequest">StopTrainingEntityRecognizerRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoptrainingentityrecognizerrequest"></a>
<a id="schema_StopTrainingEntityRecognizerRequest"></a>
<a id="tocSstoptrainingentityrecognizerrequest"></a>
<a id="tocsstoptrainingentityrecognizerrequest"></a>

```json
{
  "EntityRecognizerArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityRecognizerArn|object|true|none|none|

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

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

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

<h2 id="tocS_TooManyTagKeysException">TooManyTagKeysException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagkeysexception"></a>
<a id="schema_TooManyTagKeysException"></a>
<a id="tocStoomanytagkeysexception"></a>
<a id="tocstoomanytagkeysexception"></a>

```json
null
```

<h2 id="tocS_UpdateEndpointResponse">UpdateEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateendpointresponse"></a>
<a id="schema_UpdateEndpointResponse"></a>
<a id="tocSupdateendpointresponse"></a>
<a id="tocsupdateendpointresponse"></a>

```json
{
  "DesiredModelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DesiredModelArn|object|false|none|none|

<h2 id="tocS_UpdateEndpointRequest">UpdateEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateendpointrequest"></a>
<a id="schema_UpdateEndpointRequest"></a>
<a id="tocSupdateendpointrequest"></a>
<a id="tocsupdateendpointrequest"></a>

```json
{
  "EndpointArn": {},
  "DesiredModelArn": {},
  "DesiredInferenceUnits": {},
  "DesiredDataAccessRoleArn": {},
  "FlywheelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|true|none|none|
|DesiredModelArn|object|false|none|none|
|DesiredInferenceUnits|object|false|none|none|
|DesiredDataAccessRoleArn|object|false|none|none|
|FlywheelArn|object|false|none|none|

<h2 id="tocS_UpdateFlywheelResponse">UpdateFlywheelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateflywheelresponse"></a>
<a id="schema_UpdateFlywheelResponse"></a>
<a id="tocSupdateflywheelresponse"></a>
<a id="tocsupdateflywheelresponse"></a>

```json
{
  "FlywheelProperties": {
    "FlywheelArn": {},
    "ActiveModelArn": {},
    "DataAccessRoleArn": {},
    "TaskConfig": {
      "LanguageCode": {},
      "DocumentClassificationConfig": {
        "Mode": {},
        "Labels": {}
      },
      "EntityRecognitionConfig": {
        "EntityTypes": {}
      }
    },
    "DataLakeS3Uri": {},
    "DataSecurityConfig": {
      "ModelKmsKeyId": {},
      "VolumeKmsKeyId": {},
      "DataLakeKmsKeyId": {},
      "VpcConfig": {
        "SecurityGroupIds": {},
        "Subnets": {}
      }
    },
    "Status": {},
    "ModelType": {},
    "Message": {},
    "CreationTime": {},
    "LastModifiedTime": {},
    "LatestFlywheelIteration": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelProperties|object|false|none|none|

<h2 id="tocS_UpdateFlywheelRequest">UpdateFlywheelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateflywheelrequest"></a>
<a id="schema_UpdateFlywheelRequest"></a>
<a id="tocSupdateflywheelrequest"></a>
<a id="tocsupdateflywheelrequest"></a>

```json
{
  "FlywheelArn": {},
  "ActiveModelArn": {},
  "DataAccessRoleArn": {},
  "DataSecurityConfig": {
    "ModelKmsKeyId": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelArn|object|true|none|none|
|ActiveModelArn|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|DataSecurityConfig|object|false|none|none|

<h2 id="tocS_AnyLengthString">AnyLengthString</h2>
<!-- backwards compatibility -->
<a id="schemaanylengthstring"></a>
<a id="schema_AnyLengthString"></a>
<a id="tocSanylengthstring"></a>
<a id="tocsanylengthstring"></a>

```json
"string"
```

<h2 id="tocS_AttributeNamesListItem">AttributeNamesListItem</h2>
<!-- backwards compatibility -->
<a id="schemaattributenameslistitem"></a>
<a id="schema_AttributeNamesListItem"></a>
<a id="tocSattributenameslistitem"></a>
<a id="tocsattributenameslistitem"></a>

```json
"string"
```

<h2 id="tocS_AttributeNamesList">AttributeNamesList</h2>
<!-- backwards compatibility -->
<a id="schemaattributenameslist"></a>
<a id="schema_AttributeNamesList"></a>
<a id="tocSattributenameslist"></a>
<a id="tocsattributenameslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AugmentedManifestsDocumentTypeFormat">AugmentedManifestsDocumentTypeFormat</h2>
<!-- backwards compatibility -->
<a id="schemaaugmentedmanifestsdocumenttypeformat"></a>
<a id="schema_AugmentedManifestsDocumentTypeFormat"></a>
<a id="tocSaugmentedmanifestsdocumenttypeformat"></a>
<a id="tocsaugmentedmanifestsdocumenttypeformat"></a>

```json
"PLAIN_TEXT_DOCUMENT"
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

<h2 id="tocS_Split">Split</h2>
<!-- backwards compatibility -->
<a id="schemasplit"></a>
<a id="schema_Split"></a>
<a id="tocSsplit"></a>
<a id="tocssplit"></a>

```json
"TRAIN"
```

<h2 id="tocS_AugmentedManifestsListItem">AugmentedManifestsListItem</h2>
<!-- backwards compatibility -->
<a id="schemaaugmentedmanifestslistitem"></a>
<a id="schema_AugmentedManifestsListItem"></a>
<a id="tocSaugmentedmanifestslistitem"></a>
<a id="tocsaugmentedmanifestslistitem"></a>

```json
{
  "S3Uri": {},
  "Split": {},
  "AttributeNames": {},
  "AnnotationDataS3Uri": {},
  "SourceDocumentsS3Uri": {},
  "DocumentType": {}
}
```

An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|
|Split|object|false|none|none|
|AttributeNames|object|true|none|none|
|AnnotationDataS3Uri|object|false|none|none|
|SourceDocumentsS3Uri|object|false|none|none|
|DocumentType|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_ListOfDominantLanguages">ListOfDominantLanguages</h2>
<!-- backwards compatibility -->
<a id="schemalistofdominantlanguages"></a>
<a id="schema_ListOfDominantLanguages"></a>
<a id="tocSlistofdominantlanguages"></a>
<a id="tocslistofdominantlanguages"></a>

```json
[
  {
    "LanguageCode": {},
    "Score": {}
  }
]
```

<h2 id="tocS_BatchDetectDominantLanguageItemResult">BatchDetectDominantLanguageItemResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetectdominantlanguageitemresult"></a>
<a id="schema_BatchDetectDominantLanguageItemResult"></a>
<a id="tocSbatchdetectdominantlanguageitemresult"></a>
<a id="tocsbatchdetectdominantlanguageitemresult"></a>

```json
{
  "Index": {},
  "Languages": {}
}
```

The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Index|object|false|none|none|
|Languages|object|false|none|none|

<h2 id="tocS_CustomerInputStringList">CustomerInputStringList</h2>
<!-- backwards compatibility -->
<a id="schemacustomerinputstringlist"></a>
<a id="schema_CustomerInputStringList"></a>
<a id="tocScustomerinputstringlist"></a>
<a id="tocscustomerinputstringlist"></a>

```json
[
  "password"
]
```

<h2 id="tocS_ListOfDetectDominantLanguageResult">ListOfDetectDominantLanguageResult</h2>
<!-- backwards compatibility -->
<a id="schemalistofdetectdominantlanguageresult"></a>
<a id="schema_ListOfDetectDominantLanguageResult"></a>
<a id="tocSlistofdetectdominantlanguageresult"></a>
<a id="tocslistofdetectdominantlanguageresult"></a>

```json
[
  {
    "Index": {},
    "Languages": {}
  }
]
```

<h2 id="tocS_BatchItemErrorList">BatchItemErrorList</h2>
<!-- backwards compatibility -->
<a id="schemabatchitemerrorlist"></a>
<a id="schema_BatchItemErrorList"></a>
<a id="tocSbatchitemerrorlist"></a>
<a id="tocsbatchitemerrorlist"></a>

```json
[
  {
    "Index": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_ListOfEntities">ListOfEntities</h2>
<!-- backwards compatibility -->
<a id="schemalistofentities"></a>
<a id="schema_ListOfEntities"></a>
<a id="tocSlistofentities"></a>
<a id="tocslistofentities"></a>

```json
[
  {
    "Score": {},
    "Type": {},
    "Text": {},
    "BeginOffset": {},
    "EndOffset": {},
    "BlockReferences": {}
  }
]
```

<h2 id="tocS_BatchDetectEntitiesItemResult">BatchDetectEntitiesItemResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetectentitiesitemresult"></a>
<a id="schema_BatchDetectEntitiesItemResult"></a>
<a id="tocSbatchdetectentitiesitemresult"></a>
<a id="tocsbatchdetectentitiesitemresult"></a>

```json
{
  "Index": {},
  "Entities": {}
}
```

The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Index|object|false|none|none|
|Entities|object|false|none|none|

<h2 id="tocS_LanguageCode">LanguageCode</h2>
<!-- backwards compatibility -->
<a id="schemalanguagecode"></a>
<a id="schema_LanguageCode"></a>
<a id="tocSlanguagecode"></a>
<a id="tocslanguagecode"></a>

```json
"en"
```

<h2 id="tocS_ListOfDetectEntitiesResult">ListOfDetectEntitiesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistofdetectentitiesresult"></a>
<a id="schema_ListOfDetectEntitiesResult"></a>
<a id="tocSlistofdetectentitiesresult"></a>
<a id="tocslistofdetectentitiesresult"></a>

```json
[
  {
    "Index": {},
    "Entities": {}
  }
]
```

<h2 id="tocS_ListOfKeyPhrases">ListOfKeyPhrases</h2>
<!-- backwards compatibility -->
<a id="schemalistofkeyphrases"></a>
<a id="schema_ListOfKeyPhrases"></a>
<a id="tocSlistofkeyphrases"></a>
<a id="tocslistofkeyphrases"></a>

```json
[
  {
    "Score": {},
    "Text": {},
    "BeginOffset": {},
    "EndOffset": {}
  }
]
```

<h2 id="tocS_BatchDetectKeyPhrasesItemResult">BatchDetectKeyPhrasesItemResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetectkeyphrasesitemresult"></a>
<a id="schema_BatchDetectKeyPhrasesItemResult"></a>
<a id="tocSbatchdetectkeyphrasesitemresult"></a>
<a id="tocsbatchdetectkeyphrasesitemresult"></a>

```json
{
  "Index": {},
  "KeyPhrases": {}
}
```

The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Index|object|false|none|none|
|KeyPhrases|object|false|none|none|

<h2 id="tocS_ListOfDetectKeyPhrasesResult">ListOfDetectKeyPhrasesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistofdetectkeyphrasesresult"></a>
<a id="schema_ListOfDetectKeyPhrasesResult"></a>
<a id="tocSlistofdetectkeyphrasesresult"></a>
<a id="tocslistofdetectkeyphrasesresult"></a>

```json
[
  {
    "Index": {},
    "KeyPhrases": {}
  }
]
```

<h2 id="tocS_SentimentType">SentimentType</h2>
<!-- backwards compatibility -->
<a id="schemasentimenttype"></a>
<a id="schema_SentimentType"></a>
<a id="tocSsentimenttype"></a>
<a id="tocssentimenttype"></a>

```json
"POSITIVE"
```

<h2 id="tocS_SentimentScore">SentimentScore</h2>
<!-- backwards compatibility -->
<a id="schemasentimentscore"></a>
<a id="schema_SentimentScore"></a>
<a id="tocSsentimentscore"></a>
<a id="tocssentimentscore"></a>

```json
{
  "Positive": {},
  "Negative": {},
  "Neutral": {},
  "Mixed": {}
}
```

Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Positive|object|false|none|none|
|Negative|object|false|none|none|
|Neutral|object|false|none|none|
|Mixed|object|false|none|none|

<h2 id="tocS_BatchDetectSentimentItemResult">BatchDetectSentimentItemResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetectsentimentitemresult"></a>
<a id="schema_BatchDetectSentimentItemResult"></a>
<a id="tocSbatchdetectsentimentitemresult"></a>
<a id="tocsbatchdetectsentimentitemresult"></a>

```json
{
  "Index": {},
  "Sentiment": {},
  "SentimentScore": {
    "Positive": {},
    "Negative": {},
    "Neutral": {},
    "Mixed": {}
  }
}
```

The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Index|object|false|none|none|
|Sentiment|object|false|none|none|
|SentimentScore|object|false|none|none|

<h2 id="tocS_ListOfDetectSentimentResult">ListOfDetectSentimentResult</h2>
<!-- backwards compatibility -->
<a id="schemalistofdetectsentimentresult"></a>
<a id="schema_ListOfDetectSentimentResult"></a>
<a id="tocSlistofdetectsentimentresult"></a>
<a id="tocslistofdetectsentimentresult"></a>

```json
[
  {
    "Index": {},
    "Sentiment": {},
    "SentimentScore": {
      "Positive": {},
      "Negative": {},
      "Neutral": {},
      "Mixed": {}
    }
  }
]
```

<h2 id="tocS_ListOfSyntaxTokens">ListOfSyntaxTokens</h2>
<!-- backwards compatibility -->
<a id="schemalistofsyntaxtokens"></a>
<a id="schema_ListOfSyntaxTokens"></a>
<a id="tocSlistofsyntaxtokens"></a>
<a id="tocslistofsyntaxtokens"></a>

```json
[
  {
    "TokenId": {},
    "Text": {},
    "BeginOffset": {},
    "EndOffset": {},
    "PartOfSpeech": {
      "Tag": {},
      "Score": {}
    }
  }
]
```

<h2 id="tocS_BatchDetectSyntaxItemResult">BatchDetectSyntaxItemResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetectsyntaxitemresult"></a>
<a id="schema_BatchDetectSyntaxItemResult"></a>
<a id="tocSbatchdetectsyntaxitemresult"></a>
<a id="tocsbatchdetectsyntaxitemresult"></a>

```json
{
  "Index": {},
  "SyntaxTokens": {}
}
```

The result of calling the operation. The operation returns one object that is successfully processed by the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Index|object|false|none|none|
|SyntaxTokens|object|false|none|none|

<h2 id="tocS_SyntaxLanguageCode">SyntaxLanguageCode</h2>
<!-- backwards compatibility -->
<a id="schemasyntaxlanguagecode"></a>
<a id="schema_SyntaxLanguageCode"></a>
<a id="tocSsyntaxlanguagecode"></a>
<a id="tocssyntaxlanguagecode"></a>

```json
"en"
```

<h2 id="tocS_ListOfDetectSyntaxResult">ListOfDetectSyntaxResult</h2>
<!-- backwards compatibility -->
<a id="schemalistofdetectsyntaxresult"></a>
<a id="schema_ListOfDetectSyntaxResult"></a>
<a id="tocSlistofdetectsyntaxresult"></a>
<a id="tocslistofdetectsyntaxresult"></a>

```json
[
  {
    "Index": {},
    "SyntaxTokens": {}
  }
]
```

<h2 id="tocS_ListOfTargetedSentimentEntities">ListOfTargetedSentimentEntities</h2>
<!-- backwards compatibility -->
<a id="schemalistoftargetedsentimententities"></a>
<a id="schema_ListOfTargetedSentimentEntities"></a>
<a id="tocSlistoftargetedsentimententities"></a>
<a id="tocslistoftargetedsentimententities"></a>

```json
[
  {
    "DescriptiveMentionIndex": {},
    "Mentions": {}
  }
]
```

<h2 id="tocS_BatchDetectTargetedSentimentItemResult">BatchDetectTargetedSentimentItemResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetecttargetedsentimentitemresult"></a>
<a id="schema_BatchDetectTargetedSentimentItemResult"></a>
<a id="tocSbatchdetecttargetedsentimentitemresult"></a>
<a id="tocsbatchdetecttargetedsentimentitemresult"></a>

```json
{
  "Index": {},
  "Entities": {}
}
```

Analysis results for one of the documents in the batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Index|object|false|none|none|
|Entities|object|false|none|none|

<h2 id="tocS_ListOfDetectTargetedSentimentResult">ListOfDetectTargetedSentimentResult</h2>
<!-- backwards compatibility -->
<a id="schemalistofdetecttargetedsentimentresult"></a>
<a id="schema_ListOfDetectTargetedSentimentResult"></a>
<a id="tocSlistofdetecttargetedsentimentresult"></a>
<a id="tocslistofdetecttargetedsentimentresult"></a>

```json
[
  {
    "Index": {},
    "Entities": {}
  }
]
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

<h2 id="tocS_BatchItemError">BatchItemError</h2>
<!-- backwards compatibility -->
<a id="schemabatchitemerror"></a>
<a id="schema_BatchItemError"></a>
<a id="tocSbatchitemerror"></a>
<a id="tocsbatchitemerror"></a>

```json
{
  "Index": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Describes an error that occurred while processing a document in a batch. The operation returns on <code>BatchItemError</code> object for each document that contained an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Index|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_BlockType">BlockType</h2>
<!-- backwards compatibility -->
<a id="schemablocktype"></a>
<a id="schema_BlockType"></a>
<a id="tocSblocktype"></a>
<a id="tocsblocktype"></a>

```json
"LINE"
```

<h2 id="tocS_Geometry">Geometry</h2>
<!-- backwards compatibility -->
<a id="schemageometry"></a>
<a id="schema_Geometry"></a>
<a id="tocSgeometry"></a>
<a id="tocsgeometry"></a>

```json
{
  "BoundingBox": {
    "Height": {},
    "Left": {},
    "Top": {},
    "Width": {}
  },
  "Polygon": {}
}
```

<p>Information about the location of items on a document page.</p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Geometry.html">Geometry</a> in the Amazon Textract API reference.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BoundingBox|object|false|none|none|
|Polygon|object|false|none|none|

<h2 id="tocS_ListOfRelationships">ListOfRelationships</h2>
<!-- backwards compatibility -->
<a id="schemalistofrelationships"></a>
<a id="schema_ListOfRelationships"></a>
<a id="tocSlistofrelationships"></a>
<a id="tocslistofrelationships"></a>

```json
[
  {
    "Ids": {},
    "Type": {}
  }
]
```

<h2 id="tocS_Block">Block</h2>
<!-- backwards compatibility -->
<a id="schemablock"></a>
<a id="schema_Block"></a>
<a id="tocSblock"></a>
<a id="tocsblock"></a>

```json
{
  "Id": {},
  "BlockType": {},
  "Text": {},
  "Page": {},
  "Geometry": {
    "BoundingBox": {
      "Height": {},
      "Left": {},
      "Top": {},
      "Width": {}
    },
    "Polygon": {}
  },
  "Relationships": {}
}
```

<p>Information about each word or line of text in the input document.</p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Block.html">Block</a> in the Amazon Textract API reference.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|BlockType|object|false|none|none|
|Text|object|false|none|none|
|Page|object|false|none|none|
|Geometry|object|false|none|none|
|Relationships|object|false|none|none|

<h2 id="tocS_ListOfChildBlocks">ListOfChildBlocks</h2>
<!-- backwards compatibility -->
<a id="schemalistofchildblocks"></a>
<a id="schema_ListOfChildBlocks"></a>
<a id="tocSlistofchildblocks"></a>
<a id="tocslistofchildblocks"></a>

```json
[
  {
    "ChildBlockId": {},
    "BeginOffset": {},
    "EndOffset": {}
  }
]
```

<h2 id="tocS_BlockReference">BlockReference</h2>
<!-- backwards compatibility -->
<a id="schemablockreference"></a>
<a id="schema_BlockReference"></a>
<a id="tocSblockreference"></a>
<a id="tocsblockreference"></a>

```json
{
  "BlockId": {},
  "BeginOffset": {},
  "EndOffset": {},
  "ChildBlocks": {}
}
```

A reference to a block.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockId|object|false|none|none|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|
|ChildBlocks|object|false|none|none|

<h2 id="tocS_Float">Float</h2>
<!-- backwards compatibility -->
<a id="schemafloat"></a>
<a id="schema_Float"></a>
<a id="tocSfloat"></a>
<a id="tocsfloat"></a>

```json
0
```

<h2 id="tocS_BoundingBox">BoundingBox</h2>
<!-- backwards compatibility -->
<a id="schemaboundingbox"></a>
<a id="schema_BoundingBox"></a>
<a id="tocSboundingbox"></a>
<a id="tocsboundingbox"></a>

```json
{
  "Height": {},
  "Left": {},
  "Top": {},
  "Width": {}
}
```

<p>The bounding box around the detected page or around an element on a document page. The left (x-coordinate) and top (y-coordinate) are coordinates that represent the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_BoundingBox.html">BoundingBox</a> in the Amazon Textract API reference.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Height|object|false|none|none|
|Left|object|false|none|none|
|Top|object|false|none|none|
|Width|object|false|none|none|

<h2 id="tocS_ChildBlock">ChildBlock</h2>
<!-- backwards compatibility -->
<a id="schemachildblock"></a>
<a id="schema_ChildBlock"></a>
<a id="tocSchildblock"></a>
<a id="tocschildblock"></a>

```json
{
  "ChildBlockId": {},
  "BeginOffset": {},
  "EndOffset": {}
}
```

Nested block contained within a block.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChildBlockId|object|false|none|none|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_ClassifierEvaluationMetrics">ClassifierEvaluationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaclassifierevaluationmetrics"></a>
<a id="schema_ClassifierEvaluationMetrics"></a>
<a id="tocSclassifierevaluationmetrics"></a>
<a id="tocsclassifierevaluationmetrics"></a>

```json
{
  "Accuracy": {},
  "Precision": {},
  "Recall": {},
  "F1Score": {},
  "MicroPrecision": {},
  "MicroRecall": {},
  "MicroF1Score": {},
  "HammingLoss": {}
}
```

Describes the result metrics for the test data associated with an documentation classifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accuracy|object|false|none|none|
|Precision|object|false|none|none|
|Recall|object|false|none|none|
|F1Score|object|false|none|none|
|MicroPrecision|object|false|none|none|
|MicroRecall|object|false|none|none|
|MicroF1Score|object|false|none|none|
|HammingLoss|object|false|none|none|

<h2 id="tocS_ClassifierMetadata">ClassifierMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaclassifiermetadata"></a>
<a id="schema_ClassifierMetadata"></a>
<a id="tocSclassifiermetadata"></a>
<a id="tocsclassifiermetadata"></a>

```json
{
  "NumberOfLabels": {},
  "NumberOfTrainedDocuments": {},
  "NumberOfTestDocuments": {},
  "EvaluationMetrics": {
    "Accuracy": {},
    "Precision": {},
    "Recall": {},
    "F1Score": {},
    "MicroPrecision": {},
    "MicroRecall": {},
    "MicroF1Score": {},
    "HammingLoss": {}
  }
}
```

Provides information about a document classifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NumberOfLabels|object|false|none|none|
|NumberOfTrainedDocuments|object|false|none|none|
|NumberOfTestDocuments|object|false|none|none|
|EvaluationMetrics|object|false|none|none|

<h2 id="tocS_CustomerInputString">CustomerInputString</h2>
<!-- backwards compatibility -->
<a id="schemacustomerinputstring"></a>
<a id="schema_CustomerInputString"></a>
<a id="tocScustomerinputstring"></a>
<a id="tocscustomerinputstring"></a>

```json
"password"
```

<h2 id="tocS_DocumentClassifierEndpointArn">DocumentClassifierEndpointArn</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassifierendpointarn"></a>
<a id="schema_DocumentClassifierEndpointArn"></a>
<a id="tocSdocumentclassifierendpointarn"></a>
<a id="tocsdocumentclassifierendpointarn"></a>

```json
"string"
```

<h2 id="tocS_SemiStructuredDocumentBlob">SemiStructuredDocumentBlob</h2>
<!-- backwards compatibility -->
<a id="schemasemistructureddocumentblob"></a>
<a id="schema_SemiStructuredDocumentBlob"></a>
<a id="tocSsemistructureddocumentblob"></a>
<a id="tocssemistructureddocumentblob"></a>

```json
"string"
```

<h2 id="tocS_DocumentReaderConfig">DocumentReaderConfig</h2>
<!-- backwards compatibility -->
<a id="schemadocumentreaderconfig"></a>
<a id="schema_DocumentReaderConfig"></a>
<a id="tocSdocumentreaderconfig"></a>
<a id="tocsdocumentreaderconfig"></a>

```json
{
  "DocumentReadAction": {},
  "DocumentReadMode": {},
  "FeatureTypes": {}
}
```

<p>Provides configuration parameters to override the default actions for extracting text from PDF documents and image files. </p> <p> By default, Amazon Comprehend performs the following actions to extract text from files, based on the input file type: </p> <ul> <li> <p> <b>Word files</b> - Amazon Comprehend parser extracts the text. </p> </li> <li> <p> <b>Digital PDF files</b> - Amazon Comprehend parser extracts the text. </p> </li> <li> <p> <b>Image files and scanned PDF files</b> - Amazon Comprehend uses the Amazon Textract <code>DetectDocumentText</code> API to extract the text. </p> </li> </ul> <p> <code>DocumentReaderConfig</code> does not apply to plain text files or Word files.</p> <p> For image files and PDF documents, you can override these default actions using the fields listed below. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-set-textract-options.html"> Setting text extraction options</a> in the Comprehend Developer Guide. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentReadAction|object|true|none|none|
|DocumentReadMode|object|false|none|none|
|FeatureTypes|object|false|none|none|

<h2 id="tocS_ListOfClasses">ListOfClasses</h2>
<!-- backwards compatibility -->
<a id="schemalistofclasses"></a>
<a id="schema_ListOfClasses"></a>
<a id="tocSlistofclasses"></a>
<a id="tocslistofclasses"></a>

```json
[
  {
    "Name": {},
    "Score": {},
    "Page": {}
  }
]
```

<h2 id="tocS_ListOfLabels">ListOfLabels</h2>
<!-- backwards compatibility -->
<a id="schemalistoflabels"></a>
<a id="schema_ListOfLabels"></a>
<a id="tocSlistoflabels"></a>
<a id="tocslistoflabels"></a>

```json
[
  {
    "Name": {},
    "Score": {},
    "Page": {}
  }
]
```

<h2 id="tocS_DocumentMetadata">DocumentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadocumentmetadata"></a>
<a id="schema_DocumentMetadata"></a>
<a id="tocSdocumentmetadata"></a>
<a id="tocsdocumentmetadata"></a>

```json
{
  "Pages": {},
  "ExtractedCharacters": {}
}
```

Information about the document, discovered during text extraction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pages|object|false|none|none|
|ExtractedCharacters|object|false|none|none|

<h2 id="tocS_ListOfDocumentType">ListOfDocumentType</h2>
<!-- backwards compatibility -->
<a id="schemalistofdocumenttype"></a>
<a id="schema_ListOfDocumentType"></a>
<a id="tocSlistofdocumenttype"></a>
<a id="tocslistofdocumenttype"></a>

```json
[
  {
    "Page": {},
    "Type": {}
  }
]
```

<h2 id="tocS_ListOfErrors">ListOfErrors</h2>
<!-- backwards compatibility -->
<a id="schemalistoferrors"></a>
<a id="schema_ListOfErrors"></a>
<a id="tocSlistoferrors"></a>
<a id="tocslistoferrors"></a>

```json
[
  {
    "Page": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_ListOfWarnings">ListOfWarnings</h2>
<!-- backwards compatibility -->
<a id="schemalistofwarnings"></a>
<a id="schema_ListOfWarnings"></a>
<a id="tocSlistofwarnings"></a>
<a id="tocslistofwarnings"></a>

```json
[
  {
    "Page": {},
    "WarnCode": {},
    "WarnMessage": {}
  }
]
```

<h2 id="tocS_ClientRequestTokenString">ClientRequestTokenString</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttokenstring"></a>
<a id="schema_ClientRequestTokenString"></a>
<a id="tocSclientrequesttokenstring"></a>
<a id="tocsclientrequesttokenstring"></a>

```json
"string"
```

<h2 id="tocS_ComprehendArn">ComprehendArn</h2>
<!-- backwards compatibility -->
<a id="schemacomprehendarn"></a>
<a id="schema_ComprehendArn"></a>
<a id="tocScomprehendarn"></a>
<a id="tocscomprehendarn"></a>

```json
"string"
```

<h2 id="tocS_ComprehendArnName">ComprehendArnName</h2>
<!-- backwards compatibility -->
<a id="schemacomprehendarnname"></a>
<a id="schema_ComprehendArnName"></a>
<a id="tocScomprehendarnname"></a>
<a id="tocscomprehendarnname"></a>

```json
"string"
```

<h2 id="tocS_ComprehendDatasetArn">ComprehendDatasetArn</h2>
<!-- backwards compatibility -->
<a id="schemacomprehenddatasetarn"></a>
<a id="schema_ComprehendDatasetArn"></a>
<a id="tocScomprehenddatasetarn"></a>
<a id="tocscomprehenddatasetarn"></a>

```json
"string"
```

<h2 id="tocS_ComprehendEndpointArn">ComprehendEndpointArn</h2>
<!-- backwards compatibility -->
<a id="schemacomprehendendpointarn"></a>
<a id="schema_ComprehendEndpointArn"></a>
<a id="tocScomprehendendpointarn"></a>
<a id="tocscomprehendendpointarn"></a>

```json
"string"
```

<h2 id="tocS_ComprehendEndpointName">ComprehendEndpointName</h2>
<!-- backwards compatibility -->
<a id="schemacomprehendendpointname"></a>
<a id="schema_ComprehendEndpointName"></a>
<a id="tocScomprehendendpointname"></a>
<a id="tocscomprehendendpointname"></a>

```json
"string"
```

<h2 id="tocS_ComprehendFlywheelArn">ComprehendFlywheelArn</h2>
<!-- backwards compatibility -->
<a id="schemacomprehendflywheelarn"></a>
<a id="schema_ComprehendFlywheelArn"></a>
<a id="tocScomprehendflywheelarn"></a>
<a id="tocscomprehendflywheelarn"></a>

```json
"string"
```

<h2 id="tocS_ComprehendModelArn">ComprehendModelArn</h2>
<!-- backwards compatibility -->
<a id="schemacomprehendmodelarn"></a>
<a id="schema_ComprehendModelArn"></a>
<a id="tocScomprehendmodelarn"></a>
<a id="tocscomprehendmodelarn"></a>

```json
"string"
```

<h2 id="tocS_ListOfEntityLabels">ListOfEntityLabels</h2>
<!-- backwards compatibility -->
<a id="schemalistofentitylabels"></a>
<a id="schema_ListOfEntityLabels"></a>
<a id="tocSlistofentitylabels"></a>
<a id="tocslistofentitylabels"></a>

```json
[
  {
    "Name": {},
    "Score": {}
  }
]
```

<h2 id="tocS_DatasetType">DatasetType</h2>
<!-- backwards compatibility -->
<a id="schemadatasettype"></a>
<a id="schema_DatasetType"></a>
<a id="tocSdatasettype"></a>
<a id="tocsdatasettype"></a>

```json
"TRAIN"
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

<h2 id="tocS_DatasetInputDataConfig">DatasetInputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemadatasetinputdataconfig"></a>
<a id="schema_DatasetInputDataConfig"></a>
<a id="tocSdatasetinputdataconfig"></a>
<a id="tocsdatasetinputdataconfig"></a>

```json
{
  "AugmentedManifests": {},
  "DataFormat": {},
  "DocumentClassifierInputDataConfig": {
    "S3Uri": {},
    "LabelDelimiter": {}
  },
  "EntityRecognizerInputDataConfig": {
    "Annotations": {
      "S3Uri": {}
    },
    "Documents": {
      "S3Uri": {},
      "InputFormat": {}
    },
    "EntityList": {
      "S3Uri": {}
    }
  }
}
```

Specifies the format and location of the input data for the dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AugmentedManifests|object|false|none|none|
|DataFormat|object|false|none|none|
|DocumentClassifierInputDataConfig|object|false|none|none|
|EntityRecognizerInputDataConfig|object|false|none|none|

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

<h2 id="tocS_VersionName">VersionName</h2>
<!-- backwards compatibility -->
<a id="schemaversionname"></a>
<a id="schema_VersionName"></a>
<a id="tocSversionname"></a>
<a id="tocsversionname"></a>

```json
"string"
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

<h2 id="tocS_DocumentClassifierInputDataConfig">DocumentClassifierInputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassifierinputdataconfig"></a>
<a id="schema_DocumentClassifierInputDataConfig"></a>
<a id="tocSdocumentclassifierinputdataconfig"></a>
<a id="tocsdocumentclassifierinputdataconfig"></a>

```json
{
  "DataFormat": {},
  "S3Uri": {},
  "TestS3Uri": {},
  "LabelDelimiter": {},
  "AugmentedManifests": {},
  "DocumentType": {},
  "Documents": {
    "S3Uri": {},
    "TestS3Uri": {}
  },
  "DocumentReaderConfig": {
    "DocumentReadAction": {},
    "DocumentReadMode": {},
    "FeatureTypes": {}
  }
}
```

<p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a> in the Comprehend Developer Guide. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataFormat|object|false|none|none|
|S3Uri|object|false|none|none|
|TestS3Uri|object|false|none|none|
|LabelDelimiter|object|false|none|none|
|AugmentedManifests|object|false|none|none|
|DocumentType|object|false|none|none|
|Documents|object|false|none|none|
|DocumentReaderConfig|[DocumentReaderConfig](#schemadocumentreaderconfig)|false|none|<p>Provides configuration parameters to override the default actions for extracting text from PDF documents and image files. </p> <p> By default, Amazon Comprehend performs the following actions to extract text from files, based on the input file type: </p> <ul> <li> <p> <b>Word files</b> - Amazon Comprehend parser extracts the text. </p> </li> <li> <p> <b>Digital PDF files</b> - Amazon Comprehend parser extracts the text. </p> </li> <li> <p> <b>Image files and scanned PDF files</b> - Amazon Comprehend uses the Amazon Textract <code>DetectDocumentText</code> API to extract the text. </p> </li> </ul> <p> <code>DocumentReaderConfig</code> does not apply to plain text files or Word files.</p> <p> For image files and PDF documents, you can override these default actions using the fields listed below. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-set-textract-options.html"> Setting text extraction options</a> in the Comprehend Developer Guide. </p>|

<h2 id="tocS_DocumentClassifierOutputDataConfig">DocumentClassifierOutputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassifieroutputdataconfig"></a>
<a id="schema_DocumentClassifierOutputDataConfig"></a>
<a id="tocSdocumentclassifieroutputdataconfig"></a>
<a id="tocsdocumentclassifieroutputdataconfig"></a>

```json
{
  "S3Uri": {},
  "KmsKeyId": {},
  "FlywheelStatsS3Prefix": {}
}
```

Provide the location for output data from a custom classifier job. This field is mandatory if you are training a native classifier model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|false|none|none|
|KmsKeyId|object|false|none|none|
|FlywheelStatsS3Prefix|object|false|none|none|

<h2 id="tocS_KmsKeyId">KmsKeyId</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyid"></a>
<a id="schema_KmsKeyId"></a>
<a id="tocSkmskeyid"></a>
<a id="tocskmskeyid"></a>

```json
"string"
```

<h2 id="tocS_VpcConfig">VpcConfig</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfig"></a>
<a id="schema_VpcConfig"></a>
<a id="tocSvpcconfig"></a>
<a id="tocsvpcconfig"></a>

```json
{
  "SecurityGroupIds": {},
  "Subnets": {}
}
```

 Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecurityGroupIds|object|true|none|none|
|Subnets|object|true|none|none|

<h2 id="tocS_DocumentClassifierMode">DocumentClassifierMode</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassifiermode"></a>
<a id="schema_DocumentClassifierMode"></a>
<a id="tocSdocumentclassifiermode"></a>
<a id="tocsdocumentclassifiermode"></a>

```json
"MULTI_CLASS"
```

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
"string"
```

<h2 id="tocS_DocumentClassifierArn">DocumentClassifierArn</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassifierarn"></a>
<a id="schema_DocumentClassifierArn"></a>
<a id="tocSdocumentclassifierarn"></a>
<a id="tocsdocumentclassifierarn"></a>

```json
"string"
```

<h2 id="tocS_InferenceUnitsInteger">InferenceUnitsInteger</h2>
<!-- backwards compatibility -->
<a id="schemainferenceunitsinteger"></a>
<a id="schema_InferenceUnitsInteger"></a>
<a id="tocSinferenceunitsinteger"></a>
<a id="tocsinferenceunitsinteger"></a>

```json
1
```

<h2 id="tocS_EntityRecognizerInputDataConfig">EntityRecognizerInputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizerinputdataconfig"></a>
<a id="schema_EntityRecognizerInputDataConfig"></a>
<a id="tocSentityrecognizerinputdataconfig"></a>
<a id="tocsentityrecognizerinputdataconfig"></a>

```json
{
  "DataFormat": {},
  "EntityTypes": {},
  "Documents": {
    "S3Uri": {},
    "TestS3Uri": {},
    "InputFormat": {}
  },
  "Annotations": {
    "S3Uri": {},
    "TestS3Uri": {}
  },
  "EntityList": {
    "S3Uri": {}
  },
  "AugmentedManifests": {}
}
```

Specifies the format and location of the input data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataFormat|object|false|none|none|
|EntityTypes|object|true|none|none|
|Documents|object|false|none|none|
|Annotations|object|false|none|none|
|EntityList|object|false|none|none|
|AugmentedManifests|object|false|none|none|

<h2 id="tocS_EntityRecognizerArn">EntityRecognizerArn</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizerarn"></a>
<a id="schema_EntityRecognizerArn"></a>
<a id="tocSentityrecognizerarn"></a>
<a id="tocsentityrecognizerarn"></a>

```json
"string"
```

<h2 id="tocS_TaskConfig">TaskConfig</h2>
<!-- backwards compatibility -->
<a id="schemataskconfig"></a>
<a id="schema_TaskConfig"></a>
<a id="tocStaskconfig"></a>
<a id="tocstaskconfig"></a>

```json
{
  "LanguageCode": {},
  "DocumentClassificationConfig": {
    "Mode": {},
    "Labels": {}
  },
  "EntityRecognitionConfig": {
    "EntityTypes": {}
  }
}
```

Configuration about the custom classifier associated with the flywheel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageCode|object|true|none|none|
|DocumentClassificationConfig|object|false|none|none|
|EntityRecognitionConfig|object|false|none|none|

<h2 id="tocS_ModelType">ModelType</h2>
<!-- backwards compatibility -->
<a id="schemamodeltype"></a>
<a id="schema_ModelType"></a>
<a id="tocSmodeltype"></a>
<a id="tocsmodeltype"></a>

```json
"DOCUMENT_CLASSIFIER"
```

<h2 id="tocS_FlywheelS3Uri">FlywheelS3Uri</h2>
<!-- backwards compatibility -->
<a id="schemaflywheels3uri"></a>
<a id="schema_FlywheelS3Uri"></a>
<a id="tocSflywheels3uri"></a>
<a id="tocsflywheels3uri"></a>

```json
"string"
```

<h2 id="tocS_DataSecurityConfig">DataSecurityConfig</h2>
<!-- backwards compatibility -->
<a id="schemadatasecurityconfig"></a>
<a id="schema_DataSecurityConfig"></a>
<a id="tocSdatasecurityconfig"></a>
<a id="tocsdatasecurityconfig"></a>

```json
{
  "ModelKmsKeyId": {},
  "VolumeKmsKeyId": {},
  "DataLakeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  }
}
```

Data security configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelKmsKeyId|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|DataLakeKmsKeyId|object|false|none|none|
|VpcConfig|[VpcConfig](#schemavpcconfig)|false|none| Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. |

<h2 id="tocS_DatasetAugmentedManifestsListItem">DatasetAugmentedManifestsListItem</h2>
<!-- backwards compatibility -->
<a id="schemadatasetaugmentedmanifestslistitem"></a>
<a id="schema_DatasetAugmentedManifestsListItem"></a>
<a id="tocSdatasetaugmentedmanifestslistitem"></a>
<a id="tocsdatasetaugmentedmanifestslistitem"></a>

```json
{
  "AttributeNames": {},
  "S3Uri": {},
  "AnnotationDataS3Uri": {},
  "SourceDocumentsS3Uri": {},
  "DocumentType": {}
}
```

An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeNames|object|true|none|none|
|S3Uri|object|true|none|none|
|AnnotationDataS3Uri|object|false|none|none|
|SourceDocumentsS3Uri|object|false|none|none|
|DocumentType|object|false|none|none|

<h2 id="tocS_DatasetAugmentedManifestsList">DatasetAugmentedManifestsList</h2>
<!-- backwards compatibility -->
<a id="schemadatasetaugmentedmanifestslist"></a>
<a id="schema_DatasetAugmentedManifestsList"></a>
<a id="tocSdatasetaugmentedmanifestslist"></a>
<a id="tocsdatasetaugmentedmanifestslist"></a>

```json
[
  {
    "AttributeNames": {},
    "S3Uri": {},
    "AnnotationDataS3Uri": {},
    "SourceDocumentsS3Uri": {},
    "DocumentType": {}
  }
]
```

<h2 id="tocS_DatasetDataFormat">DatasetDataFormat</h2>
<!-- backwards compatibility -->
<a id="schemadatasetdataformat"></a>
<a id="schema_DatasetDataFormat"></a>
<a id="tocSdatasetdataformat"></a>
<a id="tocsdatasetdataformat"></a>

```json
"COMPREHEND_CSV"
```

<h2 id="tocS_LabelDelimiter">LabelDelimiter</h2>
<!-- backwards compatibility -->
<a id="schemalabeldelimiter"></a>
<a id="schema_LabelDelimiter"></a>
<a id="tocSlabeldelimiter"></a>
<a id="tocslabeldelimiter"></a>

```json
"s"
```

<h2 id="tocS_DatasetDocumentClassifierInputDataConfig">DatasetDocumentClassifierInputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemadatasetdocumentclassifierinputdataconfig"></a>
<a id="schema_DatasetDocumentClassifierInputDataConfig"></a>
<a id="tocSdatasetdocumentclassifierinputdataconfig"></a>
<a id="tocsdatasetdocumentclassifierinputdataconfig"></a>

```json
{
  "S3Uri": {},
  "LabelDelimiter": {}
}
```

<p>Describes the dataset input data configuration for a document classifier model.</p> <p>For more information on how the input file is formatted, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a> in the Comprehend Developer Guide. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|
|LabelDelimiter|object|false|none|none|

<h2 id="tocS_DatasetEntityRecognizerAnnotations">DatasetEntityRecognizerAnnotations</h2>
<!-- backwards compatibility -->
<a id="schemadatasetentityrecognizerannotations"></a>
<a id="schema_DatasetEntityRecognizerAnnotations"></a>
<a id="tocSdatasetentityrecognizerannotations"></a>
<a id="tocsdatasetentityrecognizerannotations"></a>

```json
{
  "S3Uri": {}
}
```

Describes the annotations associated with a entity recognizer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|

<h2 id="tocS_InputFormat">InputFormat</h2>
<!-- backwards compatibility -->
<a id="schemainputformat"></a>
<a id="schema_InputFormat"></a>
<a id="tocSinputformat"></a>
<a id="tocsinputformat"></a>

```json
"ONE_DOC_PER_FILE"
```

<h2 id="tocS_DatasetEntityRecognizerDocuments">DatasetEntityRecognizerDocuments</h2>
<!-- backwards compatibility -->
<a id="schemadatasetentityrecognizerdocuments"></a>
<a id="schema_DatasetEntityRecognizerDocuments"></a>
<a id="tocSdatasetentityrecognizerdocuments"></a>
<a id="tocsdatasetentityrecognizerdocuments"></a>

```json
{
  "S3Uri": {},
  "InputFormat": {}
}
```

Describes the documents submitted with a dataset for an entity recognizer model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|
|InputFormat|object|false|none|none|

<h2 id="tocS_DatasetEntityRecognizerEntityList">DatasetEntityRecognizerEntityList</h2>
<!-- backwards compatibility -->
<a id="schemadatasetentityrecognizerentitylist"></a>
<a id="schema_DatasetEntityRecognizerEntityList"></a>
<a id="tocSdatasetentityrecognizerentitylist"></a>
<a id="tocsdatasetentityrecognizerentitylist"></a>

```json
{
  "S3Uri": {}
}
```

<p>Describes the dataset entity list for an entity recognizer model.</p> <p>For more information on how the input file is formatted, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-training-data-cer.html">Preparing training data</a> in the Comprehend Developer Guide. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|

<h2 id="tocS_DatasetEntityRecognizerInputDataConfig">DatasetEntityRecognizerInputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemadatasetentityrecognizerinputdataconfig"></a>
<a id="schema_DatasetEntityRecognizerInputDataConfig"></a>
<a id="tocSdatasetentityrecognizerinputdataconfig"></a>
<a id="tocsdatasetentityrecognizerinputdataconfig"></a>

```json
{
  "Annotations": {
    "S3Uri": {}
  },
  "Documents": {
    "S3Uri": {},
    "InputFormat": {}
  },
  "EntityList": {
    "S3Uri": {}
  }
}
```

Specifies the format and location of the input data. You must provide either the <code>Annotations</code> parameter or the <code>EntityList</code> parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Annotations|object|false|none|none|
|Documents|object|true|none|none|
|EntityList|object|false|none|none|

<h2 id="tocS_DatasetStatus">DatasetStatus</h2>
<!-- backwards compatibility -->
<a id="schemadatasetstatus"></a>
<a id="schema_DatasetStatus"></a>
<a id="tocSdatasetstatus"></a>
<a id="tocsdatasetstatus"></a>

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

<h2 id="tocS_DatasetFilter">DatasetFilter</h2>
<!-- backwards compatibility -->
<a id="schemadatasetfilter"></a>
<a id="schema_DatasetFilter"></a>
<a id="tocSdatasetfilter"></a>
<a id="tocsdatasetfilter"></a>

```json
{
  "Status": {},
  "DatasetType": {},
  "CreationTimeAfter": {},
  "CreationTimeBefore": {}
}
```

Filter the datasets based on creation time or dataset status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|DatasetType|object|false|none|none|
|CreationTimeAfter|object|false|none|none|
|CreationTimeBefore|object|false|none|none|

<h2 id="tocS_NumberOfDocuments">NumberOfDocuments</h2>
<!-- backwards compatibility -->
<a id="schemanumberofdocuments"></a>
<a id="schema_NumberOfDocuments"></a>
<a id="tocSnumberofdocuments"></a>
<a id="tocsnumberofdocuments"></a>

```json
0
```

<h2 id="tocS_DatasetProperties">DatasetProperties</h2>
<!-- backwards compatibility -->
<a id="schemadatasetproperties"></a>
<a id="schema_DatasetProperties"></a>
<a id="tocSdatasetproperties"></a>
<a id="tocsdatasetproperties"></a>

```json
{
  "DatasetArn": {},
  "DatasetName": {},
  "DatasetType": {},
  "DatasetS3Uri": {},
  "Description": {},
  "Status": {},
  "Message": {},
  "NumberOfDocuments": {},
  "CreationTime": {},
  "EndTime": {}
}
```

Properties associated with the dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetArn|object|false|none|none|
|DatasetName|object|false|none|none|
|DatasetType|object|false|none|none|
|DatasetS3Uri|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|NumberOfDocuments|object|false|none|none|
|CreationTime|object|false|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_DatasetPropertiesList">DatasetPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemadatasetpropertieslist"></a>
<a id="schema_DatasetPropertiesList"></a>
<a id="tocSdatasetpropertieslist"></a>
<a id="tocsdatasetpropertieslist"></a>

```json
[
  {
    "DatasetArn": {},
    "DatasetName": {},
    "DatasetType": {},
    "DatasetS3Uri": {},
    "Description": {},
    "Status": {},
    "Message": {},
    "NumberOfDocuments": {},
    "CreationTime": {},
    "EndTime": {}
  }
]
```

<h2 id="tocS_PolicyRevisionId">PolicyRevisionId</h2>
<!-- backwards compatibility -->
<a id="schemapolicyrevisionid"></a>
<a id="schema_PolicyRevisionId"></a>
<a id="tocSpolicyrevisionid"></a>
<a id="tocspolicyrevisionid"></a>

```json
"string"
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

<h2 id="tocS_DocumentClassificationJobProperties">DocumentClassificationJobProperties</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassificationjobproperties"></a>
<a id="schema_DocumentClassificationJobProperties"></a>
<a id="tocSdocumentclassificationjobproperties"></a>
<a id="tocsdocumentclassificationjobproperties"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobName": {},
  "JobStatus": {},
  "Message": {},
  "SubmitTime": {},
  "EndTime": {},
  "DocumentClassifierArn": {},
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "FlywheelArn": {}
}
```

Provides information about a document classification job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|Message|object|false|none|none|
|SubmitTime|object|false|none|none|
|EndTime|object|false|none|none|
|DocumentClassifierArn|object|false|none|none|
|InputDataConfig|object|false|none|none|
|OutputDataConfig|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|object|false|none|none|
|FlywheelArn|object|false|none|none|

<h2 id="tocS_DocumentClassifierProperties">DocumentClassifierProperties</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassifierproperties"></a>
<a id="schema_DocumentClassifierProperties"></a>
<a id="tocSdocumentclassifierproperties"></a>
<a id="tocsdocumentclassifierproperties"></a>

```json
{
  "DocumentClassifierArn": {},
  "LanguageCode": {},
  "Status": {},
  "Message": {},
  "SubmitTime": {},
  "EndTime": {},
  "TrainingStartTime": {},
  "TrainingEndTime": {},
  "InputDataConfig": {
    "DataFormat": {},
    "S3Uri": {},
    "TestS3Uri": {},
    "LabelDelimiter": {},
    "AugmentedManifests": {},
    "DocumentType": {},
    "Documents": {
      "S3Uri": {},
      "TestS3Uri": {}
    },
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {},
    "FlywheelStatsS3Prefix": {}
  },
  "ClassifierMetadata": {
    "NumberOfLabels": {},
    "NumberOfTrainedDocuments": {},
    "NumberOfTestDocuments": {},
    "EvaluationMetrics": {
      "Accuracy": {},
      "Precision": {},
      "Recall": {},
      "F1Score": {},
      "MicroPrecision": {},
      "MicroRecall": {},
      "MicroF1Score": {},
      "HammingLoss": {}
    }
  },
  "DataAccessRoleArn": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "Mode": {},
  "ModelKmsKeyId": {},
  "VersionName": {},
  "SourceModelArn": {},
  "FlywheelArn": {}
}
```

Provides information about a document classifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentClassifierArn|object|false|none|none|
|LanguageCode|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|SubmitTime|object|false|none|none|
|EndTime|object|false|none|none|
|TrainingStartTime|object|false|none|none|
|TrainingEndTime|object|false|none|none|
|InputDataConfig|object|false|none|none|
|OutputDataConfig|object|false|none|none|
|ClassifierMetadata|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|object|false|none|none|
|Mode|object|false|none|none|
|ModelKmsKeyId|object|false|none|none|
|VersionName|object|false|none|none|
|SourceModelArn|object|false|none|none|
|FlywheelArn|object|false|none|none|

<h2 id="tocS_DominantLanguageDetectionJobProperties">DominantLanguageDetectionJobProperties</h2>
<!-- backwards compatibility -->
<a id="schemadominantlanguagedetectionjobproperties"></a>
<a id="schema_DominantLanguageDetectionJobProperties"></a>
<a id="tocSdominantlanguagedetectionjobproperties"></a>
<a id="tocsdominantlanguagedetectionjobproperties"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobName": {},
  "JobStatus": {},
  "Message": {},
  "SubmitTime": {},
  "EndTime": {},
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "DataAccessRoleArn": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  }
}
```

Provides information about a dominant language detection job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|Message|object|false|none|none|
|SubmitTime|object|false|none|none|
|EndTime|object|false|none|none|
|InputDataConfig|object|false|none|none|
|OutputDataConfig|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|object|false|none|none|

<h2 id="tocS_EndpointProperties">EndpointProperties</h2>
<!-- backwards compatibility -->
<a id="schemaendpointproperties"></a>
<a id="schema_EndpointProperties"></a>
<a id="tocSendpointproperties"></a>
<a id="tocsendpointproperties"></a>

```json
{
  "EndpointArn": {},
  "Status": {},
  "Message": {},
  "ModelArn": {},
  "DesiredModelArn": {},
  "DesiredInferenceUnits": {},
  "CurrentInferenceUnits": {},
  "CreationTime": {},
  "LastModifiedTime": {},
  "DataAccessRoleArn": {},
  "DesiredDataAccessRoleArn": {},
  "FlywheelArn": {}
}
```

Specifies information about the specified endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|ModelArn|object|false|none|none|
|DesiredModelArn|object|false|none|none|
|DesiredInferenceUnits|object|false|none|none|
|CurrentInferenceUnits|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|DesiredDataAccessRoleArn|object|false|none|none|
|FlywheelArn|object|false|none|none|

<h2 id="tocS_EntitiesDetectionJobProperties">EntitiesDetectionJobProperties</h2>
<!-- backwards compatibility -->
<a id="schemaentitiesdetectionjobproperties"></a>
<a id="schema_EntitiesDetectionJobProperties"></a>
<a id="tocSentitiesdetectionjobproperties"></a>
<a id="tocsentitiesdetectionjobproperties"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobName": {},
  "JobStatus": {},
  "Message": {},
  "SubmitTime": {},
  "EndTime": {},
  "EntityRecognizerArn": {},
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "LanguageCode": {},
  "DataAccessRoleArn": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "FlywheelArn": {}
}
```

Provides information about an entities detection job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|Message|object|false|none|none|
|SubmitTime|object|false|none|none|
|EndTime|object|false|none|none|
|EntityRecognizerArn|object|false|none|none|
|InputDataConfig|object|false|none|none|
|OutputDataConfig|object|false|none|none|
|LanguageCode|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|object|false|none|none|
|FlywheelArn|object|false|none|none|

<h2 id="tocS_EntityRecognizerProperties">EntityRecognizerProperties</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizerproperties"></a>
<a id="schema_EntityRecognizerProperties"></a>
<a id="tocSentityrecognizerproperties"></a>
<a id="tocsentityrecognizerproperties"></a>

```json
{
  "EntityRecognizerArn": {},
  "LanguageCode": {},
  "Status": {},
  "Message": {},
  "SubmitTime": {},
  "EndTime": {},
  "TrainingStartTime": {},
  "TrainingEndTime": {},
  "InputDataConfig": {
    "DataFormat": {},
    "EntityTypes": {},
    "Documents": {
      "S3Uri": {},
      "TestS3Uri": {},
      "InputFormat": {}
    },
    "Annotations": {
      "S3Uri": {},
      "TestS3Uri": {}
    },
    "EntityList": {
      "S3Uri": {}
    },
    "AugmentedManifests": {}
  },
  "RecognizerMetadata": {
    "NumberOfTrainedDocuments": {},
    "NumberOfTestDocuments": {},
    "EvaluationMetrics": {
      "Precision": {},
      "Recall": {},
      "F1Score": {}
    },
    "EntityTypes": {}
  },
  "DataAccessRoleArn": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  },
  "ModelKmsKeyId": {},
  "VersionName": {},
  "SourceModelArn": {},
  "FlywheelArn": {},
  "OutputDataConfig": {
    "FlywheelStatsS3Prefix": {}
  }
}
```

Describes information about an entity recognizer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityRecognizerArn|object|false|none|none|
|LanguageCode|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|SubmitTime|object|false|none|none|
|EndTime|object|false|none|none|
|TrainingStartTime|object|false|none|none|
|TrainingEndTime|object|false|none|none|
|InputDataConfig|object|false|none|none|
|RecognizerMetadata|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|object|false|none|none|
|ModelKmsKeyId|object|false|none|none|
|VersionName|object|false|none|none|
|SourceModelArn|object|false|none|none|
|FlywheelArn|object|false|none|none|
|OutputDataConfig|object|false|none|none|

<h2 id="tocS_EventsDetectionJobProperties">EventsDetectionJobProperties</h2>
<!-- backwards compatibility -->
<a id="schemaeventsdetectionjobproperties"></a>
<a id="schema_EventsDetectionJobProperties"></a>
<a id="tocSeventsdetectionjobproperties"></a>
<a id="tocseventsdetectionjobproperties"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobName": {},
  "JobStatus": {},
  "Message": {},
  "SubmitTime": {},
  "EndTime": {},
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "LanguageCode": {},
  "DataAccessRoleArn": {},
  "TargetEventTypes": {}
}
```

Provides information about an events detection job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|Message|object|false|none|none|
|SubmitTime|object|false|none|none|
|EndTime|object|false|none|none|
|InputDataConfig|object|false|none|none|
|OutputDataConfig|object|false|none|none|
|LanguageCode|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|TargetEventTypes|object|false|none|none|

<h2 id="tocS_FlywheelIterationId">FlywheelIterationId</h2>
<!-- backwards compatibility -->
<a id="schemaflywheeliterationid"></a>
<a id="schema_FlywheelIterationId"></a>
<a id="tocSflywheeliterationid"></a>
<a id="tocsflywheeliterationid"></a>

```json
"string"
```

<h2 id="tocS_FlywheelIterationProperties">FlywheelIterationProperties</h2>
<!-- backwards compatibility -->
<a id="schemaflywheeliterationproperties"></a>
<a id="schema_FlywheelIterationProperties"></a>
<a id="tocSflywheeliterationproperties"></a>
<a id="tocsflywheeliterationproperties"></a>

```json
{
  "FlywheelArn": {},
  "FlywheelIterationId": {},
  "CreationTime": {},
  "EndTime": {},
  "Status": {},
  "Message": {},
  "EvaluatedModelArn": {},
  "EvaluatedModelMetrics": {
    "AverageF1Score": {},
    "AveragePrecision": {},
    "AverageRecall": {},
    "AverageAccuracy": {}
  },
  "TrainedModelArn": {},
  "TrainedModelMetrics": {
    "AverageF1Score": {},
    "AveragePrecision": {},
    "AverageRecall": {},
    "AverageAccuracy": {}
  },
  "EvaluationManifestS3Prefix": {}
}
```

The configuration properties of a flywheel iteration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelArn|object|false|none|none|
|FlywheelIterationId|object|false|none|none|
|CreationTime|object|false|none|none|
|EndTime|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|EvaluatedModelArn|object|false|none|none|
|EvaluatedModelMetrics|[FlywheelModelEvaluationMetrics](#schemaflywheelmodelevaluationmetrics)|false|none|The evaluation metrics associated with the evaluated model.|
|TrainedModelArn|object|false|none|none|
|TrainedModelMetrics|object|false|none|none|
|EvaluationManifestS3Prefix|object|false|none|none|

<h2 id="tocS_FlywheelProperties">FlywheelProperties</h2>
<!-- backwards compatibility -->
<a id="schemaflywheelproperties"></a>
<a id="schema_FlywheelProperties"></a>
<a id="tocSflywheelproperties"></a>
<a id="tocsflywheelproperties"></a>

```json
{
  "FlywheelArn": {},
  "ActiveModelArn": {},
  "DataAccessRoleArn": {},
  "TaskConfig": {
    "LanguageCode": {},
    "DocumentClassificationConfig": {
      "Mode": {},
      "Labels": {}
    },
    "EntityRecognitionConfig": {
      "EntityTypes": {}
    }
  },
  "DataLakeS3Uri": {},
  "DataSecurityConfig": {
    "ModelKmsKeyId": {},
    "VolumeKmsKeyId": {},
    "DataLakeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    }
  },
  "Status": {},
  "ModelType": {},
  "Message": {},
  "CreationTime": {},
  "LastModifiedTime": {},
  "LatestFlywheelIteration": {}
}
```

The flywheel properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelArn|object|false|none|none|
|ActiveModelArn|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|TaskConfig|object|false|none|none|
|DataLakeS3Uri|object|false|none|none|
|DataSecurityConfig|object|false|none|none|
|Status|object|false|none|none|
|ModelType|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|LatestFlywheelIteration|object|false|none|none|

<h2 id="tocS_KeyPhrasesDetectionJobProperties">KeyPhrasesDetectionJobProperties</h2>
<!-- backwards compatibility -->
<a id="schemakeyphrasesdetectionjobproperties"></a>
<a id="schema_KeyPhrasesDetectionJobProperties"></a>
<a id="tocSkeyphrasesdetectionjobproperties"></a>
<a id="tocskeyphrasesdetectionjobproperties"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobName": {},
  "JobStatus": {},
  "Message": {},
  "SubmitTime": {},
  "EndTime": {},
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "LanguageCode": {},
  "DataAccessRoleArn": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  }
}
```

Provides information about a key phrases detection job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|Message|object|false|none|none|
|SubmitTime|object|false|none|none|
|EndTime|object|false|none|none|
|InputDataConfig|object|false|none|none|
|OutputDataConfig|object|false|none|none|
|LanguageCode|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|object|false|none|none|

<h2 id="tocS_PiiEntitiesDetectionJobProperties">PiiEntitiesDetectionJobProperties</h2>
<!-- backwards compatibility -->
<a id="schemapiientitiesdetectionjobproperties"></a>
<a id="schema_PiiEntitiesDetectionJobProperties"></a>
<a id="tocSpiientitiesdetectionjobproperties"></a>
<a id="tocspiientitiesdetectionjobproperties"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobName": {},
  "JobStatus": {},
  "Message": {},
  "SubmitTime": {},
  "EndTime": {},
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "RedactionConfig": {
    "PiiEntityTypes": {},
    "MaskMode": {},
    "MaskCharacter": {}
  },
  "LanguageCode": {},
  "DataAccessRoleArn": {},
  "Mode": {}
}
```

Provides information about a PII entities detection job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|Message|object|false|none|none|
|SubmitTime|object|false|none|none|
|EndTime|object|false|none|none|
|InputDataConfig|object|false|none|none|
|OutputDataConfig|object|false|none|none|
|RedactionConfig|object|false|none|none|
|LanguageCode|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|Mode|object|false|none|none|

<h2 id="tocS_SentimentDetectionJobProperties">SentimentDetectionJobProperties</h2>
<!-- backwards compatibility -->
<a id="schemasentimentdetectionjobproperties"></a>
<a id="schema_SentimentDetectionJobProperties"></a>
<a id="tocSsentimentdetectionjobproperties"></a>
<a id="tocssentimentdetectionjobproperties"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobName": {},
  "JobStatus": {},
  "Message": {},
  "SubmitTime": {},
  "EndTime": {},
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "LanguageCode": {},
  "DataAccessRoleArn": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  }
}
```

Provides information about a sentiment detection job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|Message|object|false|none|none|
|SubmitTime|object|false|none|none|
|EndTime|object|false|none|none|
|InputDataConfig|object|false|none|none|
|OutputDataConfig|object|false|none|none|
|LanguageCode|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|object|false|none|none|

<h2 id="tocS_TargetedSentimentDetectionJobProperties">TargetedSentimentDetectionJobProperties</h2>
<!-- backwards compatibility -->
<a id="schematargetedsentimentdetectionjobproperties"></a>
<a id="schema_TargetedSentimentDetectionJobProperties"></a>
<a id="tocStargetedsentimentdetectionjobproperties"></a>
<a id="tocstargetedsentimentdetectionjobproperties"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobName": {},
  "JobStatus": {},
  "Message": {},
  "SubmitTime": {},
  "EndTime": {},
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "LanguageCode": {},
  "DataAccessRoleArn": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  }
}
```

Provides information about a targeted sentiment detection job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|Message|object|false|none|none|
|SubmitTime|object|false|none|none|
|EndTime|object|false|none|none|
|InputDataConfig|[InputDataConfig](#schemainputdataconfig)|false|none|The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis.|
|OutputDataConfig|[OutputDataConfig](#schemaoutputdataconfig)|false|none|<p>Provides configuration parameters for the output of inference jobs.</p> <p/>|
|LanguageCode|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|[VpcConfig](#schemavpcconfig)|false|none| Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. |

<h2 id="tocS_TopicsDetectionJobProperties">TopicsDetectionJobProperties</h2>
<!-- backwards compatibility -->
<a id="schematopicsdetectionjobproperties"></a>
<a id="schema_TopicsDetectionJobProperties"></a>
<a id="tocStopicsdetectionjobproperties"></a>
<a id="tocstopicsdetectionjobproperties"></a>

```json
{
  "JobId": {},
  "JobArn": {},
  "JobName": {},
  "JobStatus": {},
  "Message": {},
  "SubmitTime": {},
  "EndTime": {},
  "InputDataConfig": {
    "S3Uri": {},
    "InputFormat": {},
    "DocumentReaderConfig": {
      "DocumentReadAction": {},
      "DocumentReadMode": {},
      "FeatureTypes": {}
    }
  },
  "OutputDataConfig": {
    "S3Uri": {},
    "KmsKeyId": {}
  },
  "NumberOfTopics": {},
  "DataAccessRoleArn": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  }
}
```

Provides information about a topic detection job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|JobArn|object|false|none|none|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|Message|object|false|none|none|
|SubmitTime|object|false|none|none|
|EndTime|object|false|none|none|
|InputDataConfig|object|false|none|none|
|OutputDataConfig|object|false|none|none|
|NumberOfTopics|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|object|false|none|none|

<h2 id="tocS_EntityRecognizerEndpointArn">EntityRecognizerEndpointArn</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizerendpointarn"></a>
<a id="schema_EntityRecognizerEndpointArn"></a>
<a id="tocSentityrecognizerendpointarn"></a>
<a id="tocsentityrecognizerendpointarn"></a>

```json
"string"
```

<h2 id="tocS_ListOfBlocks">ListOfBlocks</h2>
<!-- backwards compatibility -->
<a id="schemalistofblocks"></a>
<a id="schema_ListOfBlocks"></a>
<a id="tocSlistofblocks"></a>
<a id="tocslistofblocks"></a>

```json
[
  {
    "Id": {},
    "BlockType": {},
    "Text": {},
    "Page": {},
    "Geometry": {
      "BoundingBox": {
        "Height": {},
        "Left": {},
        "Top": {},
        "Width": {}
      },
      "Polygon": {}
    },
    "Relationships": {}
  }
]
```

<h2 id="tocS_ListOfPiiEntities">ListOfPiiEntities</h2>
<!-- backwards compatibility -->
<a id="schemalistofpiientities"></a>
<a id="schema_ListOfPiiEntities"></a>
<a id="tocSlistofpiientities"></a>
<a id="tocslistofpiientities"></a>

```json
[
  {
    "Score": {},
    "Type": {},
    "BeginOffset": {},
    "EndOffset": {}
  }
]
```

<h2 id="tocS_DocumentClass">DocumentClass</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclass"></a>
<a id="schema_DocumentClass"></a>
<a id="tocSdocumentclass"></a>
<a id="tocsdocumentclass"></a>

```json
{
  "Name": {},
  "Score": {},
  "Page": {}
}
```

Specifies the class that categorizes the document being analyzed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Score|object|false|none|none|
|Page|object|false|none|none|

<h2 id="tocS_LabelsList">LabelsList</h2>
<!-- backwards compatibility -->
<a id="schemalabelslist"></a>
<a id="schema_LabelsList"></a>
<a id="tocSlabelslist"></a>
<a id="tocslabelslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DocumentClassificationConfig">DocumentClassificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassificationconfig"></a>
<a id="schema_DocumentClassificationConfig"></a>
<a id="tocSdocumentclassificationconfig"></a>
<a id="tocsdocumentclassificationconfig"></a>

```json
{
  "Mode": {},
  "Labels": {}
}
```

Configuration required for a custom classification model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mode|object|true|none|none|
|Labels|object|false|none|none|

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

<h2 id="tocS_DocumentClassificationJobFilter">DocumentClassificationJobFilter</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassificationjobfilter"></a>
<a id="schema_DocumentClassificationJobFilter"></a>
<a id="tocSdocumentclassificationjobfilter"></a>
<a id="tocsdocumentclassificationjobfilter"></a>

```json
{
  "JobName": {},
  "JobStatus": {},
  "SubmitTimeBefore": {},
  "SubmitTimeAfter": {}
}
```

Provides information for filtering a list of document classification jobs. For more information, see the operation. You can provide only one filter parameter in each request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|SubmitTimeBefore|object|false|none|none|
|SubmitTimeAfter|object|false|none|none|

<h2 id="tocS_InputDataConfig">InputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemainputdataconfig"></a>
<a id="schema_InputDataConfig"></a>
<a id="tocSinputdataconfig"></a>
<a id="tocsinputdataconfig"></a>

```json
{
  "S3Uri": {},
  "InputFormat": {},
  "DocumentReaderConfig": {
    "DocumentReadAction": {},
    "DocumentReadMode": {},
    "FeatureTypes": {}
  }
}
```

The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|
|InputFormat|object|false|none|none|
|DocumentReaderConfig|object|false|none|none|

<h2 id="tocS_OutputDataConfig">OutputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoutputdataconfig"></a>
<a id="schema_OutputDataConfig"></a>
<a id="tocSoutputdataconfig"></a>
<a id="tocsoutputdataconfig"></a>

```json
{
  "S3Uri": {},
  "KmsKeyId": {}
}
```

<p>Provides configuration parameters for the output of inference jobs.</p> <p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|
|KmsKeyId|object|false|none|none|

<h2 id="tocS_DocumentClassificationJobPropertiesList">DocumentClassificationJobPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassificationjobpropertieslist"></a>
<a id="schema_DocumentClassificationJobPropertiesList"></a>
<a id="tocSdocumentclassificationjobpropertieslist"></a>
<a id="tocsdocumentclassificationjobpropertieslist"></a>

```json
[
  {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "DocumentClassifierArn": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "FlywheelArn": {}
  }
]
```

<h2 id="tocS_DocumentClassifierAugmentedManifestsList">DocumentClassifierAugmentedManifestsList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassifieraugmentedmanifestslist"></a>
<a id="schema_DocumentClassifierAugmentedManifestsList"></a>
<a id="tocSdocumentclassifieraugmentedmanifestslist"></a>
<a id="tocsdocumentclassifieraugmentedmanifestslist"></a>

```json
[
  {
    "S3Uri": {},
    "Split": {},
    "AttributeNames": {},
    "AnnotationDataS3Uri": {},
    "SourceDocumentsS3Uri": {},
    "DocumentType": {}
  }
]
```

<h2 id="tocS_DocumentClassifierDataFormat">DocumentClassifierDataFormat</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassifierdataformat"></a>
<a id="schema_DocumentClassifierDataFormat"></a>
<a id="tocSdocumentclassifierdataformat"></a>
<a id="tocsdocumentclassifierdataformat"></a>

```json
"COMPREHEND_CSV"
```

<h2 id="tocS_DocumentClassifierDocumentTypeFormat">DocumentClassifierDocumentTypeFormat</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassifierdocumenttypeformat"></a>
<a id="schema_DocumentClassifierDocumentTypeFormat"></a>
<a id="tocSdocumentclassifierdocumenttypeformat"></a>
<a id="tocsdocumentclassifierdocumenttypeformat"></a>

```json
"PLAIN_TEXT_DOCUMENT"
```

<h2 id="tocS_DocumentClassifierDocuments">DocumentClassifierDocuments</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassifierdocuments"></a>
<a id="schema_DocumentClassifierDocuments"></a>
<a id="tocSdocumentclassifierdocuments"></a>
<a id="tocsdocumentclassifierdocuments"></a>

```json
{
  "S3Uri": {},
  "TestS3Uri": {}
}
```

The location of the training documents. This parameter is required in a request to create a native classifier model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|
|TestS3Uri|object|false|none|none|

<h2 id="tocS_ModelStatus">ModelStatus</h2>
<!-- backwards compatibility -->
<a id="schemamodelstatus"></a>
<a id="schema_ModelStatus"></a>
<a id="tocSmodelstatus"></a>
<a id="tocsmodelstatus"></a>

```json
"SUBMITTED"
```

<h2 id="tocS_DocumentClassifierFilter">DocumentClassifierFilter</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassifierfilter"></a>
<a id="schema_DocumentClassifierFilter"></a>
<a id="tocSdocumentclassifierfilter"></a>
<a id="tocsdocumentclassifierfilter"></a>

```json
{
  "Status": {},
  "DocumentClassifierName": {},
  "SubmitTimeBefore": {},
  "SubmitTimeAfter": {}
}
```

Provides information for filtering a list of document classifiers. You can only specify one filtering parameter in a request. For more information, see the <code>ListDocumentClassifiers</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|DocumentClassifierName|object|false|none|none|
|SubmitTimeBefore|object|false|none|none|
|SubmitTimeAfter|object|false|none|none|

<h2 id="tocS_DocumentClassifierPropertiesList">DocumentClassifierPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassifierpropertieslist"></a>
<a id="schema_DocumentClassifierPropertiesList"></a>
<a id="tocSdocumentclassifierpropertieslist"></a>
<a id="tocsdocumentclassifierpropertieslist"></a>

```json
[
  {
    "DocumentClassifierArn": {},
    "LanguageCode": {},
    "Status": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "TrainingStartTime": {},
    "TrainingEndTime": {},
    "InputDataConfig": {
      "DataFormat": {},
      "S3Uri": {},
      "TestS3Uri": {},
      "LabelDelimiter": {},
      "AugmentedManifests": {},
      "DocumentType": {},
      "Documents": {
        "S3Uri": {},
        "TestS3Uri": {}
      },
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {},
      "FlywheelStatsS3Prefix": {}
    },
    "ClassifierMetadata": {
      "NumberOfLabels": {},
      "NumberOfTrainedDocuments": {},
      "NumberOfTestDocuments": {},
      "EvaluationMetrics": {
        "Accuracy": {},
        "Precision": {},
        "Recall": {},
        "F1Score": {},
        "MicroPrecision": {},
        "MicroRecall": {},
        "MicroF1Score": {},
        "HammingLoss": {}
      }
    },
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "Mode": {},
    "ModelKmsKeyId": {},
    "VersionName": {},
    "SourceModelArn": {},
    "FlywheelArn": {}
  }
]
```

<h2 id="tocS_DocumentClassifierSummary">DocumentClassifierSummary</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassifiersummary"></a>
<a id="schema_DocumentClassifierSummary"></a>
<a id="tocSdocumentclassifiersummary"></a>
<a id="tocsdocumentclassifiersummary"></a>

```json
{
  "DocumentClassifierName": {},
  "NumberOfVersions": {},
  "LatestVersionCreatedAt": {},
  "LatestVersionName": {},
  "LatestVersionStatus": {}
}
```

Describes information about a document classifier and its versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DocumentClassifierName|object|false|none|none|
|NumberOfVersions|object|false|none|none|
|LatestVersionCreatedAt|object|false|none|none|
|LatestVersionName|object|false|none|none|
|LatestVersionStatus|object|false|none|none|

<h2 id="tocS_DocumentClassifierSummariesList">DocumentClassifierSummariesList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentclassifiersummarieslist"></a>
<a id="schema_DocumentClassifierSummariesList"></a>
<a id="tocSdocumentclassifiersummarieslist"></a>
<a id="tocsdocumentclassifiersummarieslist"></a>

```json
[
  {
    "DocumentClassifierName": {},
    "NumberOfVersions": {},
    "LatestVersionCreatedAt": {},
    "LatestVersionName": {},
    "LatestVersionStatus": {}
  }
]
```

<h2 id="tocS_DocumentLabel">DocumentLabel</h2>
<!-- backwards compatibility -->
<a id="schemadocumentlabel"></a>
<a id="schema_DocumentLabel"></a>
<a id="tocSdocumentlabel"></a>
<a id="tocsdocumentlabel"></a>

```json
{
  "Name": {},
  "Score": {},
  "Page": {}
}
```

Specifies one of the label or labels that categorize the document being analyzed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Score|object|false|none|none|
|Page|object|false|none|none|

<h2 id="tocS_ListOfExtractedCharacters">ListOfExtractedCharacters</h2>
<!-- backwards compatibility -->
<a id="schemalistofextractedcharacters"></a>
<a id="schema_ListOfExtractedCharacters"></a>
<a id="tocSlistofextractedcharacters"></a>
<a id="tocslistofextractedcharacters"></a>

```json
[
  {
    "Page": {},
    "Count": {}
  }
]
```

<h2 id="tocS_DocumentReadAction">DocumentReadAction</h2>
<!-- backwards compatibility -->
<a id="schemadocumentreadaction"></a>
<a id="schema_DocumentReadAction"></a>
<a id="tocSdocumentreadaction"></a>
<a id="tocsdocumentreadaction"></a>

```json
"TEXTRACT_DETECT_DOCUMENT_TEXT"
```

<h2 id="tocS_DocumentReadFeatureTypes">DocumentReadFeatureTypes</h2>
<!-- backwards compatibility -->
<a id="schemadocumentreadfeaturetypes"></a>
<a id="schema_DocumentReadFeatureTypes"></a>
<a id="tocSdocumentreadfeaturetypes"></a>
<a id="tocsdocumentreadfeaturetypes"></a>

```json
"TABLES"
```

<p>Specifies the type of Amazon Textract features to apply. If you chose <code>TEXTRACT_ANALYZE_DOCUMENT</code> as the read action, you must specify one or both of the following values:</p> <ul> <li> <p> <code>TABLES</code> - Returns additional information about any tables that are detected in the input document. </p> </li> <li> <p> <code>FORMS</code> - Returns additional information about any forms that are detected in the input document. </p> </li> </ul>

<h2 id="tocS_DocumentReadMode">DocumentReadMode</h2>
<!-- backwards compatibility -->
<a id="schemadocumentreadmode"></a>
<a id="schema_DocumentReadMode"></a>
<a id="tocSdocumentreadmode"></a>
<a id="tocsdocumentreadmode"></a>

```json
"SERVICE_DEFAULT"
```

<h2 id="tocS_ListOfDocumentReadFeatureTypes">ListOfDocumentReadFeatureTypes</h2>
<!-- backwards compatibility -->
<a id="schemalistofdocumentreadfeaturetypes"></a>
<a id="schema_ListOfDocumentReadFeatureTypes"></a>
<a id="tocSlistofdocumentreadfeaturetypes"></a>
<a id="tocslistofdocumentreadfeaturetypes"></a>

```json
[
  "TABLES"
]
```

<h2 id="tocS_DocumentType">DocumentType</h2>
<!-- backwards compatibility -->
<a id="schemadocumenttype"></a>
<a id="schema_DocumentType"></a>
<a id="tocSdocumenttype"></a>
<a id="tocsdocumenttype"></a>

```json
"NATIVE_PDF"
```

<h2 id="tocS_DocumentTypeListItem">DocumentTypeListItem</h2>
<!-- backwards compatibility -->
<a id="schemadocumenttypelistitem"></a>
<a id="schema_DocumentTypeListItem"></a>
<a id="tocSdocumenttypelistitem"></a>
<a id="tocsdocumenttypelistitem"></a>

```json
{
  "Page": {},
  "Type": {}
}
```

Document type for each page in the document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Page|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_DominantLanguage">DominantLanguage</h2>
<!-- backwards compatibility -->
<a id="schemadominantlanguage"></a>
<a id="schema_DominantLanguage"></a>
<a id="tocSdominantlanguage"></a>
<a id="tocsdominantlanguage"></a>

```json
{
  "LanguageCode": {},
  "Score": {}
}
```

Returns the code for the dominant language in the input text and the level of confidence that Amazon Comprehend has in the accuracy of the detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageCode|object|false|none|none|
|Score|object|false|none|none|

<h2 id="tocS_DominantLanguageDetectionJobFilter">DominantLanguageDetectionJobFilter</h2>
<!-- backwards compatibility -->
<a id="schemadominantlanguagedetectionjobfilter"></a>
<a id="schema_DominantLanguageDetectionJobFilter"></a>
<a id="tocSdominantlanguagedetectionjobfilter"></a>
<a id="tocsdominantlanguagedetectionjobfilter"></a>

```json
{
  "JobName": {},
  "JobStatus": {},
  "SubmitTimeBefore": {},
  "SubmitTimeAfter": {}
}
```

Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|SubmitTimeBefore|object|false|none|none|
|SubmitTimeAfter|object|false|none|none|

<h2 id="tocS_DominantLanguageDetectionJobPropertiesList">DominantLanguageDetectionJobPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemadominantlanguagedetectionjobpropertieslist"></a>
<a id="schema_DominantLanguageDetectionJobPropertiesList"></a>
<a id="tocSdominantlanguagedetectionjobpropertieslist"></a>
<a id="tocsdominantlanguagedetectionjobpropertieslist"></a>

```json
[
  {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    }
  }
]
```

<h2 id="tocS_EndpointStatus">EndpointStatus</h2>
<!-- backwards compatibility -->
<a id="schemaendpointstatus"></a>
<a id="schema_EndpointStatus"></a>
<a id="tocSendpointstatus"></a>
<a id="tocsendpointstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_EndpointFilter">EndpointFilter</h2>
<!-- backwards compatibility -->
<a id="schemaendpointfilter"></a>
<a id="schema_EndpointFilter"></a>
<a id="tocSendpointfilter"></a>
<a id="tocsendpointfilter"></a>

```json
{
  "ModelArn": {},
  "Status": {},
  "CreationTimeBefore": {},
  "CreationTimeAfter": {}
}
```

The filter used to determine which endpoints are returned. You can filter jobs on their name, model, status, or the date and time that they were created. You can only set one filter at a time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelArn|object|false|none|none|
|Status|object|false|none|none|
|CreationTimeBefore|object|false|none|none|
|CreationTimeAfter|object|false|none|none|

<h2 id="tocS_EndpointPropertiesList">EndpointPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemaendpointpropertieslist"></a>
<a id="schema_EndpointPropertiesList"></a>
<a id="tocSendpointpropertieslist"></a>
<a id="tocsendpointpropertieslist"></a>

```json
[
  {
    "EndpointArn": {},
    "Status": {},
    "Message": {},
    "ModelArn": {},
    "DesiredModelArn": {},
    "DesiredInferenceUnits": {},
    "CurrentInferenceUnits": {},
    "CreationTime": {},
    "LastModifiedTime": {},
    "DataAccessRoleArn": {},
    "DesiredDataAccessRoleArn": {},
    "FlywheelArn": {}
  }
]
```

<h2 id="tocS_EntitiesDetectionJobFilter">EntitiesDetectionJobFilter</h2>
<!-- backwards compatibility -->
<a id="schemaentitiesdetectionjobfilter"></a>
<a id="schema_EntitiesDetectionJobFilter"></a>
<a id="tocSentitiesdetectionjobfilter"></a>
<a id="tocsentitiesdetectionjobfilter"></a>

```json
{
  "JobName": {},
  "JobStatus": {},
  "SubmitTimeBefore": {},
  "SubmitTimeAfter": {}
}
```

Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|SubmitTimeBefore|object|false|none|none|
|SubmitTimeAfter|object|false|none|none|

<h2 id="tocS_EntitiesDetectionJobPropertiesList">EntitiesDetectionJobPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemaentitiesdetectionjobpropertieslist"></a>
<a id="schema_EntitiesDetectionJobPropertiesList"></a>
<a id="tocSentitiesdetectionjobpropertieslist"></a>
<a id="tocsentitiesdetectionjobpropertieslist"></a>

```json
[
  {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "EntityRecognizerArn": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "FlywheelArn": {}
  }
]
```

<h2 id="tocS_EntityType">EntityType</h2>
<!-- backwards compatibility -->
<a id="schemaentitytype"></a>
<a id="schema_EntityType"></a>
<a id="tocSentitytype"></a>
<a id="tocsentitytype"></a>

```json
"PERSON"
```

<h2 id="tocS_ListOfBlockReferences">ListOfBlockReferences</h2>
<!-- backwards compatibility -->
<a id="schemalistofblockreferences"></a>
<a id="schema_ListOfBlockReferences"></a>
<a id="tocSlistofblockreferences"></a>
<a id="tocslistofblockreferences"></a>

```json
[
  {
    "BlockId": {},
    "BeginOffset": {},
    "EndOffset": {},
    "ChildBlocks": {}
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
  "Score": {},
  "Type": {},
  "Text": {},
  "BeginOffset": {},
  "EndOffset": {},
  "BlockReferences": {}
}
```

<p>Provides information about an entity. </p> <p> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Score|object|false|none|none|
|Type|object|false|none|none|
|Text|object|false|none|none|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|
|BlockReferences|object|false|none|none|

<h2 id="tocS_PiiEntityType">PiiEntityType</h2>
<!-- backwards compatibility -->
<a id="schemapiientitytype"></a>
<a id="schema_PiiEntityType"></a>
<a id="tocSpiientitytype"></a>
<a id="tocspiientitytype"></a>

```json
"BANK_ACCOUNT_NUMBER"
```

<h2 id="tocS_EntityLabel">EntityLabel</h2>
<!-- backwards compatibility -->
<a id="schemaentitylabel"></a>
<a id="schema_EntityLabel"></a>
<a id="tocSentitylabel"></a>
<a id="tocsentitylabel"></a>

```json
{
  "Name": {},
  "Score": {}
}
```

Specifies one of the label or labels that categorize the personally identifiable information (PII) entity being analyzed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Score|object|false|none|none|

<h2 id="tocS_EntityTypesList">EntityTypesList</h2>
<!-- backwards compatibility -->
<a id="schemaentitytypeslist"></a>
<a id="schema_EntityTypesList"></a>
<a id="tocSentitytypeslist"></a>
<a id="tocsentitytypeslist"></a>

```json
[
  {
    "Type": {}
  }
]
```

<h2 id="tocS_EntityRecognitionConfig">EntityRecognitionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognitionconfig"></a>
<a id="schema_EntityRecognitionConfig"></a>
<a id="tocSentityrecognitionconfig"></a>
<a id="tocsentityrecognitionconfig"></a>

```json
{
  "EntityTypes": {}
}
```

Configuration required for an entity recognition model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityTypes|object|true|none|none|

<h2 id="tocS_EntityRecognizerAnnotations">EntityRecognizerAnnotations</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizerannotations"></a>
<a id="schema_EntityRecognizerAnnotations"></a>
<a id="tocSentityrecognizerannotations"></a>
<a id="tocsentityrecognizerannotations"></a>

```json
{
  "S3Uri": {},
  "TestS3Uri": {}
}
```

Describes the annotations associated with a entity recognizer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|
|TestS3Uri|object|false|none|none|

<h2 id="tocS_EntityRecognizerAugmentedManifestsList">EntityRecognizerAugmentedManifestsList</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizeraugmentedmanifestslist"></a>
<a id="schema_EntityRecognizerAugmentedManifestsList"></a>
<a id="tocSentityrecognizeraugmentedmanifestslist"></a>
<a id="tocsentityrecognizeraugmentedmanifestslist"></a>

```json
[
  {
    "S3Uri": {},
    "Split": {},
    "AttributeNames": {},
    "AnnotationDataS3Uri": {},
    "SourceDocumentsS3Uri": {},
    "DocumentType": {}
  }
]
```

<h2 id="tocS_EntityRecognizerDataFormat">EntityRecognizerDataFormat</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizerdataformat"></a>
<a id="schema_EntityRecognizerDataFormat"></a>
<a id="tocSentityrecognizerdataformat"></a>
<a id="tocsentityrecognizerdataformat"></a>

```json
"COMPREHEND_CSV"
```

<h2 id="tocS_EntityRecognizerDocuments">EntityRecognizerDocuments</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizerdocuments"></a>
<a id="schema_EntityRecognizerDocuments"></a>
<a id="tocSentityrecognizerdocuments"></a>
<a id="tocsentityrecognizerdocuments"></a>

```json
{
  "S3Uri": {},
  "TestS3Uri": {},
  "InputFormat": {}
}
```

Describes the training documents submitted with an entity recognizer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|
|TestS3Uri|object|false|none|none|
|InputFormat|object|false|none|none|

<h2 id="tocS_EntityRecognizerEntityList">EntityRecognizerEntityList</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizerentitylist"></a>
<a id="schema_EntityRecognizerEntityList"></a>
<a id="tocSentityrecognizerentitylist"></a>
<a id="tocsentityrecognizerentitylist"></a>

```json
{
  "S3Uri": {}
}
```

Describes the entity list submitted with an entity recognizer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|

<h2 id="tocS_EntityRecognizerEvaluationMetrics">EntityRecognizerEvaluationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizerevaluationmetrics"></a>
<a id="schema_EntityRecognizerEvaluationMetrics"></a>
<a id="tocSentityrecognizerevaluationmetrics"></a>
<a id="tocsentityrecognizerevaluationmetrics"></a>

```json
{
  "Precision": {},
  "Recall": {},
  "F1Score": {}
}
```

Detailed information about the accuracy of an entity recognizer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Precision|object|false|none|none|
|Recall|object|false|none|none|
|F1Score|object|false|none|none|

<h2 id="tocS_EntityRecognizerFilter">EntityRecognizerFilter</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizerfilter"></a>
<a id="schema_EntityRecognizerFilter"></a>
<a id="tocSentityrecognizerfilter"></a>
<a id="tocsentityrecognizerfilter"></a>

```json
{
  "Status": {},
  "RecognizerName": {},
  "SubmitTimeBefore": {},
  "SubmitTimeAfter": {}
}
```

Provides information for filtering a list of entity recognizers. You can only specify one filtering parameter in a request. For more information, see the <code>ListEntityRecognizers</code> operation./&gt;

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|RecognizerName|object|false|none|none|
|SubmitTimeBefore|object|false|none|none|
|SubmitTimeAfter|object|false|none|none|

<h2 id="tocS_EntityRecognizerMetadataEntityTypesList">EntityRecognizerMetadataEntityTypesList</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizermetadataentitytypeslist"></a>
<a id="schema_EntityRecognizerMetadataEntityTypesList"></a>
<a id="tocSentityrecognizermetadataentitytypeslist"></a>
<a id="tocsentityrecognizermetadataentitytypeslist"></a>

```json
[
  {
    "Type": {},
    "EvaluationMetrics": {
      "Precision": {},
      "Recall": {},
      "F1Score": {}
    },
    "NumberOfTrainMentions": {}
  }
]
```

<h2 id="tocS_EntityRecognizerMetadata">EntityRecognizerMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizermetadata"></a>
<a id="schema_EntityRecognizerMetadata"></a>
<a id="tocSentityrecognizermetadata"></a>
<a id="tocsentityrecognizermetadata"></a>

```json
{
  "NumberOfTrainedDocuments": {},
  "NumberOfTestDocuments": {},
  "EvaluationMetrics": {
    "Precision": {},
    "Recall": {},
    "F1Score": {}
  },
  "EntityTypes": {}
}
```

Detailed information about an entity recognizer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NumberOfTrainedDocuments|object|false|none|none|
|NumberOfTestDocuments|object|false|none|none|
|EvaluationMetrics|object|false|none|none|
|EntityTypes|object|false|none|none|

<h2 id="tocS_EntityRecognizerMetadataEntityTypesListItem">EntityRecognizerMetadataEntityTypesListItem</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizermetadataentitytypeslistitem"></a>
<a id="schema_EntityRecognizerMetadataEntityTypesListItem"></a>
<a id="tocSentityrecognizermetadataentitytypeslistitem"></a>
<a id="tocsentityrecognizermetadataentitytypeslistitem"></a>

```json
{
  "Type": {},
  "EvaluationMetrics": {
    "Precision": {},
    "Recall": {},
    "F1Score": {}
  },
  "NumberOfTrainMentions": {}
}
```

Individual item from the list of entity types in the metadata of an entity recognizer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|EvaluationMetrics|object|false|none|none|
|NumberOfTrainMentions|object|false|none|none|

<h2 id="tocS_EntityTypesEvaluationMetrics">EntityTypesEvaluationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaentitytypesevaluationmetrics"></a>
<a id="schema_EntityTypesEvaluationMetrics"></a>
<a id="tocSentitytypesevaluationmetrics"></a>
<a id="tocsentitytypesevaluationmetrics"></a>

```json
{
  "Precision": {},
  "Recall": {},
  "F1Score": {}
}
```

Detailed information about the accuracy of an entity recognizer for a specific entity type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Precision|object|false|none|none|
|Recall|object|false|none|none|
|F1Score|object|false|none|none|

<h2 id="tocS_EntityRecognizerOutputDataConfig">EntityRecognizerOutputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizeroutputdataconfig"></a>
<a id="schema_EntityRecognizerOutputDataConfig"></a>
<a id="tocSentityrecognizeroutputdataconfig"></a>
<a id="tocsentityrecognizeroutputdataconfig"></a>

```json
{
  "FlywheelStatsS3Prefix": {}
}
```

Output data configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelStatsS3Prefix|object|false|none|none|

<h2 id="tocS_EntityRecognizerPropertiesList">EntityRecognizerPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizerpropertieslist"></a>
<a id="schema_EntityRecognizerPropertiesList"></a>
<a id="tocSentityrecognizerpropertieslist"></a>
<a id="tocsentityrecognizerpropertieslist"></a>

```json
[
  {
    "EntityRecognizerArn": {},
    "LanguageCode": {},
    "Status": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "TrainingStartTime": {},
    "TrainingEndTime": {},
    "InputDataConfig": {
      "DataFormat": {},
      "EntityTypes": {},
      "Documents": {
        "S3Uri": {},
        "TestS3Uri": {},
        "InputFormat": {}
      },
      "Annotations": {
        "S3Uri": {},
        "TestS3Uri": {}
      },
      "EntityList": {
        "S3Uri": {}
      },
      "AugmentedManifests": {}
    },
    "RecognizerMetadata": {
      "NumberOfTrainedDocuments": {},
      "NumberOfTestDocuments": {},
      "EvaluationMetrics": {
        "Precision": {},
        "Recall": {},
        "F1Score": {}
      },
      "EntityTypes": {}
    },
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    },
    "ModelKmsKeyId": {},
    "VersionName": {},
    "SourceModelArn": {},
    "FlywheelArn": {},
    "OutputDataConfig": {
      "FlywheelStatsS3Prefix": {}
    }
  }
]
```

<h2 id="tocS_EntityRecognizerSummary">EntityRecognizerSummary</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizersummary"></a>
<a id="schema_EntityRecognizerSummary"></a>
<a id="tocSentityrecognizersummary"></a>
<a id="tocsentityrecognizersummary"></a>

```json
{
  "RecognizerName": {},
  "NumberOfVersions": {},
  "LatestVersionCreatedAt": {},
  "LatestVersionName": {},
  "LatestVersionStatus": {}
}
```

 Describes the information about an entity recognizer and its versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecognizerName|object|false|none|none|
|NumberOfVersions|object|false|none|none|
|LatestVersionCreatedAt|object|false|none|none|
|LatestVersionName|object|false|none|none|
|LatestVersionStatus|object|false|none|none|

<h2 id="tocS_EntityRecognizerSummariesList">EntityRecognizerSummariesList</h2>
<!-- backwards compatibility -->
<a id="schemaentityrecognizersummarieslist"></a>
<a id="schema_EntityRecognizerSummariesList"></a>
<a id="tocSentityrecognizersummarieslist"></a>
<a id="tocsentityrecognizersummarieslist"></a>

```json
[
  {
    "RecognizerName": {},
    "NumberOfVersions": {},
    "LatestVersionCreatedAt": {},
    "LatestVersionName": {},
    "LatestVersionStatus": {}
  }
]
```

<h2 id="tocS_EntityTypeName">EntityTypeName</h2>
<!-- backwards compatibility -->
<a id="schemaentitytypename"></a>
<a id="schema_EntityTypeName"></a>
<a id="tocSentitytypename"></a>
<a id="tocsentitytypename"></a>

```json
"string"
```

<h2 id="tocS_EntityTypesListItem">EntityTypesListItem</h2>
<!-- backwards compatibility -->
<a id="schemaentitytypeslistitem"></a>
<a id="schema_EntityTypesListItem"></a>
<a id="tocSentitytypeslistitem"></a>
<a id="tocsentitytypeslistitem"></a>

```json
{
  "Type": {}
}
```

An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|

<h2 id="tocS_PageBasedErrorCode">PageBasedErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemapagebasederrorcode"></a>
<a id="schema_PageBasedErrorCode"></a>
<a id="tocSpagebasederrorcode"></a>
<a id="tocspagebasederrorcode"></a>

```json
"TEXTRACT_BAD_PAGE"
```

<h2 id="tocS_ErrorsListItem">ErrorsListItem</h2>
<!-- backwards compatibility -->
<a id="schemaerrorslistitem"></a>
<a id="schema_ErrorsListItem"></a>
<a id="tocSerrorslistitem"></a>
<a id="tocserrorslistitem"></a>

```json
{
  "Page": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

<p>Text extraction encountered one or more page-level errors in the input document.</p> <p>The <code>ErrorCode</code> contains one of the following values:</p> <ul> <li> <p>TEXTRACT_BAD_PAGE - Amazon Textract cannot read the page. For more information about page limits in Amazon Textract, see <a href="https://docs.aws.amazon.com/textract/latest/dg/limits-document.html"> Page Quotas in Amazon Textract</a>.</p> </li> <li> <p>TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED - The number of requests exceeded your throughput limit. For more information about throughput quotas in Amazon Textract, see <a href="https://docs.aws.amazon.com/textract/latest/dg/limits-quotas-explained.html"> Default quotas in Amazon Textract</a>.</p> </li> <li> <p>PAGE_CHARACTERS_EXCEEDED - Too many text characters on the page (10,000 characters maximum).</p> </li> <li> <p>PAGE_SIZE_EXCEEDED - The maximum page size is 10 MB.</p> </li> <li> <p>INTERNAL_SERVER_ERROR - The request encountered a service issue. Try the API request again.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Page|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_EventTypeString">EventTypeString</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypestring"></a>
<a id="schema_EventTypeString"></a>
<a id="tocSeventtypestring"></a>
<a id="tocseventtypestring"></a>

```json
"string"
```

<h2 id="tocS_EventsDetectionJobFilter">EventsDetectionJobFilter</h2>
<!-- backwards compatibility -->
<a id="schemaeventsdetectionjobfilter"></a>
<a id="schema_EventsDetectionJobFilter"></a>
<a id="tocSeventsdetectionjobfilter"></a>
<a id="tocseventsdetectionjobfilter"></a>

```json
{
  "JobName": {},
  "JobStatus": {},
  "SubmitTimeBefore": {},
  "SubmitTimeAfter": {}
}
```

Provides information for filtering a list of event detection jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|SubmitTimeBefore|object|false|none|none|
|SubmitTimeAfter|object|false|none|none|

<h2 id="tocS_TargetEventTypes">TargetEventTypes</h2>
<!-- backwards compatibility -->
<a id="schematargeteventtypes"></a>
<a id="schema_TargetEventTypes"></a>
<a id="tocStargeteventtypes"></a>
<a id="tocstargeteventtypes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EventsDetectionJobPropertiesList">EventsDetectionJobPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemaeventsdetectionjobpropertieslist"></a>
<a id="schema_EventsDetectionJobPropertiesList"></a>
<a id="tocSeventsdetectionjobpropertieslist"></a>
<a id="tocseventsdetectionjobpropertieslist"></a>

```json
[
  {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "TargetEventTypes": {}
  }
]
```

<h2 id="tocS_ExtractedCharactersListItem">ExtractedCharactersListItem</h2>
<!-- backwards compatibility -->
<a id="schemaextractedcharacterslistitem"></a>
<a id="schema_ExtractedCharactersListItem"></a>
<a id="tocSextractedcharacterslistitem"></a>
<a id="tocsextractedcharacterslistitem"></a>

```json
{
  "Page": {},
  "Count": {}
}
```

Array of the number of characters extracted from each page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Page|object|false|none|none|
|Count|object|false|none|none|

<h2 id="tocS_FlywheelStatus">FlywheelStatus</h2>
<!-- backwards compatibility -->
<a id="schemaflywheelstatus"></a>
<a id="schema_FlywheelStatus"></a>
<a id="tocSflywheelstatus"></a>
<a id="tocsflywheelstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_FlywheelFilter">FlywheelFilter</h2>
<!-- backwards compatibility -->
<a id="schemaflywheelfilter"></a>
<a id="schema_FlywheelFilter"></a>
<a id="tocSflywheelfilter"></a>
<a id="tocsflywheelfilter"></a>

```json
{
  "Status": {},
  "CreationTimeAfter": {},
  "CreationTimeBefore": {}
}
```

Filter the flywheels based on creation time or flywheel status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|CreationTimeAfter|object|false|none|none|
|CreationTimeBefore|object|false|none|none|

<h2 id="tocS_FlywheelIterationFilter">FlywheelIterationFilter</h2>
<!-- backwards compatibility -->
<a id="schemaflywheeliterationfilter"></a>
<a id="schema_FlywheelIterationFilter"></a>
<a id="tocSflywheeliterationfilter"></a>
<a id="tocsflywheeliterationfilter"></a>

```json
{
  "CreationTimeAfter": {},
  "CreationTimeBefore": {}
}
```

Filter the flywheel iterations based on creation time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationTimeAfter|object|false|none|none|
|CreationTimeBefore|object|false|none|none|

<h2 id="tocS_FlywheelIterationStatus">FlywheelIterationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaflywheeliterationstatus"></a>
<a id="schema_FlywheelIterationStatus"></a>
<a id="tocSflywheeliterationstatus"></a>
<a id="tocsflywheeliterationstatus"></a>

```json
"TRAINING"
```

<h2 id="tocS_FlywheelModelEvaluationMetrics">FlywheelModelEvaluationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaflywheelmodelevaluationmetrics"></a>
<a id="schema_FlywheelModelEvaluationMetrics"></a>
<a id="tocSflywheelmodelevaluationmetrics"></a>
<a id="tocsflywheelmodelevaluationmetrics"></a>

```json
{
  "AverageF1Score": {},
  "AveragePrecision": {},
  "AverageRecall": {},
  "AverageAccuracy": {}
}
```

The evaluation metrics associated with the evaluated model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AverageF1Score|object|false|none|none|
|AveragePrecision|object|false|none|none|
|AverageRecall|object|false|none|none|
|AverageAccuracy|object|false|none|none|

<h2 id="tocS_FlywheelIterationPropertiesList">FlywheelIterationPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemaflywheeliterationpropertieslist"></a>
<a id="schema_FlywheelIterationPropertiesList"></a>
<a id="tocSflywheeliterationpropertieslist"></a>
<a id="tocsflywheeliterationpropertieslist"></a>

```json
[
  {
    "FlywheelArn": {},
    "FlywheelIterationId": {},
    "CreationTime": {},
    "EndTime": {},
    "Status": {},
    "Message": {},
    "EvaluatedModelArn": {},
    "EvaluatedModelMetrics": {
      "AverageF1Score": {},
      "AveragePrecision": {},
      "AverageRecall": {},
      "AverageAccuracy": {}
    },
    "TrainedModelArn": {},
    "TrainedModelMetrics": {
      "AverageF1Score": {},
      "AveragePrecision": {},
      "AverageRecall": {},
      "AverageAccuracy": {}
    },
    "EvaluationManifestS3Prefix": {}
  }
]
```

<h2 id="tocS_FlywheelSummary">FlywheelSummary</h2>
<!-- backwards compatibility -->
<a id="schemaflywheelsummary"></a>
<a id="schema_FlywheelSummary"></a>
<a id="tocSflywheelsummary"></a>
<a id="tocsflywheelsummary"></a>

```json
{
  "FlywheelArn": {},
  "ActiveModelArn": {},
  "DataLakeS3Uri": {},
  "Status": {},
  "ModelType": {},
  "Message": {},
  "CreationTime": {},
  "LastModifiedTime": {},
  "LatestFlywheelIteration": {}
}
```

Flywheel summary information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlywheelArn|object|false|none|none|
|ActiveModelArn|object|false|none|none|
|DataLakeS3Uri|object|false|none|none|
|Status|object|false|none|none|
|ModelType|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|LatestFlywheelIteration|object|false|none|none|

<h2 id="tocS_FlywheelSummaryList">FlywheelSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaflywheelsummarylist"></a>
<a id="schema_FlywheelSummaryList"></a>
<a id="tocSflywheelsummarylist"></a>
<a id="tocsflywheelsummarylist"></a>

```json
[
  {
    "FlywheelArn": {},
    "ActiveModelArn": {},
    "DataLakeS3Uri": {},
    "Status": {},
    "ModelType": {},
    "Message": {},
    "CreationTime": {},
    "LastModifiedTime": {},
    "LatestFlywheelIteration": {}
  }
]
```

<h2 id="tocS_Polygon">Polygon</h2>
<!-- backwards compatibility -->
<a id="schemapolygon"></a>
<a id="schema_Polygon"></a>
<a id="tocSpolygon"></a>
<a id="tocspolygon"></a>

```json
[
  {
    "X": {},
    "Y": {}
  }
]
```

<h2 id="tocS_KeyPhrase">KeyPhrase</h2>
<!-- backwards compatibility -->
<a id="schemakeyphrase"></a>
<a id="schema_KeyPhrase"></a>
<a id="tocSkeyphrase"></a>
<a id="tocskeyphrase"></a>

```json
{
  "Score": {},
  "Text": {},
  "BeginOffset": {},
  "EndOffset": {}
}
```

Describes a key noun phrase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Score|object|false|none|none|
|Text|object|false|none|none|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|

<h2 id="tocS_KeyPhrasesDetectionJobFilter">KeyPhrasesDetectionJobFilter</h2>
<!-- backwards compatibility -->
<a id="schemakeyphrasesdetectionjobfilter"></a>
<a id="schema_KeyPhrasesDetectionJobFilter"></a>
<a id="tocSkeyphrasesdetectionjobfilter"></a>
<a id="tocskeyphrasesdetectionjobfilter"></a>

```json
{
  "JobName": {},
  "JobStatus": {},
  "SubmitTimeBefore": {},
  "SubmitTimeAfter": {}
}
```

Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|SubmitTimeBefore|object|false|none|none|
|SubmitTimeAfter|object|false|none|none|

<h2 id="tocS_KeyPhrasesDetectionJobPropertiesList">KeyPhrasesDetectionJobPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemakeyphrasesdetectionjobpropertieslist"></a>
<a id="schema_KeyPhrasesDetectionJobPropertiesList"></a>
<a id="tocSkeyphrasesdetectionjobpropertieslist"></a>
<a id="tocskeyphrasesdetectionjobpropertieslist"></a>

```json
[
  {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    }
  }
]
```

<h2 id="tocS_LabelListItem">LabelListItem</h2>
<!-- backwards compatibility -->
<a id="schemalabellistitem"></a>
<a id="schema_LabelListItem"></a>
<a id="tocSlabellistitem"></a>
<a id="tocslabellistitem"></a>

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

<h2 id="tocS_ListOfDescriptiveMentionIndices">ListOfDescriptiveMentionIndices</h2>
<!-- backwards compatibility -->
<a id="schemalistofdescriptivementionindices"></a>
<a id="schema_ListOfDescriptiveMentionIndices"></a>
<a id="tocSlistofdescriptivementionindices"></a>
<a id="tocslistofdescriptivementionindices"></a>

```json
[
  0
]
```

<h2 id="tocS_TargetedSentimentMention">TargetedSentimentMention</h2>
<!-- backwards compatibility -->
<a id="schematargetedsentimentmention"></a>
<a id="schema_TargetedSentimentMention"></a>
<a id="tocStargetedsentimentmention"></a>
<a id="tocstargetedsentimentmention"></a>

```json
{
  "Score": {},
  "GroupScore": {},
  "Text": {},
  "Type": {},
  "MentionSentiment": {
    "Sentiment": {},
    "SentimentScore": {
      "Positive": {},
      "Negative": {},
      "Neutral": {},
      "Mixed": {}
    }
  },
  "BeginOffset": {},
  "EndOffset": {}
}
```

<p>Information about one mention of an entity. The mention information includes the location of the mention in the text and the sentiment of the mention.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Score|object|false|none|none|
|GroupScore|object|false|none|none|
|Text|object|false|none|none|
|Type|object|false|none|none|
|MentionSentiment|object|false|none|none|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|

<h2 id="tocS_ListOfMentions">ListOfMentions</h2>
<!-- backwards compatibility -->
<a id="schemalistofmentions"></a>
<a id="schema_ListOfMentions"></a>
<a id="tocSlistofmentions"></a>
<a id="tocslistofmentions"></a>

```json
[
  {
    "Score": {},
    "GroupScore": {},
    "Text": {},
    "Type": {},
    "MentionSentiment": {
      "Sentiment": {},
      "SentimentScore": {
        "Positive": {},
        "Negative": {},
        "Neutral": {},
        "Mixed": {}
      }
    },
    "BeginOffset": {},
    "EndOffset": {}
  }
]
```

<h2 id="tocS_PiiEntity">PiiEntity</h2>
<!-- backwards compatibility -->
<a id="schemapiientity"></a>
<a id="schema_PiiEntity"></a>
<a id="tocSpiientity"></a>
<a id="tocspiientity"></a>

```json
{
  "Score": {},
  "Type": {},
  "BeginOffset": {},
  "EndOffset": {}
}
```

Provides information about a PII entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Score|object|false|none|none|
|Type|object|false|none|none|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|

<h2 id="tocS_ListOfPiiEntityTypes">ListOfPiiEntityTypes</h2>
<!-- backwards compatibility -->
<a id="schemalistofpiientitytypes"></a>
<a id="schema_ListOfPiiEntityTypes"></a>
<a id="tocSlistofpiientitytypes"></a>
<a id="tocslistofpiientitytypes"></a>

```json
[
  "BANK_ACCOUNT_NUMBER"
]
```

<h2 id="tocS_RelationshipsListItem">RelationshipsListItem</h2>
<!-- backwards compatibility -->
<a id="schemarelationshipslistitem"></a>
<a id="schema_RelationshipsListItem"></a>
<a id="tocSrelationshipslistitem"></a>
<a id="tocsrelationshipslistitem"></a>

```json
{
  "Ids": {},
  "Type": {}
}
```

List of child blocks for the current block.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ids|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_SyntaxToken">SyntaxToken</h2>
<!-- backwards compatibility -->
<a id="schemasyntaxtoken"></a>
<a id="schema_SyntaxToken"></a>
<a id="tocSsyntaxtoken"></a>
<a id="tocssyntaxtoken"></a>

```json
{
  "TokenId": {},
  "Text": {},
  "BeginOffset": {},
  "EndOffset": {},
  "PartOfSpeech": {
    "Tag": {},
    "Score": {}
  }
}
```

Represents a work in the input text that was recognized and assigned a part of speech. There is one syntax token record for each word in the source text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TokenId|object|false|none|none|
|Text|object|false|none|none|
|BeginOffset|object|false|none|none|
|EndOffset|object|false|none|none|
|PartOfSpeech|object|false|none|none|

<h2 id="tocS_TargetedSentimentEntity">TargetedSentimentEntity</h2>
<!-- backwards compatibility -->
<a id="schematargetedsentimententity"></a>
<a id="schema_TargetedSentimentEntity"></a>
<a id="tocStargetedsentimententity"></a>
<a id="tocstargetedsentimententity"></a>

```json
{
  "DescriptiveMentionIndex": {},
  "Mentions": {}
}
```

<p>Information about one of the entities found by targeted sentiment analysis.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DescriptiveMentionIndex|object|false|none|none|
|Mentions|object|false|none|none|

<h2 id="tocS_WarningsListItem">WarningsListItem</h2>
<!-- backwards compatibility -->
<a id="schemawarningslistitem"></a>
<a id="schema_WarningsListItem"></a>
<a id="tocSwarningslistitem"></a>
<a id="tocswarningslistitem"></a>

```json
{
  "Page": {},
  "WarnCode": {},
  "WarnMessage": {}
}
```

<p>The system identified one of the following warnings while processing the input document:</p> <ul> <li> <p>The document to classify is plain text, but the classifier is a native model.</p> </li> <li> <p>The document to classify is semi-structured, but the classifier is a plain-text model.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Page|object|false|none|none|
|WarnCode|object|false|none|none|
|WarnMessage|object|false|none|none|

<h2 id="tocS_PiiEntitiesDetectionJobFilter">PiiEntitiesDetectionJobFilter</h2>
<!-- backwards compatibility -->
<a id="schemapiientitiesdetectionjobfilter"></a>
<a id="schema_PiiEntitiesDetectionJobFilter"></a>
<a id="tocSpiientitiesdetectionjobfilter"></a>
<a id="tocspiientitiesdetectionjobfilter"></a>

```json
{
  "JobName": {},
  "JobStatus": {},
  "SubmitTimeBefore": {},
  "SubmitTimeAfter": {}
}
```

Provides information for filtering a list of PII entity detection jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|SubmitTimeBefore|object|false|none|none|
|SubmitTimeAfter|object|false|none|none|

<h2 id="tocS_PiiEntitiesDetectionJobPropertiesList">PiiEntitiesDetectionJobPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemapiientitiesdetectionjobpropertieslist"></a>
<a id="schema_PiiEntitiesDetectionJobPropertiesList"></a>
<a id="tocSpiientitiesdetectionjobpropertieslist"></a>
<a id="tocspiientitiesdetectionjobpropertieslist"></a>

```json
[
  {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "RedactionConfig": {
      "PiiEntityTypes": {},
      "MaskMode": {},
      "MaskCharacter": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "Mode": {}
  }
]
```

<h2 id="tocS_SentimentDetectionJobFilter">SentimentDetectionJobFilter</h2>
<!-- backwards compatibility -->
<a id="schemasentimentdetectionjobfilter"></a>
<a id="schema_SentimentDetectionJobFilter"></a>
<a id="tocSsentimentdetectionjobfilter"></a>
<a id="tocssentimentdetectionjobfilter"></a>

```json
{
  "JobName": {},
  "JobStatus": {},
  "SubmitTimeBefore": {},
  "SubmitTimeAfter": {}
}
```

Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|SubmitTimeBefore|object|false|none|none|
|SubmitTimeAfter|object|false|none|none|

<h2 id="tocS_SentimentDetectionJobPropertiesList">SentimentDetectionJobPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemasentimentdetectionjobpropertieslist"></a>
<a id="schema_SentimentDetectionJobPropertiesList"></a>
<a id="tocSsentimentdetectionjobpropertieslist"></a>
<a id="tocssentimentdetectionjobpropertieslist"></a>

```json
[
  {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    }
  }
]
```

<h2 id="tocS_TargetedSentimentDetectionJobFilter">TargetedSentimentDetectionJobFilter</h2>
<!-- backwards compatibility -->
<a id="schematargetedsentimentdetectionjobfilter"></a>
<a id="schema_TargetedSentimentDetectionJobFilter"></a>
<a id="tocStargetedsentimentdetectionjobfilter"></a>
<a id="tocstargetedsentimentdetectionjobfilter"></a>

```json
{
  "JobName": {},
  "JobStatus": {},
  "SubmitTimeBefore": {},
  "SubmitTimeAfter": {}
}
```

Provides information for filtering a list of dominant language detection jobs. For more information, see the <code>ListTargetedSentimentDetectionJobs</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|SubmitTimeBefore|object|false|none|none|
|SubmitTimeAfter|object|false|none|none|

<h2 id="tocS_TargetedSentimentDetectionJobPropertiesList">TargetedSentimentDetectionJobPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schematargetedsentimentdetectionjobpropertieslist"></a>
<a id="schema_TargetedSentimentDetectionJobPropertiesList"></a>
<a id="tocStargetedsentimentdetectionjobpropertieslist"></a>
<a id="tocstargetedsentimentdetectionjobpropertieslist"></a>

```json
[
  {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "LanguageCode": {},
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    }
  }
]
```

<h2 id="tocS_TopicsDetectionJobFilter">TopicsDetectionJobFilter</h2>
<!-- backwards compatibility -->
<a id="schematopicsdetectionjobfilter"></a>
<a id="schema_TopicsDetectionJobFilter"></a>
<a id="tocStopicsdetectionjobfilter"></a>
<a id="tocstopicsdetectionjobfilter"></a>

```json
{
  "JobName": {},
  "JobStatus": {},
  "SubmitTimeBefore": {},
  "SubmitTimeAfter": {}
}
```

Provides information for filtering topic detection jobs. For more information, see .

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobName|object|false|none|none|
|JobStatus|object|false|none|none|
|SubmitTimeBefore|object|false|none|none|
|SubmitTimeAfter|object|false|none|none|

<h2 id="tocS_TopicsDetectionJobPropertiesList">TopicsDetectionJobPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schematopicsdetectionjobpropertieslist"></a>
<a id="schema_TopicsDetectionJobPropertiesList"></a>
<a id="tocStopicsdetectionjobpropertieslist"></a>
<a id="tocstopicsdetectionjobpropertieslist"></a>

```json
[
  {
    "JobId": {},
    "JobArn": {},
    "JobName": {},
    "JobStatus": {},
    "Message": {},
    "SubmitTime": {},
    "EndTime": {},
    "InputDataConfig": {
      "S3Uri": {},
      "InputFormat": {},
      "DocumentReaderConfig": {
        "DocumentReadAction": {},
        "DocumentReadMode": {},
        "FeatureTypes": {}
      }
    },
    "OutputDataConfig": {
      "S3Uri": {},
      "KmsKeyId": {}
    },
    "NumberOfTopics": {},
    "DataAccessRoleArn": {},
    "VolumeKmsKeyId": {},
    "VpcConfig": {
      "SecurityGroupIds": {},
      "Subnets": {}
    }
  }
]
```

<h2 id="tocS_MaskCharacter">MaskCharacter</h2>
<!-- backwards compatibility -->
<a id="schemamaskcharacter"></a>
<a id="schema_MaskCharacter"></a>
<a id="tocSmaskcharacter"></a>
<a id="tocsmaskcharacter"></a>

```json
"s"
```

<h2 id="tocS_MentionSentiment">MentionSentiment</h2>
<!-- backwards compatibility -->
<a id="schemamentionsentiment"></a>
<a id="schema_MentionSentiment"></a>
<a id="tocSmentionsentiment"></a>
<a id="tocsmentionsentiment"></a>

```json
{
  "Sentiment": {},
  "SentimentScore": {
    "Positive": {},
    "Negative": {},
    "Neutral": {},
    "Mixed": {}
  }
}
```

<p>Contains the sentiment and sentiment score for one mention of an entity.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sentiment|object|false|none|none|
|SentimentScore|[SentimentScore](#schemasentimentscore)|false|none|Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments.|

<h2 id="tocS_NumberOfTopicsInteger">NumberOfTopicsInteger</h2>
<!-- backwards compatibility -->
<a id="schemanumberoftopicsinteger"></a>
<a id="schema_NumberOfTopicsInteger"></a>
<a id="tocSnumberoftopicsinteger"></a>
<a id="tocsnumberoftopicsinteger"></a>

```json
1
```

<h2 id="tocS_PageBasedWarningCode">PageBasedWarningCode</h2>
<!-- backwards compatibility -->
<a id="schemapagebasedwarningcode"></a>
<a id="schema_PageBasedWarningCode"></a>
<a id="tocSpagebasedwarningcode"></a>
<a id="tocspagebasedwarningcode"></a>

```json
"INFERENCING_PLAINTEXT_WITH_NATIVE_TRAINED_MODEL"
```

<h2 id="tocS_PartOfSpeechTagType">PartOfSpeechTagType</h2>
<!-- backwards compatibility -->
<a id="schemapartofspeechtagtype"></a>
<a id="schema_PartOfSpeechTagType"></a>
<a id="tocSpartofspeechtagtype"></a>
<a id="tocspartofspeechtagtype"></a>

```json
"ADJ"
```

<h2 id="tocS_PartOfSpeechTag">PartOfSpeechTag</h2>
<!-- backwards compatibility -->
<a id="schemapartofspeechtag"></a>
<a id="schema_PartOfSpeechTag"></a>
<a id="tocSpartofspeechtag"></a>
<a id="tocspartofspeechtag"></a>

```json
{
  "Tag": {},
  "Score": {}
}
```

Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend has that the part of speech was correctly identified. For more information about the parts of speech that Amazon Comprehend can identify, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tag|object|false|none|none|
|Score|object|false|none|none|

<h2 id="tocS_PiiOutputDataConfig">PiiOutputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemapiioutputdataconfig"></a>
<a id="schema_PiiOutputDataConfig"></a>
<a id="tocSpiioutputdataconfig"></a>
<a id="tocspiioutputdataconfig"></a>

```json
{
  "S3Uri": {},
  "KmsKeyId": {}
}
```

Provides configuration parameters for the output of PII entity detection jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|
|KmsKeyId|object|false|none|none|

<h2 id="tocS_RedactionConfig">RedactionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaredactionconfig"></a>
<a id="schema_RedactionConfig"></a>
<a id="tocSredactionconfig"></a>
<a id="tocsredactionconfig"></a>

```json
{
  "PiiEntityTypes": {},
  "MaskMode": {},
  "MaskCharacter": {}
}
```

Provides configuration parameters for PII entity redaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PiiEntityTypes|object|false|none|none|
|MaskMode|object|false|none|none|
|MaskCharacter|object|false|none|none|

<h2 id="tocS_PiiEntitiesDetectionMode">PiiEntitiesDetectionMode</h2>
<!-- backwards compatibility -->
<a id="schemapiientitiesdetectionmode"></a>
<a id="schema_PiiEntitiesDetectionMode"></a>
<a id="tocSpiientitiesdetectionmode"></a>
<a id="tocspiientitiesdetectionmode"></a>

```json
"ONLY_REDACTION"
```

<h2 id="tocS_PiiEntitiesDetectionMaskMode">PiiEntitiesDetectionMaskMode</h2>
<!-- backwards compatibility -->
<a id="schemapiientitiesdetectionmaskmode"></a>
<a id="schema_PiiEntitiesDetectionMaskMode"></a>
<a id="tocSpiientitiesdetectionmaskmode"></a>
<a id="tocspiientitiesdetectionmaskmode"></a>

```json
"MASK"
```

<h2 id="tocS_Point">Point</h2>
<!-- backwards compatibility -->
<a id="schemapoint"></a>
<a id="schema_Point"></a>
<a id="tocSpoint"></a>
<a id="tocspoint"></a>

```json
{
  "X": {},
  "Y": {}
}
```

<p>The X and Y coordinates of a point on a document page.</p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Point.html">Point</a> in the Amazon Textract API reference.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|X|object|false|none|none|
|Y|object|false|none|none|

<h2 id="tocS_RelationshipType">RelationshipType</h2>
<!-- backwards compatibility -->
<a id="schemarelationshiptype"></a>
<a id="schema_RelationshipType"></a>
<a id="tocSrelationshiptype"></a>
<a id="tocsrelationshiptype"></a>

```json
"CHILD"
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

<h2 id="tocS_SecurityGroupId">SecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupid"></a>
<a id="schema_SecurityGroupId"></a>
<a id="tocSsecuritygroupid"></a>
<a id="tocssecuritygroupid"></a>

```json
"string"
```

<h2 id="tocS_SecurityGroupIds">SecurityGroupIds</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupids"></a>
<a id="schema_SecurityGroupIds"></a>
<a id="tocSsecuritygroupids"></a>
<a id="tocssecuritygroupids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SubnetId">SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetId"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

```json
"string"
```

<h2 id="tocS_Subnets">Subnets</h2>
<!-- backwards compatibility -->
<a id="schemasubnets"></a>
<a id="schema_Subnets"></a>
<a id="tocSsubnets"></a>
<a id="tocssubnets"></a>

```json
[
  "string"
]
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

A key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with the key-value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by a particular department.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|false|none|none|

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

<h2 id="tocS_TargetedSentimentEntityType">TargetedSentimentEntityType</h2>
<!-- backwards compatibility -->
<a id="schematargetedsentimententitytype"></a>
<a id="schema_TargetedSentimentEntityType"></a>
<a id="tocStargetedsentimententitytype"></a>
<a id="tocstargetedsentimententitytype"></a>

```json
"PERSON"
```

<h2 id="tocS_UpdateDataSecurityConfig">UpdateDataSecurityConfig</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasecurityconfig"></a>
<a id="schema_UpdateDataSecurityConfig"></a>
<a id="tocSupdatedatasecurityconfig"></a>
<a id="tocsupdatedatasecurityconfig"></a>

```json
{
  "ModelKmsKeyId": {},
  "VolumeKmsKeyId": {},
  "VpcConfig": {
    "SecurityGroupIds": {},
    "Subnets": {}
  }
}
```

Data security configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelKmsKeyId|object|false|none|none|
|VolumeKmsKeyId|object|false|none|none|
|VpcConfig|[VpcConfig](#schemavpcconfig)|false|none| Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. |
