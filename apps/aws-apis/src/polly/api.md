<h1 id="amazon-polly">Amazon Polly v2016-06-10</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Amazon Polly is a web service that makes it easy to synthesize speech from text.</p> <p>The Amazon Polly service provides API operations for synthesizing high-quality speech from plain text and Speech Synthesis Markup Language (SSML), along with managing pronunciations lexicons that enable you to get the best results for your application domain.</p>

Base URLs:

* <a href="http://polly.us-east-1.amazonaws.com">http://polly.us-east-1.amazonaws.com</a> - The Amazon Polly multi-region endpoint

* <a href="https://polly.us-east-1.amazonaws.com">https://polly.us-east-1.amazonaws.com</a> - The Amazon Polly multi-region endpoint

* <a href="http://polly.cn-north-1.amazonaws.com.cn">http://polly.cn-north-1.amazonaws.com.cn</a> - The Amazon Polly endpoint for China (Beijing) and China (Ningxia)

* <a href="https://polly.cn-north-1.amazonaws.com.cn">https://polly.cn-north-1.amazonaws.com.cn</a> - The Amazon Polly endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/polly/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-polly-default">Default</h1>

## GetLexicon

<a id="opIdGetLexicon"></a>

> Code samples

```bash
curl https://polly.us-east-1.amazonaws.com/v1/lexicons/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/lexicons/{LexiconName}`

Returns the content of the specified pronunciation lexicon stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.

<h3 id="getlexicon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LexiconName|path|string|true|Name of the lexicon.|
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
  "Lexicon": {
    "Content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<lexicon version=\"1.0\" \r\n      xmlns=\"http://www.w3.org/2005/01/pronunciation-lexicon\"\r\n      xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" \r\n      xsi:schemaLocation=\"http://www.w3.org/2005/01/pronunciation-lexicon \r\n        http://www.w3.org/TR/2007/CR-pronunciation-lexicon-20071212/pls.xsd\"\r\n      alphabet=\"ipa\" \r\n      xml:lang=\"en-US\">\r\n  <lexeme>\r\n    <grapheme>W3C</grapheme>\r\n    <alias>World Wide Web Consortium</alias>\r\n  </lexeme>\r\n</lexicon>",
    "Name": "example"
  },
  "LexiconAttributes": {
    "Alphabet": "ipa",
    "LanguageCode": "en-US",
    "LastModified": 1478542980.117,
    "LexemesCount": 1,
    "LexiconArn": "arn:aws:polly:us-east-1:123456789012:lexicon/example",
    "Size": 503
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

<h3 id="getlexicon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLexiconOutput](#schemagetlexiconoutput)|
|480|480|LexiconNotFoundException|[LexiconNotFoundException](#schemalexiconnotfoundexception)|
|481|481|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutLexicon

<a id="opIdPutLexicon"></a>

> Code samples

```bash
curl https://polly.us-east-1.amazonaws.com/v1/lexicons/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Content": "password"
  }'
```

`PUT /v1/lexicons/{LexiconName}`

<p>Stores a pronunciation lexicon in an Amazon Web Services Region. If a lexicon with the same name already exists in the region, it is overwritten by the new lexicon. Lexicon operations have eventual consistency, therefore, it might take some time before the lexicon is available to the SynthesizeSpeech operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>

> Body parameter

```json
{
  "Content": "password"
}
```

<h3 id="putlexicon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LexiconName|path|string|true|Name of the lexicon. The name must follow the regular express format [0-9A-Za-z]{1,20}. That is, the name is a case-sensitive alphanumeric string up to 20 characters long. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Content|body|string(password)|true|Content of the PLS lexicon as string data.|

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

<h3 id="putlexicon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutLexiconOutput](#schemaputlexiconoutput)|
|480|480|InvalidLexiconException|[InvalidLexiconException](#schemainvalidlexiconexception)|
|481|481|UnsupportedPlsAlphabetException|[UnsupportedPlsAlphabetException](#schemaunsupportedplsalphabetexception)|
|482|482|UnsupportedPlsLanguageException|[UnsupportedPlsLanguageException](#schemaunsupportedplslanguageexception)|
|483|483|LexiconSizeExceededException|[LexiconSizeExceededException](#schemalexiconsizeexceededexception)|
|484|484|MaxLexemeLengthExceededException|[MaxLexemeLengthExceededException](#schemamaxlexemelengthexceededexception)|
|485|485|MaxLexiconsNumberExceededException|[MaxLexiconsNumberExceededException](#schemamaxlexiconsnumberexceededexception)|
|486|486|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLexicon

<a id="opIdDeleteLexicon"></a>

> Code samples

```bash
curl https://polly.us-east-1.amazonaws.com/v1/lexicons/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/lexicons/{LexiconName}`

<p>Deletes the specified pronunciation lexicon stored in an Amazon Web Services Region. A lexicon which has been deleted is not available for speech synthesis, nor is it possible to retrieve it using either the <code>GetLexicon</code> or <code>ListLexicon</code> APIs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>

<h3 id="deletelexicon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|LexiconName|path|string|true|The name of the lexicon to delete. Must be an existing lexicon in the region.|
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

<h3 id="deletelexicon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLexiconOutput](#schemadeletelexiconoutput)|
|480|480|LexiconNotFoundException|[LexiconNotFoundException](#schemalexiconnotfoundexception)|
|481|481|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVoices

<a id="opIdDescribeVoices"></a>

> Code samples

```bash
curl https://polly.us-east-1.amazonaws.com/v1/voices \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/voices`

<p>Returns the list of voices that are available for use when requesting speech synthesis. Each voice speaks a specified language, is either male or female, and is identified by an ID, which is the ASCII version of the voice name. </p> <p>When synthesizing speech ( <code>SynthesizeSpeech</code> ), you provide the voice ID for the voice you want from the list of voices returned by <code>DescribeVoices</code>.</p> <p>For example, you want your news reader application to read news in a specific language, but giving a user the option to choose the voice. Using the <code>DescribeVoices</code> operation you can provide the user with a list of available voices to select from.</p> <p> You can optionally specify a language code to filter the available voices. For example, if you specify <code>en-US</code>, the operation returns a list of all available US English voices. </p> <p>This operation requires permissions to perform the <code>polly:DescribeVoices</code> action.</p>

<h3 id="describevoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Engine|query|string|false|Specifies the engine (<code>standard</code> or <code>neural</code>) used by Amazon Polly when processing input text for speech synthesis. |
|LanguageCode|query|string|false| The language identification tag (ISO 639 code for the language name-ISO 3166 country code) for filtering the list of voices returned. If you don't specify this optional parameter, all available voices are returned. |
|IncludeAdditionalLanguageCodes|query|boolean|false|Boolean value indicating whether to return any bilingual voices that use the specified language as an additional language. For instance, if you request all languages that use US English (es-US), and there is an Italian voice that speaks both Italian (it-IT) and US English, that voice will be included if you specify <code>yes</code> but not if you specify <code>no</code>.|
|NextToken|query|string|false|An opaque pagination token returned from the previous <code>DescribeVoices</code> operation. If present, this indicates where to continue the listing.|
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
|Engine|standard|
|Engine|neural|
|LanguageCode|arb|
|LanguageCode|cmn-CN|
|LanguageCode|cy-GB|
|LanguageCode|da-DK|
|LanguageCode|de-DE|
|LanguageCode|en-AU|
|LanguageCode|en-GB|
|LanguageCode|en-GB-WLS|
|LanguageCode|en-IN|
|LanguageCode|en-US|
|LanguageCode|es-ES|
|LanguageCode|es-MX|
|LanguageCode|es-US|
|LanguageCode|fr-CA|
|LanguageCode|fr-FR|
|LanguageCode|is-IS|
|LanguageCode|it-IT|
|LanguageCode|ja-JP|
|LanguageCode|hi-IN|
|LanguageCode|ko-KR|
|LanguageCode|nb-NO|
|LanguageCode|nl-NL|
|LanguageCode|pl-PL|
|LanguageCode|pt-BR|
|LanguageCode|pt-PT|
|LanguageCode|ro-RO|
|LanguageCode|ru-RU|
|LanguageCode|sv-SE|
|LanguageCode|tr-TR|
|LanguageCode|en-NZ|
|LanguageCode|en-ZA|
|LanguageCode|ca-ES|
|LanguageCode|de-AT|
|LanguageCode|yue-CN|
|LanguageCode|ar-AE|
|LanguageCode|fi-FI|
|LanguageCode|en-IE|
|LanguageCode|nl-BE|
|LanguageCode|fr-BE|

> Example responses

> 200 Response

```json
{
  "Voices": [
    {
      "Gender": "Female",
      "Id": "Emma",
      "LanguageCode": "en-GB",
      "LanguageName": "British English",
      "Name": "Emma"
    },
    {
      "Gender": "Male",
      "Id": "Brian",
      "LanguageCode": "en-GB",
      "LanguageName": "British English",
      "Name": "Brian"
    },
    {
      "Gender": "Female",
      "Id": "Amy",
      "LanguageCode": "en-GB",
      "LanguageName": "British English",
      "Name": "Amy"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describevoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVoicesOutput](#schemadescribevoicesoutput)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSpeechSynthesisTask

<a id="opIdGetSpeechSynthesisTask"></a>

> Code samples

```bash
curl https://polly.us-east-1.amazonaws.com/v1/synthesisTasks/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/synthesisTasks/{TaskId}`

Retrieves a specific SpeechSynthesisTask object based on its TaskID. This object contains information about the given speech synthesis task, including the status of the task, and a link to the S3 bucket containing the output of the task.

<h3 id="getspeechsynthesistask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TaskId|path|string|true|The Amazon Polly generated identifier for a speech synthesis task.|
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
  "SynthesisTask": {
    "Engine": {},
    "TaskId": {},
    "TaskStatus": {},
    "TaskStatusReason": {},
    "OutputUri": {},
    "CreationTime": {},
    "RequestCharacters": {},
    "SnsTopicArn": {},
    "LexiconNames": {},
    "OutputFormat": {},
    "SampleRate": {},
    "SpeechMarkTypes": {},
    "TextType": {},
    "VoiceId": {},
    "LanguageCode": {}
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

<h3 id="getspeechsynthesistask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSpeechSynthesisTaskOutput](#schemagetspeechsynthesistaskoutput)|
|480|480|InvalidTaskIdException|[InvalidTaskIdException](#schemainvalidtaskidexception)|
|481|481|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|
|482|482|SynthesisTaskNotFoundException|[SynthesisTaskNotFoundException](#schemasynthesistasknotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLexicons

<a id="opIdListLexicons"></a>

> Code samples

```bash
curl https://polly.us-east-1.amazonaws.com/v1/lexicons \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/lexicons`

Returns a list of pronunciation lexicons stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.

<h3 id="listlexicons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|An opaque pagination token returned from previous <code>ListLexicons</code> operation. If present, indicates where to continue the list of lexicons.|
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
  "Lexicons": [
    {
      "Attributes": {
        "Alphabet": "ipa",
        "LanguageCode": "en-US",
        "LastModified": 1478542980.117,
        "LexemesCount": 1,
        "LexiconArn": "arn:aws:polly:us-east-1:123456789012:lexicon/example",
        "Size": 503
      },
      "Name": "example"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listlexicons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLexiconsOutput](#schemalistlexiconsoutput)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSpeechSynthesisTasks

<a id="opIdListSpeechSynthesisTasks"></a>

> Code samples

```bash
curl https://polly.us-east-1.amazonaws.com/v1/synthesisTasks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/synthesisTasks`

Returns a list of SpeechSynthesisTask objects ordered by their creation date. This operation can filter the tasks by their status, for example, allowing users to list only tasks that are completed.

<h3 id="listspeechsynthesistasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|integer|false|Maximum number of speech synthesis tasks returned in a List operation.|
|NextToken|query|string|false|The pagination token to use in the next request to continue the listing of speech synthesis tasks. |
|Status|query|string|false|Status of the speech synthesis tasks returned in a List operation|
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
|Status|scheduled|
|Status|inProgress|
|Status|completed|
|Status|failed|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "SynthesisTasks": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listspeechsynthesistasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSpeechSynthesisTasksOutput](#schemalistspeechsynthesistasksoutput)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSpeechSynthesisTask

<a id="opIdStartSpeechSynthesisTask"></a>

> Code samples

```bash
curl https://polly.us-east-1.amazonaws.com/v1/synthesisTasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Engine": "standard",
    "LanguageCode": "arb",
    "LexiconNames": [
      "string"
    ],
    "OutputFormat": "json",
    "OutputS3BucketName": "string",
    "OutputS3KeyPrefix": "string",
    "SampleRate": "string",
    "SnsTopicArn": "string",
    "SpeechMarkTypes": [
      "sentence"
    ],
    "Text": "string",
    "TextType": "ssml",
    "VoiceId": "Aditi"
  }'
```

`POST /v1/synthesisTasks`

Allows the creation of an asynchronous synthesis task, by starting a new <code>SpeechSynthesisTask</code>. This operation requires all the standard information needed for speech synthesis, plus the name of an Amazon S3 bucket for the service to store the output of the synthesis task and two optional parameters (<code>OutputS3KeyPrefix</code> and <code>SnsTopicArn</code>). Once the synthesis task is created, this operation will return a <code>SpeechSynthesisTask</code> object, which will include an identifier of this task as well as the current status. The <code>SpeechSynthesisTask</code> object is available for 72 hours after starting the asynchronous synthesis task.

> Body parameter

```json
{
  "Engine": "standard",
  "LanguageCode": "arb",
  "LexiconNames": [
    "string"
  ],
  "OutputFormat": "json",
  "OutputS3BucketName": "string",
  "OutputS3KeyPrefix": "string",
  "SampleRate": "string",
  "SnsTopicArn": "string",
  "SpeechMarkTypes": [
    "sentence"
  ],
  "Text": "string",
  "TextType": "ssml",
  "VoiceId": "Aditi"
}
```

<h3 id="startspeechsynthesistask-parameters">Parameters</h3>

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
|» Engine|body|string|false|Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error.|
|» LanguageCode|body|string|false|<p>Optional language code for the Speech Synthesis request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p>|
|» LexiconNames|body|[[LexiconName](#schemalexiconname)]|false|List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice. |
|» OutputFormat|body|string|true|The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json. |
|» OutputS3BucketName|body|string|true|Amazon S3 bucket name to which the output file will be saved.|
|» OutputS3KeyPrefix|body|string|false|The Amazon S3 key prefix for the output speech file.|
|» SampleRate|body|string|false|<p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p>|
|» SnsTopicArn|body|string|false|ARN for the SNS topic optionally used for providing status notification for a speech synthesis task.|
|» SpeechMarkTypes|body|[[SpeechMarkType](#schemaspeechmarktype)]|false|The type of speech marks returned for the input text.|
|» Text|body|string|true|The input text to synthesize. If you specify ssml as the TextType, follow the SSML format for the input text. |
|» TextType|body|string|false|Specifies whether the input text is plain text or SSML. The default value is plain text. |
|» VoiceId|body|string|true|Voice ID to use for the synthesis. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Engine|standard|
|» Engine|neural|
|» LanguageCode|arb|
|» LanguageCode|cmn-CN|
|» LanguageCode|cy-GB|
|» LanguageCode|da-DK|
|» LanguageCode|de-DE|
|» LanguageCode|en-AU|
|» LanguageCode|en-GB|
|» LanguageCode|en-GB-WLS|
|» LanguageCode|en-IN|
|» LanguageCode|en-US|
|» LanguageCode|es-ES|
|» LanguageCode|es-MX|
|» LanguageCode|es-US|
|» LanguageCode|fr-CA|
|» LanguageCode|fr-FR|
|» LanguageCode|is-IS|
|» LanguageCode|it-IT|
|» LanguageCode|ja-JP|
|» LanguageCode|hi-IN|
|» LanguageCode|ko-KR|
|» LanguageCode|nb-NO|
|» LanguageCode|nl-NL|
|» LanguageCode|pl-PL|
|» LanguageCode|pt-BR|
|» LanguageCode|pt-PT|
|» LanguageCode|ro-RO|
|» LanguageCode|ru-RU|
|» LanguageCode|sv-SE|
|» LanguageCode|tr-TR|
|» LanguageCode|en-NZ|
|» LanguageCode|en-ZA|
|» LanguageCode|ca-ES|
|» LanguageCode|de-AT|
|» LanguageCode|yue-CN|
|» LanguageCode|ar-AE|
|» LanguageCode|fi-FI|
|» LanguageCode|en-IE|
|» LanguageCode|nl-BE|
|» LanguageCode|fr-BE|
|» OutputFormat|json|
|» OutputFormat|mp3|
|» OutputFormat|ogg_vorbis|
|» OutputFormat|pcm|
|» SpeechMarkTypes|sentence|
|» SpeechMarkTypes|ssml|
|» SpeechMarkTypes|viseme|
|» SpeechMarkTypes|word|
|» TextType|ssml|
|» TextType|text|
|» VoiceId|Aditi|
|» VoiceId|Amy|
|» VoiceId|Astrid|
|» VoiceId|Bianca|
|» VoiceId|Brian|
|» VoiceId|Camila|
|» VoiceId|Carla|
|» VoiceId|Carmen|
|» VoiceId|Celine|
|» VoiceId|Chantal|
|» VoiceId|Conchita|
|» VoiceId|Cristiano|
|» VoiceId|Dora|
|» VoiceId|Emma|
|» VoiceId|Enrique|
|» VoiceId|Ewa|
|» VoiceId|Filiz|
|» VoiceId|Gabrielle|
|» VoiceId|Geraint|
|» VoiceId|Giorgio|
|» VoiceId|Gwyneth|
|» VoiceId|Hans|
|» VoiceId|Ines|
|» VoiceId|Ivy|
|» VoiceId|Jacek|
|» VoiceId|Jan|
|» VoiceId|Joanna|
|» VoiceId|Joey|
|» VoiceId|Justin|
|» VoiceId|Karl|
|» VoiceId|Kendra|
|» VoiceId|Kevin|
|» VoiceId|Kimberly|
|» VoiceId|Lea|
|» VoiceId|Liv|
|» VoiceId|Lotte|
|» VoiceId|Lucia|
|» VoiceId|Lupe|
|» VoiceId|Mads|
|» VoiceId|Maja|
|» VoiceId|Marlene|
|» VoiceId|Mathieu|
|» VoiceId|Matthew|
|» VoiceId|Maxim|
|» VoiceId|Mia|
|» VoiceId|Miguel|
|» VoiceId|Mizuki|
|» VoiceId|Naja|
|» VoiceId|Nicole|
|» VoiceId|Olivia|
|» VoiceId|Penelope|
|» VoiceId|Raveena|
|» VoiceId|Ricardo|
|» VoiceId|Ruben|
|» VoiceId|Russell|
|» VoiceId|Salli|
|» VoiceId|Seoyeon|
|» VoiceId|Takumi|
|» VoiceId|Tatyana|
|» VoiceId|Vicki|
|» VoiceId|Vitoria|
|» VoiceId|Zeina|
|» VoiceId|Zhiyu|
|» VoiceId|Aria|
|» VoiceId|Ayanda|
|» VoiceId|Arlet|
|» VoiceId|Hannah|
|» VoiceId|Arthur|
|» VoiceId|Daniel|
|» VoiceId|Liam|
|» VoiceId|Pedro|
|» VoiceId|Kajal|
|» VoiceId|Hiujin|
|» VoiceId|Laura|
|» VoiceId|Elin|
|» VoiceId|Ida|
|» VoiceId|Suvi|
|» VoiceId|Ola|
|» VoiceId|Hala|
|» VoiceId|Andres|
|» VoiceId|Sergio|
|» VoiceId|Remi|
|» VoiceId|Adriano|
|» VoiceId|Thiago|
|» VoiceId|Ruth|
|» VoiceId|Stephen|
|» VoiceId|Kazuha|
|» VoiceId|Tomoko|
|» VoiceId|Niamh|
|» VoiceId|Sofie|
|» VoiceId|Lisa|
|» VoiceId|Isabelle|

> Example responses

> 200 Response

```json
{
  "SynthesisTask": {
    "Engine": {},
    "TaskId": {},
    "TaskStatus": {},
    "TaskStatusReason": {},
    "OutputUri": {},
    "CreationTime": {},
    "RequestCharacters": {},
    "SnsTopicArn": {},
    "LexiconNames": {},
    "OutputFormat": {},
    "SampleRate": {},
    "SpeechMarkTypes": {},
    "TextType": {},
    "VoiceId": {},
    "LanguageCode": {}
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

<h3 id="startspeechsynthesistask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartSpeechSynthesisTaskOutput](#schemastartspeechsynthesistaskoutput)|
|480|480|TextLengthExceededException|[TextLengthExceededException](#schematextlengthexceededexception)|
|481|481|InvalidS3BucketException|[InvalidS3BucketException](#schemainvalids3bucketexception)|
|482|482|InvalidS3KeyException|[InvalidS3KeyException](#schemainvalids3keyexception)|
|483|483|InvalidSampleRateException|[InvalidSampleRateException](#schemainvalidsamplerateexception)|
|484|484|InvalidSnsTopicArnException|[InvalidSnsTopicArnException](#schemainvalidsnstopicarnexception)|
|485|485|InvalidSsmlException|[InvalidSsmlException](#schemainvalidssmlexception)|
|486|486|EngineNotSupportedException|[EngineNotSupportedException](#schemaenginenotsupportedexception)|
|487|487|LexiconNotFoundException|[LexiconNotFoundException](#schemalexiconnotfoundexception)|
|488|488|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|
|489|489|MarksNotSupportedForFormatException|[MarksNotSupportedForFormatException](#schemamarksnotsupportedforformatexception)|
|490|490|SsmlMarksNotSupportedForTextTypeException|[SsmlMarksNotSupportedForTextTypeException](#schemassmlmarksnotsupportedfortexttypeexception)|
|491|491|LanguageNotSupportedException|[LanguageNotSupportedException](#schemalanguagenotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SynthesizeSpeech

<a id="opIdSynthesizeSpeech"></a>

> Code samples

```bash
curl https://polly.us-east-1.amazonaws.com/v1/speech \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Engine": "standard",
    "LanguageCode": "arb",
    "LexiconNames": [
      "string"
    ],
    "OutputFormat": "json",
    "SampleRate": "string",
    "SpeechMarkTypes": [
      "sentence"
    ],
    "Text": "string",
    "TextType": "ssml",
    "VoiceId": "Aditi"
  }'
```

`POST /v1/speech`

Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes. SSML input must be valid, well-formed SSML. Some alphabets might not be available with all the voices (for example, Cyrillic might not be read at all by English voices) unless phoneme mapping is used. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html">How it Works</a>.

> Body parameter

```json
{
  "Engine": "standard",
  "LanguageCode": "arb",
  "LexiconNames": [
    "string"
  ],
  "OutputFormat": "json",
  "SampleRate": "string",
  "SpeechMarkTypes": [
    "sentence"
  ],
  "Text": "string",
  "TextType": "ssml",
  "VoiceId": "Aditi"
}
```

<h3 id="synthesizespeech-parameters">Parameters</h3>

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
|» Engine|body|string|false|<p>Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. For information on Amazon Polly voices and which voices are available in standard-only, NTTS-only, and both standard and NTTS formats, see <a href="https://docs.aws.amazon.com/polly/latest/dg/voicelist.html">Available Voices</a>.</p> <p> <b>NTTS-only voices</b> </p> <p>When using NTTS-only voices such as Kevin (en-US), this parameter is required and must be set to <code>neural</code>. If the engine is not specified, or is set to <code>standard</code>, this will result in an error. </p> <p>Type: String</p> <p>Valid Values: <code>standard</code> \| <code>neural</code> </p> <p>Required: Yes</p> <p> <b>Standard voices</b> </p> <p>For standard voices, this is not required; the engine parameter defaults to <code>standard</code>. If the engine is not specified, or is set to <code>standard</code> and an NTTS-only voice is selected, this will result in an error. </p>|
|» LanguageCode|body|string|false|<p>Optional language code for the Synthesize Speech request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p>|
|» LexiconNames|body|[[LexiconName](#schemalexiconname)]|false|List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice. For information about storing lexicons, see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html">PutLexicon</a>.|
|» OutputFormat|body|string|true|<p> The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json. </p> <p>When pcm is used, the content returned is audio/pcm in a signed 16-bit, 1 channel (mono), little-endian format. </p>|
|» SampleRate|body|string|false|<p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p>|
|» SpeechMarkTypes|body|[[SpeechMarkType](#schemaspeechmarktype)]|false|The type of speech marks returned for the input text.|
|» Text|body|string|true| Input text to synthesize. If you specify <code>ssml</code> as the <code>TextType</code>, follow the SSML format for the input text. |
|» TextType|body|string|false| Specifies whether the input text is plain text or SSML. The default value is plain text. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/ssml.html">Using SSML</a>.|
|» VoiceId|body|string|true| Voice ID to use for the synthesis. You can get a list of available voice IDs by calling the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Engine|standard|
|» Engine|neural|
|» LanguageCode|arb|
|» LanguageCode|cmn-CN|
|» LanguageCode|cy-GB|
|» LanguageCode|da-DK|
|» LanguageCode|de-DE|
|» LanguageCode|en-AU|
|» LanguageCode|en-GB|
|» LanguageCode|en-GB-WLS|
|» LanguageCode|en-IN|
|» LanguageCode|en-US|
|» LanguageCode|es-ES|
|» LanguageCode|es-MX|
|» LanguageCode|es-US|
|» LanguageCode|fr-CA|
|» LanguageCode|fr-FR|
|» LanguageCode|is-IS|
|» LanguageCode|it-IT|
|» LanguageCode|ja-JP|
|» LanguageCode|hi-IN|
|» LanguageCode|ko-KR|
|» LanguageCode|nb-NO|
|» LanguageCode|nl-NL|
|» LanguageCode|pl-PL|
|» LanguageCode|pt-BR|
|» LanguageCode|pt-PT|
|» LanguageCode|ro-RO|
|» LanguageCode|ru-RU|
|» LanguageCode|sv-SE|
|» LanguageCode|tr-TR|
|» LanguageCode|en-NZ|
|» LanguageCode|en-ZA|
|» LanguageCode|ca-ES|
|» LanguageCode|de-AT|
|» LanguageCode|yue-CN|
|» LanguageCode|ar-AE|
|» LanguageCode|fi-FI|
|» LanguageCode|en-IE|
|» LanguageCode|nl-BE|
|» LanguageCode|fr-BE|
|» OutputFormat|json|
|» OutputFormat|mp3|
|» OutputFormat|ogg_vorbis|
|» OutputFormat|pcm|
|» SpeechMarkTypes|sentence|
|» SpeechMarkTypes|ssml|
|» SpeechMarkTypes|viseme|
|» SpeechMarkTypes|word|
|» TextType|ssml|
|» TextType|text|
|» VoiceId|Aditi|
|» VoiceId|Amy|
|» VoiceId|Astrid|
|» VoiceId|Bianca|
|» VoiceId|Brian|
|» VoiceId|Camila|
|» VoiceId|Carla|
|» VoiceId|Carmen|
|» VoiceId|Celine|
|» VoiceId|Chantal|
|» VoiceId|Conchita|
|» VoiceId|Cristiano|
|» VoiceId|Dora|
|» VoiceId|Emma|
|» VoiceId|Enrique|
|» VoiceId|Ewa|
|» VoiceId|Filiz|
|» VoiceId|Gabrielle|
|» VoiceId|Geraint|
|» VoiceId|Giorgio|
|» VoiceId|Gwyneth|
|» VoiceId|Hans|
|» VoiceId|Ines|
|» VoiceId|Ivy|
|» VoiceId|Jacek|
|» VoiceId|Jan|
|» VoiceId|Joanna|
|» VoiceId|Joey|
|» VoiceId|Justin|
|» VoiceId|Karl|
|» VoiceId|Kendra|
|» VoiceId|Kevin|
|» VoiceId|Kimberly|
|» VoiceId|Lea|
|» VoiceId|Liv|
|» VoiceId|Lotte|
|» VoiceId|Lucia|
|» VoiceId|Lupe|
|» VoiceId|Mads|
|» VoiceId|Maja|
|» VoiceId|Marlene|
|» VoiceId|Mathieu|
|» VoiceId|Matthew|
|» VoiceId|Maxim|
|» VoiceId|Mia|
|» VoiceId|Miguel|
|» VoiceId|Mizuki|
|» VoiceId|Naja|
|» VoiceId|Nicole|
|» VoiceId|Olivia|
|» VoiceId|Penelope|
|» VoiceId|Raveena|
|» VoiceId|Ricardo|
|» VoiceId|Ruben|
|» VoiceId|Russell|
|» VoiceId|Salli|
|» VoiceId|Seoyeon|
|» VoiceId|Takumi|
|» VoiceId|Tatyana|
|» VoiceId|Vicki|
|» VoiceId|Vitoria|
|» VoiceId|Zeina|
|» VoiceId|Zhiyu|
|» VoiceId|Aria|
|» VoiceId|Ayanda|
|» VoiceId|Arlet|
|» VoiceId|Hannah|
|» VoiceId|Arthur|
|» VoiceId|Daniel|
|» VoiceId|Liam|
|» VoiceId|Pedro|
|» VoiceId|Kajal|
|» VoiceId|Hiujin|
|» VoiceId|Laura|
|» VoiceId|Elin|
|» VoiceId|Ida|
|» VoiceId|Suvi|
|» VoiceId|Ola|
|» VoiceId|Hala|
|» VoiceId|Andres|
|» VoiceId|Sergio|
|» VoiceId|Remi|
|» VoiceId|Adriano|
|» VoiceId|Thiago|
|» VoiceId|Ruth|
|» VoiceId|Stephen|
|» VoiceId|Kazuha|
|» VoiceId|Tomoko|
|» VoiceId|Niamh|
|» VoiceId|Sofie|
|» VoiceId|Lisa|
|» VoiceId|Isabelle|

> Example responses

> 200 Response

```json
{
  "AudioStream": "TEXT",
  "ContentType": "audio/mpeg",
  "RequestCharacters": 37
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
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

<h3 id="synthesizespeech-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SynthesizeSpeechOutput](#schemasynthesizespeechoutput)|
|480|480|TextLengthExceededException|[TextLengthExceededException](#schematextlengthexceededexception)|
|481|481|InvalidSampleRateException|[InvalidSampleRateException](#schemainvalidsamplerateexception)|
|482|482|InvalidSsmlException|[InvalidSsmlException](#schemainvalidssmlexception)|
|483|483|LexiconNotFoundException|[LexiconNotFoundException](#schemalexiconnotfoundexception)|
|484|484|ServiceFailureException|[ServiceFailureException](#schemaservicefailureexception)|
|485|485|MarksNotSupportedForFormatException|[MarksNotSupportedForFormatException](#schemamarksnotsupportedforformatexception)|
|486|486|SsmlMarksNotSupportedForTextTypeException|[SsmlMarksNotSupportedForTextTypeException](#schemassmlmarksnotsupportedfortexttypeexception)|
|487|487|LanguageNotSupportedException|[LanguageNotSupportedException](#schemalanguagenotsupportedexception)|
|488|488|EngineNotSupportedException|[EngineNotSupportedException](#schemaenginenotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DeleteLexiconOutput">DeleteLexiconOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletelexiconoutput"></a>
<a id="schema_DeleteLexiconOutput"></a>
<a id="tocSdeletelexiconoutput"></a>
<a id="tocsdeletelexiconoutput"></a>

```json
{}
```

<h2 id="tocS_LexiconNotFoundException">LexiconNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemalexiconnotfoundexception"></a>
<a id="schema_LexiconNotFoundException"></a>
<a id="tocSlexiconnotfoundexception"></a>
<a id="tocslexiconnotfoundexception"></a>

```json
null
```

<h2 id="tocS_ServiceFailureException">ServiceFailureException</h2>
<!-- backwards compatibility -->
<a id="schemaservicefailureexception"></a>
<a id="schema_ServiceFailureException"></a>
<a id="tocSservicefailureexception"></a>
<a id="tocsservicefailureexception"></a>

```json
null
```

<h2 id="tocS_DescribeVoicesOutput">DescribeVoicesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevoicesoutput"></a>
<a id="schema_DescribeVoicesOutput"></a>
<a id="tocSdescribevoicesoutput"></a>
<a id="tocsdescribevoicesoutput"></a>

```json
{
  "Voices": [
    {
      "Gender": "Female",
      "Id": "Emma",
      "LanguageCode": "en-GB",
      "LanguageName": "British English",
      "Name": "Emma"
    },
    {
      "Gender": "Male",
      "Id": "Brian",
      "LanguageCode": "en-GB",
      "LanguageName": "British English",
      "Name": "Brian"
    },
    {
      "Gender": "Female",
      "Id": "Amy",
      "LanguageCode": "en-GB",
      "LanguageName": "British English",
      "Name": "Amy"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Voices|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_GetLexiconOutput">GetLexiconOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetlexiconoutput"></a>
<a id="schema_GetLexiconOutput"></a>
<a id="tocSgetlexiconoutput"></a>
<a id="tocsgetlexiconoutput"></a>

```json
{
  "Lexicon": {
    "Content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<lexicon version=\"1.0\" \r\n      xmlns=\"http://www.w3.org/2005/01/pronunciation-lexicon\"\r\n      xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" \r\n      xsi:schemaLocation=\"http://www.w3.org/2005/01/pronunciation-lexicon \r\n        http://www.w3.org/TR/2007/CR-pronunciation-lexicon-20071212/pls.xsd\"\r\n      alphabet=\"ipa\" \r\n      xml:lang=\"en-US\">\r\n  <lexeme>\r\n    <grapheme>W3C</grapheme>\r\n    <alias>World Wide Web Consortium</alias>\r\n  </lexeme>\r\n</lexicon>",
    "Name": "example"
  },
  "LexiconAttributes": {
    "Alphabet": "ipa",
    "LanguageCode": "en-US",
    "LastModified": 1478542980.117,
    "LexemesCount": 1,
    "LexiconArn": "arn:aws:polly:us-east-1:123456789012:lexicon/example",
    "Size": 503
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Lexicon|object|false|none|none|
|LexiconAttributes|object|false|none|none|

<h2 id="tocS_GetSpeechSynthesisTaskOutput">GetSpeechSynthesisTaskOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetspeechsynthesistaskoutput"></a>
<a id="schema_GetSpeechSynthesisTaskOutput"></a>
<a id="tocSgetspeechsynthesistaskoutput"></a>
<a id="tocsgetspeechsynthesistaskoutput"></a>

```json
{
  "SynthesisTask": {
    "Engine": {},
    "TaskId": {},
    "TaskStatus": {},
    "TaskStatusReason": {},
    "OutputUri": {},
    "CreationTime": {},
    "RequestCharacters": {},
    "SnsTopicArn": {},
    "LexiconNames": {},
    "OutputFormat": {},
    "SampleRate": {},
    "SpeechMarkTypes": {},
    "TextType": {},
    "VoiceId": {},
    "LanguageCode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SynthesisTask|object|false|none|none|

<h2 id="tocS_InvalidTaskIdException">InvalidTaskIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtaskidexception"></a>
<a id="schema_InvalidTaskIdException"></a>
<a id="tocSinvalidtaskidexception"></a>
<a id="tocsinvalidtaskidexception"></a>

```json
null
```

<h2 id="tocS_SynthesisTaskNotFoundException">SynthesisTaskNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemasynthesistasknotfoundexception"></a>
<a id="schema_SynthesisTaskNotFoundException"></a>
<a id="tocSsynthesistasknotfoundexception"></a>
<a id="tocssynthesistasknotfoundexception"></a>

```json
null
```

<h2 id="tocS_ListLexiconsOutput">ListLexiconsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistlexiconsoutput"></a>
<a id="schema_ListLexiconsOutput"></a>
<a id="tocSlistlexiconsoutput"></a>
<a id="tocslistlexiconsoutput"></a>

```json
{
  "Lexicons": [
    {
      "Attributes": {
        "Alphabet": "ipa",
        "LanguageCode": "en-US",
        "LastModified": 1478542980.117,
        "LexemesCount": 1,
        "LexiconArn": "arn:aws:polly:us-east-1:123456789012:lexicon/example",
        "Size": 503
      },
      "Name": "example"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Lexicons|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSpeechSynthesisTasksOutput">ListSpeechSynthesisTasksOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistspeechsynthesistasksoutput"></a>
<a id="schema_ListSpeechSynthesisTasksOutput"></a>
<a id="tocSlistspeechsynthesistasksoutput"></a>
<a id="tocslistspeechsynthesistasksoutput"></a>

```json
{
  "NextToken": {},
  "SynthesisTasks": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|SynthesisTasks|object|false|none|none|

<h2 id="tocS_PutLexiconOutput">PutLexiconOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputlexiconoutput"></a>
<a id="schema_PutLexiconOutput"></a>
<a id="tocSputlexiconoutput"></a>
<a id="tocsputlexiconoutput"></a>

```json
{}
```

<h2 id="tocS_InvalidLexiconException">InvalidLexiconException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidlexiconexception"></a>
<a id="schema_InvalidLexiconException"></a>
<a id="tocSinvalidlexiconexception"></a>
<a id="tocsinvalidlexiconexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedPlsAlphabetException">UnsupportedPlsAlphabetException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedplsalphabetexception"></a>
<a id="schema_UnsupportedPlsAlphabetException"></a>
<a id="tocSunsupportedplsalphabetexception"></a>
<a id="tocsunsupportedplsalphabetexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedPlsLanguageException">UnsupportedPlsLanguageException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedplslanguageexception"></a>
<a id="schema_UnsupportedPlsLanguageException"></a>
<a id="tocSunsupportedplslanguageexception"></a>
<a id="tocsunsupportedplslanguageexception"></a>

```json
null
```

<h2 id="tocS_LexiconSizeExceededException">LexiconSizeExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalexiconsizeexceededexception"></a>
<a id="schema_LexiconSizeExceededException"></a>
<a id="tocSlexiconsizeexceededexception"></a>
<a id="tocslexiconsizeexceededexception"></a>

```json
null
```

<h2 id="tocS_MaxLexemeLengthExceededException">MaxLexemeLengthExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaxlexemelengthexceededexception"></a>
<a id="schema_MaxLexemeLengthExceededException"></a>
<a id="tocSmaxlexemelengthexceededexception"></a>
<a id="tocsmaxlexemelengthexceededexception"></a>

```json
null
```

<h2 id="tocS_MaxLexiconsNumberExceededException">MaxLexiconsNumberExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaxlexiconsnumberexceededexception"></a>
<a id="schema_MaxLexiconsNumberExceededException"></a>
<a id="tocSmaxlexiconsnumberexceededexception"></a>
<a id="tocsmaxlexiconsnumberexceededexception"></a>

```json
null
```

<h2 id="tocS_StartSpeechSynthesisTaskOutput">StartSpeechSynthesisTaskOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartspeechsynthesistaskoutput"></a>
<a id="schema_StartSpeechSynthesisTaskOutput"></a>
<a id="tocSstartspeechsynthesistaskoutput"></a>
<a id="tocsstartspeechsynthesistaskoutput"></a>

```json
{
  "SynthesisTask": {
    "Engine": {},
    "TaskId": {},
    "TaskStatus": {},
    "TaskStatusReason": {},
    "OutputUri": {},
    "CreationTime": {},
    "RequestCharacters": {},
    "SnsTopicArn": {},
    "LexiconNames": {},
    "OutputFormat": {},
    "SampleRate": {},
    "SpeechMarkTypes": {},
    "TextType": {},
    "VoiceId": {},
    "LanguageCode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SynthesisTask|object|false|none|none|

<h2 id="tocS_LexiconName">LexiconName</h2>
<!-- backwards compatibility -->
<a id="schemalexiconname"></a>
<a id="schema_LexiconName"></a>
<a id="tocSlexiconname"></a>
<a id="tocslexiconname"></a>

```json
"string"
```

<h2 id="tocS_SpeechMarkType">SpeechMarkType</h2>
<!-- backwards compatibility -->
<a id="schemaspeechmarktype"></a>
<a id="schema_SpeechMarkType"></a>
<a id="tocSspeechmarktype"></a>
<a id="tocsspeechmarktype"></a>

```json
"sentence"
```

<h2 id="tocS_TextLengthExceededException">TextLengthExceededException</h2>
<!-- backwards compatibility -->
<a id="schematextlengthexceededexception"></a>
<a id="schema_TextLengthExceededException"></a>
<a id="tocStextlengthexceededexception"></a>
<a id="tocstextlengthexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidS3BucketException">InvalidS3BucketException</h2>
<!-- backwards compatibility -->
<a id="schemainvalids3bucketexception"></a>
<a id="schema_InvalidS3BucketException"></a>
<a id="tocSinvalids3bucketexception"></a>
<a id="tocsinvalids3bucketexception"></a>

```json
null
```

<h2 id="tocS_InvalidS3KeyException">InvalidS3KeyException</h2>
<!-- backwards compatibility -->
<a id="schemainvalids3keyexception"></a>
<a id="schema_InvalidS3KeyException"></a>
<a id="tocSinvalids3keyexception"></a>
<a id="tocsinvalids3keyexception"></a>

```json
null
```

<h2 id="tocS_InvalidSampleRateException">InvalidSampleRateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsamplerateexception"></a>
<a id="schema_InvalidSampleRateException"></a>
<a id="tocSinvalidsamplerateexception"></a>
<a id="tocsinvalidsamplerateexception"></a>

```json
null
```

<h2 id="tocS_InvalidSnsTopicArnException">InvalidSnsTopicArnException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsnstopicarnexception"></a>
<a id="schema_InvalidSnsTopicArnException"></a>
<a id="tocSinvalidsnstopicarnexception"></a>
<a id="tocsinvalidsnstopicarnexception"></a>

```json
null
```

<h2 id="tocS_InvalidSsmlException">InvalidSsmlException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidssmlexception"></a>
<a id="schema_InvalidSsmlException"></a>
<a id="tocSinvalidssmlexception"></a>
<a id="tocsinvalidssmlexception"></a>

```json
null
```

<h2 id="tocS_EngineNotSupportedException">EngineNotSupportedException</h2>
<!-- backwards compatibility -->
<a id="schemaenginenotsupportedexception"></a>
<a id="schema_EngineNotSupportedException"></a>
<a id="tocSenginenotsupportedexception"></a>
<a id="tocsenginenotsupportedexception"></a>

```json
null
```

<h2 id="tocS_MarksNotSupportedForFormatException">MarksNotSupportedForFormatException</h2>
<!-- backwards compatibility -->
<a id="schemamarksnotsupportedforformatexception"></a>
<a id="schema_MarksNotSupportedForFormatException"></a>
<a id="tocSmarksnotsupportedforformatexception"></a>
<a id="tocsmarksnotsupportedforformatexception"></a>

```json
null
```

<h2 id="tocS_SsmlMarksNotSupportedForTextTypeException">SsmlMarksNotSupportedForTextTypeException</h2>
<!-- backwards compatibility -->
<a id="schemassmlmarksnotsupportedfortexttypeexception"></a>
<a id="schema_SsmlMarksNotSupportedForTextTypeException"></a>
<a id="tocSssmlmarksnotsupportedfortexttypeexception"></a>
<a id="tocsssmlmarksnotsupportedfortexttypeexception"></a>

```json
null
```

<h2 id="tocS_LanguageNotSupportedException">LanguageNotSupportedException</h2>
<!-- backwards compatibility -->
<a id="schemalanguagenotsupportedexception"></a>
<a id="schema_LanguageNotSupportedException"></a>
<a id="tocSlanguagenotsupportedexception"></a>
<a id="tocslanguagenotsupportedexception"></a>

```json
null
```

<h2 id="tocS_SynthesizeSpeechOutput">SynthesizeSpeechOutput</h2>
<!-- backwards compatibility -->
<a id="schemasynthesizespeechoutput"></a>
<a id="schema_SynthesizeSpeechOutput"></a>
<a id="tocSsynthesizespeechoutput"></a>
<a id="tocssynthesizespeechoutput"></a>

```json
{
  "AudioStream": "TEXT",
  "ContentType": "audio/mpeg",
  "RequestCharacters": 37
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AudioStream|object|false|none|none|

<h2 id="tocS_Alphabet">Alphabet</h2>
<!-- backwards compatibility -->
<a id="schemaalphabet"></a>
<a id="schema_Alphabet"></a>
<a id="tocSalphabet"></a>
<a id="tocsalphabet"></a>

```json
"string"
```

<h2 id="tocS_AudioStream">AudioStream</h2>
<!-- backwards compatibility -->
<a id="schemaaudiostream"></a>
<a id="schema_AudioStream"></a>
<a id="tocSaudiostream"></a>
<a id="tocsaudiostream"></a>

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

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeleteLexiconInput">DeleteLexiconInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletelexiconinput"></a>
<a id="schema_DeleteLexiconInput"></a>
<a id="tocSdeletelexiconinput"></a>
<a id="tocsdeletelexiconinput"></a>

```json
{}
```

<h2 id="tocS_Engine">Engine</h2>
<!-- backwards compatibility -->
<a id="schemaengine"></a>
<a id="schema_Engine"></a>
<a id="tocSengine"></a>
<a id="tocsengine"></a>

```json
"standard"
```

<h2 id="tocS_LanguageCode">LanguageCode</h2>
<!-- backwards compatibility -->
<a id="schemalanguagecode"></a>
<a id="schema_LanguageCode"></a>
<a id="tocSlanguagecode"></a>
<a id="tocslanguagecode"></a>

```json
"arb"
```

<h2 id="tocS_IncludeAdditionalLanguageCodes">IncludeAdditionalLanguageCodes</h2>
<!-- backwards compatibility -->
<a id="schemaincludeadditionallanguagecodes"></a>
<a id="schema_IncludeAdditionalLanguageCodes"></a>
<a id="tocSincludeadditionallanguagecodes"></a>
<a id="tocsincludeadditionallanguagecodes"></a>

```json
true
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

<h2 id="tocS_DescribeVoicesInput">DescribeVoicesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevoicesinput"></a>
<a id="schema_DescribeVoicesInput"></a>
<a id="tocSdescribevoicesinput"></a>
<a id="tocsdescribevoicesinput"></a>

```json
{}
```

<h2 id="tocS_VoiceList">VoiceList</h2>
<!-- backwards compatibility -->
<a id="schemavoicelist"></a>
<a id="schema_VoiceList"></a>
<a id="tocSvoicelist"></a>
<a id="tocsvoicelist"></a>

```json
[
  {
    "Gender": {},
    "Id": {},
    "LanguageCode": {},
    "LanguageName": {},
    "Name": {},
    "AdditionalLanguageCodes": {},
    "SupportedEngines": {}
  }
]
```

<h2 id="tocS_EngineList">EngineList</h2>
<!-- backwards compatibility -->
<a id="schemaenginelist"></a>
<a id="schema_EngineList"></a>
<a id="tocSenginelist"></a>
<a id="tocsenginelist"></a>

```json
[
  "standard"
]
```

<h2 id="tocS_Gender">Gender</h2>
<!-- backwards compatibility -->
<a id="schemagender"></a>
<a id="schema_Gender"></a>
<a id="tocSgender"></a>
<a id="tocsgender"></a>

```json
"Female"
```

<h2 id="tocS_GetLexiconInput">GetLexiconInput</h2>
<!-- backwards compatibility -->
<a id="schemagetlexiconinput"></a>
<a id="schema_GetLexiconInput"></a>
<a id="tocSgetlexiconinput"></a>
<a id="tocsgetlexiconinput"></a>

```json
{}
```

<h2 id="tocS_Lexicon">Lexicon</h2>
<!-- backwards compatibility -->
<a id="schemalexicon"></a>
<a id="schema_Lexicon"></a>
<a id="tocSlexicon"></a>
<a id="tocslexicon"></a>

```json
{
  "Content": {},
  "Name": {}
}
```

Provides lexicon name and lexicon content in string format. For more information, see <a href="https://www.w3.org/TR/pronunciation-lexicon/">Pronunciation Lexicon Specification (PLS) Version 1.0</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_LexiconAttributes">LexiconAttributes</h2>
<!-- backwards compatibility -->
<a id="schemalexiconattributes"></a>
<a id="schema_LexiconAttributes"></a>
<a id="tocSlexiconattributes"></a>
<a id="tocslexiconattributes"></a>

```json
{
  "Alphabet": {},
  "LanguageCode": {},
  "LastModified": {},
  "LexiconArn": {},
  "LexemesCount": {},
  "Size": {}
}
```

Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Alphabet|object|false|none|none|
|LanguageCode|object|false|none|none|
|LastModified|object|false|none|none|
|LexiconArn|object|false|none|none|
|LexemesCount|object|false|none|none|
|Size|object|false|none|none|

<h2 id="tocS_TaskId">TaskId</h2>
<!-- backwards compatibility -->
<a id="schemataskid"></a>
<a id="schema_TaskId"></a>
<a id="tocStaskid"></a>
<a id="tocstaskid"></a>

```json
"string"
```

<h2 id="tocS_GetSpeechSynthesisTaskInput">GetSpeechSynthesisTaskInput</h2>
<!-- backwards compatibility -->
<a id="schemagetspeechsynthesistaskinput"></a>
<a id="schema_GetSpeechSynthesisTaskInput"></a>
<a id="tocSgetspeechsynthesistaskinput"></a>
<a id="tocsgetspeechsynthesistaskinput"></a>

```json
{}
```

<h2 id="tocS_SynthesisTask">SynthesisTask</h2>
<!-- backwards compatibility -->
<a id="schemasynthesistask"></a>
<a id="schema_SynthesisTask"></a>
<a id="tocSsynthesistask"></a>
<a id="tocssynthesistask"></a>

```json
{
  "Engine": {},
  "TaskId": {},
  "TaskStatus": {},
  "TaskStatusReason": {},
  "OutputUri": {},
  "CreationTime": {},
  "RequestCharacters": {},
  "SnsTopicArn": {},
  "LexiconNames": {},
  "OutputFormat": {},
  "SampleRate": {},
  "SpeechMarkTypes": {},
  "TextType": {},
  "VoiceId": {},
  "LanguageCode": {}
}
```

SynthesisTask object that provides information about a speech synthesis task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Engine|object|false|none|none|
|TaskId|object|false|none|none|
|TaskStatus|object|false|none|none|
|TaskStatusReason|object|false|none|none|
|OutputUri|object|false|none|none|
|CreationTime|object|false|none|none|
|RequestCharacters|object|false|none|none|
|SnsTopicArn|object|false|none|none|
|LexiconNames|object|false|none|none|
|OutputFormat|object|false|none|none|
|SampleRate|object|false|none|none|
|SpeechMarkTypes|object|false|none|none|
|TextType|object|false|none|none|
|VoiceId|object|false|none|none|
|LanguageCode|object|false|none|none|

<h2 id="tocS_LanguageCodeList">LanguageCodeList</h2>
<!-- backwards compatibility -->
<a id="schemalanguagecodelist"></a>
<a id="schema_LanguageCodeList"></a>
<a id="tocSlanguagecodelist"></a>
<a id="tocslanguagecodelist"></a>

```json
[
  "arb"
]
```

<h2 id="tocS_LanguageName">LanguageName</h2>
<!-- backwards compatibility -->
<a id="schemalanguagename"></a>
<a id="schema_LanguageName"></a>
<a id="tocSlanguagename"></a>
<a id="tocslanguagename"></a>

```json
"string"
```

<h2 id="tocS_LastModified">LastModified</h2>
<!-- backwards compatibility -->
<a id="schemalastmodified"></a>
<a id="schema_LastModified"></a>
<a id="tocSlastmodified"></a>
<a id="tocslastmodified"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_LexemesCount">LexemesCount</h2>
<!-- backwards compatibility -->
<a id="schemalexemescount"></a>
<a id="schema_LexemesCount"></a>
<a id="tocSlexemescount"></a>
<a id="tocslexemescount"></a>

```json
0
```

<h2 id="tocS_LexiconContent">LexiconContent</h2>
<!-- backwards compatibility -->
<a id="schemalexiconcontent"></a>
<a id="schema_LexiconContent"></a>
<a id="tocSlexiconcontent"></a>
<a id="tocslexiconcontent"></a>

```json
"password"
```

<h2 id="tocS_LexiconArn">LexiconArn</h2>
<!-- backwards compatibility -->
<a id="schemalexiconarn"></a>
<a id="schema_LexiconArn"></a>
<a id="tocSlexiconarn"></a>
<a id="tocslexiconarn"></a>

```json
"string"
```

<h2 id="tocS_Size">Size</h2>
<!-- backwards compatibility -->
<a id="schemasize"></a>
<a id="schema_Size"></a>
<a id="tocSsize"></a>
<a id="tocssize"></a>

```json
0
```

<h2 id="tocS_LexiconDescription">LexiconDescription</h2>
<!-- backwards compatibility -->
<a id="schemalexicondescription"></a>
<a id="schema_LexiconDescription"></a>
<a id="tocSlexicondescription"></a>
<a id="tocslexicondescription"></a>

```json
{
  "Name": {},
  "Attributes": {
    "Alphabet": {},
    "LanguageCode": {},
    "LastModified": {},
    "LexiconArn": {},
    "LexemesCount": {},
    "Size": {}
  }
}
```

Describes the content of the lexicon.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Attributes|object|false|none|none|

<h2 id="tocS_LexiconDescriptionList">LexiconDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemalexicondescriptionlist"></a>
<a id="schema_LexiconDescriptionList"></a>
<a id="tocSlexicondescriptionlist"></a>
<a id="tocslexicondescriptionlist"></a>

```json
[
  {
    "Name": {},
    "Attributes": {
      "Alphabet": {},
      "LanguageCode": {},
      "LastModified": {},
      "LexiconArn": {},
      "LexemesCount": {},
      "Size": {}
    }
  }
]
```

<h2 id="tocS_LexiconNameList">LexiconNameList</h2>
<!-- backwards compatibility -->
<a id="schemalexiconnamelist"></a>
<a id="schema_LexiconNameList"></a>
<a id="tocSlexiconnamelist"></a>
<a id="tocslexiconnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListLexiconsInput">ListLexiconsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistlexiconsinput"></a>
<a id="schema_ListLexiconsInput"></a>
<a id="tocSlistlexiconsinput"></a>
<a id="tocslistlexiconsinput"></a>

```json
{}
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

<h2 id="tocS_TaskStatus">TaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemataskstatus"></a>
<a id="schema_TaskStatus"></a>
<a id="tocStaskstatus"></a>
<a id="tocstaskstatus"></a>

```json
"scheduled"
```

<h2 id="tocS_ListSpeechSynthesisTasksInput">ListSpeechSynthesisTasksInput</h2>
<!-- backwards compatibility -->
<a id="schemalistspeechsynthesistasksinput"></a>
<a id="schema_ListSpeechSynthesisTasksInput"></a>
<a id="tocSlistspeechsynthesistasksinput"></a>
<a id="tocslistspeechsynthesistasksinput"></a>

```json
{}
```

<h2 id="tocS_SynthesisTasks">SynthesisTasks</h2>
<!-- backwards compatibility -->
<a id="schemasynthesistasks"></a>
<a id="schema_SynthesisTasks"></a>
<a id="tocSsynthesistasks"></a>
<a id="tocssynthesistasks"></a>

```json
[
  {
    "Engine": {},
    "TaskId": {},
    "TaskStatus": {},
    "TaskStatusReason": {},
    "OutputUri": {},
    "CreationTime": {},
    "RequestCharacters": {},
    "SnsTopicArn": {},
    "LexiconNames": {},
    "OutputFormat": {},
    "SampleRate": {},
    "SpeechMarkTypes": {},
    "TextType": {},
    "VoiceId": {},
    "LanguageCode": {}
  }
]
```

<h2 id="tocS_OutputFormat">OutputFormat</h2>
<!-- backwards compatibility -->
<a id="schemaoutputformat"></a>
<a id="schema_OutputFormat"></a>
<a id="tocSoutputformat"></a>
<a id="tocsoutputformat"></a>

```json
"json"
```

<h2 id="tocS_OutputS3BucketName">OutputS3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemaoutputs3bucketname"></a>
<a id="schema_OutputS3BucketName"></a>
<a id="tocSoutputs3bucketname"></a>
<a id="tocsoutputs3bucketname"></a>

```json
"string"
```

<h2 id="tocS_OutputS3KeyPrefix">OutputS3KeyPrefix</h2>
<!-- backwards compatibility -->
<a id="schemaoutputs3keyprefix"></a>
<a id="schema_OutputS3KeyPrefix"></a>
<a id="tocSoutputs3keyprefix"></a>
<a id="tocsoutputs3keyprefix"></a>

```json
"string"
```

<h2 id="tocS_OutputUri">OutputUri</h2>
<!-- backwards compatibility -->
<a id="schemaoutputuri"></a>
<a id="schema_OutputUri"></a>
<a id="tocSoutputuri"></a>
<a id="tocsoutputuri"></a>

```json
"string"
```

<h2 id="tocS_PutLexiconInput">PutLexiconInput</h2>
<!-- backwards compatibility -->
<a id="schemaputlexiconinput"></a>
<a id="schema_PutLexiconInput"></a>
<a id="tocSputlexiconinput"></a>
<a id="tocsputlexiconinput"></a>

```json
{
  "Content": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|true|none|none|

<h2 id="tocS_RequestCharacters">RequestCharacters</h2>
<!-- backwards compatibility -->
<a id="schemarequestcharacters"></a>
<a id="schema_RequestCharacters"></a>
<a id="tocSrequestcharacters"></a>
<a id="tocsrequestcharacters"></a>

```json
0
```

<h2 id="tocS_SampleRate">SampleRate</h2>
<!-- backwards compatibility -->
<a id="schemasamplerate"></a>
<a id="schema_SampleRate"></a>
<a id="tocSsamplerate"></a>
<a id="tocssamplerate"></a>

```json
"string"
```

<h2 id="tocS_SnsTopicArn">SnsTopicArn</h2>
<!-- backwards compatibility -->
<a id="schemasnstopicarn"></a>
<a id="schema_SnsTopicArn"></a>
<a id="tocSsnstopicarn"></a>
<a id="tocssnstopicarn"></a>

```json
"string"
```

<h2 id="tocS_SpeechMarkTypeList">SpeechMarkTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaspeechmarktypelist"></a>
<a id="schema_SpeechMarkTypeList"></a>
<a id="tocSspeechmarktypelist"></a>
<a id="tocsspeechmarktypelist"></a>

```json
[
  "sentence"
]
```

<h2 id="tocS_Text">Text</h2>
<!-- backwards compatibility -->
<a id="schematext"></a>
<a id="schema_Text"></a>
<a id="tocStext"></a>
<a id="tocstext"></a>

```json
"string"
```

<h2 id="tocS_TextType">TextType</h2>
<!-- backwards compatibility -->
<a id="schematexttype"></a>
<a id="schema_TextType"></a>
<a id="tocStexttype"></a>
<a id="tocstexttype"></a>

```json
"ssml"
```

<h2 id="tocS_VoiceId">VoiceId</h2>
<!-- backwards compatibility -->
<a id="schemavoiceid"></a>
<a id="schema_VoiceId"></a>
<a id="tocSvoiceid"></a>
<a id="tocsvoiceid"></a>

```json
"Aditi"
```

<h2 id="tocS_StartSpeechSynthesisTaskInput">StartSpeechSynthesisTaskInput</h2>
<!-- backwards compatibility -->
<a id="schemastartspeechsynthesistaskinput"></a>
<a id="schema_StartSpeechSynthesisTaskInput"></a>
<a id="tocSstartspeechsynthesistaskinput"></a>
<a id="tocsstartspeechsynthesistaskinput"></a>

```json
{
  "Engine": {},
  "LanguageCode": {},
  "LexiconNames": {},
  "OutputFormat": {},
  "OutputS3BucketName": {},
  "OutputS3KeyPrefix": {},
  "SampleRate": {},
  "SnsTopicArn": {},
  "SpeechMarkTypes": {},
  "Text": {},
  "TextType": {},
  "VoiceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Engine|object|false|none|none|
|LanguageCode|object|false|none|none|
|LexiconNames|object|false|none|none|
|OutputFormat|object|true|none|none|
|OutputS3BucketName|object|true|none|none|
|OutputS3KeyPrefix|object|false|none|none|
|SampleRate|object|false|none|none|
|SnsTopicArn|object|false|none|none|
|SpeechMarkTypes|object|false|none|none|
|Text|object|true|none|none|
|TextType|object|false|none|none|
|VoiceId|object|true|none|none|

<h2 id="tocS_TaskStatusReason">TaskStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemataskstatusreason"></a>
<a id="schema_TaskStatusReason"></a>
<a id="tocStaskstatusreason"></a>
<a id="tocstaskstatusreason"></a>

```json
"string"
```

<h2 id="tocS_SynthesizeSpeechInput">SynthesizeSpeechInput</h2>
<!-- backwards compatibility -->
<a id="schemasynthesizespeechinput"></a>
<a id="schema_SynthesizeSpeechInput"></a>
<a id="tocSsynthesizespeechinput"></a>
<a id="tocssynthesizespeechinput"></a>

```json
{
  "Engine": {},
  "LanguageCode": {},
  "LexiconNames": {},
  "OutputFormat": {},
  "SampleRate": {},
  "SpeechMarkTypes": {},
  "Text": {},
  "TextType": {},
  "VoiceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Engine|object|false|none|none|
|LanguageCode|object|false|none|none|
|LexiconNames|object|false|none|none|
|OutputFormat|object|true|none|none|
|SampleRate|object|false|none|none|
|SpeechMarkTypes|object|false|none|none|
|Text|object|true|none|none|
|TextType|object|false|none|none|
|VoiceId|object|true|none|none|

<h2 id="tocS_VoiceName">VoiceName</h2>
<!-- backwards compatibility -->
<a id="schemavoicename"></a>
<a id="schema_VoiceName"></a>
<a id="tocSvoicename"></a>
<a id="tocsvoicename"></a>

```json
"string"
```

<h2 id="tocS_Voice">Voice</h2>
<!-- backwards compatibility -->
<a id="schemavoice"></a>
<a id="schema_Voice"></a>
<a id="tocSvoice"></a>
<a id="tocsvoice"></a>

```json
{
  "Gender": {},
  "Id": {},
  "LanguageCode": {},
  "LanguageName": {},
  "Name": {},
  "AdditionalLanguageCodes": {},
  "SupportedEngines": {}
}
```

Description of the voice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Gender|object|false|none|none|
|Id|object|false|none|none|
|LanguageCode|object|false|none|none|
|LanguageName|object|false|none|none|
|Name|object|false|none|none|
|AdditionalLanguageCodes|object|false|none|none|
|SupportedEngines|object|false|none|none|
