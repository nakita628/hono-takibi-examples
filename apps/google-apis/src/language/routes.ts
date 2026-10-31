import { createRoute, z } from '@hono/zod-openapi'

const DocumentSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The content of the input in string format. Cloud audit logging exempt since it is based on user data.',
      }),
    gcsContentUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.',
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. [Language Support](https://cloud.google.com/natural-language/docs/languages) lists currently supported languages for each API method. If the language (either specified by the caller or automatically detected) is not supported by the called API method, an `INVALID_ARGUMENT` error is returned.',
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'PLAIN_TEXT', 'HTML'])
      .exactOptional()
      .openapi({
        description:
          'Required. If the type is not set or is `TYPE_UNSPECIFIED`, returns an `INVALID_ARGUMENT` error.',
      }),
  })
  .openapi({ description: 'Represents the input to API methods.', required: [] })
  .openapi('Document')

const AnalyzeEntitiesRequestSchema = z
  .object({
    document: DocumentSchema.exactOptional().openapi({ description: 'Input document.' }),
    encodingType: z
      .enum(['NONE', 'UTF8', 'UTF16', 'UTF32'])
      .exactOptional()
      .openapi({ description: 'The encoding type used by the API to calculate offsets.' }),
  })
  .openapi({ description: 'The entity analysis request message.', required: [] })
  .openapi('AnalyzeEntitiesRequest')

const TextSpanSchema = z
  .object({
    beginOffset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The API calculates the beginning offset of the content in the original document according to the EncodingType specified in the API request.',
      }),
    content: z.string().exactOptional().openapi({ description: 'The content of the output text.' }),
  })
  .openapi({ description: 'Represents an output piece of text.', required: [] })
  .openapi('TextSpan')

const EntityMentionSchema = z
  .object({
    text: TextSpanSchema.exactOptional().openapi({ description: 'The mention text.' }),
    type: z
      .enum(['TYPE_UNKNOWN', 'PROPER', 'COMMON'])
      .exactOptional()
      .openapi({ description: 'The type of the entity mention.' }),
  })
  .openapi({
    description:
      'Represents a mention for an entity in the text. Currently, proper noun mentions are supported.',
    required: [],
  })
  .openapi('EntityMention')

const EntitySchema = z
  .object({
    mentions: z
      .array(EntityMentionSchema)
      .exactOptional()
      .openapi({
        description:
          'The mentions of this entity in the input document. The API currently supports proper noun mentions.',
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Metadata associated with the entity. Currently, Wikipedia URLs and Knowledge Graph MIDs are provided, if available. The associated keys are "wikipedia_url" and "mid", respectively.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The representative name for the entity.' }),
    salience: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient.',
      }),
    type: z
      .enum([
        'UNKNOWN',
        'PERSON',
        'LOCATION',
        'ORGANIZATION',
        'EVENT',
        'WORK_OF_ART',
        'CONSUMER_GOOD',
        'OTHER',
      ])
      .exactOptional()
      .openapi({ description: 'The entity type.' }),
  })
  .openapi({
    description:
      'Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities.',
    required: [],
  })
  .openapi('Entity')

const AnalyzeEntitiesResponseSchema = z
  .object({
    entities: z
      .array(EntitySchema)
      .exactOptional()
      .openapi({ description: 'The recognized entities in the input document.' }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.',
      }),
  })
  .openapi({ description: 'The entity analysis response message.', required: [] })
  .openapi('AnalyzeEntitiesResponse')

const AnalyzeSentimentRequestSchema = z
  .object({
    document: DocumentSchema.exactOptional().openapi({ description: 'Input document.' }),
    encodingType: z
      .enum(['NONE', 'UTF8', 'UTF16', 'UTF32'])
      .exactOptional()
      .openapi({
        description:
          'The encoding type used by the API to calculate sentence offsets for the sentence sentiment.',
      }),
  })
  .openapi({ description: 'The sentiment analysis request message.', required: [] })
  .openapi('AnalyzeSentimentRequest')

const SentimentSchema = z
  .object({
    magnitude: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment regardless of score (positive or negative).',
      }),
    polarity: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'DEPRECATED FIELD - This field is being deprecated in favor of score. Please refer to our documentation at https://cloud.google.com/natural-language/docs for more information.',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).',
      }),
  })
  .openapi({
    description: 'Represents the feeling associated with the entire text or entities in the text.',
    required: [],
  })
  .openapi('Sentiment')

const SentenceSchema = z
  .object({
    sentiment: SentimentSchema.exactOptional().openapi({
      description:
        'For calls to AnalyzeSentiment or if AnnotateTextRequest.Features.extract_document_sentiment is set to true, this field will contain the sentiment for the sentence.',
    }),
    text: TextSpanSchema.exactOptional().openapi({ description: 'The sentence text.' }),
  })
  .openapi({ description: 'Represents a sentence in the input document.', required: [] })
  .openapi('Sentence')

const AnalyzeSentimentResponseSchema = z
  .object({
    documentSentiment: SentimentSchema.exactOptional().openapi({
      description: 'The overall sentiment of the input document.',
    }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.',
      }),
    sentences: z
      .array(SentenceSchema)
      .exactOptional()
      .openapi({ description: 'The sentiment for all the sentences in the document.' }),
  })
  .openapi({ description: 'The sentiment analysis response message.', required: [] })
  .openapi('AnalyzeSentimentResponse')

const AnalyzeSyntaxRequestSchema = z
  .object({
    document: DocumentSchema.exactOptional().openapi({ description: 'Input document.' }),
    encodingType: z
      .enum(['NONE', 'UTF8', 'UTF16', 'UTF32'])
      .exactOptional()
      .openapi({ description: 'The encoding type used by the API to calculate offsets.' }),
  })
  .openapi({ description: 'The syntax analysis request message.', required: [] })
  .openapi('AnalyzeSyntaxRequest')

const DependencyEdgeSchema = z
  .object({
    headTokenIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Represents the head of this token in the dependency tree. This is the index of the token which has an arc going to this token. The index is the position of the token in the array of tokens returned by the API method. If this token is a root token, then the `head_token_index` is its own index.',
      }),
    label: z
      .enum([
        'UNKNOWN',
        'ABBREV',
        'ACOMP',
        'ADVCL',
        'ADVMOD',
        'AMOD',
        'APPOS',
        'ATTR',
        'AUX',
        'AUXPASS',
        'CC',
        'CCOMP',
        'CONJ',
        'CSUBJ',
        'CSUBJPASS',
        'DEP',
        'DET',
        'DISCOURSE',
        'DOBJ',
        'EXPL',
        'GOESWITH',
        'IOBJ',
        'MARK',
        'MWE',
        'MWV',
        'NEG',
        'NN',
        'NPADVMOD',
        'NSUBJ',
        'NSUBJPASS',
        'NUM',
        'NUMBER',
        'P',
        'PARATAXIS',
        'PARTMOD',
        'PCOMP',
        'POBJ',
        'POSS',
        'POSTNEG',
        'PRECOMP',
        'PRECONJ',
        'PREDET',
        'PREF',
        'PREP',
        'PRONL',
        'PRT',
        'PS',
        'QUANTMOD',
        'RCMOD',
        'RCMODREL',
        'RDROP',
        'REF',
        'REMNANT',
        'REPARANDUM',
        'ROOT',
        'SNUM',
        'SUFF',
        'TMOD',
        'TOPIC',
        'VMOD',
        'VOCATIVE',
        'XCOMP',
        'SUFFIX',
        'TITLE',
        'ADVPHMOD',
        'AUXCAUS',
        'AUXVV',
        'DTMOD',
        'FOREIGN',
        'KW',
        'LIST',
        'NOMC',
        'NOMCSUBJ',
        'NOMCSUBJPASS',
        'NUMC',
        'COP',
        'DISLOCATED',
        'ASP',
        'GMOD',
        'GOBJ',
        'INFMOD',
        'MES',
        'NCOMP',
      ])
      .exactOptional()
      .openapi({ description: 'The parse label for the token.' }),
  })
  .openapi({
    description: 'Represents dependency parse tree information for a token.',
    required: [],
  })
  .openapi('DependencyEdge')

const PartOfSpeechSchema = z
  .object({
    aspect: z
      .enum(['ASPECT_UNKNOWN', 'PERFECTIVE', 'IMPERFECTIVE', 'PROGRESSIVE'])
      .exactOptional()
      .openapi({ description: 'The grammatical aspect.' }),
    case: z
      .enum([
        'CASE_UNKNOWN',
        'ACCUSATIVE',
        'ADVERBIAL',
        'COMPLEMENTIVE',
        'DATIVE',
        'GENITIVE',
        'INSTRUMENTAL',
        'LOCATIVE',
        'NOMINATIVE',
        'OBLIQUE',
        'PARTITIVE',
        'PREPOSITIONAL',
        'REFLEXIVE_CASE',
        'RELATIVE_CASE',
        'VOCATIVE',
      ])
      .exactOptional()
      .openapi({ description: 'The grammatical case.' }),
    form: z
      .enum([
        'FORM_UNKNOWN',
        'ADNOMIAL',
        'AUXILIARY',
        'COMPLEMENTIZER',
        'FINAL_ENDING',
        'GERUND',
        'REALIS',
        'IRREALIS',
        'SHORT',
        'LONG',
        'ORDER',
        'SPECIFIC',
      ])
      .exactOptional()
      .openapi({ description: 'The grammatical form.' }),
    gender: z
      .enum(['GENDER_UNKNOWN', 'FEMININE', 'MASCULINE', 'NEUTER'])
      .exactOptional()
      .openapi({ description: 'The grammatical gender.' }),
    mood: z
      .enum([
        'MOOD_UNKNOWN',
        'CONDITIONAL_MOOD',
        'IMPERATIVE',
        'INDICATIVE',
        'INTERROGATIVE',
        'JUSSIVE',
        'SUBJUNCTIVE',
      ])
      .exactOptional()
      .openapi({ description: 'The grammatical mood.' }),
    number: z
      .enum(['NUMBER_UNKNOWN', 'SINGULAR', 'PLURAL', 'DUAL'])
      .exactOptional()
      .openapi({ description: 'The grammatical number.' }),
    person: z
      .enum(['PERSON_UNKNOWN', 'FIRST', 'SECOND', 'THIRD', 'REFLEXIVE_PERSON'])
      .exactOptional()
      .openapi({ description: 'The grammatical person.' }),
    proper: z
      .enum(['PROPER_UNKNOWN', 'PROPER', 'NOT_PROPER'])
      .exactOptional()
      .openapi({ description: 'The grammatical properness.' }),
    reciprocity: z
      .enum(['RECIPROCITY_UNKNOWN', 'RECIPROCAL', 'NON_RECIPROCAL'])
      .exactOptional()
      .openapi({ description: 'The grammatical reciprocity.' }),
    tag: z
      .enum([
        'UNKNOWN',
        'ADJ',
        'ADP',
        'ADV',
        'CONJ',
        'DET',
        'NOUN',
        'NUM',
        'PRON',
        'PRT',
        'PUNCT',
        'VERB',
        'X',
        'AFFIX',
      ])
      .exactOptional()
      .openapi({ description: 'The part of speech tag.' }),
    tense: z
      .enum([
        'TENSE_UNKNOWN',
        'CONDITIONAL_TENSE',
        'FUTURE',
        'PAST',
        'PRESENT',
        'IMPERFECT',
        'PLUPERFECT',
      ])
      .exactOptional()
      .openapi({ description: 'The grammatical tense.' }),
    voice: z
      .enum(['VOICE_UNKNOWN', 'ACTIVE', 'CAUSATIVE', 'PASSIVE'])
      .exactOptional()
      .openapi({ description: 'The grammatical voice.' }),
  })
  .openapi({ description: 'Represents part of speech information for a token.', required: [] })
  .openapi('PartOfSpeech')

const TokenSchema = z
  .object({
    dependencyEdge: DependencyEdgeSchema.exactOptional().openapi({
      description: 'Dependency tree parse for this token.',
    }),
    lemma: z
      .string()
      .exactOptional()
      .openapi({
        description: '[Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token.',
      }),
    partOfSpeech: PartOfSpeechSchema.exactOptional().openapi({
      description: 'Parts of speech tag for this token.',
    }),
    text: TextSpanSchema.exactOptional().openapi({ description: 'The token text.' }),
  })
  .openapi({
    description: 'Represents the smallest syntactic building block of the text.',
    required: [],
  })
  .openapi('Token')

const AnalyzeSyntaxResponseSchema = z
  .object({
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.',
      }),
    sentences: z
      .array(SentenceSchema)
      .exactOptional()
      .openapi({ description: 'Sentences in the input document.' }),
    tokens: z
      .array(TokenSchema)
      .exactOptional()
      .openapi({
        description: 'Tokens, along with their syntactic information, in the input document.',
      }),
  })
  .openapi({ description: 'The syntax analysis response message.', required: [] })
  .openapi('AnalyzeSyntaxResponse')

const FeaturesSchema = z
  .object({
    extractDocumentSentiment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Extract document-level sentiment.' }),
    extractEntities: z.boolean().exactOptional().openapi({ description: 'Extract entities.' }),
    extractSyntax: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Extract syntax information.' }),
  })
  .openapi({
    description:
      'All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input.',
    required: [],
  })
  .openapi('Features')

const AnnotateTextRequestSchema = z
  .object({
    document: DocumentSchema.exactOptional().openapi({ description: 'Input document.' }),
    encodingType: z
      .enum(['NONE', 'UTF8', 'UTF16', 'UTF32'])
      .exactOptional()
      .openapi({ description: 'The encoding type used by the API to calculate offsets.' }),
    features: FeaturesSchema.exactOptional().openapi({ description: 'The enabled features.' }),
  })
  .openapi({
    description:
      'The request message for the text annotation API, which can perform multiple analysis types (sentiment, entities, and syntax) in one call.',
    required: [],
  })
  .openapi('AnnotateTextRequest')

const AnnotateTextResponseSchema = z
  .object({
    documentSentiment: SentimentSchema.exactOptional().openapi({
      description:
        'The overall sentiment for the document. Populated if the user enables AnnotateTextRequest.Features.extract_document_sentiment.',
    }),
    entities: z
      .array(EntitySchema)
      .exactOptional()
      .openapi({
        description:
          'Entities, along with their semantic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_entities.',
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.',
      }),
    sentences: z
      .array(SentenceSchema)
      .exactOptional()
      .openapi({
        description:
          'Sentences in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax.',
      }),
    tokens: z
      .array(TokenSchema)
      .exactOptional()
      .openapi({
        description:
          'Tokens, along with their syntactic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax.',
      }),
  })
  .openapi({ description: 'The text annotations response message.', required: [] })
  .openapi('AnnotateTextResponse')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

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
        'https://www.googleapis.com/auth/cloud-language':
          'Apply machine learning models to reveal the structure and meaning of text',
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
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
        'https://www.googleapis.com/auth/cloud-language':
          'Apply machine learning models to reveal the structure and meaning of text',
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1beta1DocumentsAnalyzeEntitiesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/documents:analyzeEntities',
  tags: ['documents'],
  description:
    'Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.',
  operationId: 'language.documents.analyzeEntities',
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
    body: { content: { 'application/json': { schema: AnalyzeEntitiesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnalyzeEntitiesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-language'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-language'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1DocumentsAnalyzeSentimentRoute = createRoute({
  method: 'post',
  path: '/v1beta1/documents:analyzeSentiment',
  tags: ['documents'],
  description: 'Analyzes the sentiment of the provided text.',
  operationId: 'language.documents.analyzeSentiment',
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
    body: { content: { 'application/json': { schema: AnalyzeSentimentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnalyzeSentimentResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-language'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-language'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1DocumentsAnalyzeSyntaxRoute = createRoute({
  method: 'post',
  path: '/v1beta1/documents:analyzeSyntax',
  tags: ['documents'],
  description:
    'Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.',
  operationId: 'language.documents.analyzeSyntax',
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
    body: { content: { 'application/json': { schema: AnalyzeSyntaxRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnalyzeSyntaxResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-language'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-language'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1DocumentsAnnotateTextRoute = createRoute({
  method: 'post',
  path: '/v1beta1/documents:annotateText',
  tags: ['documents'],
  description:
    'A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.',
  operationId: 'language.documents.annotateText',
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
    body: { content: { 'application/json': { schema: AnnotateTextRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnnotateTextResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-language'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-language'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
