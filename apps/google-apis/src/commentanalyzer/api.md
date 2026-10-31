<h1 id="perspective-comment-analyzer-api">Perspective Comment Analyzer API v1alpha1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Perspective Comment Analyzer API provides information about the potential impact of a comment on a conversation (e.g. it can provide a score for the "toxicity" of a comment). Users can leverage the "SuggestCommentScore" method to submit corrections to improve Perspective over time. Users can set the "doNotStore" flag to ensure that all submitted comments are automatically deleted after scores are returned.

Base URLs:

* <a href="https://commentanalyzer.googleapis.com/">https://commentanalyzer.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://support.perspectiveapi.com">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/userinfo.email|See your primary Google Account email address|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/userinfo.email|See your primary Google Account email address|

<h1 id="perspective-comment-analyzer-api-comments">comments</h1>

## commentanalyzer.comments.analyze

<a id="opIdcommentanalyzer.comments.analyze"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/comments:analyze \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientToken": "string",
    "comment": {
      "text": "string",
      "type": "TEXT_TYPE_UNSPECIFIED"
    },
    "communityId": "string",
    "context": {
      "articleAndParentComment": {
        "article": {
          "text": "string",
          "type": "TEXT_TYPE_UNSPECIFIED"
        },
        "parentComment": {
          "text": "string",
          "type": "TEXT_TYPE_UNSPECIFIED"
        }
      },
      "entries": [
        {
          "text": "string",
          "type": "TEXT_TYPE_UNSPECIFIED"
        }
      ]
    },
    "doNotStore": true,
    "dropUnsupportedAttributes": true,
    "languages": [
      "string"
    ],
    "requestedAttributes": {
      "property1": {
        "scoreThreshold": 0,
        "scoreType": "SCORE_TYPE_UNSPECIFIED"
      },
      "property2": {
        "scoreThreshold": 0,
        "scoreType": "SCORE_TYPE_UNSPECIFIED"
      }
    },
    "sessionId": "string",
    "spanAnnotations": true
  }'
```

`POST /v1alpha1/comments:analyze`

Analyzes the provided text and returns scores for requested attributes.

> Body parameter

```json
{
  "clientToken": "string",
  "comment": {
    "text": "string",
    "type": "TEXT_TYPE_UNSPECIFIED"
  },
  "communityId": "string",
  "context": {
    "articleAndParentComment": {
      "article": {
        "text": "string",
        "type": "TEXT_TYPE_UNSPECIFIED"
      },
      "parentComment": {
        "text": "string",
        "type": "TEXT_TYPE_UNSPECIFIED"
      }
    },
    "entries": [
      {
        "text": "string",
        "type": "TEXT_TYPE_UNSPECIFIED"
      }
    ]
  },
  "doNotStore": true,
  "dropUnsupportedAttributes": true,
  "languages": [
    "string"
  ],
  "requestedAttributes": {
    "property1": {
      "scoreThreshold": 0,
      "scoreType": "SCORE_TYPE_UNSPECIFIED"
    },
    "property2": {
      "scoreThreshold": 0,
      "scoreType": "SCORE_TYPE_UNSPECIFIED"
    }
  },
  "sessionId": "string",
  "spanAnnotations": true
}
```

<h3 id="commentanalyzercommentsanalyze-parameters">Parameters</h3>

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
|body|body|[AnalyzeCommentRequest](#schemaanalyzecommentrequest)|false|none|
|» clientToken|body|string|false|Opaque token that is echoed from the request to the response.|
|» comment|body|[TextEntry](#schematextentry)|false|The comment to analyze.|
|» communityId|body|string|false|Optional identifier associating this AnalyzeCommentRequest with a particular client's community. Different communities may have different norms and rules. Specifying this value enables us to explore building community-specific models for clients.|
|» context|body|[Context](#schemacontext)|false|The context of the comment.|
|» doNotStore|body|boolean|false|Do not store the comment or context sent in this request. By default, the service may store comments/context for debugging purposes.|
|» dropUnsupportedAttributes|body|boolean|false|If specified, any requested attribute that is requested but not supported for the language detected will be dropped from the returned scores instead of returning an error.|
|» languages|body|[string]|false|The language(s) of the comment and context. If none are specified, we attempt to automatically detect the language. Specifying multiple languages means the text contains multiple lanugages. Both ISO and BCP-47 language codes are accepted. The server returns an error if no language was specified and language detection fails. The server also returns an error if the languages (either specified by the caller, or auto-detected) are not *all* supported by the service.|
|» requestedAttributes|body|object|false|Specification of requested attributes. The AttributeParameters serve as configuration for each associated attribute. The map keys are attribute names. The available attributes may be different on each RFE installation, and can be seen by calling ListAttributes (see above). For the prod installation, known as Perspective API, see https://developers.perspectiveapi.com/s/about-the-api-model-cards.|
|» » **additionalProperties**|body|[AttributeParameters](#schemaattributeparameters)|false|Configurable parameters for attribute scoring.|
|» sessionId|body|string|false|Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer.|
|» spanAnnotations|body|boolean|false|An advisory parameter that will return span annotations if the model is capable of providing scores with sub-comment resolution. This will likely increase the size of the returned message.|

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
  "attributeScores": {
    "property1": {
      "spanScores": [
        {
          "begin": 0,
          "end": 0,
          "score": {
            "type": "SCORE_TYPE_UNSPECIFIED",
            "value": 0
          }
        }
      ],
      "summaryScore": {
        "type": "SCORE_TYPE_UNSPECIFIED",
        "value": 0
      }
    },
    "property2": {
      "spanScores": [
        {
          "begin": 0,
          "end": 0,
          "score": {
            "type": "SCORE_TYPE_UNSPECIFIED",
            "value": 0
          }
        }
      ],
      "summaryScore": {
        "type": "SCORE_TYPE_UNSPECIFIED",
        "value": 0
      }
    }
  },
  "clientToken": "string",
  "detectedLanguages": [
    "string"
  ],
  "languages": [
    "string"
  ]
}
```

<h3 id="commentanalyzercommentsanalyze-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AnalyzeCommentResponse](#schemaanalyzecommentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## commentanalyzer.comments.suggestscore

<a id="opIdcommentanalyzer.comments.suggestscore"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/comments:suggestscore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributeScores": {
      "property1": {
        "spanScores": [
          {
            "begin": 0,
            "end": 0,
            "score": {
              "type": "SCORE_TYPE_UNSPECIFIED",
              "value": 0
            }
          }
        ],
        "summaryScore": {
          "type": "SCORE_TYPE_UNSPECIFIED",
          "value": 0
        }
      },
      "property2": {
        "spanScores": [
          {
            "begin": 0,
            "end": 0,
            "score": {
              "type": "SCORE_TYPE_UNSPECIFIED",
              "value": 0
            }
          }
        ],
        "summaryScore": {
          "type": "SCORE_TYPE_UNSPECIFIED",
          "value": 0
        }
      }
    },
    "clientToken": "string",
    "comment": {
      "text": "string",
      "type": "TEXT_TYPE_UNSPECIFIED"
    },
    "communityId": "string",
    "context": {
      "articleAndParentComment": {
        "article": {
          "text": "string",
          "type": "TEXT_TYPE_UNSPECIFIED"
        },
        "parentComment": {
          "text": "string",
          "type": "TEXT_TYPE_UNSPECIFIED"
        }
      },
      "entries": [
        {
          "text": "string",
          "type": "TEXT_TYPE_UNSPECIFIED"
        }
      ]
    },
    "languages": [
      "string"
    ],
    "sessionId": "string"
  }'
```

`POST /v1alpha1/comments:suggestscore`

Suggest comment scores as training data.

> Body parameter

```json
{
  "attributeScores": {
    "property1": {
      "spanScores": [
        {
          "begin": 0,
          "end": 0,
          "score": {
            "type": "SCORE_TYPE_UNSPECIFIED",
            "value": 0
          }
        }
      ],
      "summaryScore": {
        "type": "SCORE_TYPE_UNSPECIFIED",
        "value": 0
      }
    },
    "property2": {
      "spanScores": [
        {
          "begin": 0,
          "end": 0,
          "score": {
            "type": "SCORE_TYPE_UNSPECIFIED",
            "value": 0
          }
        }
      ],
      "summaryScore": {
        "type": "SCORE_TYPE_UNSPECIFIED",
        "value": 0
      }
    }
  },
  "clientToken": "string",
  "comment": {
    "text": "string",
    "type": "TEXT_TYPE_UNSPECIFIED"
  },
  "communityId": "string",
  "context": {
    "articleAndParentComment": {
      "article": {
        "text": "string",
        "type": "TEXT_TYPE_UNSPECIFIED"
      },
      "parentComment": {
        "text": "string",
        "type": "TEXT_TYPE_UNSPECIFIED"
      }
    },
    "entries": [
      {
        "text": "string",
        "type": "TEXT_TYPE_UNSPECIFIED"
      }
    ]
  },
  "languages": [
    "string"
  ],
  "sessionId": "string"
}
```

<h3 id="commentanalyzercommentssuggestscore-parameters">Parameters</h3>

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
|body|body|[SuggestCommentScoreRequest](#schemasuggestcommentscorerequest)|false|none|
|» attributeScores|body|object|false|Attribute scores for the comment. The map keys are attribute names, same as the requested_attribute field in AnalyzeCommentRequest (for example "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc.). This field has the same type as the `attribute_scores` field in AnalyzeCommentResponse. To specify an overall attribute score for the entire comment as a whole, use the `summary_score` field of the mapped AttributeScores object. To specify scores on specific subparts of the comment, use the `span_scores` field. All SpanScore objects must have begin and end fields set. All Score objects must be explicitly set (for binary classification, use the score values 0 and 1). If Score objects don't include a ScoreType, `PROBABILITY` is assumed. `attribute_scores` must not be empty. The mapped AttributeScores objects also must not be empty. An `INVALID_ARGUMENT` error is returned for all malformed requests.|
|» » **additionalProperties**|body|[AttributeScores](#schemaattributescores)|false|This holds score values for a single attribute. It contains both per-span scores as well as an overall summary score..|
|» clientToken|body|string|false|Opaque token that is echoed from the request to the response.|
|» comment|body|[TextEntry](#schematextentry)|false|The comment being scored.|
|» communityId|body|string|false|Optional identifier associating this comment score suggestion with a particular sub-community. Different communities may have different norms and rules. Specifying this value enables training community-specific models.|
|» context|body|[Context](#schemacontext)|false|The context of the comment.|
|» languages|body|[string]|false|The language(s) of the comment and context. If none are specified, we attempt to automatically detect the language. Both ISO and BCP-47 language codes are accepted.|
|» sessionId|body|string|false|Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer.|

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
  "clientToken": "string",
  "detectedLanguages": [
    "string"
  ],
  "requestedLanguages": [
    "string"
  ]
}
```

<h3 id="commentanalyzercommentssuggestscore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SuggestCommentScoreResponse](#schemasuggestcommentscoreresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

# Schemas

<h2 id="tocS_AnalyzeCommentRequest">AnalyzeCommentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzecommentrequest"></a>
<a id="schema_AnalyzeCommentRequest"></a>
<a id="tocSanalyzecommentrequest"></a>
<a id="tocsanalyzecommentrequest"></a>

```json
{
  "clientToken": "string",
  "comment": {
    "text": "string",
    "type": "TEXT_TYPE_UNSPECIFIED"
  },
  "communityId": "string",
  "context": {
    "articleAndParentComment": {
      "article": {
        "text": "string",
        "type": "TEXT_TYPE_UNSPECIFIED"
      },
      "parentComment": {
        "text": "string",
        "type": "TEXT_TYPE_UNSPECIFIED"
      }
    },
    "entries": [
      {
        "text": "string",
        "type": "TEXT_TYPE_UNSPECIFIED"
      }
    ]
  },
  "doNotStore": true,
  "dropUnsupportedAttributes": true,
  "languages": [
    "string"
  ],
  "requestedAttributes": {
    "property1": {
      "scoreThreshold": 0,
      "scoreType": "SCORE_TYPE_UNSPECIFIED"
    },
    "property2": {
      "scoreThreshold": 0,
      "scoreType": "SCORE_TYPE_UNSPECIFIED"
    }
  },
  "sessionId": "string",
  "spanAnnotations": true
}
```

The comment analysis request message. Next ID: 11

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|string|false|none|Opaque token that is echoed from the request to the response.|
|comment|[TextEntry](#schematextentry)|false|none|The comment to analyze.|
|communityId|string|false|none|Optional identifier associating this AnalyzeCommentRequest with a particular client's community. Different communities may have different norms and rules. Specifying this value enables us to explore building community-specific models for clients.|
|context|[Context](#schemacontext)|false|none|The context of the comment.|
|doNotStore|boolean|false|none|Do not store the comment or context sent in this request. By default, the service may store comments/context for debugging purposes.|
|dropUnsupportedAttributes|boolean|false|none|If specified, any requested attribute that is requested but not supported for the language detected will be dropped from the returned scores instead of returning an error.|
|languages|[string]|false|none|The language(s) of the comment and context. If none are specified, we attempt to automatically detect the language. Specifying multiple languages means the text contains multiple lanugages. Both ISO and BCP-47 language codes are accepted. The server returns an error if no language was specified and language detection fails. The server also returns an error if the languages (either specified by the caller, or auto-detected) are not *all* supported by the service.|
|requestedAttributes|object|false|none|Specification of requested attributes. The AttributeParameters serve as configuration for each associated attribute. The map keys are attribute names. The available attributes may be different on each RFE installation, and can be seen by calling ListAttributes (see above). For the prod installation, known as Perspective API, see https://developers.perspectiveapi.com/s/about-the-api-model-cards.|
|sessionId|string|false|none|Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer.|
|spanAnnotations|boolean|false|none|An advisory parameter that will return span annotations if the model is capable of providing scores with sub-comment resolution. This will likely increase the size of the returned message.|

<h2 id="tocS_AnalyzeCommentResponse">AnalyzeCommentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzecommentresponse"></a>
<a id="schema_AnalyzeCommentResponse"></a>
<a id="tocSanalyzecommentresponse"></a>
<a id="tocsanalyzecommentresponse"></a>

```json
{
  "attributeScores": {
    "property1": {
      "spanScores": [
        {
          "begin": 0,
          "end": 0,
          "score": {
            "type": "SCORE_TYPE_UNSPECIFIED",
            "value": 0
          }
        }
      ],
      "summaryScore": {
        "type": "SCORE_TYPE_UNSPECIFIED",
        "value": 0
      }
    },
    "property2": {
      "spanScores": [
        {
          "begin": 0,
          "end": 0,
          "score": {
            "type": "SCORE_TYPE_UNSPECIFIED",
            "value": 0
          }
        }
      ],
      "summaryScore": {
        "type": "SCORE_TYPE_UNSPECIFIED",
        "value": 0
      }
    }
  },
  "clientToken": "string",
  "detectedLanguages": [
    "string"
  ],
  "languages": [
    "string"
  ]
}
```

The comment analysis response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeScores|object|false|none|Scores for the requested attributes. The map keys are attribute names (same as the requested_attribute field in AnalyzeCommentRequest, for example "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc).|
|clientToken|string|false|none|Same token from the original AnalyzeCommentRequest.|
|detectedLanguages|[string]|false|none|Contains the languages detected from the text content, sorted in order of likelihood.|
|languages|[string]|false|none|The language(s) used by CommentAnalyzer service to choose which Model to use when analyzing the comment. Might better be called "effective_languages". The logic used to make the choice is as follows: if !Request.languages.empty() effective_languages = Request.languages else effective_languages = detected_languages[0]|

<h2 id="tocS_ArticleAndParentComment">ArticleAndParentComment</h2>
<!-- backwards compatibility -->
<a id="schemaarticleandparentcomment"></a>
<a id="schema_ArticleAndParentComment"></a>
<a id="tocSarticleandparentcomment"></a>
<a id="tocsarticleandparentcomment"></a>

```json
{
  "article": {
    "text": "string",
    "type": "TEXT_TYPE_UNSPECIFIED"
  },
  "parentComment": {
    "text": "string",
    "type": "TEXT_TYPE_UNSPECIFIED"
  }
}
```

A type of context specific to a comment left on a single-threaded comment message board, where comments are either a top level comment or the child of a top level comment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|article|[TextEntry](#schematextentry)|false|none|The source content about which the comment was made (article text, article summary, video transcript, etc).|
|parentComment|[TextEntry](#schematextentry)|false|none|Refers to text that is a direct parent of the source comment, such as in a one-deep threaded message board. This field will only be present for comments that are replies to other comments and will not be populated for direct comments on the article_text.|

<h2 id="tocS_AttributeParameters">AttributeParameters</h2>
<!-- backwards compatibility -->
<a id="schemaattributeparameters"></a>
<a id="schema_AttributeParameters"></a>
<a id="tocSattributeparameters"></a>
<a id="tocsattributeparameters"></a>

```json
{
  "scoreThreshold": 0,
  "scoreType": "SCORE_TYPE_UNSPECIFIED"
}
```

Configurable parameters for attribute scoring.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scoreThreshold|number(float)|false|none|Don't return scores for this attribute that are below this threshold. If unset, a default threshold will be applied. A FloatValue wrapper is used to distinguish between 0 vs. default/unset.|
|scoreType|string|false|none|What type of scores to return. If unset, defaults to probability scores.|

#### Enumerated Values

|Property|Value|
|---|---|
|scoreType|SCORE_TYPE_UNSPECIFIED|
|scoreType|PROBABILITY|
|scoreType|STD_DEV_SCORE|
|scoreType|PERCENTILE|
|scoreType|RAW|

<h2 id="tocS_AttributeScores">AttributeScores</h2>
<!-- backwards compatibility -->
<a id="schemaattributescores"></a>
<a id="schema_AttributeScores"></a>
<a id="tocSattributescores"></a>
<a id="tocsattributescores"></a>

```json
{
  "spanScores": [
    {
      "begin": 0,
      "end": 0,
      "score": {
        "type": "SCORE_TYPE_UNSPECIFIED",
        "value": 0
      }
    }
  ],
  "summaryScore": {
    "type": "SCORE_TYPE_UNSPECIFIED",
    "value": 0
  }
}
```

This holds score values for a single attribute. It contains both per-span scores as well as an overall summary score..

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spanScores|[[SpanScore](#schemaspanscore)]|false|none|Per-span scores.|
|summaryScore|[Score](#schemascore)|false|none|Overall score for comment as a whole.|

<h2 id="tocS_Context">Context</h2>
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_Context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
{
  "articleAndParentComment": {
    "article": {
      "text": "string",
      "type": "TEXT_TYPE_UNSPECIFIED"
    },
    "parentComment": {
      "text": "string",
      "type": "TEXT_TYPE_UNSPECIFIED"
    }
  },
  "entries": [
    {
      "text": "string",
      "type": "TEXT_TYPE_UNSPECIFIED"
    }
  ]
}
```

Context is typically something that a Comment is referencing or replying to (such as an article, or previous comment). Note: Populate only ONE OF the following fields. The oneof syntax cannot be used because that would require nesting entries inside another message and breaking backwards compatibility. The server will return an error if more than one of the following fields is present.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|articleAndParentComment|[ArticleAndParentComment](#schemaarticleandparentcomment)|false|none|Information about the source for which the original comment was made, and any parent comment info.|
|entries|[[TextEntry](#schematextentry)]|false|none|A list of messages. For example, a linear comments section or forum thread.|

<h2 id="tocS_Score">Score</h2>
<!-- backwards compatibility -->
<a id="schemascore"></a>
<a id="schema_Score"></a>
<a id="tocSscore"></a>
<a id="tocsscore"></a>

```json
{
  "type": "SCORE_TYPE_UNSPECIFIED",
  "value": 0
}
```

Analysis scores are described by a value and a ScoreType.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of the above value.|
|value|number(float)|false|none|Score value. Semantics described by type below.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SCORE_TYPE_UNSPECIFIED|
|type|PROBABILITY|
|type|STD_DEV_SCORE|
|type|PERCENTILE|
|type|RAW|

<h2 id="tocS_SpanScore">SpanScore</h2>
<!-- backwards compatibility -->
<a id="schemaspanscore"></a>
<a id="schema_SpanScore"></a>
<a id="tocSspanscore"></a>
<a id="tocsspanscore"></a>

```json
{
  "begin": 0,
  "end": 0,
  "score": {
    "type": "SCORE_TYPE_UNSPECIFIED",
    "value": 0
  }
}
```

This is a single score for a given span of text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|begin|integer(int32)|false|none|"begin" and "end" describe the span of the original text that the attribute score applies to. The values are the UTF-16 codepoint range. "end" is exclusive. For example, with the text "Hi there", the begin/end pair (0,2) describes the text "Hi". If "begin" and "end" are unset, the score applies to the full text.|
|end|integer(int32)|false|none|none|
|score|[Score](#schemascore)|false|none|The score value.|

<h2 id="tocS_SuggestCommentScoreRequest">SuggestCommentScoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemasuggestcommentscorerequest"></a>
<a id="schema_SuggestCommentScoreRequest"></a>
<a id="tocSsuggestcommentscorerequest"></a>
<a id="tocssuggestcommentscorerequest"></a>

```json
{
  "attributeScores": {
    "property1": {
      "spanScores": [
        {
          "begin": 0,
          "end": 0,
          "score": {
            "type": "SCORE_TYPE_UNSPECIFIED",
            "value": 0
          }
        }
      ],
      "summaryScore": {
        "type": "SCORE_TYPE_UNSPECIFIED",
        "value": 0
      }
    },
    "property2": {
      "spanScores": [
        {
          "begin": 0,
          "end": 0,
          "score": {
            "type": "SCORE_TYPE_UNSPECIFIED",
            "value": 0
          }
        }
      ],
      "summaryScore": {
        "type": "SCORE_TYPE_UNSPECIFIED",
        "value": 0
      }
    }
  },
  "clientToken": "string",
  "comment": {
    "text": "string",
    "type": "TEXT_TYPE_UNSPECIFIED"
  },
  "communityId": "string",
  "context": {
    "articleAndParentComment": {
      "article": {
        "text": "string",
        "type": "TEXT_TYPE_UNSPECIFIED"
      },
      "parentComment": {
        "text": "string",
        "type": "TEXT_TYPE_UNSPECIFIED"
      }
    },
    "entries": [
      {
        "text": "string",
        "type": "TEXT_TYPE_UNSPECIFIED"
      }
    ]
  },
  "languages": [
    "string"
  ],
  "sessionId": "string"
}
```

The comment score suggestion request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeScores|object|false|none|Attribute scores for the comment. The map keys are attribute names, same as the requested_attribute field in AnalyzeCommentRequest (for example "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc.). This field has the same type as the `attribute_scores` field in AnalyzeCommentResponse. To specify an overall attribute score for the entire comment as a whole, use the `summary_score` field of the mapped AttributeScores object. To specify scores on specific subparts of the comment, use the `span_scores` field. All SpanScore objects must have begin and end fields set. All Score objects must be explicitly set (for binary classification, use the score values 0 and 1). If Score objects don't include a ScoreType, `PROBABILITY` is assumed. `attribute_scores` must not be empty. The mapped AttributeScores objects also must not be empty. An `INVALID_ARGUMENT` error is returned for all malformed requests.|
|clientToken|string|false|none|Opaque token that is echoed from the request to the response.|
|comment|[TextEntry](#schematextentry)|false|none|The comment being scored.|
|communityId|string|false|none|Optional identifier associating this comment score suggestion with a particular sub-community. Different communities may have different norms and rules. Specifying this value enables training community-specific models.|
|context|[Context](#schemacontext)|false|none|The context of the comment.|
|languages|[string]|false|none|The language(s) of the comment and context. If none are specified, we attempt to automatically detect the language. Both ISO and BCP-47 language codes are accepted.|
|sessionId|string|false|none|Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer.|

<h2 id="tocS_SuggestCommentScoreResponse">SuggestCommentScoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemasuggestcommentscoreresponse"></a>
<a id="schema_SuggestCommentScoreResponse"></a>
<a id="tocSsuggestcommentscoreresponse"></a>
<a id="tocssuggestcommentscoreresponse"></a>

```json
{
  "clientToken": "string",
  "detectedLanguages": [
    "string"
  ],
  "requestedLanguages": [
    "string"
  ]
}
```

The comment score suggestion response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|string|false|none|Same token from the original SuggestCommentScoreRequest.|
|detectedLanguages|[string]|false|none|The list of languages detected from the comment text.|
|requestedLanguages|[string]|false|none|The list of languages provided in the request.|

<h2 id="tocS_TextEntry">TextEntry</h2>
<!-- backwards compatibility -->
<a id="schematextentry"></a>
<a id="schema_TextEntry"></a>
<a id="tocStextentry"></a>
<a id="tocstextentry"></a>

```json
{
  "text": "string",
  "type": "TEXT_TYPE_UNSPECIFIED"
}
```

Represents a body of text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|UTF-8 encoded text.|
|type|string|false|none|Type of the text field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TEXT_TYPE_UNSPECIFIED|
|type|PLAIN_TEXT|
|type|HTML|
