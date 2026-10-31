import { createRoute, z } from '@hono/zod-openapi'

const AuthorSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the user' }),
    profilePhotoUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The profile photo URI of the user.' }),
    type: z
      .enum(['AUTHOR_TYPE_UNSPECIFIED', 'REGULAR_USER', 'LOCAL_GUIDE', 'MERCHANT'])
      .exactOptional()
      .openapi({ description: 'The type of user the author is.' }),
  })
  .openapi({ description: 'Represents the author of a question or answer', required: [] })
  .openapi('Author')

const AnswerSchema = z
  .object({
    author: AuthorSchema.exactOptional().openapi({
      description:
        'Output only. The author of the answer. Will only be set during list operations.',
      readOnly: true,
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp for when the answer was written. Only retrieved during ListResponse fetching.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique name for the answer locations/*/questions/*/answers/*',
        readOnly: true,
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The text of the answer. It should contain at least one non-whitespace character. The maximum length is 4096 characters.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp for when the answer was last modified.',
        readOnly: true,
      }),
    upvoteCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of upvotes for the answer.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Represents an answer to a question', required: [] })
  .openapi('Answer')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const ListAnswersResponseSchema = z
  .object({
    answers: z
      .array(AnswerSchema)
      .exactOptional()
      .openapi({ description: 'The requested answers.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the number of answers exceeds the requested max page size, this field is populated with a token to fetch the next page of answers on a subsequent call. If there are no more answers, this field is not present in the response.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The total number of answers posted for this question across all pages.',
      }),
  })
  .openapi({ description: 'Response message for QuestionsAndAnswers.ListAnswers', required: [] })
  .openapi('ListAnswersResponse')

const QuestionSchema = z
  .object({
    author: AuthorSchema.exactOptional().openapi({
      description: 'Output only. The author of the question.',
      readOnly: true,
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp for when the question was written.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The unique name for the question. locations/*/questions/* This field will be ignored if set during question creation.',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The text of the question. It should contain at least three words and the total length should be greater than or equal to 10 characters. The maximum length is 4096 characters.',
      }),
    topAnswers: z
      .array(AnswerSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. A list of answers to the question, sorted by upvotes. This may not be a complete list of answers depending on the request parameters (answers_per_question)',
        readOnly: true,
      }),
    totalAnswerCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The total number of answers posted for this question.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp for when the question was last modified.',
        readOnly: true,
      }),
    upvoteCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of upvotes for the question.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Represents a single question and some of its answers.', required: [] })
  .openapi('Question')

const ListQuestionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the number of questions exceeds the requested max page size, this field is populated with a token to fetch the next page of questions on a subsequent call. If there are no more questions, this field is not present in the response.',
      }),
    questions: z
      .array(QuestionSchema)
      .exactOptional()
      .openapi({ description: 'The requested questions,' }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The total number of questions posted for this location across all pages.',
      }),
  })
  .openapi({ description: 'Response message for QuestionsAndAnswers.ListQuestions', required: [] })
  .openapi('ListQuestionsResponse')

const UpsertAnswerRequestSchema = z
  .object({
    answer: AnswerSchema.exactOptional().openapi({ description: 'Required. The new answer.' }),
  })
  .openapi({ description: 'Request message for QuestionsAndAnswers.UpsertAnswer', required: [] })
  .openapi('UpsertAnswerRequest')

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

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['locations'],
  description: 'Deletes a specific question written by the current user.',
  operationId: 'mybusinessqanda.locations.questions.delete',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the question to delete.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['locations'],
  description: 'Updates a specific question written by the current user.',
  operationId: 'mybusinessqanda.locations.questions.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The specific fields to update. Only question text can be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Immutable. The unique name for the question. locations/*/questions/* This field will be ignored if set during question creation.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QuestionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QuestionSchema } },
    },
  },
})

export const deleteV1NameAnswersDeleteRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}/answers:delete',
  tags: ['locations'],
  description: 'Deletes the answer written by the current user to a question.',
  operationId: 'mybusinessqanda.locations.questions.answers.delete',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the question to delete an answer for.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const getV1ParentRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}',
  tags: ['locations'],
  description:
    'Returns the paginated list of questions and some of its answers for a specified location. This operation is only valid if the specified location is verified.',
  operationId: 'mybusinessqanda.locations.questions.list',
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
      answersPerQuestion: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. How many answers to fetch per question. The default and maximum `answers_per_question` values are 10.',
            in: 'query',
            name: 'answersPerQuestion',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A filter constraining the questions to return. The only filter currently supported is "ignore_answered=true"',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. The order to return the questions. Valid options include 'update_time desc' and 'upvote_count desc', which will return the questions sorted descendingly by the requested field. The default sort order is 'update_time desc'.",
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. How many questions to fetch per page. The default and maximum `page_size` values are 10.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. If specified, the next page of questions is retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the location to fetch questions for.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListQuestionsResponseSchema } },
    },
  },
})

export const postV1ParentRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}',
  tags: ['locations'],
  description: 'Adds a question for the specified location.',
  operationId: 'mybusinessqanda.locations.questions.create',
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
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the location to write a question for.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QuestionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QuestionSchema } },
    },
  },
})

export const getV1ParentAnswersRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/answers',
  tags: ['locations'],
  description: 'Returns the paginated list of answers for a specified question.',
  operationId: 'mybusinessqanda.locations.questions.answers.list',
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
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. The order to return the answers. Valid options include 'update_time desc' and 'upvote_count desc', which will return the answers sorted descendingly by the requested field. The default sort order is 'update_time desc'.",
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. How many answers to fetch per page. The default and maximum `page_size` values are 10.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. If specified, the next page of answers is retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the question to fetch answers for.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAnswersResponseSchema } },
    },
  },
})

export const postV1ParentAnswersUpsertRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/answers:upsert',
  tags: ['locations'],
  description:
    'Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.',
  operationId: 'mybusinessqanda.locations.questions.answers.upsert',
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
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the question to write an answer for.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpsertAnswerRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnswerSchema } },
    },
  },
})
