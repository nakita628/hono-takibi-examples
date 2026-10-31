import { createRoute, z } from '@hono/zod-openapi'

const StatusCodeSchema = z.int().openapi('StatusCode')

const AssociateUserToPermissionGroupResponseSchema = z
  .object({
    statusCode: StatusCodeSchema.and(
      z.any().openapi({ description: 'The returned status code of the response.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateUserToPermissionGroupResponse')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const DatasetIdSchema = z
  .string()
  .min(1)
  .max(26)
  .openapi({ description: 'ID for a given Dataset' })
  .openapi('DatasetId')

const ChangesetIdSchema = z
  .string()
  .min(1)
  .max(26)
  .openapi({ description: 'ID used to identify a Changeset' })
  .openapi('ChangesetId')

const CreateChangesetResponseSchema = z
  .object({
    datasetId: DatasetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the FinSpace Dataset where the Changeset is created.',
        }),
    ).exactOptional(),
    changesetId: ChangesetIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the Changeset that is created.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The response from a CreateChangeset operation.', required: [] })
  .openapi('CreateChangesetResponse')

const StringMapValueSchema = z
  .string()
  .regex(/[\s\S]*\S[\s\S]*/)
  .max(1000)
  .openapi('StringMapValue')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const DataViewIdSchema = z
  .string()
  .min(1)
  .max(26)
  .openapi({ description: 'DataView ID' })
  .openapi('DataViewId')

const CreateDataViewResponseSchema = z
  .object({
    datasetId: DatasetIdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier of the Dataset used for the Dataview.' }),
    ).exactOptional(),
    dataViewId: DataViewIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the created Dataview.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response for creating a data view.', required: [] })
  .openapi('CreateDataViewResponse')

const StringValueLength1to255Schema = z
  .string()
  .regex(/[\s\S]*\S[\s\S]*/)
  .min(1)
  .max(255)
  .openapi({ description: '1 - 255 character String' })
  .openapi('StringValueLength1to255')

const DataViewDestinationTypeSchema = z
  .string()
  .openapi({ description: 'DataView Destination Type' })
  .openapi('DataViewDestinationType')

const ExportFileFormatSchema = z
  .enum(['PARQUET', 'DELIMITED_TEXT'])
  .openapi({ description: 'Data View Export File Format' })
  .openapi('ExportFileFormat')

const S3DestinationFormatOptionsSchema = z
  .record(z.string(), StringMapValueSchema)
  .openapi('S3DestinationFormatOptions')

const CreateDatasetResponseSchema = z
  .object({
    datasetId: DatasetIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the created Dataset.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The response from a CreateDataset operation', required: [] })
  .openapi('CreateDatasetResponse')

const OwnerNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(250)
  .openapi({ description: '1 - 250 character String' })
  .openapi('OwnerName')

const PhoneNumberSchema = z
  .string()
  .regex(/^[\+0-9\#\,\(][\+0-9\-\.\/\(\)\,\#\s]+$/)
  .min(10)
  .max(20)
  .openapi({ description: 'PhoneNumber of Dataset Owner' })
  .openapi('PhoneNumber')

const EmailSchema = z
  .string()
  .regex(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/)
  .min(4)
  .max(320)
  .openapi('Email')

const PermissionGroupIdSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(26)
  .openapi('PermissionGroupId')

const StringValueLength1to250Schema = z
  .string()
  .regex(/[\s\S]*\S[\s\S]*/)
  .min(1)
  .max(250)
  .openapi({ description: '1 - 250 character String' })
  .openapi('StringValueLength1to250')

const ResourcePermissionSchema = z
  .object({
    permission: StringValueLength1to250Schema.and(
      z.any().openapi({ description: 'Permission for a resource.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Resource permission for a dataset. When you create a dataset, all the other members of the same user group inherit access to the dataset. You can only create a dataset if your user group has application permission for Create Datasets.</p> <p>The following is a list of valid dataset permissions that you can apply: </p> <ul> <li> <p> <code>ViewDatasetDetails</code> </p> </li> <li> <p> <code>ReadDatasetDetails</code> </p> </li> <li> <p> <code>AddDatasetData</code> </p> </li> <li> <p> <code>CreateDataView</code> </p> </li> <li> <p> <code>EditDatasetMetadata</code> </p> </li> <li> <p> <code>DeleteDataset</code> </p> </li> </ul> <p>For more information on the dataset permissions, see <a href="https://docs.aws.amazon.com/finspace/latest/userguide/managing-user-permissions.html#supported-dataset-permissions">Supported Dataset Permissions</a> in the FinSpace User Guide.</p>',
    required: [],
  })
  .openapi('ResourcePermission')

const ResourcePermissionsListSchema = z
  .array(ResourcePermissionSchema)
  .openapi({ description: 'List of Resource Permissions' })
  .openapi('ResourcePermissionsList')

const ColumnDataTypeSchema = z
  .enum([
    'STRING',
    'CHAR',
    'INTEGER',
    'TINYINT',
    'SMALLINT',
    'BIGINT',
    'FLOAT',
    'DOUBLE',
    'DATE',
    'DATETIME',
    'BOOLEAN',
    'BINARY',
  ])
  .openapi({ description: 'Data type of a column.' })
  .openapi('ColumnDataType')

const ColumnNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .max(126)
  .openapi({ description: 'Column Name' })
  .openapi('ColumnName')

const ColumnDescriptionSchema = z
  .string()
  .regex(/[\s\S]*/)
  .max(512)
  .openapi({ description: 'Column Description' })
  .openapi('ColumnDescription')

const ColumnDefinitionSchema = z
  .object({
    dataType: ColumnDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Data type of a column.</p> <ul> <li> <p> <code>STRING</code> – A String data type.</p> <p> <code>CHAR</code> – A char data type.</p> <p> <code>INTEGER</code> – An integer data type.</p> <p> <code>TINYINT</code> – A tinyint data type.</p> <p> <code>SMALLINT</code> – A smallint data type.</p> <p> <code>BIGINT</code> – A bigint data type.</p> <p> <code>FLOAT</code> – A float data type.</p> <p> <code>DOUBLE</code> – A double data type.</p> <p> <code>DATE</code> – A date data type.</p> <p> <code>DATETIME</code> – A datetime data type.</p> <p> <code>BOOLEAN</code> – A boolean data type.</p> <p> <code>BINARY</code> – A binary data type.</p> </li> </ul>',
        }),
    ).exactOptional(),
    columnName: ColumnNameSchema.and(
      z.any().openapi({ description: 'The name of a column.' }),
    ).exactOptional(),
    columnDescription: ColumnDescriptionSchema.and(
      z.any().openapi({ description: 'Description for a column.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The definition of a column in a tabular Dataset.', required: [] })
  .openapi('ColumnDefinition')

const ColumnListSchema = z
  .array(ColumnDefinitionSchema)
  .openapi({ description: 'List of Column Definitions' })
  .openapi('ColumnList')

const ColumnNameListSchema = z
  .array(ColumnNameSchema)
  .openapi({ description: 'List of Column Names' })
  .openapi('ColumnNameList')

const SchemaDefinitionSchema = z
  .object({
    columns: ColumnListSchema.and(
      z.any().openapi({ description: 'List of column definitions.' }),
    ).exactOptional(),
    primaryKeyColumns: ColumnNameListSchema.and(
      z.any().openapi({ description: 'List of column names used for primary key.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Definition for a schema on a tabular Dataset.', required: [] })
  .openapi('SchemaDefinition')

const CreatePermissionGroupResponseSchema = z
  .object({
    permissionGroupId: PermissionGroupIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the permission group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePermissionGroupResponse')

const ApplicationPermissionSchema = z
  .enum([
    'CreateDataset',
    'ManageClusters',
    'ManageUsersAndGroups',
    'ManageAttributeSets',
    'ViewAuditData',
    'AccessNotebooks',
    'GetTemporaryCredentials',
  ])
  .openapi('ApplicationPermission')

const UserIdSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(26)
  .openapi('UserId')

const CreateUserResponseSchema = z
  .object({
    userId: UserIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the user.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateUserResponse')

const DeleteDatasetResponseSchema = z
  .object({
    datasetId: DatasetIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the deleted Dataset.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The response from an DeleteDataset operation', required: [] })
  .openapi('DeleteDatasetResponse')

const DeletePermissionGroupResponseSchema = z
  .object({
    permissionGroupId: PermissionGroupIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the deleted permission group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeletePermissionGroupResponse')

const DisableUserResponseSchema = z
  .object({
    userId: UserIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the disabled user account.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisableUserResponse')

const DisassociateUserFromPermissionGroupResponseSchema = z
  .object({
    statusCode: StatusCodeSchema.and(
      z.any().openapi({ description: 'The returned status code of the response.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateUserFromPermissionGroupResponse')

const EnableUserResponseSchema = z
  .object({
    userId: UserIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the enabled user account.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnableUserResponse')

const ChangesetArnSchema = z
  .string()
  .openapi({ description: 'Arn for a given Changeset' })
  .openapi('ChangesetArn')

const ChangeTypeSchema = z
  .enum(['REPLACE', 'APPEND', 'MODIFY'])
  .openapi({ description: 'Indicates how the given change will be applied to the dataset.' })
  .openapi('ChangeType')

const SourceParamsSchema = z
  .record(z.string(), StringMapValueSchema)
  .openapi({ description: 'Source Parameters of a Changeset' })
  .openapi('SourceParams')

const FormatParamsSchema = z
  .record(z.string(), StringMapValueSchema)
  .openapi({ description: 'Format Parameters of a Changeset' })
  .openapi('FormatParams')

const TimestampEpochSchema = z
  .int()
  .openapi({ description: 'Milliseconds since UTC epoch' })
  .openapi('TimestampEpoch')

const IngestionStatusSchema = z
  .enum(['PENDING', 'FAILED', 'SUCCESS', 'RUNNING', 'STOP_REQUESTED'])
  .openapi({ description: 'Status of the ingestion process returned from scheduler service.' })
  .openapi('IngestionStatus')

const ErrorMessageSchema = z
  .string()
  .max(1000)
  .openapi({ description: 'Changeset Error Message' })
  .openapi('ErrorMessage')

const ErrorCategorySchema = z
  .enum([
    'VALIDATION',
    'SERVICE_QUOTA_EXCEEDED',
    'ACCESS_DENIED',
    'RESOURCE_NOT_FOUND',
    'THROTTLING',
    'INTERNAL_SERVICE_EXCEPTION',
    'CANCELLED',
    'USER_RECOVERABLE',
  ])
  .openapi({ description: 'Changeset Error Category' })
  .openapi('ErrorCategory')

const ChangesetErrorInfoSchema = z
  .object({
    errorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'The text of the error message.' }),
    ).exactOptional(),
    errorCategory: ErrorCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The category of the error.</p> <ul> <li> <p> <code>VALIDATION</code> – The inputs to this request are invalid.</p> </li> <li> <p> <code>SERVICE_QUOTA_EXCEEDED</code> – Service quotas have been exceeded. Please contact AWS support to increase quotas.</p> </li> <li> <p> <code>ACCESS_DENIED</code> – Missing required permission to perform this request.</p> </li> <li> <p> <code>RESOURCE_NOT_FOUND</code> – One or more inputs to this request were not found.</p> </li> <li> <p> <code>THROTTLING</code> – The system temporarily lacks sufficient resources to process the request.</p> </li> <li> <p> <code>INTERNAL_SERVICE_EXCEPTION</code> – An internal service error has occurred.</p> </li> <li> <p> <code>CANCELLED</code> – Cancelled.</p> </li> <li> <p> <code>USER_RECOVERABLE</code> – A user recoverable error has occurred.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The structure with error messages.', required: [] })
  .openapi('ChangesetErrorInfo')

const GetChangesetResponseSchema = z
  .object({
    changesetId: ChangesetIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for a Changeset.' }),
    ).exactOptional(),
    changesetArn: ChangesetArnSchema.and(
      z.any().openapi({ description: 'The ARN identifier of the Changeset.' }),
    ).exactOptional(),
    datasetId: DatasetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the FinSpace Dataset where the Changeset is created.',
        }),
    ).exactOptional(),
    changeType: ChangeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Type that indicates how a Changeset is applied to a Dataset.</p> <ul> <li> <p> <code>REPLACE</code> – Changeset is considered as a replacement to all prior loaded Changesets.</p> </li> <li> <p> <code>APPEND</code> – Changeset is considered as an addition to the end of all prior loaded Changesets.</p> </li> <li> <p> <code>MODIFY</code> – Changeset is considered as a replacement to a specific prior ingested Changeset.</p> </li> </ul>',
        }),
    ).exactOptional(),
    sourceParams: SourceParamsSchema.and(
      z
        .any()
        .openapi({ description: 'Options that define the location of the data being ingested.' }),
    ).exactOptional(),
    formatParams: FormatParamsSchema.and(
      z.any().openapi({ description: 'Structure of the source file(s).' }),
    ).exactOptional(),
    createTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp at which the Changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
    status: IngestionStatusSchema.and(
      z.any().openapi({ description: 'The status of Changeset creation operation.' }),
    ).exactOptional(),
    errorInfo: ChangesetErrorInfoSchema.and(
      z.any().openapi({ description: 'The structure with error messages.' }),
    ).exactOptional(),
    activeUntilTimestamp: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time until which the Changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
    activeFromTimestamp: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'Beginning time from which the Changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
    updatesChangesetId: ChangesetIdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier of the Changeset that is being updated.' }),
    ).exactOptional(),
    updatedByChangesetId: ChangesetIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the updated Changeset.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The response from a describe changeset operation', required: [] })
  .openapi('GetChangesetResponse')

const BooleanSchema = z
  .boolean()
  .openapi({ description: 'Common Boolean data type' })
  .openapi('Boolean')

const PartitionColumnListSchema = z
  .array(StringValueLength1to255Schema)
  .openapi({ description: 'DataView Partition Column List' })
  .openapi('PartitionColumnList')

const DataViewErrorInfoSchema = z
  .object({
    errorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'The text of the error message.' }),
    ).exactOptional(),
    errorCategory: ErrorCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The category of the error.</p> <ul> <li> <p> <code>VALIDATION</code> – The inputs to this request are invalid.</p> </li> <li> <p> <code>SERVICE_QUOTA_EXCEEDED</code> – Service quotas have been exceeded. Please contact AWS support to increase quotas.</p> </li> <li> <p> <code>ACCESS_DENIED</code> – Missing required permission to perform this request.</p> </li> <li> <p> <code>RESOURCE_NOT_FOUND</code> – One or more inputs to this request were not found.</p> </li> <li> <p> <code>THROTTLING</code> – The system temporarily lacks sufficient resources to process the request.</p> </li> <li> <p> <code>INTERNAL_SERVICE_EXCEPTION</code> – An internal service error has occurred.</p> </li> <li> <p> <code>CANCELLED</code> – Cancelled.</p> </li> <li> <p> <code>USER_RECOVERABLE</code> – A user recoverable error has occurred.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The structure with error messages.', required: [] })
  .openapi('DataViewErrorInfo')

const SortColumnListSchema = z
  .array(StringValueLength1to255Schema)
  .openapi({ description: 'DataView Sort Column List' })
  .openapi('SortColumnList')

const DataViewArnSchema = z
  .string()
  .openapi({ description: 'Arn of a DataView' })
  .openapi('DataViewArn')

const DataViewDestinationTypeParamsSchema = z
  .object({
    destinationType: DataViewDestinationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Destination type for a Dataview.</p> <ul> <li> <p> <code>GLUE_TABLE</code> – Glue table destination type.</p> </li> <li> <p> <code>S3</code> – S3 destination type.</p> </li> </ul>',
        }),
    ),
    s3DestinationExportFileFormat: ExportFileFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Dataview export file format.</p> <ul> <li> <p> <code>PARQUET</code> – Parquet export file format.</p> </li> <li> <p> <code>DELIMITED_TEXT</code> – Delimited text export file format.</p> </li> </ul>',
        }),
    ).exactOptional(),
    s3DestinationExportFileFormatOptions: S3DestinationFormatOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Format Options for S3 Destination type.</p> <p>Here is an example of how you could specify the <code>s3DestinationExportFileFormatOptions</code> </p> <p> <code> { "header": "true", "delimiter": ",", "compression": "gzip" }</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['destinationType'],
    description: 'Structure for the Dataview destination type parameters.',
  })
  .openapi('DataViewDestinationTypeParams')

const DataViewStatusSchema = z
  .enum([
    'RUNNING',
    'STARTING',
    'FAILED',
    'CANCELLED',
    'TIMEOUT',
    'SUCCESS',
    'PENDING',
    'FAILED_CLEANUP_FAILED',
  ])
  .openapi({ description: 'Status of a DataView' })
  .openapi('DataViewStatus')

const GetDataViewResponseSchema = z
  .object({
    autoUpdate: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Flag to indicate Dataview should be updated automatically.' }),
    ).exactOptional(),
    partitionColumns: PartitionColumnListSchema.and(
      z.any().openapi({ description: 'Ordered set of column names used to partition data.' }),
    ).exactOptional(),
    datasetId: DatasetIdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier for the Dataset used in the Dataview.' }),
    ).exactOptional(),
    asOfTimestamp: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time range to use for the Dataview. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
    errorInfo: DataViewErrorInfoSchema.and(
      z
        .any()
        .openapi({ description: 'Information about an error that occurred for the Dataview.' }),
    ).exactOptional(),
    lastModifiedTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'The last time that a Dataview was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
    createTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp at which the Dataview was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
    sortColumns: SortColumnListSchema.and(
      z.any().openapi({ description: 'Columns to be used for sorting the data.' }),
    ).exactOptional(),
    dataViewId: DataViewIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the Dataview.' }),
    ).exactOptional(),
    dataViewArn: DataViewArnSchema.and(
      z.any().openapi({ description: 'The ARN identifier of the Dataview.' }),
    ).exactOptional(),
    destinationTypeParams: DataViewDestinationTypeParamsSchema.and(
      z
        .any()
        .openapi({ description: 'Options that define the destination type for the Dataview.' }),
    ).exactOptional(),
    status: DataViewStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of a Dataview creation.</p> <ul> <li> <p> <code>RUNNING</code> – Dataview creation is running.</p> </li> <li> <p> <code>STARTING</code> – Dataview creation is starting.</p> </li> <li> <p> <code>FAILED</code> – Dataview creation has failed.</p> </li> <li> <p> <code>CANCELLED</code> – Dataview creation has been cancelled.</p> </li> <li> <p> <code>TIMEOUT</code> – Dataview creation has timed out.</p> </li> <li> <p> <code>SUCCESS</code> – Dataview creation has succeeded.</p> </li> <li> <p> <code>PENDING</code> – Dataview creation is pending.</p> </li> <li> <p> <code>FAILED_CLEANUP_FAILED</code> – Dataview creation failed and resource cleanup failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Response from retrieving a dataview, which includes details on the target database and table name',
    required: [],
  })
  .openapi('GetDataViewResponse')

const DatasetArnSchema = z
  .string()
  .openapi({ description: 'Arn of a Dataset' })
  .openapi('DatasetArn')

const DatasetTitleSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(255)
  .openapi({ description: 'Title for a given Dataset' })
  .openapi('DatasetTitle')

const DatasetKindSchema = z
  .enum(['TABULAR', 'NON_TABULAR'])
  .openapi({ description: 'Dataset Kind' })
  .openapi('DatasetKind')

const DatasetDescriptionSchema = z
  .string()
  .regex(/[\s\S]*/)
  .max(1000)
  .openapi({ description: 'Description of a dataset' })
  .openapi('DatasetDescription')

const SchemaUnionSchema = z
  .object({
    tabularSchemaConfig: SchemaDefinitionSchema.and(
      z.any().openapi({ description: 'The configuration for a schema on a tabular Dataset.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A union of schema types.', required: [] })
  .openapi('SchemaUnion')

const AliasStringSchema = z
  .string()
  .regex(/^alias\/\S+/)
  .min(1)
  .max(255)
  .openapi('AliasString')

const DatasetStatusSchema = z
  .enum(['PENDING', 'FAILED', 'SUCCESS', 'RUNNING'])
  .openapi({ description: 'Status of the dataset process returned from scheduler service.' })
  .openapi('DatasetStatus')

const GetDatasetResponseSchema = z
  .object({
    datasetId: DatasetIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for a Dataset.' }),
    ).exactOptional(),
    datasetArn: DatasetArnSchema.and(
      z.any().openapi({ description: 'The ARN identifier of the Dataset.' }),
    ).exactOptional(),
    datasetTitle: DatasetTitleSchema.and(
      z.any().openapi({ description: 'Display title for a Dataset.' }),
    ).exactOptional(),
    kind: DatasetKindSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format in which Dataset data is structured.</p> <ul> <li> <p> <code>TABULAR</code> – Data is structured in a tabular format.</p> </li> <li> <p> <code>NON_TABULAR</code> – Data is structured in a non-tabular format.</p> </li> </ul>',
        }),
    ).exactOptional(),
    datasetDescription: DatasetDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the Dataset.' }),
    ).exactOptional(),
    createTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp at which the Dataset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
    lastModifiedTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'The last time that the Dataset was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
    schemaDefinition: SchemaUnionSchema.and(
      z.any().openapi({ description: 'Definition for a schema on a tabular Dataset.' }),
    ).exactOptional(),
    alias: AliasStringSchema.and(
      z.any().openapi({ description: 'The unique resource identifier for a Dataset.' }),
    ).exactOptional(),
    status: DatasetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Status of the Dataset creation.</p> <ul> <li> <p> <code>PENDING</code> – Dataset is pending creation.</p> </li> <li> <p> <code>FAILED</code> – Dataset creation has failed.</p> </li> <li> <p> <code>SUCCESS</code> – Dataset creation has succeeded.</p> </li> <li> <p> <code>RUNNING</code> – Dataset creation is running.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response for the GetDataset operation', required: [] })
  .openapi('GetDatasetResponse')

const AccessKeyIdSchema = z
  .string()
  .regex(/[\s\S]*\S[\s\S]*/)
  .min(1)
  .max(255)
  .openapi('AccessKeyId')

const SecretAccessKeySchema = z
  .string()
  .regex(/[\s\S]*\S[\s\S]*/)
  .min(1)
  .max(1000)
  .openapi('SecretAccessKey')

const SessionTokenSchema = z
  .string()
  .regex(/[\s\S]*\S[\s\S]*/)
  .min(1)
  .max(1000)
  .openapi('SessionToken')

const AwsCredentialsSchema = z
  .object({
    accessKeyId: AccessKeyIdSchema.and(
      z.any().openapi({ description: ' The unique identifier for the security credentials.' }),
    ).exactOptional(),
    secretAccessKey: SecretAccessKeySchema.and(
      z.any().openapi({ description: ' The secret access key that can be used to sign requests.' }),
    ).exactOptional(),
    sessionToken: SessionTokenSchema.and(
      z.any().openapi({ description: ' The token that users must pass to use the credentials.' }),
    ).exactOptional(),
    expiration: TimestampEpochSchema.and(
      z.any().openapi({ description: ' The Epoch time when the current credentials expire.' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The credentials required to access the external Dataview from the S3 location.',
    required: [],
  })
  .openapi('AwsCredentials')

const S3BucketNameSchema = z
  .string()
  .regex(/^.*\S.*$/)
  .min(1)
  .max(63)
  .openapi('S3BucketName')

const S3KeySchema = z
  .string()
  .regex(/^.*\S.*$/)
  .min(1)
  .max(1024)
  .openapi('S3Key')

const S3LocationSchema = z
  .object({
    bucket: S3BucketNameSchema.and(z.any().openapi({ description: ' The name of the S3 bucket.' })),
    key: S3KeySchema.and(
      z
        .any()
        .openapi({
          description: ' The path of the folder, within the S3 bucket that contains the Dataset.',
        }),
    ),
  })
  .openapi({
    required: ['bucket', 'key'],
    description: 'The location of an external Dataview in an S3 bucket.',
  })
  .openapi('S3Location')

const GetExternalDataViewAccessDetailsResponseSchema = z
  .object({
    credentials: AwsCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The credentials required to access the external Dataview from the S3 location.',
        }),
    ).exactOptional(),
    s3Location: S3LocationSchema.and(
      z.any().openapi({ description: 'The location where the external Dataview is stored.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetExternalDataViewAccessDetailsResponse')

const PermissionGroupNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(255)
  .openapi('PermissionGroupName')

const PermissionGroupDescriptionSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(4000)
  .openapi('PermissionGroupDescription')

const ApplicationPermissionListSchema = z
  .array(ApplicationPermissionSchema)
  .openapi('ApplicationPermissionList')

const PermissionGroupMembershipStatusSchema = z
  .enum(['ADDITION_IN_PROGRESS', 'ADDITION_SUCCESS', 'REMOVAL_IN_PROGRESS'])
  .openapi('PermissionGroupMembershipStatus')

const PermissionGroupSchema = z
  .object({
    permissionGroupId: PermissionGroupIdSchema.and(
      z.any().openapi({ description: ' The unique identifier for the permission group.' }),
    ).exactOptional(),
    name: PermissionGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the permission group.' }),
    ).exactOptional(),
    description: PermissionGroupDescriptionSchema.and(
      z.any().openapi({ description: ' A brief description for the permission group.' }),
    ).exactOptional(),
    applicationPermissions: ApplicationPermissionListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates the permissions that are granted to a specific group for accessing the FinSpace application.</p> <important> <p>When assigning application permissions, be aware that the permission <code>ManageUsersAndGroups</code> allows users to grant themselves or others access to any functionality in their FinSpace environment's application. It should only be granted to trusted users.</p> </important> <ul> <li> <p> <code>CreateDataset</code> – Group members can create new datasets.</p> </li> <li> <p> <code>ManageClusters</code> – Group members can manage Apache Spark clusters from FinSpace notebooks.</p> </li> <li> <p> <code>ManageUsersAndGroups</code> – Group members can manage users and permission groups. This is a privileged permission that allows users to grant themselves or others access to any functionality in the application. It should only be granted to trusted users.</p> </li> <li> <p> <code>ManageAttributeSets</code> – Group members can manage attribute sets.</p> </li> <li> <p> <code>ViewAuditData</code> – Group members can view audit data.</p> </li> <li> <p> <code>AccessNotebooks</code> – Group members will have access to FinSpace notebooks.</p> </li> <li> <p> <code>GetTemporaryCredentials</code> – Group members can get temporary API credentials.</p> </li> </ul>",
        }),
    ).exactOptional(),
    createTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp at which the group was created in FinSpace. The value is determined as epoch time in milliseconds. ',
        }),
    ).exactOptional(),
    lastModifiedTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the last time the permission group was updated. The value is determined as epoch time in milliseconds. ',
        }),
    ).exactOptional(),
    membershipStatus: PermissionGroupMembershipStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates the status of the user account within a permission group.</p> <ul> <li> <p> <code>ADDITION_IN_PROGRESS</code> – The user account is currently being added to the permission group.</p> </li> <li> <p> <code>ADDITION_SUCCESS</code> – The user account is successfully added to the permission group.</p> </li> <li> <p> <code>REMOVAL_IN_PROGRESS</code> – The user is currently being removed from the permission group.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The structure for a permission group.', required: [] })
  .openapi('PermissionGroup')

const GetPermissionGroupResponseSchema = z
  .object({ permissionGroup: PermissionGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GetPermissionGroupResponse')

const StringValueLength1to2552Schema = z
  .string()
  .min(1)
  .max(255)
  .openapi('StringValueLength1to2552')

const StringValueMaxLength1000Schema = z.string().max(1000).openapi('StringValueMaxLength1000')

const CredentialsSchema = z
  .object({
    accessKeyId: StringValueLength1to2552Schema.and(
      z.any().openapi({ description: 'The access key identifier.' }),
    ).exactOptional(),
    secretAccessKey: StringValueMaxLength1000Schema.and(
      z.any().openapi({ description: 'The access key.' }),
    ).exactOptional(),
    sessionToken: StringValueMaxLength1000Schema.and(
      z.any().openapi({ description: 'The session token.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Short term API credentials.', required: [] })
  .openapi('Credentials')

const SessionDurationSchema = z.int().min(60).max(720).openapi('SessionDuration')

const GetProgrammaticAccessCredentialsResponseSchema = z
  .object({
    credentials: CredentialsSchema.and(
      z.any().openapi({ description: 'Returns the programmatic credentials.' }),
    ).exactOptional(),
    durationInMinutes: SessionDurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns the duration in which the credentials will remain valid.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response for GetProgrammaticAccessCredentials operation', required: [] })
  .openapi('GetProgrammaticAccessCredentialsResponse')

const UserStatusSchema = z.enum(['CREATING', 'ENABLED', 'DISABLED']).openapi('UserStatus')

const FirstNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(50)
  .openapi('FirstName')

const LastNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(50)
  .openapi('LastName')

const UserTypeSchema = z.enum(['SUPER_USER', 'APP_USER']).openapi('UserType')

const ApiAccessSchema = z.enum(['ENABLED', 'DISABLED']).openapi('ApiAccess')

const RoleArnSchema = z
  .string()
  .regex(/^arn:aws[a-z\-]*:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+$/)
  .min(20)
  .max(2048)
  .openapi('RoleArn')

const GetUserResponseSchema = z
  .object({
    userId: UserIdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier for the user account that is retrieved.' }),
    ).exactOptional(),
    status: UserStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the user account. </p> <ul> <li> <p> <code>CREATING</code> – The user account creation is in progress.</p> </li> <li> <p> <code>ENABLED</code> – The user account is created and is currently active.</p> </li> <li> <p> <code>DISABLED</code> – The user account is currently inactive.</p> </li> </ul>',
        }),
    ).exactOptional(),
    firstName: FirstNameSchema.and(
      z.any().openapi({ description: 'The first name of the user.' }),
    ).exactOptional(),
    lastName: LastNameSchema.and(
      z.any().openapi({ description: 'The last name of the user.' }),
    ).exactOptional(),
    emailAddress: EmailSchema.and(
      z.any().openapi({ description: 'The email address that is associated with the user.' }),
    ).exactOptional(),
    type: UserTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates the type of user. </p> <ul> <li> <p> <code>SUPER_USER</code> – A user with permission to all the functionality and data in FinSpace.</p> </li> </ul> <ul> <li> <p> <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p> </li> </ul>',
        }),
    ).exactOptional(),
    apiAccess: ApiAccessSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the user can use the <code>GetProgrammaticAccessCredentials</code> API to obtain credentials that can then be used to access other FinSpace Data API operations. </p> <ul> <li> <p> <code>ENABLED</code> – The user has permissions to use the APIs.</p> </li> <li> <p> <code>DISABLED</code> – The user does not have permissions to use any APIs.</p> </li> </ul>',
        }),
    ).exactOptional(),
    apiAccessPrincipalArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.',
        }),
    ).exactOptional(),
    createTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp at which the user account was created in FinSpace. The value is determined as epoch time in milliseconds. ',
        }),
    ).exactOptional(),
    lastEnabledTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the last time the user account was enabled. The value is determined as epoch time in milliseconds.',
        }),
    ).exactOptional(),
    lastDisabledTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the last time the user account was disabled. The value is determined as epoch time in milliseconds.',
        }),
    ).exactOptional(),
    lastModifiedTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the last time the user account was updated. The value is determined as epoch time in milliseconds.',
        }),
    ).exactOptional(),
    lastLoginTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the last time that the user logged into their account. The value is determined as epoch time in milliseconds.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetUserResponse')

const StringValueLength1to1024Schema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(1024)
  .openapi('StringValueLength1to1024')

const StringValueLength1to63Schema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(63)
  .openapi('StringValueLength1to63')

const GetWorkingLocationResponseSchema = z
  .object({
    s3Uri: StringValueLength1to1024Schema.and(
      z.any().openapi({ description: 'Returns the Amazon S3 URI for the working location.' }),
    ).exactOptional(),
    s3Path: StringValueLength1to1024Schema.and(
      z.any().openapi({ description: 'Returns the Amazon S3 Path for the working location.' }),
    ).exactOptional(),
    s3Bucket: StringValueLength1to63Schema.and(
      z
        .any()
        .openapi({ description: 'Returns the Amazon S3 bucket name for the working location.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetWorkingLocationResponse')

const ChangesetSummarySchema = z
  .object({
    changesetId: ChangesetIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for a Changeset.' }),
    ).exactOptional(),
    changesetArn: ChangesetArnSchema.and(
      z.any().openapi({ description: 'The ARN identifier of the Changeset.' }),
    ).exactOptional(),
    datasetId: DatasetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the FinSpace Dataset in which the Changeset is created.',
        }),
    ).exactOptional(),
    changeType: ChangeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Type that indicates how a Changeset is applied to a Dataset.</p> <ul> <li> <p> <code>REPLACE</code> – Changeset is considered as a replacement to all prior loaded Changesets.</p> </li> <li> <p> <code>APPEND</code> – Changeset is considered as an addition to the end of all prior loaded Changesets.</p> </li> <li> <p> <code>MODIFY</code> – Changeset is considered as a replacement to a specific prior ingested Changeset.</p> </li> </ul>',
        }),
    ).exactOptional(),
    sourceParams: SourceParamsSchema.and(
      z
        .any()
        .openapi({ description: 'Options that define the location of the data being ingested.' }),
    ).exactOptional(),
    formatParams: FormatParamsSchema.and(
      z.any().openapi({ description: 'Options that define the structure of the source file(s).' }),
    ).exactOptional(),
    createTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp at which the Changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
    status: IngestionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Status of the Changeset ingestion.</p> <ul> <li> <p> <code>PENDING</code> – Changeset is pending creation.</p> </li> <li> <p> <code>FAILED</code> – Changeset creation has failed.</p> </li> <li> <p> <code>SUCCESS</code> – Changeset creation has succeeded.</p> </li> <li> <p> <code>RUNNING</code> – Changeset creation is running.</p> </li> <li> <p> <code>STOP_REQUESTED</code> – User requested Changeset creation to stop.</p> </li> </ul>',
        }),
    ).exactOptional(),
    errorInfo: ChangesetErrorInfoSchema.and(
      z.any().openapi({ description: 'The structure with error messages.' }),
    ).exactOptional(),
    activeUntilTimestamp: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time until which the Changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
    activeFromTimestamp: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'Beginning time from which the Changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
    updatesChangesetId: ChangesetIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the Changeset that is updated.' }),
    ).exactOptional(),
    updatedByChangesetId: ChangesetIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the updated Changeset.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A Changeset is unit of data in a Dataset.', required: [] })
  .openapi('ChangesetSummary')

const ChangesetListSchema = z
  .array(ChangesetSummarySchema)
  .openapi({ description: 'List of Changeset Summaries' })
  .openapi('ChangesetList')

const PaginationTokenSchema = z.string().openapi('PaginationToken')

const ListChangesetsResponseSchema = z
  .object({
    changesets: ChangesetListSchema.and(
      z.any().openapi({ description: 'List of Changesets found.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'A token that indicates where a results page should begin.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Response to ListChangesetsResponse. This returns a list of dataset changesets that match the query criteria.',
    required: [],
  })
  .openapi('ListChangesetsResponse')

const DataViewSummarySchema = z
  .object({
    dataViewId: DataViewIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the Dataview.' }),
    ).exactOptional(),
    dataViewArn: DataViewArnSchema.and(
      z.any().openapi({ description: 'The ARN identifier of the Dataview.' }),
    ).exactOptional(),
    datasetId: DatasetIdSchema.and(
      z.any().openapi({ description: 'Th unique identifier for the Dataview Dataset.' }),
    ).exactOptional(),
    asOfTimestamp: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time range to use for the Dataview. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
    partitionColumns: PartitionColumnListSchema.and(
      z.any().openapi({ description: 'Ordered set of column names used to partition data.' }),
    ).exactOptional(),
    sortColumns: SortColumnListSchema.and(
      z.any().openapi({ description: 'Columns to be used for sorting the data.' }),
    ).exactOptional(),
    status: DataViewStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of a Dataview creation.</p> <ul> <li> <p> <code>RUNNING</code> – Dataview creation is running.</p> </li> <li> <p> <code>STARTING</code> – Dataview creation is starting.</p> </li> <li> <p> <code>FAILED</code> – Dataview creation has failed.</p> </li> <li> <p> <code>CANCELLED</code> – Dataview creation has been cancelled.</p> </li> <li> <p> <code>TIMEOUT</code> – Dataview creation has timed out.</p> </li> <li> <p> <code>SUCCESS</code> – Dataview creation has succeeded.</p> </li> <li> <p> <code>PENDING</code> – Dataview creation is pending.</p> </li> <li> <p> <code>FAILED_CLEANUP_FAILED</code> – Dataview creation failed and resource cleanup failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    errorInfo: DataViewErrorInfoSchema.and(
      z.any().openapi({ description: 'The structure with error messages.' }),
    ).exactOptional(),
    destinationTypeProperties: DataViewDestinationTypeParamsSchema.and(
      z.any().openapi({ description: 'Information about the Dataview destination.' }),
    ).exactOptional(),
    autoUpdate: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'The flag to indicate Dataview should be updated automatically.' }),
    ).exactOptional(),
    createTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp at which the Dataview was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
    lastModifiedTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'The last time that a Dataview was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Structure for the summary of a Dataview.', required: [] })
  .openapi('DataViewSummary')

const DataViewListSchema = z
  .array(DataViewSummarySchema)
  .openapi({ description: 'List of Data Views' })
  .openapi('DataViewList')

const ListDataViewsResponseSchema = z
  .object({
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'A token that indicates where a results page should begin.' }),
    ).exactOptional(),
    dataViews: DataViewListSchema.and(
      z.any().openapi({ description: 'A list of Dataviews.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDataViewsResponse')

const DatasetOwnerInfoSchema = z
  .object({
    name: OwnerNameSchema.and(
      z.any().openapi({ description: 'The name of the Dataset owner.' }),
    ).exactOptional(),
    phoneNumber: PhoneNumberSchema.and(
      z.any().openapi({ description: 'Phone number for the Dataset owner.' }),
    ).exactOptional(),
    email: EmailSchema.and(
      z.any().openapi({ description: 'Email address for the Dataset owner.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A structure for Dataset owner info.', required: [] })
  .openapi('DatasetOwnerInfo')

const DatasetSchema = z
  .object({
    datasetId: DatasetIdSchema.and(
      z.any().openapi({ description: 'An identifier for a Dataset.' }),
    ).exactOptional(),
    datasetArn: DatasetArnSchema.and(
      z.any().openapi({ description: 'The ARN identifier of the Dataset.' }),
    ).exactOptional(),
    datasetTitle: DatasetTitleSchema.and(
      z.any().openapi({ description: 'Display title for a Dataset.' }),
    ).exactOptional(),
    kind: DatasetKindSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format in which Dataset data is structured.</p> <ul> <li> <p> <code>TABULAR</code> – Data is structured in a tabular format.</p> </li> <li> <p> <code>NON_TABULAR</code> – Data is structured in a non-tabular format.</p> </li> </ul>',
        }),
    ).exactOptional(),
    datasetDescription: DatasetDescriptionSchema.and(
      z.any().openapi({ description: 'Description for a Dataset.' }),
    ).exactOptional(),
    ownerInfo: DatasetOwnerInfoSchema.and(
      z.any().openapi({ description: 'Contact information for a Dataset owner.' }),
    ).exactOptional(),
    createTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp at which the Dataset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
    lastModifiedTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'The last time that the Dataset was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
    schemaDefinition: SchemaUnionSchema.and(
      z.any().openapi({ description: 'Definition for a schema on a tabular Dataset.' }),
    ).exactOptional(),
    alias: AliasStringSchema.and(
      z.any().openapi({ description: 'The unique resource identifier for a Dataset.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The structure for a Dataset.', required: [] })
  .openapi('Dataset')

const DatasetListSchema = z
  .array(DatasetSchema)
  .openapi({ description: 'List of Dataset structures' })
  .openapi('DatasetList')

const ListDatasetsResponseSchema = z
  .object({
    datasets: DatasetListSchema.and(
      z.any().openapi({ description: 'List of Datasets.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'A token that indicates where a results page should begin.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Response for the ListDatasets operation', required: [] })
  .openapi('ListDatasetsResponse')

const PermissionGroupListSchema = z.array(PermissionGroupSchema).openapi('PermissionGroupList')

const ListPermissionGroupsResponseSchema = z
  .object({
    permissionGroups: PermissionGroupListSchema.and(
      z.any().openapi({ description: 'A list of all the permission groups.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'A token that indicates where a results page should begin.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPermissionGroupsResponse')

const PermissionGroupByUserSchema = z
  .object({
    permissionGroupId: PermissionGroupIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the permission group.' }),
    ).exactOptional(),
    name: PermissionGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the permission group.' }),
    ).exactOptional(),
    membershipStatus: PermissionGroupMembershipStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates the status of the user account within a permission group.</p> <ul> <li> <p> <code>ADDITION_IN_PROGRESS</code> – The user account is currently being added to the permission group.</p> </li> <li> <p> <code>ADDITION_SUCCESS</code> – The user account is successfully added to the permission group.</p> </li> <li> <p> <code>REMOVAL_IN_PROGRESS</code> – The user is currently being removed from the permission group.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The structure of a permission group associated with a user account.',
    required: [],
  })
  .openapi('PermissionGroupByUser')

const PermissionGroupByUserListSchema = z
  .array(PermissionGroupByUserSchema)
  .openapi('PermissionGroupByUserList')

const ListPermissionGroupsByUserResponseSchema = z
  .object({
    permissionGroups: PermissionGroupByUserListSchema.and(
      z.any().openapi({ description: 'A list of returned permission groups.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'A token that indicates where a results page should begin.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPermissionGroupsByUserResponse')

const UserSchema = z
  .object({
    userId: UserIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the user.' }),
    ).exactOptional(),
    status: UserStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the user account. </p> <ul> <li> <p> <code>CREATING</code> – The user account creation is in progress.</p> </li> <li> <p> <code>ENABLED</code> – The user account is created and is currently active.</p> </li> <li> <p> <code>DISABLED</code> – The user account is currently inactive.</p> </li> </ul>',
        }),
    ).exactOptional(),
    firstName: FirstNameSchema.and(
      z.any().openapi({ description: 'The first name of the user.' }),
    ).exactOptional(),
    lastName: LastNameSchema.and(
      z.any().openapi({ description: ' The last name of the user.' }),
    ).exactOptional(),
    emailAddress: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            "The email address of the user. The email address serves as a uniquer identifier for each user and cannot be changed after it's created.",
        }),
    ).exactOptional(),
    type: UserTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Indicates the type of user.</p> <ul> <li> <p> <code>SUPER_USER</code> – A user with permission to all the functionality and data in FinSpace.</p> </li> <li> <p> <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p> </li> </ul>',
        }),
    ).exactOptional(),
    apiAccess: ApiAccessSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the user can use the <code>GetProgrammaticAccessCredentials</code> API to obtain credentials that can then be used to access other FinSpace Data API operations.</p> <ul> <li> <p> <code>ENABLED</code> – The user has permissions to use the APIs.</p> </li> <li> <p> <code>DISABLED</code> – The user does not have permissions to use any APIs.</p> </li> </ul>',
        }),
    ).exactOptional(),
    apiAccessPrincipalArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.',
        }),
    ).exactOptional(),
    createTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp at which the user account was created in FinSpace. The value is determined as epoch time in milliseconds. ',
        }),
    ).exactOptional(),
    lastEnabledTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Describes the last time the user account was enabled. The value is determined as epoch time in milliseconds. ',
        }),
    ).exactOptional(),
    lastDisabledTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the last time the user account was disabled. The value is determined as epoch time in milliseconds.',
        }),
    ).exactOptional(),
    lastModifiedTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the last time the user account was updated. The value is determined as epoch time in milliseconds. ',
        }),
    ).exactOptional(),
    lastLoginTime: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the last time that the user logged into their account. The value is determined as epoch time in milliseconds. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The details of the user account.', required: [] })
  .openapi('User')

const UserListSchema = z.array(UserSchema).openapi('UserList')

const ListUsersResponseSchema = z
  .object({
    users: UserListSchema.and(
      z.any().openapi({ description: 'A list of all the user accounts.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'A token that indicates where a results page should begin.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListUsersResponse')

const UserByPermissionGroupSchema = z
  .object({
    userId: UserIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the user.' }),
    ).exactOptional(),
    status: UserStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the user account. </p> <ul> <li> <p> <code>CREATING</code> – The user account creation is in progress.</p> </li> <li> <p> <code>ENABLED</code> – The user account is created and is currently active.</p> </li> <li> <p> <code>DISABLED</code> – The user account is currently inactive.</p> </li> </ul>',
        }),
    ).exactOptional(),
    firstName: FirstNameSchema.and(
      z.any().openapi({ description: 'The first name of the user.' }),
    ).exactOptional(),
    lastName: LastNameSchema.and(
      z.any().openapi({ description: 'The last name of the user.' }),
    ).exactOptional(),
    emailAddress: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            "The email address of the user. The email address serves as a unique identifier for each user and cannot be changed after it's created.",
        }),
    ).exactOptional(),
    type: UserTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Indicates the type of user.</p> <ul> <li> <p> <code>SUPER_USER</code> – A user with permission to all the functionality and data in FinSpace.</p> </li> <li> <p> <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p> </li> </ul>',
        }),
    ).exactOptional(),
    apiAccess: ApiAccessSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the user can access FinSpace API operations.</p> <ul> <li> <p> <code>ENABLED</code> – The user has permissions to use the API operations.</p> </li> <li> <p> <code>DISABLED</code> – The user does not have permissions to use any API operations.</p> </li> </ul>',
        }),
    ).exactOptional(),
    apiAccessPrincipalArn: RoleArnSchema.and(
      z
        .any()
        .openapi({ description: 'The IAM ARN identifier that is attached to FinSpace API calls.' }),
    ).exactOptional(),
    membershipStatus: PermissionGroupMembershipStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates the status of the user account within a permission group.</p> <ul> <li> <p> <code>ADDITION_IN_PROGRESS</code> – The user account is currently being added to the permission group.</p> </li> <li> <p> <code>ADDITION_SUCCESS</code> – The user account is successfully added to the permission group.</p> </li> <li> <p> <code>REMOVAL_IN_PROGRESS</code> – The user is currently being removed from the permission group.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The structure of a user account associated with a permission group.',
    required: [],
  })
  .openapi('UserByPermissionGroup')

const UserByPermissionGroupListSchema = z
  .array(UserByPermissionGroupSchema)
  .openapi('UserByPermissionGroupList')

const ListUsersByPermissionGroupResponseSchema = z
  .object({
    users: UserByPermissionGroupListSchema.and(
      z
        .any()
        .openapi({ description: 'Lists details of all users in a specific permission group.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'A token that indicates where a results page should begin.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListUsersByPermissionGroupResponse')

const PasswordSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(8)
  .max(20)
  .openapi('Password')

const ResetUserPasswordResponseSchema = z
  .object({
    userId: UserIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the user that a new password is generated for.',
        }),
    ).exactOptional(),
    temporaryPassword: PasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            'A randomly generated temporary password for the requested user account. This password expires in 7 days.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResetUserPasswordResponse')

const UpdateChangesetResponseSchema = z
  .object({
    changesetId: ChangesetIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the Changeset to update.' }),
    ).exactOptional(),
    datasetId: DatasetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the FinSpace Dataset in which the Changeset is created.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The response from a update changeset operation.', required: [] })
  .openapi('UpdateChangesetResponse')

const UpdateDatasetResponseSchema = z
  .object({
    datasetId: DatasetIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for updated Dataset.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The response from an UpdateDataset operation', required: [] })
  .openapi('UpdateDatasetResponse')

const UpdatePermissionGroupResponseSchema = z
  .object({
    permissionGroupId: PermissionGroupIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the updated permission group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdatePermissionGroupResponse')

const UpdateUserResponseSchema = z
  .object({
    userId: UserIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the updated user account.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateUserResponse')

const ClientTokenSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(128)
  .openapi({ description: 'Idempotence Token for API operations' })
  .openapi('ClientToken')

const AssociateUserToPermissionGroupRequestSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token that ensures idempotency. This token expires in 10 minutes.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'AssociateUserToPermissionGroupRequest', required: [] })
  .openapi('AssociateUserToPermissionGroupRequest')

const CreateChangesetRequestSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token that ensures idempotency. This token expires in 10 minutes.',
        }),
    ).exactOptional(),
    changeType: ChangeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The option to indicate how a Changeset will be applied to a Dataset.</p> <ul> <li> <p> <code>REPLACE</code> – Changeset will be considered as a replacement to all prior loaded Changesets.</p> </li> <li> <p> <code>APPEND</code> – Changeset will be considered as an addition to the end of all prior loaded Changesets.</p> </li> <li> <p> <code>MODIFY</code> – Changeset is considered as a replacement to a specific prior ingested Changeset.</p> </li> </ul>',
        }),
    ),
    sourceParams: SourceParamsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Options that define the location of the data being ingested (<code>s3SourcePath</code>) and the source of the changeset (<code>sourceType</code>).</p> <p>Both <code>s3SourcePath</code> and <code>sourceType</code> are required attributes.</p> <p>Here is an example of how you could specify the <code>sourceParams</code>:</p> <p> <code> "sourceParams": { "s3SourcePath": "s3://finspace-landing-us-east-2-bk7gcfvitndqa6ebnvys4d/scratch/wr5hh8pwkpqqkxa4sxrmcw/ingestion/equity.csv", "sourceType": "S3" } </code> </p> <p>The S3 path that you specify must allow the FinSpace role access. To do that, you first need to configure the IAM policy on S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/finspace/latest/data-api/fs-using-the-finspace-api.html#access-s3-buckets">Loading data from an Amazon S3 Bucket using the FinSpace API</a> section.</p>',
        }),
    ),
    formatParams: FormatParamsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Options that define the structure of the source file(s) including the format type (<code>formatType</code>), header row (<code>withHeader</code>), data separation character (<code>separator</code>) and the type of compression (<code>compression</code>). </p> <p> <code>formatType</code> is a required attribute and can have the following values: </p> <ul> <li> <p> <code>PARQUET</code> – Parquet source file format.</p> </li> <li> <p> <code>CSV</code> – CSV source file format.</p> </li> <li> <p> <code>JSON</code> – JSON source file format.</p> </li> <li> <p> <code>XML</code> – XML source file format.</p> </li> </ul> <p>Here is an example of how you could specify the <code>formatParams</code>:</p> <p> <code> "formatParams": { "formatType": "CSV", "withHeader": "true", "separator": ",", "compression":"None" } </code> </p> <p>Note that if you only provide <code>formatType</code> as <code>CSV</code>, the rest of the attributes will automatically default to CSV values as following:</p> <p> <code> { "withHeader": "true", "separator": "," } </code> </p> <p> For more information about supported file formats, see <a href="https://docs.aws.amazon.com/finspace/latest/userguide/supported-data-types.html">Supported Data Types and File Formats</a> in the FinSpace User Guide.</p>',
        }),
    ),
  })
  .openapi({
    required: ['changeType', 'sourceParams', 'formatParams'],
    title: 'CreateChangesetRequest',
    description: 'The request for a CreateChangeset operation.',
  })
  .openapi('CreateChangesetRequest')

const CreateDataViewRequestSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token that ensures idempotency. This token expires in 10 minutes.',
        }),
    ).exactOptional(),
    autoUpdate: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Flag to indicate Dataview should be updated automatically.' }),
    ).exactOptional(),
    sortColumns: SortColumnListSchema.and(
      z.any().openapi({ description: 'Columns to be used for sorting the data.' }),
    ).exactOptional(),
    partitionColumns: PartitionColumnListSchema.and(
      z.any().openapi({ description: 'Ordered set of column names used to partition data.' }),
    ).exactOptional(),
    asOfTimestamp: TimestampEpochSchema.and(
      z
        .any()
        .openapi({
          description:
            'Beginning time to use for the Dataview. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.',
        }),
    ).exactOptional(),
    destinationTypeParams: DataViewDestinationTypeParamsSchema.and(
      z
        .any()
        .openapi({ description: 'Options that define the destination type for the Dataview.' }),
    ),
  })
  .openapi({
    required: ['destinationTypeParams'],
    title: 'CreateDataViewRequest',
    description: 'Request for creating a data view.',
  })
  .openapi('CreateDataViewRequest')

const PermissionGroupParamsSchema = z
  .object({
    permissionGroupId: PermissionGroupIdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier for the <code>PermissionGroup</code>.' }),
    ).exactOptional(),
    datasetPermissions: ResourcePermissionsListSchema.and(
      z.any().openapi({ description: 'List of resource permissions.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Permission group parameters for Dataset permissions.</p> <p>Here is an example of how you could specify the <code>PermissionGroupParams</code>:</p> <p> <code> { "permissionGroupId": "0r6fCRtSTUk4XPfXQe3M0g", "datasetPermissions": [ {"permission": "ViewDatasetDetails"}, {"permission": "AddDatasetData"}, {"permission": "EditDatasetMetadata"}, {"permission": "DeleteDataset"} ] } </code> </p>',
    required: [],
  })
  .openapi('PermissionGroupParams')

const CreateDatasetRequestSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token that ensures idempotency. This token expires in 10 minutes.',
        }),
    ).exactOptional(),
    datasetTitle: DatasetTitleSchema.and(
      z.any().openapi({ description: 'Display title for a FinSpace Dataset.' }),
    ),
    kind: DatasetKindSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format in which Dataset data is structured.</p> <ul> <li> <p> <code>TABULAR</code> – Data is structured in a tabular format.</p> </li> <li> <p> <code>NON_TABULAR</code> – Data is structured in a non-tabular format.</p> </li> </ul>',
        }),
    ),
    datasetDescription: DatasetDescriptionSchema.and(
      z.any().openapi({ description: 'Description of a Dataset.' }),
    ).exactOptional(),
    ownerInfo: DatasetOwnerInfoSchema.and(
      z.any().openapi({ description: 'Contact information for a Dataset owner.' }),
    ).exactOptional(),
    permissionGroupParams: PermissionGroupParamsSchema.and(
      z.any().openapi({ description: 'Permission group parameters for Dataset permissions.' }),
    ),
    alias: AliasStringSchema.and(
      z.any().openapi({ description: 'The unique resource identifier for a Dataset.' }),
    ).exactOptional(),
    schemaDefinition: SchemaUnionSchema.and(
      z.any().openapi({ description: 'Definition for a schema on a tabular Dataset.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['datasetTitle', 'kind', 'permissionGroupParams'],
    title: 'CreateDatasetRequest',
    description: 'The request for a CreateDataset operation',
  })
  .openapi('CreateDatasetRequest')

const CreatePermissionGroupRequestSchema = z
  .object({
    name: PermissionGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the permission group.' }),
    ),
    description: PermissionGroupDescriptionSchema.and(
      z.any().openapi({ description: 'A brief description for the permission group.' }),
    ).exactOptional(),
    applicationPermissions: ApplicationPermissionListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The option to indicate FinSpace application permissions that are granted to a specific group.</p> <important> <p>When assigning application permissions, be aware that the permission <code>ManageUsersAndGroups</code> allows users to grant themselves or others access to any functionality in their FinSpace environment's application. It should only be granted to trusted users.</p> </important> <ul> <li> <p> <code>CreateDataset</code> – Group members can create new datasets.</p> </li> <li> <p> <code>ManageClusters</code> – Group members can manage Apache Spark clusters from FinSpace notebooks.</p> </li> <li> <p> <code>ManageUsersAndGroups</code> – Group members can manage users and permission groups. This is a privileged permission that allows users to grant themselves or others access to any functionality in the application. It should only be granted to trusted users.</p> </li> <li> <p> <code>ManageAttributeSets</code> – Group members can manage attribute sets.</p> </li> <li> <p> <code>ViewAuditData</code> – Group members can view audit data.</p> </li> <li> <p> <code>AccessNotebooks</code> – Group members will have access to FinSpace notebooks.</p> </li> <li> <p> <code>GetTemporaryCredentials</code> – Group members can get temporary API credentials.</p> </li> </ul>",
        }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token that ensures idempotency. This token expires in 10 minutes.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name', 'applicationPermissions'], title: 'CreatePermissionGroupRequest' })
  .openapi('CreatePermissionGroupRequest')

const CreateUserRequestSchema = z
  .object({
    emailAddress: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            "The email address of the user that you want to register. The email address serves as a uniquer identifier for each user and cannot be changed after it's created.",
        }),
    ),
    type: UserTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The option to indicate the type of user. Use one of the following options to specify this parameter:</p> <ul> <li> <p> <code>SUPER_USER</code> – A user with permission to all the functionality and data in FinSpace.</p> </li> <li> <p> <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p> </li> </ul>',
        }),
    ),
    firstName: FirstNameSchema.and(
      z.any().openapi({ description: 'The first name of the user that you want to register.' }),
    ).exactOptional(),
    lastName: LastNameSchema.and(
      z.any().openapi({ description: 'The last name of the user that you want to register.' }),
    ).exactOptional(),
    ApiAccess: ApiAccessSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The option to indicate whether the user can use the <code>GetProgrammaticAccessCredentials</code> API to obtain credentials that can then be used to access other FinSpace Data API operations.</p> <ul> <li> <p> <code>ENABLED</code> – The user has permissions to use the APIs.</p> </li> <li> <p> <code>DISABLED</code> – The user does not have permissions to use any APIs.</p> </li> </ul>',
        }),
    ).exactOptional(),
    apiAccessPrincipalArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.',
        }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token that ensures idempotency. This token expires in 10 minutes.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['emailAddress', 'type'], title: 'CreateUserRequest' })
  .openapi('CreateUserRequest')

const DeleteDatasetRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteDatasetRequest',
    description: 'The request for a DeleteDataset operation.',
  })
  .openapi('DeleteDatasetRequest')

const DeletePermissionGroupRequestSchema = z
  .object({})
  .openapi({ title: 'DeletePermissionGroupRequest' })
  .openapi('DeletePermissionGroupRequest')

const DisableUserRequestSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token that ensures idempotency. This token expires in 10 minutes.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DisableUserRequest', required: [] })
  .openapi('DisableUserRequest')

const DisassociateUserFromPermissionGroupRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateUserFromPermissionGroupRequest' })
  .openapi('DisassociateUserFromPermissionGroupRequest')

const EnableUserRequestSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token that ensures idempotency. This token expires in 10 minutes.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'EnableUserRequest', required: [] })
  .openapi('EnableUserRequest')

const GetChangesetRequestSchema = z
  .object({})
  .openapi({ title: 'GetChangesetRequest', description: 'Request to describe a changeset.' })
  .openapi('GetChangesetRequest')

const GetDataViewRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDataViewRequest',
    description:
      'Request for retrieving a data view detail. Grouped / accessible within a dataset by its dataset id.',
  })
  .openapi('GetDataViewRequest')

const GetDatasetRequestSchema = z
  .object({})
  .openapi({ title: 'GetDatasetRequest', description: 'Request for the GetDataset operation.' })
  .openapi('GetDatasetRequest')

const GetExternalDataViewAccessDetailsRequestSchema = z
  .object({})
  .openapi({ title: 'GetExternalDataViewAccessDetailsRequest' })
  .openapi('GetExternalDataViewAccessDetailsRequest')

const GetPermissionGroupRequestSchema = z
  .object({})
  .openapi({ title: 'GetPermissionGroupRequest' })
  .openapi('GetPermissionGroupRequest')

const IdTypeSchema = z.string().min(1).max(26).openapi('IdType')

const GetProgrammaticAccessCredentialsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetProgrammaticAccessCredentialsRequest',
    description: 'Request for GetProgrammaticAccessCredentials operation',
  })
  .openapi('GetProgrammaticAccessCredentialsRequest')

const GetUserRequestSchema = z
  .object({})
  .openapi({ title: 'GetUserRequest' })
  .openapi('GetUserRequest')

const LocationTypeSchema = z.enum(['INGESTION', 'SAGEMAKER']).openapi('LocationType')

const GetWorkingLocationRequestSchema = z
  .object({
    locationType: LocationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the type of the working location.</p> <ul> <li> <p> <code>SAGEMAKER</code> – Use the Amazon S3 location as a temporary location to store data content when working with FinSpace Notebooks that run on SageMaker studio.</p> </li> <li> <p> <code>INGESTION</code> – Use the Amazon S3 location as a staging location to copy your data content and then use the location with the Changeset creation operation.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetWorkingLocationRequest', required: [] })
  .openapi('GetWorkingLocationRequest')

const ResultLimitSchema = z.int().min(1).max(100).openapi('ResultLimit')

const ListChangesetsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListChangesetsRequest',
    description: 'Request to ListChangesetsRequest. It exposes minimal query filters.',
  })
  .openapi('ListChangesetsRequest')

const ListDataViewsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDataViewsRequest', description: 'Request for a list data views.' })
  .openapi('ListDataViewsRequest')

const ListDatasetsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDatasetsRequest', description: 'Request for the ListDatasets operation.' })
  .openapi('ListDatasetsRequest')

const ListPermissionGroupsByUserRequestSchema = z
  .object({})
  .openapi({ title: 'ListPermissionGroupsByUserRequest' })
  .openapi('ListPermissionGroupsByUserRequest')

const ListPermissionGroupsRequestSchema = z
  .object({})
  .openapi({ title: 'ListPermissionGroupsRequest' })
  .openapi('ListPermissionGroupsRequest')

const ListUsersByPermissionGroupRequestSchema = z
  .object({})
  .openapi({ title: 'ListUsersByPermissionGroupRequest' })
  .openapi('ListUsersByPermissionGroupRequest')

const ListUsersRequestSchema = z
  .object({})
  .openapi({ title: 'ListUsersRequest' })
  .openapi('ListUsersRequest')

const ResetUserPasswordRequestSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token that ensures idempotency. This token expires in 10 minutes.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ResetUserPasswordRequest', required: [] })
  .openapi('ResetUserPasswordRequest')

const StringMapKeySchema = z
  .string()
  .regex(/[\s\S]*\S[\s\S]*/)
  .max(128)
  .openapi('StringMapKey')

const UpdateChangesetRequestSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token that ensures idempotency. This token expires in 10 minutes.',
        }),
    ).exactOptional(),
    sourceParams: SourceParamsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Options that define the location of the data being ingested (<code>s3SourcePath</code>) and the source of the changeset (<code>sourceType</code>).</p> <p>Both <code>s3SourcePath</code> and <code>sourceType</code> are required attributes.</p> <p>Here is an example of how you could specify the <code>sourceParams</code>:</p> <p> <code> "sourceParams": { "s3SourcePath": "s3://finspace-landing-us-east-2-bk7gcfvitndqa6ebnvys4d/scratch/wr5hh8pwkpqqkxa4sxrmcw/ingestion/equity.csv", "sourceType": "S3" } </code> </p> <p>The S3 path that you specify must allow the FinSpace role access. To do that, you first need to configure the IAM policy on S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/finspace/latest/data-api/fs-using-the-finspace-api.html#access-s3-buckets">Loading data from an Amazon S3 Bucket using the FinSpace API</a>section.</p>',
        }),
    ),
    formatParams: FormatParamsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Options that define the structure of the source file(s) including the format type (<code>formatType</code>), header row (<code>withHeader</code>), data separation character (<code>separator</code>) and the type of compression (<code>compression</code>). </p> <p> <code>formatType</code> is a required attribute and can have the following values: </p> <ul> <li> <p> <code>PARQUET</code> – Parquet source file format.</p> </li> <li> <p> <code>CSV</code> – CSV source file format.</p> </li> <li> <p> <code>JSON</code> – JSON source file format.</p> </li> <li> <p> <code>XML</code> – XML source file format.</p> </li> </ul> <p>Here is an example of how you could specify the <code>formatParams</code>:</p> <p> <code> "formatParams": { "formatType": "CSV", "withHeader": "true", "separator": ",", "compression":"None" } </code> </p> <p>Note that if you only provide <code>formatType</code> as <code>CSV</code>, the rest of the attributes will automatically default to CSV values as following:</p> <p> <code> { "withHeader": "true", "separator": "," } </code> </p> <p> For more information about supported file formats, see <a href="https://docs.aws.amazon.com/finspace/latest/userguide/supported-data-types.html">Supported Data Types and File Formats</a> in the FinSpace User Guide.</p>',
        }),
    ),
  })
  .openapi({
    required: ['sourceParams', 'formatParams'],
    title: 'UpdateChangesetRequest',
    description: 'Request to update an existing changeset.',
  })
  .openapi('UpdateChangesetRequest')

const UpdateDatasetRequestSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token that ensures idempotency. This token expires in 10 minutes.',
        }),
    ).exactOptional(),
    datasetTitle: DatasetTitleSchema.and(
      z.any().openapi({ description: 'A display title for the Dataset.' }),
    ),
    kind: DatasetKindSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format in which the Dataset data is structured.</p> <ul> <li> <p> <code>TABULAR</code> – Data is structured in a tabular format.</p> </li> <li> <p> <code>NON_TABULAR</code> – Data is structured in a non-tabular format.</p> </li> </ul>',
        }),
    ),
    datasetDescription: DatasetDescriptionSchema.and(
      z.any().openapi({ description: 'A description for the Dataset.' }),
    ).exactOptional(),
    alias: AliasStringSchema.and(
      z.any().openapi({ description: 'The unique resource identifier for a Dataset.' }),
    ).exactOptional(),
    schemaDefinition: SchemaUnionSchema.and(
      z.any().openapi({ description: 'Definition for a schema on a tabular Dataset.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['datasetTitle', 'kind'],
    title: 'UpdateDatasetRequest',
    description: 'The request for an UpdateDataset operation',
  })
  .openapi('UpdateDatasetRequest')

const UpdatePermissionGroupRequestSchema = z
  .object({
    name: PermissionGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the permission group.' }),
    ).exactOptional(),
    description: PermissionGroupDescriptionSchema.and(
      z.any().openapi({ description: 'A brief description for the permission group.' }),
    ).exactOptional(),
    applicationPermissions: ApplicationPermissionListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The permissions that are granted to a specific group for accessing the FinSpace application.</p> <important> <p>When assigning application permissions, be aware that the permission <code>ManageUsersAndGroups</code> allows users to grant themselves or others access to any functionality in their FinSpace environment's application. It should only be granted to trusted users.</p> </important> <ul> <li> <p> <code>CreateDataset</code> – Group members can create new datasets.</p> </li> <li> <p> <code>ManageClusters</code> – Group members can manage Apache Spark clusters from FinSpace notebooks.</p> </li> <li> <p> <code>ManageUsersAndGroups</code> – Group members can manage users and permission groups. This is a privileged permission that allows users to grant themselves or others access to any functionality in the application. It should only be granted to trusted users.</p> </li> <li> <p> <code>ManageAttributeSets</code> – Group members can manage attribute sets.</p> </li> <li> <p> <code>ViewAuditData</code> – Group members can view audit data.</p> </li> <li> <p> <code>AccessNotebooks</code> – Group members will have access to FinSpace notebooks.</p> </li> <li> <p> <code>GetTemporaryCredentials</code> – Group members can get temporary API credentials.</p> </li> </ul>",
        }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token that ensures idempotency. This token expires in 10 minutes.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdatePermissionGroupRequest', required: [] })
  .openapi('UpdatePermissionGroupRequest')

const UpdateUserRequestSchema = z
  .object({
    type: UserTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The option to indicate the type of user.</p> <ul> <li> <p> <code>SUPER_USER</code>– A user with permission to all the functionality and data in FinSpace.</p> </li> <li> <p> <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p> </li> </ul>',
        }),
    ).exactOptional(),
    firstName: FirstNameSchema.and(
      z.any().openapi({ description: 'The first name of the user.' }),
    ).exactOptional(),
    lastName: LastNameSchema.and(
      z.any().openapi({ description: 'The last name of the user.' }),
    ).exactOptional(),
    apiAccess: ApiAccessSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The option to indicate whether the user can use the <code>GetProgrammaticAccessCredentials</code> API to obtain credentials that can then be used to access other FinSpace Data API operations.</p> <ul> <li> <p> <code>ENABLED</code> – The user has permissions to use the APIs.</p> </li> <li> <p> <code>DISABLED</code> – The user does not have permissions to use any APIs.</p> </li> </ul>',
        }),
    ).exactOptional(),
    apiAccessPrincipalArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.',
        }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A token that ensures idempotency. This token expires in 10 minutes.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateUserRequest', required: [] })
  .openapi('UpdateUserRequest')

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

export const postPermissionGroupPermissionGroupIdUsersUserIdRoute = createRoute({
  method: 'post',
  path: '/permission-group/{permissionGroupId}/users/{userId}',
  description:
    'Adds a user account to a permission group to grant permissions for actions a user can perform in FinSpace.',
  operationId: 'AssociateUserToPermissionGroup',
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
      permissionGroupId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'permissionGroupId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the permission group.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 26 },
          },
        }),
      userId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the user.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 26 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Idempotence Token for API operations' }),
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
      content: { 'application/json': { schema: AssociateUserToPermissionGroupResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deletePermissionGroupPermissionGroupIdUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/permission-group/{permissionGroupId}/users/{userId}',
  description: 'Removes a user account from a permission group.',
  operationId: 'DisassociateUserFromPermissionGroup',
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
      permissionGroupId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'permissionGroupId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the permission group.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 26 },
          },
        }),
      userId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the user.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 26 },
          },
        }),
    }),
    query: z.object({
      clientToken: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description: 'A token that ensures idempotency. This token expires in 10 minutes.',
            schema: {
              type: 'string',
              pattern: '.*\\S.*',
              description: 'Idempotence Token for API operations',
              minLength: 1,
              maxLength: 128,
            },
          },
          description: 'Idempotence Token for API operations',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DisassociateUserFromPermissionGroupResponseSchema },
      },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getDatasetsDatasetIdChangesetsv2Route = createRoute({
  method: 'get',
  path: '/datasets/{datasetId}/changesetsv2',
  description: 'Lists the FinSpace Changesets for a Dataset.',
  operationId: 'ListChangesets',
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
      datasetId: z
        .string()
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'datasetId',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the FinSpace Dataset to which the Changeset belongs.',
            schema: {
              type: 'string',
              description: 'ID for a given Dataset',
              minLength: 1,
              maxLength: 26,
            },
          },
          description: 'ID for a given Dataset',
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
            description: 'The maximum number of results per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token that indicates where a results page should begin.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListChangesetsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postDatasetsDatasetIdChangesetsv2Route = createRoute({
  method: 'post',
  path: '/datasets/{datasetId}/changesetsv2',
  description: 'Creates a new Changeset in a FinSpace Dataset.',
  operationId: 'CreateChangeset',
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
      datasetId: z
        .string()
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'datasetId',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the FinSpace Dataset where the Changeset will be created. ',
            schema: {
              type: 'string',
              description: 'ID for a given Dataset',
              minLength: 1,
              maxLength: 26,
            },
          },
          description: 'ID for a given Dataset',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Idempotence Token for API operations' }),
              changeType: z
                .enum(['REPLACE', 'APPEND', 'MODIFY'])
                .openapi({
                  description: 'Indicates how the given change will be applied to the dataset.',
                }),
              sourceParams: z
                .record(z.string(), StringMapValueSchema)
                .openapi({ description: 'Source Parameters of a Changeset' }),
              formatParams: z
                .record(z.string(), StringMapValueSchema)
                .openapi({ description: 'Format Parameters of a Changeset' }),
            })
            .openapi({ required: ['changeType', 'sourceParams', 'formatParams'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateChangesetResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getDatasetsDatasetIdDataviewsv2Route = createRoute({
  method: 'get',
  path: '/datasets/{datasetId}/dataviewsv2',
  description: 'Lists all available Dataviews for a Dataset.',
  operationId: 'ListDataViews',
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
      datasetId: z
        .string()
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'datasetId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the Dataset for which to retrieve Dataviews.',
            schema: {
              type: 'string',
              description: 'ID for a given Dataset',
              minLength: 1,
              maxLength: 26,
            },
          },
          description: 'ID for a given Dataset',
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token that indicates where a results page should begin.',
            schema: { type: 'string' },
          },
        }),
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
            description: 'The maximum number of results per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDataViewsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postDatasetsDatasetIdDataviewsv2Route = createRoute({
  method: 'post',
  path: '/datasets/{datasetId}/dataviewsv2',
  description: 'Creates a Dataview for a Dataset.',
  operationId: 'CreateDataView',
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
      datasetId: z
        .string()
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'datasetId',
            in: 'path',
            required: true,
            description: 'The unique Dataset identifier that is used to create a Dataview.',
            schema: {
              type: 'string',
              description: 'ID for a given Dataset',
              minLength: 1,
              maxLength: 26,
            },
          },
          description: 'ID for a given Dataset',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Idempotence Token for API operations' }),
              autoUpdate: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Common Boolean data type' }),
              sortColumns: z
                .array(StringValueLength1to255Schema)
                .exactOptional()
                .openapi({ description: 'DataView Sort Column List' }),
              partitionColumns: z
                .array(StringValueLength1to255Schema)
                .exactOptional()
                .openapi({ description: 'DataView Partition Column List' }),
              asOfTimestamp: z
                .int()
                .exactOptional()
                .openapi({ description: 'Milliseconds since UTC epoch' }),
              destinationTypeParams: z
                .object({
                  destinationType: DataViewDestinationTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Destination type for a Dataview.</p> <ul> <li> <p> <code>GLUE_TABLE</code> – Glue table destination type.</p> </li> <li> <p> <code>S3</code> – S3 destination type.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  s3DestinationExportFileFormat: ExportFileFormatSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Dataview export file format.</p> <ul> <li> <p> <code>PARQUET</code> – Parquet export file format.</p> </li> <li> <p> <code>DELIMITED_TEXT</code> – Delimited text export file format.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  s3DestinationExportFileFormatOptions: S3DestinationFormatOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Format Options for S3 Destination type.</p> <p>Here is an example of how you could specify the <code>s3DestinationExportFileFormatOptions</code> </p> <p> <code> { "header": "true", "delimiter": ",", "compression": "gzip" }</code> </p>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Structure for the Dataview destination type parameters.',
                  required: [],
                }),
            })
            .openapi({ required: ['destinationTypeParams'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDataViewResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getDatasetsv2Route = createRoute({
  method: 'get',
  path: '/datasetsv2',
  description: 'Lists all of the active Datasets that a user has access to.',
  operationId: 'ListDatasets',
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
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token that indicates where a results page should begin.',
            schema: { type: 'string' },
          },
        }),
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
            description: 'The maximum number of results per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatasetsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postDatasetsv2Route = createRoute({
  method: 'post',
  path: '/datasetsv2',
  description: 'Creates a new FinSpace Dataset.',
  operationId: 'CreateDataset',
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
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Idempotence Token for API operations' }),
              datasetTitle: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(255)
                .openapi({ description: 'Title for a given Dataset' }),
              kind: z.enum(['TABULAR', 'NON_TABULAR']).openapi({ description: 'Dataset Kind' }),
              datasetDescription: z
                .string()
                .regex(/[\s\S]*/)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'Description of a dataset' }),
              ownerInfo: z
                .object({
                  name: OwnerNameSchema.and(
                    z.any().openapi({ description: 'The name of the Dataset owner.' }),
                  ).exactOptional(),
                  phoneNumber: PhoneNumberSchema.and(
                    z.any().openapi({ description: 'Phone number for the Dataset owner.' }),
                  ).exactOptional(),
                  email: EmailSchema.and(
                    z.any().openapi({ description: 'Email address for the Dataset owner.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'A structure for Dataset owner info.', required: [] }),
              permissionGroupParams: z
                .object({
                  permissionGroupId: PermissionGroupIdSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The unique identifier for the <code>PermissionGroup</code>.',
                      }),
                  ).exactOptional(),
                  datasetPermissions: ResourcePermissionsListSchema.and(
                    z.any().openapi({ description: 'List of resource permissions.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>Permission group parameters for Dataset permissions.</p> <p>Here is an example of how you could specify the <code>PermissionGroupParams</code>:</p> <p> <code> { "permissionGroupId": "0r6fCRtSTUk4XPfXQe3M0g", "datasetPermissions": [ {"permission": "ViewDatasetDetails"}, {"permission": "AddDatasetData"}, {"permission": "EditDatasetMetadata"}, {"permission": "DeleteDataset"} ] } </code> </p>',
                  required: [],
                }),
              alias: z
                .string()
                .regex(/^alias\/\S+/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The unique resource identifier for a Dataset.' }),
              schemaDefinition: z
                .object({
                  tabularSchemaConfig: SchemaDefinitionSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The configuration for a schema on a tabular Dataset.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'A union of schema types.', required: [] }),
            })
            .openapi({ required: ['datasetTitle', 'kind', 'permissionGroupParams'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDatasetResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postPermissionGroupRoute = createRoute({
  method: 'post',
  path: '/permission-group',
  description:
    'Creates a group of permissions for various actions that a user can perform in FinSpace.',
  operationId: 'CreatePermissionGroup',
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
              name: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the permission group.' }),
              description: z
                .string()
                .regex(/[\s\S]*/)
                .min(1)
                .max(4000)
                .exactOptional()
                .openapi({ description: 'A brief description for the permission group.' }),
              applicationPermissions: z
                .array(ApplicationPermissionSchema)
                .openapi({
                  description:
                    "<p>The option to indicate FinSpace application permissions that are granted to a specific group.</p> <important> <p>When assigning application permissions, be aware that the permission <code>ManageUsersAndGroups</code> allows users to grant themselves or others access to any functionality in their FinSpace environment's application. It should only be granted to trusted users.</p> </important> <ul> <li> <p> <code>CreateDataset</code> – Group members can create new datasets.</p> </li> <li> <p> <code>ManageClusters</code> – Group members can manage Apache Spark clusters from FinSpace notebooks.</p> </li> <li> <p> <code>ManageUsersAndGroups</code> – Group members can manage users and permission groups. This is a privileged permission that allows users to grant themselves or others access to any functionality in the application. It should only be granted to trusted users.</p> </li> <li> <p> <code>ManageAttributeSets</code> – Group members can manage attribute sets.</p> </li> <li> <p> <code>ViewAuditData</code> – Group members can view audit data.</p> </li> <li> <p> <code>AccessNotebooks</code> – Group members will have access to FinSpace notebooks.</p> </li> <li> <p> <code>GetTemporaryCredentials</code> – Group members can get temporary API credentials.</p> </li> </ul>",
                }),
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Idempotence Token for API operations' }),
            })
            .openapi({ required: ['name', 'applicationPermissions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePermissionGroupResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postUserRoute = createRoute({
  method: 'post',
  path: '/user',
  description: 'Creates a new user in FinSpace.',
  operationId: 'CreateUser',
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
              emailAddress: z
                .string()
                .regex(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/)
                .min(4)
                .max(320)
                .openapi({
                  description:
                    "The email address of the user that you want to register. The email address serves as a uniquer identifier for each user and cannot be changed after it's created.",
                }),
              type: z
                .enum(['SUPER_USER', 'APP_USER'])
                .openapi({
                  description:
                    '<p>The option to indicate the type of user. Use one of the following options to specify this parameter:</p> <ul> <li> <p> <code>SUPER_USER</code> – A user with permission to all the functionality and data in FinSpace.</p> </li> <li> <p> <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p> </li> </ul>',
                }),
              firstName: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'The first name of the user that you want to register.' }),
              lastName: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'The last name of the user that you want to register.' }),
              ApiAccess: z
                .enum(['ENABLED', 'DISABLED'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The option to indicate whether the user can use the <code>GetProgrammaticAccessCredentials</code> API to obtain credentials that can then be used to access other FinSpace Data API operations.</p> <ul> <li> <p> <code>ENABLED</code> – The user has permissions to use the APIs.</p> </li> <li> <p> <code>DISABLED</code> – The user does not have permissions to use any APIs.</p> </li> </ul>',
                }),
              apiAccessPrincipalArn: z
                .string()
                .regex(/^arn:aws[a-z\-]*:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+$/)
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.',
                }),
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Idempotence Token for API operations' }),
            })
            .openapi({ required: ['emailAddress', 'type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUserResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getDatasetsv2DatasetIdRoute = createRoute({
  method: 'get',
  path: '/datasetsv2/{datasetId}',
  description: 'Returns information about a Dataset.',
  operationId: 'GetDataset',
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
      datasetId: z
        .string()
        .regex(/[\s\S]*\S[\s\S]*/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'datasetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a Dataset.',
            schema: {
              type: 'string',
              pattern: '[\\s\\S]*\\S[\\s\\S]*',
              description: '1 - 255 character String',
              minLength: 1,
              maxLength: 255,
            },
          },
          description: '1 - 255 character String',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDatasetResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const putDatasetsv2DatasetIdRoute = createRoute({
  method: 'put',
  path: '/datasetsv2/{datasetId}',
  description: 'Updates a FinSpace Dataset.',
  operationId: 'UpdateDataset',
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
      datasetId: z
        .string()
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'datasetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the Dataset to update.',
            schema: {
              type: 'string',
              description: 'ID for a given Dataset',
              minLength: 1,
              maxLength: 26,
            },
          },
          description: 'ID for a given Dataset',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Idempotence Token for API operations' }),
              datasetTitle: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(255)
                .openapi({ description: 'Title for a given Dataset' }),
              kind: z.enum(['TABULAR', 'NON_TABULAR']).openapi({ description: 'Dataset Kind' }),
              datasetDescription: z
                .string()
                .regex(/[\s\S]*/)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'Description of a dataset' }),
              alias: z
                .string()
                .regex(/^alias\/\S+/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The unique resource identifier for a Dataset.' }),
              schemaDefinition: z
                .object({
                  tabularSchemaConfig: SchemaDefinitionSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The configuration for a schema on a tabular Dataset.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'A union of schema types.', required: [] }),
            })
            .openapi({ required: ['datasetTitle', 'kind'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDatasetResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteDatasetsv2DatasetIdRoute = createRoute({
  method: 'delete',
  path: '/datasetsv2/{datasetId}',
  description: 'Deletes a FinSpace Dataset.',
  operationId: 'DeleteDataset',
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
    query: z.object({
      clientToken: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description: 'A token that ensures idempotency. This token expires in 10 minutes.',
            schema: {
              type: 'string',
              pattern: '.*\\S.*',
              description: 'Idempotence Token for API operations',
              minLength: 1,
              maxLength: 128,
            },
          },
          description: 'Idempotence Token for API operations',
        }),
    }),
    params: z.object({
      datasetId: z
        .string()
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'datasetId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the Dataset to be deleted.',
            schema: {
              type: 'string',
              description: 'ID for a given Dataset',
              minLength: 1,
              maxLength: 26,
            },
          },
          description: 'ID for a given Dataset',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDatasetResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getPermissionGroupPermissionGroupIdRoute = createRoute({
  method: 'get',
  path: '/permission-group/{permissionGroupId}',
  description: 'Retrieves the details of a specific permission group.',
  operationId: 'GetPermissionGroup',
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
      permissionGroupId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'permissionGroupId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the permission group.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 26 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPermissionGroupResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putPermissionGroupPermissionGroupIdRoute = createRoute({
  method: 'put',
  path: '/permission-group/{permissionGroupId}',
  description:
    'Modifies the details of a permission group. You cannot modify a <code>permissionGroupID</code>.',
  operationId: 'UpdatePermissionGroup',
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
      permissionGroupId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'permissionGroupId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the permission group to update.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 26 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The name of the permission group.' }),
              description: z
                .string()
                .regex(/[\s\S]*/)
                .min(1)
                .max(4000)
                .exactOptional()
                .openapi({ description: 'A brief description for the permission group.' }),
              applicationPermissions: z
                .array(ApplicationPermissionSchema)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The permissions that are granted to a specific group for accessing the FinSpace application.</p> <important> <p>When assigning application permissions, be aware that the permission <code>ManageUsersAndGroups</code> allows users to grant themselves or others access to any functionality in their FinSpace environment's application. It should only be granted to trusted users.</p> </important> <ul> <li> <p> <code>CreateDataset</code> – Group members can create new datasets.</p> </li> <li> <p> <code>ManageClusters</code> – Group members can manage Apache Spark clusters from FinSpace notebooks.</p> </li> <li> <p> <code>ManageUsersAndGroups</code> – Group members can manage users and permission groups. This is a privileged permission that allows users to grant themselves or others access to any functionality in the application. It should only be granted to trusted users.</p> </li> <li> <p> <code>ManageAttributeSets</code> – Group members can manage attribute sets.</p> </li> <li> <p> <code>ViewAuditData</code> – Group members can view audit data.</p> </li> <li> <p> <code>AccessNotebooks</code> – Group members will have access to FinSpace notebooks.</p> </li> <li> <p> <code>GetTemporaryCredentials</code> – Group members can get temporary API credentials.</p> </li> </ul>",
                }),
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Idempotence Token for API operations' }),
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
      content: { 'application/json': { schema: UpdatePermissionGroupResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deletePermissionGroupPermissionGroupIdRoute = createRoute({
  method: 'delete',
  path: '/permission-group/{permissionGroupId}',
  description: 'Deletes a permission group. This action is irreversible.',
  operationId: 'DeletePermissionGroup',
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
      permissionGroupId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'permissionGroupId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the permission group that you want to delete.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 26 },
          },
        }),
    }),
    query: z.object({
      clientToken: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description: 'A token that ensures idempotency. This token expires in 10 minutes.',
            schema: {
              type: 'string',
              pattern: '.*\\S.*',
              description: 'Idempotence Token for API operations',
              minLength: 1,
              maxLength: 128,
            },
          },
          description: 'Idempotence Token for API operations',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePermissionGroupResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postUserUserIdDisableRoute = createRoute({
  method: 'post',
  path: '/user/{userId}/disable',
  description: 'Denies access to the FinSpace web application and API for the specified user.',
  operationId: 'DisableUser',
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
      userId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the user account that you want to disable.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 26 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Idempotence Token for API operations' }),
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
      content: { 'application/json': { schema: DisableUserResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postUserUserIdEnableRoute = createRoute({
  method: 'post',
  path: '/user/{userId}/enable',
  description: ' Allows the specified user to access the FinSpace web application and API.',
  operationId: 'EnableUser',
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
      userId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the user account that you want to enable.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 26 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Idempotence Token for API operations' }),
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
      content: { 'application/json': { schema: EnableUserResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getDatasetsDatasetIdChangesetsv2ChangesetIdRoute = createRoute({
  method: 'get',
  path: '/datasets/{datasetId}/changesetsv2/{changesetId}',
  description: 'Get information about a Changeset.',
  operationId: 'GetChangeset',
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
      datasetId: z
        .string()
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'datasetId',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the FinSpace Dataset where the Changeset is created.',
            schema: {
              type: 'string',
              description: 'ID for a given Dataset',
              minLength: 1,
              maxLength: 26,
            },
          },
          description: 'ID for a given Dataset',
        }),
      changesetId: z
        .string()
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'changesetId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the Changeset for which to get data.',
            schema: {
              type: 'string',
              description: 'ID used to identify a Changeset',
              minLength: 1,
              maxLength: 26,
            },
          },
          description: 'ID used to identify a Changeset',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetChangesetResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const putDatasetsDatasetIdChangesetsv2ChangesetIdRoute = createRoute({
  method: 'put',
  path: '/datasets/{datasetId}/changesetsv2/{changesetId}',
  description: 'Updates a FinSpace Changeset.',
  operationId: 'UpdateChangeset',
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
      datasetId: z
        .string()
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'datasetId',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the FinSpace Dataset in which the Changeset is created.',
            schema: {
              type: 'string',
              description: 'ID for a given Dataset',
              minLength: 1,
              maxLength: 26,
            },
          },
          description: 'ID for a given Dataset',
        }),
      changesetId: z
        .string()
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'changesetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the Changeset to update.',
            schema: {
              type: 'string',
              description: 'ID used to identify a Changeset',
              minLength: 1,
              maxLength: 26,
            },
          },
          description: 'ID used to identify a Changeset',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Idempotence Token for API operations' }),
              sourceParams: z
                .record(z.string(), StringMapValueSchema)
                .openapi({ description: 'Source Parameters of a Changeset' }),
              formatParams: z
                .record(z.string(), StringMapValueSchema)
                .openapi({ description: 'Format Parameters of a Changeset' }),
            })
            .openapi({ required: ['sourceParams', 'formatParams'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateChangesetResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getDatasetsDatasetIdDataviewsv2DataviewIdRoute = createRoute({
  method: 'get',
  path: '/datasets/{datasetId}/dataviewsv2/{dataviewId}',
  description: 'Gets information about a Dataview.',
  operationId: 'GetDataView',
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
      dataviewId: z
        .string()
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'dataviewId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the Dataview.',
            schema: { type: 'string', description: 'DataView ID', minLength: 1, maxLength: 26 },
          },
          description: 'DataView ID',
        }),
      datasetId: z
        .string()
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'datasetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the Dataset used in the Dataview.',
            schema: {
              type: 'string',
              description: 'ID for a given Dataset',
              minLength: 1,
              maxLength: 26,
            },
          },
          description: 'ID for a given Dataset',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDataViewResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetailsRoute = createRoute({
  method: 'post',
  path: '/datasets/{datasetId}/dataviewsv2/{dataviewId}/external-access-details',
  description:
    '<p>Returns the credentials to access the external Dataview from an S3 location. To call this API:</p> <ul> <li> <p>You must retrieve the programmatic credentials.</p> </li> <li> <p>You must be a member of a FinSpace user group, where the dataset that you want to access has <code>Read Dataset Data</code> permissions.</p> </li> </ul>',
  operationId: 'GetExternalDataViewAccessDetails',
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
      dataviewId: z
        .string()
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'dataviewId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the Dataview that you want to access.',
            schema: { type: 'string', description: 'DataView ID', minLength: 1, maxLength: 26 },
          },
          description: 'DataView ID',
        }),
      datasetId: z
        .string()
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'datasetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the Dataset.',
            schema: {
              type: 'string',
              description: 'ID for a given Dataset',
              minLength: 1,
              maxLength: 26,
            },
          },
          description: 'ID for a given Dataset',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetExternalDataViewAccessDetailsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getCredentialsProgrammaticEnvironmentIdRoute = createRoute({
  method: 'get',
  path: '/credentials/programmatic#environmentId',
  description: 'Request programmatic credentials to use with FinSpace SDK.',
  operationId: 'GetProgrammaticAccessCredentials',
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
    query: z.object({
      durationInMinutes: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(60).max(720),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'durationInMinutes',
            in: 'query',
            required: false,
            description: 'The time duration in which the credentials remain valid. ',
            schema: { type: 'integer', minimum: 60, maximum: 720 },
          },
        }),
      environmentId: z
        .string()
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'environmentId',
            in: 'query',
            required: true,
            description: 'The FinSpace environment identifier.',
            schema: { type: 'string', minLength: 1, maxLength: 26 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetProgrammaticAccessCredentialsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getUserUserIdRoute = createRoute({
  method: 'get',
  path: '/user/{userId}',
  description: 'Retrieves details for a specific user.',
  operationId: 'GetUser',
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
      userId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the user to get data for.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 26 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetUserResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putUserUserIdRoute = createRoute({
  method: 'put',
  path: '/user/{userId}',
  description:
    'Modifies the details of the specified user account. You cannot update the <code>userId</code> for a user.',
  operationId: 'UpdateUser',
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
      userId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the user account to update.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 26 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              type: z
                .enum(['SUPER_USER', 'APP_USER'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The option to indicate the type of user.</p> <ul> <li> <p> <code>SUPER_USER</code>– A user with permission to all the functionality and data in FinSpace.</p> </li> <li> <p> <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p> </li> </ul>',
                }),
              firstName: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'The first name of the user.' }),
              lastName: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'The last name of the user.' }),
              apiAccess: z
                .enum(['ENABLED', 'DISABLED'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The option to indicate whether the user can use the <code>GetProgrammaticAccessCredentials</code> API to obtain credentials that can then be used to access other FinSpace Data API operations.</p> <ul> <li> <p> <code>ENABLED</code> – The user has permissions to use the APIs.</p> </li> <li> <p> <code>DISABLED</code> – The user does not have permissions to use any APIs.</p> </li> </ul>',
                }),
              apiAccessPrincipalArn: z
                .string()
                .regex(/^arn:aws[a-z\-]*:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+$/)
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.',
                }),
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Idempotence Token for API operations' }),
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
      content: { 'application/json': { schema: UpdateUserResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postWorkingLocationV1Route = createRoute({
  method: 'post',
  path: '/workingLocationV1',
  description:
    'A temporary Amazon S3 location, where you can copy your files from a source location to stage or use as a scratch space in FinSpace notebook.',
  operationId: 'GetWorkingLocation',
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
              locationType: z
                .enum(['INGESTION', 'SAGEMAKER'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specify the type of the working location.</p> <ul> <li> <p> <code>SAGEMAKER</code> – Use the Amazon S3 location as a temporary location to store data content when working with FinSpace Notebooks that run on SageMaker studio.</p> </li> <li> <p> <code>INGESTION</code> – Use the Amazon S3 location as a staging location to copy your data content and then use the location with the Changeset creation operation.</p> </li> </ul>',
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
      content: { 'application/json': { schema: GetWorkingLocationResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getPermissionGroupMaxResultsRoute = createRoute({
  method: 'get',
  path: '/permission-group#maxResults',
  description: 'Lists all available permission groups in FinSpace.',
  operationId: 'ListPermissionGroups',
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
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token that indicates where a results page should begin.',
            schema: { type: 'string' },
          },
        }),
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
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: true,
            description: 'The maximum number of results per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPermissionGroupsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getUserUserIdPermissionGroupsMaxResultsRoute = createRoute({
  method: 'get',
  path: '/user/{userId}/permission-groups#maxResults',
  description: 'Lists all the permission groups that are associated with a specific user account.',
  operationId: 'ListPermissionGroupsByUser',
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
      userId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the user.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 26 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token that indicates where a results page should begin.',
            schema: { type: 'string' },
          },
        }),
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
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: true,
            description: 'The maximum number of results per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPermissionGroupsByUserResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getUserMaxResultsRoute = createRoute({
  method: 'get',
  path: '/user#maxResults',
  description: 'Lists all available user accounts in FinSpace.',
  operationId: 'ListUsers',
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
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token that indicates where a results page should begin.',
            schema: { type: 'string' },
          },
        }),
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
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: true,
            description: 'The maximum number of results per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUsersResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getPermissionGroupPermissionGroupIdUsersMaxResultsRoute = createRoute({
  method: 'get',
  path: '/permission-group/{permissionGroupId}/users#maxResults',
  description: 'Lists details of all the users in a specific permission group.',
  operationId: 'ListUsersByPermissionGroup',
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
      permissionGroupId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'permissionGroupId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the permission group.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 26 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token that indicates where a results page should begin.',
            schema: { type: 'string' },
          },
        }),
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
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: true,
            description: 'The maximum number of results per page.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUsersByPermissionGroupResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postUserUserIdPasswordRoute = createRoute({
  method: 'post',
  path: '/user/{userId}/password',
  description:
    'Resets the password for a specified user ID and generates a temporary one. Only a superuser can reset password for other users. Resetting the password immediately invalidates the previous password associated with the user.',
  operationId: 'ResetUserPassword',
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
      userId: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description:
              'The unique identifier of the user that a temporary password is requested for.',
            schema: { type: 'string', pattern: '.*\\S.*', minLength: 1, maxLength: 26 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Idempotence Token for API operations' }),
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
      content: { 'application/json': { schema: ResetUserPasswordResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})
