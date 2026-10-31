import { createRoute, z } from '@hono/zod-openapi'

const KinesisStreamARNSchema = z
  .string()
  .regex(/arn:.*/)
  .min(1)
  .max(512)
  .openapi('KinesisStreamARN')

const RoleARNSchema = z
  .string()
  .regex(/arn:.*/)
  .min(1)
  .max(512)
  .openapi('RoleARN')

const DeliveryStartTimestampSchema = z.iso
  .datetime({ offset: true })
  .openapi('DeliveryStartTimestamp')

const KinesisStreamSourceDescriptionSchema = z
  .object({
    KinesisStreamARN: KinesisStreamARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the source Kinesis data stream. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon Kinesis Data Streams ARN Format</a>.',
        }),
    ).exactOptional(),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role used by the source Kinesis data stream. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam">Amazon Web Services Identity and Access Management (IAM) ARN Format</a>.',
        }),
    ).exactOptional(),
    DeliveryStartTimestamp: DeliveryStartTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Kinesis Data Firehose starts retrieving records from the Kinesis data stream starting with this timestamp.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.',
    required: [],
  })
  .openapi('KinesisStreamSourceDescription')

type SourceDescriptionType = {
  KinesisStreamSourceDescription?: z.infer<typeof KinesisStreamSourceDescriptionSchema> & {
    [key: string]: unknown
  }
}

const DestinationIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9-]+/)
  .min(1)
  .max(100)
  .openapi('DestinationId')

const BucketARNSchema = z
  .string()
  .regex(/arn:.*/)
  .min(1)
  .max(2048)
  .openapi('BucketARN')

const PrefixSchema = z.string().regex(/.*/).min(0).max(1024).openapi('Prefix')

const ErrorOutputPrefixSchema = z.string().regex(/.*/).min(0).max(1024).openapi('ErrorOutputPrefix')

const SizeInMBsSchema = z.int().min(1).max(128).openapi('SizeInMBs')

const IntervalInSecondsSchema = z.int().min(60).max(900).openapi('IntervalInSeconds')

const BufferingHintsSchema = z
  .object({
    SizeInMBs: SizeInMBsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Buffer incoming data to the specified size, in MiBs, before delivering it to the destination. The default value is 5. This parameter is optional but if you specify a value for it, you must also specify a value for <code>IntervalInSeconds</code>, and vice versa.</p> <p>We recommend setting this parameter to a value greater than the amount of data you typically ingest into the delivery stream in 10 seconds. For example, if you typically ingest data at 1 MiB/sec, the value should be 10 MiB or higher.</p>',
        }),
    ).exactOptional(),
    IntervalInSeconds: IntervalInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300. This parameter is optional but if you specify a value for it, you must also specify a value for <code>SizeInMBs</code>, and vice versa.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.',
    required: [],
  })
  .openapi('BufferingHints')

const CompressionFormatSchema = z
  .enum(['UNCOMPRESSED', 'GZIP', 'ZIP', 'Snappy', 'HADOOP_SNAPPY'])
  .openapi('CompressionFormat')

const NoEncryptionConfigSchema = z.literal('NoEncryption').openapi('NoEncryptionConfig')

const AWSKMSKeyARNSchema = z
  .string()
  .regex(/arn:.*/)
  .min(1)
  .max(512)
  .openapi('AWSKMSKeyARN')

const KMSEncryptionConfigSchema = z
  .object({
    AWSKMSKeyARN: AWSKMSKeyARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the encryption key. Must belong to the same Amazon Web Services Region as the destination Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ),
  })
  .openapi({
    required: ['AWSKMSKeyARN'],
    description: 'Describes an encryption key for a destination in Amazon S3.',
  })
  .openapi('KMSEncryptionConfig')

const EncryptionConfigurationSchema = z
  .object({
    NoEncryptionConfig: NoEncryptionConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifically override existing encryption information to ensure that no encryption is used.',
        }),
    ).exactOptional(),
    KMSEncryptionConfig: KMSEncryptionConfigSchema.and(
      z.any().openapi({ description: 'The encryption key.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the encryption for a destination in Amazon S3.',
    required: [],
  })
  .openapi('EncryptionConfiguration')

const BooleanObjectSchema = z.boolean().openapi('BooleanObject')

const LogGroupNameSchema = z
  .string()
  .regex(/[\.\-_\/#A-Za-z0-9]*/)
  .min(0)
  .max(512)
  .openapi('LogGroupName')

const LogStreamNameSchema = z
  .string()
  .regex(/[^:*]*/)
  .min(0)
  .max(512)
  .openapi('LogStreamName')

const CloudWatchLoggingOptionsSchema = z
  .object({
    Enabled: BooleanObjectSchema.and(
      z.any().openapi({ description: 'Enables or disables CloudWatch logging.' }),
    ).exactOptional(),
    LogGroupName: LogGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The CloudWatch group name for logging. This value is required if CloudWatch logging is enabled.',
        }),
    ).exactOptional(),
    LogStreamName: LogStreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The CloudWatch log stream name for logging. This value is required if CloudWatch logging is enabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the Amazon CloudWatch logging options for your delivery stream.',
    required: [],
  })
  .openapi('CloudWatchLoggingOptions')

const S3DestinationDescriptionSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ),
    BucketARN: BucketARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ),
    Prefix: PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3 files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3 Objects</a>.',
        }),
    ).exactOptional(),
    ErrorOutputPrefix: ErrorOutputPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3 Objects</a>.',
        }),
    ).exactOptional(),
    BufferingHints: BufferingHintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The buffering option. If no value is specified, <code>BufferingHints</code> object default values are used.',
        }),
    ),
    CompressionFormat: CompressionFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compression format. If no value is specified, the default is <code>UNCOMPRESSED</code>.',
        }),
    ),
    EncryptionConfiguration: EncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption configuration. If no value is specified, the default is no encryption.',
        }),
    ),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon CloudWatch logging options for your delivery stream.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'RoleARN',
      'BucketARN',
      'BufferingHints',
      'CompressionFormat',
      'EncryptionConfiguration',
    ],
    description: 'Describes a destination in Amazon S3.',
  })
  .openapi('S3DestinationDescription')

const ProcessorTypeSchema = z
  .enum(['RecordDeAggregation', 'Lambda', 'MetadataExtraction', 'AppendDelimiterToRecord'])
  .openapi('ProcessorType')

const ProcessorParameterNameSchema = z
  .enum([
    'LambdaArn',
    'NumberOfRetries',
    'MetadataExtractionQuery',
    'JsonParsingEngine',
    'RoleArn',
    'BufferSizeInMBs',
    'BufferIntervalInSeconds',
    'SubRecordType',
    'Delimiter',
  ])
  .openapi('ProcessorParameterName')

const ProcessorParameterValueSchema = z
  .string()
  .regex(/^(?!\s*$).+/)
  .min(1)
  .max(5120)
  .openapi('ProcessorParameterValue')

const ProcessorParameterSchema = z
  .object({
    ParameterName: ProcessorParameterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the parameter. Currently the following default values are supported: 3 for <code>NumberOfRetries</code> and 60 for the <code>BufferIntervalInSeconds</code>. The <code>BufferSizeInMBs</code> ranges between 0.2 MB and up to 3MB. The default buffering hint is 1MB for all destinations, except Splunk. For Splunk, the default buffering hint is 256 KB. ',
        }),
    ),
    ParameterValue: ProcessorParameterValueSchema.and(
      z.any().openapi({ description: 'The parameter value.' }),
    ),
  })
  .openapi({
    required: ['ParameterName', 'ParameterValue'],
    description: 'Describes the processor parameter. ',
  })
  .openapi('ProcessorParameter')

const ProcessorParameterListSchema = z
  .array(ProcessorParameterSchema)
  .openapi('ProcessorParameterList')

const ProcessorSchema = z
  .object({
    Type: ProcessorTypeSchema.and(z.any().openapi({ description: 'The type of processor.' })),
    Parameters: ProcessorParameterListSchema.and(
      z.any().openapi({ description: 'The processor parameters.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Type'], description: 'Describes a data processor.' })
  .openapi('Processor')

const ProcessorListSchema = z.array(ProcessorSchema).openapi('ProcessorList')

const ProcessingConfigurationSchema = z
  .object({
    Enabled: BooleanObjectSchema.and(
      z.any().openapi({ description: 'Enables or disables data processing.' }),
    ).exactOptional(),
    Processors: ProcessorListSchema.and(
      z.any().openapi({ description: 'The data processors.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a data processing configuration.', required: [] })
  .openapi('ProcessingConfiguration')

const S3BackupModeSchema = z.enum(['Disabled', 'Enabled']).openapi('S3BackupMode')

const NonEmptyStringWithoutWhitespaceSchema = z
  .string()
  .regex(/^\S+$/)
  .min(1)
  .max(1024)
  .openapi('NonEmptyStringWithoutWhitespace')

const SchemaConfigurationSchema = z
  .object({
    RoleARN: NonEmptyStringWithoutWhitespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The role that Kinesis Data Firehose can use to access Amazon Web Services Glue. This role must be in the same account you use for Kinesis Data Firehose. Cross-account roles aren't allowed.</p> <important> <p>If the <code>SchemaConfiguration</code> request parameter is used as part of invoking the <code>CreateDeliveryStream</code> API, then the <code>RoleARN</code> property is required and its value must be specified.</p> </important>",
        }),
    ).exactOptional(),
    CatalogId: NonEmptyStringWithoutWhitespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the Amazon Web Services Glue Data Catalog. If you don't supply this, the Amazon Web Services account ID is used by default.",
        }),
    ).exactOptional(),
    DatabaseName: NonEmptyStringWithoutWhitespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the name of the Amazon Web Services Glue database that contains the schema for the output data.</p> <important> <p>If the <code>SchemaConfiguration</code> request parameter is used as part of invoking the <code>CreateDeliveryStream</code> API, then the <code>DatabaseName</code> property is required and its value must be specified.</p> </important>',
        }),
    ).exactOptional(),
    TableName: NonEmptyStringWithoutWhitespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the Amazon Web Services Glue table that contains the column information that constitutes your data schema.</p> <important> <p>If the <code>SchemaConfiguration</code> request parameter is used as part of invoking the <code>CreateDeliveryStream</code> API, then the <code>TableName</code> property is required and its value must be specified.</p> </important>',
        }),
    ).exactOptional(),
    Region: NonEmptyStringWithoutWhitespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            "If you don't specify an Amazon Web Services Region, the default is the current Region.",
        }),
    ).exactOptional(),
    VersionId: NonEmptyStringWithoutWhitespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the table version for the output data schema. If you don't specify this version ID, or if you set it to <code>LATEST</code>, Kinesis Data Firehose uses the most recent version. This means that any updates to the table are automatically picked up.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the schema to which you want Kinesis Data Firehose to configure your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true.',
    required: [],
  })
  .openapi('SchemaConfiguration')

const NonEmptyStringSchema = z
  .string()
  .regex(/^(?!\s*$).+/)
  .min(1)
  .max(1024)
  .openapi('NonEmptyString')

const ColumnToJsonKeyMappingsSchema = z
  .record(z.string(), NonEmptyStringSchema)
  .openapi('ColumnToJsonKeyMappings')

const OpenXJsonSerDeSchema = z
  .object({
    ConvertDotsInJsonKeysToUnderscores: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When set to <code>true</code>, specifies that the names of the keys include dots and that you want Kinesis Data Firehose to replace them with underscores. This is useful because Apache Hive does not allow dots in column names. For example, if the JSON contains a key whose name is "a.b", you can define the column name to be "a_b" when using this option.</p> <p>The default is <code>false</code>.</p>',
        }),
    ).exactOptional(),
    CaseInsensitive: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'When set to <code>true</code>, which is the default, Kinesis Data Firehose converts JSON keys to lowercase before deserializing them.',
        }),
    ).exactOptional(),
    ColumnToJsonKeyMappings: ColumnToJsonKeyMappingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maps column names to JSON keys that aren\'t identical to the column names. This is useful when the JSON contains keys that are Hive keywords. For example, <code>timestamp</code> is a Hive keyword. If you have a JSON key named <code>timestamp</code>, set this parameter to <code>{"ts": "timestamp"}</code> to map this key to a column named <code>ts</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.',
    required: [],
  })
  .openapi('OpenXJsonSerDe')

const ListOfNonEmptyStringsSchema = z.array(NonEmptyStringSchema).openapi('ListOfNonEmptyStrings')

const HiveJsonSerDeSchema = z
  .object({
    TimestampFormats: ListOfNonEmptyStringsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates how you want Kinesis Data Firehose to parse the date and timestamps that may be present in your input data JSON. To specify these format strings, follow the pattern syntax of JodaTime\'s DateTimeFormat format strings. For more information, see <a href="https://www.joda.org/joda-time/apidocs/org/joda/time/format/DateTimeFormat.html">Class DateTimeFormat</a>. You can also use the special value <code>millis</code> to parse timestamps in epoch milliseconds. If you don\'t specify a format, Kinesis Data Firehose uses <code>java.sql.Timestamp::valueOf</code> by default.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe.',
    required: [],
  })
  .openapi('HiveJsonSerDe')

const DeserializerSchema = z
  .object({
    OpenXJsonSerDe: OpenXJsonSerDeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.',
        }),
    ).exactOptional(),
    HiveJsonSerDe: HiveJsonSerDeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON. Kinesis Data Firehose then serializes the data to its final format using the <a>Serializer</a>. Kinesis Data Firehose supports two types of deserializers: the <a href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON">Apache Hive JSON SerDe</a> and the <a href="https://github.com/rcongiu/Hive-JSON-Serde">OpenX JSON SerDe</a>.',
    required: [],
  })
  .openapi('Deserializer')

const InputFormatConfigurationSchema = z
  .object({
    Deserializer: DeserializerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies which deserializer to use. You can choose either the Apache Hive JSON SerDe or the OpenX JSON SerDe. If both are non-null, the server rejects the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if <code>Enabled</code> is set to true.',
    required: [],
  })
  .openapi('InputFormatConfiguration')

const BlockSizeBytesSchema = z.int().min(67108864).openapi('BlockSizeBytes')

const ParquetPageSizeBytesSchema = z.int().min(65536).openapi('ParquetPageSizeBytes')

const ParquetCompressionSchema = z
  .enum(['UNCOMPRESSED', 'GZIP', 'SNAPPY'])
  .openapi('ParquetCompression')

const NonNegativeIntegerObjectSchema = z.int().min(0).openapi('NonNegativeIntegerObject')

const ParquetWriterVersionSchema = z.enum(['V1', 'V2']).openapi('ParquetWriterVersion')

const ParquetSerDeSchema = z
  .object({
    BlockSizeBytes: BlockSizeBytesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Kinesis Data Firehose uses this value for padding calculations.',
        }),
    ).exactOptional(),
    PageSizeBytes: ParquetPageSizeBytesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Parquet page size. Column chunks are divided into pages. A page is conceptually an indivisible unit (in terms of compression and encoding). The minimum value is 64 KiB and the default is 1 MiB.',
        }),
    ).exactOptional(),
    Compression: ParquetCompressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compression code to use over data blocks. The possible values are <code>UNCOMPRESSED</code>, <code>SNAPPY</code>, and <code>GZIP</code>, with the default being <code>SNAPPY</code>. Use <code>SNAPPY</code> for higher decompression speed. Use <code>GZIP</code> if the compression ratio is more important than speed.',
        }),
    ).exactOptional(),
    EnableDictionaryCompression: BooleanObjectSchema.and(
      z.any().openapi({ description: 'Indicates whether to enable dictionary compression.' }),
    ).exactOptional(),
    MaxPaddingBytes: NonNegativeIntegerObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum amount of padding to apply. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 0.',
        }),
    ).exactOptional(),
    WriterVersion: ParquetWriterVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the version of row format to output. The possible values are <code>V1</code> and <code>V2</code>. The default is <code>V1</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>.',
    required: [],
  })
  .openapi('ParquetSerDe')

const OrcStripeSizeBytesSchema = z.int().min(8388608).openapi('OrcStripeSizeBytes')

const OrcRowIndexStrideSchema = z.int().min(1000).openapi('OrcRowIndexStride')

const ProportionSchema = z.float64().min(0).max(1).openapi('Proportion')

const OrcCompressionSchema = z.enum(['NONE', 'ZLIB', 'SNAPPY']).openapi('OrcCompression')

const ListOfNonEmptyStringsWithoutWhitespaceSchema = z
  .array(NonEmptyStringWithoutWhitespaceSchema)
  .openapi('ListOfNonEmptyStringsWithoutWhitespace')

const OrcFormatVersionSchema = z.enum(['V0_11', 'V0_12']).openapi('OrcFormatVersion')

const OrcSerDeSchema = z
  .object({
    StripeSizeBytes: OrcStripeSizeBytesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of bytes in each stripe. The default is 64 MiB and the minimum is 8 MiB.',
        }),
    ).exactOptional(),
    BlockSizeBytes: BlockSizeBytesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Kinesis Data Firehose uses this value for padding calculations.',
        }),
    ).exactOptional(),
    RowIndexStride: OrcRowIndexStrideSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of rows between index entries. The default is 10,000 and the minimum is 1,000.',
        }),
    ).exactOptional(),
    EnablePadding: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this to <code>true</code> to indicate that you want stripes to be padded to the HDFS block boundaries. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is <code>false</code>.',
        }),
    ).exactOptional(),
    PaddingTolerance: ProportionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A number between 0 and 1 that defines the tolerance for block padding as a decimal fraction of stripe size. The default value is 0.05, which means 5 percent of stripe size.</p> <p>For the default values of 64 MiB ORC stripes and 256 MiB HDFS blocks, the default block padding tolerance of 5 percent reserves a maximum of 3.2 MiB for padding within the 256 MiB block. In such a case, if the available size within the block is more than 3.2 MiB, a new, smaller stripe is inserted to fit within that space. This ensures that no stripe crosses block boundaries and causes remote reads within a node-local task.</p> <p>Kinesis Data Firehose ignores this parameter when <a>OrcSerDe$EnablePadding</a> is <code>false</code>.</p>',
        }),
    ).exactOptional(),
    Compression: OrcCompressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compression code to use over data blocks. The default is <code>SNAPPY</code>.',
        }),
    ).exactOptional(),
    BloomFilterColumns: ListOfNonEmptyStringsWithoutWhitespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The column names for which you want Kinesis Data Firehose to create bloom filters. The default is <code>null</code>.',
        }),
    ).exactOptional(),
    BloomFilterFalsePositiveProbability: ProportionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Bloom filter false positive probability (FPP). The lower the FPP, the bigger the Bloom filter. The default value is 0.05, the minimum is 0, and the maximum is 1.',
        }),
    ).exactOptional(),
    DictionaryKeyThreshold: ProportionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the fraction of the total number of non-null rows. To turn off dictionary encoding, set this fraction to a number that is less than the number of distinct keys in a dictionary. To always use dictionary encoding, set this threshold to 1.',
        }),
    ).exactOptional(),
    FormatVersion: OrcFormatVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the file to write. The possible values are <code>V0_11</code> and <code>V0_12</code>. The default is <code>V0_12</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>.',
    required: [],
  })
  .openapi('OrcSerDe')

const SerializerSchema = z
  .object({
    ParquetSerDe: ParquetSerDeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>.',
        }),
    ).exactOptional(),
    OrcSerDe: OrcSerDeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The serializer that you want Kinesis Data Firehose to use to convert data to the target format before writing it to Amazon S3. Kinesis Data Firehose supports two types of serializers: the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/orc/OrcSerde.html">ORC SerDe</a> and the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/parquet/serde/ParquetHiveSerDe.html">Parquet SerDe</a>.',
    required: [],
  })
  .openapi('Serializer')

const OutputFormatConfigurationSchema = z
  .object({
    Serializer: SerializerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies which serializer to use. You can choose either the ORC SerDe or the Parquet SerDe. If both are non-null, the server rejects the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true.',
    required: [],
  })
  .openapi('OutputFormatConfiguration')

const DataFormatConversionConfigurationSchema = z
  .object({
    SchemaConfiguration: SchemaConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the Amazon Web Services Glue Data Catalog table that contains the column information. This parameter is required if <code>Enabled</code> is set to true.',
        }),
    ).exactOptional(),
    InputFormatConfiguration: InputFormatConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the deserializer that you want Kinesis Data Firehose to use to convert the format of your data from JSON. This parameter is required if <code>Enabled</code> is set to true.',
        }),
    ).exactOptional(),
    OutputFormatConfiguration: OutputFormatConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data to the Parquet or ORC format. This parameter is required if <code>Enabled</code> is set to true.',
        }),
    ).exactOptional(),
    Enabled: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defaults to <code>true</code>. Set it to <code>false</code> if you want to disable format conversion while preserving the configuration details.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the Amazon Web Services Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>.',
    required: [],
  })
  .openapi('DataFormatConversionConfiguration')

const RetryDurationInSecondsSchema = z.int().min(0).max(7200).openapi('RetryDurationInSeconds')

const RetryOptionsSchema = z
  .object({
    DurationInSeconds: RetryDurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The period of time during which Kinesis Data Firehose retries to deliver data to the specified Amazon S3 prefix.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The retry behavior in case Kinesis Data Firehose is unable to deliver data to an Amazon S3 prefix.',
    required: [],
  })
  .openapi('RetryOptions')

const DynamicPartitioningConfigurationSchema = z
  .object({
    RetryOptions: RetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The retry behavior in case Kinesis Data Firehose is unable to deliver data to an Amazon S3 prefix.',
        }),
    ).exactOptional(),
    Enabled: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that the dynamic partitioning is enabled for this Kinesis Data Firehose delivery stream.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration of the dynamic partitioning mechanism that creates smaller data sets from the streaming data by partitioning it based on partition keys. Currently, dynamic partitioning is only supported for Amazon S3 destinations. ',
    required: [],
  })
  .openapi('DynamicPartitioningConfiguration')

const ExtendedS3DestinationDescriptionSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ),
    BucketARN: BucketARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ),
    Prefix: PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3 files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3 Objects</a>.',
        }),
    ).exactOptional(),
    ErrorOutputPrefix: ErrorOutputPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3 Objects</a>.',
        }),
    ).exactOptional(),
    BufferingHints: BufferingHintsSchema.and(
      z.any().openapi({ description: 'The buffering option.' }),
    ),
    CompressionFormat: CompressionFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compression format. If no value is specified, the default is <code>UNCOMPRESSED</code>.',
        }),
    ),
    EncryptionConfiguration: EncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption configuration. If no value is specified, the default is no encryption.',
        }),
    ),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon CloudWatch logging options for your delivery stream.',
        }),
    ).exactOptional(),
    ProcessingConfiguration: ProcessingConfigurationSchema.and(
      z.any().openapi({ description: 'The data processing configuration.' }),
    ).exactOptional(),
    S3BackupMode: S3BackupModeSchema.and(
      z.any().openapi({ description: 'The Amazon S3 backup mode.' }),
    ).exactOptional(),
    S3BackupDescription: S3DestinationDescriptionSchema.and(
      z.any().openapi({ description: 'The configuration for backup in Amazon S3.' }),
    ).exactOptional(),
    DataFormatConversionConfiguration: DataFormatConversionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The serializer, deserializer, and schema for converting data from the JSON format to the Parquet or ORC format before writing it to Amazon S3.',
        }),
    ).exactOptional(),
    DynamicPartitioningConfiguration: DynamicPartitioningConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration of the dynamic partitioning mechanism that creates smaller data sets from the streaming data by partitioning it based on partition keys. Currently, dynamic partitioning is only supported for Amazon S3 destinations. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'RoleARN',
      'BucketARN',
      'BufferingHints',
      'CompressionFormat',
      'EncryptionConfiguration',
    ],
    description: 'Describes a destination in Amazon S3.',
  })
  .openapi('ExtendedS3DestinationDescription')

const ClusterJDBCURLSchema = z
  .string()
  .regex(
    /jdbc:(redshift|postgresql):\/\/((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+redshift\.([a-zA-Z0-9\.]+):\d{1,5}\/[a-zA-Z0-9_$-]+/,
  )
  .min(1)
  .max(512)
  .openapi('ClusterJDBCURL')

const DataTableNameSchema = z.string().regex(/.*/).min(1).max(512).openapi('DataTableName')

const DataTableColumnsSchema = z.string().regex(/.*/).min(0).max(204800).openapi('DataTableColumns')

const CopyOptionsSchema = z.string().regex(/.*/).min(0).max(204800).openapi('CopyOptions')

const CopyCommandSchema = z
  .object({
    DataTableName: DataTableNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the target table. The table must already exist in the database.',
        }),
    ),
    DataTableColumns: DataTableColumnsSchema.and(
      z.any().openapi({ description: 'A comma-separated list of column names.' }),
    ).exactOptional(),
    CopyOptions: CopyOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Optional parameters to use with the Amazon Redshift <code>COPY</code> command. For more information, see the "Optional Parameters" section of <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html">Amazon Redshift COPY command</a>. Some possible examples that would apply to Kinesis Data Firehose are as follows:</p> <p> <code>delimiter \'\\t\' lzop;</code> - fields are delimited with "\\t" (TAB character) and compressed using lzop.</p> <p> <code>delimiter \'|\'</code> - fields are delimited with "|" (this is the default delimiter).</p> <p> <code>delimiter \'|\' escape</code> - the delimiter should be escaped.</p> <p> <code>fixedwidth \'venueid:3,venuename:25,venuecity:12,venuestate:2,venueseats:6\'</code> - fields are fixed width in the source, with each width specified after every column in the table.</p> <p> <code>JSON \'s3://mybucket/jsonpaths.txt\'</code> - data is in JSON format, and the path specified is the format of the data.</p> <p>For more examples, see <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_COPY_command_examples.html">Amazon Redshift COPY command examples</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DataTableName'],
    description: 'Describes a <code>COPY</code> command for Amazon Redshift.',
  })
  .openapi('CopyCommand')

const UsernameSchema = z.string().regex(/.*/).min(1).max(512).openapi('Username')

const RedshiftRetryDurationInSecondsSchema = z
  .int()
  .min(0)
  .max(7200)
  .openapi('RedshiftRetryDurationInSeconds')

const RedshiftRetryOptionsSchema = z
  .object({
    DurationInSeconds: RedshiftRetryDurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of time during which Kinesis Data Firehose retries delivery after a failure, starting from the initial request and including the first attempt. The default value is 3600 seconds (60 minutes). Kinesis Data Firehose does not retry if the value of <code>DurationInSeconds</code> is 0 (zero) or if the first delivery attempt takes longer than the current value.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift.',
    required: [],
  })
  .openapi('RedshiftRetryOptions')

const RedshiftS3BackupModeSchema = z.enum(['Disabled', 'Enabled']).openapi('RedshiftS3BackupMode')

const RedshiftDestinationDescriptionSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ),
    ClusterJDBCURL: ClusterJDBCURLSchema.and(
      z.any().openapi({ description: 'The database connection string.' }),
    ),
    CopyCommand: CopyCommandSchema.and(
      z.any().openapi({ description: 'The <code>COPY</code> command.' }),
    ),
    Username: UsernameSchema.and(z.any().openapi({ description: 'The name of the user.' })),
    RetryOptions: RedshiftRetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. Default value is 3600 (60 minutes).',
        }),
    ).exactOptional(),
    S3DestinationDescription: S3DestinationDescriptionSchema.and(
      z.any().openapi({ description: 'The Amazon S3 destination.' }),
    ),
    ProcessingConfiguration: ProcessingConfigurationSchema.and(
      z.any().openapi({ description: 'The data processing configuration.' }),
    ).exactOptional(),
    S3BackupMode: RedshiftS3BackupModeSchema.and(
      z.any().openapi({ description: 'The Amazon S3 backup mode.' }),
    ).exactOptional(),
    S3BackupDescription: S3DestinationDescriptionSchema.and(
      z.any().openapi({ description: 'The configuration for backup in Amazon S3.' }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon CloudWatch logging options for your delivery stream.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RoleARN', 'ClusterJDBCURL', 'CopyCommand', 'Username', 'S3DestinationDescription'],
    description: 'Describes a destination in Amazon Redshift.',
  })
  .openapi('RedshiftDestinationDescription')

const ElasticsearchDomainARNSchema = z
  .string()
  .regex(/arn:.*/)
  .min(1)
  .max(512)
  .openapi('ElasticsearchDomainARN')

const ElasticsearchClusterEndpointSchema = z
  .string()
  .regex(/https:.*/)
  .min(1)
  .max(512)
  .openapi('ElasticsearchClusterEndpoint')

const ElasticsearchIndexNameSchema = z
  .string()
  .regex(/.*/)
  .min(1)
  .max(80)
  .openapi('ElasticsearchIndexName')

const ElasticsearchTypeNameSchema = z
  .string()
  .regex(/.*/)
  .min(0)
  .max(100)
  .openapi('ElasticsearchTypeName')

const ElasticsearchIndexRotationPeriodSchema = z
  .enum(['NoRotation', 'OneHour', 'OneDay', 'OneWeek', 'OneMonth'])
  .openapi('ElasticsearchIndexRotationPeriod')

const ElasticsearchBufferingIntervalInSecondsSchema = z
  .int()
  .min(60)
  .max(900)
  .openapi('ElasticsearchBufferingIntervalInSeconds')

const ElasticsearchBufferingSizeInMBsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ElasticsearchBufferingSizeInMBs')

const ElasticsearchBufferingHintsSchema = z
  .object({
    IntervalInSeconds: ElasticsearchBufferingIntervalInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes).',
        }),
    ).exactOptional(),
    SizeInMBs: ElasticsearchBufferingSizeInMBsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5.</p> <p>We recommend setting this parameter to a value greater than the amount of data you typically ingest into the delivery stream in 10 seconds. For example, if you typically ingest data at 1 MB/sec, the value should be 10 MB or higher.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the buffering to perform before delivering data to the Amazon ES destination.',
    required: [],
  })
  .openapi('ElasticsearchBufferingHints')

const ElasticsearchRetryDurationInSecondsSchema = z
  .int()
  .min(0)
  .max(7200)
  .openapi('ElasticsearchRetryDurationInSeconds')

const ElasticsearchRetryOptionsSchema = z
  .object({
    DurationInSeconds: ElasticsearchRetryDurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'After an initial failure to deliver to Amazon ES, the total amount of time during which Kinesis Data Firehose retries delivery (including the first attempt). After this time has elapsed, the failed documents are written to Amazon S3. Default value is 300 seconds (5 minutes). A value of 0 (zero) results in no retries.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES.',
    required: [],
  })
  .openapi('ElasticsearchRetryOptions')

const ElasticsearchS3BackupModeSchema = z
  .enum(['FailedDocumentsOnly', 'AllDocuments'])
  .openapi('ElasticsearchS3BackupMode')

const SubnetIdListSchema = z
  .array(NonEmptyStringWithoutWhitespaceSchema)
  .min(1)
  .max(16)
  .openapi('SubnetIdList')

const SecurityGroupIdListSchema = z
  .array(NonEmptyStringWithoutWhitespaceSchema)
  .min(1)
  .max(5)
  .openapi('SecurityGroupIdList')

const VpcConfigurationDescriptionSchema = z
  .object({
    SubnetIds: SubnetIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IDs of the subnets that Kinesis Data Firehose uses to create ENIs in the VPC of the Amazon ES destination. Make sure that the routing tables and inbound and outbound rules allow traffic to flow from the subnets whose IDs are specified here to the subnets that have the destination Amazon ES endpoints. Kinesis Data Firehose creates at least one ENI in each of the subnets that are specified here. Do not delete or modify these ENIs.</p> <p>The number of ENIs that Kinesis Data Firehose creates in the subnets specified here scales up and down automatically based on throughput. To enable Kinesis Data Firehose to scale up the number of ENIs to match throughput, ensure that you have sufficient quota. To help you calculate the quota you need, assume that Kinesis Data Firehose can create up to three ENIs for this delivery stream for each of the subnets specified here. For more information about ENI quota, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-enis">Network Interfaces </a> in the Amazon VPC Quotas topic.</p>',
        }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The ARN of the IAM role that the delivery stream uses to create endpoints in the destination VPC. You can use your existing Kinesis Data Firehose delivery role or you can specify a new role. In either case, make sure that the role trusts the Kinesis Data Firehose service principal and that it grants the following permissions:</p> <ul> <li> <p> <code>ec2:DescribeVpcs</code> </p> </li> <li> <p> <code>ec2:DescribeVpcAttribute</code> </p> </li> <li> <p> <code>ec2:DescribeSubnets</code> </p> </li> <li> <p> <code>ec2:DescribeSecurityGroups</code> </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaces</code> </p> </li> <li> <p> <code>ec2:CreateNetworkInterface</code> </p> </li> <li> <p> <code>ec2:CreateNetworkInterfacePermission</code> </p> </li> <li> <p> <code>ec2:DeleteNetworkInterface</code> </p> </li> </ul> <p>If you revoke these permissions after you create the delivery stream, Kinesis Data Firehose can't scale out by creating more ENIs when necessary. You might therefore see a degradation in performance.</p>",
        }),
    ),
    SecurityGroupIds: SecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IDs of the security groups that Kinesis Data Firehose uses when it creates ENIs in the VPC of the Amazon ES destination. You can use the same security group that the Amazon ES domain uses or different ones. If you specify different security groups, ensure that they allow outbound HTTPS traffic to the Amazon ES domain\'s security group. Also ensure that the Amazon ES domain\'s security group allows HTTPS traffic from the security groups specified here. If you use the same security group for both your delivery stream and the Amazon ES domain, make sure the security group inbound rule allows HTTPS traffic. For more information about security group rules, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#SecurityGroupRules">Security group rules</a> in the Amazon VPC documentation.',
        }),
    ),
    VpcId: NonEmptyStringWithoutWhitespaceSchema.and(
      z.any().openapi({ description: "The ID of the Amazon ES destination's VPC." }),
    ),
  })
  .openapi({
    required: ['SubnetIds', 'RoleARN', 'SecurityGroupIds', 'VpcId'],
    description: 'The details of the VPC of the Amazon ES destination.',
  })
  .openapi('VpcConfigurationDescription')

const ElasticsearchDestinationDescriptionSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ).exactOptional(),
    DomainARN: ElasticsearchDomainARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the Amazon ES domain. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.</p> <p>Kinesis Data Firehose uses either <code>ClusterEndpoint</code> or <code>DomainARN</code> to send data to Amazon ES.</p>',
        }),
    ).exactOptional(),
    ClusterEndpoint: ElasticsearchClusterEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint to use when communicating with the cluster. Kinesis Data Firehose uses either this <code>ClusterEndpoint</code> or the <code>DomainARN</code> field to send data to Amazon ES.',
        }),
    ).exactOptional(),
    IndexName: ElasticsearchIndexNameSchema.and(
      z.any().openapi({ description: 'The Elasticsearch index name.' }),
    ).exactOptional(),
    TypeName: ElasticsearchTypeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Elasticsearch type name. This applies to Elasticsearch 6.x and lower versions. For Elasticsearch 7.x and OpenSearch Service 1.x, there's no value for <code>TypeName</code>.",
        }),
    ).exactOptional(),
    IndexRotationPeriod: ElasticsearchIndexRotationPeriodSchema.and(
      z.any().openapi({ description: 'The Elasticsearch index rotation period' }),
    ).exactOptional(),
    BufferingHints: ElasticsearchBufferingHintsSchema.and(
      z.any().openapi({ description: 'The buffering options.' }),
    ).exactOptional(),
    RetryOptions: ElasticsearchRetryOptionsSchema.and(
      z.any().openapi({ description: 'The Amazon ES retry options.' }),
    ).exactOptional(),
    S3BackupMode: ElasticsearchS3BackupModeSchema.and(
      z.any().openapi({ description: 'The Amazon S3 backup mode.' }),
    ).exactOptional(),
    S3DestinationDescription: S3DestinationDescriptionSchema.and(
      z.any().openapi({ description: 'The Amazon S3 destination.' }),
    ).exactOptional(),
    ProcessingConfiguration: ProcessingConfigurationSchema.and(
      z.any().openapi({ description: 'The data processing configuration.' }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z.any().openapi({ description: 'The Amazon CloudWatch logging options.' }),
    ).exactOptional(),
    VpcConfigurationDescription: VpcConfigurationDescriptionSchema.and(
      z.any().openapi({ description: 'The details of the VPC of the Amazon ES destination.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The destination description in Amazon ES.', required: [] })
  .openapi('ElasticsearchDestinationDescription')

const AmazonopensearchserviceDomainARNSchema = z
  .string()
  .regex(/arn:.*/)
  .min(1)
  .max(512)
  .openapi('AmazonopensearchserviceDomainARN')

const AmazonopensearchserviceClusterEndpointSchema = z
  .string()
  .regex(/https:.*/)
  .min(1)
  .max(512)
  .openapi('AmazonopensearchserviceClusterEndpoint')

const AmazonopensearchserviceIndexNameSchema = z
  .string()
  .regex(/.*/)
  .min(1)
  .max(80)
  .openapi('AmazonopensearchserviceIndexName')

const AmazonopensearchserviceTypeNameSchema = z
  .string()
  .regex(/.*/)
  .min(0)
  .max(100)
  .openapi('AmazonopensearchserviceTypeName')

const AmazonopensearchserviceIndexRotationPeriodSchema = z
  .enum(['NoRotation', 'OneHour', 'OneDay', 'OneWeek', 'OneMonth'])
  .openapi('AmazonopensearchserviceIndexRotationPeriod')

const AmazonopensearchserviceBufferingIntervalInSecondsSchema = z
  .int()
  .min(60)
  .max(900)
  .openapi('AmazonopensearchserviceBufferingIntervalInSeconds')

const AmazonopensearchserviceBufferingSizeInMBsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('AmazonopensearchserviceBufferingSizeInMBs')

const AmazonopensearchserviceBufferingHintsSchema = z
  .object({
    IntervalInSeconds: AmazonopensearchserviceBufferingIntervalInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes). ',
        }),
    ).exactOptional(),
    SizeInMBs: AmazonopensearchserviceBufferingSizeInMBsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5.</p> <p>We recommend setting this parameter to a value greater than the amount of data you typically ingest into the delivery stream in 10 seconds. For example, if you typically ingest data at 1 MB/sec, the value should be 10 MB or higher. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the buffering to perform before delivering data to the Amazon OpenSearch Service destination. ',
    required: [],
  })
  .openapi('AmazonopensearchserviceBufferingHints')

const AmazonopensearchserviceRetryDurationInSecondsSchema = z
  .int()
  .min(0)
  .max(7200)
  .openapi('AmazonopensearchserviceRetryDurationInSeconds')

const AmazonopensearchserviceRetryOptionsSchema = z
  .object({
    DurationInSeconds: AmazonopensearchserviceRetryDurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'After an initial failure to deliver to Amazon OpenSearch Service, the total amount of time during which Kinesis Data Firehose retries delivery (including the first attempt). After this time has elapsed, the failed documents are written to Amazon S3. Default value is 300 seconds (5 minutes). A value of 0 (zero) results in no retries. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon OpenSearch Service. ',
    required: [],
  })
  .openapi('AmazonopensearchserviceRetryOptions')

const AmazonopensearchserviceS3BackupModeSchema = z
  .enum(['FailedDocumentsOnly', 'AllDocuments'])
  .openapi('AmazonopensearchserviceS3BackupMode')

const AmazonopensearchserviceDestinationDescriptionSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Amazon Web Services credentials. ',
        }),
    ).exactOptional(),
    DomainARN: AmazonopensearchserviceDomainARNSchema.and(
      z.any().openapi({ description: 'The ARN of the Amazon OpenSearch Service domain.' }),
    ).exactOptional(),
    ClusterEndpoint: AmazonopensearchserviceClusterEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint to use when communicating with the cluster. Kinesis Data Firehose uses either this ClusterEndpoint or the DomainARN field to send data to Amazon OpenSearch Service. ',
        }),
    ).exactOptional(),
    IndexName: AmazonopensearchserviceIndexNameSchema.and(
      z.any().openapi({ description: 'The Amazon OpenSearch Service index name.' }),
    ).exactOptional(),
    TypeName: AmazonopensearchserviceTypeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon OpenSearch Service type name. This applies to Elasticsearch 6.x and lower versions. For Elasticsearch 7.x and OpenSearch Service 1.x, there's no value for TypeName. ",
        }),
    ).exactOptional(),
    IndexRotationPeriod: AmazonopensearchserviceIndexRotationPeriodSchema.and(
      z.any().openapi({ description: 'The Amazon OpenSearch Service index rotation period' }),
    ).exactOptional(),
    BufferingHints: AmazonopensearchserviceBufferingHintsSchema.and(
      z.any().openapi({ description: 'The buffering options.' }),
    ).exactOptional(),
    RetryOptions: AmazonopensearchserviceRetryOptionsSchema.and(
      z.any().openapi({ description: 'The Amazon OpenSearch Service retry options.' }),
    ).exactOptional(),
    S3BackupMode: AmazonopensearchserviceS3BackupModeSchema.and(
      z.any().openapi({ description: 'The Amazon S3 backup mode.' }),
    ).exactOptional(),
    S3DestinationDescription: S3DestinationDescriptionSchema.exactOptional(),
    ProcessingConfiguration: ProcessingConfigurationSchema.exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.exactOptional(),
    VpcConfigurationDescription: VpcConfigurationDescriptionSchema.exactOptional(),
  })
  .openapi({
    description: 'The destination description in Amazon OpenSearch Service.',
    required: [],
  })
  .openapi('AmazonopensearchserviceDestinationDescription')

const HECEndpointSchema = z.string().regex(/.*/).min(0).max(2048).openapi('HECEndpoint')

const HECEndpointTypeSchema = z.enum(['Raw', 'Event']).openapi('HECEndpointType')

const HECTokenSchema = z.string().regex(/.*/).min(0).max(2048).openapi('HECToken')

const HECAcknowledgmentTimeoutInSecondsSchema = z
  .int()
  .min(180)
  .max(600)
  .openapi('HECAcknowledgmentTimeoutInSeconds')

const SplunkRetryDurationInSecondsSchema = z
  .int()
  .min(0)
  .max(7200)
  .openapi('SplunkRetryDurationInSeconds')

const SplunkRetryOptionsSchema = z
  .object({
    DurationInSeconds: SplunkRetryDurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total amount of time that Kinesis Data Firehose spends on retries. This duration starts after the initial attempt to send data to Splunk fails. It doesn't include the periods during which Kinesis Data Firehose waits for acknowledgment from Splunk after each attempt.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk.",
    required: [],
  })
  .openapi('SplunkRetryOptions')

const SplunkS3BackupModeSchema = z
  .enum(['FailedEventsOnly', 'AllEvents'])
  .openapi('SplunkS3BackupMode')

const SplunkDestinationDescriptionSchema = z
  .object({
    HECEndpoint: HECEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP Event Collector (HEC) endpoint to which Kinesis Data Firehose sends your data.',
        }),
    ).exactOptional(),
    HECEndpointType: HECEndpointTypeSchema.and(
      z.any().openapi({ description: 'This type can be either "Raw" or "Event."' }),
    ).exactOptional(),
    HECToken: HECTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A GUID you obtain from your Splunk cluster when you create a new HEC endpoint.',
        }),
    ).exactOptional(),
    HECAcknowledgmentTimeoutInSeconds: HECAcknowledgmentTimeoutInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time that Kinesis Data Firehose waits to receive an acknowledgment from Splunk after it sends it data. At the end of the timeout period, Kinesis Data Firehose either tries to send the data again or considers it an error, based on your retry settings.',
        }),
    ).exactOptional(),
    RetryOptions: SplunkRetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The retry behavior in case Kinesis Data Firehose is unable to deliver data to Splunk or if it doesn't receive an acknowledgment of receipt from Splunk.",
        }),
    ).exactOptional(),
    S3BackupMode: SplunkS3BackupModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines how documents should be delivered to Amazon S3. When set to <code>FailedDocumentsOnly</code>, Kinesis Data Firehose writes any data that could not be indexed to the configured Amazon S3 destination. When set to <code>AllDocuments</code>, Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed documents to Amazon S3. Default value is <code>FailedDocumentsOnly</code>. ',
        }),
    ).exactOptional(),
    S3DestinationDescription: S3DestinationDescriptionSchema.and(
      z.any().openapi({ description: 'The Amazon S3 destination.&gt;' }),
    ).exactOptional(),
    ProcessingConfiguration: ProcessingConfigurationSchema.and(
      z.any().openapi({ description: 'The data processing configuration.' }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon CloudWatch logging options for your delivery stream.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a destination in Splunk.', required: [] })
  .openapi('SplunkDestinationDescription')

const HttpEndpointUrlSchema = z
  .string()
  .regex(/https:\/\/.*/)
  .min(1)
  .max(1000)
  .openapi('HttpEndpointUrl')

const HttpEndpointNameSchema = z
  .string()
  .regex(/^(?!\s*$).+/)
  .min(1)
  .max(256)
  .openapi('HttpEndpointName')

const HttpEndpointDescriptionSchema = z
  .object({
    Url: HttpEndpointUrlSchema.and(
      z.any().openapi({ description: 'The URL of the HTTP endpoint selected as the destination.' }),
    ).exactOptional(),
    Name: HttpEndpointNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the HTTP endpoint selected as the destination.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the HTTP endpoint selected as the destination. ',
    required: [],
  })
  .openapi('HttpEndpointDescription')

const HttpEndpointBufferingSizeInMBsSchema = z
  .int()
  .min(1)
  .max(64)
  .openapi('HttpEndpointBufferingSizeInMBs')

const HttpEndpointBufferingIntervalInSecondsSchema = z
  .int()
  .min(60)
  .max(900)
  .openapi('HttpEndpointBufferingIntervalInSeconds')

const HttpEndpointBufferingHintsSchema = z
  .object({
    SizeInMBs: HttpEndpointBufferingSizeInMBsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5. </p> <p>We recommend setting this parameter to a value greater than the amount of data you typically ingest into the delivery stream in 10 seconds. For example, if you typically ingest data at 1 MB/sec, the value should be 10 MB or higher. </p>',
        }),
    ).exactOptional(),
    IntervalInSeconds: HttpEndpointBufferingIntervalInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes). ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the buffering options that can be applied before data is delivered to the HTTP endpoint destination. Kinesis Data Firehose treats these options as hints, and it might choose to use more optimal values. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. ',
    required: [],
  })
  .openapi('HttpEndpointBufferingHints')

const ContentEncodingSchema = z.enum(['NONE', 'GZIP']).openapi('ContentEncoding')

const HttpEndpointAttributeNameSchema = z
  .string()
  .regex(/^(?!\s*$).+/)
  .min(1)
  .max(256)
  .openapi('HttpEndpointAttributeName')

const HttpEndpointAttributeValueSchema = z
  .string()
  .regex(/.*/)
  .min(0)
  .max(1024)
  .openapi('HttpEndpointAttributeValue')

const HttpEndpointCommonAttributeSchema = z
  .object({
    AttributeName: HttpEndpointAttributeNameSchema.and(
      z.any().openapi({ description: 'The name of the HTTP endpoint common attribute.' }),
    ),
    AttributeValue: HttpEndpointAttributeValueSchema.and(
      z.any().openapi({ description: 'The value of the HTTP endpoint common attribute.' }),
    ),
  })
  .openapi({
    required: ['AttributeName', 'AttributeValue'],
    description:
      "Describes the metadata that's delivered to the specified HTTP endpoint destination.",
  })
  .openapi('HttpEndpointCommonAttribute')

const HttpEndpointCommonAttributesListSchema = z
  .array(HttpEndpointCommonAttributeSchema)
  .min(0)
  .max(50)
  .openapi('HttpEndpointCommonAttributesList')

const HttpEndpointRequestConfigurationSchema = z
  .object({
    ContentEncoding: ContentEncodingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Kinesis Data Firehose uses the content encoding to compress the body of a request before sending the request to the destination. For more information, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding">Content-Encoding</a> in MDN Web Docs, the official Mozilla documentation.',
        }),
    ).exactOptional(),
    CommonAttributes: HttpEndpointCommonAttributesListSchema.and(
      z
        .any()
        .openapi({ description: 'Describes the metadata sent to the HTTP endpoint destination.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The configuration of the HTTP endpoint request.', required: [] })
  .openapi('HttpEndpointRequestConfiguration')

const HttpEndpointRetryDurationInSecondsSchema = z
  .int()
  .min(0)
  .max(7200)
  .openapi('HttpEndpointRetryDurationInSeconds')

const HttpEndpointRetryOptionsSchema = z
  .object({
    DurationInSeconds: HttpEndpointRetryDurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total amount of time that Kinesis Data Firehose spends on retries. This duration starts after the initial attempt to send data to the custom destination via HTTPS endpoint fails. It doesn't include the periods during which Kinesis Data Firehose waits for acknowledgment from the specified destination after each attempt. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.",
    required: [],
  })
  .openapi('HttpEndpointRetryOptions')

const HttpEndpointS3BackupModeSchema = z
  .enum(['FailedDataOnly', 'AllData'])
  .openapi('HttpEndpointS3BackupMode')

const HttpEndpointDestinationDescriptionSchema = z
  .object({
    EndpointConfiguration: HttpEndpointDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'The configuration of the specified HTTP endpoint destination.' }),
    ).exactOptional(),
    BufferingHints: HttpEndpointBufferingHintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes buffering options that can be applied to the data before it is delivered to the HTTPS endpoint destination. Kinesis Data Firehose teats these options as hints, and it might choose to use more optimal values. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. ',
        }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.exactOptional(),
    RequestConfiguration: HttpEndpointRequestConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration of request sent to the HTTP endpoint specified as the destination.',
        }),
    ).exactOptional(),
    ProcessingConfiguration: ProcessingConfigurationSchema.exactOptional(),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'Kinesis Data Firehose uses this IAM role for all the permissions that the delivery stream needs.',
        }),
    ).exactOptional(),
    RetryOptions: HttpEndpointRetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.",
        }),
    ).exactOptional(),
    S3BackupMode: HttpEndpointS3BackupModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the S3 bucket backup options for the data that Kinesis Firehose delivers to the HTTP endpoint destination. You can back up all documents (<code>AllData</code>) or only the documents that Kinesis Data Firehose could not deliver to the specified HTTP endpoint destination (<code>FailedDataOnly</code>).',
        }),
    ).exactOptional(),
    S3DestinationDescription: S3DestinationDescriptionSchema.exactOptional(),
  })
  .openapi({ description: 'Describes the HTTP endpoint destination.', required: [] })
  .openapi('HttpEndpointDestinationDescription')

const AmazonOpenSearchServerlessCollectionEndpointSchema = z
  .string()
  .regex(/https:.*/)
  .min(1)
  .max(512)
  .openapi('AmazonOpenSearchServerlessCollectionEndpoint')

const AmazonOpenSearchServerlessIndexNameSchema = z
  .string()
  .regex(/.*/)
  .min(1)
  .max(80)
  .openapi('AmazonOpenSearchServerlessIndexName')

const AmazonOpenSearchServerlessBufferingIntervalInSecondsSchema = z
  .int()
  .min(60)
  .max(900)
  .openapi('AmazonOpenSearchServerlessBufferingIntervalInSeconds')

const AmazonOpenSearchServerlessBufferingSizeInMBsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('AmazonOpenSearchServerlessBufferingSizeInMBs')

const AmazonOpenSearchServerlessBufferingHintsSchema = z
  .object({
    IntervalInSeconds: AmazonOpenSearchServerlessBufferingIntervalInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes).',
        }),
    ).exactOptional(),
    SizeInMBs: AmazonOpenSearchServerlessBufferingSizeInMBsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5. </p> <p>We recommend setting this parameter to a value greater than the amount of data you typically ingest into the delivery stream in 10 seconds. For example, if you typically ingest data at 1 MB/sec, the value should be 10 MB or higher.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the buffering to perform before delivering data to the Serverless offering for Amazon OpenSearch Service destination.',
    required: [],
  })
  .openapi('AmazonOpenSearchServerlessBufferingHints')

const AmazonOpenSearchServerlessRetryDurationInSecondsSchema = z
  .int()
  .min(0)
  .max(7200)
  .openapi('AmazonOpenSearchServerlessRetryDurationInSeconds')

const AmazonOpenSearchServerlessRetryOptionsSchema = z
  .object({
    DurationInSeconds: AmazonOpenSearchServerlessRetryDurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'After an initial failure to deliver to the Serverless offering for Amazon OpenSearch Service, the total amount of time during which Kinesis Data Firehose retries delivery (including the first attempt). After this time has elapsed, the failed documents are written to Amazon S3. Default value is 300 seconds (5 minutes). A value of 0 (zero) results in no retries.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service.',
    required: [],
  })
  .openapi('AmazonOpenSearchServerlessRetryOptions')

const AmazonOpenSearchServerlessS3BackupModeSchema = z
  .enum(['FailedDocumentsOnly', 'AllDocuments'])
  .openapi('AmazonOpenSearchServerlessS3BackupMode')

const AmazonOpenSearchServerlessDestinationDescriptionSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the AWS credentials.' }),
    ).exactOptional(),
    CollectionEndpoint: AmazonOpenSearchServerlessCollectionEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint to use when communicating with the collection in the Serverless offering for Amazon OpenSearch Service.',
        }),
    ).exactOptional(),
    IndexName: AmazonOpenSearchServerlessIndexNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Serverless offering for Amazon OpenSearch Service index name.',
        }),
    ).exactOptional(),
    BufferingHints: AmazonOpenSearchServerlessBufferingHintsSchema.and(
      z.any().openapi({ description: 'The buffering options.' }),
    ).exactOptional(),
    RetryOptions: AmazonOpenSearchServerlessRetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The Serverless offering for Amazon OpenSearch Service retry options.',
        }),
    ).exactOptional(),
    S3BackupMode: AmazonOpenSearchServerlessS3BackupModeSchema.and(
      z.any().openapi({ description: 'The Amazon S3 backup mode.' }),
    ).exactOptional(),
    S3DestinationDescription: S3DestinationDescriptionSchema.exactOptional(),
    ProcessingConfiguration: ProcessingConfigurationSchema.exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.exactOptional(),
    VpcConfigurationDescription: VpcConfigurationDescriptionSchema.exactOptional(),
  })
  .openapi({
    description:
      'The destination description in the Serverless offering for Amazon OpenSearch Service.',
    required: [],
  })
  .openapi('AmazonOpenSearchServerlessDestinationDescription')

type DestinationDescriptionType = {
  DestinationId: z.infer<typeof DestinationIdSchema> & { [key: string]: unknown }
  S3DestinationDescription?: z.infer<typeof S3DestinationDescriptionSchema> & {
    [key: string]: unknown
  }
  ExtendedS3DestinationDescription?: z.infer<typeof ExtendedS3DestinationDescriptionSchema> & {
    [key: string]: unknown
  }
  RedshiftDestinationDescription?: z.infer<typeof RedshiftDestinationDescriptionSchema> & {
    [key: string]: unknown
  }
  ElasticsearchDestinationDescription?: z.infer<
    typeof ElasticsearchDestinationDescriptionSchema
  > & { [key: string]: unknown }
  AmazonopensearchserviceDestinationDescription?: z.infer<
    typeof AmazonopensearchserviceDestinationDescriptionSchema
  > & { [key: string]: unknown }
  SplunkDestinationDescription?: z.infer<typeof SplunkDestinationDescriptionSchema> & {
    [key: string]: unknown
  }
  HttpEndpointDestinationDescription?: z.infer<typeof HttpEndpointDestinationDescriptionSchema> & {
    [key: string]: unknown
  }
  AmazonOpenSearchServerlessDestinationDescription?: z.infer<
    typeof AmazonOpenSearchServerlessDestinationDescriptionSchema
  > & { [key: string]: unknown }
}

const DeliveryStreamARNSchema = z
  .string()
  .regex(/arn:.*/)
  .min(1)
  .max(512)
  .openapi('DeliveryStreamARN')

const CreateDeliveryStreamOutputSchema = z
  .object({
    DeliveryStreamARN: DeliveryStreamARNSchema.and(
      z.any().openapi({ description: 'The ARN of the delivery stream.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDeliveryStreamOutput')

const DeliveryStreamNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(64)
  .openapi('DeliveryStreamName')

const DeliveryStreamTypeSchema = z
  .enum(['DirectPut', 'KinesisStreamAsSource'])
  .openapi('DeliveryStreamType')

const KinesisStreamSourceConfigurationSchema = z
  .object({
    KinesisStreamARN: KinesisStreamARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the source Kinesis data stream. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon Kinesis Data Streams ARN Format</a>.',
        }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role that provides access to the source Kinesis data stream. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam">Amazon Web Services Identity and Access Management (IAM) ARN Format</a>.',
        }),
    ),
  })
  .openapi({
    required: ['KinesisStreamARN', 'RoleARN'],
    description:
      'The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream.',
  })
  .openapi('KinesisStreamSourceConfiguration')

const KeyTypeSchema = z.enum(['AWS_OWNED_CMK', 'CUSTOMER_MANAGED_CMK']).openapi('KeyType')

const DeliveryStreamEncryptionConfigurationInputSchema = z
  .object({
    KeyARN: AWSKMSKeyARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you set <code>KeyType</code> to <code>CUSTOMER_MANAGED_CMK</code>, you must specify the Amazon Resource Name (ARN) of the CMK. If you set <code>KeyType</code> to <code>Amazon Web Services_OWNED_CMK</code>, Kinesis Data Firehose uses a service-account CMK.',
        }),
    ).exactOptional(),
    KeyType: KeyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates the type of customer master key (CMK) to use for encryption. The default setting is <code>Amazon Web Services_OWNED_CMK</code>. For more information about CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys">Customer Master Keys (CMKs)</a>. When you invoke <a>CreateDeliveryStream</a> or <a>StartDeliveryStreamEncryption</a> with <code>KeyType</code> set to CUSTOMER_MANAGED_CMK, Kinesis Data Firehose invokes the Amazon KMS operation <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html">CreateGrant</a> to create a grant that allows the Kinesis Data Firehose service to use the customer managed CMK to perform encryption and decryption. Kinesis Data Firehose manages that grant. </p> <p>When you invoke <a>StartDeliveryStreamEncryption</a> to change the CMK for a delivery stream that is encrypted with a customer managed CMK, Kinesis Data Firehose schedules the grant it had on the old CMK for retirement.</p> <p>You can use a CMK of type CUSTOMER_MANAGED_CMK to encrypt up to 500 delivery streams. If a <a>CreateDeliveryStream</a> or <a>StartDeliveryStreamEncryption</a> operation exceeds this limit, Kinesis Data Firehose throws a <code>LimitExceededException</code>. </p> <important> <p>To encrypt your delivery stream, use symmetric CMKs. Kinesis Data Firehose doesn\'t support asymmetric CMKs. For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html">About Symmetric and Asymmetric CMKs</a> in the Amazon Web Services Key Management Service developer guide.</p> </important>',
        }),
    ),
  })
  .openapi({
    required: ['KeyType'],
    description:
      'Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE). ',
  })
  .openapi('DeliveryStreamEncryptionConfigurationInput')

const S3DestinationConfigurationSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ),
    BucketARN: BucketARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ),
    Prefix: PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3 files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3 Objects</a>.',
        }),
    ).exactOptional(),
    ErrorOutputPrefix: ErrorOutputPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3 Objects</a>.',
        }),
    ).exactOptional(),
    BufferingHints: BufferingHintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The buffering option. If no value is specified, <code>BufferingHints</code> object default values are used.',
        }),
    ).exactOptional(),
    CompressionFormat: CompressionFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The compression format. If no value is specified, the default is <code>UNCOMPRESSED</code>.</p> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified for Amazon Redshift destinations because they are not supported by the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket.</p>',
        }),
    ).exactOptional(),
    EncryptionConfiguration: EncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption configuration. If no value is specified, the default is no encryption.',
        }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z.any().openapi({ description: 'The CloudWatch logging options for your delivery stream.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RoleARN', 'BucketARN'],
    description: 'Describes the configuration of a destination in Amazon S3.',
  })
  .openapi('S3DestinationConfiguration')

const ExtendedS3DestinationConfigurationSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ),
    BucketARN: BucketARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ),
    Prefix: PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3 files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3 Objects</a>.',
        }),
    ).exactOptional(),
    ErrorOutputPrefix: ErrorOutputPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3 Objects</a>.',
        }),
    ).exactOptional(),
    BufferingHints: BufferingHintsSchema.and(
      z.any().openapi({ description: 'The buffering option.' }),
    ).exactOptional(),
    CompressionFormat: CompressionFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compression format. If no value is specified, the default is UNCOMPRESSED.',
        }),
    ).exactOptional(),
    EncryptionConfiguration: EncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption configuration. If no value is specified, the default is no encryption.',
        }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon CloudWatch logging options for your delivery stream.',
        }),
    ).exactOptional(),
    ProcessingConfiguration: ProcessingConfigurationSchema.and(
      z.any().openapi({ description: 'The data processing configuration.' }),
    ).exactOptional(),
    S3BackupMode: S3BackupModeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon S3 backup mode. After you create a delivery stream, you can update it to enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the delivery stream to disable it. ",
        }),
    ).exactOptional(),
    S3BackupConfiguration: S3DestinationConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for backup in Amazon S3.' }),
    ).exactOptional(),
    DataFormatConversionConfiguration: DataFormatConversionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The serializer, deserializer, and schema for converting data from the JSON format to the Parquet or ORC format before writing it to Amazon S3.',
        }),
    ).exactOptional(),
    DynamicPartitioningConfiguration: DynamicPartitioningConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration of the dynamic partitioning mechanism that creates smaller data sets from the streaming data by partitioning it based on partition keys. Currently, dynamic partitioning is only supported for Amazon S3 destinations. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RoleARN', 'BucketARN'],
    description: 'Describes the configuration of a destination in Amazon S3.',
  })
  .openapi('ExtendedS3DestinationConfiguration')

const PasswordSchema = z.string().regex(/.*/).min(6).max(512).openapi('Password')

const RedshiftDestinationConfigurationSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ),
    ClusterJDBCURL: ClusterJDBCURLSchema.and(
      z.any().openapi({ description: 'The database connection string.' }),
    ),
    CopyCommand: CopyCommandSchema.and(
      z.any().openapi({ description: 'The <code>COPY</code> command.' }),
    ),
    Username: UsernameSchema.and(z.any().openapi({ description: 'The name of the user.' })),
    Password: PasswordSchema.and(z.any().openapi({ description: 'The user password.' })),
    RetryOptions: RedshiftRetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. Default value is 3600 (60 minutes).',
        }),
    ).exactOptional(),
    S3Configuration: S3DestinationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The configuration for the intermediate Amazon S3 location from which Amazon Redshift obtains data. Restrictions are described in the topic for <a>CreateDeliveryStream</a>.</p> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p>",
        }),
    ),
    ProcessingConfiguration: ProcessingConfigurationSchema.and(
      z.any().openapi({ description: 'The data processing configuration.' }),
    ).exactOptional(),
    S3BackupMode: RedshiftS3BackupModeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon S3 backup mode. After you create a delivery stream, you can update it to enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the delivery stream to disable it. ",
        }),
    ).exactOptional(),
    S3BackupConfiguration: S3DestinationConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for backup in Amazon S3.' }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z.any().openapi({ description: 'The CloudWatch logging options for your delivery stream.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'RoleARN',
      'ClusterJDBCURL',
      'CopyCommand',
      'Username',
      'Password',
      'S3Configuration',
    ],
    description: 'Describes the configuration of a destination in Amazon Redshift.',
  })
  .openapi('RedshiftDestinationConfiguration')

const VpcConfigurationSchema = z
  .object({
    SubnetIds: SubnetIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IDs of the subnets that you want Kinesis Data Firehose to use to create ENIs in the VPC of the Amazon ES destination. Make sure that the routing tables and inbound and outbound rules allow traffic to flow from the subnets whose IDs are specified here to the subnets that have the destination Amazon ES endpoints. Kinesis Data Firehose creates at least one ENI in each of the subnets that are specified here. Do not delete or modify these ENIs.</p> <p>The number of ENIs that Kinesis Data Firehose creates in the subnets specified here scales up and down automatically based on throughput. To enable Kinesis Data Firehose to scale up the number of ENIs to match throughput, ensure that you have sufficient quota. To help you calculate the quota you need, assume that Kinesis Data Firehose can create up to three ENIs for this delivery stream for each of the subnets specified here. For more information about ENI quota, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-enis">Network Interfaces </a> in the Amazon VPC Quotas topic.</p>',
        }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The ARN of the IAM role that you want the delivery stream to use to create endpoints in the destination VPC. You can use your existing Kinesis Data Firehose delivery role or you can specify a new role. In either case, make sure that the role trusts the Kinesis Data Firehose service principal and that it grants the following permissions:</p> <ul> <li> <p> <code>ec2:DescribeVpcs</code> </p> </li> <li> <p> <code>ec2:DescribeVpcAttribute</code> </p> </li> <li> <p> <code>ec2:DescribeSubnets</code> </p> </li> <li> <p> <code>ec2:DescribeSecurityGroups</code> </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaces</code> </p> </li> <li> <p> <code>ec2:CreateNetworkInterface</code> </p> </li> <li> <p> <code>ec2:CreateNetworkInterfacePermission</code> </p> </li> <li> <p> <code>ec2:DeleteNetworkInterface</code> </p> </li> </ul> <p>If you revoke these permissions after you create the delivery stream, Kinesis Data Firehose can't scale out by creating more ENIs when necessary. You might therefore see a degradation in performance.</p>",
        }),
    ),
    SecurityGroupIds: SecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IDs of the security groups that you want Kinesis Data Firehose to use when it creates ENIs in the VPC of the Amazon ES destination. You can use the same security group that the Amazon ES domain uses or different ones. If you specify different security groups here, ensure that they allow outbound HTTPS traffic to the Amazon ES domain\'s security group. Also ensure that the Amazon ES domain\'s security group allows HTTPS traffic from the security groups specified here. If you use the same security group for both your delivery stream and the Amazon ES domain, make sure the security group inbound rule allows HTTPS traffic. For more information about security group rules, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#SecurityGroupRules">Security group rules</a> in the Amazon VPC documentation.',
        }),
    ),
  })
  .openapi({
    required: ['SubnetIds', 'RoleARN', 'SecurityGroupIds'],
    description: 'The details of the VPC of the Amazon ES destination.',
  })
  .openapi('VpcConfiguration')

const ElasticsearchDestinationConfigurationSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Amazon ES Configuration API and for indexing documents. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ),
    DomainARN: ElasticsearchDomainARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the Amazon ES domain. The IAM role must have permissions for <code>DescribeDomain</code>, <code>DescribeDomains</code>, and <code>DescribeDomainConfig</code> after assuming the role specified in <b>RoleARN</b>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.</p> <p>Specify either <code>ClusterEndpoint</code> or <code>DomainARN</code>.</p>',
        }),
    ).exactOptional(),
    ClusterEndpoint: ElasticsearchClusterEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint to use when communicating with the cluster. Specify either this <code>ClusterEndpoint</code> or the <code>DomainARN</code> field.',
        }),
    ).exactOptional(),
    IndexName: ElasticsearchIndexNameSchema.and(
      z.any().openapi({ description: 'The Elasticsearch index name.' }),
    ),
    TypeName: ElasticsearchTypeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Elasticsearch type name. For Elasticsearch 6.x, there can be only one type per index. If you try to specify a new type for an existing index that already has another type, Kinesis Data Firehose returns an error during run time.</p> <p>For Elasticsearch 7.x, don't specify a <code>TypeName</code>.</p>",
        }),
    ).exactOptional(),
    IndexRotationPeriod: ElasticsearchIndexRotationPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Elasticsearch index rotation period. Index rotation appends a timestamp to the <code>IndexName</code> to facilitate the expiration of old data. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation">Index Rotation for the Amazon ES Destination</a>. The default value is <code>OneDay</code>.',
        }),
    ).exactOptional(),
    BufferingHints: ElasticsearchBufferingHintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The buffering options. If no value is specified, the default values for <code>ElasticsearchBufferingHints</code> are used.',
        }),
    ).exactOptional(),
    RetryOptions: ElasticsearchRetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. The default value is 300 (5 minutes).',
        }),
    ).exactOptional(),
    S3BackupMode: ElasticsearchS3BackupModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines how documents should be delivered to Amazon S3. When it is set to <code>FailedDocumentsOnly</code>, Kinesis Data Firehose writes any documents that could not be indexed to the configured Amazon S3 destination, with <code>AmazonOpenSearchService-failed/</code> appended to the key prefix. When set to <code>AllDocuments</code>, Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed documents with <code>AmazonOpenSearchService-failed/</code> appended to the prefix. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-s3-backup">Amazon S3 Backup for the Amazon ES Destination</a>. Default value is <code>FailedDocumentsOnly</code>.</p> <p>You can\'t change this backup mode after you create the delivery stream. </p>',
        }),
    ).exactOptional(),
    S3Configuration: S3DestinationConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for the backup Amazon S3 location.' }),
    ),
    ProcessingConfiguration: ProcessingConfigurationSchema.and(
      z.any().openapi({ description: 'The data processing configuration.' }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon CloudWatch logging options for your delivery stream.',
        }),
    ).exactOptional(),
    VpcConfiguration: VpcConfigurationSchema.and(
      z.any().openapi({ description: 'The details of the VPC of the Amazon ES destination.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RoleARN', 'IndexName', 'S3Configuration'],
    description: 'Describes the configuration of a destination in Amazon ES.',
  })
  .openapi('ElasticsearchDestinationConfiguration')

const AmazonopensearchserviceDestinationConfigurationSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Amazon OpenSearch Service Configuration API and for indexing documents.',
        }),
    ),
    DomainARN: AmazonopensearchserviceDomainARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Amazon OpenSearch Service domain. The IAM role must have permissions for DescribeElasticsearchDomain, DescribeElasticsearchDomains, and DescribeElasticsearchDomainConfig after assuming the role specified in RoleARN. ',
        }),
    ).exactOptional(),
    ClusterEndpoint: AmazonopensearchserviceClusterEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint to use when communicating with the cluster. Specify either this ClusterEndpoint or the DomainARN field. ',
        }),
    ).exactOptional(),
    IndexName: AmazonopensearchserviceIndexNameSchema.and(
      z.any().openapi({ description: 'The ElasticsearAmazon OpenSearch Service index name.' }),
    ),
    TypeName: AmazonopensearchserviceTypeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon OpenSearch Service type name. For Elasticsearch 6.x, there can be only one type per index. If you try to specify a new type for an existing index that already has another type, Kinesis Data Firehose returns an error during run time. ',
        }),
    ).exactOptional(),
    IndexRotationPeriod: AmazonopensearchserviceIndexRotationPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon OpenSearch Service index rotation period. Index rotation appends a timestamp to the IndexName to facilitate the expiration of old data.',
        }),
    ).exactOptional(),
    BufferingHints: AmazonopensearchserviceBufferingHintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The buffering options. If no value is specified, the default values for AmazonopensearchserviceBufferingHints are used. ',
        }),
    ).exactOptional(),
    RetryOptions: AmazonopensearchserviceRetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon OpenSearch Service. The default value is 300 (5 minutes). ',
        }),
    ).exactOptional(),
    S3BackupMode: AmazonopensearchserviceS3BackupModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines how documents should be delivered to Amazon S3. When it is set to FailedDocumentsOnly, Kinesis Data Firehose writes any documents that could not be indexed to the configured Amazon S3 destination, with AmazonOpenSearchService-failed/ appended to the key prefix. When set to AllDocuments, Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed documents with AmazonOpenSearchService-failed/ appended to the prefix. ',
        }),
    ).exactOptional(),
    S3Configuration: S3DestinationConfigurationSchema,
    ProcessingConfiguration: ProcessingConfigurationSchema.exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.exactOptional(),
    VpcConfiguration: VpcConfigurationSchema.exactOptional(),
  })
  .openapi({
    required: ['RoleARN', 'IndexName', 'S3Configuration'],
    description: 'Describes the configuration of a destination in Amazon OpenSearch Service',
  })
  .openapi('AmazonopensearchserviceDestinationConfiguration')

const SplunkDestinationConfigurationSchema = z
  .object({
    HECEndpoint: HECEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP Event Collector (HEC) endpoint to which Kinesis Data Firehose sends your data.',
        }),
    ),
    HECEndpointType: HECEndpointTypeSchema.and(
      z.any().openapi({ description: 'This type can be either "Raw" or "Event."' }),
    ),
    HECToken: HECTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a GUID that you obtain from your Splunk cluster when you create a new HEC endpoint.',
        }),
    ),
    HECAcknowledgmentTimeoutInSeconds: HECAcknowledgmentTimeoutInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time that Kinesis Data Firehose waits to receive an acknowledgment from Splunk after it sends it data. At the end of the timeout period, Kinesis Data Firehose either tries to send the data again or considers it an error, based on your retry settings.',
        }),
    ).exactOptional(),
    RetryOptions: SplunkRetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The retry behavior in case Kinesis Data Firehose is unable to deliver data to Splunk, or if it doesn't receive an acknowledgment of receipt from Splunk.",
        }),
    ).exactOptional(),
    S3BackupMode: SplunkS3BackupModeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Defines how documents should be delivered to Amazon S3. When set to <code>FailedEventsOnly</code>, Kinesis Data Firehose writes any data that could not be indexed to the configured Amazon S3 destination. When set to <code>AllEvents</code>, Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed documents to Amazon S3. The default value is <code>FailedEventsOnly</code>.</p> <p>You can update this backup mode from <code>FailedEventsOnly</code> to <code>AllEvents</code>. You can't update it from <code>AllEvents</code> to <code>FailedEventsOnly</code>.</p>",
        }),
    ).exactOptional(),
    S3Configuration: S3DestinationConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for the backup Amazon S3 location.' }),
    ),
    ProcessingConfiguration: ProcessingConfigurationSchema.and(
      z.any().openapi({ description: 'The data processing configuration.' }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon CloudWatch logging options for your delivery stream.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['HECEndpoint', 'HECEndpointType', 'HECToken', 'S3Configuration'],
    description: 'Describes the configuration of a destination in Splunk.',
  })
  .openapi('SplunkDestinationConfiguration')

const HttpEndpointAccessKeySchema = z
  .string()
  .regex(/.*/)
  .min(0)
  .max(4096)
  .openapi('HttpEndpointAccessKey')

const HttpEndpointConfigurationSchema = z
  .object({
    Url: HttpEndpointUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URL of the HTTP endpoint selected as the destination.</p> <important> <p>If you choose an HTTP endpoint as your destination, review and follow the instructions in the <a href="https://docs.aws.amazon.com/firehose/latest/dev/httpdeliveryrequestresponse.html">Appendix - HTTP Endpoint Delivery Request and Response Specifications</a>.</p> </important>',
        }),
    ),
    Name: HttpEndpointNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the HTTP endpoint selected as the destination.' }),
    ).exactOptional(),
    AccessKey: HttpEndpointAccessKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The access key required for Kinesis Firehose to authenticate with the HTTP endpoint selected as the destination.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Url'],
    description:
      'Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers data.',
  })
  .openapi('HttpEndpointConfiguration')

const HttpEndpointDestinationConfigurationSchema = z
  .object({
    EndpointConfiguration: HttpEndpointConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration of the HTTP endpoint selected as the destination.',
        }),
    ),
    BufferingHints: HttpEndpointBufferingHintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The buffering options that can be used before data is delivered to the specified destination. Kinesis Data Firehose treats these options as hints, and it might choose to use more optimal values. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if you specify a value for one of them, you must also provide a value for the other. ',
        }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.exactOptional(),
    RequestConfiguration: HttpEndpointRequestConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration of the requeste sent to the HTTP endpoint specified as the destination.',
        }),
    ).exactOptional(),
    ProcessingConfiguration: ProcessingConfigurationSchema.exactOptional(),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'Kinesis Data Firehose uses this IAM role for all the permissions that the delivery stream needs.',
        }),
    ).exactOptional(),
    RetryOptions: HttpEndpointRetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.",
        }),
    ).exactOptional(),
    S3BackupMode: HttpEndpointS3BackupModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the S3 bucket backup options for the data that Kinesis Data Firehose delivers to the HTTP endpoint destination. You can back up all documents (<code>AllData</code>) or only the documents that Kinesis Data Firehose could not deliver to the specified HTTP endpoint destination (<code>FailedDataOnly</code>).',
        }),
    ).exactOptional(),
    S3Configuration: S3DestinationConfigurationSchema,
  })
  .openapi({
    required: ['EndpointConfiguration', 'S3Configuration'],
    description: 'Describes the configuration of the HTTP endpoint destination.',
  })
  .openapi('HttpEndpointDestinationConfiguration')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[\p{L}\p{Z}\p{N}_.:\/=+\-@%]*$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^[\p{L}\p{Z}\p{N}_.:\/=+\-@%]*$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the tag. Maximum length: 128 characters. Valid characters: Unicode letters, digits, white space, _ . / = + - % @',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional string, which you can use to describe or define the tag. Maximum length: 256 characters. Valid characters: Unicode letters, digits, white space, _ . / = + - % @',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Key'],
    description:
      'Metadata that you can assign to a delivery stream, consisting of a key-value pair.',
  })
  .openapi('Tag')

const TagDeliveryStreamInputTagListSchema = z
  .array(TagSchema)
  .min(1)
  .max(50)
  .openapi('TagDeliveryStreamInputTagList')

const AmazonOpenSearchServerlessDestinationConfigurationSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Serverless offering for Amazon OpenSearch Service Configuration API and for indexing documents.',
        }),
    ),
    CollectionEndpoint: AmazonOpenSearchServerlessCollectionEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint to use when communicating with the collection in the Serverless offering for Amazon OpenSearch Service.',
        }),
    ).exactOptional(),
    IndexName: AmazonOpenSearchServerlessIndexNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Serverless offering for Amazon OpenSearch Service index name.',
        }),
    ),
    BufferingHints: AmazonOpenSearchServerlessBufferingHintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The buffering options. If no value is specified, the default values for AmazonopensearchserviceBufferingHints are used.',
        }),
    ).exactOptional(),
    RetryOptions: AmazonOpenSearchServerlessRetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The retry behavior in case Kinesis Data Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service. The default value is 300 (5 minutes).',
        }),
    ).exactOptional(),
    S3BackupMode: AmazonOpenSearchServerlessS3BackupModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines how documents should be delivered to Amazon S3. When it is set to FailedDocumentsOnly, Kinesis Data Firehose writes any documents that could not be indexed to the configured Amazon S3 destination, with AmazonOpenSearchService-failed/ appended to the key prefix. When set to AllDocuments, Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed documents with AmazonOpenSearchService-failed/ appended to the prefix.',
        }),
    ).exactOptional(),
    S3Configuration: S3DestinationConfigurationSchema,
    ProcessingConfiguration: ProcessingConfigurationSchema.exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.exactOptional(),
    VpcConfiguration: VpcConfigurationSchema.exactOptional(),
  })
  .openapi({
    required: ['RoleARN', 'IndexName', 'S3Configuration'],
    description:
      'Describes the configuration of a destination in the Serverless offering for Amazon OpenSearch Service.',
  })
  .openapi('AmazonOpenSearchServerlessDestinationConfiguration')

const CreateDeliveryStreamInputSchema = z
  .object({
    DeliveryStreamName: DeliveryStreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the delivery stream. This name must be unique per Amazon Web Services account in the same Amazon Web Services Region. If the delivery streams are in different accounts or different Regions, you can have multiple delivery streams with the same name.',
        }),
    ),
    DeliveryStreamType: DeliveryStreamTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The delivery stream type. This parameter can be one of the following values:</p> <ul> <li> <p> <code>DirectPut</code>: Provider applications access the delivery stream directly.</p> </li> <li> <p> <code>KinesisStreamAsSource</code>: The delivery stream uses a Kinesis data stream as a source.</p> </li> </ul>',
        }),
    ).exactOptional(),
    KinesisStreamSourceConfiguration: KinesisStreamSourceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'When a Kinesis data stream is used as the source for the delivery stream, a <a>KinesisStreamSourceConfiguration</a> containing the Kinesis data stream Amazon Resource Name (ARN) and the role ARN for the source stream.',
        }),
    ).exactOptional(),
    DeliveryStreamEncryptionConfigurationInput:
      DeliveryStreamEncryptionConfigurationInputSchema.and(
        z
          .any()
          .openapi({
            description:
              'Used to specify the type and Amazon Resource Name (ARN) of the KMS key needed for Server-Side Encryption (SSE).',
          }),
      ).exactOptional(),
    S3DestinationConfiguration: S3DestinationConfigurationSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '[Deprecated] The destination in Amazon S3. You can specify only one destination.',
        }),
    ).exactOptional(),
    ExtendedS3DestinationConfiguration: ExtendedS3DestinationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The destination in Amazon S3. You can specify only one destination.',
        }),
    ).exactOptional(),
    RedshiftDestinationConfiguration: RedshiftDestinationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The destination in Amazon Redshift. You can specify only one destination.',
        }),
    ).exactOptional(),
    ElasticsearchDestinationConfiguration: ElasticsearchDestinationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The destination in Amazon ES. You can specify only one destination.',
        }),
    ).exactOptional(),
    AmazonopensearchserviceDestinationConfiguration:
      AmazonopensearchserviceDestinationConfigurationSchema.and(
        z
          .any()
          .openapi({
            description:
              'The destination in Amazon OpenSearch Service. You can specify only one destination.',
          }),
      ).exactOptional(),
    SplunkDestinationConfiguration: SplunkDestinationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The destination in Splunk. You can specify only one destination.',
        }),
    ).exactOptional(),
    HttpEndpointDestinationConfiguration: HttpEndpointDestinationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables configuring Kinesis Firehose to deliver data to any HTTP endpoint destination. You can specify only one destination.',
        }),
    ).exactOptional(),
    Tags: TagDeliveryStreamInputTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A set of tags to assign to the delivery stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the Amazon Web Services Billing and Cost Management User Guide.</p> <p>You can specify up to 50 tags when creating a delivery stream.</p>',
        }),
    ).exactOptional(),
    AmazonOpenSearchServerlessDestinationConfiguration:
      AmazonOpenSearchServerlessDestinationConfigurationSchema.and(
        z
          .any()
          .openapi({
            description:
              'The destination in the Serverless offering for Amazon OpenSearch Service. You can specify only one destination.',
          }),
      ).exactOptional(),
  })
  .openapi({ required: ['DeliveryStreamName'], title: 'CreateDeliveryStreamInput' })
  .openapi('CreateDeliveryStreamInput')

const InvalidArgumentExceptionSchema = z.any().openapi('InvalidArgumentException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const InvalidKMSResourceExceptionSchema = z.any().openapi('InvalidKMSResourceException')

const DeleteDeliveryStreamOutputSchema = z.object({}).openapi('DeleteDeliveryStreamOutput')

const DeleteDeliveryStreamInputSchema = z
  .object({
    DeliveryStreamName: DeliveryStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the delivery stream.' }),
    ),
    AllowForceDelete: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set this to true if you want to delete the delivery stream even if Kinesis Data Firehose is unable to retire the grant for the CMK. Kinesis Data Firehose might be unable to retire the grant due to a customer error, such as when the CMK or the grant are in an invalid state. If you force deletion, you can then use the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html">RevokeGrant</a> operation to revoke the grant you gave to Kinesis Data Firehose. If a failure to retire the grant happens due to an Amazon Web Services KMS issue, Kinesis Data Firehose keeps retrying the delete operation.</p> <p>The default value is false.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DeliveryStreamName'], title: 'DeleteDeliveryStreamInput' })
  .openapi('DeleteDeliveryStreamInput')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const DeliveryStreamStatusSchema = z
  .enum(['CREATING', 'CREATING_FAILED', 'DELETING', 'DELETING_FAILED', 'ACTIVE'])
  .openapi('DeliveryStreamStatus')

const DeliveryStreamFailureTypeSchema = z
  .enum([
    'RETIRE_KMS_GRANT_FAILED',
    'CREATE_KMS_GRANT_FAILED',
    'KMS_ACCESS_DENIED',
    'DISABLED_KMS_KEY',
    'INVALID_KMS_KEY',
    'KMS_KEY_NOT_FOUND',
    'KMS_OPT_IN_REQUIRED',
    'CREATE_ENI_FAILED',
    'DELETE_ENI_FAILED',
    'SUBNET_NOT_FOUND',
    'SECURITY_GROUP_NOT_FOUND',
    'ENI_ACCESS_DENIED',
    'SUBNET_ACCESS_DENIED',
    'SECURITY_GROUP_ACCESS_DENIED',
    'UNKNOWN_ERROR',
  ])
  .openapi('DeliveryStreamFailureType')

const FailureDescriptionSchema = z
  .object({
    Type: DeliveryStreamFailureTypeSchema.and(
      z.any().openapi({ description: 'The type of error that caused the failure.' }),
    ),
    Details: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A message providing details about the error that caused the failure.',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'Details'],
    description:
      'Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.',
  })
  .openapi('FailureDescription')

const DeliveryStreamEncryptionStatusSchema = z
  .enum(['ENABLED', 'ENABLING', 'ENABLING_FAILED', 'DISABLED', 'DISABLING', 'DISABLING_FAILED'])
  .openapi('DeliveryStreamEncryptionStatus')

const DeliveryStreamEncryptionConfigurationSchema = z
  .object({
    KeyARN: AWSKMSKeyARNSchema.and(
      z
        .any()
        .openapi({
          description:
            "If <code>KeyType</code> is <code>CUSTOMER_MANAGED_CMK</code>, this field contains the ARN of the customer managed CMK. If <code>KeyType</code> is <code>Amazon Web Services_OWNED_CMK</code>, <code>DeliveryStreamEncryptionConfiguration</code> doesn't contain a value for <code>KeyARN</code>.",
        }),
    ).exactOptional(),
    KeyType: KeyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the type of customer master key (CMK) that is used for encryption. The default setting is <code>Amazon Web Services_OWNED_CMK</code>. For more information about CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys">Customer Master Keys (CMKs)</a>.',
        }),
    ).exactOptional(),
    Status: DeliveryStreamEncryptionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the server-side encryption (SSE) status for the delivery stream. For a full description of the different values of this status, see <a>StartDeliveryStreamEncryption</a> and <a>StopDeliveryStreamEncryption</a>. If this status is <code>ENABLING_FAILED</code> or <code>DISABLING_FAILED</code>, it is the status of the most recent attempt to enable or disable SSE, respectively.',
        }),
    ).exactOptional(),
    FailureDescription: FailureDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation. ',
    required: [],
  })
  .openapi('DeliveryStreamEncryptionConfiguration')

const DeliveryStreamVersionIdSchema = z
  .string()
  .regex(/[0-9]+/)
  .min(1)
  .max(50)
  .openapi('DeliveryStreamVersionId')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const SourceDescriptionSchema: z.ZodType<SourceDescriptionType> = z
  .lazy(() =>
    z
      .object({
        KinesisStreamSourceDescription: KinesisStreamSourceDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                'The <a>KinesisStreamSourceDescription</a> value for the source Kinesis data stream.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.',
        required: [],
      }),
  )
  .openapi('SourceDescription')

const DestinationDescriptionSchema: z.ZodType<DestinationDescriptionType> = z
  .lazy(() =>
    z
      .object({
        DestinationId: DestinationIdSchema.and(
          z.any().openapi({ description: 'The ID of the destination.' }),
        ),
        S3DestinationDescription: S3DestinationDescriptionSchema.and(
          z.any().openapi({ description: '[Deprecated] The destination in Amazon S3.' }),
        ).exactOptional(),
        ExtendedS3DestinationDescription: ExtendedS3DestinationDescriptionSchema.and(
          z.any().openapi({ description: 'The destination in Amazon S3.' }),
        ).exactOptional(),
        RedshiftDestinationDescription: RedshiftDestinationDescriptionSchema.and(
          z.any().openapi({ description: 'The destination in Amazon Redshift.' }),
        ).exactOptional(),
        ElasticsearchDestinationDescription: ElasticsearchDestinationDescriptionSchema.and(
          z.any().openapi({ description: 'The destination in Amazon ES.' }),
        ).exactOptional(),
        AmazonopensearchserviceDestinationDescription:
          AmazonopensearchserviceDestinationDescriptionSchema.and(
            z.any().openapi({ description: 'The destination in Amazon OpenSearch Service.' }),
          ).exactOptional(),
        SplunkDestinationDescription: SplunkDestinationDescriptionSchema.and(
          z.any().openapi({ description: 'The destination in Splunk.' }),
        ).exactOptional(),
        HttpEndpointDestinationDescription: HttpEndpointDestinationDescriptionSchema.and(
          z.any().openapi({ description: 'Describes the specified HTTP endpoint destination.' }),
        ).exactOptional(),
        AmazonOpenSearchServerlessDestinationDescription:
          AmazonOpenSearchServerlessDestinationDescriptionSchema.and(
            z
              .any()
              .openapi({
                description:
                  'The destination in the Serverless offering for Amazon OpenSearch Service.',
              }),
          ).exactOptional(),
      })
      .openapi({
        required: ['DestinationId'],
        description: 'Describes the destination for a delivery stream.',
      }),
  )
  .openapi('DestinationDescription')

const DestinationDescriptionListSchema = z
  .array(DestinationDescriptionSchema)
  .openapi('DestinationDescriptionList')

const DeliveryStreamDescriptionSchema = z
  .object({
    DeliveryStreamName: DeliveryStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the delivery stream.' }),
    ),
    DeliveryStreamARN: DeliveryStreamARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the delivery stream. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ),
    DeliveryStreamStatus: DeliveryStreamStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status of the delivery stream. If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.",
        }),
    ),
    FailureDescription: FailureDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.',
        }),
    ).exactOptional(),
    DeliveryStreamEncryptionConfiguration: DeliveryStreamEncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates the server-side encryption (SSE) status for the delivery stream.',
        }),
    ).exactOptional(),
    DeliveryStreamType: DeliveryStreamTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The delivery stream type. This can be one of the following values:</p> <ul> <li> <p> <code>DirectPut</code>: Provider applications access the delivery stream directly.</p> </li> <li> <p> <code>KinesisStreamAsSource</code>: The delivery stream uses a Kinesis data stream as a source.</p> </li> </ul>',
        }),
    ),
    VersionId: DeliveryStreamVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Each time the destination is updated for a delivery stream, the version ID is changed, and the current version ID is required when updating the destination. This is so that the service knows it is applying the changes to the correct version of the delivery stream.',
        }),
    ),
    CreateTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the delivery stream was created.' }),
    ).exactOptional(),
    LastUpdateTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that the delivery stream was last updated.' }),
    ).exactOptional(),
    Source: SourceDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the <code>DeliveryStreamType</code> parameter is <code>KinesisStreamAsSource</code>, a <a>SourceDescription</a> object describing the source Kinesis data stream.',
        }),
    ).exactOptional(),
    Destinations: DestinationDescriptionListSchema.and(
      z.any().openapi({ description: 'The destinations.' }),
    ),
    HasMoreDestinations: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether there are more destinations available to list.',
        }),
    ),
  })
  .openapi({
    required: [
      'DeliveryStreamName',
      'DeliveryStreamARN',
      'DeliveryStreamStatus',
      'DeliveryStreamType',
      'VersionId',
      'Destinations',
      'HasMoreDestinations',
    ],
    description: 'Contains information about a delivery stream.',
  })
  .openapi('DeliveryStreamDescription')

const DescribeDeliveryStreamOutputSchema = z
  .object({
    DeliveryStreamDescription: DeliveryStreamDescriptionSchema.and(
      z.any().openapi({ description: 'Information about the delivery stream.' }),
    ),
  })
  .openapi({ required: ['DeliveryStreamDescription'] })
  .openapi('DescribeDeliveryStreamOutput')

const DescribeDeliveryStreamInputLimitSchema = z
  .int()
  .min(1)
  .max(10000)
  .openapi('DescribeDeliveryStreamInputLimit')

const DescribeDeliveryStreamInputSchema = z
  .object({
    DeliveryStreamName: DeliveryStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the delivery stream.' }),
    ),
    Limit: DescribeDeliveryStreamInputLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The limit on the number of destinations to return. You can have one destination per delivery stream.',
        }),
    ).exactOptional(),
    ExclusiveStartDestinationId: DestinationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the destination to start returning the destination information. Kinesis Data Firehose supports one destination per delivery stream.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DeliveryStreamName'], title: 'DescribeDeliveryStreamInput' })
  .openapi('DescribeDeliveryStreamInput')

const DeliveryStreamNameListSchema = z
  .array(DeliveryStreamNameSchema)
  .openapi('DeliveryStreamNameList')

const ListDeliveryStreamsOutputSchema = z
  .object({
    DeliveryStreamNames: DeliveryStreamNameListSchema.and(
      z.any().openapi({ description: 'The names of the delivery streams.' }),
    ),
    HasMoreDeliveryStreams: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether there are more delivery streams available to list.',
        }),
    ),
  })
  .openapi({ required: ['DeliveryStreamNames', 'HasMoreDeliveryStreams'] })
  .openapi('ListDeliveryStreamsOutput')

const ListDeliveryStreamsInputLimitSchema = z
  .int()
  .min(1)
  .max(10000)
  .openapi('ListDeliveryStreamsInputLimit')

const ListDeliveryStreamsInputSchema = z
  .object({
    Limit: ListDeliveryStreamsInputLimitSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of delivery streams to list. The default value is 10.',
        }),
    ).exactOptional(),
    DeliveryStreamType: DeliveryStreamTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The delivery stream type. This can be one of the following values:</p> <ul> <li> <p> <code>DirectPut</code>: Provider applications access the delivery stream directly.</p> </li> <li> <p> <code>KinesisStreamAsSource</code>: The delivery stream uses a Kinesis data stream as a source.</p> </li> </ul> <p>This parameter is optional. If this parameter is omitted, delivery streams of all types are returned.</p>',
        }),
    ).exactOptional(),
    ExclusiveStartDeliveryStreamName: DeliveryStreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of delivery streams returned by this call to <code>ListDeliveryStreams</code> will start with the delivery stream whose name comes alphabetically immediately after the name you specify in <code>ExclusiveStartDeliveryStreamName</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDeliveryStreamsInput', required: [] })
  .openapi('ListDeliveryStreamsInput')

const ListTagsForDeliveryStreamOutputTagListSchema = z
  .array(TagSchema)
  .min(0)
  .max(50)
  .openapi('ListTagsForDeliveryStreamOutputTagList')

const ListTagsForDeliveryStreamOutputSchema = z
  .object({
    Tags: ListTagsForDeliveryStreamOutputTagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags associated with <code>DeliveryStreamName</code>, starting with the first tag after <code>ExclusiveStartTagKey</code> and up to the specified <code>Limit</code>.',
        }),
    ),
    HasMoreTags: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this is <code>true</code> in the response, more tags are available. To list the remaining tags, set <code>ExclusiveStartTagKey</code> to the key of the last tag returned and call <code>ListTagsForDeliveryStream</code> again.',
        }),
    ),
  })
  .openapi({ required: ['Tags', 'HasMoreTags'] })
  .openapi('ListTagsForDeliveryStreamOutput')

const ListTagsForDeliveryStreamInputLimitSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('ListTagsForDeliveryStreamInputLimit')

const ListTagsForDeliveryStreamInputSchema = z
  .object({
    DeliveryStreamName: DeliveryStreamNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the delivery stream whose tags you want to list.' }),
    ),
    ExclusiveStartTagKey: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The key to use as the starting point for the list of tags. If you set this parameter, <code>ListTagsForDeliveryStream</code> gets all tags that occur after <code>ExclusiveStartTagKey</code>.',
        }),
    ).exactOptional(),
    Limit: ListTagsForDeliveryStreamInputLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of tags to return. If this number is less than the total number of tags associated with the delivery stream, <code>HasMoreTags</code> is set to <code>true</code> in the response. To list additional tags, set <code>ExclusiveStartTagKey</code> to the last key in the response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DeliveryStreamName'], title: 'ListTagsForDeliveryStreamInput' })
  .openapi('ListTagsForDeliveryStreamInput')

const PutResponseRecordIdSchema = z.string().min(1).openapi('PutResponseRecordId')

const PutRecordOutputSchema = z
  .object({
    RecordId: PutResponseRecordIdSchema.and(
      z.any().openapi({ description: 'The ID of the record.' }),
    ),
    Encrypted: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether server-side encryption (SSE) was enabled during this operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['RecordId'] })
  .openapi('PutRecordOutput')

const DataSchema = z.string().min(0).max(1024000).openapi('Data')

const RecordSchema = z
  .object({
    Data: DataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data blob, which is base64-encoded when the blob is serialized. The maximum size of the data blob, before base64-encoding, is 1,000 KiB.',
        }),
    ),
  })
  .openapi({ required: ['Data'], description: 'The unit of data in a delivery stream.' })
  .openapi('Record')

const PutRecordInputSchema = z
  .object({
    DeliveryStreamName: DeliveryStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the delivery stream.' }),
    ),
    Record: RecordSchema.and(z.any().openapi({ description: 'The record.' })),
  })
  .openapi({ required: ['DeliveryStreamName', 'Record'], title: 'PutRecordInput' })
  .openapi('PutRecordInput')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const ErrorCodeSchema = z.string().openapi('ErrorCode')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const PutRecordBatchResponseEntrySchema = z
  .object({
    RecordId: PutResponseRecordIdSchema.and(
      z.any().openapi({ description: 'The ID of the record.' }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code for an individual record result.' }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'The error message for an individual record result.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the result for an individual record from a <a>PutRecordBatch</a> request. If the record is successfully added to your delivery stream, it receives a record ID. If the record fails to be added to your delivery stream, the result includes an error code and an error message.',
    required: [],
  })
  .openapi('PutRecordBatchResponseEntry')

const PutRecordBatchResponseEntryListSchema = z
  .array(PutRecordBatchResponseEntrySchema)
  .min(1)
  .max(500)
  .openapi('PutRecordBatchResponseEntryList')

const PutRecordBatchOutputSchema = z
  .object({
    FailedPutCount: NonNegativeIntegerObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of records that might have failed processing. This number might be greater than 0 even if the <a>PutRecordBatch</a> call succeeds. Check <code>FailedPutCount</code> to determine whether there are records that you need to resend.',
        }),
    ),
    Encrypted: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether server-side encryption (SSE) was enabled during this operation.',
        }),
    ).exactOptional(),
    RequestResponses: PutRecordBatchResponseEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The results array. For each record, the index of the response element is the same as the index used in the request array.',
        }),
    ),
  })
  .openapi({ required: ['FailedPutCount', 'RequestResponses'] })
  .openapi('PutRecordBatchOutput')

const PutRecordBatchRequestEntryListSchema = z
  .array(RecordSchema)
  .min(1)
  .max(500)
  .openapi('PutRecordBatchRequestEntryList')

const PutRecordBatchInputSchema = z
  .object({
    DeliveryStreamName: DeliveryStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the delivery stream.' }),
    ),
    Records: PutRecordBatchRequestEntryListSchema.and(
      z.any().openapi({ description: 'One or more records.' }),
    ),
  })
  .openapi({ required: ['DeliveryStreamName', 'Records'], title: 'PutRecordBatchInput' })
  .openapi('PutRecordBatchInput')

const StartDeliveryStreamEncryptionOutputSchema = z
  .object({})
  .openapi('StartDeliveryStreamEncryptionOutput')

const StartDeliveryStreamEncryptionInputSchema = z
  .object({
    DeliveryStreamName: DeliveryStreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the delivery stream for which you want to enable server-side encryption (SSE).',
        }),
    ),
    DeliveryStreamEncryptionConfigurationInput:
      DeliveryStreamEncryptionConfigurationInputSchema.and(
        z
          .any()
          .openapi({
            description:
              'Used to specify the type and Amazon Resource Name (ARN) of the KMS key needed for Server-Side Encryption (SSE).',
          }),
      ).exactOptional(),
  })
  .openapi({ required: ['DeliveryStreamName'], title: 'StartDeliveryStreamEncryptionInput' })
  .openapi('StartDeliveryStreamEncryptionInput')

const StopDeliveryStreamEncryptionOutputSchema = z
  .object({})
  .openapi('StopDeliveryStreamEncryptionOutput')

const StopDeliveryStreamEncryptionInputSchema = z
  .object({
    DeliveryStreamName: DeliveryStreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the delivery stream for which you want to disable server-side encryption (SSE).',
        }),
    ),
  })
  .openapi({ required: ['DeliveryStreamName'], title: 'StopDeliveryStreamEncryptionInput' })
  .openapi('StopDeliveryStreamEncryptionInput')

const TagDeliveryStreamOutputSchema = z.object({}).openapi('TagDeliveryStreamOutput')

const TagDeliveryStreamInputSchema = z
  .object({
    DeliveryStreamName: DeliveryStreamNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the delivery stream to which you want to add the tags.',
        }),
    ),
    Tags: TagDeliveryStreamInputTagListSchema.and(
      z.any().openapi({ description: 'A set of key-value pairs to use to create the tags.' }),
    ),
  })
  .openapi({ required: ['DeliveryStreamName', 'Tags'], title: 'TagDeliveryStreamInput' })
  .openapi('TagDeliveryStreamInput')

const UntagDeliveryStreamOutputSchema = z.object({}).openapi('UntagDeliveryStreamOutput')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const UntagDeliveryStreamInputSchema = z
  .object({
    DeliveryStreamName: DeliveryStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the delivery stream.' }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tag keys. Each corresponding tag is removed from the delivery stream.',
        }),
    ),
  })
  .openapi({ required: ['DeliveryStreamName', 'TagKeys'], title: 'UntagDeliveryStreamInput' })
  .openapi('UntagDeliveryStreamInput')

const UpdateDestinationOutputSchema = z.object({}).openapi('UpdateDestinationOutput')

const S3DestinationUpdateSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ).exactOptional(),
    BucketARN: BucketARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ).exactOptional(),
    Prefix: PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3 files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3 Objects</a>.',
        }),
    ).exactOptional(),
    ErrorOutputPrefix: ErrorOutputPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3 Objects</a>.',
        }),
    ).exactOptional(),
    BufferingHints: BufferingHintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The buffering option. If no value is specified, <code>BufferingHints</code> object default values are used.',
        }),
    ).exactOptional(),
    CompressionFormat: CompressionFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The compression format. If no value is specified, the default is <code>UNCOMPRESSED</code>.</p> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified for Amazon Redshift destinations because they are not supported by the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket.</p>',
        }),
    ).exactOptional(),
    EncryptionConfiguration: EncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption configuration. If no value is specified, the default is no encryption.',
        }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z.any().openapi({ description: 'The CloudWatch logging options for your delivery stream.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an update for a destination in Amazon S3.', required: [] })
  .openapi('S3DestinationUpdate')

const ExtendedS3DestinationUpdateSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ).exactOptional(),
    BucketARN: BucketARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ).exactOptional(),
    Prefix: PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3 files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3 Objects</a>.',
        }),
    ).exactOptional(),
    ErrorOutputPrefix: ErrorOutputPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3 Objects</a>.',
        }),
    ).exactOptional(),
    BufferingHints: BufferingHintsSchema.and(
      z.any().openapi({ description: 'The buffering option.' }),
    ).exactOptional(),
    CompressionFormat: CompressionFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compression format. If no value is specified, the default is <code>UNCOMPRESSED</code>. ',
        }),
    ).exactOptional(),
    EncryptionConfiguration: EncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption configuration. If no value is specified, the default is no encryption.',
        }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon CloudWatch logging options for your delivery stream.',
        }),
    ).exactOptional(),
    ProcessingConfiguration: ProcessingConfigurationSchema.and(
      z.any().openapi({ description: 'The data processing configuration.' }),
    ).exactOptional(),
    S3BackupMode: S3BackupModeSchema.and(
      z
        .any()
        .openapi({
          description:
            "You can update a delivery stream to enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the delivery stream to disable it. ",
        }),
    ).exactOptional(),
    S3BackupUpdate: S3DestinationUpdateSchema.and(
      z.any().openapi({ description: 'The Amazon S3 destination for backup.' }),
    ).exactOptional(),
    DataFormatConversionConfiguration: DataFormatConversionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The serializer, deserializer, and schema for converting data from the JSON format to the Parquet or ORC format before writing it to Amazon S3.',
        }),
    ).exactOptional(),
    DynamicPartitioningConfiguration: DynamicPartitioningConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration of the dynamic partitioning mechanism that creates smaller data sets from the streaming data by partitioning it based on partition keys. Currently, dynamic partitioning is only supported for Amazon S3 destinations. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an update for a destination in Amazon S3.', required: [] })
  .openapi('ExtendedS3DestinationUpdate')

const RedshiftDestinationUpdateSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ).exactOptional(),
    ClusterJDBCURL: ClusterJDBCURLSchema.and(
      z.any().openapi({ description: 'The database connection string.' }),
    ).exactOptional(),
    CopyCommand: CopyCommandSchema.and(
      z.any().openapi({ description: 'The <code>COPY</code> command.' }),
    ).exactOptional(),
    Username: UsernameSchema.and(
      z.any().openapi({ description: 'The name of the user.' }),
    ).exactOptional(),
    Password: PasswordSchema.and(
      z.any().openapi({ description: 'The user password.' }),
    ).exactOptional(),
    RetryOptions: RedshiftRetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. Default value is 3600 (60 minutes).',
        }),
    ).exactOptional(),
    S3Update: S3DestinationUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon S3 destination.</p> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationUpdate.S3Update</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p>",
        }),
    ).exactOptional(),
    ProcessingConfiguration: ProcessingConfigurationSchema.and(
      z.any().openapi({ description: 'The data processing configuration.' }),
    ).exactOptional(),
    S3BackupMode: RedshiftS3BackupModeSchema.and(
      z
        .any()
        .openapi({
          description:
            "You can update a delivery stream to enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the delivery stream to disable it. ",
        }),
    ).exactOptional(),
    S3BackupUpdate: S3DestinationUpdateSchema.and(
      z.any().openapi({ description: 'The Amazon S3 destination for backup.' }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon CloudWatch logging options for your delivery stream.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes an update for a destination in Amazon Redshift.',
    required: [],
  })
  .openapi('RedshiftDestinationUpdate')

const ElasticsearchDestinationUpdateSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Amazon ES Configuration API and for indexing documents. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.',
        }),
    ).exactOptional(),
    DomainARN: ElasticsearchDomainARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the Amazon ES domain. The IAM role must have permissions for <code>DescribeDomain</code>, <code>DescribeDomains</code>, and <code>DescribeDomainConfig</code> after assuming the IAM role specified in <code>RoleARN</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.</p> <p>Specify either <code>ClusterEndpoint</code> or <code>DomainARN</code>.</p>',
        }),
    ).exactOptional(),
    ClusterEndpoint: ElasticsearchClusterEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint to use when communicating with the cluster. Specify either this <code>ClusterEndpoint</code> or the <code>DomainARN</code> field.',
        }),
    ).exactOptional(),
    IndexName: ElasticsearchIndexNameSchema.and(
      z.any().openapi({ description: 'The Elasticsearch index name.' }),
    ).exactOptional(),
    TypeName: ElasticsearchTypeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Elasticsearch type name. For Elasticsearch 6.x, there can be only one type per index. If you try to specify a new type for an existing index that already has another type, Kinesis Data Firehose returns an error during runtime.</p> <p>If you upgrade Elasticsearch from 6.x to 7.x and don’t update your delivery stream, Kinesis Data Firehose still delivers data to Elasticsearch with the old index name and type name. If you want to update your delivery stream with a new index name, provide an empty string for <code>TypeName</code>. </p>',
        }),
    ).exactOptional(),
    IndexRotationPeriod: ElasticsearchIndexRotationPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Elasticsearch index rotation period. Index rotation appends a timestamp to <code>IndexName</code> to facilitate the expiration of old data. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation">Index Rotation for the Amazon ES Destination</a>. Default value is <code>OneDay</code>.',
        }),
    ).exactOptional(),
    BufferingHints: ElasticsearchBufferingHintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The buffering options. If no value is specified, <code>ElasticsearchBufferingHints</code> object default values are used. ',
        }),
    ).exactOptional(),
    RetryOptions: ElasticsearchRetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. The default value is 300 (5 minutes).',
        }),
    ).exactOptional(),
    S3Update: S3DestinationUpdateSchema.and(
      z.any().openapi({ description: 'The Amazon S3 destination.' }),
    ).exactOptional(),
    ProcessingConfiguration: ProcessingConfigurationSchema.and(
      z.any().openapi({ description: 'The data processing configuration.' }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z.any().openapi({ description: 'The CloudWatch logging options for your delivery stream.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an update for a destination in Amazon ES.', required: [] })
  .openapi('ElasticsearchDestinationUpdate')

const AmazonopensearchserviceDestinationUpdateSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Amazon OpenSearch Service Configuration API and for indexing documents. ',
        }),
    ).exactOptional(),
    DomainARN: AmazonopensearchserviceDomainARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Amazon OpenSearch Service domain. The IAM role must have permissions for DescribeDomain, DescribeDomains, and DescribeDomainConfig after assuming the IAM role specified in RoleARN.',
        }),
    ).exactOptional(),
    ClusterEndpoint: AmazonopensearchserviceClusterEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint to use when communicating with the cluster. Specify either this ClusterEndpoint or the DomainARN field. ',
        }),
    ).exactOptional(),
    IndexName: AmazonopensearchserviceIndexNameSchema.and(
      z.any().openapi({ description: 'The Amazon OpenSearch Service index name.' }),
    ).exactOptional(),
    TypeName: AmazonopensearchserviceTypeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon OpenSearch Service type name. For Elasticsearch 6.x, there can be only one type per index. If you try to specify a new type for an existing index that already has another type, Kinesis Data Firehose returns an error during runtime. </p> <p>If you upgrade Elasticsearch from 6.x to 7.x and don’t update your delivery stream, Kinesis Data Firehose still delivers data to Elasticsearch with the old index name and type name. If you want to update your delivery stream with a new index name, provide an empty string for TypeName. </p>',
        }),
    ).exactOptional(),
    IndexRotationPeriod: AmazonopensearchserviceIndexRotationPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon OpenSearch Service index rotation period. Index rotation appends a timestamp to IndexName to facilitate the expiration of old data.',
        }),
    ).exactOptional(),
    BufferingHints: AmazonopensearchserviceBufferingHintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The buffering options. If no value is specified, AmazonopensearchBufferingHints object default values are used. ',
        }),
    ).exactOptional(),
    RetryOptions: AmazonopensearchserviceRetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon OpenSearch Service. The default value is 300 (5 minutes). ',
        }),
    ).exactOptional(),
    S3Update: S3DestinationUpdateSchema.exactOptional(),
    ProcessingConfiguration: ProcessingConfigurationSchema.exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.exactOptional(),
  })
  .openapi({
    description: 'Describes an update for a destination in Amazon OpenSearch Service.',
    required: [],
  })
  .openapi('AmazonopensearchserviceDestinationUpdate')

const SplunkDestinationUpdateSchema = z
  .object({
    HECEndpoint: HECEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP Event Collector (HEC) endpoint to which Kinesis Data Firehose sends your data.',
        }),
    ).exactOptional(),
    HECEndpointType: HECEndpointTypeSchema.and(
      z.any().openapi({ description: 'This type can be either "Raw" or "Event."' }),
    ).exactOptional(),
    HECToken: HECTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A GUID that you obtain from your Splunk cluster when you create a new HEC endpoint.',
        }),
    ).exactOptional(),
    HECAcknowledgmentTimeoutInSeconds: HECAcknowledgmentTimeoutInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time that Kinesis Data Firehose waits to receive an acknowledgment from Splunk after it sends data. At the end of the timeout period, Kinesis Data Firehose either tries to send the data again or considers it an error, based on your retry settings.',
        }),
    ).exactOptional(),
    RetryOptions: SplunkRetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The retry behavior in case Kinesis Data Firehose is unable to deliver data to Splunk or if it doesn't receive an acknowledgment of receipt from Splunk.",
        }),
    ).exactOptional(),
    S3BackupMode: SplunkS3BackupModeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies how you want Kinesis Data Firehose to back up documents to Amazon S3. When set to <code>FailedDocumentsOnly</code>, Kinesis Data Firehose writes any data that could not be indexed to the configured Amazon S3 destination. When set to <code>AllEvents</code>, Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed documents to Amazon S3. The default value is <code>FailedEventsOnly</code>.</p> <p>You can update this backup mode from <code>FailedEventsOnly</code> to <code>AllEvents</code>. You can't update it from <code>AllEvents</code> to <code>FailedEventsOnly</code>.</p>",
        }),
    ).exactOptional(),
    S3Update: S3DestinationUpdateSchema.and(
      z
        .any()
        .openapi({
          description: 'Your update to the configuration of the backup Amazon S3 location.',
        }),
    ).exactOptional(),
    ProcessingConfiguration: ProcessingConfigurationSchema.and(
      z.any().openapi({ description: 'The data processing configuration.' }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon CloudWatch logging options for your delivery stream.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an update for a destination in Splunk.', required: [] })
  .openapi('SplunkDestinationUpdate')

const HttpEndpointDestinationUpdateSchema = z
  .object({
    EndpointConfiguration: HttpEndpointConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Describes the configuration of the HTTP endpoint destination.' }),
    ).exactOptional(),
    BufferingHints: HttpEndpointBufferingHintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes buffering options that can be applied to the data before it is delivered to the HTTPS endpoint destination. Kinesis Data Firehose teats these options as hints, and it might choose to use more optimal values. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. ',
        }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.exactOptional(),
    RequestConfiguration: HttpEndpointRequestConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration of the request sent to the HTTP endpoint specified as the destination.',
        }),
    ).exactOptional(),
    ProcessingConfiguration: ProcessingConfigurationSchema.exactOptional(),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'Kinesis Data Firehose uses this IAM role for all the permissions that the delivery stream needs.',
        }),
    ).exactOptional(),
    RetryOptions: HttpEndpointRetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.",
        }),
    ).exactOptional(),
    S3BackupMode: HttpEndpointS3BackupModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the S3 bucket backup options for the data that Kinesis Firehose delivers to the HTTP endpoint destination. You can back up all documents (<code>AllData</code>) or only the documents that Kinesis Data Firehose could not deliver to the specified HTTP endpoint destination (<code>FailedDataOnly</code>).',
        }),
    ).exactOptional(),
    S3Update: S3DestinationUpdateSchema.exactOptional(),
  })
  .openapi({ description: 'Updates the specified HTTP endpoint destination.', required: [] })
  .openapi('HttpEndpointDestinationUpdate')

const AmazonOpenSearchServerlessDestinationUpdateSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Serverless offering for Amazon OpenSearch Service Configuration API and for indexing documents.',
        }),
    ).exactOptional(),
    CollectionEndpoint: AmazonOpenSearchServerlessCollectionEndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint to use when communicating with the collection in the Serverless offering for Amazon OpenSearch Service.',
        }),
    ).exactOptional(),
    IndexName: AmazonOpenSearchServerlessIndexNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Serverless offering for Amazon OpenSearch Service index name.',
        }),
    ).exactOptional(),
    BufferingHints: AmazonOpenSearchServerlessBufferingHintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The buffering options. If no value is specified, AmazonopensearchBufferingHints object default values are used.',
        }),
    ).exactOptional(),
    RetryOptions: AmazonOpenSearchServerlessRetryOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The retry behavior in case Kinesis Data Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service. The default value is 300 (5 minutes).',
        }),
    ).exactOptional(),
    S3Update: S3DestinationUpdateSchema.exactOptional(),
    ProcessingConfiguration: ProcessingConfigurationSchema.exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.exactOptional(),
  })
  .openapi({
    description:
      'Describes an update for a destination in the Serverless offering for Amazon OpenSearch Service.',
    required: [],
  })
  .openapi('AmazonOpenSearchServerlessDestinationUpdate')

const UpdateDestinationInputSchema = z
  .object({
    DeliveryStreamName: DeliveryStreamNameSchema.and(
      z.any().openapi({ description: 'The name of the delivery stream.' }),
    ),
    CurrentDeliveryStreamVersionId: DeliveryStreamVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Obtain this value from the <code>VersionId</code> result of <a>DeliveryStreamDescription</a>. This value is required, and helps the service perform conditional operations. For example, if there is an interleaving update and this value is null, then the update destination fails. After the update is successful, the <code>VersionId</code> value is updated. The service then performs a merge of the old configuration with the new configuration.',
        }),
    ),
    DestinationId: DestinationIdSchema.and(
      z.any().openapi({ description: 'The ID of the destination.' }),
    ),
    S3DestinationUpdate: S3DestinationUpdateSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: '[Deprecated] Describes an update for a destination in Amazon S3.',
        }),
    ).exactOptional(),
    ExtendedS3DestinationUpdate: ExtendedS3DestinationUpdateSchema.and(
      z.any().openapi({ description: 'Describes an update for a destination in Amazon S3.' }),
    ).exactOptional(),
    RedshiftDestinationUpdate: RedshiftDestinationUpdateSchema.and(
      z.any().openapi({ description: 'Describes an update for a destination in Amazon Redshift.' }),
    ).exactOptional(),
    ElasticsearchDestinationUpdate: ElasticsearchDestinationUpdateSchema.and(
      z.any().openapi({ description: 'Describes an update for a destination in Amazon ES.' }),
    ).exactOptional(),
    AmazonopensearchserviceDestinationUpdate: AmazonopensearchserviceDestinationUpdateSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes an update for a destination in Amazon OpenSearch Service.',
        }),
    ).exactOptional(),
    SplunkDestinationUpdate: SplunkDestinationUpdateSchema.and(
      z.any().openapi({ description: 'Describes an update for a destination in Splunk.' }),
    ).exactOptional(),
    HttpEndpointDestinationUpdate: HttpEndpointDestinationUpdateSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes an update to the specified HTTP endpoint destination.',
        }),
    ).exactOptional(),
    AmazonOpenSearchServerlessDestinationUpdate:
      AmazonOpenSearchServerlessDestinationUpdateSchema.and(
        z
          .any()
          .openapi({
            description:
              'Describes an update for a destination in the Serverless offering for Amazon OpenSearch Service.',
          }),
      ).exactOptional(),
  })
  .openapi({
    required: ['DeliveryStreamName', 'CurrentDeliveryStreamVersionId', 'DestinationId'],
    title: 'UpdateDestinationInput',
  })
  .openapi('UpdateDestinationInput')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

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

export const postXAmzTargetFirehose20150804CreateDeliveryStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Firehose_20150804.CreateDeliveryStream',
  description:
    "<p>Creates a Kinesis Data Firehose delivery stream.</p> <p>By default, you can create up to 50 delivery streams per Amazon Web Services Region.</p> <p>This is an asynchronous operation that immediately returns. The initial status of the delivery stream is <code>CREATING</code>. After the delivery stream is created, its status is <code>ACTIVE</code> and it now accepts data. If the delivery stream creation fails, the status transitions to <code>CREATING_FAILED</code>. Attempts to send data to a delivery stream that is not in the <code>ACTIVE</code> state cause an exception. To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.</p> <p>A Kinesis Data Firehose delivery stream can be configured to receive records directly from providers using <a>PutRecord</a> or <a>PutRecordBatch</a>, or it can be configured to use an existing Kinesis stream as its source. To specify a Kinesis data stream as input, set the <code>DeliveryStreamType</code> parameter to <code>KinesisStreamAsSource</code>, and provide the Kinesis stream Amazon Resource Name (ARN) and role ARN in the <code>KinesisStreamSourceConfiguration</code> parameter.</p> <p>To create a delivery stream with server-side encryption (SSE) enabled, include <a>DeliveryStreamEncryptionConfigurationInput</a> in your request. This is optional. You can also invoke <a>StartDeliveryStreamEncryption</a> to turn on SSE for an existing delivery stream that doesn't have SSE enabled.</p> <p>A delivery stream is configured with a single destination: Amazon S3, Amazon ES, Amazon Redshift, or Splunk. You must specify only one of the following destination configuration parameters: <code>ExtendedS3DestinationConfiguration</code>, <code>S3DestinationConfiguration</code>, <code>ElasticsearchDestinationConfiguration</code>, <code>RedshiftDestinationConfiguration</code>, or <code>SplunkDestinationConfiguration</code>.</p> <p>When you specify <code>S3DestinationConfiguration</code>, you can also provide the following optional values: BufferingHints, <code>EncryptionConfiguration</code>, and <code>CompressionFormat</code>. By default, if no <code>BufferingHints</code> value is provided, Kinesis Data Firehose buffers data up to 5 MB or for 5 minutes, whichever condition is satisfied first. <code>BufferingHints</code> is a hint, so there are some cases where the service cannot adhere to these conditions strictly. For example, record boundaries might be such that the size is a little over or under the configured buffering size. By default, no encryption is performed. We strongly recommend that you enable encryption to ensure secure data storage in Amazon S3.</p> <p>A few notes about Amazon Redshift as a destination:</p> <ul> <li> <p>An Amazon Redshift destination requires an S3 bucket as intermediate location. Kinesis Data Firehose first delivers data to Amazon S3 and then uses <code>COPY</code> syntax to load data into an Amazon Redshift table. This is specified in the <code>RedshiftDestinationConfiguration.S3Configuration</code> parameter.</p> </li> <li> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p> </li> <li> <p>We strongly recommend that you use the user name and password you provide exclusively with Kinesis Data Firehose, and that the permissions for the account are restricted for Amazon Redshift <code>INSERT</code> permissions.</p> </li> </ul> <p>Kinesis Data Firehose assumes the IAM role that is configured as part of the destination. The role should allow the Kinesis Data Firehose principal to assume the role, and the role should have permissions that allow the service to deliver the data. For more information, see <a href=\"https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3\">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> in the <i>Amazon Kinesis Data Firehose Developer Guide</i>.</p>",
  operationId: 'CreateDeliveryStream',
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
        .literal('Firehose_20150804.CreateDeliveryStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Firehose_20150804.CreateDeliveryStream'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDeliveryStreamInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDeliveryStreamOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'InvalidKMSResourceException',
      content: { 'application/json': { schema: InvalidKMSResourceExceptionSchema } },
    },
  },
})

export const postXAmzTargetFirehose20150804DeleteDeliveryStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream',
  description:
    "<p>Deletes a delivery stream and its data.</p> <p>To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>. You can delete a delivery stream only if it is in one of the following states: <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or <code>DELETING_FAILED</code>. You can't delete a delivery stream that is in the <code>CREATING</code> state. While the deletion request is in process, the delivery stream is in the <code>DELETING</code> state.</p> <p>While the delivery stream is in the <code>DELETING</code> state, the service might continue to accept records, but it doesn't make any guarantees with respect to delivering the data. Therefore, as a best practice, first stop any applications that are sending records before you delete a delivery stream.</p>",
  operationId: 'DeleteDeliveryStream',
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
        .literal('Firehose_20150804.DeleteDeliveryStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Firehose_20150804.DeleteDeliveryStream'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDeliveryStreamInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDeliveryStreamOutputSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetFirehose20150804DescribeDeliveryStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream',
  description:
    "<p>Describes the specified delivery stream and its status. For example, after your delivery stream is created, call <code>DescribeDeliveryStream</code> to see whether the delivery stream is <code>ACTIVE</code> and therefore ready for data to be sent to it. </p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <a>CreateDeliveryStream</a> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it. If the status is <code>DELETING_FAILED</code>, you can force deletion by invoking <a>DeleteDeliveryStream</a> again but with <a>DeleteDeliveryStreamInput$AllowForceDelete</a> set to true.</p>",
  operationId: 'DescribeDeliveryStream',
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
        .literal('Firehose_20150804.DescribeDeliveryStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Firehose_20150804.DescribeDeliveryStream'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDeliveryStreamInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDeliveryStreamOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetFirehose20150804ListDeliveryStreamsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Firehose_20150804.ListDeliveryStreams',
  description:
    '<p>Lists your delivery streams in alphabetical order of their names.</p> <p>The number of delivery streams might be too large to return using a single call to <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned, using the <code>Limit</code> parameter. To determine whether there are more delivery streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If there are more delivery streams to list, you can request them by calling this operation again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name of the last delivery stream returned in the last call.</p>',
  operationId: 'ListDeliveryStreams',
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
        .literal('Firehose_20150804.ListDeliveryStreams')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Firehose_20150804.ListDeliveryStreams'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListDeliveryStreamsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDeliveryStreamsOutputSchema } },
    },
  },
})

export const postXAmzTargetFirehose20150804ListTagsForDeliveryStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream',
  description:
    'Lists the tags for the specified delivery stream. This operation has a limit of five transactions per second per account. ',
  operationId: 'ListTagsForDeliveryStream',
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
        .literal('Firehose_20150804.ListTagsForDeliveryStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Firehose_20150804.ListTagsForDeliveryStream'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForDeliveryStreamInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForDeliveryStreamOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetFirehose20150804PutRecordRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Firehose_20150804.PutRecord',
  description:
    '<p>Writes a single data record into an Amazon Kinesis Data Firehose delivery stream. To write multiple data records into a delivery stream, use <a>PutRecordBatch</a>. Applications using these operations are referred to as producers.</p> <p>By default, each delivery stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and <a>PutRecordBatch</a>, the limits are an aggregate across these two operations for each delivery stream. For more information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Limits</a>. </p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KiB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <code>PutRecord</code> operation returns a <code>RecordId</code>, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation.</p> <p>If the <code>PutRecord</code> operation throws a <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream. </p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don\'t concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>',
  operationId: 'PutRecord',
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
        .literal('Firehose_20150804.PutRecord')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Firehose_20150804.PutRecord'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutRecordInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRecordOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'InvalidKMSResourceException',
      content: { 'application/json': { schema: InvalidKMSResourceExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetFirehose20150804PutRecordBatchRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Firehose_20150804.PutRecordBatch',
  description:
    '<p>Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a delivery stream, use <a>PutRecord</a>. Applications using these operations are referred to as producers.</p> <p>For information about service quota, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Quota</a>.</p> <p>Each <a>PutRecordBatch</a> request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed.</p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <a>PutRecordBatch</a> response includes a count of failed records, <code>FailedPutCount</code>, and an array of responses, <code>RequestResponses</code>. Even if the <a>PutRecordBatch</a> call succeeds, the value of <code>FailedPutCount</code> may be greater than 0, indicating that there are records for which the operation didn\'t succeed. Each entry in the <code>RequestResponses</code> array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. <code>RequestResponses</code> includes both successfully and unsuccessfully processed records. Kinesis Data Firehose tries to process all records in each <a>PutRecordBatch</a> request. A single record failure does not stop the processing of subsequent records. </p> <p>A successfully processed record includes a <code>RecordId</code> value, which is unique for the record. An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error, and is one of the following values: <code>ServiceUnavailableException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the error.</p> <p>If there is an internal server error or a timeout, the write might have completed or it might have failed. If <code>FailedPutCount</code> is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination.</p> <p>If <a>PutRecordBatch</a> throws <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream.</p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don\'t concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>',
  operationId: 'PutRecordBatch',
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
        .literal('Firehose_20150804.PutRecordBatch')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Firehose_20150804.PutRecordBatch'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutRecordBatchInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRecordBatchOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'InvalidKMSResourceException',
      content: { 'application/json': { schema: InvalidKMSResourceExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetFirehose20150804StartDeliveryStreamEncryptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption',
  description:
    "<p>Enables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>ENABLING</code>, and then to <code>ENABLED</code>. The encryption status of a delivery stream is the <code>Status</code> property in <a>DeliveryStreamEncryptionConfiguration</a>. If the operation fails, the encryption status changes to <code>ENABLING_FAILED</code>. You can continue to read and write data to your delivery stream while the encryption status is <code>ENABLING</code>, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to <code>ENABLED</code> before all records written to the delivery stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption status of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>Even if encryption is currently enabled for a delivery stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant.</p> <p>If a delivery stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get <code>ENABLING_FAILED</code>, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK.</p> <p>If the encryption status of your delivery stream is <code>ENABLING_FAILED</code>, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Kinesis Data Firehose to invoke KMS encrypt and decrypt operations.</p> <p>You can enable SSE for a delivery stream only if it's a delivery stream that uses <code>DirectPut</code> as its source. </p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>",
  operationId: 'StartDeliveryStreamEncryption',
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
        .literal('Firehose_20150804.StartDeliveryStreamEncryption')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Firehose_20150804.StartDeliveryStreamEncryption'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartDeliveryStreamEncryptionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartDeliveryStreamEncryptionOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InvalidKMSResourceException',
      content: { 'application/json': { schema: InvalidKMSResourceExceptionSchema } },
    },
  },
})

export const postXAmzTargetFirehose20150804StopDeliveryStreamEncryptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption',
  description:
    '<p>Disables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>DISABLING</code>, and then to <code>DISABLED</code>. You can continue to read and write data to your stream while its status is <code>DISABLING</code>. It can take up to 5 seconds after the encryption status changes to <code>DISABLED</code> before all records written to the delivery stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption state of a delivery stream, use <a>DescribeDeliveryStream</a>. </p> <p>If SSE is enabled using a customer managed CMK and then you invoke <code>StopDeliveryStreamEncryption</code>, Kinesis Data Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination.</p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>',
  operationId: 'StopDeliveryStreamEncryption',
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
        .literal('Firehose_20150804.StopDeliveryStreamEncryption')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Firehose_20150804.StopDeliveryStreamEncryption'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopDeliveryStreamEncryptionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopDeliveryStreamEncryptionOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetFirehose20150804TagDeliveryStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Firehose_20150804.TagDeliveryStream',
  description:
    '<p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>. </p> <p>Each delivery stream can have up to 50 tags. </p> <p>This operation has a limit of five transactions per second per account. </p>',
  operationId: 'TagDeliveryStream',
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
        .literal('Firehose_20150804.TagDeliveryStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Firehose_20150804.TagDeliveryStream'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TagDeliveryStreamInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagDeliveryStreamOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetFirehose20150804UntagDeliveryStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Firehose_20150804.UntagDeliveryStream',
  description:
    "<p>Removes tags from the specified delivery stream. Removed tags are deleted, and you can't recover them after this operation successfully completes.</p> <p>If you specify a tag that doesn't exist, the operation ignores it.</p> <p>This operation has a limit of five transactions per second per account. </p>",
  operationId: 'UntagDeliveryStream',
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
        .literal('Firehose_20150804.UntagDeliveryStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Firehose_20150804.UntagDeliveryStream'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagDeliveryStreamInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagDeliveryStreamOutputSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetFirehose20150804UpdateDestinationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Firehose_20150804.UpdateDestination',
  description:
    '<p>Updates the specified destination of the specified delivery stream.</p> <p>Use this operation to change the destination type (for example, to replace the Amazon S3 destination with Amazon Redshift) or change the parameters associated with a destination (for example, to change the bucket name of the Amazon S3 destination). The update might not occur immediately. The target delivery stream remains active while the configurations are updated, so data writes to the delivery stream can continue during this process. The updated configurations are usually effective within a few minutes.</p> <p>Switching between Amazon ES and other services is not supported. For an Amazon ES destination, you can only update to another Amazon ES destination.</p> <p>If the destination type is the same, Kinesis Data Firehose merges the configuration parameters specified with the destination configuration that already exists on the delivery stream. If any of the parameters are not specified in the call, the existing values are retained. For example, in the Amazon S3 destination, if <a>EncryptionConfiguration</a> is not specified, then the existing <code>EncryptionConfiguration</code> is maintained on the destination.</p> <p>If the destination type is not the same, for example, changing the destination from Amazon S3 to Amazon Redshift, Kinesis Data Firehose does not merge any parameters. In this case, all parameters must be specified.</p> <p>Kinesis Data Firehose uses <code>CurrentDeliveryStreamVersionId</code> to avoid race conditions and conflicting merges. This is a required field, and the service updates the configuration only if the existing configuration has a version ID that matches. After the update is applied successfully, the version ID is updated, and can be retrieved using <a>DescribeDeliveryStream</a>. Use the new version ID to set <code>CurrentDeliveryStreamVersionId</code> in the next call.</p>',
  operationId: 'UpdateDestination',
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
        .literal('Firehose_20150804.UpdateDestination')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Firehose_20150804.UpdateDestination'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDestinationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDestinationOutputSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})
