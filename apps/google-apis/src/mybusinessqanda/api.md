<h1 id="my-business-qa-api">My Business Q&amp;A API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The My Business Q&A API allows questions and answers to be posted for specific listings. Note - If you have a quota of 0 after enabling the API, please request for GBP API access.

Base URLs:

* <a href="https://mybusinessqanda.googleapis.com/">https://mybusinessqanda.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/my-business/">External documentation</a>

<h1 id="my-business-qa-api-locations">locations</h1>

## mybusinessqanda.locations.questions.delete

<a id="opIdmybusinessqanda.locations.questions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/{name}`

Deletes a specific question written by the current user.

<h3 id="mybusinessqandalocationsquestionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the question to delete.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="mybusinessqandalocationsquestionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessqanda.locations.questions.patch

<a id="opIdmybusinessqanda.locations.questions.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "text": "string"
  }'
```

`PATCH /v1/{name}`

Updates a specific question written by the current user.

> Body parameter

```json
{
  "name": "string",
  "text": "string"
}
```

<h3 id="mybusinessqandalocationsquestionspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Immutable. The unique name for the question. locations/*/questions/* This field will be ignored if set during question creation.|
|updateMask|query|string|false|Required. The specific fields to update. Only question text can be updated.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Question](#schemaquestion)|false|none|
|» name|body|string|false|Immutable. The unique name for the question. locations/*/questions/* This field will be ignored if set during question creation.|
|» text|body|string|false|Required. The text of the question. It should contain at least three words and the total length should be greater than or equal to 10 characters. The maximum length is 4096 characters.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "profilePhotoUri": "string",
    "type": "AUTHOR_TYPE_UNSPECIFIED"
  },
  "createTime": "string",
  "name": "string",
  "text": "string",
  "topAnswers": [
    {
      "author": {
        "displayName": "string",
        "profilePhotoUri": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "updateTime": "string",
      "upvoteCount": 0
    }
  ],
  "totalAnswerCount": 0,
  "updateTime": "string",
  "upvoteCount": 0
}
```

<h3 id="mybusinessqandalocationsquestionspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Question](#schemaquestion)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessqanda.locations.questions.answers.delete

<a id="opIdmybusinessqanda.locations.questions.answers.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/answers:delete \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/{name}/answers:delete`

Deletes the answer written by the current user to a question.

<h3 id="mybusinessqandalocationsquestionsanswersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the question to delete an answer for.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="mybusinessqandalocationsquestionsanswersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessqanda.locations.questions.list

<a id="opIdmybusinessqanda.locations.questions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json'
```

`GET /v1/{parent}`

Returns the paginated list of questions and some of its answers for a specified location. This operation is only valid if the specified location is verified.

<h3 id="mybusinessqandalocationsquestionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the location to fetch questions for.|
|answersPerQuestion|query|integer|false|Optional. How many answers to fetch per question. The default and maximum `answers_per_question` values are 10.|
|filter|query|string|false|Optional. A filter constraining the questions to return. The only filter currently supported is "ignore_answered=true"|
|orderBy|query|string|false|Optional. The order to return the questions. Valid options include 'update_time desc' and 'upvote_count desc', which will return the questions sorted descendingly by the requested field. The default sort order is 'update_time desc'.|
|pageSize|query|integer|false|Optional. How many questions to fetch per page. The default and maximum `page_size` values are 10.|
|pageToken|query|string|false|Optional. If specified, the next page of questions is retrieved.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "questions": [
    {
      "author": {
        "displayName": "string",
        "profilePhotoUri": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "topAnswers": [
        {
          "author": {
            "displayName": "string",
            "profilePhotoUri": "string",
            "type": "AUTHOR_TYPE_UNSPECIFIED"
          },
          "createTime": "string",
          "name": "string",
          "text": "string",
          "updateTime": "string",
          "upvoteCount": 0
        }
      ],
      "totalAnswerCount": 0,
      "updateTime": "string",
      "upvoteCount": 0
    }
  ],
  "totalSize": 0
}
```

<h3 id="mybusinessqandalocationsquestionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListQuestionsResponse](#schemalistquestionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessqanda.locations.questions.create

<a id="opIdmybusinessqanda.locations.questions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "text": "string"
  }'
```

`POST /v1/{parent}`

Adds a question for the specified location.

> Body parameter

```json
{
  "name": "string",
  "text": "string"
}
```

<h3 id="mybusinessqandalocationsquestionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the location to write a question for.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Question](#schemaquestion)|false|none|
|» name|body|string|false|Immutable. The unique name for the question. locations/*/questions/* This field will be ignored if set during question creation.|
|» text|body|string|false|Required. The text of the question. It should contain at least three words and the total length should be greater than or equal to 10 characters. The maximum length is 4096 characters.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "profilePhotoUri": "string",
    "type": "AUTHOR_TYPE_UNSPECIFIED"
  },
  "createTime": "string",
  "name": "string",
  "text": "string",
  "topAnswers": [
    {
      "author": {
        "displayName": "string",
        "profilePhotoUri": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "updateTime": "string",
      "upvoteCount": 0
    }
  ],
  "totalAnswerCount": 0,
  "updateTime": "string",
  "upvoteCount": 0
}
```

<h3 id="mybusinessqandalocationsquestionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Question](#schemaquestion)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessqanda.locations.questions.answers.list

<a id="opIdmybusinessqanda.locations.questions.answers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/answers \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/answers`

Returns the paginated list of answers for a specified question.

<h3 id="mybusinessqandalocationsquestionsanswerslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the question to fetch answers for.|
|orderBy|query|string|false|Optional. The order to return the answers. Valid options include 'update_time desc' and 'upvote_count desc', which will return the answers sorted descendingly by the requested field. The default sort order is 'update_time desc'.|
|pageSize|query|integer|false|Optional. How many answers to fetch per page. The default and maximum `page_size` values are 10.|
|pageToken|query|string|false|Optional. If specified, the next page of answers is retrieved.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "answers": [
    {
      "author": {
        "displayName": "string",
        "profilePhotoUri": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "updateTime": "string",
      "upvoteCount": 0
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="mybusinessqandalocationsquestionsanswerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAnswersResponse](#schemalistanswersresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessqanda.locations.questions.answers.upsert

<a id="opIdmybusinessqanda.locations.questions.answers.upsert"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/answers:upsert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "answer": {
      "text": "string"
    }
  }'
```

`POST /v1/{parent}/answers:upsert`

Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.

> Body parameter

```json
{
  "answer": {
    "text": "string"
  }
}
```

<h3 id="mybusinessqandalocationsquestionsanswersupsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the question to write an answer for.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[UpsertAnswerRequest](#schemaupsertanswerrequest)|false|none|
|» answer|body|[Answer](#schemaanswer)|false|Required. The new answer.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": {
    "displayName": "string",
    "profilePhotoUri": "string",
    "type": "AUTHOR_TYPE_UNSPECIFIED"
  },
  "createTime": "string",
  "name": "string",
  "text": "string",
  "updateTime": "string",
  "upvoteCount": 0
}
```

<h3 id="mybusinessqandalocationsquestionsanswersupsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Answer](#schemaanswer)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Answer">Answer</h2>
<!-- backwards compatibility -->
<a id="schemaanswer"></a>
<a id="schema_Answer"></a>
<a id="tocSanswer"></a>
<a id="tocsanswer"></a>

```json
{
  "author": {
    "displayName": "string",
    "profilePhotoUri": "string",
    "type": "AUTHOR_TYPE_UNSPECIFIED"
  },
  "createTime": "string",
  "name": "string",
  "text": "string",
  "updateTime": "string",
  "upvoteCount": 0
}
```

Represents an answer to a question

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|[Author](#schemaauthor)|false|none|Output only. The author of the answer. Will only be set during list operations.|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp for when the answer was written. Only retrieved during ListResponse fetching.|
|name|string|false|read-only|Output only. The unique name for the answer locations/*/questions/*/answers/*|
|text|string|false|none|Required. The text of the answer. It should contain at least one non-whitespace character. The maximum length is 4096 characters.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp for when the answer was last modified.|
|upvoteCount|integer(int32)|false|read-only|Output only. The number of upvotes for the answer.|

<h2 id="tocS_Author">Author</h2>
<!-- backwards compatibility -->
<a id="schemaauthor"></a>
<a id="schema_Author"></a>
<a id="tocSauthor"></a>
<a id="tocsauthor"></a>

```json
{
  "displayName": "string",
  "profilePhotoUri": "string",
  "type": "AUTHOR_TYPE_UNSPECIFIED"
}
```

Represents the author of a question or answer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display name of the user|
|profilePhotoUri|string|false|none|The profile photo URI of the user.|
|type|string|false|none|The type of user the author is.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|AUTHOR_TYPE_UNSPECIFIED|
|type|REGULAR_USER|
|type|LOCAL_GUIDE|
|type|MERCHANT|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_ListAnswersResponse">ListAnswersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistanswersresponse"></a>
<a id="schema_ListAnswersResponse"></a>
<a id="tocSlistanswersresponse"></a>
<a id="tocslistanswersresponse"></a>

```json
{
  "answers": [
    {
      "author": {
        "displayName": "string",
        "profilePhotoUri": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "updateTime": "string",
      "upvoteCount": 0
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response message for QuestionsAndAnswers.ListAnswers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answers|[[Answer](#schemaanswer)]|false|none|The requested answers.|
|nextPageToken|string|false|none|If the number of answers exceeds the requested max page size, this field is populated with a token to fetch the next page of answers on a subsequent call. If there are no more answers, this field is not present in the response.|
|totalSize|integer(int32)|false|none|The total number of answers posted for this question across all pages.|

<h2 id="tocS_ListQuestionsResponse">ListQuestionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistquestionsresponse"></a>
<a id="schema_ListQuestionsResponse"></a>
<a id="tocSlistquestionsresponse"></a>
<a id="tocslistquestionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "questions": [
    {
      "author": {
        "displayName": "string",
        "profilePhotoUri": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "topAnswers": [
        {
          "author": {
            "displayName": "string",
            "profilePhotoUri": "string",
            "type": "AUTHOR_TYPE_UNSPECIFIED"
          },
          "createTime": "string",
          "name": "string",
          "text": "string",
          "updateTime": "string",
          "upvoteCount": 0
        }
      ],
      "totalAnswerCount": 0,
      "updateTime": "string",
      "upvoteCount": 0
    }
  ],
  "totalSize": 0
}
```

Response message for QuestionsAndAnswers.ListQuestions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If the number of questions exceeds the requested max page size, this field is populated with a token to fetch the next page of questions on a subsequent call. If there are no more questions, this field is not present in the response.|
|questions|[[Question](#schemaquestion)]|false|none|The requested questions,|
|totalSize|integer(int32)|false|none|The total number of questions posted for this location across all pages.|

<h2 id="tocS_Question">Question</h2>
<!-- backwards compatibility -->
<a id="schemaquestion"></a>
<a id="schema_Question"></a>
<a id="tocSquestion"></a>
<a id="tocsquestion"></a>

```json
{
  "author": {
    "displayName": "string",
    "profilePhotoUri": "string",
    "type": "AUTHOR_TYPE_UNSPECIFIED"
  },
  "createTime": "string",
  "name": "string",
  "text": "string",
  "topAnswers": [
    {
      "author": {
        "displayName": "string",
        "profilePhotoUri": "string",
        "type": "AUTHOR_TYPE_UNSPECIFIED"
      },
      "createTime": "string",
      "name": "string",
      "text": "string",
      "updateTime": "string",
      "upvoteCount": 0
    }
  ],
  "totalAnswerCount": 0,
  "updateTime": "string",
  "upvoteCount": 0
}
```

Represents a single question and some of its answers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|[Author](#schemaauthor)|false|none|Output only. The author of the question.|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp for when the question was written.|
|name|string|false|none|Immutable. The unique name for the question. locations/*/questions/* This field will be ignored if set during question creation.|
|text|string|false|none|Required. The text of the question. It should contain at least three words and the total length should be greater than or equal to 10 characters. The maximum length is 4096 characters.|
|topAnswers|[[Answer](#schemaanswer)]|false|read-only|Output only. A list of answers to the question, sorted by upvotes. This may not be a complete list of answers depending on the request parameters (answers_per_question)|
|totalAnswerCount|integer(int32)|false|read-only|Output only. The total number of answers posted for this question.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp for when the question was last modified.|
|upvoteCount|integer(int32)|false|read-only|Output only. The number of upvotes for the question.|

<h2 id="tocS_UpsertAnswerRequest">UpsertAnswerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupsertanswerrequest"></a>
<a id="schema_UpsertAnswerRequest"></a>
<a id="tocSupsertanswerrequest"></a>
<a id="tocsupsertanswerrequest"></a>

```json
{
  "answer": {
    "author": {
      "displayName": "string",
      "profilePhotoUri": "string",
      "type": "AUTHOR_TYPE_UNSPECIFIED"
    },
    "createTime": "string",
    "name": "string",
    "text": "string",
    "updateTime": "string",
    "upvoteCount": 0
  }
}
```

Request message for QuestionsAndAnswers.UpsertAnswer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer|[Answer](#schemaanswer)|false|none|Required. The new answer.|
