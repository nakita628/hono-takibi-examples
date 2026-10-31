import { createRoute, z } from '@hono/zod-openapi'

const GoogleSearchIdeahubV1alphaAvailableLocaleSchema = z
  .object({
    locale: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string in BCP 47 format, without a resource prefix.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string in BCP 47 format, prefixed with the platform and property name, and "locales/". Format: platforms/{platform}/properties/{property}/locales/{locale}',
      }),
  })
  .openapi({
    description: 'Represents locales that are available for a web property.',
    required: [],
  })
  .openapi('GoogleSearchIdeahubV1alphaAvailableLocale')

const GoogleSearchIdeahubV1alphaTopicSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'String displayed to the creator indicating the name of the Topic.',
      }),
    mid: z.string().exactOptional().openapi({ description: 'The mID of the topic.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the topic. Format: topics/{topic}' }),
  })
  .openapi({
    description:
      'Represents a Topic umbrella for a list of questions that a Creator may want to respond to.',
    required: [],
  })
  .openapi('GoogleSearchIdeahubV1alphaTopic')

const GoogleSearchIdeahubV1alphaIdeaSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the idea. Format: ideas/{ideaId}' }),
    text: z.string().exactOptional().openapi({ description: 'The idea’s text.' }),
    topics: z
      .array(GoogleSearchIdeahubV1alphaTopicSchema)
      .exactOptional()
      .openapi({ description: 'The Topics that match the idea.' }),
  })
  .openapi({ description: 'A single Idea that we want to show the end user.', required: [] })
  .openapi('GoogleSearchIdeahubV1alphaIdea')

const GoogleSearchIdeahubV1alphaIdeaActivitySchema = z
  .object({
    ideas: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The Idea IDs for this entry. If empty, topics should be set.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for the idea activity. The name is ignored when creating an idea activity. Format: platforms/{platform}/properties/{property}/ideaActivities/{idea_activity}',
      }),
    topics: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The Topic IDs for this entry. If empty, ideas should be set.' }),
    type: z
      .enum([
        'TYPE_UNSPECIFIED',
        'POST_DRAFTED',
        'POST_PUBLISHED',
        'POST_DELETED',
        'POST_UNPUBLISHED',
      ])
      .exactOptional()
      .openapi({ description: 'The type of activity performed.' }),
    uri: z.string().exactOptional().openapi({ description: 'The uri the activity relates to.' }),
  })
  .openapi({ description: 'An idea activity entry.', required: [] })
  .openapi('GoogleSearchIdeahubV1alphaIdeaActivity')

const GoogleSearchIdeahubV1alphaIdeaStateSchema = z
  .object({
    dismissed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the idea is dismissed.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for the idea state. Format: platforms/{platform}/properties/{property}/ideaStates/{idea_state}',
      }),
    saved: z.boolean().exactOptional().openapi({ description: 'Whether the idea is saved.' }),
  })
  .openapi({ description: 'Represents idea state specific to a web property.', required: [] })
  .openapi('GoogleSearchIdeahubV1alphaIdeaState')

const GoogleSearchIdeahubV1alphaListAvailableLocalesResponseSchema = z
  .object({
    availableLocales: z
      .array(GoogleSearchIdeahubV1alphaAvailableLocaleSchema)
      .exactOptional()
      .openapi({ description: 'Locales for which ideas are available for the given Creator.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({
    description:
      'Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.',
    required: [],
  })
  .openapi('GoogleSearchIdeahubV1alphaListAvailableLocalesResponse')

const GoogleSearchIdeahubV1alphaListIdeasResponseSchema = z
  .object({
    ideas: z
      .array(GoogleSearchIdeahubV1alphaIdeaSchema)
      .exactOptional()
      .openapi({ description: 'Results for the ListIdeasRequest.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used to fetch the next page in a subsequent request.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleSearchIdeahubV1alphaListIdeasResponse')

const GoogleSearchIdeahubV1alphaTopicStateSchema = z
  .object({
    dismissed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the topic is dismissed.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for the topic state. Format: platforms/{platform}/properties/{property}/topicStates/{topic_state}',
      }),
    saved: z.boolean().exactOptional().openapi({ description: 'Whether the topic is saved.' }),
  })
  .openapi({ description: 'Represents topic state specific to a web property.', required: [] })
  .openapi('GoogleSearchIdeahubV1alphaTopicState')

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

export const getV1alphaIdeasRoute = createRoute({
  method: 'get',
  path: '/v1alpha/ideas',
  tags: ['ideas'],
  description: 'List ideas for a given Creator and filter and sort options.',
  operationId: 'ideahub.ideas.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions are implicitly combined, as if the `AND` operator was always used. The `OR` operator is currently unsupported. * Supported functions: - `saved(bool)`: If set to true, fetches only saved ideas. If set to false, fetches all except saved ideas. Can't be simultaneously used with `dismissed(bool)`. - `dismissed(bool)`: If set to true, fetches only dismissed ideas. Can't be simultaneously used with `saved(bool)`. The `false` value is currently unsupported. Examples: * `saved(true)` * `saved(false)` * `dismissed(true)` The length of this field should be no more than 500 characters.",
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
            description: 'Order semantics described below.',
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
              'The maximum number of ideas per page. If unspecified, at most 10 ideas will be returned. The maximum value is 2000; values above 2000 will be coerced to 2000.',
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
            description: 'Used to fetch next page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If defined, specifies the creator for which to filter by. Format: publishers/{publisher}/properties/{property}',
            in: 'query',
            name: 'parent',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleSearchIdeahubV1alphaListIdeasResponseSchema },
      },
    },
  },
})

export const patchV1alphaNameRoute = createRoute({
  method: 'patch',
  path: '/v1alpha/{name}',
  tags: ['platforms'],
  description: 'Update a topic state resource.',
  operationId: 'ideahub.platforms.properties.topicStates.patch',
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
            description: 'The list of fields to be updated.',
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
              'Unique identifier for the topic state. Format: platforms/{platform}/properties/{property}/topicStates/{topic_state}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleSearchIdeahubV1alphaTopicStateSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleSearchIdeahubV1alphaTopicStateSchema } },
    },
  },
})

export const postV1alphaParentIdeaActivitiesRoute = createRoute({
  method: 'post',
  path: '/v1alpha/{parent}/ideaActivities',
  tags: ['platforms'],
  description: 'Creates an idea activity entry.',
  operationId: 'ideahub.platforms.properties.ideaActivities.create',
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
            description:
              'Required. The parent resource where this idea activity will be created. Format: platforms/{platform}/property/{property}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleSearchIdeahubV1alphaIdeaActivitySchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleSearchIdeahubV1alphaIdeaActivitySchema } },
    },
  },
})

export const getV1alphaParentIdeasRoute = createRoute({
  method: 'get',
  path: '/v1alpha/{parent}/ideas',
  tags: ['platforms'],
  description: 'List ideas for a given Creator and filter and sort options.',
  operationId: 'ideahub.platforms.properties.ideas.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions are implicitly combined, as if the `AND` operator was always used. The `OR` operator is currently unsupported. * Supported functions: - `saved(bool)`: If set to true, fetches only saved ideas. If set to false, fetches all except saved ideas. Can't be simultaneously used with `dismissed(bool)`. - `dismissed(bool)`: If set to true, fetches only dismissed ideas. Can't be simultaneously used with `saved(bool)`. The `false` value is currently unsupported. Examples: * `saved(true)` * `saved(false)` * `dismissed(true)` The length of this field should be no more than 500 characters.",
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
            description: 'Order semantics described below.',
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
              'The maximum number of ideas per page. If unspecified, at most 10 ideas will be returned. The maximum value is 2000; values above 2000 will be coerced to 2000.',
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
            description: 'Used to fetch next page.',
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
            description:
              'If defined, specifies the creator for which to filter by. Format: publishers/{publisher}/properties/{property}',
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
      content: {
        'application/json': { schema: GoogleSearchIdeahubV1alphaListIdeasResponseSchema },
      },
    },
  },
})

export const getV1alphaParentLocalesRoute = createRoute({
  method: 'get',
  path: '/v1alpha/{parent}/locales',
  tags: ['platforms'],
  description: 'Returns which locales ideas are available in for a given Creator.',
  operationId: 'ideahub.platforms.properties.locales.list',
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
              'The maximum number of locales to return. The service may return fewer than this value. If unspecified, at most 100 locales will be returned. The maximum value is 100; values above 100 will be coerced to 100.',
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
            description:
              'A page token, received from a previous `ListAvailableLocales` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAvailableLocales` must match the call that provided the page token.',
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
            description:
              'Required. The web property to check idea availability for Format: platforms/{platform}/property/{property}',
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
      content: {
        'application/json': {
          schema: GoogleSearchIdeahubV1alphaListAvailableLocalesResponseSchema,
        },
      },
    },
  },
})
