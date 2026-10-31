import { createRoute, z } from '@hono/zod-openapi'

const TextEntrySchema = z
  .object({
    text: z.string().exactOptional().openapi({ description: 'UTF-8 encoded text.' }),
    type: z
      .enum(['TEXT_TYPE_UNSPECIFIED', 'PLAIN_TEXT', 'HTML'])
      .exactOptional()
      .openapi({ description: 'Type of the text field.' }),
  })
  .openapi({ description: 'Represents a body of text.', required: [] })
  .openapi('TextEntry')

const ArticleAndParentCommentSchema = z
  .object({
    article: TextEntrySchema.exactOptional().openapi({
      description:
        'The source content about which the comment was made (article text, article summary, video transcript, etc).',
    }),
    parentComment: TextEntrySchema.exactOptional().openapi({
      description:
        'Refers to text that is a direct parent of the source comment, such as in a one-deep threaded message board. This field will only be present for comments that are replies to other comments and will not be populated for direct comments on the article_text.',
    }),
  })
  .openapi({
    description:
      'A type of context specific to a comment left on a single-threaded comment message board, where comments are either a top level comment or the child of a top level comment.',
    required: [],
  })
  .openapi('ArticleAndParentComment')

const ContextSchema = z
  .object({
    articleAndParentComment: ArticleAndParentCommentSchema.exactOptional().openapi({
      description:
        'Information about the source for which the original comment was made, and any parent comment info.',
    }),
    entries: z
      .array(TextEntrySchema)
      .exactOptional()
      .openapi({
        description: 'A list of messages. For example, a linear comments section or forum thread.',
      }),
  })
  .openapi({
    description:
      'Context is typically something that a Comment is referencing or replying to (such as an article, or previous comment). Note: Populate only ONE OF the following fields. The oneof syntax cannot be used because that would require nesting entries inside another message and breaking backwards compatibility. The server will return an error if more than one of the following fields is present.',
    required: [],
  })
  .openapi('Context')

const AttributeParametersSchema = z
  .object({
    scoreThreshold: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "Don't return scores for this attribute that are below this threshold. If unset, a default threshold will be applied. A FloatValue wrapper is used to distinguish between 0 vs. default/unset.",
      }),
    scoreType: z
      .enum(['SCORE_TYPE_UNSPECIFIED', 'PROBABILITY', 'STD_DEV_SCORE', 'PERCENTILE', 'RAW'])
      .exactOptional()
      .openapi({
        description: 'What type of scores to return. If unset, defaults to probability scores.',
      }),
  })
  .openapi({ description: 'Configurable parameters for attribute scoring.', required: [] })
  .openapi('AttributeParameters')

const AnalyzeCommentRequestSchema = z
  .object({
    clientToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Opaque token that is echoed from the request to the response.' }),
    comment: TextEntrySchema.exactOptional().openapi({ description: 'The comment to analyze.' }),
    communityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional identifier associating this AnalyzeCommentRequest with a particular client's community. Different communities may have different norms and rules. Specifying this value enables us to explore building community-specific models for clients.",
      }),
    context: ContextSchema.exactOptional().openapi({ description: 'The context of the comment.' }),
    doNotStore: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Do not store the comment or context sent in this request. By default, the service may store comments/context for debugging purposes.',
      }),
    dropUnsupportedAttributes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If specified, any requested attribute that is requested but not supported for the language detected will be dropped from the returned scores instead of returning an error.',
      }),
    languages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The language(s) of the comment and context. If none are specified, we attempt to automatically detect the language. Specifying multiple languages means the text contains multiple lanugages. Both ISO and BCP-47 language codes are accepted. The server returns an error if no language was specified and language detection fails. The server also returns an error if the languages (either specified by the caller, or auto-detected) are not *all* supported by the service.',
      }),
    requestedAttributes: z
      .record(z.string(), AttributeParametersSchema)
      .exactOptional()
      .openapi({
        description:
          'Specification of requested attributes. The AttributeParameters serve as configuration for each associated attribute. The map keys are attribute names. The available attributes may be different on each RFE installation, and can be seen by calling ListAttributes (see above). For the prod installation, known as Perspective API, see https://developers.perspectiveapi.com/s/about-the-api-model-cards.',
      }),
    sessionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer.',
      }),
    spanAnnotations: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'An advisory parameter that will return span annotations if the model is capable of providing scores with sub-comment resolution. This will likely increase the size of the returned message.',
      }),
  })
  .openapi({ description: 'The comment analysis request message. Next ID: 11', required: [] })
  .openapi('AnalyzeCommentRequest')

const ScoreSchema = z
  .object({
    type: z
      .enum(['SCORE_TYPE_UNSPECIFIED', 'PROBABILITY', 'STD_DEV_SCORE', 'PERCENTILE', 'RAW'])
      .exactOptional()
      .openapi({ description: 'The type of the above value.' }),
    value: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Score value. Semantics described by type below.' }),
  })
  .openapi({
    description: 'Analysis scores are described by a value and a ScoreType.',
    required: [],
  })
  .openapi('Score')

const SpanScoreSchema = z
  .object({
    begin: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '"begin" and "end" describe the span of the original text that the attribute score applies to. The values are the UTF-16 codepoint range. "end" is exclusive. For example, with the text "Hi there", the begin/end pair (0,2) describes the text "Hi". If "begin" and "end" are unset, the score applies to the full text.',
      }),
    end: z.int32().exactOptional(),
    score: ScoreSchema.exactOptional().openapi({ description: 'The score value.' }),
  })
  .openapi({ description: 'This is a single score for a given span of text.', required: [] })
  .openapi('SpanScore')

const AttributeScoresSchema = z
  .object({
    spanScores: z
      .array(SpanScoreSchema)
      .exactOptional()
      .openapi({ description: 'Per-span scores.' }),
    summaryScore: ScoreSchema.exactOptional().openapi({
      description: 'Overall score for comment as a whole.',
    }),
  })
  .openapi({
    description:
      'This holds score values for a single attribute. It contains both per-span scores as well as an overall summary score..',
    required: [],
  })
  .openapi('AttributeScores')

const AnalyzeCommentResponseSchema = z
  .object({
    attributeScores: z
      .record(z.string(), AttributeScoresSchema)
      .exactOptional()
      .openapi({
        description:
          'Scores for the requested attributes. The map keys are attribute names (same as the requested_attribute field in AnalyzeCommentRequest, for example "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc).',
      }),
    clientToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Same token from the original AnalyzeCommentRequest.' }),
    detectedLanguages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Contains the languages detected from the text content, sorted in order of likelihood.',
      }),
    languages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The language(s) used by CommentAnalyzer service to choose which Model to use when analyzing the comment. Might better be called "effective_languages". The logic used to make the choice is as follows: if !Request.languages.empty() effective_languages = Request.languages else effective_languages = detected_languages[0]',
      }),
  })
  .openapi({ description: 'The comment analysis response message.', required: [] })
  .openapi('AnalyzeCommentResponse')

const SuggestCommentScoreRequestSchema = z
  .object({
    attributeScores: z
      .record(z.string(), AttributeScoresSchema)
      .exactOptional()
      .openapi({
        description:
          'Attribute scores for the comment. The map keys are attribute names, same as the requested_attribute field in AnalyzeCommentRequest (for example "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc.). This field has the same type as the `attribute_scores` field in AnalyzeCommentResponse. To specify an overall attribute score for the entire comment as a whole, use the `summary_score` field of the mapped AttributeScores object. To specify scores on specific subparts of the comment, use the `span_scores` field. All SpanScore objects must have begin and end fields set. All Score objects must be explicitly set (for binary classification, use the score values 0 and 1). If Score objects don\'t include a ScoreType, `PROBABILITY` is assumed. `attribute_scores` must not be empty. The mapped AttributeScores objects also must not be empty. An `INVALID_ARGUMENT` error is returned for all malformed requests.',
      }),
    clientToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Opaque token that is echoed from the request to the response.' }),
    comment: TextEntrySchema.exactOptional().openapi({ description: 'The comment being scored.' }),
    communityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional identifier associating this comment score suggestion with a particular sub-community. Different communities may have different norms and rules. Specifying this value enables training community-specific models.',
      }),
    context: ContextSchema.exactOptional().openapi({ description: 'The context of the comment.' }),
    languages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The language(s) of the comment and context. If none are specified, we attempt to automatically detect the language. Both ISO and BCP-47 language codes are accepted.',
      }),
    sessionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer.',
      }),
  })
  .openapi({ description: 'The comment score suggestion request message.', required: [] })
  .openapi('SuggestCommentScoreRequest')

const SuggestCommentScoreResponseSchema = z
  .object({
    clientToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Same token from the original SuggestCommentScoreRequest.' }),
    detectedLanguages: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of languages detected from the comment text.' }),
    requestedLanguages: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of languages provided in the request.' }),
  })
  .openapi({ description: 'The comment score suggestion response message.', required: [] })
  .openapi('SuggestCommentScoreResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/userinfo.email':
          'See your primary Google Account email address',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/userinfo.email':
          'See your primary Google Account email address',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1alpha1CommentsAnalyzeRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/comments:analyze',
  tags: ['comments'],
  description: 'Analyzes the provided text and returns scores for requested attributes.',
  operationId: 'commentanalyzer.comments.analyze',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: AnalyzeCommentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnalyzeCommentResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1alpha1CommentsSuggestscoreRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/comments:suggestscore',
  tags: ['comments'],
  description: 'Suggest comment scores as training data.',
  operationId: 'commentanalyzer.comments.suggestscore',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: SuggestCommentScoreRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SuggestCommentScoreResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})
