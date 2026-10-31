import { createRoute, z } from '@hono/zod-openapi'

type StringType = string

type ScalarTypeType =
  | 'VARCHAR'
  | 'BOOLEAN'
  | 'BIGINT'
  | 'DOUBLE'
  | 'TIMESTAMP'
  | 'DATE'
  | 'TIME'
  | 'INTERVAL_DAY_TO_SECOND'
  | 'INTERVAL_YEAR_TO_MONTH'
  | 'UNKNOWN'
  | 'INTEGER'

const ScalarTypeSchema: z.ZodType<ScalarTypeType> = z
  .enum([
    'VARCHAR',
    'BOOLEAN',
    'BIGINT',
    'DOUBLE',
    'TIMESTAMP',
    'DATE',
    'TIME',
    'INTERVAL_DAY_TO_SECOND',
    'INTERVAL_YEAR_TO_MONTH',
    'UNKNOWN',
    'INTEGER',
  ])
  .openapi('ScalarType')

const ColumnInfoSchema: z.ZodType<ColumnInfoType> = z
  .lazy(() =>
    z
      .object({
        Name: StringSchema.and(
          z
            .any()
            .openapi({
              description:
                ' The name of the result set column. The name of the result set is available for columns of all data types except for arrays. ',
            }),
        ).exactOptional(),
        Type: TypeSchema.and(
          z
            .any()
            .openapi({
              description:
                'The data type of the result set column. The data type can be a scalar or complex. Scalar data types are integers, strings, doubles, Booleans, and others. Complex data types are types such as arrays, rows, and others. ',
            }),
        ),
      })
      .openapi({
        required: ['Type'],
        description:
          ' Contains the metadata for query results such as the column names, data types, and other attributes. ',
      }),
  )
  .openapi('ColumnInfo')

const ColumnInfoListSchema: z.ZodType<ColumnInfoListType> = z
  .lazy(() => z.array(ColumnInfoSchema))
  .openapi('ColumnInfoList')

type TypeType = {
  ScalarType?: z.infer<typeof ScalarTypeSchema> & { [key: string]: unknown }
  ArrayColumnInfo?: z.infer<typeof ColumnInfoSchema> & { [key: string]: unknown }
  TimeSeriesMeasureValueColumnInfo?: z.infer<typeof ColumnInfoSchema> & { [key: string]: unknown }
  RowColumnInfo?: z.infer<typeof ColumnInfoListSchema> & { [key: string]: unknown }
}

const StringSchema: z.ZodType<StringType> = z.string().openapi('String')

const TypeSchema: z.ZodType<TypeType> = z
  .lazy(() =>
    z
      .object({
        ScalarType: ScalarTypeSchema.and(
          z
            .any()
            .openapi({
              description:
                'Indicates if the column is of type string, integer, Boolean, double, timestamp, date, time. ',
            }),
        ).exactOptional(),
        ArrayColumnInfo: ColumnInfoSchema.and(
          z.any().openapi({ description: 'Indicates if the column is an array.' }),
        ).exactOptional(),
        TimeSeriesMeasureValueColumnInfo: ColumnInfoSchema.and(
          z.any().openapi({ description: 'Indicates if the column is a timeseries data type.' }),
        ).exactOptional(),
        RowColumnInfo: ColumnInfoListSchema.and(
          z.any().openapi({ description: 'Indicates if the column is a row.' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Contains the data type of a column in a query result set. The data type can be scalar or complex. The supported scalar data types are integers, Boolean, string, double, timestamp, date, time, and intervals. The supported complex data types are arrays, rows, and timeseries.',
        required: [],
      }),
  )
  .openapi('Type')

type ColumnInfoType = {
  Name?: z.infer<typeof StringSchema> & { [key: string]: unknown }
  Type: z.infer<typeof TypeSchema> & { [key: string]: unknown }
}

type ColumnInfoListType = z.infer<typeof ColumnInfoSchema>[]

type ScalarValueType = string

const TimeSeriesDataPointSchema: z.ZodType<TimeSeriesDataPointType> = z
  .lazy(() =>
    z
      .object({
        Time: TimestampSchema.and(
          z.any().openapi({ description: 'The timestamp when the measure value was collected.' }),
        ),
        Value: DatumSchema.and(
          z.any().openapi({ description: 'The measure value for the data point.' }),
        ),
      })
      .openapi({
        required: ['Time', 'Value'],
        description:
          'The timeseries data type represents the values of a measure over time. A time series is an array of rows of timestamps and measure values, with rows sorted in ascending order of time. A TimeSeriesDataPoint is a single data point in the time series. It represents a tuple of (time, measure value) in a time series. ',
      }),
  )
  .openapi('TimeSeriesDataPoint')

type TimeSeriesDataPointListType = z.infer<typeof TimeSeriesDataPointSchema>[]

const DatumSchema: z.ZodType<DatumType> = z
  .lazy(() =>
    z
      .object({
        ScalarValue: ScalarValueSchema.and(
          z
            .any()
            .openapi({
              description:
                ' Indicates if the data point is a scalar value such as integer, string, double, or Boolean. ',
            }),
        ).exactOptional(),
        TimeSeriesValue: TimeSeriesDataPointListSchema.and(
          z
            .any()
            .openapi({ description: ' Indicates if the data point is a timeseries data type. ' }),
        ).exactOptional(),
        ArrayValue: DatumListSchema.and(
          z.any().openapi({ description: ' Indicates if the data point is an array. ' }),
        ).exactOptional(),
        RowValue: RowSchema.and(
          z.any().openapi({ description: ' Indicates if the data point is a row. ' }),
        ).exactOptional(),
        NullValue: NullableBooleanSchema.and(
          z.any().openapi({ description: ' Indicates if the data point is null. ' }),
        ).exactOptional(),
      })
      .openapi({
        description: ' Datum represents a single data point in a query result. ',
        required: [],
      }),
  )
  .openapi('Datum')

type DatumListType = z.infer<typeof DatumSchema>[]

const DatumListSchema: z.ZodType<DatumListType> = z
  .lazy(() => z.array(DatumSchema))
  .openapi('DatumList')

type RowType = { Data: z.infer<typeof DatumListSchema> & { [key: string]: unknown } }

type NullableBooleanType = boolean

const ScalarValueSchema: z.ZodType<ScalarValueType> = z.string().openapi('ScalarValue')

const TimeSeriesDataPointListSchema: z.ZodType<TimeSeriesDataPointListType> = z
  .lazy(() => z.array(TimeSeriesDataPointSchema))
  .openapi('TimeSeriesDataPointList')

const RowSchema: z.ZodType<RowType> = z
  .lazy(() =>
    z
      .object({
        Data: DatumListSchema.and(
          z
            .any()
            .openapi({ description: 'List of data points in a single row of the result set.' }),
        ),
      })
      .openapi({
        required: ['Data'],
        description: 'Represents a single row in the query results.',
      }),
  )
  .openapi('Row')

const NullableBooleanSchema: z.ZodType<NullableBooleanType> = z.boolean().openapi('NullableBoolean')

type DatumType = {
  ScalarValue?: z.infer<typeof ScalarValueSchema> & { [key: string]: unknown }
  TimeSeriesValue?: z.infer<typeof TimeSeriesDataPointListSchema> & { [key: string]: unknown }
  ArrayValue?: z.infer<typeof DatumListSchema> & { [key: string]: unknown }
  RowValue?: z.infer<typeof RowSchema> & { [key: string]: unknown }
  NullValue?: z.infer<typeof NullableBooleanSchema> & { [key: string]: unknown }
}

type TimestampType = string

const TimestampSchema: z.ZodType<TimestampType> = z.string().openapi('Timestamp')

type TimeSeriesDataPointType = {
  Time: z.infer<typeof TimestampSchema> & { [key: string]: unknown }
  Value: z.infer<typeof DatumSchema> & { [key: string]: unknown }
}

const CancelQueryResponseSchema = z
  .object({
    CancellationMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A <code>CancellationMessage</code> is returned when a <code>CancelQuery</code> request for the query specified by <code>QueryId</code> has already been issued. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CancelQueryResponse')

const QueryIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9]+/)
  .min(1)
  .max(64)
  .openapi('QueryId')

const CancelQueryRequestSchema = z
  .object({
    QueryId: QueryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the query that needs to be cancelled. <code>QueryID</code> is returned as part of the query result. ',
        }),
    ),
  })
  .openapi({ required: ['QueryId'], title: 'CancelQueryRequest' })
  .openapi('CancelQueryRequest')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const InvalidEndpointExceptionSchema = z.any().openapi('InvalidEndpointException')

const AmazonResourceNameSchema = z.string().min(1).max(2048).openapi('AmazonResourceName')

const CreateScheduledQueryResponseSchema = z
  .object({
    Arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'ARN for the created scheduled query.' }),
    ),
  })
  .openapi({ required: ['Arn'] })
  .openapi('CreateScheduledQueryResponse')

const ScheduledQueryNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(64)
  .openapi('ScheduledQueryName')

const QueryStringSchema = z.string().min(1).max(262144).openapi('QueryString')

const ScheduleExpressionSchema = z.string().min(1).max(256).openapi('ScheduleExpression')

const ScheduleConfigurationSchema = z
  .object({
    ScheduleExpression: ScheduleExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'An expression that denotes when to trigger the scheduled query run. This can be a cron expression or a rate expression. ',
        }),
    ),
  })
  .openapi({
    required: ['ScheduleExpression'],
    description: 'Configuration of the schedule of the query.',
  })
  .openapi('ScheduleConfiguration')

const SnsConfigurationSchema = z
  .object({
    TopicArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'SNS topic ARN that the scheduled query status notifications will be sent to.',
        }),
    ),
  })
  .openapi({
    required: ['TopicArn'],
    description: 'Details on SNS that are required to send the notification.',
  })
  .openapi('SnsConfiguration')

const NotificationConfigurationSchema = z
  .object({
    SnsConfiguration: SnsConfigurationSchema.and(
      z.any().openapi({ description: 'Details on SNS configuration. ' }),
    ),
  })
  .openapi({
    required: ['SnsConfiguration'],
    description:
      'Notification configuration for a scheduled query. A notification is sent by Timestream when a scheduled query is created, its state is updated or when it is deleted. ',
  })
  .openapi('NotificationConfiguration')

const ResourceNameSchema = z.string().openapi('ResourceName')

const SchemaNameSchema = z.string().openapi('SchemaName')

const DimensionValueTypeSchema = z.literal('VARCHAR').openapi('DimensionValueType')

const DimensionMappingSchema = z
  .object({
    Name: SchemaNameSchema.and(z.any().openapi({ description: 'Column name from query result.' })),
    DimensionValueType: DimensionValueTypeSchema.and(
      z.any().openapi({ description: 'Type for the dimension. ' }),
    ),
  })
  .openapi({
    required: ['Name', 'DimensionValueType'],
    description:
      'This type is used to map column(s) from the query result to a dimension in the destination table.',
  })
  .openapi('DimensionMapping')

const DimensionMappingListSchema = z.array(DimensionMappingSchema).openapi('DimensionMappingList')

const ScalarMeasureValueTypeSchema = z
  .enum(['BIGINT', 'BOOLEAN', 'DOUBLE', 'VARCHAR', 'TIMESTAMP'])
  .openapi('ScalarMeasureValueType')

const MultiMeasureAttributeMappingSchema = z
  .object({
    SourceColumn: SchemaNameSchema.and(
      z
        .any()
        .openapi({ description: 'Source column from where the attribute value is to be read.' }),
    ),
    TargetMultiMeasureAttributeName: SchemaNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Custom name to be used for attribute name in derived table. If not provided, source column name would be used.',
        }),
    ).exactOptional(),
    MeasureValueType: ScalarMeasureValueTypeSchema.and(
      z.any().openapi({ description: 'Type of the attribute to be read from the source column.' }),
    ),
  })
  .openapi({
    required: ['SourceColumn', 'MeasureValueType'],
    description: 'Attribute mapping for MULTI value measures.',
  })
  .openapi('MultiMeasureAttributeMapping')

const MultiMeasureAttributeMappingListSchema = z
  .array(MultiMeasureAttributeMappingSchema)
  .min(1)
  .openapi('MultiMeasureAttributeMappingList')

const MultiMeasureMappingsSchema = z
  .object({
    TargetMultiMeasureName: SchemaNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the target multi-measure name in the derived table. This input is required when measureNameColumn is not provided. If MeasureNameColumn is provided, then value from that column will be used as multi-measure name.',
        }),
    ).exactOptional(),
    MultiMeasureAttributeMappings: MultiMeasureAttributeMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes.',
        }),
    ),
  })
  .openapi({
    required: ['MultiMeasureAttributeMappings'],
    description:
      'Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided. MultiMeasureMappings can be used to ingest data as multi measures in the derived table.',
  })
  .openapi('MultiMeasureMappings')

const MeasureValueTypeSchema = z
  .enum(['BIGINT', 'BOOLEAN', 'DOUBLE', 'VARCHAR', 'MULTI'])
  .openapi('MeasureValueType')

const MixedMeasureMappingSchema = z
  .object({
    MeasureName: SchemaNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Refers to the value of measure_name in a result row. This field is required if MeasureNameColumn is provided.',
        }),
    ).exactOptional(),
    SourceColumn: SchemaNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'This field refers to the source column from which measure-value is to be read for result materialization.',
        }),
    ).exactOptional(),
    TargetMeasureName: SchemaNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Target measure name to be used. If not provided, the target measure name by default would be measure-name if provided, or sourceColumn otherwise. ',
        }),
    ).exactOptional(),
    MeasureValueType: MeasureValueTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Type of the value that is to be read from sourceColumn. If the mapping is for MULTI, use MeasureValueType.MULTI.',
        }),
    ),
    MultiMeasureAttributeMappings: MultiMeasureAttributeMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required when measureValueType is MULTI. Attribute mappings for MULTI value measures.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MeasureValueType'],
    description:
      'MixedMeasureMappings are mappings that can be used to ingest data into a mixture of narrow and multi measures in the derived table.',
  })
  .openapi('MixedMeasureMapping')

const MixedMeasureMappingListSchema = z
  .array(MixedMeasureMappingSchema)
  .min(1)
  .openapi('MixedMeasureMappingList')

const TimestreamConfigurationSchema = z
  .object({
    DatabaseName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Name of Timestream database to which the query result will be written.',
        }),
    ),
    TableName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of Timestream table that the query result will be written to. The table should be within the same database that is provided in Timestream configuration.',
        }),
    ),
    TimeColumn: SchemaNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Column from query result that should be used as the time column in destination table. Column type for this should be TIMESTAMP.',
        }),
    ),
    DimensionMappings: DimensionMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This is to allow mapping column(s) from the query result to the dimension in the destination table. ',
        }),
    ),
    MultiMeasureMappings: MultiMeasureMappingsSchema.and(
      z.any().openapi({ description: 'Multi-measure mappings.' }),
    ).exactOptional(),
    MixedMeasureMappings: MixedMeasureMappingListSchema.and(
      z.any().openapi({ description: 'Specifies how to map measures to multi-measure records.' }),
    ).exactOptional(),
    MeasureNameColumn: SchemaNameSchema.and(
      z.any().openapi({ description: 'Name of the measure column.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DatabaseName', 'TableName', 'TimeColumn', 'DimensionMappings'],
    description:
      ' Configuration to write data into Timestream database and table. This configuration allows the user to map the query result select columns into the destination table columns. ',
  })
  .openapi('TimestreamConfiguration')

const TargetConfigurationSchema = z
  .object({
    TimestreamConfiguration: TimestreamConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration needed to write data into the Timestream database and table.',
        }),
    ),
  })
  .openapi({
    required: ['TimestreamConfiguration'],
    description: 'Configuration used for writing the output of a query.',
  })
  .openapi('TargetConfiguration')

const ClientTokenSchema = z.string().min(32).max(128).openapi('ClientToken')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z.any().openapi({ description: 'The key of the tag. Tag keys are case sensitive. ' }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The value of the tag. Tag values are case sensitive and can be null. ',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'A tag is a label that you assign to a Timestream database and/or table. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize databases and/or tables, for example, by purpose, owner, or environment. ',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const StringValue2048Schema = z.string().min(1).max(2048).openapi('StringValue2048')

const S3BucketNameSchema = z
  .string()
  .regex(/[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]/)
  .min(3)
  .max(63)
  .openapi('S3BucketName')

const S3ObjectKeyPrefixSchema = z
  .string()
  .regex(/[a-zA-Z0-9|!\-_*'\(\)]([a-zA-Z0-9]|[!\-_*'\(\)\/.])+/)
  .min(1)
  .max(896)
  .openapi('S3ObjectKeyPrefix')

const S3EncryptionOptionSchema = z.enum(['SSE_S3', 'SSE_KMS']).openapi('S3EncryptionOption')

const S3ConfigurationSchema = z
  .object({
    BucketName: S3BucketNameSchema.and(
      z
        .any()
        .openapi({
          description: ' Name of the S3 bucket under which error reports will be created.',
        }),
    ),
    ObjectKeyPrefix: S3ObjectKeyPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Prefix for the error report key. Timestream by default adds the following prefix to the error report path. ',
        }),
    ).exactOptional(),
    EncryptionOption: S3EncryptionOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Encryption at rest options for the error reports. If no encryption option is specified, Timestream will choose SSE_S3 as default. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BucketName'],
    description: 'Details on S3 location for error reports that result from running a query. ',
  })
  .openapi('S3Configuration')

const ErrorReportConfigurationSchema = z
  .object({
    S3Configuration: S3ConfigurationSchema.and(
      z.any().openapi({ description: 'The S3 configuration for the error reports.' }),
    ),
  })
  .openapi({
    required: ['S3Configuration'],
    description: 'Configuration required for error reporting.',
  })
  .openapi('ErrorReportConfiguration')

const CreateScheduledQueryRequestSchema = z
  .object({
    Name: ScheduledQueryNameSchema.and(
      z.any().openapi({ description: 'Name of the scheduled query.' }),
    ),
    QueryString: QueryStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The query string to run. Parameter names can be specified in the query string <code>@</code> character followed by an identifier. The named Parameter <code>@scheduled_runtime</code> is reserved and can be used in the query to get the time at which the query is scheduled to run.</p> <p>The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of <code>@scheduled_runtime</code> paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the <code>@scheduled_runtime</code> parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query.</p>',
        }),
    ),
    ScheduleConfiguration: ScheduleConfigurationSchema.and(
      z.any().openapi({ description: 'The schedule configuration for the query.' }),
    ),
    NotificationConfiguration: NotificationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it. ',
        }),
    ),
    TargetConfiguration: TargetConfigurationSchema.and(
      z.any().openapi({ description: 'Configuration used for writing the result of a query.' }),
    ).exactOptional(),
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result. Making multiple identical CreateScheduledQuery requests has the same effect as making a single request. </p> <ul> <li> <p> If CreateScheduledQuery is called without a <code>ClientToken</code>, the Query SDK generates a <code>ClientToken</code> on your behalf.</p> </li> <li> <p> After 8 hours, any request with the same <code>ClientToken</code> is treated as a new request. </p> </li> </ul>',
        }),
    ).exactOptional(),
    ScheduledQueryExecutionRoleArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN for the IAM role that Timestream will assume when running the scheduled query. ',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'A list of key-value pairs to label the scheduled query.' }),
    ).exactOptional(),
    KmsKeyId: StringValue2048Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with <i>alias/</i> </p> <p>If ErrorReportConfiguration uses <code>SSE_KMS</code> as encryption type, the same KmsKeyId is used to encrypt the error report at rest.</p>',
        }),
    ).exactOptional(),
    ErrorReportConfiguration: ErrorReportConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results. ',
        }),
    ),
  })
  .openapi({
    required: [
      'Name',
      'QueryString',
      'ScheduleConfiguration',
      'NotificationConfiguration',
      'ScheduledQueryExecutionRoleArn',
      'ErrorReportConfiguration',
    ],
    title: 'CreateScheduledQueryRequest',
  })
  .openapi('CreateScheduledQueryRequest')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const DeleteScheduledQueryRequestSchema = z
  .object({
    ScheduledQueryArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the scheduled query. ' }),
    ),
  })
  .openapi({ required: ['ScheduledQueryArn'], title: 'DeleteScheduledQueryRequest' })
  .openapi('DeleteScheduledQueryRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const LongSchema = z.int().openapi('Long')

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

const TimeSchema = z.iso.datetime({ offset: true }).openapi('Time')

const ScheduledQueryStateSchema = z.enum(['ENABLED', 'DISABLED']).openapi('ScheduledQueryState')

const ScheduledQueryRunStatusSchema = z
  .enum([
    'AUTO_TRIGGER_SUCCESS',
    'AUTO_TRIGGER_FAILURE',
    'MANUAL_TRIGGER_SUCCESS',
    'MANUAL_TRIGGER_FAILURE',
  ])
  .openapi('ScheduledQueryRunStatus')

const ExecutionStatsSchema = z
  .object({
    ExecutionTimeInMillis: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Total time, measured in milliseconds, that was needed for the scheduled query run to complete.',
        }),
    ).exactOptional(),
    DataWrites: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'Data writes metered for records ingested in a single scheduled query run.',
        }),
    ).exactOptional(),
    BytesMetered: LongSchema.and(
      z.any().openapi({ description: 'Bytes metered for a single scheduled query run.' }),
    ).exactOptional(),
    RecordsIngested: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of records ingested for a single scheduled query run. ',
        }),
    ).exactOptional(),
    QueryResultRows: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Number of rows present in the output from running a query before ingestion to destination data source.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Statistics for a single scheduled query run.', required: [] })
  .openapi('ExecutionStats')

const S3ObjectKeySchema = z.string().openapi('S3ObjectKey')

const S3ReportLocationSchema = z
  .object({
    BucketName: S3BucketNameSchema.and(
      z.any().openapi({ description: ' S3 bucket name. ' }),
    ).exactOptional(),
    ObjectKey: S3ObjectKeySchema.and(z.any().openapi({ description: 'S3 key. ' })).exactOptional(),
  })
  .openapi({ description: ' S3 report location for the scheduled query run.', required: [] })
  .openapi('S3ReportLocation')

const ErrorReportLocationSchema = z
  .object({
    S3ReportLocation: S3ReportLocationSchema.and(
      z.any().openapi({ description: 'The S3 location where error reports are written.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This contains the location of the error report for a single scheduled query call. ',
    required: [],
  })
  .openapi('ErrorReportLocation')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const ScheduledQueryRunSummarySchema = z
  .object({
    InvocationTime: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'InvocationTime for this run. This is the time at which the query is scheduled to run. Parameter <code>@scheduled_runtime</code> can be used in the query to get the value. ',
        }),
    ).exactOptional(),
    TriggerTime: TimeSchema.and(
      z.any().openapi({ description: 'The actual time when the query was run.' }),
    ).exactOptional(),
    RunStatus: ScheduledQueryRunStatusSchema.and(
      z.any().openapi({ description: 'The status of a scheduled query run.' }),
    ).exactOptional(),
    ExecutionStats: ExecutionStatsSchema.and(
      z.any().openapi({ description: 'Runtime statistics for a scheduled run.' }),
    ).exactOptional(),
    ErrorReportLocation: ErrorReportLocationSchema.and(
      z.any().openapi({ description: 'S3 location for error report.' }),
    ).exactOptional(),
    FailureReason: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Error message for the scheduled query in case of failure. You might have to look at the error report to get more detailed error reasons. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Run summary for the scheduled query', required: [] })
  .openapi('ScheduledQueryRunSummary')

const ScheduledQueryRunSummaryListSchema = z
  .array(ScheduledQueryRunSummarySchema)
  .openapi('ScheduledQueryRunSummaryList')

const ScheduledQueryDescriptionSchema = z
  .object({
    Arn: AmazonResourceNameSchema.and(z.any().openapi({ description: 'Scheduled query ARN.' })),
    Name: ScheduledQueryNameSchema.and(
      z.any().openapi({ description: 'Name of the scheduled query.' }),
    ),
    QueryString: QueryStringSchema.and(z.any().openapi({ description: 'The query to be run.' })),
    CreationTime: TimeSchema.and(
      z.any().openapi({ description: 'Creation time of the scheduled query.' }),
    ).exactOptional(),
    State: ScheduledQueryStateSchema.and(
      z.any().openapi({ description: 'State of the scheduled query. ' }),
    ),
    PreviousInvocationTime: TimeSchema.and(
      z.any().openapi({ description: 'Last time the query was run.' }),
    ).exactOptional(),
    NextInvocationTime: TimeSchema.and(
      z.any().openapi({ description: 'The next time the scheduled query is scheduled to run.' }),
    ).exactOptional(),
    ScheduleConfiguration: ScheduleConfigurationSchema.and(
      z.any().openapi({ description: 'Schedule configuration.' }),
    ),
    NotificationConfiguration: NotificationConfigurationSchema.and(
      z.any().openapi({ description: 'Notification configuration.' }),
    ),
    TargetConfiguration: TargetConfigurationSchema.and(
      z.any().openapi({ description: 'Scheduled query target store configuration.' }),
    ).exactOptional(),
    ScheduledQueryExecutionRoleArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'IAM role that Timestream uses to run the schedule query.' }),
    ).exactOptional(),
    KmsKeyId: StringValue2048Schema.and(
      z
        .any()
        .openapi({
          description: 'A customer provided KMS key used to encrypt the scheduled query resource.',
        }),
    ).exactOptional(),
    ErrorReportConfiguration: ErrorReportConfigurationSchema.and(
      z.any().openapi({ description: 'Error-reporting configuration for the scheduled query.' }),
    ).exactOptional(),
    LastRunSummary: ScheduledQueryRunSummarySchema.and(
      z.any().openapi({ description: 'Runtime summary for the last scheduled query run. ' }),
    ).exactOptional(),
    RecentlyFailedRuns: ScheduledQueryRunSummaryListSchema.and(
      z
        .any()
        .openapi({ description: 'Runtime summary for the last five failed scheduled query runs.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'Arn',
      'Name',
      'QueryString',
      'State',
      'ScheduleConfiguration',
      'NotificationConfiguration',
    ],
    description: 'Structure that describes scheduled query.',
  })
  .openapi('ScheduledQueryDescription')

const DescribeScheduledQueryResponseSchema = z
  .object({
    ScheduledQuery: ScheduledQueryDescriptionSchema.and(
      z.any().openapi({ description: 'The scheduled query.' }),
    ),
  })
  .openapi({ required: ['ScheduledQuery'] })
  .openapi('DescribeScheduledQueryResponse')

const DescribeScheduledQueryRequestSchema = z
  .object({
    ScheduledQueryArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the scheduled query.' }),
    ),
  })
  .openapi({ required: ['ScheduledQueryArn'], title: 'DescribeScheduledQueryRequest' })
  .openapi('DescribeScheduledQueryRequest')

const ExecuteScheduledQueryRequestSchema = z
  .object({
    ScheduledQueryArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'ARN of the scheduled query.' }),
    ),
    InvocationTime: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp in UTC. Query will be run as if it was invoked at this timestamp. ',
        }),
    ),
    ClientToken: ClientTokenSchema.and(
      z.any().openapi({ description: 'Not used. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ScheduledQueryArn', 'InvocationTime'],
    title: 'ExecuteScheduledQueryRequest',
  })
  .openapi('ExecuteScheduledQueryRequest')

const TimestreamDestinationSchema = z
  .object({
    DatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: 'Timestream database name. ' }),
    ).exactOptional(),
    TableName: ResourceNameSchema.and(
      z.any().openapi({ description: 'Timestream table name. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Destination for scheduled query.', required: [] })
  .openapi('TimestreamDestination')

const TargetDestinationSchema = z
  .object({
    TimestreamDestination: TimestreamDestinationSchema.and(
      z
        .any()
        .openapi({ description: 'Query result destination details for Timestream data source.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Destination details to write data for a target data source. Current supported data source is Timestream.',
    required: [],
  })
  .openapi('TargetDestination')

const ScheduledQuerySchema = z
  .object({
    Arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name.' }),
    ),
    Name: ScheduledQueryNameSchema.and(
      z.any().openapi({ description: 'The name of the scheduled query.' }),
    ),
    CreationTime: TimeSchema.and(
      z.any().openapi({ description: 'The creation time of the scheduled query.' }),
    ).exactOptional(),
    State: ScheduledQueryStateSchema.and(
      z.any().openapi({ description: 'State of scheduled query. ' }),
    ),
    PreviousInvocationTime: TimeSchema.and(
      z.any().openapi({ description: 'The last time the scheduled query was run.' }),
    ).exactOptional(),
    NextInvocationTime: TimeSchema.and(
      z.any().openapi({ description: 'The next time the scheduled query is to be run.' }),
    ).exactOptional(),
    ErrorReportConfiguration: ErrorReportConfigurationSchema.and(
      z.any().openapi({ description: 'Configuration for scheduled query error reporting.' }),
    ).exactOptional(),
    TargetDestination: TargetDestinationSchema.and(
      z
        .any()
        .openapi({
          description: 'Target data source where final scheduled query result will be written.',
        }),
    ).exactOptional(),
    LastRunStatus: ScheduledQueryRunStatusSchema.and(
      z.any().openapi({ description: 'Status of the last scheduled query run.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Arn', 'Name', 'State'], description: 'Scheduled Query' })
  .openapi('ScheduledQuery')

const ScheduledQueryListSchema = z.array(ScheduledQuerySchema).openapi('ScheduledQueryList')

const NextScheduledQueriesResultsTokenSchema = z
  .string()
  .openapi('NextScheduledQueriesResultsToken')

const ListScheduledQueriesResponseSchema = z
  .object({
    ScheduledQueries: ScheduledQueryListSchema.and(
      z.any().openapi({ description: 'A list of scheduled queries.' }),
    ),
    NextToken: NextScheduledQueriesResultsTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ScheduledQueries'] })
  .openapi('ListScheduledQueriesResponse')

const MaxScheduledQueriesResultsSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('MaxScheduledQueriesResults')

const ListScheduledQueriesRequestSchema = z
  .object({
    MaxResults: MaxScheduledQueriesResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to return in the output. If the total number of items available is more than the value specified, a <code>NextToken</code> is provided in the output. To resume pagination, provide the <code>NextToken</code> value as the argument to the subsequent call to <code>ListScheduledQueriesRequest</code>.',
        }),
    ).exactOptional(),
    NextToken: NextScheduledQueriesResultsTokenSchema.and(
      z.any().openapi({ description: ' A pagination token to resume pagination.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListScheduledQueriesRequest', required: [] })
  .openapi('ListScheduledQueriesRequest')

const NextTagsForResourceResultsTokenSchema = z.string().openapi('NextTagsForResourceResultsToken')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'The tags currently associated with the Timestream resource. ' }),
    ),
    NextToken: NextTagsForResourceResultsTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token to resume pagination with a subsequent call to <code>ListTagsForResourceResponse</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Tags'] })
  .openapi('ListTagsForResourceResponse')

const MaxTagsForResourceResultSchema = z.int().min(1).max(200).openapi('MaxTagsForResourceResult')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Timestream resource with tags to be listed. This value is an Amazon Resource Name (ARN).',
        }),
    ),
    MaxResults: MaxTagsForResourceResultSchema.and(
      z.any().openapi({ description: 'The maximum number of tags to return.' }),
    ).exactOptional(),
    NextToken: NextTagsForResourceResultsTokenSchema.and(
      z.any().openapi({ description: 'A pagination token to resume pagination.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const SelectColumnSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'Name of the column.' })).exactOptional(),
    Type: TypeSchema.exactOptional(),
    DatabaseName: ResourceNameSchema.and(
      z.any().openapi({ description: ' Database that has this column.' }),
    ).exactOptional(),
    TableName: ResourceNameSchema.and(
      z.any().openapi({ description: 'Table within the database that has this column. ' }),
    ).exactOptional(),
    Aliased: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'True, if the column name was aliased by the query. False otherwise.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details of the column that is returned by the query. ', required: [] })
  .openapi('SelectColumn')

const SelectColumnListSchema = z.array(SelectColumnSchema).openapi('SelectColumnList')

const ParameterMappingSchema = z
  .object({
    Name: StringSchema.and(z.any().openapi({ description: 'Parameter name.' })),
    Type: TypeSchema,
  })
  .openapi({ required: ['Name', 'Type'], description: 'Mapping for named parameters.' })
  .openapi('ParameterMapping')

const ParameterMappingListSchema = z.array(ParameterMappingSchema).openapi('ParameterMappingList')

const PrepareQueryResponseSchema = z
  .object({
    QueryString: QueryStringSchema.and(
      z.any().openapi({ description: 'The query string that you want prepare.' }),
    ),
    Columns: SelectColumnListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of SELECT clause columns of the submitted query string. ',
        }),
    ),
    Parameters: ParameterMappingListSchema.and(
      z.any().openapi({ description: 'A list of parameters used in the submitted query string. ' }),
    ),
  })
  .openapi({ required: ['QueryString', 'Columns', 'Parameters'] })
  .openapi('PrepareQueryResponse')

const PrepareQueryRequestSchema = z
  .object({
    QueryString: QueryStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Timestream query string that you want to use as a prepared statement. Parameter names can be specified in the query string <code>@</code> character followed by an identifier. ',
        }),
    ),
    ValidateOnly: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'By setting this value to <code>true</code>, Timestream will only validate that the query string is a valid Timestream query, and not store the prepared query for later use.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['QueryString'], title: 'PrepareQueryRequest' })
  .openapi('PrepareQueryRequest')

const PaginationTokenSchema = z.string().min(1).max(2048).openapi('PaginationToken')

const RowListSchema = z.array(RowSchema).openapi('RowList')

const DoubleSchema = z.float64().openapi('Double')

const QueryStatusSchema = z
  .object({
    ProgressPercentage: DoubleSchema.and(
      z.any().openapi({ description: 'The progress of the query, expressed as a percentage.' }),
    ).exactOptional(),
    CumulativeBytesScanned: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of data scanned by the query in bytes. This is a cumulative sum and represents the total amount of bytes scanned since the query was started. ',
        }),
    ).exactOptional(),
    CumulativeBytesMetered: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of data scanned by the query in bytes that you will be charged for. This is a cumulative sum and represents the total amount of data that you will be charged for since the query was started. The charge is applied only once and is either applied when the query completes running or when the query is cancelled. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the status of the query, including progress and bytes scanned.',
    required: [],
  })
  .openapi('QueryStatus')

const QueryResponseSchema = z
  .object({
    QueryId: QueryIdSchema.and(
      z.any().openapi({ description: ' A unique ID for the given query. ' }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A pagination token that can be used again on a <code>Query</code> call to get the next set of results. ',
        }),
    ).exactOptional(),
    Rows: RowListSchema.and(
      z.any().openapi({ description: ' The result set rows returned by the query. ' }),
    ),
    ColumnInfo: ColumnInfoListSchema.and(
      z.any().openapi({ description: ' The column data types of the returned result set. ' }),
    ),
    QueryStatus: QueryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the status of the query, including progress and bytes scanned.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['QueryId', 'Rows', 'ColumnInfo'] })
  .openapi('QueryResponse')

const ClientRequestTokenSchema = z.string().min(32).max(128).openapi('ClientRequestToken')

const MaxQueryResultsSchema = z.int().min(1).max(1000).openapi('MaxQueryResults')

const QueryRequestSchema = z
  .object({
    QueryString: QueryStringSchema.and(
      z.any().openapi({ description: ' The query to be run by Timestream. ' }),
    ),
    ClientToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Unique, case-sensitive string of up to 64 ASCII characters specified when a <code>Query</code> request is made. Providing a <code>ClientToken</code> makes the call to <code>Query</code> <i>idempotent</i>. This means that running the same query repeatedly will produce the same result. In other words, making multiple identical <code>Query</code> requests has the same effect as making a single request. When using <code>ClientToken</code> in a query, note the following: </p> <ul> <li> <p> If the Query API is instantiated without a <code>ClientToken</code>, the Query SDK generates a <code>ClientToken</code> on your behalf.</p> </li> <li> <p>If the <code>Query</code> invocation only contains the <code>ClientToken</code> but does not include a <code>NextToken</code>, that invocation of <code>Query</code> is assumed to be a new query run.</p> </li> <li> <p>If the invocation contains <code>NextToken</code>, that particular invocation is assumed to be a subsequent invocation of a prior call to the Query API, and a result set is returned.</p> </li> <li> <p> After 4 hours, any request with the same <code>ClientToken</code> is treated as a new request. </p> </li> </ul>',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> A pagination token used to return a set of results. When the <code>Query</code> API is invoked using <code>NextToken</code>, that particular invocation is assumed to be a subsequent invocation of a prior call to <code>Query</code>, and a result set is returned. However, if the <code>Query</code> invocation only contains the <code>ClientToken</code>, that invocation of <code>Query</code> is assumed to be a new query run. </p> <p>Note the following when using NextToken in a query:</p> <ul> <li> <p>A pagination token can be used for up to five <code>Query</code> invocations, OR for a duration of up to 1 hour – whichever comes first.</p> </li> <li> <p>Using the same <code>NextToken</code> will return the same set of records. To keep paginating through the result set, you must to use the most recent <code>nextToken</code>.</p> </li> <li> <p>Suppose a <code>Query</code> invocation returns two <code>NextToken</code> values, <code>TokenA</code> and <code>TokenB</code>. If <code>TokenB</code> is used in a subsequent <code>Query</code> invocation, then <code>TokenA</code> is invalidated and cannot be reused.</p> </li> <li> <p>To request a previous result set from a query after pagination has begun, you must re-invoke the Query API.</p> </li> <li> <p>The latest <code>NextToken</code> should be used to paginate until <code>null</code> is returned, at which point a new <code>NextToken</code> should be used.</p> </li> <li> <p> If the IAM principal of the query initiator and the result reader are not the same and/or the query initiator and the result reader do not have the same query string in the query requests, the query will fail with an <code>Invalid pagination token</code> error. </p> </li> </ul>',
        }),
    ).exactOptional(),
    MaxRows: MaxQueryResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The total number of rows to be returned in the <code>Query</code> output. The initial run of <code>Query</code> with a <code>MaxRows</code> value specified will return the result set of the query in two cases: </p> <ul> <li> <p>The size of the result is less than <code>1MB</code>.</p> </li> <li> <p>The number of rows in the result set is less than the value of <code>maxRows</code>.</p> </li> </ul> <p>Otherwise, the initial invocation of <code>Query</code> only returns a <code>NextToken</code>, which can then be used in subsequent calls to fetch the result set. To resume pagination, provide the <code>NextToken</code> value in the subsequent command.</p> <p>If the row size is large (e.g. a row has many columns), Timestream may return fewer rows to keep the response size from exceeding the 1 MB limit. If <code>MaxRows</code> is not provided, Timestream will send the necessary number of rows to meet the 1 MB limit.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['QueryString'], title: 'QueryRequest' })
  .openapi('QueryRequest')

const QueryExecutionExceptionSchema = z.any().openapi('QueryExecutionException')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies the Timestream resource to which tags should be added. This value is an Amazon Resource Name (ARN).',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the Timestream resource.' }),
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
            'The Timestream resource that the tags will be removed from. This value is an Amazon Resource Name (ARN). ',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags keys. Existing tags of the resource whose keys are members of this list will be removed from the Timestream resource. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateScheduledQueryRequestSchema = z
  .object({
    ScheduledQueryArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'ARN of the scheuled query.' }),
    ),
    State: ScheduledQueryStateSchema.and(
      z.any().openapi({ description: 'State of the scheduled query. ' }),
    ),
  })
  .openapi({ required: ['ScheduledQueryArn', 'State'], title: 'UpdateScheduledQueryRequest' })
  .openapi('UpdateScheduledQueryRequest')

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

export const postXAmzTargetTimestream20181101CancelQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.CancelQuery',
  description:
    ' Cancels a query that has been issued. Cancellation is provided only if the query has not completed running before the cancellation request was issued. Because cancellation is an idempotent operation, subsequent cancellation requests will return a <code>CancellationMessage</code>, indicating that the query has already been canceled. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.cancel-query.html">code sample</a> for details. ',
  operationId: 'CancelQuery',
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
        .literal('Timestream_20181101.CancelQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.CancelQuery'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelQueryRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelQueryResponseSchema } },
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

export const postXAmzTargetTimestream20181101CreateScheduledQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.CreateScheduledQuery',
  description:
    ' Create a scheduled query that will be run on your behalf at the configured schedule. Timestream assumes the execution role provided as part of the <code>ScheduledQueryExecutionRoleArn</code> parameter to run the query. You can use the <code>NotificationConfiguration</code> parameter to configure notification for your scheduled query operations.',
  operationId: 'CreateScheduledQuery',
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
        .literal('Timestream_20181101.CreateScheduledQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.CreateScheduledQuery'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateScheduledQueryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateScheduledQueryResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    486: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101DeleteScheduledQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery',
  description: 'Deletes a given scheduled query. This is an irreversible operation. ',
  operationId: 'DeleteScheduledQuery',
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
        .literal('Timestream_20181101.DeleteScheduledQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.DeleteScheduledQuery'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteScheduledQueryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
    '<p>DescribeEndpoints returns a list of available endpoints to make Timestream API calls against. This API is available through both Write and Query.</p> <p>Because the Timestream SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, <i>it is not recommended that you use this API unless</i>:</p> <ul> <li> <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream </a> </p> </li> <li> <p>Your application uses a programming language that does not yet have SDK support</p> </li> <li> <p>You require better control over the client-side implementation</p> </li> </ul> <p>For detailed information on how and when to use and implement DescribeEndpoints, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>',
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

export const postXAmzTargetTimestream20181101DescribeScheduledQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery',
  description: 'Provides detailed information about a scheduled query.',
  operationId: 'DescribeScheduledQuery',
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
        .literal('Timestream_20181101.DescribeScheduledQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.DescribeScheduledQuery'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeScheduledQueryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeScheduledQueryResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101ExecuteScheduledQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery',
  description: ' You can use this API to run a scheduled query manually. ',
  operationId: 'ExecuteScheduledQuery',
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
        .literal('Timestream_20181101.ExecuteScheduledQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.ExecuteScheduledQuery'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ExecuteScheduledQueryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101ListScheduledQueriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.ListScheduledQueries',
  description:
    "Gets a list of all scheduled queries in the caller's Amazon account and Region. <code>ListScheduledQueries</code> is eventually consistent. ",
  operationId: 'ListScheduledQueries',
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
        .literal('Timestream_20181101.ListScheduledQueries')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.ListScheduledQueries'] },
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
      content: { 'application/json': { schema: ListScheduledQueriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListScheduledQueriesResponseSchema } },
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

export const postXAmzTargetTimestream20181101ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.ListTagsForResource',
  description: 'List all tags on a Timestream query resource.',
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

export const postXAmzTargetTimestream20181101PrepareQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.PrepareQuery',
  description:
    'A synchronous operation that allows you to submit a query with parameters to be stored by Timestream for later running. Timestream only supports using this operation with the <code>PrepareQueryRequest$ValidateOnly</code> set to <code>true</code>. ',
  operationId: 'PrepareQuery',
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
        .literal('Timestream_20181101.PrepareQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.PrepareQuery'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PrepareQueryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PrepareQueryResponseSchema } },
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

export const postXAmzTargetTimestream20181101QueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.Query',
  description:
    '<p> <code>Query</code> is a synchronous operation that enables you to run a query against your Amazon Timestream data. <code>Query</code> will time out after 60 seconds. You must update the default timeout in the SDK to support a timeout of 60 seconds. See the <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.run-query.html">code sample</a> for details. </p> <p>Your query request will fail in the following cases:</p> <ul> <li> <p> If you submit a <code>Query</code> request with the same client token outside of the 5-minute idempotency window. </p> </li> <li> <p> If you submit a <code>Query</code> request with the same client token, but change other parameters, within the 5-minute idempotency window. </p> </li> <li> <p> If the size of the row (including the query metadata) exceeds 1 MB, then the query will fail with the following error message: </p> <p> <code>Query aborted as max page response size has been exceeded by the output result row</code> </p> </li> <li> <p> If the IAM principal of the query initiator and the result reader are not the same and/or the query initiator and the result reader do not have the same query string in the query requests, the query will fail with an <code>Invalid pagination token</code> error. </p> </li> </ul>',
  operationId: 'Query',
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
        .literal('Timestream_20181101.Query')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.Query'] },
          },
        }),
    }),
    query: z.object({
      MaxRows: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRows',
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
    body: { content: { 'application/json': { schema: QueryRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QueryResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'QueryExecutionException',
      content: { 'application/json': { schema: QueryExecutionExceptionSchema } },
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
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.TagResource',
  description:
    'Associate a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. ',
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
  description: 'Removes the association of tags from a Timestream query resource.',
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})

export const postXAmzTargetTimestream20181101UpdateScheduledQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery',
  description: 'Update a scheduled query.',
  operationId: 'UpdateScheduledQuery',
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
        .literal('Timestream_20181101.UpdateScheduledQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Timestream_20181101.UpdateScheduledQuery'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateScheduledQueryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'InvalidEndpointException',
      content: { 'application/json': { schema: InvalidEndpointExceptionSchema } },
    },
  },
})
