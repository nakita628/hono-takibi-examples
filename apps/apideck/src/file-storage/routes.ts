import { createRoute, z } from '@hono/zod-openapi'

const CreatedAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'The date and time when the object was created.',
    example: '2020-09-30T07:43:32.000Z',
    readOnly: true,
    title: 'Created at (timestamp)',
  })
  .openapi('CreatedAt')

const CreatedBySchema = z
  .string()
  .nullable()
  .openapi({
    description: 'The user who created the object.',
    example: '12345',
    readOnly: true,
    title: 'Created by',
  })
  .openapi('CreatedBy')

const IdSchema = z
  .string()
  .openapi({
    description: 'A unique identifier for an object.',
    example: '12345',
    readOnly: true,
    title: 'ID',
  })
  .openapi('Id')

const OwnerSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email of the owner', example: 'hello@apideck.com', readOnly: true }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the owner', example: '12345', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the owner', example: 'Elon Musk', readOnly: true }),
  })
  .openapi({
    readOnly: true,
    'x-apideck-schema-id': 'Owner',
    'x-apideck-weights': { id: 'critical' },
    required: [],
  })
  .openapi('Owner')

const LinkedFolderSchema = z
  .object({
    id: IdSchema,
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the folder', example: 'Personal' }),
  })
  .openapi({
    required: ['id'],
    'x-apideck-schema-id': 'LinkedFolder',
    'x-apideck-weights': { id: 'critical' },
  })
  .openapi('LinkedFolder')

const UpdatedAtSchema = z.iso
  .datetime({ offset: true })
  .nullable()
  .openapi({
    description: 'The date and time when the object was last updated.',
    example: '2020-09-30T07:43:32.000Z',
    readOnly: true,
    title: 'Updated at (timestamp)',
  })
  .openapi('UpdatedAt')

const UpdatedBySchema = z
  .string()
  .nullable()
  .openapi({
    description: 'The user who last updated the object.',
    example: '12345',
    readOnly: true,
    title: 'Updated by',
  })
  .openapi('UpdatedBy')

type FolderType = {
  created_at?: z.infer<typeof CreatedAtSchema>
  created_by?: z.infer<typeof CreatedBySchema>
  description?: string
  id?: z.infer<typeof IdSchema>
  name: string
  owner?: z.infer<typeof OwnerSchema>
  parent_folders: z.infer<typeof LinkedFolderSchema>[]
  parent_folders_complete?: boolean
  path?: string
  size?: number
  updated_at?: z.infer<typeof UpdatedAtSchema>
  updated_by?: z.infer<typeof UpdatedBySchema>
}

const BadRequestResponseSchema = z
  .object({
    detail: z
      .union([
        z.string().openapi({ example: 'Missing property foobar' }),
        z.object({}).openapi({ example: { missing: [{ foobar: 'required' }] } }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Bad Request',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Invalid Params',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#requestvalidationerror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 400 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'RequestValidationError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'BadRequest', required: [] })
  .openapi('BadRequestResponse')

const ParentFolderIdSchema = z
  .string()
  .openapi({
    description: 'The parent folder to create the new file within.',
    example: '1234',
    'x-apideck-schema-id': 'ParentFolderId',
  })
  .openapi('ParentFolderId')

const CopyFolderRequestSchema = z
  .strictObject({
    id: IdSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the folder.', example: 'Documents' }),
    parent_folder_id: ParentFolderIdSchema,
  })
  .openapi({ required: ['parent_folder_id'], 'x-apideck-schema-id': 'CopyFolderRequest' })
  .openapi('CopyFolderRequest')

const UnifiedIdSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier of the resource',
        example: '12345',
        readOnly: true,
        title: 'Id',
      }),
  })
  .openapi({ required: ['id'], title: 'UnifiedId', 'x-apideck-schema-id': 'Id' })
  .openapi('UnifiedId')

const CreateDriveGroupResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'DriveGroups' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'google-drive' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateDriveGroupResponse',
  })
  .openapi('CreateDriveGroupResponse')

const CreateDriveResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Drives' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'google-drive' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateDriveResponse',
  })
  .openapi('CreateDriveResponse')

const CreateFileRequestSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional description of the file.',
        example: 'My Personal Documents',
      }),
    drive_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the drive to upload to.', example: '1234' }),
    name: z.string().openapi({ description: 'The name of the file.', example: 'Documents' }),
    parent_folder_id: ParentFolderIdSchema,
  })
  .openapi({ required: ['name', 'parent_folder_id'], 'x-apideck-schema-id': 'CreateFileRequest' })
  .openapi('CreateFileRequest')

const CreateFileResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'files' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'google-drive' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateFileResponse',
  })
  .openapi('CreateFileResponse')

const CreateFolderRequestSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional description of the folder.',
        example: 'My Personal Documents',
      }),
    drive_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the drive to create the folder in.', example: '1234' }),
    id: IdSchema.exactOptional(),
    name: z.string().openapi({ description: 'The name of the folder.', example: 'Documents' }),
    parent_folder_id: ParentFolderIdSchema,
  })
  .openapi({ required: ['name', 'parent_folder_id'], 'x-apideck-schema-id': 'CreateFolderRequest' })
  .openapi('CreateFolderRequest')

const CreateFolderResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Folders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'undefined' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateFolderResponse',
  })
  .openapi('CreateFolderResponse')

const CreateSharedLinkResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Shared Links' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'dropbox' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateSharedLinkResponse',
  })
  .openapi('CreateSharedLinkResponse')

const FileSizeSchema = z
  .int()
  .openapi({
    description: 'The size of the file in bytes',
    example: 1810673,
    'x-apideck-schema-id': 'FileSize',
    'x-graphql-type-name': 'FileSize',
  })
  .openapi('FileSize')

const CreateUploadSessionRequestSchema = z
  .strictObject({
    drive_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the drive to upload to.', example: '1234' }),
    name: z.string().openapi({ description: 'The name of the file.', example: 'Documents' }),
    parent_folder_id: ParentFolderIdSchema,
    size: FileSizeSchema,
  })
  .openapi({
    required: ['name', 'parent_folder_id', 'size'],
    'x-apideck-schema-id': 'CreateUploadSessionRequest',
  })
  .openapi('CreateUploadSessionRequest')

const CreateUploadSessionResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'UploadSessions' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'dropbox' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateUploadSessionResponse',
  })
  .openapi('CreateUploadSessionResponse')

const DeleteDriveGroupResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'DriveGroups' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'google-drive' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteDriveGroupResponse',
  })
  .openapi('DeleteDriveGroupResponse')

const DeleteDriveResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Drives' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'google-drive' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteDriveResponse',
  })
  .openapi('DeleteDriveResponse')

const DeleteFileResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'files' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'google-drive' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteFileResponse',
  })
  .openapi('DeleteFileResponse')

const DeleteFolderResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Folders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'undefined' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteFolderResponse',
  })
  .openapi('DeleteFolderResponse')

const DeleteSharedLinkResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Shared Links' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'dropbox' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteSharedLinkResponse',
  })
  .openapi('DeleteSharedLinkResponse')

const DeleteUploadSessionResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'UploadSessions' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'dropbox' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteUploadSessionResponse',
  })
  .openapi('DeleteUploadSessionResponse')

const DescriptionSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'A description of the object.',
    example: 'A description',
    title: 'Description',
  })
  .openapi('Description')

const DownstreamIdSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'The third-party API ID of original entity',
    example: '12345',
    readOnly: true,
  })
  .openapi('DownstreamId')

const DriveSchema = z
  .strictObject({
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    description: DescriptionSchema.exactOptional(),
    id: IdSchema,
    name: z
      .string()
      .openapi({ description: 'The name of the drive', example: 'Project Resources' }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    required: ['id', 'name'],
    'x-apideck-schema-id': 'Drive',
    'x-apideck-weights': {
      created_at: 'critical',
      created_by: 'edge-case',
      id: 'critical',
      name: 'critical',
      updated_at: 'critical',
      updated_by: 'edge-case',
    },
  })
  .openapi('Drive')

const DriveGroupSchema = z
  .strictObject({
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    description: DescriptionSchema.exactOptional(),
    display_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the drive group', example: 'accounting' }),
    id: IdSchema,
    name: z.string().openapi({ description: 'The name of the drive group', example: 'accounting' }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    required: ['id', 'name'],
    'x-apideck-schema-id': 'DriveGroup',
    'x-apideck-weights': {
      created_at: 'critical',
      created_by: 'edge-case',
      id: 'critical',
      name: 'critical',
      updated_at: 'critical',
      updated_by: 'edge-case',
    },
  })
  .openapi('DriveGroup')

const DriveGroupsFilterSchema = z
  .strictObject({
    parent_group_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the drive group to filter on', example: '1234' }),
  })
  .openapi({
    'x-apideck-schema-id': 'DriveGroupsFilter',
    'x-graphql-type-name': 'DriveGroupsFilter',
    required: [],
  })
  .openapi('DriveGroupsFilter')

const DrivesFilterSchema = z
  .strictObject({
    group_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the drive group to filter on', example: '1234' }),
  })
  .openapi({
    'x-apideck-schema-id': 'DrivesFilter',
    'x-graphql-type-name': 'DrivesFilter',
    required: [],
  })
  .openapi('DrivesFilter')

const ExpiresAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({ example: '2022-09-30T07:43:32.000Z', readOnly: true })
  .openapi('ExpiresAt')

const FileStorageEventTypeSchema = z
  .enum([
    '*',
    'file-storage.file.created',
    'file-storage.file.updated',
    'file-storage.file.deleted',
  ])
  .openapi({ example: 'file-storage.file.created', 'x-apideck-enum-id': 'file-storage.event_type' })
  .openapi('FileStorageEventType')

const FileTypeSchema = z
  .enum(['file', 'folder', 'url'])
  .openapi({
    description: 'The type of resource. Could be file, folder or url',
    example: 'file',
    readOnly: true,
    'x-apideck-enum-id': 'files.type',
    'x-apideck-schema-id': 'FileType',
    'x-graphql-type-name': 'FileType',
  })
  .openapi('FileType')

const FilesFilterSchema = z
  .strictObject({
    drive_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the drive to filter on', example: '1234' }),
    folder_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the folder to filter on. The root folder has an alias "root"',
        example: 'root',
      }),
    shared: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Only return files and folders that are shared' }),
  })
  .openapi({
    'x-apideck-schema-id': 'FilesFilter',
    'x-graphql-type-name': 'FilesFilter',
    required: [],
  })
  .openapi('FilesFilter')

const FilesSearchSchema = z
  .strictObject({
    drive_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the drive to filter on', example: '1234' }),
    query: z
      .string()
      .openapi({
        description: 'The query to search for. May match across multiple fields.',
        example: 'logo jpg',
      }),
  })
  .openapi({
    example: { query: 'logo jpg' },
    required: ['query'],
    'x-apideck-schema-id': 'FilesSearch',
  })
  .openapi('FilesSearch')

const SortDirectionSchema = z
  .enum(['asc', 'desc'])
  .default('asc')
  .openapi({
    description: 'The direction in which to sort the results',
    'x-apideck-enum-id': 'sort_direction',
    'x-apideck-schema-id': 'SortDirection',
    'x-graphql-type-name': 'SortDirection',
  })
  .openapi('SortDirection')

const FilesSortSchema = z
  .strictObject({
    by: z
      .enum(['updated_at', 'name'])
      .exactOptional()
      .openapi({
        description: 'The field on which to sort the Files',
        example: 'updated_at',
        'x-apideck-enum-id': 'files.sort_by',
        'x-graphql-type-name': 'FilesSortBy',
      }),
    direction: SortDirectionSchema.exactOptional(),
  })
  .openapi({
    example: { by: 'updated_at', direction: 'desc' },
    'x-apideck-schema-id': 'FilesSort',
    'x-graphql-type-name': 'FilesSort',
    required: [],
  })
  .openapi('FilesSort')

const FolderSchema: z.ZodType<FolderType> = z
  .lazy(() =>
    z
      .strictObject({
        created_at: CreatedAtSchema.exactOptional(),
        created_by: CreatedBySchema.exactOptional(),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Optional description of the folder',
            example: 'My Personal Documents',
          }),
        id: IdSchema.exactOptional(),
        name: z.string().openapi({ description: 'The name of the folder', example: 'Documents' }),
        owner: OwnerSchema.exactOptional(),
        parent_folders: z
          .array(LinkedFolderSchema)
          .openapi({ description: 'The parent folders of the file, starting from the root' }),
        parent_folders_complete: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the list of parent folder is complete. Some connectors only return the direct parent of a folder',
            readOnly: true,
          }),
        path: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The full path of the folder (includes the folder name)',
            example: '/Personal/Documents',
            readOnly: true,
          }),
        size: z
          .int()
          .exactOptional()
          .openapi({
            description: 'The size of the folder in bytes',
            example: 1810673,
            readOnly: true,
          }),
        updated_at: UpdatedAtSchema.exactOptional(),
        updated_by: UpdatedBySchema.exactOptional(),
      })
      .openapi({
        required: ['name', 'parent_folders'],
        'x-apideck-schema-id': 'Folder',
        'x-apideck-weights': {
          created_at: 'high',
          id: 'critical',
          name: 'critical',
          parent_folders: 'high',
          parent_folders_complete: 'critical',
          size: 'low',
          updated_at: 'critical',
        },
      }),
  )
  .openapi('Folder')

const GetDriveGroupResponseSchema = z
  .object({
    data: DriveGroupSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'DriveGroups' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'google-drive' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetDriveGroupResponse',
    'x-graphql-type-name': 'DriveGroup',
  })
  .openapi('GetDriveGroupResponse')

const LinksSchema = z
  .object({
    current: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to navigate to the current page through the API',
        example: 'https://unify.apideck.com/crm/companies',
      }),
    next: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Link to navigate to the previous page through the API',
        example: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM',
      }),
    previous: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Link to navigate to the previous page through the API',
        example: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
      }),
  })
  .openapi({
    description: 'Links to navigate to previous or next pages through the API',
    'x-apideck-schema-id': 'Links',
    required: [],
  })
  .openapi('Links')

const MetaSchema = z
  .object({
    cursors: z
      .object({
        current: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Cursor to navigate to the current page of results through the API',
            example: 'em9oby1jcm06OnBhZ2U6OjI=',
          }),
        next: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Cursor to navigate to the next page of results through the API',
            example: 'em9oby1jcm06OnBhZ2U6OjM=',
          }),
        previous: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Cursor to navigate to the previous page of results through the API',
            example: 'em9oby1jcm06OnBhZ2U6OjE=',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Cursors to navigate to previous or next pages through the API',
        required: [],
      }),
    items_on_page: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of items returned in the data property of the response',
        example: 50,
      }),
  })
  .openapi({ description: 'Response metadata', 'x-apideck-schema-id': 'Meta', required: [] })
  .openapi('Meta')

const GetDriveGroupsResponseSchema = z
  .object({
    data: z.array(DriveGroupSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'DriveGroups' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'google-drive' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetDriveGroupsResponse',
    'x-graphql-type-name': 'DriveGroupList',
  })
  .openapi('GetDriveGroupsResponse')

const GetDriveResponseSchema = z
  .object({
    data: DriveSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Drives' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'google-drive' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetDriveResponse',
    'x-graphql-type-name': 'Drive',
  })
  .openapi('GetDriveResponse')

const GetDrivesResponseSchema = z
  .object({
    data: z.array(DriveSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Drives' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'google-drive' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetDrivesResponse',
    'x-graphql-type-name': 'DriveList',
  })
  .openapi('GetDrivesResponse')

const UnifiedFileSchema = z
  .strictObject({
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional description of the file', example: 'A sample image' }),
    downloadable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the current user can download this file' }),
    downstream_id: DownstreamIdSchema.exactOptional(),
    id: IdSchema,
    mime_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The MIME type of the file.', example: 'image/jpeg' }),
    name: z.string().openapi({ description: 'The name of the file', example: 'sample.jpg' }),
    owner: OwnerSchema.exactOptional(),
    parent_folders: z
      .array(LinkedFolderSchema)
      .exactOptional()
      .openapi({ description: 'The parent folders of the file, starting from the root' }),
    parent_folders_complete: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the list of parent folder is complete. Some connectors only return the direct parent of a file',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The full path of the file or folder (includes the file name)',
        example: '/Documents/sample.jpg',
      }),
    size: FileSizeSchema.exactOptional(),
    type: FileTypeSchema,
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    required: ['id', 'name', 'type'],
    'x-apideck-schema-id': 'UnifiedFile',
    'x-apideck-weights': {
      created_at: 'high',
      downloadable: 'high',
      downstream_id: 'edge-case',
      id: 'critical',
      mime_type: 'high',
      name: 'critical',
      parent_folders: 'high',
      parent_folders_complete: 'critical',
      size: 'high',
      type: 'critical',
      updated_at: 'critical',
    },
  })
  .openapi('UnifiedFile')

const GetFileResponseSchema = z
  .object({
    data: UnifiedFileSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'files' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'google-drive' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetFileResponse',
    'x-graphql-type-name': 'File',
  })
  .openapi('GetFileResponse')

const GetFilesResponseSchema = z
  .object({
    data: z.array(UnifiedFileSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'files' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'google-drive' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetFilesResponse',
    'x-graphql-type-name': 'FileList',
  })
  .openapi('GetFilesResponse')

const GetFolderResponseSchema = z
  .object({
    data: FolderSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Folders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'undefined' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetFolderResponse',
    'x-graphql-type-name': 'Folder',
  })
  .openapi('GetFolderResponse')

const GetFoldersResponseSchema = z
  .object({
    data: z.array(FolderSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Folders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'undefined' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetFoldersResponse',
    'x-graphql-type-name': 'FolderList',
  })
  .openapi('GetFoldersResponse')

const SharedLinkTargetSchema = z
  .strictObject({
    id: IdSchema,
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the file', example: 'sample.jpg' }),
    type: FileTypeSchema.exactOptional(),
  })
  .openapi({
    readOnly: true,
    required: ['id'],
    'x-apideck-schema-id': 'SharedLinkTarget',
    'x-apideck-weights': { id: 'critical' },
  })
  .openapi('SharedLinkTarget')

const SharedLinkSchema = z
  .strictObject({
    created_at: CreatedAtSchema.exactOptional(),
    download_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL that can be used to download the file.',
        example: 'https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg',
      }),
    expires_at: ExpiresAtSchema.exactOptional(),
    password: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional password for the shared link.', writeOnly: true }),
    password_protected: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicated if the shared link is password protected.',
        readOnly: true,
      }),
    scope: z
      .enum(['public', 'company'])
      .exactOptional()
      .openapi({
        description: 'The scope of the shared link.',
        example: 'company',
        'x-apideck-enum-id': 'files.scope',
      }),
    target: SharedLinkTargetSchema.exactOptional(),
    target_id: z
      .string()
      .openapi({ description: 'The ID of the file or folder to link.', writeOnly: true }),
    updated_at: UpdatedAtSchema.exactOptional(),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL that can be used to view the file.',
        example: 'https://www.box.com/s/vspke7y05sb214wjokpk',
        readOnly: true,
      }),
  })
  .openapi({
    required: ['target_id'],
    'x-apideck-schema-id': 'SharedLink',
    'x-apideck-weights': {
      created_at: 'medium',
      download_url: 'high',
      expires_at: 'high',
      password: 'low',
      password_protected: 'low',
      scope: 'high',
      target: 'critical',
      target_id: 'critical',
      updated_at: 'medium',
      url: 'critical',
    },
  })
  .openapi('SharedLink')

const GetSharedLinkResponseSchema = z
  .object({
    data: SharedLinkSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Shared Links' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'dropbox' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetSharedLinkResponse',
    'x-graphql-type-name': 'SharedLink',
  })
  .openapi('GetSharedLinkResponse')

const GetSharedLinksResponseSchema = z
  .object({
    data: z.array(SharedLinkSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Shared Links' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'dropbox' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetSharedLinksResponse',
    'x-graphql-type-name': 'SharedLinkList',
  })
  .openapi('GetSharedLinksResponse')

const UploadSessionSchema = z
  .strictObject({
    expires_at: ExpiresAtSchema.exactOptional(),
    id: IdSchema.exactOptional(),
    parallel_upload_supported: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if parts of the file can uploaded in parallel.',
        example: true,
        readOnly: true,
      }),
    part_size: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Size in bytes of each part of the file that you will upload. Uploaded parts need to be this size for the upload to be successful.',
        example: 1000000,
        readOnly: true,
      }),
    success: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the upload session was completed successfully.',
        example: true,
        readOnly: true,
      }),
    uploaded_byte_range: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The range of bytes that was successfully uploaded.',
        example: '0-42',
        readOnly: true,
      }),
  })
  .openapi({
    'x-apideck-schema-id': 'UploadSession',
    'x-apideck-weights': {
      expires_at: 'medium',
      id: 'critical',
      parallel_upload_supported: 'critical',
      part_size: 'critical',
      success: 'critical',
      uploaded_byte_range: 'low',
    },
    required: [],
  })
  .openapi('UploadSession')

const GetUploadSessionResponseSchema = z
  .object({
    data: UploadSessionSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'UploadSessions' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'dropbox' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetUploadSessionResponse',
    'x-graphql-type-name': 'UploadSession',
  })
  .openapi('GetUploadSessionResponse')

const NotFoundResponseSchema = z
  .object({
    detail: z
      .union([
        z.string().openapi({ example: "Could not find widget with id: '123'" }),
        z.object({}).openapi({ example: { not_found: { entity: 'widget', id: '123' } } }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Not Found',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Unknown Widget',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#entitynotfounderror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 404 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'EntityNotFoundError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'NotFound', required: [] })
  .openapi('NotFoundResponse')

const NotImplementedResponseSchema = z
  .object({
    detail: z
      .union([
        z
          .string()
          .openapi({
            example:
              "Failed to retrieve Widget tokenUrl from 'components.securitySchemes.OAuth2.flows'",
          }),
        z.object({}),
      ])
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Not Implemented',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Unmapped Attribute',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#mappingerror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 501 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'MappingError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'NotImplemented', required: [] })
  .openapi('NotImplementedResponse')

const PassThroughQuerySchema = z
  .looseObject({
    example_downstream_property: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'All passthrough query parameters are passed along to the connector as is (?pass_through[search]=leads becomes ?search=leads)',
      }),
  })
  .openapi({ required: [] })
  .openapi('PassThroughQuery')

const PaymentRequiredResponseSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
        example: 'You have reached your limit of 2000',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Payment Required',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Request Limit Reached',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#requestlimiterror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 402 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'RequestLimitError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'PaymentRequired', required: [] })
  .openapi('PaymentRequiredResponse')

const TooManyRequestsResponseSchema = z
  .object({
    detail: z
      .object({ context: z.string().exactOptional(), error: z.looseObject({}).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 6585)',
        example: 'Too Many Requests',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Connector Rate Limit Error',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#connectorratelimiterror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 429 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'ConnectorRateLimitError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'TooManyRequests', required: [] })
  .openapi('TooManyRequestsResponse')

const UnauthorizedResponseSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
        example: 'Failed to generate valid JWT Session. Verify applicationId is correct',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Unauthorized',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Unauthorized Request',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#unauthorizederror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 401 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'UnauthorizedError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'Unauthorized', required: [] })
  .openapi('UnauthorizedResponse')

const UnexpectedErrorResponseSchema = z
  .object({
    detail: z
      .union([
        z.string().openapi({ example: 'Missing Header: x-apideck-consumer-id' }),
        z.object({}).openapi({ example: { missing: [{ 'x-apideck-consumer-id': 'required' }] } }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Bad Request',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Invalid Params',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#unauthorizederror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 400 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of error returned',
        example: 'RequestHeadersValidationError',
      }),
  })
  .openapi({ 'x-apideck-schema-id': 'Error', required: [] })
  .openapi('UnexpectedErrorResponse')

const UnprocessableResponseSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
        example: 'Unprocessable request, please verify your request headers and body.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Unprocessable Entity',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Invalid State',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#invalidstateerror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 422 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'InvalidStateError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'Unprocessable', required: [] })
  .openapi('UnprocessableResponse')

const UpdateDriveGroupResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'DriveGroups' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'google-drive' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateDriveGroupResponse',
  })
  .openapi('UpdateDriveGroupResponse')

const UpdateDriveResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Drives' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'google-drive' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateDriveResponse',
  })
  .openapi('UpdateDriveResponse')

const UpdateFileRequestSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional description of the file.',
        example: 'Renamed PDF Document',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the file.', example: 'New Name.pdf' }),
    parent_folder_id: ParentFolderIdSchema.exactOptional(),
  })
  .openapi({ 'x-apideck-schema-id': 'UpdateFileRequest', required: [] })
  .openapi('UpdateFileRequest')

const UpdateFileResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'files' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'google-drive' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateFileResponse',
  })
  .openapi('UpdateFileResponse')

const UpdateFolderRequestSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional description of the folder.',
        example: 'My Personal Documents',
      }),
    id: IdSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the folder.', example: 'Documents' }),
    parent_folder_id: ParentFolderIdSchema.exactOptional(),
  })
  .openapi({ 'x-apideck-schema-id': 'UpdateFolderRequest', required: [] })
  .openapi('UpdateFolderRequest')

const UpdateFolderResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Folders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'undefined' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateFolderResponse',
  })
  .openapi('UpdateFolderResponse')

const UpdateSharedLinkResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Shared Links' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'dropbox' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateSharedLinkResponse',
  })
  .openapi('UpdateSharedLinkResponse')

const UpdateUploadSessionResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'UploadSessions' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'dropbox' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateUploadSessionResponse',
  })
  .openapi('UpdateUploadSessionResponse')

const WebhookEventSchema = z
  .object({
    entity_id: z
      .string()
      .exactOptional()
      .openapi({
        description: "The service provider's ID of the entity that triggered this event",
        example: '123456ASDF',
      }),
    entity_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type entity that triggered this event', example: 'Company' }),
    entity_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The url to retrieve entity detail.',
        example: 'https://unify.apideck.com/crm/contacts/123456',
      }),
    event_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique reference to this request event',
        example: '9755c355-56c3-4a2f-a2da-86ff4411fccb',
      }),
    execution_attempt: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The current count this request event has been attempted',
        example: 2,
      }),
    occurred_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ISO Datetime for when the original event occurred',
        example: '2021-10-01T03:14:55.419Z',
      }),
    service_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Service provider identifier', example: 'close' }),
  })
  .openapi({ 'x-apideck-schema-id': 'WebhookEvent', required: [] })
  .and(
    z.object({ event_type: FileStorageEventTypeSchema.exactOptional() }).openapi({ required: [] }),
  )
  .openapi({ 'x-sdk-exclude': true })
  .openapi('WebhookEvent')

const BadRequestResponseResponse = {
  description: 'Bad Request',
  content: { 'application/json': { schema: BadRequestResponseSchema } },
}

const CreateDriveGroupResponseResponse = {
  description: 'DriveGroups',
  content: { 'application/json': { schema: CreateDriveGroupResponseSchema } },
}

const CreateDriveResponseResponse = {
  description: 'Drives',
  content: { 'application/json': { schema: CreateDriveResponseSchema } },
}

const CreateFileResponseResponse = {
  description: 'Files',
  content: { 'application/json': { schema: CreateFileResponseSchema } },
}

const CreateFolderResponseResponse = {
  description: 'Folders',
  content: { 'application/json': { schema: CreateFolderResponseSchema } },
}

const CreateSharedLinkResponseResponse = {
  description: 'Shared Links',
  content: { 'application/json': { schema: CreateSharedLinkResponseSchema } },
}

const CreateUploadSessionResponseResponse = {
  description: 'UploadSessions',
  content: { 'application/json': { schema: CreateUploadSessionResponseSchema } },
}

const DeleteDriveGroupResponseResponse = {
  description: 'DriveGroups',
  content: { 'application/json': { schema: DeleteDriveGroupResponseSchema } },
}

const DeleteDriveResponseResponse = {
  description: 'Drives',
  content: { 'application/json': { schema: DeleteDriveResponseSchema } },
}

const DeleteFileResponseResponse = {
  description: 'Files',
  content: { 'application/json': { schema: DeleteFileResponseSchema } },
}

const DeleteFolderResponseResponse = {
  description: 'Folders',
  content: { 'application/json': { schema: DeleteFolderResponseSchema } },
}

const DeleteSharedLinkResponseResponse = {
  description: 'Shared Links',
  content: { 'application/json': { schema: DeleteSharedLinkResponseSchema } },
}

const DeleteUploadSessionResponseResponse = {
  description: 'UploadSessions',
  content: { 'application/json': { schema: DeleteUploadSessionResponseSchema } },
}

const GetDriveGroupResponseResponse = {
  description: 'DriveGroups',
  content: { 'application/json': { schema: GetDriveGroupResponseSchema } },
}

const GetDriveGroupsResponseResponse = {
  description: 'DriveGroups',
  content: { 'application/json': { schema: GetDriveGroupsResponseSchema } },
}

const GetDriveResponseResponse = {
  description: 'Drives',
  content: { 'application/json': { schema: GetDriveResponseSchema } },
}

const GetDrivesResponseResponse = {
  description: 'Drives',
  content: { 'application/json': { schema: GetDrivesResponseSchema } },
}

const GetFileDownloadResponseResponse = {
  description: 'File Download',
  content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
}

const GetFileResponseResponse = {
  description: 'File',
  content: { 'application/json': { schema: GetFileResponseSchema } },
}

const GetFilesResponseResponse = {
  description: 'Files',
  content: { 'application/json': { schema: GetFilesResponseSchema } },
}

const GetFolderResponseResponse = {
  description: 'Folders',
  content: { 'application/json': { schema: GetFolderResponseSchema } },
}

const GetFoldersResponseResponse = {
  description: 'Folders',
  content: { 'application/json': { schema: GetFoldersResponseSchema } },
}

const GetSharedLinkResponseResponse = {
  description: 'Shared Link',
  content: { 'application/json': { schema: GetSharedLinkResponseSchema } },
}

const GetSharedLinksResponseResponse = {
  description: 'Shared Links',
  content: { 'application/json': { schema: GetSharedLinksResponseSchema } },
}

const GetUploadSessionResponseResponse = {
  description: 'UploadSessions',
  content: { 'application/json': { schema: GetUploadSessionResponseSchema } },
}

const NotFoundResponseResponse = {
  description: 'The specified resource was not found',
  content: { 'application/json': { schema: NotFoundResponseSchema } },
}

const NotImplementedResponseResponse = {
  description: 'Not Implemented',
  content: { 'application/json': { schema: NotImplementedResponseSchema } },
}

const PaymentRequiredResponseResponse = {
  description: 'Payment Required',
  content: { 'application/json': { schema: PaymentRequiredResponseSchema } },
}

const TooManyRequestsResponseResponse = {
  description: 'Too Many Requests',
  content: { 'application/json': { schema: TooManyRequestsResponseSchema } },
}

const UnauthorizedResponseResponse = {
  description: 'Unauthorized',
  content: { 'application/json': { schema: UnauthorizedResponseSchema } },
}

const UnexpectedErrorResponseResponse = {
  description: 'Unexpected error',
  content: { 'application/json': { schema: UnexpectedErrorResponseSchema } },
}

const UnprocessableResponseResponse = {
  description: 'Unprocessable',
  content: { 'application/json': { schema: UnprocessableResponseSchema } },
}

const UpdateDriveGroupResponseResponse = {
  description: 'DriveGroups',
  content: { 'application/json': { schema: UpdateDriveGroupResponseSchema } },
}

const UpdateDriveResponseResponse = {
  description: 'Drives',
  content: { 'application/json': { schema: UpdateDriveResponseSchema } },
}

const UpdateFileResponseResponse = {
  description: 'Files',
  content: { 'application/json': { schema: UpdateFileResponseSchema } },
}

const UpdateFolderResponseResponse = {
  description: 'Folders',
  content: { 'application/json': { schema: UpdateFolderResponseSchema } },
}

const UpdateSharedLinkResponseResponse = {
  description: 'Shared Links',
  content: { 'application/json': { schema: UpdateSharedLinkResponseSchema } },
}

const UpdateUploadSessionResponseResponse = {
  description: 'UploadSessions',
  content: { 'application/json': { schema: UpdateUploadSessionResponseSchema } },
}

const ApplicationIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The ID of your Unify application',
      example: 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX',
      in: 'header',
      name: 'x-apideck-app-id',
      required: true,
      schema: { type: 'string' },
    },
  })

const ConsumerIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the consumer which you want to get or push data from',
      in: 'header',
      name: 'x-apideck-consumer-id',
      required: true,
      schema: { type: 'string' },
    },
  })

const CursorParamsSchema = z
  .string()
  .nullable()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.',
      in: 'query',
      name: 'cursor',
      schema: { nullable: true, type: 'string' },
      required: false,
    },
  })

const DigestParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The RFC3230 message digest of the whole file. Only required for the Box connector. More information on the Box API docs [here](https://developer.box.com/reference/post-files-upload-sessions-id-commit/#param-digest)',
      in: 'header',
      name: 'digest',
      required: false,
      schema: { example: 'sha=fpRyg5eVQletdZqEKaFlqwBXJzM=', type: 'string' },
    },
    example: 'sha=fpRyg5eVQletdZqEKaFlqwBXJzM=',
  })

const DigestPartParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The RFC3230 message digest of the uploaded part. Only required for the Box connector. More information on the Box API docs [here](https://developer.box.com/reference/put-files-upload-sessions-id/#param-digest)',
      in: 'header',
      name: 'digest',
      required: false,
      schema: { example: 'sha=fpRyg5eVQletdZqEKaFlqwBXJzM=', type: 'string' },
    },
    example: 'sha=fpRyg5eVQletdZqEKaFlqwBXJzM=',
  })

const DriveGroupsFilterParamsSchema = DriveGroupsFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/DriveGroupsFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const DrivesFilterParamsSchema = DrivesFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/DrivesFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const FieldsParamsSchema = z
  .string()
  .nullable()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.',
      example: 'id,updated_at',
      in: 'query',
      name: 'fields',
      schema: { nullable: true, type: 'string' },
      required: false,
    },
  })

const FilesFilterParamsSchema = z
  .strictObject({
    drive_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the drive to filter on', example: '1234' }),
    folder_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the folder to filter on. The root folder has an alias "root"',
        example: 'root',
      }),
    shared: z
      .preprocess(
        ((read) => (val: unknown) => {
          const result = read.safeParse(val)
          return result.success ? result.data : val
        })(z.stringbool()),
        z.boolean(),
      )
      .exactOptional()
      .openapi({ description: 'Only return files and folders that are shared' }),
  })
  .exactOptional()
  .openapi({
    param: {
      description: 'Apply filters',
      explode: true,
      in: 'query',
      name: 'filter',
      schema: {
        additionalProperties: false,
        properties: {
          drive_id: {
            description: 'ID of the drive to filter on',
            example: '1234',
            type: 'string',
          },
          folder_id: {
            description: 'ID of the folder to filter on. The root folder has an alias "root"',
            example: 'root',
            type: 'string',
          },
          shared: { description: 'Only return files and folders that are shared', type: 'boolean' },
        },
        type: 'object',
        'x-apideck-schema-id': 'FilesFilter',
        'x-graphql-type-name': 'FilesFilter',
      },
      style: 'deepObject',
      required: false,
    },
    'x-apideck-schema-id': 'FilesFilter',
    'x-graphql-type-name': 'FilesFilter',
    required: [],
  })

const FilesSortParamsSchema = FilesSortSchema.openapi({
  param: {
    description: 'Apply sorting',
    explode: true,
    in: 'query',
    name: 'sort',
    schema: { $ref: '#/components/schemas/FilesSort' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const IdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the record you are acting upon.',
      in: 'path',
      name: 'id',
      required: true,
      schema: { type: 'string' },
    },
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(200),
  )
  .default(20)
  .exactOptional()
  .openapi({
    param: {
      description: 'Number of results to return. Minimum 1, Maximum 200, Default 20',
      in: 'query',
      name: 'limit',
      schema: { default: 20, maximum: 200, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const MetadataParamsSchema = z.preprocess(
  (val) => {
    if (typeof val !== 'string') return val
    try {
      return JSON.parse(val)
    } catch {
      return val
    }
  },
  CreateFileRequestSchema.openapi({
    param: {
      content: {
        'application/json': { schema: { $ref: '#/components/schemas/CreateFileRequest' } },
      },
      description: 'Metadata to attach to the file',
      in: 'header',
      name: 'x-apideck-metadata',
      required: true,
    },
  }),
)

const PartNumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number().min(0).max(10000),
  )
  .openapi({
    param: {
      description: 'Part number of the file part being uploaded.',
      in: 'query',
      name: 'part_number',
      required: true,
      schema: { example: 0, maximum: 10000, minimum: 0, type: 'number' },
    },
    example: 0,
  })

const PassThroughParamsSchema = PassThroughQuerySchema.openapi({
  param: {
    description:
      'Optional unmapped key/values that will be passed through to downstream as query parameters',
    explode: true,
    in: 'query',
    name: 'pass_through',
    schema: { $ref: '#/components/schemas/PassThroughQuery' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const RawParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description: 'Include raw response. Mostly used for debugging purposes',
      in: 'query',
      name: 'raw',
      schema: { default: false, type: 'boolean' },
      required: false,
    },
  })

const ServiceIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.',
      in: 'header',
      name: 'x-apideck-service-id',
      schema: { type: 'string' },
      required: false,
    },
  })

const ApiKeySecurityScheme = {
  description:
    'To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const getFileStorageDriveGroupsRoute = createRoute({
  method: 'get',
  path: '/file-storage/drive-groups',
  tags: ['Drive Groups'],
  summary: 'List DriveGroups',
  description: 'List DriveGroups',
  operationId: 'driveGroupsAll',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          raw: RawParamsSchema,
          cursor: CursorParamsSchema,
          limit: LimitParamsSchema,
          filter: DriveGroupsFilterParamsSchema,
          fields: FieldsParamsSchema,
        }),
      ),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetDriveGroupsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postFileStorageDriveGroupsRoute = createRoute({
  method: 'post',
  path: '/file-storage/drive-groups',
  tags: ['Drive Groups'],
  summary: 'Create DriveGroup',
  description: 'Create DriveGroup',
  operationId: 'driveGroupsAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: DriveGroupSchema } }, required: true },
  },
  responses: {
    201: CreateDriveGroupResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getFileStorageDriveGroupsIdRoute = createRoute({
  method: 'get',
  path: '/file-storage/drive-groups/{id}',
  tags: ['Drive Groups'],
  summary: 'Get DriveGroup',
  description: 'Get DriveGroup',
  operationId: 'driveGroupsOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetDriveGroupResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteFileStorageDriveGroupsIdRoute = createRoute({
  method: 'delete',
  path: '/file-storage/drive-groups/{id}',
  tags: ['Drive Groups'],
  summary: 'Delete DriveGroup',
  description: 'Delete DriveGroup',
  operationId: 'driveGroupsDelete',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
  },
  responses: {
    200: DeleteDriveGroupResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchFileStorageDriveGroupsIdRoute = createRoute({
  method: 'patch',
  path: '/file-storage/drive-groups/{id}',
  tags: ['Drive Groups'],
  summary: 'Update DriveGroup',
  description: 'Update DriveGroup',
  operationId: 'driveGroupsUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: DriveGroupSchema } }, required: true },
  },
  responses: {
    200: UpdateDriveGroupResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getFileStorageDrivesRoute = createRoute({
  method: 'get',
  path: '/file-storage/drives',
  tags: ['Drives'],
  summary: 'List Drives',
  description: 'List Drives',
  operationId: 'drivesAll',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          raw: RawParamsSchema,
          cursor: CursorParamsSchema,
          limit: LimitParamsSchema,
          filter: DrivesFilterParamsSchema,
          fields: FieldsParamsSchema,
        }),
      ),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetDrivesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postFileStorageDrivesRoute = createRoute({
  method: 'post',
  path: '/file-storage/drives',
  tags: ['Drives'],
  summary: 'Create Drive',
  description: 'Create Drive',
  operationId: 'drivesAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: DriveSchema } }, required: true },
  },
  responses: {
    201: CreateDriveResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getFileStorageDrivesIdRoute = createRoute({
  method: 'get',
  path: '/file-storage/drives/{id}',
  tags: ['Drives'],
  summary: 'Get Drive',
  description: 'Get Drive',
  operationId: 'drivesOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetDriveResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteFileStorageDrivesIdRoute = createRoute({
  method: 'delete',
  path: '/file-storage/drives/{id}',
  tags: ['Drives'],
  summary: 'Delete Drive',
  description: 'Delete Drive',
  operationId: 'drivesDelete',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
  },
  responses: {
    200: DeleteDriveResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchFileStorageDrivesIdRoute = createRoute({
  method: 'patch',
  path: '/file-storage/drives/{id}',
  tags: ['Drives'],
  summary: 'Update Drive',
  description: 'Update Drive',
  operationId: 'drivesUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: DriveSchema } }, required: true },
  },
  responses: {
    200: UpdateDriveResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getFileStorageFilesRoute = createRoute({
  method: 'get',
  path: '/file-storage/files',
  tags: ['Files'],
  summary: 'List Files',
  description: 'List Files',
  operationId: 'filesAll',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter', 'sort', 'pass_through']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          raw: RawParamsSchema,
          cursor: CursorParamsSchema,
          limit: LimitParamsSchema,
          filter: FilesFilterParamsSchema,
          sort: FilesSortParamsSchema,
          pass_through: PassThroughParamsSchema,
          fields: FieldsParamsSchema,
        }),
      ),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetFilesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postFileStorageFilesRoute = createRoute({
  method: 'post',
  path: '/file-storage/files',
  tags: ['Files'],
  summary: 'Upload file',
  description:
    'Upload file (max 100MB). Please use the [Upload Sessions API](#operation/uploadSessionsStart) to upload bigger files. For more information on uploads, refer to the [file upload guide](/guides/file-upload).',
  operationId: 'filesUpload',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-metadata': MetadataParamsSchema,
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: {
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
  responses: {
    201: CreateFileResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
  servers: [{ url: 'https://upload.apideck.com' }],
})

export const postFileStorageFilesSearchRoute = createRoute({
  method: 'post',
  path: '/file-storage/files/search',
  tags: ['Files'],
  summary: 'Search Files',
  description: 'Search Files',
  operationId: 'filesSearch',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['pass_through']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(z.object({ pass_through: PassThroughParamsSchema, fields: FieldsParamsSchema })),
    body: { content: { 'application/json': { schema: FilesSearchSchema } }, required: true },
  },
  responses: {
    200: GetFilesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getFileStorageFilesIdRoute = createRoute({
  method: 'get',
  path: '/file-storage/files/{id}',
  tags: ['Files'],
  summary: 'Get File',
  description: 'Get File',
  operationId: 'filesOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetFileResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteFileStorageFilesIdRoute = createRoute({
  method: 'delete',
  path: '/file-storage/files/{id}',
  tags: ['Files'],
  summary: 'Delete File',
  description: 'Delete File',
  operationId: 'filesDelete',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
  },
  responses: {
    200: DeleteFileResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchFileStorageFilesIdRoute = createRoute({
  method: 'patch',
  path: '/file-storage/files/{id}',
  tags: ['Files'],
  summary: 'Rename or move File',
  description: 'Rename or move File',
  operationId: 'filesUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: UpdateFileRequestSchema } }, required: true },
  },
  responses: {
    200: UpdateFileResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getFileStorageFilesIdDownloadRoute = createRoute({
  method: 'get',
  path: '/file-storage/files/{id}/download',
  tags: ['Files'],
  summary: 'Download File',
  description: 'Download File',
  operationId: 'filesDownload',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetFileDownloadResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postFileStorageFoldersRoute = createRoute({
  method: 'post',
  path: '/file-storage/folders',
  tags: ['Folders'],
  summary: 'Create Folder',
  description: 'Create Folder',
  operationId: 'foldersAdd',
  request: {
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: CreateFolderRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: CreateFolderResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getFileStorageFoldersIdRoute = createRoute({
  method: 'get',
  path: '/file-storage/folders/{id}',
  tags: ['Folders'],
  summary: 'Get Folder',
  description: 'Get Folder',
  operationId: 'foldersOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetFolderResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteFileStorageFoldersIdRoute = createRoute({
  method: 'delete',
  path: '/file-storage/folders/{id}',
  tags: ['Folders'],
  summary: 'Delete Folder',
  description: 'Delete Folder',
  operationId: 'foldersDelete',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
  },
  responses: {
    200: DeleteFolderResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchFileStorageFoldersIdRoute = createRoute({
  method: 'patch',
  path: '/file-storage/folders/{id}',
  tags: ['Folders'],
  summary: 'Rename or move Folder',
  description: 'Rename or move Folder',
  operationId: 'foldersUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: {
      content: { 'application/json': { schema: UpdateFolderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: UpdateFolderResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postFileStorageFoldersIdCopyRoute = createRoute({
  method: 'post',
  path: '/file-storage/folders/{id}/copy',
  tags: ['Folders'],
  summary: 'Copy Folder',
  description: 'Copy Folder',
  operationId: 'foldersCopy',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
    body: { content: { 'application/json': { schema: CopyFolderRequestSchema } }, required: true },
  },
  responses: {
    200: UpdateFolderResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getFileStorageSharedLinksRoute = createRoute({
  method: 'get',
  path: '/file-storage/shared-links',
  tags: ['Shared Links'],
  summary: 'List SharedLinks',
  description: 'List SharedLinks',
  operationId: 'sharedLinksAll',
  request: {
    query: z.object({
      raw: RawParamsSchema,
      cursor: CursorParamsSchema,
      limit: LimitParamsSchema,
      fields: FieldsParamsSchema,
    }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetSharedLinksResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postFileStorageSharedLinksRoute = createRoute({
  method: 'post',
  path: '/file-storage/shared-links',
  tags: ['Shared Links'],
  summary: 'Create Shared Link',
  description: 'Create Shared Link',
  operationId: 'sharedLinksAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: SharedLinkSchema } }, required: true },
  },
  responses: {
    201: CreateSharedLinkResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getFileStorageSharedLinksIdRoute = createRoute({
  method: 'get',
  path: '/file-storage/shared-links/{id}',
  tags: ['Shared Links'],
  summary: 'Get Shared Link',
  description: 'Get Shared Link',
  operationId: 'sharedLinksOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetSharedLinkResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteFileStorageSharedLinksIdRoute = createRoute({
  method: 'delete',
  path: '/file-storage/shared-links/{id}',
  tags: ['Shared Links'],
  summary: 'Delete Shared Link',
  description: 'Delete Shared Link',
  operationId: 'sharedLinksDelete',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
  },
  responses: {
    200: DeleteSharedLinkResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchFileStorageSharedLinksIdRoute = createRoute({
  method: 'patch',
  path: '/file-storage/shared-links/{id}',
  tags: ['Shared Links'],
  summary: 'Update Shared Link',
  description: 'Update Shared Link',
  operationId: 'sharedLinksUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: SharedLinkSchema } }, required: true },
  },
  responses: {
    200: UpdateSharedLinkResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postFileStorageUploadSessionsRoute = createRoute({
  method: 'post',
  path: '/file-storage/upload-sessions',
  tags: ['Upload Sessions'],
  summary: 'Start Upload Session',
  description:
    'Start an Upload Session. Upload sessions are used to upload large files, use the [Upload File](#operation/filesUpload) endpoint to upload smaller files (up to 100MB). Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).',
  operationId: 'uploadSessionsAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: CreateUploadSessionRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: CreateUploadSessionResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
  servers: [{ url: 'https://upload.apideck.com' }],
})

export const getFileStorageUploadSessionsIdRoute = createRoute({
  method: 'get',
  path: '/file-storage/upload-sessions/{id}',
  tags: ['Upload Sessions'],
  summary: 'Get Upload Session',
  description:
    'Get Upload Session. Use the `part_size` to split your file into parts. Upload the parts to the [Upload part of File](#operation/uploadSessionsUpload) endpoint. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).',
  operationId: 'uploadSessionsOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetUploadSessionResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
  servers: [{ url: 'https://upload.apideck.com' }],
})

export const putFileStorageUploadSessionsIdRoute = createRoute({
  method: 'put',
  path: '/file-storage/upload-sessions/{id}',
  tags: ['Upload Sessions'],
  summary: 'Upload part of File to Upload Session',
  description:
    'Upload part of File to Upload Session (max 100MB). Get `part_size` from [Get Upload Session](#operation/uploadSessionsOne) first. Every File part (except the last one) uploaded to this endpoint should have Content-Length equal to `part_size`. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).',
  operationId: 'uploadSessionsUpload',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
      digest: DigestPartParamsSchema,
    }),
    query: z.object({ part_number: PartNumberParamsSchema, raw: RawParamsSchema }),
    body: {
      content: {
        '*/*': {
          schema: z
            .file()
            .openapi({ type: 'string', format: 'binary', example: '<binary string>' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: UpdateUploadSessionResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
  servers: [{ url: 'https://upload.apideck.com' }],
})

export const deleteFileStorageUploadSessionsIdRoute = createRoute({
  method: 'delete',
  path: '/file-storage/upload-sessions/{id}',
  tags: ['Upload Sessions'],
  summary: 'Abort Upload Session',
  description:
    'Abort Upload Session. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).',
  operationId: 'uploadSessionsDelete',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
  },
  responses: {
    200: DeleteUploadSessionResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postFileStorageUploadSessionsIdFinishRoute = createRoute({
  method: 'post',
  path: '/file-storage/upload-sessions/{id}/finish',
  tags: ['Upload Sessions'],
  summary: 'Finish Upload Session',
  description:
    'Finish Upload Session. Only call this endpoint after all File parts have been uploaded to [Upload part of File](#operation/uploadSessionsUpload). Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).',
  operationId: 'uploadSessionsFinish',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
      digest: DigestPartParamsSchema,
    }),
    body: { content: { 'application/json': { schema: z.strictObject({}) } } },
  },
  responses: {
    201: GetFileResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
  servers: [{ url: 'https://upload.apideck.com' }],
})
