import { createRoute, z } from '@hono/zod-openapi'

const StorageConfigSchema = z
  .object({
    applicableGroups: z.array(z.string()).exactOptional(),
    applicableUsers: z.array(z.string()).exactOptional(),
    authMechanism: z.string(),
    backend: z.string(),
    backendOptions: z.record(z.string(), z.object({})),
    id: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    mountOptions: z.record(z.string(), z.object({})).exactOptional(),
    mountPoint: z.string(),
    priority: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    status: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    statusMessage: z.string().exactOptional(),
    type: z.enum(['personal', 'system']),
    userProvided: z.boolean(),
  })
  .openapi({
    required: ['authMechanism', 'backend', 'backendOptions', 'mountPoint', 'type', 'userProvided'],
  })
  .openapi('StorageConfig')

const MountSchema = z
  .object({
    name: z.string(),
    path: z.string(),
    type: z.literal('dir'),
    backend: z.string(),
    scope: z.enum(['system', 'personal']),
    permissions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    class: z.string(),
    config: StorageConfigSchema,
  })
  .openapi({
    required: ['name', 'path', 'type', 'backend', 'scope', 'permissions', 'id', 'class', 'config'],
  })
  .openapi('Mount')

const OCSMetaSchema = z
  .object({
    status: z.string(),
    statuscode: z.int(),
    message: z.string().exactOptional(),
    totalitems: z.string().exactOptional(),
    itemsperpage: z.string().exactOptional(),
  })
  .openapi({ required: ['status', 'statuscode'] })
  .openapi('OCSMeta')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getOcsV2PhpAppsFilesExternalApiV1MountsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files_external/api/v1/mounts',
  tags: ['api'],
  summary: 'Get the mount points visible for this user',
  operationId: 'api-get-user-mounts',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User mounts returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(MountSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})
