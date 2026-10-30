import { createRoute, z } from '@hono/zod-openapi'

const StationSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        description: 'Unique identifier for the station.',
        examples: ['efdbb9d1-02c2-4bc3-afb7-6788d8782b1e', 'b2e783e1-c824-4d63-b37a-d8d698862f1d'],
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the station',
        examples: ['Berlin Hauptbahnhof', 'Paris Gare du Nord'],
      }),
    address: z
      .string()
      .openapi({
        description: 'The address of the station.',
        examples: [
          'Invalidenstraße 10557 Berlin, Germany',
          '18 Rue de Dunkerque 75010 Paris, France',
        ],
      }),
    country_code: z
      .string()
      .openapi({ description: 'The country code of the station.', examples: ['DE', 'FR'] }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timezone of the station in the [IANA Time Zone Database format](https://www.iana.org/time-zones).',
        examples: ['Europe/Berlin', 'Europe/Paris'],
      }),
  })
  .openapi({ xml: { name: 'station' }, required: ['id', 'name', 'address', 'country_code'] })
  .openapi('Station')

const LinksSelfSchema = z
  .object({ self: z.url().exactOptional() })
  .openapi({ required: [] })
  .openapi('LinksSelf')

const LinksPaginationSchema = z
  .object({ next: z.url().exactOptional(), prev: z.url().exactOptional() })
  .openapi({ required: [] })
  .openapi('LinksPagination')

const ProblemSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URI reference that identifies the problem type',
        example: 'https://example.com/probs/out-of-credit',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A short, human-readable summary of the problem type',
        example: 'You do not have enough credit.',
      }),
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable explanation specific to this occurrence of the problem',
        example: 'Your current balance is 30, but that costs 50.',
      }),
    instance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URI reference that identifies the specific occurrence of the problem',
        example: '/account/12345/msgs/abc',
      }),
    status: z.int().exactOptional().openapi({ description: 'The HTTP status code', example: 400 }),
  })
  .openapi({ xml: { name: 'problem', namespace: 'urn:ietf:rfc:7807' }, required: [] })
  .openapi('Problem')

const TripSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the trip',
        examples: ['4f4e4e1-c824-4d63-b37a-d8d698862f1d'],
      }),
    origin: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The starting station of the trip',
        examples: ['Berlin Hauptbahnhof', 'Paris Gare du Nord'],
      }),
    destination: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The destination station of the trip',
        examples: ['Paris Gare du Nord', 'Berlin Hauptbahnhof'],
      }),
    departure_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the trip departs',
        examples: ['2024-02-01T10:00:00Z'],
      }),
    arrival_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the trip arrives',
        examples: ['2024-02-01T16:00:00Z'],
      }),
    operator: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the operator of the trip',
        examples: ['Deutsche Bahn', 'SNCF'],
      }),
    price: z
      .number()
      .exactOptional()
      .openapi({ description: 'The cost of the trip', examples: [50] }),
    bicycles_allowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether bicycles are allowed on the trip' }),
    dogs_allowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether dogs are allowed on the trip' }),
  })
  .openapi({ xml: { name: 'trip' }, required: [] })
  .openapi('Trip')

const BookingSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the booking',
        readOnly: true,
        examples: ['3f3e3e1-c824-4d63-b37a-d8d698862f1d'],
      }),
    trip_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Identifier of the booked trip',
        examples: ['4f4e4e1-c824-4d63-b37a-d8d698862f1d'],
      }),
    passenger_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the passenger', examples: ['John Doe'] }),
    has_bicycle: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the passenger has a bicycle.' }),
    has_dog: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the passenger has a dog.' }),
  })
  .openapi({ xml: { name: 'booking' }, required: [] })
  .openapi('Booking')

const WrapperCollectionSchema = z
  .object({
    data: z
      .array(z.object({}))
      .exactOptional()
      .openapi({ description: 'The wrapper for a collection is an array of objects.' }),
    links: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'A set of hypermedia links which serve as controls for the client.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).',
    xml: { name: 'data' },
    required: [],
  })
  .openapi('WrapperCollection')

const BookingPaymentSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for the payment. This will be a unique identifier for the payment, and is used to reference the payment in other objects.',
        readOnly: true,
      }),
    amount: z
      .number()
      .gt(0)
      .exactOptional()
      .openapi({
        description:
          'Amount intended to be collected by this payment. A positive decimal figure describing the amount to be collected.',
        examples: [49.99],
      }),
    currency: z
      .enum(['bam', 'bgn', 'chf', 'eur', 'gbp', 'nok', 'sek', 'try'])
      .exactOptional()
      .openapi({
        description:
          'Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.',
      }),
    source: z
      .union([
        z
          .object({
            object: z.literal('card').exactOptional(),
            name: z
              .string()
              .openapi({
                description: "Cardholder's full name as it appears on the card.",
                examples: ['Francis Bourgeois'],
              }),
            number: z
              .string()
              .openapi({
                description:
                  'The card number, as a string without any separators. On read all but the last four digits will be masked for security.',
                examples: ['4242424242424242'],
              }),
            cvc: z
              .int()
              .openapi({
                description:
                  'Card security code, 3 or 4 digits usually found on the back of the card.',
                writeOnly: true,
                example: 123,
              }),
            exp_month: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                description: "Two-digit number representing the card's expiration month.",
                examples: [12],
              }),
            exp_year: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                description: "Four-digit number representing the card's expiration year.",
                examples: [2025],
              }),
            address_line1: z.string().exactOptional().openapi({ writeOnly: true }),
            address_line2: z.string().exactOptional().openapi({ writeOnly: true }),
            address_city: z.string().exactOptional(),
            address_country: z.string(),
            address_post_code: z.string().exactOptional(),
          })
          .openapi({
            title: 'Card',
            description: 'A card (debit or credit) to take payment from.',
            required: ['name', 'number', 'cvc', 'exp_month', 'exp_year', 'address_country'],
          }),
        z
          .object({
            object: z.literal('bank_account').exactOptional(),
            name: z.string(),
            number: z
              .string()
              .openapi({
                description:
                  'The account number for the bank account, in string form. Must be a current account.',
              }),
            sort_code: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The sort code for the bank account, in string form. Must be a six-digit number.',
              }),
            account_type: z
              .enum(['individual', 'company'])
              .openapi({
                description:
                  'The type of entity that holds the account. This can be either `individual` or `company`.',
              }),
            bank_name: z
              .string()
              .openapi({
                description: 'The name of the bank associated with the routing number.',
                examples: ['Starling Bank'],
              }),
            country: z
              .string()
              .openapi({ description: 'Two-letter country code (ISO 3166-1 alpha-2).' }),
          })
          .openapi({
            title: 'Bank Account',
            description:
              'A bank account to take payment from. Must be able to make payments in the currency specified in the payment.',
            required: ['name', 'number', 'account_type', 'bank_name', 'country'],
          }),
      ])
      .exactOptional()
      .openapi({
        description:
          'The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking.',
      }),
    status: z
      .enum(['pending', 'succeeded', 'failed'])
      .exactOptional()
      .openapi({
        description: 'The status of the payment, one of `pending`, `succeeded`, or `failed`.',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('BookingPayment')

const LinksBookingSchema = z
  .object({
    booking: z
      .url()
      .exactOptional()
      .openapi({
        examples: ['https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb'],
      }),
  })
  .openapi({ required: [] })
  .openapi('LinksBooking')

const RateLimitHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'The RateLimit header is communicate quota policies, and contains a `limit` to\nconveys the expiring limit, `remaining` to convey the remaining quota units,\nand `reset` to convey the time window reset time.\n',
    param: { required: false },
    examples: ['limit=10, remaining=0, reset=10'],
  })

const BadRequestResponse = {
  description: 'Bad Request',
  content: {
    'application/problem+json': {
      schema: ProblemSchema,
      example: {
        type: 'https://example.com/errors/bad-request',
        title: 'Bad Request',
        status: 400,
        detail: 'The request is invalid or missing required parameters.',
      },
    },
    'application/problem+xml': {
      schema: ProblemSchema,
      example: {
        type: 'https://example.com/errors/bad-request',
        title: 'Bad Request',
        status: 400,
        detail: 'The request is invalid or missing required parameters.',
      },
    },
  },
  headers: z.object({ RateLimit: RateLimitHeaderSchema }),
}

const ConflictResponse = {
  description: 'Conflict',
  content: {
    'application/problem+json': {
      schema: ProblemSchema,
      example: {
        type: 'https://example.com/errors/conflict',
        title: 'Conflict',
        status: 409,
        detail: 'There is a conflict with an existing resource.',
      },
    },
    'application/problem+xml': {
      schema: ProblemSchema,
      example: {
        type: 'https://example.com/errors/conflict',
        title: 'Conflict',
        status: 409,
        detail: 'There is a conflict with an existing resource.',
      },
    },
  },
  headers: z.object({ RateLimit: RateLimitHeaderSchema }),
}

const ForbiddenResponse = {
  description: 'Forbidden',
  content: {
    'application/problem+json': {
      schema: ProblemSchema,
      example: {
        type: 'https://example.com/errors/forbidden',
        title: 'Forbidden',
        status: 403,
        detail: 'Access is forbidden for the provided credentials.',
      },
    },
    'application/problem+xml': {
      schema: ProblemSchema,
      example: {
        type: 'https://example.com/errors/forbidden',
        title: 'Forbidden',
        status: 403,
        detail: 'Access is forbidden for the provided credentials.',
      },
    },
  },
  headers: z.object({ RateLimit: RateLimitHeaderSchema }),
}

const InternalServerErrorResponse = {
  description: 'Internal Server Error',
  content: {
    'application/problem+json': {
      schema: ProblemSchema,
      example: {
        type: 'https://example.com/errors/internal-server-error',
        title: 'Internal Server Error',
        status: 500,
        detail: 'An unexpected error occurred.',
      },
    },
    'application/problem+xml': {
      schema: ProblemSchema,
      example: {
        type: 'https://example.com/errors/internal-server-error',
        title: 'Internal Server Error',
        status: 500,
        detail: 'An unexpected error occurred.',
      },
    },
  },
  headers: z.object({ RateLimit: RateLimitHeaderSchema }),
}

const NotFoundResponse = {
  description: 'Not Found',
  content: {
    'application/problem+json': {
      schema: ProblemSchema,
      example: {
        type: 'https://example.com/errors/not-found',
        title: 'Not Found',
        status: 404,
        detail: 'The requested resource was not found.',
      },
    },
    'application/problem+xml': {
      schema: ProblemSchema,
      example: {
        type: 'https://example.com/errors/not-found',
        title: 'Not Found',
        status: 404,
        detail: 'The requested resource was not found.',
      },
    },
  },
  headers: z.object({ RateLimit: RateLimitHeaderSchema }),
}

const RetryAfterHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'The Retry-After header indicates how long the user agent should wait before making a follow-up request. \nThe value is in seconds and can be an integer or a date in the future. \nIf the value is an integer, it indicates the number of seconds to wait. \nIf the value is a date, it indicates the time at which the user agent should make a follow-up request. \n',
    examples: {
      integer: { summary: 'Retry after 120 seconds', value: '120' },
      date: { summary: 'Retry after the specified date', value: 'Fri, 31 Dec 2021 23:59:59 GMT' },
    },
    param: { required: false },
  })

const TooManyRequestsResponse = {
  description: 'Too Many Requests',
  content: {
    'application/problem+json': {
      schema: ProblemSchema,
      example: {
        type: 'https://example.com/errors/too-many-requests',
        title: 'Too Many Requests',
        status: 429,
        detail: 'You have exceeded the rate limit.',
      },
    },
    'application/problem+xml': {
      schema: ProblemSchema,
      example: {
        type: 'https://example.com/errors/too-many-requests',
        title: 'Too Many Requests',
        status: 429,
        detail: 'You have exceeded the rate limit.',
      },
    },
  },
  headers: z.object({ RateLimit: RateLimitHeaderSchema, 'Retry-After': RetryAfterHeaderSchema }),
}

const UnauthorizedResponse = {
  description: 'Unauthorized',
  content: {
    'application/problem+json': {
      schema: ProblemSchema,
      example: {
        type: 'https://example.com/errors/unauthorized',
        title: 'Unauthorized',
        status: 401,
        detail: 'You do not have the necessary permissions.',
      },
    },
    'application/problem+xml': {
      schema: ProblemSchema,
      example: {
        type: 'https://example.com/errors/unauthorized',
        title: 'Unauthorized',
        status: 401,
        detail: 'You do not have the necessary permissions.',
      },
    },
  },
  headers: z.object({ RateLimit: RateLimitHeaderSchema }),
}

const OAuth2SecurityScheme = {
  type: 'oauth2',
  description: 'OAuth 2.0 authorization code following RFC8725 best practices.',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://example.com/oauth/authorize',
      tokenUrl: 'https://example.com/oauth/token',
      scopes: { read: 'Read access', write: 'Write access' },
    },
  },
}

export const getStationsRoute = createRoute({
  method: 'get',
  path: '/stations',
  tags: ['Stations'],
  summary: 'Get a list of train stations',
  description: 'Returns a list of all train stations in the system.',
  operationId: 'get-stations',
  responses: {
    200: {
      description: 'A list of train stations',
      content: {
        'application/json': {
          schema: WrapperCollectionSchema.and(
            z.object({ data: z.array(StationSchema).exactOptional() }).openapi({ required: [] }),
          ).and(
            z
              .object({ links: LinksSelfSchema.and(LinksPaginationSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
          example: {
            data: [
              {
                id: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
                name: 'Berlin Hauptbahnhof',
                address: 'Invalidenstraße 10557 Berlin, Germany',
                country_code: 'DE',
                timezone: 'Europe/Berlin',
              },
              {
                id: 'b2e783e1-c824-4d63-b37a-d8d698862f1d',
                name: 'Paris Gare du Nord',
                address: '18 Rue de Dunkerque 75010 Paris, France',
                country_code: 'FR',
                timezone: 'Europe/Paris',
              },
            ],
            links: {
              self: 'https://api.example.com/stations&page=2',
              next: 'https://api.example.com/stations?page=3',
              prev: 'https://api.example.com/stations?page=1',
            },
          },
        },
        'application/xml': {
          schema: WrapperCollectionSchema.and(
            z
              .object({
                data: z
                  .array(StationSchema)
                  .exactOptional()
                  .openapi({ xml: { name: 'stations', wrapped: true } }),
              })
              .openapi({ required: [] }),
          ).and(
            z
              .object({ links: LinksSelfSchema.and(LinksPaginationSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
      headers: z.object({ RateLimit: RateLimitHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTripsRoute = createRoute({
  method: 'get',
  path: '/trips',
  tags: ['Trips'],
  summary: 'Get available train trips',
  description:
    'Returns a list of available train trips between the specified origin and destination stations on the given date, and allows for filtering by bicycle and dog allowances.',
  operationId: 'get-trips',
  request: {
    query: z.object({
      origin: z
        .uuid()
        .openapi({
          param: {
            name: 'origin',
            in: 'query',
            description: 'The ID of the origin station',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            example: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
          },
        }),
      destination: z
        .uuid()
        .openapi({
          param: {
            name: 'destination',
            in: 'query',
            description: 'The ID of the destination station',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            example: 'b2e783e1-c824-4d63-b37a-d8d698862f1d',
          },
        }),
      date: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'date',
            in: 'query',
            description:
              "The date and time of the trip in ISO 8601 format in origin station's timezone.",
            required: true,
            schema: { type: 'string', format: 'date-time' },
            example: '2024-02-01T09:00:00Z',
          },
        }),
      bicycles: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'bicycles',
            in: 'query',
            description: 'Only return trips where bicycles are known to be allowed',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      dogs: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'dogs',
            in: 'query',
            description: 'Only return trips where dogs are known to be allowed',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of available train trips',
      content: {
        'application/json': {
          schema: WrapperCollectionSchema.and(
            z.object({ data: z.array(TripSchema).exactOptional() }).openapi({ required: [] }),
          ).and(
            z
              .object({ links: LinksSelfSchema.and(LinksPaginationSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
          example: {
            data: [
              {
                id: 'ea399ba1-6d95-433f-92d1-83f67b775594',
                origin: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
                destination: 'b2e783e1-c824-4d63-b37a-d8d698862f1d',
                departure_time: '2024-02-01T10:00:00Z',
                arrival_time: '2024-02-01T16:00:00Z',
                price: 50,
                operator: 'Deutsche Bahn',
                bicycles_allowed: true,
                dogs_allowed: true,
              },
              {
                id: '4d67459c-af07-40bb-bb12-178dbb88e09f',
                origin: 'b2e783e1-c824-4d63-b37a-d8d698862f1d',
                destination: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
                departure_time: '2024-02-01T12:00:00Z',
                arrival_time: '2024-02-01T18:00:00Z',
                price: 50,
                operator: 'SNCF',
                bicycles_allowed: true,
                dogs_allowed: true,
              },
            ],
            links: {
              self: 'https://api.example.com/trips?origin=efdbb9d1-02c2-4bc3-afb7-6788d8782b1e&destination=b2e783e1-c824-4d63-b37a-d8d698862f1d&date=2024-02-01',
              next: 'https://api.example.com/trips?origin=efdbb9d1-02c2-4bc3-afb7-6788d8782b1e&destination=b2e783e1-c824-4d63-b37a-d8d698862f1d&date=2024-02-01&page=2',
            },
          },
        },
        'application/xml': {
          schema: WrapperCollectionSchema.and(
            z
              .object({
                data: z
                  .array(TripSchema)
                  .exactOptional()
                  .openapi({ xml: { name: 'trips', wrapped: true } }),
              })
              .openapi({ required: [] }),
          ).and(
            z
              .object({ links: LinksSelfSchema.and(LinksPaginationSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
      headers: z.object({ RateLimit: RateLimitHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
  },
})

export const getBookingsRoute = createRoute({
  method: 'get',
  path: '/bookings',
  tags: ['Bookings'],
  summary: 'List existing bookings',
  description: 'Returns a list of all trips booking by the authenticated user.',
  operationId: 'get-bookings',
  responses: {
    200: {
      description: 'A list of bookings',
      content: {
        'application/json': {
          schema: WrapperCollectionSchema.and(
            z.object({ data: z.array(BookingSchema).exactOptional() }).openapi({ required: [] }),
          ).and(
            z
              .object({ links: LinksSelfSchema.and(LinksPaginationSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
          example: {
            data: [
              {
                id: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
                trip_id: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
                passenger_name: 'John Doe',
                has_bicycle: true,
                has_dog: true,
              },
              {
                id: 'b2e783e1-c824-4d63-b37a-d8d698862f1d',
                trip_id: 'b2e783e1-c824-4d63-b37a-d8d698862f1d',
                passenger_name: 'Jane Smith',
                has_bicycle: false,
                has_dog: false,
              },
            ],
            links: {
              self: 'https://api.example.com/bookings',
              next: 'https://api.example.com/bookings?page=2',
            },
          },
        },
        'application/xml': {
          schema: WrapperCollectionSchema.and(
            z
              .object({
                data: z
                  .array(BookingSchema)
                  .exactOptional()
                  .openapi({ xml: { name: 'bookings', wrapped: true } }),
              })
              .openapi({ required: [] }),
          ).and(
            z
              .object({ links: LinksSelfSchema.and(LinksPaginationSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
      headers: z.object({ RateLimit: RateLimitHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
  },
})

export const postBookingsRoute = createRoute({
  method: 'post',
  path: '/bookings',
  tags: ['Bookings'],
  summary: 'Create a booking',
  description:
    'A booking is a temporary hold on a trip. It is not confirmed until the payment is processed.',
  operationId: 'create-booking',
  request: {
    body: {
      content: {
        'application/json': { schema: BookingSchema },
        'application/xml': { schema: BookingSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Booking successful',
      content: {
        'application/json': {
          schema: BookingSchema.and(
            z.object({ links: LinksSelfSchema.exactOptional() }).openapi({ required: [] }),
          ),
          example: {
            id: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
            trip_id: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
            passenger_name: 'John Doe',
            has_bicycle: true,
            has_dog: true,
            links: {
              self: 'https://api.example.com/bookings/efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
            },
          },
        },
        'application/xml': {
          schema: BookingSchema.and(
            z.object({ links: LinksSelfSchema.exactOptional() }).openapi({ required: [] }),
          ),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ OAuth2: ['write'] }],
})

export const getBookingsBookingIdRoute = createRoute({
  method: 'get',
  path: '/bookings/{bookingId}',
  tags: ['Bookings'],
  summary: 'Get a booking',
  description: 'Returns the details of a specific booking.',
  operationId: 'get-booking',
  request: {
    params: z.object({
      bookingId: z
        .uuid()
        .openapi({
          param: {
            name: 'bookingId',
            in: 'path',
            required: true,
            description: 'The ID of the booking to retrieve.',
            schema: { type: 'string', format: 'uuid' },
            example: '1725ff48-ab45-4bb5-9d02-88745177dedb',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The booking details',
      content: {
        'application/json': {
          schema: BookingSchema.and(
            z.object({ links: LinksSelfSchema.exactOptional() }).openapi({ required: [] }),
          ),
          example: {
            id: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
            trip_id: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
            passenger_name: 'John Doe',
            has_bicycle: true,
            has_dog: true,
            links: {
              self: 'https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb',
            },
          },
        },
        'application/xml': {
          schema: BookingSchema.and(
            z.object({ links: LinksSelfSchema.exactOptional() }).openapi({ required: [] }),
          ),
        },
      },
      headers: z.object({ RateLimit: RateLimitHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteBookingsBookingIdRoute = createRoute({
  method: 'delete',
  path: '/bookings/{bookingId}',
  tags: ['Bookings'],
  summary: 'Delete a booking',
  description: 'Deletes a booking, cancelling the hold on the trip.',
  operationId: 'delete-booking',
  request: {
    params: z.object({
      bookingId: z
        .uuid()
        .openapi({
          param: {
            name: 'bookingId',
            in: 'path',
            required: true,
            description: 'The ID of the booking to retrieve.',
            schema: { type: 'string', format: 'uuid' },
            example: '1725ff48-ab45-4bb5-9d02-88745177dedb',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Booking deleted' },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ OAuth2: ['write'] }],
})

export const postBookingsBookingIdPaymentRoute = createRoute({
  method: 'post',
  path: '/bookings/{bookingId}/payment',
  tags: ['Payments'],
  summary: 'Pay for a Booking',
  description:
    'A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets.',
  operationId: 'create-booking-payment',
  request: {
    params: z.object({
      bookingId: z
        .uuid()
        .openapi({
          param: {
            name: 'bookingId',
            in: 'path',
            required: true,
            description: 'The ID of the booking to pay for.',
            schema: { type: 'string', format: 'uuid' },
            example: '1725ff48-ab45-4bb5-9d02-88745177dedb',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BookingPaymentSchema,
          examples: {
            Card: {
              summary: 'Card Payment',
              value: {
                amount: 49.99,
                currency: 'gbp',
                source: {
                  object: 'card',
                  name: 'J. Doe',
                  number: '4242424242424242',
                  cvc: 123,
                  exp_month: 12,
                  exp_year: 2025,
                  address_line1: '123 Fake Street',
                  address_line2: '4th Floor',
                  address_city: 'London',
                  address_country: 'gb',
                  address_post_code: 'N12 9XX',
                },
              },
            },
            Bank: {
              summary: 'Bank Account Payment',
              value: {
                amount: 100.5,
                currency: 'gbp',
                source: {
                  object: 'bank_account',
                  name: 'J. Doe',
                  number: '00012345',
                  sort_code: '000123',
                  account_type: 'individual',
                  bank_name: 'Starling Bank',
                  country: 'gb',
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Payment successful',
      content: {
        'application/json': {
          schema: BookingPaymentSchema.and(
            z.object({ links: LinksBookingSchema.exactOptional() }).openapi({ required: [] }),
          ),
          examples: {
            Card: {
              summary: 'Card Payment',
              value: {
                id: '2e3b4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a',
                amount: 49.99,
                currency: 'gbp',
                source: {
                  object: 'card',
                  name: 'J. Doe',
                  number: '************4242',
                  cvc: 123,
                  exp_month: 12,
                  exp_year: 2025,
                  address_country: 'gb',
                  address_post_code: 'N12 9XX',
                },
                status: 'succeeded',
                links: {
                  booking:
                    'https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb/payment',
                },
              },
            },
            Bank: {
              summary: 'Bank Account Payment',
              value: {
                id: '2e3b4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a',
                amount: 100.5,
                currency: 'gbp',
                source: {
                  object: 'bank_account',
                  name: 'J. Doe',
                  account_type: 'individual',
                  number: '*********2345',
                  sort_code: '000123',
                  bank_name: 'Starling Bank',
                  country: 'gb',
                },
                status: 'succeeded',
                links: {
                  booking: 'https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb',
                },
              },
            },
          },
        },
      },
      headers: z.object({ RateLimit: RateLimitHeaderSchema }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
  },
})

export const newBookingPostWebhook = {
  method: 'post',
  path: '/newBooking',
  tags: ['Bookings'],
  summary: 'New Booking',
  description:
    'Subscribe to new bookings being created, to update integrations for your users.  Related data is available via the links provided in the request.\n',
  operationId: 'new-booking',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BookingSchema.and(
            z
              .object({ links: LinksSelfSchema.and(LinksPaginationSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
          example: {
            id: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
            trip_id: 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e',
            passenger_name: 'John Doe',
            has_bicycle: true,
            has_dog: true,
            links: {
              self: 'https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Return a 200 status to indicate that the data was received successfully.',
      headers: z.object({ RateLimit: RateLimitHeaderSchema }),
    },
  },
}
