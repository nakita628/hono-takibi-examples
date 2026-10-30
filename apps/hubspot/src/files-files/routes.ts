import { createRoute, z } from '@hono/zod-openapi'

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description: 'A string token used to retrieve the next page of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string URL that provides the link to access the next page of results.',
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
        description: 'A string token representing the cursor for the previous page of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string URL that provides a link to the previous page of results.',
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

const FileSchema = z
  .object({
    access: z
      .enum([
        'HIDDEN_INDEXABLE',
        'HIDDEN_NOT_INDEXABLE',
        'HIDDEN_PRIVATE',
        'HIDDEN_SENSITIVE',
        'PRIVATE',
        'PUBLIC_INDEXABLE',
        'PUBLIC_NOT_INDEXABLE',
        'SENSITIVE',
      ])
      .exactOptional()
      .openapi({
        description:
          "The access level of the file, represented as a string. Valid values include 'PUBLIC_INDEXABLE', 'PUBLIC_NOT_INDEXABLE', 'HIDDEN_INDEXABLE', 'HIDDEN_NOT_INDEXABLE', 'HIDDEN_PRIVATE', 'PRIVATE', 'HIDDEN_SENSITIVE', and 'SENSITIVE'.",
        example: null,
      }),
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the file is archived.',
        example: null,
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the file was deleted, in ISO 8601 format.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the file was created, in ISO 8601 format.',
        example: null,
      }),
    defaultHostingUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The static cdn URL where the file is hosted.', example: null }),
    encoding: z
      .string()
      .exactOptional()
      .openapi({ description: 'The encoding of the file.', example: null }),
    expiresAt: z
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
        description: 'The expiration epoch timestamp, if set.',
        example: null,
      }),
    extension: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file extension.', example: null }),
    fileMd5: z
      .string()
      .exactOptional()
      .openapi({ description: 'The MD5 hash of the file.', example: null }),
    height: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The height of the file in pixels, applicable if the file is an image or video.',
        example: null,
      }),
    id: z.string().openapi({ description: 'The ID of the file.', example: null }),
    isUsableInContent: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the file can be used in content.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the file.', example: null }),
    parentFolderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the parent folder containing the file, represented as a string.',
        example: null,
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path of the file within the file manager.', example: null }),
    size: z
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
        description: 'The size of the file in bytes.',
        example: null,
      }),
    sourceGroup: z
      .enum(['CONTENT', 'CONVERSATIONS', 'FORMS', 'UI_EXTENSIONS', 'UNKNOWN'])
      .exactOptional()
      .openapi({
        description:
          "The source group of the file, with possible values including 'UNKNOWN', 'CONTENT', 'FORMS', 'CONVERSATIONS', and 'UI_EXTENSIONS'.",
        example: null,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of the file. Values include: IMG, DOCUMENT, AUDIO, MOVIE, OTHER.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the file was last updated, in ISO 8601 format.',
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL where the file can be accessed, represented as a string.',
        example: null,
      }),
    width: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The width of the file in pixels, applicable if the file is an image or video.',
        example: null,
      }),
  })
  .openapi({ required: ['archived', 'createdAt', 'id', 'updatedAt'], example: null })
  .openapi('File')

const CollectionResponseFileSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(FileSchema)
      .openapi({
        description:
          'An array of file objects, each representing a file with its associated metadata.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseFile')

const FolderSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the folder is archived.',
        example: null,
      }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the folder was archived, in ISO 8601 format.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the folder was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique ID for the folder, represented as a string.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the folder, represented as a string.', example: null }),
    parentFolderId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the parent folder, represented as a string.',
        example: null,
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The path of the folder within the file system, represented as a string.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the folder was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({ required: ['archived', 'createdAt', 'id', 'updatedAt'], example: null })
  .openapi('Folder')

const CollectionResponseFolderSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(FolderSchema)
      .openapi({
        description:
          'An array of folder objects, each representing a folder within the file manager.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseFolder')

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
          'Context about the error condition, represented as an object with additional properties that are arrays of strings.',
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
          'A human readable message describing the error along with remediation steps where appropriate. It is a string.',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A specific category that contains more specific detail about the error. This is a string.',
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
          'Context about the error condition, represented as an object with additional properties that are arrays of strings.',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets. It is a string in UUID format.',
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
          'A specific category that contains more specific detail about the error. It is a string.',
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

const StandardErrorSchema = z
  .object({
    category: z
      .string()
      .openapi({ description: 'A string that categorizes the type of error.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({
        description:
          'An object containing additional context about the error condition, with properties as arrays of strings.',
        example: null,
      }),
    errors: z
      .array(ErrorDetailSchema)
      .openapi({
        description:
          'An array of ErrorDetail objects that provide further information about the error.',
        example: null,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing a unique identifier for the error.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object mapping link names to associated URIs with documentation or remediation steps for the error.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description: 'A string containing a human-readable message describing the error.',
        example: null,
      }),
    status: z
      .string()
      .openapi({ description: 'A string indicating the status of the error.', example: null }),
    subCategory: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'An object providing more specific details about the error category.',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'context', 'errors', 'links', 'message', 'status'],
    description: 'Ye olde error',
    example: null,
  })
  .openapi('StandardError')

const FileActionResponseSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the file action was completed, in ISO 8601 format.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of StandardError objects detailing any errors that occurred during the file action.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs, providing additional information about the file action.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of errors encountered during the file action, represented as an integer.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the file action was requested, in ISO 8601 format.',
        example: null,
      }),
    result: FileSchema.exactOptional(),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the file action started, in ISO 8601 format.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          "The current status of the file action. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.",
        example: null,
      }),
    taskId: z
      .string()
      .openapi({
        description: 'The unique identifier for the task associated with the file action.',
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'startedAt', 'status', 'taskId'], example: null })
  .openapi('FileActionResponse')

const FileStatSchema = z
  .object({ file: FileSchema.exactOptional(), folder: FolderSchema.exactOptional() })
  .openapi({ example: null, required: [] })
  .openapi('FileStat')

const FileUpdateInputSchema = z
  .object({
    access: z
      .enum([
        'HIDDEN_INDEXABLE',
        'HIDDEN_NOT_INDEXABLE',
        'HIDDEN_PRIVATE',
        'HIDDEN_SENSITIVE',
        'PRIVATE',
        'PUBLIC_INDEXABLE',
        'PUBLIC_NOT_INDEXABLE',
        'SENSITIVE',
      ])
      .exactOptional()
      .openapi({
        description:
          "The access level to update the file to. Valid values include 'PUBLIC_INDEXABLE', 'PUBLIC_NOT_INDEXABLE', 'HIDDEN_INDEXABLE', 'HIDDEN_NOT_INDEXABLE', 'HIDDEN_PRIVATE', 'PRIVATE', 'HIDDEN_SENSITIVE', and 'SENSITIVE'.",
        example: null,
      }),
    clearExpires: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether to clear the expires TTL on the file.',
        example: null,
      }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the file will expire, represented in ISO 8601 format.',
        example: null,
      }),
    isUsableInContent: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the file can be used in content.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'New Name to rename the file to.', example: null }),
    parentFolderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the parent folder where the file should be moved. This cannot be set in tandem with parentFolderPath.',
        example: null,
      }),
    parentFolderPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The new parentFolder path to move the file to. This cannot be set in tandem with parentFolderId.',
        example: null,
      }),
  })
  .openapi({ required: ['clearExpires'], example: null })
  .openapi('FileUpdateInput')

const FolderInputSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description: 'The name of the folder to be created. This is a required string property.',
        example: null,
      }),
    parentFolderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the parent folder under which the new folder will be created. This is an optional string field.',
        example: null,
      }),
    parentPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The path of the parent folder under which the new folder will be created. This is an optional string property.',
        example: null,
      }),
  })
  .openapi({ required: ['name'], example: null })
  .openapi('FolderInput')

const FolderUpdateInputSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The new name for the folder.', example: null }),
    parentFolderId: z
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
        description: 'The ID of the parent folder to which this folder will be moved. ',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('FolderUpdateInput')

const ImportFromUrlInputSchema = z
  .object({
    access: z
      .enum([
        'HIDDEN_INDEXABLE',
        'HIDDEN_NOT_INDEXABLE',
        'HIDDEN_PRIVATE',
        'HIDDEN_SENSITIVE',
        'PRIVATE',
        'PUBLIC_INDEXABLE',
        'PUBLIC_NOT_INDEXABLE',
        'SENSITIVE',
      ])
      .openapi({
        description:
          "Specifies the access level of the file. Valid values include 'PUBLIC_INDEXABLE', 'PUBLIC_NOT_INDEXABLE', 'HIDDEN_INDEXABLE', 'HIDDEN_NOT_INDEXABLE', 'HIDDEN_PRIVATE', 'PRIVATE', 'HIDDEN_SENSITIVE', and 'SENSITIVE'.",
        example: null,
      }),
    duplicateValidationScope: z
      .enum(['ENTIRE_PORTAL', 'EXACT_FOLDER'])
      .openapi({
        description:
          "Optional: Specifies the scope for duplicate validation. Valid values include 'ENTIRE_PORTAL' and 'EXACT_FOLDER'.",
        example: null,
      }),
    duplicateValidationStrategy: z
      .enum(['NONE', 'REJECT', 'RETURN_EXISTING'])
      .openapi({
        description:
          "Defines the strategy for handling duplicate files. Valid values are 'NONE', 'REJECT', and 'RETURN_EXISTING'.",
        example: null,
      }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Optional: Epoch time when the file will expire, in ISO 8601 format. Do not set if the file should live indefinitely',
        example: null,
      }),
    folderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the folder where the file will be stored. This or folderPath must be set',
        example: null,
      }),
    folderPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The path of the folder where the file will be stored. This or FolderId must be set.',
        example: '"/destinationPath/folder"',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the file to be imported.', example: null }),
    overwrite: z
      .boolean()
      .openapi({
        description:
          'Optional  boolean indicating whether to overwrite an existing file at the same location.',
        example: null,
      }),
    ttl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated Do Not use. Optional: String representing the time-to-live for the file, same a expiresAt but takes a Period String.',
        example: null,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL from which the file will be imported.', example: null }),
  })
  .openapi({
    required: ['access', 'duplicateValidationScope', 'duplicateValidationStrategy', 'overwrite'],
    example: null,
  })
  .openapi('ImportFromUrlInput')

const ImportFromUrlTaskLocatorSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the import task.', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs related to the import task. Each entry in the map is a string.',
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('ImportFromUrlTaskLocator')

const SignedUrlSchema = z
  .object({
    expiresAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the URL expires, in ISO 8601 format.',
        example: null,
      }),
    extension: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file extension of the file.', example: null }),
    height: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The height of the file in pixels.', example: null }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the file.', example: null }),
    size: z
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
        description: 'The size of the file in bytes.',
        example: null,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the file.', example: null }),
    url: z
      .string()
      .openapi({
        description: 'The signed URL string that provides access to the file.',
        example: null,
      }),
    width: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The width of the file in pixels.', example: null }),
  })
  .openapi({ required: ['expiresAt', 'url'], example: null })
  .openapi('SignedUrl')

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
      scopes: { 'files.ui_hidden.read': '', 'files.ui_hidden.write': '' },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const postFiles202609FilesRoute = createRoute({
  method: 'post',
  path: '/files/2026-09/files',
  tags: ['Files'],
  summary: 'Upload file',
  description:
    'Upload a new file to the HubSpot file manager. This endpoint allows you to specify the file, its name, and the folder where it should be stored. It supports additional options such as specifying a character set or additional options for the file.',
  operationId: 'post-/files/2026-09/files',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              charsetHunch: z.string().exactOptional().openapi({ example: null }),
              file: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', example: null }),
              fileName: z.string().exactOptional().openapi({ example: null }),
              folderId: z.string().exactOptional().openapi({ example: null }),
              folderPath: z.string().exactOptional().openapi({ example: null }),
              options: z.string().exactOptional().openapi({ example: null }),
            })
            .openapi({ example: null, required: [] }),
          example: null,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: FileSchema, example: null } },
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
  security: [{ oauth2: ['files.ui_hidden.write'] }],
})

export const postFiles202609FilesImportFromUrlAsyncRoute = createRoute({
  method: 'post',
  path: '/files/2026-09/files/import-from-url/async',
  tags: ['Files'],
  summary: 'Import File',
  description:
    'Import a file asynchronously from a specified URL into the HubSpot file manager. This endpoint allows you to specify various parameters such as access level, duplicate validation strategy, and whether to overwrite existing files. The operation is processed asynchronously, and a task locator is returned to check the status of the import.',
  operationId: 'post-/files/2026-09/files/import-from-url/async',
  request: {
    body: {
      content: { 'application/json': { schema: ImportFromUrlInputSchema, example: null } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'accepted',
      content: { 'application/json': { schema: ImportFromUrlTaskLocatorSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['files.ui_hidden.write'] }],
})

export const getFiles202609FilesImportFromUrlAsyncTasksTaskIdStatusRoute = createRoute({
  method: 'get',
  path: '/files/2026-09/files/import-from-url/async/tasks/{taskId}/status',
  tags: ['Files'],
  summary: 'Retrieve status',
  description:
    'Retrieve the status of an asynchronous file import task using the task ID. This endpoint provides information about the current state of the task, such as whether it is pending, processing, canceled, or complete.',
  operationId: 'get-/files/2026-09/files/import-from-url/async/tasks/{taskId}/status',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            name: 'taskId',
            in: 'path',
            description: 'The ID of the asynchronous file import task.',
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
      content: { 'application/json': { schema: FileActionResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['files.ui_hidden.read'] }],
})

export const getFiles202609FilesSearchRoute = createRoute({
  method: 'get',
  path: '/files/2026-09/files/search',
  tags: ['Files'],
  summary: 'Search files',
  description:
    'Search for files in the HubSpot account using various filters and criteria. This endpoint allows you to specify multiple query parameters to narrow down the search results based on properties like creation date, size, type, and more. It supports pagination and sorting to manage large sets of data effectively.',
  operationId: 'get-/files/2026-09/files/search',
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
              'A cursor token for pagination, indicating the last successfully read resource.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      allowsAnonymousAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'allowsAnonymousAccess',
            in: 'query',
            description: 'Filter files based on whether they allow anonymous access.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
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
            description:
              'A cursor token for pagination, indicating the first successfully read resource.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
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
            description: 'Filter files created at this specific date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdAtGte: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAtGte',
            in: 'query',
            description: 'Filter files created on or after this date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdAtLte: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAtLte',
            in: 'query',
            description: 'Filter files created on or before this date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      encoding: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'encoding',
            in: 'query',
            description: 'Filter files by their encoding type.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      expiresAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'expiresAt',
            in: 'query',
            description: 'Filter files by their expiration date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      expiresAtGte: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'expiresAtGte',
            in: 'query',
            description: 'Filter files expiring on or after this date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      expiresAtLte: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'expiresAtLte',
            in: 'query',
            description: 'Filter files expiring on or before this date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      extension: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'extension',
            in: 'query',
            description: 'Filter files by their file extension.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      fileMd5: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'fileMd5',
            in: 'query',
            description: 'Filter files by their MD5 hash.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      height: z
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
            name: 'height',
            in: 'query',
            description: 'Filter files by their exact height.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      heightGte: z
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
            name: 'heightGte',
            in: 'query',
            description: 'Filter files with height greater than or equal to this value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      heightLte: z
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
            name: 'heightLte',
            in: 'query',
            description: 'Filter files with height less than or equal to this value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      idGte: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'idGte',
            in: 'query',
            description: 'Filter files with IDs greater than or equal to this value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      idLte: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'idLte',
            in: 'query',
            description: 'Filter files with IDs less than or equal to this value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .preprocess((val) => {
                if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                  return val
                if (/^-?\d+$/.test(val)) return BigInt(val)
                const num = Number(val)
                return Number.isSafeInteger(num) ? BigInt(num) : val
              }, z.int64())
              .openapi({ type: 'integer', format: 'int64', example: null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ids',
            in: 'query',
            description: 'A list of file IDs to filter the results.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              example: null,
              items: { type: 'integer', format: 'int64', example: null },
            },
          },
          example: null,
        }),
      isUsableInContent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isUsableInContent',
            in: 'query',
            description: 'Filter files based on whether they are usable in content.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
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
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Filter files by name.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      parentFolderIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .preprocess((val) => {
                if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                  return val
                if (/^-?\d+$/.test(val)) return BigInt(val)
                const num = Number(val)
                return Number.isSafeInteger(num) ? BigInt(num) : val
              }, z.int64())
              .openapi({ type: 'integer', format: 'int64', example: null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'parentFolderIds',
            in: 'query',
            description: 'A list of parent folder IDs to filter the results.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              example: null,
              items: { type: 'integer', format: 'int64', example: null },
            },
          },
          example: null,
        }),
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            description: 'Filter files by their path.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      properties: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'properties',
            in: 'query',
            description: 'A list of property names to include in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            description: 'Filter files by their exact size.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      sizeGte: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'sizeGte',
            in: 'query',
            description: 'Filter files with size greater than or equal to this value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      sizeLte: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'sizeLte',
            in: 'query',
            description: 'Filter files with size less than or equal to this value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
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
            description: 'A list of fields to sort the results by.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'Filter files by their type.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
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
            description: 'Filter files updated at this specific date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedAtGte: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAtGte',
            in: 'query',
            description: 'Filter files updated on or after this date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedAtLte: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAtLte',
            in: 'query',
            description: 'Filter files updated on or before this date and time.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'url',
            in: 'query',
            description: 'Filter files by their URL.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      width: z
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
            name: 'width',
            in: 'query',
            description: 'Filter files by their exact width.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      widthGte: z
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
            name: 'widthGte',
            in: 'query',
            description: 'Filter files with width greater than or equal to this value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      widthLte: z
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
            name: 'widthLte',
            in: 'query',
            description: 'Filter files with width less than or equal to this value.',
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
      content: { 'application/json': { schema: CollectionResponseFileSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['files.ui_hidden.read'] }],
})

export const getFiles202609FilesStatPathRoute = createRoute({
  method: 'get',
  path: '/files/2026-09/files/stat/{path}',
  tags: ['Files'],
  summary: 'Retrieve file stats',
  description:
    'Retrieve detailed statistics for a specific file or folder identified by its path. This endpoint provides information about the file or folder, which can be useful for managing and organizing files within your HubSpot account.',
  operationId: 'get-/files/2026-09/files/stat/{path}',
  request: {
    params: z.object({
      path: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'path',
            in: 'path',
            description:
              'The path of the file or folder for which statistics are being retrieved. This is a required parameter and must be a valid path string.',
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
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'properties',
            in: 'query',
            description:
              'A list of specific properties to include in the response. This parameter is optional and can be used to customize the data returned.',
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
      content: { 'application/json': { schema: FileStatSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['files.ui_hidden.read'] }],
})

export const getFiles202609FilesFileIdRoute = createRoute({
  method: 'get',
  path: '/files/2026-09/files/{fileId}',
  tags: ['Files'],
  summary: 'Retrieve file',
  description: 'Retrieve file metadata using its ID.',
  operationId: 'get-/files/2026-09/files/{fileId}',
  request: {
    params: z.object({
      fileId: z
        .string()
        .regex(/\d+/)
        .openapi({
          param: {
            name: 'fileId',
            in: 'path',
            description: 'The unique identifier of the file to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '\\d+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      properties: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'properties',
            in: 'query',
            description: 'A comma-separated list of property names to include in the response.',
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
      content: { 'application/json': { schema: FileSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['files.ui_hidden.read'] }],
})

export const putFiles202609FilesFileIdRoute = createRoute({
  method: 'put',
  path: '/files/2026-09/files/{fileId}',
  tags: ['Files'],
  summary: 'Update file',
  description:
    "Update an existing file in your HubSpot account by specifying the file ID. This operation allows you to modify the file's content and other attributes. It requires the file to be identified by its unique fileId.",
  operationId: 'put-/files/2026-09/files/{fileId}',
  request: {
    params: z.object({
      fileId: z
        .string()
        .regex(/\d+/)
        .openapi({
          param: {
            name: 'fileId',
            in: 'path',
            description: 'The unique identifier of the file to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '\\d+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              charsetHunch: z.string().exactOptional().openapi({ example: null }),
              file: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', example: null }),
              options: z.string().exactOptional().openapi({ example: null }),
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
      content: { 'application/json': { schema: FileSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['files.ui_hidden.write'] }],
})

export const deleteFiles202609FilesFileIdRoute = createRoute({
  method: 'delete',
  path: '/files/2026-09/files/{fileId}',
  tags: ['Files'],
  summary: 'Delete file',
  description:
    'Delete a specific file from your HubSpot account using its ID. This will delete it from the FileManager and make its url inaccessible',
  operationId: 'delete-/files/2026-09/files/{fileId}',
  request: {
    params: z.object({
      fileId: z
        .string()
        .regex(/\d+/)
        .openapi({
          param: {
            name: 'fileId',
            in: 'path',
            description: 'The ID of the file to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '\\d+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['files.ui_hidden.write'] }],
})

export const patchFiles202609FilesFileIdRoute = createRoute({
  method: 'patch',
  path: '/files/2026-09/files/{fileId}',
  tags: ['Files'],
  summary: 'Update file',
  description:
    'Update the details of a specific file in your HubSpot account using its unique identifier. This operation allows you to modify file properties such as name, parent folder, and access settings. It is useful for managing file metadata and ensuring files are organized and accessible as needed.',
  operationId: 'patch-/files/2026-09/files/{fileId}',
  request: {
    params: z.object({
      fileId: z
        .string()
        .regex(/\d+/)
        .openapi({
          param: {
            name: 'fileId',
            in: 'path',
            description: 'The ID of the file to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '\\d+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: FileUpdateInputSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: FileSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['files.ui_hidden.write'] }],
})

export const getFiles202609FilesFileIdDownloadRoute = createRoute({
  method: 'get',
  path: '/files/2026-09/files/{fileId}/download',
  tags: ['Files'],
  summary: 'Download file',
  description:
    'Download a specific file from your HubSpot account using its ID. It is recommended that this endpoint is only used to access for SENSITIVE files. For PUBLIC files access via the public url. For PRIVATE files access via the signedUrl.',
  operationId: 'get-/files/2026-09/files/{fileId}/download',
  request: {
    params: z.object({
      fileId: z
        .string()
        .regex(/\d+/)
        .openapi({
          param: {
            name: 'fileId',
            in: 'path',
            description: 'The ID of the file to download.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '\\d+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { default: ErrorResponse },
  security: [{ oauth2: ['files.ui_hidden.read'] }],
})

export const deleteFiles202609FilesFileIdGdprDeleteRoute = createRoute({
  method: 'delete',
  path: '/files/2026-09/files/{fileId}/gdpr-delete',
  tags: ['Files'],
  summary: 'GDPR Delete file',
  description:
    'Delete a file from your HubSpot account in compliance with GDPR regulations. This operation ensures that the specified file is permanently removed and cannot be recovered.',
  operationId: 'delete-/files/2026-09/files/{fileId}/gdpr-delete',
  request: {
    params: z.object({
      fileId: z
        .string()
        .regex(/\d+/)
        .openapi({
          param: {
            name: 'fileId',
            in: 'path',
            description: 'The ID of the file to be deleted.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '\\d+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['files.ui_hidden.write'] }],
})

export const getFiles202609FilesFileIdSignedUrlRoute = createRoute({
  method: 'get',
  path: '/files/2026-09/files/{fileId}/signed-url',
  tags: ['Files'],
  summary: 'Generate signed URL',
  description:
    'Generate a signed URL for a specific file in your HubSpot account. This endpoint allows you to specify the size of the file, the expiration time for the URL, and whether the image should be upscaled. It is useful for securely sharing files with a limited lifespan.',
  operationId: 'get-/files/2026-09/files/{fileId}/signed-url',
  request: {
    params: z.object({
      fileId: z
        .string()
        .regex(/\d+/)
        .openapi({
          param: {
            name: 'fileId',
            in: 'path',
            description: 'The unique identifier of the file for which to generate a signed URL.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '\\d+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      expirationSeconds: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'expirationSeconds',
            in: 'query',
            description: 'The duration in seconds for which the signed URL will remain valid.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      size: z
        .enum(['icon', 'medium', 'preview', 'thumb'])
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            description:
              "The desired size of the file. Valid values are 'thumb', 'icon', 'medium', and 'preview'.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null, enum: ['icon', 'medium', 'preview', 'thumb'] },
          },
          example: null,
        }),
      upscale: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'upscale',
            in: 'query',
            description: 'A boolean indicating whether the image should be upscaled if necessary.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: SignedUrlSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['files.ui_hidden.read'] }],
})

export const postFiles202609FoldersRoute = createRoute({
  method: 'post',
  path: '/files/2026-09/folders',
  tags: ['Folders'],
  summary: 'Create folder',
  description:
    'Create a new folder in the HubSpot file manager. This endpoint allows you to organize files by creating folders, which can be nested within other folders by specifying a parent folder ID or path.',
  operationId: 'post-/files/2026-09/folders',
  request: {
    body: {
      content: { 'application/json': { schema: FolderInputSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: FolderSchema, example: null } },
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
  security: [{ oauth2: ['files.ui_hidden.write'] }],
})

export const getFiles202609FoldersSearchRoute = createRoute({
  method: 'get',
  path: '/files/2026-09/folders/search',
  tags: ['Folders'],
  summary: 'Search folders',
  description:
    'Search for folders in the HubSpot file manager using various query parameters to filter results. This endpoint allows you to retrieve folders based on specific criteria such as creation date, update date, folder name, and parent folder IDs. It supports pagination and sorting to help manage large sets of data efficiently.',
  operationId: 'get-/files/2026-09/folders/search',
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
              "A cursor token for pagination. Use the value from the previous response's paging.next.after field.",
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
            description:
              "A cursor token for pagination. Use the value from the previous response's paging.prev.before field.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
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
            description: 'Filter folders created at this exact epoch timestamp.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdAtGte: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAtGte',
            in: 'query',
            description:
              'Filter results where the creation date is greater than or equal to this epoch timestamp.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      createdAtLte: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAtLte',
            in: 'query',
            description: 'Filter results to folders created before or at this epoch timestamp.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      idGte: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'idGte',
            in: 'query',
            description:
              'Filter results to include only folders with IDs greater than or equal to this value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      idLte: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'idLte',
            in: 'query',
            description: 'Filter to include folders with IDs less than or equal to this value.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .preprocess((val) => {
                if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                  return val
                if (/^-?\d+$/.test(val)) return BigInt(val)
                const num = Number(val)
                return Number.isSafeInteger(num) ? BigInt(num) : val
              }, z.int64())
              .openapi({ type: 'integer', format: 'int64', example: null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ids',
            in: 'query',
            description: 'A list of folder IDs to filter the results.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              example: null,
              items: { type: 'integer', format: 'int64', example: null },
            },
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
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Filter folders by this name.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      parentFolderIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .preprocess((val) => {
                if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                  return val
                if (/^-?\d+$/.test(val)) return BigInt(val)
                const num = Number(val)
                return Number.isSafeInteger(num) ? BigInt(num) : val
              }, z.int64())
              .openapi({ type: 'integer', format: 'int64', example: null }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'parentFolderIds',
            in: 'query',
            description: 'A list of parent folder IDs to filter the results.',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              example: null,
              items: { type: 'integer', format: 'int64', example: null },
            },
          },
          example: null,
        }),
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            description: 'Filter results to folders with this specific path.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      properties: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'properties',
            in: 'query',
            description: 'A list of property names to include in the response.',
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
            description: 'A list of property names to sort by in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
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
              'Filter results to include only folders updated at this exact epoch timestamp.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedAtGte: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAtGte',
            in: 'query',
            description: 'Filter results to folders updated at or after this epoch timestamp.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      updatedAtLte: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAtLte',
            in: 'query',
            description: 'Filter folders updated at or before this epoch timestamp.',
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
      content: { 'application/json': { schema: CollectionResponseFolderSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['files.ui_hidden.read'] }],
})

export const getFiles202609FoldersFolderIdRoute = createRoute({
  method: 'get',
  path: '/files/2026-09/folders/{folderId}',
  tags: ['Folders'],
  summary: 'Retrieve folder',
  description: 'Retrieve folder metadata by its ID.',
  operationId: 'get-/files/2026-09/folders/{folderId}',
  request: {
    params: z.object({
      folderId: z
        .string()
        .regex(/\d+/)
        .openapi({
          param: {
            name: 'folderId',
            in: 'path',
            description: 'The ID of the folder to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '\\d+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      properties: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'properties',
            in: 'query',
            description:
              'A comma-separated list of folder property names to include in the response.',
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
      content: { 'application/json': { schema: FolderSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['files.ui_hidden.read'] }],
})

export const deleteFiles202609FoldersFolderIdRoute = createRoute({
  method: 'delete',
  path: '/files/2026-09/folders/{folderId}',
  tags: ['Folders'],
  summary: 'Delete folder by ID',
  description:
    'Delete a folder in your HubSpot account using its ID. This operation deletes the folder and its contents recursively.',
  operationId: 'delete-/files/2026-09/folders/{folderId}',
  request: {
    params: z.object({
      folderId: z
        .string()
        .regex(/\d+/)
        .openapi({
          param: {
            name: 'folderId',
            in: 'path',
            description: 'The ID of the folder to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '\\d+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['files.ui_hidden.write'] }],
})

export const patchFiles202609FoldersFolderIdRoute = createRoute({
  method: 'patch',
  path: '/files/2026-09/folders/{folderId}',
  tags: ['Folders'],
  summary: 'Update folder',
  description:
    "Update the details of a specific folder in the file manager by providing the folder's unique identifier. This operation allows you to modify folder attributes such as its name or parent folder ID.",
  operationId: 'patch-/files/2026-09/folders/{folderId}',
  request: {
    params: z.object({
      folderId: z
        .string()
        .regex(/\d+/)
        .openapi({
          param: {
            name: 'folderId',
            in: 'path',
            description: 'The ID of the folder to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { pattern: '\\d+', type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: FolderUpdateInputSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: FolderSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['files.ui_hidden.write'] }],
})

export const getFiles202609FoldersFolderPathRoute = createRoute({
  method: 'get',
  path: '/files/2026-09/folders/{folderPath}',
  tags: ['Folders'],
  summary: 'Retrieve folder by path',
  description: 'Retrieve details about a specific folder in the file manager using its path.',
  operationId: 'get-/files/2026-09/folders/{folderPath}',
  request: {
    params: z.object({
      folderPath: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'folderPath',
            in: 'path',
            description: 'The path of the folder to retrieve.',
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
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'properties',
            in: 'query',
            description:
              'A comma-separated list of property names to include in the response. This allows you to specify which folder properties you want to retrieve.',
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
      content: { 'application/json': { schema: FolderSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['files.ui_hidden.read'] }],
})

export const deleteFiles202609FoldersFolderPathRoute = createRoute({
  method: 'delete',
  path: '/files/2026-09/folders/{folderPath}',
  tags: ['Folders'],
  summary: 'Delete folder by path',
  description:
    'Delete a folder in your HubSpot account using its path. This operation deletes the folder and its contents recursively.',
  operationId: 'delete-/files/2026-09/folders/{folderPath}',
  request: {
    params: z.object({
      folderPath: z
        .string()
        .regex(/.+/)
        .openapi({
          param: {
            name: 'folderPath',
            in: 'path',
            description: 'The path of the folder to delete.',
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
  security: [{ oauth2: ['files.ui_hidden.write'] }],
})
