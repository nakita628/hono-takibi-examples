import { createRoute, z } from '@hono/zod-openapi'

const AccountUnauthorizedSchema = z
  .object({
    'error-code': z
      .string()
      .exactOptional()
      .openapi({
        description: 'The status code of the response. `200` indicates a successful request.',
        example: '401',
      }),
    'error-code-label': z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code description', example: 'authentication failed' }),
  })
  .openapi({ xml: { name: 'inbound-numbers' }, required: [] })
  .openapi('AccountUnauthorized')

const CountrySchema = z
  .string()
  .length(2)
  .openapi({
    description: 'The two character country code in ISO 3166-1 alpha-2 format',
    example: 'GB',
  })
  .openapi('Country')

const AvailablenumberSchema = z
  .object({
    cost: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The monthly rental cost for this number, in Euros',
        example: '1.25',
      }),
    country: CountrySchema.exactOptional(),
    features: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The capabilities of the number: `SMS` or `VOICE` or `SMS,VOICE` or `SMS,MMS` or `VOICE,MMS` or `SMS,MMS,VOICE`',
        example: ['VOICE', 'SMS', 'MMS'],
      }),
    msisdn: z
      .string()
      .exactOptional()
      .openapi({ description: 'An available inbound virtual number.', example: '447700900000' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of number: `landline`, `landline-toll-free` or `mobile-lvn`',
        example: 'mobile-lvn',
      }),
  })
  .openapi({ required: [] })
  .openapi('Availablenumber')

const AvailableNumbersSchema = z
  .object({
    count: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The total amount of numbers available in the pool.',
        example: 1234,
      }),
    numbers: z
      .array(AvailablenumberSchema)
      .exactOptional()
      .openapi({ description: 'A paginated array of available numbers and their details.' }),
  })
  .openapi({ xml: { name: 'inbound-numbers' }, required: [] })
  .openapi('AvailableNumbers')

const OwnednumberSchema = z
  .object({
    country: CountrySchema.exactOptional(),
    features: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The capabilities of the number: `SMS` or `VOICE` or `SMS,VOICE` or `SMS,MMS` or `VOICE,MMS` or `SMS,MMS,VOICE`',
        example: ['VOICE', 'SMS', 'MMS'],
      }),
    messagesCallbackType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The messages webhook type: always `app`', example: 'app' }),
    messagesCallbackValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An Application ID',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
    moHttpUrl: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The URL of the webhook endpoint that handles inbound messages',
        example: 'https://example.com/webhooks/inbound-sms',
      }),
    msisdn: z
      .string()
      .exactOptional()
      .openapi({ description: 'An available inbound virtual number.', example: '447700900000' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of number: `landline`, `landline-toll-free` or `mobile-lvn`',
        example: 'mobile-lvn',
      }),
    voiceCallbackType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The voice webhook type: `sip`, `tel`, or `app`', example: 'app' }),
    voiceCallbackValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A SIP URI, telephone number or Application ID',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
  })
  .openapi({ required: [] })
  .openapi('Ownednumber')

const InboundNumbersSchema = z
  .object({
    count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total amount of numbers owned by the account', example: 1 }),
    numbers: z
      .array(OwnednumberSchema)
      .exactOptional()
      .openapi({ description: 'A paginated array of numbers and their details' }),
  })
  .openapi({ xml: { name: 'inbound-numbers' }, required: [] })
  .openapi('InboundNumbers')

const NumberDetailsSchema = z
  .object({
    country: CountrySchema,
    msisdn: z
      .string()
      .openapi({ description: 'An available inbound virtual number.', example: '447700900000' }),
    target_api_key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If you’d like to perform an action on a subaccount, provide the `api_key` of that account here. If you’d like to perform an action on your own account, you do not need to provide this field.',
        example: '1a2345b7',
      }),
  })
  .openapi({ required: ['country', 'msisdn'] })
  .openapi('NumberDetails')

const NumberDetailsUpdateSchema = z
  .object({
    app_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Application that will handle inbound traffic to this number.',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789abc',
      }),
    country: CountrySchema,
    messagesCallbackType: z
      .literal('app')
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '<strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.\n\nSpecifies the Messages webhook type (always `app`) associated with this\nnumber and must be used with the `messagesCallbackValue` parameter.\n',
        example: 'app',
      }),
    messagesCallbackValue: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '<strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.\n\nSpecifies the Application ID of your Messages application.\nIt must be used with the `messagesCallbackType` parameter.\n',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
    moHttpUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An URL-encoded URI to the webhook endpoint that handles inbound messages. Your webhook endpoint must be active before you make this request. Vonage makes a `GET` request to the endpoint and checks that it returns a `200 OK` response. Set this parameter's value to an empty string to remove the webhook.",
        example: 'https://example.com/webhooks/inbound-sms',
      }),
    moSmppSysType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The associated system type for your SMPP client',
        example: 'inbound',
      }),
    msisdn: z
      .string()
      .openapi({ description: 'An available inbound virtual number.', example: '447700900000' }),
    voiceCallbackType: z
      .enum(['sip', 'tel', 'app'])
      .exactOptional()
      .openapi({
        description:
          'Specify whether inbound voice calls on your number are forwarded\nto a SIP or a telephone number.  This must be used with the\n`voiceCallbackValue` parameter. If set, `sip` or `tel` are\nprioritized over the Voice capability in your Application.\n\n*Note: The `app` value is deprecated and will be removed in future.*\n',
        example: 'tel',
      }),
    voiceCallbackValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A SIP URI or telephone number. Must be used with the `voiceCallbackType` parameter.',
        example: '447700900000',
      }),
    voiceStatusCallback: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A webhook URI for Vonage to send a request to when a call ends',
        example: 'https://example.com/webhooks/status',
      }),
  })
  .openapi({ required: ['country', 'msisdn'] })
  .openapi('NumberDetailsUpdate')

const ResponseSchema = z
  .object({
    'error-code': z
      .string()
      .exactOptional()
      .openapi({
        description: 'The status code of the response. `200` indicates a successful request.',
        example: '200',
      }),
    'error-code-label': z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code description', example: 'success' }),
  })
  .openapi({ xml: { name: 'response' }, required: [] })
  .openapi('Response')

const Response420Schema = z
  .object({
    'error-code': z
      .string()
      .exactOptional()
      .openapi({
        description: 'The status code of the response. `200` indicates a successful request.',
        example: '420',
      }),
    'error-code-label': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'More detail about what happened. For example you may need to request the number via the dashboard, or you may already own this number.',
        example:
          'Numbers from this country can be requested from the Dashboard (https://dashboard.nexmo.com/buy-numbers) as they require a valid local address to be provided before being purchased.',
      }),
  })
  .openapi({ xml: { name: 'response' }, required: [] })
  .openapi('Response420')

const UnauthorizedSchema = z
  .object({
    'error-code': z
      .string()
      .exactOptional()
      .openapi({
        description: 'The status code of the response. `200` indicates a successful request.',
        example: '401',
      }),
    'error-code-label': z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code description', example: 'authentication failed' }),
  })
  .openapi({ xml: { name: 'response' }, required: [] })
  .openapi('Unauthorized')

const ApplicationIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The Application that you want to return the numbers for.',
      example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      in: 'query',
      name: 'application_id',
      required: false,
      schema: { type: 'string' },
    },
  })

const CountryParamsSchema = CountrySchema.openapi({
  param: {
    description: 'The two character country code to filter on (in ISO 3166-1 alpha-2 format)',
    in: 'query',
    name: 'country',
    required: true,
    schema: { $ref: '#/components/schemas/country' },
  },
})

const HasApplicationParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Set this optional field to `true` to restrict your results to numbers\nassociated with an Application (any Application). Set to `false` to\nfind all numbers not associated with any Application. Omit the field\nto avoid filtering on whether or not the number is assigned to an\nApplication.\n',
      example: false,
      in: 'query',
      name: 'has_application',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const IndexParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(1)
  .exactOptional()
  .openapi({
    param: {
      description: 'Page index',
      example: 1,
      in: 'query',
      name: 'index',
      required: false,
      schema: { default: 1, type: 'integer' },
    },
  })

const MsisdnParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'The inbound number you want to cancel, in [E.164 international format](/concepts/guides/glossary#e-164-format)',
      example: '447700900000',
      in: 'query',
      name: 'msisdn',
      required: true,
      schema: { type: 'string' },
    },
  })

const PatternParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The number pattern you want to search for. Use in conjunction with `search_pattern`.',
      example: '12345',
      in: 'query',
      name: 'pattern',
      required: false,
      schema: { type: 'string' },
    },
  })

const SearchPatternParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.union([z.literal(0), z.literal(1), z.literal(2)]),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      description:
        'The strategy you want to use for matching:\n\n\n* `0` - Search for numbers that start with `pattern` (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA)\n* `1` - Search for numbers that contain `pattern`\n* `2` - Search for numbers that end with `pattern`\n',
      example: 1,
      in: 'query',
      name: 'search_pattern',
      required: false,
      schema: { default: 0, enum: [0, 1, 2], type: 'integer' },
    },
  })

const SizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().max(100),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      description: 'Page size',
      example: 10,
      in: 'query',
      name: 'size',
      required: false,
      schema: { default: 10, maximum: 100, type: 'integer' },
    },
  })

const TypeParamsSchema = z
  .enum(['landline', 'mobile-lvn', 'landline-toll-free'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Set this parameter to filter the type of number, such as mobile or landline',
      example: 'mobile-lvn',
      in: 'query',
      name: 'type',
      required: false,
      schema: { enum: ['landline', 'mobile-lvn', 'landline-toll-free'], type: 'string' },
    },
  })

const ApiKeySecurityScheme = {
  description:
    'You can find your API key in the [developer dashboard](https://dashboard.nexmo.com)',
  in: 'query',
  name: 'api_key',
  type: 'apiKey',
}

const ApiSecretSecurityScheme = {
  description:
    'You can find your API secret in the [developer dashboard](https://dashboard.nexmo.com)',
  in: 'query',
  name: 'api_secret',
  type: 'apiKey',
}

export const getAccountNumbersRoute = createRoute({
  method: 'get',
  path: '/account/numbers',
  summary: 'List the numbers you own',
  description: 'Retrieve all the inbound numbers associated with your Vonage account.',
  operationId: 'getOwnedNumbers',
  request: {
    query: z.object({
      application_id: ApplicationIdParamsSchema,
      has_application: HasApplicationParamsSchema,
      country: CountrySchema.openapi({
        param: {
          in: 'query',
          name: 'country',
          required: false,
          schema: { $ref: '#/components/schemas/country' },
        },
      }).exactOptional(),
      pattern: PatternParamsSchema,
      search_pattern: SearchPatternParamsSchema,
      size: SizeParamsSchema,
      index: IndexParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: InboundNumbersSchema },
        'text/xml': { schema: InboundNumbersSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: AccountUnauthorizedSchema },
        'text/xml': { schema: AccountUnauthorizedSchema },
      },
    },
  },
})

export const postNumberBuyRoute = createRoute({
  method: 'post',
  path: '/number/buy',
  summary: 'Buy a number',
  description: 'Request to purchase a specific inbound number.',
  operationId: 'buyANumber',
  request: {
    body: {
      description: 'Number details',
      content: { 'application/x-www-form-urlencoded': { schema: NumberDetailsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ResponseSchema },
        'text/xml': { schema: ResponseSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: UnauthorizedSchema },
        'text/xml': { schema: UnauthorizedSchema },
      },
    },
    420: {
      description: 'Action failed',
      content: {
        'application/json': { schema: Response420Schema },
        'text/xml': { schema: Response420Schema },
      },
    },
  },
})

export const postNumberCancelRoute = createRoute({
  method: 'post',
  path: '/number/cancel',
  summary: 'Cancel a number',
  description: 'Cancel your subscription for a specific inbound number.',
  operationId: 'cancelANumber',
  request: {
    body: {
      description: 'Number details',
      content: { 'application/x-www-form-urlencoded': { schema: NumberDetailsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ResponseSchema },
        'text/xml': { schema: ResponseSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: UnauthorizedSchema },
        'text/xml': { schema: UnauthorizedSchema },
      },
    },
  },
})

export const getNumberSearchRoute = createRoute({
  method: 'get',
  path: '/number/search',
  summary: 'Search available numbers',
  description: 'Retrieve inbound numbers that are available for the specified country.',
  operationId: 'getAvailableNumbers',
  request: {
    query: z.object({
      country: CountryParamsSchema,
      type: TypeParamsSchema,
      pattern: PatternParamsSchema,
      search_pattern: SearchPatternParamsSchema,
      features: z
        .enum(['SMS', 'VOICE', 'SMS,VOICE', 'MMS', 'SMS,MMS', 'VOICE,MMS', 'SMS,MMS,VOICE'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Available features are `SMS`, `VOICE` and `MMS`. To look for numbers that support multiple features, use a comma-separated value: `SMS,MMS,VOICE`.',
            example: 'SMS',
            in: 'query',
            name: 'features',
            required: false,
            schema: {
              enum: ['SMS', 'VOICE', 'SMS,VOICE', 'MMS', 'SMS,MMS', 'VOICE,MMS', 'SMS,MMS,VOICE'],
              type: 'string',
            },
          },
        }),
      size: SizeParamsSchema,
      index: IndexParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: AvailableNumbersSchema },
        'text/xml': { schema: AvailableNumbersSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: AccountUnauthorizedSchema },
        'text/xml': { schema: AccountUnauthorizedSchema },
      },
    },
  },
})

export const postNumberUpdateRoute = createRoute({
  method: 'post',
  path: '/number/update',
  summary: 'Update a number',
  description: 'Change the behaviour of a number that you own.',
  operationId: 'updateANumber',
  request: {
    body: {
      description: 'Number details',
      content: { 'application/x-www-form-urlencoded': { schema: NumberDetailsUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ResponseSchema },
        'text/xml': { schema: ResponseSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: UnauthorizedSchema },
        'text/xml': { schema: UnauthorizedSchema },
      },
    },
  },
})
