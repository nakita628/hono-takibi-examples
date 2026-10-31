import { createRoute, z } from '@hono/zod-openapi'

const EventLinkSchema = z
  .object({
    self: z
      .object({
        href: z
          .url()
          .exactOptional()
          .openapi({
            description: 'URI of this document.',
            example: 'https://api.nexmo.com/beta/audit/events/aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    description: 'A link to this audit event object if you were to retrieve it individually.',
    required: [],
  })
  .openapi('EventLink')

const CallbackUrlSchema = z
  .object({
    method: z
      .enum(['GET', 'POST'])
      .exactOptional()
      .openapi({
        description: 'The HTTP method used to make a callback to your application',
        example: 'GET',
      }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The URL used for a callback to your application',
        example: 'https://example.org/my-app-callback',
      }),
  })
  .openapi({ required: [] })
  .openapi('CallbackUrl')

const ContextAppCreateSchema = z
  .object({
    appId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'UUID of the app that was created',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
    created: z
      .object({
        accountId: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Which account the app is associated with',
            example: 'abcdef01',
          }),
        answer_url: CallbackUrlSchema.exactOptional(),
        appId: z
          .string()
          .exactOptional()
          .openapi({
            description: 'UUID of the app that was created',
            example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
          }),
        event_url: CallbackUrlSchema.exactOptional(),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the application created', example: 'My Voice App' }),
        type: z
          .string()
          .exactOptional()
          .openapi({ description: 'The type of application created', example: 'voice' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ContextAppCreate')

const ContextNumberLinkingSchema = z
  .object({
    account: z
      .string()
      .exactOptional()
      .openapi({ description: 'Which account the number is associated with', example: 'abcdef01' }),
    applicationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'UUID of the app the number is being linked/unlinked to',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country of the number', example: 'GB' }),
    msisdn: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The phone number linked/unlinked to your application',
        example: '447000123456',
      }),
  })
  .openapi({ required: [] })
  .openapi('ContextNumberLinking')

const ContextNumberUpdateSchema = z
  .object({
    country: z.string().exactOptional().openapi({ description: 'The country of the number' }),
    http: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The URL of the endpoint the number has been forwarded to',
        example: 'https://example.org/my-app-callback',
      }),
    msisdn: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The phone number linked/unlinked to your application',
        example: '447000123456',
      }),
    'voice-type': z
      .enum(['tel', 'sip', 'vxml', 'app'])
      .exactOptional()
      .openapi({
        description: 'The type of endpoint the number has been forwarded to',
        example: 'app',
      }),
    'voice-value': z
      .string()
      .exactOptional()
      .openapi({
        description: 'The value of the endpoint the number has been forwarded to',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
  })
  .openapi({ required: [] })
  .openapi('ContextNumberUpdate')

const EventTypesSchema = z
  .enum([
    'USER_STATUS',
    'USER_UPDATE',
    'USER_BILLING_UPDATE',
    'USER_CREATE',
    'USER_LOGIN',
    'USER_LOGOUT',
    'USER_PRODUCT_SEARCH',
    'USER_API_KEYS_UPDATE',
    'ACCOUNT_SECRET_DELETE',
    'ACCOUNT_SECRET_CREATE',
    'ACCOUNT_UPDATE_SPAMMER',
    'ACCOUNT_UPDATE_SETTINGS_API',
    'NUMBER_ASSIGN',
    'NUMBER_UPDATED',
    'NUMBER_RELEASE',
    'NUMBER_LINKED',
    'NUMBER_UNLINKED',
    'APP_CREATE',
    'APP_UPDATE',
    'APP_DELETE',
    'APP_DISABLE',
    'APP_ENABLE',
    'IP_WHITELIST_CREATE',
    'IP_WHITELIST_DELETE',
    'AUTORELOAD_ENABLE',
    'AUTORELOAD_UPDATE',
    'AUTORELOAD_DISABLE',
  ])
  .openapi({ description: 'The type of the audit event.', example: 'APP_CREATE' })
  .openapi('EventTypes')

const AuditEventSchema = z
  .object({
    _links: EventLinkSchema.exactOptional(),
    account_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The NEXMO_API_KEY of the Vonage API account that the audit event is associated with.',
        example: 'abcd1234',
      }),
    context: z
      .xor([ContextAppCreateSchema, ContextNumberLinkingSchema, ContextNumberUpdateSchema])
      .exactOptional()
      .openapi({
        description:
          'A valid JSON object with information detailing the context of the audit event.',
        example: {
          created: {
            accountId: 'abcdef01',
            answer_url: { method: 'GET', url: 'https://example.org/call' },
            appId: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
            event_url: { method: 'POST', url: 'https://example.org/event' },
            name: 'My voice app',
            type: 'voice',
          },
        },
      }),
    created_at: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'When the audit event was created.',
        example: '2018-07-04T11:41:32',
      }),
    event_type: EventTypesSchema.exactOptional(),
    event_type_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the event type', example: 'Application created.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'UUID of the audit event',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
    source: z
      .enum(['CD', 'DEVAPI'])
      .exactOptional()
      .openapi({
        description: 'The source of the event.\nCD: Customer Dashboard DEVAPI: via Developer API\n',
        example: 'CD',
      }),
    source_country: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ISO 3166-1 Alpha-2 country code recorded for the event.',
        example: 'GB',
      }),
    source_description: z
      .enum(['Customer Dashboard', 'Developer API'])
      .exactOptional()
      .openapi({
        description: 'Description of the audit event source.',
        example: 'Customer Dashboard',
      }),
    source_ip: z
      .ipv4()
      .exactOptional()
      .openapi({
        description: 'The IP address used to make the account change.',
        example: '192.0.2.0',
      }),
    user_email: z
      .email()
      .exactOptional()
      .openapi({
        description: 'Email of the user whose account the audit event is associated with.',
        example: 'user@example.org',
      }),
    user_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of the user that the audit event is associated with.',
        example: 1234567,
      }),
  })
  .openapi({ required: [] })
  .openapi('AuditEvent')

const AuditEventTypeSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the event type', example: 'Application created.' }),
    type: EventTypesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuditEventType')

const AuditEventTypesRespSchema = z
  .object({
    eventTypes: z
      .array(AuditEventTypeSchema)
      .exactOptional()
      .openapi({ description: 'An array of audit event types.' }),
  })
  .openapi({ required: [] })
  .openapi('AuditEventTypesResp')

const PaginationLinksSchema = z
  .object({
    last: z
      .object({
        href: z
          .url()
          .exactOptional()
          .openapi({
            description: 'URI of the last document in the sequence.',
            example: 'http://api.nexmo.com/beta/audit/events?page=2&size=30',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    next: z
      .object({
        href: z
          .url()
          .exactOptional()
          .openapi({
            description: 'URI of the next document.',
            example: 'http://api.nexmo.com/beta/audit/events?page=2&size=30',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    self: z
      .object({
        href: z
          .url()
          .exactOptional()
          .openapi({
            description: 'URI of this document.',
            example: 'http://api.nexmo.com/beta/audit/events',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Container containing self, next and last page links.', required: [] })
  .openapi('PaginationLinks')

const PaginationDataSchema = z
  .object({
    number: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Which page of the pagination sequence you are looking at.',
        example: 1,
      }),
    size: z
      .int()
      .min(1)
      .max(100)
      .default(30)
      .exactOptional()
      .openapi({ description: 'The total number of items in this response (page).', example: 100 }),
    totalElements: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of items across all pages.', example: 120 }),
    totalPages: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of pages of data in the response.', example: 2 }),
  })
  .openapi({ description: 'Page containing results.', required: [] })
  .openapi('PaginationData')

const AuditRespSchema = z
  .object({
    _embedded: z
      .object({ events: z.array(AuditEventSchema).exactOptional() })
      .exactOptional()
      .openapi({ description: 'Container containing the `events` array.', required: [] }),
    _links: PaginationLinksSchema.exactOptional(),
    page: PaginationDataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuditResp')

const ErrorBadRequestSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human readable description of the error', example: 'BadRequest' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A longer description of the error',
        example: 'This was a bad request.',
      }),
    status: z
      .int()
      .exactOptional()
      .openapi({ description: 'The HTTP Status code of the error', example: 400 }),
  })
  .openapi({ required: [] })
  .openapi('ErrorBadRequest')

const ErrorForbiddenSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human readable description of the error', example: 'Forbidden' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A longer description of the error',
        example: 'An example goes here',
      }),
    status: z
      .int()
      .exactOptional()
      .openapi({ description: 'The HTTP Status code of the error', example: 403 }),
  })
  .openapi({ required: [] })
  .openapi('ErrorForbidden')

const ErrorNotFoundSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human readable description of the error XXX',
        example: 'Not Found',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A longer description of the error YYY',
        example: 'Event with provided id: aaaaaaaa-bbbb-cccc-dddd-0123456789ab was not found',
      }),
    status: z
      .int()
      .exactOptional()
      .openapi({ description: 'The HTTP Status code of the error', example: 404 }),
  })
  .openapi({ required: [] })
  .openapi('ErrorNotFound')

const ErrorUnauthorizedSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human readable description of the error',
        example: 'Unauthorized',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A longer description of the error',
        example:
          'Full authentication is required. JWT was not found in "Authorization" HTTP header.',
      }),
    status: z
      .int()
      .exactOptional()
      .openapi({ description: 'The HTTP Status code of the error', example: 401 }),
  })
  .openapi({ required: [] })
  .openapi('ErrorUnauthorized')

const NoContentSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human readable description of the error AAA',
        example: 'No Content',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'A longer description of the error BBB', example: 'No content' }),
    status: z
      .int()
      .exactOptional()
      .openapi({ description: 'The HTTP Status code of the error', example: 204 }),
  })
  .openapi({ required: [] })
  .openapi('NoContent')

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const getEventsRoute = createRoute({
  method: 'get',
  path: '/events',
  summary: 'Retrieve audit events',
  description:
    'Get a series of audit events describing changes made to your Vonage API account over time.\n',
  operationId: 'getEvents',
  request: {
    query: z.object({
      event_type: EventTypesSchema.openapi({
        param: {
          description: 'Filter results by this event type.',
          in: 'query',
          name: 'event_type',
          schema: { $ref: '#/components/schemas/EventTypes' },
          required: false,
        },
      }).exactOptional(),
      date_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Start of time range for audit events. DateTime in ISO-8601 format.',
            in: 'query',
            name: 'date_from',
            schema: { type: 'string' },
            required: false,
          },
        }),
      date_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'End of time range for audit events. DateTime in ISO-8601 format.',
            in: 'query',
            name: 'date_to',
            schema: { type: 'string' },
            required: false,
          },
        }),
      search_text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only audit events where the JSON object contains this search text. Must be legal text for a JSON attribute value, that is quotes and braces must be escaped.',
            in: 'query',
            name: 'search_text',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number starting with page 1.',
            in: 'query',
            name: 'page',
            schema: { type: 'string' },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of elements per page.',
            in: 'query',
            name: 'size',
            schema: { default: 30, maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AuditRespSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorUnauthorizedSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})

export const optionsEventsRoute = createRoute({
  method: 'options',
  path: '/events',
  summary: 'Retrieve audit event types',
  description: 'Get audit event types.\n',
  operationId: 'getEventsOptions',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AuditEventTypesRespSchema } },
    },
    204: {
      description: 'No Content',
      content: { 'application/json': { schema: NoContentSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorUnauthorizedSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})

export const getEventsIdRoute = createRoute({
  method: 'get',
  path: '/events/{id}',
  summary: 'Retrieve individual audit event',
  description: 'Get the specified audit event.\n',
  operationId: 'getEvent',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The UUID of the audit event to retrieve',
            example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AuditEventSchema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorUnauthorizedSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})
