import { createRoute, z } from '@hono/zod-openapi'

const ServerInfoSchema = z
  .object({
    name: z.string().openapi({ description: 'Human-readable server product name.' }),
    serverVersion: z.string().openapi({ description: 'Version of the running server build.' }),
    specVersion: z
      .string()
      .openapi({ description: 'Version of the OpenAPI document this server implements.' }),
    setupRequired: z
      .boolean()
      .openapi({ description: 'True until the first admin user has been created.' }),
    loginMethods: z
      .array(z.literal('password'))
      .openapi({
        description:
          'Login methods this server accepts. New methods may be added; clients ignore values they do not recognise.',
      }),
  })
  .openapi({
    description: 'Public server description. Everything an add-server screen needs before login.',
    required: ['name', 'serverVersion', 'specVersion', 'setupRequired', 'loginMethods'],
  })
  .openapi('ServerInfo')

const ValidationErrorSchema = z
  .object({
    field: z
      .string()
      .openapi({
        description:
          'Name of the offending query parameter, path parameter, or body field (dotted for nested).',
      }),
    message: z.string().openapi({ description: 'Why the value was rejected.' }),
  })
  .openapi({ description: 'One field-level validation failure.', required: ['field', 'message'] })
  .openapi('ValidationError')

const ProblemSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI reference identifying the problem type. Omitted while the problem carries no semantics\nbeyond its HTTP status code, which RFC 9457 defines as `about:blank`. Problems with their\nown semantics get their own URI; switch on `code` instead.\n',
      }),
    title: z
      .string()
      .openapi({
        description:
          'Short human-readable summary, the same for all occurrences of this problem type.',
      }),
    status: z.int().openapi({ description: 'HTTP status code of this response.' }),
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Human-readable explanation specific to this occurrence. Omitted for internal errors.',
      }),
    code: z
      .enum([
        'validation',
        'unauthorized',
        'forbidden',
        'not_found',
        'method_not_allowed',
        'unavailable',
        'internal',
      ])
      .openapi({
        description:
          'Machine-readable error code, and the value clients switch on. New codes may be added.',
      }),
    errors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Per-field failures. Present only when `code` is `validation`.' }),
  })
  .openapi({
    description: 'RFC 9457 problem details, returned for every 4xx and 5xx response.',
    required: ['title', 'status', 'code'],
  })
  .openapi('Problem')

const InternalErrorResponse = {
  description: 'Unexpected server failure. Details are in the server log.',
  content: { 'application/problem+json': { schema: ProblemSchema } },
}

const ETagHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description: 'Entity tag for `If-None-Match` revalidation.',
    param: { required: false },
  })

const NotModifiedResponse = {
  description: 'Not modified.',
  headers: z.object({ ETag: ETagHeaderSchema }),
}

const BearerAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'JWT',
  description:
    'Short-lived access token minted from a device grant. Not yet applied to any operation.',
}

export const getServerRoute = createRoute({
  method: 'get',
  path: '/server',
  tags: ['server'],
  summary: 'Describe the server',
  description:
    'Returns the public server description. No authentication required.\nAuthenticated requests will additionally receive the implemented capability modules\nonce authentication is available.\n',
  operationId: 'getServerInfo',
  responses: {
    200: {
      description: 'Server description.',
      content: { 'application/json': { schema: ServerInfoSchema } },
    },
    500: InternalErrorResponse,
  },
})

export const getOpenapiJsonRoute = createRoute({
  method: 'get',
  path: '/openapi.json',
  tags: ['server'],
  summary: 'Get the OpenAPI document (JSON)',
  description:
    'The bundled OpenAPI document of the running server version. Supports ETag revalidation.',
  operationId: 'getOpenAPISpecJSON',
  responses: {
    200: {
      description: 'The OpenAPI document.',
      content: {
        'application/json': {
          schema: z.looseObject({}).openapi({ description: 'OpenAPI 3.0 document.' }),
        },
      },
      headers: z.object({ ETag: ETagHeaderSchema }),
    },
    304: NotModifiedResponse,
  },
})

export const getOpenapiYamlRoute = createRoute({
  method: 'get',
  path: '/openapi.yaml',
  tags: ['server'],
  summary: 'Get the OpenAPI document (YAML)',
  description:
    'The bundled OpenAPI document of the running server version. Supports ETag revalidation.',
  operationId: 'getOpenAPISpecYAML',
  responses: {
    200: {
      description: 'The OpenAPI document.',
      content: {
        'application/yaml': {
          schema: z.looseObject({}).openapi({ description: 'OpenAPI 3.0 document.' }),
        },
      },
      headers: z.object({ ETag: ETagHeaderSchema }),
    },
    304: NotModifiedResponse,
  },
})
