import { createRoute, z } from '@hono/zod-openapi'

const ErrorFieldSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Human-readable, English description of the problem with the contents of the field',
      }),
    path: z
      .string()
      .openapi({
        description:
          "<ul>\n<li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li>\n<strong style='margin-left: 12px;'>OR</strong>\n<li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li>\n</ul>",
      }),
    pathRelated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JSONPath referring to a field containing an error, which is referenced by `path`',
      }),
  })
  .openapi({ required: ['path', 'code'] })
  .openapi('ErrorField')

const ErrorSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    fields: z
      .array(ErrorFieldSchema)
      .exactOptional()
      .openapi({
        description: 'List of the specific fields, and the errors found with their contents',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable, English description of the error' }),
  })
  .openapi({ required: ['code'] })
  .openapi('Error')

const ErrorLimitSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    fields: z
      .array(ErrorFieldSchema)
      .exactOptional()
      .openapi({
        description: 'List of the specific fields, and the errors found with their contents',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable, English description of the error' }),
    retryAfterSec: z
      .int()
      .openapi({ description: 'Number of seconds to wait before attempting a similar request' }),
  })
  .openapi({ required: ['retryAfterSec', 'code'] })
  .openapi('ErrorLimit')

const PasswordErrorSchema = z
  .object({
    code: z
      .enum([
        'PW_BLACK_LIST',
        'PW_TOO_SHORT',
        'PW_TOO_LONG',
        'PW_MISSING_UC',
        'PW_MISSING_NUM',
        'PW_RECENTLY_USED',
        'PW_NOT_UNIQUE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable, English description of the error' }),
    type: z.string().exactOptional().openapi({ description: "Response type, always 'error'" }),
  })
  .openapi({ required: [] })
  .openapi('PasswordError')

const SecretSchema = z
  .object({
    secret: z
      .string()
      .exactOptional()
      .openapi({
        description: "The secret value used to set a subaccount's password",
        example: 'P@55w0rd+',
      }),
  })
  .openapi({ required: [] })
  .openapi('Secret')

const ShopperSchema = z
  .object({
    customerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier for the Customer record associated with this Shopper record. This is an alternate identifier that some systems use to identify an individual shopper record',
      }),
    email: z.email(),
    externalId: z.int().exactOptional(),
    marketId: z.string().default('en-US'),
    nameFirst: z.string(),
    nameLast: z.string(),
    shopperId: z.string(),
  })
  .openapi({ required: ['shopperId', 'nameFirst', 'nameLast', 'email', 'marketId'] })
  .openapi('Shopper')

const ShopperIdSchema = z
  .object({
    customerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier for the Customer record associated with this Shopper record. This is an alternate identifier that some systems use to identify an individual shopper record',
      }),
    shopperId: z.string(),
  })
  .openapi({ required: ['shopperId'] })
  .openapi('ShopperId')

const ShopperStatusSchema = z
  .object({
    billingState: z
      .enum(['ABANDONED', 'INACTIVE', 'ACTIVE'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the billing state of the Shopper.<br />ABANDONED: The shopper has not been billed in at least 10 years and has no active subscriptions.<br />INACTIVE: The shopper has been billed within the last 10 years but has no active subscriptions.<br />ACTIVE: The shopper has at least one active subscription.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ShopperStatus')

const ShopperUpdateSchema = z
  .object({
    email: z.email().exactOptional(),
    externalId: z.int().exactOptional(),
    marketId: z
      .enum([
        'da-DK',
        'de-AT',
        'de-CH',
        'de-DE',
        'el-GR',
        'en-AE',
        'en-AU',
        'en-CA',
        'en-GB',
        'en-HK',
        'en-IE',
        'en-IL',
        'en-IN',
        'en-MY',
        'en-NZ',
        'en-PH',
        'en-PK',
        'en-SG',
        'en-US',
        'en-ZA',
        'es-AR',
        'es-CL',
        'es-CO',
        'es-ES',
        'es-MX',
        'es-PE',
        'es-US',
        'es-VE',
        'fi-FI',
        'fr-BE',
        'fr-CA',
        'fr-CH',
        'fr-FR',
        'hi-IN',
        'id-ID',
        'it-CH',
        'it-IT',
        'ja-JP',
        'ko-KR',
        'mr-IN',
        'nb-NO',
        'nl-BE',
        'nl-NL',
        'pl-PL',
        'pt-BR',
        'pt-PT',
        'ru-RU',
        'sv-SE',
        'ta-IN',
        'th-TH',
        'tr-TR',
        'uk-UA',
        'vi-VN',
        'zh-HK',
        'zh-SG',
        'zh-TW',
      ])
      .exactOptional(),
    nameFirst: z.string().exactOptional(),
    nameLast: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ShopperUpdate')

const SubaccountCreateSchema = z
  .object({
    email: z.email(),
    externalId: z.int().exactOptional(),
    marketId: z
      .enum([
        'da-DK',
        'de-AT',
        'de-CH',
        'de-DE',
        'el-GR',
        'en-AE',
        'en-AU',
        'en-CA',
        'en-GB',
        'en-HK',
        'en-IE',
        'en-IL',
        'en-IN',
        'en-MY',
        'en-NZ',
        'en-PH',
        'en-PK',
        'en-SG',
        'en-US',
        'en-ZA',
        'es-AR',
        'es-CL',
        'es-CO',
        'es-ES',
        'es-MX',
        'es-PE',
        'es-US',
        'es-VE',
        'fi-FI',
        'fr-BE',
        'fr-CA',
        'fr-CH',
        'fr-FR',
        'hi-IN',
        'id-ID',
        'it-CH',
        'it-IT',
        'ja-JP',
        'ko-KR',
        'mr-IN',
        'nb-NO',
        'nl-BE',
        'nl-NL',
        'pl-PL',
        'pt-BR',
        'pt-PT',
        'ru-RU',
        'sv-SE',
        'ta-IN',
        'th-TH',
        'tr-TR',
        'uk-UA',
        'vi-VN',
        'zh-HK',
        'zh-SG',
        'zh-TW',
      ])
      .default('en-US')
      .exactOptional(),
    nameFirst: z.string(),
    nameLast: z.string(),
    password: z.string(),
  })
  .openapi({ required: ['email', 'password', 'nameFirst', 'nameLast'] })
  .openapi('SubaccountCreate')

export const postV1ShoppersSubaccountRoute = createRoute({
  method: 'post',
  path: '/v1/shoppers/subaccount',
  tags: ['v1'],
  summary: 'Create a Subaccount owned by the authenticated Reseller',
  operationId: 'createSubaccount',
  request: {
    body: {
      description: 'The subaccount to create',
      content: {
        'application/json': { schema: SubaccountCreateSchema },
        'application/xml': { schema: SubaccountCreateSchema },
        'text/xml': { schema: SubaccountCreateSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: ShopperIdSchema },
        'application/json': { schema: ShopperIdSchema },
        'application/xml': { schema: ShopperIdSchema },
        'text/javascript': { schema: ShopperIdSchema },
        'text/xml': { schema: ShopperIdSchema },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: '`subaccount` does not fulfill the schema',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getV1ShoppersShopperIdRoute = createRoute({
  method: 'get',
  path: '/v1/shoppers/{shopperId}',
  tags: ['v1'],
  summary: 'Get details for the specified Shopper',
  description:
    '<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>',
  operationId: 'get',
  request: {
    params: z.object({
      shopperId: z
        .string()
        .openapi({
          param: {
            description: 'Shopper whose details are to be retrieved',
            in: 'path',
            name: 'shopperId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      includes: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.literal('customerId')),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional properties to be included in the response shopper object',
            explode: false,
            in: 'query',
            name: 'includes',
            schema: { items: { enum: ['customerId'], type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: ShopperSchema },
        'application/json': { schema: ShopperSchema },
        'application/xml': { schema: ShopperSchema },
        'text/javascript': { schema: ShopperSchema },
        'text/xml': { schema: ShopperSchema },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const postV1ShoppersShopperIdRoute = createRoute({
  method: 'post',
  path: '/v1/shoppers/{shopperId}',
  tags: ['v1'],
  summary: 'Update details for the specified Shopper',
  description:
    '<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>',
  operationId: 'update',
  request: {
    params: z.object({
      shopperId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Shopper to update',
            in: 'path',
            name: 'shopperId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The Shopper details to update',
      content: {
        'application/json': { schema: ShopperUpdateSchema },
        'application/xml': { schema: ShopperUpdateSchema },
        'text/xml': { schema: ShopperUpdateSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: ShopperIdSchema },
        'application/json': { schema: ShopperIdSchema },
        'application/xml': { schema: ShopperIdSchema },
        'text/javascript': { schema: ShopperIdSchema },
        'text/xml': { schema: ShopperIdSchema },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: '`Shopper` does not fulfill the schema',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const deleteV1ShoppersShopperIdRoute = createRoute({
  method: 'delete',
  path: '/v1/shoppers/{shopperId}',
  tags: ['v1'],
  summary: 'Request the deletion of a shopper profile',
  description:
    '<strong>Notes:</strong><ul><li>Shopper deletion is not supported in OTE</li><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>',
  operationId: 'delete',
  request: {
    params: z.object({
      shopperId: z
        .string()
        .max(10)
        .openapi({
          param: {
            description:
              'The ID of the shopper to delete. Must agree with the shopper id on the token or header, if present. *Note*: **shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)',
            in: 'path',
            name: 'shopperId',
            required: true,
            schema: { maxLength: 10, type: 'string' },
          },
        }),
    }),
    query: z.object({
      auditClientIp: z
        .string()
        .openapi({
          param: {
            description:
              'The client IP of the user who originated the request leading to this call.',
            in: 'query',
            name: 'auditClientIp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Request was successful' },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    409: {
      description: 'Active and locked shoppers cannot be deleted',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: 'Shopper ID is not supplied or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const putV1ShoppersShopperIdFactorsPasswordRoute = createRoute({
  method: 'put',
  path: '/v1/shoppers/{shopperId}/factors/password',
  tags: ['v1'],
  summary: "Set subaccount's password",
  description:
    '<strong>Notes:</strong><ul><li>Password set is only supported by API Resellers setting subaccount passwords.</li><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>',
  operationId: 'changePassword',
  request: {
    params: z.object({
      shopperId: z
        .string()
        .openapi({
          param: {
            description: 'Shopper whose password will be set',
            in: 'path',
            name: 'shopperId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: "The value to set the subaccount's password to",
      content: { 'application/json': { schema: SecretSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: { 'application/json': { schema: ShopperIdSchema } },
    },
    400: {
      description: 'Request was not successful',
      content: { 'application/json': { schema: PasswordErrorSchema } },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1ShoppersShopperIdStatusRoute = createRoute({
  method: 'get',
  path: '/v1/shoppers/{shopperId}/status',
  tags: ['v1'],
  summary: 'Get details for the specified Shopper',
  description:
    '<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**. **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>',
  operationId: 'getStatus',
  request: {
    params: z.object({
      shopperId: z
        .string()
        .max(10)
        .openapi({
          param: {
            description:
              'The ID of the shopper to retrieve. Must agree with the shopper id on the token or header, if present',
            in: 'path',
            name: 'shopperId',
            required: true,
            schema: { maxLength: 10, type: 'string' },
          },
        }),
    }),
    query: z.object({
      auditClientIp: z
        .string()
        .openapi({
          param: {
            description:
              'The client IP of the user who originated the request leading to this call.',
            in: 'query',
            name: 'auditClientIp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: ShopperStatusSchema },
        'application/json': { schema: ShopperStatusSchema },
        'application/xml': { schema: ShopperStatusSchema },
        'text/javascript': { schema: ShopperStatusSchema },
        'text/xml': { schema: ShopperStatusSchema },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: 'Shopper ID is not supplied or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})
