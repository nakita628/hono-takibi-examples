import { createRoute, z } from '@hono/zod-openapi'

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'A string that serves as the paging cursor token, indicating the position after the last successfully read resource.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the URL link to the next page of results.',
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

const PublicFolderSchema = z
  .object({
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The timestamp indicating when the folder was created, represented as an integer in int64 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the folder, represented as a string.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the folder, represented as a string.', example: null }),
    updatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The timestamp indicating when the folder was last updated, represented as an integer in int64 format.',
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('PublicFolder')

const CollectionResponsePublicFolderForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(PublicFolderSchema)
      .openapi({
        description:
          'An array of PublicFolder objects, each representing a folder containing email templates.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicFolderForwardPaging')

const PublicTemplateSchema = z
  .object({
    body: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The content of the email template, represented as a string.',
        example: null,
      }),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The timestamp indicating when the email template was created, represented as an integer in int64 format.',
        example: null,
      }),
    folderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the folder where the email template is stored, represented as a string.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the email template, represented as a string.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the email template, represented as a string.',
        example: null,
      }),
    ownerId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier of the owner of the email template, represented as a string.',
        example: null,
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The subject line of the email template, represented as a string.',
        example: null,
      }),
    updatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The timestamp indicating when the email template was last updated, represented as an integer in int64 format.',
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('PublicTemplate')

const CollectionResponsePublicTemplateForwardPagingSchema = z
  .object({
    paging: ForwardPagingSchema.exactOptional(),
    results: z
      .array(PublicTemplateSchema)
      .openapi({
        description:
          'An array of public templates. Each item in the array is an object representing a template with properties such as id, name, subject, body, folderId, ownerId, createdAt, and updatedAt.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicTemplateForwardPaging')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'Context about the error condition, represented as an object where each key is a context name and the value is an array of strings providing additional details.',
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
          'A human readable message describing the error along with remediation steps where appropriate. This is a required field.',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error.',
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
    category: z
      .string()
      .openapi({ description: 'The error category, represented as a string.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object providing context about the error condition, with additional properties as arrays of strings.',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request, formatted as a UUID. Include this value with any error reports or support tickets.',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'An array providing further information about the error, with each item being an ErrorDetail object.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps, represented as an object with string properties.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate. It is a string.',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A specific category that contains more specific detail about the error, represented as a string.',
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

const PublicTemplateInputSchema = z
  .object({
    body: z
      .string()
      .openapi({
        description:
          'The main content of the email template. This is a required field and must be a string.',
        example: null,
      }),
    folderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the folder in which the template is stored. This is an optional field and must be a string if provided.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description:
          'The name of the email template. This is a required field and must be a string.',
        example: null,
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The subject line of the email template. This is an optional field and must be a string if provided.',
        example: null,
      }),
  })
  .openapi({ required: ['body', 'name'], example: null })
  .openapi('PublicTemplateInput')

const PublicTemplateUpdateSchema = z
  .object({
    body: z
      .object({})
      .openapi({
        description: 'An object representing the body content of the email template.',
        example: null,
      }),
    folderId: z
      .object({})
      .openapi({
        description:
          'An object representing the identifier of the folder where the email template is stored.',
        example: null,
      }),
    name: z
      .object({})
      .openapi({
        description: 'An object representing the name of the email template.',
        example: null,
      }),
    subject: z
      .object({})
      .openapi({
        description: 'An object representing the subject line of the email template.',
        example: null,
      }),
  })
  .openapi({ required: ['body', 'folderId', 'name', 'subject'], example: null })
  .openapi('PublicTemplateUpdate')

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
      scopes: {},
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getAutomationEmailTemplates202609Route = createRoute({
  method: 'get',
  path: '/automation/email-templates/2026-09',
  tags: ['Basic'],
  summary: 'List templates',
  description:
    'Retrieve a list of email templates available in the HubSpot account. This endpoint supports pagination to navigate through large sets of templates. Use this endpoint to access and manage your email templates efficiently. Please note: the scopes for these endpoints require user-level access and will not work for existing apps with portal-level access. ',
  operationId: 'get-/automation/email-templates/2026-09_/automation/email-templates/2026-09-beta',
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
              'The paging cursor token of the last successfully read resource, returned as the `paging.next.after` JSON property of a paged response containing more results.',
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
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page. Defaults to 20.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null, default: 20 },
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
          schema: CollectionResponsePublicTemplateForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postAutomationEmailTemplates202609Route = createRoute({
  method: 'post',
  path: '/automation/email-templates/2026-09',
  tags: ['Basic'],
  summary: 'Create',
  description:
    "Create a new email template in your HubSpot account. This endpoint allows you to define the template's name, subject, body, and optionally assign it to a folder. The request must include the template's body and name. Please note: the scopes for these endpoints require user-level access and will not work for existing apps with portal-level access. ",
  operationId: 'post-/automation/email-templates/2026-09_/automation/email-templates/2026-09-beta',
  request: {
    body: {
      content: { 'application/json': { schema: PublicTemplateInputSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicTemplateSchema, example: null } },
      headers: z.object({
        Location: {
          description: 'URL of the newly created resource',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URL of the newly created resource',
              param: { required: false },
              example: null,
            }),
        },
      }),
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getAutomationEmailTemplates202609FoldersRoute = createRoute({
  method: 'get',
  path: '/automation/email-templates/2026-09/folders',
  tags: ['Basic'],
  summary: 'List folders',
  description:
    'Retrieve a list of email template folders available in your HubSpot account. This endpoint supports pagination to navigate through large sets of folders. Use this endpoint to organize and manage your email templates efficiently. Please note: the scopes for these endpoints require user-level access and will not work for existing apps with portal-level access. ',
  operationId:
    'get-/automation/email-templates/2026-09/folders_/automation/email-templates/2026-09-beta/folders',
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
              'The paging cursor token of the last successfully read resource. Use this token to retrieve the next set of results.',
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
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page. Defaults to 20.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null, default: 20 },
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
          schema: CollectionResponsePublicFolderForwardPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getAutomationEmailTemplates202609TemplateIdRoute = createRoute({
  method: 'get',
  path: '/automation/email-templates/2026-09/{templateId}',
  tags: ['Basic'],
  summary: 'Retrieve template',
  description:
    'Retrieve a specific email template by its unique identifier. This endpoint allows you to access the details of an email template, which can be useful for reviewing or managing your email automation strategies. Please note: the scopes for these endpoints require user-level access and will not work for existing apps with portal-level access. ',
  operationId:
    'get-/automation/email-templates/2026-09/{templateId}_/automation/email-templates/2026-09-beta/{templateId}',
  request: {
    params: z.object({
      templateId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'templateId',
            in: 'path',
            description: 'The unique identifier of the email template to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicTemplateSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const patchAutomationEmailTemplates202609TemplateIdRoute = createRoute({
  method: 'patch',
  path: '/automation/email-templates/2026-09/{templateId}',
  tags: ['Basic'],
  summary: 'Update template',
  description:
    "Update an existing email template in your HubSpot account. This endpoint allows you to modify the template's properties such as name, subject, body, and folderId. Ensure that the templateId provided corresponds to an existing template. Please note: the scopes for these endpoints require user-level access and will not work for existing apps with portal-level access. ",
  operationId:
    'patch-/automation/email-templates/2026-09/{templateId}_/automation/email-templates/2026-09-beta/{templateId}',
  request: {
    params: z.object({
      templateId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'templateId',
            in: 'path',
            description: 'The unique identifier of the email template to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicTemplateUpdateSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicTemplateSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})
