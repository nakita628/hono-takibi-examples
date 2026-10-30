import { createRoute, z } from '@hono/zod-openapi'

const CmsAuditLoggingExportFiltersSchema = z
  .object({
    objectType: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          "An array of strings representing the types of objects to filter by during the export. Valid object types include 'BLOG', 'BLOG_POST', 'LANDING_PAGE', 'WEBSITE_PAGE', 'TEMPLATE', 'MODULE', 'GLOBAL_MODULE', 'SERVERLESS_FUNCTION', 'DOMAIN', 'URL_MAPPING', 'EMAIL', 'CONTENT_SETTINGS', 'HUBDB_TABLE', 'KNOWLEDGE_BASE_ARTICLE', 'KNOWLEDGE_BASE', 'THEME', 'CSS', 'JS', 'CTA', 'FILE', 'WEB_INTERACTIVE', 'PODCAST', 'CASE_STUDY', and 'QUOTE'.",
        example: null,
      }),
  })
  .openapi({ required: ['objectType'], example: null })
  .openapi('CmsAuditLoggingExportFilters')

const CmsAuditLoggingExportSettingsSchema = z
  .object({
    email: z
      .string()
      .openapi({
        description:
          'A string specifying the email address to which notifications about the export should be sent.',
        example: null,
      }),
    filters: CmsAuditLoggingExportFiltersSchema.exactOptional(),
    format: z
      .enum(['CSV', 'XLS', 'XLSX'])
      .openapi({
        description:
          "A string specifying the format of the export file. Valid values include 'XLS', 'XLSX', and 'CSV'.",
        example: null,
      }),
    partition: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer used for partitioning the export data, if applicable.',
        example: null,
      }),
    portalId: z
      .int32()
      .openapi({
        description:
          'An integer representing the ID of the portal from which the audit logs are being exported.',
        example: null,
      }),
    recipientUserIds: z
      .array(z.int32().openapi({ example: null }))
      .openapi({
        description:
          'An array of integers specifying the IDs of users who should receive the exported file.',
        example: null,
      }),
    shouldMarkExportFileAsSensitive: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the export file should be marked as sensitive.',
        example: null,
      }),
    type: z
      .string()
      .openapi({
        description: 'A string indicating the type of export being performed.',
        example: null,
      }),
    userId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the ID of the user initiating the export.',
        example: null,
      }),
    userTimeZone: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the time zone of the user initiating the export.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'email',
      'format',
      'portalId',
      'recipientUserIds',
      'shouldMarkExportFileAsSensitive',
      'type',
    ],
    example: null,
  })
  .openapi('CmsAuditLoggingExportSettings')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'Cursor token representing the boundary timestamp after which to fetch the next page of results. Pass this value as the after query parameter to retrieve later audit logs.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pre-constructed URL that can be used to directly fetch the next page of results without manually building the query.',
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
          'Pre-constructed URL that can be used to directly fetch the previous page of results without manually building the query.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cursor token representing the boundary timestamp before which to fetch the previous page of results. Pass this value as the before query parameter to retrieve earlier audit logs.',
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

const PublicAuditLogSchema = z
  .object({
    event: z
      .enum(['CREATED', 'DELETED', 'PUBLISHED', 'RESTORE', 'UNPUBLISHED', 'UPDATED'])
      .openapi({
        description:
          'The type of event that took place (CREATED, UPDATED, PUBLISHED, DELETED, UNPUBLISHED).',
        example: null,
      }),
    fullName: z
      .string()
      .openapi({ description: 'The name of the user who caused the event.', example: null }),
    meta: z
      .object({})
      .openapi({
        description:
          'Supplementary metadata associated with the audit log entry. It provides additional context about the audited event (ex: rows deleted/updated for a HubDB event, the specific fields that were changed for a Content Settings event).',
        example: null,
      }),
    objectId: z.string().openapi({ description: 'The ID of the object.', example: null }),
    objectName: z
      .string()
      .openapi({ description: 'The internal name of the object in HubSpot.', example: null }),
    objectType: z
      .enum([
        'BLOG',
        'BLOG_POST',
        'CASE_STUDY',
        'CONTENT_SETTINGS',
        'CSS',
        'CTA',
        'DOMAIN',
        'EMAIL',
        'FILE',
        'GLOBAL_MODULE',
        'HUBDB_TABLE',
        'JS',
        'KNOWLEDGE_BASE',
        'KNOWLEDGE_BASE_ARTICLE',
        'LANDING_PAGE',
        'MODULE',
        'PODCAST',
        'QUOTE',
        'SERVERLESS_FUNCTION',
        'TEMPLATE',
        'THEME',
        'URL_MAPPING',
        'WEB_INTERACTIVE',
        'WEBSITE_PAGE',
      ])
      .openapi({
        description: 'The type of the object (BLOG, LANDING_PAGE, DOMAIN, HUBDB_TABLE etc.)',
        example: null,
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The timestamp at which the event occurred.', example: null }),
    userId: z
      .string()
      .openapi({ description: 'The ID of the user who caused the event.', example: null }),
  })
  .openapi({
    required: [
      'event',
      'fullName',
      'meta',
      'objectId',
      'objectName',
      'objectType',
      'timestamp',
      'userId',
    ],
    example: null,
  })
  .openapi('PublicAuditLog')

const CollectionResponsePublicAuditLogSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(PublicAuditLogSchema)
      .openapi({
        description:
          'An array of PublicAuditLog objects, each representing a single audit log entry.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicAuditLog')

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
      scopes: { content: '' },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCmsAuditLogs202609Route = createRoute({
  method: 'get',
  path: '/cms/audit-logs/2026-09',
  tags: ['Basic'],
  summary: 'Retrieve logs',
  description:
    'Retrieve audit logs for the CMS in your HubSpot account. This endpoint allows you to filter logs by user, event type, object type, and object ID. It supports pagination and sorting, making it easier to navigate through large sets of log data. Use this endpoint to monitor changes and activities within your CMS.',
  operationId: 'get-/cms/audit-logs/2026-09_/cms/audit-logs/v3',
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
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            description: 'A string to filter logs that occurred before a specific timestamp.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      eventType: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'eventType',
            in: 'query',
            description:
              'An array of event types to filter logs by specific actions such as CREATED, UPDATED, or DELETED.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
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
      objectId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'objectId',
            in: 'query',
            description:
              'An array of object IDs to filter logs by specific objects that were affected.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      objectType: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'objectType',
            in: 'query',
            description:
              'An array of object types to filter logs by specific CMS objects like BLOG, TEMPLATE, or EMAIL.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
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
            description: 'An array to specify the sorting order of the results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      userId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            description:
              'An array of user IDs to filter logs by the user who performed the action.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: CollectionResponsePublicAuditLogSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsAuditLogs202609ExportRoute = createRoute({
  method: 'post',
  path: '/cms/audit-logs/2026-09/export',
  tags: ['Advanced'],
  summary: 'Export Logs',
  description:
    'Export CMS audit logs based on specified settings. This endpoint allows users to export logs in various formats such as XLS, XLSX, or CSV. The request requires specifying details like the email, portal ID, and recipient user IDs. This is useful for auditing and monitoring changes within the CMS.',
  operationId: 'post-/cms/audit-logs/2026-09/export_/cms/audit-logs/2026-03/export',
  request: {
    body: {
      content: {
        'application/json': { schema: CmsAuditLoggingExportSettingsSchema, example: null },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})
