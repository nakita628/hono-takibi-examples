import { createRoute, z } from '@hono/zod-openapi'

const StringAttributeValueSchema = z.string().openapi('StringAttributeValue')

const NumberAttributeValueSchema = z.string().openapi('NumberAttributeValue')

const BinaryAttributeValueSchema = z.string().openapi('BinaryAttributeValue')

const StringListAttributeValueSchema = z
  .array(StringAttributeValueSchema)
  .openapi('StringListAttributeValue')

const NumberListAttributeValueSchema = z
  .array(NumberAttributeValueSchema)
  .openapi('NumberListAttributeValue')

const BinaryListAttributeValueSchema = z
  .array(BinaryAttributeValueSchema)
  .openapi('BinaryListAttributeValue')

type AttributeValueType = {
  S?: z.infer<typeof StringAttributeValueSchema> & { [key: string]: unknown }
  N?: z.infer<typeof NumberAttributeValueSchema> & { [key: string]: unknown }
  B?: z.infer<typeof BinaryAttributeValueSchema> & { [key: string]: unknown }
  SS?: z.infer<typeof StringListAttributeValueSchema> & { [key: string]: unknown }
  NS?: z.infer<typeof NumberListAttributeValueSchema> & { [key: string]: unknown }
  BS?: z.infer<typeof BinaryListAttributeValueSchema> & { [key: string]: unknown }
}

const ActivateAnomalyDetectorResponseSchema = z
  .object({})
  .openapi('ActivateAnomalyDetectorResponse')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const BackTestAnomalyDetectorResponseSchema = z
  .object({})
  .openapi('BackTestAnomalyDetectorResponse')

const ArnSchema = z
  .string()
  .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
  .max(256)
  .openapi('Arn')

const CreateAlertResponseSchema = z
  .object({
    AlertArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the alert.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAlertResponse')

const SnsFormatSchema = z.enum(['LONG_TEXT', 'SHORT_TEXT', 'JSON']).openapi('SnsFormat')

const SNSConfigurationSchema = z
  .object({
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the IAM role that has access to the target SNS topic.',
        }),
    ),
    SnsTopicArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the target SNS topic.' }),
    ),
    SnsFormat: SnsFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format of the SNS topic.</p> <ul> <li> <p> <code>JSON</code> – Send JSON alerts with an anomaly ID and a link to the anomaly detail page. This is the default.</p> </li> <li> <p> <code>LONG_TEXT</code> – Send human-readable alerts with information about the impacted timeseries and a link to the anomaly detail page. We recommend this for email.</p> </li> <li> <p> <code>SHORT_TEXT</code> – Send human-readable alerts with a link to the anomaly detail page. We recommend this for SMS.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RoleArn', 'SnsTopicArn'],
    description:
      'Contains information about the SNS topic to which you want to send your alerts and the IAM role that has access to that topic.',
  })
  .openapi('SNSConfiguration')

const LambdaConfigurationSchema = z
  .object({
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of an IAM role that has permission to invoke the Lambda function.',
        }),
    ),
    LambdaArn: ArnSchema.and(z.any().openapi({ description: 'The ARN of the Lambda function.' })),
  })
  .openapi({
    required: ['RoleArn', 'LambdaArn'],
    description: 'Contains information about a Lambda configuration.',
  })
  .openapi('LambdaConfiguration')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const MetricNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9][a-zA-Z0-9\-_]*/)
  .max(256)
  .openapi('MetricName')

const MetricNameListSchema = z.array(MetricNameSchema).min(1).max(5).openapi('MetricNameList')

const ColumnNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9][a-zA-Z0-9\-_]*/)
  .min(1)
  .max(63)
  .openapi('ColumnName')

const DimensionValueSchema = z.string().openapi('DimensionValue')

const DimensionValueListSchema = z
  .array(DimensionValueSchema)
  .min(1)
  .max(10)
  .openapi('DimensionValueList')

const DimensionFilterSchema = z
  .object({
    DimensionName: ColumnNameSchema.and(
      z.any().openapi({ description: 'The name of the dimension to filter on.' }),
    ).exactOptional(),
    DimensionValueList: DimensionValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of values for the dimension specified in DimensionName that you want to filter on.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The dimension filter, containing DimensionName and DimensionValueList.',
    required: [],
  })
  .openapi('DimensionFilter')

const DimensionFilterListSchema = z
  .array(DimensionFilterSchema)
  .min(1)
  .max(5)
  .openapi('DimensionFilterList')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const CreateAnomalyDetectorResponseSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the detector.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAnomalyDetectorResponse')

const FrequencySchema = z.enum(['P1D', 'PT1H', 'PT10M', 'PT5M']).openapi('Frequency')

const CreateMetricSetResponseSchema = z
  .object({
    MetricSetArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the dataset.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateMetricSetResponse')

const AggregationFunctionSchema = z.enum(['AVG', 'SUM']).openapi('AggregationFunction')

const NamespaceSchema = z
  .string()
  .regex(/[^:].*/)
  .min(1)
  .max(255)
  .openapi('Namespace')

const MetricSchema = z
  .object({
    MetricName: ColumnNameSchema.and(z.any().openapi({ description: 'The name of the metric.' })),
    AggregationFunction: AggregationFunctionSchema.and(
      z.any().openapi({ description: 'The function with which the metric is calculated.' }),
    ),
    Namespace: NamespaceSchema.and(
      z.any().openapi({ description: 'The namespace for the metric.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MetricName', 'AggregationFunction'],
    description:
      'A calculation made by contrasting a measure and a dimension from your source data.',
  })
  .openapi('Metric')

const DateTimeFormatSchema = z
  .string()
  .regex(/.*\S.*/)
  .max(63)
  .openapi('DateTimeFormat')

const TemplatedPathSchema = z
  .string()
  .regex(/^s3:\/\/[a-zA-Z0-9_\-\/ {}=]+$/)
  .max(1024)
  .openapi('TemplatedPath')

const TemplatedPathListSchema = z.array(TemplatedPathSchema).length(1).openapi('TemplatedPathList')

const HistoricalDataPathSchema = z
  .string()
  .regex(/^s3:\/\/[a-z0-9].+$/)
  .max(1024)
  .openapi('HistoricalDataPath')

const HistoricalDataPathListSchema = z
  .array(HistoricalDataPathSchema)
  .length(1)
  .openapi('HistoricalDataPathList')

const CSVFileCompressionSchema = z.enum(['NONE', 'GZIP']).openapi('CSVFileCompression')

const CharsetSchema = z
  .string()
  .regex(/^[a-zA-Z0-9][a-zA-Z0-9\-_]*/)
  .max(63)
  .openapi('Charset')

const BooleanSchema = z.boolean().openapi('Boolean')

const DelimiterSchema = z
  .string()
  .regex(/[^\r\n]/)
  .max(1)
  .openapi('Delimiter')

const HeaderListSchema = z.array(ColumnNameSchema).openapi('HeaderList')

const QuoteSymbolSchema = z
  .string()
  .regex(/[^\r\n]|^$/)
  .max(1)
  .openapi('QuoteSymbol')

const CsvFormatDescriptorSchema = z
  .object({
    FileCompression: CSVFileCompressionSchema.and(
      z.any().openapi({ description: 'The level of compression of the source CSV file.' }),
    ).exactOptional(),
    Charset: CharsetSchema.and(
      z
        .any()
        .openapi({ description: 'The character set in which the source CSV file is written.' }),
    ).exactOptional(),
    ContainsHeader: BooleanSchema.and(
      z.any().openapi({ description: 'Whether or not the source CSV file contains a header.' }),
    ).exactOptional(),
    Delimiter: DelimiterSchema.and(
      z.any().openapi({ description: 'The character used to delimit the source CSV file.' }),
    ).exactOptional(),
    HeaderList: HeaderListSchema.and(
      z.any().openapi({ description: "A list of the source CSV file's headers, if any." }),
    ).exactOptional(),
    QuoteSymbol: QuoteSymbolSchema.and(
      z.any().openapi({ description: 'The character used as a quote character.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about how a source CSV data file should be analyzed.',
    required: [],
  })
  .openapi('CsvFormatDescriptor')

const JsonFileCompressionSchema = z.enum(['NONE', 'GZIP']).openapi('JsonFileCompression')

const JsonFormatDescriptorSchema = z
  .object({
    FileCompression: JsonFileCompressionSchema.and(
      z.any().openapi({ description: 'The level of compression of the source CSV file.' }),
    ).exactOptional(),
    Charset: CharsetSchema.and(
      z
        .any()
        .openapi({ description: 'The character set in which the source JSON file is written.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about how a source JSON data file should be analyzed.',
    required: [],
  })
  .openapi('JsonFormatDescriptor')

const FileFormatDescriptorSchema = z
  .object({
    CsvFormatDescriptor: CsvFormatDescriptorSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains information about how a source CSV data file should be analyzed.',
        }),
    ).exactOptional(),
    JsonFormatDescriptor: JsonFormatDescriptorSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains information about how a source JSON data file should be analyzed.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: "Contains information about a source file's formatting.", required: [] })
  .openapi('FileFormatDescriptor')

const S3SourceConfigSchema = z
  .object({
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an IAM role that has read and write access permissions to the source S3 bucket.',
        }),
    ).exactOptional(),
    TemplatedPathList: TemplatedPathListSchema.and(
      z.any().openapi({ description: 'A list of templated paths to the source files.' }),
    ).exactOptional(),
    HistoricalDataPathList: HistoricalDataPathListSchema.and(
      z.any().openapi({ description: 'A list of paths to the historical data files.' }),
    ).exactOptional(),
    FileFormatDescriptor: FileFormatDescriptorSchema.and(
      z.any().openapi({ description: "Contains information about a source file's formatting." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the configuration of the S3 bucket that contains source files.',
    required: [],
  })
  .openapi('S3SourceConfig')

const FlowNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9][\w!@#.-]+/)
  .max(256)
  .openapi('FlowName')

const AppFlowConfigSchema = z
  .object({
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM role that gives Amazon Lookout for Metrics permission to access the flow.',
        }),
    ).exactOptional(),
    FlowName: FlowNameSchema.and(
      z.any().openapi({ description: ' name of the flow.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about an Amazon AppFlow flow datasource.', required: [] })
  .openapi('AppFlowConfig')

const BackTestConfigurationSchema = z
  .object({
    RunBackTestMode: BooleanSchema.and(
      z.any().openapi({ description: 'Run a backtest instead of monitoring new data.' }),
    ),
  })
  .openapi({ required: ['RunBackTestMode'], description: 'Settings for backtest mode.' })
  .openapi('BackTestConfiguration')

const CloudWatchConfigSchema = z
  .object({
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM role that gives Amazon Lookout for Metrics permission to access data in Amazon CloudWatch.',
        }),
    ).exactOptional(),
    BackTestConfiguration: BackTestConfigurationSchema.and(
      z.any().openapi({ description: 'Settings for backtest mode.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about an Amazon CloudWatch datasource.', required: [] })
  .openapi('CloudWatchConfig')

const RDSDatabaseIdentifierSchema = z
  .string()
  .regex(/^[a-zA-Z](?!.*--)(?!.*-$)[0-9a-zA-Z\-]*$/)
  .min(1)
  .max(63)
  .openapi('RDSDatabaseIdentifier')

const DatabaseHostSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(253)
  .openapi('DatabaseHost')

const DatabasePortSchema = z.int().min(1).max(65535).openapi('DatabasePort')

const PoirotSecretManagerArnSchema = z
  .string()
  .regex(/arn:([a-z\d-]+):.*:.*:secret:AmazonLookoutMetrics-.+/)
  .max(256)
  .openapi('PoirotSecretManagerArn')

const RDSDatabaseNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.]+/)
  .min(1)
  .max(64)
  .openapi('RDSDatabaseName')

const TableNameSchema = z
  .string()
  .regex(/^[a-zA-Z][a-zA-Z0-9_.]*$/)
  .min(1)
  .max(100)
  .openapi('TableName')

const SubnetIdSchema = z
  .string()
  .regex(/[\-0-9a-zA-Z]+/)
  .max(255)
  .openapi('SubnetId')

const SubnetIdListSchema = z.array(SubnetIdSchema).openapi('SubnetIdList')

const SecurityGroupIdSchema = z
  .string()
  .regex(/[-0-9a-zA-Z]+/)
  .min(1)
  .max(255)
  .openapi('SecurityGroupId')

const SecurityGroupIdListSchema = z.array(SecurityGroupIdSchema).openapi('SecurityGroupIdList')

const VpcConfigurationSchema = z
  .object({
    SubnetIdList: SubnetIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings containing the Amazon VPC subnet IDs (e.g., <code>subnet-0bb1c79de3EXAMPLE</code>.',
        }),
    ),
    SecurityGroupIdList: SecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of strings containing the list of security groups.' }),
    ),
  })
  .openapi({
    required: ['SubnetIdList', 'SecurityGroupIdList'],
    description: 'Contains configuration information about the Amazon Virtual Private Cloud (VPC).',
  })
  .openapi('VpcConfiguration')

const RDSSourceConfigSchema = z
  .object({
    DBInstanceIdentifier: RDSDatabaseIdentifierSchema.and(
      z.any().openapi({ description: 'A string identifying the database instance.' }),
    ).exactOptional(),
    DatabaseHost: DatabaseHostSchema.and(
      z.any().openapi({ description: 'The host name of the database.' }),
    ).exactOptional(),
    DatabasePort: DatabasePortSchema.and(
      z.any().openapi({ description: 'The port number where the database can be accessed.' }),
    ).exactOptional(),
    SecretManagerArn: PoirotSecretManagerArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the AWS Secrets Manager role.',
        }),
    ).exactOptional(),
    DatabaseName: RDSDatabaseNameSchema.and(
      z.any().openapi({ description: 'The name of the RDS database.' }),
    ).exactOptional(),
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The name of the table in the database.' }),
    ).exactOptional(),
    RoleArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the role.' }),
    ).exactOptional(),
    VpcConfiguration: VpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object containing information about the Amazon Virtual Private Cloud (VPC) configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the Amazon Relational Database Service (RDS) configuration.',
    required: [],
  })
  .openapi('RDSSourceConfig')

const RedshiftClusterIdentifierSchema = z
  .string()
  .regex(/^[a-z](?!.*--)(?!.*-$)[0-9a-z\-]*$/)
  .min(1)
  .max(63)
  .openapi('RedshiftClusterIdentifier')

const RedshiftDatabaseNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.]+/)
  .min(1)
  .max(100)
  .openapi('RedshiftDatabaseName')

const RedshiftSourceConfigSchema = z
  .object({
    ClusterIdentifier: RedshiftClusterIdentifierSchema.and(
      z.any().openapi({ description: 'A string identifying the Redshift cluster.' }),
    ).exactOptional(),
    DatabaseHost: DatabaseHostSchema.and(
      z.any().openapi({ description: 'The name of the database host.' }),
    ).exactOptional(),
    DatabasePort: DatabasePortSchema.and(
      z.any().openapi({ description: 'The port number where the database can be accessed.' }),
    ).exactOptional(),
    SecretManagerArn: PoirotSecretManagerArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the AWS Secrets Manager role.',
        }),
    ).exactOptional(),
    DatabaseName: RedshiftDatabaseNameSchema.and(
      z.any().openapi({ description: 'The Redshift database name.' }),
    ).exactOptional(),
    TableName: TableNameSchema.and(
      z.any().openapi({ description: 'The table name of the Redshift database.' }),
    ).exactOptional(),
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the role providing access to the database.',
        }),
    ).exactOptional(),
    VpcConfiguration: VpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the Amazon Virtual Private Cloud (VPC) configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about the Amazon Redshift database configuration.',
    required: [],
  })
  .openapi('RedshiftSourceConfig')

const AthenaDatabaseNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_]+/)
  .min(1)
  .max(255)
  .openapi('AthenaDatabaseName')

const AthenaDataCatalogSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*' })
  .openapi('AthenaDataCatalog')

const AthenaTableNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_]+/)
  .min(1)
  .max(128)
  .openapi('AthenaTableName')

const AthenaWorkGroupNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9._-]{1,128}/)
  .min(1)
  .max(128)
  .openapi('AthenaWorkGroupName')

const AthenaS3ResultsPathSchema = z
  .string()
  .regex(/^s3:\/\/[a-z0-9].+$/)
  .max(1024)
  .openapi('AthenaS3ResultsPath')

const AthenaSourceConfigSchema = z
  .object({
    RoleArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM role that gives Amazon Lookout for Metrics permission to access the data.',
        }),
    ).exactOptional(),
    DatabaseName: AthenaDatabaseNameSchema.and(
      z.any().openapi({ description: "The database's name." }),
    ).exactOptional(),
    DataCatalog: AthenaDataCatalogSchema.and(
      z.any().openapi({ description: "The database's data catalog." }),
    ).exactOptional(),
    TableName: AthenaTableNameSchema.and(
      z.any().openapi({ description: "The database's table name." }),
    ).exactOptional(),
    WorkGroupName: AthenaWorkGroupNameSchema.and(
      z.any().openapi({ description: "The database's work group name." }),
    ).exactOptional(),
    S3ResultsPath: AthenaS3ResultsPathSchema.and(
      z.any().openapi({ description: "The database's results path." }),
    ).exactOptional(),
    BackTestConfiguration: BackTestConfigurationSchema.and(
      z.any().openapi({ description: 'Settings for backtest mode.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about an Amazon Athena datasource.', required: [] })
  .openapi('AthenaSourceConfig')

const FilterOperationSchema = z.literal('EQUALS').openapi('FilterOperation')

const FilterSchema = z
  .object({
    DimensionValue: DimensionValueSchema.and(
      z.any().openapi({ description: 'The value that you want to include in the filter.' }),
    ).exactOptional(),
    FilterOperation: FilterOperationSchema.and(
      z.any().openapi({ description: 'The condition to apply.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a filter for choosing a subset of dimension values. Each filter consists of the dimension that you want to include and the condition statement. The condition statement is specified in the <code>FilterOperation</code> object.',
    required: [],
  })
  .openapi('Filter')

const FilterListSchema = z.array(FilterSchema).min(1).openapi('FilterList')

const MetricSetDimensionFilterSchema = z
  .object({
    Name: ColumnNameSchema.and(
      z.any().openapi({ description: 'The dimension that you want to filter on.' }),
    ).exactOptional(),
    FilterList: FilterListSchema.and(
      z.any().openapi({ description: 'The list of filters that you are applying.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a list of filters for choosing a subset of dimension values. Each filter consists of the dimension and one of its values that you want to include. When multiple dimensions or values are specified, the dimensions are joined with an AND operation and the values are joined with an OR operation. ',
    required: [],
  })
  .openapi('MetricSetDimensionFilter')

const DeactivateAnomalyDetectorResponseSchema = z
  .object({})
  .openapi('DeactivateAnomalyDetectorResponse')

const DeleteAlertResponseSchema = z.object({}).openapi('DeleteAlertResponse')

const DeleteAnomalyDetectorResponseSchema = z.object({}).openapi('DeleteAnomalyDetectorResponse')

const ActionSchema = z
  .object({
    SNSConfiguration: SNSConfigurationSchema.and(
      z.any().openapi({ description: 'A configuration for an Amazon SNS channel.' }),
    ).exactOptional(),
    LambdaConfiguration: LambdaConfigurationSchema.and(
      z.any().openapi({ description: 'A configuration for an AWS Lambda channel.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A configuration that specifies the action to perform when anomalies are detected.',
    required: [],
  })
  .openapi('Action')

const AlertDescriptionSchema = z
  .string()
  .regex(/.*\S.*/)
  .max(256)
  .openapi('AlertDescription')

const AlertNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9][a-zA-Z0-9\-_]*/)
  .min(1)
  .max(63)
  .openapi('AlertName')

const SensitivityThresholdSchema = z.int().min(0).max(100).openapi('SensitivityThreshold')

const AlertTypeSchema = z.enum(['SNS', 'LAMBDA']).openapi('AlertType')

const AlertStatusSchema = z.enum(['ACTIVE', 'INACTIVE']).openapi('AlertStatus')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const AlertFiltersSchema = z
  .object({
    MetricList: MetricNameListSchema.and(
      z.any().openapi({ description: 'The list of measures that you want to get alerts for.' }),
    ).exactOptional(),
    DimensionFilterList: DimensionFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of DimensionFilter objects that are used for dimension-based filtering.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The configuration of the alert filters.', required: [] })
  .openapi('AlertFilters')

const AlertSchema = z
  .object({
    Action: ActionSchema.and(
      z.any().openapi({ description: 'Action that will be triggered when there is an alert.' }),
    ).exactOptional(),
    AlertDescription: AlertDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the alert.' }),
    ).exactOptional(),
    AlertArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the alert.' }),
    ).exactOptional(),
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the detector to which the alert is attached.' }),
    ).exactOptional(),
    AlertName: AlertNameSchema.and(
      z.any().openapi({ description: 'The name of the alert.' }),
    ).exactOptional(),
    AlertSensitivityThreshold: SensitivityThresholdSchema.and(
      z.any().openapi({ description: 'The minimum severity for an anomaly to trigger the alert.' }),
    ).exactOptional(),
    AlertType: AlertTypeSchema.and(
      z.any().openapi({ description: 'The type of the alert.' }),
    ).exactOptional(),
    AlertStatus: AlertStatusSchema.and(
      z.any().openapi({ description: 'The status of the alert.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the alert was last modified.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the alert was created.' }),
    ).exactOptional(),
    AlertFilters: AlertFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration of the alert filters, containing MetricList and DimensionFilter.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A configuration for Amazon SNS-integrated notifications.',
    required: [],
  })
  .openapi('Alert')

const DescribeAlertResponseSchema = z
  .object({
    Alert: AlertSchema.and(
      z.any().openapi({ description: 'Contains information about an alert.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAlertResponse')

const TimestampStringSchema = z
  .string()
  .regex(
    /^([12]\d{3})-(1[0-2]|0[1-9])-(0[1-9]|[12]\d|3[01])T([01]\d|2[0-3]):([0-5]\d):([0-5]\d)(Z|(\+|\-)(0\d|1[0-2]):([0-5]\d)(\[[[:alnum:]\/\_]+\])?)$/,
  )
  .max(60)
  .openapi('TimestampString')

const AnomalyDetectionTaskStatusSchema = z
  .enum(['PENDING', 'IN_PROGRESS', 'COMPLETED', 'FAILED', 'FAILED_TO_SCHEDULE'])
  .openapi('AnomalyDetectionTaskStatus')

const AnomalyDetectionTaskStatusMessageSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(256)
  .openapi('AnomalyDetectionTaskStatusMessage')

const ExecutionStatusSchema = z
  .object({
    Timestamp: TimestampStringSchema.and(
      z.any().openapi({ description: "The run's timestamp." }),
    ).exactOptional(),
    Status: AnomalyDetectionTaskStatusSchema.and(
      z.any().openapi({ description: "The run's status." }),
    ).exactOptional(),
    FailureReason: AnomalyDetectionTaskStatusMessageSchema.and(
      z.any().openapi({ description: 'The reason that the run failed, if applicable.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The status of an anomaly detector run.', required: [] })
  .openapi('ExecutionStatus')

const ExecutionListSchema = z.array(ExecutionStatusSchema).openapi('ExecutionList')

const NextTokenSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(3000)
  .openapi('NextToken')

const DescribeAnomalyDetectionExecutionsResponseSchema = z
  .object({
    ExecutionList: ExecutionListSchema.and(
      z.any().openapi({ description: 'A list of detection jobs.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: "The pagination token that's included if more results are available.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAnomalyDetectionExecutionsResponse')

const AnomalyDetectorNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9][a-zA-Z0-9\-_]*/)
  .min(1)
  .max(63)
  .openapi('AnomalyDetectorName')

const AnomalyDetectorDescriptionSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(256)
  .openapi('AnomalyDetectorDescription')

const AnomalyDetectorConfigSummarySchema = z
  .object({
    AnomalyDetectorFrequency: FrequencySchema.and(
      z
        .any()
        .openapi({ description: 'The interval at which the detector analyzes its source data.' }),
    ).exactOptional(),
  })
  .openapi({ description: "Contains information about a detector's configuration.", required: [] })
  .openapi('AnomalyDetectorConfigSummary')

const AnomalyDetectorStatusSchema = z
  .enum([
    'ACTIVE',
    'ACTIVATING',
    'DELETING',
    'FAILED',
    'INACTIVE',
    'LEARNING',
    'BACK_TEST_ACTIVATING',
    'BACK_TEST_ACTIVE',
    'BACK_TEST_COMPLETE',
    'DEACTIVATED',
    'DEACTIVATING',
  ])
  .openapi('AnomalyDetectorStatus')

const ErrorMessageSchema = z.string().max(256).openapi('ErrorMessage')

const KmsKeyArnSchema = z
  .string()
  .regex(
    /arn:aws.*:kms:.*:[0-9]{12}:key\/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/,
  )
  .min(20)
  .max(2048)
  .openapi('KmsKeyArn')

const AnomalyDetectorFailureTypeSchema = z
  .enum([
    'ACTIVATION_FAILURE',
    'BACK_TEST_ACTIVATION_FAILURE',
    'DELETION_FAILURE',
    'DEACTIVATION_FAILURE',
  ])
  .openapi('AnomalyDetectorFailureType')

const DescribeAnomalyDetectorResponseSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the detector.' }),
    ).exactOptional(),
    AnomalyDetectorName: AnomalyDetectorNameSchema.and(
      z.any().openapi({ description: 'The name of the detector.' }),
    ).exactOptional(),
    AnomalyDetectorDescription: AnomalyDetectorDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the detector.' }),
    ).exactOptional(),
    AnomalyDetectorConfig: AnomalyDetectorConfigSummarySchema.and(
      z.any().openapi({ description: "Contains information about the detector's configuration." }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the detector was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the detector was last modified.' }),
    ).exactOptional(),
    Status: AnomalyDetectorStatusSchema.and(
      z.any().openapi({ description: 'The status of the detector.' }),
    ).exactOptional(),
    FailureReason: ErrorMessageSchema.and(
      z.any().openapi({ description: 'The reason that the detector failed.' }),
    ).exactOptional(),
    KmsKeyArn: KmsKeyArnSchema.and(
      z.any().openapi({ description: 'The ARN of the KMS key to use to encrypt your data.' }),
    ).exactOptional(),
    FailureType: AnomalyDetectorFailureTypeSchema.and(
      z.any().openapi({ description: 'The process that caused the detector to fail.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAnomalyDetectorResponse')

const MetricSetNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9][a-zA-Z0-9\-_]*/)
  .min(1)
  .max(63)
  .openapi('MetricSetName')

const MetricSetDescriptionSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(256)
  .openapi('MetricSetDescription')

const OffsetSchema = z.int().min(0).max(432000).openapi('Offset')

const MetricListSchema = z.array(MetricSchema).min(1).openapi('MetricList')

const TimestampColumnSchema = z
  .object({
    ColumnName: ColumnNameSchema.and(
      z.any().openapi({ description: 'The name of the timestamp column.' }),
    ).exactOptional(),
    ColumnFormat: DateTimeFormatSchema.and(
      z.any().openapi({ description: 'The format of the timestamp column.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about the column used to track time in a source data file.',
    required: [],
  })
  .openapi('TimestampColumn')

const DimensionListSchema = z.array(ColumnNameSchema).min(1).openapi('DimensionList')

const TimezoneSchema = z
  .string()
  .regex(/.*\S.*/)
  .max(60)
  .openapi('Timezone')

const MetricSourceSchema = z
  .object({
    S3SourceConfig: S3SourceConfigSchema.exactOptional(),
    AppFlowConfig: AppFlowConfigSchema.and(
      z.any().openapi({ description: 'Details about an AppFlow datasource.' }),
    ).exactOptional(),
    CloudWatchConfig: CloudWatchConfigSchema.and(
      z.any().openapi({ description: 'Details about an Amazon CloudWatch monitoring datasource.' }),
    ).exactOptional(),
    RDSSourceConfig: RDSSourceConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Details about an Amazon Relational Database Service (RDS) datasource.',
        }),
    ).exactOptional(),
    RedshiftSourceConfig: RedshiftSourceConfigSchema.and(
      z.any().openapi({ description: 'Details about an Amazon Redshift database datasource.' }),
    ).exactOptional(),
    AthenaSourceConfig: AthenaSourceConfigSchema.and(
      z.any().openapi({ description: 'Details about an Amazon Athena datasource.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about source data used to generate metrics.',
    required: [],
  })
  .openapi('MetricSource')

const MetricSetDimensionFilterListSchema = z
  .array(MetricSetDimensionFilterSchema)
  .openapi('MetricSetDimensionFilterList')

const DescribeMetricSetResponseSchema = z
  .object({
    MetricSetArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the dataset.' }),
    ).exactOptional(),
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the detector that contains the dataset.' }),
    ).exactOptional(),
    MetricSetName: MetricSetNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset.' }),
    ).exactOptional(),
    MetricSetDescription: MetricSetDescriptionSchema.and(
      z.any().openapi({ description: "The dataset's description." }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the dataset was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the dataset was last modified.' }),
    ).exactOptional(),
    Offset: OffsetSchema.and(
      z
        .any()
        .openapi({
          description:
            'After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.',
        }),
    ).exactOptional(),
    MetricList: MetricListSchema.and(
      z.any().openapi({ description: 'A list of the metrics defined by the dataset.' }),
    ).exactOptional(),
    TimestampColumn: TimestampColumnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the column used for tracking time in your source data.',
        }),
    ).exactOptional(),
    DimensionList: DimensionListSchema.and(
      z.any().openapi({ description: 'A list of the dimensions chosen for analysis.' }),
    ).exactOptional(),
    MetricSetFrequency: FrequencySchema.and(
      z
        .any()
        .openapi({ description: 'The interval at which the data will be analyzed for anomalies.' }),
    ).exactOptional(),
    Timezone: TimezoneSchema.and(
      z.any().openapi({ description: "The time zone in which the dataset's data was recorded." }),
    ).exactOptional(),
    MetricSource: MetricSourceSchema.and(
      z.any().openapi({ description: "Contains information about the dataset's source data." }),
    ).exactOptional(),
    DimensionFilterList: MetricSetDimensionFilterListSchema.and(
      z
        .any()
        .openapi({
          description: 'The dimensions and their values that were used to filter the dataset.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeMetricSetResponse')

const AttributeValueSchema: z.ZodType<AttributeValueType> = z
  .lazy(() =>
    z
      .object({
        S: StringAttributeValueSchema.and(
          z.any().openapi({ description: 'A string.' }),
        ).exactOptional(),
        N: NumberAttributeValueSchema.and(
          z.any().openapi({ description: 'A number.' }),
        ).exactOptional(),
        B: BinaryAttributeValueSchema.and(
          z.any().openapi({ description: 'A binary value.' }),
        ).exactOptional(),
        SS: StringListAttributeValueSchema.and(
          z.any().openapi({ description: 'A list of strings.' }),
        ).exactOptional(),
        NS: NumberListAttributeValueSchema.and(
          z.any().openapi({ description: 'A list of numbers.' }),
        ).exactOptional(),
        BS: BinaryListAttributeValueSchema.and(
          z.any().openapi({ description: 'A list of binary values.' }),
        ).exactOptional(),
      })
      .openapi({ description: 'An attribute value.', required: [] }),
  )
  .openapi('AttributeValue')

const ConfidenceSchema = z.enum(['HIGH', 'LOW', 'NONE']).openapi('Confidence')

const MessageSchema = z.string().openapi('Message')

const DetectedFieldSchema = z
  .object({
    Value: AttributeValueSchema.and(
      z.any().openapi({ description: "The field's value." }),
    ).exactOptional(),
    Confidence: ConfidenceSchema.and(
      z.any().openapi({ description: "The field's confidence." }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z.any().openapi({ description: "The field's message." }),
    ).exactOptional(),
  })
  .openapi({ description: 'An inferred field.', required: [] })
  .openapi('DetectedField')

const DetectedCsvFormatDescriptorSchema = z
  .object({
    FileCompression: DetectedFieldSchema.and(
      z.any().openapi({ description: "The format's file compression." }),
    ).exactOptional(),
    Charset: DetectedFieldSchema.and(
      z.any().openapi({ description: "The format's charset." }),
    ).exactOptional(),
    ContainsHeader: DetectedFieldSchema.and(
      z.any().openapi({ description: 'Whether the format includes a header.' }),
    ).exactOptional(),
    Delimiter: DetectedFieldSchema.and(
      z.any().openapi({ description: "The format's delimiter." }),
    ).exactOptional(),
    HeaderList: DetectedFieldSchema.and(
      z.any().openapi({ description: "The format's header list." }),
    ).exactOptional(),
    QuoteSymbol: DetectedFieldSchema.and(
      z.any().openapi({ description: "The format's quote symbol." }),
    ).exactOptional(),
  })
  .openapi({ description: 'Properties of an inferred CSV format.', required: [] })
  .openapi('DetectedCsvFormatDescriptor')

const DetectedJsonFormatDescriptorSchema = z
  .object({
    FileCompression: DetectedFieldSchema.and(
      z.any().openapi({ description: "The format's file compression." }),
    ).exactOptional(),
    Charset: DetectedFieldSchema.and(
      z.any().openapi({ description: "The format's character set." }),
    ).exactOptional(),
  })
  .openapi({ description: 'A detected JSON format descriptor.', required: [] })
  .openapi('DetectedJsonFormatDescriptor')

const DetectedFileFormatDescriptorSchema = z
  .object({
    CsvFormatDescriptor: DetectedCsvFormatDescriptorSchema.and(
      z.any().openapi({ description: 'Details about a CSV format.' }),
    ).exactOptional(),
    JsonFormatDescriptor: DetectedJsonFormatDescriptorSchema.and(
      z.any().openapi({ description: 'Details about a JSON format.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Properties of an inferred data format.', required: [] })
  .openapi('DetectedFileFormatDescriptor')

const DetectedS3SourceConfigSchema = z
  .object({
    FileFormatDescriptor: DetectedFileFormatDescriptorSchema.and(
      z.any().openapi({ description: "The source's file format descriptor." }),
    ).exactOptional(),
  })
  .openapi({ description: 'An inferred source configuration.', required: [] })
  .openapi('DetectedS3SourceConfig')

const DetectedMetricSourceSchema = z
  .object({
    S3SourceConfig: DetectedS3SourceConfigSchema.and(
      z.any().openapi({ description: "The data source's source configuration." }),
    ).exactOptional(),
  })
  .openapi({ description: 'An inferred data source.', required: [] })
  .openapi('DetectedMetricSource')

const DetectedMetricSetConfigSchema = z
  .object({
    Offset: DetectedFieldSchema.and(
      z.any().openapi({ description: "The dataset's offset." }),
    ).exactOptional(),
    MetricSetFrequency: DetectedFieldSchema.and(
      z.any().openapi({ description: "The dataset's interval." }),
    ).exactOptional(),
    MetricSource: DetectedMetricSourceSchema.and(
      z.any().openapi({ description: "The dataset's data source." }),
    ).exactOptional(),
  })
  .openapi({ description: 'An inferred dataset configuration.', required: [] })
  .openapi('DetectedMetricSetConfig')

const DetectMetricSetConfigResponseSchema = z
  .object({
    DetectedMetricSetConfig: DetectedMetricSetConfigSchema.and(
      z.any().openapi({ description: 'The inferred dataset configuration for the datasource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetectMetricSetConfigResponse')

const AutoDetectionS3SourceConfigSchema = z
  .object({
    TemplatedPathList: TemplatedPathListSchema.and(
      z.any().openapi({ description: "The config's templated path list." }),
    ).exactOptional(),
    HistoricalDataPathList: HistoricalDataPathListSchema.and(
      z.any().openapi({ description: "The config's historical data path list." }),
    ).exactOptional(),
  })
  .openapi({ description: 'An auto detection source config.', required: [] })
  .openapi('AutoDetectionS3SourceConfig')

const UUIDSchema = z
  .string()
  .regex(/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/)
  .max(63)
  .openapi('UUID')

const ScoreSchema = z.float64().min(0).max(100).openapi('Score')

const IntegerSchema = z.int().openapi('Integer')

const DimensionValueContributionSchema = z
  .object({
    DimensionValue: DimensionValueSchema.and(
      z.any().openapi({ description: 'The value of the dimension.' }),
    ).exactOptional(),
    ContributionScore: ScoreSchema.and(
      z.any().openapi({ description: 'The severity score of the value.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The severity of a value of a dimension that contributed to an anomaly.',
    required: [],
  })
  .openapi('DimensionValueContribution')

const DimensionValueContributionListSchema = z
  .array(DimensionValueContributionSchema)
  .openapi('DimensionValueContributionList')

const DimensionContributionSchema = z
  .object({
    DimensionName: ColumnNameSchema.and(
      z.any().openapi({ description: 'The name of the dimension.' }),
    ).exactOptional(),
    DimensionValueContributionList: DimensionValueContributionListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of dimension values that contributed to the anomaly.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details about a dimension that contributed to an anomaly.',
    required: [],
  })
  .openapi('DimensionContribution')

const DimensionContributionListSchema = z
  .array(DimensionContributionSchema)
  .openapi('DimensionContributionList')

const ContributionMatrixSchema = z
  .object({
    DimensionContributionList: DimensionContributionListSchema.and(
      z.any().openapi({ description: 'A list of contributing dimensions.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details about dimensions that contributed to an anomaly.',
    required: [],
  })
  .openapi('ContributionMatrix')

const MetricLevelImpactSchema = z
  .object({
    MetricName: MetricNameSchema.and(
      z.any().openapi({ description: 'The name of the measure.' }),
    ).exactOptional(),
    NumTimeSeries: IntegerSchema.and(
      z.any().openapi({ description: 'The number of anomalous metrics for the measure.' }),
    ).exactOptional(),
    ContributionMatrix: ContributionMatrixSchema.and(
      z
        .any()
        .openapi({ description: 'Details about the dimensions that contributed to the anomaly.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about a measure affected by an anomaly.', required: [] })
  .openapi('MetricLevelImpact')

const MetricLevelImpactListSchema = z
  .array(MetricLevelImpactSchema)
  .openapi('MetricLevelImpactList')

const AnomalyGroupSchema = z
  .object({
    StartTime: TimestampStringSchema.and(
      z.any().openapi({ description: 'The start time for the group.' }),
    ).exactOptional(),
    EndTime: TimestampStringSchema.and(
      z.any().openapi({ description: 'The end time for the group.' }),
    ).exactOptional(),
    AnomalyGroupId: UUIDSchema.and(
      z.any().openapi({ description: 'The ID of the anomaly group.' }),
    ).exactOptional(),
    AnomalyGroupScore: ScoreSchema.and(
      z.any().openapi({ description: 'The severity score of the group.' }),
    ).exactOptional(),
    PrimaryMetricName: MetricNameSchema.and(
      z.any().openapi({ description: 'The name of the primary affected measure for the group.' }),
    ).exactOptional(),
    MetricLevelImpactList: MetricLevelImpactListSchema.and(
      z.any().openapi({ description: 'A list of measures affected by the anomaly.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A group of anomalous metrics', required: [] })
  .openapi('AnomalyGroup')

const GetAnomalyGroupResponseSchema = z
  .object({
    AnomalyGroup: AnomalyGroupSchema.and(
      z.any().openapi({ description: 'Details about the anomaly group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAnomalyGroupResponse')

const DataQualityMetricTypeSchema = z
  .enum([
    'COLUMN_COMPLETENESS',
    'DIMENSION_UNIQUENESS',
    'TIME_SERIES_COUNT',
    'ROWS_PROCESSED',
    'ROWS_PARTIAL_COMPLIANCE',
    'INVALID_ROWS_COMPLIANCE',
    'BACKTEST_TRAINING_DATA_START_TIME_STAMP',
    'BACKTEST_TRAINING_DATA_END_TIME_STAMP',
    'BACKTEST_INFERENCE_DATA_START_TIME_STAMP',
    'BACKTEST_INFERENCE_DATA_END_TIME_STAMP',
  ])
  .openapi('DataQualityMetricType')

const DataQualityMetricDescriptionSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(256)
  .openapi('DataQualityMetricDescription')

const RelatedColumnNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(256)
  .openapi('RelatedColumnName')

const DoubleSchema = z.float64().openapi('Double')

const DataQualityMetricSchema = z
  .object({
    MetricType: DataQualityMetricTypeSchema.and(
      z.any().openapi({ description: 'The name of the data quality metric.' }),
    ).exactOptional(),
    MetricDescription: DataQualityMetricDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the data quality metric.' }),
    ).exactOptional(),
    RelatedColumnName: RelatedColumnNameSchema.and(
      z.any().openapi({ description: 'The column that is being monitored.' }),
    ).exactOptional(),
    MetricValue: DoubleSchema.and(
      z.any().openapi({ description: 'The value of the data quality metric.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An array that describes a data quality metric. Each <code>DataQualityMetric</code> object contains the data quality metric name, its value, a description of the metric, and the affected column.',
    required: [],
  })
  .openapi('DataQualityMetric')

const DataQualityMetricListSchema = z
  .array(DataQualityMetricSchema)
  .openapi('DataQualityMetricList')

const MetricSetDataQualityMetricSchema = z
  .object({
    MetricSetArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the data quality metric array.',
        }),
    ).exactOptional(),
    DataQualityMetricList: DataQualityMetricListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of data quality metrics contained in the data quality metric set.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An array of <code>DataQualityMetric</code> objects that describes one or more data quality metrics.',
    required: [],
  })
  .openapi('MetricSetDataQualityMetric')

const MetricSetDataQualityMetricListSchema = z
  .array(MetricSetDataQualityMetricSchema)
  .openapi('MetricSetDataQualityMetricList')

const AnomalyDetectorDataQualityMetricSchema = z
  .object({
    StartTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The start time for the data quality metrics collection.' }),
    ).exactOptional(),
    MetricSetDataQualityMetricList: MetricSetDataQualityMetricListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>DataQualityMetricList</code> objects. Each object in the array contains information about a data quality metric.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Aggregated details about the data quality metrics collected for the <code>AnomalyDetectorArn</code> provided in the <a>GetDataQualityMetrics</a> object.',
    required: [],
  })
  .openapi('AnomalyDetectorDataQualityMetric')

const AnomalyDetectorDataQualityMetricListSchema = z
  .array(AnomalyDetectorDataQualityMetricSchema)
  .openapi('AnomalyDetectorDataQualityMetricList')

const GetDataQualityMetricsResponseSchema = z
  .object({
    AnomalyDetectorDataQualityMetricList: AnomalyDetectorDataQualityMetricListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the data quality metrics for the <code>AnomalyDetectorArn</code> that you requested.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDataQualityMetricsResponse')

const TimeSeriesIdSchema = z
  .string()
  .regex(/.*\S.*/)
  .max(520)
  .openapi('TimeSeriesId')

const TimeSeriesFeedbackSchema = z
  .object({
    TimeSeriesId: TimeSeriesIdSchema.and(
      z.any().openapi({ description: 'The ID of the metric.' }),
    ).exactOptional(),
    IsAnomaly: BooleanSchema.and(
      z.any().openapi({ description: 'Feedback on whether the metric is a legitimate anomaly.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details about feedback submitted for an anomalous metric.',
    required: [],
  })
  .openapi('TimeSeriesFeedback')

const TimeSeriesFeedbackListSchema = z
  .array(TimeSeriesFeedbackSchema)
  .openapi('TimeSeriesFeedbackList')

const GetFeedbackResponseSchema = z
  .object({
    AnomalyGroupTimeSeriesFeedback: TimeSeriesFeedbackListSchema.and(
      z.any().openapi({ description: 'Feedback for an anomalous metric.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: "The pagination token that's included if more results are available.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFeedbackResponse')

const HeaderValueSchema = z.string().openapi('HeaderValue')

const HeaderValueListSchema = z.array(HeaderValueSchema).openapi('HeaderValueList')

const DataItemSchema = z.string().openapi('DataItem')

const SampleRowSchema = z.array(DataItemSchema).openapi('SampleRow')

const SampleRowsSchema = z.array(SampleRowSchema).openapi('SampleRows')

const GetSampleDataResponseSchema = z
  .object({
    HeaderValues: HeaderValueListSchema.and(
      z.any().openapi({ description: 'A list of header labels for the records.' }),
    ).exactOptional(),
    SampleRows: SampleRowsSchema.and(
      z.any().openapi({ description: 'A list of records.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSampleDataResponse')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const AlertSummarySchema = z
  .object({
    AlertArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the alert.' }),
    ).exactOptional(),
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the detector to which the alert is attached.' }),
    ).exactOptional(),
    AlertName: AlertNameSchema.and(
      z.any().openapi({ description: 'The name of the alert.' }),
    ).exactOptional(),
    AlertSensitivityThreshold: SensitivityThresholdSchema.and(
      z.any().openapi({ description: 'The minimum severity for an anomaly to trigger the alert.' }),
    ).exactOptional(),
    AlertType: AlertTypeSchema.and(
      z.any().openapi({ description: 'The type of the alert.' }),
    ).exactOptional(),
    AlertStatus: AlertStatusSchema.and(
      z.any().openapi({ description: 'The status of the alert.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the alert was last modified.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the alert was created.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The alert\'s <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: "Provides a summary of an alert's configuration.", required: [] })
  .openapi('AlertSummary')

const AlertSummaryListSchema = z.array(AlertSummarySchema).openapi('AlertSummaryList')

const ListAlertsResponseSchema = z
  .object({
    AlertSummaryList: AlertSummaryListSchema.and(
      z.any().openapi({ description: 'Contains information about an alert.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, the service returns this token. To retrieve the next set of results, use this token in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAlertsResponse')

const AnomalyDetectorSummarySchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the detector.' }),
    ).exactOptional(),
    AnomalyDetectorName: AnomalyDetectorNameSchema.and(
      z.any().openapi({ description: 'The name of the detector.' }),
    ).exactOptional(),
    AnomalyDetectorDescription: AnomalyDetectorDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the detector.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the detector was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the detector was last modified.' }),
    ).exactOptional(),
    Status: AnomalyDetectorStatusSchema.and(
      z.any().openapi({ description: 'The status of detector.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The detector\'s <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about an an anomaly detector.', required: [] })
  .openapi('AnomalyDetectorSummary')

const AnomalyDetectorSummaryListSchema = z
  .array(AnomalyDetectorSummarySchema)
  .openapi('AnomalyDetectorSummaryList')

const ListAnomalyDetectorsResponseSchema = z
  .object({
    AnomalyDetectorSummaryList: AnomalyDetectorSummaryListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of anomaly detectors in the account in the current region.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, the service returns this token. To retrieve the next set of results, use the token in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAnomalyDetectorsResponse')

const RelationshipTypeSchema = z
  .enum(['CAUSE_OF_INPUT_ANOMALY_GROUP', 'EFFECT_OF_INPUT_ANOMALY_GROUP'])
  .openapi('RelationshipType')

const MetricChangePercentageSchema = z.float64().min(0).max(100).openapi('MetricChangePercentage')

const InterMetricImpactDetailsSchema = z
  .object({
    MetricName: MetricNameSchema.and(
      z.any().openapi({ description: 'The name of the measure.' }),
    ).exactOptional(),
    AnomalyGroupId: UUIDSchema.and(
      z.any().openapi({ description: 'The ID of the anomaly group.' }),
    ).exactOptional(),
    RelationshipType: RelationshipTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether a measure is a potential cause of the anomaly group (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>), or whether the measure is impacted by the anomaly group (<code>EFFECT_OF_INPUT_ANOMALY_GROUP</code>).',
        }),
    ).exactOptional(),
    ContributionPercentage: MetricChangePercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'For potential causes (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>), the percentage contribution the measure has in causing the anomalies.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Aggregated details about the measures contributing to the anomaly group, and the measures potentially impacted by the anomaly group.</p> <p/>',
    required: [],
  })
  .openapi('InterMetricImpactDetails')

const InterMetricImpactListSchema = z
  .array(InterMetricImpactDetailsSchema)
  .openapi('InterMetricImpactList')

const ListAnomalyGroupRelatedMetricsResponseSchema = z
  .object({
    InterMetricImpactList: InterMetricImpactListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Aggregated details about the measures contributing to the anomaly group, and the measures potentially impacted by the anomaly group.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: "The pagination token that's included if more results are available.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAnomalyGroupRelatedMetricsResponse')

const AnomalyGroupSummarySchema = z
  .object({
    StartTime: TimestampStringSchema.and(
      z.any().openapi({ description: 'The start time for the group.' }),
    ).exactOptional(),
    EndTime: TimestampStringSchema.and(
      z.any().openapi({ description: 'The end time for the group.' }),
    ).exactOptional(),
    AnomalyGroupId: UUIDSchema.and(
      z.any().openapi({ description: 'The ID of the anomaly group.' }),
    ).exactOptional(),
    AnomalyGroupScore: ScoreSchema.and(
      z.any().openapi({ description: 'The severity score of the group.' }),
    ).exactOptional(),
    PrimaryMetricName: MetricNameSchema.and(
      z.any().openapi({ description: 'The name of the primary affected measure for the group.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about a group of anomalous metrics.', required: [] })
  .openapi('AnomalyGroupSummary')

const AnomalyGroupSummaryListSchema = z
  .array(AnomalyGroupSummarySchema)
  .openapi('AnomalyGroupSummaryList')

const ItemizedMetricStatsSchema = z
  .object({
    MetricName: ColumnNameSchema.and(
      z.any().openapi({ description: 'The name of the measure.' }),
    ).exactOptional(),
    OccurrenceCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of times that the measure appears.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Aggregated statistics about a measure affected by an anomaly.',
    required: [],
  })
  .openapi('ItemizedMetricStats')

const ItemizedMetricStatsListSchema = z
  .array(ItemizedMetricStatsSchema)
  .openapi('ItemizedMetricStatsList')

const AnomalyGroupStatisticsSchema = z
  .object({
    EvaluationStartDate: TimestampStringSchema.and(
      z.any().openapi({ description: 'The start of the time range that was searched.' }),
    ).exactOptional(),
    TotalCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of groups found.' }),
    ).exactOptional(),
    ItemizedMetricStatsList: ItemizedMetricStatsListSchema.and(
      z.any().openapi({ description: 'Statistics for individual metrics within the group.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Aggregated statistics for a group of anomalous metrics.', required: [] })
  .openapi('AnomalyGroupStatistics')

const ListAnomalyGroupSummariesResponseSchema = z
  .object({
    AnomalyGroupSummaryList: AnomalyGroupSummaryListSchema.and(
      z.any().openapi({ description: 'A list of anomaly group summaries.' }),
    ).exactOptional(),
    AnomalyGroupStatistics: AnomalyGroupStatisticsSchema.and(
      z.any().openapi({ description: 'Aggregated details about the anomaly groups.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: "The pagination token that's included if more results are available.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAnomalyGroupSummariesResponse')

const TimestampListSchema = z.array(TimestampStringSchema).openapi('TimestampList')

const DimensionNameValueSchema = z
  .object({
    DimensionName: ColumnNameSchema.and(
      z.any().openapi({ description: 'The name of the dimension.' }),
    ),
    DimensionValue: DimensionValueSchema.and(
      z.any().openapi({ description: 'The value of the dimension.' }),
    ),
  })
  .openapi({
    required: ['DimensionName', 'DimensionValue'],
    description: 'A dimension name and value.',
  })
  .openapi('DimensionNameValue')

const DimensionNameValueListSchema = z
  .array(DimensionNameValueSchema)
  .openapi('DimensionNameValueList')

const MetricValueSchema = z.float64().openapi('MetricValue')

const MetricValueListSchema = z.array(MetricValueSchema).openapi('MetricValueList')

const TimeSeriesSchema = z
  .object({
    TimeSeriesId: TimeSeriesIdSchema.and(z.any().openapi({ description: 'The ID of the metric.' })),
    DimensionList: DimensionNameValueListSchema.and(
      z.any().openapi({ description: 'The dimensions of the metric.' }),
    ),
    MetricValueList: MetricValueListSchema.and(
      z.any().openapi({ description: 'The values for the metric.' }),
    ),
  })
  .openapi({
    required: ['TimeSeriesId', 'DimensionList', 'MetricValueList'],
    description:
      'Details about a metric. A metric is an aggregation of the values of a measure for a dimension value, such as <i>availability</i> in the <i>us-east-1</i> Region.',
  })
  .openapi('TimeSeries')

const TimeSeriesListSchema = z.array(TimeSeriesSchema).openapi('TimeSeriesList')

const ListAnomalyGroupTimeSeriesResponseSchema = z
  .object({
    AnomalyGroupId: UUIDSchema.and(
      z.any().openapi({ description: 'The ID of the anomaly group.' }),
    ).exactOptional(),
    MetricName: MetricNameSchema.and(
      z.any().openapi({ description: 'The name of the measure field.' }),
    ).exactOptional(),
    TimestampList: TimestampListSchema.and(
      z.any().openapi({ description: 'Timestamps for the anomalous metrics.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: "The pagination token that's included if more results are available.",
        }),
    ).exactOptional(),
    TimeSeriesList: TimeSeriesListSchema.and(
      z.any().openapi({ description: 'A list of anomalous metrics.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAnomalyGroupTimeSeriesResponse')

const MetricSetSummarySchema = z
  .object({
    MetricSetArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the dataset.' }),
    ).exactOptional(),
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the detector to which the dataset belongs.' }),
    ).exactOptional(),
    MetricSetDescription: MetricSetDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the dataset.' }),
    ).exactOptional(),
    MetricSetName: MetricSetNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the dataset was created.' }),
    ).exactOptional(),
    LastModificationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the dataset was last modified.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The dataset\'s <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about a dataset.', required: [] })
  .openapi('MetricSetSummary')

const MetricSetSummaryListSchema = z.array(MetricSetSummarySchema).openapi('MetricSetSummaryList')

const ListMetricSetsResponseSchema = z
  .object({
    MetricSetSummaryList: MetricSetSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the datasets in the AWS Region, with configuration details for each.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, the list call returns this token. To retrieve the next set of results, use the token in the next list request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMetricSetsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagMapSchema.and(
      z.any().openapi({ description: "The resource's tags." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const PutFeedbackResponseSchema = z.object({}).openapi('PutFeedbackResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const UpdateAlertResponseSchema = z
  .object({
    AlertArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the updated alert.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAlertResponse')

const UpdateAnomalyDetectorResponseSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the updated detector.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAnomalyDetectorResponse')

const UpdateMetricSetResponseSchema = z
  .object({
    MetricSetArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the dataset.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateMetricSetResponse')

const ActivateAnomalyDetectorRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the anomaly detector.' }),
    ),
  })
  .openapi({ required: ['AnomalyDetectorArn'], title: 'ActivateAnomalyDetectorRequest' })
  .openapi('ActivateAnomalyDetectorRequest')

const AnomalyDetectorConfigSchema = z
  .object({
    AnomalyDetectorFrequency: FrequencySchema.and(
      z
        .any()
        .openapi({ description: 'The frequency at which the detector analyzes its source data.' }),
    ).exactOptional(),
  })
  .openapi({ description: "Contains information about a detector's configuration.", required: [] })
  .openapi('AnomalyDetectorConfig')

const AnomalyGroupTimeSeriesSchema = z
  .object({
    AnomalyGroupId: UUIDSchema.and(
      z.any().openapi({ description: 'The ID of the anomaly group.' }),
    ),
    TimeSeriesId: TimeSeriesIdSchema.and(
      z.any().openapi({ description: 'The ID of the metric.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AnomalyGroupId'],
    description: 'An anomalous metric in an anomaly group.',
  })
  .openapi('AnomalyGroupTimeSeries')

const AnomalyGroupTimeSeriesFeedbackSchema = z
  .object({
    AnomalyGroupId: UUIDSchema.and(
      z.any().openapi({ description: 'The ID of the anomaly group.' }),
    ),
    TimeSeriesId: TimeSeriesIdSchema.and(z.any().openapi({ description: 'The ID of the metric.' })),
    IsAnomaly: BooleanSchema.and(
      z.any().openapi({ description: 'Feedback on whether the metric is a legitimate anomaly.' }),
    ),
  })
  .openapi({
    required: ['AnomalyGroupId', 'TimeSeriesId', 'IsAnomaly'],
    description: 'Feedback for an anomalous metric.',
  })
  .openapi('AnomalyGroupTimeSeriesFeedback')

const AutoDetectionMetricSourceSchema = z
  .object({
    S3SourceConfig: AutoDetectionS3SourceConfigSchema.and(
      z.any().openapi({ description: "The source's source config." }),
    ).exactOptional(),
  })
  .openapi({ description: 'An auto detection metric source.', required: [] })
  .openapi('AutoDetectionMetricSource')

const BackTestAnomalyDetectorRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the anomaly detector.' }),
    ),
  })
  .openapi({ required: ['AnomalyDetectorArn'], title: 'BackTestAnomalyDetectorRequest' })
  .openapi('BackTestAnomalyDetectorRequest')

const CreateAlertRequestSchema = z
  .object({
    AlertName: AlertNameSchema.and(z.any().openapi({ description: 'The name of the alert.' })),
    AlertSensitivityThreshold: SensitivityThresholdSchema.and(
      z
        .any()
        .openapi({
          description: 'An integer from 0 to 100 specifying the alert sensitivity threshold.',
        }),
    ).exactOptional(),
    AlertDescription: AlertDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the alert.' }),
    ).exactOptional(),
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the detector to which the alert is attached.' }),
    ),
    Action: ActionSchema.and(
      z.any().openapi({ description: 'Action that will be triggered when there is an alert.' }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the alert.',
        }),
    ).exactOptional(),
    AlertFilters: AlertFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration of the alert filters, containing MetricList and DimensionFilterList.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AlertName', 'AnomalyDetectorArn', 'Action'], title: 'CreateAlertRequest' })
  .openapi('CreateAlertRequest')

const CreateAnomalyDetectorRequestSchema = z
  .object({
    AnomalyDetectorName: AnomalyDetectorNameSchema.and(
      z.any().openapi({ description: 'The name of the detector.' }),
    ),
    AnomalyDetectorDescription: AnomalyDetectorDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the detector.' }),
    ).exactOptional(),
    AnomalyDetectorConfig: AnomalyDetectorConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains information about the configuration of the anomaly detector.',
        }),
    ),
    KmsKeyArn: KmsKeyArnSchema.and(
      z.any().openapi({ description: 'The ARN of the KMS key to use to encrypt your data.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the anomaly detector.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AnomalyDetectorName', 'AnomalyDetectorConfig'],
    title: 'CreateAnomalyDetectorRequest',
  })
  .openapi('CreateAnomalyDetectorRequest')

const CreateMetricSetRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the anomaly detector that will use the dataset.' }),
    ),
    MetricSetName: MetricSetNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset.' }),
    ),
    MetricSetDescription: MetricSetDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the dataset you are creating.' }),
    ).exactOptional(),
    MetricList: MetricListSchema.and(
      z.any().openapi({ description: 'A list of metrics that the dataset will contain.' }),
    ),
    Offset: OffsetSchema.and(
      z
        .any()
        .openapi({
          description:
            'After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.',
        }),
    ).exactOptional(),
    TimestampColumn: TimestampColumnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the column used for tracking time in your source data.',
        }),
    ).exactOptional(),
    DimensionList: DimensionListSchema.and(
      z.any().openapi({ description: 'A list of the fields you want to treat as dimensions.' }),
    ).exactOptional(),
    MetricSetFrequency: FrequencySchema.and(
      z
        .any()
        .openapi({
          description: 'The frequency with which the source data will be analyzed for anomalies.',
        }),
    ).exactOptional(),
    MetricSource: MetricSourceSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains information about how the source data should be interpreted.',
        }),
    ),
    Timezone: TimezoneSchema.and(
      z.any().openapi({ description: 'The time zone in which your source data was recorded.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the dataset.',
        }),
    ).exactOptional(),
    DimensionFilterList: MetricSetDimensionFilterListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of filters that specify which data is kept for anomaly detection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AnomalyDetectorArn', 'MetricSetName', 'MetricList', 'MetricSource'],
    title: 'CreateMetricSetRequest',
  })
  .openapi('CreateMetricSetRequest')

const DeactivateAnomalyDetectorRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the anomaly detector.' }),
    ),
  })
  .openapi({ required: ['AnomalyDetectorArn'], title: 'DeactivateAnomalyDetectorRequest' })
  .openapi('DeactivateAnomalyDetectorRequest')

const DeleteAlertRequestSchema = z
  .object({
    AlertArn: ArnSchema.and(z.any().openapi({ description: 'The ARN of the alert to delete.' })),
  })
  .openapi({ required: ['AlertArn'], title: 'DeleteAlertRequest' })
  .openapi('DeleteAlertRequest')

const DeleteAnomalyDetectorRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the detector to delete.' }),
    ),
  })
  .openapi({ required: ['AnomalyDetectorArn'], title: 'DeleteAnomalyDetectorRequest' })
  .openapi('DeleteAnomalyDetectorRequest')

const DescribeAlertRequestSchema = z
  .object({
    AlertArn: ArnSchema.and(z.any().openapi({ description: 'The ARN of the alert to describe.' })),
  })
  .openapi({ required: ['AlertArn'], title: 'DescribeAlertRequest' })
  .openapi('DescribeAlertRequest')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const DescribeAnomalyDetectionExecutionsRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the anomaly detector.' }),
    ),
    Timestamp: TimestampStringSchema.and(
      z.any().openapi({ description: 'The timestamp of the anomaly detection job.' }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The number of items to return in the response.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AnomalyDetectorArn'], title: 'DescribeAnomalyDetectionExecutionsRequest' })
  .openapi('DescribeAnomalyDetectionExecutionsRequest')

const DescribeAnomalyDetectorRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the detector to describe.' }),
    ),
  })
  .openapi({ required: ['AnomalyDetectorArn'], title: 'DescribeAnomalyDetectorRequest' })
  .openapi('DescribeAnomalyDetectorRequest')

const DescribeMetricSetRequestSchema = z
  .object({
    MetricSetArn: ArnSchema.and(z.any().openapi({ description: 'The ARN of the dataset.' })),
  })
  .openapi({ required: ['MetricSetArn'], title: 'DescribeMetricSetRequest' })
  .openapi('DescribeMetricSetRequest')

const DetectMetricSetConfigRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(z.any().openapi({ description: 'An anomaly detector ARN.' })),
    AutoDetectionMetricSource: AutoDetectionMetricSourceSchema.and(
      z.any().openapi({ description: 'A data source.' }),
    ),
  })
  .openapi({
    required: ['AnomalyDetectorArn', 'AutoDetectionMetricSource'],
    title: 'DetectMetricSetConfigRequest',
  })
  .openapi('DetectMetricSetConfigRequest')

const GetAnomalyGroupRequestSchema = z
  .object({
    AnomalyGroupId: UUIDSchema.and(
      z.any().openapi({ description: 'The ID of the anomaly group.' }),
    ),
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the anomaly detector.' }),
    ),
  })
  .openapi({ required: ['AnomalyGroupId', 'AnomalyDetectorArn'], title: 'GetAnomalyGroupRequest' })
  .openapi('GetAnomalyGroupRequest')

const GetDataQualityMetricsRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the anomaly detector that you want to investigate.',
        }),
    ),
    MetricSetArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of a specific data quality metric set.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AnomalyDetectorArn'], title: 'GetDataQualityMetricsRequest' })
  .openapi('GetDataQualityMetricsRequest')

const GetFeedbackRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the anomaly detector.' }),
    ),
    AnomalyGroupTimeSeriesFeedback: AnomalyGroupTimeSeriesSchema.and(
      z.any().openapi({ description: 'The anomalous metric and group ID.' }),
    ),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AnomalyDetectorArn', 'AnomalyGroupTimeSeriesFeedback'],
    title: 'GetFeedbackRequest',
  })
  .openapi('GetFeedbackRequest')

const SampleDataS3SourceConfigSchema = z
  .object({
    RoleArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the role.' }),
    ),
    TemplatedPathList: TemplatedPathListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of strings containing the list of templated paths.' }),
    ).exactOptional(),
    HistoricalDataPathList: HistoricalDataPathListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of strings containing the historical set of data paths.',
        }),
    ).exactOptional(),
    FileFormatDescriptor: FileFormatDescriptorSchema,
  })
  .openapi({
    required: ['RoleArn', 'FileFormatDescriptor'],
    description: 'Contains information about the source configuration in Amazon S3.',
  })
  .openapi('SampleDataS3SourceConfig')

const GetSampleDataRequestSchema = z
  .object({
    S3SourceConfig: SampleDataS3SourceConfigSchema.and(
      z.any().openapi({ description: 'A datasource bucket in Amazon S3.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetSampleDataRequest', required: [] })
  .openapi('GetSampleDataRequest')

const ListAlertsRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: "The ARN of the alert's detector." }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request is truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results that will be displayed by the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListAlertsRequest', required: [] })
  .openapi('ListAlertsRequest')

const ListAnomalyDetectorsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListAnomalyDetectorsRequest', required: [] })
  .openapi('ListAnomalyDetectorsRequest')

const ListAnomalyGroupRelatedMetricsRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the anomaly detector.' }),
    ),
    AnomalyGroupId: UUIDSchema.and(
      z.any().openapi({ description: 'The ID of the anomaly group.' }),
    ),
    RelationshipTypeFilter: RelationshipTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filter for potential causes (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>) or downstream effects (<code>EFFECT_OF_INPUT_ANOMALY_GROUP</code>) of the anomaly group.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AnomalyDetectorArn', 'AnomalyGroupId'],
    title: 'ListAnomalyGroupRelatedMetricsRequest',
  })
  .openapi('ListAnomalyGroupRelatedMetricsRequest')

const ListAnomalyGroupSummariesRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the anomaly detector.' }),
    ),
    SensitivityThreshold: SensitivityThresholdSchema.and(
      z.any().openapi({ description: 'The minimum severity score for inclusion in the output.' }),
    ),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AnomalyDetectorArn', 'SensitivityThreshold'],
    title: 'ListAnomalyGroupSummariesRequest',
  })
  .openapi('ListAnomalyGroupSummariesRequest')

const ListAnomalyGroupTimeSeriesRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the anomaly detector.' }),
    ),
    AnomalyGroupId: UUIDSchema.and(
      z.any().openapi({ description: 'The ID of the anomaly group.' }),
    ),
    MetricName: MetricNameSchema.and(
      z.any().openapi({ description: 'The name of the measure field.' }),
    ),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AnomalyDetectorArn', 'AnomalyGroupId', 'MetricName'],
    title: 'ListAnomalyGroupTimeSeriesRequest',
  })
  .openapi('ListAnomalyGroupTimeSeriesRequest')

const ListMetricSetsRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the anomaly detector containing the metrics sets to list.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListMetricSetsRequest', required: [] })
  .openapi('ListMetricSetsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutFeedbackRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the anomaly detector.' }),
    ),
    AnomalyGroupTimeSeriesFeedback: AnomalyGroupTimeSeriesFeedbackSchema.and(
      z.any().openapi({ description: 'Feedback for an anomalous metric.' }),
    ),
  })
  .openapi({
    required: ['AnomalyDetectorArn', 'AnomalyGroupTimeSeriesFeedback'],
    title: 'PutFeedbackRequest',
  })
  .openapi('PutFeedbackRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'Tags to apply to the resource. Tag keys and values can contain letters, numbers, spaces, and the following symbols: <code>_.:/=+@-</code> ',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAlertRequestSchema = z
  .object({
    AlertArn: ArnSchema.and(z.any().openapi({ description: 'The ARN of the alert to update.' })),
    AlertDescription: AlertDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the alert.' }),
    ).exactOptional(),
    AlertSensitivityThreshold: SensitivityThresholdSchema.and(
      z
        .any()
        .openapi({
          description: 'An integer from 0 to 100 specifying the alert sensitivity threshold.',
        }),
    ).exactOptional(),
    Action: ActionSchema.and(
      z.any().openapi({ description: 'Action that will be triggered when there is an alert.' }),
    ).exactOptional(),
    AlertFilters: AlertFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration of the alert filters, containing MetricList and DimensionFilterList.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AlertArn'], title: 'UpdateAlertRequest' })
  .openapi('UpdateAlertRequest')

const UpdateAnomalyDetectorRequestSchema = z
  .object({
    AnomalyDetectorArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the detector to update.' }),
    ),
    KmsKeyArn: KmsKeyArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of an AWS KMS encryption key.' }),
    ).exactOptional(),
    AnomalyDetectorDescription: AnomalyDetectorDescriptionSchema.and(
      z.any().openapi({ description: 'The updated detector description.' }),
    ).exactOptional(),
    AnomalyDetectorConfig: AnomalyDetectorConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the configuration to which the detector will be updated.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AnomalyDetectorArn'], title: 'UpdateAnomalyDetectorRequest' })
  .openapi('UpdateAnomalyDetectorRequest')

const UpdateMetricSetRequestSchema = z
  .object({
    MetricSetArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the dataset to update.' }),
    ),
    MetricSetDescription: MetricSetDescriptionSchema.and(
      z.any().openapi({ description: "The dataset's description." }),
    ).exactOptional(),
    MetricList: MetricListSchema.and(
      z.any().openapi({ description: 'The metric list.' }),
    ).exactOptional(),
    Offset: OffsetSchema.and(
      z
        .any()
        .openapi({
          description:
            'After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.',
        }),
    ).exactOptional(),
    TimestampColumn: TimestampColumnSchema.and(
      z.any().openapi({ description: 'The timestamp column.' }),
    ).exactOptional(),
    DimensionList: DimensionListSchema.and(
      z.any().openapi({ description: 'The dimension list.' }),
    ).exactOptional(),
    MetricSetFrequency: FrequencySchema.and(
      z.any().openapi({ description: "The dataset's interval." }),
    ).exactOptional(),
    MetricSource: MetricSourceSchema.exactOptional(),
    DimensionFilterList: MetricSetDimensionFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes a list of filters for choosing specific dimensions and specific values. Each filter consists of the dimension and one of its values that you want to include. When multiple dimensions or values are specified, the dimensions are joined with an AND operation and the values are joined with an OR operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['MetricSetArn'], title: 'UpdateMetricSetRequest' })
  .openapi('UpdateMetricSetRequest')

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

export const postActivateAnomalyDetectorRoute = createRoute({
  method: 'post',
  path: '/ActivateAnomalyDetector',
  description: 'Activates an anomaly detector.',
  operationId: 'ActivateAnomalyDetector',
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
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({ description: 'The ARN of the anomaly detector.' }),
            })
            .openapi({ required: ['AnomalyDetectorArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ActivateAnomalyDetectorResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postBackTestAnomalyDetectorRoute = createRoute({
  method: 'post',
  path: '/BackTestAnomalyDetector',
  description: 'Runs a backtest for anomaly detection for the specified resource.',
  operationId: 'BackTestAnomalyDetector',
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
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the anomaly detector.',
                }),
            })
            .openapi({ required: ['AnomalyDetectorArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BackTestAnomalyDetectorResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postCreateAlertRoute = createRoute({
  method: 'post',
  path: '/CreateAlert',
  description: 'Creates an alert for an anomaly detector.',
  operationId: 'CreateAlert',
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
              AlertName: z
                .string()
                .regex(/^[a-zA-Z0-9][a-zA-Z0-9\-_]*/)
                .min(1)
                .max(63)
                .openapi({ description: 'The name of the alert.' }),
              AlertSensitivityThreshold: z
                .int()
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'An integer from 0 to 100 specifying the alert sensitivity threshold.',
                }),
              AlertDescription: z
                .string()
                .regex(/.*\S.*/)
                .max(256)
                .exactOptional()
                .openapi({ description: 'A description of the alert.' }),
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({
                  description: 'The ARN of the detector to which the alert is attached.',
                }),
              Action: z
                .object({
                  SNSConfiguration: SNSConfigurationSchema.and(
                    z.any().openapi({ description: 'A configuration for an Amazon SNS channel.' }),
                  ).exactOptional(),
                  LambdaConfiguration: LambdaConfigurationSchema.and(
                    z.any().openapi({ description: 'A configuration for an AWS Lambda channel.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'A configuration that specifies the action to perform when anomalies are detected.',
                  required: [],
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the alert.',
                }),
              AlertFilters: z
                .object({
                  MetricList: MetricNameListSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The list of measures that you want to get alerts for.',
                      }),
                  ).exactOptional(),
                  DimensionFilterList: DimensionFilterListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The list of DimensionFilter objects that are used for dimension-based filtering.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'The configuration of the alert filters.', required: [] }),
            })
            .openapi({ required: ['AlertName', 'AnomalyDetectorArn', 'Action'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAlertResponseSchema } },
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
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postCreateAnomalyDetectorRoute = createRoute({
  method: 'post',
  path: '/CreateAnomalyDetector',
  description: 'Creates an anomaly detector.',
  operationId: 'CreateAnomalyDetector',
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
              AnomalyDetectorName: z
                .string()
                .regex(/^[a-zA-Z0-9][a-zA-Z0-9\-_]*/)
                .min(1)
                .max(63)
                .openapi({ description: 'The name of the detector.' }),
              AnomalyDetectorDescription: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'A description of the detector.' }),
              AnomalyDetectorConfig: z
                .object({
                  AnomalyDetectorFrequency: FrequencySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The frequency at which the detector analyzes its source data.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: "Contains information about a detector's configuration.",
                  required: [],
                }),
              KmsKeyArn: z
                .string()
                .regex(
                  /arn:aws.*:kms:.*:[0-9]{12}:key\/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/,
                )
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The ARN of the KMS key to use to encrypt your data.' }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the anomaly detector.',
                }),
            })
            .openapi({ required: ['AnomalyDetectorName', 'AnomalyDetectorConfig'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAnomalyDetectorResponseSchema } },
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
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postCreateMetricSetRoute = createRoute({
  method: 'post',
  path: '/CreateMetricSet',
  description: 'Creates a dataset.',
  operationId: 'CreateMetricSet',
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
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({
                  description: 'The ARN of the anomaly detector that will use the dataset.',
                }),
              MetricSetName: z
                .string()
                .regex(/^[a-zA-Z0-9][a-zA-Z0-9\-_]*/)
                .min(1)
                .max(63)
                .openapi({ description: 'The name of the dataset.' }),
              MetricSetDescription: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'A description of the dataset you are creating.' }),
              MetricList: z
                .array(MetricSchema)
                .min(1)
                .openapi({ description: 'A list of metrics that the dataset will contain.' }),
              Offset: z
                .int()
                .min(0)
                .max(432000)
                .exactOptional()
                .openapi({
                  description:
                    'After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.',
                }),
              TimestampColumn: z
                .object({
                  ColumnName: ColumnNameSchema.and(
                    z.any().openapi({ description: 'The name of the timestamp column.' }),
                  ).exactOptional(),
                  ColumnFormat: DateTimeFormatSchema.and(
                    z.any().openapi({ description: 'The format of the timestamp column.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains information about the column used to track time in a source data file.',
                  required: [],
                }),
              DimensionList: z
                .array(ColumnNameSchema)
                .min(1)
                .exactOptional()
                .openapi({ description: 'A list of the fields you want to treat as dimensions.' }),
              MetricSetFrequency: z
                .enum(['P1D', 'PT1H', 'PT10M', 'PT5M'])
                .exactOptional()
                .openapi({
                  description:
                    'The frequency with which the source data will be analyzed for anomalies.',
                }),
              MetricSource: z
                .object({
                  S3SourceConfig: S3SourceConfigSchema.exactOptional(),
                  AppFlowConfig: AppFlowConfigSchema.and(
                    z.any().openapi({ description: 'Details about an AppFlow datasource.' }),
                  ).exactOptional(),
                  CloudWatchConfig: CloudWatchConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Details about an Amazon CloudWatch monitoring datasource.',
                      }),
                  ).exactOptional(),
                  RDSSourceConfig: RDSSourceConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Details about an Amazon Relational Database Service (RDS) datasource.',
                      }),
                  ).exactOptional(),
                  RedshiftSourceConfig: RedshiftSourceConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Details about an Amazon Redshift database datasource.',
                      }),
                  ).exactOptional(),
                  AthenaSourceConfig: AthenaSourceConfigSchema.and(
                    z.any().openapi({ description: 'Details about an Amazon Athena datasource.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Contains information about source data used to generate metrics.',
                  required: [],
                }),
              Timezone: z
                .string()
                .regex(/.*\S.*/)
                .max(60)
                .exactOptional()
                .openapi({ description: 'The time zone in which your source data was recorded.' }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the dataset.',
                }),
              DimensionFilterList: z
                .array(MetricSetDimensionFilterSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of filters that specify which data is kept for anomaly detection.',
                }),
            })
            .openapi({
              required: ['AnomalyDetectorArn', 'MetricSetName', 'MetricList', 'MetricSource'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMetricSetResponseSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDeactivateAnomalyDetectorRoute = createRoute({
  method: 'post',
  path: '/DeactivateAnomalyDetector',
  description: 'Deactivates an anomaly detector.',
  operationId: 'DeactivateAnomalyDetector',
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
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the anomaly detector.',
                }),
            })
            .openapi({ required: ['AnomalyDetectorArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeactivateAnomalyDetectorResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDeleteAlertRoute = createRoute({
  method: 'post',
  path: '/DeleteAlert',
  description: 'Deletes an alert.',
  operationId: 'DeleteAlert',
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
              AlertArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({ description: 'The ARN of the alert to delete.' }),
            })
            .openapi({ required: ['AlertArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAlertResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDeleteAnomalyDetectorRoute = createRoute({
  method: 'post',
  path: '/DeleteAnomalyDetector',
  description:
    'Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any configured datasets and alerts.',
  operationId: 'DeleteAnomalyDetector',
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
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({ description: 'The ARN of the detector to delete.' }),
            })
            .openapi({ required: ['AnomalyDetectorArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAnomalyDetectorResponseSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDescribeAlertRoute = createRoute({
  method: 'post',
  path: '/DescribeAlert',
  description:
    '<p>Describes an alert.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>',
  operationId: 'DescribeAlert',
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
              AlertArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({ description: 'The ARN of the alert to describe.' }),
            })
            .openapi({ required: ['AlertArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAlertResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postDescribeAnomalyDetectionExecutionsRoute = createRoute({
  method: 'post',
  path: '/DescribeAnomalyDetectionExecutions',
  description: 'Returns information about the status of the specified anomaly detection jobs.',
  operationId: 'DescribeAnomalyDetectionExecutions',
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
      content: {
        'application/json': {
          schema: z
            .object({
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the anomaly detector.',
                }),
              Timestamp: z
                .string()
                .regex(
                  /^([12]\d{3})-(1[0-2]|0[1-9])-(0[1-9]|[12]\d|3[01])T([01]\d|2[0-3]):([0-5]\d):([0-5]\d)(Z|(\+|\-)(0\d|1[0-2]):([0-5]\d)(\[[[:alnum:]\/\_]+\])?)$/,
                )
                .max(60)
                .exactOptional()
                .openapi({ description: 'The timestamp of the anomaly detection job.' }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The number of items to return in the response.' }),
              NextToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(3000)
                .exactOptional()
                .openapi({
                  description:
                    "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
                }),
            })
            .openapi({ required: ['AnomalyDetectorArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAnomalyDetectionExecutionsResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDescribeAnomalyDetectorRoute = createRoute({
  method: 'post',
  path: '/DescribeAnomalyDetector',
  description:
    '<p>Describes a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>',
  operationId: 'DescribeAnomalyDetector',
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
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({ description: 'The ARN of the detector to describe.' }),
            })
            .openapi({ required: ['AnomalyDetectorArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAnomalyDetectorResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postDescribeMetricSetRoute = createRoute({
  method: 'post',
  path: '/DescribeMetricSet',
  description:
    '<p>Describes a dataset.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>',
  operationId: 'DescribeMetricSet',
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
              MetricSetArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({ description: 'The ARN of the dataset.' }),
            })
            .openapi({ required: ['MetricSetArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMetricSetResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDetectMetricSetConfigRoute = createRoute({
  method: 'post',
  path: '/DetectMetricSetConfig',
  description: "Detects an Amazon S3 dataset's file format, interval, and offset.",
  operationId: 'DetectMetricSetConfig',
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
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({ description: 'An anomaly detector ARN.' }),
              AutoDetectionMetricSource: z
                .object({
                  S3SourceConfig: AutoDetectionS3SourceConfigSchema.and(
                    z.any().openapi({ description: "The source's source config." }),
                  ).exactOptional(),
                })
                .openapi({ description: 'An auto detection metric source.', required: [] }),
            })
            .openapi({ required: ['AnomalyDetectorArn', 'AutoDetectionMetricSource'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectMetricSetConfigResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postGetAnomalyGroupRoute = createRoute({
  method: 'post',
  path: '/GetAnomalyGroup',
  description: 'Returns details about a group of anomalous metrics.',
  operationId: 'GetAnomalyGroup',
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
              AnomalyGroupId: z
                .string()
                .regex(/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/)
                .max(63)
                .openapi({ description: 'The ID of the anomaly group.' }),
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the anomaly detector.',
                }),
            })
            .openapi({ required: ['AnomalyGroupId', 'AnomalyDetectorArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAnomalyGroupResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postGetDataQualityMetricsRoute = createRoute({
  method: 'post',
  path: '/GetDataQualityMetrics',
  description: 'Returns details about the requested data quality metrics.',
  operationId: 'GetDataQualityMetrics',
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
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the anomaly detector that you want to investigate.',
                }),
              MetricSetArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of a specific data quality metric set.',
                }),
            })
            .openapi({ required: ['AnomalyDetectorArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDataQualityMetricsResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postGetFeedbackRoute = createRoute({
  method: 'post',
  path: '/GetFeedback',
  description: 'Get feedback for an anomaly group.',
  operationId: 'GetFeedback',
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
      content: {
        'application/json': {
          schema: z
            .object({
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the anomaly detector.',
                }),
              AnomalyGroupTimeSeriesFeedback: z
                .object({
                  AnomalyGroupId: UUIDSchema.and(
                    z.any().openapi({ description: 'The ID of the anomaly group.' }),
                  ).exactOptional(),
                  TimeSeriesId: TimeSeriesIdSchema.and(
                    z.any().openapi({ description: 'The ID of the metric.' }),
                  ).exactOptional(),
                })
                .openapi({ description: 'An anomalous metric in an anomaly group.', required: [] }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to return.' }),
              NextToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(3000)
                .exactOptional()
                .openapi({
                  description:
                    "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
                }),
            })
            .openapi({ required: ['AnomalyDetectorArn', 'AnomalyGroupTimeSeriesFeedback'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFeedbackResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postGetSampleDataRoute = createRoute({
  method: 'post',
  path: '/GetSampleData',
  description: 'Returns a selection of sample records from an Amazon S3 datasource.',
  operationId: 'GetSampleData',
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
              S3SourceConfig: z
                .object({
                  RoleArn: ArnSchema.and(
                    z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the role.' }),
                  ).exactOptional(),
                  TemplatedPathList: TemplatedPathListSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'An array of strings containing the list of templated paths.',
                      }),
                  ).exactOptional(),
                  HistoricalDataPathList: HistoricalDataPathListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array of strings containing the historical set of data paths.',
                      }),
                  ).exactOptional(),
                  FileFormatDescriptor: FileFormatDescriptorSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains information about the source configuration in Amazon S3.',
                  required: [],
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
      content: { 'application/json': { schema: GetSampleDataResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postListAlertsRoute = createRoute({
  method: 'post',
  path: '/ListAlerts',
  description:
    '<p>Lists the alerts attached to a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>',
  operationId: 'ListAlerts',
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
      content: {
        'application/json': {
          schema: z
            .object({
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .exactOptional()
                .openapi({ description: "The ARN of the alert's detector." }),
              NextToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(3000)
                .exactOptional()
                .openapi({
                  description:
                    'If the result of the previous request is truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of results that will be displayed by the request.',
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
      content: { 'application/json': { schema: ListAlertsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postListAnomalyDetectorsRoute = createRoute({
  method: 'post',
  path: '/ListAnomalyDetectors',
  description:
    '<p>Lists the detectors in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>',
  operationId: 'ListAnomalyDetectors',
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
      content: {
        'application/json': {
          schema: z
            .object({
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to return.' }),
              NextToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(3000)
                .exactOptional()
                .openapi({
                  description:
                    'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
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
      content: { 'application/json': { schema: ListAnomalyDetectorsResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postListAnomalyGroupRelatedMetricsRoute = createRoute({
  method: 'post',
  path: '/ListAnomalyGroupRelatedMetrics',
  description:
    'Returns a list of measures that are potential causes or effects of an anomaly group.',
  operationId: 'ListAnomalyGroupRelatedMetrics',
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
      content: {
        'application/json': {
          schema: z
            .object({
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the anomaly detector.',
                }),
              AnomalyGroupId: z
                .string()
                .regex(/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/)
                .max(63)
                .openapi({ description: 'The ID of the anomaly group.' }),
              RelationshipTypeFilter: z
                .enum(['CAUSE_OF_INPUT_ANOMALY_GROUP', 'EFFECT_OF_INPUT_ANOMALY_GROUP'])
                .exactOptional()
                .openapi({
                  description:
                    'Filter for potential causes (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>) or downstream effects (<code>EFFECT_OF_INPUT_ANOMALY_GROUP</code>) of the anomaly group.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to return.' }),
              NextToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(3000)
                .exactOptional()
                .openapi({
                  description:
                    "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
                }),
            })
            .openapi({ required: ['AnomalyDetectorArn', 'AnomalyGroupId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAnomalyGroupRelatedMetricsResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postListAnomalyGroupSummariesRoute = createRoute({
  method: 'post',
  path: '/ListAnomalyGroupSummaries',
  description: 'Returns a list of anomaly groups.',
  operationId: 'ListAnomalyGroupSummaries',
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
      content: {
        'application/json': {
          schema: z
            .object({
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the anomaly detector.',
                }),
              SensitivityThreshold: z
                .int()
                .min(0)
                .max(100)
                .openapi({
                  description: 'The minimum severity score for inclusion in the output.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to return.' }),
              NextToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(3000)
                .exactOptional()
                .openapi({
                  description:
                    "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
                }),
            })
            .openapi({ required: ['AnomalyDetectorArn', 'SensitivityThreshold'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAnomalyGroupSummariesResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postListAnomalyGroupTimeSeriesRoute = createRoute({
  method: 'post',
  path: '/ListAnomalyGroupTimeSeries',
  description: 'Gets a list of anomalous metrics for a measure in an anomaly group.',
  operationId: 'ListAnomalyGroupTimeSeries',
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
      content: {
        'application/json': {
          schema: z
            .object({
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the anomaly detector.',
                }),
              AnomalyGroupId: z
                .string()
                .regex(/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/)
                .max(63)
                .openapi({ description: 'The ID of the anomaly group.' }),
              MetricName: z
                .string()
                .regex(/^[a-zA-Z0-9][a-zA-Z0-9\-_]*/)
                .max(256)
                .openapi({ description: 'The name of the measure field.' }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to return.' }),
              NextToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(3000)
                .exactOptional()
                .openapi({
                  description:
                    "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
                }),
            })
            .openapi({ required: ['AnomalyDetectorArn', 'AnomalyGroupId', 'MetricName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAnomalyGroupTimeSeriesResponseSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postListMetricSetsRoute = createRoute({
  method: 'post',
  path: '/ListMetricSets',
  description:
    '<p>Lists the datasets in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>',
  operationId: 'ListMetricSets',
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
      content: {
        'application/json': {
          schema: z
            .object({
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The ARN of the anomaly detector containing the metrics sets to list.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to return.' }),
              NextToken: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(3000)
                .exactOptional()
                .openapi({
                  description:
                    'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
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
      content: { 'application/json': { schema: ListMetricSetsResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description:
    'Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.',
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
        .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
        .max(256)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: "The resource's Amazon Resource Name (ARN).",
            schema: { type: 'string', pattern: 'arn:([a-z\\d-]+):.*:.*:.*:.+', maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    'Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.',
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
        .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
        .max(256)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: "The resource's Amazon Resource Name (ARN).",
            schema: { type: 'string', pattern: 'arn:([a-z\\d-]+):.*:.*:.*:.+', maxLength: 256 },
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
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description:
                    'Tags to apply to the resource. Tag keys and values can contain letters, numbers, spaces, and the following symbols: <code>_.:/=+@-</code> ',
                }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postPutFeedbackRoute = createRoute({
  method: 'post',
  path: '/PutFeedback',
  description: 'Add feedback for an anomalous metric.',
  operationId: 'PutFeedback',
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
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the anomaly detector.',
                }),
              AnomalyGroupTimeSeriesFeedback: z
                .object({
                  AnomalyGroupId: UUIDSchema.and(
                    z.any().openapi({ description: 'The ID of the anomaly group.' }),
                  ).exactOptional(),
                  TimeSeriesId: TimeSeriesIdSchema.and(
                    z.any().openapi({ description: 'The ID of the metric.' }),
                  ).exactOptional(),
                  IsAnomaly: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Feedback on whether the metric is a legitimate anomaly.',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'Feedback for an anomalous metric.', required: [] }),
            })
            .openapi({ required: ['AnomalyDetectorArn', 'AnomalyGroupTimeSeriesFeedback'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutFeedbackResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description:
    'Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.',
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
        .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
        .max(256)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: "The resource's Amazon Resource Name (ARN).",
            schema: { type: 'string', pattern: 'arn:([a-z\\d-]+):.*:.*:.*:.+', maxLength: 256 },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(1).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: "Keys to remove from the resource's tags.",
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
              maxItems: 50,
            },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postUpdateAlertRoute = createRoute({
  method: 'post',
  path: '/UpdateAlert',
  description: 'Make changes to an existing alert.',
  operationId: 'UpdateAlert',
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
              AlertArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({ description: 'The ARN of the alert to update.' }),
              AlertDescription: z
                .string()
                .regex(/.*\S.*/)
                .max(256)
                .exactOptional()
                .openapi({ description: 'A description of the alert.' }),
              AlertSensitivityThreshold: z
                .int()
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'An integer from 0 to 100 specifying the alert sensitivity threshold.',
                }),
              Action: z
                .object({
                  SNSConfiguration: SNSConfigurationSchema.and(
                    z.any().openapi({ description: 'A configuration for an Amazon SNS channel.' }),
                  ).exactOptional(),
                  LambdaConfiguration: LambdaConfigurationSchema.and(
                    z.any().openapi({ description: 'A configuration for an AWS Lambda channel.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A configuration that specifies the action to perform when anomalies are detected.',
                  required: [],
                }),
              AlertFilters: z
                .object({
                  MetricList: MetricNameListSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The list of measures that you want to get alerts for.',
                      }),
                  ).exactOptional(),
                  DimensionFilterList: DimensionFilterListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The list of DimensionFilter objects that are used for dimension-based filtering.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'The configuration of the alert filters.', required: [] }),
            })
            .openapi({ required: ['AlertArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAlertResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postUpdateAnomalyDetectorRoute = createRoute({
  method: 'post',
  path: '/UpdateAnomalyDetector',
  description:
    "Updates a detector. After activation, you can only change a detector's ingestion delay and description.",
  operationId: 'UpdateAnomalyDetector',
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
              AnomalyDetectorArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({ description: 'The ARN of the detector to update.' }),
              KmsKeyArn: z
                .string()
                .regex(
                  /arn:aws.*:kms:.*:[0-9]{12}:key\/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/,
                )
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of an AWS KMS encryption key.',
                }),
              AnomalyDetectorDescription: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The updated detector description.' }),
              AnomalyDetectorConfig: z
                .object({
                  AnomalyDetectorFrequency: FrequencySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The frequency at which the detector analyzes its source data.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: "Contains information about a detector's configuration.",
                  required: [],
                }),
            })
            .openapi({ required: ['AnomalyDetectorArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAnomalyDetectorResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postUpdateMetricSetRoute = createRoute({
  method: 'post',
  path: '/UpdateMetricSet',
  description: 'Updates a dataset.',
  operationId: 'UpdateMetricSet',
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
              MetricSetArn: z
                .string()
                .regex(/arn:([a-z\d-]+):.*:.*:.*:.+/)
                .max(256)
                .openapi({ description: 'The ARN of the dataset to update.' }),
              MetricSetDescription: z
                .string()
                .regex(/.*\S.*/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: "The dataset's description." }),
              MetricList: z
                .array(MetricSchema)
                .min(1)
                .exactOptional()
                .openapi({ description: 'The metric list.' }),
              Offset: z
                .int()
                .min(0)
                .max(432000)
                .exactOptional()
                .openapi({
                  description:
                    'After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.',
                }),
              TimestampColumn: z
                .object({
                  ColumnName: ColumnNameSchema.and(
                    z.any().openapi({ description: 'The name of the timestamp column.' }),
                  ).exactOptional(),
                  ColumnFormat: DateTimeFormatSchema.and(
                    z.any().openapi({ description: 'The format of the timestamp column.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains information about the column used to track time in a source data file.',
                  required: [],
                }),
              DimensionList: z
                .array(ColumnNameSchema)
                .min(1)
                .exactOptional()
                .openapi({ description: 'The dimension list.' }),
              MetricSetFrequency: z
                .enum(['P1D', 'PT1H', 'PT10M', 'PT5M'])
                .exactOptional()
                .openapi({ description: "The dataset's interval." }),
              MetricSource: z
                .object({
                  S3SourceConfig: S3SourceConfigSchema.exactOptional(),
                  AppFlowConfig: AppFlowConfigSchema.and(
                    z.any().openapi({ description: 'Details about an AppFlow datasource.' }),
                  ).exactOptional(),
                  CloudWatchConfig: CloudWatchConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Details about an Amazon CloudWatch monitoring datasource.',
                      }),
                  ).exactOptional(),
                  RDSSourceConfig: RDSSourceConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Details about an Amazon Relational Database Service (RDS) datasource.',
                      }),
                  ).exactOptional(),
                  RedshiftSourceConfig: RedshiftSourceConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Details about an Amazon Redshift database datasource.',
                      }),
                  ).exactOptional(),
                  AthenaSourceConfig: AthenaSourceConfigSchema.and(
                    z.any().openapi({ description: 'Details about an Amazon Athena datasource.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains information about source data used to generate metrics.',
                  required: [],
                }),
              DimensionFilterList: z
                .array(MetricSetDimensionFilterSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Describes a list of filters for choosing specific dimensions and specific values. Each filter consists of the dimension and one of its values that you want to include. When multiple dimensions or values are specified, the dimensions are joined with an AND operation and the values are joined with an OR operation.',
                }),
            })
            .openapi({ required: ['MetricSetArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateMetricSetResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})
