import { createRoute, z } from '@hono/zod-openapi'

const RowSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the row was created.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the row was last updated.' }),
    values: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'The values of the row. This is a map of column key to value. Key is user entered name(default) or the internal column id based on the view in the request.',
      }),
  })
  .openapi({ description: 'A single row in a table.', required: [] })
  .openapi('Row')

const CreateRowRequestSchema = z
  .object({
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The parent table where this row will be created. Format: tables/{table}',
      }),
    row: RowSchema.exactOptional().openapi({ description: 'Required. The row to create.' }),
    view: z
      .enum(['VIEW_UNSPECIFIED', 'COLUMN_ID_VIEW'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Column key to use for values in the row. Defaults to user entered name.',
      }),
  })
  .openapi({ description: 'Request message for TablesService.CreateRow.', required: [] })
  .openapi('CreateRowRequest')

const BatchCreateRowsRequestSchema = z
  .object({
    requests: z
      .array(CreateRowRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. The request message specifying the rows to create. A maximum of 500 rows can be created in a single batch.',
      }),
  })
  .openapi({ description: 'Request message for TablesService.BatchCreateRows.', required: [] })
  .openapi('BatchCreateRowsRequest')

const BatchCreateRowsResponseSchema = z
  .object({
    rows: z.array(RowSchema).exactOptional().openapi({ description: 'The created rows.' }),
  })
  .openapi({ description: 'Response message for TablesService.BatchCreateRows.', required: [] })
  .openapi('BatchCreateRowsResponse')

const BatchDeleteRowsRequestSchema = z
  .object({
    names: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The names of the rows to delete. All rows must belong to the parent table or else the entire batch will fail. A maximum of 500 rows can be deleted in a batch. Format: tables/{table}/rows/{row}',
      }),
  })
  .openapi({ description: 'Request message for TablesService.BatchDeleteRows', required: [] })
  .openapi('BatchDeleteRowsRequest')

const UpdateRowRequestSchema = z
  .object({
    row: RowSchema.exactOptional().openapi({ description: 'Required. The row to update.' }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({ description: 'The list of fields to update.' }),
    view: z
      .enum(['VIEW_UNSPECIFIED', 'COLUMN_ID_VIEW'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Column key to use for values in the row. Defaults to user entered name.',
      }),
  })
  .openapi({ description: 'Request message for TablesService.UpdateRow.', required: [] })
  .openapi('UpdateRowRequest')

const BatchUpdateRowsRequestSchema = z
  .object({
    requests: z
      .array(UpdateRowRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. The request messages specifying the rows to update. A maximum of 500 rows can be modified in a single batch.',
      }),
  })
  .openapi({ description: 'Request message for TablesService.BatchUpdateRows.', required: [] })
  .openapi('BatchUpdateRowsRequest')

const BatchUpdateRowsResponseSchema = z
  .object({
    rows: z.array(RowSchema).exactOptional().openapi({ description: 'The updated rows.' }),
  })
  .openapi({ description: 'Response message for TablesService.BatchUpdateRows.', required: [] })
  .openapi('BatchUpdateRowsResponse')

const DateDetailsSchema = z
  .object({
    hasTime: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the date column includes time.' }),
  })
  .openapi({ description: 'Details about a date column.', required: [] })
  .openapi('DateDetails')

const LabeledItemSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal id associated with the item.' }),
    name: z.string().exactOptional().openapi({ description: 'Display string as entered by user.' }),
  })
  .openapi({ description: 'A single item in a labeled column.', required: [] })
  .openapi('LabeledItem')

const LookupDetailsSchema = z
  .object({
    relationshipColumn: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the relationship column associated with the lookup.' }),
    relationshipColumnId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the relationship column.' }),
  })
  .openapi({
    description:
      'Details about a lookup column whose value comes from the associated relationship.',
    required: [],
  })
  .openapi('LookupDetails')

const RelationshipDetailsSchema = z
  .object({
    linkedTable: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the table this relationship is linked to.' }),
  })
  .openapi({ description: 'Details about a relationship column.', required: [] })
  .openapi('RelationshipDetails')

const ColumnDescriptionSchema = z
  .object({
    dataType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Data type of the column Supported types are auto_id, boolean, boolean_list, creator, create_timestamp, date, dropdown, location, integer, integer_list, number, number_list, person, person_list, tags, check_list, text, text_list, update_timestamp, updater, relationship, file_attachment_list. These types directly map to the column types supported on Tables website.',
      }),
    dateDetails: DateDetailsSchema.exactOptional().openapi({
      description: 'Optional. Additional details about a date column.',
    }),
    id: z.string().exactOptional().openapi({ description: 'Internal id for a column.' }),
    labels: z
      .array(LabeledItemSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Range of labeled values for the column. Some columns like tags and drop-downs limit the values to a set of possible values. We return the range of values in such cases to help clients implement better user data validation.',
      }),
    lookupDetails: LookupDetailsSchema.exactOptional().openapi({
      description:
        'Optional. Indicates that this is a lookup column whose value is derived from the relationship column specified in the details. Lookup columns can not be updated directly. To change the value you must update the associated relationship column.',
    }),
    multipleValuesDisallowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates whether or not multiple values are allowed for array types where such a restriction is possible.',
      }),
    name: z.string().exactOptional().openapi({ description: 'column name' }),
    readonly: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Optional. Indicates that values for the column cannot be set by the user.',
      }),
    relationshipDetails: RelationshipDetailsSchema.exactOptional().openapi({
      description:
        'Optional. Additional details about a relationship column. Specified when data_type is relationship.',
    }),
  })
  .openapi({ description: 'Details on a column in the table.', required: [] })
  .openapi('ColumnDescription')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const ListRowsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.',
      }),
    rows: z
      .array(RowSchema)
      .exactOptional()
      .openapi({ description: 'The rows from the specified table.' }),
  })
  .openapi({ description: 'Response message for TablesService.ListRows.', required: [] })
  .openapi('ListRowsResponse')

const SavedViewSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal id associated with the saved view.' }),
    name: z.string().exactOptional().openapi({ description: 'Display name of the saved view.' }),
  })
  .openapi({ description: 'A saved view of a table. NextId: 3', required: [] })
  .openapi('SavedView')

const TableSchema = z
  .object({
    columns: z
      .array(ColumnDescriptionSchema)
      .exactOptional()
      .openapi({
        description: 'List of columns in this table. Order of columns matches the display order.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the table was created.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human readable title of the table.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The resource name of the table. Table names have the form `tables/{table}`.',
      }),
    savedViews: z
      .array(SavedViewSchema)
      .exactOptional()
      .openapi({ description: 'Saved views for this table.' }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time zone of the table. IANA Time Zone Database time zone, e.g. "America/New_York".',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time when the table was last updated excluding updates to individual rows',
      }),
  })
  .openapi({ description: 'A single table. NextId: 8', required: [] })
  .openapi('Table')

const ListTablesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.',
      }),
    tables: z.array(TableSchema).exactOptional().openapi({ description: 'The list of tables.' }),
  })
  .openapi({ description: 'Response message for TablesService.ListTables.', required: [] })
  .openapi('ListTablesResponse')

const WorkspaceSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the workspace was created.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human readable title of the workspace.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the workspace. Workspace names have the form `workspaces/{workspace}`.',
      }),
    tables: z
      .array(TableSchema)
      .exactOptional()
      .openapi({ description: 'The list of tables in the workspace.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the workspace was last updated.' }),
  })
  .openapi({ description: 'A single workspace.', required: [] })
  .openapi('Workspace')

const ListWorkspacesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.',
      }),
    workspaces: z
      .array(WorkspaceSchema)
      .exactOptional()
      .openapi({ description: 'The list of workspaces.' }),
  })
  .openapi({ description: 'Response message for TablesService.ListWorkspaces.', required: [] })
  .openapi('ListWorkspacesResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/drive':
          'See, edit, create, and delete all of your Google Drive files',
        'https://www.googleapis.com/auth/drive.file':
          'See, edit, create, and delete only the specific Google Drive files you use with this app',
        'https://www.googleapis.com/auth/drive.readonly':
          'See and download all your Google Drive files',
        'https://www.googleapis.com/auth/spreadsheets':
          'See, edit, create, and delete all your Google Sheets spreadsheets',
        'https://www.googleapis.com/auth/spreadsheets.readonly':
          'See all your Google Sheets spreadsheets',
        'https://www.googleapis.com/auth/tables':
          'See, edit, create, and delete your tables in Tables by Area 120',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/drive':
          'See, edit, create, and delete all of your Google Drive files',
        'https://www.googleapis.com/auth/drive.file':
          'See, edit, create, and delete only the specific Google Drive files you use with this app',
        'https://www.googleapis.com/auth/drive.readonly':
          'See and download all your Google Drive files',
        'https://www.googleapis.com/auth/spreadsheets':
          'See, edit, create, and delete all your Google Sheets spreadsheets',
        'https://www.googleapis.com/auth/spreadsheets.readonly':
          'See all your Google Sheets spreadsheets',
        'https://www.googleapis.com/auth/tables':
          'See, edit, create, and delete your tables in Tables by Area 120',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1alpha1TablesRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/tables',
  tags: ['tables'],
  description: 'Lists tables for the user.',
  operationId: 'area120tables.tables.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Sorting order for the list of tables on createTime/updateTime.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of tables to return. The service may return fewer than this value. If unspecified, at most 20 tables are returned. The maximum value is 100; values above 100 are coerced to 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListTables` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTables` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTablesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tables'],
      Oauth2c: ['https://www.googleapis.com/auth/tables'],
    },
  ],
})

export const getV1alpha1WorkspacesRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/workspaces',
  tags: ['workspaces'],
  description: 'Lists workspaces for the user.',
  operationId: 'area120tables.workspaces.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of workspaces to return. The service may return fewer than this value. If unspecified, at most 10 workspaces are returned. The maximum value is 25; values above 25 are coerced to 25.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListWorkspacesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tables'],
      Oauth2c: ['https://www.googleapis.com/auth/tables'],
    },
  ],
})

export const getV1alpha1NameRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{name}',
  tags: ['workspaces'],
  description: 'Gets a workspace. Returns NOT_FOUND if the workspace does not exist.',
  operationId: 'area120tables.workspaces.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      view: z
        .enum(['VIEW_UNSPECIFIED', 'COLUMN_ID_VIEW'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Column key to use for values in the row. Defaults to user entered name.',
            in: 'query',
            name: 'view',
            schema: { enum: ['VIEW_UNSPECIFIED', 'COLUMN_ID_VIEW'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the workspace to retrieve. Format: workspaces/{workspace}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WorkspaceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tables'],
      Oauth2c: ['https://www.googleapis.com/auth/tables'],
    },
  ],
})

export const deleteV1alpha1NameRoute = createRoute({
  method: 'delete',
  path: '/v1alpha1/{name}',
  tags: ['tables'],
  description: 'Deletes a row.',
  operationId: 'area120tables.tables.rows.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the row to delete. Format: tables/{table}/rows/{row}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tables'],
      Oauth2c: ['https://www.googleapis.com/auth/tables'],
    },
  ],
})

export const patchV1alpha1NameRoute = createRoute({
  method: 'patch',
  path: '/v1alpha1/{name}',
  tags: ['tables'],
  description: 'Updates a row.',
  operationId: 'area120tables.tables.rows.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The list of fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['VIEW_UNSPECIFIED', 'COLUMN_ID_VIEW'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Column key to use for values in the row. Defaults to user entered name.',
            in: 'query',
            name: 'view',
            schema: { enum: ['VIEW_UNSPECIFIED', 'COLUMN_ID_VIEW'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RowSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RowSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tables'],
      Oauth2c: ['https://www.googleapis.com/auth/tables'],
    },
  ],
})

export const getV1alpha1ParentRowsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/rows',
  tags: ['tables'],
  description: 'Lists rows in a table. Returns NOT_FOUND if the table does not exist.',
  operationId: 'area120tables.tables.rows.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter to only include resources matching the requirements. For more information, see [Filtering list results](https://support.google.com/area120-tables/answer/10503371).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Sorting order for the list of rows on createTime/updateTime.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of rows to return. The service may return fewer than this value. If unspecified, at most 50 rows are returned. The maximum value is 1,000; values above 1,000 are coerced to 1,000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListRows` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRows` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['VIEW_UNSPECIFIED', 'COLUMN_ID_VIEW'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Column key to use for values in the row. Defaults to user entered name.',
            in: 'query',
            name: 'view',
            schema: { enum: ['VIEW_UNSPECIFIED', 'COLUMN_ID_VIEW'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent table. Format: tables/{table}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListRowsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tables'],
      Oauth2c: ['https://www.googleapis.com/auth/tables'],
    },
  ],
})

export const postV1alpha1ParentRowsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/rows',
  tags: ['tables'],
  description: 'Creates a row.',
  operationId: 'area120tables.tables.rows.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      view: z
        .enum(['VIEW_UNSPECIFIED', 'COLUMN_ID_VIEW'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Column key to use for values in the row. Defaults to user entered name.',
            in: 'query',
            name: 'view',
            schema: { enum: ['VIEW_UNSPECIFIED', 'COLUMN_ID_VIEW'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent table where this row will be created. Format: tables/{table}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RowSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RowSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tables'],
      Oauth2c: ['https://www.googleapis.com/auth/tables'],
    },
  ],
})

export const postV1alpha1ParentRowsBatchCreateRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/rows:batchCreate',
  tags: ['tables'],
  description: 'Creates multiple rows.',
  operationId: 'area120tables.tables.rows.batchCreate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent table where the rows will be created. Format: tables/{table}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchCreateRowsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchCreateRowsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tables'],
      Oauth2c: ['https://www.googleapis.com/auth/tables'],
    },
  ],
})

export const postV1alpha1ParentRowsBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/rows:batchDelete',
  tags: ['tables'],
  description: 'Deletes multiple rows.',
  operationId: 'area120tables.tables.rows.batchDelete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent table shared by all rows being deleted. Format: tables/{table}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchDeleteRowsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tables'],
      Oauth2c: ['https://www.googleapis.com/auth/tables'],
    },
  ],
})

export const postV1alpha1ParentRowsBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/rows:batchUpdate',
  tags: ['tables'],
  description: 'Updates multiple rows.',
  operationId: 'area120tables.tables.rows.batchUpdate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent table shared by all rows being updated. Format: tables/{table}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchUpdateRowsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchUpdateRowsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tables'],
      Oauth2c: ['https://www.googleapis.com/auth/tables'],
    },
  ],
})
