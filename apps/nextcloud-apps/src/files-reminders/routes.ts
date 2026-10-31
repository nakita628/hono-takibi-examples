import { createRoute, z } from '@hono/zod-openapi'

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

export const getOcsV2PhpAppsFilesRemindersApiVVersionFileIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/files_reminders/api/v{version}/{fileId}',
  tags: ['api'],
  summary: 'Get a reminder',
  operationId: 'api-get',
  request: {
    params: z.object({
      version: z
        .string()
        .regex(/^1$/)
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^1$' },
          },
        }),
      fileId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'fileId',
            in: 'path',
            description: 'ID of the file',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
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
      description: 'Reminder returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ dueDate: z.string().nullable() })
                    .openapi({ required: ['dueDate'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Account not found',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsFilesRemindersApiVVersionFileIdRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/files_reminders/api/v{version}/{fileId}',
  tags: ['api'],
  summary: 'Set a reminder',
  operationId: 'api-set',
  request: {
    params: z.object({
      version: z
        .string()
        .regex(/^1$/)
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^1$' },
          },
        }),
      fileId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'fileId',
            in: 'path',
            description: 'ID of the file',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              dueDate: z.string().openapi({ description: 'ISO 8601 formatted date time string' }),
            })
            .openapi({ required: ['dueDate'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Reminder updated',
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
    201: {
      description: 'Reminder created successfully',
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
    400: {
      description: 'Creating reminder is not possible',
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
    401: {
      description: 'Account not found',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    404: {
      description: 'File not found',
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

export const deleteOcsV2PhpAppsFilesRemindersApiVVersionFileIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/files_reminders/api/v{version}/{fileId}',
  tags: ['api'],
  summary: 'Remove a reminder',
  operationId: 'api-remove',
  request: {
    params: z.object({
      version: z
        .string()
        .regex(/^1$/)
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^1$' },
          },
        }),
      fileId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'fileId',
            in: 'path',
            description: 'ID of the file',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
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
      description: 'Reminder deleted successfully',
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
    401: {
      description: 'Account not found',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    404: {
      description: 'Reminder not found',
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
