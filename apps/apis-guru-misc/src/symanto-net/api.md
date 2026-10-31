<h1 id="psycholinguistic-text-analytics">Psycholinguistic Text Analytics v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

We aim to provide the deepest understanding of people through psychology & AI

Base URLs:

* <a href="https://api.symanto.net">https://api.symanto.net</a>

<a href="https://developers.symanto.net/terms-of-service">Terms of service</a>
Email: <a href="mailto:support@symanto.net">Symanto Support</a> 
Web: <a href="https://developers.symanto.net">Symanto Support</a> 

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **x-api-key**, in: header.

<h1 id="psycholinguistic-text-analytics-text-analysis">Text Analysis</h1>

## Communication &amp; Tonality

<a id="opIdcommunication"></a>

> Code samples

```bash
curl https://example.com/communication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '[
    {
      "id": "1",
      "language": "en",
      "text": "I love the service"
    }
  ]'
```

`POST /communication`

Identify the purpose and writing style of a written text.

Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]

Returned labels:
* action-seeking
* fact-oriented
* information-seeking
* self-revealing

> Body parameter

```json
[
  {
    "id": "1",
    "language": "en",
    "text": "I love the service"
  }
]
```

<h3 id="communication-tonality-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|none|
|body|body|[PostRequest](#schemapostrequest)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "predictions": [
      {
        "prediction": "string",
        "probability": 0
      }
    ]
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="communication-tonality-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PredictionResults](#schemapredictionresults)|
|422|Unprocessable Entity|Validation Error|[ValidationErrors](#schemavalidationerrors)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Emotion Analysis

<a id="opIdekman-emotion"></a>

> Code samples

```bash
curl https://example.com/ekman-emotion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '[
    {
      "id": "1",
      "language": "en",
      "text": "I love the service"
    }
  ]'
```

`POST /ekman-emotion`

Detect the emotions of the text based on Ekman.

Supported Langauges: [`en`, `de`, `es`]

Returned labels:
* anger
* disgust
* fear
* joy
* sadness
* surprise
* no-emotion

> Body parameter

```json
[
  {
    "id": "1",
    "language": "en",
    "text": "I love the service"
  }
]
```

<h3 id="emotion-analysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|none|
|body|body|[PostRequest](#schemapostrequest)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "predictions": [
      {
        "prediction": "string",
        "probability": 0
      }
    ]
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="emotion-analysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PredictionResults](#schemapredictionresults)|
|422|Unprocessable Entity|Validation Error|[ValidationErrors](#schemavalidationerrors)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Emotion Analysis

<a id="opIdemotion"></a>

> Code samples

```bash
curl https://example.com/emotion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '[
    {
      "id": "1",
      "language": "en",
      "text": "I love the service"
    }
  ]'
```

`POST /emotion`

Detect the emotions of the text.

Supported Langauges: [`en`, `de`, `es`]

Returned labels:
* anger
* joy
* love
* sadness
* surprise
* uncategorized

> Body parameter

```json
[
  {
    "id": "1",
    "language": "en",
    "text": "I love the service"
  }
]
```

<h3 id="emotion-analysis-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|none|
|body|body|[PostRequest](#schemapostrequest)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "predictions": [
      {
        "prediction": "string",
        "probability": 0
      }
    ]
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="emotion-analysis-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PredictionResults](#schemapredictionresults)|
|422|Unprocessable Entity|Validation Error|[ValidationErrors](#schemavalidationerrors)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Language Detection

<a id="opIdlanguage-detection"></a>

> Code samples

```bash
curl https://example.com/language-detection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '[
    {
      "id": "string",
      "text": "string"
    }
  ]'
```

`POST /language-detection`

Identifies what language a text is written in. Only languages that our API supports can be analyzed.

Returned labels:
* language_code of the detected language

> Body parameter

```json
[
  {
    "id": "string",
    "text": "string"
  }
]
```

<h3 id="language-detection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LanguageDetectionRequest](#schemalanguagedetectionrequest)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "detected_language": "string",
    "id": "string"
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="language-detection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[LanguageDetectionResponse](#schemalanguagedetectionresponse)|
|422|Unprocessable Entity|Validation Error|[ValidationErrors](#schemavalidationerrors)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Personality Traits

<a id="opIdpersonality"></a>

> Code samples

```bash
curl https://example.com/personality \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '[
    {
      "id": "1",
      "language": "en",
      "text": "I love the service"
    }
  ]'
```

`POST /personality`

Predict the personality trait of author of any written text.

Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]

Returned labels:

* emotional
* rational

> Body parameter

```json
[
  {
    "id": "1",
    "language": "en",
    "text": "I love the service"
  }
]
```

<h3 id="personality-traits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|none|
|body|body|[PostRequest](#schemapostrequest)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "predictions": [
      {
        "prediction": "string",
        "probability": 0
      }
    ]
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="personality-traits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PredictionResults](#schemapredictionresults)|
|422|Unprocessable Entity|Validation Error|[ValidationErrors](#schemavalidationerrors)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Sentiment Analysis

<a id="opIdsentiment"></a>

> Code samples

```bash
curl https://example.com/sentiment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '[
    {
      "id": "1",
      "language": "en",
      "text": "I love the service"
    }
  ]'
```

`POST /sentiment`

Evaluate the overall tonality of the text.

Supported Languages: [`en`, `de`, `es`]

Returned labels:
* positive
* negative

> Body parameter

```json
[
  {
    "id": "1",
    "language": "en",
    "text": "I love the service"
  }
]
```

<h3 id="sentiment-analysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|none|
|body|body|[PostRequest](#schemapostrequest)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "predictions": [
      {
        "prediction": "string",
        "probability": 0
      }
    ]
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="sentiment-analysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PredictionResults](#schemapredictionresults)|
|422|Unprocessable Entity|Validation Error|[ValidationErrors](#schemavalidationerrors)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Extracts topics and sentiments and relates them.

<a id="opIdtopic-sentiment"></a>

> Code samples

```bash
curl https://example.com/topic-sentiment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '[
    {
      "id": "1",
      "language": "en",
      "text": "I love the service"
    }
  ]'
```

`POST /topic-sentiment`

> Body parameter

```json
[
  {
    "id": "1",
    "language": "en",
    "text": "I love the service"
  }
]
```

<h3 id="extracts-topics-and-sentiments-and-relates-them-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|false|Provide analysis domain for better extraction (optional)|
|body|body|[PostRequest](#schemapostrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|domain|Ecom|
|domain|Employee|
|domain|Hotel|
|domain|Restaurant|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "language": "string",
    "sentiments": [
      {
        "category": "string",
        "end": 0,
        "negationTerm": "string",
        "parentCategory": "string",
        "positive": true,
        "scale": 0,
        "start": 0,
        "text": "string"
      }
    ],
    "text": "string",
    "topicSentiments": [
      {
        "sentence": "string",
        "sentiment": {
          "category": "string",
          "end": 0,
          "negationTerm": "string",
          "parentCategory": "string",
          "positive": true,
          "scale": 0,
          "start": 0,
          "text": "string"
        },
        "topic": {
          "category": "string",
          "end": 0,
          "polarity": 0,
          "start": 0,
          "text": "string",
          "topic": "string"
        }
      }
    ],
    "topics": [
      {
        "category": "string",
        "end": 0,
        "polarity": 0,
        "start": 0,
        "text": "string",
        "topic": "string"
      }
    ]
  }
]
```

<h3 id="extracts-topics-and-sentiments-and-relates-them-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[TopicSentimentResponse](#schematopicsentimentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

# Schemas

<h2 id="tocS_LanguageDetection">LanguageDetection</h2>
<!-- backwards compatibility -->
<a id="schemalanguagedetection"></a>
<a id="schema_LanguageDetection"></a>
<a id="tocSlanguagedetection"></a>
<a id="tocslanguagedetection"></a>

```json
{
  "id": "string",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|id of the text.|
|text|string|true|none|the text itself.|

<h2 id="tocS_LanguageDetectionRequest">LanguageDetectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemalanguagedetectionrequest"></a>
<a id="schema_LanguageDetectionRequest"></a>
<a id="tocSlanguagedetectionrequest"></a>
<a id="tocslanguagedetectionrequest"></a>

```json
[
  {
    "id": "string",
    "text": "string"
  }
]
```

<h2 id="tocS_LanguageDetectionResponse">LanguageDetectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemalanguagedetectionresponse"></a>
<a id="schema_LanguageDetectionResponse"></a>
<a id="tocSlanguagedetectionresponse"></a>
<a id="tocslanguagedetectionresponse"></a>

```json
[
  {
    "detected_language": "string",
    "id": "string"
  }
]
```

<h2 id="tocS_LanguagePredicted">LanguagePredicted</h2>
<!-- backwards compatibility -->
<a id="schemalanguagepredicted"></a>
<a id="schema_LanguagePredicted"></a>
<a id="tocSlanguagepredicted"></a>
<a id="tocslanguagepredicted"></a>

```json
{
  "detected_language": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detected_language|string|true|none|the detected language_code corresponding to the input text.|
|id|string|false|none|id of the post.|

<h2 id="tocS_Post">Post</h2>
<!-- backwards compatibility -->
<a id="schemapost"></a>
<a id="schema_Post"></a>
<a id="tocSpost"></a>
<a id="tocspost"></a>

```json
{
  "id": "1",
  "language": "en",
  "text": "I love the service"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|id of the post.|
|language|string|true|none|language_code of the text.|
|text|string|true|none|the text to be analysed.|

<h2 id="tocS_PostPredicted">PostPredicted</h2>
<!-- backwards compatibility -->
<a id="schemapostpredicted"></a>
<a id="schema_PostPredicted"></a>
<a id="tocSpostpredicted"></a>
<a id="tocspostpredicted"></a>

```json
{
  "id": "string",
  "predictions": [
    {
      "prediction": "string",
      "probability": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|id of the post.|
|predictions|[[Prediction](#schemaprediction)]|true|none|the list of predictions.|

<h2 id="tocS_PostRequest">PostRequest</h2>
<!-- backwards compatibility -->
<a id="schemapostrequest"></a>
<a id="schema_PostRequest"></a>
<a id="tocSpostrequest"></a>
<a id="tocspostrequest"></a>

```json
[
  {
    "id": "1",
    "language": "en",
    "text": "I love the service"
  }
]
```

<h2 id="tocS_Prediction">Prediction</h2>
<!-- backwards compatibility -->
<a id="schemaprediction"></a>
<a id="schema_Prediction"></a>
<a id="tocSprediction"></a>
<a id="tocsprediction"></a>

```json
{
  "prediction": "string",
  "probability": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prediction|string|true|none|the predicted label.|
|probability|number|true|none|the probability of the predicted label.|

<h2 id="tocS_PredictionResults">PredictionResults</h2>
<!-- backwards compatibility -->
<a id="schemapredictionresults"></a>
<a id="schema_PredictionResults"></a>
<a id="tocSpredictionresults"></a>
<a id="tocspredictionresults"></a>

```json
[
  {
    "id": "string",
    "predictions": [
      {
        "prediction": "string",
        "probability": 0
      }
    ]
  }
]
```

<h2 id="tocS_Sentiment">Sentiment</h2>
<!-- backwards compatibility -->
<a id="schemasentiment"></a>
<a id="schema_Sentiment"></a>
<a id="tocSsentiment"></a>
<a id="tocssentiment"></a>

```json
{
  "category": "string",
  "end": 0,
  "negationTerm": "string",
  "parentCategory": "string",
  "positive": true,
  "scale": 0,
  "start": 0,
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|end|integer(int32)|false|none|none|
|negationTerm|string|false|none|none|
|parentCategory|string|false|none|none|
|positive|boolean|false|none|none|
|scale|number(double)|false|none|none|
|start|integer(int32)|false|none|none|
|text|string|false|none|none|

<h2 id="tocS_Topic">Topic</h2>
<!-- backwards compatibility -->
<a id="schematopic"></a>
<a id="schema_Topic"></a>
<a id="tocStopic"></a>
<a id="tocstopic"></a>

```json
{
  "category": "string",
  "end": 0,
  "polarity": 0,
  "start": 0,
  "text": "string",
  "topic": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|end|integer(int32)|false|none|none|
|polarity|number(double)|false|none|none|
|start|integer(int32)|false|none|none|
|text|string|false|none|none|
|topic|string|false|none|none|

<h2 id="tocS_TopicSentiment">TopicSentiment</h2>
<!-- backwards compatibility -->
<a id="schematopicsentiment"></a>
<a id="schema_TopicSentiment"></a>
<a id="tocStopicsentiment"></a>
<a id="tocstopicsentiment"></a>

```json
{
  "sentence": "string",
  "sentiment": {
    "category": "string",
    "end": 0,
    "negationTerm": "string",
    "parentCategory": "string",
    "positive": true,
    "scale": 0,
    "start": 0,
    "text": "string"
  },
  "topic": {
    "category": "string",
    "end": 0,
    "polarity": 0,
    "start": 0,
    "text": "string",
    "topic": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sentence|string|false|none|none|
|sentiment|[Sentiment](#schemasentiment)|false|none|none|
|topic|[Topic](#schematopic)|false|none|none|

<h2 id="tocS_TopicSentimentOutput">TopicSentimentOutput</h2>
<!-- backwards compatibility -->
<a id="schematopicsentimentoutput"></a>
<a id="schema_TopicSentimentOutput"></a>
<a id="tocStopicsentimentoutput"></a>
<a id="tocstopicsentimentoutput"></a>

```json
{
  "id": "string",
  "language": "string",
  "sentiments": [
    {
      "category": "string",
      "end": 0,
      "negationTerm": "string",
      "parentCategory": "string",
      "positive": true,
      "scale": 0,
      "start": 0,
      "text": "string"
    }
  ],
  "text": "string",
  "topicSentiments": [
    {
      "sentence": "string",
      "sentiment": {
        "category": "string",
        "end": 0,
        "negationTerm": "string",
        "parentCategory": "string",
        "positive": true,
        "scale": 0,
        "start": 0,
        "text": "string"
      },
      "topic": {
        "category": "string",
        "end": 0,
        "polarity": 0,
        "start": 0,
        "text": "string",
        "topic": "string"
      }
    }
  ],
  "topics": [
    {
      "category": "string",
      "end": 0,
      "polarity": 0,
      "start": 0,
      "text": "string",
      "topic": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|language|string|false|none|none|
|sentiments|[[Sentiment](#schemasentiment)]|false|none|none|
|text|string|false|none|none|
|topicSentiments|[[TopicSentiment](#schematopicsentiment)]|false|none|none|
|topics|[[Topic](#schematopic)]|false|none|none|

<h2 id="tocS_TopicSentimentResponse">TopicSentimentResponse</h2>
<!-- backwards compatibility -->
<a id="schematopicsentimentresponse"></a>
<a id="schema_TopicSentimentResponse"></a>
<a id="tocStopicsentimentresponse"></a>
<a id="tocstopicsentimentresponse"></a>

```json
[
  {
    "id": "string",
    "language": "string",
    "sentiments": [
      {
        "category": "string",
        "end": 0,
        "negationTerm": "string",
        "parentCategory": "string",
        "positive": true,
        "scale": 0,
        "start": 0,
        "text": "string"
      }
    ],
    "text": "string",
    "topicSentiments": [
      {
        "sentence": "string",
        "sentiment": {
          "category": "string",
          "end": 0,
          "negationTerm": "string",
          "parentCategory": "string",
          "positive": true,
          "scale": 0,
          "start": 0,
          "text": "string"
        },
        "topic": {
          "category": "string",
          "end": 0,
          "polarity": 0,
          "start": 0,
          "text": "string",
          "topic": "string"
        }
      }
    ],
    "topics": [
      {
        "category": "string",
        "end": 0,
        "polarity": 0,
        "start": 0,
        "text": "string",
        "topic": "string"
      }
    ]
  }
]
```

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "loc": [
    "string"
  ],
  "msg": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loc|[string]|true|none|none|
|msg|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_ValidationErrors">ValidationErrors</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerrors"></a>
<a id="schema_ValidationErrors"></a>
<a id="tocSvalidationerrors"></a>
<a id="tocsvalidationerrors"></a>

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|[[ValidationError](#schemavalidationerror)]|false|none|none|
