import { createRoute, z } from '@hono/zod-openapi'

const CarrierSchema = z
  .object({
    country: z.string().exactOptional(),
    name: z.string().exactOptional(),
    network_code: z.string().exactOptional(),
    network_type: z
      .enum([
        'fixed_line',
        'fixed_line_or_mobile',
        'mobile',
        'pager',
        'personal_number',
        'premium_rate',
        'shared_cost',
        'toll_free',
        'uan',
        'unknown',
        'voicemail',
        'voip',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Carrier')

const MnpSchema = z
  .object({
    country: z.string().exactOptional(),
    international_formatted: z.string().exactOptional(),
    isPorted: z.boolean().exactOptional(),
    mccmnc: z.string().exactOptional(),
    national_format: z.string().exactOptional(),
    network: z.string().exactOptional(),
    number: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Mnp')

const RoamingSchema = z
  .object({
    roaming_country_code: z.string().exactOptional(),
    roaming_network_code: z.string().exactOptional(),
    roaming_network_name: z.string().exactOptional(),
    status: z.enum(['unknown', 'roaming', 'not_roaming']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Roaming')

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'X-API-Key', type: 'apiKey' }

export const getAnalyticsRoute = createRoute({
  method: 'get',
  path: '/analytics',
  tags: ['analytics'],
  operationId: 'Analytics',
  request: {
    query: z.object({
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Start date of the statistics in the format YYYY-MM-DD. By default, the date of 30 days ago is set.',
            in: 'query',
            name: 'start',
            schema: { type: 'string' },
            required: false,
          },
        }),
      end: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'End date of the statistics in the format YYYY-MM-DD. By default, the current day.',
            in: 'query',
            name: 'end',
            schema: { type: 'string' },
            required: false,
          },
        }),
      label: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shows only data of a specific label.',
            in: 'query',
            name: 'label',
            schema: { type: 'string' },
            required: false,
          },
        }),
      subaccounts: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Receive the data only for the main account, all your (sub-)accounts or only for specific subaccounts.',
            in: 'query',
            name: 'subaccounts',
            schema: { type: 'string' },
            required: false,
          },
        }),
      group_by: z
        .enum(['date', 'label', 'subaccount', 'country'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines the grouping of the data.',
            in: 'query',
            name: 'group_by',
            schema: { enum: ['date', 'label', 'subaccount', 'country'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              date: z.string().exactOptional(),
              direct: z.int().exactOptional(),
              economy: z.int().exactOptional(),
              hlr: z.int().exactOptional(),
              inbound: z.int().exactOptional(),
              mnp: z.int().exactOptional(),
              usage_eur: z.float32().exactOptional(),
              voice: z.int().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getBalanceRoute = createRoute({
  method: 'get',
  path: '/balance',
  tags: ['balance'],
  operationId: 'Balance',
  responses: {
    200: {
      description: 'OK',
      content: { 'text/plain': { schema: z.float32().openapi({ example: 12.34 }) } },
    },
  },
})

export const getContactsRoute = createRoute({
  method: 'get',
  path: '/contacts',
  tags: ['contacts'],
  operationId: 'ContactsGet',
  request: {
    query: z.object({
      action: z
        .literal('read')
        .openapi({
          param: {
            description: 'Determines the action to execute.',
            in: 'query',
            name: 'action',
            required: true,
            schema: { enum: ['read'], type: 'string' },
          },
        }),
      json: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Defines whether to return the response as JSON or CSV separated by semicolon.',
            in: 'query',
            name: 'json',
            schema: { default: 0, enum: [0, 1], type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK (CSV)',
      content: {
        'application/json': {
          schema: z.string().openapi({ example: '"1";"Tommy Tester";"0049179876543210"' }),
        },
        'text/csv': {
          schema: z.string().openapi({ example: '"1";"Tommy Tester";"0049179876543210"' }),
        },
      },
    },
  },
})

export const postContactsRoute = createRoute({
  method: 'post',
  path: '/contacts',
  tags: ['contacts'],
  operationId: 'ContactsPOST',
  request: {
    query: z.object({
      action: z
        .enum(['del', 'write'])
        .openapi({
          param: {
            description: 'Determines the action to execute.',
            in: 'query',
            name: 'action',
            required: true,
            schema: { enum: ['del', 'write'], type: 'string' },
          },
        }),
      json: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Defines whether to return the response as JSON or CSV separated by semicolon.',
            in: 'query',
            name: 'json',
            schema: { default: 0, enum: [0, 1], type: 'number' },
            required: false,
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The contact ID for editing/deletion.',
            in: 'query',
            name: 'id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      nick: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The contacts name.',
            in: 'query',
            name: 'nick',
            schema: { type: 'string' },
            required: false,
          },
        }),
      empfaenger: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The contacts phone number.',
            in: 'query',
            name: 'empfaenger',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The contacts email address.',
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string().openapi({ example: 152 }) },
        'text/plain': { schema: z.string().openapi({ example: 152 }) },
      },
    },
  },
})

export const getHooksRoute = createRoute({
  method: 'get',
  path: '/hooks',
  tags: ['hooks'],
  operationId: 'HooksGet',
  request: {
    query: z.object({
      action: z
        .literal('read')
        .openapi({
          param: {
            description: 'Determines the action to execute.',
            in: 'query',
            name: 'action',
            required: true,
            schema: { enum: ['read'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              hooks: z
                .array(
                  z
                    .object({
                      created: z.string().exactOptional(),
                      event_type: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      request_method: z.string().exactOptional(),
                      target_url: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postHooksRoute = createRoute({
  method: 'post',
  path: '/hooks',
  tags: ['hooks'],
  operationId: 'HooksPOST',
  request: {
    query: z.object({
      action: z
        .enum(['subscribe', 'unsubscribe'])
        .openapi({
          param: {
            description: 'Determines the action to execute.',
            in: 'query',
            name: 'action',
            required: true,
            schema: { enum: ['subscribe', 'unsubscribe'], type: 'string' },
          },
        }),
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The Webhook ID you wish to unsubscribe.',
            in: 'query',
            name: 'id',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      target_url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Target URL of your Webhook.',
            in: 'query',
            name: 'target_url',
            schema: { type: 'string' },
            required: false,
          },
        }),
      event_type: z
        .enum(['all', 'sms_mo', 'dlr', 'voice_status'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of event for which you would like to receive a webhook.',
            in: 'query',
            name: 'event_type',
            schema: { enum: ['all', 'sms_mo', 'dlr', 'voice_status'], type: 'string' },
            required: false,
          },
        }),
      request_method: z
        .enum(['POST', 'JSON', 'GET'])
        .default('POST')
        .exactOptional()
        .openapi({
          param: {
            description: 'Request method in which you want to receive the webhook.',
            in: 'query',
            name: 'request_method',
            schema: { default: 'POST', enum: ['POST', 'JSON', 'GET'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Hook subscribed',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.int().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postLookupRoute = createRoute({
  method: 'post',
  path: '/lookup',
  tags: ['lookup'],
  operationId: 'Lookup',
  request: {
    query: z.object({
      type: z
        .string()
        .openapi({
          param: {
            description: 'Allowed values are "cnam", "format", "hlr" and "mnp".',
            in: 'query',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      number: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'The phone number to look up.',
            explode: false,
            in: 'query',
            name: 'number',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      json: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Determines whether the response shall be returned in JSON format. Does not work with type "format".',
            in: 'query',
            name: 'json',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} } },
})

export const postLookupCnamRoute = createRoute({
  method: 'post',
  path: '/lookup/cnam',
  tags: ['lookup'],
  operationId: 'LookupCnam',
  request: {
    query: z.object({
      number: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'The phone number to look up.',
            explode: false,
            in: 'query',
            name: 'number',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} } },
})

export const postLookupFormatRoute = createRoute({
  method: 'post',
  path: '/lookup/format',
  tags: ['lookup'],
  operationId: 'LookupFormat',
  request: {
    query: z.object({
      number: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'The phone number to look up.',
            explode: false,
            in: 'query',
            name: 'number',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} } },
})

export const postLookupHlrRoute = createRoute({
  method: 'post',
  path: '/lookup/hlr',
  tags: ['lookup'],
  operationId: 'LookupHlr',
  request: {
    query: z.object({
      number: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'The phone number to look up.',
            explode: false,
            in: 'query',
            name: 'number',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} } },
})

export const postLookupMnpRoute = createRoute({
  method: 'post',
  path: '/lookup/mnp',
  tags: ['lookup'],
  operationId: 'LookupMnp',
  request: {
    query: z.object({
      number: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'The phone number to look up.',
            explode: false,
            in: 'query',
            name: 'number',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      json: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Determines whether the response shall be returned in JSON format.',
            in: 'query',
            name: 'json',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} } },
})

export const getPricingRoute = createRoute({
  method: 'get',
  path: '/pricing',
  tags: ['pricing'],
  operationId: 'Pricing',
  request: {
    query: z.object({
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The countries ISO code to get pricings for. Allowed values are de, fr, at. Omit to show pricings for all channels.',
            in: 'query',
            name: 'country',
            schema: { type: 'string' },
            required: false,
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Determines the response format. Allowed values are json and csv. The default value is json.',
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {} } },
})

export const postSmsRoute = createRoute({
  method: 'post',
  path: '/sms',
  tags: ['sms'],
  operationId: 'Sms',
  request: {
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            description: 'The actual text message to send.',
            in: 'query',
            name: 'text',
            required: true,
            schema: { type: 'string' },
          },
        }),
      to: z
        .string()
        .openapi({
          param: {
            description: 'The recipient number or group name.',
            in: 'query',
            name: 'to',
            required: true,
            schema: { type: 'string' },
          },
        }),
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set a custom sender name.',
            in: 'query',
            name: 'from',
            schema: { type: 'string' },
            required: false,
          },
        }),
      foreign_id: z
        .string()
        .regex(/^[A-Z|a-z|0-9|.|\-|_|@]+/)
        .exactOptional()
        .openapi({
          param: {
            description: 'Identifier to return in callbacks.',
            in: 'query',
            name: 'foreign_id',
            schema: { pattern: '^[A-Z|a-z|0-9|.|\\-|_|@]+', type: 'string' },
            required: false,
          },
        }),
      label: z
        .string()
        .regex(/^[A-Z|a-z|0-9|.|\-|_|@]+/)
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom label.',
            in: 'query',
            name: 'label',
            schema: { pattern: '^[A-Z|a-z|0-9|.|\\-|_|@]+', type: 'string' },
            required: false,
          },
        }),
      udh: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A custom User Data Header.',
            in: 'query',
            name: 'udh',
            schema: { type: 'string' },
            required: false,
          },
        }),
      delay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Date/Time for delayed dispatch.',
            in: 'query',
            name: 'delay',
            schema: { type: 'string' },
            required: false,
          },
        }),
      debug: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(0)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Disable message sending.',
            in: 'query',
            name: 'debug',
            schema: { default: 0, enum: [1, 0], type: 'number' },
            required: false,
          },
        }),
      no_reload: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(0)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable sending of duplicated messages within 180 seconds.',
            in: 'query',
            name: 'no_reload',
            schema: { default: 0, enum: [1, 0], type: 'number' },
            required: false,
          },
        }),
      unicode: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(0)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Force unicode encoding. Reduces sms length to 70 chars.',
            in: 'query',
            name: 'unicode',
            schema: { default: 0, enum: [1, 0], type: 'number' },
            required: false,
          },
        }),
      flash: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(0)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Send as flash.',
            in: 'query',
            name: 'flash',
            schema: { default: 0, enum: [1, 0], type: 'number' },
            required: false,
          },
        }),
      utf8: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(0)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Force UTF8 encoding.',
            in: 'query',
            name: 'utf8',
            schema: { default: 0, enum: [1, 0], type: 'number' },
            required: false,
          },
        }),
      details: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(0)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Attach message details to response.',
            in: 'query',
            name: 'details',
            schema: { default: 0, enum: [1, 0], type: 'number' },
            required: false,
          },
        }),
      return_msg_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(0)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Attach message ID to second row in a text response.',
            in: 'query',
            name: 'return_msg_id',
            schema: { default: 0, enum: [1, 0], type: 'number' },
            required: false,
          },
        }),
      json: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(0)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Return a detailed JSON response.',
            in: 'query',
            name: 'json',
            schema: { default: 0, enum: [1, 0], type: 'number' },
            required: false,
          },
        }),
      performance_tracking: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(0)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable performance tracking for found URLs.',
            in: 'query',
            name: 'performance_tracking',
            schema: { default: 0, enum: [1, 0], type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              balance: z.float32().exactOptional(),
              debug: z.string().exactOptional(),
              messages: z
                .array(
                  z
                    .object({
                      encoding: z.string().exactOptional(),
                      error: z.string().exactOptional(),
                      error_text: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      messages: z.array(z.string()).exactOptional(),
                      parts: z.int().exactOptional(),
                      price: z.int().exactOptional(),
                      recipient: z.string().exactOptional(),
                      sender: z.string().exactOptional(),
                      success: z.boolean().exactOptional(),
                      text: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              sms_type: z.enum(['economy', 'direct']).exactOptional(),
              success: z.string().exactOptional(),
              total_price: z.float32().exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'text/plain': {
          schema: z
            .object({
              balance: z.float32().exactOptional(),
              debug: z.string().exactOptional(),
              messages: z
                .array(
                  z
                    .object({
                      encoding: z.string().exactOptional(),
                      error: z.string().exactOptional(),
                      error_text: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      messages: z.array(z.string()).exactOptional(),
                      parts: z.int().exactOptional(),
                      price: z.int().exactOptional(),
                      recipient: z.string().exactOptional(),
                      sender: z.string().exactOptional(),
                      success: z.boolean().exactOptional(),
                      text: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              sms_type: z.enum(['economy', 'direct']).exactOptional(),
              success: z.string().exactOptional(),
              total_price: z.float32().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getStatusRoute = createRoute({
  method: 'get',
  path: '/status',
  tags: ['status'],
  operationId: 'Status',
  request: {
    query: z.object({
      msg_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID from the SMS.',
            in: 'query',
            name: 'msg_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': {
          schema: z.string().openapi({ example: 'DELIVERED\n2020-01-09 15:41:30.656\n' }),
        },
      },
    },
  },
})

export const postValidateForVoiceRoute = createRoute({
  method: 'post',
  path: '/validate_for_voice',
  tags: ['validate_for_voice'],
  operationId: 'ValidateForVoice',
  request: {
    query: z.object({
      number: z
        .string()
        .openapi({
          param: {
            description:
              'Determines the recipient. Can only be a number, not a contact from your address book.',
            in: 'query',
            name: 'number',
            required: true,
            schema: { type: 'string' },
          },
        }),
      callback: z
        .url()
        .exactOptional()
        .openapi({
          param: {
            description: 'The callback URL which gets queried right after validation.',
            in: 'query',
            name: 'callback',
            schema: { format: 'uri', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.string().exactOptional(),
              error: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postVoiceRoute = createRoute({
  method: 'post',
  path: '/voice',
  tags: ['voice'],
  operationId: 'Voice',
  request: {
    query: z.object({
      to: z
        .string()
        .openapi({
          param: {
            description:
              'Determines the receiver. Must be a valid phone number or contact from the address book.',
            in: 'query',
            name: 'to',
            required: true,
            schema: { type: 'string' },
          },
        }),
      text: z
        .string()
        .max(10000)
        .openapi({
          param: {
            description: 'The text to convert to a voice message. Accepts valid XML too.',
            in: 'query',
            name: 'text',
            required: true,
            schema: { maxLength: 10000, type: 'string' },
          },
        }),
      xml: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(0)]),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Decides whether the parameter "text" is plain text or XML. The default value is 0.',
            in: 'query',
            name: 'xml',
            schema: { enum: [1, 0], type: 'number' },
            required: false,
          },
        }),
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sets the sender. Must be a verified sender. Use an inbound number of yours or one of ours.',
            in: 'query',
            name: 'from',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'text/plain': { schema: z.string().openapi({ example: '100\n123456789\n0\n' }) } },
    },
  },
})
