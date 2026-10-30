import { createRoute, z } from '@hono/zod-openapi'

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field or parameter in which the error was found.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({ description: 'further information about the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const ExternalSettingsSchema = z
  .object({
    createMeetingUrl: z
      .string()
      .openapi({
        description:
          'A string representing the URL used to create a new meeting. This property is required.',
        example: null,
      }),
    deleteMeetingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the URL used to delete a meeting.',
        example: null,
      }),
    fetchAccountsUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the URI used to fetch account information.',
        example: null,
      }),
    updateMeetingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the URL used to update an existing meeting.',
        example: null,
      }),
    userVerifyUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: "A string representing the URL used to verify a user's identity.",
        example: null,
      }),
  })
  .openapi({ required: ['createMeetingUrl'], example: null })
  .openapi('ExternalSettings')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: {},
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCrmExtensionsVideoconferencing202609SettingsAppIdRoute = createRoute({
  method: 'get',
  path: '/crm/extensions/videoconferencing/2026-09/settings/{appId}',
  tags: ['Basic'],
  summary: 'Get settings',
  description: 'Fetch video conference extension settings for your app',
  operationId: 'get-/crm/extensions/videoconferencing/2026-09/settings/{appId}_getById',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app whose video conferencing settings you want to retrieve. It should be an integer.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ExternalSettingsSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const putCrmExtensionsVideoconferencing202609SettingsAppIdRoute = createRoute({
  method: 'put',
  path: '/crm/extensions/videoconferencing/2026-09/settings/{appId}',
  tags: ['Basic'],
  summary: 'Create or update settings',
  description: 'Create or update video conference extension settings for your app',
  operationId: 'put-/crm/extensions/videoconferencing/2026-09/settings/{appId}_replace',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app whose video conferencing settings are to be updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: ExternalSettingsSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ExternalSettingsSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const deleteCrmExtensionsVideoconferencing202609SettingsAppIdRoute = createRoute({
  method: 'delete',
  path: '/crm/extensions/videoconferencing/2026-09/settings/{appId}',
  tags: ['Basic'],
  summary: 'Delete settings',
  description: 'Delete video conference extension settings for your app',
  operationId: 'delete-/crm/extensions/videoconferencing/2026-09/settings/{appId}_archive',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app whose video conferencing settings are to be deleted. It must be an integer.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ developer_hapikey: [] }],
})
