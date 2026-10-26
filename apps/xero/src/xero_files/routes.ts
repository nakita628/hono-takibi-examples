import { createRoute, z } from '@hono/zod-openapi'

const UserSchema = z
  .object({
    Id: z
      .uuid()
      .openapi({ description: 'Xero identifier', example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c' }),
    Name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Key is Name, but returns Email address of user who created the file',
        example: 'john.smith@mail.com',
      }),
    FirstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'First name of user', example: 'John' }),
    LastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last name of user', example: 'Smith' }),
    FullName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last name of user', example: 'Smith' }),
  })
  .openapi({ required: ['Id'] })
  .openapi('User')

const FileObjectSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ description: 'File Name', example: 'File2.jpg' }),
    MimeType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'MimeType of the file (image/png, image/jpeg, application/pdf, etc..)',
        example: 'image/jpeg',
      }),
    Size: z.int().exactOptional().openapi({ description: 'Numeric value in bytes', example: 3615 }),
    CreatedDateUtc: z
      .string()
      .exactOptional()
      .openapi({ description: 'Created date in UTC', example: '2020-12-03T19:04:58.6970000' }),
    UpdatedDateUtc: z
      .string()
      .exactOptional()
      .openapi({ description: 'Updated date in UTC', example: '2020-12-03T19:04:58.6970000' }),
    User: UserSchema.exactOptional(),
    Id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: "File object's UUID",
        example: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      }),
    FolderId: z
      .uuid()
      .exactOptional()
      .openapi({
        description: "Folder relation object's UUID",
        example: '0f8ccf21-7267-4268-9167-a1e2c40c84c8',
      }),
  })
  .openapi({ required: ['id', 'name', 'manufacturer', 'releaseDate'] })
  .openapi('FileObject')

const FilesSchema = z
  .object({
    TotalCount: z.int().exactOptional().openapi({ example: 2 }),
    Page: z.int().exactOptional().openapi({ example: 1 }),
    PerPage: z.int().exactOptional().openapi({ example: 50 }),
    Items: z.array(FileObjectSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Files')

const UploadObjectSchema = z
  .object({
    body: z.string(),
    name: z.string().openapi({ description: 'exact name of the file you are uploading' }),
    filename: z.string(),
    mimeType: z.string().exactOptional(),
  })
  .openapi({ required: ['body', 'name', 'filename'] })
  .openapi('UploadObject')

const FolderSchema = z
  .object({
    Name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the folder', example: 'assets' }),
    FileCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of files in the folder', example: 5 }),
    Email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address used to email files to the inbox. Only the inbox will have this element.',
        example: 'foo@bar.com',
      }),
    IsInbox: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'to indicate if the folder is the Inbox. The Inbox cannot be renamed or deleted.',
        example: true,
      }),
    Id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero unique identifier for a folder  Files',
        example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('Folder')

const FoldersSchema = z
  .object({ Folders: z.array(FolderSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Folders')

const ObjectGroupSchema = z
  .enum([
    'Account',
    'BankTransaction',
    'Contact',
    'CreditNote',
    'Invoice',
    'Item',
    'ManualJournal',
    'Overpayment',
    'Payment',
    'Prepayment',
    'Quote',
    'Receipt',
  ])
  .openapi({
    description:
      'The Object Group that the object is in. These roughly correlate to the endpoints that can be used to retrieve the object via the core accounting API.',
  })
  .openapi('ObjectGroup')

const ObjectTypeSchema = z
  .enum([
    'Unknown',
    'Accpay',
    'AccPayCredit',
    'AccPayPayment',
    'AccRec',
    'AccRecCredit',
    'AccRecPayment',
    'Adjustment',
    'ApCreditPayment',
    'ApOverPayment',
    'ApOverPaymentPayment',
    'ApOverPaymentSourcePayment',
    'ApPrepayment',
    'ApPrepaymentPayment',
    'ApPrepaymentSourcePayment',
    'ArCreditPayment',
    'ArOverPayment',
    'ArOverpaymentPayment',
    'ArOverpaymentSourcePayment',
    'ArPrepayment',
    'ArPrepaymentPayment',
    'ArPrepaymentSourcePayment',
    'CashPaid',
    'CashRec',
    'ExpPayment',
    'ManJournal',
    'PurchaseOrder',
    'Receipt',
    'Transfer',
    'Account',
    'Contact',
    'Business',
    'Employee',
    'Person',
    'User',
    'Org',
    'FixedAsset',
    'PayRun',
    'PriceListItem',
    'Bank',
    'Current',
    'Equity',
    'Expense',
    'Fixed',
    'Liability',
    'Prepayment',
    'Revenue',
    'Sales',
    'Overheads',
    'Depreciatn',
    'OtherIncome',
    'DirectCosts',
    'Currliab',
    'Termliab',
    'NonCurrent',
    'SalesQuote',
  ])
  .openapi({ description: 'The Object Type' })
  .openapi('ObjectType')

const AssociationSchema = z
  .object({
    SendWithObject: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean flag to determines whether the file is sent with the document it is attached to on client facing communications. Note- The SendWithObject element is only returned when using /Associations/{ObjectId} endpoint.',
        example: true,
      }),
    Name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the associated file. Note- The Name element is only returned when using /Associations/{ObjectId} endpoint.',
        example: 'Test.pdf',
      }),
    Size: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The size of the associated file in bytes. Note- The Size element is only returned when using /Associations/{ObjectId} endpoint.',
        example: 12357,
      }),
    CreatedDateUtc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date the file was created (UTC). Note- The CreatedDateUtc element is only returned when using /Associations/{ObjectId} endpoint.',
        example: '2020-12-10T01:22:00.0000000',
      }),
    AssociationDateUtc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date the file was associated with the object (UTC). Note- The AssociationDateUtc element is only returned when using /Associations/{ObjectId} endpoint.',
        example: '2020-12-10T01:22:00.0000000',
      }),
    FileId: z.uuid().exactOptional().openapi({ description: 'The unique identifier of the file' }),
    ObjectId: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the object that the file is being associated with (e.g. InvoiceID, BankTransactionID, ContactID)',
      }),
    ObjectGroup: ObjectGroupSchema.exactOptional(),
    ObjectType: ObjectTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Association')

const RequiredHeaderParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'header',
      name: 'xero-tenant-id',
      'x-snake': 'xero_tenant_id',
      description: 'Xero identifier for Tenant',
      example: 'YOUR_XERO_TENANT_ID',
      schema: { type: 'string' },
      required: true,
    },
  })

const IdempotencyKeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'Idempotency-Key',
      'x-snake': 'idempotency_key',
      description:
        'This allows you to safely retry requests without the risk of duplicate processing. 128 character max.',
      example: 'KEY_VALUE',
      schema: { type: 'string' },
      required: false,
    },
  })

const OAuth2SecurityScheme = {
  type: 'oauth2',
  description: 'For more information',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://login.xero.com/identity/connect/authorize',
      tokenUrl: 'https://identity.xero.com/connect/token',
      scopes: {
        email: 'Grant read-only access to your email',
        openid: 'Grant read-only access to your open id',
        profile: 'your profile information',
        files: 'Grant read-write access to files and folders',
        'files.read': 'Grant read-only access to files and folders',
      },
    },
  },
}

export const getFilesRoute = createRoute({
  method: 'get',
  path: '/Files',
  tags: ['Files'],
  summary: 'Retrieves files',
  operationId: 'getFiles',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      pagesize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'pagesize',
            description: 'pass an optional page size value',
            schema: { type: 'integer', maximum: 100, example: 50 },
            required: false,
          },
          example: 50,
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description: 'number of records to skip for pagination',
            schema: { type: 'integer', minimum: 1, example: 2 },
            required: false,
          },
          example: 2,
        }),
      sort: z
        .enum(['Name', 'Size', 'CreatedDateUTC'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            description: 'values to sort by',
            schema: {
              type: 'string',
              enum: ['Name', 'Size', 'CreatedDateUTC'],
              example: 'CreatedDateUTC',
            },
            required: false,
          },
          example: 'CreatedDateUTC',
        }),
      direction: z
        .enum(['ASC', 'DESC'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'direction',
            description: 'sort direction',
            schema: { type: 'string', enum: ['ASC', 'DESC'], example: 'ASC' },
            required: false,
          },
          example: 'ASC',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: FilesSchema,
          example:
            '{ "TotalCount": 100, "Page": 1, "PerPage": 2, "Items": [ { "Name": "helo-heros.jpg", "MimeType": "application/jpg", "Size": 2878711, "CreatedDateUtc": "2021-02-10T16:02:54.9930000", "UpdatedDateUtc": "2021-02-10T16:02:54.9930000", "User": { "Name": "sid.maestre@xero.com", "FirstName": "Sidney", "LastName": "Maestre", "FullName": "Sidney Maestre", "Id": "740add2a-a703-4b8a-a670-1093919c2040" }, "FolderId": "bf924975-7097-46f2-a143-1ecfbab3c8c3", "Id": "3d413bfe-f40f-4807-b953-9a42f834ff15" }, { "Name": "helo-heros.jpg", "MimeType": "application/jpg", "Size": 2878711, "CreatedDateUtc": "2021-02-09T21:16:00.6130000", "UpdatedDateUtc": "2021-02-09T21:16:00.6130000", "User": { "Name": "sid.maestre@xero.com", "FirstName": "Sidney", "LastName": "Maestre", "FullName": "Sidney Maestre", "Id": "740add2a-a703-4b8a-a670-1093919c2040" }, "FolderId": "bf924975-7097-46f2-a143-1ecfbab3c8c3", "Id": "22f87409-cdfd-4813-a868-559481bcb052" } ] }',
        },
      },
    },
  },
  security: [{ OAuth2: ['files', 'files.read'] }],
})

export const postFilesRoute = createRoute({
  method: 'post',
  path: '/Files',
  tags: ['Files'],
  summary: 'Uploads a File to the inbox',
  operationId: 'uploadFile',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: { content: { 'multipart/form-data': { schema: UploadObjectSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'A successful request',
      content: {
        'application/json': {
          schema: FileObjectSchema,
          example:
            '{ "Name": "helo-heros.jpg", "MimeType": "application/jpg", "Size": 2878711, "CreatedDateUtc": "2021-02-10T23:17:50.1930000", "UpdatedDateUtc": "2021-02-10T23:17:50.1930000", "User": { "Name": "sid.maestre@xero.com", "FirstName": "Sidney", "LastName": "Maestre", "FullName": "Sidney Maestre", "Id": "740add2a-a703-4b8a-a670-1093919c2040" }, "FolderId": "bf924975-7097-46f2-a143-1ecfbab3c8c3", "Id": "22f87409-cdfd-4813-a868-559481bcb052" }',
        },
      },
    },
    400: { description: 'invalid input, object invalid', content: {} },
  },
  security: [{ OAuth2: ['files'] }],
})

export const getFilesFileIdRoute = createRoute({
  method: 'get',
  path: '/Files/{FileId}',
  tags: ['Files'],
  summary: 'Retrieves a file by a unique file ID',
  operationId: 'getFile',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      FileId: z
        .uuid()
        .openapi({
          param: {
            name: 'FileId',
            'x-snake': 'file_id',
            in: 'path',
            required: true,
            description: 'File id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: FileObjectSchema,
          example:
            '{ "Name": "helo-heros.jpg", "MimeType": "application/jpg", "Size": 2878711, "CreatedDateUtc": "2021-02-10T23:17:50.1930000", "UpdatedDateUtc": "2021-02-10T23:17:50.1930000", "User": { "Name": "sid.maestre@xero.com", "FirstName": "Sidney", "LastName": "Maestre", "FullName": "Sidney Maestre", "Id": "740add2a-a703-4b8a-a670-1093919c2040" }, "FolderId": "bf924975-7097-46f2-a143-1ecfbab3c8c3", "Id": "efd77bfc-7018-4da1-b251-7aa2d438382c" }',
        },
      },
    },
  },
  security: [{ OAuth2: ['files', 'files.read'] }],
})

export const putFilesFileIdRoute = createRoute({
  method: 'put',
  path: '/Files/{FileId}',
  tags: ['Files'],
  summary: 'Update a file',
  description: 'Updates file properties of a single file',
  operationId: 'updateFile',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      FileId: z
        .uuid()
        .openapi({
          param: {
            name: 'FileId',
            'x-snake': 'file_id',
            in: 'path',
            required: true,
            description: 'File id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: FileObjectSchema,
          example: '{ "FolderId": "bf924975-7097-46f2-a143-1ecfbab3c8c3" }',
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful request',
      content: {
        'application/json': {
          schema: FileObjectSchema,
          example:
            '{ "Name": "helo-heros.jpg", "MimeType": "application/jpg", "Size": 2878711, "CreatedDateUtc": "2021-02-10T23:17:50.1930000", "UpdatedDateUtc": "2021-02-10T23:58:54.1000000", "User": { "Name": "sid.maestre@xero.com", "FirstName": "Sidney", "LastName": "Maestre", "FullName": "Sidney Maestre", "Id": "740add2a-a703-4b8a-a670-1093919c2040" }, "FolderId": "bf924975-7097-46f2-a143-1ecfbab3c8c3", "Id": "efd77bfc-7018-4da1-b251-7aa2d438382c" }',
        },
      },
    },
    400: { description: 'invalid input, object invalid', content: {} },
  },
  security: [{ OAuth2: ['files'] }],
})

export const deleteFilesFileIdRoute = createRoute({
  method: 'delete',
  path: '/Files/{FileId}',
  tags: ['Files'],
  summary: 'Deletes a specific file',
  description: 'Delete a specific file',
  operationId: 'deleteFile',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      FileId: z
        .uuid()
        .openapi({
          param: {
            name: 'FileId',
            'x-snake': 'file_id',
            in: 'path',
            required: true,
            description: 'File id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
  },
  responses: { 204: { description: 'Successful deletion - return response 204 no content' } },
  security: [{ OAuth2: ['files'] }],
})

export const postFilesFolderIdRoute = createRoute({
  method: 'post',
  path: '/Files/{FolderId}',
  tags: ['Files'],
  summary: 'Uploads a File to a specific folder',
  operationId: 'uploadFileToFolder',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      FolderId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            'x-snake': 'folder_id',
            name: 'FolderId',
            required: true,
            description: 'pass required folder id to save file to specific folder',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    body: { content: { 'multipart/form-data': { schema: UploadObjectSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'A successful request',
      content: {
        'application/json': {
          schema: FileObjectSchema,
          example:
            '{ "Name": "helo-heros.jpg", "MimeType": "application/jpg", "Size": 2878711, "CreatedDateUtc": "2021-02-10T23:17:50.1930000", "UpdatedDateUtc": "2021-02-10T23:17:50.1930000", "User": { "Name": "sid.maestre@xero.com", "FirstName": "Sidney", "LastName": "Maestre", "FullName": "Sidney Maestre", "Id": "740add2a-a703-4b8a-a670-1093919c2040" }, "FolderId": "bf924975-7097-46f2-a143-1ecfbab3c8c3", "Id": "22f87409-cdfd-4813-a868-559481bcb052" }',
        },
      },
    },
    400: { description: 'invalid input, object invalid', content: {} },
  },
  security: [{ OAuth2: ['files'] }],
})

export const getFilesFileIdContentRoute = createRoute({
  method: 'get',
  path: '/Files/{FileId}/Content',
  tags: ['Files'],
  summary: 'Retrieves the content of a specific file',
  description: 'By passing in the appropriate options, retrieve data for specific file',
  operationId: 'getFileContent',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      FileId: z
        .uuid()
        .openapi({
          param: {
            name: 'FileId',
            'x-snake': 'file_id',
            in: 'path',
            required: true,
            description: 'File id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
  },
  responses: {
    200: {
      description: 'returns the byte array of the specific file based on id',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['files', 'files.read'] }],
})

export const getFilesFileIdAssociationsRoute = createRoute({
  method: 'get',
  path: '/Files/{FileId}/Associations',
  tags: ['Files'],
  summary: 'Retrieves a specific file associations',
  description: 'By passing in the appropriate options, \n',
  operationId: 'getFileAssociations',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      FileId: z
        .uuid()
        .openapi({
          param: {
            name: 'FileId',
            'x-snake': 'file_id',
            in: 'path',
            required: true,
            description: 'File id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: z.array(AssociationSchema),
          example:
            '[ { "FileId":"6beccb4a-0d7d-4518-93f3-e0cd1dccb254", "ObjectId":"1270bf7c-5d18-473a-9231-1e36c4bd33ed", "ObjectType":"Business", "ObjectGroup":"Contact" } ]',
        },
      },
    },
  },
  security: [{ OAuth2: ['files', 'files.read'] }],
})

export const postFilesFileIdAssociationsRoute = createRoute({
  method: 'post',
  path: '/Files/{FileId}/Associations',
  tags: ['Files'],
  summary: 'Creates a new file association',
  description: 'By passing in the appropriate options, you can create a new folder',
  operationId: 'createFileAssociation',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      FileId: z
        .uuid()
        .openapi({
          param: {
            name: 'FileId',
            'x-snake': 'file_id',
            in: 'path',
            required: true,
            description: 'File id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: AssociationSchema,
          example:
            '{ "ObjectId": "1270bf7c-5d18-473a-9231-1e36c4bd33ed", "ObjectGroup": "Contact", "ObjectType": "Business" }',
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'A successful request',
      content: {
        'application/json': {
          schema: AssociationSchema,
          example:
            '{ "FileId": "6beccb4a-0d7d-4518-93f3-e0cd1dccb254", "ObjectId": "1270bf7c-5d18-473a-9231-1e36c4bd33ed", "ObjectType": "Business", "ObjectGroup": "Contact" }',
        },
      },
    },
    400: { description: 'invalid input, object invalid', content: {} },
  },
  security: [{ OAuth2: ['files'] }],
})

export const deleteFilesFileIdAssociationsObjectIdRoute = createRoute({
  method: 'delete',
  path: '/Files/{FileId}/Associations/{ObjectId}',
  tags: ['Files'],
  summary: 'Deletes an existing file association',
  description: 'By passing in the appropriate options, you can create a new folder',
  operationId: 'deleteFileAssociation',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      FileId: z
        .uuid()
        .openapi({
          param: {
            name: 'FileId',
            'x-snake': 'file_id',
            in: 'path',
            required: true,
            description: 'File id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
      ObjectId: z
        .uuid()
        .openapi({
          param: {
            name: 'ObjectId',
            'x-snake': 'object_id',
            in: 'path',
            required: true,
            description: 'Object id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
  },
  responses: { 204: { description: 'Successful deletion - return response 204 no content' } },
  security: [{ OAuth2: ['files'] }],
})

export const getAssociationsObjectIdRoute = createRoute({
  method: 'get',
  path: '/Associations/{ObjectId}',
  tags: ['Files'],
  summary: 'Retrieves an association object using a unique object ID',
  description: 'By passing in the appropriate options, you can retrieve an association',
  operationId: 'getAssociationsByObject',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      ObjectId: z
        .uuid()
        .openapi({
          param: {
            name: 'ObjectId',
            'x-snake': 'object_id',
            in: 'path',
            required: true,
            description: 'Object id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    query: z.object({
      pagesize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'pagesize',
            description: 'pass an optional page size value',
            schema: { type: 'integer', maximum: 100, example: 50 },
            required: false,
          },
          example: 50,
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description: 'number of records to skip for pagination',
            schema: { type: 'integer', minimum: 1, example: 2 },
            required: false,
          },
          example: 2,
        }),
      sort: z
        .enum(['Name', 'Size', 'CreatedDateUtc', 'AssociationDateUtc'])
        .default('CreatedDateUtc')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            description: 'values to sort by',
            schema: {
              type: 'string',
              enum: ['Name', 'Size', 'CreatedDateUtc', 'AssociationDateUtc'],
              default: 'CreatedDateUtc',
              example: 'Associations/{ObjectId}?sort=CreatedDateUtc',
            },
            required: false,
          },
          example: 'Associations/{ObjectId}?sort=CreatedDateUtc',
        }),
      direction: z
        .enum(['ASC', 'DESC'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'direction',
            description: 'direction to sort by',
            schema: {
              type: 'string',
              enum: ['ASC', 'DESC'],
              example: 'Associations/{ObjectId}?sort=CreatedDateUtc&direction=DESC',
            },
            required: false,
          },
          example: 'Associations/{ObjectId}?sort=CreatedDateUtc&direction=DESC',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: z.array(AssociationSchema),
          example:
            '[ { "SendWithObject":false, "Name":"testfile.pdf", "Size":12357, "CreatedDateUtc":"2020-12-10T01:22:00.0000000", "AssociationDateUtc":"2020-12-10T01:22:00.0000000", "FileId":"6beccb4a-0d7d-4518-93f3-e0cd1dccb254", "ObjectId":"1270bf7c-5d18-473a-9231-1e36c4bd33ed", "ObjectType":"Business", "ObjectGroup":"Contact" } ]',
        },
      },
    },
  },
  security: [{ OAuth2: ['files', 'files.read'] }],
})

export const getAssociationsCountRoute = createRoute({
  method: 'get',
  path: '/Associations/Count',
  tags: ['Files'],
  summary: 'Retrieves a count of associations for a list of objects.',
  description:
    'By passing in the appropriate options, you can retrieve the association count for objects',
  operationId: 'getAssociationsCount',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      ObjectIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid().openapi({ example: '1270bf7c-5d18-473a-9231-1e36c4bd33ed' })),
        )
        .openapi({
          param: {
            name: 'ObjectIds',
            in: 'query',
            required: true,
            description: 'A comma-separated list of object ids',
            schema: {
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid',
                example: '1270bf7c-5d18-473a-9231-1e36c4bd33ed',
              },
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A dictionary of the object Ids and associations count',
      content: {
        'application/json': {
          schema: z
            .object({})
            .openapi({
              example:
                '{ "19d4fc59-e799-410f-912b-03d4ab294d73": 2, "82195976-5175-45d4-926e-807ff10892e7": 1, "a8547af2-2900-4879-98b8-f1a780c78feb": 0}',
            }),
        },
      },
    },
  },
  security: [{ OAuth2: ['files', 'files.read'] }],
})

export const getFoldersRoute = createRoute({
  method: 'get',
  path: '/Folders',
  tags: ['Files'],
  summary: 'Retrieves folders',
  description: 'By passing in the appropriate options, you can search for available folders',
  operationId: 'getFolders',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      sort: z
        .enum(['Name', 'Size', 'CreatedDateUTC'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            description: 'values to sort by',
            schema: {
              type: 'string',
              enum: ['Name', 'Size', 'CreatedDateUTC'],
              example: 'CreatedDateUTC DESC',
            },
            required: false,
          },
          example: 'CreatedDateUTC DESC',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: z.array(FolderSchema),
          example:
            '[ { "Name":"Inbox", "FileCount":14, "Email":"xero.inbox.jpf4.6oo29retajkhtfus@xerofiles.com", "IsInbox":true, "Id":"bf924975-7097-46f2-a143-1ecfbab3c8c3" }, { "Name":"Contracts", "FileCount":7, "IsInbox":false, "Id":"554ff1ad-4b94-4266-9b45-e29bcb75e6bf" } ]',
        },
      },
    },
  },
  security: [{ OAuth2: ['files', 'files.read'] }],
})

export const postFoldersRoute = createRoute({
  method: 'post',
  path: '/Folders',
  tags: ['Files'],
  summary: 'Creates a new folder',
  description: 'By passing in the appropriate properties, you can create a new folder',
  operationId: 'createFolder',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: FolderSchema, example: '{ "Name": "My Docs" }' } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: FolderSchema,
          example:
            '{ "Name": "My Docs", "FileCount": 0, "IsInbox": false, "Id": "913970ad-8c8e-4666-8294-35b9cac23206" }',
        },
      },
    },
    400: { description: 'invalid input, object invalid', content: {} },
  },
  security: [{ OAuth2: ['files'] }],
})

export const getFoldersFolderIdRoute = createRoute({
  method: 'get',
  path: '/Folders/{FolderId}',
  tags: ['Files'],
  summary: 'Retrieves specific folder by using a unique folder ID',
  description: 'By passing in the appropriate ID, you can search for specific folder',
  operationId: 'getFolder',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      FolderId: z
        .uuid()
        .openapi({
          param: {
            name: 'FolderId',
            'x-snake': 'folder_id',
            in: 'path',
            required: true,
            description: 'Folder id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: FolderSchema,
          example:
            '{ "Name": "My Docs", "FileCount": 0, "IsInbox": false, "Id": "4c5f3fe4-2516-4863-ac88-3029351773bf" }',
        },
      },
    },
  },
  security: [{ OAuth2: ['files', 'files.read'] }],
})

export const putFoldersFolderIdRoute = createRoute({
  method: 'put',
  path: '/Folders/{FolderId}',
  tags: ['Files'],
  summary: 'Updates an existing folder',
  description: 'By passing in the appropriate ID and properties, you can update a folder',
  operationId: 'updateFolder',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      FolderId: z
        .uuid()
        .openapi({
          param: {
            name: 'FolderId',
            'x-snake': 'folder_id',
            in: 'path',
            required: true,
            description: 'Folder id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
    body: {
      content: { 'application/json': { schema: FolderSchema, example: '{ "Name": "Your Docs" }' } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'return the updated object',
      content: {
        'application/json': {
          schema: FolderSchema,
          example:
            '{ "Name": "Your Docs", "FileCount": 0, "IsInbox": false, "Id": "4c5f3fe4-2516-4863-ac88-3029351773bf" }',
        },
      },
    },
    400: { description: 'invalid input, object invalid', content: {} },
  },
  security: [{ OAuth2: ['files'] }],
})

export const deleteFoldersFolderIdRoute = createRoute({
  method: 'delete',
  path: '/Folders/{FolderId}',
  tags: ['Files'],
  summary: 'Deletes a folder',
  description: 'By passing in the appropriate ID, you can delete a folder',
  operationId: 'deleteFolder',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      FolderId: z
        .uuid()
        .openapi({
          param: {
            name: 'FolderId',
            'x-snake': 'folder_id',
            in: 'path',
            required: true,
            description: 'Folder id for single object',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
            },
          },
          example: '4ff1e5cc-9835-40d5-bb18-09fdb118db9c',
        }),
    }),
  },
  responses: { 204: { description: 'Successful deletion - return response 204 no content' } },
  security: [{ OAuth2: ['files'] }],
})

export const getInboxRoute = createRoute({
  method: 'get',
  path: '/Inbox',
  tags: ['Files'],
  summary: 'Retrieves inbox folder',
  description: 'Search for the user inbox',
  operationId: 'getInbox',
  request: { headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }) },
  responses: {
    200: {
      description: 'search results matching criteria',
      content: {
        'application/json': {
          schema: FolderSchema,
          example:
            '{ "Name": "Inbox", "FileCount": 14, "Email": "xero.inbox.jpf4.6oo29retajkhtfus@xerofiles.com", "IsInbox": true, "Id": "bf924975-7097-46f2-a143-1ecfbab3c8c3" }',
        },
      },
    },
  },
  security: [{ OAuth2: ['files', 'files.read'] }],
})
