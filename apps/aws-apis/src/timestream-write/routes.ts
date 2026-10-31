import { createRoute, z } from '@hono/zod-openapi'

const BatchLoadTaskIdSchema = z
  .string()
  .regex(/[A-Z0-9]+/)
  .min(3)
  .max(32)
  .openapi('BatchLoadTaskId')

const CreateBatchLoadTaskResponseSchema = z
  .object({
    TaskId: BatchLoadTaskIdSchema.and(
      z.any().openapi({ description: 'The ID of the batch load task.' }),
    ),
  })
  .openapi({ required: ['TaskId'] })
  .openapi('CreateBatchLoadTaskResponse')

const ClientRequestTokenSchema = z.string().min(1).max(64).openapi('ClientRequestToken')

const StringValue256Schema = z.string().min(1).max(256).openapi('StringValue256')

const TimeUnitSchema = z
  .enum(['MILLISECONDS', 'SECONDS', 'MICROSECONDS', 'NANOSECONDS'])
  .openapi('TimeUnit')

const SchemaNameSchema = z.string().min(1).openapi('SchemaName')

const DimensionMappingSchema = z
  .object({
    SourceColumn: SchemaNameSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    DestinationColumn: SchemaNameSchema.and(z.any().openapi({ description: ' ' })).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DimensionMapping')

const DimensionMappingsSchema = z.array(DimensionMappingSchema).min(1).openapi('DimensionMappings')

const ScalarMeasureValueTypeSchema = z
  .enum(['DOUBLE', 'BIGINT', 'BOOLEAN', 'VARCHAR', 'TIMESTAMP'])
  .openapi('ScalarMeasureValueType')

const MultiMeasureAttributeMappingSchema = z
  .object({
    SourceColumn: SchemaNameSchema.and(z.any().openapi({ description: '<p/>' })),
    TargetMultiMeasureAttributeName: SchemaNameSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    MeasureValueType: ScalarMeasureValueTypeSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ required: ['SourceColumn'], description: '<p/>' })
  .openapi('MultiMeasureAttributeMapping')

const MultiMeasureAttributeMappingListSchema = z
  .array(MultiMeasureAttributeMappingSchema)
  .min(1)
  .openapi('MultiMeasureAttributeMappingList')

const MultiMeasureMappingsSchema = z
  .object({
    TargetMultiMeasureName: SchemaNameSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    MultiMeasureAttributeMappings: MultiMeasureAttributeMappingListSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ),
  })
  .openapi({ required: ['MultiMeasureAttributeMappings'], description: '<p/>' })
  .openapi('MultiMeasureMappings')

const MeasureValueTypeSchema = z
  .enum(['DOUBLE', 'BIGINT', 'VARCHAR', 'BOOLEAN', 'TIMESTAMP', 'MULTI'])
  .openapi('MeasureValueType')

const MixedMeasureMappingSchema = z
  .object({
    MeasureName: SchemaNameSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    SourceColumn: SchemaNameSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    TargetMeasureName: SchemaNameSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    MeasureValueType: MeasureValueTypeSchema.and(z.any().openapi({ description: '<p/>' })),
    MultiMeasureAttributeMappings: MultiMeasureAttributeMappingListSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ required: ['MeasureValueType'], description: '<p/>' })
  .openapi('MixedMeasureMapping')

const MixedMeasureMappingListSchema = z
  .array(MixedMeasureMappingSchema)
  .min(1)
  .openapi('MixedMeasureMappingList')

const DataModelSchema = z
  .object({
    TimeColumn: StringValue256Schema.and(
      z.any().openapi({ description: 'Source column to be mapped to time.' }),
    ).exactOptional(),
    TimeUnit: TimeUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The granularity of the timestamp unit. It indicates if the time value is in seconds, milliseconds, nanoseconds, or other supported values. Default is <code>MILLISECONDS</code>. ',
        }),
    ).exactOptional(),
    DimensionMappings: DimensionMappingsSchema.and(
      z.any().openapi({ description: 'Source to target mappings for dimensions.' }),
    ),
    MultiMeasureMappings: MultiMeasureMappingsSchema.and(
      z.any().openapi({ description: 'Source to target mappings for multi-measure records.' }),
    ).exactOptional(),
    MixedMeasureMappings: MixedMeasureMappingListSchema.and(
      z.any().openapi({ description: 'Source to target mappings for measures.' }),
    ).exactOptional(),
    MeasureNameColumn: StringValue256Schema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ required: ['DimensionMappings'], description: 'Data model for a batch load task.' })
  .openapi('DataModel')

const S3BucketNameSchema = z
  .string()
  .regex(/[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]/)
  .min(3)
  .max(63)
  .openapi('S3BucketName')

const S3ObjectKeySchema = z
  .string()
  .regex(/[a-zA-Z0-9|!\-_*'\(\)]([a-zA-Z0-9]|[!\-_*'\(\)\/.])+/)
  .min(1)
  .max(1024)
  .openapi('S3ObjectKey')

const DataModelS3ConfigurationSchema = z
  .object({
    BucketName: S3BucketNameSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    ObjectKey: S3ObjectKeySchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DataModelS3Configuration')

const DataModelConfigurationSchema = z
  .object({
    DataModel: DataModelSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    DataModelS3Configuration: DataModelS3ConfigurationSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DataModelConfiguration')

const DataSourceS3ConfigurationSchema = z
  .object({
    BucketName: S3BucketNameSchema.and(
      z.any().openapi({ description: 'The bucket name of the customer S3 bucket.' }),
    ),
    ObjectKeyPrefix: S3ObjectKeySchema.and(z.any().openapi({ description: ' ' })).exactOptional(),
  })
  .openapi({ required: ['BucketName'], description: ' ' })
  .openapi('DataSourceS3Configuration')

const StringValue1Schema = z.string().length(1).openapi('StringValue1')

const BooleanSchema = z.boolean().openapi('Boolean')

const CsvConfigurationSchema = z
  .object({
    ColumnSeparator: StringValue1Schema.and(
      z
        .any()
        .openapi({
          description:
            "Column separator can be one of comma (','), pipe ('|), semicolon (';'), tab('/t'), or blank space (' '). ",
        }),
    ).exactOptional(),
    EscapeChar: StringValue1Schema.and(
      z.any().openapi({ description: 'Escape character can be one of ' }),
    ).exactOptional(),
    QuoteChar: StringValue1Schema.and(
      z.any().openapi({ description: 'Can be single quote (\') or double quote (").' }),
    ).exactOptional(),
    NullValue: StringValue256Schema.and(
      z.any().openapi({ description: "Can be blank space (' ')." }),
    ).exactOptional(),
    TrimWhiteSpace: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies to trim leading and trailing white space.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A delimited data format where the column separator can be a comma and the record separator is a newline character.',
    required: [],
  })
  .openapi('CsvConfiguration')

const BatchLoadDataFormatSchema = z.literal('CSV').openapi('BatchLoadDataFormat')

const DataSourceConfigurationSchema = z
  .object({
    DataSourceS3Configuration: DataSourceS3ConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration of an S3 location for a file which contains data to load.',
        }),
    ),
    CsvConfiguration: CsvConfigurationSchema.exactOptional(),
    DataFormat: BatchLoadDataFormatSchema.and(
      z.any().openapi({ description: 'This is currently CSV.' }),
    ),
  })
  .openapi({
    required: ['DataSourceS3Configuration', 'DataFormat'],
    description: 'Defines configuration details about the data source.',
  })
  .openapi('DataSourceConfiguration')

const S3ObjectKeyPrefixSchema = z
  .string()
  .regex(/[a-zA-Z0-9|!\-_*'\(\)]([a-zA-Z0-9]|[!\-_*'\(\)\/.])+/)
  .min(1)
  .max(928)
  .openapi('S3ObjectKeyPrefix')

const S3EncryptionOptionSchema = z.enum(['SSE_S3', 'SSE_KMS']).openapi('S3EncryptionOption')

const StringValue2048Schema = z.string().min(1).max(2048).openapi('StringValue2048')

const ReportS3ConfigurationSchema = z
  .object({
    BucketName: S3BucketNameSchema.and(z.any().openapi({ description: '<p/>' })),
    ObjectKeyPrefix: S3ObjectKeyPrefixSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    EncryptionOption: S3EncryptionOptionSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    KmsKeyId: StringValue2048Schema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({ required: ['BucketName'], description: '<p/>' })
  .openapi('ReportS3Configuration')

const ReportConfigurationSchema = z
  .object({
    ReportS3Configuration: ReportS3ConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration of an S3 location to write error reports and events for a batch load.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Report configuration for a batch load task. This contains details about where error reports are stored.',
    required: [],
  })
  .openapi('ReportConfiguration')

const ResourceCreateAPINameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .openapi('ResourceCreateAPIName')

const RecordVersionSchema = z.int().openapi('RecordVersion')

const CreateBatchLoadTaskRequestSchema = z
  .object({
    ClientToken: ClientRequestTokenSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    DataModelConfiguration: DataModelConfigurationSchema.exactOptional(),
    DataSourceConfiguration: DataSourceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Defines configuration details about the data source for a batch load task.',
        }),
    ),
    ReportConfiguration: ReportConfigurationSchema,
    TargetDatabaseName: ResourceCreateAPINameSchema.and(
      z.any().openapi({ description: 'Target Timestream database for a batch load task.' }),
    ),
    TargetTableName: ResourceCreateAPINameSchema.and(
      z.any().openapi({ description: 'Target Timestream table for a batch load task.' }),
    ),
    RecordVersion: RecordVersionSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'DataSourceConfiguration',
      'ReportConfiguration',
      'TargetDatabaseName',
      'TargetTableName',
    ],
    title: 'CreateBatchLoadTaskRequest',
  })
  .openapi('CreateBatchLoadTaskRequest')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const InvalidEndpointExceptionSchema = z.any().openapi('InvalidEndpointException')

const StringSchema = z.string().openapi('String')

const ResourceNameSchema = z.string().openapi('ResourceName')

const LongSchema = z.int().openapi('Long')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const DatabaseSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name that uniquely identifies this database.',
        }),
    ).exactOptional(),
    DatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Timestream database.' }),
    ).exactOptional(),
    TableCount: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The total number of tables found within a Timestream database. ',
        }),
    ).exactOptional(),
    KmsKeyId: StringValue2048Schema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the KMS key used to encrypt the data stored in the database.',
        }),
    ).exactOptional(),
    CreationTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time when the database was created, calculated from the Unix epoch time.',
        }),
    ).exactOptional(),
    LastUpdatedTime: DateSchema.and(
      z.any().openapi({ description: ' The last time that this database was updated. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A top-level container for a table. Databases and tables are the fundamental management concepts in Amazon Timestream. All tables in a database are encrypted with the same KMS key.',
    required: [],
  })
  .openapi('Database')

const CreateDatabaseResponseSchema = z
  .object({
    Database: DatabaseSchema.and(
      z.any().openapi({ description: 'The newly created Timestream database.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDatabaseResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z.any().openapi({ description: ' The key of the tag. Tag keys are case sensitive. ' }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description: ' The value of the tag. Tag values are case-sensitive and can be null. ',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      ' A tag is a label that you assign to a Timestream database and/or table. Each tag consists of a key and an optional value, both of which you define. With tags, you can categorize databases and/or tables, for example, by purpose, owner, or environment. ',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const CreateDatabaseRequestSchema = z
  .object({
    DatabaseName: ResourceCreateAPINameSchema.and(
      z.any().openapi({ description: 'The name of the Timestream database.' }),
    ),
    KmsKeyId: StringValue2048Schema.and(
      z
        .any()
        .openapi({
          description:
            'The KMS key for the database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: ' A list of key-value pairs to label the table. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['DatabaseName'], title: 'CreateDatabaseRequest' })
  .openapi('CreateDatabaseRequest')

const TableStatusSchema = z.enum(['ACTIVE', 'DELETING', 'RESTORING']).openapi('TableStatus')

const MemoryStoreRetentionPeriodInHoursSchema = z
  .int()
  .min(1)
  .max(8766)
  .openapi('MemoryStoreRetentionPeriodInHours')

const MagneticStoreRetentionPeriodInDaysSchema = z
  .int()
  .min(1)
  .max(73000)
  .openapi('MagneticStoreRetentionPeriodInDays')

const RetentionPropertiesSchema = z
  .object({
    MemoryStoreRetentionPeriodInHours: MemoryStoreRetentionPeriodInHoursSchema.and(
      z
        .any()
        .openapi({
          description: 'The duration for which data must be stored in the memory store. ',
        }),
    ),
    MagneticStoreRetentionPeriodInDays: MagneticStoreRetentionPeriodInDaysSchema.and(
      z
        .any()
        .openapi({
          description: 'The duration for which data must be stored in the magnetic store. ',
        }),
    ),
  })
  .openapi({
    required: ['MemoryStoreRetentionPeriodInHours', 'MagneticStoreRetentionPeriodInDays'],
    description:
      'Retention properties contain the duration for which your time-series data must be stored in the magnetic store and the memory store. ',
  })
  .openapi('RetentionProperties')

const S3ConfigurationSchema = z
  .object({
    BucketName: S3BucketNameSchema.and(
      z.any().openapi({ description: 'The bucket name of the customer S3 bucket.' }),
    ).exactOptional(),
    ObjectKeyPrefix: S3ObjectKeyPrefixSchema.and(
      z.any().openapi({ description: 'The object key preview for the customer S3 location.' }),
    ).exactOptional(),
    EncryptionOption: S3EncryptionOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption option for the customer S3 location. Options are S3 server-side encryption with an S3 managed key or Amazon Web Services managed key.',
        }),
    ).exactOptional(),
    KmsKeyId: StringValue2048Schema.and(
      z
        .any()
        .openapi({
          description:
            'The KMS key ID for the customer S3 location when encrypting with an Amazon Web Services managed key.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The configuration that specifies an S3 location.', required: [] })
  .openapi('S3Configuration')

const MagneticStoreRejectedDataLocationSchema = z
  .object({
    S3Configuration: S3ConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration of an S3 location to write error reports for records rejected, asynchronously, during magnetic store writes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The location to write error reports for records rejected, asynchronously, during magnetic store writes.',
    required: [],
  })
  .openapi('MagneticStoreRejectedDataLocation')

const MagneticStoreWritePropertiesSchema = z
  .object({
    EnableMagneticStoreWrites: BooleanSchema.and(
      z.any().openapi({ description: 'A flag to enable magnetic store writes.' }),
    ),
    MagneticStoreRejectedDataLocation: MagneticStoreRejectedDataLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location to write error reports for records rejected asynchronously during magnetic store writes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['EnableMagneticStoreWrites'],
    description: 'The set of properties on a table for configuring magnetic store writes.',
  })
  .openapi('MagneticStoreWriteProperties')

const TableSchema = z
  .object({
    Arn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name that uniquely identifies this table.' }),
    ).exactOptional(),
    TableName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Timestream table.' }),
    ).exactOptional(),
    DatabaseName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the Timestream database that contains this table.' }),
    ).exactOptional(),
    TableStatus: TableStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current state of the table:</p> <ul> <li> <p> <code>DELETING</code> - The table is being deleted.</p> </li> <li> <p> <code>ACTIVE</code> - The table is ready for use.</p> </li> </ul>',
        }),
    ).exactOptional(),
    RetentionProperties: RetentionPropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'The retention duration for the memory store and magnetic store.',
        }),
    ).exactOptional(),
    CreationTime: DateSchema.and(
      z.any().openapi({ description: 'The time when the Timestream table was created. ' }),
    ).exactOptional(),
    LastUpdatedTime: DateSchema.and(
      z.any().openapi({ description: 'The time when the Timestream table was last updated.' }),
    ).exactOptional(),
    MagneticStoreWriteProperties: MagneticStoreWritePropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains properties to set on the table when enabling magnetic store writes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a database table in Timestream. Tables contain one or more related time series. You can modify the retention duration of the memory store and the magnetic store for a table. ',
    required: [],
  })
  .openapi('Table')

const CreateTableResponseSchema = z
  .object({
    Table: TableSchema.and(
      z.any().openapi({ description: 'The newly created Timestream table.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateTableResponse')

const CreateTableRequestSchema = z
  .object({
    DatabaseName: ResourceCreateAPINameSchema.and(
      z.any().openapi({ description: 'The name of the Timestream database.' }),
    ),
    TableName: ResourceCreateAPINameSchema.and(
      z.any().openapi({ description: 'The name of the Timestream table.' }),
    ),
    RetentionProperties: RetentionPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The duration for which your time-series data must be stored in the memory store and the magnetic store.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: ' A list of key-value pairs to label the table. ' }),
    ).exactOptional(),
    MagneticStoreWriteProperties: MagneticStoreWritePropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains properties to set on the table when enabling magnetic store writes.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DatabaseName', 'TableName'], title: 'CreateTableRequest' })
  .openapi('CreateTableRequest')

const DeleteDatabaseRequestSchema = z
  .object({
    DatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Timestream database to be deleted.' }),
    ),
  })
  .openapi({ required: ['DatabaseName'], title: 'DeleteDatabaseRequest' })
  .openapi('DeleteDatabaseRequest')

const DeleteTableRequestSchema = z
  .object({
    DatabaseName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the database where the Timestream database is to be deleted.',
        }),
    ),
    TableName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Timestream table to be deleted.' }),
    ),
  })
  .openapi({ required: ['DatabaseName', 'TableName'], title: 'DeleteTableRequest' })
  .openapi('DeleteTableRequest')

const BatchLoadProgressReportSchema = z
  .object({
    RecordsProcessed: LongSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    RecordsIngested: LongSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    ParseFailures: LongSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    RecordIngestionFailures: LongSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    FileFailures: LongSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    BytesMetered: LongSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({ description: 'Details about the progress of a batch load task.', required: [] })
  .openapi('BatchLoadProgressReport')

const BatchLoadStatusSchema = z
  .enum(['CREATED', 'IN_PROGRESS', 'FAILED', 'SUCCEEDED', 'PROGRESS_STOPPED', 'PENDING_RESUME'])
  .openapi('BatchLoadStatus')

const BatchLoadTaskDescriptionSchema = z
  .object({
    TaskId: BatchLoadTaskIdSchema.and(
      z.any().openapi({ description: 'The ID of the batch load task.' }),
    ).exactOptional(),
    ErrorMessage: StringValue2048Schema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    DataSourceConfiguration: DataSourceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration details about the data source for a batch load task.',
        }),
    ).exactOptional(),
    ProgressReport: BatchLoadProgressReportSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    ReportConfiguration: ReportConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Report configuration for a batch load task. This contains details about where error reports are stored.',
        }),
    ).exactOptional(),
    DataModelConfiguration: DataModelConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Data model configuration for a batch load task. This contains details about where a data model for a batch load task is stored.',
        }),
    ).exactOptional(),
    TargetDatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    TargetTableName: ResourceNameSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    TaskStatus: BatchLoadStatusSchema.and(
      z.any().openapi({ description: 'Status of the batch load task.' }),
    ).exactOptional(),
    RecordVersion: RecordVersionSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    CreationTime: DateSchema.and(
      z.any().openapi({ description: 'The time when the Timestream batch load task was created.' }),
    ).exactOptional(),
    LastUpdatedTime: DateSchema.and(
      z
        .any()
        .openapi({ description: 'The time when the Timestream batch load task was last updated.' }),
    ).exactOptional(),
    ResumableUntil: DateSchema.and(z.any().openapi({ description: ' ' })).exactOptional(),
  })
  .openapi({ description: 'Details about a batch load task.', required: [] })
  .openapi('BatchLoadTaskDescription')

const DescribeBatchLoadTaskResponseSchema = z
  .object({
    BatchLoadTaskDescription: BatchLoadTaskDescriptionSchema.and(
      z.any().openapi({ description: 'Description of the batch load task.' }),
    ),
  })
  .openapi({ required: ['BatchLoadTaskDescription'] })
  .openapi('DescribeBatchLoadTaskResponse')

const DescribeBatchLoadTaskRequestSchema = z
  .object({
    TaskId: BatchLoadTaskIdSchema.and(
      z.any().openapi({ description: 'The ID of the batch load task.' }),
    ),
  })
  .openapi({ required: ['TaskId'], title: 'DescribeBatchLoadTaskRequest' })
  .openapi('DescribeBatchLoadTaskRequest')

const DescribeDatabaseResponseSchema = z
  .object({
    Database: DatabaseSchema.and(
      z.any().openapi({ description: 'The name of the Timestream table.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDatabaseResponse')

const DescribeDatabaseRequestSchema = z
  .object({
    DatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Timestream database.' }),
    ),
  })
  .openapi({ required: ['DatabaseName'], title: 'DescribeDatabaseRequest' })
  .openapi('DescribeDatabaseRequest')

const EndpointSchema = z
  .object({
    Address: StringSchema.and(z.any().openapi({ description: 'An endpoint address.' })),
    CachePeriodInMinutes: LongSchema.and(
      z.any().openapi({ description: 'The TTL for the endpoint, in minutes.' }),
    ),
  })
  .openapi({
    required: ['Address', 'CachePeriodInMinutes'],
    description:
      'Represents an available endpoint against which to make API calls against, as well as the TTL for that endpoint.',
  })
  .openapi('Endpoint')

const EndpointsSchema = z.array(EndpointSchema).openapi('Endpoints')

const DescribeEndpointsResponseSchema = z
  .object({
    Endpoints: EndpointsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An <code>Endpoints</code> object is returned when a <code>DescribeEndpoints</code> request is made.',
        }),
    ),
  })
  .openapi({ required: ['Endpoints'] })
  .openapi('DescribeEndpointsResponse')

const DescribeEndpointsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeEndpointsRequest' })
  .openapi('DescribeEndpointsRequest')

const DescribeTableResponseSchema = z
  .object({
    Table: TableSchema.and(
      z.any().openapi({ description: 'The Timestream table.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeTableResponse')

const DescribeTableRequestSchema = z
  .object({
    DatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Timestream database.' }),
    ),
    TableName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Timestream table.' }),
    ),
  })
  .openapi({ required: ['DatabaseName', 'TableName'], title: 'DescribeTableRequest' })
  .openapi('DescribeTableRequest')

const BatchLoadTaskSchema = z
  .object({
    TaskId: BatchLoadTaskIdSchema.and(
      z.any().openapi({ description: 'The ID of the batch load task.' }),
    ).exactOptional(),
    TaskStatus: BatchLoadStatusSchema.and(
      z.any().openapi({ description: 'Status of the batch load task.' }),
    ).exactOptional(),
    DatabaseName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Database name for the database into which a batch load task loads data.',
        }),
    ).exactOptional(),
    TableName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Table name for the table into which a batch load task loads data.',
        }),
    ).exactOptional(),
    CreationTime: DateSchema.and(
      z.any().openapi({ description: 'The time when the Timestream batch load task was created.' }),
    ).exactOptional(),
    LastUpdatedTime: DateSchema.and(
      z
        .any()
        .openapi({ description: 'The time when the Timestream batch load task was last updated.' }),
    ).exactOptional(),
    ResumableUntil: DateSchema.and(z.any().openapi({ description: ' ' })).exactOptional(),
  })
  .openapi({ description: 'Details about a batch load task.', required: [] })
  .openapi('BatchLoadTask')

const BatchLoadTaskListSchema = z.array(BatchLoadTaskSchema).openapi('BatchLoadTaskList')

const ListBatchLoadTasksResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token to specify where to start paginating. Provide the next ListBatchLoadTasksRequest.',
        }),
    ).exactOptional(),
    BatchLoadTasks: BatchLoadTaskListSchema.and(
      z.any().openapi({ description: 'A list of batch load task details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBatchLoadTasksResponse')

const PageLimitSchema = z.int().min(1).max(100).openapi('PageLimit')

const ListBatchLoadTasksRequestSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
        }),
    ).exactOptional(),
    MaxResults: PageLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.',
        }),
    ).exactOptional(),
    TaskStatus: BatchLoadStatusSchema.and(
      z.any().openapi({ description: 'Status of the batch load task.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListBatchLoadTasksRequest', required: [] })
  .openapi('ListBatchLoadTasksRequest')

const DatabaseListSchema = z.array(DatabaseSchema).openapi('DatabaseList')

const ListDatabasesResponseSchema = z
  .object({
    Databases: DatabaseListSchema.and(
      z.any().openapi({ description: 'A list of database names.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token. This parameter is returned when the response is truncated.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDatabasesResponse')

const PaginationLimitSchema = z.int().min(1).max(20).openapi('PaginationLimit')

const ListDatabasesRequestSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.',
        }),
    ).exactOptional(),
    MaxResults: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDatabasesRequest', required: [] })
  .openapi('ListDatabasesRequest')

const TableListSchema = z.array(TableSchema).openapi('TableList')

const ListTablesResponseSchema = z
  .object({
    Tables: TableListSchema.and(
      z.any().openapi({ description: 'A list of tables.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTablesResponse')

const ListTablesRequestSchema = z
  .object({
    DatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Timestream database.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.',
        }),
    ).exactOptional(),
    MaxResults: PaginationLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTablesRequest', required: [] })
  .openapi('ListTablesRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: ' The tags currently associated with the Timestream resource. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const AmazonResourceNameSchema = z.string().min(1).max(1011).openapi('AmazonResourceName')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Timestream resource with tags to be listed. This value is an Amazon Resource Name (ARN). ',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ResumeBatchLoadTaskResponseSchema = z.object({}).openapi('ResumeBatchLoadTaskResponse')

const ResumeBatchLoadTaskRequestSchema = z
  .object({
    TaskId: BatchLoadTaskIdSchema.and(
      z.any().openapi({ description: 'The ID of the batch load task to resume.' }),
    ),
  })
  .openapi({ required: ['TaskId'], title: 'ResumeBatchLoadTaskRequest' })
  .openapi('ResumeBatchLoadTaskRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Identifies the Timestream resource to which tags should be added. This value is an Amazon Resource Name (ARN). ',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: ' The tags to be assigned to the Timestream resource. ' }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Timestream resource that the tags will be removed from. This value is an Amazon Resource Name (ARN). ',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of tags keys. Existing tags of the resource whose keys are members of this list will be removed from the Timestream resource. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateDatabaseResponseSchema = z
  .object({ Database: DatabaseSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateDatabaseResponse')

const UpdateDatabaseRequestSchema = z
  .object({
    DatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: ' The name of the database. ' }),
    ),
    KmsKeyId: StringValue2048Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The identifier of the new KMS key (<code>KmsKeyId</code>) to be used to encrypt the data stored in the database. If the <code>KmsKeyId</code> currently registered with the database is the same as the <code>KmsKeyId</code> in the request, there will not be any update. </p> <p>You can specify the <code>KmsKeyId</code> using any of the following:</p> <ul> <li> <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Key ARN: <code>arn:aws:kms:us-east-1:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Alias name: <code>alias/ExampleAlias</code> </p> </li> <li> <p>Alias ARN: <code>arn:aws:kms:us-east-1:111122223333:alias/ExampleAlias</code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['DatabaseName', 'KmsKeyId'], title: 'UpdateDatabaseRequest' })
  .openapi('UpdateDatabaseRequest')

const UpdateTableResponseSchema = z
  .object({
    Table: TableSchema.and(
      z.any().openapi({ description: 'The updated Timestream table.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateTableResponse')

const UpdateTableRequestSchema = z
  .object({
    DatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Timestream database.' }),
    ),
    TableName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Timestream table.' }),
    ),
    RetentionProperties: RetentionPropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'The retention duration of the memory store and the magnetic store.',
        }),
    ).exactOptional(),
    MagneticStoreWriteProperties: MagneticStoreWritePropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains properties to set on the table when enabling magnetic store writes.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DatabaseName', 'TableName'], title: 'UpdateTableRequest' })
  .openapi('UpdateTableRequest')

const IntegerSchema = z.int().openapi('Integer')

const RecordsIngestedSchema = z
  .object({
    Total: IntegerSchema.and(
      z.any().openapi({ description: 'Total count of successfully ingested records.' }),
    ).exactOptional(),
    MemoryStore: IntegerSchema.and(
      z.any().openapi({ description: 'Count of records ingested into the memory store.' }),
    ).exactOptional(),
    MagneticStore: IntegerSchema.and(
      z.any().openapi({ description: 'Count of records ingested into the magnetic store.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information on the records ingested by this request.', required: [] })
  .openapi('RecordsIngested')

const WriteRecordsResponseSchema = z
  .object({
    RecordsIngested: RecordsIngestedSchema.and(
      z.any().openapi({ description: 'Information on the records ingested by this request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WriteRecordsResponse')

const SchemaValueSchema = z.string().openapi('SchemaValue')

const DimensionValueTypeSchema = z.literal('VARCHAR').openapi('DimensionValueType')

const DimensionSchema = z
  .object({
    Name: SchemaNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Dimension represents the metadata attributes of the time series. For example, the name and Availability Zone of an EC2 instance or the name of the manufacturer of a wind turbine are dimensions. </p> <p>For constraints on dimension names, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html#limits.naming">Naming Constraints</a>.</p>',
        }),
    ),
    Value: SchemaValueSchema.and(z.any().openapi({ description: 'The value of the dimension.' })),
    DimensionValueType: DimensionValueTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The data type of the dimension for the time-series data point.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Value'],
    description:
      'Represents the metadata attributes of the time series. For example, the name and Availability Zone of an EC2 instance or the name of the manufacturer of a wind turbine are dimensions. ',
  })
  .openapi('Dimension')

const DimensionsSchema = z.array(DimensionSchema).max(128).openapi('Dimensions')

const MeasureValueSchema = z
  .object({
    Name: SchemaNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The name of the MeasureValue. </p> <p> For constraints on MeasureValue names, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html#limits.naming"> Naming Constraints</a> in the Amazon Timestream Developer Guide.</p>',
        }),
    ),
    Value: StringValue2048Schema.and(
      z.any().openapi({ description: ' The value for the MeasureValue. ' }),
    ),
    Type: MeasureValueTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the data type of the MeasureValue for the time-series data point.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Value', 'Type'],
    description:
      '<p> Represents the data attribute of the time series. For example, the CPU utilization of an EC2 instance or the RPM of a wind turbine are measures. MeasureValue has both name and value. </p> <p> MeasureValue is only allowed for type <code>MULTI</code>. Using <code>MULTI</code> type, you can pass multiple data attributes associated with the same time series in a single record </p>',
  })
  .openapi('MeasureValue')

const MeasureValuesSchema = z.array(MeasureValueSchema).openapi('MeasureValues')

const RecordSchema = z
  .object({
    Dimensions: DimensionsSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the list of dimensions for time-series data points.' }),
    ).exactOptional(),
    MeasureName: SchemaNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Measure represents the data attribute of the time series. For example, the CPU utilization of an EC2 instance or the RPM of a wind turbine are measures. ',
        }),
    ).exactOptional(),
    MeasureValue: StringValue2048Schema.and(
      z
        .any()
        .openapi({ description: ' Contains the measure value for the time-series data point. ' }),
    ).exactOptional(),
    MeasureValueType: MeasureValueTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Contains the data type of the measure value for the time-series data point. Default type is <code>DOUBLE</code>. ',
        }),
    ).exactOptional(),
    Time: StringValue256Schema.and(
      z
        .any()
        .openapi({
          description:
            ' Contains the time at which the measure value for the data point was collected. The time value plus the unit provides the time elapsed since the epoch. For example, if the time value is <code>12345</code> and the unit is <code>ms</code>, then <code>12345 ms</code> have elapsed since the epoch. ',
        }),
    ).exactOptional(),
    TimeUnit: TimeUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The granularity of the timestamp unit. It indicates if the time value is in seconds, milliseconds, nanoseconds, or other supported values. Default is <code>MILLISECONDS</code>. ',
        }),
    ).exactOptional(),
    Version: RecordVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>64-bit attribute used for record updates. Write requests for duplicate data with a higher version number will update the existing measure value and version. In cases where the measure value is the same, <code>Version</code> will still be updated. Default value is <code>1</code>.</p> <note> <p> <code>Version</code> must be <code>1</code> or greater, or you will receive a <code>ValidationException</code> error.</p> </note>',
        }),
    ).exactOptional(),
    MeasureValues: MeasureValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Contains the list of MeasureValue for time-series data points. </p> <p> This is only allowed for type <code>MULTI</code>. For scalar values, use <code>MeasureValue</code> attribute of the record directly. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents a time-series data point being written into Timestream. Each record contains an array of dimensions. Dimensions represent the metadata attributes of a time-series data point, such as the instance name or Availability Zone of an EC2 instance. A record also contains the measure name, which is the name of the measure being collected (for example, the CPU utilization of an EC2 instance). Additionally, a record contains the measure value and the value type, which is the data type of the measure value. Also, the record contains the timestamp of when the measure was collected and the timestamp unit, which represents the granularity of the timestamp. </p> <p> Records have a <code>Version</code> field, which is a 64-bit <code>long</code> that you can use for updating data points. Writes of a duplicate record with the same dimension, timestamp, and measure name but different measure value will only succeed if the <code>Version</code> attribute of the record in the write request is higher than that of the existing record. Timestream defaults to a <code>Version</code> of <code>1</code> for records without the <code>Version</code> field. </p>',
    required: [],
  })
  .openapi('Record')

const RecordsSchema = z.array(RecordSchema).min(1).max(100).openapi('Records')

const WriteRecordsRequestSchema = z
  .object({
    DatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Timestream database.' }),
    ),
    TableName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Timestream table.' }),
    ),
    CommonAttributes: RecordSchema.and(
      z
        .any()
        .openapi({
          description:
            'A record that contains the common measure, dimension, time, and version attributes shared across all the records in the request. The measure and dimension attributes specified will be merged with the measure and dimension attributes in the records object when the data is written into Timestream. Dimensions may not overlap, or a <code>ValidationException</code> will be thrown. In other words, a record must contain dimensions with unique names. ',
        }),
    ).exactOptional(),
    Records: RecordsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of records that contain the unique measure, dimension, time, and version attributes for each time-series data point. ',
        }),
    ),
  })
  .openapi({ required: ['DatabaseName', 'TableName', 'Records'], title: 'WriteRecordsRequest' })
  .openapi('WriteRecordsRequest')

const RejectedRecordsExceptionSchema = z.any().openapi('RejectedRecordsException')

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

export const postXAmzTargetTimestream20181101CreateBatchLoadTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask',
  description:
    'Creates a new Timestream batch load task. A batch load task processes data from a CSV source in an S3 location and writes to a Timestream table. A mapping from source to target is defined in a batch load task. Errors and events are written to a report at an S3 location. For the report, if the KMS key is not specified, the batch load task will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-batch-load.html">code sample</a>.',
  operationId: 'CreateBatchLoadTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Timestream_20181101.CreateBatchLoadTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.CreateBatchLoadTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateBatchLoadTaskRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBatchLoadTaskResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    487: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101CreateDatabaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.CreateDatabase',
  description:
    'Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-db.html">code sample</a>. ',
  operationId: 'CreateDatabase',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Timestream_20181101.CreateDatabase')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.CreateDatabase'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDatabaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDatabaseResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    487: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101CreateTableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.CreateTable',
  description:
    'Adds a new table to an existing database in your account. In an Amazon Web Services account, table names must be at least unique within each Region if they are in the same database. You might have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-table.html">code sample</a> for details. ',
  operationId: 'CreateTable',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Timestream_20181101.CreateTable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.CreateTable'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateTableRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTableResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
    487: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    488: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101DeleteDatabaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.DeleteDatabase',
  description:
    '<p>Deletes a given Timestream database. <i>This is an irreversible operation. After a database is deleted, the time-series data from its tables cannot be recovered.</i> </p> <note> <p>All tables in the database must be deleted first, or a ValidationException error will be thrown. </p> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-db.html">code sample</a> for details.</p>',
  operationId: 'DeleteDatabase',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Timestream_20181101.DeleteDatabase')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.DeleteDatabase'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDatabaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101DeleteTableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.DeleteTable',
  description:
    '<p>Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time-series data stored in the table cannot be recovered. </p> <note> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-table.html">code sample</a> for details.</p>',
  operationId: 'DeleteTable',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Timestream_20181101.DeleteTable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.DeleteTable'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteTableRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101DescribeBatchLoadTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask',
  description:
    'Returns information about the batch load task, including configurations, mappings, progress, and other details. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-batch-load.html">code sample</a> for details.',
  operationId: 'DescribeBatchLoadTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Timestream_20181101.DescribeBatchLoadTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.DescribeBatchLoadTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeBatchLoadTaskRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBatchLoadTaskResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101DescribeDatabaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.DescribeDatabase',
  description:
    'Returns information about the database, including the database name, time that the database was created, and the total number of tables found within the database. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-db.html">code sample</a> for details.',
  operationId: 'DescribeDatabase',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Timestream_20181101.DescribeDatabase')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.DescribeDatabase'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDatabaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDatabaseResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101DescribeEndpointsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.DescribeEndpoints',
  description:
    '<p>Returns a list of available endpoints to make Timestream API calls against. This API operation is available through both the Write and Query APIs.</p> <p>Because the Timestream SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, <i>we don\'t recommend that you use this API operation unless</i>:</p> <ul> <li> <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream</a> </p> </li> <li> <p>Your application uses a programming language that does not yet have SDK support</p> </li> <li> <p>You require better control over the client-side implementation</p> </li> </ul> <p>For detailed information on how and when to use and implement DescribeEndpoints, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>',
  operationId: 'DescribeEndpoints',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Timestream_20181101.DescribeEndpoints')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.DescribeEndpoints'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEndpointsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEndpointsResponseSchema } },
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
  },
})

export const postXAmzTargetTimestream20181101DescribeTableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.DescribeTable',
  description:
    'Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-table.html">code sample</a> for details. ',
  operationId: 'DescribeTable',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Timestream_20181101.DescribeTable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.DescribeTable'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTableRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTableResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101ListBatchLoadTasksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks',
  description:
    'Provides a list of batch load tasks, along with the name, status, when the task is resumable until, and other details. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-batch-load-tasks.html">code sample</a> for details.',
  operationId: 'ListBatchLoadTasks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Timestream_20181101.ListBatchLoadTasks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.ListBatchLoadTasks'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListBatchLoadTasksRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBatchLoadTasksResponseSchema } },
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
    484: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101ListDatabasesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.ListDatabases',
  description:
    'Returns a list of your Timestream databases. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-db.html">code sample</a> for details. ',
  operationId: 'ListDatabases',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Timestream_20181101.ListDatabases')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.ListDatabases'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListDatabasesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatabasesResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101ListTablesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.ListTables',
  description:
    'Provides a list of tables, along with the name, status, and retention properties of each table. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-table.html">code sample</a> for details. ',
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
      'X-Amz-Target': z
        .literal('Timestream_20181101.ListTables')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.ListTables'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListTablesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTablesResponseSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.ListTagsForResource',
  description: ' Lists all tags on a Timestream resource. ',
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
      'X-Amz-Target': z
        .literal('Timestream_20181101.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
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
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101ResumeBatchLoadTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask',
  description: ' ',
  operationId: 'ResumeBatchLoadTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Timestream_20181101.ResumeBatchLoadTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.ResumeBatchLoadTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResumeBatchLoadTaskRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResumeBatchLoadTaskResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.TagResource',
  description:
    ' Associates a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. ',
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
      'X-Amz-Target': z
        .literal('Timestream_20181101.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
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
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.UntagResource',
  description: ' Removes the association of tags from a Timestream resource. ',
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
      'X-Amz-Target': z
        .literal('Timestream_20181101.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101UpdateDatabaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.UpdateDatabase',
  description:
    '<p> Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (<code>KmsKeyId</code>). If there are any concurrent <code>UpdateDatabase</code> requests, first writer wins. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-db.html">code sample</a> for details.</p>',
  operationId: 'UpdateDatabase',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Timestream_20181101.UpdateDatabase')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.UpdateDatabase'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDatabaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDatabaseResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    486: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101UpdateTableRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.UpdateTable',
  description:
    '<p>Modifies the retention duration of the memory store and magnetic store for your Timestream table. Note that the change in retention duration takes effect immediately. For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-table.html">code sample</a> for details.</p>',
  operationId: 'UpdateTable',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Timestream_20181101.UpdateTable')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.UpdateTable'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateTableRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTableResponseSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101WriteRecordsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.WriteRecords',
  description:
    '<p>Enables you to write your time-series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. </p> <p>Timestream supports eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.write.html">code sample</a> for details.</p> <p> <b>Upserts</b> </p> <p>You can use the <code>Version</code> parameter in a <code>WriteRecords</code> request to update data points. Timestream tracks a version number with each record. <code>Version</code> defaults to <code>1</code> when it\'s not specified for the record in the request. Timestream updates an existing record’s measure value along with its <code>Version</code> when it receives a write request with a higher <code>Version</code> number for that record. When it receives an update request where the measure value is the same as that of the existing record, Timestream still updates <code>Version</code>, if it is greater than the existing value of <code>Version</code>. You can update a data point as many times as desired, as long as the value of <code>Version</code> continuously increases. </p> <p> For example, suppose you write a new record without indicating <code>Version</code> in the request. Timestream stores this record, and set <code>Version</code> to <code>1</code>. Now, suppose you try to update this record with a <code>WriteRecords</code> request of the same record with a different measure value but, like before, do not provide <code>Version</code>. In this case, Timestream will reject this update with a <code>RejectedRecordsException</code> since the updated record’s version is not greater than the existing value of Version. </p> <p>However, if you were to resend the update request with <code>Version</code> set to <code>2</code>, Timestream would then succeed in updating the record’s value, and the <code>Version</code> would be set to <code>2</code>. Next, suppose you sent a <code>WriteRecords</code> request with this same record and an identical measure value, but with <code>Version</code> set to <code>3</code>. In this case, Timestream would only update <code>Version</code> to <code>3</code>. Any further updates would need to send a version number greater than <code>3</code>, or the update requests would receive a <code>RejectedRecordsException</code>. </p>',
  operationId: 'WriteRecords',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Timestream_20181101.WriteRecords')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.WriteRecords'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: WriteRecordsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WriteRecordsResponseSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'RejectedRecordsException',
      content: { 'application/json': { schema: RejectedRecordsExceptionSchema } },
    },
    486: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})
