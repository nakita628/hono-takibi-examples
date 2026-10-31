import { createRoute, z } from '@hono/zod-openapi'

const InAppStreamNameSchema = z
  .string()
  .regex(/[^-\s<>&]*/)
  .min(1)
  .max(32)
  .openapi('InAppStreamName')

const ResourceARNSchema = z
  .string()
  .regex(/arn:.*/)
  .min(1)
  .max(2048)
  .openapi('ResourceARN')

const InputLambdaProcessorSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the Amazon Lambda function that operates on records in the stream.</p> <note> <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a> </p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['ResourceARN'],
    description:
      'An object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application. ',
  })
  .openapi('InputLambdaProcessor')

const InputProcessingConfigurationSchema = z
  .object({
    InputLambdaProcessor: InputLambdaProcessorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream before being processed by your application code.',
        }),
    ),
  })
  .openapi({
    required: ['InputLambdaProcessor'],
    description:
      'For a SQL-based Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.',
  })
  .openapi('InputProcessingConfiguration')

const KinesisStreamsInputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The ARN of the input Kinesis data stream to read.' }),
    ),
  })
  .openapi({
    required: ['ResourceARN'],
    description:
      " Identifies a Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN).",
  })
  .openapi('KinesisStreamsInput')

const KinesisFirehoseInputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the delivery stream.' }),
    ),
  })
  .openapi({
    required: ['ResourceARN'],
    description:
      "For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN).",
  })
  .openapi('KinesisFirehoseInput')

const InputParallelismCountSchema = z.int().min(1).max(64).openapi('InputParallelismCount')

const InputParallelismSchema = z
  .object({
    Count: InputParallelismCountSchema.and(
      z.any().openapi({ description: 'The number of in-application streams to create.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'For a SQL-based Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source. ',
    required: [],
  })
  .openapi('InputParallelism')

const InputSchema: z.ZodType<InputType> = z
  .lazy(() =>
    z
      .object({
        NamePrefix: InAppStreamNameSchema.and(
          z
            .any()
            .openapi({
              description:
                'The name prefix to use when creating an in-application stream. Suppose that you specify a prefix "<code>MyInApplicationStream</code>." Kinesis Data Analytics then creates one or more (as per the <code>InputParallelism</code> count you specified) in-application streams with the names "<code>MyInApplicationStream_001</code>," "<code>MyInApplicationStream_002</code>," and so on. ',
            }),
        ),
        InputProcessingConfiguration: InputProcessingConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                "The <a>InputProcessingConfiguration</a> for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is <a>InputLambdaProcessor</a>. ",
            }),
        ).exactOptional(),
        KinesisStreamsInput: KinesisStreamsInputSchema.and(
          z
            .any()
            .openapi({
              description:
                "If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN). ",
            }),
        ).exactOptional(),
        KinesisFirehoseInput: KinesisFirehoseInputSchema.and(
          z
            .any()
            .openapi({
              description:
                "If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.",
            }),
        ).exactOptional(),
        InputParallelism: InputParallelismSchema.and(
          z
            .any()
            .openapi({ description: 'Describes the number of in-application streams to create. ' }),
        ).exactOptional(),
        InputSchema: SourceSchemaSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.</p> <p>Also used to describe the format of the reference data source.</p>',
            }),
        ),
      })
      .openapi({
        required: ['NamePrefix', 'InputSchema'],
        description:
          'When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. ',
      }),
  )
  .openapi('Input')

const RecordFormatTypeSchema = z.enum(['JSON', 'CSV']).openapi('RecordFormatType')

const MappingParametersSchema: z.ZodType<MappingParametersType> = z
  .lazy(() =>
    z
      .object({
        JSONMappingParameters: JSONMappingParametersSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides additional mapping information when JSON is the record format on the streaming source.',
            }),
        ).exactOptional(),
        CSVMappingParameters: CSVMappingParametersSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides additional mapping information when the record format uses delimiters (for example, CSV).',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          "When you configure a SQL-based Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.",
        required: [],
      }),
  )
  .openapi('MappingParameters')

const RecordFormatSchema = z
  .object({
    RecordFormatType: RecordFormatTypeSchema.and(
      z.any().openapi({ description: 'The type of record format.' }),
    ),
    MappingParameters: MappingParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you configure application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RecordFormatType'],
    description:
      ' For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream. ',
  })
  .openapi('RecordFormat')

const RecordEncodingSchema = z.string().regex(/UTF-8/).length(5).openapi('RecordEncoding')

const RecordColumnNameSchema = z
  .string()
  .regex(/[^-\s<>&]*/)
  .min(1)
  .max(256)
  .openapi('RecordColumnName')

const RecordColumnMappingSchema = z.string().min(0).max(65535).openapi('RecordColumnMapping')

const RecordColumnSqlTypeSchema = z.string().min(1).max(100).openapi('RecordColumnSqlType')

const RecordColumnSchema = z
  .object({
    Name: RecordColumnNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the column that is created in the in-application input stream or reference table.',
        }),
    ),
    Mapping: RecordColumnMappingSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to the data element in the streaming input or the reference data source.',
        }),
    ).exactOptional(),
    SqlType: RecordColumnSqlTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of column created in the in-application input stream or reference table.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'SqlType'],
    description:
      '<p>For a SQL-based Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p>',
  })
  .openapi('RecordColumn')

const RecordColumnsSchema = z.array(RecordColumnSchema).min(1).max(1000).openapi('RecordColumns')

const SourceSchemaSchema = z
  .object({
    RecordFormat: RecordFormatSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the format of the records on the streaming source.' }),
    ),
    RecordEncoding: RecordEncodingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the encoding of the records in the streaming source. For example, UTF-8.',
        }),
    ).exactOptional(),
    RecordColumns: RecordColumnsSchema.and(
      z.any().openapi({ description: 'A list of <code>RecordColumn</code> objects. ' }),
    ),
  })
  .openapi({
    required: ['RecordFormat', 'RecordColumns'],
    description:
      'For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. ',
  })
  .openapi('SourceSchema')

type InputType = {
  NamePrefix: z.infer<typeof InAppStreamNameSchema> & { [key: string]: unknown }
  InputProcessingConfiguration?: z.infer<typeof InputProcessingConfigurationSchema> & {
    [key: string]: unknown
  }
  KinesisStreamsInput?: z.infer<typeof KinesisStreamsInputSchema> & { [key: string]: unknown }
  KinesisFirehoseInput?: z.infer<typeof KinesisFirehoseInputSchema> & { [key: string]: unknown }
  InputParallelism?: z.infer<typeof InputParallelismSchema> & { [key: string]: unknown }
  InputSchema: z.infer<typeof SourceSchemaSchema> & { [key: string]: unknown }
}

const KinesisStreamsOutputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the destination Kinesis data stream to write to.' }),
    ),
  })
  .openapi({
    required: ['ResourceARN'],
    description:
      "When you configure a SQL-based Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN). ",
  })
  .openapi('KinesisStreamsOutput')

const KinesisFirehoseOutputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The ARN of the destination delivery stream to write to.' }),
    ),
  })
  .openapi({
    required: ['ResourceARN'],
    description:
      'For a SQL-based Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream. ',
  })
  .openapi('KinesisFirehoseOutput')

const LambdaOutputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the destination Lambda function to write to.</p> <note> <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a> </p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['ResourceARN'],
    description:
      "When you configure a SQL-based Kinesis Data Analytics application's output, identifies an Amazon Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function. ",
  })
  .openapi('LambdaOutput')

const DestinationSchemaSchema = z
  .object({
    RecordFormatType: RecordFormatTypeSchema.and(
      z.any().openapi({ description: 'Specifies the format of the records on the output stream.' }),
    ),
  })
  .openapi({
    required: ['RecordFormatType'],
    description:
      'Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application. ',
  })
  .openapi('DestinationSchema')

type OutputType = {
  Name: z.infer<typeof InAppStreamNameSchema> & { [key: string]: unknown }
  KinesisStreamsOutput?: z.infer<typeof KinesisStreamsOutputSchema> & { [key: string]: unknown }
  KinesisFirehoseOutput?: z.infer<typeof KinesisFirehoseOutputSchema> & { [key: string]: unknown }
  LambdaOutput?: z.infer<typeof LambdaOutputSchema> & { [key: string]: unknown }
  DestinationSchema: z.infer<typeof DestinationSchemaSchema> & { [key: string]: unknown }
}

const InAppTableNameSchema = z.string().min(1).max(32).openapi('InAppTableName')

const BucketARNSchema = z
  .string()
  .regex(/arn:.*/)
  .min(1)
  .max(2048)
  .openapi('BucketARN')

const FileKeySchema = z.string().min(1).max(1024).openapi('FileKey')

const S3ReferenceDataSourceSchema = z
  .object({
    BucketARN: BucketARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the S3 bucket.' }),
    ).exactOptional(),
    FileKey: FileKeySchema.and(
      z.any().openapi({ description: 'The object key name containing the reference data.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>For a SQL-based Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.</p> <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>',
    required: [],
  })
  .openapi('S3ReferenceDataSource')

type ReferenceDataSourceType = {
  TableName: z.infer<typeof InAppTableNameSchema> & { [key: string]: unknown }
  S3ReferenceDataSource?: z.infer<typeof S3ReferenceDataSourceSchema> & { [key: string]: unknown }
  ReferenceSchema: z.infer<typeof SourceSchemaSchema> & { [key: string]: unknown }
}

const InputsSchema = z.array(InputSchema).openapi('Inputs')

const OutputSchema: z.ZodType<OutputType> = z
  .lazy(() =>
    z
      .object({
        Name: InAppStreamNameSchema.and(
          z.any().openapi({ description: 'The name of the in-application stream.' }),
        ),
        KinesisStreamsOutput: KinesisStreamsOutputSchema.and(
          z.any().openapi({ description: 'Identifies a Kinesis data stream as the destination.' }),
        ).exactOptional(),
        KinesisFirehoseOutput: KinesisFirehoseOutputSchema.and(
          z
            .any()
            .openapi({
              description: 'Identifies a Kinesis Data Firehose delivery stream as the destination.',
            }),
        ).exactOptional(),
        LambdaOutput: LambdaOutputSchema.and(
          z
            .any()
            .openapi({ description: 'Identifies an Amazon Lambda function as the destination.' }),
        ).exactOptional(),
        DestinationSchema: DestinationSchemaSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the data format when records are written to the destination. ',
            }),
        ),
      })
      .openapi({
        required: ['Name', 'DestinationSchema'],
        description:
          "<p> Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/>",
      }),
  )
  .openapi('Output')

const OutputsSchema = z.array(OutputSchema).openapi('Outputs')

const ReferenceDataSourceSchema: z.ZodType<ReferenceDataSourceType> = z
  .lazy(() =>
    z
      .object({
        TableName: InAppTableNameSchema.and(
          z.any().openapi({ description: 'The name of the in-application table to create.' }),
        ),
        S3ReferenceDataSource: S3ReferenceDataSourceSchema.and(
          z
            .any()
            .openapi({
              description:
                'Identifies the S3 bucket and object that contains the reference data. A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. ',
            }),
        ).exactOptional(),
        ReferenceSchema: SourceSchemaSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.',
            }),
        ),
      })
      .openapi({
        required: ['TableName', 'ReferenceSchema'],
        description:
          'For a SQL-based Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.',
      }),
  )
  .openapi('ReferenceDataSource')

const ReferenceDataSourcesSchema = z
  .array(ReferenceDataSourceSchema)
  .openapi('ReferenceDataSources')

const SqlApplicationConfigurationSchema = z
  .object({
    Inputs: InputsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of <a>Input</a> objects describing the input streams used by the application.',
        }),
    ).exactOptional(),
    Outputs: OutputsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of <a>Output</a> objects describing the destination streams used by the application.',
        }),
    ).exactOptional(),
    ReferenceDataSources: ReferenceDataSourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of <a>ReferenceDataSource</a> objects describing the reference data sources used by the application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.',
    required: [],
  })
  .openapi('SqlApplicationConfiguration')

const ConfigurationTypeSchema = z.enum(['DEFAULT', 'CUSTOM']).openapi('ConfigurationType')

const BooleanObjectSchema = z.boolean().openapi('BooleanObject')

const CheckpointIntervalSchema = z.int().min(1).openapi('CheckpointInterval')

const MinPauseBetweenCheckpointsSchema = z.int().min(0).openapi('MinPauseBetweenCheckpoints')

const CheckpointConfigurationSchema = z
  .object({
    ConfigurationType: ConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Describes whether the application uses Kinesis Data Analytics' default checkpointing behavior. You must set this property to <code>CUSTOM</code> in order to set the <code>CheckpointingEnabled</code>, <code>CheckpointInterval</code>, or <code>MinPauseBetweenCheckpoints</code> parameters.</p> <note> <p>If this value is set to <code>DEFAULT</code>, the application will use the following values, even if they are set to other values using APIs or application code:</p> <ul> <li> <p> <b>CheckpointingEnabled:</b> true</p> </li> <li> <p> <b>CheckpointInterval:</b> 60000</p> </li> <li> <p> <b>MinPauseBetweenCheckpoints:</b> 5000</p> </li> </ul> </note>",
        }),
    ),
    CheckpointingEnabled: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes whether checkpointing is enabled for a Flink-based Kinesis Data Analytics application.</p> <note> <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>, the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value is set to another value using this API or in application code.</p> </note>',
        }),
    ).exactOptional(),
    CheckpointInterval: CheckpointIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the interval in milliseconds between checkpoint operations. </p> <note> <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>, the application will use a <code>CheckpointInterval</code> value of 60000, even if this value is set to another value using this API or in application code.</p> </note>',
        }),
    ).exactOptional(),
    MinPauseBetweenCheckpoints: MinPauseBetweenCheckpointsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start. If a checkpoint operation takes longer than the <code>CheckpointInterval</code>, the application otherwise performs continual checkpoint operations. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/ops/state/large_state_tuning.html#tuning-checkpointing"> Tuning Checkpointing</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.</p> <note> <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>, the application will use a <code>MinPauseBetweenCheckpoints</code> value of 5000, even if this value is set using this API or in application code.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationType'],
    description:
      'Describes an application\'s checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.',
  })
  .openapi('CheckpointConfiguration')

const MetricsLevelSchema = z
  .enum(['APPLICATION', 'TASK', 'OPERATOR', 'PARALLELISM'])
  .openapi('MetricsLevel')

const LogLevelSchema = z.enum(['INFO', 'WARN', 'ERROR', 'DEBUG']).openapi('LogLevel')

const MonitoringConfigurationSchema = z
  .object({
    ConfigurationType: ConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether to use the default CloudWatch logging configuration for an application. You must set this property to <code>CUSTOM</code> in order to set the <code>LogLevel</code> or <code>MetricsLevel</code> parameters.',
        }),
    ),
    MetricsLevel: MetricsLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the granularity of the CloudWatch Logs for an application. The <code>Parallelism</code> level is not recommended for applications with a Parallelism over 64 due to excessive costs.',
        }),
    ).exactOptional(),
    LogLevel: LogLevelSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes the verbosity of the CloudWatch Logs for an application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationType'],
    description:
      'Describes configuration parameters for Amazon CloudWatch logging for an application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.',
  })
  .openapi('MonitoringConfiguration')

const ParallelismSchema = z.int().min(1).openapi('Parallelism')

const ParallelismPerKPUSchema = z.int().min(1).openapi('ParallelismPerKPU')

const ParallelismConfigurationSchema = z
  .object({
    ConfigurationType: ConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. You must set this property to <code>CUSTOM</code> in order to change your application's <code>AutoScalingEnabled</code>, <code>Parallelism</code>, or <code>ParallelismPerKPU</code> properties.",
        }),
    ),
    Parallelism: ParallelismSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the initial number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform. If <code>AutoScalingEnabled</code> is set to True, Kinesis Data Analytics increases the <code>CurrentParallelism</code> value in response to application load. The service can increase the <code>CurrentParallelism</code> value up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application. The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can reduce the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.',
        }),
    ).exactOptional(),
    ParallelismPerKPU: ParallelismPerKPUSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform per Kinesis Processing Unit (KPU) used by the application. For more information about KPUs, see <a href="http://aws.amazon.com/kinesis/data-analytics/pricing/">Amazon Kinesis Data Analytics Pricing</a>.',
        }),
    ).exactOptional(),
    AutoScalingEnabled: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationType'],
    description:
      'Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.',
  })
  .openapi('ParallelismConfiguration')

const FlinkApplicationConfigurationSchema = z
  .object({
    CheckpointConfiguration: CheckpointConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes an application\'s checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>. ',
        }),
    ).exactOptional(),
    MonitoringConfiguration: MonitoringConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes configuration parameters for Amazon CloudWatch logging for an application.',
        }),
    ).exactOptional(),
    ParallelismConfiguration: ParallelismConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes parameters for how an application executes multiple tasks simultaneously.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes configuration parameters for a Flink-based Kinesis Data Analytics application or a Studio notebook.',
    required: [],
  })
  .openapi('FlinkApplicationConfiguration')

const IdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(50)
  .openapi('Id')

const PropertyValueSchema = z.string().min(1).max(2048).openapi('PropertyValue')

const PropertyMapSchema = z
  .record(z.string(), PropertyValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('PropertyMap')

const PropertyGroupSchema = z
  .object({
    PropertyGroupId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes the key of an application execution property key-value pair.',
        }),
    ),
    PropertyMap: PropertyMapSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes the value of an application execution property key-value pair.',
        }),
    ),
  })
  .openapi({
    required: ['PropertyGroupId', 'PropertyMap'],
    description: 'Property key-value pairs passed into an application.',
  })
  .openapi('PropertyGroup')

const PropertyGroupsSchema = z.array(PropertyGroupSchema).max(50).openapi('PropertyGroups')

const EnvironmentPropertiesSchema = z
  .object({
    PropertyGroups: PropertyGroupsSchema.and(
      z.any().openapi({ description: 'Describes the execution property groups.' }),
    ),
  })
  .openapi({
    required: ['PropertyGroups'],
    description:
      'Describes execution properties for a Flink-based Kinesis Data Analytics application.',
  })
  .openapi('EnvironmentProperties')

const TextContentSchema = z.string().min(0).max(102400).openapi('TextContent')

const ZipFileContentSchema = z.string().min(0).max(52428800).openapi('ZipFileContent')

const ObjectVersionSchema = z.string().min(0).max(1024).openapi('ObjectVersion')

const S3ContentLocationSchema = z
  .object({
    BucketARN: BucketARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the S3 bucket containing the application code.',
        }),
    ),
    FileKey: FileKeySchema.and(
      z
        .any()
        .openapi({ description: 'The file key for the object containing the application code.' }),
    ),
    ObjectVersion: ObjectVersionSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the object containing the application code.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BucketARN', 'FileKey'],
    description:
      'For a Kinesis Data Analytics application provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data. ',
  })
  .openapi('S3ContentLocation')

const CodeContentSchema = z
  .object({
    TextContent: TextContentSchema.and(
      z
        .any()
        .openapi({
          description: 'The text-format code for a Flink-based Kinesis Data Analytics application.',
        }),
    ).exactOptional(),
    ZipFileContent: ZipFileContentSchema.and(
      z
        .any()
        .openapi({
          description: 'The zip-format code for a Flink-based Kinesis Data Analytics application.',
        }),
    ).exactOptional(),
    S3ContentLocation: S3ContentLocationSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the Amazon S3 bucket that contains the application code.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies either the application code, or the location of the application code, for a Flink-based Kinesis Data Analytics application. ',
    required: [],
  })
  .openapi('CodeContent')

const CodeContentTypeSchema = z.enum(['PLAINTEXT', 'ZIPFILE']).openapi('CodeContentType')

const ApplicationCodeConfigurationSchema = z
  .object({
    CodeContent: CodeContentSchema.and(
      z.any().openapi({ description: 'The location and type of the application code.' }),
    ).exactOptional(),
    CodeContentType: CodeContentTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies whether the code content is in text or zip format.' }),
    ),
  })
  .openapi({
    required: ['CodeContentType'],
    description: 'Describes code configuration for an application.',
  })
  .openapi('ApplicationCodeConfiguration')

const ApplicationSnapshotConfigurationSchema = z
  .object({
    SnapshotsEnabled: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.',
        }),
    ),
  })
  .openapi({
    required: ['SnapshotsEnabled'],
    description:
      'Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.',
  })
  .openapi('ApplicationSnapshotConfiguration')

const SubnetIdSchema = z.string().openapi('SubnetId')

const SubnetIdsSchema = z.array(SubnetIdSchema).min(1).max(16).openapi('SubnetIds')

const SecurityGroupIdSchema = z.string().openapi('SecurityGroupId')

const SecurityGroupIdsSchema = z
  .array(SecurityGroupIdSchema)
  .min(1)
  .max(5)
  .openapi('SecurityGroupIds')

const VpcConfigurationSchema = z
  .object({
    SubnetIds: SubnetIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a> IDs used by the VPC configuration.',
        }),
    ),
    SecurityGroupIds: SecurityGroupIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a> IDs used by the VPC configuration.',
        }),
    ),
  })
  .openapi({
    required: ['SubnetIds', 'SecurityGroupIds'],
    description: 'Describes the parameters of a VPC used by the application.',
  })
  .openapi('VpcConfiguration')

const VpcConfigurationsSchema = z.array(VpcConfigurationSchema).openapi('VpcConfigurations')

const ZeppelinMonitoringConfigurationSchema = z
  .object({
    LogLevel: LogLevelSchema.and(
      z.any().openapi({ description: 'The verbosity of the CloudWatch Logs for an application.' }),
    ),
  })
  .openapi({
    required: ['LogLevel'],
    description:
      'Describes configuration parameters for Amazon CloudWatch logging for a Kinesis Data Analytics Studio notebook. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.',
  })
  .openapi('ZeppelinMonitoringConfiguration')

const CatalogConfigurationSchema: z.ZodType<CatalogConfigurationType> = z
  .lazy(() =>
    z
      .object({
        GlueDataCatalogConfiguration: GlueDataCatalogConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.',
            }),
        ),
      })
      .openapi({
        required: ['GlueDataCatalogConfiguration'],
        description:
          'The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.',
      }),
  )
  .openapi('CatalogConfiguration')

const BasePathSchema = z
  .string()
  .regex(/[a-zA-Z0-9\/!-_.*'()]+/)
  .min(1)
  .max(1024)
  .openapi('BasePath')

const S3ContentBaseLocationSchema = z
  .object({
    BucketARN: BucketARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the S3 bucket.' }),
    ),
    BasePath: BasePathSchema.and(
      z.any().openapi({ description: 'The base path for the S3 bucket.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BucketARN'],
    description: 'The S3 bucket that holds the application information.',
  })
  .openapi('S3ContentBaseLocation')

const DeployAsApplicationConfigurationSchema = z
  .object({
    S3ContentLocation: S3ContentBaseLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of an Amazon S3 object that contains the Amazon Data Analytics application, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data. ',
        }),
    ),
  })
  .openapi({
    required: ['S3ContentLocation'],
    description:
      'The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.',
  })
  .openapi('DeployAsApplicationConfiguration')

const ArtifactTypeSchema = z.enum(['UDF', 'DEPENDENCY_JAR']).openapi('ArtifactType')

const MavenGroupIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(256)
  .openapi('MavenGroupId')

const MavenArtifactIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(256)
  .openapi('MavenArtifactId')

const MavenVersionSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(256)
  .openapi('MavenVersion')

const MavenReferenceSchema = z
  .object({
    GroupId: MavenGroupIdSchema.and(
      z.any().openapi({ description: 'The group ID of the Maven reference.' }),
    ),
    ArtifactId: MavenArtifactIdSchema.and(
      z.any().openapi({ description: 'The artifact ID of the Maven reference.' }),
    ),
    Version: MavenVersionSchema.and(
      z.any().openapi({ description: 'The version of the Maven reference.' }),
    ),
  })
  .openapi({
    required: ['GroupId', 'ArtifactId', 'Version'],
    description:
      'The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files.',
  })
  .openapi('MavenReference')

const CustomArtifactConfigurationSchema = z
  .object({
    ArtifactType: ArtifactTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>UDF</code> stands for user-defined functions. This type of artifact must be in an S3 bucket. A <code>DEPENDENCY_JAR</code> can be in either Maven or an S3 bucket.',
        }),
    ),
    S3ContentLocation: S3ContentLocationSchema.exactOptional(),
    MavenReference: MavenReferenceSchema.and(
      z
        .any()
        .openapi({ description: 'The parameters required to fully specify a Maven reference.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ArtifactType'],
    description:
      'Specifies dependency JARs, as well as JAR files that contain user-defined functions (UDF).',
  })
  .openapi('CustomArtifactConfiguration')

const CustomArtifactsConfigurationListSchema = z
  .array(CustomArtifactConfigurationSchema)
  .max(50)
  .openapi('CustomArtifactsConfigurationList')

const ZeppelinApplicationConfigurationSchema = z
  .object({
    MonitoringConfiguration: ZeppelinMonitoringConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The monitoring configuration of a Kinesis Data Analytics Studio notebook.',
        }),
    ).exactOptional(),
    CatalogConfiguration: CatalogConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Glue Data Catalog that you use in queries in a Kinesis Data Analytics Studio notebook.',
        }),
    ).exactOptional(),
    DeployAsApplicationConfiguration: DeployAsApplicationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.',
        }),
    ).exactOptional(),
    CustomArtifactsConfiguration: CustomArtifactsConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description: 'Custom artifacts are dependency JARs and user-defined functions (UDF).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The configuration of a Kinesis Data Analytics Studio notebook.',
    required: [],
  })
  .openapi('ZeppelinApplicationConfiguration')

type ApplicationConfigurationType = {
  SqlApplicationConfiguration?: z.infer<typeof SqlApplicationConfigurationSchema> & {
    [key: string]: unknown
  }
  FlinkApplicationConfiguration?: z.infer<typeof FlinkApplicationConfigurationSchema> & {
    [key: string]: unknown
  }
  EnvironmentProperties?: z.infer<typeof EnvironmentPropertiesSchema> & { [key: string]: unknown }
  ApplicationCodeConfiguration?: z.infer<typeof ApplicationCodeConfigurationSchema> & {
    [key: string]: unknown
  }
  ApplicationSnapshotConfiguration?: z.infer<typeof ApplicationSnapshotConfigurationSchema> & {
    [key: string]: unknown
  }
  VpcConfigurations?: z.infer<typeof VpcConfigurationsSchema> & { [key: string]: unknown }
  ZeppelinApplicationConfiguration?: z.infer<typeof ZeppelinApplicationConfigurationSchema> & {
    [key: string]: unknown
  }
}

const InputDescriptionSchema: z.ZodType<InputDescriptionType> = z
  .lazy(() =>
    z
      .object({
        InputId: IdSchema.and(
          z
            .any()
            .openapi({
              description:
                'The input ID that is associated with the application input. This is the ID that Kinesis Data Analytics assigns to each input configuration that you add to your application. ',
            }),
        ).exactOptional(),
        NamePrefix: InAppStreamNameSchema.and(
          z.any().openapi({ description: 'The in-application name prefix.' }),
        ).exactOptional(),
        InAppStreamNames: InAppStreamNamesSchema.and(
          z
            .any()
            .openapi({
              description:
                'Returns the in-application stream names that are mapped to the stream source. ',
            }),
        ).exactOptional(),
        InputProcessingConfigurationDescription: InputProcessingConfigurationDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                "The description of the preprocessor that executes on records in this input before the application's code is run. ",
            }),
        ).exactOptional(),
        KinesisStreamsInputDescription: KinesisStreamsInputDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                "If a Kinesis data stream is configured as a streaming source, provides the Kinesis data stream's Amazon Resource Name (ARN). ",
            }),
        ).exactOptional(),
        KinesisFirehoseInputDescription: KinesisFirehoseInputDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                "If a Kinesis Data Firehose delivery stream is configured as a streaming source, provides the delivery stream's ARN. ",
            }),
        ).exactOptional(),
        InputSchema: SourceSchemaSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created. ',
            }),
        ).exactOptional(),
        InputParallelism: InputParallelismSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the configured parallelism (number of in-application streams mapped to the streaming source). ',
            }),
        ).exactOptional(),
        InputStartingPositionConfiguration: InputStartingPositionConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'The point at which the application is configured to read from the input stream.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Describes the application input configuration for a SQL-based Kinesis Data Analytics application. ',
        required: [],
      }),
  )
  .openapi('InputDescription')

const InputDescriptionsSchema = z.array(InputDescriptionSchema).openapi('InputDescriptions')

const OutputDescriptionSchema: z.ZodType<OutputDescriptionType> = z
  .lazy(() =>
    z
      .object({
        OutputId: IdSchema.and(
          z.any().openapi({ description: 'A unique identifier for the output configuration.' }),
        ).exactOptional(),
        Name: InAppStreamNameSchema.and(
          z
            .any()
            .openapi({
              description: 'The name of the in-application stream that is configured as output.',
            }),
        ).exactOptional(),
        KinesisStreamsOutputDescription: KinesisStreamsOutputDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the Kinesis data stream that is configured as the destination where output is written.',
            }),
        ).exactOptional(),
        KinesisFirehoseOutputDescription: KinesisFirehoseOutputDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the Kinesis Data Firehose delivery stream that is configured as the destination where output is written.',
            }),
        ).exactOptional(),
        LambdaOutputDescription: LambdaOutputDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the Lambda function that is configured as the destination where output is written.',
            }),
        ).exactOptional(),
        DestinationSchema: DestinationSchemaSchema.and(
          z
            .any()
            .openapi({ description: 'The data format used for writing data to the destination.' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'For a SQL-based Kinesis Data Analytics application, describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. ',
        required: [],
      }),
  )
  .openapi('OutputDescription')

const OutputDescriptionsSchema = z.array(OutputDescriptionSchema).openapi('OutputDescriptions')

const ReferenceDataSourceDescriptionSchema: z.ZodType<ReferenceDataSourceDescriptionType> = z
  .lazy(() =>
    z
      .object({
        ReferenceId: IdSchema.and(
          z
            .any()
            .openapi({
              description:
                'The ID of the reference data source. This is the ID that Kinesis Data Analytics assigns when you add the reference data source to your application using the <a>CreateApplication</a> or <a>UpdateApplication</a> operation.',
            }),
        ),
        TableName: InAppTableNameSchema.and(
          z
            .any()
            .openapi({
              description:
                'The in-application table name created by the specific reference data source configuration.',
            }),
        ),
        S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Provides the Amazon S3 bucket name, the object key name that contains the reference data. ',
            }),
        ),
        ReferenceSchema: SourceSchemaSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.',
            }),
        ).exactOptional(),
      })
      .openapi({
        required: ['ReferenceId', 'TableName', 'S3ReferenceDataSourceDescription'],
        description:
          'For a SQL-based Kinesis Data Analytics application, describes the reference data source configured for an application.',
      }),
  )
  .openapi('ReferenceDataSourceDescription')

const ReferenceDataSourceDescriptionsSchema = z
  .array(ReferenceDataSourceDescriptionSchema)
  .openapi('ReferenceDataSourceDescriptions')

const SqlApplicationConfigurationDescriptionSchema = z
  .object({
    InputDescriptions: InputDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of <a>InputDescription</a> objects describing the input streams used by the application.',
        }),
    ).exactOptional(),
    OutputDescriptions: OutputDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of <a>OutputDescription</a> objects describing the destination streams used by the application.',
        }),
    ).exactOptional(),
    ReferenceDataSourceDescriptions: ReferenceDataSourceDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of <a>ReferenceDataSourceDescription</a> objects describing the reference data sources used by the application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.',
    required: [],
  })
  .openapi('SqlApplicationConfigurationDescription')

const CodeMD5Schema = z.string().length(128).openapi('CodeMD5')

const CodeSizeSchema = z.int().min(0).max(52428800).openapi('CodeSize')

const S3ApplicationCodeLocationDescriptionSchema = z
  .object({
    BucketARN: BucketARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the S3 bucket containing the application code.',
        }),
    ),
    FileKey: FileKeySchema.and(
      z
        .any()
        .openapi({ description: 'The file key for the object containing the application code.' }),
    ),
    ObjectVersion: ObjectVersionSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the object containing the application code.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BucketARN', 'FileKey'],
    description: "Describes the location of an application's code stored in an S3 bucket.",
  })
  .openapi('S3ApplicationCodeLocationDescription')

const CodeContentDescriptionSchema = z
  .object({
    TextContent: TextContentSchema.and(
      z.any().openapi({ description: 'The text-format code' }),
    ).exactOptional(),
    CodeMD5: CodeMD5Schema.and(
      z
        .any()
        .openapi({ description: 'The checksum that can be used to validate zip-format code.' }),
    ).exactOptional(),
    CodeSize: CodeSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size in bytes of the application code. Can be used to validate zip-format code.',
        }),
    ).exactOptional(),
    S3ApplicationCodeLocationDescription: S3ApplicationCodeLocationDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 bucket Amazon Resource Name (ARN), file key, and object version of the application code stored in Amazon S3.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes details about the code of a Kinesis Data Analytics application.',
    required: [],
  })
  .openapi('CodeContentDescription')

const ApplicationCodeConfigurationDescriptionSchema = z
  .object({
    CodeContentType: CodeContentTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies whether the code content is in text or zip format.' }),
    ),
    CodeContentDescription: CodeContentDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes details about the location and format of the application code.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CodeContentType'],
    description: 'Describes code configuration for an application.',
  })
  .openapi('ApplicationCodeConfigurationDescription')

const ApplicationRestoreTypeSchema = z
  .enum([
    'SKIP_RESTORE_FROM_SNAPSHOT',
    'RESTORE_FROM_LATEST_SNAPSHOT',
    'RESTORE_FROM_CUSTOM_SNAPSHOT',
  ])
  .openapi('ApplicationRestoreType')

const SnapshotNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(256)
  .openapi('SnapshotName')

const ApplicationRestoreConfigurationSchema = z
  .object({
    ApplicationRestoreType: ApplicationRestoreTypeSchema.and(
      z.any().openapi({ description: 'Specifies how the application should be restored.' }),
    ),
    SnapshotName: SnapshotNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of an existing snapshot of application state to use to restart an application. The application uses this value if <code>RESTORE_FROM_CUSTOM_SNAPSHOT</code> is specified for the <code>ApplicationRestoreType</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationRestoreType'],
    description:
      'Specifies the method and snapshot to use when restarting an application using previously saved application state.',
  })
  .openapi('ApplicationRestoreConfiguration')

const FlinkRunConfigurationSchema = z
  .object({
    AllowNonRestoredState: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When restoring from a snapshot, specifies whether the runtime is allowed to skip a state that cannot be mapped to the new program. This will happen if the program is updated between snapshots to remove stateful parameters, and state data in the snapshot no longer corresponds to valid application data. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/ops/state/savepoints.html#allowing-non-restored-state"> Allowing Non-Restored State</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink documentation</a>.</p> <note> <p>This value defaults to <code>false</code>. If you update your application without specifying this parameter, <code>AllowNonRestoredState</code> will be set to <code>false</code>, even if it was previously set to <code>true</code>.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the starting parameters for a Flink-based Kinesis Data Analytics application.',
    required: [],
  })
  .openapi('FlinkRunConfiguration')

const RunConfigurationDescriptionSchema = z
  .object({
    ApplicationRestoreConfigurationDescription: ApplicationRestoreConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Describes the restore behavior of a restarting application.' }),
    ).exactOptional(),
    FlinkRunConfigurationDescription: FlinkRunConfigurationSchema.exactOptional(),
  })
  .openapi({
    description: 'Describes the starting properties for a Kinesis Data Analytics application.',
    required: [],
  })
  .openapi('RunConfigurationDescription')

const CheckpointConfigurationDescriptionSchema = z
  .object({
    ConfigurationType: ConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes whether the application uses the default checkpointing behavior in Kinesis Data Analytics. </p> <note> <p>If this value is set to <code>DEFAULT</code>, the application will use the following values, even if they are set to other values using APIs or application code:</p> <ul> <li> <p> <b>CheckpointingEnabled:</b> true</p> </li> <li> <p> <b>CheckpointInterval:</b> 60000</p> </li> <li> <p> <b>MinPauseBetweenCheckpoints:</b> 5000</p> </li> </ul> </note>',
        }),
    ).exactOptional(),
    CheckpointingEnabled: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes whether checkpointing is enabled for a Flink-based Kinesis Data Analytics application.</p> <note> <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>, the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value is set to another value using this API or in application code.</p> </note>',
        }),
    ).exactOptional(),
    CheckpointInterval: CheckpointIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the interval in milliseconds between checkpoint operations. </p> <note> <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>, the application will use a <code>CheckpointInterval</code> value of 60000, even if this value is set to another value using this API or in application code.</p> </note>',
        }),
    ).exactOptional(),
    MinPauseBetweenCheckpoints: MinPauseBetweenCheckpointsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start. </p> <note> <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>, the application will use a <code>MinPauseBetweenCheckpoints</code> value of 5000, even if this value is set using this API or in application code.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes checkpointing parameters for a Flink-based Kinesis Data Analytics application.',
    required: [],
  })
  .openapi('CheckpointConfigurationDescription')

const MonitoringConfigurationDescriptionSchema = z
  .object({
    ConfigurationType: ConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether to use the default CloudWatch logging configuration for an application.',
        }),
    ).exactOptional(),
    MetricsLevel: MetricsLevelSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes the granularity of the CloudWatch Logs for an application.',
        }),
    ).exactOptional(),
    LogLevel: LogLevelSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes the verbosity of the CloudWatch Logs for an application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes configuration parameters for CloudWatch logging for an application.',
    required: [],
  })
  .openapi('MonitoringConfigurationDescription')

const ParallelismConfigurationDescriptionSchema = z
  .object({
    ConfigurationType: ConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. ',
        }),
    ).exactOptional(),
    Parallelism: ParallelismSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the initial number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform. If <code>AutoScalingEnabled</code> is set to True, then Kinesis Data Analytics can increase the <code>CurrentParallelism</code> value in response to application load. The service can increase <code>CurrentParallelism</code> up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application. The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can reduce the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.',
        }),
    ).exactOptional(),
    ParallelismPerKPU: ParallelismPerKPUSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform per Kinesis Processing Unit (KPU) used by the application.',
        }),
    ).exactOptional(),
    CurrentParallelism: ParallelismSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the current number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform. If <code>AutoScalingEnabled</code> is set to True, Kinesis Data Analytics can increase this value in response to application load. The service can increase this value up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application. The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can reduce the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.',
        }),
    ).exactOptional(),
    AutoScalingEnabled: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously.',
    required: [],
  })
  .openapi('ParallelismConfigurationDescription')

const JobPlanDescriptionSchema = z.string().openapi('JobPlanDescription')

const FlinkApplicationConfigurationDescriptionSchema = z
  .object({
    CheckpointConfigurationDescription: CheckpointConfigurationDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance.",
        }),
    ).exactOptional(),
    MonitoringConfigurationDescription: MonitoringConfigurationDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes configuration parameters for Amazon CloudWatch logging for an application.',
        }),
    ).exactOptional(),
    ParallelismConfigurationDescription: ParallelismConfigurationDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes parameters for how an application executes multiple tasks simultaneously.',
        }),
    ).exactOptional(),
    JobPlanDescription: JobPlanDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The job plan for an application. For more information about the job plan, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/internals/job_scheduling.html">Jobs and Scheduling</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>. To retrieve the job plan for the application, use the <a>DescribeApplicationRequest$IncludeAdditionalDetails</a> parameter of the <a>DescribeApplication</a> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes configuration parameters for a Flink-based Kinesis Data Analytics application.',
    required: [],
  })
  .openapi('FlinkApplicationConfigurationDescription')

const EnvironmentPropertyDescriptionsSchema = z
  .object({
    PropertyGroupDescriptions: PropertyGroupsSchema.and(
      z.any().openapi({ description: 'Describes the execution property groups.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the execution properties for an Apache Flink runtime.',
    required: [],
  })
  .openapi('EnvironmentPropertyDescriptions')

const ApplicationSnapshotConfigurationDescriptionSchema = z
  .object({
    SnapshotsEnabled: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.',
        }),
    ),
  })
  .openapi({
    required: ['SnapshotsEnabled'],
    description:
      'Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.',
  })
  .openapi('ApplicationSnapshotConfigurationDescription')

const VpcIdSchema = z.string().openapi('VpcId')

const VpcConfigurationDescriptionSchema = z
  .object({
    VpcConfigurationId: IdSchema.and(
      z.any().openapi({ description: 'The ID of the VPC configuration.' }),
    ),
    VpcId: VpcIdSchema.and(z.any().openapi({ description: 'The ID of the associated VPC.' })),
    SubnetIds: SubnetIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a> IDs used by the VPC configuration.',
        }),
    ),
    SecurityGroupIds: SecurityGroupIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a> IDs used by the VPC configuration.',
        }),
    ),
  })
  .openapi({
    required: ['VpcConfigurationId', 'VpcId', 'SubnetIds', 'SecurityGroupIds'],
    description: 'Describes the parameters of a VPC used by the application.',
  })
  .openapi('VpcConfigurationDescription')

const VpcConfigurationDescriptionsSchema = z
  .array(VpcConfigurationDescriptionSchema)
  .openapi('VpcConfigurationDescriptions')

const ZeppelinMonitoringConfigurationDescriptionSchema = z
  .object({
    LogLevel: LogLevelSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes the verbosity of the CloudWatch Logs for an application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.',
    required: [],
  })
  .openapi('ZeppelinMonitoringConfigurationDescription')

const CatalogConfigurationDescriptionSchema: z.ZodType<CatalogConfigurationDescriptionType> = z
  .lazy(() =>
    z
      .object({
        GlueDataCatalogConfigurationDescription: GlueDataCatalogConfigurationDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                'The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.',
            }),
        ),
      })
      .openapi({
        required: ['GlueDataCatalogConfigurationDescription'],
        description:
          'The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.',
      }),
  )
  .openapi('CatalogConfigurationDescription')

const S3ContentBaseLocationDescriptionSchema = z
  .object({
    BucketARN: BucketARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the S3 bucket.' }),
    ),
    BasePath: BasePathSchema.and(
      z.any().openapi({ description: 'The base path for the S3 bucket.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BucketARN'],
    description: 'The description of the S3 base location that holds the application.',
  })
  .openapi('S3ContentBaseLocationDescription')

const DeployAsApplicationConfigurationDescriptionSchema = z
  .object({
    S3ContentLocationDescription: S3ContentBaseLocationDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location that holds the data required to specify an Amazon Data Analytics application.',
        }),
    ),
  })
  .openapi({
    required: ['S3ContentLocationDescription'],
    description:
      'The configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.',
  })
  .openapi('DeployAsApplicationConfigurationDescription')

const CustomArtifactConfigurationDescriptionSchema = z
  .object({
    ArtifactType: ArtifactTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>UDF</code> stands for user-defined functions. This type of artifact must be in an S3 bucket. A <code>DEPENDENCY_JAR</code> can be in either Maven or an S3 bucket.',
        }),
    ).exactOptional(),
    S3ContentLocationDescription: S3ContentLocationSchema.exactOptional(),
    MavenReferenceDescription: MavenReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'The parameters that are required to specify a Maven dependency.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies a dependency JAR or a JAR of user-defined functions.',
    required: [],
  })
  .openapi('CustomArtifactConfigurationDescription')

const CustomArtifactsConfigurationDescriptionListSchema = z
  .array(CustomArtifactConfigurationDescriptionSchema)
  .max(50)
  .openapi('CustomArtifactsConfigurationDescriptionList')

const ZeppelinApplicationConfigurationDescriptionSchema = z
  .object({
    MonitoringConfigurationDescription: ZeppelinMonitoringConfigurationDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'The monitoring configuration of a Kinesis Data Analytics Studio notebook.',
        }),
    ),
    CatalogConfigurationDescription: CatalogConfigurationDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Glue Data Catalog that is associated with the Kinesis Data Analytics Studio notebook.',
        }),
    ).exactOptional(),
    DeployAsApplicationConfigurationDescription:
      DeployAsApplicationConfigurationDescriptionSchema.and(
        z
          .any()
          .openapi({
            description:
              'The parameters required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.',
          }),
      ).exactOptional(),
    CustomArtifactsConfigurationDescription: CustomArtifactsConfigurationDescriptionListSchema.and(
      z
        .any()
        .openapi({
          description: 'Custom artifacts are dependency JARs and user-defined functions (UDF).',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MonitoringConfigurationDescription'],
    description: 'The configuration of a Kinesis Data Analytics Studio notebook.',
  })
  .openapi('ZeppelinApplicationConfigurationDescription')

type ApplicationConfigurationDescriptionType = {
  SqlApplicationConfigurationDescription?: z.infer<
    typeof SqlApplicationConfigurationDescriptionSchema
  > & { [key: string]: unknown }
  ApplicationCodeConfigurationDescription?: z.infer<
    typeof ApplicationCodeConfigurationDescriptionSchema
  > & { [key: string]: unknown }
  RunConfigurationDescription?: z.infer<typeof RunConfigurationDescriptionSchema> & {
    [key: string]: unknown
  }
  FlinkApplicationConfigurationDescription?: z.infer<
    typeof FlinkApplicationConfigurationDescriptionSchema
  > & { [key: string]: unknown }
  EnvironmentPropertyDescriptions?: z.infer<typeof EnvironmentPropertyDescriptionsSchema> & {
    [key: string]: unknown
  }
  ApplicationSnapshotConfigurationDescription?: z.infer<
    typeof ApplicationSnapshotConfigurationDescriptionSchema
  > & { [key: string]: unknown }
  VpcConfigurationDescriptions?: z.infer<typeof VpcConfigurationDescriptionsSchema> & {
    [key: string]: unknown
  }
  ZeppelinApplicationConfigurationDescription?: z.infer<
    typeof ZeppelinApplicationConfigurationDescriptionSchema
  > & { [key: string]: unknown }
}

const InputUpdateSchema: z.ZodType<InputUpdateType> = z
  .lazy(() =>
    z
      .object({
        InputId: IdSchema.and(
          z.any().openapi({ description: 'The input ID of the application input to be updated.' }),
        ),
        NamePrefixUpdate: InAppStreamNameSchema.and(
          z
            .any()
            .openapi({
              description:
                'The name prefix for in-application streams that Kinesis Data Analytics creates for the specific streaming source.',
            }),
        ).exactOptional(),
        InputProcessingConfigurationUpdate: InputProcessingConfigurationUpdateSchema.and(
          z
            .any()
            .openapi({
              description: 'Describes updates to an <a>InputProcessingConfiguration</a>.',
            }),
        ).exactOptional(),
        KinesisStreamsInputUpdate: KinesisStreamsInputUpdateSchema.and(
          z
            .any()
            .openapi({
              description:
                'If a Kinesis data stream is the streaming source to be updated, provides an updated stream Amazon Resource Name (ARN).',
            }),
        ).exactOptional(),
        KinesisFirehoseInputUpdate: KinesisFirehoseInputUpdateSchema.and(
          z
            .any()
            .openapi({
              description:
                'If a Kinesis Data Firehose delivery stream is the streaming source to be updated, provides an updated stream ARN.',
            }),
        ).exactOptional(),
        InputSchemaUpdate: InputSchemaUpdateSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the data format on the streaming source, and how record elements on the streaming source map to columns of the in-application stream that is created.',
            }),
        ).exactOptional(),
        InputParallelismUpdate: InputParallelismUpdateSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the parallelism updates (the number of in-application streams Kinesis Data Analytics creates for the specific streaming source).',
            }),
        ).exactOptional(),
      })
      .openapi({
        required: ['InputId'],
        description:
          'For a SQL-based Kinesis Data Analytics application, describes updates to a specific input configuration (identified by the <code>InputId</code> of an application). ',
      }),
  )
  .openapi('InputUpdate')

const InputUpdatesSchema = z.array(InputUpdateSchema).openapi('InputUpdates')

const OutputUpdateSchema: z.ZodType<OutputUpdateType> = z
  .lazy(() =>
    z
      .object({
        OutputId: IdSchema.and(
          z
            .any()
            .openapi({
              description: 'Identifies the specific output configuration that you want to update.',
            }),
        ),
        NameUpdate: InAppStreamNameSchema.and(
          z
            .any()
            .openapi({
              description:
                'If you want to specify a different in-application stream for this output configuration, use this field to specify the new in-application stream name.',
            }),
        ).exactOptional(),
        KinesisStreamsOutputUpdate: KinesisStreamsOutputUpdateSchema.and(
          z
            .any()
            .openapi({
              description: 'Describes a Kinesis data stream as the destination for the output.',
            }),
        ).exactOptional(),
        KinesisFirehoseOutputUpdate: KinesisFirehoseOutputUpdateSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes a Kinesis Data Firehose delivery stream as the destination for the output.',
            }),
        ).exactOptional(),
        LambdaOutputUpdate: LambdaOutputUpdateSchema.and(
          z
            .any()
            .openapi({
              description: 'Describes an Amazon Lambda function as the destination for the output.',
            }),
        ).exactOptional(),
        DestinationSchemaUpdate: DestinationSchemaSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the data format when records are written to the destination. ',
            }),
        ).exactOptional(),
      })
      .openapi({
        required: ['OutputId'],
        description:
          ' For a SQL-based Kinesis Data Analytics application, describes updates to the output configuration identified by the <code>OutputId</code>. ',
      }),
  )
  .openapi('OutputUpdate')

const OutputUpdatesSchema = z.array(OutputUpdateSchema).openapi('OutputUpdates')

const ReferenceDataSourceUpdateSchema: z.ZodType<ReferenceDataSourceUpdateType> = z
  .lazy(() =>
    z
      .object({
        ReferenceId: IdSchema.and(
          z
            .any()
            .openapi({
              description:
                'The ID of the reference data source that is being updated. You can use the <a>DescribeApplication</a> operation to get this value.',
            }),
        ),
        TableNameUpdate: InAppTableNameSchema.and(
          z
            .any()
            .openapi({
              description: 'The in-application table name that is created by this update.',
            }),
        ).exactOptional(),
        S3ReferenceDataSourceUpdate: S3ReferenceDataSourceUpdateSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the S3 bucket name, object key name, and IAM role that Kinesis Data Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.',
            }),
        ).exactOptional(),
        ReferenceSchemaUpdate: SourceSchemaSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. ',
            }),
        ).exactOptional(),
      })
      .openapi({
        required: ['ReferenceId'],
        description:
          'When you update a reference data source configuration for a SQL-based Kinesis Data Analytics application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.',
      }),
  )
  .openapi('ReferenceDataSourceUpdate')

const ReferenceDataSourceUpdatesSchema = z
  .array(ReferenceDataSourceUpdateSchema)
  .openapi('ReferenceDataSourceUpdates')

const SqlApplicationConfigurationUpdateSchema = z
  .object({
    InputUpdates: InputUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of <a>InputUpdate</a> objects describing the new input streams used by the application.',
        }),
    ).exactOptional(),
    OutputUpdates: OutputUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of <a>OutputUpdate</a> objects describing the new destination streams used by the application.',
        }),
    ).exactOptional(),
    ReferenceDataSourceUpdates: ReferenceDataSourceUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of <a>ReferenceDataSourceUpdate</a> objects describing the new reference data sources used by the application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes updates to the input streams, destination streams, and reference data sources for a SQL-based Kinesis Data Analytics application.',
    required: [],
  })
  .openapi('SqlApplicationConfigurationUpdate')

const S3ContentLocationUpdateSchema = z
  .object({
    BucketARNUpdate: BucketARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new Amazon Resource Name (ARN) for the S3 bucket containing the application code.',
        }),
    ).exactOptional(),
    FileKeyUpdate: FileKeySchema.and(
      z
        .any()
        .openapi({
          description: 'The new file key for the object containing the application code.',
        }),
    ).exactOptional(),
    ObjectVersionUpdate: ObjectVersionSchema.and(
      z
        .any()
        .openapi({ description: 'The new version of the object containing the application code.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes an update for the Amazon S3 code content location for an application.',
    required: [],
  })
  .openapi('S3ContentLocationUpdate')

const CodeContentUpdateSchema = z
  .object({
    TextContentUpdate: TextContentSchema.and(
      z.any().openapi({ description: 'Describes an update to the text code for an application.' }),
    ).exactOptional(),
    ZipFileContentUpdate: ZipFileContentSchema.and(
      z
        .any()
        .openapi({ description: 'Describes an update to the zipped code for an application.' }),
    ).exactOptional(),
    S3ContentLocationUpdate: S3ContentLocationUpdateSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes an update to the location of code for an application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes an update to the code of an application. Not supported for Apache Zeppelin.',
    required: [],
  })
  .openapi('CodeContentUpdate')

const ApplicationCodeConfigurationUpdateSchema = z
  .object({
    CodeContentTypeUpdate: CodeContentTypeSchema.and(
      z.any().openapi({ description: 'Describes updates to the code content type.' }),
    ).exactOptional(),
    CodeContentUpdate: CodeContentUpdateSchema.and(
      z.any().openapi({ description: 'Describes updates to the code content of an application.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes code configuration updates for an application. This is supported for a Flink-based Kinesis Data Analytics application or a SQL-based Kinesis Data Analytics application.',
    required: [],
  })
  .openapi('ApplicationCodeConfigurationUpdate')

const CheckpointConfigurationUpdateSchema = z
  .object({
    ConfigurationTypeUpdate: ConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes updates to whether the application uses the default checkpointing behavior of Kinesis Data Analytics. You must set this property to <code>CUSTOM</code> in order to set the <code>CheckpointingEnabled</code>, <code>CheckpointInterval</code>, or <code>MinPauseBetweenCheckpoints</code> parameters. </p> <note> <p>If this value is set to <code>DEFAULT</code>, the application will use the following values, even if they are set to other values using APIs or application code:</p> <ul> <li> <p> <b>CheckpointingEnabled:</b> true</p> </li> <li> <p> <b>CheckpointInterval:</b> 60000</p> </li> <li> <p> <b>MinPauseBetweenCheckpoints:</b> 5000</p> </li> </ul> </note>',
        }),
    ).exactOptional(),
    CheckpointingEnabledUpdate: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes updates to whether checkpointing is enabled for an application.</p> <note> <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>, the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value is set to another value using this API or in application code.</p> </note>',
        }),
    ).exactOptional(),
    CheckpointIntervalUpdate: CheckpointIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes updates to the interval in milliseconds between checkpoint operations.</p> <note> <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>, the application will use a <code>CheckpointInterval</code> value of 60000, even if this value is set to another value using this API or in application code.</p> </note>',
        }),
    ).exactOptional(),
    MinPauseBetweenCheckpointsUpdate: MinPauseBetweenCheckpointsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes updates to the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start.</p> <note> <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>, the application will use a <code>MinPauseBetweenCheckpoints</code> value of 5000, even if this value is set using this API or in application code.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes updates to the checkpointing parameters for a Flink-based Kinesis Data Analytics application.',
    required: [],
  })
  .openapi('CheckpointConfigurationUpdate')

const MonitoringConfigurationUpdateSchema = z
  .object({
    ConfigurationTypeUpdate: ConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes updates to whether to use the default CloudWatch logging configuration for an application. You must set this property to <code>CUSTOM</code> in order to set the <code>LogLevel</code> or <code>MetricsLevel</code> parameters.',
        }),
    ).exactOptional(),
    MetricsLevelUpdate: MetricsLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes updates to the granularity of the CloudWatch Logs for an application. The <code>Parallelism</code> level is not recommended for applications with a Parallelism over 64 due to excessive costs.',
        }),
    ).exactOptional(),
    LogLevelUpdate: LogLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes updates to the verbosity of the CloudWatch Logs for an application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes updates to configuration parameters for Amazon CloudWatch logging for an application.',
    required: [],
  })
  .openapi('MonitoringConfigurationUpdate')

const ParallelismConfigurationUpdateSchema = z
  .object({
    ConfigurationTypeUpdate: ConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Describes updates to whether the application uses the default parallelism for the Kinesis Data Analytics service, or if a custom parallelism is used. You must set this property to <code>CUSTOM</code> in order to change your application's <code>AutoScalingEnabled</code>, <code>Parallelism</code>, or <code>ParallelismPerKPU</code> properties.",
        }),
    ).exactOptional(),
    ParallelismUpdate: ParallelismSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes updates to the initial number of parallel tasks an application can perform. If <code>AutoScalingEnabled</code> is set to True, then Kinesis Data Analytics can increase the <code>CurrentParallelism</code> value in response to application load. The service can increase <code>CurrentParallelism</code> up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application. The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service will reduce <code>CurrentParallelism</code> down to the <code>Parallelism</code> setting.',
        }),
    ).exactOptional(),
    ParallelismPerKPUUpdate: ParallelismPerKPUSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes updates to the number of parallel tasks an application can perform per Kinesis Processing Unit (KPU) used by the application.',
        }),
    ).exactOptional(),
    AutoScalingEnabledUpdate: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes updates to whether the Kinesis Data Analytics service can increase the parallelism of a Flink-based Kinesis Data Analytics application in response to increased throughput.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes updates to parameters for how an application executes multiple tasks simultaneously.',
    required: [],
  })
  .openapi('ParallelismConfigurationUpdate')

const FlinkApplicationConfigurationUpdateSchema = z
  .object({
    CheckpointConfigurationUpdate: CheckpointConfigurationUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            "Describes updates to an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance.",
        }),
    ).exactOptional(),
    MonitoringConfigurationUpdate: MonitoringConfigurationUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes updates to the configuration parameters for Amazon CloudWatch logging for an application.',
        }),
    ).exactOptional(),
    ParallelismConfigurationUpdate: ParallelismConfigurationUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes updates to the parameters for how an application executes multiple tasks simultaneously.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes updates to the configuration parameters for a Flink-based Kinesis Data Analytics application.',
    required: [],
  })
  .openapi('FlinkApplicationConfigurationUpdate')

const EnvironmentPropertyUpdatesSchema = z
  .object({
    PropertyGroups: PropertyGroupsSchema.and(
      z.any().openapi({ description: 'Describes updates to the execution property groups.' }),
    ),
  })
  .openapi({
    required: ['PropertyGroups'],
    description:
      'Describes updates to the execution property groups for a Flink-based Kinesis Data Analytics application or a Studio notebook.',
  })
  .openapi('EnvironmentPropertyUpdates')

const ApplicationSnapshotConfigurationUpdateSchema = z
  .object({
    SnapshotsEnabledUpdate: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes updates to whether snapshots are enabled for an application.',
        }),
    ),
  })
  .openapi({
    required: ['SnapshotsEnabledUpdate'],
    description:
      'Describes updates to whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.',
  })
  .openapi('ApplicationSnapshotConfigurationUpdate')

const VpcConfigurationUpdateSchema = z
  .object({
    VpcConfigurationId: IdSchema.and(
      z.any().openapi({ description: 'Describes an update to the ID of the VPC configuration.' }),
    ),
    SubnetIdUpdates: SubnetIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes updates to the array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a> IDs used by the VPC configuration.',
        }),
    ).exactOptional(),
    SecurityGroupIdUpdates: SecurityGroupIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes updates to the array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a> IDs used by the VPC configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VpcConfigurationId'],
    description: 'Describes updates to the VPC configuration used by the application.',
  })
  .openapi('VpcConfigurationUpdate')

const VpcConfigurationUpdatesSchema = z
  .array(VpcConfigurationUpdateSchema)
  .openapi('VpcConfigurationUpdates')

const ZeppelinMonitoringConfigurationUpdateSchema = z
  .object({
    LogLevelUpdate: LogLevelSchema.and(
      z
        .any()
        .openapi({
          description:
            'Updates to the logging level for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.',
        }),
    ),
  })
  .openapi({
    required: ['LogLevelUpdate'],
    description:
      'Updates to the monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.',
  })
  .openapi('ZeppelinMonitoringConfigurationUpdate')

const CatalogConfigurationUpdateSchema: z.ZodType<CatalogConfigurationUpdateType> = z
  .lazy(() =>
    z
      .object({
        GlueDataCatalogConfigurationUpdate: GlueDataCatalogConfigurationUpdateSchema.and(
          z
            .any()
            .openapi({
              description:
                'Updates to the configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.',
            }),
        ),
      })
      .openapi({
        required: ['GlueDataCatalogConfigurationUpdate'],
        description:
          'Updates to the configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.',
      }),
  )
  .openapi('CatalogConfigurationUpdate')

const S3ContentBaseLocationUpdateSchema = z
  .object({
    BucketARNUpdate: BucketARNSchema.and(
      z.any().openapi({ description: 'The updated Amazon Resource Name (ARN) of the S3 bucket.' }),
    ).exactOptional(),
    BasePathUpdate: BasePathSchema.and(
      z.any().openapi({ description: 'The updated S3 bucket path.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The information required to update the S3 base location that holds the application.',
    required: [],
  })
  .openapi('S3ContentBaseLocationUpdate')

const DeployAsApplicationConfigurationUpdateSchema = z
  .object({
    S3ContentLocationUpdate: S3ContentBaseLocationUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Updates to the location that holds the data required to specify an Amazon Data Analytics application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.',
    required: [],
  })
  .openapi('DeployAsApplicationConfigurationUpdate')

const ZeppelinApplicationConfigurationUpdateSchema = z
  .object({
    MonitoringConfigurationUpdate: ZeppelinMonitoringConfigurationUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Updates to the monitoring configuration of a Kinesis Data Analytics Studio notebook.',
        }),
    ).exactOptional(),
    CatalogConfigurationUpdate: CatalogConfigurationUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Updates to the configuration of the Amazon Glue Data Catalog that is associated with the Kinesis Data Analytics Studio notebook.',
        }),
    ).exactOptional(),
    DeployAsApplicationConfigurationUpdate:
      DeployAsApplicationConfigurationUpdateSchema.exactOptional(),
    CustomArtifactsConfigurationUpdate: CustomArtifactsConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Updates to the customer artifacts. Custom artifacts are dependency JAR files and user-defined functions (UDF).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Updates to the configuration of Kinesis Data Analytics Studio notebook.',
    required: [],
  })
  .openapi('ZeppelinApplicationConfigurationUpdate')

type ApplicationConfigurationUpdateType = {
  SqlApplicationConfigurationUpdate?: z.infer<typeof SqlApplicationConfigurationUpdateSchema> & {
    [key: string]: unknown
  }
  ApplicationCodeConfigurationUpdate?: z.infer<typeof ApplicationCodeConfigurationUpdateSchema> & {
    [key: string]: unknown
  }
  FlinkApplicationConfigurationUpdate?: z.infer<
    typeof FlinkApplicationConfigurationUpdateSchema
  > & { [key: string]: unknown }
  EnvironmentPropertyUpdates?: z.infer<typeof EnvironmentPropertyUpdatesSchema> & {
    [key: string]: unknown
  }
  ApplicationSnapshotConfigurationUpdate?: z.infer<
    typeof ApplicationSnapshotConfigurationUpdateSchema
  > & { [key: string]: unknown }
  VpcConfigurationUpdates?: z.infer<typeof VpcConfigurationUpdatesSchema> & {
    [key: string]: unknown
  }
  ZeppelinApplicationConfigurationUpdate?: z.infer<
    typeof ZeppelinApplicationConfigurationUpdateSchema
  > & { [key: string]: unknown }
}

const DatabaseARNSchema = z
  .string()
  .regex(/arn:.*/)
  .min(1)
  .max(2048)
  .openapi('DatabaseARN')

const GlueDataCatalogConfigurationSchema = z
  .object({
    DatabaseARN: DatabaseARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the database.' }),
    ),
  })
  .openapi({
    required: ['DatabaseARN'],
    description:
      'The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.',
  })
  .openapi('GlueDataCatalogConfiguration')

type CatalogConfigurationType = {
  GlueDataCatalogConfiguration: z.infer<typeof GlueDataCatalogConfigurationSchema> & {
    [key: string]: unknown
  }
}

const GlueDataCatalogConfigurationDescriptionSchema = z
  .object({
    DatabaseARN: DatabaseARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the database.' }),
    ),
  })
  .openapi({
    required: ['DatabaseARN'],
    description:
      'The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.',
  })
  .openapi('GlueDataCatalogConfigurationDescription')

type CatalogConfigurationDescriptionType = {
  GlueDataCatalogConfigurationDescription: z.infer<
    typeof GlueDataCatalogConfigurationDescriptionSchema
  > & { [key: string]: unknown }
}

const GlueDataCatalogConfigurationUpdateSchema = z
  .object({
    DatabaseARNUpdate: DatabaseARNSchema.and(
      z.any().openapi({ description: 'The updated Amazon Resource Name (ARN) of the database.' }),
    ),
  })
  .openapi({
    required: ['DatabaseARNUpdate'],
    description:
      'Updates to the configuration of the Glue Data Catalog that you use for SQL queries that you write in a Kinesis Data Analytics Studio notebook.',
  })
  .openapi('GlueDataCatalogConfigurationUpdate')

type CatalogConfigurationUpdateType = {
  GlueDataCatalogConfigurationUpdate: z.infer<typeof GlueDataCatalogConfigurationUpdateSchema> & {
    [key: string]: unknown
  }
}

const InAppStreamNamesSchema = z.array(InAppStreamNameSchema).openapi('InAppStreamNames')

const RoleARNSchema = z
  .string()
  .regex(/arn:.*/)
  .min(1)
  .max(2048)
  .openapi('RoleARN')

const InputLambdaProcessorDescriptionSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the Amazon Lambda function that is used to preprocess the records in the stream.</p> <note> <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a> </p> </note>',
        }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the IAM role that is used to access the Amazon Lambda function.</p> <note> <p>Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceARN'],
    description:
      'For a SQL-based Kinesis Data Analytics application, an object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in the stream.',
  })
  .openapi('InputLambdaProcessorDescription')

const InputProcessingConfigurationDescriptionSchema = z
  .object({
    InputLambdaProcessorDescription: InputLambdaProcessorDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides configuration information about the associated <a>InputLambdaProcessorDescription</a> ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'For a SQL-based Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.',
    required: [],
  })
  .openapi('InputProcessingConfigurationDescription')

const KinesisStreamsInputDescriptionSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the Kinesis data stream.' }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the IAM role that Kinesis Data Analytics can assume to access the stream.</p> <note> <p>Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceARN'],
    description:
      'For a SQL-based Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration. ',
  })
  .openapi('KinesisStreamsInputDescription')

const KinesisFirehoseInputDescriptionSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the delivery stream.' }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the IAM role that Kinesis Data Analytics assumes to access the stream.</p> <note> <p>Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceARN'],
    description:
      'Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source in the application input configuration. ',
  })
  .openapi('KinesisFirehoseInputDescription')

const InputStartingPositionSchema = z
  .enum(['NOW', 'TRIM_HORIZON', 'LAST_STOPPED_POINT'])
  .openapi('InputStartingPosition')

const InputStartingPositionConfigurationSchema = z
  .object({
    InputStartingPosition: InputStartingPositionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The starting position on the stream.</p> <ul> <li> <p> <code>NOW</code> - Start reading just after the most recent record in the stream, and start at the request timestamp that the customer issued.</p> </li> <li> <p> <code>TRIM_HORIZON</code> - Start reading at the last untrimmed record in the stream, which is the oldest record available in the stream. This option is not available for an Amazon Kinesis Data Firehose delivery stream.</p> </li> <li> <p> <code>LAST_STOPPED_POINT</code> - Resume reading from where the application last stopped reading.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the point at which the application reads from the streaming source.',
    required: [],
  })
  .openapi('InputStartingPositionConfiguration')

type InputDescriptionType = {
  InputId?: z.infer<typeof IdSchema> & { [key: string]: unknown }
  NamePrefix?: z.infer<typeof InAppStreamNameSchema> & { [key: string]: unknown }
  InAppStreamNames?: z.infer<typeof InAppStreamNamesSchema> & { [key: string]: unknown }
  InputProcessingConfigurationDescription?: z.infer<
    typeof InputProcessingConfigurationDescriptionSchema
  > & { [key: string]: unknown }
  KinesisStreamsInputDescription?: z.infer<typeof KinesisStreamsInputDescriptionSchema> & {
    [key: string]: unknown
  }
  KinesisFirehoseInputDescription?: z.infer<typeof KinesisFirehoseInputDescriptionSchema> & {
    [key: string]: unknown
  }
  InputSchema?: z.infer<typeof SourceSchemaSchema> & { [key: string]: unknown }
  InputParallelism?: z.infer<typeof InputParallelismSchema> & { [key: string]: unknown }
  InputStartingPositionConfiguration?: z.infer<typeof InputStartingPositionConfigurationSchema> & {
    [key: string]: unknown
  }
}

const InputLambdaProcessorUpdateSchema = z
  .object({
    ResourceARNUpdate: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the new Amazon Lambda function that is used to preprocess the records in the stream.</p> <note> <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a> </p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['ResourceARNUpdate'],
    description:
      'For a SQL-based Kinesis Data Analytics application, represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream.',
  })
  .openapi('InputLambdaProcessorUpdate')

const InputProcessingConfigurationUpdateSchema = z
  .object({
    InputLambdaProcessorUpdate: InputLambdaProcessorUpdateSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides update information for an <a>InputLambdaProcessor</a>.',
        }),
    ),
  })
  .openapi({
    required: ['InputLambdaProcessorUpdate'],
    description:
      'For a SQL-based Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>.',
  })
  .openapi('InputProcessingConfigurationUpdate')

const KinesisStreamsInputUpdateSchema = z
  .object({
    ResourceARNUpdate: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the input Kinesis data stream to read.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceARNUpdate'],
    description:
      'When you update the input configuration for a SQL-based Kinesis Data Analytics application, provides information about a Kinesis stream as the streaming source.',
  })
  .openapi('KinesisStreamsInputUpdate')

const KinesisFirehoseInputUpdateSchema = z
  .object({
    ResourceARNUpdate: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the input delivery stream to read.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceARNUpdate'],
    description:
      'For a SQL-based Kinesis Data Analytics application, when updating application input configuration, provides information about a Kinesis Data Firehose delivery stream as the streaming source.',
  })
  .openapi('KinesisFirehoseInputUpdate')

const InputSchemaUpdateSchema = z
  .object({
    RecordFormatUpdate: RecordFormatSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the format of the records on the streaming source.' }),
    ).exactOptional(),
    RecordEncodingUpdate: RecordEncodingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the encoding of the records in the streaming source; for example, UTF-8.',
        }),
    ).exactOptional(),
    RecordColumnUpdates: RecordColumnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>RecordColumn</code> objects. Each object describes the mapping of the streaming source element to the corresponding column in the in-application stream.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Describes updates for an SQL-based Kinesis Data Analytics application's input schema.",
    required: [],
  })
  .openapi('InputSchemaUpdate')

const InputParallelismUpdateSchema = z
  .object({
    CountUpdate: InputParallelismCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of in-application streams to create for the specified streaming source.',
        }),
    ),
  })
  .openapi({
    required: ['CountUpdate'],
    description:
      'For a SQL-based Kinesis Data Analytics application, provides updates to the parallelism count.',
  })
  .openapi('InputParallelismUpdate')

type InputUpdateType = {
  InputId: z.infer<typeof IdSchema> & { [key: string]: unknown }
  NamePrefixUpdate?: z.infer<typeof InAppStreamNameSchema> & { [key: string]: unknown }
  InputProcessingConfigurationUpdate?: z.infer<typeof InputProcessingConfigurationUpdateSchema> & {
    [key: string]: unknown
  }
  KinesisStreamsInputUpdate?: z.infer<typeof KinesisStreamsInputUpdateSchema> & {
    [key: string]: unknown
  }
  KinesisFirehoseInputUpdate?: z.infer<typeof KinesisFirehoseInputUpdateSchema> & {
    [key: string]: unknown
  }
  InputSchemaUpdate?: z.infer<typeof InputSchemaUpdateSchema> & { [key: string]: unknown }
  InputParallelismUpdate?: z.infer<typeof InputParallelismUpdateSchema> & { [key: string]: unknown }
}

const RecordRowPathSchema = z
  .string()
  .regex(/^(?=^\$)(?=^\S+$).*$/)
  .min(1)
  .max(65535)
  .openapi('RecordRowPath')

const JSONMappingParametersSchema = z
  .object({
    RecordRowPath: RecordRowPathSchema.and(
      z
        .any()
        .openapi({ description: 'The path to the top-level parent that contains the records.' }),
    ),
  })
  .openapi({
    required: ['RecordRowPath'],
    description:
      'For a SQL-based Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source.',
  })
  .openapi('JSONMappingParameters')

const RecordRowDelimiterSchema = z.string().min(1).max(1024).openapi('RecordRowDelimiter')

const RecordColumnDelimiterSchema = z.string().min(1).max(1024).openapi('RecordColumnDelimiter')

const CSVMappingParametersSchema = z
  .object({
    RecordRowDelimiter: RecordRowDelimiterSchema.and(
      z
        .any()
        .openapi({
          description:
            "The row delimiter. For example, in a CSV format, <i>'\\n'</i> is the typical row delimiter.",
        }),
    ),
    RecordColumnDelimiter: RecordColumnDelimiterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.',
        }),
    ),
  })
  .openapi({
    required: ['RecordRowDelimiter', 'RecordColumnDelimiter'],
    description:
      '<p>For a SQL-based Kinesis Data Analytics application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>\'\\n\'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p>',
  })
  .openapi('CSVMappingParameters')

type MappingParametersType = {
  JSONMappingParameters?: z.infer<typeof JSONMappingParametersSchema> & { [key: string]: unknown }
  CSVMappingParameters?: z.infer<typeof CSVMappingParametersSchema> & { [key: string]: unknown }
}

const KinesisStreamsOutputDescriptionSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the Kinesis data stream.' }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the IAM role that Kinesis Data Analytics can assume to access the stream.</p> <note> <p>Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceARN'],
    description:
      "For an SQL-based Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination. ",
  })
  .openapi('KinesisStreamsOutputDescription')

const KinesisFirehoseOutputDescriptionSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the delivery stream.' }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the IAM role that Kinesis Data Analytics can assume to access the stream.</p> <note> <p>Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceARN'],
    description:
      "For a SQL-based Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination.",
  })
  .openapi('KinesisFirehoseOutputDescription')

const LambdaOutputDescriptionSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the destination Lambda function.',
        }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the IAM role that Kinesis Data Analytics can assume to write to the destination function.</p> <note> <p>Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceARN'],
    description:
      "For a SQL-based Kinesis Data Analytics application's output, describes the Amazon Lambda function that is configured as its destination. ",
  })
  .openapi('LambdaOutputDescription')

type OutputDescriptionType = {
  OutputId?: z.infer<typeof IdSchema> & { [key: string]: unknown }
  Name?: z.infer<typeof InAppStreamNameSchema> & { [key: string]: unknown }
  KinesisStreamsOutputDescription?: z.infer<typeof KinesisStreamsOutputDescriptionSchema> & {
    [key: string]: unknown
  }
  KinesisFirehoseOutputDescription?: z.infer<typeof KinesisFirehoseOutputDescriptionSchema> & {
    [key: string]: unknown
  }
  LambdaOutputDescription?: z.infer<typeof LambdaOutputDescriptionSchema> & {
    [key: string]: unknown
  }
  DestinationSchema?: z.infer<typeof DestinationSchemaSchema> & { [key: string]: unknown }
}

const KinesisStreamsOutputUpdateSchema = z
  .object({
    ResourceARNUpdate: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Kinesis data stream where you want to write the output.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceARNUpdate'],
    description:
      "When you update a SQL-based Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis data stream that is configured as the destination.",
  })
  .openapi('KinesisStreamsOutputUpdate')

const KinesisFirehoseOutputUpdateSchema = z
  .object({
    ResourceARNUpdate: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the delivery stream to write to. ',
        }),
    ),
  })
  .openapi({
    required: ['ResourceARNUpdate'],
    description:
      'For a SQL-based Kinesis Data Analytics application, when updating an output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis Data Firehose delivery stream that is configured as the destination.',
  })
  .openapi('KinesisFirehoseOutputUpdate')

const LambdaOutputUpdateSchema = z
  .object({
    ResourceARNUpdate: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the destination Amazon Lambda function.</p> <note> <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a> </p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['ResourceARNUpdate'],
    description:
      "When you update an SQL-based Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about an Amazon Lambda function that is configured as the destination.",
  })
  .openapi('LambdaOutputUpdate')

type OutputUpdateType = {
  OutputId: z.infer<typeof IdSchema> & { [key: string]: unknown }
  NameUpdate?: z.infer<typeof InAppStreamNameSchema> & { [key: string]: unknown }
  KinesisStreamsOutputUpdate?: z.infer<typeof KinesisStreamsOutputUpdateSchema> & {
    [key: string]: unknown
  }
  KinesisFirehoseOutputUpdate?: z.infer<typeof KinesisFirehoseOutputUpdateSchema> & {
    [key: string]: unknown
  }
  LambdaOutputUpdate?: z.infer<typeof LambdaOutputUpdateSchema> & { [key: string]: unknown }
  DestinationSchemaUpdate?: z.infer<typeof DestinationSchemaSchema> & { [key: string]: unknown }
}

const S3ReferenceDataSourceDescriptionSchema = z
  .object({
    BucketARN: BucketARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the S3 bucket.' }),
    ),
    FileKey: FileKeySchema.and(z.any().openapi({ description: 'Amazon S3 object key name.' })),
    ReferenceRoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the IAM role that Kinesis Data Analytics can assume to read the Amazon S3 object on your behalf to populate the in-application reference table. </p> <note> <p>Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BucketARN', 'FileKey'],
    description:
      'For a SQL-based Kinesis Data Analytics application, provides the bucket name and object key name that stores the reference data.',
  })
  .openapi('S3ReferenceDataSourceDescription')

type ReferenceDataSourceDescriptionType = {
  ReferenceId: z.infer<typeof IdSchema> & { [key: string]: unknown }
  TableName: z.infer<typeof InAppTableNameSchema> & { [key: string]: unknown }
  S3ReferenceDataSourceDescription: z.infer<typeof S3ReferenceDataSourceDescriptionSchema> & {
    [key: string]: unknown
  }
  ReferenceSchema?: z.infer<typeof SourceSchemaSchema> & { [key: string]: unknown }
}

const S3ReferenceDataSourceUpdateSchema = z
  .object({
    BucketARNUpdate: BucketARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the S3 bucket.' }),
    ).exactOptional(),
    FileKeyUpdate: FileKeySchema.and(
      z.any().openapi({ description: 'The object key name.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'For a SQL-based Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table. ',
    required: [],
  })
  .openapi('S3ReferenceDataSourceUpdate')

type ReferenceDataSourceUpdateType = {
  ReferenceId: z.infer<typeof IdSchema> & { [key: string]: unknown }
  TableNameUpdate?: z.infer<typeof InAppTableNameSchema> & { [key: string]: unknown }
  S3ReferenceDataSourceUpdate?: z.infer<typeof S3ReferenceDataSourceUpdateSchema> & {
    [key: string]: unknown
  }
  ReferenceSchemaUpdate?: z.infer<typeof SourceSchemaSchema> & { [key: string]: unknown }
}

const SqlRunConfigurationSchema = z
  .object({
    InputId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input source ID. You can get this ID by calling the <a>DescribeApplication</a> operation. ',
        }),
    ),
    InputStartingPositionConfiguration: InputStartingPositionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The point at which you want the application to start processing records from the streaming source. ',
        }),
    ),
  })
  .openapi({
    required: ['InputId', 'InputStartingPositionConfiguration'],
    description:
      'Describes the starting parameters for a SQL-based Kinesis Data Analytics application.',
  })
  .openapi('SqlRunConfiguration')

const SqlRunConfigurationsSchema = z
  .array(SqlRunConfigurationSchema)
  .openapi('SqlRunConfigurations')

type RunConfigurationType = {
  FlinkRunConfiguration?: z.infer<typeof FlinkRunConfigurationSchema> & { [key: string]: unknown }
  SqlRunConfigurations?: z.infer<typeof SqlRunConfigurationsSchema> & { [key: string]: unknown }
  ApplicationRestoreConfiguration?: z.infer<typeof ApplicationRestoreConfigurationSchema> & {
    [key: string]: unknown
  }
}

const ApplicationVersionIdSchema = z.int().min(1).max(999999999).openapi('ApplicationVersionId')

const LogStreamARNSchema = z
  .string()
  .regex(/arn:.*/)
  .min(1)
  .max(2048)
  .openapi('LogStreamARN')

const CloudWatchLoggingOptionDescriptionSchema = z
  .object({
    CloudWatchLoggingOptionId: IdSchema.and(
      z.any().openapi({ description: 'The ID of the CloudWatch logging option description.' }),
    ).exactOptional(),
    LogStreamARN: LogStreamARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the CloudWatch log to receive application messages.',
        }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IAM ARN of the role to use to send application messages. </p> <note> <p>Provided for backward compatibility. Applications created with the current API version have an application-level service execution role rather than a resource-level role.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LogStreamARN'],
    description: 'Describes the Amazon CloudWatch logging option.',
  })
  .openapi('CloudWatchLoggingOptionDescription')

const CloudWatchLoggingOptionDescriptionsSchema = z
  .array(CloudWatchLoggingOptionDescriptionSchema)
  .openapi('CloudWatchLoggingOptionDescriptions')

const AddApplicationCloudWatchLoggingOptionResponseSchema = z
  .object({
    ApplicationARN: ResourceARNSchema.and(
      z.any().openapi({ description: "The application's ARN." }),
    ).exactOptional(),
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new version ID of the Kinesis Data Analytics application. Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you change the CloudWatch logging options. ',
        }),
    ).exactOptional(),
    CloudWatchLoggingOptionDescriptions: CloudWatchLoggingOptionDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The descriptions of the current CloudWatch logging options for the Kinesis Data Analytics application.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddApplicationCloudWatchLoggingOptionResponse')

const ApplicationNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(128)
  .openapi('ApplicationName')

const CloudWatchLoggingOptionSchema = z
  .object({
    LogStreamARN: LogStreamARNSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the CloudWatch log to receive application messages.' }),
    ),
  })
  .openapi({
    required: ['LogStreamARN'],
    description:
      'Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN). ',
  })
  .openapi('CloudWatchLoggingOption')

const ConditionalTokenSchema = z
  .string()
  .regex(/[a-zA-Z0-9-_+\/=]+/)
  .min(1)
  .max(512)
  .openapi('ConditionalToken')

const AddApplicationCloudWatchLoggingOptionRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The Kinesis Data Analytics application name.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version ID of the Kinesis Data Analytics application. You must provide the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>.You can retrieve the application version ID using <a>DescribeApplication</a>. For better concurrency support, use the <code>ConditionalToken</code> parameter instead of <code>CurrentApplicationVersionId</code>.',
        }),
    ).exactOptional(),
    CloudWatchLoggingOption: CloudWatchLoggingOptionSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides the Amazon CloudWatch log stream Amazon Resource Name (ARN). ',
        }),
    ),
    ConditionalToken: ConditionalTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value you use to implement strong concurrency for application updates. You must provide the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You get the application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the <code>ConditionalToken</code> parameter instead of <code>CurrentApplicationVersionId</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationName', 'CloudWatchLoggingOption'],
    title: 'AddApplicationCloudWatchLoggingOptionRequest',
  })
  .openapi('AddApplicationCloudWatchLoggingOptionRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const InvalidArgumentExceptionSchema = z.any().openapi('InvalidArgumentException')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const InvalidApplicationConfigurationExceptionSchema = z
  .any()
  .openapi('InvalidApplicationConfigurationException')

const AddApplicationInputResponseSchema = z
  .object({
    ApplicationARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the application.' }),
    ).exactOptional(),
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z.any().openapi({ description: 'Provides the current application version.' }),
    ).exactOptional(),
    InputDescriptions: InputDescriptionsSchema.and(
      z.any().openapi({ description: 'Describes the application input configuration. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddApplicationInputResponse')

const AddApplicationInputRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of your existing application to which you want to add the streaming source.',
        }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current version of your application. You must provide the <code>ApplicationVersionID</code> or the <code>ConditionalToken</code>.You can use the <a>DescribeApplication</a> operation to find the current application version.',
        }),
    ),
    Input: InputSchema.and(z.any().openapi({ description: 'The <a>Input</a> to add.' })),
  })
  .openapi({
    required: ['ApplicationName', 'CurrentApplicationVersionId', 'Input'],
    title: 'AddApplicationInputRequest',
  })
  .openapi('AddApplicationInputRequest')

const CodeValidationExceptionSchema = z.any().openapi('CodeValidationException')

const AddApplicationInputProcessingConfigurationResponseSchema = z
  .object({
    ApplicationARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the application.' }),
    ).exactOptional(),
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z.any().openapi({ description: 'Provides the current application version. ' }),
    ).exactOptional(),
    InputId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input ID that is associated with the application input. This is the ID that Kinesis Data Analytics assigns to each input configuration that you add to your application.',
        }),
    ).exactOptional(),
    InputProcessingConfigurationDescription: InputProcessingConfigurationDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The description of the preprocessor that executes on records in this input before the application's code is run.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddApplicationInputProcessingConfigurationResponse')

const AddApplicationInputProcessingConfigurationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the application to which you want to add the input processing configuration.',
        }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the application to which you want to add the input processing configuration. You can use the <a>DescribeApplication</a> operation to get the current application version. If the version specified is not the current version, the <code>ConcurrentModificationException</code> is returned.',
        }),
    ),
    InputId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the input configuration to add the input processing configuration to. You can get a list of the input IDs for an application using the <a>DescribeApplication</a> operation.',
        }),
    ),
    InputProcessingConfiguration: InputProcessingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The <a>InputProcessingConfiguration</a> to add to the application.',
        }),
    ),
  })
  .openapi({
    required: [
      'ApplicationName',
      'CurrentApplicationVersionId',
      'InputId',
      'InputProcessingConfiguration',
    ],
    title: 'AddApplicationInputProcessingConfigurationRequest',
  })
  .openapi('AddApplicationInputProcessingConfigurationRequest')

const AddApplicationOutputResponseSchema = z
  .object({
    ApplicationARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The application Amazon Resource Name (ARN).' }),
    ).exactOptional(),
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated application version ID. Kinesis Data Analytics increments this ID when the application is updated.',
        }),
    ).exactOptional(),
    OutputDescriptions: OutputDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the application output configuration. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddApplicationOutputResponse')

const AddApplicationOutputRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the application to which you want to add the output configuration.',
        }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the application to which you want to add the output configuration. You can use the <a>DescribeApplication</a> operation to get the current application version. If the version specified is not the current version, the <code>ConcurrentModificationException</code> is returned. ',
        }),
    ),
    Output: OutputSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, each describing one output configuration. In the output configuration, you specify the name of an in-application stream, a destination (that is, a Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), and record the formation to use when writing to the destination.',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'CurrentApplicationVersionId', 'Output'],
    title: 'AddApplicationOutputRequest',
  })
  .openapi('AddApplicationOutputRequest')

const AddApplicationReferenceDataSourceResponseSchema = z
  .object({
    ApplicationARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The application Amazon Resource Name (ARN).' }),
    ).exactOptional(),
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated application version ID. Kinesis Data Analytics increments this ID when the application is updated.',
        }),
    ).exactOptional(),
    ReferenceDataSourceDescriptions: ReferenceDataSourceDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes reference data sources configured for the application. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddApplicationReferenceDataSourceResponse')

const AddApplicationReferenceDataSourceRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of an existing application.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the application for which you are adding the reference data source. You can use the <a>DescribeApplication</a> operation to get the current application version. If the version specified is not the current version, the <code>ConcurrentModificationException</code> is returned.',
        }),
    ),
    ReferenceDataSource: ReferenceDataSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reference data source can be an object in your Amazon S3 bucket. Kinesis Data Analytics reads the object and copies the data into the in-application table that is created. You provide an S3 bucket, object key name, and the resulting in-application table that is created. ',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'CurrentApplicationVersionId', 'ReferenceDataSource'],
    title: 'AddApplicationReferenceDataSourceRequest',
  })
  .openapi('AddApplicationReferenceDataSourceRequest')

const AddApplicationVpcConfigurationResponseSchema = z
  .object({
    ApplicationARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The ARN of the application.' }),
    ).exactOptional(),
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the current application version. Kinesis Data Analytics updates the ApplicationVersionId each time you update the application.',
        }),
    ).exactOptional(),
    VpcConfigurationDescription: VpcConfigurationDescriptionSchema.and(
      z.any().openapi({ description: 'The parameters of the new VPC configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddApplicationVpcConfigurationResponse')

const AddApplicationVpcConfigurationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of an existing application.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the application to which you want to add the VPC configuration. You must provide the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You can use the <a>DescribeApplication</a> operation to get the current application version. If the version specified is not the current version, the <code>ConcurrentModificationException</code> is returned. For better concurrency support, use the <code>ConditionalToken</code> parameter instead of <code>CurrentApplicationVersionId</code>.',
        }),
    ).exactOptional(),
    VpcConfiguration: VpcConfigurationSchema.and(
      z.any().openapi({ description: 'Description of the VPC to add to the application.' }),
    ),
    ConditionalToken: ConditionalTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value you use to implement strong concurrency for application updates. You must provide the <code>ApplicationVersionID</code> or the <code>ConditionalToken</code>. You get the application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the <code>ConditionalToken</code> parameter instead of <code>CurrentApplicationVersionId</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationName', 'VpcConfiguration'],
    title: 'AddApplicationVpcConfigurationRequest',
  })
  .openapi('AddApplicationVpcConfigurationRequest')

const ApplicationDescriptionSchema = z.string().min(0).max(1024).openapi('ApplicationDescription')

const RuntimeEnvironmentSchema = z
  .enum([
    'SQL-1_0',
    'FLINK-1_6',
    'FLINK-1_8',
    'ZEPPELIN-FLINK-1_0',
    'FLINK-1_11',
    'FLINK-1_13',
    'ZEPPELIN-FLINK-2_0',
    'FLINK-1_15',
  ])
  .openapi('RuntimeEnvironment')

const ApplicationStatusSchema = z
  .enum([
    'DELETING',
    'STARTING',
    'STOPPING',
    'READY',
    'RUNNING',
    'UPDATING',
    'AUTOSCALING',
    'FORCE_STOPPING',
    'ROLLING_BACK',
    'MAINTENANCE',
    'ROLLED_BACK',
  ])
  .openapi('ApplicationStatus')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ApplicationConfigurationDescriptionSchema: z.ZodType<ApplicationConfigurationDescriptionType> =
  z
    .lazy(() =>
      z
        .object({
          SqlApplicationConfigurationDescription: SqlApplicationConfigurationDescriptionSchema.and(
            z
              .any()
              .openapi({
                description:
                  'The details about inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.',
              }),
          ).exactOptional(),
          ApplicationCodeConfigurationDescription:
            ApplicationCodeConfigurationDescriptionSchema.and(
              z
                .any()
                .openapi({
                  description:
                    'The details about the application code for a Flink-based Kinesis Data Analytics application.',
                }),
            ).exactOptional(),
          RunConfigurationDescription: RunConfigurationDescriptionSchema.and(
            z
              .any()
              .openapi({
                description:
                  'The details about the starting properties for a Kinesis Data Analytics application.',
              }),
          ).exactOptional(),
          FlinkApplicationConfigurationDescription:
            FlinkApplicationConfigurationDescriptionSchema.and(
              z
                .any()
                .openapi({
                  description:
                    'The details about a Flink-based Kinesis Data Analytics application.',
                }),
            ).exactOptional(),
          EnvironmentPropertyDescriptions: EnvironmentPropertyDescriptionsSchema.and(
            z
              .any()
              .openapi({
                description:
                  'Describes execution properties for a Flink-based Kinesis Data Analytics application.',
              }),
          ).exactOptional(),
          ApplicationSnapshotConfigurationDescription:
            ApplicationSnapshotConfigurationDescriptionSchema.and(
              z
                .any()
                .openapi({
                  description:
                    'Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.',
                }),
            ).exactOptional(),
          VpcConfigurationDescriptions: VpcConfigurationDescriptionsSchema.and(
            z
              .any()
              .openapi({
                description:
                  'The array of descriptions of VPC configurations available to the application.',
              }),
          ).exactOptional(),
          ZeppelinApplicationConfigurationDescription:
            ZeppelinApplicationConfigurationDescriptionSchema.and(
              z
                .any()
                .openapi({
                  description:
                    'The configuration parameters for a Kinesis Data Analytics Studio notebook.',
                }),
            ).exactOptional(),
        })
        .openapi({
          description:
            'Describes details about the application code and starting parameters for a Kinesis Data Analytics application.',
          required: [],
        }),
    )
    .openapi('ApplicationConfigurationDescription')

const ApplicationMaintenanceWindowStartTimeSchema = z
  .string()
  .regex(/([01][0-9]|2[0-3]):[0-5][0-9]/)
  .length(5)
  .openapi('ApplicationMaintenanceWindowStartTime')

const ApplicationMaintenanceWindowEndTimeSchema = z
  .string()
  .regex(/([01][0-9]|2[0-3]):[0-5][0-9]/)
  .length(5)
  .openapi('ApplicationMaintenanceWindowEndTime')

const ApplicationMaintenanceConfigurationDescriptionSchema = z
  .object({
    ApplicationMaintenanceWindowStartTime: ApplicationMaintenanceWindowStartTimeSchema.and(
      z.any().openapi({ description: 'The start time for the maintenance window.' }),
    ),
    ApplicationMaintenanceWindowEndTime: ApplicationMaintenanceWindowEndTimeSchema.and(
      z.any().openapi({ description: 'The end time for the maintenance window.' }),
    ),
  })
  .openapi({
    required: ['ApplicationMaintenanceWindowStartTime', 'ApplicationMaintenanceWindowEndTime'],
    description: 'The details of the maintenance configuration for the application.',
  })
  .openapi('ApplicationMaintenanceConfigurationDescription')

const ApplicationModeSchema = z.enum(['STREAMING', 'INTERACTIVE']).openapi('ApplicationMode')

const ApplicationDetailSchema = z
  .object({
    ApplicationARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The ARN of the application.' }),
    ),
    ApplicationDescription: ApplicationDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the application.' }),
    ).exactOptional(),
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of the application.' }),
    ),
    RuntimeEnvironment: RuntimeEnvironmentSchema.and(
      z.any().openapi({ description: 'The runtime environment for the application.' }),
    ),
    ServiceExecutionRole: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the IAM role that the application uses to access external resources.',
        }),
    ).exactOptional(),
    ApplicationStatus: ApplicationStatusSchema.and(
      z.any().openapi({ description: 'The status of the application.' }),
    ),
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the current application version. Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update the application.',
        }),
    ),
    CreateTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The current timestamp when the application was created.' }),
    ).exactOptional(),
    LastUpdateTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The current timestamp when the application was last updated.' }),
    ).exactOptional(),
    ApplicationConfigurationDescription: ApplicationConfigurationDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes details about the application code and starting parameters for a Kinesis Data Analytics application.',
        }),
    ).exactOptional(),
    CloudWatchLoggingOptionDescriptions: CloudWatchLoggingOptionDescriptionsSchema.and(
      z
        .any()
        .openapi({ description: 'Describes the application Amazon CloudWatch logging options.' }),
    ).exactOptional(),
    ApplicationMaintenanceConfigurationDescription:
      ApplicationMaintenanceConfigurationDescriptionSchema.and(
        z
          .any()
          .openapi({
            description: 'The details of the maintenance configuration for the application.',
          }),
      ).exactOptional(),
    ApplicationVersionUpdatedFrom: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The previous application version before the latest application update. <a>RollbackApplication</a> reverts the application to this version.',
        }),
    ).exactOptional(),
    ApplicationVersionRolledBackFrom: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you reverted the application using <a>RollbackApplication</a>, the application version when <code>RollbackApplication</code> was called.',
        }),
    ).exactOptional(),
    ConditionalToken: ConditionalTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'A value you use to implement strong concurrency for application updates.',
        }),
    ).exactOptional(),
    ApplicationVersionRolledBackTo: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({ description: 'The version to which you want to roll back the application.' }),
    ).exactOptional(),
    ApplicationMode: ApplicationModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'To create a Kinesis Data Analytics Studio notebook, you must set the mode to <code>INTERACTIVE</code>. However, for a Kinesis Data Analytics for Apache Flink application, the mode is optional.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ApplicationARN',
      'ApplicationName',
      'RuntimeEnvironment',
      'ApplicationStatus',
      'ApplicationVersionId',
    ],
    description:
      'Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.',
  })
  .openapi('ApplicationDetail')

const CreateApplicationResponseSchema = z
  .object({
    ApplicationDetail: ApplicationDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'In response to your <code>CreateApplication</code> request, Kinesis Data Analytics returns a response with details of the application it created.',
        }),
    ),
  })
  .openapi({ required: ['ApplicationDetail'] })
  .openapi('CreateApplicationResponse')

const ApplicationConfigurationSchema: z.ZodType<ApplicationConfigurationType> = z
  .lazy(() =>
    z
      .object({
        SqlApplicationConfiguration: SqlApplicationConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'The creation and update parameters for a SQL-based Kinesis Data Analytics application.',
            }),
        ).exactOptional(),
        FlinkApplicationConfiguration: FlinkApplicationConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'The creation and update parameters for a Flink-based Kinesis Data Analytics application.',
            }),
        ).exactOptional(),
        EnvironmentProperties: EnvironmentPropertiesSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes execution properties for a Flink-based Kinesis Data Analytics application.',
            }),
        ).exactOptional(),
        ApplicationCodeConfiguration: ApplicationCodeConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'The code location and type parameters for a Flink-based Kinesis Data Analytics application.',
            }),
        ).exactOptional(),
        ApplicationSnapshotConfiguration: ApplicationSnapshotConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.',
            }),
        ).exactOptional(),
        VpcConfigurations: VpcConfigurationsSchema.and(
          z
            .any()
            .openapi({
              description:
                'The array of descriptions of VPC configurations available to the application.',
            }),
        ).exactOptional(),
        ZeppelinApplicationConfiguration: ZeppelinApplicationConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'The configuration parameters for a Kinesis Data Analytics Studio notebook.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'Specifies the creation parameters for a Kinesis Data Analytics application.',
        required: [],
      }),
  )
  .openapi('ApplicationConfiguration')

const CloudWatchLoggingOptionsSchema = z
  .array(CloudWatchLoggingOptionSchema)
  .openapi('CloudWatchLoggingOptions')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(z.any().openapi({ description: 'The key of the key-value tag.' })),
    Value: TagValueSchema.and(
      z.any().openapi({ description: 'The value of the key-value tag. The value is optional.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Key'],
    description:
      'A key-value pair (the value is optional) that you can define and assign to Amazon resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.',
  })
  .openapi('Tag')

const TagsSchema = z.array(TagSchema).min(1).max(200).openapi('Tags')

const CreateApplicationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of your application (for example, <code>sample-app</code>).',
        }),
    ),
    ApplicationDescription: ApplicationDescriptionSchema.and(
      z.any().openapi({ description: 'A summary description of the application.' }),
    ).exactOptional(),
    RuntimeEnvironment: RuntimeEnvironmentSchema.and(
      z.any().openapi({ description: 'The runtime environment for the application.' }),
    ),
    ServiceExecutionRole: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM role used by the application to access Kinesis data streams, Kinesis Data Firehose delivery streams, Amazon S3 objects, and other external resources.',
        }),
    ),
    ApplicationConfiguration: ApplicationConfigurationSchema.and(
      z.any().openapi({ description: 'Use this parameter to configure the application.' }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this parameter to configure an Amazon CloudWatch log stream to monitor application configuration errors. ',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.',
        }),
    ).exactOptional(),
    ApplicationMode: ApplicationModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use the <code>STREAMING</code> mode to create a Kinesis Data Analytics For Flink application. To create a Kinesis Data Analytics Studio notebook, use the <code>INTERACTIVE</code> mode.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationName', 'RuntimeEnvironment', 'ServiceExecutionRole'],
    title: 'CreateApplicationRequest',
  })
  .openapi('CreateApplicationRequest')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const UnsupportedOperationExceptionSchema = z.any().openapi('UnsupportedOperationException')

const AuthorizedUrlSchema = z.string().min(1).max(2048).openapi('AuthorizedUrl')

const CreateApplicationPresignedUrlResponseSchema = z
  .object({
    AuthorizedUrl: AuthorizedUrlSchema.and(
      z.any().openapi({ description: 'The URL of the extension.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateApplicationPresignedUrlResponse')

const UrlTypeSchema = z.enum(['FLINK_DASHBOARD_URL', 'ZEPPELIN_UI_URL']).openapi('UrlType')

const SessionExpirationDurationInSecondsSchema = z
  .int()
  .min(1800)
  .max(43200)
  .openapi('SessionExpirationDurationInSeconds')

const CreateApplicationPresignedUrlRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of the application.' }),
    ),
    UrlType: UrlTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the extension for which to create and return a URL. Currently, the only valid extension URL type is <code>FLINK_DASHBOARD_URL</code>. ',
        }),
    ),
    SessionExpirationDurationInSeconds: SessionExpirationDurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description: 'The duration in seconds for which the returned URL will be valid.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationName', 'UrlType'],
    title: 'CreateApplicationPresignedUrlRequest',
  })
  .openapi('CreateApplicationPresignedUrlRequest')

const CreateApplicationSnapshotResponseSchema = z
  .object({})
  .openapi('CreateApplicationSnapshotResponse')

const CreateApplicationSnapshotRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of an existing application' }),
    ),
    SnapshotName: SnapshotNameSchema.and(
      z.any().openapi({ description: 'An identifier for the application snapshot.' }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'SnapshotName'],
    title: 'CreateApplicationSnapshotRequest',
  })
  .openapi('CreateApplicationSnapshotRequest')

const DeleteApplicationResponseSchema = z.object({}).openapi('DeleteApplicationResponse')

const DeleteApplicationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of the application to delete.' }),
    ),
    CreateTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'Use the <code>DescribeApplication</code> operation to get this value.',
        }),
    ),
  })
  .openapi({ required: ['ApplicationName', 'CreateTimestamp'], title: 'DeleteApplicationRequest' })
  .openapi('DeleteApplicationRequest')

const DeleteApplicationCloudWatchLoggingOptionResponseSchema = z
  .object({
    ApplicationARN: ResourceARNSchema.and(
      z.any().openapi({ description: "The application's Amazon Resource Name (ARN)." }),
    ).exactOptional(),
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version ID of the application. Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you change the CloudWatch logging options.',
        }),
    ).exactOptional(),
    CloudWatchLoggingOptionDescriptions: CloudWatchLoggingOptionDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The descriptions of the remaining CloudWatch logging options for the application.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteApplicationCloudWatchLoggingOptionResponse')

const DeleteApplicationCloudWatchLoggingOptionRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The application name.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version ID of the application. You must provide the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You can retrieve the application version ID using <a>DescribeApplication</a>. For better concurrency support, use the <code>ConditionalToken</code> parameter instead of <code>CurrentApplicationVersionId</code>.',
        }),
    ).exactOptional(),
    CloudWatchLoggingOptionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>CloudWatchLoggingOptionId</code> of the Amazon CloudWatch logging option to delete. You can get the <code>CloudWatchLoggingOptionId</code> by using the <a>DescribeApplication</a> operation. ',
        }),
    ),
    ConditionalToken: ConditionalTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value you use to implement strong concurrency for application updates. You must provide the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You get the application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the <code>ConditionalToken</code> parameter instead of <code>CurrentApplicationVersionId</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationName', 'CloudWatchLoggingOptionId'],
    title: 'DeleteApplicationCloudWatchLoggingOptionRequest',
  })
  .openapi('DeleteApplicationCloudWatchLoggingOptionRequest')

const DeleteApplicationInputProcessingConfigurationResponseSchema = z
  .object({
    ApplicationARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the application.' }),
    ).exactOptional(),
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z.any().openapi({ description: 'The current application version ID.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteApplicationInputProcessingConfigurationResponse')

const DeleteApplicationInputProcessingConfigurationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of the application.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The application version. You can use the <a>DescribeApplication</a> operation to get the current application version. If the version specified is not the current version, the <code>ConcurrentModificationException</code> is returned. ',
        }),
    ),
    InputId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the input configuration from which to delete the input processing configuration. You can get a list of the input IDs for an application by using the <a>DescribeApplication</a> operation.',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'CurrentApplicationVersionId', 'InputId'],
    title: 'DeleteApplicationInputProcessingConfigurationRequest',
  })
  .openapi('DeleteApplicationInputProcessingConfigurationRequest')

const DeleteApplicationOutputResponseSchema = z
  .object({
    ApplicationARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The application Amazon Resource Name (ARN).' }),
    ).exactOptional(),
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z.any().openapi({ description: 'The current application version ID.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteApplicationOutputResponse')

const DeleteApplicationOutputRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The application name.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The application version. You can use the <a>DescribeApplication</a> operation to get the current application version. If the version specified is not the current version, the <code>ConcurrentModificationException</code> is returned. ',
        }),
    ),
    OutputId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the configuration to delete. Each output configuration that is added to the application (either when the application is created or later) using the <a>AddApplicationOutput</a> operation has a unique ID. You need to provide the ID to uniquely identify the output configuration that you want to delete from the application configuration. You can use the <a>DescribeApplication</a> operation to get the specific <code>OutputId</code>. ',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'CurrentApplicationVersionId', 'OutputId'],
    title: 'DeleteApplicationOutputRequest',
  })
  .openapi('DeleteApplicationOutputRequest')

const DeleteApplicationReferenceDataSourceResponseSchema = z
  .object({
    ApplicationARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The application Amazon Resource Name (ARN).' }),
    ).exactOptional(),
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z.any().openapi({ description: 'The updated version ID of the application.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteApplicationReferenceDataSourceResponse')

const DeleteApplicationReferenceDataSourceRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of an existing application.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current application version. You can use the <a>DescribeApplication</a> operation to get the current application version. If the version specified is not the current version, the <code>ConcurrentModificationException</code> is returned.',
        }),
    ),
    ReferenceId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the reference data source. When you add a reference data source to your application using the <a>AddApplicationReferenceDataSource</a>, Kinesis Data Analytics assigns an ID. You can use the <a>DescribeApplication</a> operation to get the reference ID. ',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'CurrentApplicationVersionId', 'ReferenceId'],
    title: 'DeleteApplicationReferenceDataSourceRequest',
  })
  .openapi('DeleteApplicationReferenceDataSourceRequest')

const DeleteApplicationSnapshotResponseSchema = z
  .object({})
  .openapi('DeleteApplicationSnapshotResponse')

const DeleteApplicationSnapshotRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of an existing application.' }),
    ),
    SnapshotName: SnapshotNameSchema.and(
      z.any().openapi({ description: 'The identifier for the snapshot delete.' }),
    ),
    SnapshotCreationTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The creation timestamp of the application snapshot to delete. You can retrieve this value using or .',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'SnapshotName', 'SnapshotCreationTimestamp'],
    title: 'DeleteApplicationSnapshotRequest',
  })
  .openapi('DeleteApplicationSnapshotRequest')

const DeleteApplicationVpcConfigurationResponseSchema = z
  .object({
    ApplicationARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The ARN of the Kinesis Data Analytics application.' }),
    ).exactOptional(),
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z.any().openapi({ description: 'The updated version ID of the application.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteApplicationVpcConfigurationResponse')

const DeleteApplicationVpcConfigurationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of an existing application.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current application version ID. You must provide the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You can retrieve the application version ID using <a>DescribeApplication</a>. For better concurrency support, use the <code>ConditionalToken</code> parameter instead of <code>CurrentApplicationVersionId</code>.',
        }),
    ).exactOptional(),
    VpcConfigurationId: IdSchema.and(
      z.any().openapi({ description: 'The ID of the VPC configuration to delete.' }),
    ),
    ConditionalToken: ConditionalTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value you use to implement strong concurrency for application updates. You must provide the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You get the application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the <code>ConditionalToken</code> parameter instead of <code>CurrentApplicationVersionId</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationName', 'VpcConfigurationId'],
    title: 'DeleteApplicationVpcConfigurationRequest',
  })
  .openapi('DeleteApplicationVpcConfigurationRequest')

const DescribeApplicationResponseSchema = z
  .object({
    ApplicationDetail: ApplicationDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            "Provides a description of the application, such as the application's Amazon Resource Name (ARN), status, and latest version.",
        }),
    ),
  })
  .openapi({ required: ['ApplicationDetail'] })
  .openapi('DescribeApplicationResponse')

const DescribeApplicationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of the application.' }),
    ),
    IncludeAdditionalDetails: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            "Displays verbose information about a Kinesis Data Analytics application, including the application's job plan.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ApplicationName'], title: 'DescribeApplicationRequest' })
  .openapi('DescribeApplicationRequest')

const SnapshotStatusSchema = z
  .enum(['CREATING', 'READY', 'DELETING', 'FAILED'])
  .openapi('SnapshotStatus')

const SnapshotDetailsSchema = z
  .object({
    SnapshotName: SnapshotNameSchema.and(
      z.any().openapi({ description: 'The identifier for the application snapshot.' }),
    ),
    SnapshotStatus: SnapshotStatusSchema.and(
      z.any().openapi({ description: 'The status of the application snapshot.' }),
    ),
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The current application version ID when the snapshot was created.',
        }),
    ),
    SnapshotCreationTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of the application snapshot.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SnapshotName', 'SnapshotStatus', 'ApplicationVersionId'],
    description: 'Provides details about a snapshot of application state.',
  })
  .openapi('SnapshotDetails')

const DescribeApplicationSnapshotResponseSchema = z
  .object({
    SnapshotDetails: SnapshotDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'An object containing information about the application snapshot.',
        }),
    ),
  })
  .openapi({ required: ['SnapshotDetails'] })
  .openapi('DescribeApplicationSnapshotResponse')

const DescribeApplicationSnapshotRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of an existing application.' }),
    ),
    SnapshotName: SnapshotNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of an application snapshot. You can retrieve this value using .',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'SnapshotName'],
    title: 'DescribeApplicationSnapshotRequest',
  })
  .openapi('DescribeApplicationSnapshotRequest')

const DescribeApplicationVersionResponseSchema = z
  .object({ ApplicationVersionDetail: ApplicationDetailSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DescribeApplicationVersionResponse')

const DescribeApplicationVersionRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the application for which you want to get the version description.',
        }),
    ),
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the application version for which you want to get the description.',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'ApplicationVersionId'],
    title: 'DescribeApplicationVersionRequest',
  })
  .openapi('DescribeApplicationVersionRequest')

const ParsedInputRecordFieldSchema = z.string().openapi('ParsedInputRecordField')

const ParsedInputRecordSchema = z.array(ParsedInputRecordFieldSchema).openapi('ParsedInputRecord')

const ParsedInputRecordsSchema = z.array(ParsedInputRecordSchema).openapi('ParsedInputRecords')

const ProcessedInputRecordSchema = z.string().openapi('ProcessedInputRecord')

const ProcessedInputRecordsSchema = z
  .array(ProcessedInputRecordSchema)
  .openapi('ProcessedInputRecords')

const RawInputRecordSchema = z.string().openapi('RawInputRecord')

const RawInputRecordsSchema = z.array(RawInputRecordSchema).openapi('RawInputRecords')

const DiscoverInputSchemaResponseSchema = z
  .object({
    InputSchema: SourceSchemaSchema.and(
      z
        .any()
        .openapi({
          description:
            'The schema inferred from the streaming source. It identifies the format of the data in the streaming source and how each data element maps to corresponding columns in the in-application stream that you can create.',
        }),
    ).exactOptional(),
    ParsedInputRecords: ParsedInputRecordsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of elements, where each element corresponds to a row in a stream record (a stream record can have more than one row).',
        }),
    ).exactOptional(),
    ProcessedInputRecords: ProcessedInputRecordsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stream data that was modified by the processor specified in the <code>InputProcessingConfiguration</code> parameter.',
        }),
    ).exactOptional(),
    RawInputRecords: RawInputRecordsSchema.and(
      z.any().openapi({ description: 'The raw stream data that was sampled to infer the schema.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DiscoverInputSchemaResponse')

const S3ConfigurationSchema = z
  .object({
    BucketARN: BucketARNSchema.and(
      z.any().openapi({ description: 'The ARN of the S3 bucket that contains the data.' }),
    ),
    FileKey: FileKeySchema.and(
      z.any().openapi({ description: 'The name of the object that contains the data.' }),
    ),
  })
  .openapi({
    required: ['BucketARN', 'FileKey'],
    description:
      'For a SQL-based Kinesis Data Analytics application, provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name of the Amazon S3 object that contains the data.',
  })
  .openapi('S3Configuration')

const DiscoverInputSchemaRequestSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the streaming source.' }),
    ).exactOptional(),
    ServiceExecutionRole: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the role that is used to access the streaming source.',
        }),
    ),
    InputStartingPositionConfiguration: InputStartingPositionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The point at which you want Kinesis Data Analytics to start reading records from the specified streaming source discovery purposes.',
        }),
    ).exactOptional(),
    S3Configuration: S3ConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify this parameter to discover a schema from data in an Amazon S3 object.',
        }),
    ).exactOptional(),
    InputProcessingConfiguration: InputProcessingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a>InputProcessingConfiguration</a> to use to preprocess the records before discovering the schema of the records.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceExecutionRole'], title: 'DiscoverInputSchemaRequest' })
  .openapi('DiscoverInputSchemaRequest')

const UnableToDetectSchemaExceptionSchema = z.any().openapi('UnableToDetectSchemaException')

const ResourceProvisionedThroughputExceededExceptionSchema = z
  .any()
  .openapi('ResourceProvisionedThroughputExceededException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const SnapshotSummariesSchema = z.array(SnapshotDetailsSchema).openapi('SnapshotSummaries')

const NextTokenSchema = z.string().min(1).max(512).openapi('NextToken')

const ListApplicationSnapshotsResponseSchema = z
  .object({
    SnapshotSummaries: SnapshotSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of objects containing information about the application snapshots.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or <code>null</code> if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListApplicationSnapshotsResponse')

const ListSnapshotsInputLimitSchema = z.int().min(1).max(50).openapi('ListSnapshotsInputLimit')

const ListApplicationSnapshotsRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of an existing application.' }),
    ),
    Limit: ListSnapshotsInputLimitSchema.and(
      z.any().openapi({ description: 'The maximum number of application snapshots to list.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ApplicationName'], title: 'ListApplicationSnapshotsRequest' })
  .openapi('ListApplicationSnapshotsRequest')

const ApplicationVersionSummarySchema = z
  .object({
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the application version. Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update the application.',
        }),
    ),
    ApplicationStatus: ApplicationStatusSchema.and(
      z.any().openapi({ description: 'The status of the application.' }),
    ),
  })
  .openapi({
    required: ['ApplicationVersionId', 'ApplicationStatus'],
    description: 'The summary of the application version.',
  })
  .openapi('ApplicationVersionSummary')

const ApplicationVersionSummariesSchema = z
  .array(ApplicationVersionSummarySchema)
  .openapi('ApplicationVersionSummaries')

const ListApplicationVersionsResponseSchema = z
  .object({
    ApplicationVersionSummaries: ApplicationVersionSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of the application versions and the associated configuration summaries. The list includes application versions that were rolled back.</p> <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p>',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the next set of results, or <code>null</code> if there are no additional results. To retrieve the next set of items, pass this token into a subsequent invocation of this operation. For more information about pagination, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the Amazon Command Line Interface\'s Pagination Options</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListApplicationVersionsResponse')

const ListApplicationVersionsInputLimitSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('ListApplicationVersionsInputLimit')

const ListApplicationVersionsRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the application for which you want to list all versions.',
        }),
    ),
    Limit: ListApplicationVersionsInputLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of versions to list in this invocation of the operation.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a previous invocation of this operation returned a pagination token, pass it into this value to retrieve the next set of results. For more information about pagination, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the Amazon Command Line Interface\'s Pagination Options</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ApplicationName'], title: 'ListApplicationVersionsRequest' })
  .openapi('ListApplicationVersionsRequest')

const ApplicationSummarySchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of the application.' }),
    ),
    ApplicationARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The ARN of the application.' }),
    ),
    ApplicationStatus: ApplicationStatusSchema.and(
      z.any().openapi({ description: 'The status of the application.' }),
    ),
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z.any().openapi({ description: 'Provides the current application version.' }),
    ),
    RuntimeEnvironment: RuntimeEnvironmentSchema.and(
      z.any().openapi({ description: 'The runtime environment for the application.' }),
    ),
    ApplicationMode: ApplicationModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'For a Kinesis Data Analytics for Apache Flink application, the mode is <code>STREAMING</code>. For a Kinesis Data Analytics Studio notebook, it is <code>INTERACTIVE</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ApplicationName',
      'ApplicationARN',
      'ApplicationStatus',
      'ApplicationVersionId',
      'RuntimeEnvironment',
    ],
    description:
      'Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.',
  })
  .openapi('ApplicationSummary')

const ApplicationSummariesSchema = z.array(ApplicationSummarySchema).openapi('ApplicationSummaries')

const ListApplicationsResponseSchema = z
  .object({
    ApplicationSummaries: ApplicationSummariesSchema.and(
      z.any().openapi({ description: 'A list of <code>ApplicationSummary</code> objects.' }),
    ),
    NextToken: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the next set of results, or <code>null</code> if there are no additional results. Pass this token into a subsequent command to retrieve the next set of items For more information about pagination, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the Amazon Command Line Interface\'s Pagination Options</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ApplicationSummaries'] })
  .openapi('ListApplicationsResponse')

const ListApplicationsInputLimitSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('ListApplicationsInputLimit')

const ListApplicationsRequestSchema = z
  .object({
    Limit: ListApplicationsInputLimitSchema.and(
      z.any().openapi({ description: 'The maximum number of applications to list.' }),
    ).exactOptional(),
    NextToken: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a previous command returned a pagination token, pass it into this value to retrieve the next set of results. For more information about pagination, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the Amazon Command Line Interface\'s Pagination Options</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListApplicationsRequest', required: [] })
  .openapi('ListApplicationsRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The key-value tags assigned to the application.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const KinesisAnalyticsARNSchema = z
  .string()
  .regex(/arn:.*/)
  .min(1)
  .max(2048)
  .openapi('KinesisAnalyticsARN')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: KinesisAnalyticsARNSchema.and(
      z.any().openapi({ description: 'The ARN of the application for which to retrieve tags.' }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const RollbackApplicationResponseSchema = z
  .object({ ApplicationDetail: ApplicationDetailSchema })
  .openapi({ required: ['ApplicationDetail'] })
  .openapi('RollbackApplicationResponse')

const RollbackApplicationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of the application.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current application version ID. You can retrieve the application version ID using <a>DescribeApplication</a>.',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'CurrentApplicationVersionId'],
    title: 'RollbackApplicationRequest',
  })
  .openapi('RollbackApplicationRequest')

const StartApplicationResponseSchema = z.object({}).openapi('StartApplicationResponse')

const RunConfigurationSchema: z.ZodType<RunConfigurationType> = z
  .lazy(() =>
    z
      .object({
        FlinkRunConfiguration: FlinkRunConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the starting parameters for a Flink-based Kinesis Data Analytics application.',
            }),
        ).exactOptional(),
        SqlRunConfigurations: SqlRunConfigurationsSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the starting parameters for a SQL-based Kinesis Data Analytics application application.',
            }),
        ).exactOptional(),
        ApplicationRestoreConfiguration: ApplicationRestoreConfigurationSchema.and(
          z
            .any()
            .openapi({
              description: 'Describes the restore behavior of a restarting application.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'Describes the starting parameters for an Kinesis Data Analytics application.',
        required: [],
      }),
  )
  .openapi('RunConfiguration')

const StartApplicationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of the application.' }),
    ),
    RunConfiguration: RunConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies the run configuration (start parameters) of a Kinesis Data Analytics application.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ApplicationName'], title: 'StartApplicationRequest' })
  .openapi('StartApplicationRequest')

const StopApplicationResponseSchema = z.object({}).openapi('StopApplicationResponse')

const StopApplicationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of the running application to stop.' }),
    ),
    Force: BooleanObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Set to <code>true</code> to force the application to stop. If you set <code>Force</code> to <code>true</code>, Kinesis Data Analytics stops the application without taking a snapshot. </p> <note> <p>Force-stopping your application may lead to data loss or duplication. To prevent data loss or duplicate processing of data during application restarts, we recommend you to take frequent snapshots of your application.</p> </note> <p>You can only force stop a Flink-based Kinesis Data Analytics application. You can't force stop a SQL-based Kinesis Data Analytics application.</p> <p>The application must be in the <code>STARTING</code>, <code>UPDATING</code>, <code>STOPPING</code>, <code>AUTOSCALING</code>, or <code>RUNNING</code> status. </p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ApplicationName'], title: 'StopApplicationRequest' })
  .openapi('StopApplicationRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: KinesisAnalyticsARNSchema.and(
      z.any().openapi({ description: 'The ARN of the application to assign the tags.' }),
    ),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The key-value tags to assign to the application.' }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeysSchema = z.array(TagKeySchema).min(1).max(200).openapi('TagKeys')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: KinesisAnalyticsARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Kinesis Data Analytics application from which to remove the tags.',
        }),
    ),
    TagKeys: TagKeysSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of keys of tags to remove from the specified application.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateApplicationResponseSchema = z
  .object({
    ApplicationDetail: ApplicationDetailSchema.and(
      z.any().openapi({ description: 'Describes application updates.' }),
    ),
  })
  .openapi({ required: ['ApplicationDetail'] })
  .openapi('UpdateApplicationResponse')

const ApplicationConfigurationUpdateSchema: z.ZodType<ApplicationConfigurationUpdateType> = z
  .lazy(() =>
    z
      .object({
        SqlApplicationConfigurationUpdate: SqlApplicationConfigurationUpdateSchema.and(
          z
            .any()
            .openapi({
              description:
                "Describes updates to a SQL-based Kinesis Data Analytics application's configuration.",
            }),
        ).exactOptional(),
        ApplicationCodeConfigurationUpdate: ApplicationCodeConfigurationUpdateSchema.and(
          z
            .any()
            .openapi({ description: "Describes updates to an application's code configuration." }),
        ).exactOptional(),
        FlinkApplicationConfigurationUpdate: FlinkApplicationConfigurationUpdateSchema.and(
          z
            .any()
            .openapi({
              description:
                "Describes updates to a Flink-based Kinesis Data Analytics application's configuration.",
            }),
        ).exactOptional(),
        EnvironmentPropertyUpdates: EnvironmentPropertyUpdatesSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes updates to the environment properties for a Flink-based Kinesis Data Analytics application.',
            }),
        ).exactOptional(),
        ApplicationSnapshotConfigurationUpdate: ApplicationSnapshotConfigurationUpdateSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.',
            }),
        ).exactOptional(),
        VpcConfigurationUpdates: VpcConfigurationUpdatesSchema.and(
          z
            .any()
            .openapi({
              description:
                'Updates to the array of descriptions of VPC configurations available to the application.',
            }),
        ).exactOptional(),
        ZeppelinApplicationConfigurationUpdate: ZeppelinApplicationConfigurationUpdateSchema.and(
          z
            .any()
            .openapi({
              description:
                'Updates to the configuration of a Kinesis Data Analytics Studio notebook.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: "Describes updates to an application's configuration.",
        required: [],
      }),
  )
  .openapi('ApplicationConfigurationUpdate')

const RunConfigurationUpdateSchema = z
  .object({
    FlinkRunConfiguration: FlinkRunConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the starting parameters for a Flink-based Kinesis Data Analytics application.',
        }),
    ).exactOptional(),
    ApplicationRestoreConfiguration: ApplicationRestoreConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes updates to the restore behavior of a restarting application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the updates to the starting parameters for a Kinesis Data Analytics application.',
    required: [],
  })
  .openapi('RunConfigurationUpdate')

const CloudWatchLoggingOptionUpdateSchema = z
  .object({
    CloudWatchLoggingOptionId: IdSchema.and(
      z.any().openapi({ description: 'The ID of the CloudWatch logging option to update' }),
    ),
    LogStreamARNUpdate: LogStreamARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the CloudWatch log to receive application messages.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CloudWatchLoggingOptionId'],
    description: 'Describes the Amazon CloudWatch logging option updates.',
  })
  .openapi('CloudWatchLoggingOptionUpdate')

const CloudWatchLoggingOptionUpdatesSchema = z
  .array(CloudWatchLoggingOptionUpdateSchema)
  .openapi('CloudWatchLoggingOptionUpdates')

const UpdateApplicationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of the application to update.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current application version ID. You must provide the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>.You can retrieve the application version ID using <a>DescribeApplication</a>. For better concurrency support, use the <code>ConditionalToken</code> parameter instead of <code>CurrentApplicationVersionId</code>.',
        }),
    ).exactOptional(),
    ApplicationConfigurationUpdate: ApplicationConfigurationUpdateSchema.and(
      z.any().openapi({ description: 'Describes application configuration updates.' }),
    ).exactOptional(),
    ServiceExecutionRoleUpdate: RoleARNSchema.and(
      z.any().openapi({ description: 'Describes updates to the service execution role.' }),
    ).exactOptional(),
    RunConfigurationUpdate: RunConfigurationUpdateSchema.and(
      z
        .any()
        .openapi({ description: "Describes updates to the application's starting parameters." }),
    ).exactOptional(),
    CloudWatchLoggingOptionUpdates: CloudWatchLoggingOptionUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes application Amazon CloudWatch logging option updates. You can only update existing CloudWatch logging options with this action. To add a new CloudWatch logging option, use <a>AddApplicationCloudWatchLoggingOption</a>.',
        }),
    ).exactOptional(),
    ConditionalToken: ConditionalTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value you use to implement strong concurrency for application updates. You must provide the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You get the application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the <code>ConditionalToken</code> parameter instead of <code>CurrentApplicationVersionId</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ApplicationName'], title: 'UpdateApplicationRequest' })
  .openapi('UpdateApplicationRequest')

const UpdateApplicationMaintenanceConfigurationResponseSchema = z
  .object({
    ApplicationARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the application.' }),
    ).exactOptional(),
    ApplicationMaintenanceConfigurationDescription:
      ApplicationMaintenanceConfigurationDescriptionSchema.and(
        z
          .any()
          .openapi({
            description: 'The application maintenance configuration description after the update.',
          }),
      ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateApplicationMaintenanceConfigurationResponse')

const ApplicationMaintenanceConfigurationUpdateSchema = z
  .object({
    ApplicationMaintenanceWindowStartTimeUpdate: ApplicationMaintenanceWindowStartTimeSchema.and(
      z.any().openapi({ description: 'The updated start time for the maintenance window.' }),
    ),
  })
  .openapi({
    required: ['ApplicationMaintenanceWindowStartTimeUpdate'],
    description: 'Describes the updated maintenance configuration for the application.',
  })
  .openapi('ApplicationMaintenanceConfigurationUpdate')

const UpdateApplicationMaintenanceConfigurationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the application for which you want to update the maintenance configuration.',
        }),
    ),
    ApplicationMaintenanceConfigurationUpdate: ApplicationMaintenanceConfigurationUpdateSchema.and(
      z
        .any()
        .openapi({ description: 'Describes the application maintenance configuration update.' }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'ApplicationMaintenanceConfigurationUpdate'],
    title: 'UpdateApplicationMaintenanceConfigurationRequest',
  })
  .openapi('UpdateApplicationMaintenanceConfigurationRequest')

const PropertyKeySchema = z.string().min(1).max(2048).openapi('PropertyKey')

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

export const postXAmzTargetKinesisAnalytics20180523AddApplicationCloudWatchLoggingOptionRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption',
    description:
      'Adds an Amazon CloudWatch log stream to monitor application configuration errors.',
    operationId: 'AddApplicationCloudWatchLoggingOption',
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
          .literal('KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: AddApplicationCloudWatchLoggingOptionRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: AddApplicationCloudWatchLoggingOptionResponseSchema },
        },
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
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      484: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      485: {
        description: 'InvalidApplicationConfigurationException',
        content: { 'application/json': { schema: InvalidApplicationConfigurationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetKinesisAnalytics20180523AddApplicationInputRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput',
  description:
    '<p> Adds a streaming source to your SQL-based Kinesis Data Analytics application. </p> <p>You can add a streaming source when you create an application, or you can use this operation to add a streaming source after you create an application. For more information, see <a>CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version. </p>',
  operationId: 'AddApplicationInput',
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
        .literal('KinesisAnalytics_20180523.AddApplicationInput')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20180523.AddApplicationInput'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddApplicationInputRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddApplicationInputResponseSchema } },
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
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    484: {
      description: 'CodeValidationException',
      content: { 'application/json': { schema: CodeValidationExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration',
    description:
      'Adds an <a>InputProcessingConfiguration</a> to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records on the input stream before the application\'s SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.',
    operationId: 'AddApplicationInputProcessingConfiguration',
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
          .literal('KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: AddApplicationInputProcessingConfigurationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: AddApplicationInputProcessingConfigurationResponseSchema },
        },
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
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      484: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
    },
  })

export const postXAmzTargetKinesisAnalytics20180523AddApplicationOutputRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput',
  description:
    '<p>Adds an external destination to your SQL-based Kinesis Data Analytics application.</p> <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within your application to an external destination (such as an Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version.</p>',
  operationId: 'AddApplicationOutput',
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
        .literal('KinesisAnalytics_20180523.AddApplicationOutput')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20180523.AddApplicationOutput'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddApplicationOutputRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddApplicationOutputResponseSchema } },
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
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSourceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource',
    description:
      '<p>Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.</p> <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in an Amazon S3 object maps to columns in the resulting in-application table.</p>',
    operationId: 'AddApplicationReferenceDataSource',
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
          .literal('KinesisAnalytics_20180523.AddApplicationReferenceDataSource')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['KinesisAnalytics_20180523.AddApplicationReferenceDataSource'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AddApplicationReferenceDataSourceRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: AddApplicationReferenceDataSourceResponseSchema },
        },
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
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      484: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
    },
  })

export const postXAmzTargetKinesisAnalytics20180523AddApplicationVpcConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration',
    description:
      '<p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store and access resources securely.</p> <p>Note the following about VPC configurations for Kinesis Data Analytics applications:</p> <ul> <li> <p>VPC configurations are not supported for SQL applications.</p> </li> <li> <p>When a VPC is added to a Kinesis Data Analytics application, the application can no longer be accessed from the Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p> </li> </ul>',
    operationId: 'AddApplicationVpcConfiguration',
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
          .literal('KinesisAnalytics_20180523.AddApplicationVpcConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['KinesisAnalytics_20180523.AddApplicationVpcConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AddApplicationVpcConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AddApplicationVpcConfigurationResponseSchema } },
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
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      484: {
        description: 'InvalidApplicationConfigurationException',
        content: { 'application/json': { schema: InvalidApplicationConfigurationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetKinesisAnalytics20180523CreateApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication',
  description:
    'Creates a Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html">Creating an Application</a>.',
  operationId: 'CreateApplication',
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
        .literal('KinesisAnalytics_20180523.CreateApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20180523.CreateApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateApplicationResponseSchema } },
    },
    480: {
      description: 'CodeValidationException',
      content: { 'application/json': { schema: CodeValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    485: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    486: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    487: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrlRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl',
    description:
      "<p>Creates and returns a URL that you can use to connect to an application's extension.</p> <p>The IAM role or user used to call this API defines the permissions to access the extension. After the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request that attempts to connect to the extension. </p> <p>You control the amount of time that the URL will be valid using the <code>SessionExpirationDurationInSeconds</code> parameter. If you do not provide this parameter, the returned URL is valid for twelve hours.</p> <note> <p>The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes to be valid. If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.</p> </note>",
    operationId: 'CreateApplicationPresignedUrl',
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
          .literal('KinesisAnalytics_20180523.CreateApplicationPresignedUrl')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['KinesisAnalytics_20180523.CreateApplicationPresignedUrl'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateApplicationPresignedUrlRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateApplicationPresignedUrlResponseSchema } },
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
    },
  },
)

export const postXAmzTargetKinesisAnalytics20180523CreateApplicationSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot',
  description: "Creates a snapshot of the application's state data.",
  operationId: 'CreateApplicationSnapshot',
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
        .literal('KinesisAnalytics_20180523.CreateApplicationSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['KinesisAnalytics_20180523.CreateApplicationSnapshot'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateApplicationSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateApplicationSnapshotResponseSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    484: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    486: {
      description: 'InvalidApplicationConfigurationException',
      content: { 'application/json': { schema: InvalidApplicationConfigurationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523DeleteApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication',
  description:
    'Deletes the specified application. Kinesis Data Analytics halts application execution and deletes the application.',
  operationId: 'DeleteApplication',
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
        .literal('KinesisAnalytics_20180523.DeleteApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20180523.DeleteApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteApplicationResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    485: {
      description: 'InvalidApplicationConfigurationException',
      content: { 'application/json': { schema: InvalidApplicationConfigurationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOptionRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption',
    description:
      'Deletes an Amazon CloudWatch log stream from an Kinesis Data Analytics application. ',
    operationId: 'DeleteApplicationCloudWatchLoggingOption',
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
          .literal('KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DeleteApplicationCloudWatchLoggingOptionRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DeleteApplicationCloudWatchLoggingOptionResponseSchema },
        },
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
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      484: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      485: {
        description: 'InvalidApplicationConfigurationException',
        content: { 'application/json': { schema: InvalidApplicationConfigurationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration',
    description: 'Deletes an <a>InputProcessingConfiguration</a> from an input.',
    operationId: 'DeleteApplicationInputProcessingConfiguration',
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
          .literal('KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: DeleteApplicationInputProcessingConfigurationRequestSchema,
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: DeleteApplicationInputProcessingConfigurationResponseSchema,
          },
        },
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
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      484: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
    },
  })

export const postXAmzTargetKinesisAnalytics20180523DeleteApplicationOutputRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput',
  description:
    "Deletes the output destination configuration from your SQL-based Kinesis Data Analytics application's configuration. Kinesis Data Analytics will no longer write data from the corresponding in-application stream to the external output destination.",
  operationId: 'DeleteApplicationOutput',
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
        .literal('KinesisAnalytics_20180523.DeleteApplicationOutput')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20180523.DeleteApplicationOutput'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteApplicationOutputRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteApplicationOutputResponseSchema } },
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
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSourceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource',
    description:
      "<p>Deletes a reference data source configuration from the specified SQL-based Kinesis Data Analytics application's configuration.</p> <p>If the application is running, Kinesis Data Analytics immediately removes the in-application table that you created using the <a>AddApplicationReferenceDataSource</a> operation. </p>",
    operationId: 'DeleteApplicationReferenceDataSource',
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
          .literal('KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DeleteApplicationReferenceDataSourceRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DeleteApplicationReferenceDataSourceResponseSchema },
        },
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
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      484: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
    },
  })

export const postXAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot',
  description: 'Deletes a snapshot of application state.',
  operationId: 'DeleteApplicationSnapshot',
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
        .literal('KinesisAnalytics_20180523.DeleteApplicationSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['KinesisAnalytics_20180523.DeleteApplicationSnapshot'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteApplicationSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteApplicationSnapshotResponseSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration',
    description: 'Removes a VPC configuration from a Kinesis Data Analytics application.',
    operationId: 'DeleteApplicationVpcConfiguration',
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
          .literal('KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteApplicationVpcConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DeleteApplicationVpcConfigurationResponseSchema },
        },
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
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      484: {
        description: 'InvalidApplicationConfigurationException',
        content: { 'application/json': { schema: InvalidApplicationConfigurationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetKinesisAnalytics20180523DescribeApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication',
  description:
    '<p>Returns information about a specific Kinesis Data Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a>ListApplications</a> operation.</p>',
  operationId: 'DescribeApplication',
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
        .literal('KinesisAnalytics_20180523.DescribeApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20180523.DescribeApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeApplicationResponseSchema } },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot',
  description: 'Returns information about a snapshot of application state data.',
  operationId: 'DescribeApplicationSnapshot',
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
        .literal('KinesisAnalytics_20180523.DescribeApplicationSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['KinesisAnalytics_20180523.DescribeApplicationSnapshot'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeApplicationSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeApplicationSnapshotResponseSchema } },
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
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523DescribeApplicationVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion',
  description:
    '<p>Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the <a>ListApplicationVersions</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>',
  operationId: 'DescribeApplicationVersion',
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
        .literal('KinesisAnalytics_20180523.DescribeApplicationVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['KinesisAnalytics_20180523.DescribeApplicationVersion'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeApplicationVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeApplicationVersionResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523DiscoverInputSchemaRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema',
  description:
    '<p>Infers a schema for a SQL-based Kinesis Data Analytics application by evaluating sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose delivery stream) or Amazon S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. When you create an application using the Kinesis Data Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p>',
  operationId: 'DiscoverInputSchema',
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
        .literal('KinesisAnalytics_20180523.DiscoverInputSchema')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20180523.DiscoverInputSchema'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DiscoverInputSchemaRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DiscoverInputSchemaResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'UnableToDetectSchemaException',
      content: { 'application/json': { schema: UnableToDetectSchemaExceptionSchema } },
    },
    482: {
      description: 'ResourceProvisionedThroughputExceededException',
      content: {
        'application/json': { schema: ResourceProvisionedThroughputExceededExceptionSchema },
      },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    485: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523ListApplicationSnapshotsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots',
  description: 'Lists information about the current application snapshots.',
  operationId: 'ListApplicationSnapshots',
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
        .literal('KinesisAnalytics_20180523.ListApplicationSnapshots')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['KinesisAnalytics_20180523.ListApplicationSnapshots'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListApplicationSnapshotsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListApplicationSnapshotsResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523ListApplicationVersionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions',
  description:
    '<p>Lists all the versions for the specified application, including versions that were rolled back. The response also includes a summary of the configuration associated with each version.</p> <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>',
  operationId: 'ListApplicationVersions',
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
        .literal('KinesisAnalytics_20180523.ListApplicationVersions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20180523.ListApplicationVersions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListApplicationVersionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListApplicationVersionsResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523ListApplicationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.ListApplications',
  description:
    '<p>Returns a list of Kinesis Data Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. </p> <p>If you want detailed information about a specific application, use <a>DescribeApplication</a>.</p>',
  operationId: 'ListApplications',
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
        .literal('KinesisAnalytics_20180523.ListApplications')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20180523.ListApplications'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListApplicationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListApplicationsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource',
  description:
    'Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.',
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
        .literal('KinesisAnalytics_20180523.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20180523.ListTagsForResource'] },
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
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523RollbackApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication',
  description:
    '<p>Reverts the application to the previous running version. You can roll back an application if you suspect it is stuck in a transient status. </p> <p>You can roll back an application only if it is in the <code>UPDATING</code> or <code>AUTOSCALING</code> status.</p> <p>When you rollback an application, it loads state data from the last successful snapshot. If the application has no snapshots, Kinesis Data Analytics rejects the rollback request.</p> <p>This action is not supported for Kinesis Data Analytics for SQL applications.</p>',
  operationId: 'RollbackApplication',
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
        .literal('KinesisAnalytics_20180523.RollbackApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20180523.RollbackApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RollbackApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RollbackApplicationResponseSchema } },
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
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    485: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523StartApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.StartApplication',
  description:
    'Starts the specified Kinesis Data Analytics application. After creating an application, you must exclusively call this operation to start your application.',
  operationId: 'StartApplication',
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
        .literal('KinesisAnalytics_20180523.StartApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20180523.StartApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartApplicationResponseSchema } },
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
      description: 'InvalidApplicationConfigurationException',
      content: { 'application/json': { schema: InvalidApplicationConfigurationExceptionSchema } },
    },
    484: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523StopApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.StopApplication',
  description:
    '<p>Stops the application from processing data. You can stop an application only if it is in the running status, unless you set the <code>Force</code> parameter to <code>true</code>.</p> <p>You can use the <a>DescribeApplication</a> operation to find the application status. </p> <p>Kinesis Data Analytics takes a snapshot when the application is stopped, unless <code>Force</code> is set to <code>true</code>.</p>',
  operationId: 'StopApplication',
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
        .literal('KinesisAnalytics_20180523.StopApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20180523.StopApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopApplicationResponseSchema } },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidApplicationConfigurationException',
      content: { 'application/json': { schema: InvalidApplicationConfigurationExceptionSchema } },
    },
    485: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.TagResource',
  description:
    'Adds one or more key-value tags to a Kinesis Data Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.',
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
        .literal('KinesisAnalytics_20180523.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20180523.TagResource'] },
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
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    483: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.UntagResource',
  description:
    'Removes one or more tags from a Kinesis Data Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.',
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
        .literal('KinesisAnalytics_20180523.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20180523.UntagResource'] },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    483: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523UpdateApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication',
  description:
    "<p>Updates an existing Kinesis Data Analytics application. Using this operation, you can update application code, input configuration, and output configuration. </p> <p>Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update your application. </p> <note> <p>You cannot update the <code>RuntimeEnvironment</code> of an existing application. If you need to update an application's <code>RuntimeEnvironment</code>, you must delete the application and create it again.</p> </note>",
  operationId: 'UpdateApplication',
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
        .literal('KinesisAnalytics_20180523.UpdateApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20180523.UpdateApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateApplicationResponseSchema } },
    },
    480: {
      description: 'CodeValidationException',
      content: { 'application/json': { schema: CodeValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    485: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    486: {
      description: 'InvalidApplicationConfigurationException',
      content: { 'application/json': { schema: InvalidApplicationConfigurationExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration',
    description:
      '<p>Updates the maintenance configuration of the Kinesis Data Analytics application. </p> <p>You can invoke this operation on an application that is in one of the two following states: <code>READY</code> or <code>RUNNING</code>. If you invoke it when the application is in a state other than these two states, it throws a <code>ResourceInUseException</code>. The service makes use of the updated configuration the next time it schedules maintenance for the application. If you invoke this operation after the service schedules maintenance, the service will apply the configuration update the next time it schedules maintenance for the application. This means that you might not see the maintenance configuration update applied to the maintenance process that follows a successful invocation of this operation, but to the following maintenance process instead.</p> <p>To see the current maintenance configuration of your application, invoke the <a>DescribeApplication</a> operation.</p> <p>For information about application maintenance, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/maintenance.html">Kinesis Data Analytics for Apache Flink Maintenance</a>.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>',
    operationId: 'UpdateApplicationMaintenanceConfiguration',
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
          .literal('KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: UpdateApplicationMaintenanceConfigurationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: UpdateApplicationMaintenanceConfigurationResponseSchema },
        },
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
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      484: {
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })
