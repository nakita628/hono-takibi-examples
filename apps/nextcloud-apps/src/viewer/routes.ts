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

export const putOcsV2PhpAppsViewerApiV1ConfigKeyRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/viewer/api/v1/config/{key}',
  tags: ['config'],
  summary: "Set one of the user's viewer settings",
  operationId: 'config-set-config',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            description: 'The setting to change',
            required: true,
            schema: { type: 'string' },
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
              value: z
                .xor([
                  z
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
                  z.boolean(),
                ])
                .openapi({
                  description:
                    'Its new value: a number for a setting with a range, true or false for a toggle',
                }),
            })
            .openapi({ required: ['value'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Setting saved',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      key: z.string(),
                      value: z.xor([
                        z
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
                        z.boolean(),
                      ]),
                    })
                    .openapi({ required: ['key', 'value'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Unknown setting, or a value it does not accept',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
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
