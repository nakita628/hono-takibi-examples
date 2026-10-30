import { createRoute, z } from '@hono/zod-openapi'

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'The cursor value indicating where to begin fetching the next page of results in a paginated collection',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An optional URL for directly accessing the next page of results.',
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

const PreviousPageSchema = z
  .object({
    before: z
      .string()
      .openapi({
        description:
          'A string token used as a cursor to identify the position before the current set of results in pagination.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing the URL link to the previous page of results.',
        example: null,
      }),
  })
  .openapi({
    required: ['before'],
    description:
      'specifies the paging information needed to retrieve the previous set of results in a paginated API response',
    example: null,
  })
  .openapi('PreviousPage')

const PagingSchema = z
  .object({ next: NextPageSchema.exactOptional(), prev: PreviousPageSchema.exactOptional() })
  .openapi({
    description:
      'Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.',
    example: null,
    required: [],
  })
  .openapi('Paging')

const DomainSchema = z
  .object({
    correctCname: z
      .string()
      .openapi({ description: 'The expected CNAME record for the domain.', example: null }),
    created: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the domain was created.', example: null }),
    domain: z
      .string()
      .openapi({
        description: 'The actual domain or sub-domain. e.g. www.hubspot.com',
        example: null,
      }),
    id: z.string().openapi({ description: 'The unique ID of this domain.', example: null }),
    isResolving: z
      .boolean()
      .openapi({
        description:
          'Whether the DNS for this domain is optimally configured for use with HubSpot.',
        example: null,
      }),
    isSslEnabled: z
      .boolean()
      .openapi({ description: 'Indicates whether SSL is enabled for the domain.', example: null }),
    isSslOnly: z
      .boolean()
      .openapi({
        description: 'Indicates whether the domain is accessible only via SSL.',
        example: null,
      }),
    isUsedForBlogPost: z
      .boolean()
      .openapi({ description: 'Whether the domain is used for CMS blog posts.', example: null }),
    isUsedForEmail: z
      .boolean()
      .openapi({
        description: 'Whether the domain is used for CMS email web pages.',
        example: null,
      }),
    isUsedForKnowledge: z
      .boolean()
      .openapi({
        description: 'Whether the domain is used for CMS knowledge pages.',
        example: null,
      }),
    isUsedForLandingPage: z
      .boolean()
      .openapi({ description: 'Whether the domain is used for CMS landing pages.', example: null }),
    isUsedForSitePage: z
      .boolean()
      .openapi({ description: 'Whether the domain is used for CMS site pages.', example: null }),
    manuallyMarkedAsResolving: z
      .boolean()
      .openapi({
        description: 'Indicates whether the domain has been manually marked as resolving.',
        example: null,
      }),
    primaryBlogPost: z
      .boolean()
      .openapi({
        description: 'Indicates whether the domain is the primary domain for blog posts.',
        example: null,
      }),
    primaryEmail: z
      .boolean()
      .openapi({
        description: 'Indicates whether the domain is the primary domain for email pages.',
        example: null,
      }),
    primaryKnowledge: z
      .boolean()
      .openapi({
        description: 'Indicates whether the domain is the primary domain for knowledge pages.',
        example: null,
      }),
    primaryLandingPage: z
      .boolean()
      .openapi({
        description: 'Indicates whether the domain is the primary domain for landing pages.',
        example: null,
      }),
    primarySitePage: z
      .boolean()
      .openapi({
        description: 'Indicates whether the domain is the primary domain for site pages.',
        example: null,
      }),
    secondaryToDomain: z
      .string()
      .openapi({
        description: 'Specifies the domain to which this domain is secondary.',
        example: null,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the domain was last updated.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'correctCname',
      'created',
      'domain',
      'id',
      'isResolving',
      'isSslEnabled',
      'isSslOnly',
      'isUsedForBlogPost',
      'isUsedForEmail',
      'isUsedForKnowledge',
      'isUsedForLandingPage',
      'isUsedForSitePage',
      'manuallyMarkedAsResolving',
      'primaryBlogPost',
      'primaryEmail',
      'primaryKnowledge',
      'primaryLandingPage',
      'primarySitePage',
      'secondaryToDomain',
      'updated',
    ],
    example: null,
  })
  .openapi('Domain')

const CollectionResponseWithTotalDomainSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(DomainSchema)
      .openapi({ description: 'The results of the query.', example: null }),
    total: z.int32().openapi({ description: 'The number of available results.', example: null }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalDomain')

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
        'cms.domains.read': '',
        'cms.domains.write': '',
        'cms.knowledge_base.settings.read': '',
        'cms.knowledge_base.settings.write': '',
        content: '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCmsDomains202609Route = createRoute({
  method: 'get',
  path: '/cms/domains/2026-09',
  tags: ['Basic'],
  summary: 'List Domains',
  description:
    'Retrieve a list of content domains associated with your HubSpot account. This endpoint allows filtering by creation and update timestamps, sorting, and pagination. It is useful for managing and reviewing the domains configured in your CMS.',
  operationId: 'get-/cms/domains/2026-09_/cms/domains/v3',
  request: {
    query: z.object({
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
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description: 'Whether to return only results that have been archived.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            description:
              'Filter results to include only domains created after the specified date and time. Format should be date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAt',
            in: 'query',
            description:
              'Filter results by the exact creation date and time of the domain. Format should be date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            description:
              'Filter results to include only domains created before the specified date and time. Format should be date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
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
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description:
              'Specify the fields by which to sort the results. Accepts an array of strings.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      updatedAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAfter',
            in: 'query',
            description:
              'Filter results to include only domains updated after the specified date and time. Format should be date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAt',
            in: 'query',
            description:
              'Filter results by the exact update date and time of the domain. Format should be date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedBefore',
            in: 'query',
            description:
              'Filter results to include only domains updated before the specified date and time. Format should be date-time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: CollectionResponseWithTotalDomainSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['cms.domains.read'] },
    { oauth2: ['content'] },
    { oauth2: ['cms.domains.write'] },
    { oauth2: ['cms.knowledge_base.settings.read'] },
    { oauth2: ['cms.knowledge_base.settings.write'] },
  ],
})

export const getCmsDomains202609DomainIdRoute = createRoute({
  method: 'get',
  path: '/cms/domains/2026-09/{domainId}',
  tags: ['Basic'],
  summary: 'Get a single domain',
  description: 'Returns a single domains with the id specified.',
  operationId: 'get-/cms/domains/2026-09/{domainId}_getById',
  request: {
    params: z.object({
      domainId: z
        .string()
        .openapi({
          param: {
            name: 'domainId',
            in: 'path',
            description: 'The unique identifier of the domain to retrieve.',
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
      content: { 'application/json': { schema: DomainSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['cms.domains.read'] },
    { oauth2: ['content'] },
    { oauth2: ['cms.domains.write'] },
    { oauth2: ['cms.knowledge_base.settings.read'] },
    { oauth2: ['cms.knowledge_base.settings.write'] },
  ],
})
