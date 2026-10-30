import { createRoute, z } from '@hono/zod-openapi'

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description: 'A paging cursor token for retrieving subsequent pages.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL that can be used to retrieve the next page results.',
        example: null,
      }),
  })
  .openapi({
    required: ['after'],
    description:
      'Specifies the paging information needed to retrieve the next set of results in a paginated API response',
    example: null,
  })
  .openapi('NextPage')

const ForwardPagingSchema = z
  .object({ next: NextPageSchema.exactOptional() })
  .openapi({
    description:
      'Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.',
    example: null,
    required: [],
  })
  .openapi('ForwardPaging')

const PublicTaxRateGroupSchema = z
  .object({
    active: z
      .boolean()
      .openapi({
        description: 'Indicates whether the tax rate group is currently active.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the tax rate was created.', example: null }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the tax rate.', example: null }),
    label: z
      .string()
      .openapi({ description: 'The display label for the tax rate.', example: null }),
    name: z.string().openapi({ description: 'The name of the tax rate.', example: null }),
    percentageRate: z
      .number()
      .openapi({ description: 'The percentage rate applied.', example: null }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the tax rate was last updated.',
        example: null,
      }),
  })
  .openapi({
    required: ['active', 'createdAt', 'id', 'label', 'name', 'percentageRate', 'updatedAt'],
    example: null,
  })
  .openapi('PublicTaxRateGroup')

const CollectionResponsePublicTaxRateGroupForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(PublicTaxRateGroupSchema)
      .openapi({
        description:
          'An array of PublicTaxRateGroup objects, each representing a tax rate group with its properties.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicTaxRateGroupForwardPaging')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field or parameter in which the error was found.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({ description: 'further information about the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: {
        'cpq.quotes.read': '',
        'cpq.quotes.write': '',
        'crm.objects.quotes.read': '',
        'crm.objects.quotes.write': '',
        'tax_rates.read': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getTaxRates202609TaxRatesRoute = createRoute({
  method: 'get',
  path: '/tax-rates/2026-09/tax-rates',
  tags: ['Basic'],
  summary: 'Get all tax rates',
  description: 'Retrieve a paginated list of all tax rates set up in the account tax rate library',
  operationId: 'get-/tax-rates/2026-09/tax-rates',
  request: {
    query: z.object({
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'active',
            in: 'query',
            description: 'A boolean to filter results by their active status.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponsePublicTaxRateGroupForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['cpq.quotes.write'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['tax_rates.read'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['cpq.quotes.read'] },
  ],
})

export const getTaxRates202609TaxRatesTaxRateGroupIdRoute = createRoute({
  method: 'get',
  path: '/tax-rates/2026-09/tax-rates/{taxRateGroupId}',
  tags: ['Basic'],
  summary: 'Get a specific tax rate',
  description: 'Retrieve a specific tax rate by its `taxRateGroupId`.',
  operationId: 'get-/tax-rates/2026-09/tax-rates/{taxRateGroupId}',
  request: {
    params: z.object({
      taxRateGroupId: z
        .string()
        .openapi({
          param: {
            name: 'taxRateGroupId',
            in: 'path',
            description: 'The unique identifier of the tax rate group to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicTaxRateGroupSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['cpq.quotes.write'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['tax_rates.read'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['cpq.quotes.read'] },
  ],
})
