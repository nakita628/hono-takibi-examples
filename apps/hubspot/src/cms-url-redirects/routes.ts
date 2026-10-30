import { createRoute, z } from '@hono/zod-openapi'

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'The cursor value indicating where to begin fetching the next page of results in a paginated collection.',
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

const ForwardPagingSchema = z
  .object({ next: NextPageSchema.exactOptional() })
  .openapi({
    description:
      'Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.',
    example: null,
    required: [],
  })
  .openapi('ForwardPaging')

const UrlMappingSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the URL mapping was initially created.',
        example: null,
      }),
    destination: z
      .string()
      .openapi({
        description:
          'The destination URL, where the target URL should be redirected if it matches the `routePrefix`.',
        example: null,
      }),
    id: z.string().openapi({ description: 'The unique ID of this URL redirect.', example: null }),
    isMatchFullUrl: z
      .boolean()
      .openapi({
        description:
          'Whether the `routePrefix` should match on the entire URL, including the domain.',
        example: null,
      }),
    isMatchQueryString: z
      .boolean()
      .openapi({
        description:
          'Whether the `routePrefix` should match on the entire URL path, including the query string.',
        example: null,
      }),
    isOnlyAfterNotFound: z
      .boolean()
      .openapi({
        description:
          "Whether the URL redirect mapping should apply only if a live page on the URL isn't found. If False, the URL redirect mapping will take precedence over any existing page.",
        example: null,
      }),
    isPattern: z
      .boolean()
      .openapi({
        description: 'Whether the `routePrefix` should match based on pattern.',
        example: null,
      }),
    isProtocolAgnostic: z
      .boolean()
      .openapi({
        description: 'Whether the `routePrefix` should match both HTTP and HTTPS protocols.',
        example: null,
      }),
    isTrailingSlashOptional: z
      .boolean()
      .openapi({ description: 'Whether a trailing slash will be ignored.', example: null }),
    precedence: z
      .int32()
      .openapi({
        description:
          'Used to prioritize URL redirection. If a given URL matches more than one redirect, the one with the **lower** precedence will be used.',
        example: null,
      }),
    redirectStyle: z
      .int32()
      .openapi({
        description:
          'The type of redirect to create. Options include: 301 (permanent), 302 (temporary), or 305 (proxy). Find more details [here](https://knowledge.hubspot.com/cos-general/how-to-redirect-a-hubspot-page).',
        example: null,
      }),
    routePrefix: z
      .string()
      .openapi({
        description: 'The target incoming URL, path, or pattern to match for redirection.',
        example: null,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the URL mapping was last modified.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'created',
      'destination',
      'id',
      'isMatchFullUrl',
      'isMatchQueryString',
      'isOnlyAfterNotFound',
      'isPattern',
      'isProtocolAgnostic',
      'isTrailingSlashOptional',
      'precedence',
      'redirectStyle',
      'routePrefix',
      'updated',
    ],
    example: null,
  })
  .openapi('UrlMapping')

const CollectionResponseWithTotalUrlMappingForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(UrlMappingSchema)
      .openapi({
        description: 'An array of UrlMapping objects, each representing a specific URL mapping.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({ description: 'The total number of URL mappings available.', example: null }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalUrlMappingForwardPaging')

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

const UrlMappingCreateRequestBodySchema = z
  .object({
    destination: z
      .string()
      .openapi({
        description:
          'The destination URL, where the target URL should be redirected if it matches the `routePrefix`.',
        example: null,
      }),
    isMatchFullUrl: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the `routePrefix` should match on the entire URL, including the domain.',
        example: null,
      }),
    isMatchQueryString: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the `routePrefix` should match on the entire URL path, including the query string.',
        example: null,
      }),
    isOnlyAfterNotFound: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether the URL redirect mapping should apply only if a live page on the URL isn't found. If False, the URL redirect mapping will take precedence over any existing page.",
        example: null,
      }),
    isPattern: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the `routePrefix` should match based on pattern.',
        example: null,
      }),
    isProtocolAgnostic: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the `routePrefix` should match both HTTP and HTTPS protocols.',
        example: null,
      }),
    isTrailingSlashOptional: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether a trailing slash will be ignored.', example: null }),
    precedence: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Used to prioritize URL redirection. If a given URL matches more than one redirect, the one with the **lower** precedence will be used.',
        example: null,
      }),
    redirectStyle: z
      .int32()
      .openapi({
        description:
          'The type of redirect to create. Options include: 301 (permanent), 302 (temporary), or 305 (proxy). Find more details [here](https://knowledge.hubspot.com/cos-general/how-to-redirect-a-hubspot-page).',
        example: null,
      }),
    routePrefix: z
      .string()
      .openapi({
        description: 'The target incoming URL, path, or pattern to match for redirection.',
        example: null,
      }),
  })
  .openapi({ required: ['destination', 'redirectStyle', 'routePrefix'], example: null })
  .openapi('UrlMappingCreateRequestBody')

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
      scopes: { content: '' },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCmsUrlRedirects202609Route = createRoute({
  method: 'get',
  path: '/cms/url-redirects/2026-09',
  tags: ['Basic'],
  summary: 'List URL Redirects',
  description:
    'Retrieve a list of URL redirects in your HubSpot account. This endpoint allows you to filter redirects based on their creation or update timestamps, and sort the results. It supports pagination and can include archived redirects if specified.',
  operationId: 'get-/cms/url-redirects/2026-09_/cms/url-redirects/v3',
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
            description: 'Filter redirects created after the specified date-time.',
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
              'Filter redirects by their exact creation timestamp. The value should be in date-time format.',
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
            description: 'Filter redirects created before the specified date-time.',
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
            description: 'Specify the fields to sort the results by. This is an array of strings.',
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
            description: 'Filter redirects updated after the specified date-time.',
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
              'Filter redirects by their exact update timestamp. The value should be in date-time format.',
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
            description: 'Filter redirects updated before the specified date-time.',
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
        'application/json': {
          schema: CollectionResponseWithTotalUrlMappingForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsUrlRedirects202609Route = createRoute({
  method: 'post',
  path: '/cms/url-redirects/2026-09',
  tags: ['Basic'],
  summary: 'Create URL Redirect',
  description:
    'Create a new URL redirect in your HubSpot account. This endpoint allows you to define the destination URL, redirect style, and route prefix for the redirect. It is useful for managing URL redirections and ensuring that users are directed to the correct pages.',
  operationId: 'post-/cms/url-redirects/2026-09_/cms/url-redirects/v3',
  request: {
    body: {
      content: { 'application/json': { schema: UrlMappingCreateRequestBodySchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: UrlMappingSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsUrlRedirects202609UrlMappingsRoute = createRoute({
  method: 'get',
  path: '/cms/url-redirects/2026-09/url-mappings',
  tags: ['Basic'],
  summary: 'List URL Mappings',
  description:
    'Retrieve a list of URL mappings for redirects in your HubSpot account. This endpoint allows you to access all URL mappings, which can be useful for managing and auditing redirects. The response includes details about each URL mapping, such as the destination and route prefix.',
  operationId:
    'get-/cms/url-redirects/2026-09/url-mappings_/cms/url-redirects/2026-03/url-mappings',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        '*/*': { schema: z.array(UrlMappingSchema).openapi({ example: null }), example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsUrlRedirects202609UrlMappingsRoute = createRoute({
  method: 'post',
  path: '/cms/url-redirects/2026-09/url-mappings',
  tags: ['Basic'],
  summary: 'Create URL Mapping',
  description:
    'Create a new URL mapping in your HubSpot account. This endpoint allows you to define a new URL redirect rule by specifying the route prefix, destination URL, and redirect style. The request body must include these required fields to successfully create a URL mapping.',
  operationId:
    'post-/cms/url-redirects/2026-09/url-mappings_/cms/url-redirects/2026-03/url-mappings',
  request: {
    body: { content: { '*/*': { schema: UrlMappingSchema, example: null } }, required: true },
  },
  responses: { default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const getCmsUrlRedirects202609UrlMappingsIdRoute = createRoute({
  method: 'get',
  path: '/cms/url-redirects/2026-09/url-mappings/{id}',
  tags: ['Basic'],
  summary: 'Retrieve URL Mapping',
  description:
    'Retrieve a specific URL mapping by its unique identifier. This endpoint is useful for obtaining details about a particular URL redirect configuration within your HubSpot account. It requires the unique ID of the URL mapping to be specified in the path.',
  operationId:
    'get-/cms/url-redirects/2026-09/url-mappings/{id}_/cms/url-redirects/2026-03/url-mappings/{id}',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The unique identifier of the URL mapping to retrieve. Must be an integer.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '\\d+', type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: UrlMappingSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const deleteCmsUrlRedirects202609UrlMappingsIdRoute = createRoute({
  method: 'delete',
  path: '/cms/url-redirects/2026-09/url-mappings/{id}',
  tags: ['Basic'],
  summary: 'Delete',
  description:
    'Delete a specific URL mapping in your HubSpot account using its unique identifier. This operation is useful for removing outdated or incorrect URL redirects. Ensure you have the necessary permissions to perform this action.',
  operationId:
    'delete-/cms/url-redirects/2026-09/url-mappings/{id}_/cms/url-redirects/2026-03/url-mappings/{id}',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The unique identifier of the URL mapping to delete. It must be an integer.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '\\d+', type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const getCmsUrlRedirects202609UrlRedirectIdRoute = createRoute({
  method: 'get',
  path: '/cms/url-redirects/2026-09/{urlRedirectId}',
  tags: ['Basic'],
  summary: 'Get details for a redirect',
  description: 'Returns the details for a single existing URL redirect by ID.',
  operationId: 'get-/cms/url-redirects/2026-09/{urlRedirectId}_getById',
  request: {
    params: z.object({
      urlRedirectId: z
        .string()
        .openapi({
          param: {
            name: 'urlRedirectId',
            in: 'path',
            description: 'The unique identifier of the URL redirect to retrieve.',
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
      content: { 'application/json': { schema: UrlMappingSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const deleteCmsUrlRedirects202609UrlRedirectIdRoute = createRoute({
  method: 'delete',
  path: '/cms/url-redirects/2026-09/{urlRedirectId}',
  tags: ['Basic'],
  summary: 'Delete a redirect',
  description: 'Delete one existing redirect, so it is no longer mapped.',
  operationId: 'delete-/cms/url-redirects/2026-09/{urlRedirectId}_archive',
  request: {
    params: z.object({
      urlRedirectId: z
        .string()
        .openapi({
          param: {
            name: 'urlRedirectId',
            in: 'path',
            description: 'The unique identifier of the URL redirect to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const patchCmsUrlRedirects202609UrlRedirectIdRoute = createRoute({
  method: 'patch',
  path: '/cms/url-redirects/2026-09/{urlRedirectId}',
  tags: ['Basic'],
  summary: 'Update a redirect',
  description: 'Updates the settings for an existing URL redirect.',
  operationId: 'patch-/cms/url-redirects/2026-09/{urlRedirectId}_update',
  request: {
    params: z.object({
      urlRedirectId: z
        .string()
        .openapi({
          param: {
            name: 'urlRedirectId',
            in: 'path',
            description: 'The unique identifier of the URL redirect to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: UrlMappingSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: UrlMappingSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})
