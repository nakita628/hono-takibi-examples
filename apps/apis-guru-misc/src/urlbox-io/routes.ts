import { createRoute, z } from '@hono/zod-openapi'

const ErrorResponseSchema = z
  .object({
    error: z
      .object({
        code: z.string().exactOptional().openapi({ description: 'A machine-readable error code' }),
        message: z
          .string()
          .exactOptional()
          .openapi({ description: 'A human-readable error message' }),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['error'] })
  .openapi('ErrorResponse')

const RedirectResponseSchema = z
  .object({
    location: z.url().openapi({ description: 'The URL to follow for the long running request' }),
    message: z
      .string()
      .openapi({
        description: 'A human-readable message indicating the need to follow the redirect',
      }),
  })
  .openapi({ required: ['message', 'location'] })
  .openapi('RedirectResponse')

const RenderRequestSchema = z
  .xor([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'url')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['url'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'html')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['html'] }),
  ])
  .openapi('RenderRequest')

const RenderResponseSchema = z
  .object({
    renderUrl: z
      .url()
      .exactOptional()
      .openapi({ description: 'The URL where the rendered output is stored' }),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The size of the rendered output in bytes',
      }),
  })
  .openapi({ required: [] })
  .openapi('RenderResponse')

const SecretKeySecurityScheme = {
  bearerFormat: 'JWT',
  description:
    'The Urlbox API uses your secret API key to authenticate. To find your secret key, login to the Urlbox dashboard at https://urlbox.io/dashboard.\n',
  scheme: 'bearer',
  type: 'http',
}

export const postV1RenderSyncRoute = createRoute({
  method: 'post',
  path: '/v1/render/sync',
  summary: 'Render a URL as an image or video',
  operationId: 'renderSync',
  request: {
    body: { content: { 'application/json': { schema: RenderRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: RenderResponseSchema } },
      headers: z.object({
        'x-renders-allowed': {
          description: 'The number of renders allowed',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'The number of renders allowed', param: { required: false } }),
        },
        'x-renders-reset': {
          description: 'The date and time when the render count will reset',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The date and time when the render count will reset',
              param: { required: false },
            }),
        },
        'x-renders-used': {
          description: 'The number of renders used',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'The number of renders used', param: { required: false } }),
        },
        'x-urlbox-acceptedby': {
          description: 'The server that accepted the request',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The server that accepted the request',
              param: { required: false },
            }),
        },
        'x-urlbox-cache-status': {
          description: 'The cache status of the response',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The cache status of the response',
              param: { required: false },
            }),
        },
        'x-urlbox-cachekey': {
          description: 'The cache key used by URLBox',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'The cache key used by URLBox', param: { required: false } }),
        },
        'x-urlbox-renderedby': {
          description: 'The server that rendered the response',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The server that rendered the response',
              param: { required: false },
            }),
        },
        'x-urlbox-requestid': {
          description: 'The request ID assigned by URLBox',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The request ID assigned by URLBox',
              param: { required: false },
            }),
        },
      }),
    },
    307: {
      description: 'Temporary Redirect',
      content: {
        'application/json': {
          schema: RedirectResponseSchema,
          example: {
            location:
              'https://api.urlbox.io/v1/redirect/BQxxwO98uwkSsuJf/1dca9bae-c49d-42d3-8282-89450afb7e73/1',
            message: 'Please follow the redirect to continue your long running request',
          },
        },
      },
      headers: z.object({
        Location: {
          schema: z
            .url()
            .exactOptional()
            .openapi({
              param: { required: false },
              description: 'The URL to follow for the long running request',
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: { code: 'ApiKeyNotFound', message: 'Api Key does not exist' } },
        },
      },
      headers: z.object({
        'x-urlbox-error-message': {
          description: 'An error message describing the reason the request failed',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An error message describing the reason the request failed',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: { code: 'ApiKeyNotFound', message: 'Api Key does not exist' } },
        },
      },
      headers: z.object({
        'x-urlbox-error-message': {
          description: 'An error message describing the reason the request failed',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An error message describing the reason the request failed',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: {
            error: { code: 'ApiKeyNotFound', message: 'Something went wrong rendering that' },
          },
        },
      },
      headers: z.object({
        'x-urlbox-error-message': {
          description: 'An error message describing the reason the request failed',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An error message describing the reason the request failed',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [{ SecretKey: [] }],
})
