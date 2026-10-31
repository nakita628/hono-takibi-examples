import { createRoute, z } from '@hono/zod-openapi'

const ActivateBiddingFunctionRequestSchema = z
  .object({})
  .openapi({ description: 'The request to activate a bidding function.' })
  .openapi('ActivateBiddingFunctionRequest')

const ArchiveBiddingFunctionRequestSchema = z
  .object({})
  .openapi({ description: 'A request to archive a bidding function.' })
  .openapi('ArchiveBiddingFunctionRequest')

const BiddingFunctionSchema = z
  .object({
    biddingFunction: z
      .string()
      .exactOptional()
      .openapi({ description: 'The raw Javascript source code of the bidding function.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the bidding function that must follow the pattern: `bidders/{bidder_account_id}/biddingFunctions/{bidding_function_name}`.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'ARCHIVED'])
      .exactOptional()
      .openapi({ description: 'Output only. The state of the bidding function.', readOnly: true }),
    type: z
      .enum([
        'FUNCTION_TYPE_UNSPECIFIED',
        'TURTLEDOVE_SIMULATION_BIDDING_FUNCTION',
        'FLEDGE_BIDDING_FUNCTION',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the bidding function to be created.' }),
  })
  .openapi({
    description:
      'The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow.',
    required: [],
  })
  .openapi('BiddingFunction')

const ListBiddingFunctionsResponseSchema = z
  .object({
    biddingFunctions: z
      .array(BiddingFunctionSchema)
      .exactOptional()
      .openapi({ description: "A list of a bidder's bidding functions." }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token which can be passed to a subsequent call to the `ListBiddingFunctions` method to retrieve the next page of results in ListBiddingFunctionsRequest.pageToken.',
      }),
  })
  .openapi({
    description: "A response containing a list of a bidder's bidding functions.",
    required: [],
  })
  .openapi('ListBiddingFunctionsResponse')

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
        'https://www.googleapis.com/auth/realtime-bidding':
          'See, create, edit, and delete your Authorized Buyers and Open Bidding account entities',
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
        'https://www.googleapis.com/auth/realtime-bidding':
          'See, create, edit, and delete your Authorized Buyers and Open Bidding account entities',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1alphaNameActivateRoute = createRoute({
  method: 'post',
  path: '/v1alpha/{name}:activate',
  tags: ['bidders'],
  description:
    'Activates an existing bidding function. An activated function is available for invocation for the server-side TURTLEDOVE simulations.',
  operationId: 'realtimebidding.bidders.biddingFunctions.activate',
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
            description:
              'Required. The name of the bidding function to activate. Format: `bidders/{bidder_account_id}/biddingFunction/{bidding_function_name}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ActivateBiddingFunctionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BiddingFunctionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/realtime-bidding'],
      Oauth2c: ['https://www.googleapis.com/auth/realtime-bidding'],
    },
  ],
})

export const postV1alphaNameArchiveRoute = createRoute({
  method: 'post',
  path: '/v1alpha/{name}:archive',
  tags: ['bidders'],
  description:
    'Archives an existing bidding function. An archived function will not be available for function invocation for the server-side TURTLEDOVE simulations unless it is activated.',
  operationId: 'realtimebidding.bidders.biddingFunctions.archive',
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
            description:
              'Required. The name of the bidding function to archive. Format: `bidders/{bidder_account_id}/biddingFunction/{bidding_function_name}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ArchiveBiddingFunctionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BiddingFunctionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/realtime-bidding'],
      Oauth2c: ['https://www.googleapis.com/auth/realtime-bidding'],
    },
  ],
})

export const getV1alphaParentBiddingFunctionsRoute = createRoute({
  method: 'get',
  path: '/v1alpha/{parent}/biddingFunctions',
  tags: ['bidders'],
  description: 'Lists the bidding functions that a bidder currently has registered.',
  operationId: 'realtimebidding.bidders.biddingFunctions.list',
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
            description: 'The maximum number of bidding functions to return.',
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
              'A token identifying a page of results the server should return. This value is received from a previous `ListBiddingFunctions` call in ListBiddingFunctionsResponse.nextPageToken.',
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
              'Required. Name of the bidder whose bidding functions will be listed. Format: `bidders/{bidder_account_id}`',
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
      content: { 'application/json': { schema: ListBiddingFunctionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/realtime-bidding'],
      Oauth2c: ['https://www.googleapis.com/auth/realtime-bidding'],
    },
  ],
})

export const postV1alphaParentBiddingFunctionsRoute = createRoute({
  method: 'post',
  path: '/v1alpha/{parent}/biddingFunctions',
  tags: ['bidders'],
  description: 'Creates a new bidding function.',
  operationId: 'realtimebidding.bidders.biddingFunctions.create',
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
              'Required. The name of the bidder for which to create the bidding function. Format: `bidders/{bidderAccountId}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BiddingFunctionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BiddingFunctionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/realtime-bidding'],
      Oauth2c: ['https://www.googleapis.com/auth/realtime-bidding'],
    },
  ],
})
