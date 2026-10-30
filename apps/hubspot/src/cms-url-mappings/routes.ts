import { createRoute, z } from '@hono/zod-openapi'

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

const UrlMappingSchema = z
  .object({
    cdnPurgeEmbargoTime: z
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
        description:
          'A Unix timestamp in milliseconds indicating the embargo time for CDN purge related to the URL mapping.',
        example: null,
      }),
    contentGroupId: z
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
        description:
          'A 64-bit integer representing the content group associated with the URL mapping.',
        example: null,
      }),
    cosObjectType: z
      .enum([
        'ACCESS_GROUP_MEMBERSHIP',
        'APP_PAGE',
        'BLOCK',
        'BLOG',
        'BLOG_AUTHOR',
        'BRAND_BUSINESS_UNIT',
        'BRAND_SETTINGS',
        'CONTACT_MEMBERSHIP',
        'CONTENT',
        'CONTENT_EMBED',
        'CONTENT_FOLDER',
        'CONTENT_GROUP',
        'CRM_OBJECT',
        'CRM_OBJECT_TYPE',
        'CUSTOM_WIDGET',
        'CUSTOMER_PORTAL',
        'DATA_QUERY',
        'DESIGN_FOLDER',
        'DOMAIN',
        'DOMAIN_SETTINGS',
        'EMAIL_ADDRESS',
        'EXTENSION_RESOURCE',
        'FILE',
        'FOLDER',
        'FOLLOW_ME',
        'FORM',
        'GLOBAL_CONTENT',
        'GLOBAL_STYLES_THEME',
        'HUBDB_TABLE',
        'HUBDB_TABLE_ROW',
        'IMAGE',
        'JS_PROJECT_COMPONENT',
        'KNOWLEDGE_BASE',
        'KNOWLEDGE_CATEGORY',
        'KNOWLEDGE_CATEGORY_TRANSLATION',
        'KNOWLEDGE_HOMEPAGE_CATEGORY',
        'LAYOUT',
        'LAYOUT_SECTION',
        'LIST_MEMBERSHIP',
        'MARKETPLACE_LISTING',
        'PASSWORD_PROTECTED',
        'PAYMENT',
        'PERSONALIZATION_TOKEN',
        'PLACEMENT',
        'PROJECT',
        'QUOTE_TEMPLATE',
        'RAW_ASSET',
        'REDIRECT_URL',
        'SECTION',
        'SERVERLESS_FUNCTION',
        'SITE_MAP',
        'SITE_MENU',
        'SITE_SETTINGS',
        'SUBSCRIPTIONS_SETTINGS',
        'TAG',
        'THEME',
        'THEME_SETTINGS',
        'UNRESTRICTED_ACCESS',
        'URL_MAPPING',
        'VIDEO_PLAYER',
        'WIDGET',
        'WORKFLOW',
      ])
      .openapi({
        description:
          "A string representing the type of content object associated with the URL mapping. Valid values include various content types such as 'CONTENT', 'LAYOUT', 'FILE', etc.",
        example: null,
      }),
    created: z
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
        description:
          'A Unix timestamp in milliseconds indicating when the URL mapping was created.',
        example: null,
      }),
    createdById: z
      .int32()
      .openapi({
        description: 'The identifier of the user who created the URL mapping.',
        example: null,
      }),
    deletedAt: z
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
        description:
          'A Unix timestamp in milliseconds indicating when the URL mapping was deleted.',
        example: null,
      }),
    destination: z
      .string()
      .openapi({
        description: 'The destination URL to which the routePrefix is redirected.',
        example: null,
      }),
    id: z
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
        description: 'The unique identifier for the URL mapping, represented as a 64-bit integer.',
        example: null,
      }),
    internallyCreated: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating if the URL mapping was created internally by the system.',
        example: null,
      }),
    isActive: z
      .boolean()
      .openapi({
        description: 'A boolean indicating if the URL mapping is currently active.',
        example: null,
      }),
    isMatchFullUrl: z
      .boolean()
      .openapi({
        description: 'A boolean indicating if the full URL should be matched.',
        example: null,
      }),
    isMatchQueryString: z
      .boolean()
      .openapi({
        description: 'A boolean indicating if the query string should be matched.',
        example: null,
      }),
    isOnlyAfterNotFound: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating if the mapping should only be applied after a 404 Not Found response.',
        example: null,
      }),
    isPattern: z
      .boolean()
      .openapi({
        description: 'A boolean indicating if the routePrefix is a pattern.',
        example: null,
      }),
    isProtocolAgnostic: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating if the mapping should ignore the URL protocol (http/https).',
        example: null,
      }),
    isRegex: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating if the routePrefix should be treated as a regular expression.',
        example: null,
      }),
    isTrailingSlashOptional: z
      .boolean()
      .openapi({
        description: 'A boolean indicating if the trailing slash in the URL is optional.',
        example: null,
      }),
    label: z.string().openapi({ description: 'A label for the URL mapping.', example: null }),
    lastUsedAt: z
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
        description:
          'A Unix timestamp in milliseconds indicating the last time the URL mapping was used.',
        example: null,
      }),
    name: z.string().openapi({ description: 'The name of the URL mapping.', example: null }),
    note: z
      .string()
      .openapi({ description: 'A string containing notes about the URL mapping.', example: null }),
    portalId: z
      .int32()
      .openapi({
        description: 'The identifier for the HubSpot portal associated with this URL mapping.',
        example: null,
      }),
    precedence: z
      .int32()
      .openapi({
        description:
          'An integer representing the precedence of the URL mapping, used to determine order of evaluation.',
        example: null,
      }),
    redirectStyle: z
      .int32()
      .openapi({
        description: 'An integer representing the style of redirection used.',
        example: null,
      }),
    routePrefix: z
      .string()
      .openapi({ description: 'The prefix of the URL path that is being mapped.', example: null }),
    updated: z
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
        description:
          'A Unix timestamp in milliseconds indicating when the URL mapping was last updated.',
        example: null,
      }),
    updatedById: z
      .int32()
      .openapi({
        description: 'The identifier of the user who last updated the URL mapping.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'cdnPurgeEmbargoTime',
      'contentGroupId',
      'cosObjectType',
      'created',
      'createdById',
      'deletedAt',
      'destination',
      'id',
      'internallyCreated',
      'isActive',
      'isMatchFullUrl',
      'isMatchQueryString',
      'isOnlyAfterNotFound',
      'isPattern',
      'isProtocolAgnostic',
      'isRegex',
      'isTrailingSlashOptional',
      'label',
      'lastUsedAt',
      'name',
      'note',
      'portalId',
      'precedence',
      'redirectStyle',
      'routePrefix',
      'updated',
      'updatedById',
    ],
    example: null,
  })
  .openapi('UrlMapping')

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

export const getUrlMappings202609UrlMappingsRoute = createRoute({
  method: 'get',
  path: '/url-mappings/2026-09/url-mappings',
  tags: ['Basic'],
  summary: 'List URL mappings',
  description:
    'Retrieve a list of URL mappings from the HubSpot account. This endpoint provides access to URL mapping configurations, which can be used to manage and redirect URLs within the HubSpot CMS. It is useful for understanding how URLs are structured and redirected in your content management setup.',
  operationId: 'get-/url-mappings/2026-09/url-mappings_/url-mappings/v3/url-mappings',
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

export const postUrlMappings202609UrlMappingsRoute = createRoute({
  method: 'post',
  path: '/url-mappings/2026-09/url-mappings',
  tags: ['Basic'],
  summary: 'Create URL mapping',
  description:
    'Create a new URL mapping in your HubSpot account. This endpoint allows you to define URL redirections and mappings, which can be useful for managing site navigation and SEO. The request body must include all required properties of the UrlMapping schema.',
  operationId: 'post-/url-mappings/2026-09/url-mappings_/url-mappings/v3/url-mappings',
  request: {
    body: { content: { '*/*': { schema: UrlMappingSchema, example: null } }, required: true },
  },
  responses: { default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const getUrlMappings202609UrlMappingsIdRoute = createRoute({
  method: 'get',
  path: '/url-mappings/2026-09/url-mappings/{id}',
  tags: ['Basic'],
  summary: 'Retrieve URL mapping',
  description:
    'Retrieve a specific URL mapping by its unique identifier. This endpoint is useful for obtaining details about a particular URL mapping configuration within your HubSpot account. It requires the ID of the URL mapping as a path parameter.',
  operationId: 'get-/url-mappings/2026-09/url-mappings/{id}_/url-mappings/v3/url-mappings/{id}',
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
              'The unique identifier of the URL mapping to retrieve. It must be an integer.',
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

export const deleteUrlMappings202609UrlMappingsIdRoute = createRoute({
  method: 'delete',
  path: '/url-mappings/2026-09/url-mappings/{id}',
  tags: ['Basic'],
  summary: 'Delete URL mapping',
  description:
    'Delete a specific URL mapping in your HubSpot account using its unique identifier. This operation will remove the URL mapping permanently, and it requires appropriate write and delete permissions.',
  operationId: 'delete-/url-mappings/2026-09/url-mappings/{id}_/url-mappings/v3/url-mappings/{id}',
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
            description: 'The unique identifier of the URL mapping to delete. Must be an integer.',
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
