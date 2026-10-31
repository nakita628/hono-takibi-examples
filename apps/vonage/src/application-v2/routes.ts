import { createRoute, z } from '@hono/zod-openapi'

const MeetingsCapabilitySchema = z
  .object({
    webhooks: z
      .object({
        recording_changed: z
          .object({
            address: z
              .string()
              .exactOptional()
              .openapi({ example: 'https://example.com/webhooks/event' }),
            http_method: z
              .enum(['GET', 'POST', 'PUT'])
              .exactOptional()
              .openapi({ example: 'POST' }),
          })
          .exactOptional()
          .openapi({
            description: 'Vonage will send recording changed events to this URL',
            required: [],
          }),
        room_changed: z
          .object({
            address: z
              .string()
              .exactOptional()
              .openapi({ example: 'https://example.com/webhooks/event' }),
            http_method: z
              .enum(['GET', 'POST', 'PUT'])
              .exactOptional()
              .openapi({ example: 'POST' }),
          })
          .exactOptional()
          .openapi({
            description: 'Vonage will send call room changed events to this URL',
            required: [],
          }),
        session_changed: z
          .object({
            address: z
              .string()
              .exactOptional()
              .openapi({ example: 'https://example.com/webhooks/event' }),
            http_method: z
              .enum(['GET', 'POST', 'PUT'])
              .exactOptional()
              .openapi({ example: 'POST' }),
          })
          .exactOptional()
          .openapi({
            description: 'Vonage will send call session changed events to this URL',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Meetings related configuration', required: [] })
  .openapi('MeetingsCapability')

const MessagesCapabilitySchema = z
  .object({
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'If not populated will be set to v1' }),
    webhooks: z
      .object({
        inbound_url: z
          .object({
            address: z
              .string()
              .exactOptional()
              .openapi({ example: 'https://example.com/webhooks/inbound' }),
            http_method: z.literal('POST').exactOptional().openapi({ example: 'POST' }),
          })
          .exactOptional()
          .openapi({
            description: 'Vonage will forward inbound messages to this URL',
            'x-nexmo-developer-collection-description-shown': true,
            required: [],
          }),
        status_url: z
          .object({
            address: z
              .string()
              .exactOptional()
              .openapi({ example: 'https://example.com/webhooks/status' }),
            http_method: z.literal('POST').exactOptional().openapi({ example: 'POST' }),
          })
          .exactOptional()
          .openapi({
            description:
              'Vonage will send message status updates (e.g. `delivered`, `seen`) to this URL',
            'x-nexmo-developer-collection-description-shown': true,
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Messages / Dispatch related configuration', required: [] })
  .openapi('MessagesCapability')

const RtcCapabilitySchema = z
  .object({
    leg_persistence_time: z.int32().min(1).max(31).exactOptional().openapi({ example: 5 }),
    signed_callbacks: z.boolean().exactOptional().openapi({ example: true }),
    webhooks: z
      .object({
        event_url: z
          .object({
            address: z
              .string()
              .exactOptional()
              .openapi({ example: 'https://example.com/webhooks/event' }),
            http_method: z.enum(['GET', 'POST']).exactOptional().openapi({ example: 'POST' }),
          })
          .exactOptional()
          .openapi({
            description: 'Vonage will send RTC events to this URL',
            'x-nexmo-developer-collection-description-shown': true,
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'RTC / Conversation Service related configuration', required: [] })
  .openapi('RtcCapability')

const VerifyCapabilitySchema = z
  .object({
    version: z
      .literal('v2')
      .exactOptional()
      .openapi({
        description: 'Verify current version. If specified must be set to v2',
        example: 'v2',
      }),
    webhooks: z
      .object({
        status_url: z
          .object({
            address: z
              .string()
              .exactOptional()
              .openapi({ example: 'https://example.com/webhooks/event' }),
            http_method: z.literal('POST').exactOptional().openapi({ example: 'POST' }),
          })
          .exactOptional()
          .openapi({
            description:
              'Vonage will send request status events (e.g. `progress`, `complete`) to this URL',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Two factor authentication related configuration', required: [] })
  .openapi('VerifyCapability')

const VoiceCapabilitySchema = z
  .object({
    conversation_ttl: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'ttl used by the NCCO in case you’re using a conversation action (is set in hours and is 48 by default)',
        example: 30,
      }),
    payments: z
      .object({
        gateways: z
          .array(
            z
              .object({
                credential: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'used to identify the gateway in the credentials service',
                    example: '26f2a89e-6fcd-11ed-a1eb-0242ac120002',
                  }),
                mode: z
                  .enum(['test', 'live'])
                  .exactOptional()
                  .openapi({
                    description:
                      'determines if the user has completed the integration with the gateway',
                    example: 'live',
                  }),
                type: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'payment gateway type (Stripe, Azure)',
                    example: 'Stripe',
                  }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'payment gateways like Stripe' }),
      })
      .exactOptional()
      .openapi({ description: 'encompass all the payment related fields', required: [] }),
    signed_callbacks: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'verify that a request is coming from Vonage servers (a jwt token will be sent on the callback authorization header)',
        example: true,
      }),
    webhooks: z
      .object({
        answer_url: z
          .object({
            address: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The URL that Vonage requests when a call is placed/received. Must return an NCCO',
                example: 'https://example.com/webhooks/answer',
              }),
            connection_timeout: z
              .int()
              .min(300)
              .max(1000)
              .default(1000)
              .exactOptional()
              .openapi({
                description:
                  "If Vonage can't connect to the webhook URL for this specified amount of time, then Vonage makes one additional attempt to connect to the webhook endpoint. This is an integer value specified in milliseconds.",
                example: 500,
              }),
            http_method: z
              .enum(['GET', 'POST'])
              .exactOptional()
              .openapi({
                description: 'The HTTP method used to fetch your NCCO from your `answer_url`',
                example: 'POST',
              }),
            socket_timeout: z
              .int()
              .min(1000)
              .max(5000)
              .default(5000)
              .exactOptional()
              .openapi({
                description:
                  "If a response from the webhook URL can't be read for this specified amount of time, then Vonage makes one additional attempt to read the webhook endpoint. This is an integer value specified in milliseconds.",
                example: 3000,
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        event_url: z
          .object({
            address: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The URL that Vonage sends events related to your call to',
                example: 'https://example.com/webhooks/event',
              }),
            connection_timeout: z
              .int()
              .min(300)
              .max(1000)
              .default(1000)
              .exactOptional()
              .openapi({
                description:
                  "If Vonage can't connect to the webhook URL for this specified amount of time, then Vonage makes one additional attempt to connect to the webhook endpoint. This is an integer value specified in milliseconds.",
                example: 500,
              }),
            http_method: z
              .enum(['GET', 'POST'])
              .exactOptional()
              .openapi({
                description: 'The HTTP method used to send events to your server',
                example: 'POST',
              }),
            socket_timeout: z
              .int()
              .min(1000)
              .max(10000)
              .default(10000)
              .exactOptional()
              .openapi({
                description:
                  "If a response from the webhook URL can't be read for this specified amount of time, then Vonage makes one additional attempt to read the webhook endpoint. This is an integer value specified in milliseconds.",
                example: 3000,
              }),
          })
          .exactOptional()
          .openapi({
            description: 'Vonage will send call events (e.g. `ringing`, `answered`) to this URL',
            required: [],
          }),
        fallback_answer_url: z
          .object({
            address: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'If your `answer_url` is offline or returns a HTTP error code, Vonage will make a request to a\n`fallback_answer_url` if it is set. This URL must return an NCCO.\n',
                example: 'https://fallback.example.com/webhooks/answer',
              }),
            connection_timeout: z
              .int()
              .min(300)
              .max(1000)
              .default(1000)
              .exactOptional()
              .openapi({
                description:
                  "If Vonage can't connect to the webhook URL for this specified amount of time, then Vonage makes one additional attempt to connect to the webhook endpoint. This is an integer value specified in milliseconds.",
                example: 500,
              }),
            http_method: z
              .enum(['GET', 'POST'])
              .exactOptional()
              .openapi({
                description: 'The HTTP method used to fetch your NCCO from your `answer_url`',
                example: 'POST',
              }),
            socket_timeout: z
              .int()
              .min(1000)
              .max(5000)
              .default(5000)
              .exactOptional()
              .openapi({
                description:
                  "If a response from the webhook URL can't be read for this specified amount of time, then Vonage makes one additional attempt to read the webhook endpoint. This is an integer value specified in milliseconds.",
                example: 3000,
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Voice related configuration', required: [] })
  .openapi('VoiceCapability')

const CapabilitiesSchema = z
  .object({
    meetings: MeetingsCapabilitySchema.exactOptional(),
    messages: MessagesCapabilitySchema.exactOptional(),
    rtc: RtcCapabilitySchema.exactOptional(),
    vbc: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Specify the `vbc` capability to enable zero-rated calls for VBC number programmability service applications. This is always an empty object.',
      }),
    verify: VerifyCapabilitySchema.exactOptional(),
    voice: VoiceCapabilitySchema.exactOptional(),
  })
  .openapi({
    description:
      'Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.',
    required: [],
  })
  .openapi('Capabilities')

const ApplicationResponseSchema = z
  .object({
    capabilities: CapabilitiesSchema.exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: "The application's ID",
        example: '78d335fa-323d-0114-9c3d-d6f0d48968cf',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Friendly identifier for your application. This is not unique',
        example: 'My Application',
      }),
    privacy: z
      .object({
        improve_ai: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              "If set to `true`, Vonage may store and use your content and data for the improvement of Vonage's AI based services and technologies.",
            example: true,
          }),
      })
      .exactOptional()
      .openapi({ description: 'Application privacy config', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ApplicationResponse')

const ApplicationResponseCollectionSchema = z
  .object({
    _embedded: z
      .object({ applications: z.array(ApplicationResponseSchema).exactOptional() })
      .exactOptional()
      .openapi({
        description: 'A list of applications matching your existing filters',
        required: [],
      }),
    page: z
      .int()
      .exactOptional()
      .openapi({ description: 'The current page number (starts at 1)', example: 1 }),
    page_size: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of applications per page', example: 10 }),
    total_items: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of applications', example: 6 }),
    total_pages: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of pages returned', example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('ApplicationResponseCollection')

const InvalidPayloadErrorResponse = {
  description: 'Invalid Request',
  content: {
    'application/json': {
      schema: z
        .object({
          detail: z
            .string()
            .exactOptional()
            .openapi({ example: 'The request failed due to validation errors' }),
          instance: z
            .string()
            .exactOptional()
            .openapi({ description: 'Instance ID', example: '797a8f199c45014ab7b08bfe9cc1c12c' }),
          invalid_parameters: z
            .array(
              z
                .object({
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'capabilities.voice.webhooks.answer_url.http_method' }),
                  reason: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'must be one of: GET, POST' }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          title: z.string().exactOptional().openapi({ example: 'Bad Request' }),
          type: z
            .string()
            .exactOptional()
            .openapi({
              example: 'https://developer.nexmo.com/api-errors/application#payload-validation',
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  summary: 'List available applications',
  operationId: 'listApplication',
  request: {
    query: z.object({
      page_size: z
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
            description: 'The number of applications per page',
            in: 'query',
            name: 'page_size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      page: z
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
            description: 'The current page number (starts at 1)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationResponseCollectionSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: 'The request failed due to validation errors' }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              invalid_parameters: z
                .array(
                  z
                    .object({
                      name: z.string().exactOptional().openapi({ example: 'page_size' }),
                      reason: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'must be between 1 and 100' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              title: z.string().exactOptional().openapi({ example: 'Bad Request' }),
              type: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'https://developer.nexmo.com/api-errors/application#list-validation',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Credential is missing or invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: 'You did not provide correct credentials.' }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({ example: 'Invalid credentials supplied' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#unauthorized' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    405: {
      description: 'Invalid Request Method',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: "Request method 'TRACE' not supported" }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z.string().exactOptional().openapi({ example: 'Request method not allowed' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#wrong-verb' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    406: {
      description: 'Invalid Accept Header',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    "Invalid Accept header provided. Must be one of the following: 'application/json'",
                }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z.string().exactOptional().openapi({ example: 'Invalid Accept header' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#accept-header' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postRoute = createRoute({
  method: 'post',
  path: '/',
  summary: 'Create an application',
  operationId: 'createApplication',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              capabilities: CapabilitiesSchema.exactOptional(),
              keys: z
                .object({
                  public_key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Public key',
                      example:
                        '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCA\nKOxjsU4pf/sMFi9N0jqcSLcjxu33G\nd/vynKnlw9SENi+UZR44GdjGdmfm1\ntL1eA7IBh2HNnkYXnAwYzKJoa4eO3\n0kYWekeIZawIwe/g9faFgkev+1xsO\nOUNhPx2LhuLmgwWSRS4L5W851Xe3f\nUQIDAQAB\n-----END PUBLIC KEY-----\n',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              name: z
                .string()
                .openapi({ description: 'Application Name', example: 'Demo Application' }),
              privacy: z
                .object({
                  improve_ai: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description:
                        "If set to `true`, Vonage may store and use your content and data for the improvement of Vonage's AI based services and technologies.",
                      example: true,
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Application privacy config', required: [] }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ApplicationResponseSchema.and(
            z
              .object({
                keys: z
                  .object({
                    private_key: z
                      .string()
                      .exactOptional()
                      .openapi({
                        example:
                          '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFA\nASCBKcwggSjAgEAAoIBAQDEPpvi+3\nRH1efQ\\nkveWzZDrNNoEXmBw61w+O\n0u/N36tJnN5XnYecU64yHzu2ByEr0\n7iIvYbavFnADwl\\nHMTJwqDQakpa3\n8/SFRnTDq3zronvNZ6nOp7S6K7pcZ\nrw/CvrL6hXT1x7cGBZ4jPx\\nqhjqY\nuJPgZD7OVB69oYOV92vIIJ7JLYwqb\n-----END PRIVATE KEY-----\n',
                      }),
                    public_key: z
                      .string()
                      .exactOptional()
                      .openapi({
                        example:
                          '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCA\nKOxjsU4pf/sMFi9N0jqcSLcjxu33G\nd/vynKnlw9SENi+UZR44GdjGdmfm1\ntL1eA7IBh2HNnkYXnAwYzKJoa4eO3\n0kYWekeIZawIwe/g9faFgkev+1xsO\nOUNhPx2LhuLmgwWSRS4L5W851Xe3f\nUQIDAQAB\n-----END PUBLIC KEY-----\n',
                      }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    400: InvalidPayloadErrorResponse,
    401: {
      description: 'Credential is missing or invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: 'You did not provide correct credentials.' }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({ example: 'Invalid credentials supplied' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#unauthorized' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    405: {
      description: 'Invalid Request Method',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: "Request method 'TRACE' not supported" }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z.string().exactOptional().openapi({ example: 'Request method not allowed' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#wrong-verb' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    406: {
      description: 'Invalid Accept Header',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    "Invalid Accept header provided. Must be one of the following: 'application/json'",
                }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z.string().exactOptional().openapi({ example: 'Invalid Accept header' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#accept-header' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    415: {
      description: 'Unsupported Content Type Header',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    "Unsupported Content-Type header provided. Must be one of the following: 'application/json'",
                }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({ example: 'Unsupported Content-Type header' }),
              type: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'https://developer.vonage.com/api-errors#content-type-header',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getIdRoute = createRoute({
  method: 'get',
  path: '/{id}',
  summary: 'Get an application',
  operationId: 'getApplication',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the application',
            example: '78d335fa-323d-0114-9c3d-d6f0d48968cf',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationResponseSchema } },
    },
    401: {
      description: 'Credential is missing or invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: 'You did not provide correct credentials.' }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({ example: 'Invalid credentials supplied' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#unauthorized' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Resource Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: "ID 'ABC123' does not exist, or you do not have access" }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z.string().exactOptional().openapi({ example: 'Not Found' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#not-found' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    405: {
      description: 'Invalid Request Method',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: "Request method 'TRACE' not supported" }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z.string().exactOptional().openapi({ example: 'Request method not allowed' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#wrong-verb' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    406: {
      description: 'Invalid Accept Header',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    "Invalid Accept header provided. Must be one of the following: 'application/json'",
                }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z.string().exactOptional().openapi({ example: 'Invalid Accept header' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#accept-header' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putIdRoute = createRoute({
  method: 'put',
  path: '/{id}',
  summary: 'Update an application',
  operationId: 'updateApplication',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the application',
            example: '78d335fa-323d-0114-9c3d-d6f0d48968cf',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              capabilities: CapabilitiesSchema.exactOptional(),
              keys: z
                .object({
                  public_key: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Public key',
                      example:
                        '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCA\nKOxjsU4pf/sMFi9N0jqcSLcjxu33G\nd/vynKnlw9SENi+UZR44GdjGdmfm1\ntL1eA7IBh2HNnkYXnAwYzKJoa4eO3\n0kYWekeIZawIwe/g9faFgkev+1xsO\nOUNhPx2LhuLmgwWSRS4L5W851Xe3f\nUQIDAQAB\n-----END PUBLIC KEY-----\n',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              name: z
                .string()
                .openapi({ description: 'Application Name', example: 'Demo Application' }),
              privacy: z
                .object({
                  improve_ai: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        "If set to `true`, Vonage may store and use your content and data for the improvement of Vonage's AI based services and technologies.",
                      example: true,
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Application privacy config', required: [] }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ApplicationResponseSchema.and(
            z
              .object({
                keys: z
                  .object({
                    private_key: z
                      .string()
                      .exactOptional()
                      .openapi({
                        example:
                          '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFA\nASCBKcwggSjAgEAAoIBAQDEPpvi+3\nRH1efQ\\nkveWzZDrNNoEXmBw61w+O\n0u/N36tJnN5XnYecU64yHzu2ByEr0\n7iIvYbavFnADwl\\nHMTJwqDQakpa3\n8/SFRnTDq3zronvNZ6nOp7S6K7pcZ\nrw/CvrL6hXT1x7cGBZ4jPx\\nqhjqY\nuJPgZD7OVB69oYOV92vIIJ7JLYwqb\n-----END PRIVATE KEY-----\n',
                      }),
                    public_key: z
                      .string()
                      .exactOptional()
                      .openapi({
                        example:
                          '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCA\nKOxjsU4pf/sMFi9N0jqcSLcjxu33G\nd/vynKnlw9SENi+UZR44GdjGdmfm1\ntL1eA7IBh2HNnkYXnAwYzKJoa4eO3\n0kYWekeIZawIwe/g9faFgkev+1xsO\nOUNhPx2LhuLmgwWSRS4L5W851Xe3f\nUQIDAQAB\n-----END PUBLIC KEY-----\n',
                      }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    400: InvalidPayloadErrorResponse,
    401: {
      description: 'Credential is missing or invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: 'You did not provide correct credentials.' }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({ example: 'Invalid credentials supplied' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#unauthorized' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Resource Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: "ID 'ABC123' does not exist, or you do not have access" }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z.string().exactOptional().openapi({ example: 'Not Found' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#not-found' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    405: {
      description: 'Invalid Request Method',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: "Request method 'TRACE' not supported" }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z.string().exactOptional().openapi({ example: 'Request method not allowed' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#wrong-verb' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    406: {
      description: 'Invalid Accept Header',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    "Invalid Accept header provided. Must be one of the following: 'application/json'",
                }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z.string().exactOptional().openapi({ example: 'Invalid Accept header' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#accept-header' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    415: {
      description: 'Unsupported Content Type Header',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    "Unsupported Content-Type header provided. Must be one of the following: 'application/json'",
                }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({ example: 'Unsupported Content-Type header' }),
              type: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'https://developer.vonage.com/api-errors#content-type-header',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteIdRoute = createRoute({
  method: 'delete',
  path: '/{id}',
  summary: 'Delete an application',
  description: 'Deleting an application **cannot be undone**.',
  operationId: 'deleteApplication',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the application',
            example: '78d335fa-323d-0114-9c3d-d6f0d48968cf',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    401: {
      description: 'Credential is missing or invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: 'You did not provide correct credentials.' }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({ example: 'Invalid credentials supplied' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#unauthorized' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Resource Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: "ID 'ABC123' does not exist, or you do not have access" }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z.string().exactOptional().openapi({ example: 'Not Found' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#not-found' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    405: {
      description: 'Invalid Request Method',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: "Request method 'TRACE' not supported" }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z.string().exactOptional().openapi({ example: 'Request method not allowed' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#wrong-verb' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    406: {
      description: 'Invalid Accept Header',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    "Invalid Accept header provided. Must be one of the following: 'application/json'",
                }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Instance ID',
                  example: '797a8f199c45014ab7b08bfe9cc1c12c',
                }),
              title: z.string().exactOptional().openapi({ example: 'Invalid Accept header' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://developer.vonage.com/api-errors#accept-header' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
