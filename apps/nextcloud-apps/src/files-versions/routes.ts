import { createRoute, z } from '@hono/zod-openapi'

const CapabilitiesSchema = z
  .object({
    files: z
      .object({
        versioning: z.boolean(),
        version_labeling: z.boolean(),
        version_deletion: z.boolean(),
      })
      .openapi({ required: ['versioning', 'version_labeling', 'version_deletion'] }),
  })
  .openapi({ required: ['files'] })
  .openapi('Capabilities')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getIndexPhpAppsFilesVersionsPreviewRoute = createRoute({
  method: 'get',
  path: '/index.php/apps/files_versions/preview',
  tags: ['preview'],
  summary: 'Get the preview for a file version',
  operationId: 'preview-get-preview',
  request: {
    query: z.object({
      file: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            description: 'Path of the file',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
      x: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(44n)
        .exactOptional()
        .openapi({
          param: {
            name: 'x',
            in: 'query',
            description: 'Width of the preview',
            schema: { type: 'integer', format: 'int64', default: 44 },
            required: false,
          },
        }),
      y: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(44n)
        .exactOptional()
        .openapi({
          param: {
            name: 'y',
            in: 'query',
            description: 'Height of the preview',
            schema: { type: 'integer', format: 'int64', default: 44 },
            required: false,
          },
        }),
      version: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            description: 'Version of the file to get the preview for',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
      mimeFallback: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'mimeFallback',
            in: 'query',
            description: 'Whether to fallback to the mime icon if no preview is available',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Preview returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    303: {
      description: 'Redirect to the mime icon url if mimeFallback is true',
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Getting preview is not possible',
      content: { 'application/json': { schema: z.any() } },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z.object({ message: z.string() }).openapi({ required: ['message'] }),
        },
      },
    },
    404: { description: 'Preview not found', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})
