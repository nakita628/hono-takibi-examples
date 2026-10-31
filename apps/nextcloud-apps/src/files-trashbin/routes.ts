import { createRoute, z } from '@hono/zod-openapi'

const CapabilitiesSchema = z
  .object({
    files: z
      .object({ undelete: z.boolean(), delete_from_trash: z.boolean() })
      .openapi({ required: ['undelete', 'delete_from_trash'] }),
  })
  .openapi({ required: ['files'] })
  .openapi('Capabilities')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getIndexPhpAppsFilesTrashbinPreviewRoute = createRoute({
  method: 'get',
  path: '/index.php/apps/files_trashbin/preview',
  tags: ['preview'],
  summary: 'Get the preview for a file',
  operationId: 'preview-get-preview',
  request: {
    query: z.object({
      fileId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(-1n)
        .exactOptional()
        .openapi({
          param: {
            name: 'fileId',
            in: 'query',
            description: 'ID of the file',
            schema: { type: 'integer', format: 'int64', default: -1 },
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
        .default(32n)
        .exactOptional()
        .openapi({
          param: {
            name: 'x',
            in: 'query',
            description: 'Width of the preview',
            schema: { type: 'integer', format: 'int64', default: 32 },
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
        .default(32n)
        .exactOptional()
        .openapi({
          param: {
            name: 'y',
            in: 'query',
            description: 'Height of the preview',
            schema: { type: 'integer', format: 'int64', default: 32 },
            required: false,
          },
        }),
      a: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'a',
            in: 'query',
            description: 'Whether to not crop the preview',
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
