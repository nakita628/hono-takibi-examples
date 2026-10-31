import { createRoute, z } from '@hono/zod-openapi'

const AbuseTicketSchema = z
  .object({
    closed: z.boolean().default(false).openapi({ description: 'Is this abuse ticket closed?' }),
    closedAt: z.string().openapi({ description: 'The date the abuse ticket was closed' }),
    createdAt: z.string().openapi({ description: 'The date the abuse ticket was created' }),
    domainIp: z
      .string()
      .openapi({ description: 'The domain or IP the suspected abuse was reported against' }),
    reporter: z
      .string()
      .openapi({ description: 'The shopper id of the person who reported the suspected abuse' }),
    source: z
      .string()
      .openapi({ description: 'The single URL or IP the suspected abuse was reported against' }),
    target: z.string().openapi({ description: 'The company the suspected abuse is targeting' }),
    ticketId: z.string().openapi({ description: 'Abuse ticket ID' }),
    type: z
      .enum([
        'A_RECORD',
        'CHILD_ABUSE',
        'CONTENT',
        'FRAUD_WIRE',
        'IP_BLOCK',
        'MALWARE',
        'NETWORK_ABUSE',
        'PHISHING',
        'SPAM',
      ])
      .openapi({ description: 'The type of abuse being reported' }),
  })
  .openapi({
    description: 'The associated fields returned, given a unique abuse ticket id',
    required: [
      'ticketId',
      'reporter',
      'domainIp',
      'closed',
      'type',
      'target',
      'source',
      'createdAt',
      'closedAt',
    ],
  })
  .openapi('AbuseTicket')

const AbuseTicketCreateSchema = z
  .object({
    info: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional information that may assist the abuse investigator. ie: server logs or email headers/body for SPAM',
      }),
    infoUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'Reporter URL if housing additional information that may assist the abuse investigator',
      }),
    intentional: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Do you believe this is intentional abuse by the domain holder?' }),
    proxy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Proxy information required to view the abuse being reported. ie: Specific IP used, or country of IP viewing from',
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL or IP where live abuse content is located at. ie: https://www.example.com/bad_stuff/bad.php',
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The brand/company the abuse is targeting. ie: brand name/bank name',
      }),
    type: z
      .enum([
        'A_RECORD',
        'CHILD_ABUSE',
        'CONTENT',
        'FRAUD_WIRE',
        'IP_BLOCK',
        'MALWARE',
        'NETWORK_ABUSE',
        'PHISHING',
        'SPAM',
      ])
      .exactOptional()
      .openapi({ description: 'The type of abuse being reported.' }),
  })
  .openapi({ required: [] })
  .openapi('AbuseTicketCreate')

const AbuseTicketIdSchema = z
  .object({ u_number: z.string().exactOptional().openapi({ description: 'Abuse ticket ID' }) })
  .openapi({
    description: 'The primary key of a newly created abuse ticket',
    required: ['ticketId'],
  })
  .openapi('AbuseTicketId')

const PaginationSchema = z
  .object({
    first: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional link to first list of results' }),
    last: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional link to last list of results' }),
    next: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional link to next list of results' }),
    previous: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional link to previous list of results' }),
    total: z.int().exactOptional().openapi({ description: 'Number of records available' }),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const AbuseTicketListSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    ticketIds: z
      .array(z.string())
      .openapi({ description: 'A list of abuse ticket ids originated by this reporter.' }),
  })
  .openapi({ required: ['ticketIds'] })
  .openapi('AbuseTicketList')

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
          '1) JSONPath referring to the field within the data containing an error<br/>or<br/>2) JSONPath referring to an object containing an error',
      }),
    pathRelated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JSONPath referring to the field on the object referenced by `path` containing an error',
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
    stack: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Stack trace indicating where the error occurred.<br/>\nNOTE: This attribute <strong>MAY</strong> be included for Development and Test environments.\nHowever, it <strong>MUST NOT</strong> be exposed from OTE nor Production systems.',
      }),
  })
  .openapi({ required: ['code'] })
  .openapi('Error')

export const getV1AbuseTicketsRoute = createRoute({
  method: 'get',
  path: '/v1/abuse/tickets',
  tags: ['v1'],
  summary: 'List all abuse tickets ids that match user provided filters',
  operationId: 'getTickets',
  request: {
    query: z.object({
      type: z
        .enum([
          'A_RECORD',
          'CHILD_ABUSE',
          'CONTENT',
          'FRAUD_WIRE',
          'IP_BLOCK',
          'MALWARE',
          'NETWORK_ABUSE',
          'PHISHING',
          'SPAM',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'The type of abuse.',
            in: 'query',
            name: 'type',
            required: false,
            schema: {
              enum: [
                'A_RECORD',
                'CHILD_ABUSE',
                'CONTENT',
                'FRAUD_WIRE',
                'IP_BLOCK',
                'MALWARE',
                'NETWORK_ABUSE',
                'PHISHING',
                'SPAM',
              ],
              type: 'string',
            },
          },
        }),
      closed: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Is this abuse ticket closed?',
            in: 'query',
            name: 'closed',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      sourceDomainOrIp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The domain name or ip address the abuse originated from',
            in: 'query',
            name: 'sourceDomainOrIp',
            required: false,
            schema: { format: 'host-name-or-ip-address', type: 'string' },
          },
        }),
      target: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The brand/company the abuse is targeting. ie: brand name/bank name',
            in: 'query',
            name: 'target',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdStart: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The earliest abuse ticket creation date to pull abuse tickets for',
            in: 'query',
            name: 'createdStart',
            required: false,
            schema: { format: 'iso-datetime', type: 'string' },
          },
        }),
      createdEnd: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The latest abuse ticket creation date to pull abuse tickets for',
            in: 'query',
            name: 'createdEnd',
            required: false,
            schema: { format: 'iso-datetime', type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of abuse ticket numbers to return.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, format: 'integer-positive', maximum: 100, type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The earliest result set record number to pull abuse tickets for',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'integer-positive', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { '*/*': { schema: AbuseTicketListSchema } } },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { '*/*': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { '*/*': { schema: ErrorSchema } },
    },
    422: { description: 'Error', content: { '*/*': { schema: ErrorSchema } } },
  },
})

export const postV1AbuseTicketsRoute = createRoute({
  method: 'post',
  path: '/v1/abuse/tickets',
  tags: ['v1'],
  summary: 'Create a new abuse ticket',
  operationId: 'createTicket',
  request: {
    body: {
      description: 'The endpoint which allows the Reporter to create a new abuse ticket',
      content: { 'application/json': { schema: AbuseTicketCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'No response was specified' },
    201: { description: 'Success', content: { '*/*': { schema: AbuseTicketIdSchema } } },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { '*/*': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { '*/*': { schema: ErrorSchema } },
    },
    422: { description: 'Error', content: { '*/*': { schema: ErrorSchema } } },
  },
})

export const getV1AbuseTicketsTicketIdRoute = createRoute({
  method: 'get',
  path: '/v1/abuse/tickets/{ticketId}',
  tags: ['v1'],
  summary: 'Return the abuse ticket data for a given ticket id',
  operationId: 'getTicketInfo',
  request: {
    params: z.object({
      ticketId: z
        .string()
        .openapi({
          param: {
            description: 'A unique abuse ticket identifier',
            in: 'path',
            name: 'ticketId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { '*/*': { schema: AbuseTicketSchema } } },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { '*/*': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { '*/*': { schema: ErrorSchema } },
    },
    404: { description: 'Invalid ticket id provided', content: { '*/*': { schema: ErrorSchema } } },
  },
})
