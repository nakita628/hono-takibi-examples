<h1 id="cloud-natural-language-api">Cloud Natural Language API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provides natural language understanding technologies, such as sentiment analysis, entity recognition, entity sentiment analysis, and other text annotations, to developers.

Base URLs:

* <a href="https://language.googleapis.com/">https://language.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/natural-language/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-language|Apply machine learning models to reveal the structure and meaning of text|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-language|Apply machine learning models to reveal the structure and meaning of text|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="cloud-natural-language-api-documents">documents</h1>

## language.documents.analyzeEntities

<a id="opIdlanguage.documents.analyzeEntities"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/documents:analyzeEntities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "document": {
      "content": "string",
      "gcsContentUri": "string",
      "language": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "encodingType": "NONE"
  }'
```

`POST /v1beta1/documents:analyzeEntities`

Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.

> Body parameter

```json
{
  "document": {
    "content": "string",
    "gcsContentUri": "string",
    "language": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "encodingType": "NONE"
}
```

<h3 id="languagedocumentsanalyzeentities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[AnalyzeEntitiesRequest](#schemaanalyzeentitiesrequest)|false|none|
|» document|body|[Document](#schemadocument)|false|Input document.|
|» encodingType|body|string|false|The encoding type used by the API to calculate offsets.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» encodingType|NONE|
|» encodingType|UTF8|
|» encodingType|UTF16|
|» encodingType|UTF32|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "mentions": [
        {
          "text": {
            "beginOffset": 0,
            "content": "string"
          },
          "type": "TYPE_UNKNOWN"
        }
      ],
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "salience": 0,
      "type": "UNKNOWN"
    }
  ],
  "language": "string"
}
```

<h3 id="languagedocumentsanalyzeentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AnalyzeEntitiesResponse](#schemaanalyzeentitiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-language ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-language ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## language.documents.analyzeSentiment

<a id="opIdlanguage.documents.analyzeSentiment"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/documents:analyzeSentiment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "document": {
      "content": "string",
      "gcsContentUri": "string",
      "language": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "encodingType": "NONE"
  }'
```

`POST /v1beta1/documents:analyzeSentiment`

Analyzes the sentiment of the provided text.

> Body parameter

```json
{
  "document": {
    "content": "string",
    "gcsContentUri": "string",
    "language": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "encodingType": "NONE"
}
```

<h3 id="languagedocumentsanalyzesentiment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[AnalyzeSentimentRequest](#schemaanalyzesentimentrequest)|false|none|
|» document|body|[Document](#schemadocument)|false|Input document.|
|» encodingType|body|string|false|The encoding type used by the API to calculate sentence offsets for the sentence sentiment.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» encodingType|NONE|
|» encodingType|UTF8|
|» encodingType|UTF16|
|» encodingType|UTF32|

> Example responses

> 200 Response

```json
{
  "documentSentiment": {
    "magnitude": 0,
    "polarity": 0,
    "score": 0
  },
  "language": "string",
  "sentences": [
    {
      "sentiment": {
        "magnitude": 0,
        "polarity": 0,
        "score": 0
      },
      "text": {
        "beginOffset": 0,
        "content": "string"
      }
    }
  ]
}
```

<h3 id="languagedocumentsanalyzesentiment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AnalyzeSentimentResponse](#schemaanalyzesentimentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-language ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-language ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## language.documents.analyzeSyntax

<a id="opIdlanguage.documents.analyzeSyntax"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/documents:analyzeSyntax \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "document": {
      "content": "string",
      "gcsContentUri": "string",
      "language": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "encodingType": "NONE"
  }'
```

`POST /v1beta1/documents:analyzeSyntax`

Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.

> Body parameter

```json
{
  "document": {
    "content": "string",
    "gcsContentUri": "string",
    "language": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "encodingType": "NONE"
}
```

<h3 id="languagedocumentsanalyzesyntax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[AnalyzeSyntaxRequest](#schemaanalyzesyntaxrequest)|false|none|
|» document|body|[Document](#schemadocument)|false|Input document.|
|» encodingType|body|string|false|The encoding type used by the API to calculate offsets.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» encodingType|NONE|
|» encodingType|UTF8|
|» encodingType|UTF16|
|» encodingType|UTF32|

> Example responses

> 200 Response

```json
{
  "language": "string",
  "sentences": [
    {
      "sentiment": {
        "magnitude": 0,
        "polarity": 0,
        "score": 0
      },
      "text": {
        "beginOffset": 0,
        "content": "string"
      }
    }
  ],
  "tokens": [
    {
      "dependencyEdge": {
        "headTokenIndex": 0,
        "label": "UNKNOWN"
      },
      "lemma": "string",
      "partOfSpeech": {
        "aspect": "ASPECT_UNKNOWN",
        "case": "CASE_UNKNOWN",
        "form": "FORM_UNKNOWN",
        "gender": "GENDER_UNKNOWN",
        "mood": "MOOD_UNKNOWN",
        "number": "NUMBER_UNKNOWN",
        "person": "PERSON_UNKNOWN",
        "proper": "PROPER_UNKNOWN",
        "reciprocity": "RECIPROCITY_UNKNOWN",
        "tag": "UNKNOWN",
        "tense": "TENSE_UNKNOWN",
        "voice": "VOICE_UNKNOWN"
      },
      "text": {
        "beginOffset": 0,
        "content": "string"
      }
    }
  ]
}
```

<h3 id="languagedocumentsanalyzesyntax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AnalyzeSyntaxResponse](#schemaanalyzesyntaxresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-language ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-language ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## language.documents.annotateText

<a id="opIdlanguage.documents.annotateText"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/documents:annotateText \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "document": {
      "content": "string",
      "gcsContentUri": "string",
      "language": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "encodingType": "NONE",
    "features": {
      "extractDocumentSentiment": true,
      "extractEntities": true,
      "extractSyntax": true
    }
  }'
```

`POST /v1beta1/documents:annotateText`

A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.

> Body parameter

```json
{
  "document": {
    "content": "string",
    "gcsContentUri": "string",
    "language": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "encodingType": "NONE",
  "features": {
    "extractDocumentSentiment": true,
    "extractEntities": true,
    "extractSyntax": true
  }
}
```

<h3 id="languagedocumentsannotatetext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[AnnotateTextRequest](#schemaannotatetextrequest)|false|none|
|» document|body|[Document](#schemadocument)|false|Input document.|
|» encodingType|body|string|false|The encoding type used by the API to calculate offsets.|
|» features|body|[Features](#schemafeatures)|false|The enabled features.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» encodingType|NONE|
|» encodingType|UTF8|
|» encodingType|UTF16|
|» encodingType|UTF32|

> Example responses

> 200 Response

```json
{
  "documentSentiment": {
    "magnitude": 0,
    "polarity": 0,
    "score": 0
  },
  "entities": [
    {
      "mentions": [
        {
          "text": {
            "beginOffset": 0,
            "content": "string"
          },
          "type": "TYPE_UNKNOWN"
        }
      ],
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "salience": 0,
      "type": "UNKNOWN"
    }
  ],
  "language": "string",
  "sentences": [
    {
      "sentiment": {
        "magnitude": 0,
        "polarity": 0,
        "score": 0
      },
      "text": {
        "beginOffset": 0,
        "content": "string"
      }
    }
  ],
  "tokens": [
    {
      "dependencyEdge": {
        "headTokenIndex": 0,
        "label": "UNKNOWN"
      },
      "lemma": "string",
      "partOfSpeech": {
        "aspect": "ASPECT_UNKNOWN",
        "case": "CASE_UNKNOWN",
        "form": "FORM_UNKNOWN",
        "gender": "GENDER_UNKNOWN",
        "mood": "MOOD_UNKNOWN",
        "number": "NUMBER_UNKNOWN",
        "person": "PERSON_UNKNOWN",
        "proper": "PROPER_UNKNOWN",
        "reciprocity": "RECIPROCITY_UNKNOWN",
        "tag": "UNKNOWN",
        "tense": "TENSE_UNKNOWN",
        "voice": "VOICE_UNKNOWN"
      },
      "text": {
        "beginOffset": 0,
        "content": "string"
      }
    }
  ]
}
```

<h3 id="languagedocumentsannotatetext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AnnotateTextResponse](#schemaannotatetextresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-language ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-language ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AnalyzeEntitiesRequest">AnalyzeEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzeentitiesrequest"></a>
<a id="schema_AnalyzeEntitiesRequest"></a>
<a id="tocSanalyzeentitiesrequest"></a>
<a id="tocsanalyzeentitiesrequest"></a>

```json
{
  "document": {
    "content": "string",
    "gcsContentUri": "string",
    "language": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "encodingType": "NONE"
}
```

The entity analysis request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|[Document](#schemadocument)|false|none|Input document.|
|encodingType|string|false|none|The encoding type used by the API to calculate offsets.|

#### Enumerated Values

|Property|Value|
|---|---|
|encodingType|NONE|
|encodingType|UTF8|
|encodingType|UTF16|
|encodingType|UTF32|

<h2 id="tocS_AnalyzeEntitiesResponse">AnalyzeEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzeentitiesresponse"></a>
<a id="schema_AnalyzeEntitiesResponse"></a>
<a id="tocSanalyzeentitiesresponse"></a>
<a id="tocsanalyzeentitiesresponse"></a>

```json
{
  "entities": [
    {
      "mentions": [
        {
          "text": {
            "beginOffset": 0,
            "content": "string"
          },
          "type": "TYPE_UNKNOWN"
        }
      ],
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "salience": 0,
      "type": "UNKNOWN"
    }
  ],
  "language": "string"
}
```

The entity analysis response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|[[Entity](#schemaentity)]|false|none|The recognized entities in the input document.|
|language|string|false|none|The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.|

<h2 id="tocS_AnalyzeSentimentRequest">AnalyzeSentimentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzesentimentrequest"></a>
<a id="schema_AnalyzeSentimentRequest"></a>
<a id="tocSanalyzesentimentrequest"></a>
<a id="tocsanalyzesentimentrequest"></a>

```json
{
  "document": {
    "content": "string",
    "gcsContentUri": "string",
    "language": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "encodingType": "NONE"
}
```

The sentiment analysis request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|[Document](#schemadocument)|false|none|Input document.|
|encodingType|string|false|none|The encoding type used by the API to calculate sentence offsets for the sentence sentiment.|

#### Enumerated Values

|Property|Value|
|---|---|
|encodingType|NONE|
|encodingType|UTF8|
|encodingType|UTF16|
|encodingType|UTF32|

<h2 id="tocS_AnalyzeSentimentResponse">AnalyzeSentimentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzesentimentresponse"></a>
<a id="schema_AnalyzeSentimentResponse"></a>
<a id="tocSanalyzesentimentresponse"></a>
<a id="tocsanalyzesentimentresponse"></a>

```json
{
  "documentSentiment": {
    "magnitude": 0,
    "polarity": 0,
    "score": 0
  },
  "language": "string",
  "sentences": [
    {
      "sentiment": {
        "magnitude": 0,
        "polarity": 0,
        "score": 0
      },
      "text": {
        "beginOffset": 0,
        "content": "string"
      }
    }
  ]
}
```

The sentiment analysis response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentSentiment|[Sentiment](#schemasentiment)|false|none|The overall sentiment of the input document.|
|language|string|false|none|The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.|
|sentences|[[Sentence](#schemasentence)]|false|none|The sentiment for all the sentences in the document.|

<h2 id="tocS_AnalyzeSyntaxRequest">AnalyzeSyntaxRequest</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzesyntaxrequest"></a>
<a id="schema_AnalyzeSyntaxRequest"></a>
<a id="tocSanalyzesyntaxrequest"></a>
<a id="tocsanalyzesyntaxrequest"></a>

```json
{
  "document": {
    "content": "string",
    "gcsContentUri": "string",
    "language": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "encodingType": "NONE"
}
```

The syntax analysis request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|[Document](#schemadocument)|false|none|Input document.|
|encodingType|string|false|none|The encoding type used by the API to calculate offsets.|

#### Enumerated Values

|Property|Value|
|---|---|
|encodingType|NONE|
|encodingType|UTF8|
|encodingType|UTF16|
|encodingType|UTF32|

<h2 id="tocS_AnalyzeSyntaxResponse">AnalyzeSyntaxResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzesyntaxresponse"></a>
<a id="schema_AnalyzeSyntaxResponse"></a>
<a id="tocSanalyzesyntaxresponse"></a>
<a id="tocsanalyzesyntaxresponse"></a>

```json
{
  "language": "string",
  "sentences": [
    {
      "sentiment": {
        "magnitude": 0,
        "polarity": 0,
        "score": 0
      },
      "text": {
        "beginOffset": 0,
        "content": "string"
      }
    }
  ],
  "tokens": [
    {
      "dependencyEdge": {
        "headTokenIndex": 0,
        "label": "UNKNOWN"
      },
      "lemma": "string",
      "partOfSpeech": {
        "aspect": "ASPECT_UNKNOWN",
        "case": "CASE_UNKNOWN",
        "form": "FORM_UNKNOWN",
        "gender": "GENDER_UNKNOWN",
        "mood": "MOOD_UNKNOWN",
        "number": "NUMBER_UNKNOWN",
        "person": "PERSON_UNKNOWN",
        "proper": "PROPER_UNKNOWN",
        "reciprocity": "RECIPROCITY_UNKNOWN",
        "tag": "UNKNOWN",
        "tense": "TENSE_UNKNOWN",
        "voice": "VOICE_UNKNOWN"
      },
      "text": {
        "beginOffset": 0,
        "content": "string"
      }
    }
  ]
}
```

The syntax analysis response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|string|false|none|The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.|
|sentences|[[Sentence](#schemasentence)]|false|none|Sentences in the input document.|
|tokens|[[Token](#schematoken)]|false|none|Tokens, along with their syntactic information, in the input document.|

<h2 id="tocS_AnnotateTextRequest">AnnotateTextRequest</h2>
<!-- backwards compatibility -->
<a id="schemaannotatetextrequest"></a>
<a id="schema_AnnotateTextRequest"></a>
<a id="tocSannotatetextrequest"></a>
<a id="tocsannotatetextrequest"></a>

```json
{
  "document": {
    "content": "string",
    "gcsContentUri": "string",
    "language": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "encodingType": "NONE",
  "features": {
    "extractDocumentSentiment": true,
    "extractEntities": true,
    "extractSyntax": true
  }
}
```

The request message for the text annotation API, which can perform multiple analysis types (sentiment, entities, and syntax) in one call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|[Document](#schemadocument)|false|none|Input document.|
|encodingType|string|false|none|The encoding type used by the API to calculate offsets.|
|features|[Features](#schemafeatures)|false|none|The enabled features.|

#### Enumerated Values

|Property|Value|
|---|---|
|encodingType|NONE|
|encodingType|UTF8|
|encodingType|UTF16|
|encodingType|UTF32|

<h2 id="tocS_AnnotateTextResponse">AnnotateTextResponse</h2>
<!-- backwards compatibility -->
<a id="schemaannotatetextresponse"></a>
<a id="schema_AnnotateTextResponse"></a>
<a id="tocSannotatetextresponse"></a>
<a id="tocsannotatetextresponse"></a>

```json
{
  "documentSentiment": {
    "magnitude": 0,
    "polarity": 0,
    "score": 0
  },
  "entities": [
    {
      "mentions": [
        {
          "text": {
            "beginOffset": 0,
            "content": "string"
          },
          "type": "TYPE_UNKNOWN"
        }
      ],
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "salience": 0,
      "type": "UNKNOWN"
    }
  ],
  "language": "string",
  "sentences": [
    {
      "sentiment": {
        "magnitude": 0,
        "polarity": 0,
        "score": 0
      },
      "text": {
        "beginOffset": 0,
        "content": "string"
      }
    }
  ],
  "tokens": [
    {
      "dependencyEdge": {
        "headTokenIndex": 0,
        "label": "UNKNOWN"
      },
      "lemma": "string",
      "partOfSpeech": {
        "aspect": "ASPECT_UNKNOWN",
        "case": "CASE_UNKNOWN",
        "form": "FORM_UNKNOWN",
        "gender": "GENDER_UNKNOWN",
        "mood": "MOOD_UNKNOWN",
        "number": "NUMBER_UNKNOWN",
        "person": "PERSON_UNKNOWN",
        "proper": "PROPER_UNKNOWN",
        "reciprocity": "RECIPROCITY_UNKNOWN",
        "tag": "UNKNOWN",
        "tense": "TENSE_UNKNOWN",
        "voice": "VOICE_UNKNOWN"
      },
      "text": {
        "beginOffset": 0,
        "content": "string"
      }
    }
  ]
}
```

The text annotations response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentSentiment|[Sentiment](#schemasentiment)|false|none|The overall sentiment for the document. Populated if the user enables AnnotateTextRequest.Features.extract_document_sentiment.|
|entities|[[Entity](#schemaentity)]|false|none|Entities, along with their semantic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_entities.|
|language|string|false|none|The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.|
|sentences|[[Sentence](#schemasentence)]|false|none|Sentences in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax.|
|tokens|[[Token](#schematoken)]|false|none|Tokens, along with their syntactic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax.|

<h2 id="tocS_DependencyEdge">DependencyEdge</h2>
<!-- backwards compatibility -->
<a id="schemadependencyedge"></a>
<a id="schema_DependencyEdge"></a>
<a id="tocSdependencyedge"></a>
<a id="tocsdependencyedge"></a>

```json
{
  "headTokenIndex": 0,
  "label": "UNKNOWN"
}
```

Represents dependency parse tree information for a token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headTokenIndex|integer(int32)|false|none|Represents the head of this token in the dependency tree. This is the index of the token which has an arc going to this token. The index is the position of the token in the array of tokens returned by the API method. If this token is a root token, then the `head_token_index` is its own index.|
|label|string|false|none|The parse label for the token.|

#### Enumerated Values

|Property|Value|
|---|---|
|label|UNKNOWN|
|label|ABBREV|
|label|ACOMP|
|label|ADVCL|
|label|ADVMOD|
|label|AMOD|
|label|APPOS|
|label|ATTR|
|label|AUX|
|label|AUXPASS|
|label|CC|
|label|CCOMP|
|label|CONJ|
|label|CSUBJ|
|label|CSUBJPASS|
|label|DEP|
|label|DET|
|label|DISCOURSE|
|label|DOBJ|
|label|EXPL|
|label|GOESWITH|
|label|IOBJ|
|label|MARK|
|label|MWE|
|label|MWV|
|label|NEG|
|label|NN|
|label|NPADVMOD|
|label|NSUBJ|
|label|NSUBJPASS|
|label|NUM|
|label|NUMBER|
|label|P|
|label|PARATAXIS|
|label|PARTMOD|
|label|PCOMP|
|label|POBJ|
|label|POSS|
|label|POSTNEG|
|label|PRECOMP|
|label|PRECONJ|
|label|PREDET|
|label|PREF|
|label|PREP|
|label|PRONL|
|label|PRT|
|label|PS|
|label|QUANTMOD|
|label|RCMOD|
|label|RCMODREL|
|label|RDROP|
|label|REF|
|label|REMNANT|
|label|REPARANDUM|
|label|ROOT|
|label|SNUM|
|label|SUFF|
|label|TMOD|
|label|TOPIC|
|label|VMOD|
|label|VOCATIVE|
|label|XCOMP|
|label|SUFFIX|
|label|TITLE|
|label|ADVPHMOD|
|label|AUXCAUS|
|label|AUXVV|
|label|DTMOD|
|label|FOREIGN|
|label|KW|
|label|LIST|
|label|NOMC|
|label|NOMCSUBJ|
|label|NOMCSUBJPASS|
|label|NUMC|
|label|COP|
|label|DISLOCATED|
|label|ASP|
|label|GMOD|
|label|GOBJ|
|label|INFMOD|
|label|MES|
|label|NCOMP|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "content": "string",
  "gcsContentUri": "string",
  "language": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

Represents the input to API methods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|The content of the input in string format. Cloud audit logging exempt since it is based on user data.|
|gcsContentUri|string|false|none|The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.|
|language|string|false|none|The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. [Language Support](https://cloud.google.com/natural-language/docs/languages) lists currently supported languages for each API method. If the language (either specified by the caller or automatically detected) is not supported by the called API method, an `INVALID_ARGUMENT` error is returned.|
|type|string|false|none|Required. If the type is not set or is `TYPE_UNSPECIFIED`, returns an `INVALID_ARGUMENT` error.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|PLAIN_TEXT|
|type|HTML|

<h2 id="tocS_Entity">Entity</h2>
<!-- backwards compatibility -->
<a id="schemaentity"></a>
<a id="schema_Entity"></a>
<a id="tocSentity"></a>
<a id="tocsentity"></a>

```json
{
  "mentions": [
    {
      "text": {
        "beginOffset": 0,
        "content": "string"
      },
      "type": "TYPE_UNKNOWN"
    }
  ],
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "salience": 0,
  "type": "UNKNOWN"
}
```

Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mentions|[[EntityMention](#schemaentitymention)]|false|none|The mentions of this entity in the input document. The API currently supports proper noun mentions.|
|metadata|object|false|none|Metadata associated with the entity. Currently, Wikipedia URLs and Knowledge Graph MIDs are provided, if available. The associated keys are "wikipedia_url" and "mid", respectively.|
|name|string|false|none|The representative name for the entity.|
|salience|number(float)|false|none|The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient.|
|type|string|false|none|The entity type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNKNOWN|
|type|PERSON|
|type|LOCATION|
|type|ORGANIZATION|
|type|EVENT|
|type|WORK_OF_ART|
|type|CONSUMER_GOOD|
|type|OTHER|

<h2 id="tocS_EntityMention">EntityMention</h2>
<!-- backwards compatibility -->
<a id="schemaentitymention"></a>
<a id="schema_EntityMention"></a>
<a id="tocSentitymention"></a>
<a id="tocsentitymention"></a>

```json
{
  "text": {
    "beginOffset": 0,
    "content": "string"
  },
  "type": "TYPE_UNKNOWN"
}
```

Represents a mention for an entity in the text. Currently, proper noun mentions are supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|[TextSpan](#schematextspan)|false|none|The mention text.|
|type|string|false|none|The type of the entity mention.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNKNOWN|
|type|PROPER|
|type|COMMON|

<h2 id="tocS_Features">Features</h2>
<!-- backwards compatibility -->
<a id="schemafeatures"></a>
<a id="schema_Features"></a>
<a id="tocSfeatures"></a>
<a id="tocsfeatures"></a>

```json
{
  "extractDocumentSentiment": true,
  "extractEntities": true,
  "extractSyntax": true
}
```

All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extractDocumentSentiment|boolean|false|none|Extract document-level sentiment.|
|extractEntities|boolean|false|none|Extract entities.|
|extractSyntax|boolean|false|none|Extract syntax information.|

<h2 id="tocS_PartOfSpeech">PartOfSpeech</h2>
<!-- backwards compatibility -->
<a id="schemapartofspeech"></a>
<a id="schema_PartOfSpeech"></a>
<a id="tocSpartofspeech"></a>
<a id="tocspartofspeech"></a>

```json
{
  "aspect": "ASPECT_UNKNOWN",
  "case": "CASE_UNKNOWN",
  "form": "FORM_UNKNOWN",
  "gender": "GENDER_UNKNOWN",
  "mood": "MOOD_UNKNOWN",
  "number": "NUMBER_UNKNOWN",
  "person": "PERSON_UNKNOWN",
  "proper": "PROPER_UNKNOWN",
  "reciprocity": "RECIPROCITY_UNKNOWN",
  "tag": "UNKNOWN",
  "tense": "TENSE_UNKNOWN",
  "voice": "VOICE_UNKNOWN"
}
```

Represents part of speech information for a token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aspect|string|false|none|The grammatical aspect.|
|case|string|false|none|The grammatical case.|
|form|string|false|none|The grammatical form.|
|gender|string|false|none|The grammatical gender.|
|mood|string|false|none|The grammatical mood.|
|number|string|false|none|The grammatical number.|
|person|string|false|none|The grammatical person.|
|proper|string|false|none|The grammatical properness.|
|reciprocity|string|false|none|The grammatical reciprocity.|
|tag|string|false|none|The part of speech tag.|
|tense|string|false|none|The grammatical tense.|
|voice|string|false|none|The grammatical voice.|

#### Enumerated Values

|Property|Value|
|---|---|
|aspect|ASPECT_UNKNOWN|
|aspect|PERFECTIVE|
|aspect|IMPERFECTIVE|
|aspect|PROGRESSIVE|
|case|CASE_UNKNOWN|
|case|ACCUSATIVE|
|case|ADVERBIAL|
|case|COMPLEMENTIVE|
|case|DATIVE|
|case|GENITIVE|
|case|INSTRUMENTAL|
|case|LOCATIVE|
|case|NOMINATIVE|
|case|OBLIQUE|
|case|PARTITIVE|
|case|PREPOSITIONAL|
|case|REFLEXIVE_CASE|
|case|RELATIVE_CASE|
|case|VOCATIVE|
|form|FORM_UNKNOWN|
|form|ADNOMIAL|
|form|AUXILIARY|
|form|COMPLEMENTIZER|
|form|FINAL_ENDING|
|form|GERUND|
|form|REALIS|
|form|IRREALIS|
|form|SHORT|
|form|LONG|
|form|ORDER|
|form|SPECIFIC|
|gender|GENDER_UNKNOWN|
|gender|FEMININE|
|gender|MASCULINE|
|gender|NEUTER|
|mood|MOOD_UNKNOWN|
|mood|CONDITIONAL_MOOD|
|mood|IMPERATIVE|
|mood|INDICATIVE|
|mood|INTERROGATIVE|
|mood|JUSSIVE|
|mood|SUBJUNCTIVE|
|number|NUMBER_UNKNOWN|
|number|SINGULAR|
|number|PLURAL|
|number|DUAL|
|person|PERSON_UNKNOWN|
|person|FIRST|
|person|SECOND|
|person|THIRD|
|person|REFLEXIVE_PERSON|
|proper|PROPER_UNKNOWN|
|proper|PROPER|
|proper|NOT_PROPER|
|reciprocity|RECIPROCITY_UNKNOWN|
|reciprocity|RECIPROCAL|
|reciprocity|NON_RECIPROCAL|
|tag|UNKNOWN|
|tag|ADJ|
|tag|ADP|
|tag|ADV|
|tag|CONJ|
|tag|DET|
|tag|NOUN|
|tag|NUM|
|tag|PRON|
|tag|PRT|
|tag|PUNCT|
|tag|VERB|
|tag|X|
|tag|AFFIX|
|tense|TENSE_UNKNOWN|
|tense|CONDITIONAL_TENSE|
|tense|FUTURE|
|tense|PAST|
|tense|PRESENT|
|tense|IMPERFECT|
|tense|PLUPERFECT|
|voice|VOICE_UNKNOWN|
|voice|ACTIVE|
|voice|CAUSATIVE|
|voice|PASSIVE|

<h2 id="tocS_Sentence">Sentence</h2>
<!-- backwards compatibility -->
<a id="schemasentence"></a>
<a id="schema_Sentence"></a>
<a id="tocSsentence"></a>
<a id="tocssentence"></a>

```json
{
  "sentiment": {
    "magnitude": 0,
    "polarity": 0,
    "score": 0
  },
  "text": {
    "beginOffset": 0,
    "content": "string"
  }
}
```

Represents a sentence in the input document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sentiment|[Sentiment](#schemasentiment)|false|none|For calls to AnalyzeSentiment or if AnnotateTextRequest.Features.extract_document_sentiment is set to true, this field will contain the sentiment for the sentence.|
|text|[TextSpan](#schematextspan)|false|none|The sentence text.|

<h2 id="tocS_Sentiment">Sentiment</h2>
<!-- backwards compatibility -->
<a id="schemasentiment"></a>
<a id="schema_Sentiment"></a>
<a id="tocSsentiment"></a>
<a id="tocssentiment"></a>

```json
{
  "magnitude": 0,
  "polarity": 0,
  "score": 0
}
```

Represents the feeling associated with the entire text or entities in the text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|magnitude|number(float)|false|none|A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment regardless of score (positive or negative).|
|polarity|number(float)|false|none|DEPRECATED FIELD - This field is being deprecated in favor of score. Please refer to our documentation at https://cloud.google.com/natural-language/docs for more information.|
|score|number(float)|false|none|Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_TextSpan">TextSpan</h2>
<!-- backwards compatibility -->
<a id="schematextspan"></a>
<a id="schema_TextSpan"></a>
<a id="tocStextspan"></a>
<a id="tocstextspan"></a>

```json
{
  "beginOffset": 0,
  "content": "string"
}
```

Represents an output piece of text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beginOffset|integer(int32)|false|none|The API calculates the beginning offset of the content in the original document according to the EncodingType specified in the API request.|
|content|string|false|none|The content of the output text.|

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
{
  "dependencyEdge": {
    "headTokenIndex": 0,
    "label": "UNKNOWN"
  },
  "lemma": "string",
  "partOfSpeech": {
    "aspect": "ASPECT_UNKNOWN",
    "case": "CASE_UNKNOWN",
    "form": "FORM_UNKNOWN",
    "gender": "GENDER_UNKNOWN",
    "mood": "MOOD_UNKNOWN",
    "number": "NUMBER_UNKNOWN",
    "person": "PERSON_UNKNOWN",
    "proper": "PROPER_UNKNOWN",
    "reciprocity": "RECIPROCITY_UNKNOWN",
    "tag": "UNKNOWN",
    "tense": "TENSE_UNKNOWN",
    "voice": "VOICE_UNKNOWN"
  },
  "text": {
    "beginOffset": 0,
    "content": "string"
  }
}
```

Represents the smallest syntactic building block of the text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dependencyEdge|[DependencyEdge](#schemadependencyedge)|false|none|Dependency tree parse for this token.|
|lemma|string|false|none|[Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token.|
|partOfSpeech|[PartOfSpeech](#schemapartofspeech)|false|none|Parts of speech tag for this token.|
|text|[TextSpan](#schematextspan)|false|none|The token text.|
