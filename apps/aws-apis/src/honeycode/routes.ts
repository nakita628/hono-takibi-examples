import { createRoute, z } from '@hono/zod-openapi'

const SourceDataColumnIndexSchema = z.int().min(1).openapi('SourceDataColumnIndex')

const SourceDataColumnPropertiesSchema = z
  .object({
    columnIndex: SourceDataColumnIndexSchema.and(
      z.any().openapi({ description: 'The index of the column in the input file.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains the properties for importing data to a specific column in a table.',
    required: [],
  })
  .openapi('SourceDataColumnProperties')

const ImportColumnMapSchema = z
  .record(z.string(), SourceDataColumnPropertiesSchema)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi('ImportColumnMap')

const DestinationOptionsSchema = z
  .object({
    columnMap: ImportColumnMapSchema.and(
      z
        .any()
        .openapi({
          description: 'A map of the column id to the import properties for each column.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains the options relating to the destination of the import request.',
    required: [],
  })
  .openapi('DestinationOptions')

const DelimitedTextDelimiterSchema = z
  .string()
  .regex(/^[^\n\r\x00\x08\x0B\x0C\x0E\x1F]?$/)
  .length(1)
  .openapi('DelimitedTextDelimiter')

const HasHeaderRowSchema = z.boolean().openapi('HasHeaderRow')

const IgnoreEmptyRowsSchema = z.boolean().openapi('IgnoreEmptyRows')

const ImportDataCharacterEncodingSchema = z
  .enum(['UTF-8', 'US-ASCII', 'ISO-8859-1', 'UTF-16BE', 'UTF-16LE', 'UTF-16'])
  .openapi('ImportDataCharacterEncoding')

const DelimitedTextImportOptionsSchema = z
  .object({
    delimiter: DelimitedTextDelimiterSchema.and(
      z
        .any()
        .openapi({
          description: 'The delimiter to use for separating columns in a single row of the input.',
        }),
    ),
    hasHeaderRow: HasHeaderRowSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the input file has a header row at the top containing the column names.',
        }),
    ).exactOptional(),
    ignoreEmptyRows: IgnoreEmptyRowsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A parameter to indicate whether empty rows should be ignored or be included in the import.',
        }),
    ).exactOptional(),
    dataCharacterEncoding: ImportDataCharacterEncodingSchema.and(
      z.any().openapi({ description: 'The encoding of the data in the input file.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['delimiter'],
    description:
      ' An object that contains the options relating to parsing delimited text as part of an import request. ',
  })
  .openapi('DelimitedTextImportOptions')

type ImportOptionsType = {
  destinationOptions?: z.infer<typeof DestinationOptionsSchema> & { [key: string]: unknown }
  delimitedTextOptions?: z.infer<typeof DelimitedTextImportOptionsSchema> & {
    [key: string]: unknown
  }
}

const WorkbookCursorSchema = z.int().openapi('WorkbookCursor')

const RowIdSchema = z
  .string()
  .regex(
    /row:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,
  )
  .length(77)
  .openapi('RowId')

const CreatedRowsMapSchema = z.record(z.string(), RowIdSchema).openapi('CreatedRowsMap')

const BatchItemIdSchema = z
  .string()
  .regex(/^(?!\s*$).+/)
  .min(1)
  .max(64)
  .openapi('BatchItemId')

const BatchErrorMessageSchema = z
  .string()
  .regex(/^(?!\s*$).+/)
  .openapi('BatchErrorMessage')

const FailedBatchItemSchema = z
  .object({
    id: BatchItemIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The id of the batch item that failed. This is the batch item id for the BatchCreateTableRows and BatchUpsertTableRows operations and the row id for the BatchUpdateTableRows and BatchDeleteTableRows operations. ',
        }),
    ),
    errorMessage: BatchErrorMessageSchema.and(
      z
        .any()
        .openapi({ description: ' The error message that indicates why the batch item failed. ' }),
    ),
  })
  .openapi({
    required: ['id', 'errorMessage'],
    description:
      ' A single item in a batch that failed to perform the intended action because of an error preventing it from succeeding. ',
  })
  .openapi('FailedBatchItem')

const FailedBatchItemsSchema = z
  .array(FailedBatchItemSchema)
  .min(0)
  .max(100)
  .openapi('FailedBatchItems')

const BatchCreateTableRowsResultSchema = z
  .object({
    workbookCursor: WorkbookCursorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated workbook cursor after adding the new rows at the end of the table.',
        }),
    ),
    createdRows: CreatedRowsMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The map of batch item id to the row id that was created for that item.',
        }),
    ),
    failedBatchItems: FailedBatchItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of batch items in the request that could not be added to the table. Each element in this list contains one item from the request that could not be added to the table along with the reason why that item could not be added. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['workbookCursor', 'createdRows'] })
  .openapi('BatchCreateTableRowsResult')

const FactSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(8192)
  .openapi('Fact')

const FactListSchema = z.array(FactSchema).min(0).max(220).openapi('FactList')

const CellInputSchema = z
  .object({
    fact: FactSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Fact represents the data that is entered into a cell. This data can be free text or a formula. Formulas need to start with the equals (=) sign. ',
        }),
    ).exactOptional(),
    facts: FactListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list representing the values that are entered into a ROWSET cell. Facts list can have either only values or rowIDs, and rowIDs should from the same table. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> CellInput object contains the data needed to create or update cells in a table. </p> <note> <p> CellInput object has only a facts field or a fact field, but not both. A 400 bad request will be thrown if both fact and facts field are present. </p> </note>',
    required: [],
  })
  .openapi('CellInput')

const RowDataInputSchema = z
  .record(z.string(), CellInputSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi('RowDataInput')

const CreateRowDataSchema = z
  .object({
    batchItemId: BatchItemIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An external identifier that represents the single row that is being created as part of the BatchCreateTableRows request. This can be any string that you can use to identify the row in the request. The BatchCreateTableRows API puts the batch item id in the results to allow you to link data in the request to data in the results. ',
        }),
    ),
    cellsToCreate: RowDataInputSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A map representing the cells to create in the new row. The key is the column id of the cell and the value is the CellInput object that represents the data to set in that cell. ',
        }),
    ),
  })
  .openapi({
    required: ['batchItemId', 'cellsToCreate'],
    description:
      ' Data needed to create a single row in a table as part of the BatchCreateTableRows request. ',
  })
  .openapi('CreateRowData')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const RequestTimeoutExceptionSchema = z.any().openapi('RequestTimeoutException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const BatchDeleteTableRowsResultSchema = z
  .object({
    workbookCursor: WorkbookCursorSchema.and(
      z
        .any()
        .openapi({
          description: 'The updated workbook cursor after deleting the rows from the table.',
        }),
    ),
    failedBatchItems: FailedBatchItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of row ids in the request that could not be deleted from the table. Each element in this list contains one row id from the request that could not be deleted along with the reason why that item could not be deleted. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['workbookCursor'] })
  .openapi('BatchDeleteTableRowsResult')

const BatchUpdateTableRowsResultSchema = z
  .object({
    workbookCursor: WorkbookCursorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated workbook cursor after adding the new rows at the end of the table.',
        }),
    ),
    failedBatchItems: FailedBatchItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of batch items in the request that could not be updated in the table. Each element in this list contains one item from the request that could not be updated in the table along with the reason why that item could not be updated. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['workbookCursor'] })
  .openapi('BatchUpdateTableRowsResult')

const UpdateRowDataSchema = z
  .object({
    rowId: RowIdSchema.and(
      z.any().openapi({ description: ' The id of the row that needs to be updated. ' }),
    ),
    cellsToUpdate: RowDataInputSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A map representing the cells to update in the given row. The key is the column id of the cell and the value is the CellInput object that represents the data to set in that cell. ',
        }),
    ),
  })
  .openapi({
    required: ['rowId', 'cellsToUpdate'],
    description:
      ' Data needed to create a single row in a table as part of the BatchCreateTableRows request. ',
  })
  .openapi('UpdateRowData')

const RowIdListSchema = z.array(RowIdSchema).min(1).max(100).openapi('RowIdList')

const UpsertActionSchema = z.enum(['UPDATED', 'APPENDED']).openapi('UpsertAction')

const UpsertRowsResultSchema = z
  .object({
    rowIds: RowIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of row ids that were changed as part of an upsert row operation. If the upsert resulted in an update, this list could potentially contain multiple rows that matched the filter and hence got updated. If the upsert resulted in an append, this list would only have the single row that was appended. ',
        }),
    ),
    upsertAction: UpsertActionSchema.and(
      z.any().openapi({ description: ' The result of the upsert action. ' }),
    ),
  })
  .openapi({
    required: ['rowIds', 'upsertAction'],
    description: ' An object that represents the result of a single upsert row request. ',
  })
  .openapi('UpsertRowsResult')

const UpsertRowsResultMapSchema = z
  .record(z.string(), UpsertRowsResultSchema)
  .openapi('UpsertRowsResultMap')

const BatchUpsertTableRowsResultSchema = z
  .object({
    rows: UpsertRowsResultMapSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A map with the batch item id as the key and the result of the upsert operation as the value. The result of the upsert operation specifies whether existing rows were updated or a new row was appended, along with the list of row ids that were affected. ',
        }),
    ),
    workbookCursor: WorkbookCursorSchema.and(
      z
        .any()
        .openapi({
          description: 'The updated workbook cursor after updating or appending rows in the table.',
        }),
    ),
    failedBatchItems: FailedBatchItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of batch items in the request that could not be updated or appended in the table. Each element in this list contains one item from the request that could not be updated in the table along with the reason why that item could not be updated or appended. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['rows', 'workbookCursor'] })
  .openapi('BatchUpsertTableRowsResult')

const FormulaSchema = z.string().regex(/^=.*/).min(0).max(8192).openapi('Formula')

const FilterSchema = z
  .object({
    formula: FormulaSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A formula representing a filter function that returns zero or more matching rows from a table. Valid formulas in this field return a list of rows from a table. The most common ways of writing a formula to return a list of rows are to use the FindRow() or Filter() functions. Any other formula that returns zero or more rows is also acceptable. For example, you can use a formula that points to a cell that contains a filter function. ',
        }),
    ),
    contextRowId: RowIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The optional contextRowId attribute can be used to specify the row id of the context row if the filter formula contains unqualified references to table columns and needs a context row to evaluate them successfully. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['formula'],
    description:
      ' An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate. ',
  })
  .openapi('Filter')

const UpsertRowDataSchema = z
  .object({
    batchItemId: BatchItemIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An external identifier that represents a single item in the request that is being upserted as part of the BatchUpsertTableRows request. This can be any string that you can use to identify the item in the request. The BatchUpsertTableRows API puts the batch item id in the results to allow you to link data in the request to data in the results. ',
        }),
    ),
    filter: FilterSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The filter formula to use to find existing matching rows to update. The formula needs to return zero or more rows. If the formula returns 0 rows, then a new row will be appended in the target table. If the formula returns one or more rows, then the returned rows will be updated. </p> <p> Note that the filter formula needs to return rows from the target table for the upsert operation to succeed. If the filter formula has a syntax error or it doesn't evaluate to zero or more rows in the target table for any one item in the input list, then the entire BatchUpsertTableRows request fails and no updates are made to the table. </p>",
        }),
    ),
    cellsToUpdate: RowDataInputSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A map representing the cells to update for the matching rows or an appended row. The key is the column id of the cell and the value is the CellInput object that represents the data to set in that cell. ',
        }),
    ),
  })
  .openapi({
    required: ['batchItemId', 'filter', 'cellsToUpdate'],
    description:
      ' Data needed to upsert rows in a table as part of a single item in the BatchUpsertTableRows request. ',
  })
  .openapi('UpsertRowData')

const TableDataImportJobStatusSchema = z
  .enum(['SUBMITTED', 'IN_PROGRESS', 'COMPLETED', 'FAILED'])
  .openapi('TableDataImportJobStatus')

const TableDataImportJobMessageSchema = z.string().openapi('TableDataImportJobMessage')

const EmailSchema = z
  .string()
  .regex(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
  .min(3)
  .max(254)
  .openapi('Email')

const AwsUserArnSchema = z.string().min(20).max(2048).openapi('AwsUserArn')

const ImportJobSubmitterSchema = z
  .object({
    email: EmailSchema.and(
      z
        .any()
        .openapi({ description: 'The email id of the submitter of the import job, if available.' }),
    ).exactOptional(),
    userArn: AwsUserArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The AWS user ARN of the submitter of the import job, if available.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that contains the attributes of the submitter of the import job.',
    required: [],
  })
  .openapi('ImportJobSubmitter')

const TimestampInMillisSchema = z.iso.datetime({ offset: true }).openapi('TimestampInMillis')

const ImportOptionsSchema: z.ZodType<ImportOptionsType> = z
  .lazy(() =>
    z
      .object({
        destinationOptions: DestinationOptionsSchema.and(
          z
            .any()
            .openapi({ description: 'Options relating to the destination of the import request.' }),
        ).exactOptional(),
        delimitedTextOptions: DelimitedTextImportOptionsSchema.and(
          z
            .any()
            .openapi({
              description:
                'Options relating to parsing delimited text. Required if dataFormat is DELIMITED_TEXT.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'An object that contains the options specified by the sumitter of the import request.',
        required: [],
      }),
  )
  .openapi('ImportOptions')

const SecureURLSchema = z
  .string()
  .regex(/^https:\/\/[^\n\r\x00\x08\x0B\x0C\x0E\x1F]*$/)
  .min(1)
  .max(8000)
  .openapi('SecureURL')

const ImportDataSourceConfigSchema = z
  .object({
    dataSourceUrl: SecureURLSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The URL from which source data will be downloaded for the import request. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' An object that contains the configuration parameters for the data source of an import request. ',
    required: [],
  })
  .openapi('ImportDataSourceConfig')

const ImportDataSourceSchema = z
  .object({
    dataSourceConfig: ImportDataSourceConfigSchema.and(
      z
        .any()
        .openapi({ description: 'The configuration parameters for the data source of the import' }),
    ),
  })
  .openapi({
    required: ['dataSourceConfig'],
    description:
      'An object that has details about the source of the data that was submitted for import.',
  })
  .openapi('ImportDataSource')

const TableDataImportJobMetadataSchema = z
  .object({
    submitter: ImportJobSubmitterSchema.and(
      z.any().openapi({ description: 'Details about the submitter of the import request.' }),
    ),
    submitTime: TimestampInMillisSchema.and(
      z.any().openapi({ description: 'The timestamp when the job was submitted for import.' }),
    ),
    importOptions: ImportOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The options that was specified at the time of submitting the import request.',
        }),
    ),
    dataSource: ImportDataSourceSchema.and(
      z.any().openapi({ description: 'The source of the data that was submitted for import.' }),
    ),
  })
  .openapi({
    required: ['submitter', 'submitTime', 'importOptions', 'dataSource'],
    description: 'The metadata associated with the table data import job that was submitted.',
  })
  .openapi('TableDataImportJobMetadata')

const ErrorCodeSchema = z
  .enum([
    'ACCESS_DENIED',
    'INVALID_URL_ERROR',
    'INVALID_IMPORT_OPTIONS_ERROR',
    'INVALID_TABLE_ID_ERROR',
    'INVALID_TABLE_COLUMN_ID_ERROR',
    'TABLE_NOT_FOUND_ERROR',
    'FILE_EMPTY_ERROR',
    'INVALID_FILE_TYPE_ERROR',
    'FILE_PARSING_ERROR',
    'FILE_SIZE_LIMIT_ERROR',
    'FILE_NOT_FOUND_ERROR',
    'UNKNOWN_ERROR',
    'RESOURCE_NOT_FOUND_ERROR',
    'SYSTEM_LIMIT_ERROR',
  ])
  .openapi('ErrorCode')

const DescribeTableDataImportJobResultSchema = z
  .object({
    jobStatus: TableDataImportJobStatusSchema.and(
      z.any().openapi({ description: ' The current status of the import job. ' }),
    ),
    message: TableDataImportJobMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A message providing more details about the current status of the import job. ',
        }),
    ),
    jobMetadata: TableDataImportJobMetadataSchema.and(
      z
        .any()
        .openapi({ description: ' The metadata about the job that was submitted for import. ' }),
    ),
    errorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If job status is failed, error code to understand reason for the failure. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['jobStatus', 'message', 'jobMetadata'] })
  .openapi('DescribeTableDataImportJobResult')

const NameSchema = z.string().openapi('Name')

const FormatSchema = z
  .enum([
    'AUTO',
    'NUMBER',
    'CURRENCY',
    'DATE',
    'TIME',
    'DATE_TIME',
    'PERCENTAGE',
    'TEXT',
    'ACCOUNTING',
    'CONTACT',
    'ROWLINK',
    'ROWSET',
  ])
  .openapi('Format')

const ColumnMetadataSchema = z
  .object({
    name: NameSchema.and(z.any().openapi({ description: 'The name of the column.' })),
    format: FormatSchema.and(z.any().openapi({ description: 'The format of the column.' })),
  })
  .openapi({ required: ['name', 'format'], description: 'Metadata for column in the table.' })
  .openapi('ColumnMetadata')

const ResultHeaderSchema = z.array(ColumnMetadataSchema).openapi('ResultHeader')

const RawValueSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(32767)
  .openapi('RawValue')

const FormattedValueSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(8192)
  .openapi('FormattedValue')

const DataItemSchema = z
  .object({
    overrideFormat: FormatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The overrideFormat is optional and is specified only if a particular row of data has a different format for the data than the default format defined on the screen or the table. ',
        }),
    ).exactOptional(),
    rawValue: RawValueSchema.and(
      z.any().openapi({ description: 'The raw value of the data. e.g. jsmith@example.com' }),
    ).exactOptional(),
    formattedValue: FormattedValueSchema.and(
      z.any().openapi({ description: 'The formatted value of the data. e.g. John Smith.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The data in a particular data cell defined on the screen.',
    required: [],
  })
  .openapi('DataItem')

const DataItemsSchema = z.array(DataItemSchema).openapi('DataItems')

const ResultRowSchema = z
  .object({
    rowId: RowIdSchema.and(
      z.any().openapi({ description: 'The ID for a particular row.' }),
    ).exactOptional(),
    dataItems: DataItemsSchema.and(
      z.any().openapi({ description: 'List of all the data cells in a row.' }),
    ),
  })
  .openapi({ required: ['dataItems'], description: 'A single row in the ResultSet.' })
  .openapi('ResultRow')

const ResultRowsSchema = z.array(ResultRowSchema).openapi('ResultRows')

const ResultSetSchema = z
  .object({
    headers: ResultHeaderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> List of headers for all the data cells in the block. The header identifies the name and default format of the data cell. Data cells appear in the same order in all rows as defined in the header. The names and formats are not repeated in the rows. If a particular row does not have a value for a data cell, a blank value is used. </p> <p> For example, a task list that displays the task name, due date and assigned person might have headers [ { "name": "Task Name"}, {"name": "Due Date", "format": "DATE"}, {"name": "Assigned", "format": "CONTACT"} ]. Every row in the result will have the task name as the first item, due date as the second item and assigned person as the third item. If a particular task does not have a due date, that row will still have a blank value in the second element and the assigned person will still be in the third element. </p>',
        }),
    ),
    rows: ResultRowsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' List of rows returned by the request. Each row has a row Id and a list of data cells in that row. The data cells will be present in the same order as they are defined in the header. ',
        }),
    ),
  })
  .openapi({
    required: ['headers', 'rows'],
    description:
      ' ResultSet contains the results of the request for a single block or list defined on the screen. ',
  })
  .openapi('ResultSet')

const ResultSetMapSchema = z.record(z.string(), ResultSetSchema).openapi('ResultSetMap')

const PaginationTokenSchema = z
  .string()
  .regex(/^(?!\s*$).+/)
  .min(1)
  .max(1024)
  .openapi('PaginationToken')

const GetScreenDataResultSchema = z
  .object({
    results: ResultSetMapSchema.and(
      z.any().openapi({ description: 'A map of all the rows on the screen keyed by block name.' }),
    ),
    workbookCursor: WorkbookCursorSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates the cursor of the workbook at which the data returned by this workbook is read. Workbook cursor keeps increasing with every update and the increments are not sequential. ',
        }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Provides the pagination token to load the next page if there are more results matching the request. If a pagination token is not present in the response, it means that all data matching the query has been loaded. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['results', 'workbookCursor'] })
  .openapi('GetScreenDataResult')

const VariableValueSchema = z
  .object({
    rawValue: RawValueSchema.and(z.any().openapi({ description: 'Raw value of the variable.' })),
  })
  .openapi({
    required: ['rawValue'],
    description:
      'The input variables to the app to be used by the InvokeScreenAutomation action request.',
  })
  .openapi('VariableValue')

const InvokeScreenAutomationResultSchema = z
  .object({
    workbookCursor: WorkbookCursorSchema.and(
      z
        .any()
        .openapi({
          description: 'The updated workbook cursor after performing the automation action.',
        }),
    ),
  })
  .openapi({ required: ['workbookCursor'] })
  .openapi('InvokeScreenAutomationResult')

const AutomationExecutionExceptionSchema = z.any().openapi('AutomationExecutionException')

const AutomationExecutionTimeoutExceptionSchema = z
  .any()
  .openapi('AutomationExecutionTimeoutException')

const ResourceIdSchema = z
  .string()
  .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
  .length(36)
  .openapi('ResourceId')

const TableColumnNameSchema = z.string().openapi('TableColumnName')

const TableColumnSchema = z
  .object({
    tableColumnId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The id of the column in the table.' }),
    ).exactOptional(),
    tableColumnName: TableColumnNameSchema.and(
      z.any().openapi({ description: 'The name of the column in the table.' }),
    ).exactOptional(),
    format: FormatSchema.and(
      z
        .any()
        .openapi({
          description:
            " The column level format that is applied in the table. An empty value in this field means that the column format is the default value 'AUTO'. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that contains attributes about a single column in a table',
    required: [],
  })
  .openapi('TableColumn')

const TableColumnsSchema = z.array(TableColumnSchema).openapi('TableColumns')

const ListTableColumnsResultSchema = z
  .object({
    tableColumns: TableColumnsSchema.and(
      z.any().openapi({ description: ' The list of columns in the table. ' }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Provides the pagination token to load the next page if there are more results matching the request. If a pagination token is not present in the response, it means that all data matching the request has been loaded. ',
        }),
    ).exactOptional(),
    workbookCursor: WorkbookCursorSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates the cursor of the workbook at which the data returned by this request is read. Workbook cursor keeps increasing with every update and the increments are not sequential. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['tableColumns'] })
  .openapi('ListTableColumnsResult')

const ResourceIdsSchema = z.array(ResourceIdSchema).min(1).max(100).openapi('ResourceIds')

const FormattedValuesListSchema = z
  .array(FormattedValueSchema)
  .min(0)
  .max(220)
  .openapi('FormattedValuesList')

const CellSchema = z
  .object({
    formula: FormulaSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The formula contained in the cell. This field is empty if a cell does not have a formula. ',
        }),
    ).exactOptional(),
    format: FormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format of the cell. If this field is empty, then the format is either not specified in the workbook or the format is set to AUTO.',
        }),
    ).exactOptional(),
    rawValue: RawValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The raw value of the data contained in the cell. The raw value depends on the format of the data in the cell. However the attribute in the API return value is always a string containing the raw value. </p> <p> Cells with format DATE, DATE_TIME or TIME have the raw value as a floating point number where the whole number represents the number of days since 1/1/1900 and the fractional part represents the fraction of the day since midnight. For example, a cell with date 11/3/2020 has the raw value "44138". A cell with the time 9:00 AM has the raw value "0.375" and a cell with date/time value of 11/3/2020 9:00 AM has the raw value "44138.375". Notice that even though the raw value is a number in all three cases, it is still represented as a string. </p> <p> Cells with format NUMBER, CURRENCY, PERCENTAGE and ACCOUNTING have the raw value of the data as the number representing the data being displayed. For example, the number 1.325 with two decimal places in the format will have it\'s raw value as "1.325" and formatted value as "1.33". A currency value for $10 will have the raw value as "10" and formatted value as "$10.00". A value representing 20% with two decimal places in the format will have its raw value as "0.2" and the formatted value as "20.00%". An accounting value of -$25 will have "-25" as the raw value and "$ (25.00)" as the formatted value. </p> <p> Cells with format TEXT will have the raw text as the raw value. For example, a cell with text "John Smith" will have "John Smith" as both the raw value and the formatted value. </p> <p> Cells with format CONTACT will have the name of the contact as a formatted value and the email address of the contact as the raw value. For example, a contact for John Smith will have "John Smith" as the formatted value and "john.smith@example.com" as the raw value. </p> <p> Cells with format ROWLINK (aka picklist) will have the first column of the linked row as the formatted value and the row id of the linked row as the raw value. For example, a cell containing a picklist to a table that displays task status might have "Completed" as the formatted value and "row:dfcefaee-5b37-4355-8f28-40c3e4ff5dd4/ca432b2f-b8eb-431d-9fb5-cbe0342f9f03" as the raw value. </p> <p> Cells with format ROWSET (aka multi-select or multi-record picklist) will by default have the first column of each of the linked rows as the formatted value in the list, and the rowset id of the linked rows as the raw value. For example, a cell containing a multi-select picklist to a table that contains items might have "Item A", "Item B" in the formatted value list and "rows:b742c1f4-6cb0-4650-a845-35eb86fcc2bb/ [fdea123b-8f68-474a-aa8a-5ff87aa333af,6daf41f0-a138-4eee-89da-123086d36ecf]" as the raw value. </p> <p> Cells with format ATTACHMENT will have the name of the attachment as the formatted value and the attachment id as the raw value. For example, a cell containing an attachment named "image.jpeg" will have "image.jpeg" as the formatted value and "attachment:ca432b2f-b8eb-431d-9fb5-cbe0342f9f03" as the raw value. </p> <p> Cells with format AUTO or cells without any format that are auto-detected as one of the formats above will contain the raw and formatted values as mentioned above, based on the auto-detected formats. If there is no auto-detected format, the raw and formatted values will be the same as the data in the cell. </p>',
        }),
    ).exactOptional(),
    formattedValue: FormattedValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The formatted value of the cell. This is the value that you see displayed in the cell in the UI. </p> <p> Note that the formatted value of a cell is always represented as a string irrespective of the data that is stored in the cell. For example, if a cell contains a date, the formatted value of the cell is the string representation of the formatted date being shown in the cell in the UI. See details in the rawValue field below for how cells of different formats will have different raw and formatted values. </p>',
        }),
    ).exactOptional(),
    formattedValues: FormattedValuesListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of formatted values of the cell. This field is only returned when the cell is ROWSET format (aka multi-select or multi-record picklist). Values in the list are always represented as strings. The formattedValue field will be empty if this field is returned. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that represents a single cell in a table.', required: [] })
  .openapi('Cell')

const CellsSchema = z.array(CellSchema).openapi('Cells')

const TableRowSchema = z
  .object({
    rowId: RowIdSchema.and(z.any().openapi({ description: 'The id of the row in the table.' })),
    cells: CellsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of cells in the table row. The cells appear in the same order as the columns of the table. ',
        }),
    ),
  })
  .openapi({
    required: ['rowId', 'cells'],
    description: 'An object that contains attributes about a single row in a table',
  })
  .openapi('TableRow')

const TableRowsSchema = z.array(TableRowSchema).openapi('TableRows')

const ListTableRowsResultSchema = z
  .object({
    columnIds: ResourceIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of columns in the table whose row data is returned in the result. ',
        }),
    ),
    rows: TableRowsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of rows in the table. Note that this result is paginated, so this list contains a maximum of 100 rows. ',
        }),
    ),
    rowIdsNotFound: RowIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of row ids included in the request that were not found in the table. ',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Provides the pagination token to load the next page if there are more results matching the request. If a pagination token is not present in the response, it means that all data matching the request has been loaded. ',
        }),
    ).exactOptional(),
    workbookCursor: WorkbookCursorSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates the cursor of the workbook at which the data returned by this request is read. Workbook cursor keeps increasing with every update and the increments are not sequential. ',
        }),
    ),
  })
  .openapi({ required: ['columnIds', 'rows', 'workbookCursor'] })
  .openapi('ListTableRowsResult')

const TableNameSchema = z.string().openapi('TableName')

const TableSchema = z
  .object({
    tableId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The id of the table.' }),
    ).exactOptional(),
    tableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing the properties of a table in a workbook.',
    required: [],
  })
  .openapi('Table')

const TablesSchema = z.array(TableSchema).openapi('Tables')

const ListTablesResultSchema = z
  .object({
    tables: TablesSchema.and(
      z.any().openapi({ description: ' The list of tables in the workbook. ' }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Provides the pagination token to load the next page if there are more results matching the request. If a pagination token is not present in the response, it means that all data matching the request has been loaded. ',
        }),
    ).exactOptional(),
    workbookCursor: WorkbookCursorSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates the cursor of the workbook at which the data returned by this request is read. Workbook cursor keeps increasing with every update and the increments are not sequential. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['tables'] })
  .openapi('ListTablesResult')

const TagValueSchema = z
  .string()
  .regex(/^[^\n\r\x00\x08\x0B\x0C\x0E\x1F]*$/)
  .min(1)
  .max(100)
  .openapi('TagValue')

const TagsMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi({ description: 'A string to string map representing tags' })
  .openapi('TagsMap')

const ListTagsForResourceResultSchema = z
  .object({
    tags: TagsMapSchema.and(
      z.any().openapi({ description: "The resource's tags." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResult')

const QueryTableRowsResultSchema = z
  .object({
    columnIds: ResourceIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of columns in the table whose row data is returned in the result. ',
        }),
    ),
    rows: TableRowsSchema.and(
      z
        .any()
        .openapi({ description: ' The list of rows in the table that match the query filter. ' }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Provides the pagination token to load the next page if there are more results matching the request. If a pagination token is not present in the response, it means that all data matching the request has been loaded. ',
        }),
    ).exactOptional(),
    workbookCursor: WorkbookCursorSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates the cursor of the workbook at which the data returned by this request is read. Workbook cursor keeps increasing with every update and the increments are not sequential. ',
        }),
    ),
  })
  .openapi({ required: ['columnIds', 'rows', 'workbookCursor'] })
  .openapi('QueryTableRowsResult')

const JobIdSchema = z
  .string()
  .regex(/^[^\n\r\x00\x08\x0B\x0C\x0E\x1F]*$/)
  .min(1)
  .max(100)
  .openapi('JobId')

const StartTableDataImportJobResultSchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The id that is assigned to this import job. Future requests to find out the status of this import job need to send this id in the appropriate parameter in the request. ',
        }),
    ),
    jobStatus: TableDataImportJobStatusSchema.and(
      z
        .any()
        .openapi({
          description: ' The status of the import job immediately after submitting the request. ',
        }),
    ),
  })
  .openapi({ required: ['jobId', 'jobStatus'] })
  .openapi('StartTableDataImportJobResult')

const TagResourceResultSchema = z.object({}).openapi('TagResourceResult')

const UntagResourceResultSchema = z.object({}).openapi('UntagResourceResult')

const TagKeySchema = z
  .string()
  .regex(/^[^\n\r\x00\x08\x0B\x0C\x0E\x1F]*$/)
  .min(1)
  .max(100)
  .openapi('TagKey')

const CreateRowDataListSchema = z
  .array(CreateRowDataSchema)
  .min(1)
  .max(100)
  .openapi('CreateRowDataList')

const ClientRequestTokenSchema = z
  .string()
  .regex(/^(?!\s*$).+/)
  .min(32)
  .max(64)
  .openapi('ClientRequestToken')

const BatchCreateTableRowsRequestSchema = z
  .object({
    rowsToCreate: CreateRowDataListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The list of rows to create at the end of the table. Each item in this list needs to have a batch item id to uniquely identify the element in the request and the cells to create for that row. You need to specify at least one item in this list. </p> <p> Note that if one of the column ids in any of the rows in the request does not exist in the table, then the request fails and no updates are made to the table. </p>',
        }),
    ),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The request token for performing the batch create operation. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the operation again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['rowsToCreate'], title: 'BatchCreateTableRowsRequest' })
  .openapi('BatchCreateTableRowsRequest')

const BatchDeleteTableRowsRequestSchema = z
  .object({
    rowIds: RowIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The list of row ids to delete from the table. You need to specify at least one row id in this list. </p> <p> Note that if one of the row ids provided in the request does not exist in the table, then the request fails and no rows are deleted from the table. </p>',
        }),
    ),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The request token for performing the delete action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['rowIds'], title: 'BatchDeleteTableRowsRequest' })
  .openapi('BatchDeleteTableRowsRequest')

const UpdateRowDataListSchema = z
  .array(UpdateRowDataSchema)
  .min(1)
  .max(100)
  .openapi('UpdateRowDataList')

const BatchUpdateTableRowsRequestSchema = z
  .object({
    rowsToUpdate: UpdateRowDataListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The list of rows to update in the table. Each item in this list needs to contain the row id to update along with the map of column id to cell values for each column in that row that needs to be updated. You need to specify at least one row in this list, and for each row, you need to specify at least one column to update. </p> <p> Note that if one of the row or column ids in the request does not exist in the table, then the request fails and no updates are made to the table. </p>',
        }),
    ),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['rowsToUpdate'], title: 'BatchUpdateTableRowsRequest' })
  .openapi('BatchUpdateTableRowsRequest')

const UpsertRowDataListSchema = z.array(UpsertRowDataSchema).openapi('UpsertRowDataList')

const BatchUpsertTableRowsRequestSchema = z
  .object({
    rowsToUpsert: UpsertRowDataListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The list of rows to upsert in the table. Each item in this list needs to have a batch item id to uniquely identify the element in the request, a filter expression to find the rows to update for that element and the cell values to set for each column in the upserted rows. You need to specify at least one item in this list. </p> <p> Note that if one of the filter formulas in the request fails to evaluate because of an error or one of the column ids in any of the rows does not exist in the table, then the request fails and no updates are made to the table. </p>',
        }),
    ),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['rowsToUpsert'], title: 'BatchUpsertTableRowsRequest' })
  .openapi('BatchUpsertTableRowsRequest')

const DescribeTableDataImportJobRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeTableDataImportJobRequest' })
  .openapi('DescribeTableDataImportJobRequest')

const VariableValueMapSchema = z.record(z.string(), VariableValueSchema).openapi('VariableValueMap')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const GetScreenDataRequestSchema = z
  .object({
    workbookId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the workbook that contains the screen.' }),
    ),
    appId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the app that contains the screen.' }),
    ),
    screenId: ResourceIdSchema.and(z.any().openapi({ description: 'The ID of the screen.' })),
    variables: VariableValueMapSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Variables are optional and are needed only if the screen requires them to render correctly. Variables are specified as a map where the key is the name of the variable as defined on the screen. The value is an object which currently has only one property, rawValue, which holds the value of the variable to be passed to the screen. ',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The number of results to be returned on a single page. Specify a number between 1 and 100. The maximum value is 100. </p> <p> This parameter is optional. If you don't specify this parameter, the default page size is 100. </p>",
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['workbookId', 'appId', 'screenId'], title: 'GetScreenDataRequest' })
  .openapi('GetScreenDataRequest')

const ImportSourceDataFormatSchema = z.literal('DELIMITED_TEXT').openapi('ImportSourceDataFormat')

const InvokeScreenAutomationRequestSchema = z
  .object({
    variables: VariableValueMapSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Variables are specified as a map where the key is the name of the variable as defined on the screen. The value is an object which currently has only one property, rawValue, which holds the value of the variable to be passed to the screen. Any variables defined in a screen are required to be passed in the call. ',
        }),
    ).exactOptional(),
    rowId: RowIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The row ID for the automation if the automation is defined inside a block with source or list. ',
        }),
    ).exactOptional(),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The request token for performing the automation action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will return the response of the previous call rather than performing the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'InvokeScreenAutomationRequest', required: [] })
  .openapi('InvokeScreenAutomationRequest')

const ListTableColumnsRequestSchema = z
  .object({})
  .openapi({ title: 'ListTableColumnsRequest' })
  .openapi('ListTableColumnsRequest')

const ListTableRowsRequestSchema = z
  .object({
    rowIds: RowIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This parameter is optional. If one or more row ids are specified in this list, then only the specified row ids are returned in the result. If no row ids are specified here, then all the rows in the table are returned. ',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of rows to return in each page of the results.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTableRowsRequest', required: [] })
  .openapi('ListTableRowsRequest')

const ListTablesRequestSchema = z
  .object({})
  .openapi({ title: 'ListTablesRequest' })
  .openapi('ListTablesRequest')

const ResourceArnSchema = z
  .string()
  .regex(/^arn:aws:honeycode:.+:[0-9]{12}:.+:.+$/)
  .min(1)
  .max(256)
  .openapi('ResourceArn')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const QueryTableRowsRequestSchema = z
  .object({
    filterFormula: FilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate.',
        }),
    ),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of rows to return in each page of the results.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['filterFormula'], title: 'QueryTableRowsRequest' })
  .openapi('QueryTableRowsRequest')

const StartTableDataImportJobRequestSchema = z
  .object({
    dataSource: ImportDataSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The source of the data that is being imported. The size of source must be no larger than 100 MB. Source must have no more than 100,000 cells and no more than 1,000 rows. ',
        }),
    ),
    dataFormat: ImportSourceDataFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The format of the data that is being imported. Currently the only option supported is "DELIMITED_TEXT". ',
        }),
    ),
    importOptions: ImportOptionsSchema.and(
      z.any().openapi({ description: ' The options for customizing this import request. ' }),
    ),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>',
        }),
    ),
  })
  .openapi({
    required: ['dataSource', 'dataFormat', 'importOptions', 'clientRequestToken'],
    title: 'StartTableDataImportJobRequest',
  })
  .openapi('StartTableDataImportJobRequest')

const TagKeysListSchema = z
  .array(TagKeySchema)
  .max(100)
  .openapi({ description: 'A list of tag keys' })
  .openapi('TagKeysList')

const TagResourceRequestSchema = z
  .object({
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'A list of tags to apply to the resource.' }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const VariableNameSchema = z
  .string()
  .regex(/^(?!\s*$).+/)
  .min(1)
  .max(255)
  .openapi('VariableName')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postWorkbooksWorkbookIdTablesTableIdRowsBatchcreateRoute = createRoute({
  method: 'post',
  path: '/workbooks/{workbookId}/tables/{tableId}/rows/batchcreate',
  description:
    '<p> The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook. The API allows you to specify the values to set in some or all of the columns in the new rows. </p> <p> If a column is not explicitly set in a specific row, then the column level formula specified in the table will be applied to the new row. If there is no column level formula but the last row of the table has a formula, then that formula will be copied down to the new row. If there is no column level formula and no formula in the last row of the table, then that column will be left blank for the new rows. </p>',
  operationId: 'BatchCreateTableRows',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      workbookId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'workbookId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the workbook where the new rows are being added.</p> <p> If a workbook with the specified ID could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      tableId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'tableId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the table where the new rows are being added.</p> <p> If a table with the specified ID could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rowsToCreate: z
                .array(CreateRowDataSchema)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    '<p> The list of rows to create at the end of the table. Each item in this list needs to have a batch item id to uniquely identify the element in the request and the cells to create for that row. You need to specify at least one item in this list. </p> <p> Note that if one of the column ids in any of the rows in the request does not exist in the table, then the request fails and no updates are made to the table. </p>',
                }),
              clientRequestToken: z
                .string()
                .regex(/^(?!\s*$).+/)
                .min(32)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    '<p> The request token for performing the batch create operation. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the operation again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>',
                }),
            })
            .openapi({ required: ['rowsToCreate'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchCreateTableRowsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    487: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postWorkbooksWorkbookIdTablesTableIdRowsBatchdeleteRoute = createRoute({
  method: 'post',
  path: '/workbooks/{workbookId}/tables/{tableId}/rows/batchdelete',
  description:
    ' The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook. You need to specify the ids of the rows that you want to delete from the table. ',
  operationId: 'BatchDeleteTableRows',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      workbookId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'workbookId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the workbook where the rows are being deleted.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      tableId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'tableId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the table where the rows are being deleted.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rowIds: z
                .array(RowIdSchema)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    '<p> The list of row ids to delete from the table. You need to specify at least one row id in this list. </p> <p> Note that if one of the row ids provided in the request does not exist in the table, then the request fails and no rows are deleted from the table. </p>',
                }),
              clientRequestToken: z
                .string()
                .regex(/^(?!\s*$).+/)
                .min(32)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    '<p> The request token for performing the delete action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>',
                }),
            })
            .openapi({ required: ['rowIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDeleteTableRowsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postWorkbooksWorkbookIdTablesTableIdRowsBatchupdateRoute = createRoute({
  method: 'post',
  path: '/workbooks/{workbookId}/tables/{tableId}/rows/batchupdate',
  description:
    '<p> The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook. </p> <p> You can specify the values to set in some or all of the columns in the table for the specified rows. If a column is not explicitly specified in a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>',
  operationId: 'BatchUpdateTableRows',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      workbookId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'workbookId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the workbook where the rows are being updated.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      tableId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'tableId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the table where the rows are being updated.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rowsToUpdate: z
                .array(UpdateRowDataSchema)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    '<p> The list of rows to update in the table. Each item in this list needs to contain the row id to update along with the map of column id to cell values for each column in that row that needs to be updated. You need to specify at least one row in this list, and for each row, you need to specify at least one column to update. </p> <p> Note that if one of the row or column ids in the request does not exist in the table, then the request fails and no updates are made to the table. </p>',
                }),
              clientRequestToken: z
                .string()
                .regex(/^(?!\s*$).+/)
                .min(32)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    '<p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>',
                }),
            })
            .openapi({ required: ['rowsToUpdate'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchUpdateTableRowsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postWorkbooksWorkbookIdTablesTableIdRowsBatchupsertRoute = createRoute({
  method: 'post',
  path: '/workbooks/{workbookId}/tables/{tableId}/rows/batchupsert',
  description:
    '<p> The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert operation takes a filter expression as input and evaluates it to find matching rows on the destination table. If matching rows are found, it will update the cells in the matching rows to new values specified in the request. If no matching rows are found, a new row is added at the end of the table and the cells in that row are set to the new values specified in the request. </p> <p> You can specify the values to set in some or all of the columns in the table for the matching or newly appended rows. If a column is not explicitly specified for a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>',
  operationId: 'BatchUpsertTableRows',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      workbookId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'workbookId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the workbook where the rows are being upserted.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      tableId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'tableId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the table where the rows are being upserted.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rowsToUpsert: z
                .array(UpsertRowDataSchema)
                .openapi({
                  description:
                    '<p> The list of rows to upsert in the table. Each item in this list needs to have a batch item id to uniquely identify the element in the request, a filter expression to find the rows to update for that element and the cell values to set for each column in the upserted rows. You need to specify at least one item in this list. </p> <p> Note that if one of the filter formulas in the request fails to evaluate because of an error or one of the column ids in any of the rows does not exist in the table, then the request fails and no updates are made to the table. </p>',
                }),
              clientRequestToken: z
                .string()
                .regex(/^(?!\s*$).+/)
                .min(32)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    '<p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>',
                }),
            })
            .openapi({ required: ['rowsToUpsert'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchUpsertTableRowsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    487: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getWorkbooksWorkbookIdTablesTableIdImportJobIdRoute = createRoute({
  method: 'get',
  path: '/workbooks/{workbookId}/tables/{tableId}/import/{jobId}',
  description:
    ' The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job. ',
  operationId: 'DescribeTableDataImportJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      workbookId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'workbookId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the workbook into which data was imported.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      tableId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'tableId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the table into which data was imported.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      jobId: z
        .string()
        .regex(/^[^\n\r\x00\x08\x0B\x0C\x0E\x1F]*$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the job that was returned by the StartTableDataImportJob request.</p> <p> If a job with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern: '^[^\\n\\r\\x00\\x08\\x0B\\x0C\\x0E\\x1F]*$',
              minLength: 1,
              maxLength: 100,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTableDataImportJobResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    486: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
  },
})

export const postScreendataRoute = createRoute({
  method: 'post',
  path: '/screendata',
  description:
    ' The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen. ',
  operationId: 'GetScreenData',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              workbookId: z
                .string()
                .regex(
                  /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,
                )
                .length(36)
                .openapi({ description: 'The ID of the workbook that contains the screen.' }),
              appId: z
                .string()
                .regex(
                  /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,
                )
                .length(36)
                .openapi({ description: 'The ID of the app that contains the screen.' }),
              screenId: z
                .string()
                .regex(
                  /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,
                )
                .length(36)
                .openapi({ description: 'The ID of the screen.' }),
              variables: z
                .record(z.string(), VariableValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    ' Variables are optional and are needed only if the screen requires them to render correctly. Variables are specified as a map where the key is the name of the variable as defined on the screen. The value is an object which currently has only one property, rawValue, which holds the value of the variable to be passed to the screen. ',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    "<p> The number of results to be returned on a single page. Specify a number between 1 and 100. The maximum value is 100. </p> <p> This parameter is optional. If you don't specify this parameter, the default page size is 100. </p>",
                }),
              nextToken: z
                .string()
                .regex(/^(?!\s*$).+/)
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    '<p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>',
                }),
            })
            .openapi({ required: ['workbookId', 'appId', 'screenId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetScreenDataResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postWorkbooksWorkbookIdAppsAppIdScreensScreenIdAutomationsAutomationIdRoute =
  createRoute({
    method: 'post',
    path: '/workbooks/{workbookId}/apps/{appId}/screens/{screenId}/automations/{automationId}',
    description:
      ' The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook. ',
    operationId: 'InvokeScreenAutomation',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        workbookId: z
          .string()
          .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
          .length(36)
          .openapi({
            param: {
              name: 'workbookId',
              in: 'path',
              required: true,
              description: 'The ID of the workbook that contains the screen automation.',
              schema: {
                type: 'string',
                pattern:
                  '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
        appId: z
          .string()
          .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
          .length(36)
          .openapi({
            param: {
              name: 'appId',
              in: 'path',
              required: true,
              description: 'The ID of the app that contains the screen automation.',
              schema: {
                type: 'string',
                pattern:
                  '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
        screenId: z
          .string()
          .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
          .length(36)
          .openapi({
            param: {
              name: 'screenId',
              in: 'path',
              required: true,
              description: 'The ID of the screen that contains the screen automation.',
              schema: {
                type: 'string',
                pattern:
                  '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
        automationId: z
          .string()
          .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
          .length(36)
          .openapi({
            param: {
              name: 'automationId',
              in: 'path',
              required: true,
              description: 'The ID of the automation action to be performed.',
              schema: {
                type: 'string',
                pattern:
                  '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                variables: z
                  .record(z.string(), VariableValueSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      ' Variables are specified as a map where the key is the name of the variable as defined on the screen. The value is an object which currently has only one property, rawValue, which holds the value of the variable to be passed to the screen. Any variables defined in a screen are required to be passed in the call. ',
                  }),
                rowId: z
                  .string()
                  .regex(
                    /row:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,
                  )
                  .length(77)
                  .exactOptional()
                  .openapi({
                    description:
                      ' The row ID for the automation if the automation is defined inside a block with source or list. ',
                  }),
                clientRequestToken: z
                  .string()
                  .regex(/^(?!\s*$).+/)
                  .min(32)
                  .max(64)
                  .exactOptional()
                  .openapi({
                    description:
                      '<p> The request token for performing the automation action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will return the response of the previous call rather than performing the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>',
                  }),
              })
              .openapi({ required: [] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: InvokeScreenAutomationResultSchema } },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      484: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      485: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      486: {
        description: 'AutomationExecutionException',
        content: { 'application/json': { schema: AutomationExecutionExceptionSchema } },
      },
      487: {
        description: 'AutomationExecutionTimeoutException',
        content: { 'application/json': { schema: AutomationExecutionTimeoutExceptionSchema } },
      },
      488: {
        description: 'RequestTimeoutException',
        content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
      },
      489: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
    },
  })

export const getWorkbooksWorkbookIdTablesTableIdColumnsRoute = createRoute({
  method: 'get',
  path: '/workbooks/{workbookId}/tables/{tableId}/columns',
  description:
    ' The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook. ',
  operationId: 'ListTableColumns',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      workbookId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'workbookId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the workbook that contains the table whose columns are being retrieved.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      tableId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'tableId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the table whose columns are being retrieved.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/^(?!\s*$).+/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              '<p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>',
            schema: { type: 'string', pattern: '^(?!\\s*$).+', minLength: 1, maxLength: 1024 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTableColumnsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postWorkbooksWorkbookIdTablesTableIdRowsListRoute = createRoute({
  method: 'post',
  path: '/workbooks/{workbookId}/tables/{tableId}/rows/list',
  description:
    ' The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook. ',
  operationId: 'ListTableRows',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      workbookId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'workbookId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the workbook that contains the table whose rows are being retrieved.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      tableId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'tableId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the table whose rows are being retrieved.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rowIds: z
                .array(RowIdSchema)
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    ' This parameter is optional. If one or more row ids are specified in this list, then only the specified row ids are returned in the result. If no row ids are specified here, then all the rows in the table are returned. ',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of rows to return in each page of the results.',
                }),
              nextToken: z
                .string()
                .regex(/^(?!\s*$).+/)
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    '<p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTableRowsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWorkbooksWorkbookIdTablesRoute = createRoute({
  method: 'get',
  path: '/workbooks/{workbookId}/tables',
  description:
    ' The ListTables API allows you to retrieve a list of all the tables in a workbook. ',
  operationId: 'ListTables',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      workbookId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'workbookId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the workbook whose tables are being retrieved.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of tables to return in each page of the results.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .regex(/^(?!\s*$).+/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              '<p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>',
            schema: { type: 'string', pattern: '^(?!\\s*$).+', minLength: 1, maxLength: 1024 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTablesResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: " The ListTagsForResource API allows you to return a resource's tags. ",
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(/^arn:aws:honeycode:.+:[0-9]{12}:.+:.+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: "The resource's Amazon Resource Name (ARN).",
            schema: {
              type: 'string',
              pattern: '^arn:aws:honeycode:.+:[0-9]{12}:.+:.+$',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    ' The TagResource API allows you to add tags to an ARN-able resource. Resource includes workbook, table, screen and screen-automation. ',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(/^arn:aws:honeycode:.+:[0-9]{12}:.+:.+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: "The resource's Amazon Resource Name (ARN).",
            schema: {
              type: 'string',
              pattern: '^arn:aws:honeycode:.+:[0-9]{12}:.+:.+$',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length <= 100)
                .openapi({ description: 'A string to string map representing tags' }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postWorkbooksWorkbookIdTablesTableIdRowsQueryRoute = createRoute({
  method: 'post',
  path: '/workbooks/{workbookId}/tables/{tableId}/rows/query',
  description:
    ' The QueryTableRows API allows you to use a filter formula to query for specific rows in a table. ',
  operationId: 'QueryTableRows',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      workbookId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'workbookId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the workbook whose table rows are being queried.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      tableId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'tableId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the table whose rows are being queried.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              filterFormula: z
                .object({
                  formula: FormulaSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' A formula representing a filter function that returns zero or more matching rows from a table. Valid formulas in this field return a list of rows from a table. The most common ways of writing a formula to return a list of rows are to use the FindRow() or Filter() functions. Any other formula that returns zero or more rows is also acceptable. For example, you can use a formula that points to a cell that contains a filter function. ',
                      }),
                  ).exactOptional(),
                  contextRowId: RowIdSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The optional contextRowId attribute can be used to specify the row id of the context row if the filter formula contains unqualified references to table columns and needs a context row to evaluate them successfully. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    ' An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate. ',
                  required: [],
                }),
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of rows to return in each page of the results.',
                }),
              nextToken: z
                .string()
                .regex(/^(?!\s*$).+/)
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    '<p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>',
                }),
            })
            .openapi({ required: ['filterFormula'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QueryTableRowsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postWorkbooksWorkbookIdTablesTableIdImportRoute = createRoute({
  method: 'post',
  path: '/workbooks/{workbookId}/tables/{tableId}/import',
  description:
    ' The StartTableDataImportJob API allows you to start an import job on a table. This API will only return the id of the job that was started. To find out the status of the import request, you need to call the DescribeTableDataImportJob API. ',
  operationId: 'StartTableDataImportJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      workbookId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'workbookId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the workbook where the rows are being imported.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      tableId: z
        .string()
        .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/)
        .length(36)
        .openapi({
          param: {
            name: 'tableId',
            in: 'path',
            required: true,
            description:
              '<p>The ID of the table where the rows are being imported.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>',
            schema: {
              type: 'string',
              pattern:
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              dataSource: z
                .object({
                  dataSourceConfig: ImportDataSourceConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The configuration parameters for the data source of the import',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'An object that has details about the source of the data that was submitted for import.',
                  required: [],
                }),
              dataFormat: z
                .literal('DELIMITED_TEXT')
                .openapi({
                  description:
                    ' The format of the data that is being imported. Currently the only option supported is "DELIMITED_TEXT". ',
                }),
              importOptions: z
                .object({
                  destinationOptions: DestinationOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Options relating to the destination of the import request.',
                      }),
                  ).exactOptional(),
                  delimitedTextOptions: DelimitedTextImportOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Options relating to parsing delimited text. Required if dataFormat is DELIMITED_TEXT.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'An object that contains the options specified by the sumitter of the import request.',
                  required: [],
                }),
              clientRequestToken: z
                .string()
                .regex(/^(?!\s*$).+/)
                .min(32)
                .max(64)
                .openapi({
                  description:
                    '<p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>',
                }),
            })
            .openapi({
              required: ['dataSource', 'dataFormat', 'importOptions', 'clientRequestToken'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartTableDataImportJobResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    486: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
    487: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description:
    ' The UntagResource API allows you to removes tags from an ARN-able resource. Resource includes workbook, table, screen and screen-automation. ',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .regex(/^arn:aws:honeycode:.+:[0-9]{12}:.+:.+$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: "The resource's Amazon Resource Name (ARN).",
            schema: {
              type: 'string',
              pattern: '^arn:aws:honeycode:.+:[0-9]{12}:.+:.+$',
              minLength: 1,
              maxLength: 256,
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).max(100),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'A list of tag keys to remove from the resource.',
            schema: {
              type: 'array',
              description: 'A list of tag keys',
              items: { $ref: '#/components/schemas/TagKey' },
              maxItems: 100,
            },
          },
          description: 'A list of tag keys',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})
