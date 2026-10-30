import { createRoute, z } from '@hono/zod-openapi'

const ActionResponseSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp indicating when the action was completed.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp indicating when the action was requested.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp indicating when the action was started.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          'The current status of the action, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING.',
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'startedAt', 'status'], example: null })
  .openapi('ActionResponse')

const AssetFileMetadataSchema = z
  .object({
    archivedAt: z
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
        description: 'Timestamp of when the object was archived (deleted).',
        example: null,
      }),
    children: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'If the object is a folder, contains the filenames of the files within the folder.',
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Timestamp of when the object was first created.',
        example: null,
      }),
    folder: z
      .boolean()
      .openapi({
        description: 'Determines whether or not this path points to a folder.',
        example: null,
      }),
    hash: z
      .string()
      .exactOptional()
      .openapi({
        description: "A unique identifier for the file's content, used to verify data integrity.",
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The path of the file in the CMS Developer File System.',
        example: null,
      }),
    name: z.string().openapi({ description: 'The name of the file.', example: null }),
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Timestamp of when the object was last updated.',
        example: null,
      }),
  })
  .openapi({ required: ['createdAt', 'folder', 'id', 'name', 'updatedAt'], example: null })
  .openapi('AssetFileMetadata')

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

const FileExtractRequestSchema = z
  .object({
    path: z
      .string()
      .openapi({
        description: 'The file system location where the zip file is to be extracted.',
        example: null,
      }),
  })
  .openapi({ required: ['path'], example: null })
  .openapi('FileExtractRequest')

const TaskLocatorSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier for the task.', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('TaskLocator')

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

export const postCmsSourceCode202609ExtractAsyncRoute = createRoute({
  method: 'post',
  path: '/cms/source-code/2026-09/extract/async',
  tags: ['Advanced'],
  summary: 'Extract a zip file',
  description:
    'Extract a zip file in the developer file system. Extraction status can be checked with the `/extract/async/tasks/taskId/status` endpoint below.',
  operationId: 'post-/cms/source-code/2026-09/extract/async_doAsync',
  request: {
    body: {
      content: { 'application/json': { schema: FileExtractRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'accepted',
      content: { 'application/json': { schema: TaskLocatorSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsSourceCode202609ExtractAsyncTasksTaskIdStatusRoute = createRoute({
  method: 'get',
  path: '/cms/source-code/2026-09/extract/async/tasks/{taskId}/status',
  tags: ['Advanced'],
  summary: 'Get extraction status',
  description:
    'Get the status of an extraction by the `taskId` returned from the initial `extract/async` request.',
  operationId: 'get-/cms/source-code/2026-09/extract/async/tasks/{taskId}/status_getAsyncStatus',
  request: {
    params: z.object({
      taskId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'taskId',
            in: 'path',
            description:
              'The unique identifier of the task whose status you want to retrieve. This is an integer value.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ActionResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const getCmsSourceCode202609EnvironmentContentPathRoute = createRoute({
  method: 'get',
  path: '/cms/source-code/2026-09/{environment}/content/{path}',
  tags: ['Basic'],
  summary: 'Download a file',
  description:
    'Downloads the byte contents of the file at the specified path in the specified environment.',
  operationId: 'get-/cms/source-code/2026-09/{environment}/content/{path}_download',
  request: {
    params: z.object({
      environment: z
        .string()
        .openapi({
          param: {
            name: 'environment',
            in: 'path',
            description:
              'The environment from which to retrieve the content. It specifies the context or stage of the source code.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      path: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'path',
            in: 'path',
            description:
              'The path to the specific content file within the environment. It identifies the location of the file to be retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '.+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const putCmsSourceCode202609EnvironmentContentPathRoute = createRoute({
  method: 'put',
  path: '/cms/source-code/2026-09/{environment}/content/{path}',
  tags: ['Advanced'],
  summary: 'Create or update a file',
  description:
    'Upserts a file at the specified path in the specified environment. Accepts multipart/form-data content type.',
  operationId: 'put-/cms/source-code/2026-09/{environment}/content/{path}_createOrUpdate',
  request: {
    params: z.object({
      environment: z
        .string()
        .openapi({
          param: {
            name: 'environment',
            in: 'path',
            description:
              "The environment in which the content file resides, such as 'staging' or 'production'.",
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      path: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'path',
            in: 'path',
            description: 'The specific path to the content file within the environment.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '.+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', example: null }),
            })
            .openapi({ example: null, required: [] }),
          example: null,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: AssetFileMetadataSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsSourceCode202609EnvironmentContentPathRoute = createRoute({
  method: 'post',
  path: '/cms/source-code/2026-09/{environment}/content/{path}',
  tags: ['Advanced'],
  summary: 'Create a file',
  description:
    'Creates a file at the specified path in the specified environment. Accepts multipart/form-data content type. Throws an error if a file already exists at the specified path.',
  operationId: 'post-/cms/source-code/2026-09/{environment}/content/{path}_create',
  request: {
    params: z.object({
      environment: z
        .string()
        .openapi({
          param: {
            name: 'environment',
            in: 'path',
            description:
              "The environment in which the content file will be uploaded, such as 'staging' or 'production'.",
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      path: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'path',
            in: 'path',
            description:
              'The specific path where the content file will be stored within the environment.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '.+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', example: null }),
            })
            .openapi({ example: null, required: [] }),
          example: null,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: AssetFileMetadataSchema, example: null } },
    },
    default: ErrorResponse,
  },
  deprecated: true,
  security: [{ oauth2: ['content'] }],
})

export const deleteCmsSourceCode202609EnvironmentContentPathRoute = createRoute({
  method: 'delete',
  path: '/cms/source-code/2026-09/{environment}/content/{path}',
  tags: ['Basic'],
  summary: 'Delete a file',
  description: 'Deletes the file at the specified path in the specified environment.',
  operationId: 'delete-/cms/source-code/2026-09/{environment}/content/{path}_archive',
  request: {
    params: z.object({
      environment: z
        .string()
        .openapi({
          param: {
            name: 'environment',
            in: 'path',
            description:
              'The environment from which the content file will be deleted. This identifies the specific context or workspace within your HubSpot account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      path: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'path',
            in: 'path',
            description:
              'The path of the content file to be deleted. This should be a valid string that specifies the location of the file within the environment.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '.+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})

export const getCmsSourceCode202609EnvironmentMetadataPathRoute = createRoute({
  method: 'get',
  path: '/cms/source-code/2026-09/{environment}/metadata/{path}',
  tags: ['Basic'],
  summary: 'Get the metadata for a file',
  description:
    'Gets the metadata object for the file at the specified path in the specified environment.',
  operationId: 'get-/cms/source-code/2026-09/{environment}/metadata/{path}_get',
  request: {
    params: z.object({
      environment: z
        .string()
        .openapi({
          param: {
            name: 'environment',
            in: 'path',
            description:
              "The environment in which the file or folder is located, such as 'staging' or 'production'.",
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      path: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'path',
            in: 'path',
            description:
              'The path to the specific file or folder for which metadata is being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '.+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      properties: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'properties',
            in: 'query',
            description:
              'A comma-separated list of specific properties to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: AssetFileMetadataSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['content'] }],
})

export const postCmsSourceCode202609EnvironmentValidatePathRoute = createRoute({
  method: 'post',
  path: '/cms/source-code/2026-09/{environment}/validate/{path}',
  tags: ['Advanced'],
  summary: 'Validate the contents of a file',
  description:
    'Validates the file contents passed to the endpoint given a specified path and environment. Accepts multipart/form-data content type.',
  operationId: 'post-/cms/source-code/2026-09/{environment}/validate/{path}_doValidate',
  request: {
    params: z.object({
      environment: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'environment',
            in: 'path',
            required: true,
            schema: { pattern: '.+', type: 'string', example: null },
          },
          example: null,
        }),
      path: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'path',
            in: 'path',
            description:
              'The specific path of the source code file to validate. It must be a valid string pattern.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '.+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', example: null }),
            })
            .openapi({ example: null, required: [] }),
          example: null,
        },
      },
    },
  },
  responses: { default: ErrorResponse },
  security: [{ oauth2: ['content'] }],
})
