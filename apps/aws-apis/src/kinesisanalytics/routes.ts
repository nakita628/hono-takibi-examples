import { createRoute, z } from '@hono/zod-openapi'

const InAppStreamNameSchema = z.string().min(1).max(32).openapi('InAppStreamName')

const ResourceARNSchema = z
  .string()
  .regex(/arn:.*/)
  .min(1)
  .max(2048)
  .openapi('ResourceARN')

const RoleARNSchema = z
  .string()
  .regex(/arn:aws:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+/)
  .min(1)
  .max(2048)
  .openapi('RoleARN')

const InputLambdaProcessorSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that operates on records in the stream.</p> <note> <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a> </p> </note>',
        }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the IAM role that is used to access the AWS Lambda function.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceARN', 'RoleARN'],
    description:
      'An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda function. ',
  })
  .openapi('InputLambdaProcessor')

const InputProcessingConfigurationSchema = z
  .object({
    InputLambdaProcessor: InputLambdaProcessorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream before being processed by your application code.',
        }),
    ),
  })
  .openapi({
    required: ['InputLambdaProcessor'],
    description:
      'Provides a description of a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.',
  })
  .openapi('InputProcessingConfiguration')

const KinesisStreamsInputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'ARN of the input Amazon Kinesis stream to read.' }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceARN', 'RoleARN'],
    description:
      " Identifies an Amazon Kinesis stream as the streaming source. You provide the stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.",
  })
  .openapi('KinesisStreamsInput')

const KinesisFirehoseInputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'ARN of the input delivery stream.' }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to make sure that the role has the necessary permissions to access the stream.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceARN', 'RoleARN'],
    description:
      " Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.",
  })
  .openapi('KinesisFirehoseInput')

const InputParallelismCountSchema = z.int().min(1).max(64).openapi('InputParallelismCount')

const InputParallelismSchema = z
  .object({
    Count: InputParallelismCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'Number of in-application streams to create. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the number of in-application streams to create for a given streaming source. For information about parallelism, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. ',
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
                'Name prefix to use when creating an in-application stream. Suppose that you specify a prefix "MyInApplicationStream." Amazon Kinesis Analytics then creates one or more (as per the <code>InputParallelism</code> count you specified) in-application streams with names "MyInApplicationStream_001," "MyInApplicationStream_002," and so on. ',
            }),
        ),
        InputProcessingConfiguration: InputProcessingConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> for the input. An input processor transforms records as they are received from the stream, before the application\'s SQL code executes. Currently, the only input processing configuration available is <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a>.',
            }),
        ).exactOptional(),
        KinesisStreamsInput: KinesisStreamsInputSchema.and(
          z
            .any()
            .openapi({
              description:
                "<p>If the streaming source is an Amazon Kinesis stream, identifies the stream's Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.</p> <p>Note: Either <code>KinesisStreamsInput</code> or <code>KinesisFirehoseInput</code> is required.</p>",
            }),
        ).exactOptional(),
        KinesisFirehoseInput: KinesisFirehoseInputSchema.and(
          z
            .any()
            .openapi({
              description:
                "<p>If the streaming source is an Amazon Kinesis Firehose delivery stream, identifies the delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.</p> <p>Note: Either <code>KinesisStreamsInput</code> or <code>KinesisFirehoseInput</code> is required.</p>",
            }),
        ).exactOptional(),
        InputParallelism: InputParallelismSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>Describes the number of in-application streams to create. </p> <p>Data from your source is routed to these in-application input streams.</p> <p> (see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.</p>',
            }),
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
          'When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. ',
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
          'When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.',
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
            'When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RecordFormatType'],
    description:
      ' Describes the record format and relevant mapping information that should be applied to schematize the records on the stream. ',
  })
  .openapi('RecordFormat')

const RecordEncodingSchema = z.string().regex(/UTF-8/).openapi('RecordEncoding')

const RecordColumnNameSchema = z.string().openapi('RecordColumnName')

const RecordColumnMappingSchema = z.string().openapi('RecordColumnMapping')

const RecordColumnSqlTypeSchema = z.string().min(1).openapi('RecordColumnSqlType')

const RecordColumnSchema = z
  .object({
    Name: RecordColumnNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of the column created in the in-application input stream or reference table.',
        }),
    ),
    Mapping: RecordColumnMappingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Reference to the data element in the streaming input or the reference data source. This element is required if the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_RecordFormat.html#analytics-Type-RecordFormat-RecordFormatTypel">RecordFormatType</a> is <code>JSON</code>.',
        }),
    ).exactOptional(),
    SqlType: RecordColumnSqlTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Type of column created in the in-application input stream or reference table.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'SqlType'],
    description:
      '<p>Describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p>',
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
      z.any().openapi({ description: 'A list of <code>RecordColumn</code> objects.' }),
    ),
  })
  .openapi({
    required: ['RecordFormat', 'RecordColumns'],
    description:
      'Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.',
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
      z.any().openapi({ description: 'ARN of the destination Amazon Kinesis stream to write to.' }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. You need to grant the necessary permissions to this role.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceARN', 'RoleARN'],
    description:
      'When configuring application output, identifies an Amazon Kinesis stream as the destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the stream on your behalf.',
  })
  .openapi('KinesisStreamsOutput')

const KinesisFirehoseOutputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the destination Amazon Kinesis Firehose delivery stream to write to.',
        }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. You need to grant the necessary permissions to this role.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceARN', 'RoleARN'],
    description:
      'When configuring application output, identifies an Amazon Kinesis Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to write to the stream on your behalf.',
  })
  .openapi('KinesisFirehoseOutput')

const LambdaOutputSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Amazon Resource Name (ARN) of the destination Lambda function to write to.</p> <note> <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a> </p> </note>',
        }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function on your behalf. You need to grant the necessary permissions to this role. ',
        }),
    ),
  })
  .openapi({
    required: ['ResourceARN', 'RoleARN'],
    description:
      'When configuring application output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the function on your behalf. ',
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
      'Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>. ',
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
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the S3 bucket.' }),
    ),
    FileKey: FileKeySchema.and(
      z.any().openapi({ description: 'Object key name containing reference data.' }),
    ),
    ReferenceRoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that the service can assume to read data on your behalf. This role must have permission for the <code>s3:GetObject</code> action on the object and trust policy that allows Amazon Kinesis Analytics service principal to assume this role.',
        }),
    ),
  })
  .openapi({
    required: ['BucketARN', 'FileKey', 'ReferenceRoleARN'],
    description:
      '<p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.</p> <p>An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation to trigger reloading of data into your application.</p>',
  })
  .openapi('S3ReferenceDataSource')

type ReferenceDataSourceType = {
  TableName: z.infer<typeof InAppTableNameSchema> & { [key: string]: unknown }
  S3ReferenceDataSource?: z.infer<typeof S3ReferenceDataSourceSchema> & { [key: string]: unknown }
  ReferenceSchema: z.infer<typeof SourceSchemaSchema> & { [key: string]: unknown }
}

const IdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(50)
  .openapi('Id')

const InAppStreamNamesSchema = z.array(InAppStreamNameSchema).openapi('InAppStreamNames')

const InputLambdaProcessorDescriptionSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess the records in the stream.',
        }),
    ).exactOptional(),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the IAM role that is used to access the AWS Lambda function.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda expression.',
    required: [],
  })
  .openapi('InputLambdaProcessorDescription')

const InputProcessingConfigurationDescriptionSchema = z
  .object({
    InputLambdaProcessorDescription: InputLambdaProcessorDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides configuration information about the associated <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessorDescription.html">InputLambdaProcessorDescription</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.',
    required: [],
  })
  .openapi('InputProcessingConfigurationDescription')

const KinesisStreamsInputDescriptionSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the Amazon Kinesis stream.' }),
    ).exactOptional(),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Describes the Amazon Kinesis stream that is configured as the streaming source in the application input configuration. ',
    required: [],
  })
  .openapi('KinesisStreamsInputDescription')

const KinesisFirehoseInputDescriptionSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description: 'Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream.',
        }),
    ).exactOptional(),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics assumes to access the stream.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source in the application input configuration. ',
    required: [],
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
            '<p>The starting position on the stream.</p> <ul> <li> <p> <code>NOW</code> - Start reading just after the most recent record in the stream, start at the request time stamp that the customer issued.</p> </li> <li> <p> <code>TRIM_HORIZON</code> - Start reading at the last untrimmed record in the stream, which is the oldest record available in the stream. This option is not available for an Amazon Kinesis Firehose delivery stream.</p> </li> <li> <p> <code>LAST_STOPPED_POINT</code> - Resume reading from where the application last stopped reading.</p> </li> </ul>',
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
            '<p>The Amazon Resource Name (ARN) of the new <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess the records in the stream.</p> <note> <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a> </p> </note>',
        }),
    ).exactOptional(),
    RoleARNUpdate: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the new IAM role that is used to access the AWS Lambda function.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents an update to the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream.',
    required: [],
  })
  .openapi('InputLambdaProcessorUpdate')

const InputProcessingConfigurationUpdateSchema = z
  .object({
    InputLambdaProcessorUpdate: InputLambdaProcessorUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides update information for an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a>.',
        }),
    ),
  })
  .openapi({
    required: ['InputLambdaProcessorUpdate'],
    description:
      'Describes updates to an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a>. ',
  })
  .openapi('InputProcessingConfigurationUpdate')

const KinesisStreamsInputUpdateSchema = z
  .object({
    ResourceARNUpdate: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description: 'Amazon Resource Name (ARN) of the input Amazon Kinesis stream to read.',
        }),
    ).exactOptional(),
    RoleARNUpdate: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'When updating application input configuration, provides information about an Amazon Kinesis stream as the streaming source.',
    required: [],
  })
  .openapi('KinesisStreamsInputUpdate')

const KinesisFirehoseInputUpdateSchema = z
  .object({
    ResourceARNUpdate: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the input Amazon Kinesis Firehose delivery stream to read.',
        }),
    ).exactOptional(),
    RoleARNUpdate: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'When updating application input configuration, provides information about an Amazon Kinesis Firehose delivery stream as the streaming source.',
    required: [],
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
            'Specifies the encoding of the records in the streaming source. For example, UTF-8.',
        }),
    ).exactOptional(),
    RecordColumnUpdates: RecordColumnsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>RecordColumn</code> objects. Each object describes the mapping of the streaming source element to the corresponding column in the in-application stream. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: "Describes updates for the application's input schema.", required: [] })
  .openapi('InputSchemaUpdate')

const InputParallelismUpdateSchema = z
  .object({
    CountUpdate: InputParallelismCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'Number of in-application streams to create for the specified streaming source.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides updates to the parallelism count.', required: [] })
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

const RecordRowPathSchema = z.string().min(1).openapi('RecordRowPath')

const JSONMappingParametersSchema = z
  .object({
    RecordRowPath: RecordRowPathSchema.and(
      z.any().openapi({ description: 'Path to the top-level parent that contains the records.' }),
    ),
  })
  .openapi({
    required: ['RecordRowPath'],
    description:
      'Provides additional mapping information when JSON is the record format on the streaming source.',
  })
  .openapi('JSONMappingParameters')

const RecordRowDelimiterSchema = z.string().min(1).openapi('RecordRowDelimiter')

const RecordColumnDelimiterSchema = z.string().min(1).openapi('RecordColumnDelimiter')

const CSVMappingParametersSchema = z
  .object({
    RecordRowDelimiter: RecordRowDelimiterSchema.and(
      z
        .any()
        .openapi({
          description:
            "Row delimiter. For example, in a CSV format, <i>'\\n'</i> is the typical row delimiter.",
        }),
    ),
    RecordColumnDelimiter: RecordColumnDelimiterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.',
        }),
    ),
  })
  .openapi({
    required: ['RecordRowDelimiter', 'RecordColumnDelimiter'],
    description:
      '<p>Provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>\'\\n\'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p>',
  })
  .openapi('CSVMappingParameters')

type MappingParametersType = {
  JSONMappingParameters?: z.infer<typeof JSONMappingParametersSchema> & { [key: string]: unknown }
  CSVMappingParameters?: z.infer<typeof CSVMappingParametersSchema> & { [key: string]: unknown }
}

const KinesisStreamsOutputDescriptionSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the Amazon Kinesis stream.' }),
    ).exactOptional(),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' For an application output, describes the Amazon Kinesis stream configured as its destination. ',
    required: [],
  })
  .openapi('KinesisStreamsOutputDescription')

const KinesisFirehoseOutputDescriptionSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description: 'Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream.',
        }),
    ).exactOptional(),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' For an application output, describes the Amazon Kinesis Firehose delivery stream configured as its destination. ',
    required: [],
  })
  .openapi('KinesisFirehoseOutputDescription')

const LambdaOutputDescriptionSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({ description: 'Amazon Resource Name (ARN) of the destination Lambda function.' }),
    ).exactOptional(),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'For an application output, describes the AWS Lambda function configured as its destination. ',
    required: [],
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
            'Amazon Resource Name (ARN) of the Amazon Kinesis stream where you want to write the output.',
        }),
    ).exactOptional(),
    RoleARNUpdate: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis stream configured as the destination. ',
    required: [],
  })
  .openapi('KinesisStreamsOutputUpdate')

const KinesisFirehoseOutputUpdateSchema = z
  .object({
    ResourceARNUpdate: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream to write to.',
        }),
    ).exactOptional(),
    RoleARNUpdate: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis Firehose delivery stream configured as the destination. ',
    required: [],
  })
  .openapi('KinesisFirehoseOutputUpdate')

const LambdaOutputUpdateSchema = z
  .object({
    ResourceARNUpdate: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Amazon Resource Name (ARN) of the destination Lambda function.</p> <note> <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a> </p> </note>',
        }),
    ).exactOptional(),
    RoleARNUpdate: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function on your behalf. You need to grant the necessary permissions to this role. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an AWS Lambda function configured as the destination.',
    required: [],
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
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the S3 bucket.' }),
    ),
    FileKey: FileKeySchema.and(z.any().openapi({ description: 'Amazon S3 object key name.' })),
    ReferenceRoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf to populate the in-application reference table.',
        }),
    ),
  })
  .openapi({
    required: ['BucketARN', 'FileKey', 'ReferenceRoleARN'],
    description: 'Provides the bucket name and object key name that stores the reference data.',
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
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the S3 bucket.' }),
    ).exactOptional(),
    FileKeyUpdate: FileKeySchema.and(
      z.any().openapi({ description: 'Object key name.' }),
    ).exactOptional(),
    ReferenceRoleARNUpdate: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object and populate the in-application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.',
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

const AddApplicationCloudWatchLoggingOptionResponseSchema = z
  .object({})
  .openapi('AddApplicationCloudWatchLoggingOptionResponse')

const ApplicationNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(128)
  .openapi('ApplicationName')

const ApplicationVersionIdSchema = z.int().min(1).max(999999999).openapi('ApplicationVersionId')

const LogStreamARNSchema = z
  .string()
  .regex(/arn:.*/)
  .min(1)
  .max(2048)
  .openapi('LogStreamARN')

const CloudWatchLoggingOptionSchema = z
  .object({
    LogStreamARN: LogStreamARNSchema.and(
      z
        .any()
        .openapi({ description: 'ARN of the CloudWatch log to receive application messages.' }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role that is used must have the <code>PutLogEvents</code> policy action enabled.',
        }),
    ),
  })
  .openapi({
    required: ['LogStreamARN', 'RoleARN'],
    description:
      'Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN.',
  })
  .openapi('CloudWatchLoggingOption')

const AddApplicationCloudWatchLoggingOptionRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The Kinesis Analytics application name.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z.any().openapi({ description: 'The version ID of the Kinesis Analytics application.' }),
    ),
    CloudWatchLoggingOption: CloudWatchLoggingOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the CloudWatch log stream Amazon Resource Name (ARN) and the IAM role ARN. Note: To write application messages to CloudWatch, the IAM role that is used must have the <code>PutLogEvents</code> policy action enabled.',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'CurrentApplicationVersionId', 'CloudWatchLoggingOption'],
    title: 'AddApplicationCloudWatchLoggingOptionRequest',
  })
  .openapi('AddApplicationCloudWatchLoggingOptionRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const InvalidArgumentExceptionSchema = z.any().openapi('InvalidArgumentException')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const UnsupportedOperationExceptionSchema = z.any().openapi('UnsupportedOperationException')

const AddApplicationInputResponseSchema = z
  .object({})
  .openapi({ description: '<p/>' })
  .openapi('AddApplicationInputResponse')

const AddApplicationInputRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of your existing Amazon Kinesis Analytics application to which you want to add the streaming source.',
        }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Current version of your Amazon Kinesis Analytics application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version.',
        }),
    ),
    Input: InputSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_Input.html">Input</a> to add.',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'CurrentApplicationVersionId', 'Input'],
    title: 'AddApplicationInputRequest',
    description: '<p/>',
  })
  .openapi('AddApplicationInputRequest')

const CodeValidationExceptionSchema = z.any().openapi('CodeValidationException')

const AddApplicationInputProcessingConfigurationResponseSchema = z
  .object({})
  .openapi('AddApplicationInputProcessingConfigurationResponse')

const AddApplicationInputProcessingConfigurationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of the application to which you want to add the input processing configuration.',
        }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version of the application to which you want to add the input processing configuration. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current application version. If the version specified is not the current version, the <code>ConcurrentModificationException</code> is returned.',
        }),
    ),
    InputId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the input configuration to add the input processing configuration to. You can get a list of the input IDs for an application using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.',
        }),
    ),
    InputProcessingConfiguration: InputProcessingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to add to the application.',
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
  .object({})
  .openapi({ description: '<p/>' })
  .openapi('AddApplicationOutputResponse')

const OutputSchema: z.ZodType<OutputType> = z
  .lazy(() =>
    z
      .object({
        Name: InAppStreamNameSchema.and(
          z.any().openapi({ description: 'Name of the in-application stream.' }),
        ),
        KinesisStreamsOutput: KinesisStreamsOutputSchema.and(
          z
            .any()
            .openapi({ description: 'Identifies an Amazon Kinesis stream as the destination.' }),
        ).exactOptional(),
        KinesisFirehoseOutput: KinesisFirehoseOutputSchema.and(
          z
            .any()
            .openapi({
              description:
                'Identifies an Amazon Kinesis Firehose delivery stream as the destination.',
            }),
        ).exactOptional(),
        LambdaOutput: LambdaOutputSchema.and(
          z.any().openapi({ description: 'Identifies an AWS Lambda function as the destination.' }),
        ).exactOptional(),
        DestinationSchema: DestinationSchemaSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.',
            }),
        ),
      })
      .openapi({
        required: ['Name', 'DestinationSchema'],
        description:
          '<p> Describes application output configuration in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. </p> <p/> <p>For limits on how many destinations an application can write and other limitations, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p>',
      }),
  )
  .openapi('Output')

const AddApplicationOutputRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Name of the application to which you want to add the output configuration.',
        }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version of the application to which you want to add the output configuration. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current application version. If the version specified is not the current version, the <code>ConcurrentModificationException</code> is returned. ',
        }),
    ),
    Output: OutputSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, each describing one output configuration. In the output configuration, you specify the name of an in-application stream, a destination (that is, an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), and record the formation to use when writing to the destination.',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'CurrentApplicationVersionId', 'Output'],
    title: 'AddApplicationOutputRequest',
    description: '<p/>',
  })
  .openapi('AddApplicationOutputRequest')

const AddApplicationReferenceDataSourceResponseSchema = z
  .object({})
  .openapi({ description: '<p/>' })
  .openapi('AddApplicationReferenceDataSourceResponse')

const ReferenceDataSourceSchema: z.ZodType<ReferenceDataSourceType> = z
  .lazy(() =>
    z
      .object({
        TableName: InAppTableNameSchema.and(
          z.any().openapi({ description: 'Name of the in-application table to create.' }),
        ),
        S3ReferenceDataSource: S3ReferenceDataSourceSchema.and(
          z
            .any()
            .openapi({
              description:
                'Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf. An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <code>UpdateApplication</code> operation to trigger reloading of data into your application. ',
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
          'Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.',
      }),
  )
  .openapi('ReferenceDataSource')

const AddApplicationReferenceDataSourceRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'Name of an existing application.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version of the application for which you are adding the reference data source. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current application version. If the version specified is not the current version, the <code>ConcurrentModificationException</code> is returned.',
        }),
    ),
    ReferenceDataSource: ReferenceDataSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reference data source can be an object in your Amazon S3 bucket. Amazon Kinesis Analytics reads the object and copies the data into the in-application table that is created. You provide an S3 bucket, object key name, and the resulting in-application table that is created. You must also provide an IAM role with the necessary permissions that Amazon Kinesis Analytics can assume to read the object from your S3 bucket on your behalf.',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'CurrentApplicationVersionId', 'ReferenceDataSource'],
    title: 'AddApplicationReferenceDataSourceRequest',
    description: '<p/>',
  })
  .openapi('AddApplicationReferenceDataSourceRequest')

const ApplicationStatusSchema = z
  .enum(['DELETING', 'STARTING', 'STOPPING', 'READY', 'RUNNING', 'UPDATING'])
  .openapi('ApplicationStatus')

const ApplicationSummarySchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'Name of the application.' }),
    ),
    ApplicationARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'ARN of the application.' }),
    ),
    ApplicationStatus: ApplicationStatusSchema.and(
      z.any().openapi({ description: 'Status of the application.' }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'ApplicationARN', 'ApplicationStatus'],
    description:
      '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p>',
  })
  .openapi('ApplicationSummary')

const CreateApplicationResponseSchema = z
  .object({
    ApplicationSummary: ApplicationSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'In response to your <code>CreateApplication</code> request, Amazon Kinesis Analytics returns a response with a summary of the application it created, including the application Amazon Resource Name (ARN), name, and status.',
        }),
    ),
  })
  .openapi({ required: ['ApplicationSummary'], description: 'TBD' })
  .openapi('CreateApplicationResponse')

const ApplicationDescriptionSchema = z.string().min(0).max(1024).openapi('ApplicationDescription')

const InputsSchema = z.array(InputSchema).openapi('Inputs')

const OutputsSchema = z.array(OutputSchema).openapi('Outputs')

const CloudWatchLoggingOptionsSchema = z
  .array(CloudWatchLoggingOptionSchema)
  .openapi('CloudWatchLoggingOptions')

const ApplicationCodeSchema = z.string().min(0).max(102400).openapi('ApplicationCode')

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
      'A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.',
  })
  .openapi('Tag')

const TagsSchema = z.array(TagSchema).min(1).max(200).openapi('Tags')

const CreateApplicationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of your Amazon Kinesis Analytics application (for example, <code>sample-app</code>).',
        }),
    ),
    ApplicationDescription: ApplicationDescriptionSchema.and(
      z.any().openapi({ description: 'Summary description of the application.' }),
    ).exactOptional(),
    Inputs: InputsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Use this parameter to configure the application input.</p> <p>You can configure your application to receive input from a single streaming source. In this configuration, you map this streaming source to an in-application stream that is created. Your application code can then query the in-application stream like a table (you can think of it as a constantly updating table).</p> <p>For the streaming source, you provide its Amazon Resource Name (ARN) and format of data on the stream (for example, JSON, CSV, etc.). You also must provide an IAM role that Amazon Kinesis Analytics can assume to read this stream on your behalf.</p> <p>To create the in-application stream, you need to specify a schema to transform your data into a schematized version used in SQL. In the schema, you provide the necessary mapping of the data elements in the streaming source to record columns in the in-app stream.</p>',
        }),
    ).exactOptional(),
    Outputs: OutputsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You can configure application output to write data from any of the in-application streams to up to three destinations.</p> <p>These destinations can be Amazon Kinesis streams, Amazon Kinesis Firehose delivery streams, AWS Lambda destinations, or any combination of the three.</p> <p>In the configuration, you specify the in-application stream name, the destination stream or Lambda function Amazon Resource Name (ARN), and the format to use when writing data. You must also provide an IAM role that Amazon Kinesis Analytics can assume to write to the destination stream or Lambda function on your behalf.</p> <p>In the output configuration, you also provide the output stream or Lambda function ARN. For stream destinations, you provide the format of data in the stream (for example, JSON, CSV). You also must provide an IAM role that Amazon Kinesis Analytics can assume to write to the stream or Lambda function on your behalf.</p>',
        }),
    ).exactOptional(),
    CloudWatchLoggingOptions: CloudWatchLoggingOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this parameter to configure a CloudWatch log stream to monitor application configuration errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.',
        }),
    ).exactOptional(),
    ApplicationCode: ApplicationCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more SQL statements that read input data, transform it, and generate output. For example, you can write a SQL statement that reads data from one in-application stream, generates a running average of the number of advertisement clicks by vendor, and insert resulting rows in another in-application stream using pumps. For more information about the typical pattern, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-app-code.html">Application Code</a>. </p> <p>You can provide such series of SQL statements, where output of one statement can be used as the input for the next statement. You store intermediate results by creating in-application streams and pumps.</p> <p>Note that the application code must create the streams with names specified in the <code>Outputs</code>. For example, if your <code>Outputs</code> defines output streams named <code>ExampleOutputStream1</code> and <code>ExampleOutputStream2</code>, then your application code must create these streams. </p>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ApplicationName'], title: 'CreateApplicationRequest', description: 'TBD' })
  .openapi('CreateApplicationRequest')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const DeleteApplicationResponseSchema = z
  .object({})
  .openapi({ description: '<p/>' })
  .openapi('DeleteApplicationResponse')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const DeleteApplicationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({ description: 'Name of the Amazon Kinesis Analytics application to delete.' }),
    ),
    CreateTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' You can use the <code>DescribeApplication</code> operation to get this value. ',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'CreateTimestamp'],
    title: 'DeleteApplicationRequest',
    description: '<p/>',
  })
  .openapi('DeleteApplicationRequest')

const DeleteApplicationCloudWatchLoggingOptionResponseSchema = z
  .object({})
  .openapi('DeleteApplicationCloudWatchLoggingOptionResponse')

const DeleteApplicationCloudWatchLoggingOptionRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The Kinesis Analytics application name.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z.any().openapi({ description: 'The version ID of the Kinesis Analytics application.' }),
    ),
    CloudWatchLoggingOptionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>CloudWatchLoggingOptionId</code> of the CloudWatch logging option to delete. You can get the <code>CloudWatchLoggingOptionId</code> by using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation. ',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'CurrentApplicationVersionId', 'CloudWatchLoggingOptionId'],
    title: 'DeleteApplicationCloudWatchLoggingOptionRequest',
  })
  .openapi('DeleteApplicationCloudWatchLoggingOptionRequest')

const DeleteApplicationInputProcessingConfigurationResponseSchema = z
  .object({})
  .openapi('DeleteApplicationInputProcessingConfigurationResponse')

const DeleteApplicationInputProcessingConfigurationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The Kinesis Analytics application name.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z.any().openapi({ description: 'The version ID of the Kinesis Analytics application.' }),
    ),
    InputId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the input configuration from which to delete the input processing configuration. You can get a list of the input IDs for an application by using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'CurrentApplicationVersionId', 'InputId'],
    title: 'DeleteApplicationInputProcessingConfigurationRequest',
  })
  .openapi('DeleteApplicationInputProcessingConfigurationRequest')

const DeleteApplicationOutputResponseSchema = z
  .object({})
  .openapi({ description: '<p/>' })
  .openapi('DeleteApplicationOutputResponse')

const DeleteApplicationOutputRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'Amazon Kinesis Analytics application name.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Kinesis Analytics application version. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current application version. If the version specified is not the current version, the <code>ConcurrentModificationException</code> is returned. ',
        }),
    ),
    OutputId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the configuration to delete. Each output configuration that is added to the application, either when the application is created or later using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationOutput.html">AddApplicationOutput</a> operation, has a unique ID. You need to provide the ID to uniquely identify the output configuration that you want to delete from the application configuration. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the specific <code>OutputId</code>. ',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'CurrentApplicationVersionId', 'OutputId'],
    title: 'DeleteApplicationOutputRequest',
    description: '<p/>',
  })
  .openapi('DeleteApplicationOutputRequest')

const DeleteApplicationReferenceDataSourceResponseSchema = z
  .object({})
  .openapi('DeleteApplicationReferenceDataSourceResponse')

const DeleteApplicationReferenceDataSourceRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'Name of an existing application.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current application version. If the version specified is not the current version, the <code>ConcurrentModificationException</code> is returned.',
        }),
    ),
    ReferenceId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'ID of the reference data source. When you add a reference data source to your application using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a>, Amazon Kinesis Analytics assigns an ID. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the reference ID. ',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'CurrentApplicationVersionId', 'ReferenceId'],
    title: 'DeleteApplicationReferenceDataSourceRequest',
  })
  .openapi('DeleteApplicationReferenceDataSourceRequest')

const InputDescriptionSchema: z.ZodType<InputDescriptionType> = z
  .lazy(() =>
    z
      .object({
        InputId: IdSchema.and(
          z
            .any()
            .openapi({
              description:
                'Input ID associated with the application input. This is the ID that Amazon Kinesis Analytics assigns to each input configuration you add to your application. ',
            }),
        ).exactOptional(),
        NamePrefix: InAppStreamNameSchema.and(
          z.any().openapi({ description: 'In-application name prefix.' }),
        ).exactOptional(),
        InAppStreamNames: InAppStreamNamesSchema.and(
          z
            .any()
            .openapi({
              description:
                'Returns the in-application stream names that are mapped to the stream source.',
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
        KinesisStreamsInputDescription: KinesisStreamsInputDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                "If an Amazon Kinesis stream is configured as streaming source, provides Amazon Kinesis stream's Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.",
            }),
        ).exactOptional(),
        KinesisFirehoseInputDescription: KinesisFirehoseInputDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                "If an Amazon Kinesis Firehose delivery stream is configured as a streaming source, provides the delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.",
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
                'Describes the configured parallelism (number of in-application streams mapped to the streaming source).',
            }),
        ).exactOptional(),
        InputStartingPositionConfiguration: InputStartingPositionConfigurationSchema.and(
          z
            .any()
            .openapi({
              description:
                'Point at which the application is configured to read from the input stream.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Describes the application input configuration. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. ',
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
            .openapi({ description: 'Name of the in-application stream configured as output.' }),
        ).exactOptional(),
        KinesisStreamsOutputDescription: KinesisStreamsOutputDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes Amazon Kinesis stream configured as the destination where output is written.',
            }),
        ).exactOptional(),
        KinesisFirehoseOutputDescription: KinesisFirehoseOutputDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the Amazon Kinesis Firehose delivery stream configured as the destination where output is written.',
            }),
        ).exactOptional(),
        LambdaOutputDescription: LambdaOutputDescriptionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the AWS Lambda function configured as the destination where output is written.',
            }),
        ).exactOptional(),
        DestinationSchema: DestinationSchemaSchema.and(
          z.any().openapi({ description: 'Data format used for writing data to the destination.' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. ',
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
                'ID of the reference data source. This is the ID that Amazon Kinesis Analytics assigns when you add the reference data source to your application using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation.',
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
                'Provides the S3 bucket name, the object key name that contains the reference data. It also provides the Amazon Resource Name (ARN) of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object and populate the in-application reference table.',
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
        description: 'Describes the reference data source configured for an application.',
      }),
  )
  .openapi('ReferenceDataSourceDescription')

const ReferenceDataSourceDescriptionsSchema = z
  .array(ReferenceDataSourceDescriptionSchema)
  .openapi('ReferenceDataSourceDescriptions')

const CloudWatchLoggingOptionDescriptionSchema = z
  .object({
    CloudWatchLoggingOptionId: IdSchema.and(
      z.any().openapi({ description: 'ID of the CloudWatch logging option description.' }),
    ).exactOptional(),
    LogStreamARN: LogStreamARNSchema.and(
      z
        .any()
        .openapi({ description: 'ARN of the CloudWatch log to receive application messages.' }),
    ),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role used must have the <code>PutLogEvents</code> policy action enabled.',
        }),
    ),
  })
  .openapi({
    required: ['LogStreamARN', 'RoleARN'],
    description: 'Description of the CloudWatch logging option.',
  })
  .openapi('CloudWatchLoggingOptionDescription')

const CloudWatchLoggingOptionDescriptionsSchema = z
  .array(CloudWatchLoggingOptionDescriptionSchema)
  .openapi('CloudWatchLoggingOptionDescriptions')

const ApplicationDetailSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'Name of the application.' }),
    ),
    ApplicationDescription: ApplicationDescriptionSchema.and(
      z.any().openapi({ description: 'Description of the application.' }),
    ).exactOptional(),
    ApplicationARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'ARN of the application.' }),
    ),
    ApplicationStatus: ApplicationStatusSchema.and(
      z.any().openapi({ description: 'Status of the application.' }),
    ),
    CreateTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'Time stamp when the application version was created.' }),
    ).exactOptional(),
    LastUpdateTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'Time stamp when the application was last updated.' }),
    ).exactOptional(),
    InputDescriptions: InputDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the application input configuration. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. ',
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
    ReferenceDataSourceDescriptions: ReferenceDataSourceDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes reference data sources configured for the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. ',
        }),
    ).exactOptional(),
    CloudWatchLoggingOptionDescriptions: CloudWatchLoggingOptionDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the CloudWatch log streams that are configured to receive application messages. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>. ',
        }),
    ).exactOptional(),
    ApplicationCode: ApplicationCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the application code that you provided to perform data analysis on any of the in-application streams in your application.',
        }),
    ).exactOptional(),
    ApplicationVersionId: ApplicationVersionIdSchema.and(
      z.any().openapi({ description: 'Provides the current application version.' }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'ApplicationARN', 'ApplicationStatus', 'ApplicationVersionId'],
    description:
      '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p>',
  })
  .openapi('ApplicationDetail')

const DescribeApplicationResponseSchema = z
  .object({
    ApplicationDetail: ApplicationDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides a description of the application, such as the application Amazon Resource Name (ARN), status, latest version, and input and output configuration details.',
        }),
    ),
  })
  .openapi({ required: ['ApplicationDetail'], description: '<p/>' })
  .openapi('DescribeApplicationResponse')

const DescribeApplicationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'Name of the application.' }),
    ),
  })
  .openapi({
    required: ['ApplicationName'],
    title: 'DescribeApplicationRequest',
    description: '<p/>',
  })
  .openapi('DescribeApplicationRequest')

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
            'Schema inferred from the streaming source. It identifies the format of the data in the streaming source and how each data element maps to corresponding columns in the in-application stream that you can create.',
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
            'Stream data that was modified by the processor specified in the <code>InputProcessingConfiguration</code> parameter.',
        }),
    ).exactOptional(),
    RawInputRecords: RawInputRecordsSchema.and(
      z.any().openapi({ description: 'Raw stream data that was sampled to infer the schema.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DiscoverInputSchemaResponse')

const S3ConfigurationSchema = z
  .object({
    RoleARN: RoleARNSchema.and(
      z.any().openapi({ description: 'IAM ARN of the role used to access the data.' }),
    ),
    BucketARN: BucketARNSchema.and(
      z.any().openapi({ description: 'ARN of the S3 bucket that contains the data.' }),
    ),
    FileKey: FileKeySchema.and(
      z.any().openapi({ description: 'The name of the object that contains the data.' }),
    ),
  })
  .openapi({
    required: ['RoleARN', 'BucketARN', 'FileKey'],
    description:
      'Provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket, and the name of the Amazon S3 object that contains the data.',
  })
  .openapi('S3Configuration')

const DiscoverInputSchemaRequestSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the streaming source.' }),
    ).exactOptional(),
    RoleARN: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf.',
        }),
    ).exactOptional(),
    InputStartingPositionConfiguration: InputStartingPositionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Point at which you want Amazon Kinesis Analytics to start reading records from the specified streaming source discovery purposes.',
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
            'The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to use to preprocess the records before discovering the schema of the records.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DiscoverInputSchemaRequest', required: [] })
  .openapi('DiscoverInputSchemaRequest')

const UnableToDetectSchemaExceptionSchema = z.any().openapi('UnableToDetectSchemaException')

const ResourceProvisionedThroughputExceededExceptionSchema = z
  .any()
  .openapi('ResourceProvisionedThroughputExceededException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const ApplicationSummariesSchema = z.array(ApplicationSummarySchema).openapi('ApplicationSummaries')

const BooleanObjectSchema = z.boolean().openapi('BooleanObject')

const ListApplicationsResponseSchema = z
  .object({
    ApplicationSummaries: ApplicationSummariesSchema.and(
      z.any().openapi({ description: 'List of <code>ApplicationSummary</code> objects. ' }),
    ),
    HasMoreApplications: BooleanObjectSchema.and(
      z.any().openapi({ description: 'Returns true if there are more applications to retrieve.' }),
    ),
  })
  .openapi({ required: ['ApplicationSummaries', 'HasMoreApplications'], description: '<p/>' })
  .openapi('ListApplicationsResponse')

const ListApplicationsInputLimitSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('ListApplicationsInputLimit')

const ListApplicationsRequestSchema = z
  .object({
    Limit: ListApplicationsInputLimitSchema.and(
      z.any().openapi({ description: 'Maximum number of applications to list.' }),
    ).exactOptional(),
    ExclusiveStartApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "Name of the application to start the list with. When using pagination to retrieve the list, you don't need to specify this parameter in the first request. However, in subsequent requests, you add the last application name from the previous response to get the next page of applications.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListApplicationsRequest', description: '<p/>', required: [] })
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
  .regex(
    /arn:aws:kinesisanalytics:[a-z]\{2\}-[a-z]\+-\d\{1\}\+:\d\{12\}\+:application\/[a-zA-Z0-9_.-]\{1,128\}/,
  )
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

const StartApplicationResponseSchema = z
  .object({})
  .openapi({ description: '<p/>' })
  .openapi('StartApplicationResponse')

const InputConfigurationSchema = z
  .object({
    Id: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Input source ID. You can get this ID by calling the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.',
        }),
    ),
    InputStartingPositionConfiguration: InputStartingPositionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Point at which you want the application to start processing records from the streaming source.',
        }),
    ),
  })
  .openapi({
    required: ['Id', 'InputStartingPositionConfiguration'],
    description:
      'When you start your application, you provide this configuration, which identifies the input source and the point in the input source at which you want the application to start processing records.',
  })
  .openapi('InputConfiguration')

const InputConfigurationsSchema = z.array(InputConfigurationSchema).openapi('InputConfigurations')

const StartApplicationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'Name of the application.' }),
    ),
    InputConfigurations: InputConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies the specific input, by ID, that the application starts consuming. Amazon Kinesis Analytics starts reading the streaming source associated with the input. You can also specify where in the streaming source you want Amazon Kinesis Analytics to start reading.',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'InputConfigurations'],
    title: 'StartApplicationRequest',
    description: '<p/>',
  })
  .openapi('StartApplicationRequest')

const InvalidApplicationConfigurationExceptionSchema = z
  .any()
  .openapi('InvalidApplicationConfigurationException')

const StopApplicationResponseSchema = z
  .object({})
  .openapi({ description: '<p/>' })
  .openapi('StopApplicationResponse')

const StopApplicationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'Name of the running application to stop.' }),
    ),
  })
  .openapi({ required: ['ApplicationName'], title: 'StopApplicationRequest', description: '<p/>' })
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
            'The ARN of the Kinesis Analytics application from which to remove the tags.',
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

const UpdateApplicationResponseSchema = z.object({}).openapi('UpdateApplicationResponse')

const InputUpdateSchema: z.ZodType<InputUpdateType> = z
  .lazy(() =>
    z
      .object({
        InputId: IdSchema.and(
          z.any().openapi({ description: 'Input ID of the application input to be updated.' }),
        ),
        NamePrefixUpdate: InAppStreamNameSchema.and(
          z
            .any()
            .openapi({
              description:
                'Name prefix for in-application streams that Amazon Kinesis Analytics creates for the specific streaming source.',
            }),
        ).exactOptional(),
        InputProcessingConfigurationUpdate: InputProcessingConfigurationUpdateSchema.and(
          z
            .any()
            .openapi({ description: 'Describes updates for an input processing configuration.' }),
        ).exactOptional(),
        KinesisStreamsInputUpdate: KinesisStreamsInputUpdateSchema.and(
          z
            .any()
            .openapi({
              description:
                'If an Amazon Kinesis stream is the streaming source to be updated, provides an updated stream Amazon Resource Name (ARN) and IAM role ARN.',
            }),
        ).exactOptional(),
        KinesisFirehoseInputUpdate: KinesisFirehoseInputUpdateSchema.and(
          z
            .any()
            .openapi({
              description:
                'If an Amazon Kinesis Firehose delivery stream is the streaming source to be updated, provides an updated stream ARN and IAM role ARN.',
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
                'Describes the parallelism updates (the number in-application streams Amazon Kinesis Analytics creates for the specific streaming source).',
            }),
        ).exactOptional(),
      })
      .openapi({
        required: ['InputId'],
        description:
          'Describes updates to a specific input configuration (identified by the <code>InputId</code> of an application). ',
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
              description: 'Describes an Amazon Kinesis stream as the destination for the output.',
            }),
        ).exactOptional(),
        KinesisFirehoseOutputUpdate: KinesisFirehoseOutputUpdateSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes an Amazon Kinesis Firehose delivery stream as the destination for the output.',
            }),
        ).exactOptional(),
        LambdaOutputUpdate: LambdaOutputUpdateSchema.and(
          z
            .any()
            .openapi({
              description: 'Describes an AWS Lambda function as the destination for the output.',
            }),
        ).exactOptional(),
        DestinationSchemaUpdate: DestinationSchemaSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.',
            }),
        ).exactOptional(),
      })
      .openapi({
        required: ['OutputId'],
        description:
          ' Describes updates to the output configuration identified by the <code>OutputId</code>. ',
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
                'ID of the reference data source being updated. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get this value.',
            }),
        ),
        TableNameUpdate: InAppTableNameSchema.and(
          z
            .any()
            .openapi({ description: 'In-application table name that is created by this update.' }),
        ).exactOptional(),
        S3ReferenceDataSourceUpdate: S3ReferenceDataSourceUpdateSchema.and(
          z
            .any()
            .openapi({
              description:
                'Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.',
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
          'When you update a reference data source configuration for an application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.',
      }),
  )
  .openapi('ReferenceDataSourceUpdate')

const ReferenceDataSourceUpdatesSchema = z
  .array(ReferenceDataSourceUpdateSchema)
  .openapi('ReferenceDataSourceUpdates')

const CloudWatchLoggingOptionUpdateSchema = z
  .object({
    CloudWatchLoggingOptionId: IdSchema.and(
      z.any().openapi({ description: 'ID of the CloudWatch logging option to update' }),
    ),
    LogStreamARNUpdate: LogStreamARNSchema.and(
      z
        .any()
        .openapi({ description: 'ARN of the CloudWatch log to receive application messages.' }),
    ).exactOptional(),
    RoleARNUpdate: RoleARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role used must have the <code>PutLogEvents</code> policy action enabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CloudWatchLoggingOptionId'],
    description: 'Describes CloudWatch logging option updates.',
  })
  .openapi('CloudWatchLoggingOptionUpdate')

const CloudWatchLoggingOptionUpdatesSchema = z
  .array(CloudWatchLoggingOptionUpdateSchema)
  .openapi('CloudWatchLoggingOptionUpdates')

const ApplicationUpdateSchema = z
  .object({
    InputUpdates: InputUpdatesSchema.and(
      z.any().openapi({ description: 'Describes application input configuration updates.' }),
    ).exactOptional(),
    ApplicationCodeUpdate: ApplicationCodeSchema.and(
      z.any().openapi({ description: 'Describes application code updates.' }),
    ).exactOptional(),
    OutputUpdates: OutputUpdatesSchema.and(
      z.any().openapi({ description: 'Describes application output configuration updates.' }),
    ).exactOptional(),
    ReferenceDataSourceUpdates: ReferenceDataSourceUpdatesSchema.and(
      z.any().openapi({ description: 'Describes application reference data source updates.' }),
    ).exactOptional(),
    CloudWatchLoggingOptionUpdates: CloudWatchLoggingOptionUpdatesSchema.and(
      z.any().openapi({ description: 'Describes application CloudWatch logging option updates.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes updates to apply to an existing Amazon Kinesis Analytics application.',
    required: [],
  })
  .openapi('ApplicationUpdate')

const UpdateApplicationRequestSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({ description: 'Name of the Amazon Kinesis Analytics application to update.' }),
    ),
    CurrentApplicationVersionId: ApplicationVersionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current application version ID. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get this value.',
        }),
    ),
    ApplicationUpdate: ApplicationUpdateSchema.and(
      z.any().openapi({ description: 'Describes application updates.' }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'CurrentApplicationVersionId', 'ApplicationUpdate'],
    title: 'UpdateApplicationRequest',
  })
  .openapi('UpdateApplicationRequest')

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

export const postXAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOptionRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption',
    description:
      '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a CloudWatch log stream to monitor application configuration errors. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>',
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
          .literal('KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption'],
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
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetKinesisAnalytics20150814AddApplicationInputRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput',
  description:
    '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Adds a streaming source to your Amazon Kinesis application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p> <p>You can add a streaming source either when you create an application or you can use this operation to add a streaming source after you create an application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html">CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationInput</code> action.</p>',
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
        .literal('KinesisAnalytics_20150814.AddApplicationInput')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20150814.AddApplicationInput'] },
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
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration',
    description:
      '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to an application. An input processor preprocesses records on the input stream before the application\'s SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>',
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
          .literal('KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration'],
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
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetKinesisAnalytics20150814AddApplicationOutputRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput',
  description:
    '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an external destination to your Amazon Kinesis Analytics application.</p> <p>If you want Amazon Kinesis Analytics to deliver data from an in-application stream within your application to an external destination (such as an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Understanding Application Output (Destination)</a>. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version.</p> <p>For the limits on the number of application inputs and outputs you can configure, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action.</p>',
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
        .literal('KinesisAnalytics_20150814.AddApplicationOutput')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20150814.AddApplicationOutput'] },
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
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSourceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource',
    description:
      '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a reference data source to an existing application.</p> <p>Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table.</p> <p> For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. For the limits on data sources you can add to your application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action. </p>',
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
          .literal('KinesisAnalytics_20150814.AddApplicationReferenceDataSource')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['KinesisAnalytics_20150814.AddApplicationReferenceDataSource'],
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
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetKinesisAnalytics20150814CreateApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication',
  description:
    '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Creates an Amazon Kinesis Analytics application. You can configure each application with one streaming source as input, application code to process the input, and up to three destinations where you want Amazon Kinesis Analytics to write the output data from your application. For an overview, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html">How it Works</a>. </p> <p>In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a data element in the streaming source.</p> <p>Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps.</p> <p>In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to three destinations.</p> <p> To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the <code>kinesisanalytics:CreateApplication</code> action. </p> <p> For introductory exercises to create an Amazon Kinesis Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/getting-started.html">Getting Started</a>. </p>',
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
        .literal('KinesisAnalytics_20150814.CreateApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20150814.CreateApplication'] },
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
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    485: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20150814DeleteApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication',
  description:
    '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes the specified application. Amazon Kinesis Analytics halts application execution and deletes the application, including any application artifacts (such as in-application streams, reference table, and application code).</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplication</code> action.</p>',
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
        .literal('KinesisAnalytics_20150814.DeleteApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20150814.DeleteApplication'] },
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
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOptionRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption',
    description:
      '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a CloudWatch log stream from an application. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>',
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
          .literal('KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption'],
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
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration',
    description:
      '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> from an input.</p>',
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
          .literal('KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration'],
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
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetKinesisAnalytics20150814DeleteApplicationOutputRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput',
  description:
    '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplicationOutput</code> action.</p>',
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
        .literal('KinesisAnalytics_20150814.DeleteApplicationOutput')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20150814.DeleteApplicationOutput'] },
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
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSourceRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource',
    description:
      '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a reference data source configuration from the specified application configuration.</p> <p>If the application is running, Amazon Kinesis Analytics immediately removes the in-application table that you created using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics.DeleteApplicationReferenceDataSource</code> action.</p>',
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
          .literal('KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource'],
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
        description: 'UnsupportedOperationException',
        content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetKinesisAnalytics20150814DescribeApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication',
  description:
    '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns information about a specific Amazon Kinesis Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html">ListApplications</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DescribeApplication</code> action. You can use <code>DescribeApplication</code> to get the current application versionId, which you need to call other operations such as <code>Update</code>. </p>',
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
        .literal('KinesisAnalytics_20150814.DescribeApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20150814.DescribeApplication'] },
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
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20150814DiscoverInputSchemaRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema',
  description:
    '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Infers a schema by evaluating sample records on the specified streaming source (Amazon Kinesis stream or Amazon Kinesis Firehose delivery stream) or S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. Note that when you create an application using the Amazon Kinesis Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:DiscoverInputSchema</code> action. </p>',
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
        .literal('KinesisAnalytics_20150814.DiscoverInputSchema')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20150814.DiscoverInputSchema'] },
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
  },
})

export const postXAmzTargetKinesisAnalytics20150814ListApplicationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20150814.ListApplications',
  description:
    '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns a list of Amazon Kinesis Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. If the response returns the <code>HasMoreApplications</code> value as true, you can send another request by adding the <code>ExclusiveStartApplicationName</code> in the request body, and set the value of this to the last application name from the previous response. </p> <p>If you want detailed information about a specific application, use <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:ListApplications</code> action.</p>',
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
        .literal('KinesisAnalytics_20150814.ListApplications')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20150814.ListApplications'] },
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
  },
})

export const postXAmzTargetKinesisAnalytics20150814ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource',
  description:
    'Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.',
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
        .literal('KinesisAnalytics_20150814.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20150814.ListTagsForResource'] },
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

export const postXAmzTargetKinesisAnalytics20150814StartApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20150814.StartApplication',
  description:
    '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application.</p> <p>After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination.</p> <p> The application status must be <code>READY</code> for you to start an application. You can get the application status in the console or using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p> <p>After you start the application, you can stop the application from processing the input by calling the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html">StopApplication</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StartApplication</code> action.</p>',
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
        .literal('KinesisAnalytics_20150814.StartApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20150814.StartApplication'] },
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
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20150814StopApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20150814.StopApplication',
  description:
    '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Stops the application from processing input data. You can stop an application only if it is in the running state. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the application state. After the application is stopped, Amazon Kinesis Analytics stops reading data from the input, the application stops processing data, and there is no output written to the destination. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StopApplication</code> action.</p>',
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
        .literal('KinesisAnalytics_20150814.StopApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20150814.StopApplication'] },
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
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetKinesisAnalytics20150814TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20150814.TagResource',
  description:
    'Adds one or more key-value tags to a Kinesis Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.',
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
        .literal('KinesisAnalytics_20150814.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20150814.TagResource'] },
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

export const postXAmzTargetKinesisAnalytics20150814UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20150814.UntagResource',
  description:
    'Removes one or more tags from a Kinesis Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.',
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
        .literal('KinesisAnalytics_20150814.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20150814.UntagResource'] },
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

export const postXAmzTargetKinesisAnalytics20150814UpdateApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication',
  description:
    '<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Updates an existing Amazon Kinesis Analytics application. Using this API, you can update application code, input configuration, and output configuration. </p> <p>Note that Amazon Kinesis Analytics updates the <code>CurrentApplicationVersionId</code> each time you update your application. </p> <p>This operation requires permission for the <code>kinesisanalytics:UpdateApplication</code> action.</p>',
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
        .literal('KinesisAnalytics_20150814.UpdateApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['KinesisAnalytics_20150814.UpdateApplication'] },
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
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
  },
})
