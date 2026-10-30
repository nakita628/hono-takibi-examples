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
        example: { missingScopes: ['scope1', 'scope2'] },
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
  .openapi({ required: ['message'], example: null })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: { invalidPropertyName: ['propertyValue'], missingScopes: ['scope1', 'scope2'] },
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
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const TestListWidgetResponseSchema = z
  .object({ widgets: z.array(z.string().openapi({ example: null })).openapi({ example: null }) })
  .openapi({ required: ['widgets'], example: null })
  .openapi('TestListWidgetResponse')

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

export const getPublicApiVersioningTest202609WidgetsRoute = createRoute({
  method: 'get',
  path: '/public/api/versioning/test/2026-09/widgets',
  tags: ['Basic'],
  operationId: 'get-/public/api/versioning/test/2026-09/widgets',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: TestListWidgetResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postPublicApiVersioningTest202609WidgetsRoute = createRoute({
  method: 'post',
  path: '/public/api/versioning/test/2026-09/widgets',
  tags: ['Basic'],
  operationId: 'post-/public/api/versioning/test/2026-09/widgets',
  request: {
    body: {
      content: {
        'application/json': { schema: z.string().openapi({ example: null }), example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: z.string().openapi({ example: null }), example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getPublicApiVersioningTest202609WidgetsWidgetIdRoute = createRoute({
  method: 'get',
  path: '/public/api/versioning/test/2026-09/widgets/{widgetId}',
  tags: ['Basic'],
  operationId: 'get-/public/api/versioning/test/2026-09/widgets/{widgetId}',
  request: {
    params: z.object({
      widgetId: z
        .string()
        .openapi({
          param: {
            name: 'widgetId',
            in: 'path',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: z.string().openapi({ example: null }), example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const putPublicApiVersioningTest202609WidgetsWidgetIdRoute = createRoute({
  method: 'put',
  path: '/public/api/versioning/test/2026-09/widgets/{widgetId}',
  tags: ['Basic'],
  operationId: 'put-/public/api/versioning/test/2026-09/widgets/{widgetId}',
  request: {
    params: z.object({
      widgetId: z
        .string()
        .openapi({
          param: {
            name: 'widgetId',
            in: 'path',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: z.string().openapi({ example: null }), example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: z.string().openapi({ example: null }), example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const deletePublicApiVersioningTest202609WidgetsWidgetIdRoute = createRoute({
  method: 'delete',
  path: '/public/api/versioning/test/2026-09/widgets/{widgetId}',
  tags: ['Basic'],
  operationId: 'delete-/public/api/versioning/test/2026-09/widgets/{widgetId}',
  request: {
    params: z.object({
      widgetId: z
        .string()
        .openapi({
          param: {
            name: 'widgetId',
            in: 'path',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [],
})
