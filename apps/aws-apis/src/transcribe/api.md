<h1 id="amazon-transcribe-service">Amazon Transcribe Service v2017-10-26</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Amazon Transcribe offers three main types of batch transcription: <b>Standard</b>, <b>Medical</b>, and <b>Call Analytics</b>.</p> <ul> <li> <p> <b>Standard transcriptions</b> are the most common option. Refer to for details.</p> </li> <li> <p> <b>Medical transcriptions</b> are tailored to medical professionals and incorporate medical terms. A common use case for this service is transcribing doctor-patient dialogue into after-visit notes. Refer to for details.</p> </li> <li> <p> <b>Call Analytics transcriptions</b> are designed for use with call center audio on two different channels; if you're looking for insight into customer service calls, use this option. Refer to for details.</p> </li> </ul>

Base URLs:

* <a href="http://transcribe.us-east-1.amazonaws.com">http://transcribe.us-east-1.amazonaws.com</a> - The Amazon Transcribe Service multi-region endpoint

* <a href="https://transcribe.us-east-1.amazonaws.com">https://transcribe.us-east-1.amazonaws.com</a> - The Amazon Transcribe Service multi-region endpoint

* <a href="http://transcribe.cn-north-1.amazonaws.com.cn">http://transcribe.cn-north-1.amazonaws.com.cn</a> - The Amazon Transcribe Service endpoint for China (Beijing) and China (Ningxia)

* <a href="https://transcribe.cn-north-1.amazonaws.com.cn">https://transcribe.cn-north-1.amazonaws.com.cn</a> - The Amazon Transcribe Service endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/transcribe/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-transcribe-service-default">Default</h1>

## CreateCallAnalyticsCategory

<a id="opIdCreateCallAnalyticsCategory"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.CreateCallAnalyticsCategory' \
  -d '{
    "CategoryName": {},
    "Rules": {},
    "InputType": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory`

<p>Creates a new Call Analytics category.</p> <p>All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively.</p> <p>When creating a new category, you can use the <code>InputType</code> parameter to label the category as a <code>POST_CALL</code> or a <code>REAL_TIME</code> category. <code>POST_CALL</code> categories can only be applied to post-call transcriptions and <code>REAL_TIME</code> categories can only be applied to real-time transcriptions. If you do not include <code>InputType</code>, your category is created as a <code>POST_CALL</code> category by default.</p> <p>Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and .</p> <p>To update an existing category, see .</p> <p>To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p>

> Body parameter

```json
{
  "CategoryName": {},
  "Rules": {},
  "InputType": {}
}
```

<h3 id="createcallanalyticscategory-parameters">Parameters</h3>

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
|body|body|[CreateCallAnalyticsCategoryRequest](#schemacreatecallanalyticscategoryrequest)|true|none|
|» CategoryName|body|object|true|none|
|» Rules|body|object|true|none|
|» InputType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.CreateCallAnalyticsCategory|

> Example responses

> 200 Response

```json
{
  "CategoryProperties": {
    "CategoryName": {},
    "Rules": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "InputType": {}
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

<h3 id="createcallanalyticscategory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCallAnalyticsCategoryResponse](#schemacreatecallanalyticscategoryresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLanguageModel

<a id="opIdCreateLanguageModel"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.CreateLanguageModel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.CreateLanguageModel' \
  -d '{
    "LanguageCode": {},
    "BaseModelName": {},
    "ModelName": {},
    "InputDataConfig": {
      "S3Uri": {},
      "TuningDataS3Uri": {},
      "DataAccessRoleArn": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.CreateLanguageModel`

<p>Creates a new custom language model.</p> <p>When creating a new custom language model, you must specify:</p> <ul> <li> <p>If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model</p> </li> <li> <p>The location of your training and tuning files (this must be an Amazon S3 URI)</p> </li> <li> <p>The language of your model</p> </li> <li> <p>A unique name for your model</p> </li> </ul>

> Body parameter

```json
{
  "LanguageCode": {},
  "BaseModelName": {},
  "ModelName": {},
  "InputDataConfig": {
    "S3Uri": {},
    "TuningDataS3Uri": {},
    "DataAccessRoleArn": {}
  },
  "Tags": {}
}
```

<h3 id="createlanguagemodel-parameters">Parameters</h3>

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
|body|body|[CreateLanguageModelRequest](#schemacreatelanguagemodelrequest)|true|none|
|» LanguageCode|body|object|true|none|
|» BaseModelName|body|object|true|none|
|» ModelName|body|object|true|none|
|» InputDataConfig|body|object|true|none|
|» » S3Uri|body|object|true|none|
|» » TuningDataS3Uri|body|object|false|none|
|» » DataAccessRoleArn|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.CreateLanguageModel|

> Example responses

> 200 Response

```json
{
  "LanguageCode": {},
  "BaseModelName": {},
  "ModelName": {},
  "InputDataConfig": {
    "S3Uri": {},
    "TuningDataS3Uri": {},
    "DataAccessRoleArn": {}
  },
  "ModelStatus": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createlanguagemodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLanguageModelResponse](#schemacreatelanguagemodelresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMedicalVocabulary

<a id="opIdCreateMedicalVocabulary"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.CreateMedicalVocabulary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.CreateMedicalVocabulary' \
  -d '{
    "VocabularyName": {},
    "LanguageCode": {},
    "VocabularyFileUri": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.CreateMedicalVocabulary`

<p>Creates a new custom medical vocabulary.</p> <p>Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the <code>Phrases</code> flag; <code>CreateMedicalVocabulary</code> does not support the <code>Phrases</code> flag and only accepts vocabularies in table format.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>

> Body parameter

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "VocabularyFileUri": {},
  "Tags": {}
}
```

<h3 id="createmedicalvocabulary-parameters">Parameters</h3>

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
|body|body|[CreateMedicalVocabularyRequest](#schemacreatemedicalvocabularyrequest)|true|none|
|» VocabularyName|body|object|true|none|
|» LanguageCode|body|object|true|none|
|» VocabularyFileUri|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.CreateMedicalVocabulary|

> Example responses

> 200 Response

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "VocabularyState": {},
  "LastModifiedTime": {},
  "FailureReason": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createmedicalvocabulary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMedicalVocabularyResponse](#schemacreatemedicalvocabularyresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVocabulary

<a id="opIdCreateVocabulary"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.CreateVocabulary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.CreateVocabulary' \
  -d '{
    "VocabularyName": {},
    "LanguageCode": {},
    "Phrases": {},
    "VocabularyFileUri": {},
    "Tags": {},
    "DataAccessRoleArn": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.CreateVocabulary`

<p>Creates a new custom vocabulary.</p> <p>When creating a new custom vocabulary, you can either upload a text file that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request. Or you can include a list of terms directly in your request using the <code>Phrases</code> flag.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>

> Body parameter

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "Phrases": {},
  "VocabularyFileUri": {},
  "Tags": {},
  "DataAccessRoleArn": {}
}
```

<h3 id="createvocabulary-parameters">Parameters</h3>

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
|body|body|[CreateVocabularyRequest](#schemacreatevocabularyrequest)|true|none|
|» VocabularyName|body|object|true|none|
|» LanguageCode|body|object|true|none|
|» Phrases|body|object|false|none|
|» VocabularyFileUri|body|object|false|none|
|» Tags|body|object|false|none|
|» DataAccessRoleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.CreateVocabulary|

> Example responses

> 200 Response

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "VocabularyState": {},
  "LastModifiedTime": {},
  "FailureReason": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createvocabulary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVocabularyResponse](#schemacreatevocabularyresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVocabularyFilter

<a id="opIdCreateVocabularyFilter"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.CreateVocabularyFilter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.CreateVocabularyFilter' \
  -d '{
    "VocabularyFilterName": {},
    "LanguageCode": {},
    "Words": {},
    "VocabularyFilterFileUri": {},
    "Tags": {},
    "DataAccessRoleArn": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.CreateVocabularyFilter`

<p>Creates a new custom vocabulary filter.</p> <p>You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Vocabulary filtering</a>.</p>

> Body parameter

```json
{
  "VocabularyFilterName": {},
  "LanguageCode": {},
  "Words": {},
  "VocabularyFilterFileUri": {},
  "Tags": {},
  "DataAccessRoleArn": {}
}
```

<h3 id="createvocabularyfilter-parameters">Parameters</h3>

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
|body|body|[CreateVocabularyFilterRequest](#schemacreatevocabularyfilterrequest)|true|none|
|» VocabularyFilterName|body|object|true|none|
|» LanguageCode|body|object|true|none|
|» Words|body|object|false|none|
|» VocabularyFilterFileUri|body|object|false|none|
|» Tags|body|object|false|none|
|» DataAccessRoleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.CreateVocabularyFilter|

> Example responses

> 200 Response

```json
{
  "VocabularyFilterName": {},
  "LanguageCode": {},
  "LastModifiedTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createvocabularyfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVocabularyFilterResponse](#schemacreatevocabularyfilterresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCallAnalyticsCategory

<a id="opIdDeleteCallAnalyticsCategory"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.DeleteCallAnalyticsCategory' \
  -d '{
    "CategoryName": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory`

Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using <code>CategoryName</code>. Category names are case sensitive.

> Body parameter

```json
{
  "CategoryName": {}
}
```

<h3 id="deletecallanalyticscategory-parameters">Parameters</h3>

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
|body|body|[DeleteCallAnalyticsCategoryRequest](#schemadeletecallanalyticscategoryrequest)|true|none|
|» CategoryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.DeleteCallAnalyticsCategory|

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

<h3 id="deletecallanalyticscategory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCallAnalyticsCategoryResponse](#schemadeletecallanalyticscategoryresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCallAnalyticsJob

<a id="opIdDeleteCallAnalyticsJob"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.DeleteCallAnalyticsJob' \
  -d '{
    "CallAnalyticsJobName": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob`

Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using <code>CallAnalyticsJobName</code>. Job names are case sensitive.

> Body parameter

```json
{
  "CallAnalyticsJobName": {}
}
```

<h3 id="deletecallanalyticsjob-parameters">Parameters</h3>

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
|body|body|[DeleteCallAnalyticsJobRequest](#schemadeletecallanalyticsjobrequest)|true|none|
|» CallAnalyticsJobName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.DeleteCallAnalyticsJob|

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

<h3 id="deletecallanalyticsjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCallAnalyticsJobResponse](#schemadeletecallanalyticsjobresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLanguageModel

<a id="opIdDeleteLanguageModel"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.DeleteLanguageModel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.DeleteLanguageModel' \
  -d '{
    "ModelName": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.DeleteLanguageModel`

Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using <code>ModelName</code>. custom language model names are case sensitive.

> Body parameter

```json
{
  "ModelName": {}
}
```

<h3 id="deletelanguagemodel-parameters">Parameters</h3>

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
|body|body|[DeleteLanguageModelRequest](#schemadeletelanguagemodelrequest)|true|none|
|» ModelName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.DeleteLanguageModel|

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

<h3 id="deletelanguagemodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMedicalTranscriptionJob

<a id="opIdDeleteMedicalTranscriptionJob"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.DeleteMedicalTranscriptionJob' \
  -d '{
    "MedicalTranscriptionJobName": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob`

Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using <code>MedicalTranscriptionJobName</code>. Job names are case sensitive.

> Body parameter

```json
{
  "MedicalTranscriptionJobName": {}
}
```

<h3 id="deletemedicaltranscriptionjob-parameters">Parameters</h3>

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
|body|body|[DeleteMedicalTranscriptionJobRequest](#schemadeletemedicaltranscriptionjobrequest)|true|none|
|» MedicalTranscriptionJobName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.DeleteMedicalTranscriptionJob|

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

<h3 id="deletemedicaltranscriptionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMedicalVocabulary

<a id="opIdDeleteMedicalVocabulary"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.DeleteMedicalVocabulary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.DeleteMedicalVocabulary' \
  -d '{
    "VocabularyName": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.DeleteMedicalVocabulary`

Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.

> Body parameter

```json
{
  "VocabularyName": {}
}
```

<h3 id="deletemedicalvocabulary-parameters">Parameters</h3>

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
|body|body|[DeleteMedicalVocabularyRequest](#schemadeletemedicalvocabularyrequest)|true|none|
|» VocabularyName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.DeleteMedicalVocabulary|

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

<h3 id="deletemedicalvocabulary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTranscriptionJob

<a id="opIdDeleteTranscriptionJob"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.DeleteTranscriptionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.DeleteTranscriptionJob' \
  -d '{
    "TranscriptionJobName": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.DeleteTranscriptionJob`

Deletes a transcription job. To use this operation, specify the name of the job you want to delete using <code>TranscriptionJobName</code>. Job names are case sensitive.

> Body parameter

```json
{
  "TranscriptionJobName": {}
}
```

<h3 id="deletetranscriptionjob-parameters">Parameters</h3>

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
|body|body|[DeleteTranscriptionJobRequest](#schemadeletetranscriptionjobrequest)|true|none|
|» TranscriptionJobName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.DeleteTranscriptionJob|

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

<h3 id="deletetranscriptionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVocabulary

<a id="opIdDeleteVocabulary"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.DeleteVocabulary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.DeleteVocabulary' \
  -d '{
    "VocabularyName": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.DeleteVocabulary`

Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.

> Body parameter

```json
{
  "VocabularyName": {}
}
```

<h3 id="deletevocabulary-parameters">Parameters</h3>

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
|body|body|[DeleteVocabularyRequest](#schemadeletevocabularyrequest)|true|none|
|» VocabularyName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.DeleteVocabulary|

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

<h3 id="deletevocabulary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVocabularyFilter

<a id="opIdDeleteVocabularyFilter"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.DeleteVocabularyFilter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.DeleteVocabularyFilter' \
  -d '{
    "VocabularyFilterName": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.DeleteVocabularyFilter`

Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using <code>VocabularyFilterName</code>. Custom vocabulary filter names are case sensitive.

> Body parameter

```json
{
  "VocabularyFilterName": {}
}
```

<h3 id="deletevocabularyfilter-parameters">Parameters</h3>

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
|body|body|[DeleteVocabularyFilterRequest](#schemadeletevocabularyfilterrequest)|true|none|
|» VocabularyFilterName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.DeleteVocabularyFilter|

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

<h3 id="deletevocabularyfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLanguageModel

<a id="opIdDescribeLanguageModel"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.DescribeLanguageModel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.DescribeLanguageModel' \
  -d '{
    "ModelName": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.DescribeLanguageModel`

<p>Provides information about the specified custom language model.</p> <p>This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model.</p> <p>If you tried to create a new custom language model and the request wasn't successful, you can use <code>DescribeLanguageModel</code> to help identify the reason for this failure.</p>

> Body parameter

```json
{
  "ModelName": {}
}
```

<h3 id="describelanguagemodel-parameters">Parameters</h3>

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
|body|body|[DescribeLanguageModelRequest](#schemadescribelanguagemodelrequest)|true|none|
|» ModelName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.DescribeLanguageModel|

> Example responses

> 200 Response

```json
{
  "LanguageModel": {
    "ModelName": {},
    "CreateTime": {},
    "LastModifiedTime": {},
    "LanguageCode": {},
    "BaseModelName": {},
    "ModelStatus": {},
    "UpgradeAvailability": {},
    "FailureReason": {},
    "InputDataConfig": {
      "S3Uri": {},
      "TuningDataS3Uri": {},
      "DataAccessRoleArn": {}
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

<h3 id="describelanguagemodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLanguageModelResponse](#schemadescribelanguagemodelresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCallAnalyticsCategory

<a id="opIdGetCallAnalyticsCategory"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.GetCallAnalyticsCategory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.GetCallAnalyticsCategory' \
  -d '{
    "CategoryName": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.GetCallAnalyticsCategory`

<p>Provides information about the specified Call Analytics category.</p> <p>To get a list of your Call Analytics categories, use the operation.</p>

> Body parameter

```json
{
  "CategoryName": {}
}
```

<h3 id="getcallanalyticscategory-parameters">Parameters</h3>

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
|body|body|[GetCallAnalyticsCategoryRequest](#schemagetcallanalyticscategoryrequest)|true|none|
|» CategoryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.GetCallAnalyticsCategory|

> Example responses

> 200 Response

```json
{
  "CategoryProperties": {
    "CategoryName": {},
    "Rules": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "InputType": {}
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

<h3 id="getcallanalyticscategory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCallAnalyticsCategoryResponse](#schemagetcallanalyticscategoryresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCallAnalyticsJob

<a id="opIdGetCallAnalyticsJob"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.GetCallAnalyticsJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.GetCallAnalyticsJob' \
  -d '{
    "CallAnalyticsJobName": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.GetCallAnalyticsJob`

<p>Provides information about the specified Call Analytics job.</p> <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status is <code>COMPLETED</code>, the job is finished. You can find your completed transcript at the URI specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in <code>RedactedMediaFileUri</code>.</p> <p>To get a list of your Call Analytics jobs, use the operation.</p>

> Body parameter

```json
{
  "CallAnalyticsJobName": {}
}
```

<h3 id="getcallanalyticsjob-parameters">Parameters</h3>

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
|body|body|[GetCallAnalyticsJobRequest](#schemagetcallanalyticsjobrequest)|true|none|
|» CallAnalyticsJobName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.GetCallAnalyticsJob|

> Example responses

> 200 Response

```json
{
  "CallAnalyticsJob": {
    "CallAnalyticsJobName": {},
    "CallAnalyticsJobStatus": {},
    "LanguageCode": {},
    "MediaSampleRateHertz": {},
    "MediaFormat": {},
    "Media": {
      "MediaFileUri": {},
      "RedactedMediaFileUri": {}
    },
    "Transcript": {
      "TranscriptFileUri": {},
      "RedactedTranscriptFileUri": {}
    },
    "StartTime": {},
    "CreationTime": {},
    "CompletionTime": {},
    "FailureReason": {},
    "DataAccessRoleArn": {},
    "IdentifiedLanguageScore": {},
    "Settings": {
      "VocabularyName": {},
      "VocabularyFilterName": {},
      "VocabularyFilterMethod": {},
      "LanguageModelName": {},
      "ContentRedaction": {
        "RedactionType": {},
        "RedactionOutput": {},
        "PiiEntityTypes": {}
      },
      "LanguageOptions": {},
      "LanguageIdSettings": {
        "property1": {
          "VocabularyName": {},
          "VocabularyFilterName": {},
          "LanguageModelName": {}
        },
        "property2": {
          "VocabularyName": {},
          "VocabularyFilterName": {},
          "LanguageModelName": {}
        }
      }
    },
    "ChannelDefinitions": {}
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

<h3 id="getcallanalyticsjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCallAnalyticsJobResponse](#schemagetcallanalyticsjobresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMedicalTranscriptionJob

<a id="opIdGetMedicalTranscriptionJob"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.GetMedicalTranscriptionJob' \
  -d '{
    "MedicalTranscriptionJobName": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob`

<p>Provides information about the specified medical transcription job.</p> <p>To view the status of the specified medical transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>To get a list of your medical transcription jobs, use the operation.</p>

> Body parameter

```json
{
  "MedicalTranscriptionJobName": {}
}
```

<h3 id="getmedicaltranscriptionjob-parameters">Parameters</h3>

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
|body|body|[GetMedicalTranscriptionJobRequest](#schemagetmedicaltranscriptionjobrequest)|true|none|
|» MedicalTranscriptionJobName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.GetMedicalTranscriptionJob|

> Example responses

> 200 Response

```json
{
  "MedicalTranscriptionJob": {
    "MedicalTranscriptionJobName": {},
    "TranscriptionJobStatus": {},
    "LanguageCode": {},
    "MediaSampleRateHertz": {},
    "MediaFormat": {},
    "Media": {
      "MediaFileUri": {},
      "RedactedMediaFileUri": {}
    },
    "Transcript": {
      "TranscriptFileUri": {}
    },
    "StartTime": {},
    "CreationTime": {},
    "CompletionTime": {},
    "FailureReason": {},
    "Settings": {
      "ShowSpeakerLabels": {},
      "MaxSpeakerLabels": {},
      "ChannelIdentification": {},
      "ShowAlternatives": {},
      "MaxAlternatives": {},
      "VocabularyName": {}
    },
    "ContentIdentificationType": {},
    "Specialty": {},
    "Type": {},
    "Tags": {}
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

<h3 id="getmedicaltranscriptionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMedicalTranscriptionJobResponse](#schemagetmedicaltranscriptionjobresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMedicalVocabulary

<a id="opIdGetMedicalVocabulary"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.GetMedicalVocabulary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.GetMedicalVocabulary' \
  -d '{
    "VocabularyName": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.GetMedicalVocabulary`

<p>Provides information about the specified custom medical vocabulary.</p> <p>To view the status of the specified custom medical vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your vocabulary failed.</p> <p>To get a list of your custom medical vocabularies, use the operation.</p>

> Body parameter

```json
{
  "VocabularyName": {}
}
```

<h3 id="getmedicalvocabulary-parameters">Parameters</h3>

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
|body|body|[GetMedicalVocabularyRequest](#schemagetmedicalvocabularyrequest)|true|none|
|» VocabularyName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.GetMedicalVocabulary|

> Example responses

> 200 Response

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "VocabularyState": {},
  "LastModifiedTime": {},
  "FailureReason": {},
  "DownloadUri": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getmedicalvocabulary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMedicalVocabularyResponse](#schemagetmedicalvocabularyresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTranscriptionJob

<a id="opIdGetTranscriptionJob"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.GetTranscriptionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.GetTranscriptionJob' \
  -d '{
    "TranscriptionJobName": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.GetTranscriptionJob`

<p>Provides information about the specified transcription job.</p> <p>To view the status of the specified transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled content redaction, the redacted transcript can be found at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>To get a list of your transcription jobs, use the operation.</p>

> Body parameter

```json
{
  "TranscriptionJobName": {}
}
```

<h3 id="gettranscriptionjob-parameters">Parameters</h3>

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
|body|body|[GetTranscriptionJobRequest](#schemagettranscriptionjobrequest)|true|none|
|» TranscriptionJobName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.GetTranscriptionJob|

> Example responses

> 200 Response

```json
{
  "TranscriptionJob": {
    "TranscriptionJobName": {},
    "TranscriptionJobStatus": {},
    "LanguageCode": {},
    "MediaSampleRateHertz": {},
    "MediaFormat": {},
    "Media": {
      "MediaFileUri": {},
      "RedactedMediaFileUri": {}
    },
    "Transcript": {
      "TranscriptFileUri": {},
      "RedactedTranscriptFileUri": {}
    },
    "StartTime": {},
    "CreationTime": {},
    "CompletionTime": {},
    "FailureReason": {},
    "Settings": {
      "VocabularyName": {},
      "ShowSpeakerLabels": {},
      "MaxSpeakerLabels": {},
      "ChannelIdentification": {},
      "ShowAlternatives": {},
      "MaxAlternatives": {},
      "VocabularyFilterName": {},
      "VocabularyFilterMethod": {}
    },
    "ModelSettings": {
      "LanguageModelName": {}
    },
    "JobExecutionSettings": {
      "AllowDeferredExecution": {},
      "DataAccessRoleArn": {}
    },
    "ContentRedaction": {
      "RedactionType": {},
      "RedactionOutput": {},
      "PiiEntityTypes": {}
    },
    "IdentifyLanguage": {},
    "IdentifyMultipleLanguages": {},
    "LanguageOptions": {},
    "IdentifiedLanguageScore": {},
    "LanguageCodes": {},
    "Tags": {},
    "Subtitles": {
      "Formats": {},
      "SubtitleFileUris": {},
      "OutputStartIndex": {}
    },
    "LanguageIdSettings": {
      "property1": {
        "VocabularyName": {},
        "VocabularyFilterName": {},
        "LanguageModelName": {}
      },
      "property2": {
        "VocabularyName": {},
        "VocabularyFilterName": {},
        "LanguageModelName": {}
      }
    },
    "ToxicityDetection": {}
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

<h3 id="gettranscriptionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTranscriptionJobResponse](#schemagettranscriptionjobresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVocabulary

<a id="opIdGetVocabulary"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.GetVocabulary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.GetVocabulary' \
  -d '{
    "VocabularyName": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.GetVocabulary`

<p>Provides information about the specified custom vocabulary.</p> <p>To view the status of the specified custom vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your custom vocabulary failed.</p> <p>To get a list of your custom vocabularies, use the operation.</p>

> Body parameter

```json
{
  "VocabularyName": {}
}
```

<h3 id="getvocabulary-parameters">Parameters</h3>

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
|body|body|[GetVocabularyRequest](#schemagetvocabularyrequest)|true|none|
|» VocabularyName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.GetVocabulary|

> Example responses

> 200 Response

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "VocabularyState": {},
  "LastModifiedTime": {},
  "FailureReason": {},
  "DownloadUri": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getvocabulary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVocabularyResponse](#schemagetvocabularyresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVocabularyFilter

<a id="opIdGetVocabularyFilter"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.GetVocabularyFilter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.GetVocabularyFilter' \
  -d '{
    "VocabularyFilterName": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.GetVocabularyFilter`

<p>Provides information about the specified custom vocabulary filter.</p> <p>To get a list of your custom vocabulary filters, use the operation.</p>

> Body parameter

```json
{
  "VocabularyFilterName": {}
}
```

<h3 id="getvocabularyfilter-parameters">Parameters</h3>

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
|body|body|[GetVocabularyFilterRequest](#schemagetvocabularyfilterrequest)|true|none|
|» VocabularyFilterName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.GetVocabularyFilter|

> Example responses

> 200 Response

```json
{
  "VocabularyFilterName": {},
  "LanguageCode": {},
  "LastModifiedTime": {},
  "DownloadUri": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getvocabularyfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVocabularyFilterResponse](#schemagetvocabularyfilterresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCallAnalyticsCategories

<a id="opIdListCallAnalyticsCategories"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.ListCallAnalyticsCategories' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.ListCallAnalyticsCategories' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.ListCallAnalyticsCategories`

<p>Provides a list of Call Analytics categories, including all rules that make up each category.</p> <p>To get detailed information about a specific Call Analytics category, use the operation.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listcallanalyticscategories-parameters">Parameters</h3>

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
|body|body|[ListCallAnalyticsCategoriesRequest](#schemalistcallanalyticscategoriesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.ListCallAnalyticsCategories|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Categories": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listcallanalyticscategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCallAnalyticsCategoriesResponse](#schemalistcallanalyticscategoriesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCallAnalyticsJobs

<a id="opIdListCallAnalyticsJobs"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.ListCallAnalyticsJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.ListCallAnalyticsJobs' \
  -d '{
    "Status": {},
    "JobNameContains": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.ListCallAnalyticsJobs`

<p>Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned.</p> <p>To get detailed information about a specific Call Analytics job, use the operation.</p>

> Body parameter

```json
{
  "Status": {},
  "JobNameContains": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listcallanalyticsjobs-parameters">Parameters</h3>

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
|body|body|[ListCallAnalyticsJobsRequest](#schemalistcallanalyticsjobsrequest)|true|none|
|» Status|body|object|false|none|
|» JobNameContains|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.ListCallAnalyticsJobs|

> Example responses

> 200 Response

```json
{
  "Status": {},
  "NextToken": {},
  "CallAnalyticsJobSummaries": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listcallanalyticsjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCallAnalyticsJobsResponse](#schemalistcallanalyticsjobsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLanguageModels

<a id="opIdListLanguageModels"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.ListLanguageModels' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.ListLanguageModels' \
  -d '{
    "StatusEquals": {},
    "NameContains": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.ListLanguageModels`

<p>Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned.</p> <p>To get detailed information about a specific custom language model, use the operation.</p>

> Body parameter

```json
{
  "StatusEquals": {},
  "NameContains": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listlanguagemodels-parameters">Parameters</h3>

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
|body|body|[ListLanguageModelsRequest](#schemalistlanguagemodelsrequest)|true|none|
|» StatusEquals|body|object|false|none|
|» NameContains|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.ListLanguageModels|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Models": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listlanguagemodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLanguageModelsResponse](#schemalistlanguagemodelsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMedicalTranscriptionJobs

<a id="opIdListMedicalTranscriptionJobs"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.ListMedicalTranscriptionJobs' \
  -d '{
    "Status": {},
    "JobNameContains": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs`

<p>Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned.</p> <p>To get detailed information about a specific medical transcription job, use the operation.</p>

> Body parameter

```json
{
  "Status": {},
  "JobNameContains": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listmedicaltranscriptionjobs-parameters">Parameters</h3>

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
|body|body|[ListMedicalTranscriptionJobsRequest](#schemalistmedicaltranscriptionjobsrequest)|true|none|
|» Status|body|object|false|none|
|» JobNameContains|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.ListMedicalTranscriptionJobs|

> Example responses

> 200 Response

```json
{
  "Status": {},
  "NextToken": {},
  "MedicalTranscriptionJobSummaries": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listmedicaltranscriptionjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMedicalTranscriptionJobsResponse](#schemalistmedicaltranscriptionjobsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMedicalVocabularies

<a id="opIdListMedicalVocabularies"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.ListMedicalVocabularies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.ListMedicalVocabularies' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "StateEquals": {},
    "NameContains": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.ListMedicalVocabularies`

<p>Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned.</p> <p>To get detailed information about a specific custom medical vocabulary, use the operation.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "StateEquals": {},
  "NameContains": {}
}
```

<h3 id="listmedicalvocabularies-parameters">Parameters</h3>

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
|body|body|[ListMedicalVocabulariesRequest](#schemalistmedicalvocabulariesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» StateEquals|body|object|false|none|
|» NameContains|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.ListMedicalVocabularies|

> Example responses

> 200 Response

```json
{
  "Status": {},
  "NextToken": {},
  "Vocabularies": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listmedicalvocabularies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMedicalVocabulariesResponse](#schemalistmedicalvocabulariesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.ListTagsForResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.ListTagsForResource`

<p>Lists all tags associated with the specified transcription job, vocabulary, model, or resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>

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
|X-Amz-Target|Transcribe.ListTagsForResource|

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

> 483 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTranscriptionJobs

<a id="opIdListTranscriptionJobs"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.ListTranscriptionJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.ListTranscriptionJobs' \
  -d '{
    "Status": {},
    "JobNameContains": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.ListTranscriptionJobs`

<p>Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned.</p> <p>To get detailed information about a specific transcription job, use the operation.</p>

> Body parameter

```json
{
  "Status": {},
  "JobNameContains": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listtranscriptionjobs-parameters">Parameters</h3>

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
|body|body|[ListTranscriptionJobsRequest](#schemalisttranscriptionjobsrequest)|true|none|
|» Status|body|object|false|none|
|» JobNameContains|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.ListTranscriptionJobs|

> Example responses

> 200 Response

```json
{
  "Status": {},
  "NextToken": {},
  "TranscriptionJobSummaries": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listtranscriptionjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTranscriptionJobsResponse](#schemalisttranscriptionjobsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVocabularies

<a id="opIdListVocabularies"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.ListVocabularies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.ListVocabularies' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "StateEquals": {},
    "NameContains": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.ListVocabularies`

<p>Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary, use the operation.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "StateEquals": {},
  "NameContains": {}
}
```

<h3 id="listvocabularies-parameters">Parameters</h3>

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
|body|body|[ListVocabulariesRequest](#schemalistvocabulariesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» StateEquals|body|object|false|none|
|» NameContains|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.ListVocabularies|

> Example responses

> 200 Response

```json
{
  "Status": {},
  "NextToken": {},
  "Vocabularies": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listvocabularies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVocabulariesResponse](#schemalistvocabulariesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVocabularyFilters

<a id="opIdListVocabularyFilters"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.ListVocabularyFilters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.ListVocabularyFilters' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "NameContains": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.ListVocabularyFilters`

<p>Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary filter, use the operation.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "NameContains": {}
}
```

<h3 id="listvocabularyfilters-parameters">Parameters</h3>

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
|body|body|[ListVocabularyFiltersRequest](#schemalistvocabularyfiltersrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NameContains|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.ListVocabularyFilters|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "VocabularyFilters": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listvocabularyfilters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVocabularyFiltersResponse](#schemalistvocabularyfiltersresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartCallAnalyticsJob

<a id="opIdStartCallAnalyticsJob"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.StartCallAnalyticsJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.StartCallAnalyticsJob' \
  -d '{
    "CallAnalyticsJobName": {},
    "Media": {
      "MediaFileUri": {},
      "RedactedMediaFileUri": {}
    },
    "OutputLocation": {},
    "OutputEncryptionKMSKeyId": {},
    "DataAccessRoleArn": {},
    "Settings": {
      "VocabularyName": {},
      "VocabularyFilterName": {},
      "VocabularyFilterMethod": {},
      "LanguageModelName": {},
      "ContentRedaction": {
        "RedactionType": {},
        "RedactionOutput": {},
        "PiiEntityTypes": {}
      },
      "LanguageOptions": {},
      "LanguageIdSettings": {
        "property1": {
          "VocabularyName": {},
          "VocabularyFilterName": {},
          "LanguageModelName": {}
        },
        "property2": {
          "VocabularyName": {},
          "VocabularyFilterName": {},
          "LanguageModelName": {}
        }
      }
    },
    "ChannelDefinitions": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.StartCallAnalyticsJob`

<p>Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call center audio with Call Analytics</a>.</p> <p>If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p> <p>To make a <code>StartCallAnalyticsJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>Note that job queuing is enabled by default for Call Analytics jobs.</p> <p>You must include the following parameters in your <code>StartCallAnalyticsJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>CallAnalyticsJobName</code>: A custom name that you create for your transcription job that's unique within your Amazon Web Services account.</p> </li> <li> <p> <code>DataAccessRoleArn</code>: The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code> or <code>RedactedMediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> </ul> <note> <p>With Call Analytics, you can redact the audio contained in your media file by including <code>RedactedMediaFileUri</code>, instead of <code>MediaFileUri</code>, to specify the location of your input audio. If you choose to redact your audio, you can find your redacted media at the location specified in the <code>RedactedMediaFileUri</code> field of your response.</p> </note>

> Body parameter

```json
{
  "CallAnalyticsJobName": {},
  "Media": {
    "MediaFileUri": {},
    "RedactedMediaFileUri": {}
  },
  "OutputLocation": {},
  "OutputEncryptionKMSKeyId": {},
  "DataAccessRoleArn": {},
  "Settings": {
    "VocabularyName": {},
    "VocabularyFilterName": {},
    "VocabularyFilterMethod": {},
    "LanguageModelName": {},
    "ContentRedaction": {
      "RedactionType": {},
      "RedactionOutput": {},
      "PiiEntityTypes": {}
    },
    "LanguageOptions": {},
    "LanguageIdSettings": {
      "property1": {
        "VocabularyName": {},
        "VocabularyFilterName": {},
        "LanguageModelName": {}
      },
      "property2": {
        "VocabularyName": {},
        "VocabularyFilterName": {},
        "LanguageModelName": {}
      }
    }
  },
  "ChannelDefinitions": {}
}
```

<h3 id="startcallanalyticsjob-parameters">Parameters</h3>

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
|body|body|[StartCallAnalyticsJobRequest](#schemastartcallanalyticsjobrequest)|true|none|
|» CallAnalyticsJobName|body|object|true|none|
|» Media|body|object|true|none|
|» » MediaFileUri|body|object|false|none|
|» » RedactedMediaFileUri|body|object|false|none|
|» OutputLocation|body|object|false|none|
|» OutputEncryptionKMSKeyId|body|object|false|none|
|» DataAccessRoleArn|body|object|false|none|
|» Settings|body|object|false|none|
|» » VocabularyName|body|object|false|none|
|» » VocabularyFilterName|body|object|false|none|
|» » VocabularyFilterMethod|body|object|false|none|
|» » LanguageModelName|body|object|false|none|
|» » ContentRedaction|body|[ContentRedaction](#schemacontentredaction)|false|Makes it possible to redact or flag specified personally identifiable information (PII) in your transcript. If you use <code>ContentRedaction</code>, you must also include the sub-parameters: <code>PiiEntityTypes</code>, <code>RedactionOutput</code>, and <code>RedactionType</code>.|
|» » LanguageOptions|body|object|false|none|
|» » LanguageIdSettings|body|object|false|none|
|» » » **additionalProperties**|body|[LanguageIdSettings](#schemalanguageidsettings)|false|<p>If using automatic language identification in your request and you want to apply a custom language model, a custom vocabulary, or a custom vocabulary filter, include <code>LanguageIdSettings</code> with the relevant sub-parameters (<code>VocabularyName</code>, <code>LanguageModelName</code>, and <code>VocabularyFilterName</code>). Note that multi-language identification (<code>IdentifyMultipleLanguages</code>) doesn't support custom language models.</p> <p> <code>LanguageIdSettings</code> supports two to five language codes. Each language code you include can have an associated custom language model, custom vocabulary, and custom vocabulary filter. The language codes that you specify must match the languages of the associated custom language models, custom vocabularies, and custom vocabulary filters.</p> <p>It's recommended that you include <code>LanguageOptions</code> when using <code>LanguageIdSettings</code> to ensure that the correct language dialect is identified. For example, if you specify a custom vocabulary that is in <code>en-US</code> but Amazon Transcribe determines that the language spoken in your media is <code>en-AU</code>, your custom vocabulary <i>is not</i> applied to your transcription. If you include <code>LanguageOptions</code> and include <code>en-US</code> as the only English language dialect, your custom vocabulary <i>is</i> applied to your transcription.</p> <p>If you want to include a custom language model with your request but <b>do not</b> want to use automatic language identification, use instead the <code/> parameter with the <code>LanguageModelName</code> sub-parameter. If you want to include a custom vocabulary or a custom vocabulary filter (or both) with your request but <b>do not</b> want to use automatic language identification, use instead the <code/> parameter with the <code>VocabularyName</code> or <code>VocabularyFilterName</code> (or both) sub-parameter.</p>|
|» ChannelDefinitions|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.StartCallAnalyticsJob|

> Example responses

> 200 Response

```json
{
  "CallAnalyticsJob": {
    "CallAnalyticsJobName": {},
    "CallAnalyticsJobStatus": {},
    "LanguageCode": {},
    "MediaSampleRateHertz": {},
    "MediaFormat": {},
    "Media": {
      "MediaFileUri": {},
      "RedactedMediaFileUri": {}
    },
    "Transcript": {
      "TranscriptFileUri": {},
      "RedactedTranscriptFileUri": {}
    },
    "StartTime": {},
    "CreationTime": {},
    "CompletionTime": {},
    "FailureReason": {},
    "DataAccessRoleArn": {},
    "IdentifiedLanguageScore": {},
    "Settings": {
      "VocabularyName": {},
      "VocabularyFilterName": {},
      "VocabularyFilterMethod": {},
      "LanguageModelName": {},
      "ContentRedaction": {
        "RedactionType": {},
        "RedactionOutput": {},
        "PiiEntityTypes": {}
      },
      "LanguageOptions": {},
      "LanguageIdSettings": {
        "property1": {
          "VocabularyName": {},
          "VocabularyFilterName": {},
          "LanguageModelName": {}
        },
        "property2": {
          "VocabularyName": {},
          "VocabularyFilterName": {},
          "LanguageModelName": {}
        }
      }
    },
    "ChannelDefinitions": {}
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

<h3 id="startcallanalyticsjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartCallAnalyticsJobResponse](#schemastartcallanalyticsjobresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartMedicalTranscriptionJob

<a id="opIdStartMedicalTranscriptionJob"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.StartMedicalTranscriptionJob' \
  -d '{
    "MedicalTranscriptionJobName": {},
    "LanguageCode": {},
    "MediaSampleRateHertz": {},
    "MediaFormat": {},
    "Media": {
      "MediaFileUri": {},
      "RedactedMediaFileUri": {}
    },
    "OutputBucketName": {},
    "OutputKey": {},
    "OutputEncryptionKMSKeyId": {},
    "KMSEncryptionContext": {
      "property1": "string",
      "property2": "string"
    },
    "Settings": {
      "ShowSpeakerLabels": {},
      "MaxSpeakerLabels": {},
      "ChannelIdentification": {},
      "ShowAlternatives": {},
      "MaxAlternatives": {},
      "VocabularyName": {}
    },
    "ContentIdentificationType": {},
    "Specialty": {},
    "Type": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob`

<p>Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works-med.html">How Amazon Transcribe Medical works</a>.</p> <p>To make a <code>StartMedicalTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartMedicalTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>MedicalTranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p> <code>LanguageCode</code>: This must be <code>en-US</code>.</p> </li> <li> <p> <code>OutputBucketName</code>: The Amazon S3 bucket where you want your transcript stored. If you want your output stored in a sub-folder of this bucket, you must also include <code>OutputKey</code>.</p> </li> <li> <p> <code>Specialty</code>: This must be <code>PRIMARYCARE</code>.</p> </li> <li> <p> <code>Type</code>: Choose whether your audio is a conversation or a dictation.</p> </li> </ul>

> Body parameter

```json
{
  "MedicalTranscriptionJobName": {},
  "LanguageCode": {},
  "MediaSampleRateHertz": {},
  "MediaFormat": {},
  "Media": {
    "MediaFileUri": {},
    "RedactedMediaFileUri": {}
  },
  "OutputBucketName": {},
  "OutputKey": {},
  "OutputEncryptionKMSKeyId": {},
  "KMSEncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "Settings": {
    "ShowSpeakerLabels": {},
    "MaxSpeakerLabels": {},
    "ChannelIdentification": {},
    "ShowAlternatives": {},
    "MaxAlternatives": {},
    "VocabularyName": {}
  },
  "ContentIdentificationType": {},
  "Specialty": {},
  "Type": {},
  "Tags": {}
}
```

<h3 id="startmedicaltranscriptionjob-parameters">Parameters</h3>

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
|body|body|[StartMedicalTranscriptionJobRequest](#schemastartmedicaltranscriptionjobrequest)|true|none|
|» MedicalTranscriptionJobName|body|object|true|none|
|» LanguageCode|body|object|true|none|
|» MediaSampleRateHertz|body|object|false|none|
|» MediaFormat|body|object|false|none|
|» Media|body|[Media](#schemamedia)|true|<p>Describes the Amazon S3 location of the media file you want to use in your request.</p> <p>For information on supported media formats, refer to the <a href="https://docs.aws.amazon.com/APIReference/API_StartTranscriptionJob.html#transcribe-StartTranscriptionJob-request-MediaFormat">MediaFormat</a> parameter or the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> section in the Amazon S3 Developer Guide.</p>|
|» OutputBucketName|body|object|true|none|
|» OutputKey|body|object|false|none|
|» OutputEncryptionKMSKeyId|body|object|false|none|
|» KMSEncryptionContext|body|object|false|none|
|» » **additionalProperties**|body|[NonEmptyString](#schemanonemptystring)|false|none|
|» Settings|body|object|false|none|
|» » ShowSpeakerLabels|body|object|false|none|
|» » MaxSpeakerLabels|body|object|false|none|
|» » ChannelIdentification|body|object|false|none|
|» » ShowAlternatives|body|object|false|none|
|» » MaxAlternatives|body|object|false|none|
|» » VocabularyName|body|object|false|none|
|» ContentIdentificationType|body|object|false|none|
|» Specialty|body|object|true|none|
|» Type|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.StartMedicalTranscriptionJob|

> Example responses

> 200 Response

```json
{
  "MedicalTranscriptionJob": {
    "MedicalTranscriptionJobName": {},
    "TranscriptionJobStatus": {},
    "LanguageCode": {},
    "MediaSampleRateHertz": {},
    "MediaFormat": {},
    "Media": {
      "MediaFileUri": {},
      "RedactedMediaFileUri": {}
    },
    "Transcript": {
      "TranscriptFileUri": {}
    },
    "StartTime": {},
    "CreationTime": {},
    "CompletionTime": {},
    "FailureReason": {},
    "Settings": {
      "ShowSpeakerLabels": {},
      "MaxSpeakerLabels": {},
      "ChannelIdentification": {},
      "ShowAlternatives": {},
      "MaxAlternatives": {},
      "VocabularyName": {}
    },
    "ContentIdentificationType": {},
    "Specialty": {},
    "Type": {},
    "Tags": {}
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

<h3 id="startmedicaltranscriptionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartMedicalTranscriptionJobResponse](#schemastartmedicaltranscriptionjobresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartTranscriptionJob

<a id="opIdStartTranscriptionJob"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.StartTranscriptionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.StartTranscriptionJob' \
  -d '{
    "TranscriptionJobName": {},
    "LanguageCode": {},
    "MediaSampleRateHertz": {},
    "MediaFormat": {},
    "Media": {
      "MediaFileUri": {},
      "RedactedMediaFileUri": {}
    },
    "OutputBucketName": {},
    "OutputKey": {},
    "OutputEncryptionKMSKeyId": {},
    "KMSEncryptionContext": {
      "property1": "string",
      "property2": "string"
    },
    "Settings": {
      "VocabularyName": {},
      "ShowSpeakerLabels": {},
      "MaxSpeakerLabels": {},
      "ChannelIdentification": {},
      "ShowAlternatives": {},
      "MaxAlternatives": {},
      "VocabularyFilterName": {},
      "VocabularyFilterMethod": {}
    },
    "ModelSettings": {
      "LanguageModelName": {}
    },
    "JobExecutionSettings": {
      "AllowDeferredExecution": {},
      "DataAccessRoleArn": {}
    },
    "ContentRedaction": {
      "RedactionType": {},
      "RedactionOutput": {},
      "PiiEntityTypes": {}
    },
    "IdentifyLanguage": {},
    "IdentifyMultipleLanguages": {},
    "LanguageOptions": {},
    "Subtitles": {
      "Formats": {},
      "OutputStartIndex": {}
    },
    "Tags": {},
    "LanguageIdSettings": {
      "property1": {
        "VocabularyName": {},
        "VocabularyFilterName": {},
        "LanguageModelName": {}
      },
      "property2": {
        "VocabularyName": {},
        "VocabularyFilterName": {},
        "LanguageModelName": {}
      }
    },
    "ToxicityDetection": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.StartTranscriptionJob`

<p>Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request.</p> <p>To make a <code>StartTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>TranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p>One of <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code>: If you know the language of your media file, specify it using the <code>LanguageCode</code> parameter; you can find all valid language codes in the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table. If you don't know the languages spoken in your media, use either <code>IdentifyLanguage</code> or <code>IdentifyMultipleLanguages</code> and let Amazon Transcribe identify the languages for you.</p> </li> </ul>

> Body parameter

```json
{
  "TranscriptionJobName": {},
  "LanguageCode": {},
  "MediaSampleRateHertz": {},
  "MediaFormat": {},
  "Media": {
    "MediaFileUri": {},
    "RedactedMediaFileUri": {}
  },
  "OutputBucketName": {},
  "OutputKey": {},
  "OutputEncryptionKMSKeyId": {},
  "KMSEncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "Settings": {
    "VocabularyName": {},
    "ShowSpeakerLabels": {},
    "MaxSpeakerLabels": {},
    "ChannelIdentification": {},
    "ShowAlternatives": {},
    "MaxAlternatives": {},
    "VocabularyFilterName": {},
    "VocabularyFilterMethod": {}
  },
  "ModelSettings": {
    "LanguageModelName": {}
  },
  "JobExecutionSettings": {
    "AllowDeferredExecution": {},
    "DataAccessRoleArn": {}
  },
  "ContentRedaction": {
    "RedactionType": {},
    "RedactionOutput": {},
    "PiiEntityTypes": {}
  },
  "IdentifyLanguage": {},
  "IdentifyMultipleLanguages": {},
  "LanguageOptions": {},
  "Subtitles": {
    "Formats": {},
    "OutputStartIndex": {}
  },
  "Tags": {},
  "LanguageIdSettings": {
    "property1": {
      "VocabularyName": {},
      "VocabularyFilterName": {},
      "LanguageModelName": {}
    },
    "property2": {
      "VocabularyName": {},
      "VocabularyFilterName": {},
      "LanguageModelName": {}
    }
  },
  "ToxicityDetection": {}
}
```

<h3 id="starttranscriptionjob-parameters">Parameters</h3>

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
|body|body|[StartTranscriptionJobRequest](#schemastarttranscriptionjobrequest)|true|none|
|» TranscriptionJobName|body|object|true|none|
|» LanguageCode|body|object|false|none|
|» MediaSampleRateHertz|body|object|false|none|
|» MediaFormat|body|object|false|none|
|» Media|body|object|true|none|
|» » MediaFileUri|body|object|false|none|
|» » RedactedMediaFileUri|body|object|false|none|
|» OutputBucketName|body|object|false|none|
|» OutputKey|body|object|false|none|
|» OutputEncryptionKMSKeyId|body|object|false|none|
|» KMSEncryptionContext|body|object|false|none|
|» » **additionalProperties**|body|[NonEmptyString](#schemanonemptystring)|false|none|
|» Settings|body|object|false|none|
|» » VocabularyName|body|object|false|none|
|» » ShowSpeakerLabels|body|object|false|none|
|» » MaxSpeakerLabels|body|object|false|none|
|» » ChannelIdentification|body|object|false|none|
|» » ShowAlternatives|body|object|false|none|
|» » MaxAlternatives|body|object|false|none|
|» » VocabularyFilterName|body|object|false|none|
|» » VocabularyFilterMethod|body|object|false|none|
|» ModelSettings|body|object|false|none|
|» » LanguageModelName|body|object|false|none|
|» JobExecutionSettings|body|object|false|none|
|» » AllowDeferredExecution|body|object|false|none|
|» » DataAccessRoleArn|body|object|false|none|
|» ContentRedaction|body|object|false|none|
|» » RedactionType|body|object|true|none|
|» » RedactionOutput|body|object|true|none|
|» » PiiEntityTypes|body|object|false|none|
|» IdentifyLanguage|body|object|false|none|
|» IdentifyMultipleLanguages|body|object|false|none|
|» LanguageOptions|body|object|false|none|
|» Subtitles|body|object|false|none|
|» » Formats|body|object|false|none|
|» » OutputStartIndex|body|object|false|none|
|» Tags|body|object|false|none|
|» LanguageIdSettings|body|object|false|none|
|» » **additionalProperties**|body|[LanguageIdSettings](#schemalanguageidsettings)|false|<p>If using automatic language identification in your request and you want to apply a custom language model, a custom vocabulary, or a custom vocabulary filter, include <code>LanguageIdSettings</code> with the relevant sub-parameters (<code>VocabularyName</code>, <code>LanguageModelName</code>, and <code>VocabularyFilterName</code>). Note that multi-language identification (<code>IdentifyMultipleLanguages</code>) doesn't support custom language models.</p> <p> <code>LanguageIdSettings</code> supports two to five language codes. Each language code you include can have an associated custom language model, custom vocabulary, and custom vocabulary filter. The language codes that you specify must match the languages of the associated custom language models, custom vocabularies, and custom vocabulary filters.</p> <p>It's recommended that you include <code>LanguageOptions</code> when using <code>LanguageIdSettings</code> to ensure that the correct language dialect is identified. For example, if you specify a custom vocabulary that is in <code>en-US</code> but Amazon Transcribe determines that the language spoken in your media is <code>en-AU</code>, your custom vocabulary <i>is not</i> applied to your transcription. If you include <code>LanguageOptions</code> and include <code>en-US</code> as the only English language dialect, your custom vocabulary <i>is</i> applied to your transcription.</p> <p>If you want to include a custom language model with your request but <b>do not</b> want to use automatic language identification, use instead the <code/> parameter with the <code>LanguageModelName</code> sub-parameter. If you want to include a custom vocabulary or a custom vocabulary filter (or both) with your request but <b>do not</b> want to use automatic language identification, use instead the <code/> parameter with the <code>VocabularyName</code> or <code>VocabularyFilterName</code> (or both) sub-parameter.</p>|
|» ToxicityDetection|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.StartTranscriptionJob|

> Example responses

> 200 Response

```json
{
  "TranscriptionJob": {
    "TranscriptionJobName": {},
    "TranscriptionJobStatus": {},
    "LanguageCode": {},
    "MediaSampleRateHertz": {},
    "MediaFormat": {},
    "Media": {
      "MediaFileUri": {},
      "RedactedMediaFileUri": {}
    },
    "Transcript": {
      "TranscriptFileUri": {},
      "RedactedTranscriptFileUri": {}
    },
    "StartTime": {},
    "CreationTime": {},
    "CompletionTime": {},
    "FailureReason": {},
    "Settings": {
      "VocabularyName": {},
      "ShowSpeakerLabels": {},
      "MaxSpeakerLabels": {},
      "ChannelIdentification": {},
      "ShowAlternatives": {},
      "MaxAlternatives": {},
      "VocabularyFilterName": {},
      "VocabularyFilterMethod": {}
    },
    "ModelSettings": {
      "LanguageModelName": {}
    },
    "JobExecutionSettings": {
      "AllowDeferredExecution": {},
      "DataAccessRoleArn": {}
    },
    "ContentRedaction": {
      "RedactionType": {},
      "RedactionOutput": {},
      "PiiEntityTypes": {}
    },
    "IdentifyLanguage": {},
    "IdentifyMultipleLanguages": {},
    "LanguageOptions": {},
    "IdentifiedLanguageScore": {},
    "LanguageCodes": {},
    "Tags": {},
    "Subtitles": {
      "Formats": {},
      "SubtitleFileUris": {},
      "OutputStartIndex": {}
    },
    "LanguageIdSettings": {
      "property1": {
        "VocabularyName": {},
        "VocabularyFilterName": {},
        "LanguageModelName": {}
      },
      "property2": {
        "VocabularyName": {},
        "VocabularyFilterName": {},
        "LanguageModelName": {}
      }
    },
    "ToxicityDetection": {}
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

<h3 id="starttranscriptionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartTranscriptionJobResponse](#schemastarttranscriptionjobresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.TagResource`

<p>Adds one or more custom tags, each in the form of a key:value pair, to the specified resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>

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
|X-Amz-Target|Transcribe.TagResource|

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
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.UntagResource`

<p>Removes the specified tags from the specified Amazon Transcribe resource.</p> <p>If you include <code>UntagResource</code> in your request, you must also include <code>ResourceArn</code> and <code>TagKeys</code>.</p>

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
|X-Amz-Target|Transcribe.UntagResource|

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
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCallAnalyticsCategory

<a id="opIdUpdateCallAnalyticsCategory"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.UpdateCallAnalyticsCategory' \
  -d '{
    "CategoryName": {},
    "Rules": {},
    "InputType": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory`

<p>Updates the specified Call Analytics category with new rules. Note that the <code>UpdateCallAnalyticsCategory</code> operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category.</p> <p>To create a new category, see .</p>

> Body parameter

```json
{
  "CategoryName": {},
  "Rules": {},
  "InputType": {}
}
```

<h3 id="updatecallanalyticscategory-parameters">Parameters</h3>

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
|body|body|[UpdateCallAnalyticsCategoryRequest](#schemaupdatecallanalyticscategoryrequest)|true|none|
|» CategoryName|body|object|true|none|
|» Rules|body|object|true|none|
|» InputType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.UpdateCallAnalyticsCategory|

> Example responses

> 200 Response

```json
{
  "CategoryProperties": {
    "CategoryName": {},
    "Rules": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "InputType": {}
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

<h3 id="updatecallanalyticscategory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCallAnalyticsCategoryResponse](#schemaupdatecallanalyticscategoryresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMedicalVocabulary

<a id="opIdUpdateMedicalVocabulary"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.UpdateMedicalVocabulary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.UpdateMedicalVocabulary' \
  -d '{
    "VocabularyName": {},
    "LanguageCode": {},
    "VocabularyFileUri": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.UpdateMedicalVocabulary`

Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.

> Body parameter

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "VocabularyFileUri": {}
}
```

<h3 id="updatemedicalvocabulary-parameters">Parameters</h3>

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
|body|body|[UpdateMedicalVocabularyRequest](#schemaupdatemedicalvocabularyrequest)|true|none|
|» VocabularyName|body|object|true|none|
|» LanguageCode|body|object|true|none|
|» VocabularyFileUri|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.UpdateMedicalVocabulary|

> Example responses

> 200 Response

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "LastModifiedTime": {},
  "VocabularyState": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatemedicalvocabulary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMedicalVocabularyResponse](#schemaupdatemedicalvocabularyresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVocabulary

<a id="opIdUpdateVocabulary"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.UpdateVocabulary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.UpdateVocabulary' \
  -d '{
    "VocabularyName": {},
    "LanguageCode": {},
    "Phrases": {},
    "VocabularyFileUri": {},
    "DataAccessRoleArn": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.UpdateVocabulary`

Updates an existing custom vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.

> Body parameter

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "Phrases": {},
  "VocabularyFileUri": {},
  "DataAccessRoleArn": {}
}
```

<h3 id="updatevocabulary-parameters">Parameters</h3>

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
|body|body|[UpdateVocabularyRequest](#schemaupdatevocabularyrequest)|true|none|
|» VocabularyName|body|object|true|none|
|» LanguageCode|body|object|true|none|
|» Phrases|body|object|false|none|
|» VocabularyFileUri|body|object|false|none|
|» DataAccessRoleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.UpdateVocabulary|

> Example responses

> 200 Response

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "LastModifiedTime": {},
  "VocabularyState": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatevocabulary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateVocabularyResponse](#schemaupdatevocabularyresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVocabularyFilter

<a id="opIdUpdateVocabularyFilter"></a>

> Code samples

```bash
curl 'https://transcribe.us-east-1.amazonaws.com/#X-Amz-Target=Transcribe.UpdateVocabularyFilter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Transcribe.UpdateVocabularyFilter' \
  -d '{
    "VocabularyFilterName": {},
    "Words": {},
    "VocabularyFilterFileUri": {},
    "DataAccessRoleArn": {}
  }'
```

`POST /#X-Amz-Target=Transcribe.UpdateVocabularyFilter`

Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter.

> Body parameter

```json
{
  "VocabularyFilterName": {},
  "Words": {},
  "VocabularyFilterFileUri": {},
  "DataAccessRoleArn": {}
}
```

<h3 id="updatevocabularyfilter-parameters">Parameters</h3>

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
|body|body|[UpdateVocabularyFilterRequest](#schemaupdatevocabularyfilterrequest)|true|none|
|» VocabularyFilterName|body|object|true|none|
|» Words|body|object|false|none|
|» VocabularyFilterFileUri|body|object|false|none|
|» DataAccessRoleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Transcribe.UpdateVocabularyFilter|

> Example responses

> 200 Response

```json
{
  "VocabularyFilterName": {},
  "LanguageCode": {},
  "LastModifiedTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="updatevocabularyfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateVocabularyFilterResponse](#schemaupdatevocabularyfilterresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateCallAnalyticsCategoryResponse">CreateCallAnalyticsCategoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecallanalyticscategoryresponse"></a>
<a id="schema_CreateCallAnalyticsCategoryResponse"></a>
<a id="tocScreatecallanalyticscategoryresponse"></a>
<a id="tocscreatecallanalyticscategoryresponse"></a>

```json
{
  "CategoryProperties": {
    "CategoryName": {},
    "Rules": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "InputType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryProperties|object|false|none|none|

<h2 id="tocS_CreateCallAnalyticsCategoryRequest">CreateCallAnalyticsCategoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecallanalyticscategoryrequest"></a>
<a id="schema_CreateCallAnalyticsCategoryRequest"></a>
<a id="tocScreatecallanalyticscategoryrequest"></a>
<a id="tocscreatecallanalyticscategoryrequest"></a>

```json
{
  "CategoryName": {},
  "Rules": {},
  "InputType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryName|object|true|none|none|
|Rules|object|true|none|none|
|InputType|object|false|none|none|

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

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

<h2 id="tocS_InternalFailureException">InternalFailureException</h2>
<!-- backwards compatibility -->
<a id="schemainternalfailureexception"></a>
<a id="schema_InternalFailureException"></a>
<a id="tocSinternalfailureexception"></a>
<a id="tocsinternalfailureexception"></a>

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

<h2 id="tocS_CreateLanguageModelResponse">CreateLanguageModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelanguagemodelresponse"></a>
<a id="schema_CreateLanguageModelResponse"></a>
<a id="tocScreatelanguagemodelresponse"></a>
<a id="tocscreatelanguagemodelresponse"></a>

```json
{
  "LanguageCode": {},
  "BaseModelName": {},
  "ModelName": {},
  "InputDataConfig": {
    "S3Uri": {},
    "TuningDataS3Uri": {},
    "DataAccessRoleArn": {}
  },
  "ModelStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageCode|object|false|none|none|
|BaseModelName|object|false|none|none|
|ModelName|object|false|none|none|
|InputDataConfig|object|false|none|none|
|ModelStatus|object|false|none|none|

<h2 id="tocS_CreateLanguageModelRequest">CreateLanguageModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelanguagemodelrequest"></a>
<a id="schema_CreateLanguageModelRequest"></a>
<a id="tocScreatelanguagemodelrequest"></a>
<a id="tocscreatelanguagemodelrequest"></a>

```json
{
  "LanguageCode": {},
  "BaseModelName": {},
  "ModelName": {},
  "InputDataConfig": {
    "S3Uri": {},
    "TuningDataS3Uri": {},
    "DataAccessRoleArn": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageCode|object|true|none|none|
|BaseModelName|object|true|none|none|
|ModelName|object|true|none|none|
|InputDataConfig|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateMedicalVocabularyResponse">CreateMedicalVocabularyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemedicalvocabularyresponse"></a>
<a id="schema_CreateMedicalVocabularyResponse"></a>
<a id="tocScreatemedicalvocabularyresponse"></a>
<a id="tocscreatemedicalvocabularyresponse"></a>

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "VocabularyState": {},
  "LastModifiedTime": {},
  "FailureReason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|false|none|none|
|LanguageCode|object|false|none|none|
|VocabularyState|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|FailureReason|object|false|none|none|

<h2 id="tocS_CreateMedicalVocabularyRequest">CreateMedicalVocabularyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemedicalvocabularyrequest"></a>
<a id="schema_CreateMedicalVocabularyRequest"></a>
<a id="tocScreatemedicalvocabularyrequest"></a>
<a id="tocscreatemedicalvocabularyrequest"></a>

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "VocabularyFileUri": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|true|none|none|
|LanguageCode|object|true|none|none|
|VocabularyFileUri|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateVocabularyResponse">CreateVocabularyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevocabularyresponse"></a>
<a id="schema_CreateVocabularyResponse"></a>
<a id="tocScreatevocabularyresponse"></a>
<a id="tocscreatevocabularyresponse"></a>

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "VocabularyState": {},
  "LastModifiedTime": {},
  "FailureReason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|false|none|none|
|LanguageCode|object|false|none|none|
|VocabularyState|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|FailureReason|object|false|none|none|

<h2 id="tocS_CreateVocabularyRequest">CreateVocabularyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevocabularyrequest"></a>
<a id="schema_CreateVocabularyRequest"></a>
<a id="tocScreatevocabularyrequest"></a>
<a id="tocscreatevocabularyrequest"></a>

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "Phrases": {},
  "VocabularyFileUri": {},
  "Tags": {},
  "DataAccessRoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|true|none|none|
|LanguageCode|object|true|none|none|
|Phrases|object|false|none|none|
|VocabularyFileUri|object|false|none|none|
|Tags|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|

<h2 id="tocS_CreateVocabularyFilterResponse">CreateVocabularyFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevocabularyfilterresponse"></a>
<a id="schema_CreateVocabularyFilterResponse"></a>
<a id="tocScreatevocabularyfilterresponse"></a>
<a id="tocscreatevocabularyfilterresponse"></a>

```json
{
  "VocabularyFilterName": {},
  "LanguageCode": {},
  "LastModifiedTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyFilterName|object|false|none|none|
|LanguageCode|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_CreateVocabularyFilterRequest">CreateVocabularyFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevocabularyfilterrequest"></a>
<a id="schema_CreateVocabularyFilterRequest"></a>
<a id="tocScreatevocabularyfilterrequest"></a>
<a id="tocscreatevocabularyfilterrequest"></a>

```json
{
  "VocabularyFilterName": {},
  "LanguageCode": {},
  "Words": {},
  "VocabularyFilterFileUri": {},
  "Tags": {},
  "DataAccessRoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyFilterName|object|true|none|none|
|LanguageCode|object|true|none|none|
|Words|object|false|none|none|
|VocabularyFilterFileUri|object|false|none|none|
|Tags|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|

<h2 id="tocS_DeleteCallAnalyticsCategoryResponse">DeleteCallAnalyticsCategoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecallanalyticscategoryresponse"></a>
<a id="schema_DeleteCallAnalyticsCategoryResponse"></a>
<a id="tocSdeletecallanalyticscategoryresponse"></a>
<a id="tocsdeletecallanalyticscategoryresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteCallAnalyticsCategoryRequest">DeleteCallAnalyticsCategoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecallanalyticscategoryrequest"></a>
<a id="schema_DeleteCallAnalyticsCategoryRequest"></a>
<a id="tocSdeletecallanalyticscategoryrequest"></a>
<a id="tocsdeletecallanalyticscategoryrequest"></a>

```json
{
  "CategoryName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryName|object|true|none|none|

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteCallAnalyticsJobResponse">DeleteCallAnalyticsJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecallanalyticsjobresponse"></a>
<a id="schema_DeleteCallAnalyticsJobResponse"></a>
<a id="tocSdeletecallanalyticsjobresponse"></a>
<a id="tocsdeletecallanalyticsjobresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteCallAnalyticsJobRequest">DeleteCallAnalyticsJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecallanalyticsjobrequest"></a>
<a id="schema_DeleteCallAnalyticsJobRequest"></a>
<a id="tocSdeletecallanalyticsjobrequest"></a>
<a id="tocsdeletecallanalyticsjobrequest"></a>

```json
{
  "CallAnalyticsJobName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallAnalyticsJobName|object|true|none|none|

<h2 id="tocS_DeleteLanguageModelRequest">DeleteLanguageModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelanguagemodelrequest"></a>
<a id="schema_DeleteLanguageModelRequest"></a>
<a id="tocSdeletelanguagemodelrequest"></a>
<a id="tocsdeletelanguagemodelrequest"></a>

```json
{
  "ModelName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelName|object|true|none|none|

<h2 id="tocS_DeleteMedicalTranscriptionJobRequest">DeleteMedicalTranscriptionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemedicaltranscriptionjobrequest"></a>
<a id="schema_DeleteMedicalTranscriptionJobRequest"></a>
<a id="tocSdeletemedicaltranscriptionjobrequest"></a>
<a id="tocsdeletemedicaltranscriptionjobrequest"></a>

```json
{
  "MedicalTranscriptionJobName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MedicalTranscriptionJobName|object|true|none|none|

<h2 id="tocS_DeleteMedicalVocabularyRequest">DeleteMedicalVocabularyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemedicalvocabularyrequest"></a>
<a id="schema_DeleteMedicalVocabularyRequest"></a>
<a id="tocSdeletemedicalvocabularyrequest"></a>
<a id="tocsdeletemedicalvocabularyrequest"></a>

```json
{
  "VocabularyName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|true|none|none|

<h2 id="tocS_DeleteTranscriptionJobRequest">DeleteTranscriptionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetranscriptionjobrequest"></a>
<a id="schema_DeleteTranscriptionJobRequest"></a>
<a id="tocSdeletetranscriptionjobrequest"></a>
<a id="tocsdeletetranscriptionjobrequest"></a>

```json
{
  "TranscriptionJobName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TranscriptionJobName|object|true|none|none|

<h2 id="tocS_DeleteVocabularyRequest">DeleteVocabularyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevocabularyrequest"></a>
<a id="schema_DeleteVocabularyRequest"></a>
<a id="tocSdeletevocabularyrequest"></a>
<a id="tocsdeletevocabularyrequest"></a>

```json
{
  "VocabularyName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|true|none|none|

<h2 id="tocS_DeleteVocabularyFilterRequest">DeleteVocabularyFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevocabularyfilterrequest"></a>
<a id="schema_DeleteVocabularyFilterRequest"></a>
<a id="tocSdeletevocabularyfilterrequest"></a>
<a id="tocsdeletevocabularyfilterrequest"></a>

```json
{
  "VocabularyFilterName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyFilterName|object|true|none|none|

<h2 id="tocS_DescribeLanguageModelResponse">DescribeLanguageModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelanguagemodelresponse"></a>
<a id="schema_DescribeLanguageModelResponse"></a>
<a id="tocSdescribelanguagemodelresponse"></a>
<a id="tocsdescribelanguagemodelresponse"></a>

```json
{
  "LanguageModel": {
    "ModelName": {},
    "CreateTime": {},
    "LastModifiedTime": {},
    "LanguageCode": {},
    "BaseModelName": {},
    "ModelStatus": {},
    "UpgradeAvailability": {},
    "FailureReason": {},
    "InputDataConfig": {
      "S3Uri": {},
      "TuningDataS3Uri": {},
      "DataAccessRoleArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageModel|object|false|none|none|

<h2 id="tocS_DescribeLanguageModelRequest">DescribeLanguageModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelanguagemodelrequest"></a>
<a id="schema_DescribeLanguageModelRequest"></a>
<a id="tocSdescribelanguagemodelrequest"></a>
<a id="tocsdescribelanguagemodelrequest"></a>

```json
{
  "ModelName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelName|object|true|none|none|

<h2 id="tocS_GetCallAnalyticsCategoryResponse">GetCallAnalyticsCategoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcallanalyticscategoryresponse"></a>
<a id="schema_GetCallAnalyticsCategoryResponse"></a>
<a id="tocSgetcallanalyticscategoryresponse"></a>
<a id="tocsgetcallanalyticscategoryresponse"></a>

```json
{
  "CategoryProperties": {
    "CategoryName": {},
    "Rules": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "InputType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryProperties|object|false|none|none|

<h2 id="tocS_GetCallAnalyticsCategoryRequest">GetCallAnalyticsCategoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcallanalyticscategoryrequest"></a>
<a id="schema_GetCallAnalyticsCategoryRequest"></a>
<a id="tocSgetcallanalyticscategoryrequest"></a>
<a id="tocsgetcallanalyticscategoryrequest"></a>

```json
{
  "CategoryName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryName|object|true|none|none|

<h2 id="tocS_GetCallAnalyticsJobResponse">GetCallAnalyticsJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcallanalyticsjobresponse"></a>
<a id="schema_GetCallAnalyticsJobResponse"></a>
<a id="tocSgetcallanalyticsjobresponse"></a>
<a id="tocsgetcallanalyticsjobresponse"></a>

```json
{
  "CallAnalyticsJob": {
    "CallAnalyticsJobName": {},
    "CallAnalyticsJobStatus": {},
    "LanguageCode": {},
    "MediaSampleRateHertz": {},
    "MediaFormat": {},
    "Media": {
      "MediaFileUri": {},
      "RedactedMediaFileUri": {}
    },
    "Transcript": {
      "TranscriptFileUri": {},
      "RedactedTranscriptFileUri": {}
    },
    "StartTime": {},
    "CreationTime": {},
    "CompletionTime": {},
    "FailureReason": {},
    "DataAccessRoleArn": {},
    "IdentifiedLanguageScore": {},
    "Settings": {
      "VocabularyName": {},
      "VocabularyFilterName": {},
      "VocabularyFilterMethod": {},
      "LanguageModelName": {},
      "ContentRedaction": {
        "RedactionType": {},
        "RedactionOutput": {},
        "PiiEntityTypes": {}
      },
      "LanguageOptions": {},
      "LanguageIdSettings": {
        "property1": {
          "VocabularyName": {},
          "VocabularyFilterName": {},
          "LanguageModelName": {}
        },
        "property2": {
          "VocabularyName": {},
          "VocabularyFilterName": {},
          "LanguageModelName": {}
        }
      }
    },
    "ChannelDefinitions": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallAnalyticsJob|object|false|none|none|

<h2 id="tocS_GetCallAnalyticsJobRequest">GetCallAnalyticsJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcallanalyticsjobrequest"></a>
<a id="schema_GetCallAnalyticsJobRequest"></a>
<a id="tocSgetcallanalyticsjobrequest"></a>
<a id="tocsgetcallanalyticsjobrequest"></a>

```json
{
  "CallAnalyticsJobName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallAnalyticsJobName|object|true|none|none|

<h2 id="tocS_GetMedicalTranscriptionJobResponse">GetMedicalTranscriptionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmedicaltranscriptionjobresponse"></a>
<a id="schema_GetMedicalTranscriptionJobResponse"></a>
<a id="tocSgetmedicaltranscriptionjobresponse"></a>
<a id="tocsgetmedicaltranscriptionjobresponse"></a>

```json
{
  "MedicalTranscriptionJob": {
    "MedicalTranscriptionJobName": {},
    "TranscriptionJobStatus": {},
    "LanguageCode": {},
    "MediaSampleRateHertz": {},
    "MediaFormat": {},
    "Media": {
      "MediaFileUri": {},
      "RedactedMediaFileUri": {}
    },
    "Transcript": {
      "TranscriptFileUri": {}
    },
    "StartTime": {},
    "CreationTime": {},
    "CompletionTime": {},
    "FailureReason": {},
    "Settings": {
      "ShowSpeakerLabels": {},
      "MaxSpeakerLabels": {},
      "ChannelIdentification": {},
      "ShowAlternatives": {},
      "MaxAlternatives": {},
      "VocabularyName": {}
    },
    "ContentIdentificationType": {},
    "Specialty": {},
    "Type": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MedicalTranscriptionJob|object|false|none|none|

<h2 id="tocS_GetMedicalTranscriptionJobRequest">GetMedicalTranscriptionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmedicaltranscriptionjobrequest"></a>
<a id="schema_GetMedicalTranscriptionJobRequest"></a>
<a id="tocSgetmedicaltranscriptionjobrequest"></a>
<a id="tocsgetmedicaltranscriptionjobrequest"></a>

```json
{
  "MedicalTranscriptionJobName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MedicalTranscriptionJobName|object|true|none|none|

<h2 id="tocS_GetMedicalVocabularyResponse">GetMedicalVocabularyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmedicalvocabularyresponse"></a>
<a id="schema_GetMedicalVocabularyResponse"></a>
<a id="tocSgetmedicalvocabularyresponse"></a>
<a id="tocsgetmedicalvocabularyresponse"></a>

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "VocabularyState": {},
  "LastModifiedTime": {},
  "FailureReason": {},
  "DownloadUri": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|false|none|none|
|LanguageCode|object|false|none|none|
|VocabularyState|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|FailureReason|object|false|none|none|
|DownloadUri|object|false|none|none|

<h2 id="tocS_GetMedicalVocabularyRequest">GetMedicalVocabularyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmedicalvocabularyrequest"></a>
<a id="schema_GetMedicalVocabularyRequest"></a>
<a id="tocSgetmedicalvocabularyrequest"></a>
<a id="tocsgetmedicalvocabularyrequest"></a>

```json
{
  "VocabularyName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|true|none|none|

<h2 id="tocS_GetTranscriptionJobResponse">GetTranscriptionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettranscriptionjobresponse"></a>
<a id="schema_GetTranscriptionJobResponse"></a>
<a id="tocSgettranscriptionjobresponse"></a>
<a id="tocsgettranscriptionjobresponse"></a>

```json
{
  "TranscriptionJob": {
    "TranscriptionJobName": {},
    "TranscriptionJobStatus": {},
    "LanguageCode": {},
    "MediaSampleRateHertz": {},
    "MediaFormat": {},
    "Media": {
      "MediaFileUri": {},
      "RedactedMediaFileUri": {}
    },
    "Transcript": {
      "TranscriptFileUri": {},
      "RedactedTranscriptFileUri": {}
    },
    "StartTime": {},
    "CreationTime": {},
    "CompletionTime": {},
    "FailureReason": {},
    "Settings": {
      "VocabularyName": {},
      "ShowSpeakerLabels": {},
      "MaxSpeakerLabels": {},
      "ChannelIdentification": {},
      "ShowAlternatives": {},
      "MaxAlternatives": {},
      "VocabularyFilterName": {},
      "VocabularyFilterMethod": {}
    },
    "ModelSettings": {
      "LanguageModelName": {}
    },
    "JobExecutionSettings": {
      "AllowDeferredExecution": {},
      "DataAccessRoleArn": {}
    },
    "ContentRedaction": {
      "RedactionType": {},
      "RedactionOutput": {},
      "PiiEntityTypes": {}
    },
    "IdentifyLanguage": {},
    "IdentifyMultipleLanguages": {},
    "LanguageOptions": {},
    "IdentifiedLanguageScore": {},
    "LanguageCodes": {},
    "Tags": {},
    "Subtitles": {
      "Formats": {},
      "SubtitleFileUris": {},
      "OutputStartIndex": {}
    },
    "LanguageIdSettings": {
      "property1": {
        "VocabularyName": {},
        "VocabularyFilterName": {},
        "LanguageModelName": {}
      },
      "property2": {
        "VocabularyName": {},
        "VocabularyFilterName": {},
        "LanguageModelName": {}
      }
    },
    "ToxicityDetection": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TranscriptionJob|object|false|none|none|

<h2 id="tocS_GetTranscriptionJobRequest">GetTranscriptionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettranscriptionjobrequest"></a>
<a id="schema_GetTranscriptionJobRequest"></a>
<a id="tocSgettranscriptionjobrequest"></a>
<a id="tocsgettranscriptionjobrequest"></a>

```json
{
  "TranscriptionJobName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TranscriptionJobName|object|true|none|none|

<h2 id="tocS_GetVocabularyResponse">GetVocabularyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetvocabularyresponse"></a>
<a id="schema_GetVocabularyResponse"></a>
<a id="tocSgetvocabularyresponse"></a>
<a id="tocsgetvocabularyresponse"></a>

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "VocabularyState": {},
  "LastModifiedTime": {},
  "FailureReason": {},
  "DownloadUri": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|false|none|none|
|LanguageCode|object|false|none|none|
|VocabularyState|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|FailureReason|object|false|none|none|
|DownloadUri|object|false|none|none|

<h2 id="tocS_GetVocabularyRequest">GetVocabularyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvocabularyrequest"></a>
<a id="schema_GetVocabularyRequest"></a>
<a id="tocSgetvocabularyrequest"></a>
<a id="tocsgetvocabularyrequest"></a>

```json
{
  "VocabularyName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|true|none|none|

<h2 id="tocS_GetVocabularyFilterResponse">GetVocabularyFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetvocabularyfilterresponse"></a>
<a id="schema_GetVocabularyFilterResponse"></a>
<a id="tocSgetvocabularyfilterresponse"></a>
<a id="tocsgetvocabularyfilterresponse"></a>

```json
{
  "VocabularyFilterName": {},
  "LanguageCode": {},
  "LastModifiedTime": {},
  "DownloadUri": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyFilterName|object|false|none|none|
|LanguageCode|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|DownloadUri|object|false|none|none|

<h2 id="tocS_GetVocabularyFilterRequest">GetVocabularyFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvocabularyfilterrequest"></a>
<a id="schema_GetVocabularyFilterRequest"></a>
<a id="tocSgetvocabularyfilterrequest"></a>
<a id="tocsgetvocabularyfilterrequest"></a>

```json
{
  "VocabularyFilterName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyFilterName|object|true|none|none|

<h2 id="tocS_ListCallAnalyticsCategoriesResponse">ListCallAnalyticsCategoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcallanalyticscategoriesresponse"></a>
<a id="schema_ListCallAnalyticsCategoriesResponse"></a>
<a id="tocSlistcallanalyticscategoriesresponse"></a>
<a id="tocslistcallanalyticscategoriesresponse"></a>

```json
{
  "NextToken": {},
  "Categories": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Categories|object|false|none|none|

<h2 id="tocS_ListCallAnalyticsCategoriesRequest">ListCallAnalyticsCategoriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcallanalyticscategoriesrequest"></a>
<a id="schema_ListCallAnalyticsCategoriesRequest"></a>
<a id="tocSlistcallanalyticscategoriesrequest"></a>
<a id="tocslistcallanalyticscategoriesrequest"></a>

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

<h2 id="tocS_ListCallAnalyticsJobsResponse">ListCallAnalyticsJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcallanalyticsjobsresponse"></a>
<a id="schema_ListCallAnalyticsJobsResponse"></a>
<a id="tocSlistcallanalyticsjobsresponse"></a>
<a id="tocslistcallanalyticsjobsresponse"></a>

```json
{
  "Status": {},
  "NextToken": {},
  "CallAnalyticsJobSummaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|NextToken|object|false|none|none|
|CallAnalyticsJobSummaries|object|false|none|none|

<h2 id="tocS_ListCallAnalyticsJobsRequest">ListCallAnalyticsJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcallanalyticsjobsrequest"></a>
<a id="schema_ListCallAnalyticsJobsRequest"></a>
<a id="tocSlistcallanalyticsjobsrequest"></a>
<a id="tocslistcallanalyticsjobsrequest"></a>

```json
{
  "Status": {},
  "JobNameContains": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|JobNameContains|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListLanguageModelsResponse">ListLanguageModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlanguagemodelsresponse"></a>
<a id="schema_ListLanguageModelsResponse"></a>
<a id="tocSlistlanguagemodelsresponse"></a>
<a id="tocslistlanguagemodelsresponse"></a>

```json
{
  "NextToken": {},
  "Models": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Models|object|false|none|none|

<h2 id="tocS_ListLanguageModelsRequest">ListLanguageModelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlanguagemodelsrequest"></a>
<a id="schema_ListLanguageModelsRequest"></a>
<a id="tocSlistlanguagemodelsrequest"></a>
<a id="tocslistlanguagemodelsrequest"></a>

```json
{
  "StatusEquals": {},
  "NameContains": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatusEquals|object|false|none|none|
|NameContains|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListMedicalTranscriptionJobsResponse">ListMedicalTranscriptionJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmedicaltranscriptionjobsresponse"></a>
<a id="schema_ListMedicalTranscriptionJobsResponse"></a>
<a id="tocSlistmedicaltranscriptionjobsresponse"></a>
<a id="tocslistmedicaltranscriptionjobsresponse"></a>

```json
{
  "Status": {},
  "NextToken": {},
  "MedicalTranscriptionJobSummaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|NextToken|object|false|none|none|
|MedicalTranscriptionJobSummaries|object|false|none|none|

<h2 id="tocS_ListMedicalTranscriptionJobsRequest">ListMedicalTranscriptionJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmedicaltranscriptionjobsrequest"></a>
<a id="schema_ListMedicalTranscriptionJobsRequest"></a>
<a id="tocSlistmedicaltranscriptionjobsrequest"></a>
<a id="tocslistmedicaltranscriptionjobsrequest"></a>

```json
{
  "Status": {},
  "JobNameContains": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|JobNameContains|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListMedicalVocabulariesResponse">ListMedicalVocabulariesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmedicalvocabulariesresponse"></a>
<a id="schema_ListMedicalVocabulariesResponse"></a>
<a id="tocSlistmedicalvocabulariesresponse"></a>
<a id="tocslistmedicalvocabulariesresponse"></a>

```json
{
  "Status": {},
  "NextToken": {},
  "Vocabularies": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|NextToken|object|false|none|none|
|Vocabularies|object|false|none|none|

<h2 id="tocS_ListMedicalVocabulariesRequest">ListMedicalVocabulariesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmedicalvocabulariesrequest"></a>
<a id="schema_ListMedicalVocabulariesRequest"></a>
<a id="tocSlistmedicalvocabulariesrequest"></a>
<a id="tocslistmedicalvocabulariesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "StateEquals": {},
  "NameContains": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|StateEquals|object|false|none|none|
|NameContains|object|false|none|none|

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

<h2 id="tocS_ListTranscriptionJobsResponse">ListTranscriptionJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttranscriptionjobsresponse"></a>
<a id="schema_ListTranscriptionJobsResponse"></a>
<a id="tocSlisttranscriptionjobsresponse"></a>
<a id="tocslisttranscriptionjobsresponse"></a>

```json
{
  "Status": {},
  "NextToken": {},
  "TranscriptionJobSummaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|NextToken|object|false|none|none|
|TranscriptionJobSummaries|object|false|none|none|

<h2 id="tocS_ListTranscriptionJobsRequest">ListTranscriptionJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttranscriptionjobsrequest"></a>
<a id="schema_ListTranscriptionJobsRequest"></a>
<a id="tocSlisttranscriptionjobsrequest"></a>
<a id="tocslisttranscriptionjobsrequest"></a>

```json
{
  "Status": {},
  "JobNameContains": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|JobNameContains|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListVocabulariesResponse">ListVocabulariesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvocabulariesresponse"></a>
<a id="schema_ListVocabulariesResponse"></a>
<a id="tocSlistvocabulariesresponse"></a>
<a id="tocslistvocabulariesresponse"></a>

```json
{
  "Status": {},
  "NextToken": {},
  "Vocabularies": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|NextToken|object|false|none|none|
|Vocabularies|object|false|none|none|

<h2 id="tocS_ListVocabulariesRequest">ListVocabulariesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistvocabulariesrequest"></a>
<a id="schema_ListVocabulariesRequest"></a>
<a id="tocSlistvocabulariesrequest"></a>
<a id="tocslistvocabulariesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "StateEquals": {},
  "NameContains": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|StateEquals|object|false|none|none|
|NameContains|object|false|none|none|

<h2 id="tocS_ListVocabularyFiltersResponse">ListVocabularyFiltersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvocabularyfiltersresponse"></a>
<a id="schema_ListVocabularyFiltersResponse"></a>
<a id="tocSlistvocabularyfiltersresponse"></a>
<a id="tocslistvocabularyfiltersresponse"></a>

```json
{
  "NextToken": {},
  "VocabularyFilters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|VocabularyFilters|object|false|none|none|

<h2 id="tocS_ListVocabularyFiltersRequest">ListVocabularyFiltersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistvocabularyfiltersrequest"></a>
<a id="schema_ListVocabularyFiltersRequest"></a>
<a id="tocSlistvocabularyfiltersrequest"></a>
<a id="tocslistvocabularyfiltersrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "NameContains": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|NameContains|object|false|none|none|

<h2 id="tocS_StartCallAnalyticsJobResponse">StartCallAnalyticsJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartcallanalyticsjobresponse"></a>
<a id="schema_StartCallAnalyticsJobResponse"></a>
<a id="tocSstartcallanalyticsjobresponse"></a>
<a id="tocsstartcallanalyticsjobresponse"></a>

```json
{
  "CallAnalyticsJob": {
    "CallAnalyticsJobName": {},
    "CallAnalyticsJobStatus": {},
    "LanguageCode": {},
    "MediaSampleRateHertz": {},
    "MediaFormat": {},
    "Media": {
      "MediaFileUri": {},
      "RedactedMediaFileUri": {}
    },
    "Transcript": {
      "TranscriptFileUri": {},
      "RedactedTranscriptFileUri": {}
    },
    "StartTime": {},
    "CreationTime": {},
    "CompletionTime": {},
    "FailureReason": {},
    "DataAccessRoleArn": {},
    "IdentifiedLanguageScore": {},
    "Settings": {
      "VocabularyName": {},
      "VocabularyFilterName": {},
      "VocabularyFilterMethod": {},
      "LanguageModelName": {},
      "ContentRedaction": {
        "RedactionType": {},
        "RedactionOutput": {},
        "PiiEntityTypes": {}
      },
      "LanguageOptions": {},
      "LanguageIdSettings": {
        "property1": {
          "VocabularyName": {},
          "VocabularyFilterName": {},
          "LanguageModelName": {}
        },
        "property2": {
          "VocabularyName": {},
          "VocabularyFilterName": {},
          "LanguageModelName": {}
        }
      }
    },
    "ChannelDefinitions": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallAnalyticsJob|object|false|none|none|

<h2 id="tocS_StartCallAnalyticsJobRequest">StartCallAnalyticsJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartcallanalyticsjobrequest"></a>
<a id="schema_StartCallAnalyticsJobRequest"></a>
<a id="tocSstartcallanalyticsjobrequest"></a>
<a id="tocsstartcallanalyticsjobrequest"></a>

```json
{
  "CallAnalyticsJobName": {},
  "Media": {
    "MediaFileUri": {},
    "RedactedMediaFileUri": {}
  },
  "OutputLocation": {},
  "OutputEncryptionKMSKeyId": {},
  "DataAccessRoleArn": {},
  "Settings": {
    "VocabularyName": {},
    "VocabularyFilterName": {},
    "VocabularyFilterMethod": {},
    "LanguageModelName": {},
    "ContentRedaction": {
      "RedactionType": {},
      "RedactionOutput": {},
      "PiiEntityTypes": {}
    },
    "LanguageOptions": {},
    "LanguageIdSettings": {
      "property1": {
        "VocabularyName": {},
        "VocabularyFilterName": {},
        "LanguageModelName": {}
      },
      "property2": {
        "VocabularyName": {},
        "VocabularyFilterName": {},
        "LanguageModelName": {}
      }
    }
  },
  "ChannelDefinitions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallAnalyticsJobName|object|true|none|none|
|Media|object|true|none|none|
|OutputLocation|object|false|none|none|
|OutputEncryptionKMSKeyId|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|Settings|object|false|none|none|
|ChannelDefinitions|object|false|none|none|

<h2 id="tocS_StartMedicalTranscriptionJobResponse">StartMedicalTranscriptionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartmedicaltranscriptionjobresponse"></a>
<a id="schema_StartMedicalTranscriptionJobResponse"></a>
<a id="tocSstartmedicaltranscriptionjobresponse"></a>
<a id="tocsstartmedicaltranscriptionjobresponse"></a>

```json
{
  "MedicalTranscriptionJob": {
    "MedicalTranscriptionJobName": {},
    "TranscriptionJobStatus": {},
    "LanguageCode": {},
    "MediaSampleRateHertz": {},
    "MediaFormat": {},
    "Media": {
      "MediaFileUri": {},
      "RedactedMediaFileUri": {}
    },
    "Transcript": {
      "TranscriptFileUri": {}
    },
    "StartTime": {},
    "CreationTime": {},
    "CompletionTime": {},
    "FailureReason": {},
    "Settings": {
      "ShowSpeakerLabels": {},
      "MaxSpeakerLabels": {},
      "ChannelIdentification": {},
      "ShowAlternatives": {},
      "MaxAlternatives": {},
      "VocabularyName": {}
    },
    "ContentIdentificationType": {},
    "Specialty": {},
    "Type": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MedicalTranscriptionJob|object|false|none|none|

<h2 id="tocS_StartMedicalTranscriptionJobRequest">StartMedicalTranscriptionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartmedicaltranscriptionjobrequest"></a>
<a id="schema_StartMedicalTranscriptionJobRequest"></a>
<a id="tocSstartmedicaltranscriptionjobrequest"></a>
<a id="tocsstartmedicaltranscriptionjobrequest"></a>

```json
{
  "MedicalTranscriptionJobName": {},
  "LanguageCode": {},
  "MediaSampleRateHertz": {},
  "MediaFormat": {},
  "Media": {
    "MediaFileUri": {},
    "RedactedMediaFileUri": {}
  },
  "OutputBucketName": {},
  "OutputKey": {},
  "OutputEncryptionKMSKeyId": {},
  "KMSEncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "Settings": {
    "ShowSpeakerLabels": {},
    "MaxSpeakerLabels": {},
    "ChannelIdentification": {},
    "ShowAlternatives": {},
    "MaxAlternatives": {},
    "VocabularyName": {}
  },
  "ContentIdentificationType": {},
  "Specialty": {},
  "Type": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MedicalTranscriptionJobName|object|true|none|none|
|LanguageCode|object|true|none|none|
|MediaSampleRateHertz|object|false|none|none|
|MediaFormat|object|false|none|none|
|Media|[Media](#schemamedia)|true|none|<p>Describes the Amazon S3 location of the media file you want to use in your request.</p> <p>For information on supported media formats, refer to the <a href="https://docs.aws.amazon.com/APIReference/API_StartTranscriptionJob.html#transcribe-StartTranscriptionJob-request-MediaFormat">MediaFormat</a> parameter or the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> section in the Amazon S3 Developer Guide.</p>|
|OutputBucketName|object|true|none|none|
|OutputKey|object|false|none|none|
|OutputEncryptionKMSKeyId|object|false|none|none|
|KMSEncryptionContext|object|false|none|none|
|Settings|object|false|none|none|
|ContentIdentificationType|object|false|none|none|
|Specialty|object|true|none|none|
|Type|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_StartTranscriptionJobResponse">StartTranscriptionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastarttranscriptionjobresponse"></a>
<a id="schema_StartTranscriptionJobResponse"></a>
<a id="tocSstarttranscriptionjobresponse"></a>
<a id="tocsstarttranscriptionjobresponse"></a>

```json
{
  "TranscriptionJob": {
    "TranscriptionJobName": {},
    "TranscriptionJobStatus": {},
    "LanguageCode": {},
    "MediaSampleRateHertz": {},
    "MediaFormat": {},
    "Media": {
      "MediaFileUri": {},
      "RedactedMediaFileUri": {}
    },
    "Transcript": {
      "TranscriptFileUri": {},
      "RedactedTranscriptFileUri": {}
    },
    "StartTime": {},
    "CreationTime": {},
    "CompletionTime": {},
    "FailureReason": {},
    "Settings": {
      "VocabularyName": {},
      "ShowSpeakerLabels": {},
      "MaxSpeakerLabels": {},
      "ChannelIdentification": {},
      "ShowAlternatives": {},
      "MaxAlternatives": {},
      "VocabularyFilterName": {},
      "VocabularyFilterMethod": {}
    },
    "ModelSettings": {
      "LanguageModelName": {}
    },
    "JobExecutionSettings": {
      "AllowDeferredExecution": {},
      "DataAccessRoleArn": {}
    },
    "ContentRedaction": {
      "RedactionType": {},
      "RedactionOutput": {},
      "PiiEntityTypes": {}
    },
    "IdentifyLanguage": {},
    "IdentifyMultipleLanguages": {},
    "LanguageOptions": {},
    "IdentifiedLanguageScore": {},
    "LanguageCodes": {},
    "Tags": {},
    "Subtitles": {
      "Formats": {},
      "SubtitleFileUris": {},
      "OutputStartIndex": {}
    },
    "LanguageIdSettings": {
      "property1": {
        "VocabularyName": {},
        "VocabularyFilterName": {},
        "LanguageModelName": {}
      },
      "property2": {
        "VocabularyName": {},
        "VocabularyFilterName": {},
        "LanguageModelName": {}
      }
    },
    "ToxicityDetection": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TranscriptionJob|object|false|none|none|

<h2 id="tocS_StartTranscriptionJobRequest">StartTranscriptionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastarttranscriptionjobrequest"></a>
<a id="schema_StartTranscriptionJobRequest"></a>
<a id="tocSstarttranscriptionjobrequest"></a>
<a id="tocsstarttranscriptionjobrequest"></a>

```json
{
  "TranscriptionJobName": {},
  "LanguageCode": {},
  "MediaSampleRateHertz": {},
  "MediaFormat": {},
  "Media": {
    "MediaFileUri": {},
    "RedactedMediaFileUri": {}
  },
  "OutputBucketName": {},
  "OutputKey": {},
  "OutputEncryptionKMSKeyId": {},
  "KMSEncryptionContext": {
    "property1": "string",
    "property2": "string"
  },
  "Settings": {
    "VocabularyName": {},
    "ShowSpeakerLabels": {},
    "MaxSpeakerLabels": {},
    "ChannelIdentification": {},
    "ShowAlternatives": {},
    "MaxAlternatives": {},
    "VocabularyFilterName": {},
    "VocabularyFilterMethod": {}
  },
  "ModelSettings": {
    "LanguageModelName": {}
  },
  "JobExecutionSettings": {
    "AllowDeferredExecution": {},
    "DataAccessRoleArn": {}
  },
  "ContentRedaction": {
    "RedactionType": {},
    "RedactionOutput": {},
    "PiiEntityTypes": {}
  },
  "IdentifyLanguage": {},
  "IdentifyMultipleLanguages": {},
  "LanguageOptions": {},
  "Subtitles": {
    "Formats": {},
    "OutputStartIndex": {}
  },
  "Tags": {},
  "LanguageIdSettings": {
    "property1": {
      "VocabularyName": {},
      "VocabularyFilterName": {},
      "LanguageModelName": {}
    },
    "property2": {
      "VocabularyName": {},
      "VocabularyFilterName": {},
      "LanguageModelName": {}
    }
  },
  "ToxicityDetection": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TranscriptionJobName|object|true|none|none|
|LanguageCode|object|false|none|none|
|MediaSampleRateHertz|object|false|none|none|
|MediaFormat|object|false|none|none|
|Media|object|true|none|none|
|OutputBucketName|object|false|none|none|
|OutputKey|object|false|none|none|
|OutputEncryptionKMSKeyId|object|false|none|none|
|KMSEncryptionContext|object|false|none|none|
|Settings|object|false|none|none|
|ModelSettings|object|false|none|none|
|JobExecutionSettings|object|false|none|none|
|ContentRedaction|object|false|none|none|
|IdentifyLanguage|object|false|none|none|
|IdentifyMultipleLanguages|object|false|none|none|
|LanguageOptions|object|false|none|none|
|Subtitles|object|false|none|none|
|Tags|object|false|none|none|
|LanguageIdSettings|object|false|none|none|
|ToxicityDetection|object|false|none|none|

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

<h2 id="tocS_UpdateCallAnalyticsCategoryResponse">UpdateCallAnalyticsCategoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecallanalyticscategoryresponse"></a>
<a id="schema_UpdateCallAnalyticsCategoryResponse"></a>
<a id="tocSupdatecallanalyticscategoryresponse"></a>
<a id="tocsupdatecallanalyticscategoryresponse"></a>

```json
{
  "CategoryProperties": {
    "CategoryName": {},
    "Rules": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "InputType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryProperties|object|false|none|none|

<h2 id="tocS_UpdateCallAnalyticsCategoryRequest">UpdateCallAnalyticsCategoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecallanalyticscategoryrequest"></a>
<a id="schema_UpdateCallAnalyticsCategoryRequest"></a>
<a id="tocSupdatecallanalyticscategoryrequest"></a>
<a id="tocsupdatecallanalyticscategoryrequest"></a>

```json
{
  "CategoryName": {},
  "Rules": {},
  "InputType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryName|object|true|none|none|
|Rules|object|true|none|none|
|InputType|object|false|none|none|

<h2 id="tocS_UpdateMedicalVocabularyResponse">UpdateMedicalVocabularyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemedicalvocabularyresponse"></a>
<a id="schema_UpdateMedicalVocabularyResponse"></a>
<a id="tocSupdatemedicalvocabularyresponse"></a>
<a id="tocsupdatemedicalvocabularyresponse"></a>

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "LastModifiedTime": {},
  "VocabularyState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|false|none|none|
|LanguageCode|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|VocabularyState|object|false|none|none|

<h2 id="tocS_UpdateMedicalVocabularyRequest">UpdateMedicalVocabularyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemedicalvocabularyrequest"></a>
<a id="schema_UpdateMedicalVocabularyRequest"></a>
<a id="tocSupdatemedicalvocabularyrequest"></a>
<a id="tocsupdatemedicalvocabularyrequest"></a>

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "VocabularyFileUri": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|true|none|none|
|LanguageCode|object|true|none|none|
|VocabularyFileUri|object|true|none|none|

<h2 id="tocS_UpdateVocabularyResponse">UpdateVocabularyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevocabularyresponse"></a>
<a id="schema_UpdateVocabularyResponse"></a>
<a id="tocSupdatevocabularyresponse"></a>
<a id="tocsupdatevocabularyresponse"></a>

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "LastModifiedTime": {},
  "VocabularyState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|false|none|none|
|LanguageCode|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|VocabularyState|object|false|none|none|

<h2 id="tocS_UpdateVocabularyRequest">UpdateVocabularyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevocabularyrequest"></a>
<a id="schema_UpdateVocabularyRequest"></a>
<a id="tocSupdatevocabularyrequest"></a>
<a id="tocsupdatevocabularyrequest"></a>

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "Phrases": {},
  "VocabularyFileUri": {},
  "DataAccessRoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|true|none|none|
|LanguageCode|object|true|none|none|
|Phrases|object|false|none|none|
|VocabularyFileUri|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|

<h2 id="tocS_UpdateVocabularyFilterResponse">UpdateVocabularyFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevocabularyfilterresponse"></a>
<a id="schema_UpdateVocabularyFilterResponse"></a>
<a id="tocSupdatevocabularyfilterresponse"></a>
<a id="tocsupdatevocabularyfilterresponse"></a>

```json
{
  "VocabularyFilterName": {},
  "LanguageCode": {},
  "LastModifiedTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyFilterName|object|false|none|none|
|LanguageCode|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_UpdateVocabularyFilterRequest">UpdateVocabularyFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevocabularyfilterrequest"></a>
<a id="schema_UpdateVocabularyFilterRequest"></a>
<a id="tocSupdatevocabularyfilterrequest"></a>
<a id="tocsupdatevocabularyfilterrequest"></a>

```json
{
  "VocabularyFilterName": {},
  "Words": {},
  "VocabularyFilterFileUri": {},
  "DataAccessRoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyFilterName|object|true|none|none|
|Words|object|false|none|none|
|VocabularyFilterFileUri|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|

<h2 id="tocS_TimestampMilliseconds">TimestampMilliseconds</h2>
<!-- backwards compatibility -->
<a id="schematimestampmilliseconds"></a>
<a id="schema_TimestampMilliseconds"></a>
<a id="tocStimestampmilliseconds"></a>
<a id="tocstimestampmilliseconds"></a>

```json
0
```

<h2 id="tocS_AbsoluteTimeRange">AbsoluteTimeRange</h2>
<!-- backwards compatibility -->
<a id="schemaabsolutetimerange"></a>
<a id="schema_AbsoluteTimeRange"></a>
<a id="tocSabsolutetimerange"></a>
<a id="tocsabsolutetimerange"></a>

```json
{
  "StartTime": {},
  "EndTime": {},
  "First": {},
  "Last": {}
}
```

<p>A time range, in milliseconds, between two points in your media file.</p> <p>You can use <code>StartTime</code> and <code>EndTime</code> to search a custom segment. For example, setting <code>StartTime</code> to 10000 and <code>EndTime</code> to 50000 only searches for your specified criteria in the audio contained between the 10,000 millisecond mark and the 50,000 millisecond mark of your media file. You must use <code>StartTime</code> and <code>EndTime</code> as a set; that is, if you include one, you must include both.</p> <p>You can use also <code>First</code> to search from the start of the audio until the time that you specify, or <code>Last</code> to search from the time that you specify until the end of the audio. For example, setting <code>First</code> to 50000 only searches for your specified criteria in the audio contained between the start of the media file to the 50,000 millisecond mark. You can use <code>First</code> and <code>Last</code> independently of each other.</p> <p>If you prefer to use percentage instead of milliseconds, see .</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|First|object|false|none|none|
|Last|object|false|none|none|

<h2 id="tocS_BaseModelName">BaseModelName</h2>
<!-- backwards compatibility -->
<a id="schemabasemodelname"></a>
<a id="schema_BaseModelName"></a>
<a id="tocSbasemodelname"></a>
<a id="tocsbasemodelname"></a>

```json
"NarrowBand"
```

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_CLMLanguageCode">CLMLanguageCode</h2>
<!-- backwards compatibility -->
<a id="schemaclmlanguagecode"></a>
<a id="schema_CLMLanguageCode"></a>
<a id="tocSclmlanguagecode"></a>
<a id="tocsclmlanguagecode"></a>

```json
"en-US"
```

<h2 id="tocS_CallAnalyticsJobName">CallAnalyticsJobName</h2>
<!-- backwards compatibility -->
<a id="schemacallanalyticsjobname"></a>
<a id="schema_CallAnalyticsJobName"></a>
<a id="tocScallanalyticsjobname"></a>
<a id="tocscallanalyticsjobname"></a>

```json
"string"
```

<h2 id="tocS_CallAnalyticsJobStatus">CallAnalyticsJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemacallanalyticsjobstatus"></a>
<a id="schema_CallAnalyticsJobStatus"></a>
<a id="tocScallanalyticsjobstatus"></a>
<a id="tocscallanalyticsjobstatus"></a>

```json
"QUEUED"
```

<h2 id="tocS_LanguageCode">LanguageCode</h2>
<!-- backwards compatibility -->
<a id="schemalanguagecode"></a>
<a id="schema_LanguageCode"></a>
<a id="tocSlanguagecode"></a>
<a id="tocslanguagecode"></a>

```json
"af-ZA"
```

<h2 id="tocS_MediaSampleRateHertz">MediaSampleRateHertz</h2>
<!-- backwards compatibility -->
<a id="schemamediasampleratehertz"></a>
<a id="schema_MediaSampleRateHertz"></a>
<a id="tocSmediasampleratehertz"></a>
<a id="tocsmediasampleratehertz"></a>

```json
8000
```

<h2 id="tocS_MediaFormat">MediaFormat</h2>
<!-- backwards compatibility -->
<a id="schemamediaformat"></a>
<a id="schema_MediaFormat"></a>
<a id="tocSmediaformat"></a>
<a id="tocsmediaformat"></a>

```json
"mp3"
```

<h2 id="tocS_Media">Media</h2>
<!-- backwards compatibility -->
<a id="schemamedia"></a>
<a id="schema_Media"></a>
<a id="tocSmedia"></a>
<a id="tocsmedia"></a>

```json
{
  "MediaFileUri": {},
  "RedactedMediaFileUri": {}
}
```

<p>Describes the Amazon S3 location of the media file you want to use in your request.</p> <p>For information on supported media formats, refer to the <a href="https://docs.aws.amazon.com/APIReference/API_StartTranscriptionJob.html#transcribe-StartTranscriptionJob-request-MediaFormat">MediaFormat</a> parameter or the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> section in the Amazon S3 Developer Guide.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MediaFileUri|object|false|none|none|
|RedactedMediaFileUri|object|false|none|none|

<h2 id="tocS_Transcript">Transcript</h2>
<!-- backwards compatibility -->
<a id="schematranscript"></a>
<a id="schema_Transcript"></a>
<a id="tocStranscript"></a>
<a id="tocstranscript"></a>

```json
{
  "TranscriptFileUri": {},
  "RedactedTranscriptFileUri": {}
}
```

Provides you with the Amazon S3 URI you can use to access your transcript.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TranscriptFileUri|object|false|none|none|
|RedactedTranscriptFileUri|object|false|none|none|

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_FailureReason">FailureReason</h2>
<!-- backwards compatibility -->
<a id="schemafailurereason"></a>
<a id="schema_FailureReason"></a>
<a id="tocSfailurereason"></a>
<a id="tocsfailurereason"></a>

```json
"string"
```

<h2 id="tocS_DataAccessRoleArn">DataAccessRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemadataaccessrolearn"></a>
<a id="schema_DataAccessRoleArn"></a>
<a id="tocSdataaccessrolearn"></a>
<a id="tocsdataaccessrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_IdentifiedLanguageScore">IdentifiedLanguageScore</h2>
<!-- backwards compatibility -->
<a id="schemaidentifiedlanguagescore"></a>
<a id="schema_IdentifiedLanguageScore"></a>
<a id="tocSidentifiedlanguagescore"></a>
<a id="tocsidentifiedlanguagescore"></a>

```json
0
```

<h2 id="tocS_CallAnalyticsJobSettings">CallAnalyticsJobSettings</h2>
<!-- backwards compatibility -->
<a id="schemacallanalyticsjobsettings"></a>
<a id="schema_CallAnalyticsJobSettings"></a>
<a id="tocScallanalyticsjobsettings"></a>
<a id="tocscallanalyticsjobsettings"></a>

```json
{
  "VocabularyName": {},
  "VocabularyFilterName": {},
  "VocabularyFilterMethod": {},
  "LanguageModelName": {},
  "ContentRedaction": {
    "RedactionType": {},
    "RedactionOutput": {},
    "PiiEntityTypes": {}
  },
  "LanguageOptions": {},
  "LanguageIdSettings": {
    "property1": {
      "VocabularyName": {},
      "VocabularyFilterName": {},
      "LanguageModelName": {}
    },
    "property2": {
      "VocabularyName": {},
      "VocabularyFilterName": {},
      "LanguageModelName": {}
    }
  }
}
```

Provides additional optional settings for your request, including content redaction, automatic language identification; allows you to apply custom language models, custom vocabulary filters, and custom vocabularies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|false|none|none|
|VocabularyFilterName|object|false|none|none|
|VocabularyFilterMethod|object|false|none|none|
|LanguageModelName|object|false|none|none|
|ContentRedaction|[ContentRedaction](#schemacontentredaction)|false|none|Makes it possible to redact or flag specified personally identifiable information (PII) in your transcript. If you use <code>ContentRedaction</code>, you must also include the sub-parameters: <code>PiiEntityTypes</code>, <code>RedactionOutput</code>, and <code>RedactionType</code>.|
|LanguageOptions|object|false|none|none|
|LanguageIdSettings|object|false|none|none|

<h2 id="tocS_ChannelDefinitions">ChannelDefinitions</h2>
<!-- backwards compatibility -->
<a id="schemachanneldefinitions"></a>
<a id="schema_ChannelDefinitions"></a>
<a id="tocSchanneldefinitions"></a>
<a id="tocschanneldefinitions"></a>

```json
[
  {
    "ChannelId": {},
    "ParticipantRole": {}
  },
  {
    "ChannelId": {},
    "ParticipantRole": {}
  }
]
```

<h2 id="tocS_CallAnalyticsJob">CallAnalyticsJob</h2>
<!-- backwards compatibility -->
<a id="schemacallanalyticsjob"></a>
<a id="schema_CallAnalyticsJob"></a>
<a id="tocScallanalyticsjob"></a>
<a id="tocscallanalyticsjob"></a>

```json
{
  "CallAnalyticsJobName": {},
  "CallAnalyticsJobStatus": {},
  "LanguageCode": {},
  "MediaSampleRateHertz": {},
  "MediaFormat": {},
  "Media": {
    "MediaFileUri": {},
    "RedactedMediaFileUri": {}
  },
  "Transcript": {
    "TranscriptFileUri": {},
    "RedactedTranscriptFileUri": {}
  },
  "StartTime": {},
  "CreationTime": {},
  "CompletionTime": {},
  "FailureReason": {},
  "DataAccessRoleArn": {},
  "IdentifiedLanguageScore": {},
  "Settings": {
    "VocabularyName": {},
    "VocabularyFilterName": {},
    "VocabularyFilterMethod": {},
    "LanguageModelName": {},
    "ContentRedaction": {
      "RedactionType": {},
      "RedactionOutput": {},
      "PiiEntityTypes": {}
    },
    "LanguageOptions": {},
    "LanguageIdSettings": {
      "property1": {
        "VocabularyName": {},
        "VocabularyFilterName": {},
        "LanguageModelName": {}
      },
      "property2": {
        "VocabularyName": {},
        "VocabularyFilterName": {},
        "LanguageModelName": {}
      }
    }
  },
  "ChannelDefinitions": {}
}
```

<p>Provides detailed information about a Call Analytics job.</p> <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status is <code>COMPLETED</code>, the job is finished. You can find your completed transcript at the URI specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in the <code>RedactedMediaFileUri</code> field of your response.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallAnalyticsJobName|object|false|none|none|
|CallAnalyticsJobStatus|object|false|none|none|
|LanguageCode|object|false|none|none|
|MediaSampleRateHertz|object|false|none|none|
|MediaFormat|object|false|none|none|
|Media|object|false|none|none|
|Transcript|[Transcript](#schematranscript)|false|none|Provides you with the Amazon S3 URI you can use to access your transcript.|
|StartTime|object|false|none|none|
|CreationTime|object|false|none|none|
|CompletionTime|object|false|none|none|
|FailureReason|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|
|IdentifiedLanguageScore|object|false|none|none|
|Settings|object|false|none|none|
|ChannelDefinitions|object|false|none|none|

<h2 id="tocS_VocabularyName">VocabularyName</h2>
<!-- backwards compatibility -->
<a id="schemavocabularyname"></a>
<a id="schema_VocabularyName"></a>
<a id="tocSvocabularyname"></a>
<a id="tocsvocabularyname"></a>

```json
"string"
```

<h2 id="tocS_VocabularyFilterName">VocabularyFilterName</h2>
<!-- backwards compatibility -->
<a id="schemavocabularyfiltername"></a>
<a id="schema_VocabularyFilterName"></a>
<a id="tocSvocabularyfiltername"></a>
<a id="tocsvocabularyfiltername"></a>

```json
"string"
```

<h2 id="tocS_VocabularyFilterMethod">VocabularyFilterMethod</h2>
<!-- backwards compatibility -->
<a id="schemavocabularyfiltermethod"></a>
<a id="schema_VocabularyFilterMethod"></a>
<a id="tocSvocabularyfiltermethod"></a>
<a id="tocsvocabularyfiltermethod"></a>

```json
"remove"
```

<h2 id="tocS_ModelName">ModelName</h2>
<!-- backwards compatibility -->
<a id="schemamodelname"></a>
<a id="schema_ModelName"></a>
<a id="tocSmodelname"></a>
<a id="tocsmodelname"></a>

```json
"string"
```

<h2 id="tocS_ContentRedaction">ContentRedaction</h2>
<!-- backwards compatibility -->
<a id="schemacontentredaction"></a>
<a id="schema_ContentRedaction"></a>
<a id="tocScontentredaction"></a>
<a id="tocscontentredaction"></a>

```json
{
  "RedactionType": {},
  "RedactionOutput": {},
  "PiiEntityTypes": {}
}
```

Makes it possible to redact or flag specified personally identifiable information (PII) in your transcript. If you use <code>ContentRedaction</code>, you must also include the sub-parameters: <code>PiiEntityTypes</code>, <code>RedactionOutput</code>, and <code>RedactionType</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RedactionType|object|true|none|none|
|RedactionOutput|object|true|none|none|
|PiiEntityTypes|object|false|none|none|

<h2 id="tocS_LanguageOptions">LanguageOptions</h2>
<!-- backwards compatibility -->
<a id="schemalanguageoptions"></a>
<a id="schema_LanguageOptions"></a>
<a id="tocSlanguageoptions"></a>
<a id="tocslanguageoptions"></a>

```json
[
  "af-ZA"
]
```

<h2 id="tocS_LanguageIdSettingsMap">LanguageIdSettingsMap</h2>
<!-- backwards compatibility -->
<a id="schemalanguageidsettingsmap"></a>
<a id="schema_LanguageIdSettingsMap"></a>
<a id="tocSlanguageidsettingsmap"></a>
<a id="tocslanguageidsettingsmap"></a>

```json
{
  "property1": {
    "VocabularyName": {},
    "VocabularyFilterName": {},
    "LanguageModelName": {}
  },
  "property2": {
    "VocabularyName": {},
    "VocabularyFilterName": {},
    "LanguageModelName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[LanguageIdSettings](#schemalanguageidsettings)|false|none|<p>If using automatic language identification in your request and you want to apply a custom language model, a custom vocabulary, or a custom vocabulary filter, include <code>LanguageIdSettings</code> with the relevant sub-parameters (<code>VocabularyName</code>, <code>LanguageModelName</code>, and <code>VocabularyFilterName</code>). Note that multi-language identification (<code>IdentifyMultipleLanguages</code>) doesn't support custom language models.</p> <p> <code>LanguageIdSettings</code> supports two to five language codes. Each language code you include can have an associated custom language model, custom vocabulary, and custom vocabulary filter. The language codes that you specify must match the languages of the associated custom language models, custom vocabularies, and custom vocabulary filters.</p> <p>It's recommended that you include <code>LanguageOptions</code> when using <code>LanguageIdSettings</code> to ensure that the correct language dialect is identified. For example, if you specify a custom vocabulary that is in <code>en-US</code> but Amazon Transcribe determines that the language spoken in your media is <code>en-AU</code>, your custom vocabulary <i>is not</i> applied to your transcription. If you include <code>LanguageOptions</code> and include <code>en-US</code> as the only English language dialect, your custom vocabulary <i>is</i> applied to your transcription.</p> <p>If you want to include a custom language model with your request but <b>do not</b> want to use automatic language identification, use instead the <code/> parameter with the <code>LanguageModelName</code> sub-parameter. If you want to include a custom vocabulary or a custom vocabulary filter (or both) with your request but <b>do not</b> want to use automatic language identification, use instead the <code/> parameter with the <code>VocabularyName</code> or <code>VocabularyFilterName</code> (or both) sub-parameter.</p>|

<h2 id="tocS_CallAnalyticsJobSummary">CallAnalyticsJobSummary</h2>
<!-- backwards compatibility -->
<a id="schemacallanalyticsjobsummary"></a>
<a id="schema_CallAnalyticsJobSummary"></a>
<a id="tocScallanalyticsjobsummary"></a>
<a id="tocscallanalyticsjobsummary"></a>

```json
{
  "CallAnalyticsJobName": {},
  "CreationTime": {},
  "StartTime": {},
  "CompletionTime": {},
  "LanguageCode": {},
  "CallAnalyticsJobStatus": {},
  "FailureReason": {}
}
```

Provides detailed information about a specific Call Analytics job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallAnalyticsJobName|object|false|none|none|
|CreationTime|object|false|none|none|
|StartTime|object|false|none|none|
|CompletionTime|object|false|none|none|
|LanguageCode|object|false|none|none|
|CallAnalyticsJobStatus|object|false|none|none|
|FailureReason|object|false|none|none|

<h2 id="tocS_CallAnalyticsJobSummaries">CallAnalyticsJobSummaries</h2>
<!-- backwards compatibility -->
<a id="schemacallanalyticsjobsummaries"></a>
<a id="schema_CallAnalyticsJobSummaries"></a>
<a id="tocScallanalyticsjobsummaries"></a>
<a id="tocscallanalyticsjobsummaries"></a>

```json
[
  {
    "CallAnalyticsJobName": {},
    "CreationTime": {},
    "StartTime": {},
    "CompletionTime": {},
    "LanguageCode": {},
    "CallAnalyticsJobStatus": {},
    "FailureReason": {}
  }
]
```

<h2 id="tocS_CategoryName">CategoryName</h2>
<!-- backwards compatibility -->
<a id="schemacategoryname"></a>
<a id="schema_CategoryName"></a>
<a id="tocScategoryname"></a>
<a id="tocscategoryname"></a>

```json
"string"
```

<h2 id="tocS_RuleList">RuleList</h2>
<!-- backwards compatibility -->
<a id="schemarulelist"></a>
<a id="schema_RuleList"></a>
<a id="tocSrulelist"></a>
<a id="tocsrulelist"></a>

```json
[
  {
    "NonTalkTimeFilter": {
      "Threshold": {},
      "AbsoluteTimeRange": {
        "StartTime": {},
        "EndTime": {},
        "First": {},
        "Last": {}
      },
      "RelativeTimeRange": {
        "StartPercentage": {},
        "EndPercentage": {},
        "First": {},
        "Last": {}
      },
      "Negate": {}
    },
    "InterruptionFilter": {
      "Threshold": {},
      "ParticipantRole": {},
      "AbsoluteTimeRange": {
        "StartTime": {},
        "EndTime": {},
        "First": {},
        "Last": {}
      },
      "RelativeTimeRange": {
        "StartPercentage": {},
        "EndPercentage": {},
        "First": {},
        "Last": {}
      },
      "Negate": {}
    },
    "TranscriptFilter": {
      "TranscriptFilterType": {},
      "AbsoluteTimeRange": {
        "StartTime": {},
        "EndTime": {},
        "First": {},
        "Last": {}
      },
      "RelativeTimeRange": {
        "StartPercentage": {},
        "EndPercentage": {},
        "First": {},
        "Last": {}
      },
      "ParticipantRole": {},
      "Negate": {},
      "Targets": {}
    },
    "SentimentFilter": {
      "Sentiments": {},
      "AbsoluteTimeRange": {
        "StartTime": {},
        "EndTime": {},
        "First": {},
        "Last": {}
      },
      "RelativeTimeRange": {
        "StartPercentage": {},
        "EndPercentage": {},
        "First": {},
        "Last": {}
      },
      "ParticipantRole": {},
      "Negate": {}
    }
  }
]
```

<h2 id="tocS_InputType">InputType</h2>
<!-- backwards compatibility -->
<a id="schemainputtype"></a>
<a id="schema_InputType"></a>
<a id="tocSinputtype"></a>
<a id="tocsinputtype"></a>

```json
"REAL_TIME"
```

<h2 id="tocS_CategoryProperties">CategoryProperties</h2>
<!-- backwards compatibility -->
<a id="schemacategoryproperties"></a>
<a id="schema_CategoryProperties"></a>
<a id="tocScategoryproperties"></a>
<a id="tocscategoryproperties"></a>

```json
{
  "CategoryName": {},
  "Rules": {},
  "CreateTime": {},
  "LastUpdateTime": {},
  "InputType": {}
}
```

Provides you with the properties of the Call Analytics category you specified in your request. This includes the list of rules that define the specified category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryName|object|false|none|none|
|Rules|object|false|none|none|
|CreateTime|object|false|none|none|
|LastUpdateTime|object|false|none|none|
|InputType|object|false|none|none|

<h2 id="tocS_CategoryPropertiesList">CategoryPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemacategorypropertieslist"></a>
<a id="schema_CategoryPropertiesList"></a>
<a id="tocScategorypropertieslist"></a>
<a id="tocscategorypropertieslist"></a>

```json
[
  {
    "CategoryName": {},
    "Rules": {},
    "CreateTime": {},
    "LastUpdateTime": {},
    "InputType": {}
  }
]
```

<h2 id="tocS_ChannelId">ChannelId</h2>
<!-- backwards compatibility -->
<a id="schemachannelid"></a>
<a id="schema_ChannelId"></a>
<a id="tocSchannelid"></a>
<a id="tocschannelid"></a>

```json
0
```

<h2 id="tocS_ParticipantRole">ParticipantRole</h2>
<!-- backwards compatibility -->
<a id="schemaparticipantrole"></a>
<a id="schema_ParticipantRole"></a>
<a id="tocSparticipantrole"></a>
<a id="tocsparticipantrole"></a>

```json
"AGENT"
```

<h2 id="tocS_ChannelDefinition">ChannelDefinition</h2>
<!-- backwards compatibility -->
<a id="schemachanneldefinition"></a>
<a id="schema_ChannelDefinition"></a>
<a id="tocSchanneldefinition"></a>
<a id="tocschanneldefinition"></a>

```json
{
  "ChannelId": {},
  "ParticipantRole": {}
}
```

Makes it possible to specify which speaker is on which channel. For example, if your agent is the first participant to speak, you would set <code>ChannelId</code> to <code>0</code> (to indicate the first channel) and <code>ParticipantRole</code> to <code>AGENT</code> (to indicate that it's the agent speaking).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelId|object|false|none|none|
|ParticipantRole|object|false|none|none|

<h2 id="tocS_RedactionType">RedactionType</h2>
<!-- backwards compatibility -->
<a id="schemaredactiontype"></a>
<a id="schema_RedactionType"></a>
<a id="tocSredactiontype"></a>
<a id="tocsredactiontype"></a>

```json
"PII"
```

<h2 id="tocS_RedactionOutput">RedactionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaredactionoutput"></a>
<a id="schema_RedactionOutput"></a>
<a id="tocSredactionoutput"></a>
<a id="tocsredactionoutput"></a>

```json
"redacted"
```

<h2 id="tocS_PiiEntityTypes">PiiEntityTypes</h2>
<!-- backwards compatibility -->
<a id="schemapiientitytypes"></a>
<a id="schema_PiiEntityTypes"></a>
<a id="tocSpiientitytypes"></a>
<a id="tocspiientitytypes"></a>

```json
[
  "BANK_ACCOUNT_NUMBER"
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
  "S3Uri": {},
  "TuningDataS3Uri": {},
  "DataAccessRoleArn": {}
}
```

<p>Contains the Amazon S3 location of the training data you want to use to create a new custom language model, and permissions to access this location.</p> <p>When using <code>InputDataConfig</code>, you must include these sub-parameters: <code>S3Uri</code> and <code>DataAccessRoleArn</code>. You can optionally include <code>TuningDataS3Uri</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Uri|object|true|none|none|
|TuningDataS3Uri|object|false|none|none|
|DataAccessRoleArn|object|true|none|none|

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

<h2 id="tocS_ModelStatus">ModelStatus</h2>
<!-- backwards compatibility -->
<a id="schemamodelstatus"></a>
<a id="schema_ModelStatus"></a>
<a id="tocSmodelstatus"></a>
<a id="tocsmodelstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_Uri">Uri</h2>
<!-- backwards compatibility -->
<a id="schemauri"></a>
<a id="schema_Uri"></a>
<a id="tocSuri"></a>
<a id="tocsuri"></a>

```json
"string"
```

<h2 id="tocS_VocabularyState">VocabularyState</h2>
<!-- backwards compatibility -->
<a id="schemavocabularystate"></a>
<a id="schema_VocabularyState"></a>
<a id="tocSvocabularystate"></a>
<a id="tocsvocabularystate"></a>

```json
"PENDING"
```

<h2 id="tocS_Words">Words</h2>
<!-- backwards compatibility -->
<a id="schemawords"></a>
<a id="schema_Words"></a>
<a id="tocSwords"></a>
<a id="tocswords"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Phrases">Phrases</h2>
<!-- backwards compatibility -->
<a id="schemaphrases"></a>
<a id="schema_Phrases"></a>
<a id="tocSphrases"></a>
<a id="tocsphrases"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TranscriptionJobName">TranscriptionJobName</h2>
<!-- backwards compatibility -->
<a id="schematranscriptionjobname"></a>
<a id="schema_TranscriptionJobName"></a>
<a id="tocStranscriptionjobname"></a>
<a id="tocstranscriptionjobname"></a>

```json
"string"
```

<h2 id="tocS_LanguageModel">LanguageModel</h2>
<!-- backwards compatibility -->
<a id="schemalanguagemodel"></a>
<a id="schema_LanguageModel"></a>
<a id="tocSlanguagemodel"></a>
<a id="tocslanguagemodel"></a>

```json
{
  "ModelName": {},
  "CreateTime": {},
  "LastModifiedTime": {},
  "LanguageCode": {},
  "BaseModelName": {},
  "ModelStatus": {},
  "UpgradeAvailability": {},
  "FailureReason": {},
  "InputDataConfig": {
    "S3Uri": {},
    "TuningDataS3Uri": {},
    "DataAccessRoleArn": {}
  }
}
```

<p>Provides information about a custom language model, including:</p> <ul> <li> <p>The base model name</p> </li> <li> <p>When the model was created</p> </li> <li> <p>The location of the files used to train the model</p> </li> <li> <p>When the model was last modified</p> </li> <li> <p>The name you chose for the model</p> </li> <li> <p>The model's language</p> </li> <li> <p>The model's processing state</p> </li> <li> <p>Any available upgrades for the base model</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelName|object|false|none|none|
|CreateTime|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|LanguageCode|object|false|none|none|
|BaseModelName|object|false|none|none|
|ModelStatus|object|false|none|none|
|UpgradeAvailability|object|false|none|none|
|FailureReason|object|false|none|none|
|InputDataConfig|object|false|none|none|

<h2 id="tocS_DurationInSeconds">DurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemadurationinseconds"></a>
<a id="schema_DurationInSeconds"></a>
<a id="tocSdurationinseconds"></a>
<a id="tocsdurationinseconds"></a>

```json
0
```

<h2 id="tocS_MedicalTranscriptionJob">MedicalTranscriptionJob</h2>
<!-- backwards compatibility -->
<a id="schemamedicaltranscriptionjob"></a>
<a id="schema_MedicalTranscriptionJob"></a>
<a id="tocSmedicaltranscriptionjob"></a>
<a id="tocsmedicaltranscriptionjob"></a>

```json
{
  "MedicalTranscriptionJobName": {},
  "TranscriptionJobStatus": {},
  "LanguageCode": {},
  "MediaSampleRateHertz": {},
  "MediaFormat": {},
  "Media": {
    "MediaFileUri": {},
    "RedactedMediaFileUri": {}
  },
  "Transcript": {
    "TranscriptFileUri": {}
  },
  "StartTime": {},
  "CreationTime": {},
  "CompletionTime": {},
  "FailureReason": {},
  "Settings": {
    "ShowSpeakerLabels": {},
    "MaxSpeakerLabels": {},
    "ChannelIdentification": {},
    "ShowAlternatives": {},
    "MaxAlternatives": {},
    "VocabularyName": {}
  },
  "ContentIdentificationType": {},
  "Specialty": {},
  "Type": {},
  "Tags": {}
}
```

<p>Provides detailed information about a medical transcription job.</p> <p>To view the status of the specified medical transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MedicalTranscriptionJobName|object|false|none|none|
|TranscriptionJobStatus|object|false|none|none|
|LanguageCode|object|false|none|none|
|MediaSampleRateHertz|object|false|none|none|
|MediaFormat|object|false|none|none|
|Media|[Media](#schemamedia)|false|none|<p>Describes the Amazon S3 location of the media file you want to use in your request.</p> <p>For information on supported media formats, refer to the <a href="https://docs.aws.amazon.com/APIReference/API_StartTranscriptionJob.html#transcribe-StartTranscriptionJob-request-MediaFormat">MediaFormat</a> parameter or the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> section in the Amazon S3 Developer Guide.</p>|
|Transcript|object|false|none|none|
|StartTime|object|false|none|none|
|CreationTime|object|false|none|none|
|CompletionTime|object|false|none|none|
|FailureReason|object|false|none|none|
|Settings|object|false|none|none|
|ContentIdentificationType|object|false|none|none|
|Specialty|object|false|none|none|
|Type|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_TranscriptionJob">TranscriptionJob</h2>
<!-- backwards compatibility -->
<a id="schematranscriptionjob"></a>
<a id="schema_TranscriptionJob"></a>
<a id="tocStranscriptionjob"></a>
<a id="tocstranscriptionjob"></a>

```json
{
  "TranscriptionJobName": {},
  "TranscriptionJobStatus": {},
  "LanguageCode": {},
  "MediaSampleRateHertz": {},
  "MediaFormat": {},
  "Media": {
    "MediaFileUri": {},
    "RedactedMediaFileUri": {}
  },
  "Transcript": {
    "TranscriptFileUri": {},
    "RedactedTranscriptFileUri": {}
  },
  "StartTime": {},
  "CreationTime": {},
  "CompletionTime": {},
  "FailureReason": {},
  "Settings": {
    "VocabularyName": {},
    "ShowSpeakerLabels": {},
    "MaxSpeakerLabels": {},
    "ChannelIdentification": {},
    "ShowAlternatives": {},
    "MaxAlternatives": {},
    "VocabularyFilterName": {},
    "VocabularyFilterMethod": {}
  },
  "ModelSettings": {
    "LanguageModelName": {}
  },
  "JobExecutionSettings": {
    "AllowDeferredExecution": {},
    "DataAccessRoleArn": {}
  },
  "ContentRedaction": {
    "RedactionType": {},
    "RedactionOutput": {},
    "PiiEntityTypes": {}
  },
  "IdentifyLanguage": {},
  "IdentifyMultipleLanguages": {},
  "LanguageOptions": {},
  "IdentifiedLanguageScore": {},
  "LanguageCodes": {},
  "Tags": {},
  "Subtitles": {
    "Formats": {},
    "SubtitleFileUris": {},
    "OutputStartIndex": {}
  },
  "LanguageIdSettings": {
    "property1": {
      "VocabularyName": {},
      "VocabularyFilterName": {},
      "LanguageModelName": {}
    },
    "property2": {
      "VocabularyName": {},
      "VocabularyFilterName": {},
      "LanguageModelName": {}
    }
  },
  "ToxicityDetection": {}
}
```

<p>Provides detailed information about a transcription job.</p> <p>To view the status of the specified transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled content redaction, the redacted transcript can be found at the location specified in <code>RedactedTranscriptFileUri</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TranscriptionJobName|object|false|none|none|
|TranscriptionJobStatus|object|false|none|none|
|LanguageCode|object|false|none|none|
|MediaSampleRateHertz|object|false|none|none|
|MediaFormat|object|false|none|none|
|Media|object|false|none|none|
|Transcript|object|false|none|none|
|StartTime|object|false|none|none|
|CreationTime|object|false|none|none|
|CompletionTime|object|false|none|none|
|FailureReason|object|false|none|none|
|Settings|object|false|none|none|
|ModelSettings|object|false|none|none|
|JobExecutionSettings|object|false|none|none|
|ContentRedaction|object|false|none|none|
|IdentifyLanguage|object|false|none|none|
|IdentifyMultipleLanguages|object|false|none|none|
|LanguageOptions|object|false|none|none|
|IdentifiedLanguageScore|object|false|none|none|
|LanguageCodes|object|false|none|none|
|Tags|object|false|none|none|
|Subtitles|object|false|none|none|
|LanguageIdSettings|object|false|none|none|
|ToxicityDetection|object|false|none|none|

<h2 id="tocS_RelativeTimeRange">RelativeTimeRange</h2>
<!-- backwards compatibility -->
<a id="schemarelativetimerange"></a>
<a id="schema_RelativeTimeRange"></a>
<a id="tocSrelativetimerange"></a>
<a id="tocsrelativetimerange"></a>

```json
{
  "StartPercentage": {},
  "EndPercentage": {},
  "First": {},
  "Last": {}
}
```

<p>A time range, in percentage, between two points in your media file.</p> <p>You can use <code>StartPercentage</code> and <code>EndPercentage</code> to search a custom segment. For example, setting <code>StartPercentage</code> to 10 and <code>EndPercentage</code> to 50 only searches for your specified criteria in the audio contained between the 10 percent mark and the 50 percent mark of your media file.</p> <p>You can use also <code>First</code> to search from the start of the media file until the time that you specify. Or use <code>Last</code> to search from the time that you specify until the end of the media file. For example, setting <code>First</code> to 10 only searches for your specified criteria in the audio contained in the first 10 percent of the media file.</p> <p>If you prefer to use milliseconds instead of percentage, see .</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartPercentage|object|false|none|none|
|EndPercentage|object|false|none|none|
|First|object|false|none|none|
|Last|object|false|none|none|

<h2 id="tocS_InterruptionFilter">InterruptionFilter</h2>
<!-- backwards compatibility -->
<a id="schemainterruptionfilter"></a>
<a id="schema_InterruptionFilter"></a>
<a id="tocSinterruptionfilter"></a>
<a id="tocsinterruptionfilter"></a>

```json
{
  "Threshold": {},
  "ParticipantRole": {},
  "AbsoluteTimeRange": {
    "StartTime": {},
    "EndTime": {},
    "First": {},
    "Last": {}
  },
  "RelativeTimeRange": {
    "StartPercentage": {},
    "EndPercentage": {},
    "First": {},
    "Last": {}
  },
  "Negate": {}
}
```

<p>Flag the presence or absence of interruptions in your Call Analytics transcription output.</p> <p>Rules using <code>InterruptionFilter</code> are designed to match:</p> <ul> <li> <p>Instances where an agent interrupts a customer</p> </li> <li> <p>Instances where a customer interrupts an agent</p> </li> <li> <p>Either participant interrupting the other</p> </li> <li> <p>A lack of interruptions</p> </li> </ul> <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call categories</a> for usage examples.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Threshold|object|false|none|none|
|ParticipantRole|object|false|none|none|
|AbsoluteTimeRange|object|false|none|none|
|RelativeTimeRange|object|false|none|none|
|Negate|object|false|none|none|

<h2 id="tocS_JobExecutionSettings">JobExecutionSettings</h2>
<!-- backwards compatibility -->
<a id="schemajobexecutionsettings"></a>
<a id="schema_JobExecutionSettings"></a>
<a id="tocSjobexecutionsettings"></a>
<a id="tocsjobexecutionsettings"></a>

```json
{
  "AllowDeferredExecution": {},
  "DataAccessRoleArn": {}
}
```

<p>Makes it possible to control how your transcription job is processed. Currently, the only <code>JobExecutionSettings</code> modification you can choose is enabling job queueing using the <code>AllowDeferredExecution</code> sub-parameter.</p> <p>If you include <code>JobExecutionSettings</code> in your request, you must also include the sub-parameters: <code>AllowDeferredExecution</code> and <code>DataAccessRoleArn</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowDeferredExecution|object|false|none|none|
|DataAccessRoleArn|object|false|none|none|

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
```

<h2 id="tocS_KMSEncryptionContextMap">KMSEncryptionContextMap</h2>
<!-- backwards compatibility -->
<a id="schemakmsencryptioncontextmap"></a>
<a id="schema_KMSEncryptionContextMap"></a>
<a id="tocSkmsencryptioncontextmap"></a>
<a id="tocskmsencryptioncontextmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[NonEmptyString](#schemanonemptystring)|false|none|none|

<h2 id="tocS_KMSKeyId">KMSKeyId</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyid"></a>
<a id="schema_KMSKeyId"></a>
<a id="tocSkmskeyid"></a>
<a id="tocskmskeyid"></a>

```json
"string"
```

<h2 id="tocS_LanguageCodeItem">LanguageCodeItem</h2>
<!-- backwards compatibility -->
<a id="schemalanguagecodeitem"></a>
<a id="schema_LanguageCodeItem"></a>
<a id="tocSlanguagecodeitem"></a>
<a id="tocslanguagecodeitem"></a>

```json
{
  "LanguageCode": {},
  "DurationInSeconds": {}
}
```

Provides information on the speech contained in a discreet utterance when multi-language identification is enabled in your request. This utterance represents a block of speech consisting of one language, preceded or followed by a block of speech in a different language.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageCode|object|false|none|none|
|DurationInSeconds|object|false|none|none|

<h2 id="tocS_LanguageCodeList">LanguageCodeList</h2>
<!-- backwards compatibility -->
<a id="schemalanguagecodelist"></a>
<a id="schema_LanguageCodeList"></a>
<a id="tocSlanguagecodelist"></a>
<a id="tocslanguagecodelist"></a>

```json
[
  {
    "LanguageCode": {},
    "DurationInSeconds": {}
  }
]
```

<h2 id="tocS_LanguageIdSettings">LanguageIdSettings</h2>
<!-- backwards compatibility -->
<a id="schemalanguageidsettings"></a>
<a id="schema_LanguageIdSettings"></a>
<a id="tocSlanguageidsettings"></a>
<a id="tocslanguageidsettings"></a>

```json
{
  "VocabularyName": {},
  "VocabularyFilterName": {},
  "LanguageModelName": {}
}
```

<p>If using automatic language identification in your request and you want to apply a custom language model, a custom vocabulary, or a custom vocabulary filter, include <code>LanguageIdSettings</code> with the relevant sub-parameters (<code>VocabularyName</code>, <code>LanguageModelName</code>, and <code>VocabularyFilterName</code>). Note that multi-language identification (<code>IdentifyMultipleLanguages</code>) doesn't support custom language models.</p> <p> <code>LanguageIdSettings</code> supports two to five language codes. Each language code you include can have an associated custom language model, custom vocabulary, and custom vocabulary filter. The language codes that you specify must match the languages of the associated custom language models, custom vocabularies, and custom vocabulary filters.</p> <p>It's recommended that you include <code>LanguageOptions</code> when using <code>LanguageIdSettings</code> to ensure that the correct language dialect is identified. For example, if you specify a custom vocabulary that is in <code>en-US</code> but Amazon Transcribe determines that the language spoken in your media is <code>en-AU</code>, your custom vocabulary <i>is not</i> applied to your transcription. If you include <code>LanguageOptions</code> and include <code>en-US</code> as the only English language dialect, your custom vocabulary <i>is</i> applied to your transcription.</p> <p>If you want to include a custom language model with your request but <b>do not</b> want to use automatic language identification, use instead the <code/> parameter with the <code>LanguageModelName</code> sub-parameter. If you want to include a custom vocabulary or a custom vocabulary filter (or both) with your request but <b>do not</b> want to use automatic language identification, use instead the <code/> parameter with the <code>VocabularyName</code> or <code>VocabularyFilterName</code> (or both) sub-parameter.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|false|none|none|
|VocabularyFilterName|object|false|none|none|
|LanguageModelName|object|false|none|none|

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_Models">Models</h2>
<!-- backwards compatibility -->
<a id="schemamodels"></a>
<a id="schema_Models"></a>
<a id="tocSmodels"></a>
<a id="tocsmodels"></a>

```json
[
  {
    "ModelName": {},
    "CreateTime": {},
    "LastModifiedTime": {},
    "LanguageCode": {},
    "BaseModelName": {},
    "ModelStatus": {},
    "UpgradeAvailability": {},
    "FailureReason": {},
    "InputDataConfig": {
      "S3Uri": {},
      "TuningDataS3Uri": {},
      "DataAccessRoleArn": {}
    }
  }
]
```

<h2 id="tocS_TranscriptionJobStatus">TranscriptionJobStatus</h2>
<!-- backwards compatibility -->
<a id="schematranscriptionjobstatus"></a>
<a id="schema_TranscriptionJobStatus"></a>
<a id="tocStranscriptionjobstatus"></a>
<a id="tocstranscriptionjobstatus"></a>

```json
"QUEUED"
```

<h2 id="tocS_MedicalTranscriptionJobSummaries">MedicalTranscriptionJobSummaries</h2>
<!-- backwards compatibility -->
<a id="schemamedicaltranscriptionjobsummaries"></a>
<a id="schema_MedicalTranscriptionJobSummaries"></a>
<a id="tocSmedicaltranscriptionjobsummaries"></a>
<a id="tocsmedicaltranscriptionjobsummaries"></a>

```json
[
  {
    "MedicalTranscriptionJobName": {},
    "CreationTime": {},
    "StartTime": {},
    "CompletionTime": {},
    "LanguageCode": {},
    "TranscriptionJobStatus": {},
    "FailureReason": {},
    "OutputLocationType": {},
    "Specialty": {},
    "ContentIdentificationType": {},
    "Type": {}
  }
]
```

<h2 id="tocS_Vocabularies">Vocabularies</h2>
<!-- backwards compatibility -->
<a id="schemavocabularies"></a>
<a id="schema_Vocabularies"></a>
<a id="tocSvocabularies"></a>
<a id="tocsvocabularies"></a>

```json
[
  {
    "VocabularyName": {},
    "LanguageCode": {},
    "LastModifiedTime": {},
    "VocabularyState": {}
  }
]
```

<h2 id="tocS_TranscribeArn">TranscribeArn</h2>
<!-- backwards compatibility -->
<a id="schematranscribearn"></a>
<a id="schema_TranscribeArn"></a>
<a id="tocStranscribearn"></a>
<a id="tocstranscribearn"></a>

```json
"string"
```

<h2 id="tocS_TranscriptionJobSummaries">TranscriptionJobSummaries</h2>
<!-- backwards compatibility -->
<a id="schematranscriptionjobsummaries"></a>
<a id="schema_TranscriptionJobSummaries"></a>
<a id="tocStranscriptionjobsummaries"></a>
<a id="tocstranscriptionjobsummaries"></a>

```json
[
  {
    "TranscriptionJobName": {},
    "CreationTime": {},
    "StartTime": {},
    "CompletionTime": {},
    "LanguageCode": {},
    "TranscriptionJobStatus": {},
    "FailureReason": {},
    "OutputLocationType": {},
    "ContentRedaction": {
      "RedactionType": {},
      "RedactionOutput": {},
      "PiiEntityTypes": {}
    },
    "ModelSettings": {
      "LanguageModelName": {}
    },
    "IdentifyLanguage": {},
    "IdentifyMultipleLanguages": {},
    "IdentifiedLanguageScore": {},
    "LanguageCodes": {},
    "ToxicityDetection": {}
  }
]
```

<h2 id="tocS_VocabularyFilters">VocabularyFilters</h2>
<!-- backwards compatibility -->
<a id="schemavocabularyfilters"></a>
<a id="schema_VocabularyFilters"></a>
<a id="tocSvocabularyfilters"></a>
<a id="tocsvocabularyfilters"></a>

```json
[
  {
    "VocabularyFilterName": {},
    "LanguageCode": {},
    "LastModifiedTime": {}
  }
]
```

<h2 id="tocS_MaxAlternatives">MaxAlternatives</h2>
<!-- backwards compatibility -->
<a id="schemamaxalternatives"></a>
<a id="schema_MaxAlternatives"></a>
<a id="tocSmaxalternatives"></a>
<a id="tocsmaxalternatives"></a>

```json
2
```

<h2 id="tocS_MaxSpeakers">MaxSpeakers</h2>
<!-- backwards compatibility -->
<a id="schemamaxspeakers"></a>
<a id="schema_MaxSpeakers"></a>
<a id="tocSmaxspeakers"></a>
<a id="tocsmaxspeakers"></a>

```json
2
```

<h2 id="tocS_MedicalContentIdentificationType">MedicalContentIdentificationType</h2>
<!-- backwards compatibility -->
<a id="schemamedicalcontentidentificationtype"></a>
<a id="schema_MedicalContentIdentificationType"></a>
<a id="tocSmedicalcontentidentificationtype"></a>
<a id="tocsmedicalcontentidentificationtype"></a>

```json
"PHI"
```

<h2 id="tocS_MedicalMediaSampleRateHertz">MedicalMediaSampleRateHertz</h2>
<!-- backwards compatibility -->
<a id="schemamedicalmediasampleratehertz"></a>
<a id="schema_MedicalMediaSampleRateHertz"></a>
<a id="tocSmedicalmediasampleratehertz"></a>
<a id="tocsmedicalmediasampleratehertz"></a>

```json
16000
```

<h2 id="tocS_MedicalTranscript">MedicalTranscript</h2>
<!-- backwards compatibility -->
<a id="schemamedicaltranscript"></a>
<a id="schema_MedicalTranscript"></a>
<a id="tocSmedicaltranscript"></a>
<a id="tocsmedicaltranscript"></a>

```json
{
  "TranscriptFileUri": {}
}
```

Provides you with the Amazon S3 URI you can use to access your transcript.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TranscriptFileUri|object|false|none|none|

<h2 id="tocS_MedicalTranscriptionSetting">MedicalTranscriptionSetting</h2>
<!-- backwards compatibility -->
<a id="schemamedicaltranscriptionsetting"></a>
<a id="schema_MedicalTranscriptionSetting"></a>
<a id="tocSmedicaltranscriptionsetting"></a>
<a id="tocsmedicaltranscriptionsetting"></a>

```json
{
  "ShowSpeakerLabels": {},
  "MaxSpeakerLabels": {},
  "ChannelIdentification": {},
  "ShowAlternatives": {},
  "MaxAlternatives": {},
  "VocabularyName": {}
}
```

Allows additional optional settings in your request, including channel identification, alternative transcriptions, and speaker partitioning. You can use that to apply custom vocabularies to your medical transcription job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShowSpeakerLabels|object|false|none|none|
|MaxSpeakerLabels|object|false|none|none|
|ChannelIdentification|object|false|none|none|
|ShowAlternatives|object|false|none|none|
|MaxAlternatives|object|false|none|none|
|VocabularyName|object|false|none|none|

<h2 id="tocS_Specialty">Specialty</h2>
<!-- backwards compatibility -->
<a id="schemaspecialty"></a>
<a id="schema_Specialty"></a>
<a id="tocSspecialty"></a>
<a id="tocsspecialty"></a>

```json
"PRIMARYCARE"
```

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
"CONVERSATION"
```

<h2 id="tocS_MedicalTranscriptionJobSummary">MedicalTranscriptionJobSummary</h2>
<!-- backwards compatibility -->
<a id="schemamedicaltranscriptionjobsummary"></a>
<a id="schema_MedicalTranscriptionJobSummary"></a>
<a id="tocSmedicaltranscriptionjobsummary"></a>
<a id="tocsmedicaltranscriptionjobsummary"></a>

```json
{
  "MedicalTranscriptionJobName": {},
  "CreationTime": {},
  "StartTime": {},
  "CompletionTime": {},
  "LanguageCode": {},
  "TranscriptionJobStatus": {},
  "FailureReason": {},
  "OutputLocationType": {},
  "Specialty": {},
  "ContentIdentificationType": {},
  "Type": {}
}
```

Provides detailed information about a specific medical transcription job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MedicalTranscriptionJobName|object|false|none|none|
|CreationTime|object|false|none|none|
|StartTime|object|false|none|none|
|CompletionTime|object|false|none|none|
|LanguageCode|object|false|none|none|
|TranscriptionJobStatus|object|false|none|none|
|FailureReason|object|false|none|none|
|OutputLocationType|object|false|none|none|
|Specialty|object|false|none|none|
|ContentIdentificationType|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_OutputLocationType">OutputLocationType</h2>
<!-- backwards compatibility -->
<a id="schemaoutputlocationtype"></a>
<a id="schema_OutputLocationType"></a>
<a id="tocSoutputlocationtype"></a>
<a id="tocsoutputlocationtype"></a>

```json
"CUSTOMER_BUCKET"
```

<h2 id="tocS_ModelSettings">ModelSettings</h2>
<!-- backwards compatibility -->
<a id="schemamodelsettings"></a>
<a id="schema_ModelSettings"></a>
<a id="tocSmodelsettings"></a>
<a id="tocsmodelsettings"></a>

```json
{
  "LanguageModelName": {}
}
```

<p>Provides the name of the custom language model that was included in the specified transcription job.</p> <p>Only use <code>ModelSettings</code> with the <code>LanguageModelName</code> sub-parameter if you're <b>not</b> using automatic language identification (<code/>). If using <code>LanguageIdSettings</code> in your request, this parameter contains a <code>LanguageModelName</code> sub-parameter.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LanguageModelName|object|false|none|none|

<h2 id="tocS_NonTalkTimeFilter">NonTalkTimeFilter</h2>
<!-- backwards compatibility -->
<a id="schemanontalktimefilter"></a>
<a id="schema_NonTalkTimeFilter"></a>
<a id="tocSnontalktimefilter"></a>
<a id="tocsnontalktimefilter"></a>

```json
{
  "Threshold": {},
  "AbsoluteTimeRange": {
    "StartTime": {},
    "EndTime": {},
    "First": {},
    "Last": {}
  },
  "RelativeTimeRange": {
    "StartPercentage": {},
    "EndPercentage": {},
    "First": {},
    "Last": {}
  },
  "Negate": {}
}
```

<p>Flag the presence or absence of periods of silence in your Call Analytics transcription output.</p> <p>Rules using <code>NonTalkTimeFilter</code> are designed to match:</p> <ul> <li> <p>The presence of silence at specified periods throughout the call</p> </li> <li> <p>The presence of speech at specified periods throughout the call</p> </li> </ul> <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call categories</a> for usage examples.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Threshold|object|false|none|none|
|AbsoluteTimeRange|object|false|none|none|
|RelativeTimeRange|object|false|none|none|
|Negate|object|false|none|none|

<h2 id="tocS_OutputBucketName">OutputBucketName</h2>
<!-- backwards compatibility -->
<a id="schemaoutputbucketname"></a>
<a id="schema_OutputBucketName"></a>
<a id="tocSoutputbucketname"></a>
<a id="tocsoutputbucketname"></a>

```json
"string"
```

<h2 id="tocS_OutputKey">OutputKey</h2>
<!-- backwards compatibility -->
<a id="schemaoutputkey"></a>
<a id="schema_OutputKey"></a>
<a id="tocSoutputkey"></a>
<a id="tocsoutputkey"></a>

```json
"string"
```

<h2 id="tocS_Percentage">Percentage</h2>
<!-- backwards compatibility -->
<a id="schemapercentage"></a>
<a id="schema_Percentage"></a>
<a id="tocSpercentage"></a>
<a id="tocspercentage"></a>

```json
0
```

<h2 id="tocS_Phrase">Phrase</h2>
<!-- backwards compatibility -->
<a id="schemaphrase"></a>
<a id="schema_Phrase"></a>
<a id="tocSphrase"></a>
<a id="tocsphrase"></a>

```json
"string"
```

<h2 id="tocS_PiiEntityType">PiiEntityType</h2>
<!-- backwards compatibility -->
<a id="schemapiientitytype"></a>
<a id="schema_PiiEntityType"></a>
<a id="tocSpiientitytype"></a>
<a id="tocspiientitytype"></a>

```json
"BANK_ACCOUNT_NUMBER"
```

<h2 id="tocS_TranscriptFilter">TranscriptFilter</h2>
<!-- backwards compatibility -->
<a id="schematranscriptfilter"></a>
<a id="schema_TranscriptFilter"></a>
<a id="tocStranscriptfilter"></a>
<a id="tocstranscriptfilter"></a>

```json
{
  "TranscriptFilterType": {},
  "AbsoluteTimeRange": {
    "StartTime": {},
    "EndTime": {},
    "First": {},
    "Last": {}
  },
  "RelativeTimeRange": {
    "StartPercentage": {},
    "EndPercentage": {},
    "First": {},
    "Last": {}
  },
  "ParticipantRole": {},
  "Negate": {},
  "Targets": {}
}
```

<p>Flag the presence or absence of specific words or phrases detected in your Call Analytics transcription output.</p> <p>Rules using <code>TranscriptFilter</code> are designed to match:</p> <ul> <li> <p>Custom words or phrases spoken by the agent, the customer, or both</p> </li> <li> <p>Custom words or phrases <b>not</b> spoken by the agent, the customer, or either</p> </li> <li> <p>Custom words or phrases that occur at a specific time frame</p> </li> </ul> <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call categories</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html#tca-rules-stream">Rule criteria for streaming categories</a> for usage examples.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TranscriptFilterType|object|true|none|none|
|AbsoluteTimeRange|object|false|none|none|
|RelativeTimeRange|object|false|none|none|
|ParticipantRole|object|false|none|none|
|Negate|object|false|none|none|
|Targets|object|true|none|none|

<h2 id="tocS_SentimentFilter">SentimentFilter</h2>
<!-- backwards compatibility -->
<a id="schemasentimentfilter"></a>
<a id="schema_SentimentFilter"></a>
<a id="tocSsentimentfilter"></a>
<a id="tocssentimentfilter"></a>

```json
{
  "Sentiments": {},
  "AbsoluteTimeRange": {
    "StartTime": {},
    "EndTime": {},
    "First": {},
    "Last": {}
  },
  "RelativeTimeRange": {
    "StartPercentage": {},
    "EndPercentage": {},
    "First": {},
    "Last": {}
  },
  "ParticipantRole": {},
  "Negate": {}
}
```

<p>Flag the presence or absence of specific sentiments detected in your Call Analytics transcription output.</p> <p>Rules using <code>SentimentFilter</code> are designed to match:</p> <ul> <li> <p>The presence or absence of a positive sentiment felt by the customer, agent, or both at specified points in the call</p> </li> <li> <p>The presence or absence of a negative sentiment felt by the customer, agent, or both at specified points in the call</p> </li> <li> <p>The presence or absence of a neutral sentiment felt by the customer, agent, or both at specified points in the call</p> </li> <li> <p>The presence or absence of a mixed sentiment felt by the customer, the agent, or both at specified points in the call</p> </li> </ul> <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call categories</a> for usage examples.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sentiments|object|true|none|none|
|AbsoluteTimeRange|object|false|none|none|
|RelativeTimeRange|object|false|none|none|
|ParticipantRole|object|false|none|none|
|Negate|object|false|none|none|

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "NonTalkTimeFilter": {
    "Threshold": {},
    "AbsoluteTimeRange": {
      "StartTime": {},
      "EndTime": {},
      "First": {},
      "Last": {}
    },
    "RelativeTimeRange": {
      "StartPercentage": {},
      "EndPercentage": {},
      "First": {},
      "Last": {}
    },
    "Negate": {}
  },
  "InterruptionFilter": {
    "Threshold": {},
    "ParticipantRole": {},
    "AbsoluteTimeRange": {
      "StartTime": {},
      "EndTime": {},
      "First": {},
      "Last": {}
    },
    "RelativeTimeRange": {
      "StartPercentage": {},
      "EndPercentage": {},
      "First": {},
      "Last": {}
    },
    "Negate": {}
  },
  "TranscriptFilter": {
    "TranscriptFilterType": {},
    "AbsoluteTimeRange": {
      "StartTime": {},
      "EndTime": {},
      "First": {},
      "Last": {}
    },
    "RelativeTimeRange": {
      "StartPercentage": {},
      "EndPercentage": {},
      "First": {},
      "Last": {}
    },
    "ParticipantRole": {},
    "Negate": {},
    "Targets": {}
  },
  "SentimentFilter": {
    "Sentiments": {},
    "AbsoluteTimeRange": {
      "StartTime": {},
      "EndTime": {},
      "First": {},
      "Last": {}
    },
    "RelativeTimeRange": {
      "StartPercentage": {},
      "EndPercentage": {},
      "First": {},
      "Last": {}
    },
    "ParticipantRole": {},
    "Negate": {}
  }
}
```

<p>A rule is a set of criteria that you can specify to flag an attribute in your Call Analytics output. Rules define a Call Analytics category.</p> <p>Rules can include these parameters: , , , and .</p> <p>To learn more about Call Analytics rules and categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p> <p>To learn more about Call Analytics, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call center audio with Call Analytics</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NonTalkTimeFilter|object|false|none|none|
|InterruptionFilter|object|false|none|none|
|TranscriptFilter|object|false|none|none|
|SentimentFilter|object|false|none|none|

<h2 id="tocS_SentimentValueList">SentimentValueList</h2>
<!-- backwards compatibility -->
<a id="schemasentimentvaluelist"></a>
<a id="schema_SentimentValueList"></a>
<a id="tocSsentimentvaluelist"></a>
<a id="tocssentimentvaluelist"></a>

```json
[
  "POSITIVE"
]
```

<h2 id="tocS_SentimentValue">SentimentValue</h2>
<!-- backwards compatibility -->
<a id="schemasentimentvalue"></a>
<a id="schema_SentimentValue"></a>
<a id="tocSsentimentvalue"></a>
<a id="tocssentimentvalue"></a>

```json
"POSITIVE"
```

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
{
  "VocabularyName": {},
  "ShowSpeakerLabels": {},
  "MaxSpeakerLabels": {},
  "ChannelIdentification": {},
  "ShowAlternatives": {},
  "MaxAlternatives": {},
  "VocabularyFilterName": {},
  "VocabularyFilterMethod": {}
}
```

Allows additional optional settings in your request, including channel identification, alternative transcriptions, and speaker partitioning. You can use that to apply custom vocabularies to your transcription job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|false|none|none|
|ShowSpeakerLabels|object|false|none|none|
|MaxSpeakerLabels|object|false|none|none|
|ChannelIdentification|object|false|none|none|
|ShowAlternatives|object|false|none|none|
|MaxAlternatives|object|false|none|none|
|VocabularyFilterName|object|false|none|none|
|VocabularyFilterMethod|object|false|none|none|

<h2 id="tocS_Subtitles">Subtitles</h2>
<!-- backwards compatibility -->
<a id="schemasubtitles"></a>
<a id="schema_Subtitles"></a>
<a id="tocSsubtitles"></a>
<a id="tocssubtitles"></a>

```json
{
  "Formats": {},
  "OutputStartIndex": {}
}
```

<p>Generate subtitles for your media file with your transcription request.</p> <p>You can choose a start index of 0 or 1, and you can specify either WebVTT or SubRip (or both) as your output format.</p> <p>Note that your subtitle files are placed in the same location as your transcription output.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Formats|object|false|none|none|
|OutputStartIndex|object|false|none|none|

<h2 id="tocS_ToxicityDetection">ToxicityDetection</h2>
<!-- backwards compatibility -->
<a id="schematoxicitydetection"></a>
<a id="schema_ToxicityDetection"></a>
<a id="tocStoxicitydetection"></a>
<a id="tocstoxicitydetection"></a>

```json
[
  {
    "ToxicityCategories": {}
  }
]
```

<h2 id="tocS_StringTargetList">StringTargetList</h2>
<!-- backwards compatibility -->
<a id="schemastringtargetlist"></a>
<a id="schema_StringTargetList"></a>
<a id="tocSstringtargetlist"></a>
<a id="tocsstringtargetlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SubtitleFileUris">SubtitleFileUris</h2>
<!-- backwards compatibility -->
<a id="schemasubtitlefileuris"></a>
<a id="schema_SubtitleFileUris"></a>
<a id="tocSsubtitlefileuris"></a>
<a id="tocssubtitlefileuris"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SubtitleFormat">SubtitleFormat</h2>
<!-- backwards compatibility -->
<a id="schemasubtitleformat"></a>
<a id="schema_SubtitleFormat"></a>
<a id="tocSsubtitleformat"></a>
<a id="tocssubtitleformat"></a>

```json
"vtt"
```

<h2 id="tocS_SubtitleFormats">SubtitleFormats</h2>
<!-- backwards compatibility -->
<a id="schemasubtitleformats"></a>
<a id="schema_SubtitleFormats"></a>
<a id="tocSsubtitleformats"></a>
<a id="tocssubtitleformats"></a>

```json
[
  "vtt"
]
```

<h2 id="tocS_SubtitleOutputStartIndex">SubtitleOutputStartIndex</h2>
<!-- backwards compatibility -->
<a id="schemasubtitleoutputstartindex"></a>
<a id="schema_SubtitleOutputStartIndex"></a>
<a id="tocSsubtitleoutputstartindex"></a>
<a id="tocssubtitleoutputstartindex"></a>

```json
0
```

<h2 id="tocS_SubtitlesOutput">SubtitlesOutput</h2>
<!-- backwards compatibility -->
<a id="schemasubtitlesoutput"></a>
<a id="schema_SubtitlesOutput"></a>
<a id="tocSsubtitlesoutput"></a>
<a id="tocssubtitlesoutput"></a>

```json
{
  "Formats": {},
  "SubtitleFileUris": {},
  "OutputStartIndex": {}
}
```

Provides information about your subtitle file, including format, start index, and Amazon S3 location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Formats|object|false|none|none|
|SubtitleFileUris|object|false|none|none|
|OutputStartIndex|object|false|none|none|

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

<p>Adds metadata, in the form of a key:value pair, to the specified resource.</p> <p>For example, you could add the tag <code>Department:Sales</code> to a resource to indicate that it pertains to your organization's sales department. You can also use tags for tag-based access control.</p> <p>To learn more about tagging, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>

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

<h2 id="tocS_ToxicityCategory">ToxicityCategory</h2>
<!-- backwards compatibility -->
<a id="schematoxicitycategory"></a>
<a id="schema_ToxicityCategory"></a>
<a id="tocStoxicitycategory"></a>
<a id="tocstoxicitycategory"></a>

```json
"ALL"
```

<h2 id="tocS_ToxicityCategories">ToxicityCategories</h2>
<!-- backwards compatibility -->
<a id="schematoxicitycategories"></a>
<a id="schema_ToxicityCategories"></a>
<a id="tocStoxicitycategories"></a>
<a id="tocstoxicitycategories"></a>

```json
[
  "ALL"
]
```

<h2 id="tocS_ToxicityDetectionSettings">ToxicityDetectionSettings</h2>
<!-- backwards compatibility -->
<a id="schematoxicitydetectionsettings"></a>
<a id="schema_ToxicityDetectionSettings"></a>
<a id="tocStoxicitydetectionsettings"></a>
<a id="tocstoxicitydetectionsettings"></a>

```json
{
  "ToxicityCategories": {}
}
```

Contains <code>ToxicityCategories</code>, which is a required parameter if you want to enable toxicity detection (<code>ToxicityDetection</code>) in your transcription request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ToxicityCategories|object|true|none|none|

<h2 id="tocS_TranscriptFilterType">TranscriptFilterType</h2>
<!-- backwards compatibility -->
<a id="schematranscriptfiltertype"></a>
<a id="schema_TranscriptFilterType"></a>
<a id="tocStranscriptfiltertype"></a>
<a id="tocstranscriptfiltertype"></a>

```json
"EXACT"
```

<h2 id="tocS_TranscriptionJobSummary">TranscriptionJobSummary</h2>
<!-- backwards compatibility -->
<a id="schematranscriptionjobsummary"></a>
<a id="schema_TranscriptionJobSummary"></a>
<a id="tocStranscriptionjobsummary"></a>
<a id="tocstranscriptionjobsummary"></a>

```json
{
  "TranscriptionJobName": {},
  "CreationTime": {},
  "StartTime": {},
  "CompletionTime": {},
  "LanguageCode": {},
  "TranscriptionJobStatus": {},
  "FailureReason": {},
  "OutputLocationType": {},
  "ContentRedaction": {
    "RedactionType": {},
    "RedactionOutput": {},
    "PiiEntityTypes": {}
  },
  "ModelSettings": {
    "LanguageModelName": {}
  },
  "IdentifyLanguage": {},
  "IdentifyMultipleLanguages": {},
  "IdentifiedLanguageScore": {},
  "LanguageCodes": {},
  "ToxicityDetection": {}
}
```

Provides detailed information about a specific transcription job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TranscriptionJobName|object|false|none|none|
|CreationTime|object|false|none|none|
|StartTime|object|false|none|none|
|CompletionTime|object|false|none|none|
|LanguageCode|object|false|none|none|
|TranscriptionJobStatus|object|false|none|none|
|FailureReason|object|false|none|none|
|OutputLocationType|object|false|none|none|
|ContentRedaction|object|false|none|none|
|ModelSettings|[ModelSettings](#schemamodelsettings)|false|none|<p>Provides the name of the custom language model that was included in the specified transcription job.</p> <p>Only use <code>ModelSettings</code> with the <code>LanguageModelName</code> sub-parameter if you're <b>not</b> using automatic language identification (<code/>). If using <code>LanguageIdSettings</code> in your request, this parameter contains a <code>LanguageModelName</code> sub-parameter.</p>|
|IdentifyLanguage|object|false|none|none|
|IdentifyMultipleLanguages|object|false|none|none|
|IdentifiedLanguageScore|object|false|none|none|
|LanguageCodes|object|false|none|none|
|ToxicityDetection|object|false|none|none|

<h2 id="tocS_VocabularyInfo">VocabularyInfo</h2>
<!-- backwards compatibility -->
<a id="schemavocabularyinfo"></a>
<a id="schema_VocabularyInfo"></a>
<a id="tocSvocabularyinfo"></a>
<a id="tocsvocabularyinfo"></a>

```json
{
  "VocabularyName": {},
  "LanguageCode": {},
  "LastModifiedTime": {},
  "VocabularyState": {}
}
```

Provides information about a custom vocabulary, including the language of the custom vocabulary, when it was last modified, its name, and the processing state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyName|object|false|none|none|
|LanguageCode|object|false|none|none|
|LastModifiedTime|object|false|none|none|
|VocabularyState|object|false|none|none|

<h2 id="tocS_VocabularyFilterInfo">VocabularyFilterInfo</h2>
<!-- backwards compatibility -->
<a id="schemavocabularyfilterinfo"></a>
<a id="schema_VocabularyFilterInfo"></a>
<a id="tocSvocabularyfilterinfo"></a>
<a id="tocsvocabularyfilterinfo"></a>

```json
{
  "VocabularyFilterName": {},
  "LanguageCode": {},
  "LastModifiedTime": {}
}
```

Provides information about a custom vocabulary filter, including the language of the filter, when it was last modified, and its name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VocabularyFilterName|object|false|none|none|
|LanguageCode|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_Word">Word</h2>
<!-- backwards compatibility -->
<a id="schemaword"></a>
<a id="schema_Word"></a>
<a id="tocSword"></a>
<a id="tocsword"></a>

```json
"string"
```
