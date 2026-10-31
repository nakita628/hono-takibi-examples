import { createRoute, z } from '@hono/zod-openapi'

const ValidationResultSchema = z
  .object({ openapi: z.string() })
  .openapi({ required: ['openapi'] })
  .openapi('ValidationResult')

export const getBadgeRoute = createRoute({
  method: 'get',
  path: '/badge',
  tags: ['validation'],
  summary: "Return a redirect to a badge svg file depending on a source definition's validity",
  operationId: 'getBadge',
  request: {
    query: z.object({
      url: z
        .url()
        .openapi({
          param: {
            description: 'The URL to retrieve the OpenAPI 3.0.x definition from',
            example:
              'https://raw.githubusercontent.com/Mermade/openapi-webconverter/master/contract/openapi.json',
            in: 'query',
            name: 'url',
            required: true,
            schema: { format: 'uri', type: 'string' },
          },
        }),
    }),
  },
  responses: { 301: { description: 'Moved' } },
})

export const getConvertRoute = createRoute({
  method: 'get',
  path: '/convert',
  tags: ['conversion'],
  summary: 'Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL',
  operationId: 'convertUrl',
  request: {
    query: z.object({
      url: z
        .url()
        .openapi({
          param: {
            description: 'The URL to retrieve the OpenAPI 2.0 definition from',
            example:
              'https://raw.githubusercontent.com/Mermade/openapi-webconverter/master/contract/swagger.json',
            in: 'query',
            name: 'url',
            required: true,
            schema: { format: 'uri', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'default',
      content: {
        'application/json': { schema: z.any() },
        'application/x-yaml': { schema: z.any() },
      },
    },
  },
})

export const postConvertRoute = createRoute({
  method: 'post',
  path: '/convert',
  tags: ['conversion'],
  summary: 'Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x ',
  operationId: 'convert',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              filename: z
                .string()
                .exactOptional()
                .openapi({ description: 'The file to upload and convert' }),
              source: z
                .string()
                .exactOptional()
                .openapi({ description: 'The text of a Swagger 2.0 definition to convert' }),
              validate: z.literal('on').exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'default',
      content: {
        'application/json': { schema: z.any() },
        'application/x-yaml': { schema: z.any() },
      },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': { schema: z.any() },
        'application/x-yaml': { schema: z.any() },
      },
    },
  },
})

export const getStatusRoute = createRoute({
  method: 'get',
  path: '/status',
  tags: ['metadata'],
  summary: 'Get the status of the API',
  operationId: 'getStatus',
  responses: {
    200: {
      description: 'default',
      content: {
        'application/json': { schema: z.any() },
        'application/x-yaml': { schema: z.any() },
      },
    },
  },
})

export const getValidateRoute = createRoute({
  method: 'get',
  path: '/validate',
  tags: ['validation'],
  summary: 'Validate an OpenAPI 3.0.x definition',
  operationId: 'validateUrl',
  request: {
    query: z.object({
      url: z
        .url()
        .openapi({
          param: {
            description: 'The URL to retrieve the OpenAPI 3.0.x definition from',
            example:
              'https://raw.githubusercontent.com/Mermade/openapi-webconverter/master/contract/openapi.json',
            in: 'query',
            name: 'url',
            required: true,
            schema: { format: 'uri', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'default',
      content: {
        'application/json': { schema: ValidationResultSchema },
        'application/x-yaml': { schema: ValidationResultSchema },
      },
    },
  },
})

export const postValidateRoute = createRoute({
  method: 'post',
  path: '/validate',
  tags: ['validation'],
  summary: 'Validate an OpenAPI 3.0.x definition supplied in the body of the request',
  operationId: 'validate',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              filename: z
                .string()
                .exactOptional()
                .openapi({ description: 'The file to upload and validate' }),
              source: z
                .string()
                .exactOptional()
                .openapi({ description: 'The text of an OpenAPI 3.0.x definition to validate' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'default',
      content: {
        'application/json': { schema: ValidationResultSchema },
        'application/x-yaml': { schema: ValidationResultSchema },
      },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': { schema: z.any() },
        'application/x-yaml': { schema: z.any() },
      },
    },
  },
})
