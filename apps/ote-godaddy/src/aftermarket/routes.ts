import { createRoute, z } from '@hono/zod-openapi'

const AftermarketListingActionSchema = z
  .object({ listingActionId: z.int().openapi({ description: 'Action Id' }) })
  .openapi({ required: ['listingActionId'] })
  .openapi('AftermarketListingAction')

const AftermarketListingExpiryCreateSchema = z
  .object({
    domain: z.string().openapi({ description: 'Domain name' }),
    expiresAt: z.string().openapi({ description: 'Date when the domain expires' }),
    losingRegistrarId: z
      .int()
      .min(1)
      .default(1)
      .openapi({ description: 'Losing registrar id for the domain' }),
    pageViewsMonthly: z
      .int()
      .exactOptional()
      .openapi({ description: 'Monthly traffic page view for the domain' }),
    revenueMonthly: z
      .int()
      .exactOptional()
      .openapi({ description: 'Monthly parking revenue (in USD micro unit) for the domain' }),
  })
  .openapi({ required: ['domain', 'expiresAt', 'losingRegistrarId'] })
  .openapi('AftermarketListingExpiryCreate')

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

const ExpirySchema = z
  .object({ id: z.float64().exactOptional() })
  .openapi({ required: [] })
  .openapi('Expiry')

export const deleteV1AftermarketListingsRoute = createRoute({
  method: 'delete',
  path: '/v1/aftermarket/listings',
  tags: ['v1'],
  summary: 'Remove listings from GoDaddy Auction',
  operationId: 'deleteListings',
  request: {
    query: z.object({
      domains: z
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
            description: 'A comma separated list of domain names',
            explode: false,
            in: 'query',
            name: 'domains',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: AftermarketListingActionSchema },
        'application/json': { schema: AftermarketListingActionSchema },
        'application/xml': { schema: AftermarketListingActionSchema },
        'text/javascript': { schema: AftermarketListingActionSchema },
        'text/xml': { schema: AftermarketListingActionSchema },
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
      description: '\tRequired parameters must be specified in correct format',
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

export const postV1AftermarketListingsExpiryRoute = createRoute({
  method: 'post',
  path: '/v1/aftermarket/listings/expiry',
  tags: ['v1'],
  summary: 'Add expiry listings into GoDaddy Auction',
  operationId: 'addExpiryListings',
  request: {
    body: {
      description: 'An array of expiry listings to be loaded',
      content: {
        'application/json': { schema: z.array(AftermarketListingExpiryCreateSchema) },
        'application/xml': { schema: z.array(AftermarketListingExpiryCreateSchema) },
        'text/xml': { schema: z.array(AftermarketListingExpiryCreateSchema) },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: AftermarketListingActionSchema },
        'application/json': { schema: AftermarketListingActionSchema },
        'application/xml': { schema: AftermarketListingActionSchema },
        'text/javascript': { schema: AftermarketListingActionSchema },
        'text/xml': { schema: AftermarketListingActionSchema },
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
      description:
        'Required parameters must be specified in correct format<br>Too many Listings provided<br>Invalid Losing Registrar Id',
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
